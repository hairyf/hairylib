import type { AnyFn, Deferred } from '@hairy/utils'
import type { ReactNode } from 'react'
import { createElement } from 'react'
import { useSnapshot } from 'valtio'
import { proxyMap } from 'valtio/utils'

export interface Exposer {
  deferred: Deferred<any>
  args: any[]
  fn: AnyFn
  id: number
}

const pendingTasks = proxyMap<number, Exposer>()

function createTracker(exposer: Exposer) {
  const Component = () => {
    try {
      exposer.deferred.resolve(exposer.fn(...exposer.args))
    }
    catch (error) {
      exposer.deferred.reject(error)
    }
    return null
  }
  Component.key = exposer.id
  return Component
}

function renderTracker(Tracker: ReturnType<typeof createTracker>) {
  return createElement(Tracker, { key: Tracker.key })
}

/**
 * @example
 * ```tsx
 * import { Trigger } from '@hairy/lib-react'
 *
 * // Use triggers to capture context
 * function App() {
 *  return (
 *   <YourContext.Provider>
 *    <Trigger />
 *   </YourContext.Provider>
 *  )
 * }
 *
 * // Obtain externally
 * import { track } from '@hairy/lib-react'
 * const context = await track(() => useContext(YourContext))
 * console.log(context) // { ... }
 * ```
 */
export function Trigger(): ReactNode[] {
  const values = [...useSnapshot(pendingTasks).values()]
  return values.map(createTracker).map(renderTracker)
}

Trigger.id = 0
Trigger.tasks = pendingTasks
