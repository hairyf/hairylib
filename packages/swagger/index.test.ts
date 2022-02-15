/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-30 18:18:25
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-20 18:35:45
 */
import { swaggerWebClientGenerator } from '.'

describe('hairySwagger', () => {
  it('Swagger Generate', () => {
    swaggerWebClientGenerator([
      // 订单服务
      {
        baseURL: 'import.meta.env.VITE_APP_BASE_API + "/ebg-order-web"',
        uri: 'http://dev-ebg.com/admin-api/ebg-order-web/v2/api-docs',
        output: {
          api: 'src/swagger/api/order.api.ts',
          type: 'src/swagger/types/order.type.ts'
        },
        import: { type: '@/swagger/types/order.type' }
      },
      // 设置服务
      {
        baseURL: 'import.meta.env.VITE_APP_BASE_API + "/ebg-setting-web"',
        uri: 'http://dev-ebg.com/admin-api/ebg-setting-web/v2/api-docs',
        output: {
          api: 'src/swagger/api/setting.api.ts',
          type: 'src/swagger/types/setting.type.ts'
        },
        import: { type: '@/swagger/types/setting.type' }
      },
      // 优惠服务
      {
        baseURL: 'import.meta.env.VITE_APP_BASE_API + "/ebg-marketing-web"',
        uri: 'http://dev-ebg.com/admin-api/ebg-marketing-web/v2/api-docs',
        output: {
          api: 'src/swagger/api/marketing.api.ts',
          type: 'src/swagger/types/marketing.type.ts'
        },
        import: { type: '@/swagger/types/marketing.type' }
      },
      {
        baseURL: 'import.meta.env.VITE_APP_BASE_API + "/ebg-product-web"',
        uri: 'http://dev-ebg.com/admin-api/ebg-product-web/v2/api-docs',
        output: {
          api: 'src/swagger/api/product.api.ts',
          type: 'src/swagger/types/product.type.ts'
        },
        import: { type: '@/swagger/types/product.type' }
      },
      // 支付服务
      {
        baseURL: 'import.meta.env.VITE_APP_BASE_API + "/ebg-payment-web"',
        uri: 'http://dev-ebg.com/admin-api/ebg-payment-web/v2/api-docs',
        output: {
          api: 'src/swagger/api/payment.api.ts',
          type: 'src/swagger/types/payment.type.ts'
        },
        import: { type: '@/swagger/types/payment.type' }
      },
      // 开放服务
      {
        baseURL: 'import.meta.env.VITE_APP_BASE_API + "/ebg-open-web"',
        uri: 'http://dev-ebg.com/admin-api/ebg-open-web/v2/api-docs',
        output: {
          api: 'src/swagger/api/open.api.ts',
          type: 'src/swagger/types/open.type.ts'
        },
        import: { type: '@/swagger/types/open.type' }
      },
      // 店铺服务
      {
        baseURL: 'import.meta.env.VITE_APP_BASE_API + "/ebg-idaas-web"',
        uri: 'http://dev-ebg.com/admin-api/ebg-idaas-web/v2/api-docs',
        output: {
          api: 'src/swagger/api/idaas.api.ts',
          type: 'src/swagger/types/idaas.type.ts'
        },
        import: { type: '@/swagger/types/idaas.type' }
      }
      // mock服务
      // {
      //   baseURL: 'import.meta.env.VITE_APP_BASE_API as string',
      //   uri: 'http://43.129.65.194:3000/api/plugin/exportSwagger?type=OpenAPIV2&pid=17&status=all&isWiki=false',
      //   output: {
      //     api: 'src/swagger/api/.mock.business.api.ts',
      //     type: 'src/swagger/types/.mock.business.type.ts',
      //   },
      //   import: { type: '@/swagger/types/.mock.business.type' },
      // },
    ])
  })
})
