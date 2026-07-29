import type { MaybeRef } from '@vueuse/core'
import type { Ref } from 'vue'
import { computed, unref } from 'vue'

export type CheckedState = string | boolean | number | symbol

/**
 * Get the status of checked and customize the value of checked | unchecked
 * @param target
 * @param checked
 * @param unchecked
 */
export function useChecked(target: Ref<any>, checked: MaybeRef<CheckedState> = true, unchecked: MaybeRef<CheckedState> = false) {
  return computed({
    get: () => target.value === unref(checked),
    set: (_value) => {
      target.value = _value ? unref(checked) : unref(unchecked)
    },
  })
}
