import { nextTick, reactive, Ref, ref, watch, WatchOptions } from 'vue-demi'
import { PaginationOptions, PaginationResult, usePagination } from '../usePagination'
import { UnwrapNestedRefs } from '@vue/reactivity'
import { usePromise, UsePromiseResult } from '../usePromise'

export interface PaginationOptionsList<T> extends PaginationOptions, WatchOptions {
  /**
   * 获取列表方法
   */
  get: (options: UnwrapNestedRefs<PaginationResult>) => T | Promise<T>
  /**
   * 监听源, 当源数据改变触发 reset
   */
  sources?: any[]
}

export interface PaginationOptionsListResult<T> extends PaginationResult {
  /**
   * 当前是否在加载
   */
  loading: UsePromiseResult<any>['loading']
  /**
   * 请求发生错误
   */
  error: UsePromiseResult<any>['error']
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
  options: PaginationOptionsList<T>
): PaginationOptionsListResult<T> => {
  const pagination = usePagination(options)
  const list = ref<any>([]) as Ref<T>

  const { exec, loading, error } = usePromise(async () => {
    try {
      return await options.get(reactive(pagination))
    } catch (error) {
      console.error(error)
      return (<any[]>[]) as T
    }
  })

  const reset = async () => {
    list.value = await exec()
  }
  nextTick(() => {
    const watchTarget = [pagination.currentPage, pagination.pageSize, ...(options.sources || [])]
    watch(watchTarget, reset, { immediate: true, ...options })
  })

  return {
    loading,
    error,
    reset,
    ...pagination,
    list
  }
}
