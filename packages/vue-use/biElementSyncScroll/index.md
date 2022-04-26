---
title: biElementSyncScroll
category: 'vue-use'
---
## @hairy/vue-use - biElementSyncScroll

同步两个具有相同滚动条的 DOM 的滚动

## Usage

~~~typescript

import { ref } from 'vue'
import { biElementSyncScroll } from '@hairy/vue-use'

// 滚动 1 元素
const scroll1ElRef = ref()
// 滚动 2 元素
const scroll2ElRef = ref()

const { stop, start } = biElementSyncScroll(scroll1ElRef, scroll2ElRef)

// 停止同步
stop()

// 继续同步
start()
~~~
