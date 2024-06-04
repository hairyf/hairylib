import { useState } from 'react'

export function useAsyncCallback<T extends (...args: any[]) => any>(fun: T) {
  const [error, setError] = useState<Error>()
  const [loading, setLoading] = useState(false)
  async function execute(...args: any[]) {
    try {
      setLoading(true)
      const result = await fun(...args)
      setLoading(false)
      return result
    }
    catch (error: any) {
      setLoading(false)
      setError(error)
      throw error
    }
  }

  return [loading, execute as unknown as T, error] as const
}
