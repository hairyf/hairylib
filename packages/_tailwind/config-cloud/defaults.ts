import { defaultPresets, percentage } from "../config-base"
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
  ...defaultPresets,
  theme: <any>{
    spacing: <any>generateSpacing(375, spacingOption),
    lineHeight: generateSpacing(20, spacingOption),
    blur: spacingPx2rpx((defaultPresets as any).theme.blur),
    colors: defaultPresets.theme?.colors,
    borderRadius: generateSpacing(30, spacingOption),
    borderWidth: generateSpacing(10, spacingOption),
    boxShadow: spacingPx2rpx(defaultPresets.theme?.boxShadow as any),
    fontSize: generateSpacing(35, spacingOption),
    letterSpacing: generateSpacing(10, spacingOption),
    height: defaultPresets.theme?.height,
    minWidth: defaultPresets.theme?.minWidth,
    maxWidth: defaultPresets.theme?.maxWidth,
    minHeight: defaultPresets.theme?.minHeight,
    maxHeight: defaultPresets.theme?.maxHeight,
    margin: (theme: any) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    inset: (theme: any) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      ...percentage
    }),
  }
}

export default defaults