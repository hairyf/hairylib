export const EVENTS = {
  BLUR: 'blur',
  FOCUS_OUT: 'focusout',
  CHANGE: 'change',
}
export const VALIDATION_MODE = {
  onBlur: 'onBlur',
  onChange: 'onChange',
  onSubmit: 'onSubmit',
  onTouched: 'onTouched',
  all: 'all',
}
export const INPUT_VALIDATION_RULES = {
  max: 'max',
  min: 'min',
  maxLength: 'maxLength',
  minLength: 'minLength',
  pattern: 'pattern',
  required: 'required',
  validate: 'validate',
}

export type ElementMapKey = keyof typeof ELEMENT_VALUE_MAP

export const ELEMENT_VALUE_MAP = {
  CHECKBOX: 'checked',
  RADIO: 'checked',
  SELECT: 'value',
}

export const ELEMENT_EVENT_MAP = {
  CHECKBOX: 'onChange',
  RADIO: 'onChange',
  SELECT: 'onChange',
}
