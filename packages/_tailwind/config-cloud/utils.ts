export const px2rpx = (size: string) => {
  return parseInt(size) ? `${parseInt(size) * 2}rpx` : size
}

export const replacePx2rpx = (str: string) => {
  return str.replace(/\d{0,}px/g, function (match) {
    return px2rpx(match)
  })
}
export const spacingPx2rpx = (spacing: Record<string, string>) => {
  const _spacing: typeof spacing = {}
  for (const [key, value] of Object.entries(spacing)) {
    _spacing[key] = replacePx2rpx(value)
  }
  return _spacing
}