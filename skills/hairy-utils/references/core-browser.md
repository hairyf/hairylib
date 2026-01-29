---
name: core-browser
description: Browser and file utilities
---

# Browser Utilities

## Usage

### File Operations

```typescript
import { downloadFile, readFile } from '@hairy/utils'

// Download file
downloadFile('data.json', JSON.stringify(data), 'application/json')

// Read file
const content = await readFile(file)
```

## Key Points

* **File utilities**: Browser-specific file operations for download and reading.
* **Environment-aware**: Functions check for browser environment before executing.
* **Use cases**: File downloads, file input handling, client-side file operations.
