import axios from 'axios'
import { axiosLoading } from '..'
const emptyCall = () => {}

describe('axiosLoading', () => {
  it('show loading call.', (done) => {
    const https = axios.create()
    axiosLoading(
      https,
      () => {
        expect(true).toBeTruthy()
        done()
      },
      emptyCall
    )
    https.get('https://jsonplaceholder.typicode.com/albums', { loading: true })
  })
  it('hide loading call.', (done) => {
    const https = axios.create()
    axiosLoading(https, emptyCall, () => {
      expect(true).toBeTruthy()
      done()
    })
    https.get('https://jsonplaceholder.typicode.com/albums', { loading: true })
  })
  it('many times loading call.', (deno) => {
    const https = axios.create()
    let showCount = 0
    let hideCount = 0
    axiosLoading(
      https,
      () => showCount++,
      () => hideCount++
    )
    Promise.all([
      https.get('https://jsonplaceholder.typicode.com/albums', { loading: true }),
      https.get('https://jsonplaceholder.typicode.com/albums', { loading: true }),
      https.get('https://jsonplaceholder.typicode.com/albums', { loading: true })
    ]).then(() => {
      expect(showCount).toBe(1)
      expect(hideCount).toBe(1)
      deno()
    })
  })
})
