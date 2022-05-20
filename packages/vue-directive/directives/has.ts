/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2022-01-20 18:52:59
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-20 18:53:30
 */
import { isArray } from 'lodash-es'
import { Directive } from 'vue-demi'
import { directiveOptions } from '../utils'

export const vHas: Directive<HTMLElement, any> = (element, { value }: { value: string[] }) => {
  if (!isArray(value)) {
    throw new TypeError(`v-has value: ${value} is not Array.`)
  }
  const through = value.some((string_) => directiveOptions.permissions.includes(string_))
  if (!through) element.parentNode && element.remove()
}
