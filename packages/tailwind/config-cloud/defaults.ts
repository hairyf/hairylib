import { defaultConfig, defaultPercentage } from '../config-base'
import { DefineConfig } from '../utils'
import { spacing, negative, SpacingOptions } from '@hairy/share'
import { spacingPx2rpx } from './utils'

const spacingOption: SpacingOptions = {
  step: false,
  unit: 'rpx'
}

/** 默认配置 */
const defaults: DefineConfig = {
  ...defaultConfig,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'] as any,
  darkMode: false,
  theme: <any>{
    screens: {},
    spacing: <any>spacing(375, spacingOption),
    lineHeight: spacing(20, spacingOption),
    blur: spacingPx2rpx((defaultConfig as any).theme.blur),
    colors: defaultConfig.theme?.colors,
    borderRadius: {
      ...spacing(30, spacingOption),
      full: '9999rpx'
    },
    borderWidth: spacing(10, spacingOption),
    boxShadow: spacingPx2rpx(defaultConfig.theme?.boxShadow as any),
    fontSize: spacing(35, spacingOption),
    letterSpacing: spacing(10, spacingOption),
    height: defaultConfig.theme?.height,
    minWidth: defaultConfig.theme?.minWidth,
    maxWidth: defaultConfig.theme?.maxWidth,
    minHeight: defaultConfig.theme?.minHeight,
    maxHeight: defaultConfig.theme?.maxHeight,
    margin: (theme: any) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    inset: (theme: any) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      ...defaultPercentage
    })
  },
  variants: {},
  plugins: [],
  corePlugins: {
    space: false,
    divideWidth: false,
    divideColor: false,
    divideStyle: false,
    divideOpacity: false
  }
}

delete (defaults as any).presets
delete (defaults as any).variantOrder
delete (defaults as any).variants

export default defaults
