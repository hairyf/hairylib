import type { ValuePath } from './path'
import type { StructValues } from './struct'

export type TriggerConfig = Partial<{
  shouldFocus: boolean
}>
/**
 * Trigger field or form validation
 *
 * @remarks
 * [API](TODO) • [Demo](TODO) • [Video](TODO)
 *
 * @param name - provide empty argument will trigger the entire form validation, an array of field names will validate an array of fields, and a single field name will only trigger that field's validation.
 * @param options - should focus on the error field
 *
 * @returns validation result
 *
 * @example
 * ```ts
 * const result = await trigger(); // result will be a boolean value
 * ```
 */
export interface Trigger<Values extends StructValues> {
  (name?: ValuePath<Values> | ValuePath<Values>[], options?: TriggerConfig): Promise<boolean>
}
