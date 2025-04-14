import type { Key, Numeric } from './atom'

/**
 * Promise, or maybe not
 */
export type Awaitable<T> = T | PromiseLike<T>

/**
 * Array, or not yet
 */
export type Arrayable<T> = T | T[]

/**
 * Null or whatever
 */
export type Nullable<T> = T | null | undefined

/**
 * Infers the element type of an array
 */
export type ElementOf<T> = T extends (infer E)[] ? E : never

/**
 * Function
 */
export type Fn<T = void> = () => T

/**
 * Function with arguments
 */
export type AnyFn = (...args: any[]) => any

/**
 * Function with arguments
 */

/**
 * Constructor
 */
export type Constructor<T = void> = new (...args: any[]) => T

/**
 * Infers the arguments type of a function
 */
export type ArgumentsType<T> = T extends ((...args: infer A) => any) ? A : never

export type Option<
  L extends Key = 'label',
  V extends Key = 'value',
  C extends Key = 'children',
> = {
  [P in L]?: string
} & {
  [P in V]?: Numeric
} & {
  [P in C]?: Option<L, V, C>[]
}
