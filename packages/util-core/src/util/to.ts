import { isFunction } from 'lodash-es'

/**
 * Convert a promise to a tuple of [error, data].
 * @param promise - The promise to convert.
 * @param error - The error to return if the promise fails.
 * @returns The tuple of [error, data].
 * @example
 * ```ts
 * to(Promise.resolve('data')) // Promise<[null, 'data']>
 * to(Promise.reject(new Error('error'))) // Promise<[Error, undefined]>
 */
export async function to<T, U = Error>(promise: Promise<T> | (() => Promise<T>), error?: object): Promise<[U, undefined] | [null, T]> {
  return (isFunction(promise) ? promise() : promise)
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (error) {
        const parsedError = Object.assign({}, err, error)
        return [parsedError, undefined]
      }
      return [err, undefined]
    })
}
