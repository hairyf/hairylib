import type { DefaultValues } from './default-values'
import type { FieldError, FieldErrors } from './errors'
import type { FieldProps } from './fields'

import type { ValuePath, ValuePathValue } from './path'
import type { KeepStateOptions, ResetAction } from './reset'
import type { StructValues } from './struct'

/**
 * Set an error for the field. When set an error which is not associated to a field then manual `clearErrors` invoke is required.
 *
 * @remarks
 * [API](TODO) • [Demo](TODO) • [Video](TODO)
 *
 * @param name - the path name to the form field value.
 * @param error - an error object which contains type and optional message
 * @param options - whether or not to focus on the field
 *
 * @example
 * ```ts
 * // when the error is not associated with any fields, `clearError` will need to invoke to clear the error
 * setError("serverError", { type: "server", message: "Error occurred"})
 *
 * setError("name", { type: "min" })
 *
 * // focus on the input after setting the error
 * setError("name", { type: "max" }, { shouldFocus: true })
 * ```
 */
export interface SetError<Values extends StructValues> {
  (
    name: ValuePath<Values> | `root.${string}` | 'root',
    error: FieldError,
    options?: { shouldFocus?: boolean }
  ): void
}

/**
 * Clear the entire form errors.
 *
 * @remarks
 * [API](TODO) • [Demo](TODO) • [Video](TODO)
 *
 * @param name - the path name to the form field value.
 *
 * @example
 * Clear all errors
 * ```ts
 * clearErrors(); // clear the entire form error
 * clearErrors(["name", "name1"]) // clear an array of fields' error
 * clearErrors("name2"); // clear a single field error
 * ```
 */
export interface ClearError<Values extends StructValues> {
  (
    name?:
      | ValuePath<Values>
      | ValuePath<Values>[]
      | `root.${string}` | 'root'
  ): void
}

export type ResetFieldConfig<Values extends StructValues, FieldName extends ValuePath<Values> = ValuePath<Values>> = Partial<{
  keepDirty: boolean
  keepTouched: boolean
  keepError: boolean
  defaultValue: ValuePathValue<Values, FieldName>
}>

/**
 * Set a single field value, or a group of fields value.
 *
 * @remarks
 * [API](TODO) • [Demo](TODO) • [Video](TODO)
 *
 * @param name - the path name to the form field value.
 * @param value - field value
 * @param options - should validate or update form state
 *
 * @example
 * ```ts
 * // Update a single field
 * update('name', 'value', {
 *   shouldValidate: true, // trigger validation
 *   shouldTouch: true, // update touched fields form state
 *   shouldDirty: true, // update dirty and dirty fields form state
 * });
 *
 * // Update a group fields
 * update('root', {
 *   a: 'test', // update('root.a', 'data')
 *   b: 'test1', // update('root.b', 'data')
 * });
 *
 * // Update a nested object field
 * update('select', { label: 'test', value: 'Test' });
 * ```
 */
export interface Update<Values extends StructValues> {
  <FieldName extends ValuePath<Values> = ValuePath<Values>>(
    name: FieldName,
    value: ValuePathValue<Values, FieldName>,
    options?: { shouldDirty?: boolean }
  ): void
}

export interface UpdateOptions<Value> {
  defaultValue?: Value
  shouldValidate?: boolean
  shouldDirty?: boolean
  shouldTouch?: boolean
}

/**
 * Reset a field state and reference.
 *
 * @remarks
 * [API](TODO) • [Demo](TODO) • [Video](TODO)
 *
 * @param name - the path name to the form field value.
 * @param options - keep form state options
 *
 * @example
 * ```vue
 * <input v-bind="register('firstName')" />
 * <button type="button" @click="resetField('firstName')">Reset</button>
 * ```
 */
export interface ResetField<Values extends StructValues> {
  <FieldName extends ValuePath<Values> = ValuePath<Values>>(
    name: FieldName,
    options?: UpdateOptions<ValuePathValue<Values, FieldName>>
  ): void
}

