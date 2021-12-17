/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2021-12-17 16:53:46
 */
import { MaybeRef } from '@vueuse/core'
import { computed, ComputedRef, Ref, unref, UnwrapRef } from 'vue-demi'

export type SelectedMultipleArray = MaybeRef<{ [key: string]: any }[]>

export interface SelectedMultipleOptions {
  /**
   * 选择字段
   *
   * @default 'select'
   */
  fieldName?: string
}

export interface SelectedMultipleResult<T extends SelectedMultipleArray> {
  /**
   * 当前选中的所有项
   */
  selectItems: ComputedRef<UnwrapRef<T>>
  /**
   * 当前是否全选, 更改后将影响列表的选择
   */
  isSelectAll: Ref<boolean>
  /**
   * 是否选择
   */
  isSelect: ComputedRef<boolean>
  /**
   * 选中，但没有完全选完（一般用于 checkbox 组件）
   */
  isIndeterminate: ComputedRef<boolean>
}

export const useSelectedMultiple = <T extends SelectedMultipleArray>(
  array: T,
  options: SelectedMultipleOptions = {}
): SelectedMultipleResult<T> => {
  const { fieldName = 'select' } = options
  /** 当前选中的项列表 */
  const selectItems = computed<any>(() => unref(array).filter((item) => item[fieldName]))

  /** 当前是否为全选状态 */
  const isSelectAll = computed({
    get: () => !!unref(array).some((item) => item[fieldName]),
    set: (value) => unref(array).forEach((item) => (item[fieldName] = value))
  })

  /** 当前是否已经选择 */
  const isSelect = computed(() => !!unref(array).some((item) => item[fieldName]))

  /** 选中，但没有完全选完（一般用于 checkbox 组件） */
  const isIndeterminate = computed(() => {
    const selectCount = selectItems.value.length
    return selectCount > 0 && selectCount < unref(array).length
  })
  return { selectItems, isSelectAll, isSelect, isIndeterminate }
}
