import type { MaybeRef } from '@vueuse/core'

import type { ComputedRef, UnwrapRef } from 'vue'
import { computed, ref, unref, watch } from 'vue'
import { extendSelected } from '../utils/extendSelected'

export type SelectedSingleArray = MaybeRef<{ [key: string]: any }[]>
export interface SelectedSingleOptions {
  /**
   * Select Field
   *
   * @default 'select'
   */
  fieldName?: string
  /**
   * Is it mandatory, What is the mandatory option
   * @default false
   *
   */
  required?: true | number
}

export interface SelectedSingleResult<T extends SelectedSingleArray> {
  /**
   * 当前选中项
   */
  selected: ComputedRef<UnwrapRef<T>[number] | undefined>
  /**
   * 是否已经选择
   */
  isSelected: ComputedRef<boolean>
}

export function useSelectedSingle<T extends SelectedSingleArray>(array: T, options: SelectedSingleOptions = {}): SelectedSingleResult<T> {
  const fieldName = options.fieldName ?? 'select'
  const required = options.required ?? false

  extendSelected(array, fieldName)

  const SELECTED_SINGLE_KEY = 'selected_single_key'

  const isLocked = ref(false)

  /** 当前是否已经选择 */
  const isSelected = computed(() => !!unref(array).some(item => item.select))

  if (required) {
    const recover = (bool: boolean) => {
      const index = required === true ? 0 : required
      if (!bool && unref(array).length > 0)
        unref(array)[index][fieldName] = true
    }

    watch(isSelected, recover, { flush: 'sync', immediate: true })
  }

  const itemChange = (neglect: number) => {
    if (isLocked.value)
      return
    isLocked.value = true

    const _array = unref(array)
    const _value = !_array[neglect][fieldName]

    if (required && !_value)
      _array[neglect][fieldName] = true

    _array.forEach((target, index) => {
      if (neglect === index)
        return undefined
      if (!target[fieldName])
        return undefined
      target[fieldName] = false
    })

    isLocked.value = false
  }

  const targetEffect = (target: { [key: string]: any }, index: number) => {
    if (!target[SELECTED_SINGLE_KEY]) {
      return watch(
        () => target[fieldName],
        () => itemChange(index),
        { flush: 'sync' },
      )
    }
    Object.defineProperty(target, SELECTED_SINGLE_KEY, { value: true })
  }

  watch(
    array,
    () => {
      unref(array).forEach(targetEffect)
    },
    { immediate: true, flush: 'sync' },
  )

  /** 当前选中的项 */
  const selected = computed(() => unref(array).find(v => v[fieldName]))

  return { selected, isSelected }
}
