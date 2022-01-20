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

/** @响应infer数据取值 */
export type Response<T> = T extends { data?: infer V } ? V : T;
/** @收款账号详情 */
export type AccountIdPath = {
  /** @账号ID */
  accountId?: string;
};
/** @一键绑定回调 */
export type CompanyReceiveAccountsPaypalReferralQuery = {};
/** @查询账号下已绑定的店铺ID */
export type CompanyReceiveAccountsBoundStoreQuery = {};
export type AccountBindVo = {
  /** @是否绑定成功 */
  success?: boolean;
};
export type AccountChangeDto = {
  /** @账号ID */
  accountId?: string;
  /** @支付方式 */
  paymentMethod?: string;
};
export type AccountDetailVo = {
  /** @账号ID */
  accountId?: string;
  /** @绑定类型 */
  bindType?: string;
  /** @邮箱 */
  email?: string;
  /** @Merchant ID */
  merchantId?: string;
  /** @备注名称 */
  name?: string;
};
export type AccountListQuery = {
  /** @账号属性 manual:手动绑定 quick:一键绑定 */
  bindType?: string;
  /** @关键字 */
  keyword?: string;
  /** @分页页码 */
  pageNum?: number;
  /** @分页大小 */
  pageSize?: number;
  /** @渠道 */
  paymentChannel?: string;
  /** @店铺ID */
  storeId?: string;
};
export type AccountListVo = {
  /** @收款账号ID */
  accountId?: string;
  /** @账号属性 */
  bindType?: string;
  /** @本月收款金额 */
  monthlyAmount?: number;
  /** @名称 */
  name?: string;
  /** @收款渠道 */
  paymentChannel?: string;
};
export type AccountRemarkUpdateDto = {
  /** @账号ID */
  accountId?: string;
  /** @备注名称 */
  name?: string;
};
export type AccountStoreDto = {
  /** @账号ID */
  accountId?: string;
  /** @店铺ID列表 */
  storeIds?: string[];
};
export type AccountStoreListQuery = {
  /** @账号ID */
  accountId?: string;
  /** @关键字 */
  keyword?: string;
  /** @分页页码 */
  pageNum?: number;
  /** @分页大小 */
  pageSize?: number;
};
export type AccountStoreListVo = {
  /** @账号店铺ID */
  accountStoreId?: string;
  /** @店铺域名 */
  domain?: string;
  /** @本月收款金额 */
  monthlyAmount?: number;
  /** @收款状态 */
  status?: string;
  /** @店铺ID */
  storeId?: string;
  /** @店铺名称 */
  storeName?: string;
};
export type AccountStoreRemoveDto = {
  /** @账号店铺ID */
  accountStoreId?: string;
};
export type ActionUrlVo = {
  actionUrl?: string;
};
export type IPageAccountListVo = {
  current?: number;
  pages?: number;
  records?: AccountListVo[];
  size?: number;
  total?: number;
};
export type IPageAccountStoreListVo = {
  current?: number;
  pages?: number;
  records?: AccountStoreListVo[];
  size?: number;
  total?: number;
};
export type IPageStoreAccountListVo = {
  current?: number;
  pages?: number;
  records?: StoreAccountListVo[];
  size?: number;
  total?: number;
};
export type Mapstringobject = {};
export type PayPalCheckResultVo = {
  /** @邮箱 */
  merchantEmail?: string;
  /** @Merchant ID */
  merchantId?: string;
  /** @是否成功 */
  success?: boolean;
};
export type PayPalEventDto = {
  create_time?: string;
  event_type?: string;
  event_version?: string;
  id?: string;
  links?: Mapstringobject[];
  resource?: Record<string, any>;
  resource_type?: string;
  resource_version?: string;
  summary?: string;
};
export type PayPalManualBindDto = {
  /** @Client ID */
  clientId?: string;
  /** @备注名称 */
  name?: string;
  /** @Secret */
  secret?: string;
};
export type StoreAccountListQuery = {
  /** @关键字 */
  keyword?: string;
  /** @分页页码 */
  pageNum?: number;
  /** @分页大小 */
  pageSize?: number;
};
export type StoreAccountListVo = {
  /** @收款账号ID */
  accountId?: string;
  /** @本月收款额 */
  monthlyAmount?: number;
  /** @账号备注名 */
  name?: string;
  /** @收款方式 */
  paymentMethod?: string;
  /** @收款状态 */
  status?: string;
};
export type TrackingInfoDto = {
  /** @运输公司 */
  carrier?: string;
  /** @支付单号 */
  paymentOrderId?: string;
  /** @物流单号 */
  trackingNumber?: string;
};
export type TongYiFanHuiDuiXiangAccountBindVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: AccountBindVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangAccountDetailVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: AccountDetailVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangActionUrlVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ActionUrlVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangIPageAccountListVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: IPageAccountListVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangIPageAccountStoreListVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: IPageAccountStoreListVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangIPageStoreAccountListVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: IPageStoreAccountListVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListstring = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: string[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangPayPalCheckResultVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: PayPalCheckResultVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangobject = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: Record<string, any>;
  /** @返回信息 */
  msg?: string;
};
