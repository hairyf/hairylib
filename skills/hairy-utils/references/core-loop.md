---
name: core-loop
description: Cancellable loop utilities with delay control
---

# Loop Control

## Usage

### Cancellable Loop

Create a loop that can be stopped:

```typescript
import { loop } from '@hairy/utils'

const cancel = loop(async (next) => {
  console.log('tick')
  await next(1000) // Wait 1 second before next iteration
})

// Stop the loop after 5 seconds
setTimeout(cancel, 5000)
```

### Loop with Return Value

Loop until a condition is met and return a value:

```typescript
import { loop } from '@hairy/utils'

const result = await loop.return(async (next) => {
  const data = await fetchData()
  if (data.ready) {
    return data
  }
  await next(1000) // Retry after 1 second
})

console.log(result) // Data when ready
```

## Key Points

* **`loop()`**: Returns a cancel function. Loop continues until cancel is called.
* **`loop.return()`**: Returns a promise that resolves when the loop function returns a value (not `void`).
* **`next(ms)`**: Schedules the next iteration after `ms` milliseconds. Must be awaited.
* **Use `loop()` for**: Polling, periodic tasks, or background operations that need cancellation.
* **Use `loop.return()` for**: Retry logic, waiting for conditions, or polling until a result is available.
* **Cancellation**: The cancel function from `loop()` stops future iterations but doesn't interrupt the current one.
