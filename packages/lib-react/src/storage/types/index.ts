import type { PersistantOptions } from '../persistant'

export type Actions<S> = Record<string, (this: S, ...args: any) => any>
export type Getters<S> = Record<string, (this: S) => any>

export type ActionsOmitThisParameter<A extends Actions<any>> = {
  [K in keyof A]: (...args: Parameters<A[K]>) => ReturnType<A[K]>
}
export interface Status {
  finished: boolean
  loading: boolean
  error: Error | null
}

export type ActionsStatus<A extends Actions<any>> = Status & { [K in keyof A]: Status }
export type GettersReturnType<G extends Getters<any>> = {
  [K in keyof G]: ReturnType<G[K]>
}

export interface StoreDefine<S extends object, A extends Actions<S>, G extends Getters<S>> {
  state: (() => S) | S
  actions?: A
  getters?: G
}

export interface StoreOptions {
  persist?: string | PersistantOptions
}

export interface StoreSignal<S, A extends Actions<S>, G extends Getters<S>> {
  <T>(fn: (state: S & GettersReturnType<G>) => T): T
  status: <T>(fn: (status: ActionsStatus<A>) => T) => T
}
export interface StoreSubscribe<S, A extends Actions<S>, G extends Getters<S>> {
  (listener: (state: S & GettersReturnType<G>) => void): () => void
  status: (listener: (status: ActionsStatus<A>) => void) => () => void
}
export interface StorePatch<S, G extends Getters<S>> {
  (patch: Partial<S> | ((state: S & GettersReturnType<G>) => void)): void
}

export type Store<S, A extends Actions<S>, G extends Getters<S>> = {
  $subscribe: StoreSubscribe<S, A, G>
  $patch: StorePatch<S, G>
  $state: S & GettersReturnType<G> & ActionsOmitThisParameter<A>
  $actions: ActionsOmitThisParameter<A>
  $getters: GettersReturnType<G>
  $status: ActionsStatus<A>
  $signal: StoreSignal<S, A, G>
} & ActionsOmitThisParameter<A>
