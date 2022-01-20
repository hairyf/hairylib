/* eslint-disable */

/**
 * @swagger 2.0
 * @description <div style='font-size:14px;color:red;'>Enchant Branding Global RESTful APIs</div>
 * @version 2.0
 * @title Enchant Branding Global
 * @basePath /admin-api/ebg-payment-web
 * @see http://43.129.65.194:3000/api/plugin/exportSwagger?type=OpenAPIV2&pid=17&status=all&isWiki=false
 * @author sfe
 * @throws 🈲 > 禁止手动修改
 */

import http from "@/utils/http";
import { AxiosRequestConfig } from "axios";
import * as SwaggerType from "@/swagger/types/.mock.business.type";

const baseURL = import.meta.env.VITE_APP_BASE_API as string;

/**
 * @name 修改备注
 * @method PUT
 */
export function putCompanyReceiveAccounts(data: SwaggerType.AccountRemarkUpdateDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/company/receive/accounts`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 查询账号下已绑定的店铺ID
 * @method GET
 */
export function getCompanyReceiveAccountsBoundStore(params: SwaggerType.CompanyReceiveAccountsBoundStoreQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListstring>;
  const url = `/company/receive/accounts/bound_store`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 公司收款管理账号列表
 * @method POST
 */
export function postCompanyReceiveAccountsList(data: SwaggerType.AccountListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangIPageAccountListVo>;
  const url = `/company/receive/accounts/list`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 手动添加账号
 * @method POST
 */
export function postCompanyReceiveAccountsPaypalManual(data: SwaggerType.PayPalManualBindDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangAccountBindVo>;
  const url = `/company/receive/accounts/paypal/manual`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 手动添加账号校验
 * @method POST
 */
export function postCompanyReceiveAccountsPaypalManualCheck(data: SwaggerType.PayPalManualBindDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPayPalCheckResultVo>;
  const url = `/company/receive/accounts/paypal/manual_check`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 一键绑定账号
 * @method POST
 */
export function postCompanyReceiveAccountsPaypalQuick(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangActionUrlVo>;
  const url = `/company/receive/accounts/paypal/quick`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", ...config });
}

/**
 * @name 一键绑定回调
 * @method GET
 */
export function getCompanyReceiveAccountsPaypalReferral(params: SwaggerType.CompanyReceiveAccountsPaypalReferralQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<void>;
  const url = `/company/receive/accounts/paypal/referral`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 添加店铺
 * @method POST
 */
export function postCompanyReceiveAccountsStore(data: SwaggerType.AccountStoreDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/company/receive/accounts/store`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 移除店铺
 * @method DELETE
 */
export function deleteCompanyReceiveAccountsStore(data: SwaggerType.AccountStoreRemoveDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/company/receive/accounts/store`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", data, ...config });
}

/**
 * @name 收款账号详情-关联店铺列表
 * @method POST
 */
export function postCompanyReceiveAccountsStoreList(data: SwaggerType.AccountStoreListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangIPageAccountStoreListVo>;
  const url = `/company/receive/accounts/store/list`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 收款账号详情
 * @method GET
 */
export function getCompanyReceiveAccountsAccountId(query: SwaggerType.AccountIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangAccountDetailVo>;
  const url = `/company/receive/accounts/${query.accountId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
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

/**
 * @name handleWebhooks
 * @method POST
 */
export function postPaypalWebhooks(data: SwaggerType.PayPalEventDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<void>;
  const url = `/paypal/webhooks`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 修改收款账号
 * @method PUT
 */
export function putStoreReceiveAccountsChange(data: SwaggerType.AccountChangeDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/store/receive/accounts/change`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 收款账号列表
 * @method POST
 */
export function postStoreReceiveAccountsList(data: SwaggerType.StoreAccountListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangIPageStoreAccountListVo>;
  const url = `/store/receive/accounts/list`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}
