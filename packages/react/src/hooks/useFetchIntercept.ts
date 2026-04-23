import type { FetchRequestInterceptCallback, FetchResponseInterceptCallback } from '@hairy/utils'
import { fetchRequestIntercept, fetchResponseIntercept } from '@hairy/utils'
import { useMount } from 'react-use'

export function useFetchResponseIntercept(intercept: FetchResponseInterceptCallback) {
  useMount(() => fetchResponseIntercept(intercept))
}

export function useFetchRequestIntercept(intercept: FetchRequestInterceptCallback) {
  useMount(() => fetchRequestIntercept(intercept))
}
