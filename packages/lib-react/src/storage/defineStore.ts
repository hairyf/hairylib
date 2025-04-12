import type { PersistantOptions } from './proxyWithPersistant'
import { createElement } from 'react'
import { proxy, subscribe, useSnapshot } from 'valtio'
import { proxyWithPersistant } from './proxyWithPersistant'

export type Actions<S> = Record<string, (this: S, ...args: any) => any>
export type Getters<S> = Record<string, (this: S) => any>

export type ActionsOmitThisParameter<A extends Actions<any>> = {
  [K in keyof A]: (...args: Parameters<A[K]>) => ReturnType<A[K]>
}

export type GettersReturnType<G extends Getters<any>> = {
  [K in keyof G]: ReturnType<G[K]>
}

export interface StoreDefine<S extends object, A extends Actions<S>, G extends Getters<S>> {
  state: (() => S) | S
  actions?: A
  getters?: G
}

export interface StoreOptions {
  persistant?: string | PersistantOptions
}

export type Store<S, A extends Actions<S>, G extends Getters<S>> = {
  $subscribe: (listener: (state: S) => void) => () => void
  $patch: (patch: Partial<S> | ((state: S) => void)) => void
  $state: S & GettersReturnType<G>
  $actions: ActionsOmitThisParameter<A>
  $getters: GettersReturnType<G>
  $signal: <T>(fn: (state: S & GettersReturnType<G>) => T) => T
} & ActionsOmitThisParameter<A> & GettersReturnType<G>

export function defineStore<S extends object, A extends Actions<S>, G extends Getters<S>>(
  store: StoreDefine<S, A, G>,
  options: StoreOptions = {},
): Store<S, A, G> {
  const state = typeof store.state === 'function'
    ? store.state()
    : store.state
  const actions: any = store.actions || {}
  const getters: any = store.getters || {}

  const $state = options.persistant
    ? proxyWithPersistant(options.persistant as any, state)
    : proxy(state)

  const $actions: any = {}
  for (const key in actions)
    $actions[key] = actions[key].bind($state)

  const $getters: any = {}
  for (const key in getters) {
    Object.defineProperty(state, key, {
      get: () => getters[key].call($state),
      enumerable: true,
    })
    Object.defineProperty($getters, key, {
      get: () => state[key as keyof S],
      enumerable: true,
    })
  }

  function $subscribe(listener: (state: S & GettersReturnType<G>) => void) {
    return subscribe($state, () => listener($state as any))
  }
  function $patch(patch: Partial<S> | ((state: S) => void)) {
    if (typeof patch === 'function')
      patch($state)
    else
      Object.assign($state, patch)
  }
  function $signal(fn: (state: typeof $state) => any) {
    return createElement(() => fn(useSnapshot($state) as any))
  }
  return {
    $subscribe,
    $patch,
    $state,
    $actions,
    $getters,
    $signal,
    ...$actions,
    ...$getters,
  }
}
