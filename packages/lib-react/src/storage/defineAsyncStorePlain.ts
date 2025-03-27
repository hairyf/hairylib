import type { FunctionReturningPromise } from 'react-use/lib/misc/types'
import type { AsyncStoreOptions } from './defineAsyncStore'
import { defineAsyncStore } from './defineAsyncStore'

export interface AsyncStorePlainOptions<T extends FunctionReturningPromise> extends Omit<AsyncStoreOptions<T>, 'setup'> {
}

export function defineAsyncStorePlain<T extends FunctionReturningPromise>(fn: T, options: AsyncStorePlainOptions<T> = {}) {
  return defineAsyncStore({
    setup: () => fn,
    initial: options.initial,
    persistant: options.persistant,
  })
}
