/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-17 16:56:12
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-18 13:55:58
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

    // 选择为 true 则全部项都应该选择
    isSelectAll.value = true
    expect(list.value.some((v) => v.select)).toBeTruthy()
    expect(isSelectAll.value).toBeTruthy()

    // 选择为 false 则所有项都应该取消选择
    isSelectAll.value = false
    expect(list.value.some((v) => v.select)).toBeFalsy()
    expect(isSelectAll.value).toBeFalsy()

    // 没有全选都为 false
    list.value[0].select = true
    expect(isSelectAll.value).toBeFalsy()
    list.value[0].select = false
    expect(isSelectAll.value).toBeFalsy()
  })
  it('isSelect', () => {
    const list = ref(generateMockList())
    const { isSelect } = useSelectedMultiple(list)
    list.value[0].select = true
    expect(isSelect.value).toBeTruthy()
    list.value[0].select = false
    expect(isSelect.value).toBeFalsy()
  })
  it('isIndeterminate', () => {
    const list = ref(generateMockList())
    const { isIndeterminate, isSelectAll } = useSelectedMultiple(list)
    list.value[0].select = true
    expect(isIndeterminate.value).toBeTruthy()
    isSelectAll.value = true
    expect(isIndeterminate.value).toBeFalsy()
  })
  it('disabled', () => {
    const list = ref(generateMockList())
    const { isSelectAll } = useSelectedMultiple(list, {
      disabled: (item, index) => index === 1
    })
    isSelectAll.value = true
    expect(!isSelectAll.value).toBeTruthy()
    expect(list.value[1].select).toBeFalsy()
  })
})
