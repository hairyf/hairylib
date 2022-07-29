/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-18 13:57:31
 */
import { MaybeRef } from '@vueuse/core'
import { computed, ComputedRef, Ref, unref, UnwrapRef } from 'vue'
import { extendSelected } from '../utils/extendSelected'

export type SelectedMultipleArray = MaybeRef<{ [key: string]: any }[]>

export interface SelectedMultipleOptions<T extends SelectedMultipleArray> {
  /**
   * 选择字段
   *
   * @default 'select'
   */
  fieldName?: string
  /**
   * 处理禁用, 在 isSelectAll 更改时生效
   */
  disabled?: (item: UnwrapRef<T>[number], index: number) => boolean | void
}

export interface SelectedMultipleResult<T extends SelectedMultipleArray> {
  /**
   * 当前选中的所有项
   */
  selected: ComputedRef<UnwrapRef<T>>
  /**
   * 当前是否全选, 更改后将影响列表的选择
   */
  isSelectedAll: Ref<boolean>
  /**
   * 是否选择
   */
  isSelected: ComputedRef<boolean>
  /**
   * 选中，但没有完全选完（一般用于 checkbox 组件）
   */
  isIndeterminate: ComputedRef<boolean>
}

export const useSelectedMultiple = <T extends SelectedMultipleArray>(
  array: T,
  options: SelectedMultipleOptions<T> = {}
): SelectedMultipleResult<T> => {
  const { fieldName = 'select', disabled } = options

  extendSelected(array, fieldName)

  /** 当前选中的项列表 */
  const selected = computed<any>(() => unref(array).filter((item) => item[fieldName]))

  /** 当前是否为全选状态 */
  const isSelectedAll = computed({
    get: () => !selected.value?.length && !unref(array).some((item) => !item[fieldName]),
    set: (value) =>
      unref(array).forEach((item, index) => {
        if (!disabled?.(item, index)) item[fieldName] = value
      })
  })

  /** 当前是否已经选择 */
  const isSelected = computed(() => !!unref(array).some((item) => item[fieldName]))

  /** 选中，但没有完全选完（一般用于 checkbox 组件） */
  const isIndeterminate = computed(() => {
    const selectCount = selected.value.length
    return selectCount > 0 && selectCount < unref(array).length
  })
  return { selected, isSelectedAll, isSelected, isIndeterminate }
}
