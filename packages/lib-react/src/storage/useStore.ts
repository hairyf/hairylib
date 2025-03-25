import type { Actions, Store } from './defineStore'
import { useSnapshot } from 'valtio'

export function useStore<S extends object, A extends Actions<S>>(store: Store<S, A>) {
  return useSnapshot(store.$state)
}
