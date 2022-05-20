/*
 * @Author: Mr.Mao
 * @Date: 2021-08-12 08:57:49
 * @LastEditTime: 2021-08-12 09:01:21
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { nextTick, Ref, ref, watch, WatchOptions } from 'vue-demi'
import { usePromise, UsePromiseResult } from '../usePromise'

export interface PaginationListSpliceOptions<T> extends WatchOptions {
  /**
   * 获取列表方法
   */
  get: (page: number) => T | Promise<T>
  /**
   * 监听源, 当源数据改变触发 reset
   */
  sources?: any[]
}

export interface PaginationListOptionSpliceResult<T> {
  /**
   * 当前是否在加载
   */
  loading: UsePromiseResult<any>['loading']
  /**
   * 重置列表
   */
  reset: () => Promise<void>
  /**
   * 下一页, 自动拼接数据
   */
  next: () => Promise<void>
  /**
   * 列表
   */
  list: Ref<T>
  /**
   * 是否拼接完毕
   */
  end: Ref<boolean>
}
export const usePaginationListSplice = <T extends Array<any>>(
  options: PaginationListSpliceOptions<T>
): PaginationListOptionSpliceResult<T> => {
  const list = ref<any>([]) as Ref<T>
  const currentPage = ref(0)
  const end = ref(false)

  const { exec, loading } = usePromise(async () => {
    return (await options.get(currentPage.value)) || []
  })

  const reset = async () => {
    end.value = false
    currentPage.value = 1
    list.value = await exec()
  }
  const next = async () => {
    if (end.value) return
    currentPage.value++
    const splice = await exec()
    if (!splice?.length) {
      end.value = true
      return
    }
    list.value = [...list.value, ...splice] as any
  }

  nextTick(() => {
    const watchTarget = [...(options.sources || [])]
    watch(watchTarget, reset, { immediate: true, ...options })
  })

  return { reset, next, loading, list, end }
}
