import { uselessString, varName } from '../internal'
import { SwaggerField, SwaggerParserContext, SwaggerSourceParameter } from '../_types'
import { useContext } from '../internal/context'
export interface ParseParameterOptions {
  method: string
  path?: string
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
    name: [options.method, options.path || '', parameter.name || '', varName(parameter.in || '')]
  }
  const { parseProperties } = useContext(this)

  // TODO: formData Field
  if (parameter.in === 'formData') {
    return 'FormData'
  }

  if (parameter.in === 'body') {
    return parseProperties(parameter, parseOptions)
  }

  parameter.description = parameter.description ?? ''
  parameter.value = parameter.value ?? ''

  if (parameter.in === 'query' && parameter.type === 'array') {
    parameter.value = 'string | string[]'
    parameter.description += `?${parameter.name}=a,b,c | ?${parameter.name}=a&${parameter.name}=b`
  }

  // header | path | query
  return {
    name: parameter.name,
    value: parameter.value || parseProperties(parameter, parseOptions),
    required: !!parameter.required,
    description: parameter.description ?? ''
  }
}
