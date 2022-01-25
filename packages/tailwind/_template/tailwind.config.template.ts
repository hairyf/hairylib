/*
 * @Author: Mr.Mao
 * @Date: 2021-05-17 09:50:09
 * @LastEditTime: 2021-08-16 11:03:09
 * @Description: Tailwind 配置
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const colors = require('tailwindcss/colors')
module.exports = {
  /** 生产环境下, 需清除样式的文件列表 */
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  /**
   * 预设列表
   * @template [require('@acmecorp/tailwind-base')]
   */
  presets: [],
  /**
   * 深色模式
   * @param value 'media'(自动切换), 'class'(手动切换), false(关闭)
   */
  darkMode: false,
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
    screens: {},
    /**
     * 颜色配置
     * @template { transparent: 'transparent' }
     * @template { current: 'currentColor' }
     * @template { black: '#000000' }
     * @template { red: colors.red }
     * @link https://www.tailwindcss.cn/docs/customizing-colors
     */
    colors: {},
    /**
     * 间距配置
     * @template {'1': '8px'}
     * @description 默认情况下，间距比例由 padding、 margin、 width、 height、 maxHeight、 gap、 inset、 space 和 translate 核心插件继承。
     * @link https://www.tailwindcss.cn/docs/customizing-spacing
     */
    spacing: {},
    /**
     * 动画名称
     * @template { spin: {to: {transform:'...'}} }
     */
    keyframes: {},
    /**
     * 动画配置 class="animate-[key]"
     * @template {none: 'none'}
     * @template {spin: 'spin 1s linear infinite'}
     * @link https://www.tailwindcss.cn/docs/animation
     */
    animation: {},
    /**
     * 背景图片配置 class="bg-[key]"
     * @template {none: 'none'}
     * @template {'gradient-to-t': 'linear-gradient(to top, var(--gradient-stops))'}
     * @template {'hero-pattern': "url('/img/hero-pattern.svg')"}
     * @link https://www.tailwindcss.cn/docs/background-image
     */
    backgroundImage: {},
    /**
     * 背景定位 class="bg-[key]"
     * @template { center: 'center' }
     * @link https://www.tailwindcss.cn/docs/background-position
     */
    backgroundPosition: {},
    /**
     * 背景大小 class="bg-[key]"
     * @template { cover: 'cover' }
     * @link https://www.tailwindcss.cn/docs/background-size
     */
    backgroundSize: {},
    /**
     * 模糊样式 class="blur-[key]"
     * @template { sm: '4px' }
     * @link https://tailwindcss.com/docs/blur
     */
    blur: {},
    /**
     * 亮度样式 class="brightness-[key]"
     * @template { 50: '.5' }
     * @link https://tailwindcss.com/docs/brightness
     */
    brightness: {},
    /**
     * 边框圆角 class="rounded-[key] rounded-t-[key]"
     * @template { sm: '0.125rem' }
     * @link https://www.tailwindcss.cn/docs/border-radius
     */
    borderRadius: {},
    /**
     * 边框厚度 class="border-[key] border-t-[key]"
     * @template { 0: '0px' }
     * @link https://www.tailwindcss.cn/docs/border-width
     */
    borderWidth: {},
    /**
     * 盒阴影 class="shadow-[key]"
     * @template { sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }
     * @link https://www.tailwindcss.cn/docs/box-shadow
     */
    boxShadow: {},
    /**
     * 对比度过滤 class="contrast-[key]"
     * @template { 0: '0' }
     * @link https://tailwindcss.com/docs/contrast
     */
    contrast: {},
    /**
     * 断点容器或固定容器配置 可配置默认容器样式 class="contrast md:contrast"
     * @link https://www.tailwindcss.cn/docs/container
     */
    container: {},
    /**
     * 光标效果 class="cursor-[key]"
     * @template { pointer: 'pointer' }
     * @link https://www.tailwindcss.cn/docs/cursor
     */
    cursor: {},
    /**
     * 阴影过滤器 class="drop-shadow-[key]"
     * @template { sm: '0 1px 1px rgba(0,0,0,0.05)' }
     * @template { md: ['0 4px 3px rgba(0, 0, 0, 0.07)', '0 2px 2px rgba(0, 0, 0, 0.06)'] }
     * @link https://tailwindcss.com/docs/drop-shadow
     */
    dropShadow: {},
    /**
     * 填充 svg 样式 class="fill-[key]"
     * @template { current: 'currentColor' }
     * @link https://www.tailwindcss.cn/docs/fill
     */
    fill: {},
    /**
     * 灰度滤镜 class="grayscale grayscale-[key]"
     * @template { DEFAULT: '100%', 0: 0 }
     * @link https://tailwindcss.com/docs/grayscale
     */
    grayscale: {},
    /**
     * 色相旋转 class="hue-rotate-[key] -hue-rotate-[key]"
     * @template { '-180': '-180deg' }
     * @template { 0: '0deg' }
     * @link https://tailwindcss.com/docs/hue-rotate
     */
    hueRotate: {},
    /**
     * 反滤镜 class="invert invert-[key]"
     * @template { DEFAULT: '100%' }
     * @template { 0: '0' }
     * @link https://tailwindcss.com/docs/invert
     */
    invert: {},
    /**
     * Flex 项目放大|缩小 class="flex-[key]"
     * @template { 1: '0' }
     * @template { auto: '1 1 auto' }
     * @link https://www.tailwindcss.cn/docs/flex
     */
    flex: {},
    /**
     * Flex 项目放大 class="flex-grow-[key]"
     * @template { 0: '0' }
     * @template { DEFAULT: '1' }
     * @link https://www.tailwindcss.cn/docs/flex-grow
     */
    flexGrow: {},
    /**
     * Flex 项目缩小 class="flex-shrink-[key]"
     * @template { 0: '0' }
     * @template { DEFAULT: '1' }
     * @link https://www.tailwindcss.cn/docs/flex-shrink
     */
    flexShrink: {},
    /**
     * flex 对齐方式 class="order-[key]"
     * @template { first: '-9999' }
     * @link https://www.tailwindcss.cn/docs/order
     */
    order: {},
    /**
     * 字体序列 class="font-[key]"
     * @template { sans: ['...', '...'] }
     * @template { DEFAULT: '1' }
     * @link https://www.tailwindcss.cn/docs/font-family
     */
    fontFamily: {},
    /**
     * 字体大小 class="text-[key]"
     *  @template { xs: [fontSize, lineHeight] }
     *  @template { sm: [fontSize, style] }
     *  @link https://www.tailwindcss.cn/docs/font-size
     */
    fontSize: {},
    /**
     * 字体粗细 class="font-[key]"
     * @template { thin: '100' }
     * @link https://www.tailwindcss.cn/docs/font-weight
     */
    fontWeight: {},
    /**
     * 控制网格行和列之间的间隔 class="gap-[key]"
     * @template (theme) => theme('spacing')
     * @link https://www.tailwindcss.cn/docs/gap
     */
    gap: {},
    /**
     * 控制隐式创建的网格列的大小  class="auto-cols-[key]"
     * @template { auto: 'auto' }
     * @link https://www.tailwindcss.cn/docs/grid-auto-columns
     */
    gridAutoColumns: {},
    /**
     * 控制隐式创建的网格行的大小  class="auto-rows-[key]"
     * @template { auto: 'auto' }
     * @link https://www.tailwindcss.cn/docs/grid-auto-rows
     */
    gridAutoRows: {},
    /**
     * 控制在网格列中元素的大小和放置方式  class="col-[key]"
     * @template { auto: 'auto' }
     * @link https://www.tailwindcss.cn/docs/grid-column
     */
    gridColumn: {},
    /** 控制在网格行中元素的大小和放置方式  class="col-end-[key]" */
    gridColumnEnd: {},
    /** 控制在网格行中元素的大小和放置方式  class="col-start-[key]" */
    gridColumnStart: {},
    /**
     * 控制在网格行中元素的大小和放置方式  class="row-[key]"
     * @template { auto: 'auto' }
     * @link https://www.tailwindcss.cn/docs/grid-column
     */
    gridRow: {},
    /** 控制在网格行中元素的大小和放置方式  class="row-start-[key]" */
    gridRowStart: {},
    /** 控制在网格行中元素的大小和放置方式  class="row-end-[key]" */
    gridRowEnd: {},
    /**
     * 网格布局中指定列  class="grid-cols-[key]"
     * @template { 1: 'repeat(1, minmax(0, 1fr))' }
     * @link https://www.tailwindcss.cn/docs/grid-column
     */
    gridTemplateColumns: {},
    /**
     * 网格布局中指定行  class="grid-rows-[key]"
     * @template { 1: 'repeat(1, minmax(0, 1fr))' }
     * @link https://www.tailwindcss.cn/docs/grid-column
     */
    gridTemplateRows: {},
    /**
     * 字体间距 class="tracking-[key]"
     * @template { tighter: '-0.05em' }
     * @link https://www.tailwindcss.cn/docs/letter-spacing
     */
    letterSpacing: {},
    /**
     * 字体行度 class="leading-[key]"
     * @template { tight: '1.25' }
     * @link https://www.tailwindcss.cn/docs/line-height
     */
    lineHeight: {},
    /**
     * 列表项标记 class="list-[key]"
     * @template { none: 'none' }
     * @link https://www.tailwindcss.cn/docs/list-style-type
     */
    listStyleType: {},
    /**
     * 最小高度 class="min-h-[key]"
     * @template { full: '100%' }
     * @link https://www.tailwindcss.cn/docs/min-height
     */
    minHeight: {},
    /**
     * 最小宽度 class="min-h-[key]"
     * @template { full: '100%' }
     * @link https://www.tailwindcss.cn/docs/min-width
     */
    minWidth: {},
    /**
     * 元素对齐方式 class="object-[key]"
     * @template { center: 'center' }
     * @link https://www.tailwindcss.cn/docs/object-position
     */
    objectPosition: {},
    /**
     * 不透明度 class="opacity-[key]"
     * @template { 0: '0' }
     * @link https://www.tailwindcss.cn/docs/opacity
     */
    opacity: {},
    /**
     * 轮廓样式 class="outline-[key]"
     * @template { none: ['2px solid transparent', '2px'] }
     * @link https://www.tailwindcss.cn/docs/outline
     */
    outline: {},
    /**
     * 轮廓环偏移厚度 class="ring-offset-[key]"
     * @template { 0: '0px' }
     * @link https://www.tailwindcss.cn/docs/ring-offset-width
     */
    ringOffsetWidth: {},
    /**
     * 轮廓环厚度 class="ring-width-[key]"
     * @template { 0: '0px' }
     * @link https://www.tailwindcss.cn/docs/ring-width-width
     */
    ringWidth: {},
    /**
     * 旋转 class="rotate-[key]"
     * @template { '-180': '-180deg', 1: '1deg' }
     * @link https://www.tailwindcss.cn/docs/rotate
     */
    rotate: {},
    /**
     * 饱和度 class="saturate-[key]"
     * @template { 0: '0' }
     * @link https://tailwindcss.com/docs/saturate
     */
    saturate: {},
    /**
     * 棕褐色过滤器
     * @template { 0: '0' }
     * @link https://tailwindcss.com/docs/sepia
     */
    sepia: {},
    /**
     * 缩放 class="scale-[key]"
     * @template { 0: '0' }
     * @link https://www.tailwindcss.cn/docs/scale
     */
    scale: {},
    /**
     * 倾斜 class="skew-[key]"
     * @template { '-12': '-12deg', 0: '0deg' }
     * @link https://www.tailwindcss.cn/docs/skew
     */
    skew: {},
    /**
     * SVG 线条 class="stroke-[key]"
     * @template { 'current': 'currentColor' }
     * @link https://www.tailwindcss.cn/docs/stroke
     */
    stroke: {},
    /**
     * SVG 线条厚度 class="stroke-[key]"
     * @template { 0: '0' }
     * @link https://www.tailwindcss.cn/docs/stroke-width
     */
    strokeWidth: {},
    /**
     * 元素变换原点 class="origin-[key]"
     * @template {  center: 'center' }
     * @link https://www.tailwindcss.cn/docs/transform-origin
     */
    transformOrigin: {},
    /**
     * 过渡延迟 class="delay-[key]"
     * @template {  75: '75ms' }
     * @link https://www.tailwindcss.cn/docs/transform-origin
     */
    transitionDelay: {},
    /**
     * 过渡延迟 class="duration-[key]"
     * @template {  75: '75ms' }
     * @link https://www.tailwindcss.cn/docs/transition-duration
     */
    transitionDuration: {},
    /**
     * 过渡属性 class="transition-[key]"
     * @template {  opacity: 'opacity' }
     * @link https://www.tailwindcss.cn/docs/transition-property
     */
    transitionProperty: {},
    /**
     * 过渡属性 class="ease-[key]"
     * @template {  linear: 'linear' }
     * @link https://www.tailwindcss.cn/docs/transition-timing-function
     */
    transitionTimingFunction: {},
    /**
     * 堆栈顺序 class="z-[key]"
     * @template {  10: '10' }
     * @link https://www.tailwindcss.cn/docs/z-index
     */
    zIndex: {},
    /**
     * 背景(drop)模糊 class="backdrop-blur-[key]"
     * @template (theme) => theme('blur')
     * @link https://www.tailwindcss.cn/docs/breakpoints
     */
    backdropBlur: {},
    /**
     * 背景(drop)亮度 class="backdrop-brightness-[key]"
     * @template (theme) => theme('brightness')
     * @link https://tailwindcss.com/docs/backdrop-brightness
     */
    backdropBrightness: {},
    /**
     * 背景(drop)对比 class="backdrop-contrast-[key]"
     * @template (theme) => theme('contrast')
     * @link https://tailwindcss.com/docs/backdrop-contrast
     */
    backdropContrast: {},
    /**
     * 背景(drop)灰度 class="backdrop-grayscale-[key]"
     * @template (theme) => theme('grayscale')
     * @link https://tailwindcss.com/docs/backdrop-grayscale
     */
    backdropGrayscale: {},
    /**
     * 背景(drop)色相旋转 class="backdrop-hue-rotate-[key]"
     * @template (theme) => theme('hue-rotate')
     * @link https://tailwindcss.com/docs/backdrop-hue-rotate
     */
    backdropHueRotate: {},
    /**
     * 背景(drop)反转 class="backdrop-invert-[key]"
     * @template (theme) => theme('invert')
     * @link https://tailwindcss.com/docs/backdrop-invert
     */
    backdropInvert: {},
    /**
     * 背景(drop)不透明度 class="backdrop-opacity-[key]"
     * @template (theme) => theme('opacity')
     * @link https://tailwindcss.com/docs/backdrop-opacity
     */
    backdropOpacity: {},
    /**
     * 背景(drop)饱和 class="backdrop-saturate-[key]"
     * @template (theme) => theme('saturate')
     * @link https://tailwindcss.com/docs/backdrop-saturate
     */
    backdropSaturate: {},
    /**
     * 背景(drop)棕褐色滤镜 class="backdrop-sepia-[key]"
     * @template (theme) => theme('sepia')
     * @link https://tailwindcss.com/docs/backdrop-sepia
     */
    backdropSepia: {},
    /**
     * 背景颜色 class="bg-[key]"
     * @template (theme) => theme('colors')
     * @link https://www.tailwindcss.cn/docs/background-color
     */
    backgroundColor: {},

    /**
     * 背景透明度 class="bg-brightness-[key]"
     * @template (theme) => theme('opacity')
     * @link https://www.tailwindcss.cn/docs/background-opacity
     */
    backgroundOpacity: {},
    /**
     * 边框颜色 class="border-[key]"
     * @template (theme) => theme('color')
     * @link https://www.tailwindcss.cn/docs/border-color
     */
    borderColor: {},
    /**
     * 边框不透明度 class="border-opacity-[key]"
     * @template (theme) => theme('opacity')
     * @link https://www.tailwindcss.cn/docs/border-copacity
     */
    borderOpacity: {},
    /**
     * 分割线颜色 class="divide-[key]"
     * @template (theme) => theme('borderColor')
     * @link https://www.tailwindcss.cn/docs/divide-color
     */
    divideColor: {},

    /**
     * 分割线不透明度 class="divide-opacity-[key]"
     * @template (theme) => theme('borderOpacity')
     * @link https://www.tailwindcss.cn/docs/divide-opacity
     */
    divideOpacity: {},
    /**
     * 分割线厚度 class="divide-[key]"
     * @template (theme) => theme('borderWidth')
     * @link https://www.tailwindcss.cn/docs/divide-width
     */
    divideWidth: {},
    /**
     * 渐变色停止 class="from-[key]"
     * @template (theme) => theme('colors')
     * @link https://www.tailwindcss.cn/docs/gradient-color-stops
     */
    gradientColorStops: {},
    /**
     * 高度 class="h-[key]"
     * @template (theme) => theme('spacing')
     * @link https://www.tailwindcss.cn/docs/height
     */
    height: {},
    /**
     * 控制定位元素的位置 class="inset-[key]"
     * @template (theme) => theme('spacing')
     * @link https://www.tailwindcss.cn/docs/top-right-bottom-left#class-reference
     */
    inset: {},
    /**
     * 外边距 class="m-[key]"
     * @template (theme) => theme('spacing')
     * @link https://www.tailwindcss.cn/docs/margin
     */
    margin: {},
    /**
     * 最大高度 class="max-h-[key]"
     * @template (theme) => theme('spacing')
     * @link https://www.tailwindcss.cn/docs/max-height
     */
    maxHeight: {},
    /**
     * 最大宽度 class="max-w-[key]"
     * @link https://www.tailwindcss.cn/docs/max-width
     */
    maxWidth: {},
    /**
     * 内边距 class="p-[key]"
     * @template (theme) => theme('spacing')
     * @link https://www.tailwindcss.cn/docs/padding
     */
    padding: {},
    /**
     * 占位文本颜色 class="placeholder-[key]"
     * @template (theme) => theme('colors')
     * @link https://www.tailwindcss.cn/docs/placeholder-color
     */
    placeholderColor: {},
    /**
     * 占位文本不透明度 class="placeholder-opacity-[key]"
     * @template (theme) => theme('opacity')
     * @link https://www.tailwindcss.cn/docs/placeholder-opacity
     */
    placeholderOpacity: {},
    /**
     * 轮廓环颜色 class="ring-[key]"
     * @template (theme) => theme('colors')
     * @link https://www.tailwindcss.cn/docs/ring-color
     */
    ringColor: {},
    /**
     * 轮廓环偏移颜色 class="ring-offset-[key]"
     * @template (theme) => theme('colors')
     * @link https://www.tailwindcss.cn/docs/ring-offset-color
     */
    ringOffsetColor: {},
    /**
     * 轮廓环不透明度 class="ring-opacity-[key]"
     * @template (theme) => theme('opacity')
     * @link https://www.tailwindcss.cn/docs/ring-opacity
     */
    ringOpacity: {},
    /**
     * 控制 flex 子元素之间的间隔 class="space-[key]"
     * @link https://www.tailwindcss.cn/docs/space
     */
    space: {},
    /**
     * 文本颜色 class="text-[key]"
     * @template (theme) => theme('colors')
     * @link https://www.tailwindcss.cn/docs/text-color
     */
    textColor: {},
    /**
     * 文本颜色不透明度 class="text-opacity-[key]"
     * @template (theme) => theme('opacity')
     * @link https://www.tailwindcss.cn/docs/text-opacity
     */
    textOpacity: {},
    /**
     * 平移 class="translate-[key]"
     * @link https://www.tailwindcss.cn/docs/translate
     */
    translate: {},
    /**
     * 宽度 class="w-[key]"
     * @link https://www.tailwindcss.cn/docs/width
     */
    width: {}
  },
  /**
   * 自定义 theme 中的变体顺序
   * @link https://www.tailwindcss.cn/docs/configuration#variant-order
   */
  variantOrder: [],
  /**
   * 配置项目中核心插件与插件启用哪些变体
   * @link https://www.tailwindcss.cn/docs/configuring-variants
   */
  variants: {},
  /**
   * 插件
   * @link https://www.tailwindcss.cn/docs/plugins
   */
  plugins: [],
  /**
   * 禁用插件
   * @link https://www.tailwindcss.cn/docs/configuration#core-plugins
   */
  corePlugins: {}
}
