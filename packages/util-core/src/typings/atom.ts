/* eslint-disable @typescript-eslint/consistent-type-definitions */

export type Numeric = string | number | bigint
export type DynamicObject = { [key: string]: any }
export type NumericObject = { [key: string]: Numeric }

export type StringObject = { [key: string]: string }
export type NumberObject = { [key: string]: string }
export type SymbolObject = { [key: string]: symbol }

export type Key = string | number | symbol

export type BooleanLike = any
