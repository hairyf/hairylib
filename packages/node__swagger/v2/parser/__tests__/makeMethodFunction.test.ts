import { makeFunctionDeclaration } from '../parse-ast'
import { astNodeToCode } from '../../utils/ast-helper'

describe('@hairy/swagger:parse-ast(makeMethodFunction)', () => {
  it('code', () => {
    const astNode = makeFunctionDeclaration({
      name: 'postApiV1ConfigPayLimit',
      parameters: [
        {
          name: 'config',
          required: false,
          type: 'AxiosRequestConfig'
        }
      ],
      url: `"/api/v1/config/pay/limit"`,
      responseType: 'RespConfigOutput',
      options: [
        'url',
        ['method', `"GET"`],
        ['...', 'config']
      ],
      jsonDocs: [
        '@name 地址同步订阅',
        '@method POST',
      ]
    })
    const code = astNodeToCode(astNode)

    expect(code).toEqual('export function postApiV1ConfigPayLimit(config: AxiosRequestConfig) { type Response = SwaggerType.Response<SwaggerType.RespConfigOutput>; const url = "/api/v1/config/pay/limit"; return http.request<ResponseType>({ url, method: "GET", ...config }); }')
  })
})