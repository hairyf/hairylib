import { ref, Ref } from 'vue'

export type PromiseFactory<V = any> = (...args: any[]) => Promise<V>

export interface UsePromiseReturn<T extends PromiseFactory> {
  loading: Ref<boolean>
  error: Ref<any>
  execute: T
  state: T extends PromiseFactory<infer V> ? Ref<V | undefined> : any
  throw?: boolean
}

export const usePromise = <T extends PromiseFactory>(factory: T): UsePromiseReturn<T> => {
  const loading = ref(false)
  const error = ref(null)
  const state = ref<any>()
  const execute = async (...args: Parameters<T>) => {
    try {
      loading.value = true
      const value = await factory(...args)
      loading.value = false
      state.value = value
      return value
    } catch (_error: any) {
      loading.value = false
      error.value = _error
      throw _error
    }
  }

  return { loading, error, execute: execute as any, state: state as any }
}
