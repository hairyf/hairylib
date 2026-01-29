---
name: core-try-hooks
description: Error-safe React hooks with fallback behavior
---

# Try Hooks

## Usage

### tryUseState

Safe useState with fallback:

```typescript
import { tryUseState } from '@hairy/react-lib'

function MyComponent() {
  // Falls back to default if useState fails (e.g., outside React context)
  const [state, setState] = tryUseState(0)
  
  // With function initializer
  const [value, setValue] = tryUseState(() => computeInitialValue())
}
```

### tryUseEffect

Safe useEffect:

```typescript
import { tryUseEffect } from '@hairy/react-lib'

function MyComponent() {
  tryUseEffect(() => {
    // Effect logic
  }, [deps])
}
```

### tryUseRef

Safe useRef:

```typescript
import { tryUseRef } from '@hairy/react-lib'

function MyComponent() {
  const ref = tryUseRef<HTMLDivElement>(null)
  
  // Falls back to plain object { current: initialValue } if useRef fails
}
```

### tryUseCallback

Safe useCallback:

```typescript
import { tryUseCallback } from '@hairy/react-lib'

function MyComponent() {
  const callback = tryUseCallback(() => {
    // Callback logic
  }, [deps])
}
```

## Key Points

* **Error handling**: All try hooks catch errors and provide fallback behavior.
* **Use cases**: Useful when hooks might be called outside React context (e.g., in utilities, tests).
* **Fallback behavior**: 
  - `tryUseState`: Returns `[value, noop]` if useState fails
  - `tryUseRef`: Returns `{ current: initialValue }` if useRef fails
  - Others: Return appropriate defaults or no-ops
* **Type safety**: Maintains same TypeScript types as original hooks.
* **When to use**: Only when hooks might fail (edge cases, testing, utilities). Prefer regular hooks in normal React components.
