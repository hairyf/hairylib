import { MaybeRef } from '@vueuse/core'
import { clamp, isNumber } from 'lodash-es'
import { computed, Ref, ref } from 'vue-demi'

export type PaginationControl = () => void

export interface PaginationResult {
  /**
   * @reactive
   * Current page size
   */
  pageSize: Ref<number>
  /**
   * Total number of items
   */
  total: Ref<number>

  /**
   * @reactive
   * Current page
   */
  currentPage: Ref<number>

  /**
   * @reactive
   * Current offset
   */
  offset: Ref<number>

  /**
   * @readonly
   * Last page number
   */
  lastPage: Readonly<Ref<number>>

  /**
   * go next page
   */
  next: PaginationControl
  /**
   * go prev page
   */
  prev: PaginationControl
  /**
   * go first page
   */
  first: PaginationControl
  /**
   * go last page
   */
  last: PaginationControl
}

export interface PaginationOptions {
  /**
   * @reactive
   * Page size
   */
  pageSize?: MaybeRef<number>
  /**
   * @reactive
   * Total number of pages
   */
  total?: MaybeRef<number>
  /**
   * @reactive
   * Starting page
   */
  currentPage?: MaybeRef<number>
}

/**
 * Create a pagination controller based on the arguments
 * @param options -
 */
export const usePagination = (options: PaginationOptions): PaginationResult => {
  const _currentPage = ref(options.currentPage || 1)
  const _offset = ref(0)
  const total = ref(options.total || 0)
  const pageSize = ref(options.pageSize || 0)

  const lastPage = computed(() => Math.ceil(total.value / pageSize.value))

  const offset = computed<number>({
    get: () => _offset.value,
    set: (v) => isNumber(v) && (_offset.value = Math.min(v, total.value))
  })

  const currentPage = computed<number>({
    get: () => _currentPage.value,
    set: (v) => {
      if (isNumber(v)) {
        _currentPage.value = clamp(v, 1, lastPage.value)
      }
    }
  })
  currentPage.value = _currentPage.value

  const prev = () => --currentPage.value
  const next = () => ++currentPage.value
  const first = () => (currentPage.value = 1)
  const last = () => (currentPage.value = lastPage.value)

  return { offset, currentPage, total, lastPage, pageSize, prev, next, first, last }
}
