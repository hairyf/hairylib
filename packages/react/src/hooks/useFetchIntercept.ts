import { useMount } from 'react-use'

export interface FetchResponseInterceptCallback {
  (response: Response, init: RequestInit | undefined): Response | Promise<Response>
}
export interface FetchRequestInterceptCallback {
  (fetch: typeof window.fetch, input: RequestInfo | URL, init?: RequestInit | undefined): Response | Promise<Response>
}

export function useFetchResponseIntercept(intercept: FetchResponseInterceptCallback) {
  useMount(() => fetchResponseIntercept(intercept))
}

export function useFetchRequestIntercept(intercept: FetchRequestInterceptCallback) {
  useMount(() => fetchRequestIntercept(intercept))
}

function fetchResponseIntercept(intercept: FetchResponseInterceptCallback) {
  const { fetch: originalFetch } = window
  window.fetch = async (...args) => {
    const [resource, config] = args
    // request interceptor here
    const response = await originalFetch(resource, config)
    // response interceptor here
    return intercept(response, config)
  }
}

function fetchRequestIntercept(intercept: FetchRequestInterceptCallback) {
  const { fetch: originalFetch } = window
  window.fetch = async (...args) => {
    const [resource, config] = args
    // request interceptor here
    return intercept(originalFetch, resource, config)
  }
}
