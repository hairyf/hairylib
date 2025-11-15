import type { Actions, ActionsStatus, Getters, GettersReturnType, Store, StoreDefine, StoreOptions } from './types'
import { createElement } from 'react'
import { proxy, subscribe, useSnapshot } from 'valtio'
import { proxyWithPersistant } from './persistant'
import { track } from './utils'

export function defineStore<S extends object, A extends Actions<S>, G extends Getters<S>>(
  store: StoreDefine<S, A, G>,
  options: StoreOptions = {},
): Store<S, A, G> {
  const state = typeof store.state === 'function'
    ? store.state()
    : store.state

  const getters: any = store.getters || {}
  const actions: any = store.actions || {}
  const status: any = {}

  status.finished = false
  status.loading = false
  status.error = null

  const $status = proxy(status)
  const $state = options.persist
    ? proxyWithPersistant(options.persist as string, state)
    : proxy(state)

  const $actions: any = {}
  const $getters: any = {}

  setupActions($state, actions, $actions, $status)
  setupGetters(state, $state, getters, $getters)
  setupStatus($actions, $status)

  function $subscribe(listener: (state: S & GettersReturnType<G>) => void) {
    return subscribe($state, () => listener($state as any))
  }

  $subscribe.status = function (listener: (status: ActionsStatus<A>) => void) {
    return subscribe($status, () => listener($status as any))
  }

  function $patch(patch: Partial<S> | ((state: S) => void)) {
    if (typeof patch === 'function')
      patch($state)
    else
      Object.assign($state, patch)
  }

  function $signal(fn: (state: any) => any) {
    return createElement(() => fn(useSnapshot($state)))
  }

  $signal.status = function (fn: (status: any) => any) {
    return createElement(() => fn(useSnapshot($status)))
  }

  return {
    $subscribe,
    $patch,
    $state,
    $status,
    $actions,
    $getters,
    $signal,
    ...$actions,
  }
}

function setupActions($state: any, actions: any, $actions: any, $status: any) {
  for (const key in actions) {
    $status[key] = { finished: false, loading: false, error: null }
    $actions[key] = track(actions[key].bind($state), $status[key])
    Object.defineProperty($state, key, {
      get: () => $actions[key],
    })
  }
}

function setupGetters(state: any, $state: any, getters: any, $getters: any) {
  for (const key in getters) {
    Object.defineProperty(state, key, {
      get: () => getters[key].call($state),
      enumerable: true,
    })
    Object.defineProperty($getters, key, {
      get: () => state[key],
      enumerable: true,
    })
  }
}

function setupStatus($actions: any, $status: any) {
  Object.defineProperty($status, 'loading', {
    get: () => Object.keys($actions).some(key => $status[key].loading),
    enumerable: true,
  })
  Object.defineProperty($status, 'finished', {
    get: () => Object.keys($actions).every(key => $status[key].finished),
    enumerable: true,
  })
  Object.defineProperty($status, 'error', {
    get: () => Object.keys($actions).find(key => $status[key].error),
    enumerable: true,
  })
}
