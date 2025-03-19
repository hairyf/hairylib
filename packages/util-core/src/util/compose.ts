export const compose = (...fns: any[]) => fns.reduceRight((v, f) => f(v))
