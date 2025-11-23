import type { FieldErrors } from './errors'
import type { Field } from './fields'
import type { CriteriaMode } from './mode'
import type { ValuePath } from './path'
import type { StructValues } from './struct'

export interface ResolverSuccess<TransformedValues> {
  values: TransformedValues
  errors: Record<string, never>
}
export interface ResolverError<Values extends StructValues = StructValues> {
  values: Record<string, never>
  errors: FieldErrors<Values>
}

export type ResolverResolved<Values extends StructValues = StructValues, TransformedValues extends StructValues = Values> = ResolverSuccess<TransformedValues> | ResolverError<Values>

export interface ResolverOptions<Values extends StructValues = StructValues> {
  criteriaMode?: CriteriaMode
  fields: Record<ValuePath<Values>, Field<Values, ValuePath<Values>>>
  names: ValuePath<Values>[]
  shouldUseNativeValidation: boolean | undefined
}

export interface Resolver<
  Values extends StructValues = StructValues,
  Context = any,
  TransformedValues extends StructValues = StructValues,
> {
  (
    fields: Values,
    context: Context | undefined,
    options: ResolverOptions<Values>
  ): Promise<
    ResolverResolved<Values, TransformedValues> | ResolverResolved<Values, TransformedValues>
  >
}
