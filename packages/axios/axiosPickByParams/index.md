---
title: axiosPickByParams
category: 'Axios'
---
### axiosPickByParams

过滤请求中不必要的参数

## Install

`npm install @hairy/axios -g`

## Usage

~~~typescript

import axios from 'axios'
import { axiosPickByParams } from '@hairy/axios'

axiosPickByParams(axios, ['', undefined], {
  header: true,
  formData: true,
  deep: true
})

~~~

~~~typescript
interface AxiosPickByParamsOptions {
  /** 是否过滤请求头, 默认 false */
  header?: boolean
  /** 是否过滤请求体, 默认 true */
  data?: boolean
  /** 是否过滤请求参数, 默认 true */
  params?: boolean
  /** 是否过滤表单数据, 默认 true */
  formData?: boolean
  /** 是否深层过滤, 默认 false */
  deep?: boolean
}
~~~