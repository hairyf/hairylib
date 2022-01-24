---
title: axiosLoading
category: 'Axios'
---
### axiosLoading

请求 loading 加载器

~~~typescript
import axios from 'axios'
import { axiosLoading } from '@hairy/axios'

axiosLoading(
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

~~~typescript
declare module 'axios' {
  interface AxiosRequestConfig {
    loading?: boolean
  }
}
interface AxiosLoadingOptions {
  /** 加载调起 */
  show: (config: AxiosRequestConfig) => void
  /** 加载关闭 */
  clone: (config: AxiosRequestConfig, result: [AxiosResponse?, AxiosError?]) => void
}
~~~