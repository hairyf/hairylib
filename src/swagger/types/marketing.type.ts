/* eslint-disable */

/**
 * @swagger 2.0
 * @description <div style='font-size:14px;color:red;'>Enchant Branding Global RESTful APIs</div>
 * @version 2.0
 * @title Enchant Branding Global
 * @basePath /admin-api/ebg-marketing-web
 * @see http://43.129.65.194:3000/api/plugin/exportSwagger?type=OpenAPIV2&pid=17&status=all&isWiki=false
 * @author sfe
 * @throws 🈲 > 禁止手动修改
 */

/** @响应infer数据取值 */
export type Response<T> = T extends { data?: infer V } ? V : T;
/** @根据满减活动id获取满减活动详情 */
export type IdPath = {
  /** @id */
  id: string;
};
/** @获取是否允许全场商品 */
export type ReductionActivityScopeFullQuery = {};
/** @满减活动tab统计数据 */
export type ReductionActivityListTabQuery = {};
/** @满减活动分页列表 */
export type ReductionActivityListQuery = {};
/** @检查活动名称是否存在(1存在，0不存在) */
export type ReductionActivityCheckQuery = {};
/** @关联的分类树 */
export type ReductionActivityCategoryTreesQuery = {};
/** @获取商品关联的活动 */
export type ProductIdPath = {
  /** @productId */
  productId: string;
};
/** @批量删除 */
export type ReductionActivityQuery = {};
/** @优惠码tab统计数据 */
export type PromotionCodeListTabQuery = {};
/** @优惠码列表 */
export type PromotionCodeListQuery = {};
/** @优惠码更新详情数据接口 */
export type PromotionIdPath = {
  /** @promotionId */
  promotionId: string;
};
/** @检查优惠码是否重复 */
export type PromotionCodeStoreIdTitlePath = {
  /** @promotionCode */
  promotionCode: string;
  /** @storeId */
  storeId: string;
  /** @title */
  title: string;
};
/** @获取自动生成优惠码 */
export type StoreIdPath = {
  /** @storeId */
  storeId: string;
};
export type ActivityListTabVo = {
  /** @全部 */
  all?: number;
  /** @已结束 */
  end?: number;
  /** @未开始 */
  notStart?: number;
  /** @有效的 */
  valid?: number;
};
export type ActivityRule = {
  /** @满额减元/满件减元 */
  amount?: number;
  /** @满额打折/满件打折 */
  discount?: number;
  /** @满额阀值 */
  thresholdAmount?: number;
  /** @满件阀值 */
  thresholdPiece?: number;
};
export type CharSequence = {};
export type Comparableobject = {};
export type OrderItem = {
  asc?: boolean;
  column?: string;
};
export type PagePromotionCodeSettingsListVo = {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: PromotionCodeSettingsListVo[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};
export type PageManJianHuoDongVo = {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: ManJianHuoDongVo[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};
export type PromotionCodeDetailVo = {
  /** @应用的分类id */
  applyCategoryIds?: string[];
  /** @应用人群类型：no_register=未注册 registered=已注册 all_persion=所有人 */
  applyPersionType?: string;
  /** @应用的商品id */
  applyProductIds?: string[];
  /** @应用商品类型：all=全部商品 partially_product=指定商品 partially_category=指定分类 */
  applyProductType?: string;
  /** @主题图 */
  banner?: string;
  /** @优惠门槛(条件)：无条件=no_condition,消费满指定金额=geq_money，消费满指定金额=geq_quantity */
  conditionType?: string;
  /** @优惠门槛具体条件值 */
  conditionValue?: string;
  /** @倒计时样式设置 */
  countdownStyleSettings?: Record<string, any>;
  /** @倒计时文案 */
  countdownTitle?: string;
  /** @优惠码状态：enable=启用， disabled=禁用， deleted=删除 */
  dataStatus?: string;
  /** @结束时间 */
  endTime?: string;
  /** @是否可以叠加使用：1=可以， 0=不可以 */
  isComboUse?: string;
  /** @是否无时间限制:1=无结束，0=有结束 */
  isNotEnd?: string;
  /** @是否限制每人的可使用总数 */
  isPersonUsableLimit?: string;
  /** @是否在商品详情业展示：1=是， 0-否 */
  isProductPageShow?: string;
  /** @是否限制优惠码发放总数 */
  isTotalQuantityLimit?: string;
  /** @选中商品排序方式：  price_desc=售价由高到低， price_asc=售价由低到高  sales_desc=销量由高到低  pv_desc=浏览由高到低 pv_asc=加购由高到低 cteate_desc=创建时间由新到旧 */
  productSortType?: string;
  /** @优惠码，店铺唯一 */
  promotionCode?: string;
  /** @优惠码id */
  promotionId?: string;
  /** @优惠码状态 */
  promotionStatus?: string;
  /** @优惠类型：金额=money，百分比=percent */
  promotionType?: string;
  /** @优惠数额 */
  promotionValue?: string;
  /** @每人的可使用总数 */
  quantityOfPersion?: number;
  /** @开始时间 */
  startTime?: string;
  /** @店铺id */
  storeId?: string;
  /** @倒计时时间展示类型：real_time=真实时间，virtual_time=虚拟时间 */
  timeSetType?: string;
  /** @虚拟时间配置 */
  timeSetValue?: Record<string, any>;
  /** @标题 */
  title?: string;
  /** @优惠码发放总数 */
  totalQuantity?: number;
};
export type PromotionCodeReviewVo = {
  /** @主题图 */
  banner?: string;
  /** @优惠门槛(条件)：无条件=no_condition,消费满指定金额=geq_money，消费满指定金额=geq_quantity */
  conditionType?: string;
  /** @优惠门槛具体条件值 */
  conditionValue?: string;
  /** @倒计时样式设置 */
  countdownStyleSettings?: Record<string, any>;
  /** @倒计时文案 */
  countdownTitle?: string;
  /** @创建时间 */
  createdAt?: string;
  /** @结束时间 */
  endTime?: string;
  /** @默认主建 */
  id?: number;
  /** @是否在商品详情业展示：1=是， 0-否 */
  isProductPageShow?: string;
  /** @优惠码，店铺唯一 */
  promotionCode?: string;
  /** @优惠码id，全局唯一 */
  promotionId?: string;
  /** @优惠类型：金额=money，百分比=percent */
  promotionType?: string;
  /** @优惠数额 */
  promotionValue?: string;
  /** @开始时间 */
  startTime?: string;
  /** @店铺id */
  storeId?: string;
  /** @更新时间 */
  updatedAt?: string;
};
export type PromotionCodeSettingsDto = {
  /** @应用的分类id */
  applyCategoryIds?: string[];
  /** @应用人群类型：no_register=未注册 registered=已注册 all_persion=所有人 */
  applyPersionType?: string;
  /** @应用的商品id */
  applyProductIds?: string[];
  /** @应用商品类型：all=全部商品 partially_product=指定商品 partially_category=指定分类 */
  applyProductType?: string;
  /** @主题图 */
  banner?: string;
  /** @优惠门槛(条件)：无条件=no_condition,消费满指定金额=geq_money，消费满指定金额=geq_quantity */
  conditionType?: string;
  /** @优惠门槛具体条件值 */
  conditionValue?: string;
  /** @倒计时样式设置 */
  countdownStyleSettings?: Record<string, any>;
  /** @倒计时文案 */
  countdownTitle?: string;
  /** @优惠码状态：enable=启用， disabled=禁用， deleted=删除 */
  dataStatus?: string;
  /** @结束时间 */
  endTime?: string;
  /** @是否可以叠加使用：1=可以， 0=不可以 */
  isComboUse?: string;
  /** @是否无时间限制:1=无结束，0=有结束 */
  isNotEnd?: string;
  /** @是否限制每人的可使用总数 */
  isPersonUsableLimit?: string;
  /** @是否在商品详情业展示：1=是， 0-否 */
  isProductPageShow?: string;
  /** @是否限制优惠码发放总数 */
  isTotalQuantityLimit?: string;
  /** @选中商品排序方式：  sellingPrice_desc=售价由高到低， sellingPrice_asc=售价由低到高  sales_desc=销量由高到低  pv_desc=浏览由高到低 pv_asc=加购由高到低 cteate_desc=创建时间由新到旧 */
  productSortType?: string;
  /** @优惠码，店铺唯一 */
  promotionCode?: string;
  /** @优惠码id */
  promotionId?: string;
  /** @优惠类型：金额=money，百分比=percent */
  promotionType?: string;
  /** @优惠数额 */
  promotionValue?: string;
  /** @每人的可使用总数 */
  quantityOfPersion?: number;
  /** @开始时间 */
  startTime?: string;
  /** @倒计时时间展示类型：real_time=真实时间，virtual_time=虚拟时间 */
  timeSetType?: string;
  /** @虚拟时间配置 */
  timeSetValue?: Record<string, any>;
  /** @标题 */
  title?: string;
  /** @优惠码发放总数 */
  totalQuantity?: number;
};
export type PromotionCodeSettingsListVo = {
  /** @优惠门槛(条件)：无条件=no_condition,消费满指定金额=geq_money，消费满指定金额=geq_quantity */
  conditionType?: string;
  /** @优惠门槛具体条件值 */
  conditionValue?: string;
  /** @创建时间 */
  createdAt?: string;
  /** @数据状态：disabled=禁用， deleted=删除 */
  dataStatus?: string;
  /** @结束时间 */
  endTime?: string;
  /** @默认主建 */
  id?: number;
  /** @优惠码，店铺唯一 */
  promotionCode?: string;
  /** @全局唯一，优惠码id */
  promotionId?: string;
  /** @优惠码状态：not_start=未开始， valid=生效中， end=已结束 */
  promotionStatus?: string;
  /** @优惠类型：金额=money，百分比=percent */
  promotionType?: string;
  /** @优惠数额 */
  promotionValue?: string;
  /** @开始时间 */
  startTime?: string;
  /** @活动标题 */
  title?: string;
  /** @更新时间 */
  updatedAt?: string;
};
export type PromotionCodeStatisticsVo = {
  /** @转化率（曝光次数/交易额） */
  conversionRate?: string;
  /** @订单数 */
  orderNum?: number;
  /** @客单价（交易额/使用次数） */
  perTicketSales?: string;
  /** @曝光次数 */
  pv?: number;
  /** @使用次数/总次数 */
  times?: string;
  /** @总次数 */
  totalTimes?: number;
  /** @成交额 */
  turnover?: string;
  /** @使用次数 */
  useTimes?: number;
};
export type PromotionCodeUpdeteDataStatusDto = {
  /** @是否需要检查：1=需要，0=不需要，检查报错指定错误码：C10011 */
  isCheck?: string;
  /** @优惠码id */
  promotionIds?: string[];
};
export type ReductionActivityRule = {
  /** @是否上不封顶，0：否 1：是 */
  noUpperLimit?: string;
  /** @优惠规则，最多6条 */
  rules?: ActivityRule[];
};
export type Sort = {
  field?: string;
  isAsc?: boolean;
};
export type TreeNodeConfig = {
  childrenKey?: string;
  deep?: number;
  idKey?: string;
  nameKey?: string;
  parentIdKey?: string;
  weightKey?: string;
};
export type Treestring = {};
/** @分类活动VO */
export type FenLeiHuoDongVo = {
  /** @分类id */
  categoryId?: string;
  /** @名称 */
  categoryTitle?: string;
  /** @图片 */
  coverSrc?: string;
  quantity?: number;
};
/** @分类活动列表查询条件 */
export type FenLeiHuoDongLieBiaoChaXunTiaoJian = {
  /** @活动Id */
  activityId?: string;
  /** @分类活动id */
  categoryIds?: string[];
};
export type FenYeFanHuiDuiXiangShangPinHuoDongVo = {
  /** @是否还有下一页 */
  hasNextPage?: boolean;
  /** @当前页码 */
  pageNum?: number;
  /** @每页记录数 */
  pageSize?: number;
  /** @记录数 */
  records?: ShangPinHuoDongVo[];
  /** @总记录数 */
  total?: number;
};
/** @商品活动VO */
export type ShangPinHuoDongVo = {
  /** @商品分类名称 */
  categoryNames?: string[];
  /** @是否多规格 */
  hasOnlyDefaultVariant?: string;
  /** @是否已关联活动，0：否 1：是 */
  isRelationActivity?: string;
  /** @商品最高价格 */
  productHighestPrice?: number;
  /** @商品ID */
  productId?: string;
  /** @商品图片 */
  productImage?: string;
  /** @商品库存 */
  productInventory?: number;
  /** @商品最低价格 */
  productLowestPrice?: number;
  /** @商品备注 */
  productNote?: string;
  /** @商品是否上架 */
  productPublished?: string;
  /** @商品标题 */
  productTitle?: string;
  /** @提示 */
  tips?: number;
};
/** @商品活动列表查询条件 */
export type ShangPinHuoDongLieBiaoChaXunTiaoJian = {
  /** @活动Id */
  activityId?: string;
  /** @分类ID */
  categoryIds?: string[];
  /** @是否活动标记， 0否， 1是 */
  isActivity?: string;
  /** @分页页码 */
  pageNum?: number;
  /** @分页大小 */
  pageSize?: number;
  /** @商品详情 */
  productDescription?: string;
  /** @商品最高库存 */
  productHighestInventory?: number;
  /** @商品最高价格 */
  productHighestPrice?: number;
  /** @产品ID集合 */
  productIds?: string[];
  /** @商品最低库存 */
  productLowestInventory?: number;
  /** @商品最低价格 */
  productLowestPrice?: number;
  /** @商品是否上架 */
  productPublished?: string;
  /** @商品标题 */
  productTitle?: string;
  /** @SKU */
  sku?: string;
  /** @排序字段 */
  sorts?: Sort[];
  /** @标签 */
  tags?: string[];
};
/** @有效活动 */
export type YouXiaoHuoDong = {
  /** @活动名称 */
  activityName?: string;
  /** @主键 */
  id?: string;
  /** @适用范围 */
  scope?: string;
};
/** @满减活动DTO */
export type ManJianHuoDongDto = {
  /** @活动名称 */
  activityName?: string;
  /** @活动规则 */
  activityRule?: ReductionActivityRule;
  /** @优惠类型，reach_amount_discount(满额打折)，reach_piece_discount(满件打折)，reach_piece_reduction(满件减元)，reach_amount_reduction(满额减元) */
  activityType?: string;
  /** @banner图片地址 */
  bannerUrl?: string;
  /** @关联的分类id集合 */
  categoryIds?: string[];
  /** @倒计时文案 */
  countdownTitle?: string;
  /** @结束时间 */
  endTime?: string;
  /** @主键 */
  id?: string;
  /** @关联的商品id集合 */
  productIds?: string[];
  /** @商品排序类型 */
  productPositionType?: Record<string, any>;
  /** @适用范围 */
  scope?: string;
  /** @开始时间 */
  startTime?: string;
  /** @样式设置内容 */
  styleContent?: Record<string, any>;
  /** @活动标签 */
  tag?: string;
  /** @时间类型设置 */
  timeSetType?: string;
  /** @时间设置值 */
  timeSetValue?: Record<string, any>;
};
/** @满减活动VO */
export type ManJianHuoDongVo = {
  /** @活动名称 */
  activityName?: string;
  /** @活动规则，json字符串 */
  activityRule?: ReductionActivityRule;
  /** @优惠类型，reach_amount_discount(满额打折)，reach_piece_discount(满件打折)，reach_piece_reduction(满件减元)，reach_amount_reduction(满额减元) */
  activityType?: string;
  /** @活动结束时间 */
  endTime?: string;
  /** @活动Id */
  id?: string;
  /** @适用商品 */
  scope?: string;
  /** @活动开始时间 */
  startTime?: string;
  /** @状态，no_start(未开始)，valid(有效)，end(已结束) */
  status?: string;
};
/** @满减活动VO */
export type ManJianHuoDongVo1 = {
  /** @活动名称 */
  activityName?: string;
  /** @活动规则 */
  activityRule?: ReductionActivityRule;
  /** @优惠类型，reach_limit_discount(满额打折)，reach_piece_discount(满件打折)，reach_piece_reduction(满件减元)，reach_limit_reduction(满额减元) */
  activityType?: string;
  /** @banner图片地址 */
  bannerUrl?: string;
  /** @倒计时文案 */
  countdownTitle?: string;
  /** @结束时间 */
  endTime?: string;
  /** @主键 */
  id?: string;
  /** @商品排序类型 */
  productPositionType?: Record<string, any>;
  /** @适用范围 */
  scope?: string;
  /** @开始时间 */
  startTime?: string;
  /** @状态，not_start(未开始)， valid(生效中)，end(结束) */
  status?: string;
  /** @店铺Id */
  storeId?: string;
  /** @样式设置内容 */
  styleContent?: Record<string, any>;
  /** @活动标签 */
  tag?: string;
  /** @时间类型设置 */
  timeSetType?: string;
  /** @时间设置值 */
  timeSetValue?: Record<string, any>;
};
/** @满减活动启用/禁用DTO */
export type ManJianHuoDongQiYongJinYongDto = {
  /** @启用/禁用id集合 */
  ids?: string[];
  /** @是否禁用，0禁用 1启用 */
  isEnabled?: string;
};
export type TongYiFanHuiDuiXiang = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: Record<string, any>;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangActivityListTabVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ActivityListTabVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListTreestring = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: Treestring[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListFenLeiHuoDongVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: FenLeiHuoDongVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListYouXiaoHuoDong = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: YouXiaoHuoDong[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangPagePromotionCodeSettingsListVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: PagePromotionCodeSettingsListVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangPageManJianHuoDongVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: PageManJianHuoDongVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangPromotionCodeDetailVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: PromotionCodeDetailVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangPromotionCodeReviewVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: PromotionCodeReviewVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangPromotionCodeStatisticsVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: PromotionCodeStatisticsVo;
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
export type TongYiFanHuiDuiXiangFenYeFanHuiDuiXiangShangPinHuoDongVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: FenYeFanHuiDuiXiangShangPinHuoDongVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangYouXiaoHuoDong = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: YouXiaoHuoDong;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangManJianHuoDongVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ManJianHuoDongVo1;
  /** @返回信息 */
  msg?: string;
};
