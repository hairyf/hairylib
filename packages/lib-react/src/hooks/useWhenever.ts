import type { UseWatchCallback, UseWatchOptions } from './useWatch'
import { useWatch } from './useWatch'

export function useWhenever<T>(source: T, cb: UseWatchCallback<Exclude<T, null | undefined>>, options?: UseWatchOptions) {
  useWatch(source, () => source && cb(source as any), options)
}
