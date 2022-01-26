---
title: removeInnerHTMLAttribute
category: 'Browser'
---

# removeInnerHTMLAttribute

移除所有标签的一个或多个属性

## Usage

```ts
import { removeInnerHTMLAttribute } from '@hairy/browser'

const htmlString = '<div id="123"><div id="123"></div></div>'

const value = removeInnerHTMLAttribute(htmlString, {
  tag: 'div',
  attr: 'class',
  value: 'aaaa'
})
// value -> <div class="aaaa" id="123"><div class="aaaa" id="123"></div></div>

```