import { DirectiveElements, directiveUnit } from '../utils'

export const vLayout: DirectiveElements = {
  inset: directiveUnit('top', 'right', 'bottom', 'left'),
  'inset-y': directiveUnit('top', 'bottom'),
  'inset-x': directiveUnit('left', 'right'),
  top: directiveUnit('top'),
  left: directiveUnit('left'),
  right: directiveUnit('right'),
  bottom: directiveUnit('bottom'),
  z: directiveUnit('zIndex')
}
