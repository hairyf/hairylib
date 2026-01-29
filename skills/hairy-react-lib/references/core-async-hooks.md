---
name: core-async-hooks
description: Async state management and callback handling hooks
---

# Async Hooks

## Usage

### useAsyncState

Manage async state with loading and error handling:

```typescript
import { useAsyncState } from '@hairy/react-lib'

function MyComponent() {
  const [{ value, loading, error }, refetch] = useAsyncState(
    async () => {
      const res = await fetch('/api/data')
      return res.json()
    },
    [], // dependencies
    {
      immediate: true, // Execute immediately
      initial: null    // Initial value
    }
  )

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return <div>{JSON.stringify(value)}</div>
}
```

### useAsyncCallback

Wrap async functions with loading state:

```typescript
import { useAsyncCallback } from '@hairy/react-lib'

function MyComponent() {
  const [loading, submit, error] = useAsyncCallback(
    async (data: FormData) => {
      const res = await fetch('/api/submit', {
        method: 'POST',
        body: data
      })
      return res.json()
    }
  )

  const handleSubmit = async () => {
    try {
      const result = await submit(formData)
      console.log('Success:', result)
    } catch (err) {
      console.error('Failed:', err)
    }
  }

  return (
    <button onClick={handleSubmit} disabled={loading}>
      {loading ? 'Submitting...' : 'Submit'}
    </button>
  )
}
```

## Key Points

* **`useAsyncState`**: Returns `[{ value, loading, error }, refetch]`. Automatically executes on mount if `immediate: true`.
* **`useAsyncCallback`**: Returns `[loading, callback, error]`. Callback can be invoked manually.
* **Error handling**: Both hooks catch errors and set error state. Promise rejection is preserved in `useAsyncCallback`.
* **Dependencies**: `useAsyncState` accepts dependency array for automatic refetching.
* **Initial value**: Provide `initial` option to set starting state value.
