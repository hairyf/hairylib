import type { AnyColor, HsvaColor, RgbaColor } from 'colord'
import { colord, extend } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'
import mixPlugin from 'colord/plugins/mix'

extend([a11yPlugin, mixPlugin])

export type RGBA = Record<'r' | 'g' | 'b' | 'a', number>
export type RGB = Record<'r' | 'g' | 'b', number> & { a?: number }
export type HexColor = string
export type HSVA = Record<'h' | 's' | 'v' | 'a', number>

export type RGBA_TEXT = string
export type HEX_TEXT = string
export type HSVA_TEXT = string
export type COLOR = RGBA_TEXT | HEX_TEXT | HSVA_TEXT
export type PALETTE_INDEXES = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

/**
 * Converts a RGB/A color
 *
 * Object (`{ r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}`)
 *
 * to its HEX/A representation as a
 *
 * String (`#RRGGBB<AA>`).
 *
 * If Alpha channel is present in the original object it will be present also in the output.
 */
export function rgbToHex({ r, g, b, a }: RgbaColor): HexColor {
  return colord({ r, g, b, a }).toHex()
}

/**
 * Converts a HEX/A color
 *
 * String (`#RRGGBB<AA>`) or a RGB/A color String(`rgb(R, G, B<, A>)`)
 *
 * to its RGB/A representation as an
 *
 * Object (`{ r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}`).
 *
 * If Alpha channel is present in the original object it will be present also in the output.
 */
export function hexToRgb(hex: HexColor): RgbaColor {
  return colord(hex).toRgb()
}

/**
 * Converts a HEX/A color
 *
 * String (`#RRGGBB<AA>`)
 *
 * to its RGB/A representation as an
 *
 * Object (`{ r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}`) .
 *
 * If Alpha channel is present in the original object it will be present also in the output.
 */
export function hsvToRgb({ h, s, v, a }: HsvaColor): RgbaColor {
  return colord({ h, s, v, a }).toRgb()
}

/**
 * Converts a RGB/A color
 *
 * Object (`{ r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}`)
 *
 * to its HSV/A representation as an
 *
 * Object (`{ h: [0-360], s: [0-100], v: [0-100}, a: [0-1]}`).
 *
 * If Alpha channel is present in the original object it will be present also in the output.
 */
export function rgbToHsv({ r, g, b, a }: RgbaColor): HsvaColor {
  return colord({ r, b, g, a }).toHsv()
}

/**
 * Converts a HEX/A color
 *
 * String (`#RRGGBB<AA>`) or a RGB/A color String(`rgb(R, G, B<, A>)`)
 *
 * to its RGB/A representation as an
 *
 * Object (`{ r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}`).
 *
 * If Alpha channel is present in the original object it will be present also in the output.
 */
export function textToRgb(str: AnyColor): RgbaColor {
  return colord(str).toRgb()
}

/**
 * Lighten the `color` (if `percent` is positive) or darken it (if `percent` is negative).
 *
 * Accepts a HEX/A String or a RGB/A String as color and a percent (0 to 1 or -1 to 0) of lighten/darken to be applied to the   `color`. Returns a HEX String representation of the calculated `color`.
 */
export function lighten(color: AnyColor, percent: number) {
  return colord(color).lighten(percent).toHex()
}
/**
 * Calculates the [relative luminance](https://www.w3.org/TR/WCAG20/#relativeluminancedef) of the `color`.
 *
 * Accepts a HEX/A String, a RGB/A String or a RGB/A Object as `color`. Returns a value between 0 and 1.
 */
export function luminance(color: AnyColor) {
  return colord(color).luminance()
}
/**
 * Calculates the [color contrast](https://www.w3.org/TR/AERT/#color-contrast) of the `color`.
 *
 * Accepts a HEX/A String, a RGB/A String or a RGB/A Object as `color`. Returns a value between 0 and 1.
 */
export function brightness(color: AnyColor) {
  return colord(color).brightness()
}

