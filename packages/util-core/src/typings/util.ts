import type { Key, Numeric } from './atom'

/**
 *  Any type that can be used where a big number is needed.
 */
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
export type PromiseType<P extends PromiseLike<any>> = P extends PromiseLike<infer T> ? T : never

export type BrowserNativeObject = Date | FileList | File

export type Option<L extends Key = 'label', V extends Key = 'value', C extends Key = 'children'> =
  { [P in L]?: string } &
  { [P in V]?: Numeric } &
  { [P in C]?: Option<L, V, C>[] }

export type OmitBy<T, V> = { [K in keyof T as T[K] extends V ? never : K]: T[K] }
export type PickBy<T, U> = { [K in keyof T as T[K] extends U ? K : never]: T[K] }

export type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U
export type Assign<T, U> = Omit<T, keyof U> & U
export type NonUndefined<T> = T extends undefined ? never : T
