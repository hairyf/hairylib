import type { UseWatchCallback, UseWatchOptions } from './useWatch'
import { useWatch } from './useWatch'

export function useWhenever<T>(source: T, cb: UseWatchCallback<Exclude<T, null | undefined>>, options?: UseWatchOptions) {
  useWatch(source, (value, oldValue) => value && cb(value as any, oldValue as any), options)
}
