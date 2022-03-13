import { MaybeRef } from '@vueuse/shared'
import { isArray } from 'lodash'
import { computed, ComputedRef, ref, unref } from 'vue-demi'
import { PaginationOptions, PaginationResult, usePagination } from '../usePagination'

export type PaginationArrayOptions = Partial<Omit<PaginationOptions, 'total'>>

export interface PaginationArrayResult<T extends Array<any>> extends PaginationResult {
  result: ComputedRef<T>
}

export const usePaginationArray = <T extends Array<any>>(array: MaybeRef<T>, options: PaginationArrayOptions): PaginationArrayResult<T> => {
  const arrayRef = ref(array)
  const pagination = usePagination({
    ...{ currentPage: 1, pageSize: 10 },
    ...options,
    total: computed(() => arrayRef.value.length)
  })

  const result = computed(() => {
    const { offset, pageSize } = pagination
    const array = unref(arrayRef)
    if (!isArray(array)) return []
    return array.slice(offset.value, offset.value + pageSize.value)
  }) as ComputedRef<T>

  return { result, ...pagination }
}
