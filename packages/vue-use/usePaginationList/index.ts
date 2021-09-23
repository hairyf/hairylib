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
import { usePromise, UsePromiseResult } from '../usePromise'

export interface PaginationListOptions<T> extends PaginationOptions, WatchOptions {
  /**
   * 获取列表方法
   */
  get: (options: UnwrapNestedRefs<PaginationResult>) => T | Promise<T>
  /**
   * 监听源, 当源数据改变触发 reset
   */
  sources?: any[]
}

export interface PaginationListOptionsResult<T> extends PaginationResult {
  /**
   * 当前是否在加载
   */
  loading: UsePromiseResult<any>['loading']
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

  const { exec, loading } = usePromise(async () => {
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

  return { reset, loading, list, ...pagination }
}
