---
category: 'Axios Intercept'
---

# axiosWithCustomError

自定义响应错误，抛出请求数据错误

## Install

`npm install @hairy/axios-bearer`

## Usage

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