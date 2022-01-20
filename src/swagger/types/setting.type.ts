/* eslint-disable */

/**
 * @swagger 2.0
 * @description <div style='font-size:14px;color:red;'>Enchant Branding Global RESTful APIs</div>
 * @version 2.0
 * @title Enchant Branding Global
 * @basePath /admin-api/ebg-setting-web
 * @see http://43.129.65.194:3000/api/plugin/exportSwagger?type=OpenAPIV2&pid=17&status=all&isWiki=false
 * @author sfe
 * @throws 🈲 > 禁止手动修改
 */

/** @响应infer数据取值 */
export type Response<T> = T extends { data?: infer V } ? V : T;
/** @获取城市列表信息 */
export type CountryCodeStateCodePath = {
  /** @countryCode */
  countryCode: string;
  /** @stateCode */
  stateCode: string;
};
/** @获取州、省列表信息 */
export type CountryCodePath = {
  /** @countryCode */
  countryCode: string;
};
/** @获取国家、地区列表信息 */
export type WorldCountriesQuery = {};
/** @getStoreIdByDomain */
export type StoreGetStoreIdByDomainQuery = {};
/** @8. 店铺搜索列表（下拉框搜索使用） */
export type StoreQueryComboQuery = {};
/** @查询指定分组信息 */
export type ShippingGroupIdPath = {
  /** @shippingGroupId */
  shippingGroupId: string;
};
/** @区域@查询指定邮费方案 */
export type RetePlanIdShippingRegionIdPath = {
  /** @retePlanId */
  retePlanId: string;
  /** @shippingRegionId */
  shippingRegionId: string;
};
/** @区域@更新邮费方案 */
export type RatePlanIdShippingRegionIdPath = {
  /** @ratePlanId */
  ratePlanId: string;
  /** @shippingRegionId */
  shippingRegionId: string;
};
/** @修改区域接口 */
export type ShippingRegionIdPath = {
  /** @shippingRegionId */
  shippingRegionId: string;
};
/** @getAdminShippingRatePlan */
export type ShippingGroupRegionRatePlanClientShippingRatePlanIdQuery = {
  /** @shippingRatePlanId */
  shippingRatePlanId: string;
};
/** @getAdminShippingRatePlan */
export type ShippingRatePlanIdPath = {
  /** @shippingRatePlanId */
  shippingRatePlanId: string;
};
/** @区域分组优先级变更 */
export type TargetGroupIdPath = {
  /** @targetGroupId */
  targetGroupId: string;
};
/** @查询是否存在邮费方案 */
export type FlowSettingPath = {
  /** @flowSetting */
  flowSetting: string;
};
/** @详情 */
export type MenuIdPath = {
  /** @menuId */
  menuId: string;
};
/** @列表 */
export type ShowPositionPath = {
  /** @showPosition */
  showPosition: string;
};
/** @getStoreBaseInfo */
export type StoreIdPath = {
  /** @storeId */
  storeId: string;
};
/** @batchQueryStoreList */
export type InnerApiStoreBatchQueryStoreListQuery = {};
/** @根据域名获取商家id */
export type GetStoreIdByDomainQuery = {};
/** @回显自定义页面 */
export type CustomPageIdPath = {
  /** @customPageId */
  customPageId: string;
};
/** @getCountryAndStateWithIso2Code */
export type CountryCodeStateIso2Path = {
  /** @countryCode */
  countryCode: string;
  /** @stateIso2 */
  stateIso2: string;
};
/** @4. 获取一个标签 */
export type TagIdTypePath = {
  /** @tagId */
  tagId: string;
  /** @type */
  type: string;
};
/** @3. 删除标签, 批量(tagIds: id1,id2,id3)  */
export type TagIdsTypePath = {
  /** @tagIds */
  tagIds: string;
  /** @type */
  type: string;
};
/** @5. 获取指定类型（分组）标签 */
export type TypePath = {
  /** @type */
  type: string;
};
/** @batchQueryStoreList */
export type BatchQueryStoreListQuery = {};
/** @详情 */
export type PixelsIdPath = {
  /** @pixelsId */
  pixelsId: string;
};
export type AdPixelsDto = {
  /** @像素内容 */
  pixelsCode?: string;
  /** @像素副选 */
  pixelsCodeTwo?: string;
  /** @唯一标识 */
  pixelsId?: string;
  /** @标题 */
  title?: string;
  /** @像素类型 fb=facebook pixel, fb_net_validate=facebook网域验证, ga=google analytics pixel, tt=tiktok pixel, div=自定义 */
  type?: string;
};
export type AdPixelsListVo = {
  /** @广告像素列表div数据 */
  diyList?: AdPixelsDto[];
  /** @广告像素列表FB数据 */
  fbList?: AdPixelsDto[];
  /** @广告像素列表fbNetValidate数据 */
  fbNetValidateList?: AdPixelsDto[];
  galist?: AdPixelsDto[];
  /** @广告像素列表newGa数据 */
  newGaList?: AdPixelsDto[];
  /** @广告像素列表tt数据 */
  ttList?: AdPixelsDto[];
};
export type AdPixelsVo = {
  /** @像素内容 */
  pixelsCode?: string;
  /** @像素副选 */
  pixelsCodeTwo?: string;
  /** @唯一标识 */
  pixelsId?: string;
  /** @标题 */
  title?: string;
  /** @像素类型 fb=facebook pixel, fb_net_validate=facebook网域验证, ga=google analytics pixel, tt=tiktok pixel, div=自定义 */
  type?: string;
};
export type AfterSaleSetting = {
  /** @售后服务展示页面 product_detail：商品详情页 cart：购物车页 checkout：结算页 */
  displayPages?: string[];
  /** @售后服务说明 */
  notice?: string;
};
export type ButtonSetting = {
  /** @自定义显示按钮 paypal_express_checkout：展示PayPal快捷支付按钮 buy_now：展示立即结账按钮 */
  displayButtons?: string[];
};
export type CheckoutSettingDto = {
  /** @售后设置 */
  afterSaleSetting?: AfterSaleSetting;
  /** @结账按钮设置 */
  buttonSetting?: ButtonSetting;
  /** @结账流程 standard：标准结账流程,single_page：单页结账流程,express：快速结账流程,simple：简单结账流程 */
  flowSetting?: string;
  /** @客户登录要求 all:游客及登录用户均可结账,login：仅登录用户可结账 */
  loginSetting?: string;
  /** @支付安全设置 */
  paymentSafeSetting?: PaymentSafeSetting;
  /** @税号设置 */
  taxNumSetting?: TaxNumInfo[];
  /** @订单超时时间 单位：分钟） */
  timeoutSetting?: TimeoutSetting;
};
export type City2Vo = {
  /** @国家、地区编码 */
  countryCode?: string;
  /** @城市名称 */
  name?: string;
  /** @省、州编码 */
  stateCode?: string;
};
export type ClientShippingRatePlanDto = {
  /** @订单条目列表 */
  orderItemList?: OrderItem[];
  /** @订单总价 */
  orderTotalPrice?: number;
  /** @商品总件数 */
  productNumCount?: number;
  /** @商品总重量（单位：g） */
  productTotalWeight?: number;
  /** @物流地址 */
  shippingAddress?: ShippingAddress;
};
export type ClientShippingRatePlanVo = {
  /** @匹配邮费方案状态(1:完全匹配, 2:部分匹配, 3:没有匹配) */
  matchShippingStatus?: string;
  /** @不满足物流方案的产品 */
  nonShippingRatePlanProductList?: ProductInfo[];
  /** @物流方案 */
  shippingRatePlanList?: ShippingRatePlanInfo[];
};
export type ClientValidateShippingRatePlanDto = {
  /** @订单总价 */
  orderTotalPrice?: number;
  /** @商品总件数 */
  productNumCount?: number;
  /** @商品总重量（单位：g） */
  productTotalWeight?: number;
};
export type Company4StoreVo = {
  /** @当前页 */
  current?: number;
  /** @每页多少条 */
  size?: number;
  /** @店铺列表信息 */
  storeInfoList?: StoreInfo4Company[];
  /** @今日客单价 */
  todayAvgCustomerPrice?: number;
  /** @今日净销售额 */
  todayNetSales?: number;
  /** @今日订单数 */
  todayOrderCount?: number;
  /** @总页数 */
  total?: number;
};
export type CompanyDto = {
  id?: string;
  name?: string;
  storeCount?: number;
};
export type Country = {
  /** @中文名称 */
  cnName?: string;
  /** @ISO2编码 */
  iso2?: string;
};
export type Country2Vo = {
  /** @国家、地区图标 */
  emoji?: string;
  /** @国家、地区名称编码 */
  iso2?: string;
  /** @国家、地区名称 */
  name?: string;
  /** @国家、地区电话前缀 */
  phonecode?: string;
  /** @国家、地区所有区域（7 大洲） */
  region?: string;
};
export type CountryStateVo = {
  countryCode?: string;
  iso2?: string;
  name?: string;
};
export type CreateCompanyDto = {
  companyName?: string;
  email?: string;
  id?: string;
  phone?: string;
};
export type CustomPageCreateDto = {
  /** @内容 */
  content?: string;
  /** @标题 */
  title?: string;
};
export type CustomPageDeleteDto = {
  /** @部分删除的自定义页面ID */
  customPageIds?: string[];
  /** @是否全部删除, 如果是 true , customPageIds 可以不传，如果是只删除部分，传 false, customPageIds 必传 */
  deleteAll?: boolean;
};
export type CustomPageEchoVo = {
  /** @内容 */
  content?: string;
  /** @自定义页面ID */
  id?: string;
  /** @标题 */
  title?: string;
};
export type CustomPageListQuery = {
  /** @排序方式，是否升序排序 */
  isAsc?: boolean;
  /** @关键字 */
  keyword?: string;
  /** @分页页码 */
  pageNum?: number;
  /** @分页大小 */
  pageSize?: number;
};
export type CustomPageListVo = {
  id?: string;
  title?: string;
  updatedAt?: string;
};
export type CustomPageUpdateDto = {
  /** @内容 */
  content?: string;
  /** @标题 */
  title?: string;
};
export type DeliveryRegion = {
  /** @国家名称（CN） */
  cnName?: string;
  /** @国家编码 iso2 */
  countryIso2?: string;
};
export type DeliveryRegion1 = {
  /** @国家名称（CN） */
  cnName?: string;
  /** @国家编码 iso2 */
  countryIso2?: string;
};
export type DropDownBox = {
  code?: string;
  name?: string;
};
export type GroupInfo = {
  /** @分组提示内容 */
  contentLabel?: string;
  /** @分组名称 */
  groupName?: string;
  /** @分组id */
  shippingGroupId?: string;
  /** @分组内提示信息列表 */
  tipsList?: Tips[];
};
export type IPageCustomPageListVo = {
  current?: number;
  pages?: number;
  records?: CustomPageListVo[];
  size?: number;
  total?: number;
};
export type MabangConfigVo = {
  authToken?: string;
  companyId?: string;
  developerId?: string;
  storeId?: string;
};
export type MenuBarSettingDetailVo = {
  /** @子菜单 */
  children?: MenuBarSettingSaveDto[];
  /** @层级 */
  level?: number;
  /** @ID */
  menuId?: string;
  /** @展示位置 'head'=是 'end'=否 */
  showPosition?: string;
  /** @标题 */
  title?: string;
};
export type MenuBarSettingSaveDto = {
  /** @子菜单 */
  children?: MenuBarSettingSaveDto[];
  /** @页面的url 等内容 */
  content?: string;
  /** @选择完的选项图片，content_type为activity时为活动paner图片，为product时为商品首图 */
  contentImg?: string;
  /** @内容类型：index=首页， activity=活动页， product=商品， div=自定义页面 */
  contentType?: string;
  /** @是否店铺内url 1=是 0=否 */
  isInnerUrl?: string;
  /** @是否在使用 1=在使用 0=不在使用 */
  isUse?: string;
  /** @层级 */
  level?: number;
  /** @ID */
  menuId?: string;
  /** @父类id */
  parentId?: string;
  /** @展示位置 'head'=是 'end'=否 */
  showPosition?: string;
  /** @展示类型：div_category=自定义分类 div_content=自定义内容 independent_position独立版位 */
  showType?: string;
  /** @排序 */
  sort?: number;
  /** @标题 */
  title?: string;
};
export type MenuBarSettingVo = {
  /** @子菜单 */
  children?: MenuBarSettingSaveDto[];
  /** @是否在使用 1=在使用 0=不在使用 */
  isUse?: string;
  /** @层级 */
  level?: number;
  /** @ID */
  menuId?: string;
  /** @展示位置 'head'=是 'end'=否 */
  showPosition?: string;
  /** @标题 */
  title?: string;
};
export type OrderItem = {
  /** @商品id */
  productId?: string;
};
export type OrderItem1 = {
  asc?: boolean;
  column?: string;
};
export type PackagePlanDto = {
  /** @过期日期，默认到天, yyyy/MM/dd  */
  packagePlanExpired?: string;
  /** @费用 */
  packagePlanFee?: number;
  /** @ID */
  packagePlanId?: string;
  /** @套餐名称 */
  packagePlanName?: string;
  /** @资费状态 */
  packagePlanStatus?: string;
  /** @资费类型（day：天，month：月，year：年） */
  packagePlanType?: string;
};
export type PackagePlanListVo = {
  /** @默认资费套餐 */
  defaultPackagePlan?: PackagePlanDto;
  /** @资费套餐列表 */
  packagePlanList?: PackagePlanDto[];
};
export type PageStoreVo = {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem1[];
  pages?: number;
  records?: StoreVo[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};
export type PaymentSafeSetting = {
  /** @信用卡图标展示 display：展示,hide：不展示 */
  displayCreditCartIcon?: string;
  /** @显示图标 paypal visa master_card maestro visa_electron jcb american_express diners_club discover */
  displayIcons?: string[];
  /** @支付安全展示页面 */
  displayPages?: string[];
  /** @支付安全说明 */
  notice?: string;
};
export type PriorityGroupInfo = {
  /** @分组名称 */
  groupName?: string;
  /** @分组优先级（1：选中, 0 , null : 未选择） */
  isPriority?: string;
  /** @分组id */
  shippingGroupId?: string;
};
export type Product = {
  /** @产品id */
  id?: string;
  /** @商品图片 */
  imgUrl?: string;
  /** @库存 */
  inventory?: number;
  /** @月销量 */
  nearest?: number;
  /** @商品最低价格 */
  price?: number;
  /** @商品是否上架 */
  published?: string;
  /** @产品状态提示 */
  tips?: number;
  /** @商品标题 */
  title?: string;
};
export type ProductInfo = {
  /** @商品id */
  productId?: string;
};
export type Product1 = {
  /** @产品id */
  id?: string;
};
export type RatesCostCondition = {
  /** @条件最小值 */
  maximumCondition?: number;
  /** @条件最小值 */
  minimumCondition?: number;
  /** @条件最小值 */
  ratesCost?: number;
};
export type RatesCostCondition1 = {
  /** @条件最大值, -1 无穷大 */
  maximumCondition?: number;
  /** @条件最小值 */
  minimumCondition?: number;
  /** @邮费费用 */
  ratesCost?: number;
};
export type ShippingAddress = {
  /** @国家、地区编码（iso2） */
  countryCode?: string;
};
export type ShippingGroupDto = {
  /** @分组名称 */
  groupName?: string;
  mode?: string;
  /** @关联产品列表 */
  productList?: Product1[];
  /** @区域列表 */
  regionList?: ShippingRegionDto[];
  scene?: string;
  /** @分组id */
  shippingGroupId?: string;
};
export type ShippingGroupPageInfoVo = {
  /** @通用分组信息 */
  commonGroup?: GroupInfo;
  /** @自定义分组信息 */
  customGroupList?: GroupInfo[];
  /** @分组优先级列表 */
  priorityGroupList?: PriorityGroupInfo[];
  /** @场景，简易：simple，通用场景：normal */
  scene?: string;
};
export type ShippingGroupVo = {
  /** @分组名称 */
  groupName?: string;
  /** @分组下关联的商品 */
  productList?: Product[];
  /** @分组下关联的区域 */
  regionList?: ShippingRegionVo[];
  /** @场景 */
  scene?: string;
  /** @分组ID */
  shippingGroupId?: string;
};
export type ShippingRatePlanDto = {
  /** @默认邮费费用条件标识{'order_price'|'package_weight'|'number_product'}, hasDefaultRates=1 ：必填；hasDefaultRates=0，空 */
  conditionFlag?: string;
  /** @默认邮费费用条件, hasDefaultRates=1 ：必填；hasDefaultRates=0，空 */
  conditionList?: RatesCostCondition1[];
  /** @是否有默认邮费标记（是：1, 否：0） */
  hasDefaultRates?: string;
  /** @方案名称 */
  planName?: string;
  /** @方案说明 */
  planNote?: string;
  /** @默认邮费费用, hasDefaultRates=1 ：必填；hasDefaultRates=0，空 */
  ratesCost?: number;
  shippingGroupId?: string;
  shippingRatePlanId?: string;
  shippingRegionId?: string;
};
export type ShippingRatePlanInfo = {
  matchNote?: string;
  /** @方案id */
  ratePlanId?: string;
  /** @方案名称 */
  ratePlanName?: string;
  /** @方案说明 */
  ratePlanNote?: string;
  /** @邮费价格 */
  ratesCost?: number;
};
export type ShippingRatePlanInfoVo = {
  matchNote?: string;
  ratePlanId?: string;
  ratePlanName?: string;
  ratePlanNote?: string;
  ratesCost?: number;
};
export type ShippingRatePlanVo = {
  /** @默认邮费费用标识 */
  conditionFlag?: string;
  /** @默认邮费费用条件 */
  conditionList?: RatesCostCondition[];
  /** @是否有默认邮费标记（是：1, 否：0） */
  hasDefaultRates?: string;
  /** @方案名称 */
  planName?: string;
  /** @方案说明 */
  planNote?: string;
  /** @默认邮费费用 */
  ratesCost?: number;
  /** @方案 id */
  shippingRatePlanId?: string;
  /** @区域id */
  shippingRegionId?: string;
};
export type ShippingRegionDto = {
  /** @配送区域 */
  deliveryRegionList?: DeliveryRegion1[];
  /** @是否全球（是：1, 不是：0） */
  isGlobal?: string;
  /** @邮费方案 */
  ratePlanList?: ShippingRatePlanDto[];
  /** @区域名称 */
  regionName?: string;
  /** @区域id */
  shippingRegionId?: string;
  /** @未配送区域 */
  undeliveryRegionList?: DeliveryRegion1[];
};
export type ShippingRegionVo = {
  /** @配送区域 */
  deliveryRegionList?: DeliveryRegion[];
  /** @是否全球（是：1, 不是：0） */
  isGlobal?: string;
  /** @方案列表 */
  ratePlanList?: ShippingRatePlanVo[];
  /** @区域名称 */
  regionName?: string;
  /** @分组ID */
  shippingGroupId?: string;
  /** @区域ID */
  shippingRegionId?: string;
  /** @未配送区域 */
  undeliveryRegionList?: DeliveryRegion[];
};
export type State2Vo = {
  /** @国家、地区编码 */
  countryCode?: string;
  /** @省、州 编码 */
  iso2?: string;
  /** @省、州名称 */
  name?: string;
};
export type StoreApiVo = {
  domain?: string;
  name?: string;
  storeId?: string;
};
export type StoreBaseInfoApiDto = {
  contactEmail?: string;
  currency?: string;
  customerServiceEmail?: string;
  name?: string;
  orderSnPrefix?: string;
  storeId?: string;
  storeStatus?: string;
  timezone?: string;
};
export type StoreBaseInfoDto = {
  /** @所属行业 */
  belongIndustry?: string;
  /** @联系人邮箱 */
  contactEmail?: string;
  /** @货币 */
  currency?: string;
  /** @客服邮箱 */
  customerServiceEmail?: string;
  /** @店铺 logo 图标 */
  logoSrc?: string;
  /** @店铺名称 */
  name?: string;
  /** @订单前缀 */
  orderSnPrefix?: string;
  /** @seo 描述 */
  seoDescribe?: string;
  /** @seo 关键字 */
  seoKeyword?: string;
  /** @seo 友好路径 */
  seoSlug?: string;
  /** @seo 页面标题 */
  seoTitle?: string;
  /** @店铺状态 */
  storeStatus?: string;
  /** @标签页图标 */
  tabIconSrc?: string;
  /** @时区 */
  timezone?: string;
};
export type StoreBaseInfoVo = {
  /** @所属行业 */
  belongIndustry?: string;
  /** @联系人邮箱 */
  contactEmail?: string;
  /** @货币 */
  currency?: string;
  /** @客服邮箱 */
  customerServiceEmail?: string;
  /** @店铺 logo 图标 */
  logoSrc?: string;
  /** @店铺名称 */
  name?: string;
  /** @订单前缀 */
  orderSnPrefix?: string;
  /** @seo 描述 */
  seoDescribe?: string;
  /** @seo 关键字，多个关键字逗号相隔 */
  seoKeyword?: string;
  /** @seo 友好路径 */
  seoSlug?: string;
  /** @seo 页面标题 */
  seoTitle?: string;
  /** @店铺ID */
  storeId?: string;
  /** @店铺状态（营业中，已打烊） */
  storeStatus?: string;
  /** @标签页图标 */
  tabIconSrc?: string;
  /** @时区 */
  timezone?: string;
};
export type StoreComboVo = {
  /** @域名 */
  domain?: string;
  /** @店铺名称 */
  name?: string;
  /** @店铺ID */
  storeId?: string;
};
export type StoreConstantVo = {
  belongIndustryList?: DropDownBox[];
  currencyList?: DropDownBox[];
  currentDomain?: string;
  packagePlanStatusList?: DropDownBox[];
  storeStatusList?: DropDownBox[];
  timezoneList?: DropDownBox[];
};
export type StoreDto = {
  /** @货币 */
  currency?: string;
  /** @系统域名 */
  domain?: string;
  /** @店铺名称 */
  name?: string;
  /** @资费套餐id */
  packagePlanId?: string;
  /** @店长 */
  storeOwnerId?: string;
  /** @默认营业中，店铺状态（营业中：opened，已打烊：closed） */
  storeStatus?: string;
  /** @多个标签逗号分隔, id */
  tagIds?: string;
  /** @多个标签逗号分隔, name */
  tagNames?: string;
  /** @时区 */
  timezone?: string;
};
export type StoreIdDto = {
  companyId?: string;
  storeId?: string;
};
export type StoreIdVo = {
  /** @店铺id */
  storeId?: string;
};
export type StoreInfo4Company = {
  /** @系统域名 */
  domain?: string;
  /** @店铺名称 */
  name?: string;
  /** @套餐过期时间 */
  packagePlanExpired?: number;
  /** @套餐名称 */
  packagePlanName?: string;
  /** @套餐状态 */
  packagePlanStatus?: string;
  /** @店铺ID */
  storeId?: string;
  /** @店铺状态（营业中：opened，已打烊：closed） */
  storeStatus?: string;
  /** @今日平均笔单价 */
  todayAvgOrderPrice?: number;
  /** @今日订单金额 */
  todayOrderAmount?: number;
  /** @今日订单数 */
  todayOrderCount?: number;
};
export type StoreQuery = {
  /** @资费套餐状态 */
  packagePlanStatusList?: string[];
  /** @分页页码 */
  pageNum?: number;
  /** @分页大小 */
  pageSize?: number;
  /** @店铺名称、域名 */
  storeQueryKey?: string;
  /** @店铺状态（营业中：opened，已打烊：closed） */
  storeStatus?: string;
  /** @标签，多个数据使用逗号分隔, id */
  tagIds?: string;
  /** @标签，多个数据使用逗号分隔, name */
  tagNames?: string;
};
export type StoreTableDynamicHeaderDto = {
  /** @表头key,对应订单列表属性key */
  attributeKey?: string;
  /** @是否禁用:0-否，1-是 */
  disabled?: number;
  /** @表头名称 */
  name?: string;
  /** @是否选中:0-否，1-是 */
  selected?: number;
  /** @排序 */
  sort?: number;
  /** @宽度 */
  width?: number;
};
export type StoreTableDynamicHeaderVo = {
  /** @表头key,对应订单列表属性key */
  attributeKey?: string;
  /** @是否禁用:0-否，1-是 */
  disabled?: number;
  /** @表头名称 */
  name?: string;
  /** @是否选中:0-否，1-是 */
  selected?: number;
  /** @排序 */
  sort?: number;
  /** @宽度 */
  width?: number;
};
export type StoreVo = {
  /** @货币 */
  currency?: string;
  /** @自定义域名 */
  customeDomain?: string;
  /** @自定义域名个数 */
  customeDomainCount?: number;
  /** @系统域名 */
  domain?: string;
  /** @店铺名称 */
  name?: string;
  /** @套餐过期时间 */
  packagePlanExpired?: string;
  /** @费用 */
  packagePlanFee?: number;
  /** @套餐名称 */
  packagePlanName?: string;
  /** @套餐状态 */
  packagePlanStatus?: string;
  /** @资费类型（day：天，month：月，year：年） */
  packagePlanType?: string;
  /** @店铺ID */
  storeId?: string;
  /** @店长邮箱 */
  storeOwnerEmial?: string;
  /** @店长姓名 */
  storeOwnerName?: string;
  /** @店铺状态（营业中：opened，已打烊：closed） */
  storeStatus?: string;
  /** @多个标签逗号分隔, id */
  tagIds?: string;
  /** @多个标签逗号分隔, name */
  tagNames?: string;
  /** @时区 */
  timezone?: string;
};
export type TagDto = {
  /** @标签id */
  tagId?: string;
  /** @标签名称 */
  tagName?: string;
};
export type TagVo = {
  /** @标签id */
  tagId?: string;
  /** @标签名称 */
  tagName?: string;
};
export type TaxNumInfo = {
  /** @适用国家或地区 */
  countries?: Country[];
  /** @是否启用 */
  enable?: boolean;
  /** @简称 */
  shortName?: string;
};
export type TimeoutSetting = {
  /** @时长 */
  duration?: number;
  /** @是否自定义 */
  isCustom?: boolean;
};
export type Tips = {
  /** @颜色标识（1:通过，2：提示，3：警告） */
  status?: string;
  /** @内容提示 */
  statusLabel?: string;
};
export type TitleCheckDto = {
  /** @自定义页面ID */
  id?: string;
  /** @商品标题 */
  title?: string;
};
export type TongYiFanHuiDuiXiang = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: Record<string, any>;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangAdPixelsListVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: AdPixelsListVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangAdPixelsVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: AdPixelsVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangCheckoutSettingDto = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: CheckoutSettingDto;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangClientShippingRatePlanVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ClientShippingRatePlanVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangCompany4StoreVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: Company4StoreVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangCustomPageEchoVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: CustomPageEchoVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangIPageCustomPageListVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: IPageCustomPageListVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListAdPixelsDto = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: AdPixelsDto[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListCity2Vo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: City2Vo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListCountry2Vo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: Country2Vo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListMenuBarSettingVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: MenuBarSettingVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListState2Vo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: State2Vo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListStoreComboVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: StoreComboVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListStoreTableDynamicHeaderVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: StoreTableDynamicHeaderVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListStoreVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: StoreVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListTagVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: TagVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangMenuBarSettingDetailVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: MenuBarSettingDetailVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangPackagePlanListVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: PackagePlanListVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangPageStoreVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: PageStoreVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangShippingGroupPageInfoVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ShippingGroupPageInfoVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangShippingGroupVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ShippingGroupVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangShippingRatePlanInfo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ShippingRatePlanInfo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangShippingRatePlanVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ShippingRatePlanVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangStoreBaseInfoVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: StoreBaseInfoVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangStoreConstantVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: StoreConstantVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangStoreIdDto = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: StoreIdDto;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangStoreIdVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: StoreIdVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangStoreVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: StoreVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangTagDto = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: TagDto;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangTagVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: TagVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangboolean = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: boolean;
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
