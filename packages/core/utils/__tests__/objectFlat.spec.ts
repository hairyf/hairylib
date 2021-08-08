import { objectFlat } from '..'
describe('objectFlat', () => {
  it('default deep 1 call flat object', () => {
    const data = {
      user: { name: 'mao' }
    }
    expect(objectFlat(data)).toEqual({ name: 'mao' })
  })
})
