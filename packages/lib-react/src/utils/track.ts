import type { AnyFn } from '@hairy/utils'
import { Deferred } from '@hairy/utils'
import { ref } from 'valtio'
import { Trigger } from '../components'

/**
 * @requires `Trigger` component to be mounted in the tree.
 *
 * @example
 * ```tsx
 * // Obtain externally
 * import { track } from '@hairy/lib-react'
 * const context = await track(() => useContext(YourContext))
 * console.log(context) // { ... }
 */
export function track<T extends AnyFn>(fn: T, ...args: Parameters<T>): Promise<ReturnType<T>> {
  const deferred = ref(new Deferred<any>())
  const exposer = { fn, args, deferred, id: ++Trigger.id }
  Trigger.tasks.set(exposer.id, exposer)
  deferred.then(() => Trigger.tasks.delete(exposer.id))
  return deferred
}
