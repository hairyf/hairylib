import { tryUseUpdate } from '@hairy/react-lib'
import { watch } from './watch'

/**
 * Converts some of the 'raw Vue' data, which is not already wrapped in a hook,
 * into reactive hook data to ensure proper reactivity within the component.
 *
 * @param getter - A function that returns the data to be deeply watched.
 * @example
 * ```tsx
 * import React from 'react'
 * import { ref, reactivity } from 'veact'
 *
 * const countRef = ref(0)
 *
 * export const Component: React.FC = () => {
 *   // Convert to a reactivity hook
 *   const count = reactivity(() => countRef)
 *   const increment = () => {
 *     count.value++
 *   }
 *
 *   return (
 *     <div>
 *       <span>{count.value}</span>
 *       <button onClick={increment}>Increment</button>
 *     </div>
 *   )
 * }
 * ```
 */
export function reactivity<T = any>(getter: () => T): T {
  // deep > watch > traverse(getter()) > ref | array | set | map | plain object(reactive) > force update
  watch(() => getter(), tryUseUpdate(), { deep: true })
  return getter()
}
