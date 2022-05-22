---
title: Miscellaneous
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

## Type Declarations

~~~typescript

/**
 * 跳转到新的页面
 * @param url 跳转url
 */
declare const ejectWindow: (url: string) => void;
/**
 * 拨打手机号
 * @param phoneNumber 手机号码
 */
declare const makePhoneCall: (phoneNumber: string) => void;
/**
 * 移除所有标签的一个或多个属性
 * @param html html string
 * @param attr attr string
 * @returns html
 */
declare const removeInnerHTMLAttribute: (html: string, attribute: string | string[]) => string;
/**
 * 替换 html string 中任意 tag 内任意 attr 值
 * @param html html string
 * @param option
 * @returns
 */
declare const replaceInnerHTMLAttributes: (html: string, option: {
    tag: string | string[];
    attr: string | string[];
    value: string;
}) => string;

~~~