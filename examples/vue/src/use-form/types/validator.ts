import type { INPUT_VALIDATION_RULES } from '../constants'
import type { Message } from './errors'
import type { ValuePath, ValuePathValue } from './path'
import type { StructValues } from './struct'

export type ValidationValue = boolean | number | string | RegExp
export type ValidationRule<TValidationValue extends ValidationValue = ValidationValue> = TValidationValue | ValidationValueMessage<TValidationValue>

export interface ValidationValueMessage<TValidationValue extends ValidationValue = ValidationValue> {
  value: TValidationValue
  message: Message
}

export type ValidateResult = Message | Message[] | boolean | undefined
export type Validate<Value, FormValues> = (value: Value, formValues: FormValues) => ValidateResult | Promise<ValidateResult>

export type RegisterOptions<Values extends StructValues = StructValues, TFieldName extends ValuePath<Values> = ValuePath<Values>>
  = Partial<{
    required: Message | ValidationRule<boolean>
    min: ValidationRule<number | string>
    max: ValidationRule<number | string>
    maxLength: ValidationRule<number>
    minLength: ValidationRule<number>
    validate: Validate<ValuePathValue<Values, TFieldName>, Values> | Record<string, Validate<ValuePathValue<Values, TFieldName>, Values>>
    value: ValuePathValue<Values, TFieldName>
    setValueAs: (value: any) => any
    shouldUnregister?: boolean
    onChange?: (event: any) => void
    onBlur?: (event: any) => void
    disabled: boolean
    deps: ValuePath<Values> | ValuePath<Values>[]
  }> & ({
    pattern?: ValidationRule<RegExp>
    valueAsNumber?: false
    valueAsDate?: false
  } | {
    pattern?: undefined
    valueAsNumber?: false
    valueAsDate?: true
  } | {
    pattern?: undefined
    valueAsNumber?: true
    valueAsDate?: false
  })

export type InputValidationRules = typeof INPUT_VALIDATION_RULES
export type MaxType = InputValidationRules['max'] | InputValidationRules['maxLength']
export type MinType = InputValidationRules['min'] | InputValidationRules['minLength']
