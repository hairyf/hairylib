#[cfg(test)]
mod tests {
    use hairy::r#util::r#loop::{LoopFlow, loop_fn, loop_return};
    use std::sync::Arc;
    use std::sync::atomic::{AtomicU32, Ordering};
    use tokio::time::{sleep, Duration};

    #[tokio::test]
    async fn test_loop_fn() {
        let mut iteration = 0;
        let _cancel = loop_fn(move || {
            iteration += 1;
            println!("iteration: {}", iteration);
            async move {
                if iteration < 3 {
                    LoopFlow::Continue(10) // 继续循环，延迟10ms
                } else {
                    LoopFlow::Break(()) // 第3次后退出
                }
            }
        });

        // 等待循环执行完成
        sleep(Duration::from_millis(100)).await;
        
        // 测试取消功能
        let counter2 = Arc::new(AtomicU32::new(0));
        let counter2_clone = counter2.clone();
        
        let cancel2 = loop_fn(move || {
            let counter = counter2_clone.clone();
            async move {
                counter.fetch_add(1, Ordering::SeqCst);
                LoopFlow::Continue(50) // 持续循环
            }
        });

        // 等待一小段时间让循环执行几次
        sleep(Duration::from_millis(120)).await;
        let count_before_cancel = counter2.load(Ordering::SeqCst);
        assert!(count_before_cancel > 0, "循环应该已经执行了至少一次");
        
        // 取消循环
        cancel2();
        
        // 等待一段时间确保循环已停止
        sleep(Duration::from_millis(200)).await;
        let count_after_cancel = counter2.load(Ordering::SeqCst);
        
        // 取消后计数器不应该再增加
        assert_eq!(count_before_cancel, count_after_cancel, "取消后循环应该停止");
    }

    #[tokio::test]
    async fn test_loop_return() {
        // 测试基本循环返回值
        let counter = Arc::new(AtomicU32::new(0));
        let counter_clone = counter.clone();
        let result = loop_return(move || {
            let counter = counter_clone.clone();
            async move {
                let current = counter.fetch_add(1, Ordering::SeqCst) + 1;
                if current < 5 {
                    LoopFlow::Continue(10) // 继续循环，延迟10ms
                } else {
                    LoopFlow::Break(42) // 第5次后返回42
                }
            }
        });
        
        assert_eq!(result.await, 42);
        assert_eq!(counter.load(Ordering::SeqCst), 5);

        // 测试立即返回
        let result2 = loop_return(move || {
            async move {
                LoopFlow::Break("立即返回".to_string())
            }
        }).await;
        
        assert_eq!(result2, "立即返回");

        // 测试多次循环后返回字符串
        let iteration = Arc::new(AtomicU32::new(0));
        let iteration_clone = iteration.clone();
        let result3 = loop_return(move || {
            let iteration = iteration_clone.clone();
            async move {
                let current = iteration.fetch_add(1, Ordering::SeqCst) + 1;
                if current < 3 {
                    LoopFlow::Continue(5)
                } else {
                    LoopFlow::Break(format!("完成于第{}次迭代", current))
                }
            }
        }).await;
        
        assert_eq!(result3, "完成于第3次迭代");
        assert_eq!(iteration.load(Ordering::SeqCst), 3);
    }
}
