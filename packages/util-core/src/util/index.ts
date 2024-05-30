export { default as pPipe } from 'p-pipe'
export { default as delay } from 'delay'

export const pipe = (...fns: any[]) => fns.reduce((v, f) => f(v))
export const compose = (...fns: any[]) => fns.reduceRight((v, f) => f(v))

/**
 * 生成区间数组
 * arange(<start>, <stop>, [step=1], [target=[]], [at])
 */
export function arange(x1: number, x2?: number, stp = 1, z: number[] = [], z0 = z.length) {
  if (!x2)
    x1 -= x2 = x1
  for (let z1 = z0 + Math.max(Math.ceil((++x2 - x1) / stp), 0); z0 < z1; x1 += stp) z[z0++] = x1
  return z
}

export type Deferred<T = void> = Promise<T> & { resolve: (value: T) => void; reject: Function }

export function createDeferred<T = void>(): Deferred<T> {
  let resolve: any, reject: any
  const promise = new Promise<any>((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  }) as unknown as any
  promise.resolve = (v: any) => {
    resolve(v)
    return promise
  }
  promise.reject = reject
  return promise
}
