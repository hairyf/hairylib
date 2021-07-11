import axios from 'axios'
import { axiosLoading } from '..'
const emptyCall = () => { }

describe('axiosLoading', () => {

  it('show loading call.', done => {
    const https = axios.create()
    axiosLoading(https,
      () => {
        expect(true).toBeTruthy()
        done()
      },
      emptyCall
    )
    https.get('test', { loading: true })
  })

  it('hide loading call.', done => {
    const https = axios.create()
    axiosLoading(https,
      emptyCall,
      () => {
        expect(true).toBeTruthy()
        done()
      }
    )
    https.get('test', { loading: true })
  })

  it('many times loading call.', () => {
    return new Promise(async resolve => {
      const https = axios.create()
      let showCount = 0
      let hideCount = 0
      axiosLoading(https,
        () => showCount++,
        () => hideCount++
      )
      await Promise.all([
        https.get('test', { loading: true }).catch(v => v),
        https.get('test', { loading: true }).catch(v => v),
        https.get('test', { loading: true }).catch(v => v)
      ])
      expect(showCount).toBe(1)
      expect(hideCount).toBe(1)
      resolve(undefined)
    })
  })
  
})