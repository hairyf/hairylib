import type { AnyFn, PromiseFn, PromiseType } from '@hairy/utils'
import type { AsyncStateReturn } from './types'
import { useEffect, useState } from 'react'
import { useAsyncCallback } from './useAsyncCallback'

export type UseAsyncStateOptions<T extends AnyFn> = {
  immediate?: boolean
  initial?: PromiseType<ReturnType<T>>
  deps?: any[]
} | {
  immediate?: boolean
  initial: PromiseType<ReturnType<T>>
  deps?: any[]
}

export function useAsyncState<T extends PromiseFn>(
  fun: T,
  deps: any[] = [],
  options?: UseAsyncStateOptions<T>,
): AsyncStateReturn<T> {
  const [value, set] = useState(options?.initial)
  const [loading, execute, error] = useAsyncCallback(async (...args: any[]) => fun(...args).then(set))
  useEffect(
    () => {
      execute()
    },
    deps,
  )
  return [{ value, loading, error }, execute] as any
}
