---
title: useSelectedSingle
category: 'vue-use'
---
## @hairy/vue-use - useSelectedSingle

对某个列表的单选处理

## Usage

~~~typescript

import { ref } from 'vue'
import { useSelectedSingle } from '@hairy/vue-use'

const list = ref([
  { id: 1, text: '1' },
  { id: 2, text: '2' },
  { id: 3, text: '3' },
])

const { selectItem } = useSelectedSingle(list, { fieldName: 'select' })

// 选中一项
list.value[0].select = true
selectItems.value // { id: 1, text: '1', select: true }

// 选中另一项
list.value[1].select = true
selectItems.value // { id: 2, text: '2', select: true }
~~~
