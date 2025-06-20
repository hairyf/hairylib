import type { Fn } from '../typings'

export function arange(x1: number, x2?: number, stp = 1, z: number[] = [], z0 = z.length) {
  if (!x2)
    x1 -= x2 = x1
  for (let z1 = z0 + Math.max(Math.ceil((++x2 - x1) / stp), 0); z0 < z1; x1 += stp)
    z[z0++] = x1
  return z
}

export function riposte<T>(...args: [cond: boolean, value: T][]): T {
  for (const [cond, value] of args) {
    if (cond)
      return value
  }
  return undefined as T
}

export function unwrap<T extends object>(value: T | (() => T)) {
  return typeof value === 'function' ? value() : value
}

export function whenever<T, C extends (value: Exclude<T, null | undefined>) => any>(value: T, callback: C): ReturnType<C> | undefined {
  return value ? callback(value as any) : undefined
}

export function call<T extends Fn<any>>(fn: T, ...args: Parameters<T>): ReturnType<T> {
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  return fn(...args)
}
