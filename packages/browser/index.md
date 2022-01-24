---
title: browser
category: 'Browser'
---

# @hairy/browser

关于浏览器的 api 封装。

## Install

`yarn add @hairy/browser`

## Usage apis

- selectFiles:          选择单|多个文件
- selectImages:         选择多个图片
- downloadNetWorkFile:  下载网络地址文件
- downloadWorkFile:     废弃, 功能与 downloadNetWorkFile 相同
- downloadBlobFile:     生成 blob|string 文件，并下载
- readFileReader:       读取 File 文件
- ejectWindow:          跳转到新页面
- makePhoneCall:        拨打手机号

- setInnerHTMLAttributes:     替换 html string 中任意 tag 内任意 attr 值
- removeInnerHTMLAttribute:   移除 html string 所有标签的一个或多个属性