/**
 * Calculates the [blend](https://www.w3.org/TR/compositing-1/#simplealphacompositing) of two colors.
 *
 * Accepts a HEX/A String or a RGB/A Object as `fgColor`/`bgColor`. If the alpha channel of the `fgColor` is completely opaque, then the result will be the `fgColor`. If the alpha channel of the `bgColor` is completely opaque, then the resulting blended color will also be opaque. Returns the same type as input for fgColor.
 */
export function blend(fgColor: AnyColor, bgColor: AnyColor) {
  return colord(fgColor).mix(bgColor)
}

/**
 * Change color transparency
 */
export function changeAlpha(color: COLOR, alpha: number) {
  return colord(color).alpha(alpha).toHex()
}

const hueStep = 2
const saturationStep = 16
const saturationStep2 = 5
const brightnessStep1 = 5
const brightnessStep2 = 15
const lightColorCount = 5
const darkColorCount = 4

/**
 * Obtain palette colors based on color (from left to right, from light to dark, with 6 as the main color number)
 * @param color - Color
 * @param index - The corresponding color number of the color palette (6 as the main color number)
 * @description algorithm implementation draws inspiration from ant design palette algorithm https://github.com/ant-design/ant-design/blob/master/components/style/color/colorPalette.less
 */
export function colorPalette(color: string | RgbaColor, index: PALETTE_INDEXES) {
  if (typeof color !== 'string' && (!color || color.r === void 0))
    throw new TypeError('Expected a string or a {r, g, b} object as color')

  const rgb = typeof color === 'string' ? textToRgb(color) : color
  const oldHsv = colord(rgb).toHsv()

  if (index === 6)
    return rgbToHex(rgb)

  const light = index < 6
  const i = light ? lightColorCount + 1 - index : index - lightColorCount - 1
  const newHsv = {
    h: hue(oldHsv, i, light),
    s: saturation(oldHsv, i, light),
    v: value(oldHsv, i, light),
    a: oldHsv.a,
  }
  return colord(newHsv).toHex()
}

/**
 * Obtain color gradient
 * @param hsv - Color values in HSV format
 * @param i - relative distance to 6
 * @param isLight - Is it a bright color
 */
function hue(hsv: HsvaColor, i: number, isLight: boolean) {
  let hue: number
  if (hsv.h >= 60 && hsv.h <= 240) {
    // Cool color tone
    // Dimming and brightening colors, clockwise rotation brings warmth
    // Deepen and darken the color, rotate counterclockwise to make it colder
    hue = isLight ? hsv.h - hueStep * i : hsv.h + hueStep * i
  }
  else {
    // Warm color tone
    // Dimming and brightening colors are warmer when rotated counterclockwise
    // Deepen and darken, rotate clockwise to make it cooler
    hue = isLight ? hsv.h + hueStep * i : hsv.h - hueStep * i
  }
  if (hue < 0)
    hue += 360
  else if (hue >= 360)
    hue -= 360

  return hue
}

/**
 * Obtain saturation gradient
 * @param hsv - Color values in HSV format
 * @param i - relative distance to 6
 * @param isLight - Is it a bright color
 */
function saturation(hsv: HsvaColor, i: number, isLight: boolean) {
  let saturation: number
  if (isLight)
    saturation = hsv.s - saturationStep * i
  else if (i === darkColorCount)
    saturation = hsv.s + saturationStep
  else saturation = hsv.s + saturationStep2 * i

  if (saturation > 100)
    saturation = 100

  if (isLight && i === lightColorCount && saturation > 10)
    saturation = 10

  if (saturation < 6)
    saturation = 6

  return saturation
}

/**
 * Obtain brightness gradient
 * @param hsv - Color values in HSV format
 * @param i - relative distance to 6
 * @param isLight - Is it a bright color
 */
function value(hsv: HsvaColor, i: number, isLight: boolean) {
  let value: number
  value = isLight ? hsv.v + brightnessStep1 * i : hsv.v - brightnessStep2 * i

  if (value > 100)
    value = 100

  return value
}
