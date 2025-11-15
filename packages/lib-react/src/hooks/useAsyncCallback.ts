import type { PromiseFn } from '@hairy/utils'
import { useState } from 'react'

export function useAsyncCallback<T extends PromiseFn>(fun: T) {
  const [state, set] = useState<{ loading: boolean, error?: Error }>({ loading: false })
  async function refetch(...args: any[]) {
    set({ loading: true })
    return fun(...args)
      .then((value) => {
        set({ loading: false })
        return value
      })
      .catch((err) => {
        set({ loading: false, error: err })
        return Promise.reject(err)
      })
  }

  return [state.loading, refetch as unknown as T, state.error] as const
}
