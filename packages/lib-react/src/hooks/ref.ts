/* eslint-disable ts/no-use-before-define */
import type { SetStateAction as Action } from 'react'
import { useState } from 'react'

export interface Ref<S> {
  set value(action: Action<S>)
  get value(): S
}
/**
 * This is a toy, do not use it in a production environment to avoid causing problems
 *
 * Similar to vue's ref function, used to create a responsive reference object
 *
 * @example
 * const count = ref(0)
 * count.value++
 * console.log(count.value) // 1
 * // or
 * count.value = prev => prev + 1
 * @param value
 */
export function ref<T>(value: T): Ref<T>
export function ref<T>(value?: T): Ref<T | undefined>
export function ref<T>(value: T) {
  function define(value: unknown) {
    if (typeof value === 'function')
      return (prev: Ref<T>) => define(value(prev.value))
    return Object.defineProperty({}, 'value', {
      set: action => set(define(action)),
      get: () => value,
      enumerable: true,
    })
  }
  const [ref, set] = useState(define(value))
  return ref
}
