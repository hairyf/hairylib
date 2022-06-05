---
category: 'Vue Utils'
---

# Overlay Helpers

Vue 弹出层（dialog/message）等组件的处理

## Install

```
pnpm add -D @hairy/vue-utils
```

## Usage Functions

### Transform Imperative Overlay

转换为命令式弹出层

```html
<!-- A.vue -->
<template>
  <div v-if="visible" @click="resolve('...')"> {{ title }} </div>
</template>
<script setup>
import { defineProps } from 'vue'
import { useOverlayMeta } from '@hairy/vue-utils'
const props = defineProps({
  title: String
})
// 从 useOverlayMeta 获取 Overlay 的信息
const { visible, resolve, reject } = useOverlayMeta({
  // 动画时长，避免过早销毁组件
  animation: 1000
})
</script>
```
```ts
import { transformImperativeOverlay } from '@hairy/vue-utils'
import Component from './A.vue'

// 转换为命令式弹出层
const overlayCallback = transformImperativeOverlay(Component)
// 调用组件，并获取 resolve 的值
const value = await overlayCallback({ title: '我是标题' })
// value > ...
```

### Use Imperative Overlay

直接调用命令式弹出层组件，不需要转换组件

```ts
import { useImperativeOverlay } from '@hairy/vue-utils'
import Component from './A.vue'

// 调用组件，并获取 resolve 的值
const value = await useImperativeOverlay(Component, { title: '我是标题' })
// value > ...
```
