# @hairy/axios

关于 axios 拦截器的封装与工具。

## Install

`yarn add @hairy/axios`

## Usage

### axiosPickByParams

过滤请求中不必要的参数

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

### axiosErrorIntercept

axios 错误拦截处理，以及自定义拦截错误

~~~typescript
import axios from 'axios'
import { axiosErrorIntercept } from '@hairy/axios'

/**
 * 初次调用拦截
 * @description
 * 
 * 注意: 普通错误与自定义错误都会进入 rejected 中
 */
axiosErrorIntercept(
  axios,
  // validate: custom validate
  (response) => response.status < 400,
  // rejected: error handle
  (error) => console.log('宝，报错啦~')
)

/**
 * 单个请求阻止进入 rejected 处理
 * @description
 * 
 * 注意: 只会阻止进入 rejected 处理, 
 * 不会让失败的 promise 变为成功的 promise
 */
axios.get('xxx', { preventError: true })
~~~

~~~typescript
declare module 'axios' {
  interface AxiosRequestConfig {
    preventError?: boolean
  }
}
interface AxiosErrorInterceptOptions {
  /** 自定义校验器 */
  validate: (response: AxiosResponse) => boolean | void
  /** 错误处理 */
  rejected: (error: AxiosError) => void
}
~~~

### axiosProtoApiModify

涉及 delete, get, head, options 等方法的修改，主要参数调整 (url, config) -> (url, params, config)

~~~typescript
import axios from 'axios'
import { axiosProtoApiModify } from '@hairy/axios'
// 默认不传或者传 axios 本身, 修改 axios 以及之后创建的所有实例
axiosProtoApiModify()
axios.get('xxx', { offset: 10 }, {/* config */})
~~~

~~~typescript
import axios from 'axios'
const instance = axios.create()
// 传入实例则修改当前实例
axiosProtoApiModify(instance)
instance.get('xxx', { offset: 10 }, {/* config */})
~~~