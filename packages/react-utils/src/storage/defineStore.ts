import type { INTERNAL_Snapshot as Snapshot } from 'valtio'
import { proxy, useSnapshot } from 'valtio'
import { proxyWithPersistant } from './proxyWithPersistant'

interface StoreDefine<S extends object, A extends Actions<S> = Record<string, any>> {
  state: (() => S) | S
  actions?: A
}
interface StoreOptions {
  persistant?: string
}
type Actions<S> = Record<string, (this: S) => void>
type Store<S, A> = { $state: S; $actions: A } & A

export function defineStore<S extends object, A extends Actions<S>>(
  store: StoreDefine<S, A>,
  options: StoreOptions = {},
): Store<S, A> {
  const state = typeof store.state === 'function'
    ? store.state()
    : store.state
  const actions: any = store.actions || {}
  const $state = options.persistant
    ? proxyWithPersistant(options.persistant, state)
    : proxy(state)
  const $actions: any = {}
  for (const key in actions)
    $actions[key] = actions[key].bind($state)
  return {
    $state: state,
    $actions: actions,
    ...actions,
  }
}

export function useStore<S extends object, A extends Actions<S>>(store: Store<S, A>): Snapshot<S> {
  return useSnapshot(store.$state)
}
