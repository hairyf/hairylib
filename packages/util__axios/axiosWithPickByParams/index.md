---
category: 'Axios Intercept'
---

# axiosWithPickByParams

过滤请求中不必要的参数

## Install

`npm install @hairy/axios-bearer`

## Usage

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