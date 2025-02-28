import type { FunctionReturningPromise } from 'react-use/lib/misc/types'
import { defineStore, useStore } from '../storage'

export interface AsyncStorageOptions<T extends FunctionReturningPromise> {
  initial?: ReturnType<T> extends Promise<infer U> ? U : undefined
  setup: () => T
  persistant?: string
}

export function defineAsyncStorage<T extends FunctionReturningPromise>(options: AsyncStorageOptions<T>) {
  const store = defineStore(
    {
      state: () => ({
        promise: undefined as Promise<any> | undefined,
        value: options.initial,
        loading: false,
        error: undefined as Error | undefined,
      }),
    },
    { persistant: options.persistant },
  )

  function use() {
    const fn = options.setup()
    const state = useStore(store)
    function fetch(...args: Parameters<T>) {
      if (state.loading)
        return
      store.$state.loading = true
      store.$state.promise = fn(...args)
      store.$state.promise
        .then(value => (store.$state.value = value))
        .finally(() => store.$state.loading = false)
        .catch((error) => {
          store.$state.error = error
          throw error
        })
      return store.$state.promise
    }
    return [state, fetch as T] as const
  }
  return use
}
