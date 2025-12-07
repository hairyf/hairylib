import type { Fn } from '../typings'
import { delay } from './delay'

/**
 * A function that performs a loop operation with delay control.
 * @template T - The return type of the loop function (defaults to void)
 * @param next - A function that schedules the next iteration after a delay (in milliseconds)
 * @returns A promise that resolves with the result of type T
 */
export type Looper<T = void> = (next: (ms: number) => Promise<T>) => Promise<T>

function loop_return<T = void>(fn: Looper<T>) {
  async function next(ms: number) {
    await delay(ms)
    return fn(next)
  }
  return fn(next)
}

/**
 * Creates a cancellable loop that executes repeatedly with delays.
 * Returns a cancel function that can be called to stop the loop.
 * The loop will not execute further iterations after cancellation.
 *
 * @param fn - The loop function that receives a `next` callback to schedule the next iteration
 * @returns A cancel function that stops the loop when called
 *
 * @example loop
 * ```ts
 * const cancel = loop(async (next) => {
 *   console.log('tick')
 *   await next(1000) // Wait 1 second before next iteration
 * })
 *
 * // Stop the loop after 5 seconds
 * setTimeout(cancel, 5000)
 *```
 *  @example loop.return
 * ```ts
 * const result = await loop.return(async (next) => {
 *   if (condition) {
 *     return 'done'
 *   }
 *   await next(1000)
 * })
 * console.log(result)
 * ```
 */
function loop(fn: Looper<void>): Fn {
  let looping = true
  async function next(ms: number) {
    if (!looping)
      return
    await delay(ms)
    return fn(next)
  }
  function cancel() {
    looping = false
  }
  fn(next)
  return cancel
}

loop.return = loop_return

export { loop }
