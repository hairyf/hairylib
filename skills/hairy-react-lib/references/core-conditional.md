---
name: core-conditional
description: If/Else, Switch/Case components for conditional rendering
---

# Conditional Components

## Usage

### If/Else

Simple conditional rendering:

```typescript
import { If, Then, Else } from '@hairy/react-lib'

function MyComponent({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <If cond={isLoggedIn}>
      <Then>Welcome back!</Then>
      <Else>Please log in</Else>
    </If>
  )
}

// Shorthand with props
<If cond={isLoggedIn} then={<div>Logged in</div>} else={<div>Not logged in</div>} />

// With wrapper tag
<If cond={isLoggedIn} tag="div" className="container">
  <Then>Content</Then>
</If>
```

### Switch/Case

Multiple condition matching:

```typescript
import { Switch, Case, Default } from '@hairy/react-lib'

function StatusComponent({ status }: { status: string }) {
  return (
    <Switch value={status}>
      <Case cond="loading">Loading...</Case>
      <Case cond="success">Success!</Case>
      <Case cond="error">Error occurred</Case>
      <Default>Unknown status</Default>
    </Switch>
  )
}

// Boolean conditions
<Switch>
  <Case cond={isLoading}>Loading...</Case>
  <Case cond={isError}>Error</Case>
  <Default>Content</Default>
</Switch>
```

### Unless

Inverted condition:

```typescript
import { Unless } from '@hairy/react-lib'

<Unless cond={isLoading}>
  <div>Content when not loading</div>
</Unless>
```

## Key Points

* **`If`**: Renders `Then` when `cond` is truthy, `Else` when falsy. Supports `then`/`else` props or children.
* **`Switch`**: Matches first `Case` with truthy `cond` or `value === cond`. Falls back to `Default`.
* **Wrapper support**: All components support `tag` and `as` props for custom wrapper elements.
* **Type safety**: `cond` accepts `BooleanLike` (boolean, truthy/falsy values).
* **Use `If` for**: Binary conditions (show/hide, logged in/out).
* **Use `Switch` for**: Multiple mutually exclusive conditions (status, mode, type).
