import { defaultConfig, defaultPercentage } from "../config-base"
import { DefineConfig } from "../dist"
import { generateSpacing, negative } from "../utils"
import { spacingPx2rpx } from "./utils"

const spacingOption = {
  compute: (v: number) => v * 2,
  step: 1,
  nodes: [],
  stepMax: 1,
  unit: 'rpx'
}
/** 默认配置 */
const defaults: DefineConfig = {
  ...defaultConfig,
  darkMode: false,
  theme: <any>{
    spacing: <any>generateSpacing(375, spacingOption),
    lineHeight: generateSpacing(20, spacingOption),
    blur: spacingPx2rpx((defaultConfig as any).theme.blur),
    colors: defaultConfig.theme?.colors,
    borderRadius: generateSpacing(30, spacingOption),
    borderWidth: generateSpacing(10, spacingOption),
    boxShadow: spacingPx2rpx(defaultConfig.theme?.boxShadow as any),
    fontSize: generateSpacing(35, spacingOption),
    letterSpacing: generateSpacing(10, spacingOption),
    height: defaultConfig.theme?.height,
    minWidth: defaultConfig.theme?.minWidth,
    maxWidth: defaultConfig.theme?.maxWidth,
    minHeight: defaultConfig.theme?.minHeight,
    maxHeight: defaultConfig.theme?.maxHeight,
    margin: (theme: any) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    inset: (theme: any) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      ...defaultPercentage
    }),
  },
  variants: {},
  plugins: [],
  corePlugins: {
    space: false,
    divideWidth: false,
    divideColor: false,
    divideStyle: false,
    divideOpacity: false,
  }
}

export default defaults