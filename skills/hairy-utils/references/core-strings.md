---
name: core-strings
description: String manipulation, templating, and formatting
---

# String Utilities

## Usage

### String Masking

```typescript
import { cover, shortenId } from '@hairy/utils'

// Cover middle characters
cover('1234567890', [3, 4, 3], '*') // '123****890'

// Shorten identifier (for addresses, hashes, etc.)
shortenId('0x1234567890abcdef', 6, 4) // '0x1234...cdef'
```

### Path Utilities

```typescript
import { slash, ensurePrefix, ensureSuffix } from '@hairy/utils'

// Convert backslashes to slashes
slash('path\\to\\file') // 'path/to/file'

// Ensure prefix
ensurePrefix('https://', 'example.com') // 'https://example.com'
ensurePrefix('https://', 'https://example.com') // 'https://example.com' (no change)

// Ensure suffix
ensureSuffix('.js', 'file') // 'file.js'
ensureSuffix('.js', 'file.js') // 'file.js' (no change)
```

### Template Engine

```typescript
import { template } from '@hairy/utils'

// Index-based templating
template('Hello {0}! My name is {1}.', 'Inès', 'Anthony')
// 'Hello Inès! My name is Anthony.'

// Named templating
template('{greet}! My name is {name}.', { greet: 'Hello', name: 'Anthony' })
// 'Hello! My name is Anthony.'

// With fallback
template(
  '{greet}! My name is {name}.',
  { greet: 'Hello' },
  'placeholder'
)
// 'Hello! My name is placeholder.'
```

### Indentation

```typescript
import { unindent } from '@hairy/utils'

const code = unindent`
  if (a) {
    b()
  }
`
// Removes common leading whitespace and empty lines
```

## Key Points

* **`cover()`**: Masks middle portion of string. Format: `[startChars, maskLength, endChars]`.
* **`shortenId()`**: Useful for displaying long identifiers (addresses, hashes, IDs) in UIs.
* **`template()`**: Supports both index-based (`{0}`, `{1}`) and named (`{key}`) placeholders.
* **`unindent()`**: Removes common indentation from template strings, useful for code generation.
* **Path utilities**: `slash()`, `ensurePrefix()`, `ensureSuffix()` are idempotent (safe to call multiple times).
