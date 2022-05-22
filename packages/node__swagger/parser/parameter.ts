/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-29 11:03:42
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-02-15 16:03:07
 */

import { uselessString, varName } from '../internal'
import { SwaggerField, SwaggerParserContext, SwaggerSourceParameter } from '../_types'
import { parseProperties as _parseProperties } from './properties'

export interface ParseParameterOptions {
  method: string
}

/**
 * 根据 Apis parameter 不同的类型进行解析
 * @param parameter
 */
export function parseParameter(
  this: SwaggerParserContext,
  parameter: SwaggerSourceParameter,
  options: ParseParameterOptions
): string | SwaggerField {
  parameter.name = uselessString(parameter.name)
  const parseOptions = {
    type: [varName(parameter.in || '')],
    name: parameter.name || '',
    ...options
  }
  const parseProperties = _parseProperties.bind(this)

  if (parameter.in === 'body') {
    return parseProperties(parameter.schema, parseOptions)
  }
  if (parameter.in === 'query') {
    const isQueryArray = parameter.type === 'array'
    const description = parameter.description ?? ''
    const isQueryArrayDescription = `${description} ?${parameter.name}=a,b,c`
    return {
      name: parameter.name,
      value: isQueryArray ? 'string' : parseProperties(parameter, parseOptions),
      required: !!parameter.required,
      description: isQueryArray ? isQueryArrayDescription : description
    }
  }
  return {
    name: parameter.name,
    value: parseProperties(parameter, parseOptions),
    required: !!parameter.required,
    description: parameter.description ?? ''
  }
}
