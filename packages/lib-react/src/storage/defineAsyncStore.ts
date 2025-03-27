import type { FunctionReturningPromise } from 'react-use/lib/misc/types'
import { defineStore } from './defineStore'
import { useStore } from './useStore'

export interface AsyncStoreOptions<T extends FunctionReturningPromise> {
  initial?: ReturnType<T> extends Promise<infer U> ? U : undefined
  setup: () => T
  persistant?: string
}

export function defineAsyncStore<T extends FunctionReturningPromise>(options: AsyncStoreOptions<T>) {
  const store = defineStore(
    {
      state: () => ({
        promise: undefined as Promise<any> | undefined,
        value: options.initial,
        loading: false,
        error: undefined as Error | undefined,
      }),
    },
    { persistant: options.persistant
      ? { id: options.persistant, pick: ['value'] }
      : undefined },
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
    function refresh(value: (ReturnType<T> extends Promise<infer U> ? U : undefined)) {
      store.$state.value = value
    }
    return [state, fetch as T, refresh] as const
  }
  return use
}
