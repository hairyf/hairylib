import type { PersistantOptions } from '../proxyWithPersistant'

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

export interface Signal<S, A extends Actions<S>, G extends Getters<S>> {
  <T>(fn: (state: S & GettersReturnType<G>) => T): T
  status: <T>(fn: (status: ActionsStatus<A>) => T) => T
}

export type Store<S, A extends Actions<S>, G extends Getters<S>> = {
  $subscribe: (listener: (state: S) => void) => () => void
  $patch: (patch: Partial<S> | ((state: S) => void)) => void
  $state: S & GettersReturnType<G>
  $actions: ActionsOmitThisParameter<A>
  $getters: GettersReturnType<G>
  $status: ActionsStatus<A>
  $signal: Signal<S, A, G>
} & ActionsOmitThisParameter<A> & GettersReturnType<G>
