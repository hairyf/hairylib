import type { AnyFn } from '@hairy/utils'
import { watch } from 'valtio/utils'
import { defineStore } from './defineStore'

export interface StoreAsyncOptions<T extends AnyFn> {
  initial?: ReturnType<T> extends Promise<infer U> ? U : undefined
  persist?: string
  immediate?: boolean
}

export function defineStoreAsync<T extends AnyFn>(fetch: T, options: StoreAsyncOptions<T> = {}) {
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
    { persist: options.persist ? { id: options.persist, pick: ['value'] } : undefined },
  )

  watch((get) => {
    const status = get(store.$status.fetch)
    store.$state.error = status.error
    store.$state.loading = status.loading
    store.$state.finished = status.finished
  })

  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  options.immediate && store.fetch()

  return store
}

/**
 * @deprecated
 * use defineStoreAsync instead
 */
export const defienAsyncStore = defineStoreAsync
