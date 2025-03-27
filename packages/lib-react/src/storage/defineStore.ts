import type { PersistantOptions } from './proxyWithPersistant'
import { proxy, subscribe } from 'valtio'
import { proxyWithPersistant } from './proxyWithPersistant'

export interface StoreDefine<S extends object, A extends Actions<S>> {
  state: (() => S) | S
  actions?: A
}

export interface StoreOptions {
  persistant?: string | PersistantOptions
}

export type Actions<S> = Record<string, (this: S, ...args: any) => any>
export type ActionsOmitThisParameter<A extends Actions<any>> = {
  [K in keyof A]: (...args: Parameters<A[K]>) => ReturnType<A[K]>
}

export type Store<S, A extends Actions<S>> = {
  $subscribe: (listener: (state: S) => void) => () => void
  $patch: (patch: Partial<S> | ((state: S) => void)) => void
  $state: S
  $actions: ActionsOmitThisParameter<A>
} & ActionsOmitThisParameter<A>

export function defineStore<S extends object, A extends Actions<S>>(
  store: StoreDefine<S, A>,
  options: StoreOptions = {},
): Store<S, A> {
  const state = typeof store.state === 'function'
    ? store.state()
    : store.state
  const actions: any = store.actions || {}

  const $state = options.persistant
    ? proxyWithPersistant(options.persistant as any, state)
    : proxy(state)

  const $actions: any = {}
  for (const key in actions)
    $actions[key] = actions[key].bind($state)

  function $subscribe(listener: (state: S) => void) {
    return subscribe($state, () => listener($state))
  }
  function $patch(patch: Partial<S> | ((state: S) => void)) {
    if (typeof patch === 'function')
      patch($state)
    else
      Object.assign($state, patch)
  }
  return {
    $subscribe,
    $patch,
    $state,
    $actions,
    ...$actions,
  }
}
