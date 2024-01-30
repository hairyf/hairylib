import { useEffect, useMemo, useRef } from 'react'

export interface WatchCallback<T> {
  (value: T): void
}

export interface WatchOptions {
  immediate?: boolean
}

export function useWatch<T>(source: T, callback: WatchCallback<T>, options: WatchOptions = {}) {
  const firstUpdate = useRef(false)
  const then = useRef<Promise<any>>()

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
