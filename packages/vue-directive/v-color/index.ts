import { directiveArgumentValue, DirectiveElements } from '../utils'

export const vColor: DirectiveElements = {
  color: directiveArgumentValue('color'),
  bg: directiveArgumentValue('background'),
  borderColor: directiveArgumentValue('borderColor')
}
