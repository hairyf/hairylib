---
name: core-watch-hooks
description: Reactive value watching and change detection hooks
---

# Watch Hooks

## Usage

### useWatch

Watch for value changes (similar to Vue's watch):

```typescript
import { useWatch } from '@hairy/react-lib'

function MyComponent() {
  const [count, setCount] = useState(0)

  useWatch(count, (newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to ${newValue}`)
  })

  // Watch multiple values
  useWatch([count, name], ([newCount, newName], [oldCount, oldName]) => {
    console.log('Values changed')
  })

  // Immediate execution
  useWatch(count, (newValue, oldValue) => {
    console.log('Initial and subsequent changes')
  }, { immediate: true })
}
```

### useDebounce

Debounce a value:

```typescript
import { useDebounce } from '@hairy/react-lib'

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (debouncedSearch) {
      performSearch(debouncedSearch)
    }
  }, [debouncedSearch])

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
}
```

### usePrevious

Get previous value:

```typescript
import { usePrevious } from '@hairy/react-lib'

function MyComponent() {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)

  return (
    <div>
      Current: {count}, Previous: {prevCount}
    </div>
  )
}
```

## Key Points

* **`useWatch`**: Executes callback when watched value(s) change. Skips initial execution unless `immediate: true`.
* **Multiple values**: Pass array to watch multiple values. Callback receives arrays `[newValues], [oldValues]`.
* **`useDebounce`**: Returns debounced value. Updates after delay when source value stops changing.
* **`usePrevious`**: Returns previous value. Returns `undefined` on first render.
* **Use `useWatch` for**: Side effects based on value changes, logging, analytics.
* **Use `useDebounce` for**: Search inputs, API calls, expensive computations.
