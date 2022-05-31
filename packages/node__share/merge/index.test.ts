import { merge } from '.'

describe('@hairy/node:merge', () => {
  test('array merge', () => {
    const a = { c: [1] }
    const b = { c: [2] }
    const c = { c: [1, 2] }
    const r = merge(a, b)
    expect(r).toEqual(c)
  })
})
