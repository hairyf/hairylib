---
title: replaceInnerHTMLAttributes
category: 'Browser'
---

# replaceInnerHTMLAttributes

替换 html string 中任意 tag 内任意 attr 值

## Usage

```ts
import { replaceInnerHTMLAttributes } from '@hairy/browser'

const htmlString = '<div id="123"><div id="123"></div></div>'

const value = replaceInnerHTMLAttributes(htmlString, {
  tag: 'div',
  attr: 'class',
  value: 'aaaa'
})
// value -> <div class="aaaa" id="123"><div class="aaaa" id="123"></div></div>

```