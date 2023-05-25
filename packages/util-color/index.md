# Color Palette

颜色的处理、转换、计算

## Install

```
pnpm add -D @hairy/palette
```

## Usage Functions

### rgbToHex({ r, g, b, a })
Converts a RGB/A color

Object (`{ r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}`)

to its HEX/A representation as a

If Alpha channel is present in the original object it will be present also in the output.

### hexToRgb(hex)
Converts a HEX/A color

String (`#RRGGBB<AA>`)

to its RGB/A representation as an

Object (`{ r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}`) .

If Alpha channel is present in the original object it will be present also in the output.

### rgbToHsv({ r, g, b, a })
Converts a RGB/A color

Object (`{ r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}`)

to its HSV/A representation as an

Object (`{ h: [0-360], s: [0-100], v: [0-100}, a: [0-100]}`).

If Alpha channel is present in the original object it will be present also in the output.

### textToRgb(str)
Converts a HEX/A color

String (`#RRGGBB<AA>`) or a RGB/A color String(`rgb(R, G, B<, A>)`)

to its RGB/A representation as an

Object (`{ r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}`).

If Alpha channel is present in the original object it will be present also in the output.

### lighten(str, percent)
Lighten the `color` (if `percent` is positive) or darken it (if `percent` is negative).

Accepts a HEX/A String or a RGB/A String as color and a percent (0 to 100 or -100 to 0) of lighten/darken to be applied to the   `color`. Returns a HEX String representation of the calculated `color`.

### luminosity(str)
Calculates the [relative luminance](https://www.w3.org/TR/WCAG20/#relativeluminancedef) of the `color`.

Accepts a HEX/A String, a RGB/A String or a RGB/A Object as `color`. Returns a value between 0 and 1.

### brightness(str)
Calculates the [color contrast](https://www.w3.org/TR/AERT/#color-contrast) of the `color`.

Accepts a HEX/A String, a RGB/A String or a RGB/A Object as `color`. Returns a value between 0 and 1.

### blend(fgColor, bgColor)
Calculates the [blend](https://www.w3.org/TR/compositing-1/#simplealphacompositing) of two colors.

Accepts a HEX/A String or a RGB/A Object as `fgColor`/`bgColor`. If the alpha channel of the `fgColor` is completely opaque, then the result will be the `fgColor`. If the alpha channel of the `bgColor` is completely opaque, then the resulting blended color will also be opaque. Returns the same type as input for fgColor.

### changeAlpha(color, offset)
Increments or decrements the alpha of a string color.

Accepts a HEX/A String as color and a number between -1 and 1 (including edges) as offset. Use a negative value to decrement and a positive number to increment (ex: changeAlpha('#ff0000', -0.1) to decrement alpha by 10%). Returns HEX/A String.