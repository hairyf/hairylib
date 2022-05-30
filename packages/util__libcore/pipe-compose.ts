import { PipeFn, ComposeFn } from 'pipe-and-compose-types'

export const pipe: PipeFn = (...fns) => fns.reduce((v, f) => f(v)) as any
export const compose: ComposeFn = (...fns) => fns.reduceRight((v, f) => f(v)) as any
