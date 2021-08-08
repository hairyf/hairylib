import { DirectiveElements, directiveUnit } from '../utils'

export const vSpace: DirectiveElements = {
  p: directiveUnit('padding'),
  pt: directiveUnit('paddingTop'),
  pr: directiveUnit('paddingRight'),
  pb: directiveUnit('paddingBottom'),
  pl: directiveUnit('paddingLeft'),
  px: directiveUnit('paddingLeft', 'paddingRight'),
  py: directiveUnit('paddingTop', 'paddingBottom'),
  m: directiveUnit('margin'),
  mt: directiveUnit('marginTop'),
  mr: directiveUnit('marginRight'),
  mb: directiveUnit('marginBottom'),
  ml: directiveUnit('marginLeft'),
  mx: directiveUnit('marginLeft', 'marginRight'),
  my: directiveUnit('marginTop', 'marginBottom')
}
