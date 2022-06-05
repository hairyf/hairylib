---
category: 'Axios Intercept'
---

# axiosWithLoadingHandler

请求 loading 加载器，可自定义加载字段

## Install

`npm install @hairy/axios-bearer`

## Usage

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
