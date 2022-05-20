---
title : Element size handling
category: 'utils'
---

# @hairy/utils - size

分析解析尺寸与大小


## Usage


### toUnit

如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上px单位

```ts
import { toUnit } from '@hairy/utils'

// toUnit(value, unit = 'px')
toUnit(10)     // '10px'
toUnit('10px') // '10px'
toUnit('10%')  // '10%'
toUnit('10')   // '10px'
```

### toSize

```ts
import { toSize } from '@hairy/utils'

// toSize(size, unit = 'px')
toSize(10)                             // { width: '10px', height: '10px' }
toSize([10, 20])                       // { width: '10px', height: '20px' }
toSize({ width: '30%', height: '20' }) // { width: '30%', height: '20px' }
```