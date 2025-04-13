import type { Actions, Getters, GettersReturnType, Store, StoreDefine, StoreOptions } from './types'
import { createElement } from 'react'
import { proxy, subscribe, useSnapshot } from 'valtio'
import { proxyWithPersistant } from './proxyWithPersistant'

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

  const $state = options.persist
    ? proxyWithPersistant(options.persist as string, state)
    : proxy(state)

  const $status = proxy(status)

  const $actions: any = {}
  const $getters: any = {}

  markActions($state, actions, $actions)
  markGetters(state, $state, getters, $getters)
  markStatus($actions, $status)

  function $subscribe(listener: (state: S & GettersReturnType<G>) => void) {
    return subscribe($state, () => listener($state as any))
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
    ...$state,
  }
}

function markActions($state: any, actions: any, $actions: any) {
  for (const key in actions)
    $actions[key] = actions[key].bind($state)
}

function markGetters(state: any, $state: any, getters: any, $getters: any) {
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

function markStatus($actions: any, $status: any) {
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

  for (const key in $actions) {
    const action = $actions[key]
    $status[key] = { finished: false, loading: false, error: null }
    let subscribers = 0

    function subscribe() {
      if (subscribers === 0)
        $status[key].loading = true
      subscribers++
    }
    function done() {
      subscribers--
      if (!subscribers)
        $status[key].loading = false
    }
    $actions[key] = function (...args: any[]) {
      subscribe()
      try {
        const result = action(...args)
        if (result instanceof Promise) {
          result
            .then(() => $status[key].finished = true)
            .catch(error => $status[key].error = error)
            .finally(done)
        }
        else {
          $status[key].finished = true
          done()
        }
      }
      catch (error) {
        $status[key].error = error
        done()
      }
    }
  }
}
