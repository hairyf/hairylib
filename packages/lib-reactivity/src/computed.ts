/**
 * @module veact.computed
 * @author Surmon <https://github.com/surmon-china>
 */

import type {
  ComputedGetter,
  ComputedRef,
  DebuggerOptions,
  WritableComputedOptions,
  WritableComputedRef,
} from '@vue/reactivity'
import { tryUseState, tryUseUpdate } from '@hairy/react-lib'
import { computed as vueComputed } from '@vue/reactivity'
import { watch } from './watch'

/**
 * Takes a getter function and returns a readonly reactive ref object for the
 * returned value from the getter. It can also take an object with get and set
 * functions to create a writable ref object.
 *
 * @param getter - Function that produces the next value.
 * @param debugOptions - For debugging. See {@link https://vuejs.org/guide/extras/reactivity-in-depth.html#computed-debugging Vue Computed Debugging}.
 * @see {@link https://vuejs.org/api/reactivity-core.html#computed Vue `computed()`}
 *
 * @example
 * ```js
 * // Creating a readonly computed ref:
 * const count = useRef(1)
 * const plusOne = computed(() => count.value + 1)
 *
 * console.log(plusOne.value) // 2
 * plusOne.value++ // error
 * ```
 *
 * @example
 * ```js
 * // Creating a writable computed ref:
 * const count = useRef(1)
 * const plusOne = computed({
 *   get: () => count.value + 1,
 *   set: (val) => {
 *     count.value = val - 1
 *   }
 * })
 *
 * plusOne.value = 1
 * console.log(count.value) // 0
 * ```
 */
export function computed<T>(getter: ComputedGetter<T>, debugOptions?: DebuggerOptions): ComputedRef<T>
export function computed<T, S = T>(options: WritableComputedOptions<T, S>, debugOptions?: DebuggerOptions): WritableComputedRef<T, S>
export function computed(arg1: any, arg2: any) {
  const [ref] = tryUseState(() => vueComputed(arg1, arg2))
  watch(ref, tryUseUpdate())
  return ref
}
