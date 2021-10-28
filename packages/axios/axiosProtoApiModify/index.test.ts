import axios from 'axios'
import { axiosProtoApiModify } from '.'
describe('axiosProtoApiModify', () => {
  axiosProtoApiModify(axios)
  it('get', (done) => {
    axios.get('https://jsonplaceholder.typicode.com/albums', { aaa: 123 }).then(({ config }) => {
      expect(config.params).toEqual({ aaa: 123 })
      done()
    })
  })
})
