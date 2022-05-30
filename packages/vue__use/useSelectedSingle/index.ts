import { MaybeRef } from '@vueuse/core'

import { computed, ComputedRef, ref, unref, UnwrapRef, watch } from 'vue'
export type SelectedSingleArray = MaybeRef<{ [key: string]: any }[]>

export interface SelectedSingleOptions {
  /**
   * 选择字段
   *
   * @default 'select'
   */
  fieldName?: string
  /**
   * 是否必选, 必选项是哪项
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
}

export const useSelectedSingle = <T extends SelectedSingleArray>(
  array: T,
  options: SelectedSingleOptions = {}
): SelectedSingleResult<T> => {
  const fieldName = options.fieldName ?? 'select'
  const required = options.required ?? false

  const SELECTED_SINGLE_KEY = 'selected_single_key'

  const isLocked = ref(false)

  /** 当前是否已经选择 */
  const isSelected = computed(() => !!unref(array).some((item) => item.select))

  if (required) {
    const reset = (bool: boolean) => {
      const index = required === true ? 0 : required
      if (!bool && unref(array).length > 0) {
        unref(array)[index][fieldName] = true
      }
    }
    watch(isSelected, reset, { flush: 'sync', immediate: true })
  }

  const resetAllSelected = (neglect: number) => {
    if (isLocked.value) return
    isLocked.value = true

    const _array = unref(array)
    const _value = !_array[neglect][fieldName]

    if (required && !_value) {
      _array[neglect][fieldName] = true
    }

    _array.forEach((target, index) => {
      if (neglect === index) return undefined
      if (!target[fieldName]) return undefined
      target[fieldName] = false
    })

    isLocked.value = false
  }

  const watchTargetEffect = (target: { [key: string]: any }, index: number) => {
    if (!target[SELECTED_SINGLE_KEY]) {
      return watch(
        () => target[fieldName],
        () => resetAllSelected(index),
        { flush: 'sync' }
      )
    }
    Object.defineProperty(target, SELECTED_SINGLE_KEY, { value: true })
  }

  watch(array, () => unref(array).forEach(watchTargetEffect), { immediate: true, flush: 'sync' })

  /** 当前选中的项 */
  const selected = computed(() => unref(array).find((v) => v[fieldName]))

  return { selected }
}
