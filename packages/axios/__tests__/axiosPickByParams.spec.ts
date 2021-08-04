/*
 * @Author: Mr.Mao
 * @Date: 2021-07-18 09:14:18
 * @LastEditTime: 2021-07-18 15:11:06
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import axios from 'axios'
import { axiosPickByParams } from '..'

describe('axiosPickByParams', () => {
  it('axios pickby params.', (done) => {
    const http = axios.create()
    axiosPickByParams(http, ['', undefined])
    http
      .get('https://jsonplaceholder.typicode.com/albums', {
        params: { aaa: '', bbb: undefined, ccc: '123131' }
      })
      .then((v) => {
        expect(v.config.params).toEqual({ ccc: '123131' })
        done()
      })
  })
  it('axios pickby data.', (done) => {
    const http = axios.create()
    axiosPickByParams(http, ['', undefined])
    http
      .post('https://jsonplaceholder.typicode.com/albums', {
        aaa: '',
        bbb: undefined,
        ccc: '123131'
      })
      .then((v) => {
        expect(v.config.data).toEqual(v.config.data)
        done()
      })
  })
  // it('axios pickby FormData', (done) => {
  //   const http = axios.create()
  //   axiosPickByParams(http, ['', undefined])
  //   const formData = new FormData()
  //   formData.append('aaa', '')
  //   formData.append('bbb', undefined)
  //   formData.append('ccc', '123131')
  //   // console.log(formData.values())
  //   http.post('https://jsonplaceholder.typicode.com/albums').then((v) => {
  //     expect(v.config.data).toEqual(v.config.data)
  //     done()
  //   })
  // })
})
