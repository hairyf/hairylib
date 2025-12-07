import type { Actions, Getters, Store } from './types'
import { useSnapshot } from 'valtio'

/**
 *
 * @deprecated please use `valtio-define`
 */
export function useStatus<S extends object, A extends Actions<S>, G extends Getters<S>>(store: Store<S, A, G>) {
  return useSnapshot(store.$status)
}
