import { MaybeRef } from '@vueuse/core'
import { computed, Ref, unref } from 'vue'

export type CheckedState = string | boolean | number | symbol

export const useCheckedState = (
  target: Ref<any>,
  checked: MaybeRef<CheckedState> = true,
  unchecked: MaybeRef<CheckedState> = false
) => {
  return computed({
    get: () => target.value === unref(checked),
    set: (_value) => {
      target.value = _value ? unref(checked) : unref(unchecked)
    }
  })
}
