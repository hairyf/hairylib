import type { Fn } from '../typings'
import { delay } from './delay'

export type Looper<T = void> = (next: (ms: number) => Promise<T>) => Promise<T>

function loop_return<T = void>(fn: Looper<T>) {
  async function next(ms: number) {
    await delay(ms)
    return fn(next)
  }
  return fn(next)
}

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