/**
 * Reset at the entire form state.
 *
 * @remarks
 * [API](TODO) • [Demo](TODO) • [Video](TODO)
 *
 * @param values - the entire form values to be reset
 * @param keepStateOptions - keep form state options
 *
 * @example
 * ```ts
 * // reset the entire form after component mount or form defaultValues is ready
 * reset({
 *   fieldA: "test"
 *   fieldB: "test"
 * });
 *
 * // reset by combine with existing form values
 * reset({
 *   ...getValues(),
 *  fieldB: "test"
 *});
 *
 * // reset and keep form state
 * reset(
 *   { ...getValues() },
 *   {
 *     keepErrors: true,
 *     keepDirty: true
 *   }
 * );
 * ```
 */
export interface Reset<Values extends StructValues> {
  (
    values?: DefaultValues<Values> | Values | ResetAction<Values>,
    keepStateOptions?: KeepStateOptions
  ): void
}

export interface SubmitHandler<TransformedValues> {
  (data: TransformedValues, event: any): Promise<void> | void
}

export interface SubmitErrorHandler<Values extends StructValues> {
  (errors: FieldErrors<Values>, event: any): Promise<unknown>
}

/**
 * Validate the entire form. Handle submit and error callback.
 *
 * @remarks
 * [API](TODO) • [Demo](TODO) • [Video](TODO)
 *
 * @param onValid - callback function invoked after form pass validation
 * @param onInvalid - callback function invoked when form failed validation
 *
 * @returns callback - return callback function
 *
 * @example
 * ```ts
 * const onSubmit = (data) => console.log(data);
 * const onError = (error) => console.log(error);
 *
 * <form @submit="handleSubmit(onSubmit, onError)">
 *   <input v-bind="register('firstName')" />
 *   <button type="submit">Submit</button>
 * </form>
 * ```
 */
export interface HandleSubmit<
  Values extends StructValues,
  TransformedValues = Values,
> {
  (onValid: SubmitHandler<TransformedValues>, onInvalid?: SubmitErrorHandler<Values>): (event: any) => Promise<void>
}

export interface UnregisterOptions extends Omit<KeepStateOptions, 'keepIsSubmitted' | 'keepSubmitCount' | 'keepValues' | 'keepDefaultValues' | 'keepErrors'> {
  keepValue?: boolean
  keepDefaultValue?: boolean
  keepError?: boolean
}

/**
 * Unregister a field reference and remove its value.
 *
 * @remarks
 * [API](TODO) • [Demo](TODO) • [Video](TODO)
 *
 * @param name - the path name to the form field value.
 * @param options - keep form state options
 *
 * @example
 * ```vue
 * register("name", { required: true })
 *
 * <button @click="unregister('name')">Unregister</button>
 * <!-- there are various keep options to retain formState -->
 * <button @click="unregister('name', { keepErrors: true })">Unregister</button>
 * ```
 */
export interface Unregister<Values extends StructValues> {
  (
    name: ValuePath<Values>,
    options?: UnregisterOptions
  ): void
}

export interface Register<Values extends StructValues> {
  <FieldName extends ValuePath<Values> = ValuePath<Values>>(name: FieldName): FieldProps<Values, FieldName>
}

export type FocusOptions = Partial<{
  shouldSelect: boolean
}>
/**
 * Set focus on a registered field. You can start to invoke this method after all fields are mounted to the DOM.
 *
 * @remarks
 * [API](TODO) • [Demo](TODO) • [Video](TODO)
 *
 * @param name - the path name to the form field value.
 * @param options - input focus behavior options
 *
 * @example
 * ```ts
 * focus("name");
 * // shouldSelect allows to select input's content on focus
 * focus("name", { shouldSelect: true })
 * ```
 */
export interface Focus<Values extends StructValues> {
  (
    name: ValuePath<Values>,
    options?: FocusOptions
  ): void
}
