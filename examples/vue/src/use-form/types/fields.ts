import type { ComponentPublicInstance } from 'vue'
import type { ValuePath, ValuePathValue } from './path'
import type { StructValues } from './struct'
import type { DeepMap, IsFlatObject, Noop } from './utils'

export type InternalFieldName = string
export type FieldName<Values extends StructValues> = IsFlatObject<Values> extends true ? Extract<keyof Values, string> : string
export interface FieldEvent { target: any, type?: any }
export type ChangeHandler = (event: FieldEvent) => Promise<void | boolean>

export type CustomElement<Values extends StructValues> = Partial<HTMLElement> & {
  name: FieldName<Values>
  type?: string
  value?: any
  disabled?: boolean
  checked?: boolean
  options?: HTMLOptionsCollection
  files?: FileList | null
  focus?: Noop
}
export type FieldValue<Values extends StructValues> = Values[InternalFieldName]
export type NativeFieldValue = string | number | boolean | null | undefined | unknown[]

export type FieldElement<Values extends StructValues = StructValues> = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | CustomElement<Values>

export interface FieldProps<Values extends StructValues, FieldName extends ValuePath<Values>> {
  ref: (ref: Element | ComponentPublicInstance | null, refs: Record<string, any>) => void
  value: ValuePathValue<Values, FieldName>
  onChange: ChangeHandler
  onBlur: ChangeHandler
  name: ValuePath<Values>
  disabled: boolean
  max: number | undefined
  maxLength: number | undefined
  min: number | undefined
  minLength: number | undefined
  pattern: string | undefined
  required: boolean | undefined
}

export interface FieldRef<Values extends StructValues, FieldName extends ValuePath<Values>> {
  ref?: FieldElement<Values>
  name: FieldName
  refs?: Record<string, any>
  mount?: boolean
}

export interface Field<Values extends StructValues, FieldName extends ValuePath<Values>> {
  _p: FieldProps<Values, FieldName>
  _f: FieldRef<Values, FieldName>
}

export type Fields<Values extends StructValues> = DeepMap<Values, Field<Values, ValuePath<Values>>>
