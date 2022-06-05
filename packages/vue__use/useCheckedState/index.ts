import { MaybeRef } from '@vueuse/core'
import { computed, Ref, unref } from 'vue'

export type CheckedState = string | boolean | number | symbol

/**
 * 获取 checked 的状态，自定义设置 checked | unchecked 的值
 * @param target
 * @param checked
 * @param unchecked
 * @returns
 */
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
