/* eslint-disable */

/**
 * @swagger 2.0
 * @description <div style='font-size:14px;color:red;'>Enchant Branding Global RESTful APIs</div>
 * @version 2.0
 * @title Enchant Branding Global
 * @basePath /api/ebg-order-app
 * @see http://43.129.65.194:3000/api/plugin/exportSwagger?type=OpenAPIV2&pid=17&status=all&isWiki=false
 * @author sfe
 * @throws 🈲 > 禁止手动修改
 */

import http from "@/utils/http";
import { AxiosRequestConfig } from "axios";
import * as SwaggerType from "@/swagger/types/.mock.business.type";

const baseURL = import.meta.env.VITE_APP_BASE_API as string;

/**
 * @name addQueue
 * @method GET
 */
export function getAppAddQueueCheckoutToken(query: SwaggerType.CheckoutTokenPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/app/add/queue/${query.checkoutToken}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 购物车列表
 * @method GET
 */
export function getAppCarts(params: SwaggerType.AppCartsQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangCartListVo>;
  const url = `/app/carts`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 添加商品到购物车
 * @method POST
 */
export function postAppCarts(data: SwaggerType.CartAddDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangCartListVo>;
  const url = `/app/carts`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 修改购物车商品数量
 * @method PUT
 */
export function putAppCartsVariantId(query: SwaggerType.VariantIdPath, data: SwaggerType.CartUpdateDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangCartListVo>;
  const url = `/app/carts/${query.variantId}`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 采集数据
 * @method POST
 */
export function postAppCollectionGather(params: SwaggerType.AppCollectionGatherQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/app/collection/gather`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", params, ...config });
}

/**
 * @name delLock
 * @method GET
 */
export function getAppDelLock(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/app/del/lock`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name getQueue
 * @method GET
 */
export function getAppGetQueueCheckoutToken(query: SwaggerType.CheckoutTokenPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/app/get/queue/${query.checkoutToken}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name handerQueue
 * @method GET
 */
export function getAppHanderQueueRunStatus(query: SwaggerType.RunStatusPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/app/hander/queue/${query.runStatus}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 预生成订单
 * @method POST
 */
export function postAppOrderCheckout(data: SwaggerType.VariantDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangCheckOutVo>;
  const url = `/app/order/checkout`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 完成订单
 * @method POST
 */
export function postAppOrderComplete(data: SwaggerType.CompleteOrderDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangCompleteOrderVo>;
  const url = `/app/order/complete`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 保存收货地址
 * @method POST
 */
export function postAppOrderCreate(data: SwaggerType.ShippingAddressDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/app/order/create`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 结算页面数据回显接口
 * @method GET
 */
export function getAppOrderDetailCheckoutToken(query: SwaggerType.CheckoutTokenPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangDingDanXinXi>;
  const url = `/app/order/detail/${query.checkoutToken}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 授权成功回调
 * @method GET
 */
export function getAppOrderPaymentApprove(params: SwaggerType.AppOrderPaymentApproveQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<void>;
  const url = `/app/order/payment/approve`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 创建支付单 [PayPal按钮]
 * @method POST
 */
export function postAppOrderPaymentCreate(data: SwaggerType.PayPalOrderCreateDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPayPalOrderCreateVo>;
  const url = `/app/order/payment/create`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 支付
 * @method POST
 */
export function postAppOrderPaymentPay(data: SwaggerType.PaymentDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPaymentOrderVo>;
  const url = `/app/order/payment/pay`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 保存运费方案
 * @method POST
 */
export function postAppOrderShippingPlan(data: SwaggerType.ShippingPlanDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/app/order/shipping/plan`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name removeQueue
 * @method GET
 */
export function getAppRemoveQueueCheckoutToken(query: SwaggerType.CheckoutTokenPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/app/remove/queue/${query.checkoutToken}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 移除订单条目信息
 * @method DELETE
 */
export function deleteAppRmOrderItems(data: SwaggerType.RmOrderItemsDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/app/rm/order/items`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", data, ...config });
}

/**
 * @name 新增地址
 * @method POST
 */
export function postCustomerAddress(data: SwaggerType.CustomerAddressDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/customer/address`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 修改地址
 * @method PUT
 */
export function putCustomerAddress(data: SwaggerType.CustomerAddressDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/customer/address`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 删除地址
 * @method DELETE
 */
export function deleteCustomerAddress(params: SwaggerType.CustomerAddressQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/customer/address`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", params, ...config });
}

/**
 * @name 地址列表
 * @method GET
 */
export function getCustomerAddressList(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListCustomerAddressVo>;
  const url = `/customer/address/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 修改用户默认地址
 * @method PUT
 */
export function putCustomerAddressUpdateDefaultCustomerAddressId(query: SwaggerType.CustomerAddressIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/customer/address/update/default/${query.customerAddressId}`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", ...config });
}

/**
 * @name 绑定邮箱
 * @method POST
 */
export function postCustomerBindEmail(data: SwaggerType.CustomerBindEmailDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangstring>;
  const url = `/customer/bind/email`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 登录
 * @method POST
 */
export function postCustomerLogin(data: SwaggerType.LoginDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangLoginVo>;
  const url = `/customer/login`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 登出
 * @method DELETE
 */
export function deleteCustomerLogoutToken(query: SwaggerType.TokenPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/customer/logout/${query.token}`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", ...config });
}

/**
 * @name 注册
 * @method POST
 */
export function postCustomerRegister(data: SwaggerType.RegisterDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangstring>;
  const url = `/customer/register`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name Shopify获取账户信息
 * @method GET
 */
export function getCustomerShopifyAccount(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangShopifyAccountVo>;
  const url = `/customer/shopify/account`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 获取访客信息
 * @method GET
 */
export function getCustomerVisitor(params: SwaggerType.CustomerVisitorQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangstring>;
  const url = `/customer/visitor`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 订单价格计算
 * @method POST
 */
export function postOrderPrice(data: SwaggerType.OrderPriceDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangDingDanZongJieJieGuo>;
  const url = `/order/price`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name Shopify订单详情
 * @method GET
 */
export function getOrderShopifyDetailCheckoutToken(query: SwaggerType.CheckoutTokenPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangShopifyOrderVo>;
  const url = `/order/shopify/detail/${query.checkoutToken}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name Shopify订单列表
 * @method GET
 */
export function getOrderShopifyList(params: SwaggerType.OrderShopifyListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListShopifyOrderVo>;
  const url = `/order/shopify/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name addTrackingInfo
 * @method POST
 */
export function postPaypalShipmentPaypalShipment(data: SwaggerType.TrackingInfoDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<void>;
  const url = `/paypal/shipment/paypal/shipment`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}
