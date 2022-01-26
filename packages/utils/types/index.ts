export type PlainObject = {
  [key: string]: any
}

export type LooseNumber = string | number

export type Key = string | number | symbol

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P]
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type DeepKeyof<T> = T extends object ? keyof T | DeepKeyof<T[keyof T]> : never

export type DeepReplace<T, K = unknown, V = unknown> = {
  [P in keyof T]: K extends P ? V : DeepReplace<T[P], K, V>
}

export type Option<L extends Key = 'label', V extends Key = 'value', C extends Key = 'children'> = {
  [P in L]: LooseNumber
} & {
  [P in V]: LooseNumber
} & {
  [P in C]?: Option[]
}
