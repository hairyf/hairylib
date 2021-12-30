/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-29 11:03:42
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2021-12-30 10:17:15
 */

import { SwaggerField, SwaggerSourceParameter } from '../_types'
import { parsePropertie } from './properties'

/**
 * 根据 Apis parameter 不同的类型进行解析
 * @param parameter
 */
export function parseParameter(parameter: SwaggerSourceParameter): string | SwaggerField {
  if (parameter.in === 'body') {
    return parsePropertie(parameter.schema)
  }
  if (parameter.in === 'query') {
    const isQueryArray = parameter.type === 'array'
    const description = parameter.description ?? ''
    const isQueryArrayDescription = `${description} ?${parameter.name}=a,b,c`
    return {
      name: parameter.name,
      value: isQueryArray ? 'string' : parsePropertie(parameter),
      required: !!parameter.required,
      description: isQueryArray ? isQueryArrayDescription : description
    }
  }
  return {
    name: parameter.name,
    value: parsePropertie(parameter),
    required: !!parameter.required,
    description: parameter.description ?? ''
  }
}
