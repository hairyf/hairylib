import type { FieldError, FieldErrors } from './errors'
import type { StructValues } from './struct'
import type { DeepMap, DeepPartial } from './utils'

export type FieldNamesMarkedBoolean<Values extends StructValues> = DeepMap<DeepPartial<Values>, boolean>

export interface FormState<Values extends StructValues = StructValues> {
  isDirty: boolean
  isLoading: boolean
  isSubmitted: boolean
  isSubmitSuccessful: boolean
  isSubmitting: boolean
  isValidating: boolean
  isValid: boolean
  disabled: boolean
  submitCount: number
  defaultValues?: undefined | Readonly<DeepPartial<Values>>
  dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<Values>>>
  touchedFields: Partial<Readonly<FieldNamesMarkedBoolean<Values>>>
  validatingFields: Partial<Readonly<FieldNamesMarkedBoolean<Values>>>
  errors: FieldErrors<Values>
  isReady: boolean
}
export interface FormStateProxy<Values extends StructValues = StructValues> {
  isDirty: boolean
  isValidating: boolean
  dirtyFields: FieldNamesMarkedBoolean<Values>
  touchedFields: FieldNamesMarkedBoolean<Values>
  validatingFields: FieldNamesMarkedBoolean<Values>
  errors: boolean
  isValid: boolean
}

export interface FieldState {
  /**
   * 字段值是否不符合验证规则
   */
  invalid: boolean
  /**
   *  字段值是否被修改（字段值与 defaultValues 不同）
   */
  isDirty: boolean
  /**
   * 用户更改后（trigger）触发过验证
   */
  isTouched: boolean
  /**
   * 是否正在验证
   */
  isValidating: boolean
  /**
   * 验证错误信息
   */
  error?: FieldError
}

/**
 * This method will return individual field states. It will be useful when you are trying to retrieve the nested value field state in a typesafe approach.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform/getfieldstate) • [Demo](https://codesandbox.io/s/getfieldstate-jvekk)
 *
 * @param name - the path name to the form field value.
 *
 * @returns invalid, isDirty, isTouched and error object
 *
 * @example
 * ```tsx
 * // those formState has to be subscribed
 * state.root.dirtyFields
 * state.root.errors
 * state.root.touchedFields
 *
 * state.name.error
 * state.name.invalid
 * ```
 */
export interface State<Values extends StructValues> { form: FormState<Values>, fields: DeepMap<Values, FieldState> }
