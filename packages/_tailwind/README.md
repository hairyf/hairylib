# @tuimao/tailwind

tailwind 的规则集，包含了 Web 端，小程序端等配置，小程序端可以作用于 uniapp
该配置由于打包后识别为 esm 模块，所以需要 esbuild-register 来读取 .ts 配置文件

## create file

`yarn add esbuild-register`

~~~typescript
// tailwind.config.ts
import { defineWebMergeConfig } from '@tuimao/tailwind'
export default defineWebMergeConfig({
    // ... merge config
})
~~~

~~~js
// tailwind.config.js
require('esbuild-register')
module.exports = require('./tailwind.config.ts').default
~~~

## install

`npm install eslint @tuimao/eslint -D`

## use

~~~js
// 小程序端的默认配置
import { defineCloudMergeConfig } from '@tuimao/tailwind'
const webConifg = defineCloudMergeConfig({
    // 这里的配置最终会进行深层合并
})
// web 端的默认配置
import { defineWebMergeConfig } from '@tuimao/tailwind'
const webConifg = defineWebMergeConfig({
    // 这里的配置最终会进行深层合并
})
~~~

## utils

~~~ts
// 用于生成间距信息的工具
import { generateSpacing } from '@tuimao/tailwind'
generateSpacing(2000)
// 生成以下数据
{
  "0": "0rem",
  "1": "0.25rem",
  "2": "0.125rem",
  "3": "0.75rem",
  "4": "0.25rem",
  "5": "1.25rem",
  "6": "0.375rem",
  "8": "0.5rem",
  "10": "0.625rem",
  "12": "0.75rem",
  "14": "0.875rem",
  "16": "1rem",
  .......,
  "2000": 'xxxrem'
}
// 配置项
interface GenerateSpacingOpts {
  /** 步进值, step与stepMax设置为 1 则不进行步进; @default 2 */
  step?: number
  /** 步进极限值, 到达步进翻倍节点之后, 将以极限值步进 @default 50 */
  stepMax?: number
  /** 步进翻倍节点 @default [16, 48, 80, 256, 320, 384] */
  nodes?: number[]
  /**
   * 单位计算(默认以得出px > rem 单位)
   * @default (num: number) => num / 16
   */
  compute?: (num: number) => number
  /** 单位 @default 'rem' */
  unit?: string
}
~~~

## configs 

~~~js
// 默认统一的所有配置
import { defaultConfig } from '@tuimao/taiwind'
// 百分比的所有尺寸, 例如 '1/2': '50%',
import { defaultPercentage } from '@tuimao/taiwind'

~~~
