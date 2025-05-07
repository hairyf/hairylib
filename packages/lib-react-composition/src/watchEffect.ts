import type { DebuggerOptions, WatchEffect, WatchHandle } from '@vue/reactivity'
import { tryUseState } from '@hairy/react-lib'
import { watch as vueWatch } from '@vue/reactivity'
import { onBeforeUnmount } from './lifecycle'

// changelog: https://github.com/vuejs/core/blob/main/CHANGELOG.md
// https://github.com/vuejs/core/blob/main/packages/runtime-core/src/apiWatch.ts
// https://github.com/vuejs/core/blob/main/packages/reactivity/src/watch.ts

export type WatchEffectOptions = DebuggerOptions

/**
 * Runs a function immediately while reactively tracking its dependencies and re-runs it whenever the dependencies are changed.
 *
 * @param effect - The effect function to run.
 * @param options - An optional options object that can be used to adjust the effect's flush timing or to debug the effect's dependencies; the `flush` option is not supported compared to Vue (3.5.0).
 * @see {@link https://vuejs.org/api/reactivity-core.html#watcheffect Vue `watchEffect()`}
 *
 * @example
 * ```js
 * const count = useRef(0)
 * watchEffect(() => console.log(count.value))
 * // -> logs 0
 *
 * count.value++
 * // -> logs 1
 * ```
 */
export function watchEffect(effect: WatchEffect, options: WatchEffectOptions = {}): WatchHandle {
  const [watchHandle] = tryUseState(() => vueWatch(effect, null, {
    ...options,
    scheduler: job => job(),
  }))
  onBeforeUnmount(() => watchHandle.stop())
  return watchHandle
}
