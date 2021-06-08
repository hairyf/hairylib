/*
 * @Author: Zhilong
 * @Date: 2021-05-18 18:31:56
 * @LastEditTime: 2021-06-08 14:20:26
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */
const themeBackground = require('./theme-background')
const themeBase = require('./theme-base')
const themeColor = require('./theme-color')

module.exports = {
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
    ...themeBase,
    ...themeColor,
    ...themeBackground
  },
  /**
   * 自定义 theme 中的变体顺序
   * @link https://www.tailwindcss.cn/docs/configuration#variant-order
   */
  variants: {
    extend: {}
  },
  plugins: []
}
