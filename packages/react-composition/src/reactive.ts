import type { Reactive, ShallowReactive } from '@vue/reactivity'
import { tryUseUpdate } from '@hairy/react-lib'
import { reactive as vueReactive, shallowReactive as vueShallowReactive } from '@vue/reactivity'
import { useState as useReactState } from 'react'
import { watch } from './watch'

/**
 * Returns a reactive proxy of the object.
 *
 * The reactive conversion is "deep": it affects all nested properties. A
 * reactive object also deeply unwraps any properties that are refs while
 * maintaining reactivity.
 *
 * @param target - The source object.
 * @see {@link https://vuejs.org/api/reactivity-core.html#reactive Vue `reactive()`}
 *
 * @example
 * ```js
 * const obj = reactive({ count: 0 })
 * ```
 */
export function reactive<T extends object>(target: T): Reactive<T>
export function reactive(target: object) {
  const [value] = useReactState(() => vueReactive(target))
  watch(value, tryUseUpdate())
  return value
}

/**
 * Shallow version of {@link reactive()}.
 *
 * Unlike {@link reactive()}, there is no deep conversion: only root-level
 * properties are reactive for a shallow reactive object. Property values are
 * stored and exposed as-is - this also means properties with ref values will
 * not be automatically unwrapped.
 *
 * @param target - The source object.
 * @see {@link https://vuejs.org/api/reactivity-advanced.html#shallowreactive Vue `shallowReactive()`}
 *
 * @example
 * ```js
 * const state = shallowReactive({
 *   foo: 1,
 *   nested: {
 *     bar: 2
 *   }
 * })
 *
 * // mutating state's own properties is reactive
 * state.foo++
 *
 * // ...but does not convert nested objects
 * isReactive(state.nested) // false
 *
 * // NOT reactive
 * state.nested.bar++
 * ```
 */
export function shallowReactive<T extends object>(target: T): ShallowReactive<T> {
  const [value] = useReactState(() => vueShallowReactive(target))
  watch(value, tryUseUpdate())
  return value
}
