---
category: 'Universal Utils'
---

# Typeof

类型的获取与判断

## Install

```
pnpm add -D @hairy/libcore
```

## Usage Functions

### getTypeof

获取数值的类型

```typescript
getTypeof('')             // 'string'
getTypeof(1)              // 'number'
getTypeof(BigInt(11))     // 'bigint'
getTypeof(false)          // 'boolean'
getTypeof(Symbol('1'))    // 'symbol'
getTypeof(undefined)      // 'undefined'
getTypeof({})             // 'object'
getTypeof(function () {}) // 'function'
getTypeof(null)           // 'null'
getTypeof(/ww/)           // 'regexp'
```

## isTypeof

判断数值的类型

```typescript
isTypeof('', 'string')   // true
```