import type { FormProps } from '.'
import type { ClearError, Focus, HandleSubmit, Register, Reset, ResetField, SetError, Unregister, Update } from './actions'
import type { DefaultValues } from './default-values'
import type { FieldErrors } from './errors'
import type { FieldName, Fields, InternalFieldName } from './fields'
import type { State } from './state'
import type { StructValues } from './struct'
import type { Trigger } from './trigger'
import type { Noop } from './utils'

export type GetIsDirty = <Name extends InternalFieldName, Data>(name?: Name, data?: Data) => boolean

export type InternalNameSet = Set<InternalFieldName>
export type Names = InternalNameSet
// export interface Names {
//   mount: InternalNameSet
//   unMount: InternalNameSet
//   disabled: InternalNameSet
//   array: InternalNameSet
//   watch: InternalNameSet
//   focus?: InternalFieldName
//   watchAll?: boolean
// }
export type InternalSetValid = (shouldUpdateValid?: boolean) => void
export type InternalSetErrors<Values extends StructValues> = (errors: FieldErrors<Values>) => void
export type InternalSetDisabledField = (props: { disabled?: boolean, name: FieldName<any> }) => void
export type InternalRunSchema = (names: InternalFieldName[]) => Promise<{ errors: FieldErrors }>
export type InternalFocusError = () => boolean | undefined
export type InternalDisableForm = (disabled?: boolean) => void
export type InternalRemoveUnmounted = () => void
export interface InternalState {
  mount: boolean
  action: boolean
  watch: boolean
}

export interface Control<
  Values extends StructValues = StructValues,
  Context = any,
  TransformedValues extends StructValues = Values,
> {
  // _getDirty: GetIsDirty
  // _setValid: InternalSetValid
  // _setErrors: InternalSetErrors<Values>
  // _setDisabledField: InternalSetDisabledField
  // _focusError: InternalFocusError
  // _disableForm: InternalDisableForm

  _runSchema: InternalRunSchema
  _resetDefaultValues: Noop

  trigger: Trigger<Values>
  register: Register<Values>
  unregister: Unregister<Values>
  update: Update<Values>
  focus: Focus<Values>
  reset: Reset<Values>
  setError: SetError<Values>
  handleSubmit: HandleSubmit<Values, TransformedValues>
  resetField: ResetField<Values>

  clearError: ClearError<Values>

  defaultValues: Partial<DefaultValues<Values>>
  options: FormProps<Values, Context, TransformedValues>
  names: Names
  state: State<Values>
  fields: Fields<Values>
}
