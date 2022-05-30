---
title: biElementMapSize
category: 'vue-use'
---
## @hairy/vue-use - biElementMapSize

同步 from DOM 的宽或高到指定的 to DOM

## Usage

~~~typescript

import { ref } from 'vue'
import { biElementMapSize } from '@hairy/vue-use'

// 监听的元素
const fromElRef = ref()
// 设置的元素
const toElRef = ref()


const { stop, start } = biElementMapSize(fromElRef, toElRef, {
  // 取消高度监听
  height: false
})

// 停止同步
stop()

// 继续同步
start()
~~~