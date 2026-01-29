---
name: advanced-utils
description: General-purpose utility functions
---

# Utility Functions

## Usage

### Common Utilities

```typescript
import { noop, toArray, getTypeof } from '@hairy/utils'

// No-op function
const callback = noop

// Convert to array
toArray(1) // [1]
toArray([1, 2]) // [1, 2]

// Get type string
getTypeof([]) // 'array'
getTypeof(null) // 'null'
getTypeof(undefined) // 'undefined'
```

### Selection Utility

```typescript
import { select } from '@hairy/utils'

// Conditional value selection
const value = select(
  [condition1, value1],
  [condition2, value2],
  [true, defaultValue] // fallback
)
```

## Key Points

* **`noop`**: Empty function, useful as default callbacks.
* **`toArray()`**: Converts single values or arrays to arrays (idempotent).
* **`getTypeof()`**: Returns type string, handles null/undefined correctly.
* **`select()`**: Pattern matching-like value selection based on conditions.
