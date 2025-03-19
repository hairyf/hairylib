import type { MaybeRef } from '@vueuse/core'
import type { ComputedRef, Ref, UnwrapRef } from 'vue'
import { computed, unref } from 'vue'
import { extendSelected } from '../utils/extendSelected'

export type SelectedMultipleArray = MaybeRef<{ [key: string]: any }[]>

export interface SelectedMultipleOptions<T extends SelectedMultipleArray> {
  /**
   * Select Field
   *
   * @default 'select'
   */
  fieldName?: string
  /**
   * Processing disabled, takes effect when isSelectAll is changed
   */
  disabled?: (item: UnwrapRef<T>[number], index: number) => boolean | void
}

export interface SelectedMultipleResult<T extends SelectedMultipleArray> {
  /**
   * All currently selected items
   */
  selected: ComputedRef<UnwrapRef<T>>
  /**
   * Is it currently all selected, Changing it will affect the selection of the list
   */
  isSelectedAll: Ref<boolean>
  /**
   * Whether to choose
   */
  isSelected: ComputedRef<boolean>
  /**
   * Selected, but not fully selected (usually used for checkbox components)
   */
  isIndeterminate: ComputedRef<boolean>
}

export function useSelectedMultiple<T extends SelectedMultipleArray>(array: T, options: SelectedMultipleOptions<T> = {}): SelectedMultipleResult<T> {
  const { fieldName = 'select', disabled } = options

  extendSelected(array, fieldName)

  /** 当前选中的项列表 */
  const selected = computed<any>(() => unref(array).filter(item => item[fieldName]))

  /** 当前是否为全选状态 */
  const isSelectedAll = computed({
    get: () => !selected.value?.length && !unref(array).some(item => !item[fieldName]),
    set: value =>
      unref(array).forEach((item, index) => {
        if (!disabled?.(item, index))
          item[fieldName] = value
      }),
  })

  /** 当前是否已经选择 */
  const isSelected = computed(() => !!unref(array).some(item => item[fieldName]))

  /** 选中，但没有完全选完（一般用于 checkbox 组件） */
  const isIndeterminate = computed(() => {
    const selectCount = selected.value.length
    return selectCount > 0 && selectCount < unref(array).length
  })
  return { selected, isSelectedAll, isSelected, isIndeterminate }
}
