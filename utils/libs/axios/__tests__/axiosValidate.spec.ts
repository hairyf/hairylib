import axios from 'axios'
import { axiosValidate } from '..'

describe('axiosValidate', () => {

  it('request error call.', done => {
    const https = axios.create()
    axiosValidate(https,
      () => {},
      () => {
        expect(true).toBeTruthy()
        done()
      }
    )
    https.get('test').catch(v => v)
  })

  it('custom validate whether intercept.', done => {
    const https = axios.create()
    axiosValidate(https,
      (response) => response.status !== 200,
      () => {
        expect(true).toBeTruthy()
        done()
      }
    )
    https.get('https://jsonplaceholder.typicode.com/albums').catch(v => v)
  })

})