import axios from 'axios'
import { axiosValidate } from '..'

describe('axiosValidate', () => {
  it('request error call.', (done) => {
    const https = axios.create()
    axiosValidate(
      https,
      () => {},
      () => {
        expect(true).toBeTruthy()
        done()
      }
    )
    https.get('https://kr.juzishop.cn/api/order/pre').catch((v) => v)
  })
  //   it('custom validate whether intercept.', (done) => {
  //     const https = axios.create()
  //     axiosValidate(
  //       https,
  //       (response) => {
  //         // console.log(response.data[0].userId)
  //         // return response.data[0].userId !== 1
  //       },
  //       () => {
  //         expect(true).toBeTruthy()
  //         done()
  //       }
  //     )
  //     https.get('https://jsonplaceholder.typicode.com/albums')
  //   })
})
