import type _pPipe from 'p-pipe'

export const pPipe: typeof _pPipe = (...functions: any[]) => {
  if (functions.length === 0)
    throw new Error('Expected at least one argument')
  return async (input: any) => {
    let currentValue = input
    for (const function_ of functions)
      currentValue = await function_(currentValue)
    return currentValue
  }
}

export const pipe = (...fns: any[]) => fns.reduce((v, f) => f(v))

export const compose = (...fns: any[]) => fns.reduceRight((v, f) => f(v))
