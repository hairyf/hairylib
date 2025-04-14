import type { PromiseFn } from '@hairy/utils'
import { useState } from 'react'

export function useAsyncCallback<T extends PromiseFn>(fun: T) {
  const [state, set] = useState<{ loading: boolean, error?: Error }>({ loading: false })
  async function execute(...args: any[]) {
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

  return [state.loading, execute as unknown as T, state.error] as const
}
