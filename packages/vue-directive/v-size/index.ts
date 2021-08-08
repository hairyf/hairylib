import { DirectiveElements, directiveSize, directiveUnit } from '../utils'

export const vSize: DirectiveElements = {
  size: directiveSize(),
  w: directiveUnit('width'),
  h: directiveUnit('height'),
  'min-w': directiveUnit('minWidth'),
  'min-h': directiveUnit('minHeight'),
  'max-w': directiveUnit('maxWidth'),
  'max-h': directiveUnit('maxHeight')
}
