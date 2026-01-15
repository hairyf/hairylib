use std::future::Future;
use tokio::time::{Duration, sleep};

pub enum LoopFlow<T> {
    Continue(u64),
    Break(T),
}

pub fn loop_fn<F, Fut>(f: F) -> impl FnOnce()
where
    F: Fn() -> Fut + Send + Sync + 'static,
    Fut: Future<Output = LoopFlow<()>> + Send,
{
    let token = tokio_util::sync::CancellationToken::new();
    let cloned_token = token.clone();
    tokio::spawn(async move {
        loop {
            tokio::select! {
                _ = cloned_token.cancelled() => break, // 立即响应取消
                flow = f() => {
                    match flow {
                        LoopFlow::Continue(ms) => {
                            // 同时监听 sleep 和取消信号
                            tokio::select! {
                                _ = cloned_token.cancelled() => break,
                                _ = sleep(Duration::from_millis(ms)) => {}
                            }
                        }
                        LoopFlow::Break(_) => break,
                    }
                }
            }
        }
    });

    move || token.cancel()
}

pub async fn loop_return<F, Fut, T>(mut logic: F) -> T
where
    F: FnMut() -> Fut + Send + 'static,
    Fut: std::future::Future<Output = LoopFlow<T>> + Send,
{
    loop {
        match logic().await {
            LoopFlow::Continue(delay_ms) => sleep(Duration::from_millis(delay_ms)).await,
            LoopFlow::Break(result) => return result,
        }
    }
}
