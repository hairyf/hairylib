---
title: util
category: 'Browser'
---

# util

关于浏览器的工具集

## Install

`npm install @hairy/browser`

## Usage

### ejectWindow

跳转到新的页面

```ts
import { ejectWindow } from '@hairy/browser'

ejectWindow('www.baidu.com')
```
### makePhoneCall

拨打号码

```ts
import { makePhoneCall } from '@hairy/browser'

makePhoneCall('173...3311')
```

### removeInnerHTMLAttribute

移除所有标签的一个或多个属性

```ts
import { removeInnerHTMLAttribute } from '@hairy/browser'

const htmlString = '<div id="123"><div id="123"></div></div>'

const value = removeInnerHTMLAttribute(htmlString, ['id'])
```

### replaceInnerHTMLAttributes

替换 html string 中任意 tag 内任意 attr 值

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