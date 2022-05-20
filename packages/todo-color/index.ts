/**
 * 颜色混合器 - 仅支持 hex 颜色完整值
 * @param colorOne 颜色值
 * @param colorTwo 颜色值
 * @param ratio 根据 colorTwo 混合比例, 0~1 区间, 1 则是完全的 colorTwo
 * @returns 混合颜色
 */
export const blend = (colorOne: string, colorTwo: string, ratio: number) => {
  ratio = Math.max(Math.min(Number(ratio), 1), 0)
  const r1 = parseInt(colorOne.slice(1, 3), 16)
  const g1 = parseInt(colorOne.slice(3, 5), 16)
  const b1 = parseInt(colorOne.slice(5, 7), 16)
  const r2 = parseInt(colorTwo.slice(1, 3), 16)
  const g2 = parseInt(colorTwo.slice(3, 5), 16)
  const b2 = parseInt(colorTwo.slice(5, 7), 16)
  let r: string | number = Math.round(r1 * (1 - ratio) + r2 * ratio)
  let g: string | number = Math.round(g1 * (1 - ratio) + g2 * ratio)
  let b: string | number = Math.round(b1 * (1 - ratio) + b2 * ratio)
  r = ('0' + (r || 0).toString(16)).slice(-2)
  g = ('0' + (g || 0).toString(16)).slice(-2)
  b = ('0' + (b || 0).toString(16)).slice(-2)
  return '#' + r + g + b
}

/**
 * 将 hex 颜色转成 rgb
 * @param hex
 * @param opacity
 * @returns rgba String
 */
export const hexToRgba = (hex: string, opacity: number) => {
  const RGBA =
    'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5)) + ',' + parseInt('0x' + hex.slice(5, 7)) + ',' + opacity + ')'
  return {
    red: parseInt('0x' + hex.slice(1, 3)),
    green: parseInt('0x' + hex.slice(3, 5)),
    blue: parseInt('0x' + hex.slice(5, 7)),
    rgba: RGBA
  }
}

/**
 * 根据颜色融合出黑色与白色, 透明度色 TODO
 * @param color
 */
export const fuseThemeColor = (color: string) => ({
  'light-2': blend('#ffffff', color, 0.8),
  'light-4': blend('#ffffff', color, 0.6),
  'light-6': blend('#ffffff', color, 0.4),
  'light-8': blend('#ffffff', color, 0.2),

  'dark-2': blend('#000000', color, 0.8),
  'dark-4': blend('#000000', color, 0.6),
  'dark-6': blend('#000000', color, 0.4),
  'dark-8': blend('#000000', color, 0.2),

  'opacity-2': hexToRgba(color, 0.8).rgba,
  'opacity-4': hexToRgba(color, 0.6).rgba,
  'opacity-6': hexToRgba(color, 0.4).rgba,
  'opacity-8': hexToRgba(color, 0.2).rgba
})
