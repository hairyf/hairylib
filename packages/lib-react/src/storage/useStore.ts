import type { Actions, Getters, GettersReturnType, Store } from './defineStore'
import { useSnapshot } from 'valtio'

export function useStore<S extends object, A extends Actions<S>, G extends Getters<S>>(store: Store<S, A, G>) {
  return useSnapshot(store.$state as S & GettersReturnType<G>)
}
