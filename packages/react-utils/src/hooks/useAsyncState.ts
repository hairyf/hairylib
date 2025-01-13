import type { DependencyList } from 'react'
import { useAsyncFn, useMount } from 'react-use'
import type { FunctionReturningPromise, PromiseType } from 'react-use/lib/misc/types'
import type { AsyncFnReturn, AsyncState } from 'react-use/lib/useAsyncFn'

export type StateFromFunctionReturningPromise<T extends FunctionReturningPromise> = AsyncState<PromiseType<ReturnType<T>>>

export interface UseAsyncStateOptions<T extends FunctionReturningPromise> {
  immediate?: boolean
  initial?: StateFromFunctionReturningPromise<T>
}

export function useAsyncState<T extends FunctionReturningPromise>(
  fn: T,
  deps?: DependencyList,
  options?: UseAsyncStateOptions<T>,
): AsyncFnReturn<T> {
  const [state, _fn] = useAsyncFn(fn, deps, options?.initial)

  useMount(() => options?.immediate && _fn())

  return [state, _fn] as const
}
