---
name: core-composition
description: Function composition utilities (compose and pipe)
---

# Function Composition

## Usage

### Pipe (Left-to-Right)

Apply functions sequentially from left to right:

```typescript
import { pipe } from '@hairy/utils'

const processName = pipe(
  (name: string) => name.trim(),
  (name: string) => name.toLowerCase(),
  (name: string) => name.replace(/\s+/g, '-')
)

processName('  Hello World  ') // 'hello-world'
```

### Compose (Right-to-Left)

Apply functions sequentially from right to left:

```typescript
import { compose } from '@hairy/utils'

const getInitials = compose(
  (initials: string[]) => initials.join('').toUpperCase(),
  (name: string) => name.split(' ').map(n => n[0]),
  (name: string) => name.trim()
)

getInitials('  John Doe  ') // 'JD'
```

### Promise Composition

Compose async functions:

```typescript
import { pipe, compose } from '@hairy/utils'

// Pipe with promises
const pipeline = pipe.promise(
  async (str: string) => `${str} Unicorn`,
  async (str: string) => `${str} Rainbow`
)

await pipeline('❤️') // '❤️ Unicorn Rainbow'

// Compose with promises
const composed = compose.promise(
  async (str: string) => `${str} Rainbow`,
  async (str: string) => `${str} Unicorn`
)

await composed('❤️') // '❤️ Unicorn Rainbow'
```

## Key Points

* **`pipe`**: Left-to-right composition. First function can accept N arguments, subsequent functions accept 1 argument.
* **`compose`**: Right-to-left composition. Mathematically correct function composition order.
* **TypeScript limitation**: Both support up to 10 functions due to TypeScript's lack of variadic kinds.
* **Promise variants**: Use `pipe.promise` or `compose.promise` for async function composition.
* **Use pipe when**: You want to read functions in execution order (top to bottom).
* **Use compose when**: You prefer mathematical composition semantics or functional programming style.
