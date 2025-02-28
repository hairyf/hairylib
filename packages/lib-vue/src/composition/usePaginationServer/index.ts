import type { UseOffsetPaginationOptions, UseOffsetPaginationReturn } from '@vueuse/core'
import { useAsyncState, useOffsetPagination } from '@vueuse/core'
import type { Ref, UnwrapRef, WatchOptions } from 'vue'
import { nextTick, reactive, ref, watch } from 'vue'
import type { DebouncedFunc } from 'lodash'
import debounce from 'lodash/debounce'

export type UseServerPaginationResolve = UnwrapRef<
  Pick<UseOffsetPaginationReturn, 'currentPage' | 'currentPageSize'> & { total: number }
>
export type UseServerPagination = UnwrapRef<Omit<UseOffsetPaginationReturn, 'next' | 'prev'> & { total: Ref<number> }>

export interface UseServerPaginationOptions<T> extends UseOffsetPaginationOptions, WatchOptions {
  resolve: (pagination: UseServerPaginationResolve) => T | Promise<T>
  /** 监听源, 当源数据改变触发 reset, 默认监听 pagination */
  sources?: any[]
}
export interface UseServerPaginationReturn<T> {
  state: Ref<T>
  loading: Ref<boolean>
  error: Ref<any>
  pagination: UseServerPagination
  next: () => void
  prev: () => void
  execute: DebouncedFunc<() => Promise<void>>
}

export function useServerPagination<T extends any[]>(options: UseServerPaginationOptions<T>): UseServerPaginationReturn<T> {
  const total = ref(Infinity)
  const pagination = useOffsetPagination({ total, ...options }) as UseOffsetPaginationReturn
  const resolveOptions = reactive({
    currentPage: pagination.currentPage,
    currentPageSize: pagination.currentPageSize,
    total,
  })

  const paginationRef = reactive({
    currentPage: pagination.currentPage,
    currentPageSize: pagination.currentPageSize,
    pageCount: pagination.pageCount,
    isFirstPage: pagination.isFirstPage,
    isLastPage: pagination.isLastPage,
    total,
  })

  const state = ref<any>([]) as Ref<T>
  const {
    execute: _execute,
    isLoading: loading,
    error,
  } = useAsyncState(async () => {
    const resolved = await options.resolve(resolveOptions)
    return resolved
  }, [] as unknown as T)

  const execute = debounce(async () => {
    state.value = await _execute()
  }, 100)

  nextTick(() => {
    watch([pagination.currentPageSize, ...(options.sources || [])], execute, { immediate: true, ...options })
    watch(pagination.currentPage, (newValue, oldValue) => newValue !== oldValue && execute())
  })

  return {
    state,
    loading,
    error,
    execute,
    pagination: paginationRef,
    next: pagination.next,
    prev: pagination.prev,
  }
}
