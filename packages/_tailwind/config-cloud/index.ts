import { defaultPresets } from '../config-base'
import { DefineConfig } from '../dist'
import { generateSpacing } from '../utils'

const spacingOption = {
  compute: (v: number) => v * 2,
  step: 1,
  nodes: [],
  stepMax: 1,
  unit: 'rpx'
}

const px2rpx = (size: string) => {
  return parseInt(size) ? `${parseInt(size) * 2}rpx` : size
}

const spacingPx2rpx = (spacing: Record<string, string>) => {
  const _spacing: typeof spacing = {}
  for (const [key, value] of Object.entries(spacing)) {
    _spacing[key] = px2rpx(value)
  }
  return _spacing
}

export const defineCloudConfig: DefineConfig = {
  ...defaultPresets,
  theme: <any>{
    spacing: <any>generateSpacing(375, spacingOption),
    lineHeight: generateSpacing(20, spacingOption),
    blur: spacingPx2rpx((defaultPresets as any).theme.blur),
    colors: defaultPresets.theme?.colors
  }
}
