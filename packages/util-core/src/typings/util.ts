import type { Key, Numeric } from './atom'

export type Awaitable<T> = T | Promise<T>
export type Arrayable<T> = T | T[]

export type Option<
  L extends Key = 'label', V extends Key = 'value', C extends Key = 'children',
> = {
  [P in L]?: string
} & {
  [P in V]?: Numeric
} & {
  [P in C]?: Option<L, V, C>[]
}
