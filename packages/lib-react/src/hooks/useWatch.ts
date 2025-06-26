import { useEffect, useMemo, useRef } from 'react'

export interface UseWatchCallback<T> {
  (value: T): void
}

export interface UseWatchOptions {
  immediate?: boolean
}

export function useWatch<T>(source: T, callback: UseWatchCallback<T>, options: UseWatchOptions = {}) {
  const firstUpdate = useRef(false)
  const then = useRef<Promise<any>>(undefined)

  const deps = useMemo(
    () => Array.isArray(source) ? source : [source],
    [source],
  )

  useEffect(() => {
    if (!firstUpdate.current)
      recordFirst()
    else
      callback(source)
  }, deps)

  async function recordFirst() {
    if (then.current)
      return
    then.current = Promise.resolve(source)
    then.current.then(() => firstUpdate.current = true)
    if (options.immediate)
      then.current.then(value => callback(value))
  }
}
