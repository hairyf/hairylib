/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2021-12-17 17:47:49
 */
import { isArray } from 'lodash'
import { DirectiveElements, directiveOptions } from '../utils'
export const vUtils: DirectiveElements = {
  focus: (element) => {
    if (element.tagName === 'input') element.focus()
    else element.querySelector('input')?.focus()
  },
  has: (element, { value }: { value: string[] }) => {
    if (!isArray(value)) {
      throw new TypeError(`v-has value: ${value} is not Array.`)
    }
    const through = value.some((string_) => directiveOptions.permissions.includes(string_))
    if (!through) element.parentNode && element.remove()
  }
}
