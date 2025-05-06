import type { Key, Numeric } from './atom'

export type Awaitable<T> = T | PromiseLike<T>
export type Arrayable<T> = T | T[]
export type Promisify<T> = Promise<Awaited<T>>
export type ElementOf<T> = T extends (infer E)[] ? E : never
export type Nullable<T> = T | null | undefined

export type Fn<T = void> = () => T
export type AnyFn = (...args: any[]) => any
export type PromiseFn = (...args: any[]) => Promise<any>

export type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N
export type IsAny<T> = IfAny<T, true, false>

export type ConstructorType<T = void> = new (...args: any[]) => T

export type ArgumentsType<T> = T extends ((...args: infer A) => any) ? A : never
export declare type PromiseType<P extends PromiseLike<any>> = P extends PromiseLike<infer T> ? T : never

export type Option<L extends Key = 'label', V extends Key = 'value', C extends Key = 'children'> =
  { [P in L]?: string } &
  { [P in V]?: Numeric } &
  { [P in C]?: Option<L, V, C>[] }
