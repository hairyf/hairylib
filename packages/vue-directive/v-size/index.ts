import { directiveSize, directiveUnit } from '../unit'

export const vSize = { size: directiveSize() }

export const vWidth = { w: directiveUnit('width') }

export const vHeight = { h: directiveUnit('height') }

export const vMinWidth = { 'min-w': directiveUnit('minWidth') }

export const vMinHeight = { 'min-h': directiveUnit('minHeight') }

export const vMaxWidth = { 'max-w': directiveUnit('maxWidth') }

export const vMaxHeight = { 'max-h': directiveUnit('maxHeight') }
