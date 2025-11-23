import type { AnyFn } from '@hairy/utils'
import { isFunction } from '@hairy/utils'

export interface ResolveOptions<T> {
  args?: T extends AnyFn ? Parameters<T> : never
  onPromiseStart?: () => void
  onPromiseEnded?: () => void
  onResolved?: (result: any) => void
  onRejected?: (reason: any) => void
}

export function resolve<T = any>(value: T | AnyFn, options?: ResolveOptions<T>) {
  let result: any
  if (isFunction(value)) {
    result = value(...(options?.args || []))
    if (result instanceof Promise) {
      options?.onPromiseStart?.()
      result.finally(options?.onPromiseEnded)
      result.then(options?.onResolved)
      result.catch(options?.onRejected)
    }
    else {
      options?.onResolved?.(result)
    }
  }
  else {
    options?.onResolved?.(value)
  }
  return result as T extends AnyFn ? ReturnType<T> : T
}
