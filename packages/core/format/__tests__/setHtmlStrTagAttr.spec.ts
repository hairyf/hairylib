/*
 * @Author: Mr.Mao
 * @Date: 2021-07-17 11:51:00
 * @LastEditTime: 2021-08-06 10:12:27
 * @Description:
 * @LastEditors: Zhilong
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { setHtmlStrTagAttr } from '..'

describe('setHtmlStrTagAttr', () => {
  it('remove div tag class attr', () => {
    const value = setHtmlStrTagAttr('<div class="wwdad"></div>', {
      tag: 'div',
      attr: 'class',
      value: ''
    })
    expect(value).toContain('<div ></div>')
  })
  it('increase div tag class attr', () => {
    const value = setHtmlStrTagAttr('<div id="123"><div id="123"></div></div>', {
      tag: 'div',
      attr: 'class',
      value: 'aaaa'
    })
    expect(value).toContain('<div class="aaaa" id="123"><div class="aaaa" id="123"></div></div>')
  })
  it('increase close tag class attr', () => {
    const value = setHtmlStrTagAttr('<div id="123"/>', {
      tag: 'div',
      attr: 'class',
      value: 'aaaa'
    })
    expect(value).toContain('<div class="aaaa" id="123"/>')
  })
  it('increase all tag class attr', () => {
    const value = setHtmlStrTagAttr('<div><span></span></div>', {
      tag: ['div', 'span'],
      attr: 'class',
      value: '123'
    })
    expect(value).toContain('<div class="123"><span class="123"></span></div>')
  })
  it('increase all tag class attr', () => {
    const value = setHtmlStrTagAttr('<div><span></span></div>', {
      tag: ['div', 'span'],
      attr: ['class', 'style'],
      value: '123'
    })
    expect(value).toContain(
      '<div class="123" style="123"><span class="123" style="123"></span></div>'
    )
  })
})
