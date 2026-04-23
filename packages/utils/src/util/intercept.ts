export interface FetchResponseInterceptCallback {
  (response: Response, init: RequestInit | undefined): Response | Promise<Response>
}
export interface FetchRequestInterceptCallback {
  (fetch: typeof window.fetch, input: RequestInfo | URL, init?: RequestInit | undefined): Response | Promise<Response>
}

export function fetchResponseIntercept(intercept: FetchResponseInterceptCallback) {
  const { fetch: originalFetch } = window
  window.fetch = async (...args) => {
    const [resource, config] = args
    // request interceptor here
    const response = await originalFetch(resource, config)
    // response interceptor here
    return intercept(response, config)
  }
}

export function fetchRequestIntercept(intercept: FetchRequestInterceptCallback) {
  const { fetch: originalFetch } = window
  window.fetch = async (...args) => {
    const [resource, config] = args
    // request interceptor here
    return intercept(originalFetch, resource, config)
  }
}
