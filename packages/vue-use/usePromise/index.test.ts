import { usePromise } from '.'
import { awaitPromise } from '@hairy/core'

describe('usePromise', () => {
  it('loading', (done) => {
    const { exec, loading } = usePromise(async () => {
      await awaitPromise(1000)
    })
    exec().then(() => {
      expect(loading.value).toBe(false)
      done()
    })
    expect(loading.value).toBe(true)
  })
  it('error', async () => {
    const { exec, loading, error } = usePromise(async () => {
      throw 1
    })
    try {
      await exec()
    } catch {
      expect(error.value).toBe(1)
      expect(loading.value).toBe(false)
    }
  })
})
