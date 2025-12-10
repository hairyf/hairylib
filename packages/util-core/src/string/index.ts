import { isObject } from 'lodash-es'

/**
 * Intercept front and back characters, hide middle characters
 * @param value
 * @param mode
 * @param symbol
 */
export function cover(value: string, mode: [number, number, number], symbol = '*') {
  return value.slice(0, mode[0]) + symbol.repeat(mode[1]) + value.slice(-mode[2])
}

/**
 * Shortens an identifier string by showing only the beginning and end portions,
 * with ellipsis in the middle. Suitable for various types of identifiers like
 * IPFS CID, transaction hashes, EVM addresses, user IDs, etc.
 *
 * @param value - The identifier string to shorten
 * @param startWith - Number of characters to show at the start (default: 6)
 * @param endWith - Number of characters to show at the end (default: 6)
 * @returns Shortened identifier string with ellipsis, or empty string if id is null/undefined
 */
export function shortenId(value: string | null | undefined, startWith: number = 6, endWith: number = 4) {
  if (!value)
    return ''
  return `${value.slice(0, startWith)}...${value.slice(-endWith)}`
}

/**
 * Replace backslash to slash
 *
 * @category String
 */
export function slash(str: string): string {
  return str.replace(/\\/g, '/')
}

/**
 * Ensure prefix of a string
 *
 * @category String
 */
export function ensurePrefix(prefix: string, str: string): string {
  if (!str.startsWith(prefix))
    return prefix + str
  return str
}

/**
 * Ensure suffix of a string
 *
 * @category String
 */
export function ensureSuffix(suffix: string, str: string): string {
  if (!str.endsWith(suffix))
    return str + suffix
  return str
}

/**
 * Dead simple template engine, just like Python's `.format()`
 * Support passing variables as either in index based or object/name based approach
 * While using object/name based approach, you can pass a fallback value as the third argument
 *
 * @category String
 * @example
 * ```
 * const result = template(
 *   'Hello {0}! My name is {1}.',
 *   'Inès',
 *   'Anthony'
 * ) // Hello Inès! My name is Anthony.
 * ```
 *
 * ```
 * const result = namedTemplate(
 *   '{greet}! My name is {name}.',
 *   { greet: 'Hello', name: 'Anthony' }
 * ) // Hello! My name is Anthony.
 * ```
 *
 * const result = namedTemplate(
 *   '{greet}! My name is {name}.',
 *   { greet: 'Hello' }, // name isn't passed hence fallback will be used for name
 *   'placeholder'
 * ) // Hello! My name is placeholder.
 * ```
 */
export function template(str: string, object: Record<string | number, any>, fallback?: string | ((key: string) => string)): string
export function template(str: string, ...args: (string | number | bigint | undefined | null)[]): string
export function template(str: string, ...args: any[]): string {
  const [firstArg, fallback] = args

  if (isObject(firstArg)) {
    const vars = firstArg as Record<string, any>
    return str.replace(/\{(\w+)\}/g, (_, key) => vars[key] || ((typeof fallback === 'function' ? fallback(key) : fallback) ?? key))
  }
  else {
    return str.replace(/\{(\d+)\}/g, (_, key) => {
      const index = Number(key)
      if (Number.isNaN(index))
        return key
      return args[index]
    })
  }
}

const _reFullWs = /^\s*$/
/**
 * Remove common leading whitespace from a template string.
 * Will also remove empty lines at the beginning and end.
 * @category string
 * @example
 * ```ts
 * const str = unindent`
 *   if (a) {
 *     b()
 *   }
 * `
 */
export function unindent(str: TemplateStringsArray | string) {
  const lines = (typeof str === 'string' ? str : str[0]).split('\n')
  const whitespaceLines = lines.map(line => _reFullWs.test(line))

  const commonIndent = lines
    .reduce((min, line, idx) => {
      if (whitespaceLines[idx])
        return min
      const indent = line.match(/^\s*/)?.[0].length
      return indent === undefined ? min : Math.min(min, indent)
    }, Number.POSITIVE_INFINITY)

  let emptyLinesHead = 0
  while (emptyLinesHead < lines.length && whitespaceLines[emptyLinesHead])
    emptyLinesHead++
  let emptyLinesTail = 0
  while (emptyLinesTail < lines.length && whitespaceLines[lines.length - emptyLinesTail - 1])
    emptyLinesTail++

  return lines
    .slice(emptyLinesHead, lines.length - emptyLinesTail)
    .map(line => line.slice(commonIndent))
    .join('\n')
}
