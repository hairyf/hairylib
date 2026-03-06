import type { PromiseFn, PromiseType } from '@hairy/utils'

export type AsyncState<T> = {
  loading: boolean
  error?: undefined
  value?: undefined
} | {
  loading: true
  error?: Error | undefined
  value?: T
} | {
  loading: false
  error: Error
  value?: undefined
} | {
  loading: false
  error?: undefined
  value: T
}

export type StateFromFnReturningPromise<T extends PromiseFn = PromiseFn> = AsyncState<PromiseType<ReturnType<T>>>
export declare type AsyncStateReturn<T extends PromiseFn = PromiseFn> = [
  StateFromFnReturningPromise<T>,
  T,
]
