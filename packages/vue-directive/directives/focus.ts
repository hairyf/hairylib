/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2022-01-20 18:49:37
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-20 18:53:35
 */

import { Directive } from 'vue-demi'

export const vFocus: Directive<HTMLElement, any> = (element) => {
  if (element.tagName === 'input') element.focus()
  else element.querySelector('input')?.focus()
}
