import { directiveArgValue, DirectiveElements } from '../utils'

export const vColor: DirectiveElements = {
  color: directiveArgValue('color'),
  bg: directiveArgValue('background'),
  borderColor: directiveArgValue('borderColor')
}
