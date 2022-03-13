---
name: router
category: uni-utils
---

# router

uniapp 路由跳转封装

## Usage

```ts

import { navigateTo, reLaunch, switchTab, redirectTo, navigateBack } from '@hairy/uni-utils'

navigateTo('/pages/index', { aa: 123 })
```

## Type Declarations

```typescript

declare const navigateTo: (url: string, params?: Record<string, any>) => void;
declare const reLaunch: (url: string, params?: Record<string, any>) => void;
declare const switchTab: (url: string, params?: Record<string, any>) => void;
declare const redirectTo: (url: string, params?: Record<string, any>) => void;
declare const navigateBack: (delta?: number) => void;

```