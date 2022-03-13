---
title: useSelectedMultiple
category: 'vue-use'
---
## useSelectedMultiple

对某个列表的多选处理

## Install

`npm install @hairy/vue-use`

## Usage

~~~typescript

import { ref } from 'vue'
import { useSelectedMultiple } from '@hairy/vue-use'

const list = ref([
  { id: 1, text: '1' },
  { id: 2, text: '2' },
  { id: 3, text: '3' },
])

const { selectItems, isSelectAll, isIndeterminate, isSelect } = useSelectedMultiple(list, { fieldName: 'select' })

// 选中一项
list.value[0].select = true
selectItems.value // [{ id: 1, text: '1', select: true }]

// 全部选中
isSelectAll.value = true
selectItems.value // [{ id: 1, text: '1', select: true }, {id: 2}, ...]

// 全部取消选择
isSelectAll.value = false
selectItems.value // []


// 选中，但没有完全选完（一般用于 checkbox 组件）
list.value[0].select = true
isSelectAll.value // false
isIndeterminate.value // false
// 只要是选中了
isSelect.value // true

~~~
