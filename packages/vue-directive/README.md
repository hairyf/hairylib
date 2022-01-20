<!--
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-20 18:54:24
-->
# @hairy/vue-directive

vue 自定义命令集

## Install

`yarn add @hairy/vue-directive`


## Utils

- directiveUnit:  创建命令, 对应 style 中的 key value 设置
- directiveSize:  创建命令, 对应 style.width, style.height 中的 key value 设置
- directiveValue: 创建命令, 对应 style 中的 key value 设置
- directiveValue: 创建命令, 对应 style 中的 key value 设置, value 不会进行处理, 而是直接赋值
- directiveArgumentValue: 创建命令, 对应 style 中的 key value 设置

## permissions

权限的配置使用 defineDirectiveConfig 配置

~~~typescript

import { defineDirectiveConfig } from '@hairy/vue-directive'

defineDirectiveConfig({
  permissions: ['edit', 'lock']
})
~~~