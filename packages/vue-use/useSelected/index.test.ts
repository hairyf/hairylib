import { mock } from 'mockjs'

const generateMockData = (): Record<string, any>[] => {
  return mock({ 'list|1-10': [{ 'id|+1': 1 }] })
}

describe('useSelected', () => {
  it('')
})
