import type { Field, InternalFieldName, StructValues } from '../types'
import type { ValuePath } from '../types/path'

export function resolveFlattenFields<Values extends StructValues>(
  names: Set<InternalFieldName> | InternalFieldName[],
  _fields: Values,
) {
  const fields: Record<InternalFieldName, Field<Values, ValuePath<Values>>> = {}
  for (const name of names)
    fields[name] = _fields[name]
  return fields as any
}
