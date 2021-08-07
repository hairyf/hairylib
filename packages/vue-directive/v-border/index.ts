import { directiveUnit } from '../unit'

export const vRounded = { rounded: directiveUnit('borderRadius') }
export const vRoundedT = {
  'rounded-t': directiveUnit('borderTopLeftRadius', 'borderTopRightRadius')
}
export const vRoundedR = {
  'rounded-r': directiveUnit('borderTopRightRadius', 'borderBottomRightRadius')
}
export const vRoundedB = {
  'rounded-b': directiveUnit('borderBottomLeftRadius', 'borderBottomRightRadius')
}
export const vRoundedL = {
  'rounded-l': directiveUnit('borderTopLeftRadius', 'borderBottomLeftRadius')
}
export const vRoundedTL = { 'rounded-tl': directiveUnit('borderTopLeftRadius') }
export const vRoundedTR = { 'rounded-tr': directiveUnit('borderTopRightRadius') }
export const vRoundedBR = { 'rounded-br': directiveUnit('borderBottomRightRadius') }
export const vRoundedBL = { 'rounded-bl': directiveUnit('borderBottomLeftRadius') }

export const vBorder = { border: directiveUnit('borderWidth') }
export const vBorderT = { 'border-t': directiveUnit('borderTopWidth') }
export const vBorderR = { 'border-r': directiveUnit('borderRightWidth') }
export const vBorderB = { 'border-b': directiveUnit('borderBottomWidth') }
export const vBorderL = { 'border-l': directiveUnit('borderLeftWidth') }
