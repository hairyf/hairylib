import { ref, Ref } from 'vue'

export type Promisefactory = (...args: any[]) => Promise<any>
export interface UsePromiseResult<T extends Promisefactory> {
  loading: Ref<boolean>
  error: Ref<any>
  exec: T
}

export const usePromise = <T extends Promisefactory>(factory: T): UsePromiseResult<T> => {
  const loading = ref(false)
  const error = ref(null)
  const exec = async (...args: Parameters<T>) => {
    loading.value = true
    try {
      const result = await factory(...args)
      loading.value = false
      return result
    } catch (_error: any) {
      loading.value = false
      error.value = _error
      throw _error
    }
  }
  return { loading, error, exec: exec as any }
}
