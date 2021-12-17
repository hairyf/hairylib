/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-17 16:56:12
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2021-12-17 17:26:47
 */

import { mock } from 'mockjs'
import { ref } from 'vue-demi'
import { useSelectedMultiple } from '.'

const generateMockList = (): Record<string, any>[] => {
  return mock({ 'array|10': [{ 'id|+1': 0, select: false }] }).array
}

describe('useSelectedMultiple', () => {
  it('isSelectAll', () => {
    const list = ref(generateMockList())
    const { isSelectAll } = useSelectedMultiple(list)
    isSelectAll.value = true
    expect(list.value.some((v) => v.select)).toBeTruthy()
    isSelectAll.value = false
    expect(!list.value.some((v) => v.select)).toBeTruthy()
  })
  it('isSelect', () => {
    const list = ref(generateMockList())
    const { isSelect } = useSelectedMultiple(list)
    list.value[0].select = true
    expect(isSelect.value).toBeTruthy()
    list.value[0].select = false
    expect(!isSelect.value).toBeTruthy()
  })
  it('isIndeterminate', () => {
    const list = ref(generateMockList())
    const { isIndeterminate, isSelectAll } = useSelectedMultiple(list)
    list.value[0].select = true
    expect(isIndeterminate.value).toBeTruthy()
    isSelectAll.value = true
    expect(!isIndeterminate.value).toBeTruthy()
  })
})
