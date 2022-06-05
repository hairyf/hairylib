---
category: 'Axios Intercept'
---

# axiosWithExtraParams

请求时携带一些参数，支持 data、params、headers

## Install

`npm install @hairy/axios-bearer`

## Usage

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