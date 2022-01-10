/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-30 18:18:25
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-06 14:49:36
 */
import { hairySwagger, parseOutput, parseSource } from '.'
import { parseParameter } from './parser/parameter'
import { parseProperties } from './parser/properties'

describe('hairySwagger', () => {
  it('parseSource', async () => {
    const ast = await parseSource({
      uri: 'http://dev-ebg.com/api/ebg-order-app/v2/api-docs'
    })
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
    const parameter = parseParameter(
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
    const propertie = parseProperties({ type: 'integer', format: 'int32', description: '版本号' })
    expect(propertie).toStrictEqual('number')
  })
  it('Swagger Generate', async () => {
    await hairySwagger({
      uri: 'http://dev-ebg.com/api/ebg-order-app/v2/api-docs',
      baseURL: 'xxxxxx',
      import: {
        type: './index.type'
      },
      responseType: 'T extends { data?: infer V } ? V : void'
    })
  })
})
