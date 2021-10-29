import { mock } from 'mockjs'
import { useSelectedSingle } from '.'
import { reactive } from 'vue-demi'

const generateMockList = (): Record<string, any>[] => {
  return mock({ 'array|10': [{ 'id|+1': 0, select: false }] }).array
}

describe('useSelectedSingle', () => {
  it('single', () => {
    const list = reactive(generateMockList())
    const { selectItem } = useSelectedSingle(list, { fieldName: 'select' })
    list[1].select = true
    expect(selectItem.value).toEqual({ id: 1, select: true })

    list[4].select = true
    expect(selectItem.value).toEqual({ id: 4, select: true })
    expect(list[1]).toEqual({ id: 1, select: false })
  })
  it('required', () => {
    const list = reactive(generateMockList())
    useSelectedSingle(list, { fieldName: 'select', required: true })
    expect(list[0]).toEqual({ id: 0, select: true })
  })
})
