import { ref, Ref } from 'vue'

export type PromiseFactory<V = any> = (...args: any[]) => Promise<V>
export interface UsePromiseResult<T extends PromiseFactory> {
  loading: Ref<boolean>
  error: Ref<any>
  exec: T
  result: T extends PromiseFactory<infer V> ? Ref<V | undefined> : any
}

export const usePromise = <T extends PromiseFactory>(factory: T): UsePromiseResult<T> => {
  const loading = ref(false)
  const error = ref(null)
  const result = ref<any>()
  const exec = async (...args: Parameters<T>) => {
    loading.value = true
    try {
      const value = await factory(...args)
      loading.value = false
      result.value = value
      return value
    } catch (_error: any) {
      loading.value = false
      error.value = _error
      throw _error
    }
  }
  return { loading, error, exec: exec as any, result: result as any }
}
