---
category: 'Vue Directives'
---

# vFocus

让输入框 / 深层的输入框高亮

## Install

```
pnpm add -D @hairy/vue-directives
```

## Usage

```typescript
import { createApp } from 'vue'
import { vFocus } from '@hairy/vue-directives'
const app = createApp()
app.directive('focus', vFocus)
```
