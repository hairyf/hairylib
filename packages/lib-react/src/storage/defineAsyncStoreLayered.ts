import type { FunctionReturningPromise } from 'react-use/lib/misc/types'
import type { AsyncStoreOptions } from './defineAsyncStore'
import { defineAsyncStore } from './defineAsyncStore'

export interface AsyncStoreLayeredOptions<T extends FunctionReturningPromise> extends Omit<AsyncStoreOptions<T>, 'setup'> {
}

export function defineAsyncStoreLayered<T extends FunctionReturningPromise>(fn: T, options: AsyncStoreLayeredOptions<T> = {}) {
  return defineAsyncStore({
    setup: () => fn,
    initial: options.initial,
    persist: options.persist,
  })
}
