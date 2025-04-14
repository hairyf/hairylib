import type { AnyFn, PromiseFn, PromiseType } from '@hairy/utils'
import type { AsyncStateReturn } from './types'
import { useEffect, useState } from 'react'
import { useMount } from 'react-use'
import { useAsyncCallback } from './useAsyncCallback'

export type UseAsyncStateOptions<T extends AnyFn> = {
  immediate?: boolean
  initial?: PromiseType<ReturnType<T>>
} | {
  immediate?: boolean
  initial: PromiseType<ReturnType<T>>
}

export function useAsyncState<T extends PromiseFn>(
  fun: T,
  options?: UseAsyncStateOptions<T>,
): AsyncStateReturn<T> {
  const [value, set] = useState(options?.initial)
  const [loading, execute, error] = useAsyncCallback(async (...args: any[]) => fun(...args).then(set))
  useMount(() => options?.immediate && execute())
  useEffect(() => {
    execute()
  }, [execute])
  return [{ value, loading, error }, execute] as any
}
