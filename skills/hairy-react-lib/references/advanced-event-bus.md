---
name: advanced-event-bus
description: Cross-component event communication
---

# Event Bus

## Usage

### Basic Event Bus

```typescript
import { useEventBus } from '@hairy/react-lib'

function ComponentA() {
  const { emit } = useEventBus<string>('user-action')
  
  return (
    <button onClick={() => emit('button-clicked')}>
      Click me
    </button>
  )
}

function ComponentB() {
  const { on } = useEventBus<string>('user-action')
  
  useEffect(() => {
    on((event) => {
      console.log('Event received:', event)
    })
  }, [on])
  
  return <div>Listening...</div>
}
```

### Event Bus with Cleanup

```typescript
import { useEventBus } from '@hairy/react-lib'

function MyComponent() {
  const { on, off, emit } = useEventBus<{ type: string; data: any }>('events')
  
  useEffect(() => {
    const listener = (event) => {
      console.log('Event:', event)
    }
    
    on(listener)
    
    return () => {
      off(listener)
    }
  }, [on, off])
  
  return (
    <button onClick={() => emit({ type: 'click', data: { id: 1 } })}>
      Emit Event
    </button>
  )
}
```

## Key Points

* **Global events**: Event bus allows communication between any components without prop drilling.
* **Type safety**: Generic type parameter ensures type-safe event payloads.
* **Automatic cleanup**: `on()` automatically cleans up listeners on unmount or when listener changes.
* **Manual cleanup**: Use `off()` for manual listener removal if needed.
* **Key-based**: Events are namespaced by key string. Use descriptive keys to avoid conflicts.
* **Use cases**: Cross-component communication, global state updates, analytics tracking.
