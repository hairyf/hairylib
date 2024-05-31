/**
 * Intercept front and back characters, hide middle characters
 * @param value
 * @param mode
 * @param symbol
 */
export function cover(value: string, mode: [number, number, number], symbol = '*') {
  return value.slice(0, mode[0]) + symbol.repeat(mode[1]) + value.slice(-mode[2])
}
