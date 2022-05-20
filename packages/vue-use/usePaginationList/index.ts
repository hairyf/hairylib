/*
 * @Author: Mr.Mao
 * @Date: 2021-08-12 08:57:49
 * @LastEditTime: 2021-08-12 09:01:21
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { nextTick, reactive, Ref, ref, watch, WatchOptions } from 'vue-demi'
import { PaginationOptions, PaginationResult, usePagination } from '../usePagination'
import { UnwrapNestedRefs } from '@vue/reactivity'
import { useAsyncState } from '@vueuse/core'

export interface PaginationListOptions<T> extends PaginationOptions, WatchOptions {
  /**
   * 获取列表方法
   */
  resolve: (options: UnwrapNestedRefs<PaginationResult>) => T | Promise<T>
  /**
   * 监听源, 当源数据改变触发 reset
   */
  sources?: any[]
}

export interface PaginationListOptionsResult<T> extends PaginationResult {
  /**
   * 当前是否在加载
   */
  isLoading: Ref<boolean>
  /**
   * 重置列表
   */
  reset: () => Promise<void>
  /**
   * 列表
   */
  list: Ref<T>
}

export const usePaginationList = <T extends Array<any>>(
  options: PaginationListOptions<T>
): PaginationListOptionsResult<T> => {
  const pagination = usePagination(options)
  const list = ref<any>([]) as Ref<T>

  const { execute, isLoading } = useAsyncState(
    async () => {
      const result = await options.resolve(reactive(pagination))
      return result || []
    },
    [] as never,
    { immediate: false }
  )

  const reset = async () => {
    list.value = await execute()
  }

  nextTick(() => {
    const watchTarget = [pagination.currentPage, pagination.pageSize, ...(options.sources || [])]
    watch(watchTarget, reset, { immediate: true, ...options })
  })

  return { reset, isLoading, list, ...pagination }
}
