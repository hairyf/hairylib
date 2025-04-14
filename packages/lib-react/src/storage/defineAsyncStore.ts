import type { AnyFn } from '@hairy/utils'
import { subscribeKey } from 'valtio/utils'
import { defineStore } from './defineStore'

export interface AsyncStoreOptions<T extends AnyFn> {
  initial?: ReturnType<T> extends Promise<infer U> ? U : undefined
  persist?: string
  immediate?: boolean
}

export function defineAsyncStore<T extends AnyFn>(fetch: T, options: AsyncStoreOptions<T> = {}) {
  const store = defineStore(
    {
      state: () => ({
        value: options.initial,
        error: undefined as Error | null | undefined,
        loading: false,
        finished: false,
      }),
      actions: {
        async fetch(...args: Parameters<T>) {
          return this.value = await fetch(...args)
        },
        refresh(value?: (ReturnType<T> extends Promise<infer U> ? U : undefined)) {
          this.value = value || options.initial
        },
      },
    },
    { persist: options.persist },
  )

  subscribeKey(store.$status, 'error', error => store.$state.error = error)
  subscribeKey(store.$status, 'loading', loading => store.$state.loading = loading)
  subscribeKey(store.$status, 'finished', finished => store.$state.finished = finished)

  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  options.immediate && store.fetch()

  return store
}
