---
name: core-lifecycle-hooks
description: Component lifecycle and mounting utilities
---

# Lifecycle Hooks

## Usage

### useMounted

Check if component is mounted:

```typescript
import { useMounted } from '@hairy/react-lib'

function MyComponent() {
  const mounted = useMounted()

  if (!mounted) {
    return null // Or loading state
  }

  return <div>Content</div>
}
```

### useUpdate

Force component re-render:

```typescript
import { useUpdate } from '@hairy/react-lib'

function MyComponent() {
  const update = useUpdate()

  return (
    <div>
      <button onClick={update}>Force Update</button>
    </div>
  )
}
```

## Key Points

* **`useMounted`**: Returns `true` after first render. Useful for SSR/hydration scenarios.
* **`useUpdate`**: Returns function that forces re-render. Use sparingly, prefer state updates.
* **SSR**: `useMounted` helps avoid hydration mismatches by deferring client-only content.
* **Use `useMounted` for**: Conditional rendering based on mount status, avoiding SSR issues.
* **Use `useUpdate` for**: Emergency re-renders when state management isn't feasible.
