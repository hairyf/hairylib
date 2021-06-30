/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-01-25 15:01:14
 * @LastEditTime: 2021-06-30 21:26:18
 * @Description: 多选列表逻辑
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { computed, ref, Ref, watch } from 'vue'
export type MultipleSelectList<T = { [key: string]: any }> = { select?: boolean } & T[]
export const useMultipleSelect = (list: Ref<MultipleSelectList>) => {
  watch(list, (newList) => {
    newList.forEach((item) => {
      if (typeof item.select !== 'undefined') return undefined
      item.select = false
    })
  })
  /** 当前是否为空 */
  const empty = computed(() => list.value.length === 0)
  /** 当前选中的项列表 */
  const selectItems = computed(() =>
    list.value
      .filter((item) => item.select)
      .map((item) => {
        const newItem = { ...item }
        delete newItem.select
        return newItem
      })
  )
  /** 当前是否为全选状态 */
  const isSelectAll = ref(false)
  /** 当前是否已经选择 */
  const isSelect = computed(() => !!list.value.find((item) => item.select))

  /** 是否全选(Ref)与是否全选(Computed)数据绑定 start */
  const selectAllComputed = computed(() => !list.value.find((item) => !item.select))
  watch(selectAllComputed, () => {
    if (selectAllComputed.value == isSelectAll.value) return undefined
    isSelectAll.value = selectAllComputed.value
  })
  watch(isSelectAll, () => {
    if (selectAllComputed.value == isSelectAll.value) return undefined
    list.value.forEach((item) => (item.select = isSelectAll.value))
  })
  /** 是否全选(Ref)与是否全选(Computed)数据绑定 end */

  return {
    empty,
    selectItems,
    isSelectAll,
    isSelect
  }
}
