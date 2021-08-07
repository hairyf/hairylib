import { directiveUnit } from '../unit'

export const vInset = { inset: directiveUnit('top', 'right', 'bottom', 'left') }
export const vInsetY = { 'inset-y': directiveUnit('top', 'bottom') }
export const vInsetX = { 'inset-x': directiveUnit('left', 'right') }

export const vTop = { top: directiveUnit('top') }
export const vLeft = { left: directiveUnit('left') }
export const vRight = { right: directiveUnit('right') }
export const vBottom = { bottom: directiveUnit('bottom') }

export const vZ = { z: directiveUnit('zIndex') }
