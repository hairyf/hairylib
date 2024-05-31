/* eslint-disable @typescript-eslint/consistent-type-definitions */

export type AtwillNumber = string | number
export type AtwillObject = { [key: string]: any }
export type AtwillNumberObject = { [key: string]: AtwillNumber }
export type StringObject = { [key: string]: string }
export type NumberObject = { [key: string]: string }
export type SymbolObject = { [key: string]: symbol }

export type Key = string | number | symbol

export type BooleanLike = any
