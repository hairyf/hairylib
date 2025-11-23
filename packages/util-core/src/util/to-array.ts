export function toArray<T>(value?: T | T[]): T[] | undefined {
  if (!value)
    return undefined
  return Array.isArray(value) ? value : [value]
}
