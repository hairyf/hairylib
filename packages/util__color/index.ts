export type RGBA = Record<'r' | 'g' |'b' | 'a', number>
export type RGB = Record<'r' | 'g' |'b', number> & { a?: number }
export type HEX = string
export type HSVA = Record<'h' | 's' |'v' | 'a', number>

export type RGBA_TEXT = string
export type HEX_TEXT = string
export type HSVA_TEXT = string
export type COLOR = RGBA_TEXT | HEX_TEXT | HSVA_TEXT

const reRGBA = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/


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
export function rgbToHex ({ r, g, b, a }: RGBA): HEX {
  const alpha = a !== void 0

  r = Math.round(r)
  g = Math.round(g)
  b = Math.round(b)

  if (
    r > 255
    || g > 255
    || b > 255
    || (alpha && a > 100)
  ) {
    throw new TypeError('Expected 3 numbers below 256 (and optionally one below 100)')
  }

  if (alpha) {
    a = Number((Math.round(255 * a / 100) | 1 << 8).toString(16).slice(1))
  }

  return '#' + ((b | g << 8 | r << 16) | 1 << 24).toString(16).slice(1) + a
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
export function hexToRgb (hex: HEX): RGB {
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string')
  }

  hex = hex.replace(/^#/, '')

  if (hex.length === 3) {
    hex = hex[ 0 ] + hex[ 0 ] + hex[ 1 ] + hex[ 1 ] + hex[ 2 ] + hex[ 2 ]
  }
  else if (hex.length === 4) {
    hex = hex[ 0 ] + hex[ 0 ] + hex[ 1 ] + hex[ 1 ] + hex[ 2 ] + hex[ 2 ] + hex[ 3 ] + hex[ 3 ]
  }

  const num = parseInt(hex, 16)

  return hex.length > 6
    ? { r: num >> 24 & 255, g: num >> 16 & 255, b: num >> 8 & 255, a: Math.round((num & 255) / 2.55) }
    : { r: num >> 16, g: num >> 8 & 255, b: num & 255 }
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
export function hsvToRgb ({ h, s, v, a }: HSVA): RGBA {
  let r, g, b
  s = s / 100
  v = v / 100

  h = h / 360
  const
    i = Math.floor(h * 6),
    f = h * 6 - i,
    p = v * (1 - s),
    q = v * (1 - f * s),
    t = v * (1 - (1 - f) * s)

  switch (i % 6) {
    case 0:
      r = v
      g = t
      b = p
      break
    case 1:
      r = q
      g = v
      b = p
      break
    case 2:
      r = p
      g = v
      b = t
      break
    case 3:
      r = p
      g = q
      b = v
      break
    case 4:
      r = t
      g = p
      b = v
      break
    case 5:
      r = v
      g = p
      b = q
      break
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
    a
  }
}

/** 
 * Converts a RGB/A color 
 * 
 * Object (`{ r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}`) 
 * 
 * to its HSV/A representation as an 
 * 
 * Object (`{ h: [0-360], s: [0-100], v: [0-100}, a: [0-100]}`).
 * 
 * If Alpha channel is present in the original object it will be present also in the output. 
 */
export function rgbToHsv ({ r, g, b, a }: RGBA): HSVA {
  const
    max = Math.max(r, g, b),
    min = Math.min(r, g, b),
    d = max - min,
    s = (max === 0 ? 0 : d / max),
    v = max / 255
  let h

  switch (max) {
    case min:
      h = 0
      break
    case r:
      h = (g - b) + d * (g < b ? 6 : 0)
      h /= 6 * d
      break
    case g:
      h = (b - r) + d * 2
      h /= 6 * d
      break
    case b:
      h = (r - g) + d * 4
      h /= 6 * d
      break
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
    a
  }
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
export function textToRgb (str: COLOR): RGB  {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }

  const color = str.replace(/ /g, '')

  const m = reRGBA.exec(color)

  if (m === null) {
    return hexToRgb(color)
  }

  const rgb: RGB = {
    r: Math.min(255, parseInt(m[ 2 ], 10)),
    g: Math.min(255, parseInt(m[ 3 ], 10)),
    b: Math.min(255, parseInt(m[ 4 ], 10))
  }

  if (m[ 1 ]) {
    const alpha = parseFloat(m[ 5 ])
    rgb.a = Math.min(1, isNaN(alpha) === true ? 1 : alpha) * 100
  }

  return rgb
}

/**
 * 
 * Lighten the `color` (if `percent` is positive) or darken it (if `percent` is negative).
 * 
 * Accepts a HEX/A String or a RGB/A String as color and a percent (0 to 100 or -100 to 0) of lighten/darken to be applied to the   `color`. Returns a HEX String representation of the calculated `color`.
 */
export function lighten (color: COLOR, percent: number) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color')
  }
  if (typeof percent !== 'number') {
    throw new TypeError('Expected a numeric percent')
  }

  const rgb = textToRgb(color),
    t = percent < 0 ? 0 : 255,
    p = Math.abs(percent) / 100,
    R = rgb.r,
    G = rgb.g,
    B = rgb.b

  return '#' + (
    0x1000000 + (Math.round((t - R) * p) + R) * 0x10000
    + (Math.round((t - G) * p) + G) * 0x100
    + (Math.round((t - B) * p) + B)
  ).toString(16).slice(1)
}
/**
 * 
 * Calculates the [relative luminance](https://www.w3.org/TR/WCAG20/#relativeluminancedef) of the `color`.
 * 
 * Accepts a HEX/A String, a RGB/A String or a RGB/A Object as `color`. Returns a value between 0 and 1.
 */
