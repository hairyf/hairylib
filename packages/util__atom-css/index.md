---
category: 'Node Utils'
---

# Atom Css

常用的 atom-css 工具，可以用于（tailwindcss / windcss...）由于 [Value Auto-infer](https://windicss.org/features/value-auto-infer.html) 的推进，该库可能不在继续维护

## Install

```
pnpm add -D @hairy/atom.css-utils
```

## Usage

### spacing

生成 0 ~ max Spacing 尺寸

```typescript
import { spacing } from '@hairy/atom.css-utils'
spacing(100, {
  unit: 'rem',
  compute: (v) => v / 16
})
// { 1: '..rem', 2: '..rem', 10: '..rem', ... }
```

### negative

数值反转

```typescript
import { negative } from '@hairy/atom.css-utils'
negative({ 1: '1px' })
// { '-1': '-1px' }
```