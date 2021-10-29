/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-01-25 15:01:14
 * @LastEditTime: 2021-06-30 21:26:18
 * @Description: 多选列表逻辑
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { MaybeRef } from '@vueuse/core'
import { computed, ComputedRef, Ref, unref, UnwrapRef } from 'vue-demi'
import '@vue/reactivity'

export type SelectedArray = MaybeRef<{ [key: string]: any }[]>

export type SelectedMode = 'multiple' | 'single'

export interface SelectedOptions<T extends SelectedMode> {
  /**
   * 选择模式 multiple 多选; single 单选
   *
   * @default 'multiple'
   */
  mode?: T
  /**
   * 选择字段
   *
   * @default 'select'
   */
  fieldName?: string
}

export interface SelectedMultipleResult<T extends SelectedArray> {
  /**
   * 当前选中项
   */
  selectItem: ComputedRef<UnwrapRef<T>[number] | undefined>
  /**
   * 是否选择
   */
  isSelect: ComputedRef<boolean>
  /**
   * 选择索引项, 选择后会将其他选择项清空
   */
  select: (index: number) => void
}

export interface SelectedSingleResult<T extends SelectedArray> {
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
   * 选择索引项
   */
  select: (index: number) => void
}

export type SelectedResult<
  T extends SelectedArray,
  Mode extends SelectedMode = 'multiple'
> = Mode extends 'single' ? SelectedMultipleResult<T> : SelectedSingleResult<T>

export const useSelected = <T extends SelectedArray, Mode extends SelectedMode>(
  array: T,
  options: SelectedOptions<Mode> = {}
): SelectedResult<T, Mode> => {
  const { mode = 'multiple', fieldName = 'select' } = options

  /** 当前选中的项列表 */
  const selectItems = computed(() => unref(array).filter((item) => item[fieldName]))

  /** 当前是否为全选状态 */
  const isSelectAll = computed({
    get: () => !!unref(array).some((item) => item.select),
    set: (value) => unref(array).forEach((item) => (item.select = value))
  })

  /** 当前是否已经选择 */
  const isSelect = computed(() => !!unref(array).some((item) => item.select))

  /** 当前选中的项 */
  const selectItem = computed(() => unref(array).find((v) => v[fieldName]))

  /**
   * 选择项
   * @param index
   */
  const select = (index: number) => {
    const target = unref(array)[index]
    if (mode === 'single') {
      isSelectAll.value = false
      target[fieldName] = true
    }
    if (mode === 'multiple') {
      target[fieldName] = !target[fieldName]
    }
  }
  if (mode === 'single') {
    return { selectItem, isSelect, select } as any
  }
  return { selectItems, isSelectAll, isSelect, select } as any
}
