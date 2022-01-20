/* eslint-disable */

/**
 * @swagger 2.0
 * @description <div style='font-size:14px;color:red;'>Enchant Branding Global RESTful APIs</div>
 * @version 2.0
 * @title Enchant Branding Global
 * @basePath /admin-api/ebg-open-web
 * @see http://43.129.65.194:3000/api/plugin/exportSwagger?type=OpenAPIV2&pid=17&status=all&isWiki=false
 * @author sfe
 * @throws 🈲 > 禁止手动修改
 */

/** @响应infer数据取值 */
export type Response<T> = T extends { data?: infer V } ? V : T;
/** @查询接口 */
export type AppKeyPath = {
  /** @appKey */
  appKey: string;
};
/** @通过属性查询模板组件表列表 */
export type TemplateSectionListQuery = {};
/** @通过属性查询模板组件表对象 */
export type TemplateSectionQuery = {};
/** @通过属性查询模版信息表列表 */
export type TemplateListQuery = {};
/** @通过属性查询模版信息表对象 */
export type TemplateQuery = {};
/** @通过属性查询组件表列表 */
export type SectionListQuery = {};
/** @通过属性查询组件表对象 */
export type SectionQuery = {};
/** @通过属性查询全局卡片表列表 */
export type SchemaBlockListQuery = {};
/** @通过属性查询全局卡片表对象 */
export type SchemaBlockQuery = {};
/** @通过属性查询页面表列表 */
export type PageListQuery = {};
/** @通过属性查询页面表对象 */
export type PageQuery = {};
/** @查询模版列表 */
export type OpenTemplateListAllQuery = {};
/** @刷新AppToken */
export type OpenAuthRefreshAppTokenQuery = {};
/** @测试开放接口 */
export type OpenAuthHelloQuery = {};
/** @获取授权码 */
export type OpenAuthGetAuthCodeQuery = {};
/** @获取AppToken */
export type OpenAuthGetAppTokenQuery = {};
/** @订单详情分页列表 */
export type OpenApiOrderListQuery = {};
/** @订单详情接口 */
export type OpenApiOrderDetailQuery = {};
/** @测试开放接口 */
export type OpenApiHelloQuery = {};
/** @通过Id查询卡片表对象 */
export type IdPath = {
  /** @id */
  id: string;
};
/** @通过属性查询卡片表列表 */
export type BlockListQuery = {};
/** @通过属性查询卡片表对象 */
export type BlockQuery = {};
export type AppTokenVo = {
  /** @鉴权令牌AppToken */
  appToken?: string;
  /** @刷新令牌RefreshToken */
  refreshToken?: string;
};
export type Application = {
  agreementStatus?: string;
  appCategory?: string;
  appDescription?: string;
  appIcon?: string;
  appImage?: string;
  appIntro?: string;
  appKey?: string;
  appName?: string;
  appOwner?: string;
  appSecret?: string;
  appType?: string;
  companyName?: string;
  copyrightImage?: string;
  createdAt?: string;
  createdBy?: string;
  developerId?: string;
  id?: string;
  images?: string;
  privacyRight?: string;
  publishedStatus?: string;
  revision?: number;
  updatedAt?: string;
  updatedBy?: string;
  verifyStatus?: string;
  vision?: number;
  zipName?: string;
  zipUrl?: string;
};
export type ApplicationAddDto = {
  /** @同意协议 0-未同意 1-已同意 */
  agreementStatus?: string;
  /** @应用分类 */
  appCategory?: string;
  /** @应用描述 */
  appDescription?: string;
  /** @模板小图标 */
  appIcon?: string;
  /** @模板主图片 */
  appImage?: string;
  /** @应用简介 */
  appIntro?: string;
  /** @应用名称 */
  appName?: string;
  /** @应用作者 */
  appOwner?: string;
  /** @应用类型 0-插件 1-模板 */
  appType?: string;
  /** @研发公司名称 */
  companyName?: string;
  /** @版权证明 */
  copyrightImage?: string;
  /** @开发者ID */
  developerId?: string;
  /** @模板图集合 */
  images?: string;
  /** @隐私权限 如：订单权限、用户权限等 */
  privacyRight?: string;
  /** @压缩包名称 */
  zipName?: string;
  /** @压缩包路径 */
  zipUrl?: string;
};
export type BillAddress = {
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
export type BlockDto = {
  /** @卡片变量数据 */
  blockData?: string;
  /** @卡片icon */
  blockIcon?: string;
  /** @卡片Key */
  blockKey?: string;
  /** @卡片名称 */
  blockName?: string;
  /** @卡片排序位置 */
  blockPosition?: number;
  /** @卡片模式数据 */
  blockSchema?: string;
  /** @卡片类型 */
  blockType?: string;
  /** @创建时间 */
  createdAt?: Record<string, any>;
  /** @创建人 */
  createdBy?: string;
  /** @ID */
  id?: string;
  /** @乐观锁 */
  revision?: number;
  /** @组件ID */
  sectionId?: string;
  /** @模板ID */
  templateId?: string;
  /** @更新时间 */
  updatedAt?: Record<string, any>;
  /** @更新人 */
  updatedBy?: string;
  /** @版本号 */
  vision?: number;
};
/** @信息类 */
export type BlockVo = {
  /** @卡片变量数据 */
  blockData?: string;
  /** @卡片icon */
  blockIcon?: string;
  /** @卡片Key */
  blockKey?: string;
  /** @卡片名称 */
  blockName?: string;
  /** @卡片排序位置 */
  blockPosition?: number;
  /** @卡片模式数据 */
  blockSchema?: string;
  /** @卡片类型 */
  blockType?: string;
  /** @创建时间 */
  createdAt?: Record<string, any>;
  /** @创建人 */
  createdBy?: string;
  /** @ID */
  id?: string;
  /** @乐观锁 */
  revision?: number;
  /** @组件ID */
  sectionId?: string;
  /** @模板ID */
  templateId?: string;
  /** @更新时间 */
  updatedAt?: Record<string, any>;
  /** @更新人 */
  updatedBy?: string;
  /** @版本号 */
  vision?: number;
};
export type DeveloperAddDto = {
  /** @联系地址 */
  address?: string;
  /** @身份证号 */
  idCard?: string;
  /** @邮箱 */
  mail?: string;
  /** @名称 */
  name?: string;
  /** @密码 */
  password?: string;
  /** @手机 */
  phone?: string;
  /** @真实姓名 */
  realName?: string;
  /** @审核状态 0-审核中 1-有效用户 */
  verifyStatus?: string;
};
export type OauthCodeVo = {
  /** @授权码 */
  authCode?: string;
  /** @重定向地址 */
  redirectUrl?: string;
  /** @激活状态 0-未使用 1-已使用 */
  status?: string;
  /** @商户ID */
  storeId?: string;
};
export type OrderDetailItemVo = {
  checkoutToken?: string;
  companyName?: string;
  compareAtPrice?: number;
  financialStatus?: string;
  fulfillmentOrderId?: string;
  fulfillmentStatus?: string;
  grams?: string;
  id?: string;
  image?: string;
  options?: string;
  price?: number;
  productId?: string;
  quantity?: number;
  sequence?: string;
  sku?: string;
  title?: string;
  trackingNo?: string;
  variantId?: string;
};
export type OrderDetailListVo = {
  billAddress?: BillAddress;
  checkoutToken?: string;
  createdAt?: string;
  currency?: string;
  customerId?: string;
  customerRemark?: string;
  financialStatus?: string;
  fulfillmentStatus?: string;
  id?: string;
  orderItems?: OrderDetailItemVo[];
  orderNo?: string;
  paymentInfo?: PaymentInfo;
  sendAbandonEmail?: number;
  shippingAddress?: ShippingAddress;
  shopUrl?: string;
  source?: string;
  status?: string;
  step?: string;
  storeId?: string;
  taxId?: string;
  taxShortName?: string;
  totalPrice?: number;
  totalShipping?: number;
  totalTax?: number;
};
export type PageDto = {
  /** @创建时间 */
  createdAt?: Record<string, any>;
  /** @创建人 */
  createdBy?: string;
  /** @ID */
  id?: string;
  /** @页面JSON内容 */
  pageContent?: string;
  /** @页面文件路径 */
  pageDir?: string;
  /** @页面文件名称 */
  pageFile?: string;
  /** @页面名称 */
  pageName?: string;
  /** @页面标题 */
  pageTitle?: string;
  /** @页面类型 */
  pageType?: string;
  /** @页面地址 */
  pageUrl?: string;
  /** @乐观锁 */
  revision?: number;
  /** @模板ID */
  templateId?: string;
  /** @更新时间 */
  updatedAt?: Record<string, any>;
  /** @更新人 */
  updatedBy?: string;
  /** @版本号 */
  vision?: number;
};
/** @信息类 */
export type PageVo = {
  /** @创建时间 */
  createdAt?: Record<string, any>;
  /** @创建人 */
  createdBy?: string;
  /** @ID */
  id?: string;
  /** @页面JSON内容 */
  pageContent?: string;
  /** @页面文件路径 */
  pageDir?: string;
  /** @页面文件名称 */
  pageFile?: string;
  /** @页面名称 */
  pageName?: string;
  /** @页面标题 */
  pageTitle?: string;
  /** @页面类型 */
  pageType?: string;
  /** @页面地址 */
  pageUrl?: string;
  /** @乐观锁 */
  revision?: number;
  /** @模板ID */
  templateId?: string;
  /** @更新时间 */
  updatedAt?: Record<string, any>;
  /** @更新人 */
  updatedBy?: string;
  /** @版本号 */
  vision?: number;
};
export type PaymentInfo = {
  discountCode?: string;
  discountPrice?: number;
  paidAt?: string;
  payMethod?: string;
  quantity?: number;
  shippingPrice?: number;
  shippingTemplateId?: string;
  subtotalPrice?: number;
  taxId?: string;
  totalPrice?: number;
  totalTax?: number;
};
export type SchemaBlockDto = {
  /** @卡片变量数据 */
  blockData?: string;
  /** @卡片icon */
  blockIcon?: string;
  /** @卡片名称 */
  blockName?: string;
  /** @卡片排序位置 */
  blockPosition?: number;
  /** @卡片模式数据 */
  blockSchema?: string;
  /** @卡片类型 */
  blockType?: string;
  /** @创建时间 */
  createdAt?: Record<string, any>;
  /** @创建人 */
  createdBy?: string;
  /** @ID */
  id?: string;
  /** @组件文件名称 */
  liquidName?: string;
  /** @乐观锁 */
  revision?: number;
  /** @全局组件ID */
  sectionId?: string;
  /** @模板ID */
  templateId?: string;
  /** @更新时间 */
  updatedAt?: Record<string, any>;
  /** @更新人 */
  updatedBy?: string;
  /** @版本号 */
  vision?: number;
};
/** @信息类 */
export type SchemaBlockVo = {
  /** @卡片变量数据 */
  blockData?: string;
  /** @卡片icon */
  blockIcon?: string;
  /** @卡片名称 */
  blockName?: string;
  /** @卡片排序位置 */
  blockPosition?: number;
  /** @卡片模式数据 */
  blockSchema?: string;
  /** @卡片类型 */
  blockType?: string;
  /** @创建时间 */
  createdAt?: Record<string, any>;
  /** @创建人 */
  createdBy?: string;
  /** @ID */
  id?: string;
  /** @组件文件名称 */
  liquidName?: string;
  /** @乐观锁 */
  revision?: number;
  /** @全局组件ID */
  sectionId?: string;
  /** @模板ID */
  templateId?: string;
  /** @更新时间 */
  updatedAt?: Record<string, any>;
  /** @更新人 */
  updatedBy?: string;
  /** @版本号 */
  vision?: number;
};
export type SectionDto = {
  /** @是否允许拖动 */
  allowDrag?: string;
  /** @创建时间 */
  createdAt?: Record<string, any>;
  /** @创建人 */
  createdBy?: string;
  /** @文件名称 */
  fileName?: string;
  /** @ID */
  id?: string;
  /** @单个block时，允许重复添加个数 */
  maxBlocks?: string;
  /** @手机端图片 */
  mobileCoverUrl?: string;
  /** @页面ID */
  pageId?: string;
  /** @PC端图片 */
  pcCoverUrl?: string;
  /** @乐观锁 */
  revision?: number;
  /** @组件变量数据 */
  sectionData?: string;
  /** @icon */
  sectionIcon?: string;
  /** @组件Key */
  sectionKey?: string;
  /** @组件名称 */
  sectionName?: string;
  /** @组件排序位置 */
  sectionPosition?: number;
  /** @组件模式数据 */
  sectionSchema?: string;
  /** @组件类型 */
  sectionType?: string;
  /** @是否显示删除按钮 */
  showDelete?: string;
  /** @是否显示隐藏按钮 */
  showHide?: string;
  /** @模板ID */
  templateId?: string;
  /** @更新时间 */
  updatedAt?: Record<string, any>;
  /** @更新人 */
  updatedBy?: string;
  /** @版本号 */
  vision?: number;
};
/** @信息类 */
export type SectionVo = {
  /** @是否允许拖动 */
  allowDrag?: string;
  /** @创建时间 */
  createdAt?: Record<string, any>;
  /** @创建人 */
  createdBy?: string;
  /** @文件名称 */
  fileName?: string;
  /** @ID */
  id?: string;
  /** @单个block时，允许重复添加个数 */
  maxBlocks?: string;
  /** @手机端图片 */
  mobileCoverUrl?: string;
  /** @页面ID */
  pageId?: string;
  /** @PC端图片 */
  pcCoverUrl?: string;
  /** @乐观锁 */
  revision?: number;
  /** @组件变量数据 */
  sectionData?: string;
  /** @icon */
  sectionIcon?: string;
  /** @组件Key */
  sectionKey?: string;
  /** @组件名称 */
  sectionName?: string;
  /** @组件排序位置 */
  sectionPosition?: number;
  /** @组件模式数据 */
  sectionSchema?: string;
  /** @组件类型 */
  sectionType?: string;
  /** @是否显示删除按钮 */
  showDelete?: string;
  /** @是否显示隐藏按钮 */
  showHide?: string;
  /** @模板ID */
  templateId?: string;
  /** @更新时间 */
  updatedAt?: Record<string, any>;
  /** @更新人 */
  updatedBy?: string;
  /** @版本号 */
  vision?: number;
};
export type ShippingAddress = {
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
export type TemplateDto = {
  /** @应用ID */
  appId?: string;
  /** @创建时间 */
  createdAt?: Record<string, any>;
  /** @创建人 */
  createdBy?: string;
  /** @开发者ID */
  developerId?: string;
  /** @ID */
  id?: string;
  /** @手机端图片 */
  mobileCoverUrl?: string;
  /** @模板名称 */
  name?: string;
  /** @PC端图片 */
  pcCoverUrl?: string;
  /** @预览地址 */
  previewUrl?: string;
  /** @乐观锁 */
  revision?: number;
  /** @全局设置变量数据 */
  settingsData?: string;
  /** @全局设置模式数据 */
  settingsSchema?: string;
  /** @模板描述 */
  themeDesc?: string;
  /** @模板类型 josn or liquid;0-未知类型 1-json类型 2-liquid */
  themeType?: string;
  /** @模板版本 */
  themeVersion?: string;
  /** @更新时间 */
  updatedAt?: Record<string, any>;
  /** @更新人 */
  updatedBy?: string;
  /** @版本号 */
  vision?: number;
};
export type TemplateSectionDto = {
  /** @是否允许拖动 */
  allowDrag?: string;
  /** @创建时间 */
  createdAt?: Record<string, any>;
  /** @创建人 */
  createdBy?: string;
  /** @文件名称 */
  fileName?: string;
  /** @ID */
  id?: string;
  /** @单个block时，允许重复添加个数 */
  maxBlocks?: string;
  /** @手机端图片 */
  mobileCoverUrl?: string;
  /** @PC端图片 */
  pcCoverUrl?: string;
  /** @乐观锁 */
  revision?: number;
  /** @组件变量数据 */
  sectionData?: string;
  /** @icon */
  sectionIcon?: string;
  /** @组件名称 */
  sectionName?: string;
  /** @组件排序位置 */
  sectionPosition?: number;
  /** @组件模式数据 */
  sectionSchema?: string;
  /** @组件类型 0-通用类型 1-公共头 2-公共尾 3-公告栏 */
  sectionType?: string;
  /** @是否显示删除按钮 */
  showDelete?: string;
  /** @是否显示隐藏按钮 */
  showHide?: string;
  /** @模板ID */
  templateId?: string;
  /** @页面作用范围（字符串数组） */
  templates?: string;
  /** @更新时间 */
  updatedAt?: Record<string, any>;
  /** @更新人 */
  updatedBy?: string;
  /** @版本号 */
  vision?: number;
};
/** @信息类 */
export type TemplateSectionVo = {
  /** @是否允许拖动 */
  allowDrag?: string;
  /** @创建时间 */
  createdAt?: Record<string, any>;
  /** @创建人 */
  createdBy?: string;
  /** @文件名称 */
  fileName?: string;
  /** @ID */
  id?: string;
  /** @单个block时，允许重复添加个数 */
  maxBlocks?: string;
  /** @手机端图片 */
  mobileCoverUrl?: string;
  /** @PC端图片 */
  pcCoverUrl?: string;
  /** @乐观锁 */
  revision?: number;
  /** @组件变量数据 */
  sectionData?: string;
  /** @icon */
  sectionIcon?: string;
  /** @组件名称 */
  sectionName?: string;
  /** @组件排序位置 */
  sectionPosition?: number;
  /** @组件模式数据 */
  sectionSchema?: string;
  /** @组件类型 0-通用类型 1-公共头 2-公共尾 3-公告栏 */
  sectionType?: string;
  /** @是否显示删除按钮 */
  showDelete?: string;
  /** @是否显示隐藏按钮 */
  showHide?: string;
  /** @模板ID */
  templateId?: string;
  /** @页面作用范围（字符串数组） */
  templates?: string;
  /** @更新时间 */
  updatedAt?: Record<string, any>;
  /** @更新人 */
  updatedBy?: string;
  /** @版本号 */
  vision?: number;
};
/** @信息类 */
export type TemplateVo = {
  /** @应用ID */
  appId?: string;
  /** @创建时间 */
  createdAt?: Record<string, any>;
  /** @创建人 */
  createdBy?: string;
  /** @开发者ID */
  developerId?: string;
  /** @ID */
  id?: string;
  /** @手机端图片 */
  mobileCoverUrl?: string;
  /** @模板名称 */
  name?: string;
  /** @PC端图片 */
  pcCoverUrl?: string;
  /** @预览地址 */
  previewUrl?: string;
  /** @乐观锁 */
  revision?: number;
  /** @全局设置变量数据 */
  settingsData?: string;
  /** @全局设置模式数据 */
  settingsSchema?: string;
  /** @模板描述 */
  themeDesc?: string;
  /** @模板类型 josn or liquid;0-未知类型 1-json类型 2-liquid */
  themeType?: string;
  /** @模板版本 */
  themeVersion?: string;
  /** @更新时间 */
  updatedAt?: Record<string, any>;
  /** @更新人 */
  updatedBy?: string;
  /** @版本号 */
  vision?: number;
};
export type FenYeFanHuiDuiXiangOrderDetailListVo = {
  /** @是否还有下一页 */
  hasNextPage?: boolean;
  /** @当前页码 */
  pageNum?: number;
  /** @每页记录数 */
  pageSize?: number;
  /** @记录数 */
  records?: OrderDetailListVo[];
  /** @总记录数 */
  total?: number;
};
export type LuYueDingDanFaHuo = {
  /** @结算单号 */
  checkoutToken?: string;
  /** @物流公司名称 */
  companyName?: string;
  /** @物流公司编码 */
  companyNo?: string;
  /** @履约订单条目 */
  fulfillmentOrderItems?: LuYueDingDanTiaoMu[];
  /** @物流单号 */
  trackingNo?: string;
};
export type LuYueDingDanTiaoMu = {
  /** @发货数量 */
  fulfillmentQuantity?: number;
  /** @订单条目id */
  orderItemId?: string;
};
export type TongYiFanHuiDuiXiang = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: Record<string, any>;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangAppTokenVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: AppTokenVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangApplication = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: Application;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangBlockVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: BlockVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListBlockVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: BlockVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListPageVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: PageVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListSchemaBlockVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: SchemaBlockVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListSectionVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: SectionVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListTemplateSectionVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: TemplateSectionVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListTemplateVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: TemplateVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangOauthCodeVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: OauthCodeVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangOrderDetailListVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: OrderDetailListVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangPageVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: PageVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangSchemaBlockVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: SchemaBlockVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangSectionVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: SectionVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangTemplateSectionVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: TemplateSectionVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangTemplateVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: TemplateVo;
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
export type TongYiFanHuiDuiXiangstring = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: string;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangFenYeFanHuiDuiXiangOrderDetailListVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: FenYeFanHuiDuiXiangOrderDetailListVo;
  /** @返回信息 */
  msg?: string;
};
