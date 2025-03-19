export const pipe = (...fns: any[]) => fns.reduce((v, f) => f(v))
