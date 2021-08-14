import { directiveArgumentValue, DirectiveElements } from '../utils'

export const vColor: DirectiveElements = {
  color: directiveArgumentValue('color'),
  bg: directiveArgumentValue('background'),
  'border-color': directiveArgumentValue('borderColor'),
  'border-t-color': directiveArgumentValue('borderTopColor'),
  'border-r-color': directiveArgumentValue('borderRightColor'),
  'border-b-color': directiveArgumentValue('borderBottomColor'),
  'border-l-color': directiveArgumentValue('borderLeftColor')
}
