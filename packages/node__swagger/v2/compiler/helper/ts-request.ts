
import { ParserRequestOptions, CommonFiled, LiteralExpressionFiled } from '../../typings/index'

/**
 * 处理传入请求参数
 * @param httpImport 调用函数名称
 * @param httpConfig 添加 options / parameters
 * @param functions 添加 options / parameters
 * @param baseURL 添加 options
 */
export function handleRequestOptions({
  baseURL,
  httpConfig,
  functions,
  httpImport,
}: ParserRequestOptions) {
  const commons = {
    parameters: [] as CommonFiled[],
    before: [] as LiteralExpressionFiled[],
    after: [] as LiteralExpressionFiled[]
  }

  
  
  if (baseURL) commons.before.unshift(baseURL.name)
  if (httpConfig) {
    httpConfig.name = httpConfig.name ?? 'Config'
    httpConfig.parameter = httpConfig.parameter ?? 'config'
    commons.parameters.push({
      name: httpConfig.parameter,
      type: httpConfig.name,
      required: false
    })
    commons.after.push(['...', httpConfig.parameter])
  }

  functions.forEach(item => {
    (item as any).httpImport = httpImport
    item.parameters = [
      ...item.parameters,
      ...commons.parameters
    ].sort(item => item.required ? -1 : 1)
    item.options = [
      ...commons.before,
      ...item.options,
      ...commons.after
    ]
  })
}
