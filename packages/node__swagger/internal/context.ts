import { SwaggerAstConfig } from '../_types'
import { parseParameter } from '../parser/parameter'
import { parseProperties } from '../parser/properties'

export interface SwaggerParserContext extends SwaggerAstConfig {
  parseProperties: OmitThisParameter<typeof parseProperties>
  parseParameter: OmitThisParameter<typeof parseParameter>
}
export const createContext = (_c: any) => {
  if (!_c.parseProperties) _c.parseProperties = parseProperties.bind(_c)
  if (!_c.parseParameter) _c.parseParameter = parseParameter.bind(_c)
  return _c as SwaggerParserContext
}
export const useContext = (_c: any) => {
  return _c as SwaggerParserContext
}
