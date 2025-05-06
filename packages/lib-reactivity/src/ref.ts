import type { IfAny } from '@hairy/utils'
import type { Ref as _Ref, CustomRefFactory, ShallowRef, UnwrapRef } from '@vue/reactivity'
import { tryUseState, tryUseUpdate } from '@hairy/react-lib'
import { customRef as vueCustomRef, ref as vueRef, shallowRef as vueShallowRef } from '@vue/reactivity'
import { watch } from './watch'

export type Ref<T = any, S = T> = _Ref<T, S> & { current: T }
/**
 * Takes an inner value and returns a reactive and mutable ref object, which
 * has a single property `.value` that points to the inner value.
 *
 * @param value - The object to wrap in the ref.
 * @see {@link https://vuejs.org/api/reactivity-core.html#ref Vue `ref()`}
 *
 * @example
 * ```js
 * const count = useRef(0)
 * console.log(count.value) // 0
 *
 * count.value = 1
 * console.log(count.value) // 1
 * ```
 */
export function ref<T>(value: T): [T] extends [Ref] ? IfAny<T, Ref<T>, T> : Ref<UnwrapRef<T>, UnwrapRef<T> | T>
export function ref<T = any>(): Ref<T | undefined>
export function ref(initValue?: unknown) {
  const [ref] = tryUseState(() => {
    const r = vueRef(initValue)
    // eslint-disable-next-line accessor-pairs
    Object.defineProperty(r, 'current', { set: value => r.value = value })
    return r
  })
  watch(ref, tryUseUpdate(), { deep: true })
  return ref
}

/**
 * Creates a customized ref with explicit control over its dependency tracking
 * and updates triggering.
 *
 * @param factory - The function that receives the `track` and `trigger` callbacks.
 * @see {@link https://vuejs.org/api/reactivity-advanced.html#customref Vue `customRef()`}
 */
export function customRef<T>(factory: CustomRefFactory<T>): Ref<T> {
  const [ref] = tryUseState(() => vueCustomRef(factory) as Ref<T>)
  watch(ref, tryUseUpdate())
  return ref
}

/**
 *
 * @param value - The "inner value" for the shallow ref.
 * @see {@link https://vuejs.org/api/reactivity-advanced.html#shallowref Vue `shallowRef()`}
 *
 * @example
 * ```js
 * const state = shallowRef({ count: 1 })
 * // does NOT trigger change
 * state.value.count = 2
 * // does trigger change
 * state.value = { count: 2 }
 * ```
 */
export function shallowRef<T>(value: T): Ref extends T ? (T extends Ref ? IfAny<T, ShallowRef<T>, T> : ShallowRef<T>) : ShallowRef<T>
export function shallowRef<T = any>(): ShallowRef<T | undefined>
export function shallowRef(initValue?: unknown) {
  const [ref] = tryUseState(() => vueShallowRef(initValue))
  watch(ref, tryUseUpdate())
  return ref
}
