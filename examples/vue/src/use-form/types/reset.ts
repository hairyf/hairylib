import type { DefaultValues } from './default-values'
import type { StructValues } from './struct'

export type KeepStateOptions = Partial<{
  keepDirtyValues: boolean
  keepErrors: boolean
  keepDirty: boolean
  keepValues: boolean
  keepDefaultValues: boolean
  keepIsSubmitted: boolean
  keepIsSubmitSuccessful: boolean
  keepTouched: boolean
  keepIsValidating: boolean
  keepIsValid: boolean
  keepSubmitCount: boolean
  keepFieldsRef: boolean
}>

export type ResetAction<Values extends StructValues> = (formValues: Values) => Values
export type FormResetFields<Values extends StructValues> = DefaultValues<Values> | Values | ResetAction<Values>
