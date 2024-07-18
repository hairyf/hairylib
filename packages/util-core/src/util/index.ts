export * from './deferred'
export * from './third'

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

export const pipe = (...fns: any[]) => fns.reduce((v, f) => f(v))
export const compose = (...fns: any[]) => fns.reduceRight((v, f) => f(v))

export function whenever<T, C extends (value: Exclude<T, null | undefined>) => any>(value: T, callback: C): ReturnType<C> | undefined {
  return value ? callback(value as any) : undefined
}
