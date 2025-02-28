import type { WatchCallback, WatchOptions } from './useWatch'
import { useWatch } from './useWatch'

export function useWhenever<T>(source: T, cb: WatchCallback<Exclude<T, null | undefined>>, options?: WatchOptions) {
  useWatch(source, () => source && cb(source as any), options)
}
