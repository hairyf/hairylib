import { proxy, useSnapshot } from 'valtio'
import { proxyWithPersistant } from './proxyWithPersistant'

export type FunctionReturningPromise = (...args: any[]) => Promise<any>
export type PromiseType<P extends Promise<any>> = P extends Promise<infer T> ? T : never
export interface AsyncFnCall<V = any> {
  promise?: Promise<V>
  loading: boolean
  value: V
  error?: any
}

export const $asyncFnCallCache = proxy<Record<string | symbol, AsyncFnCall>>({})
export const $asyncFnCallCacheByPersistant = proxyWithPersistant<Record<string | symbol, AsyncFnCall>>('asyncFnCallCache', {})

export function useProxyAsyncFn<T extends FunctionReturningPromise>(id: string | symbol, fn: T, persistant?: boolean) {
  const $state = persistant ? $asyncFnCallCacheByPersistant : $asyncFnCallCache
  const snapshot = useSnapshot($state)

  if (!snapshot[id])
    $asyncFnCallCache[id] = { loading: false, value: undefined }

  function callback(...args: any[]) {
    const cache = $asyncFnCallCacheByPersistant[id]
    if (cache.promise)
      return cache.promise
    const result = fn(...args)
    if (result instanceof Promise) {
      cache.loading = true
      cache.promise = result
      result
        .then(value => cache.value = value)
        .catch(error => cache.error = error)
        .finally(() => cache.loading = false)
    }
    else {
      cache.promise = Promise.resolve(result)
      cache.value = result
    }
    cache.promise.finally(() => cache.promise = undefined)
    return cache.promise
  }

  return [$state[id] as AsyncFnCall<PromiseType<ReturnType<T>>>, callback as T] as const
}
