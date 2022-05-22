import { SwaggerGenerateConfig } from '.'
import { SwaggerDefinition, SwaggerField } from '../_types'

export const spliceHeaderCode = (config: SwaggerGenerateConfig) => {
  const { ast, build } = config
  return `
  /* eslint-disable */

  /**
   * @swagger ${ast.info.swaggerVersion}
   * @description ${ast.info.description}
   * @version ${ast.info.apiVersion}
   * @title ${ast.info.title}
   * @basePath ${ast.info.basePath}
   * @see ${build.uri}
   * @author hairy
   * @throws 🈲 > 禁止手动修改
   */
  `
}

export const spliceTypeField = (field: SwaggerField) => {
  let string_ = ''
  if (field.description) string_ += `/** @${field.description} */\n`
  string_ += `${field.name}${field.required ? '' : '?'}: ${field.value}`
  return string_
}

export const spliceType = (definition: SwaggerDefinition, contents: string[]) => {
  let string_ = ''
  if (definition.description) string_ += `/** @${definition.description} */\n`
  string_ += `\
    export type ${definition.name} = {
        ${contents.join('\n')}
    }
  `
  return string_
}
