import axios from 'axios'
import { axiosProtoApiModify } from '.'
describe('axiosProtoApiModify', () => {
  it('get', () => {
    expect({}).toEqual({})
    console.log(axios.prototype)
  })
})
