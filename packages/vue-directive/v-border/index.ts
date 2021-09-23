import { DirectiveElements, directiveUnit } from '../utils'

export const vBorder: DirectiveElements = {
  rounded: directiveUnit('borderRadius'),
  'rounded-t': directiveUnit('borderTopLeftRadius', 'borderTopRightRadius'),
  'rounded-r': directiveUnit('borderTopRightRadius', 'borderBottomRightRadius'),
  'rounded-b': directiveUnit('borderBottomLeftRadius', 'borderBottomRightRadius'),
  'rounded-l': directiveUnit('borderTopLeftRadius', 'borderBottomLeftRadius'),
  'rounded-tl': directiveUnit('borderTopLeftRadius'),
  'rounded-tr': directiveUnit('borderTopRightRadius'),
  'rounded-br': directiveUnit('borderBottomRightRadius'),
  'rounded-bl': directiveUnit('borderBottomLeftRadius'),
  border: directiveUnit('borderWidth'),
  'border-t': directiveUnit('borderTopWidth'),
  'border-r': directiveUnit('borderRightWidth'),
  'border-b': directiveUnit('borderBottomWidth'),
  'border-l': directiveUnit('borderLeftWidth')
}