export function luminosity (color: COLOR | RGB) {
  if (typeof color !== 'string' && (!color || color.r === void 0)) {
    throw new TypeError('Expected a string or a {r, g, b} object as color')
  }

  const
    rgb = typeof color === 'string' ? textToRgb(color) : color,
    r = rgb.r / 255,
    g = rgb.g / 255,
    b = rgb.b / 255,
    R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4),
    G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4),
    B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)
  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}
/**
 * 
 * Calculates the [color contrast](https://www.w3.org/TR/AERT/#color-contrast) of the `color`.
 * 
 * Accepts a HEX/A String, a RGB/A String or a RGB/A Object as `color`. Returns a value between 0 and 1.
 */
export function brightness (color: COLOR | RGB) {
  if (typeof color !== 'string' && (!color || color.r === void 0)) {
    throw new TypeError('Expected a string or a {r, g, b} object as color')
  }

  const rgb = typeof color === 'string'
    ? textToRgb(color)
    : color

  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
}


/**
 * 
 * Calculates the [blend](https://www.w3.org/TR/compositing-1/#simplealphacompositing) of two colors.
 * 
 * Accepts a HEX/A String or a RGB/A Object as `fgColor`/`bgColor`. If the alpha channel of the `fgColor` is completely opaque, then the result will be the `fgColor`. If the alpha channel of the `bgColor` is completely opaque, then the resulting blended color will also be opaque. Returns the same type as input for fgColor.
 */
export function blend (fgColor: COLOR | RGB, bgColor: COLOR | RGB) {
  if (typeof fgColor !== 'string' && (!fgColor || fgColor.r === void 0)) {
    throw new TypeError('Expected a string or a {r, g, b[, a]} object as fgColor')
  }

  if (typeof bgColor !== 'string' && (!bgColor || bgColor.r === void 0)) {
    throw new TypeError('Expected a string or a {r, g, b[, a]} object as bgColor')
  }

  const
    rgb1 = typeof fgColor === 'string' ? textToRgb(fgColor) : fgColor,
    r1 = rgb1.r / 255,
    g1 = rgb1.g / 255,
    b1 = rgb1.b / 255,
    a1 = rgb1.a !== void 0 ? rgb1.a / 100 : 1,
    rgb2 = typeof bgColor === 'string' ? textToRgb(bgColor) : bgColor,
    r2 = rgb2.r / 255,
    g2 = rgb2.g / 255,
    b2 = rgb2.b / 255,
    a2 = rgb2.a !== void 0 ? rgb2.a / 100 : 1,
    a = a1 + a2 * (1 - a1),
    r = Math.round(((r1 * a1 + r2 * a2 * (1 - a1)) / a) * 255),
    g = Math.round(((g1 * a1 + g2 * a2 * (1 - a1)) / a) * 255),
    b = Math.round(((b1 * a1 + b2 * a2 * (1 - a1)) / a) * 255)

  const ret = { r, g, b, a: Math.round(a * 100) }
  return typeof fgColor === 'string'
    ? rgbToHex(ret)
    : ret
}

/**
 * 
 * Increments or decrements the alpha of a string color.
 * 
 * Accepts a HEX/A String as color and a number between -1 and 1 (including edges) as offset. Use a negative value to decrement and a positive number to increment (ex: changeAlpha('#ff0000', -0.1) to decrement alpha by 10%). Returns HEX/A String.
 */
export function changeAlpha (color: COLOR, offset: number) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color')
  }

  if (offset === void 0 || offset < -1 || offset > 1) {
    throw new TypeError('Expected offset to be between -1 and 1')
  }

  const { r, g, b, a } = textToRgb(color)
  const alpha = a !== void 0 ? a / 100 : 0

  return rgbToHex({
    r, g, b, a: Math.round(Math.min(1, Math.max(0, alpha + offset)) * 100)
  })
}