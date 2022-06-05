---
category: 'Vue Utils'
---

# App Directives

Vue 自定义指令 directives 及其常用函数

## Install

```
pnpm add -D @hairy/vue-directives
```

## Usage Functions

### vFocus

让输入框 / 深层的输入框高亮

```typescript
import { createApp } from 'vue'
import { vFocus } from '@hairy/vue-directives'
const app = createApp()
app.directive('focus', vFocus)
```

### vHas

判断权限是否满足

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