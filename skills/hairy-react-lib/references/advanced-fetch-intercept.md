---
name: advanced-fetch-intercept
description: Request/response interception utilities
---

# Fetch Intercept

## Usage

### Response Interception

Intercept and modify responses:

```typescript
import { useFetchResponseIntercept } from '@hairy/react-lib'

function App() {
  useFetchResponseIntercept(async (response, init) => {
    // Modify response
    if (response.status === 401) {
      // Handle unauthorized
      window.location.href = '/login'
    }
    
    // Log responses
    console.log('Response:', response.url, response.status)
    
    return response
  })

  return <div>App content</div>
}
```

### Request Interception

Intercept and modify requests:

```typescript
import { useFetchRequestIntercept } from '@hairy/react-lib'

function App() {
  useFetchRequestIntercept(async (originalFetch, input, init) => {
    // Add auth token
    const headers = new Headers(init?.headers)
    headers.set('Authorization', `Bearer ${token}`)
    
    // Log requests
    console.log('Request:', input)
    
    return originalFetch(input, {
      ...init,
      headers
    })
  })

  return <div>App content</div>
}
```

### Combined Interception

```typescript
import { 
  useFetchRequestIntercept, 
  useFetchResponseIntercept 
} from '@hairy/react-lib'

function App() {
  // Add auth to all requests
  useFetchRequestIntercept(async (originalFetch, input, init) => {
    const headers = new Headers(init?.headers)
    headers.set('Authorization', `Bearer ${token}`)
    return originalFetch(input, { ...init, headers })
  })

  // Handle errors globally
  useFetchResponseIntercept(async (response) => {
    if (!response.ok) {
      const error = await response.json()
      showErrorToast(error.message)
    }
    return response
  })

  return <div>App content</div>
}
```

## Key Points

* **Global interception**: Hooks modify `window.fetch` globally. Use at app root level.
* **Request intercept**: Modify requests before they're sent (add headers, log, transform).
* **Response intercept**: Modify responses after they're received (handle errors, transform data).
* **Mount-only**: Hooks run once on mount. Interceptors persist for app lifetime.
* **Order matters**: Multiple interceptors stack. Last registered runs first.
* **Return value**: Must return Response (or Promise<Response>). Can clone and modify.
* **Use cases**: Authentication, error handling, logging, request/response transformation.
