export type Numeric = string | number | bigint

export interface DynamicObject { [key: string]: any }
export interface NumericObject { [key: string]: Numeric }

export interface StringObject { [key: string]: string }
export interface NumberObject { [key: string]: string }
export interface SymbolObject { [key: string]: symbol }

export type Key = string | number | symbol

export type BooleanLike = any

export type Noop = (...args: any[]) => any
