import type { Fn } from '../typings'

export function arange(x1: number, x2?: number, stp = 1, z: number[] = [], z0 = z.length) {
  if (!x2)
    x1 -= x2 = x1
  for (let z1 = z0 + Math.max(Math.ceil((++x2 - x1) / stp), 0); z0 < z1; x1 += stp)
    z[z0++] = x1
  return z
}

/**
 * Select a value based on a condition.
 * @param args - The arguments to select from.
 * @returns The selected value.
 * @example
 * ```ts
 * select(
 *  [condition1, value],
 *  [condition2, value2],
 * // default value
 * [true, value3],
 *  ...
 * ) // value
 * ```
 */
export function select<T>(...args: [cond: boolean, value: T][]): T {
  for (const [cond, value] of args) {
    if (cond)
      return value
  }
  return undefined as T
}

/**
 * @deprecated Use select instead
 */
export const riposte = select

/**
 * Unwrap a value or a function that returns a value.
 * @param value - The value or function to unwrap.
 * @returns The unwrapped value.
 * @example
 * ```ts
 * unwrap({ name: 'John' }) // { name: 'John' }
 * unwrap(() => { return { name: 'John' } }) // { name: 'John' }
 */
export function unwrap<T extends object>(value: T | (() => T)) {
  return typeof value === 'function' ? value() : value
}

/**
 * Call a callback if a value is not null or undefined.
 * @param value - The value to check.
 * @param callback - The callback to call.
 * @returns The result of the callback.
 * @example
 * ```ts
 * whenever(value, (value) => { return 'value' }) // value
 */
export function whenever<T, C extends (value: Exclude<T, null | undefined>) => any>(value: T, callback: C): ReturnType<C> | undefined {
  return value ? callback(value as any) : undefined
}

export function call<T extends Fn<any>>(fn: T, ...args: Parameters<T>): ReturnType<T> {
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  return fn(...args)
}
