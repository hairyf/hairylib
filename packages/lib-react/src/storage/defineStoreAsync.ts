/* eslint-disable ts/no-empty-object-type */
import type { AnyFn } from '@hairy/utils'
import type { PersistantOptions } from './persistant'
import type { Store } from './types'
import { watch } from 'valtio/utils'
import { defineStore } from './defineStore'

export type StoreAsyncInitial<T extends AnyFn> = ReturnType<T> extends Promise<infer U> ? U : ReturnType<T>

export interface StoreAsyncOptions<T extends AnyFn> {
  initial?: StoreAsyncInitial<T>
  persist?: string | Omit<PersistantOptions, 'pick'> | undefined
  immediate?: boolean
}

export interface StoreAsyncInitialOptions<T extends AnyFn> extends StoreAsyncOptions<T> {
  initial: StoreAsyncInitial<T>
}

export type StoreAsync<T extends AnyFn, Initial = StoreAsyncInitial<T> | undefined> = Store<
  {
    value: Initial
    error: Error | null | undefined
    loading: boolean
    finished: boolean
  },
  {
    refetch: (...args: Parameters<T>) => ReturnType<T>
    reset: (value?: StoreAsyncInitial<T>) => void
  },
  {}
>

/**
 * @description Define a store async
 * @deprecated please use `valtio-define`
 * @example
 * ```tsx
 * const store = defineStoreAsync(
 *   () => fetch('https://api.example.com/data').then(response => response.json()),
 *   {
 *     initial: [],
 *     // data will be obtained immediately upon defining the store
 *     immediate: true,
 *   },
 * )
 * ```
 */
export function defineStoreAsync<T extends AnyFn>(fetch: T, options: StoreAsyncInitialOptions<T>): StoreAsync<T, StoreAsyncInitial<T>>
export function defineStoreAsync<T extends AnyFn>(fetch: T, options?: StoreAsyncOptions<T>): StoreAsync<T>
export function defineStoreAsync<T extends AnyFn>(fetch: T, options: StoreAsyncOptions<T> = {}): StoreAsync<T> {
  let persist: PersistantOptions | undefined
  if (typeof options.persist === 'string') {
    persist = { id: options.persist, pick: ['value'] }
  }
  if (typeof options.persist === 'object') {
    persist = { ...options.persist, pick: ['value'] }
  }
  const store = defineStore(
    {
      state: () => ({
        value: options.initial,
        error: undefined as Error | null | undefined,
        loading: false,
        finished: false,
      }),
      actions: {
        async refetch(...args: Parameters<T>) {
          return this.value = await fetch(...args)
        },
        reset(value?: StoreAsyncInitial<T>) {
          this.value = value || options.initial
        },
      },
    },
    { persist },
  )

  watch((get) => {
    const status = get(store.$status.refetch)
    store.$state.error = status.error
    store.$state.loading = status.loading
    store.$state.finished = status.finished
  })

  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  options.immediate && store.refetch()

  return store as StoreAsync<T, StoreAsyncInitial<T>>
}

/**
 * @deprecated
 * use defineStoreAsync instead
 */
export const defienAsyncStore = defineStoreAsync
