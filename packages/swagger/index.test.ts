/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-30 18:18:25
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-20 18:35:45
 */
import { swaggerWebClientGenerator } from '.'

describe('hairySwagger', () => {
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
