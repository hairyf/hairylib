import type { BrowserNativeObject, IsAny, NonUndefined } from './util'

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P]
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type DeepReplace<T, K = unknown, V = unknown> = {
  [P in keyof T]: K extends P ? V : DeepReplace<T[P], K, V>
}

export type DeepKeyof<T> = T extends object ? keyof T | DeepKeyof<T[keyof T]> : never

export type MergeInsertions<T> =
  T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
    : T

export type DeepMerge<F, S> = MergeInsertions<{
  [K in keyof F | keyof S]: K extends keyof S & keyof F
    ? DeepMerge<F[K], S[K]>
    : K extends keyof S
      ? S[K]
      : K extends keyof F
        ? F[K]
        : never;
}>

export type DeepMap<T, V, ST = BrowserNativeObject> = IsAny<T> extends true ? any : T extends ST ? V : T extends object ? {
  [K in keyof T]: DeepMap<NonUndefined<T[K]>, V, ST>;
} : V
