/**
 * Get a random item from an array.
 * @param array - The array to get a random item from.
 * @returns The random item.
 * @example
 * ```ts
 * randomItem(['a', 'b', 'c']) // 'a' | 'b' | 'c'
 */
export function randomItem<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)]
}

/**
 * Get a random number between a minimum and maximum value.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns The random number.
 * @example
 * ```ts
 * randomNumber(0, 100) // 0-100
 */
export function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min
}

const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

/**
 * Get a random string of a given size.
 * @param size - The size of the string.
 * @param chars - The characters to use in the string.
 * @returns The random string.
 * @example
 * ```ts
 * randomString() // 10 characters long
 * randomString(20) // 20 characters long
 * randomString(20, 'abcdefghijklmnopqrstuvwxyz') // 20 characters long
 */
export function randomString(size: number = 10, chars = urlAlphabet) {
  let id = ''
  let i = size
  const len = chars.length
  while (i--)
    id += chars[Math.random() * len | 0]
  return id
}
