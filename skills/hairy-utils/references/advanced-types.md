---
name: advanced-types
description: Type definitions and type manipulation helpers
---

# Type Utilities

## Usage

### Type Definitions

```typescript
import type { Fn, PromiseFn, Numberish, BooleanLike } from '@hairy/utils'

// Function type
type MyFunction = Fn

// Promise-returning function
type AsyncFunction = PromiseFn

// Number-like type (string | number | BigNumber)
type NumericValue = Numberish

// Boolean-like type
type Condition = BooleanLike
```

## Key Points

* **`Fn`**: Generic function type.
* **`PromiseFn`**: Function that returns a Promise.
* **`Numberish`**: Union type for number inputs (string, number, BigNumber).
* **`BooleanLike`**: Type for truthy/falsy values.
* **Deep types**: Utilities for deep object manipulation and type inference.
