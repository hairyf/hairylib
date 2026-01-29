---
name: core-async
description: Async utilities for promise handling and flow control
---

# Async Utilities

## Usage

### Promise Error Handling

Convert promises to tuples for easier error handling:

```typescript
import { to } from '@hairy/utils'

// Handle promise errors gracefully
const [error, data] = await to(fetch('/api/data'))
if (error) {
  console.error('Failed:', error)
} else {
  console.log('Success:', data)
}

// With error object merging
const [err, result] = await to(
  fetch('/api/data'),
  { context: 'API call' }
)
```

### Deferred Promises

Create promises that can be resolved/rejected externally:

```typescript
import { Deferred } from '@hairy/utils'

const deferred = new Deferred<string>()

// Resolve later
setTimeout(() => deferred.resolve('done'), 1000)

// Or reject
deferred.reject(new Error('Failed'))

// Use as regular promise
const result = await deferred
```

### Delay

Simple async delay utility:

```typescript
import { delay } from '@hairy/utils'

await delay(1000) // Wait 1 second
```

## Key Points

* **`to()`**: Always returns `[error, data]` tuple. Error is `null` on success, data is `undefined` on failure.
* **`Deferred`**: Extends Promise with `resolve()` and `reject()` methods. Useful for converting callback-based APIs to promises.
* **`delay()`**: Returns a promise that resolves after specified milliseconds. Use for rate limiting or retry logic.
