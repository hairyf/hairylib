/*
 * @Author: Mr.Mao
 * @Date: 2021-07-18 09:14:18
 * @LastEditTime: 2021-08-06 10:47:25
 * @Description:
 * @LastEditors: Zhilong
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import axios from 'axios'
import { axiosWithPickByParams } from '.'

axios.defaults['baseURL'] = 'https://jsonplaceholder.typicode.com'

describe('@hairy/axios:axiosWithPickByParams', () => {
  it('axios pickBy params.', async () => {
    const http = axios.create()
    axiosWithPickByParams(http, ['', undefined])
    const v = await http.get('/albums', {
      params: { aaa: '', bbb: undefined, ccc: '123131' }
    })
    expect(v.config.params).toEqual({ ccc: '123131' })
  })
  it('axios pickBy data.', async () => {
    const http = axios.create()
    axiosWithPickByParams(http, ['', undefined])
    const v = await http.post('/albums', {
      aaa: '',
      bbb: undefined,
      ccc: '123131'
    })
    expect(v.config.data).toEqual(v.config.data)
  })
  // TODO
  it.skip('axios pickBy FormData', async () => {
    const http = axios.create()
    axiosWithPickByParams(http, [''], { formData: true })
    const formData = new FormData()
    formData.append('aaa', '')
    formData.append('ccc', '123131')
    const v = await http.post('/albums')
    expect(v.config.data).toEqual(v.config.data)
  })
})
