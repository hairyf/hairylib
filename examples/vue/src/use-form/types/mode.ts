export type Mode = 'onSubmit' | 'onChange' | 'onBlur' | 'onTouched' | 'all'
export type RevalidateMode = Exclude<Mode, 'onTouched' | 'all'>
export type CriteriaMode = 'firstError' | 'all'
