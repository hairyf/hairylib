---
category: 'Axios Intercept'
---

# axiosWithErrorHandler

自定义响应错误处理，所有错误都会从此经过

## Install

`npm install @hairy/axios-bearer`

## Usage

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