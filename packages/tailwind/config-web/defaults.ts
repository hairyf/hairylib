/*
 * @Author: Mr.Mao
 * @Date: 2021-06-18 14:00:57
 * @LastEditTime: 2021-07-18 11:08:57
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import { merge } from 'lodash'
import { defaultConfig } from '../config-base'
import { generateSpacing } from '../utils'

/** 默认配置 */
const defaults = merge(defaultConfig, {
  /** 生产环境下, 需清除样式的文件列表 */
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  /** 前缀 */
  prefix: '',
  /**
   * 类名是否标记 !important
   */
  important: true,
  /**
   * 深色模式
   * @param value 'media'(自动切换), 'class'(手动切换), false(关闭)
   */
  darkMode: false, // or 'media' or 'class'
  /**
   * 主题配置
   * @link https://www.tailwindcss.cn/docs/theme
   */
  theme: {
    /**
     * 断点配置 class="sm:text-center"
     * @template {sm: '640px'}
     * @link https://www.tailwindcss.cn/docs/breakpoints
     */
    screens: {
      xs: { min: '0' },
      sm: { min: '576px' },
      md: { min: '768px' },
      lg: { min: '992px' },
      xl: { min: '1200px' },
      xxl: { min: '1600px' },
      xxxl: { min: '1920px' }
    },
    spacing: generateSpacing(2000)
  },

  /**
   * 自定义 theme 中的变体顺序
   * @link https://www.tailwindcss.cn/docs/configuration#variant-order
   */
  variants: {
    extend: {}
  },
  plugins: []
})

export default defaults
