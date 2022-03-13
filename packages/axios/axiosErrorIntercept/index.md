---
title: axiosErrorIntercept
category: 'Axios'
---
## axiosErrorIntercept

axios 错误拦截处理，以及自定义拦截错误

## Install

`npm install @hairy/axios`

## Usage

~~~typescript
import axios from 'axios'
import { axiosErrorIntercept } from '@hairy/axios'

/**
 * 初次调用拦截
 * @todo 成功拦截后数据丢失
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

## Type Declarations

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