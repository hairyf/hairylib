export function noop(): any {}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function arange(x1: number, x2?: number, stp = 1, z: number[] = [], z0 = z.length) {
  if (!x2)
    x1 -= x2 = x1
  for (let z1 = z0 + Math.max(Math.ceil((++x2 - x1) / stp), 0); z0 < z1; x1 += stp) z[z0++] = x1
  return z
}

export function whenever<T, C extends (value: Exclude<T, null | undefined>) => any>(value: T, callback: C): ReturnType<C> | undefined {
  return value ? callback(value as any) : undefined
}

export function loop<T = void>(fn: (next: (ms: number) => Promise<T>) => Promise<T>) {
  async function next(ms: number) {
    await delay(ms)
    return fn(next)
  }
  return fn(next)
}

export function riposte<T>(...args: [cond: boolean, value: T][]): T {
  for (const [cond, value] of args) {
    if (cond)
      return value
  }
  return undefined as T
}
