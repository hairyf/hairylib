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

/** @响应infer数据取值 */
export type Response<T> = T extends { data?: infer V } ? V : T;
/** @Shopify订单列表 */
export type OrderShopifyListQuery = {};
/** @获取访客信息 */
export type CustomerVisitorQuery = {};
/** @登出 */
export type TokenPath = {
  /** @token */
  token: string;
};
/** @修改用户默认地址 */
export type CustomerAddressIdPath = {
  /** @默认地址Id */
  customerAddressId: string;
};
/** @删除地址 */
export type CustomerAddressQuery = {};
/** @授权成功回调 */
export type AppOrderPaymentApproveQuery = {};
/** @handerQueue */
export type RunStatusPath = {
  /** @runStatus */
  runStatus: string;
};
/** @采集数据 */
export type AppCollectionGatherQuery = {};
/** @修改购物车商品数量 */
export type VariantIdPath = {
  /** @variantId */
  variantId: string;
};
/** @购物车列表 */
export type AppCartsQuery = {};
/** @addQueue */
export type CheckoutTokenPath = {
  /** @checkoutToken */
  checkoutToken: string;
};
export type BillAddressDto = {
  /** @街道地址 */
  address1?: string;
  /** @街道地址的可选附加字段 */
  address2?: string;
  /** @结账号（整个系统唯一） */
  checkoutToken?: string;
  /** @所在的城市、城镇或村庄 */
  city?: string;
  /** @所在国家的名称 */
  country?: string;
  /** @所在国家的两个字母代码(ISO 3166-1格式) */
  countryCode?: string;
  /** @用户customerId */
  customerId?: string;
  /** @邮箱 */
  email?: string;
  /** @名 */
  firstName?: string;
  /** @主键标识 */
  id?: string;
  /** @姓 */
  lastName?: string;
  /** @电话 */
  phone?: string;
  /** @所在的地区(例如，省、州或地区)的名称 */
  province?: string;
  /** @所在区域的两个字母缩写 */
  provinceCode?: string;
  /** @邮政编码(例如，zip、postcode或Eircode) */
  zip?: string;
};
export type BillAddressVo = {
  /** @街道地址 */
  address1?: string;
  /** @街道地址的可选附加字段 */
  address2?: string;
  /** @结账号（整个系统唯一） */
  checkoutToken?: string;
  /** @所在的城市、城镇或村庄 */
  city?: string;
  /** @公司 */
  company?: string;
  /** @所在国家的名称 */
  country?: string;
  /** @所在国家的两个字母代码(ISO 3166-1格式) */
  countryCode?: string;
  /** @邮箱 */
  email?: string;
  /** @名 */
  firstName?: string;
  /** @姓 */
  lastName?: string;
  /** @纬度 */
  latitude?: number;
  /** @经度 */
  longitude?: number;
  /** @全名 */
  name?: string;
  /** @电话 */
  phone?: string;
  /** @所在的地区(例如，省、州或地区)的名称 */
  province?: string;
  /** @所在区域的两个字母缩写 */
  provinceCode?: string;
  /** @用户标识 */
  uuid?: string;
  /** @邮政编码(例如，zip、postcode或Eircode) */
  zip?: string;
};
export type CartAddDto = {
  /** @商品ID */
  productId?: string;
  /** @数量 */
  quantity?: number;
  /** @用户ID */
  userId?: string;
  /** @子商品ID */
  variantId?: string;
};
export type CartItemVo = {
  /** @子商品图片 */
  image?: Image;
  /** @商品ID */
  productId?: string;
  /** @商品标题 */
  productTitle?: string;
  /** @数量 */
  quantity?: number;
  /** @子商品货币 */
  variantCurrency?: string;
  /** @子商品ID */
  variantId?: string;
  /** @子商品规格 */
  variantOptions?: string[];
  /** @子商品价格 */
  variantSellingPrice?: number;
};
export type CartListVo = {
  /** @购物车条数 */
  itemCount?: number;
  /** @子商品列表 */
  items?: CartItemVo[];
  /** @总价格 */
  totalPrice?: number;
  /** @子商品总数 */
  variantCount?: number;
};
export type CartUpdateDto = {
  /** @数量 */
  quantity?: number;
  /** @用户ID */
  userId?: string;
};
export type CheckOutVo = {
  /** @结账号（整个系统唯一） */
  checkoutToken?: string;
  inventoryInfo?: InventoryInfo[];
  /** @类型为回调时的url */
  redirectUrl?: string;
  /** @返回类型 */
  returnType?: string;
};
export type CompleteOrderDto = {
  /** @账单地址 */
  billAddressDTO?: BillAddressDto;
  /** @checkoutToken */
  checkoutToken?: string;
  /** @客户备注 */
  customerRemark?: string;
  /** @结账模式：standard=标准，single_page=单页，express=快速，simple=简单 */
  flowSetting?: string;
  /** @订单价格计算参数 */
  orderPriceDTO?: OrderPriceDto;
  /** @支付方式: pay_on_delivery(货到付款), credit_card(信用卡), paypal */
  payMethod?: string;
  /** @地址信息 */
  shippingAddressDTO?: ShippingAddressDto;
  /** @顾客点击链接到商店的网站 */
  shopUrl?: string;
};
export type CompleteOrderVo = {
  /** @结账号 */
  checkoutToken?: string;
  inventoryInfo?: InventoryInfo[];
  /** @优惠码错误文案，有则在优惠码输入框下展示 */
  promotionCodeErrMsg?: string;
};
export type CustomerAddressDto = {
  /** @地址1(存街道信息) */
  address1?: string;
  /** @地址2(存门牌号等信息) */
  address2?: string;
  /** @城市 */
  city?: string;
  /** @国家的名称 */
  country?: string;
  /** @国家编号 */
  countryCode?: string;
  /** @客户id */
  customerId?: string;
  /** @邮箱 */
  email?: string;
  /** @名 */
  firstName?: string;
  /** @新增不填,修改是在填值 */
  id?: string;
  /** @是否默认地址:0-否,1-是 */
  isDefault?: string;
  /** @姓 */
  lastName?: string;
  /** @电话号 */
  phone?: string;
  /** @电话区号 */
  phoneAreaCode?: string;
  /** @省份 */
  province?: string;
  /** @省份代码 */
  provinceCode?: string;
  /** @邮编 */
  zip?: string;
};
export type CustomerAddressVo = {
  /** @地址1(存街道信息) */
  address1?: string;
  /** @地址2(存门牌号等信息) */
  address2?: string;
  /** @城市 */
  city?: string;
  /** @国家的名称 */
  country?: string;
  /** @国家代码 */
  countryCode?: string;
  /** @邮箱 */
  email?: string;
  /** @姓 */
  firstName?: string;
  /** @地址id */
  id?: string;
  /** @是否默认地址:0-否,1-是 */
  isDefault?: string;
  /** @名 */
  lastName?: string;
  /** @电话号 */
  phone?: string;
  /** @电话区号 */
  phoneAreaCode?: string;
  /** @省份 */
  province?: string;
  /** @省份代码 */
  provinceCode?: string;
  /** @邮编 */
  zip?: string;
};
export type CustomerBindEmailDto = {
  /** @邮箱 */
  email?: string;
};
export type Image = {
  /** @图片提示 */
  imageAlt?: string;
  /** @图片高度 */
  imageHeight?: string;
  /** @图片ID */
  imageId?: string;
  /** @图片URL */
  imageSrc?: string;
  /** @图片宽度 */
  imageWidth?: string;
};
export type InventoryInfo = {
  /** @库存不足时候的提示数据,商品id */
  productId?: string;
  /** @库存不足时候的提示数据，当前库存 */
  quantity?: number;
  /** @库存不足时候的提示数据，sku_id */
  variantId?: string;
};
export type LoginDto = {
  /** @邮箱 */
  email?: string;
  /** @密码 */
  password?: string;
};
export type LoginVo = {
  /** @客户id */
  customerId?: string;
  /** @token,登录态标识 */
  token?: string;
};
export type OrderItemDto = {
  /** @分类ids */
  categoryIds?: string[];
  /** @订单ID */
  checkoutToken?: string;
  /** @商品原价 */
  compareAtPrice?: number;
  /** @是否礼品卡。如果是真的，那么该项目是不征税或考虑航运费用 */
  giftCard?: string;
  /** @物品的重量，以克为单位 */
  grams?: string;
  /** @订单条目ID */
  id?: string;
  /** @商品图片 */
  image?: string;
  /** @商品属性，Json格式 */
  options?: string;
  /** @订单条目ID */
  orderItemId?: string;
  /** @折扣价 */
  price?: number;
  /** @产品ID */
  productId?: string;
  /** @购买数量 */
  quantity?: number;
  /** @是否需要运输 0:否 1:是 */
  requiresShipping?: number;
  /** @商品sku编码 */
  sku?: string;
  /** @该商品是否需要纳税 */
  taxable?: string;
  /** @商品名称 */
  title?: string;
  /** @商品sku唯一标识 */
  variantId?: string;
  /** @物品供应商名称 */
  vendor?: string;
  /** @版本号 */
  version?: number;
  /** @重量 */
  weight?: number;
};
export type OrderPriceDto = {
  /** @订单条目信息 */
  orderItems?: OrderItemDto[];
  /** @优惠码 */
  promotionCode?: string;
  /** @邮费方案id */
  shippingTempId?: string;
};
export type PayPalOrderCreateDto = {
  /** @结算号 */
  checkoutToken?: string;
};
export type PayPalOrderCreateVo = {
  /** @支付单ID */
  paymentOrderId?: string;
  /** @支付单号 */
  paymentToken?: string;
};
export type PaymentDto = {
  /** @结算单号 */
  checkoutToken?: string;
};
export type PaymentOrderVo = {
  /** @支付方式 */
  paymentMethod?: string;
  /** @支付单ID */
  paymentOrderId?: string;
  /** @支付状态 */
  paymentStatus?: string;
  /** @支付单号 */
  paymentToken?: string;
};
export type RegisterDto = {
  /** @邮箱 */
  email?: string;
  /** @名 */
  firstName?: string;
  /** @姓 */
  lastName?: string;
  /** @密码 */
  password?: string;
};
export type RmOrderItemsDto = {
  /** @结算号 */
  checkoutToken?: string;
  /** @订单项ID列表 */
  orderItemIds?: string[];
};
export type ShippingAddressDto = {
  /** @街道地址 */
  address1?: string;
  /** @街道地址的可选附加字段 */
  address2?: string;
  /** @结账号（整个系统唯一） */
  checkoutToken?: string;
  /** @所在的城市、城镇或村庄 */
  city?: string;
  /** @所在国家的名称 */
  country?: string;
  /** @所在国家的两个字母代码(ISO 3166-1格式) */
  countryCode?: string;
  /** @从地址列表，选择地址是再传地址id */
  customerAddressId?: string;
  /** @邮箱 */
  email?: string;
  /** @名 */
  firstName?: string;
  /** @是否订阅:0-否,1-是 */
  isSubscribe?: string;
  /** @姓 */
  lastName?: string;
  /** @电话 */
  phone?: string;
  /** @电话区号 */
  phoneAreaCode?: string;
  /** @所在的地区(例如，省、州或地区)的名称 */
  province?: string;
  /** @所在区域的两个字母缩写 */
  provinceCode?: string;
  /** @税费编码,根据店铺结账设置是否开启税号必填 */
  taxId?: string;
  /** @税号简称,根据店铺结账设置是否开启税号必填 */
  taxShortName?: string;
  /** @邮政编码(例如，zip、postcode或Eircode) */
  zip?: string;
};
export type ShippingPlanDto = {
  /** @结账号（整个系统唯一） */
  checkoutToken?: string;
  /** @运费方案id */
  shippingRatePlanId?: string;
};
export type ShopifyAccountVo = {
  /** @客户信息 */
  customer?: ShopifyCustomerVo;
  /** @默认地址 */
  defaultCustomerAddress?: ShopifyAddressVo;
  /** @订单列表 */
  orders?: ShopifyOrderVo[];
};
export type ShopifyAddressVo = {
  /** @地址1(存街道信息) */
  address1?: string;
  /** @地址2(存门牌号等信息) */
  address2?: string;
  /** @城市 */
  city?: string;
  /** @国家的名称 */
  country?: string;
  /** @国家代码 */
  country_code?: string;
  /** @邮箱 */
  email?: string;
  /** @姓 */
  first_name?: string;
  /** @是否默认地址:0-否,1-是 */
  isDefault?: string;
  /** @名 */
  last_name?: string;
  /** @全称 */
  name?: string;
  /** @手机号 */
  phone?: string;
  /** @省份 */
  province?: string;
  /** @省份代码 */
  province_code?: string;
  /** @街道信息由，address1+address2组合 */
  street?: string;
  /** @邮编 */
  zip?: string;
};
export type ShopifyCustomerVo = {
  /** @是否接受营销 */
  accepts_marketing?: boolean;
  /** @默认地址 */
  default_address?: ShopifyAddressVo;
  /** @邮箱 */
  email?: string;
  /** @姓 */
  first_name?: string;
  /** @是否注册 */
  has_account?: boolean;
  /** @客户id */
  id?: string;
  /** @名 */
  last_name?: string;
  /** @全称 */
  name?: string;
  /** @订单数量 */
  orders_count?: number;
  /** @手机号 */
  phone?: string;
  /** @用户标签 */
  tags?: string[];
  /** @是否免税 */
  tax_exempt?: boolean;
  /** @消费总金额 */
  total_spent?: number;
};
export type ShopifyOrderItemVo = {
  /** @折扣信息 */
  discount_allocations?: Record<string, any>;
  /** @最终价格，单价*数量 */
  final_line_price?: number;
  /** @成交价包含折扣金额 */
  final_price?: number;
  /** @发货信息 */
  fulfillment?: Record<string, any>;
  /** @发货服务信息 */
  fulfillment_service?: Record<string, any>;
  /** @是否使用礼品卡 */
  gift_card?: boolean;
  /** @订单子项权重 */
  grams?: number;
  /** @订单子项id */
  id?: string;
  /** @商品图片 */
  image?: string;
  /** @唯一标识 */
  key?: string;
  /** @折扣信息，未知 */
  line_level_discount_allocations?: Record<string, any>;
  /** @折扣总金额 */
  line_level_total_discount?: number;
  /** @折扣消息 */
  message?: string;
  /** @选项信息 */
  optionsWithValues?: Record<string, any>[];
  /** @原线价格 */
  original_line_price?: number;
  /** @原线价格 */
  original_price?: number;
  /** @商品信息 */
  product?: Record<string, any>;
  /** @商品id */
  product_id?: string;
  /** @属性 */
  properties?: Record<string, any>[];
  /** @数量 */
  quantity?: number;
  /** @是否需要发货 */
  requires_shipping?: boolean;
  /** @销售计划 */
  selling_plan_allocation?: Record<string, any>;
  /** @sku */
  sku?: string;
  /** @成功发货的数量 */
  successfully_fulfilled_quantity?: number;
  /** @是否收税 */
  taxable?: boolean;
  /** @标题，由商品标题+sku标题 */
  title?: string;
  /** @单价 */
  unit_price?: number;
  /** @单价重量单位 */
  unit_price_measurement?: Record<string, any>;
  /** @商品信息url */
  url?: string;
  /** @删除购物车url */
  url_to_remove?: Record<string, any>;
  /** @sku信息 */
  variant?: Record<string, any>;
  /** @variantId */
  variant_id?: string;
  /** @供应商信息 */
  vendor?: Record<string, any>;
};
export type ShopifyOrderVo = {
  /** @取消原因 */
  cancel_reason?: string;
  /** @是否取消 */
  cancelled?: boolean;
  /** @取消时间 */
  cancelled_at?: number;
  /** @结账号（整个系统唯一） */
  checkoutToken?: string;
  /** @创建时间 */
  created_at?: number;
  /** @下单客户信息 */
  customer?: ShopifyCustomerVo;
  /** @下单客户信息URL */
  customer_url?: string;
  /** @订单折扣信息 */
  discount_applications?: Record<string, any>;
  /** @下单邮箱 */
  email?: string;
  /** @订单支付状态waiting(待付款)，non_pay(未付款)，paying(PENDING)，paid(已付款)，refunded(已退款)，partially_refunded(部分退款) */
  financial_status?: string;
  /** @物流状态 initialled(空)，waiting(待发货)，partially_shipped(部分发货)，shipped(已发货)，delivered(已妥投) */
  fulfillment_status?: string;
  /** @订单子项 */
  line_items?: ShopifyOrderItemVo[];
  /** @订单子项总金额 */
  line_items_subtotal_price?: number;
  /** @订单前缀名称 */
  name?: string;
  /** @订单备注 */
  note?: string;
  /** @订单编号 */
  order_number?: string;
  /** @手机号 */
  phone?: string;
  /** @商品图片 */
  productImages?: string[];
  /** @收货地址 */
  shipping_address?: ShopifyAddressVo;
  /** @物流方式 */
  shipping_methods?: ShopifyShippingMethod[];
  /** @快递费用 */
  shipping_price?: number;
  /** @订单子项 */
  subtotal_line_items?: Record<string, any>[];
  /** @订单总金额 */
  subtotal_price?: number;
  /** @标签 */
  tags?: Record<string, any>[];
  /** @税费子项 */
  tax_lines?: Record<string, any>[];
  /** @税费金额 */
  tax_price?: number;
  /** @总折扣 */
  total_discounts?: number;
  /** @订单净赚多少钱，扣除退款 */
  total_net_amount?: number;
  /** @订单实际支付总金额 */
  total_price?: number;
  /** @订单申请退款金额 */
  total_refunded_amount?: number;
  /** @交易信息 */
  transactions?: Record<string, any>[];
};
export type ShopifyShippingMethod = {
  /** @处理方式 */
  handle?: string;
  /** @运费原价 */
  original_price?: number;
  /** @运费 */
  price?: number;
  /** @运费方案标题 */
  title?: string;
};
export type TrackingInfoDto = {
  /** @运输公司 */
  carrier?: string;
  /** @支付单号 */
  paymentOrderId?: string;
  /** @物流单号 */
  trackingNumber?: string;
};
export type VariantDto = {
  /** @订单货币类型 */
  currency?: string;
  /** @顾客点击链接到商店的网站 */
  shopUrl?: string;
  /** @来源 */
  source?: string;
  /** @sku信息 */
  variants?: Variants[];
};
export type Variants = {
  /** @商品id */
  productId?: string;
  /** @数量 */
  quantity?: number;
  /** @skuid */
  variantId?: string;
};
export type DiZhiXinXi = {
  /** @街道地址 */
  address1?: string;
  /** @街道地址的可选附加字段 */
  address2?: string;
  /** @结账号（整个系统唯一） */
  checkoutToken?: string;
  /** @所在的城市、城镇或村庄 */
  city?: string;
  /** @公司 */
  company?: string;
  /** @所在国家的名称 */
  country?: string;
  /** @所在国家的两个字母代码(ISO 3166-1格式) */
  countryCode?: string;
  /** @邮箱 */
  email?: string;
  /** @名 */
  firstName?: string;
  /** @主键标识 */
  id?: number;
  /** @姓 */
  lastName?: string;
  /** @纬度 */
  latitude?: number;
  /** @经度 */
  longitude?: number;
  /** @全名 */
  name?: string;
  /** @电话 */
  phone?: string;
  /** @所在的地区(例如，省、州或地区)的名称 */
  province?: string;
  /** @所在区域的两个字母缩写 */
  provinceCode?: string;
  /** @邮政编码(例如，zip、postcode或Eircode) */
  zip?: string;
};
/** @活动价格 */
export type HuoDongJieGe = {
  /** @活动名称 */
  activityName?: string;
  /** @优惠类型 */
  activityTypeEnum?: string;
  /** @优惠价 */
  price?: number;
};
/** @活动价格 */
export type HuoDongJieGe1 = {
  /** @活动名称 */
  activityName?: string;
  /** @优惠类型 */
  activityTypeEnum?: string;
  /** @优惠价 */
  price?: number;
};
export type TongYiFanHuiDuiXiang = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: Record<string, any>;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangCartListVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: CartListVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangCheckOutVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: CheckOutVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangCompleteOrderVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: CompleteOrderVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListCustomerAddressVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: CustomerAddressVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListShopifyOrderVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ShopifyOrderVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangLoginVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: LoginVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangPayPalOrderCreateVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: PayPalOrderCreateVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangPaymentOrderVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: PaymentOrderVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangShopifyAccountVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ShopifyAccountVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangShopifyOrderVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ShopifyOrderVo;
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
export type TongYiFanHuiDuiXiangstring = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: string;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangDingDanXinXi = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: DingDanXinXi;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangDingDanZongJieJieGuo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: DingDanZongJieJieGuo;
  /** @返回信息 */
  msg?: string;
};
export type DingDanXinXi = {
  /** @账单地址 */
  billAddressVO?: BillAddressVo;
  /** @取消原因 */
  cancelReason?: string;
  /** @取消订单时间 */
  cancelledAt?: string;
  /** @结账号（整个系统唯一） */
  checkoutToken?: string;
  /** @货币类型 */
  currency?: string;
  /** @客户ID */
  customerId?: string;
  /** @订单支付状态waiting(待支付)，paying(支付中)，paid(已支付)，cancelled(已取消)，failed(失败)，refunding(退款中)，refund_failed(退款失败)，refunded(已退款)，partially_refunded(部分退款) */
  financialStatus?: string;
  /** @物流状态 initialled(空)，waiting(待发货)，partially_shipped(部分发货)，shipped(已发货)，delivered(已妥投) */
  fulfillmentStatus?: string;
  /** @订单商品 */
  orderItems?: DingDanTiaoMu[];
  /** @订单在店铺订单数中的位置从1001开始。订单号是连续的，从1001开始（商铺唯一），EBG-1001 */
  orderNumber?: string;
  /** @订单总价结果 */
  orderTotalPriceVO?: DingDanZongJieJieGuo1;
  /** @支付时间 */
  paidAt?: string;
  /** @支付方式 */
  payMethod?: string;
  /** @商品总件数 */
  productNumCount?: number;
  /** @商品总重量（单位：g） */
  productTotalWeight?: number;
  /** @优惠码 */
  promotionCode?: string;
  /** @订单地址 */
  shippingAddress?: DiZhiXinXi;
  /** @来源 */
  source?: string;
  /** @订单状态 opened(未完成)，placed(进行中)，finished(已完成)，cancelled(已取消) */
  status?: string;
  /** @下单步骤标识：to_info=（标准页，快速模式）需要定位到用户地址信息页， （标准页，快速模式）to_shipping=需要定位到物流方式选择页， （标准页，快速模式）to_payment=需要定位到payment页面，paid=（标准页，快速模式）需要定位到支付成功页，在单页 和 简易模式 就是在原页面不用判断 */
  step?: string;
  /** @店铺id */
  storeId?: string;
};
/** @订单总价结果 */
export type DingDanZongJieJieGuo = {
  /** @活动价格集合 */
  activityPrices?: HuoDongJieGe[];
  /** @优惠码 */
  promotionCode?: string;
  /** @优惠码错误文案，有则在优惠码输入框下展示 */
  promotionCodeErrMsg?: string;
  /** @运费方案快照 */
  shippingRatePlanSnapshot?: YunFeiFangAnKuaiZhao;
  /** @商品总价 */
  subTotal?: number;
  /** @活动后商品总价 */
  subTotalIncludeActivity?: number;
  /** @商品总价加上邮费减去折扣、活动价格 */
  total?: number;
  /** @邮费 */
  totalShipping?: number;
  /** @税费 */
  totalTax?: number;
};
/** @订单总价结果 */
export type DingDanZongJieJieGuo1 = {
  /** @活动价格集合 */
  activityPrices?: HuoDongJieGe1[];
  /** @优惠码 */
  promotionCode?: string;
  /** @邮费方案id */
  shippingTempId?: string;
  /** @商品总价 */
  subTotal?: number;
  /** @商品总价加上邮费减去折扣、活动价格 */
  total?: number;
  /** @邮费 */
  totalShipping?: number;
  /** @税费 */
  totalTax?: number;
};
export type DingDanTiaoMu = {
  /** @分类 */
  categoryIds?: string[];
  /** @订单ID */
  checkoutToken?: string;
  /** @商品原价 */
  compareAtPrice?: number;
  /** @是否礼品卡。如果是真的，那么该项目是不征税或考虑航运费用 */
  giftCard?: string;
  /** @物品的重量，以克为单位 */
  grams?: string;
  /** @订单条目ID */
  id?: string;
  /** @商品图片 */
  image?: string;
  /** @商品属性，Json格式 */
  options?: string;
  /** @折扣价 */
  price?: number;
  /** @产品ID */
  productId?: string;
  /** @购买数量 */
  quantity?: number;
  /** @是否需要运输 0:否 1:是 */
  requiresShipping?: number;
  /** @商品sku编码 */
  sku?: string;
  /** @该商品是否需要纳税 */
  taxable?: string;
  /** @商品名称 */
  title?: string;
  /** @商品sku唯一标识 */
  variantId?: string;
  /** @物品的重量 */
  variantWeight?: number;
  /** @物品供应商名称 */
  vendor?: string;
  /** @版本号 */
  version?: number;
};
/** @运费方案快照 */
export type YunFeiFangAnKuaiZhao = {
  matchNote?: string;
  ratePlanId?: string;
  ratePlanName?: string;
  ratePlanNote?: string;
  ratesCost?: number;
};
