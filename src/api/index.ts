/* eslint-disable */

/**
 * @swagger 2.0
 * @description <div style='font-size:14px;color:red;'>Enchant Branding Global RESTful APIs</div>
 * @version 2.0
 * @title Enchant Branding Global
 * @basePath /api/ebg-order-app
 * @see http://dev-ebg.com/api/ebg-order-app/v2/api-docs
 * @author sfe
 * @throws 🈲 > 禁止手动修改
 */

import http from "axios";
import { AxiosRequestConfig } from "axios";
import * as SwaggerType from "./index.type";

const BASE_URL = xxxxxx;

/**
 * @name 购物车列表
 * @method GET
 */
export function getAppCarts(params: SwaggerType.AppCartsQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangCartListVo>;
  const url = `${BASE_URL}/app/carts`;
  return http.request<ResponseType>({ url, method: "GET", params, ...config });
}

/**
 * @name 添加商品到购物车
 * @method POST
 */
export function postAppCarts(data: SwaggerType.CartAddDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangCartListVo>;
  const url = `${BASE_URL}/app/carts`;
  return http.request<ResponseType>({ url, method: "POST", data, ...config });
}

/**
 * @name 修改购物车商品数量
 * @method PUT
 */
export function putAppCartsVariantId(query: SwaggerType.VariantIdPath, data: SwaggerType.CartUpdateDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangCartListVo>;
  const url = `${BASE_URL}/app/carts/${query.variantId}`;
  return http.request<ResponseType>({ url, method: "PUT", data, ...config });
}

/**
 * @name 采集数据
 * @method POST
 */
export function postAppCollectionGather(params: SwaggerType.AppCollectionGatherQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `${BASE_URL}/app/collection/gather`;
  return http.request<ResponseType>({ url, method: "POST", params, ...config });
}

/**
 * @name 访问人数
 * @method POST
 */
export function postAppCollectionVisitors(data: SwaggerType.FangWenRenShu, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `${BASE_URL}/app/collection/visitors`;
  return http.request<ResponseType>({ url, method: "POST", data, ...config });
}

/**
 * @name 预生成订单
 * @method POST
 */
export function postAppOrderCheckout(data: SwaggerType.VariantDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangCheckOutVo>;
  const url = `${BASE_URL}/app/order/checkout`;
  return http.request<ResponseType>({ url, method: "POST", data, ...config });
}

/**
 * @name 完成订单
 * @method POST
 */
export function postAppOrderComplete(data: SwaggerType.CompleteOrderDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangCompleteOrderVo>;
  const url = `${BASE_URL}/app/order/complete`;
  return http.request<ResponseType>({ url, method: "POST", data, ...config });
}

/**
 * @name 保存收货地址
 * @method POST
 */
export function postAppOrderCreate(data: SwaggerType.ShippingAddressDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `${BASE_URL}/app/order/create`;
  return http.request<ResponseType>({ url, method: "POST", data, ...config });
}

/**
 * @name 结算页面数据回显接口
 * @method GET
 */
export function getAppOrderDetailCheckoutToken(query: SwaggerType.CheckoutTokenPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangDingDanXinXi>;
  const url = `${BASE_URL}/app/order/detail/${query.checkoutToken}`;
  return http.request<ResponseType>({ url, method: "GET", ...config });
}

/**
 * @name 支付
 * @method POST
 */
export function postAppOrderPayment(data: SwaggerType.PaymentDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `${BASE_URL}/app/order/payment`;
  return http.request<ResponseType>({ url, method: "POST", data, ...config });
}

/**
 * @name 授权成功回调
 * @method GET
 */
export function getAppOrderPaymentApprove(params: SwaggerType.AppOrderPaymentApproveQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<string>;
  const url = `${BASE_URL}/app/order/payment/approve`;
  return http.request<ResponseType>({ url, method: "GET", params, ...config });
}

/**
 * @name 创建支付单 [PayPal按钮]
 * @method POST
 */
export function postAppOrderPaymentCreate(data: SwaggerType.PayPalOrderCreateDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPayPalOrderCreateVo>;
  const url = `${BASE_URL}/app/order/payment/create`;
  return http.request<ResponseType>({ url, method: "POST", data, ...config });
}

/**
 * @name 保存运费方案
 * @method POST
 */
export function postAppOrderShippingPlan(data: SwaggerType.ShippingPlanDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `${BASE_URL}/app/order/shipping/plan`;
  return http.request<ResponseType>({ url, method: "POST", data, ...config });
}

/**
 * @name 移除订单条目信息
 * @method DELETE
 */
export function deleteAppRmOrderItems(data: SwaggerType.RmOrderItemsDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `${BASE_URL}/app/rm/order/items`;
  return http.request<ResponseType>({ url, method: "DELETE", data, ...config });
}

/**
 * @name testRedisConnection
 * @method GET
 */
export function getAppTest(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `${BASE_URL}/app/test`;
  return http.request<ResponseType>({ url, method: "GET", ...config });
}

/**
 * @name 获取客户地址列表,按默认地址跟更新时间排序
 * @method GET
 */
export function getCustomerAddressCustomerId(params: SwaggerType.CustomerAddressCustomerIdQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListCustomerAddressVo>;
  const url = `${BASE_URL}/customer/address/customerId`;
  return http.request<ResponseType>({ url, method: "GET", params, ...config });
}

/**
 * @name 默认地址
 * @method GET
 */
export function getCustomerAddressDefaultAddress(params: SwaggerType.CustomerAddressDefaultAddressQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangCustomerAddressVo>;
  const url = `${BASE_URL}/customer/address/default/address`;
  return http.request<ResponseType>({ url, method: "GET", params, ...config });
}

/**
 * @name 绑定邮箱
 * @method POST
 */
export function postCustomerBindEmail(data: SwaggerType.CustomerBindEmailDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangstring>;
  const url = `${BASE_URL}/customer/bind/email`;
  return http.request<ResponseType>({ url, method: "POST", data, ...config });
}

/**
 * @name 登录
 * @method POST
 */
export function postCustomerLogin(data: SwaggerType.LoginDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangLoginVo>;
  const url = `${BASE_URL}/customer/login`;
  return http.request<ResponseType>({ url, method: "POST", data, ...config });
}

/**
 * @name 登出
 * @method DELETE
 */
export function deleteCustomerLogoutToken(query: SwaggerType.TokenPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `${BASE_URL}/customer/logout/${query.token}`;
  return http.request<ResponseType>({ url, method: "DELETE", ...config });
}

/**
 * @name 注册
 * @method POST
 */
export function postCustomerRegister(data: SwaggerType.RegisterDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangstring>;
  const url = `${BASE_URL}/customer/register`;
  return http.request<ResponseType>({ url, method: "POST", data, ...config });
}

/**
 * @name 获取访客信息
 * @method GET
 */
export function getCustomerVisitor(params: SwaggerType.CustomerVisitorQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangstring>;
  const url = `${BASE_URL}/customer/visitor`;
  return http.request<ResponseType>({ url, method: "GET", params, ...config });
}

/**
 * @name 订单价格计算
 * @method POST
 */
export function postOrderPrice(data: SwaggerType.OrderPriceDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangDingDanZongJieJieGuo>;
  const url = `${BASE_URL}/order/price`;
  return http.request<ResponseType>({ url, method: "POST", data, ...config });
}
