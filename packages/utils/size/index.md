---
name: size
category: Utils
---

# utils - size

分析解析尺寸与大小

## Install

`npm install @hairy/utils`

## Usage


### analyUnit

如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上px单位

```ts
import { analyUnit } from '@hairy/utils'

// analyUnit(value, unit = 'px')
analyUnit(10)     // '10px'
analyUnit('10px') // '10px'
analyUnit('10%')  // '10%'
analyUnit('10')   // '10px'
```

### analySize

```ts
import { analySize } from '@hairy/utils'

// analySize(size, unit = 'px')
analySize(10)                             // { width: '10px', height: '10px' }
analySize([10, 20])                       // { width: '10px', height: '20px' }
analySize({ width: '30%', height: '20' }) // { width: '30%', height: '20px' }
```