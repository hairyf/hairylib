/*
 * @Author: Mr.Mao
 * @Date: 2021-07-18 09:14:18
 * @LastEditTime: 2021-08-06 10:47:25
 * @Description:
 * @LastEditors: Zhilong
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import axios from 'axios'
import { axiosWithExtraParams } from '../axiosWithExtraParams'

axios.defaults['baseURL'] = 'https://jsonplaceholder.typicode.com'

describe('@hairy/axios:axiosWithExtraParams', () => {
  it('extra params', async () => {
    const http = axios.create()
    axiosWithExtraParams(http, { aaa: '123' }, 'params')
    const v = await http.get('/albums')
    expect(v.config.params).toEqual({ aaa: '123' })
  })
  it('extra headers', async () => {
    const http = axios.create()
    axiosWithExtraParams(http, { aaa: '123' }, 'headers')
    const v = await http.get('/albums')
    expect(v.config.headers?.['aaa']).toEqual('123')
  })
  it('extra data', async () => {
    const http = axios.create()
    axiosWithExtraParams(http, { aaa: '123' }, 'data')
    const v = await http.get('/albums')
    expect(JSON.parse(v.config.data)).toEqual({ aaa: '123' })
  })
  it('extra *', async () => {
    const http = axios.create()
    axiosWithExtraParams(http, { aaa: '123' }, '*')
    const v = await http.get('/albums')
    expect(v.config.params).toEqual({ aaa: '123' })
    expect(v.config.headers?.['aaa']).toEqual('123')
    expect(JSON.parse(v.config.data)).toEqual({ aaa: '123' })
  })
})
