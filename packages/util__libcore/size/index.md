---
category: 'Universal Utils'
---

# Element size handling

分析解析尺寸与大小

## Install

```
pnpm add -D @hairy/libcore
```

## Usage Functions

### atWillToUnit

如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上px单位

```ts
import { atWillToUnit } from '@hairy/utils'

// atWillToUnit(value, unit = 'px')
atWillToUnit(10)     // '10px'
atWillToUnit('10px') // '10px'
atWillToUnit('10%')  // '10%'
atWillToUnit('10')   // '10px'
```

### atWillToSize

```ts
import { atWillToSize } from '@hairy/utils'

// atWillToSize(size, unit = 'px')
atWillToSize(10)                             // { width: '10px', height: '10px' }
atWillToSize([10, 20])                       // { width: '10px', height: '20px' }
atWillToSize({ width: '30%', height: '20' }) // { width: '30%', height: '20px' }
```