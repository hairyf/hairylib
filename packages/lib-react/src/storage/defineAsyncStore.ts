import type { AnyFn } from '@hairy/utils'
import { defineStore } from './defineStore'

export interface AsyncStoreOptions<T extends AnyFn> {
  initial?: ReturnType<T> extends Promise<infer U> ? U : undefined
  persist?: string
}

export function defineAsyncStore<T extends AnyFn>(fetch: T, options: AsyncStoreOptions<T> = {}) {
  const store = defineStore(
    {
      state: () => ({ value: options.initial }),
      actions: {
        fetch,
        refresh(value?: (ReturnType<T> extends Promise<infer U> ? U : undefined)) {
          this.value = value || options.initial
        },
      },
    },
    { persist: options.persist },
  )

  return store
}
