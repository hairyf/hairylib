---
category: 'Universal Utils'
---

# Axios Intercept

更加简单的 axios 拦截器使用

## Install

```
pnpm add -D @hairy/axios-bearer
```

## Usage Functions

### axiosWithAssignResponse

根据 expands 规则合并 response 和 data，由于执行顺序规则，axiosWithAssignResponse 应该最先被调用

合并后需要自行 declare module "axios" 补充类型。
~~~typescript
import axios from 'axios'
import { axiosWithAssignResponse } from '@hairy/axios-bearer'
axiosWithAssignResponse(axios, '*')
~~~
~~~typescript
// https://.../xxx > { code: 1, data: {...}, message: 'ok' }
/* - */ const { data, status } = await axios.get("https://.../xxx")
/* - */ console.log(data.code, data.data, data.message, status)

/* + */ const { code, data, message, status } = await axios.get("https://.../xxx")
/* + */ console.log(code, data, message, status)
~~~

### axiosWithCustomError
自定义响应错误，抛出请求数据错误
~~~typescript
import axios from 'axios'
import { axiosWithCustomError } from '@hairy/axios-bearer'
axiosWithCustomError(axios, (response) => {
  return response.data.code === 0
})

~~~
~~~typescript
// https://.../xxx > { code: 0, message: 'ok' }
try {
  await axios.get('https://.../xxx')
} catch {
  // Enter
}
~~~

### axiosWithErrorHandler
自定义响应错误处理，所有错误都会从此经过
~~~typescript
import axios from 'axios'
import { axiosWithErrorHandler } from '@hairy/axios-bearer'

axiosWithErrorHandler(axios, (error) => {
  console.log('error')
})

~~~
~~~typescript
// https://.../xxx > { code: 0, message: 'ok' }
try {
  await axios.get('https://.../xxx')
} catch {
  // log('error')
}
~~~

### axiosWithExtraParams
请求时携带一些参数，支持 data、params、headers
~~~typescript
import axios from 'axios'
import { axiosWithExtraParams } from '@hairy/axios-bearer'

const params = { token: '111' }
axiosWithExtraParams(axios, { token: '111' }, 'headers')

~~~
~~~typescript
const { config } = await axios.get('https://.../xxx')
config.headers['token'] // 111
~~~

### axiosWithLoadingHandler
请求 loading 加载器，可自定义加载字段
~~~typescript
import axios from 'axios'
import { axiosWithLoadingHandler } from '@hairy/axios'

axiosWithLoadingHandler(
  axios,
  // custom show
  (config) => {},
  // custom hide
  (config) => {}
)

// use
axios.get('xxx', { loading: true })
// global use
axios.defaults['loading'] = true
~~~

### axiosWithPickByParams
过滤请求中不必要的参数
~~~typescript

import axios from 'axios'
import { axiosWithPickByParams } from '@hairy/axios'

axiosWithPickByParams(axios, ['', undefined], {
  header: true,
  formData: true,
  // 深处处理
  deep: true
})

~~~