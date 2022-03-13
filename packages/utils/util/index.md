---
name: util
category: Utils
---

# utils - util

工具集

## Install

`npm install @hairy/utils`

## Usage

### urlParamsAnaly

地址的参数分析拼接

```typescript
import { urlParamsAnaly } from '@hairy/utils'

urlParamsAnaly('/api')              // '/api'
urlParamsAnaly('/api', { id: '1' }) // '/api?id=1'
```

### awaitPromise

测试用的自定义 Promise 等待

```typescript
import { awaitPromise } from '@hairy/utils'

awaitPromise()     // 1000ms Promise Pending
awaitPromise(2000) // 2000ms Promise Pending
```

### generateArray

生成递进的数组

```typescript
import { generateArray } from '@hairy/utils'

generateArray(50, 100) // [50, 51, 52...., 100]
```

### generateArray

空的方法

```typescript
import { noop } from '@hairy/utils'

noop() // undefined
```

### checkedTypeof

获取数据类型

```typescript
const checkedTypeof: (target: any) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "null" | "regexp";
checkedTypeof('')     // 'string'
checkedTypeof(0)      // 'number'
checkedTypeof(/111/)  // 'regexp'
checkedTypeof(null)   // 'null'
```

### assert

不符合预期则弹出警告

```typescript
import { assert } from '@hairy/utils'

assert(true, 'warn > xxxxx') // console.warn('warn > xxxxx')
```