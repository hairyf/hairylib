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

/** @响应infer数据取值 */
export type Response<T> = T extends { data?: infer V } ? V : void;
/** @获取访客信息 */
export type CustomerVisitorQuery = {};
/** @登出 */
export type TokenPath = {
  token: string;
};
/** @默认地址 */
export type CustomerAddressDefaultAddressQuery = {};
/** @获取客户地址列表,按默认地址跟更新时间排序 */
export type CustomerAddressCustomerIdQuery = {};
/** @授权成功回调 */
export type AppOrderPaymentApproveQuery = {};
/** @结算页面数据回显接口 */
export type CheckoutTokenPath = {
  checkoutToken: string;
};
/** @采集数据 */
export type AppCollectionGatherQuery = {};
/** @修改购物车商品数量 */
export type VariantIdPath = {
  variantId: string;
};
/** @购物车列表 */
export type AppCartsQuery = {};
export type BillAddressDto = {
  address1?: string;
  address2?: string;
  checkoutToken?: string;
  city?: string;
  company?: string;
  country?: string;
  countryCode?: string;
  customerId?: string;
  email?: string;
  firstName?: string;
  id?: string;
  lastName?: string;
  latitude?: number;
  longitude?: number;
  name?: string;
  phone?: string;
  province?: string;
  provinceCode?: string;
  zip?: string;
};
export type BillAddressVo = {
  address1?: string;
  address2?: string;
  checkoutToken?: string;
  city?: string;
  company?: string;
  country?: string;
  countryCode?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  latitude?: number;
  longitude?: number;
  name?: string;
  phone?: string;
  province?: string;
  provinceCode?: string;
  uuid?: string;
  zip?: string;
};
export type CartAddDto = {
  productId?: string;
  quantity?: number;
  userId?: string;
  variantId?: string;
};
export type CartItemVo = {
  image?: Image;
  productId?: string;
  productTitle?: string;
  quantity?: number;
  variantCurrency?: string;
  variantId?: string;
  variantOptions?: string[];
  variantSellingPrice?: number;
};
export type CartListVo = {
  itemCount?: number;
  items?: CartItemVo[];
  totalPrice?: number;
  variantCount?: number;
};
export type CartUpdateDto = {
  quantity?: number;
  userId?: string;
};
export type CheckOutVo = {
  checkoutToken?: string;
  inventoryInfo?: InventoryInfo[];
  redirectUrl?: string;
  returnType?: string;
};
export type CompleteOrderDto = {
  billAddressDTO?: BillAddressDto;
  checkoutToken?: string;
  currency?: string;
  customerRemark?: string;
  flowSetting?: string;
  orderPriceDTO?: OrderPriceDto;
  payMethod?: string;
  shippingAddressDTO?: ShippingAddressDto;
  shopUrl?: string;
  storeId?: string;
};
export type CompleteOrderVo = {
  checkoutToken?: string;
  inventoryInfo?: InventoryInfo[];
};
export type CustomerAddressVo = {
  address1?: string;
  address2?: string;
  city?: string;
  country?: string;
  countryCode?: string;
  email?: string;
  firstName?: string;
  id?: string;
  isDefault?: string;
  lastName?: string;
  phone?: string;
  phoneAreaCode?: string;
  province?: string;
  provinceCode?: string;
  zip?: string;
};
export type CustomerBindEmailDto = {
  customerId?: string;
  distinctId?: string;
  email?: string;
  storeId?: string;
};
export type Image = {
  imageAlt?: string;
  imageHeight?: string;
  imageId?: string;
  imageSrc?: string;
  imageWidth?: string;
};
export type InventoryInfo = {
  productId?: string;
  quantity?: number;
  variantId?: string;
};
export type LoginDto = {
  customerId?: string;
  distinctId?: string;
  email?: string;
  password?: string;
  storeId?: string;
};
export type LoginVo = {
  customerId?: string;
  token?: string;
};
export type OrderItemDto = {
  checkoutToken?: string;
  compareAtPrice?: number;
  giftCard?: string;
  grams?: string;
  id?: number;
  image?: string;
  options?: string;
  price?: number;
  productId?: string;
  quantity?: number;
  requiresShipping?: number;
  sku?: string;
  taxable?: string;
  title?: string;
  variantId?: string;
  vendor?: string;
  version?: number;
  weight?: number;
};
export type OrderPriceDto = {
  orderItems?: OrderItemDto[];
  promotionCode?: string;
  shippingTempId?: string;
};
export type PayPalOrderCreateDto = {
  checkoutToken?: string;
};
export type PayPalOrderCreateVo = {
  paymentOrderId?: string;
  paymentToken?: string;
};
export type PaymentDto = {
  checkoutToken?: string;
};
export type RegisterDto = {
  customerId?: string;
  distinctId?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  storeId?: string;
};
export type RmOrderItemsDto = {
  checkoutToken?: string;
  orderItemIds?: string[];
};
export type ShippingAddressDto = {
  address1?: string;
  address2?: string;
  checkoutToken?: string;
  city?: string;
  country?: string;
  countryCode?: string;
  customerAddressId?: string;
  customerId?: string;
  email?: string;
  firstName?: string;
  isSubscribe?: string;
  lastName?: string;
  phone?: string;
  phoneAreaCode?: string;
  province?: string;
  provinceCode?: string;
  taxId?: string;
  taxShortName?: string;
  zip?: string;
};
export type ShippingPlanDto = {
  checkoutToken?: string;
  shippingRatePlanId?: string;
};
export type VariantDto = {
  currency?: string;
  customerId?: string;
  shopUrl?: string;
  source?: string;
  storeId?: string;
  variants?: Variants[];
};
export type Variants = {
  productId?: string;
  quantity?: number;
  variantId?: string;
};
export type DiZhiXinXi = {
  address1?: string;
  address2?: string;
  checkoutToken?: string;
  city?: string;
  company?: string;
  country?: string;
  countryCode?: string;
  email?: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  latitude?: number;
  longitude?: number;
  name?: string;
  phone?: string;
  province?: string;
  provinceCode?: string;
  zip?: string;
};
/** @活动价格 */
export type HuoDongJieGe = {
  activityName?: string;
  activityTypeEnum?: string;
  price?: number;
};
/** @活动价格 */
export type HuoDongJieGe1 = {
  activityName?: string;
  activityTypeEnum?: string;
  price?: number;
};
export type TongYiFanHuiDuiXiang = {
  code?: string;
  data?: Record<string, any>;
  msg?: string;
};
export type TongYiFanHuiDuiXiangCartListVo = {
  code?: string;
  data?: CartListVo;
  msg?: string;
};
export type TongYiFanHuiDuiXiangCheckOutVo = {
  code?: string;
  data?: CheckOutVo;
  msg?: string;
};
export type TongYiFanHuiDuiXiangCompleteOrderVo = {
  code?: string;
  data?: CompleteOrderVo;
  msg?: string;
};
export type TongYiFanHuiDuiXiangCustomerAddressVo = {
  code?: string;
  data?: CustomerAddressVo;
  msg?: string;
};
export type TongYiFanHuiDuiXiangListCustomerAddressVo = {
  code?: string;
  data?: CustomerAddressVo[];
  msg?: string;
};
export type TongYiFanHuiDuiXiangLoginVo = {
  code?: string;
  data?: LoginVo;
  msg?: string;
};
export type TongYiFanHuiDuiXiangPayPalOrderCreateVo = {
  code?: string;
  data?: PayPalOrderCreateVo;
  msg?: string;
};
export type TongYiFanHuiDuiXiangobject = {
  code?: string;
  data?: Record<string, any>;
  msg?: string;
};
export type TongYiFanHuiDuiXiangstring = {
  code?: string;
  data?: string;
  msg?: string;
};
export type TongYiFanHuiDuiXiangDingDanXinXi = {
  code?: string;
  data?: DingDanXinXi;
  msg?: string;
};
export type TongYiFanHuiDuiXiangDingDanZongJieJieGuo = {
  code?: string;
  data?: DingDanZongJieJieGuo;
  msg?: string;
};
export type DingDanXinXi = {
  billAddressVO?: BillAddressVo;
  cancelReason?: string;
  cancelledAt?: string;
  checkoutToken?: string;
  currency?: string;
  customerId?: string;
  financialStatus?: string;
  fulfillmentStatus?: string;
  landingSite?: string;
  orderItems?: DingDanTiaoMu[];
  orderNumber?: string;
  orderTotalPriceVO?: DingDanZongJieJieGuo1;
  paidAt?: string;
  payMethod?: string;
  productNumCount?: number;
  productTotalWeight?: number;
  shippingAddress?: DiZhiXinXi;
  source?: string;
  status?: string;
  step?: string;
  storeId?: string;
};
/** @订单总价结果 */
export type DingDanZongJieJieGuo = {
  activityPrices?: HuoDongJieGe[];
  subTotal?: number;
  subTotalIncludeActivity?: number;
  total?: number;
  totalShipping?: number;
  totalTax?: number;
};
/** @订单总价结果 */
export type DingDanZongJieJieGuo1 = {
  activityPrices?: HuoDongJieGe1[];
  shippingTempId?: string;
  subTotal?: number;
  total?: number;
  totalShipping?: number;
  totalTax?: number;
};
export type DingDanTiaoMu = {
  checkoutToken?: string;
  compareAtPrice?: number;
  giftCard?: string;
  grams?: string;
  id?: number;
  image?: string;
  options?: string;
  price?: number;
  productId?: string;
  quantity?: number;
  requiresShipping?: number;
  sku?: string;
  taxable?: string;
  title?: string;
  variantId?: string;
  variantWeight?: number;
  vendor?: string;
  version?: number;
};
export type FangWenRenShu = {
  distinctId?: string;
  ts?: number;
};
