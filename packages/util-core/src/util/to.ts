import { isFunction } from 'lodash-es'

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
