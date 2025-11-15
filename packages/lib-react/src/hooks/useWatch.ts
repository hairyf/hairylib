import { useEffect, useMemo, useRef } from 'react'
import usePrevious from './usePrevious'

export interface UseWatchCallback<T = any> {
  (value: T, oldValue: T): void
}

export interface UseWatchOptions {
  immediate?: boolean
}

export function useWatch<T extends any[]>(source: readonly [...T], callback: UseWatchCallback<[...T]>, options?: UseWatchOptions): void
export function useWatch<T>(source: T, callback: UseWatchCallback<T>, options?: UseWatchOptions): void
export function useWatch(source: any, callback: UseWatchCallback, options: UseWatchOptions = {}) {
  const firstUpdate = useRef(false)
  const then = useRef<Promise<any>>(undefined)
  const oldValue = usePrevious(source)
  const deps = useMemo(
    () => Array.isArray(source) ? source : [source],
    [source],
  )

  useEffect(() => {
    if (!firstUpdate.current)
      recordFirst()
    else
      callback(source, oldValue!)
  }, deps)

  async function recordFirst() {
    if (then.current)
      return
    then.current = Promise.resolve(source)
    then.current.then(() => firstUpdate.current = true)
    if (options.immediate)
      then.current.then(value => callback(value, oldValue!))
  }
}
