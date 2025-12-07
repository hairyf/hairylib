/**
 * Delay for a given number of milliseconds.
 * @param ms - The number of milliseconds to delay.
 * @returns A promise that resolves after the given number of milliseconds.
 * @example
 * ```ts
 * delay(1000).then(() => { console.log('1 second') })
 */
export function delay(ms: number) {
  return new Promise<void>(resolve => setTimeout(resolve, ms))
}
