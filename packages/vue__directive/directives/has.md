---
category: 'Vue Directives'
---

# vHas

判断权限是否满足

## Install

```
pnpm add -D @hairy/vue-directives
```

## Usage

```typescript
import { createApp } from 'vue'
import { vHas, defineHasConfig } from '@hairy/vue-directives'
const app = createApp()
app.directive('focus', vHas)

defineHasConfig({
  permissions: ['a', 'b']
})
```
```html
<div v-has="'a'"></div> <!-- show -->
<div v-has="'r'"></div> <!-- hide -->
```