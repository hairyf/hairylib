/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-30 18:18:25
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-20 18:32:49
 */
import { swaggerWebClientGenerator, parseOutput, parseSource } from '.'
import { parseParameter } from './parser/parameter'
import { parseProperties } from './parser/properties'

describe('hairySwagger', () => {
  it('parseSource', async () => {
    const ast = await parseSource.call(
      { definitions: [] },
      {
        uri: 'http://dev-ebg.com/api/ebg-order-app/v2/api-docs'
      }
    )
    expect(ast.apis).toBeDefined()
    expect(ast.definitions).toBeDefined()
    expect(ast.info).toBeDefined()
  })
  it('parseOutput', () => {
    const output = parseOutput({
      uri: 'http://dev-ebg.com/api/ebg-order-app/v2/api-docs',
      output: {}
    })
    expect(output.api).toBeDefined()
  })
  it('parseParameter', () => {
    const parameter = parseParameter.call(
      { definitions: [] },
      {
        in: 'body',
        name: 'orderPriceDTO',
        description: 'orderPriceDTO',
        required: true,
        schema: { originalRef: 'OrderPriceDTO', $ref: '#/definitions/OrderPriceDTO' }
      },
      { method: 'GET' }
    )
    expect(parameter).toBeDefined()
  })
  it('parseProperties', () => {
    const propertie = parseProperties.bind(
      { definitions: [] },
      { type: 'integer', format: 'int32', description: '版本号' }
    )
    expect(propertie).toStrictEqual('number')
  })
  it('Swagger Generate', async () => {
    await swaggerWebClientGenerator({
      uri: 'http://dev-ebg.com/api/ebg-order-app/v2/api-docs',
      baseURL: 'xxxxxx',
      import: {
        type: './index.type'
      },
      responseType: 'T extends { data?: infer V } ? V : void'
    })
  })
})
