---
category: 'Axios Intercept'
---

# axiosWithAssignResponse

根据 expands 规则合并 response 和 data，由于执行顺序规则，axiosWithAssignResponse 应该最先被调用

合并后需要自行 declare module "axios" 补充类型。

## Install

`npm install @hairy/axios-bearer`

## Usage

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