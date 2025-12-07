/**
 * Convert a value to an array.
 * @param value - The value to convert.
 * @param required - Whether the array is required.
 * @returns The array.
 * @example
 * ```ts
 * toArray(arrorOrItemOrUndefined) // item[] | undefined
 * toArray(arrayOrItemOrUndefined, true) // item[]
 */
export function toArray<T, R extends boolean>(value?: T | T[], required: R = false as R): R extends true ? T[] : T[] | undefined {
  if (!value)
    return (required === false ? undefined : []) as R extends true ? T[] : T[] | undefined
  return Array.isArray(value) ? value : [value]
}
