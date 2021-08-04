import axios from 'axios'
import { axiosErrorIntercept } from '.'

describe('axiosErrorIntercept', () => {
  it('request error call.', (done) => {
    const https = axios.create()
    axiosErrorIntercept(
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
  //     axiosErrorIntercept(
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
