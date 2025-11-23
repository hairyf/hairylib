import type {
  ClearError,
  Focus,
  HandleSubmit,
  Register,
  Reset,
  ResetField,
  SetError,
  Unregister,
  Update,
} from './actions'
import type { Control } from './control'

import type { AsyncDefaultValues, DefaultValues } from './default-values'
import type { FieldErrors } from './errors'
import type { CriteriaMode, Mode, RevalidateMode } from './mode'
import type { KeepStateOptions } from './reset'
import type { Resolver } from './resolver'
import type { State } from './state'
import type { StructValues } from './struct'
import type { Trigger } from './trigger'

export interface FormProps<
  Values extends StructValues = StructValues,
  Context = any,
  TransformedValues extends StructValues = StructValues,
> {
  mode?: Mode
  disabled?: boolean
  reValidateMode?: RevalidateMode
  defaultValues?: DefaultValues<Values> | AsyncDefaultValues<Values>

  values?: Values
  errors?: FieldErrors<Values>
  resetOptions?: KeepStateOptions
  resolver?: Resolver<Values, Context, TransformedValues>

  context?: Context

  shouldFocusError?: boolean
  shouldUnregister?: boolean
  shouldUseNativeValidation?: boolean
  progressive?: boolean
  criteriaMode?: CriteriaMode
  delayError?: number
}

export interface Form<
  Values extends StructValues = StructValues,
  Context = any,
  TransformedValues extends StructValues = StructValues,
> {
  control: Control<Values, Context, TransformedValues>

  update: Update<Values>
  values: Values

  state: State<Values>

  trigger: Trigger<Values>

  resetField: ResetField<Values>
  reset: Reset<Values>

  handleSubmit: HandleSubmit<Values, TransformedValues>

  setError: SetError<Values>
  clearError: ClearError<Values>

  register: Register<Values>
  unregister: Unregister<Values>

  focus: Focus<Values>
}
