/* eslint-disable */

/**
 * @swagger 2.0
 * @description <div style='font-size:14px;color:red;'>Enchant Branding Global RESTful APIs</div>
 * @version 2.0
 * @title Enchant Branding Global
 * @basePath /admin-api/ebg-product-web
 * @see http://43.129.65.194:3000/api/plugin/exportSwagger?type=OpenAPIV2&pid=17&status=all&isWiki=false
 * @author sfe
 * @throws 🈲 > 禁止手动修改
 */

/** @响应infer数据取值 */
export type Response<T> = T extends { data?: infer V } ? V : T;
/** @getOrderItemProduct */
export type GetOrderItemProductQuery = {};
/** @标签列表 */
export type StoreIdPath = {
  /** @storeId */
  storeId: string;
};
/** @列出SKU信息 */
export type AdminProductsVariantQuery = {};
/** @查询导入商品进度 */
export type AdminProductsImportQuery = {};
/** @复制商品记录 */
export type ProductIdPath = {
  /** @productId */
  productId: string;
};
/** @查询关联商品 */
export type AdminProductsAssociationQuery = {};
/** @根据id获取产品父级分类名称 */
export type CategoryIdPath = {
  /** @categoryId */
  categoryId: string;
};
export type BatchUpdateCategoryDto = {
  /** @产品关联的分类 ids */
  categoryIds?: string[];
  /** @是否保持原有分类，默认 false */
  keepOriginalCategory?: boolean;
  /** @多个产品 id */
  productIds?: string[];
};
export type CategoryActivityDto = {
  categoryCoverImage?: string;
  categoryId?: string;
  categoryTitle?: string;
  productIds?: string[];
};
export type CategoryActivityNodeDto = {
  categoryCoverImage?: string;
  categoryId?: string;
  categoryNote?: string;
  categoryParentId?: string;
  categoryPosition?: number;
  categoryProductCount?: number;
  categoryStatus?: number;
  categoryTitle?: string;
  categoryType?: number;
  productIds?: string[];
  revision?: number;
};
export type CategoryDto = {
  /** @Banner src */
  bannerSrc?: string;
  /** @封面 src */
  coverSrc?: string;
  /** @描述 */
  description?: string;
  /** @handle */
  handle?: string;
  /** @seo 描述 */
  metaDescription?: string;
  /** @metaEditFlag 是否需要编辑meta 标记，需要：TRUE， FALSE：不需要 */
  metaEditFlag?: boolean;
  /** @seo 关键字 */
  metaKeyword?: string;
  /** @seo 标题 */
  metaTitle?: string;
  /** @备注 */
  note?: string;
  /** @父分类的编号 */
  parentId?: string;
  /** @关联产品列表 */
  products?: ProductCategoryRelationDto[];
  /** @版本号，修改数据时指定 */
  revision?: number;
  /** @是否进行显示 */
  showStatus?: number;
  /** @商品分类名称 */
  title?: string;
};
export type CategoryDetailVo = {
  /** @Banner src */
  bannerSrc?: string;
  /** @分类绑定商品数量 */
  categoryProductCount?: number;
  /** @封面 src */
  coverSrc?: string;
  /** @描述 */
  description?: string;
  /** @handle */
  handle?: string;
  /** @handleCode 唯一标识 */
  handleCode?: string;
  /** @分类主键 */
  id?: string;
  /** @seo 描述 */
  metaDescription?: string;
  /** @是否编码过 seo 信息 */
  metaEditFlag?: boolean;
  /** @seo 关键字 */
  metaKeyword?: string;
  /** @seo 标题 */
  metaTitle?: string;
  /** @备注 */
  note?: string;
  /** @父分类的编号 */
  parentId?: string;
  /** @父级分类名称 */
  parentNames?: string[];
  /** @关联产品列表 */
  products?: ProductCategoryRelationVo[];
  /** @版本号，修改数据时指定 */
  revision?: number;
  /** @是否进行显示,1: 显示；2：不显示 */
  showStatus?: number;
  /** @名称 */
  title?: string;
};
export type CategoryPatchDto = {
  /** @是否进行显示 */
  showStatus?: number;
};
export type CharSequence = {};
export type Comparableobject = {};
export type DeleteProductDto = {
  /** @商品ID */
  productIds?: string[];
};
export type DeleteTagDto = {
  /** @商户ID */
  storeId?: string;
  /** @标签ID */
  tagIds?: string[];
};
export type ImagePostDto = {
  /** @图片描述 */
  imageAlt?: string;
  /** @图片高度 */
  imageHeight?: string;
  /** @图片路径 */
  imageSrc?: string;
  /** @图片状态 */
  imageStatus?: string;
  /** @图片宽度 */
  imageWidth?: string;
  /** @图片位置排序 */
  position?: number;
};
export type ImagePutDto = {
  /** @图片描述 */
  imageAlt?: string;
  /** @图片高度 */
  imageHeight?: string;
  /** @图片ID */
  imageId?: string;
  /** @图片路径 */
  imageSrc?: string;
  /** @图片状态isDeleted 0-不可用状态 1-表示可用状态 */
  imageStatus?: string;
  /** @图片宽度 */
  imageWidth?: string;
  /** @图片位置排序 */
  position?: number;
  /** @商品ID */
  productId?: string;
  /** @版本号 */
  version?: number;
};
export type ImageUploadVo = {
  height?: number;
  mimeType?: string;
  url?: string;
  width?: number;
};
export type ImportProgressVo = {
  failureCount?: number;
  status?: string;
  successCount?: number;
  total?: number;
};
export type ImportResultVo = {
  importId?: string;
};
export type InventoryInfoDto = {
  productId?: string;
  quantity?: number;
  variantId?: string;
};
export type OptionPostDto = {
  /** @主属性图片备注 */
  imageAlt?: string;
  /** @主属性图片高度 */
  imageHeight?: string;
  /** @主属性图片地址 */
  imageSrc?: string;
  /** @主属性图片宽度 */
  imageWidth?: string;
  /** @属性名 */
  optionName?: string;
  /** @属性状态 0-不可用状态 1-可用状态 */
  optionStatus?: string;
  /** @属性值 */
  optionValue?: string;
  /** @属性值ID */
  optionValueId?: string;
  /** @属性值位置排序 */
  optionValuePosition?: number;
  /** @属性状态 0-不可用状态 1-可用状态 */
  optionValueStatus?: string;
  /** @属性排序位置 */
  position?: number;
};
export type OptionPutDto = {
  /** @主属性图片备注 */
  imageAlt?: string;
  /** @主属性图片高度 */
  imageHeight?: string;
  /** @主属性图片ID */
  imageId?: string;
  /** @主属性图片地址 */
  imageSrc?: string;
  /** @主属性图片宽度 */
  imageWidth?: string;
  /** @属性ID */
  optionId?: string;
  /** @属性名 */
  optionName?: string;
  /** @属性状态  0-不可用状态 1-可用状态 */
  optionStatus?: string;
  /** @属性值 */
  optionValue?: string;
  /** @属性值ID */
  optionValueId?: string;
  /** @属性值位置排序 */
  optionValuePosition?: number;
  /** @属性状态 0-不可用状态 1-可用状态 */
  optionValueStatus?: string;
  /** @属性排序位置 */
  position?: number;
  /** @商品ID */
  productId?: string;
  /** @版本号 */
  version?: number;
};
export type OrderItemProductVo = {
  firstCategory?: string;
  options?: string;
  productId?: string;
  productOriginalPrice?: number;
  productPrice?: number;
  productTag?: string[];
  productTitle?: string;
  secondCategory?: string;
  sku?: string;
  thirdCategory?: string;
};
export type PostProductDto = {
  /** @关联商品ID列表 */
  associatedProductIds?: string[];
  /** @是否为多规格 */
  hasOnlyDefaultVariant?: string;
  /** @商品图片集合 */
  images?: ImagePostDto[];
  /** @商品属性集合 */
  options?: OptionPostDto[];
  /** @商品活动 */
  productActivity?: string;
  /** @商品子标题 */
  productBrief?: string;
  /** @分类ID */
  productCategoryIds?: string[];
  /** @商品描述 */
  productDescription?: string;
  /** @是否展示虚拟销量 */
  productDisplayFakeSales?: string;
  /** @虚拟销量 */
  productFakeSales?: number;
  /** @商品slug */
  productHandle?: string;
  /** @商品最高价格 */
  productHighestPrice?: number;
  /** @商品主图 */
  productImage?: string;
  /** @库存追踪方案 */
  productInventoryPolicy?: string;
  /** @是否跟踪库存 */
  productInventoryTracking?: string;
  /** @商品语言 */
  productLanguage?: string;
  /** @商品最低价格 */
  productLowestPrice?: number;
  /** @seo描述 */
  productMetaDescription?: string;
  /** @seo关键字 */
  productMetaKeyword?: string;
  /** @seo标题 */
  productMetaTitle?: string;
  /** @主属性是否需要配图 */
  productNeedOptionImage?: string;
  /** @子商品是否需要配图 */
  productNeedVariantImage?: string;
  /** @商品备注 */
  productNote?: string;
  /** @是否上架商品 */
  productPublished?: string;
  /** @是否需要物流 */
  productRequiresShipping?: string;
  /** @标签ID */
  productTagIds?: string[];
  /** @是否收税 */
  productTaxable?: string;
  /** @商品标题 */
  productTitle?: string;
  /** @供应商名称 */
  productVendor?: string[];
  /** @商品spu */
  spu?: string;
  /** @商户ID */
  storeId?: string;
  /** @商品SKU集合 */
  variants?: VariantPostDto[];
};
export type PostTagDto = {
  /** @商户ID */
  storeId?: string;
  /** @标签名称 */
  tagName?: string;
  /** @标签位置 */
  tagPosition?: number;
  /** @标签状态;0-不可用 1-可用 */
  tagStatus?: string;
};
export type ProductCategoryRelationDto = {
  /** @产品排序位置 */
  position?: number;
  /** @产品id */
  productId?: string;
  productRevision?: number;
};
export type ProductCategoryRelationVo = {
  /** @产品id */
  id?: string;
  /** @产品图片 */
  imgUrl?: string;
  /** @月销量 */
  nearest?: number;
  /** @产品排序位置 */
  position?: number;
  /** @售价 */
  price?: number;
  /** @产品状态提示 */
  tips?: number;
  /** @产品标题 */
  title?: string;
};
export type ProductEsListVo = {
  categoryNames?: string[];
  hasOnlyDefaultVariant?: string;
  productHighestPrice?: number;
  productId?: string;
  productImage?: string;
  productInventory?: number;
  productLowestPrice?: number;
  productNote?: string;
  productPublished?: string;
  productTitle?: string;
  tips?: number;
};
export type ProductExportDto = {
  /** @邮箱 */
  email?: string;
  /** @导出范围 */
  exportScope?: string;
  /** @所选商品ID */
  productIds?: string[];
  /** @筛选结果 商品列表查询参数 */
  productListQueryParam?: ProductListReq;
};
export type ProductListQuery = {
  categoryIds?: string[];
  pageNum?: number;
  pageSize?: number;
  productDescription?: string;
  productHighestInventory?: number;
  productHighestPrice?: number;
  productIds?: string[];
  productLowestInventory?: number;
  productLowestPrice?: number;
  productPublished?: string;
  productTitle?: string;
  sku?: string;
  sorts?: Sort[];
  tags?: string[];
};
export type ProductListReq = {
  /** @分类ID */
  categoryIds?: string[];
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
  /** @排序 */
  sorts?: Sort1[];
  /** @标签 */
  tags?: string[];
};
export type ProductListVo = {
  /** @分类名称列表 */
  categoryNames?: string[];
  /** @是否多规格 */
  hasOnlyDefaultVariant?: string;
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
  /** @提示信息： 1、未完善 2、全部售罄 3、部分规格售罄 4、库存不足 5、部分规格库存不足 */
  tips?: number;
};
export type ProductPriceUpdateDto = {
  /** @是否全选 */
  isAllSelected?: boolean;
  /** @是否修改原价 */
  isUpdateOriginalPrice?: boolean;
  /** @是否修改售价 */
  isUpdateSellingPrice?: boolean;
  /** @需要修改的商品ID列表 */
  productIds?: string[];
  /** @修改方式 1：减少固定金额 2：增加固定金额 3：按百分比减少 4：按百分比增加 */
  updateMethod?: number;
  /** @修改类型 1： 修改为指定价格 2：基于现价调整 */
  updateType?: number;
  /** @修改值 可能是金额或者是百分比 */
  value?: number;
};
export type ProductStatisticsVo = {
  /** @已上架商品数 */
  publishedCount?: number;
  /** @总商品数 */
  totalCount?: number;
  /** @未上架商品数 */
  unPublishedCount?: number;
};
export type PublishStatusUpdateDto = {
  /** @商品ID */
  productIds?: string[];
  /** @发布状态 */
  productPublished?: string;
};
export type PutProductDto = {
  /** @关联商品ID列表 */
  associatedProductIds?: string[];
  /** @是否为多规格 */
  hasOnlyDefaultVariant?: string;
  /** @商品图片集合 */
  images?: ImagePutDto[];
  /** @最新版本号 */
  latestVersion?: number;
  /** @商品属性集合 */
  options?: OptionPutDto[];
  /** @商品活动 */
  productActivity?: string;
  /** @子标题 */
  productBrief?: string;
  /** @分类ID */
  productCategoryIds?: string[];
  /** @商品描述 */
  productDescription?: string;
  /** @是否展示虚拟销量 */
  productDisplayFakeSales?: string;
  /** @虚拟销量 */
  productFakeSales?: number;
  /** @商品slug */
  productHandle?: string;
  /** @商品ID */
  productId?: string;
  /** @商品主图 */
  productImage?: string;
  /** @库存追踪方案 */
  productInventoryPolicy?: string;
  /** @是否跟踪库存 */
  productInventoryTracking?: string;
  /** @商品备注 */
  productLanguage?: string;
  /** @seo描述 */
  productMetaDescription?: string;
  /** @seo关键字 */
  productMetaKeyword?: string;
  /** @seo标题 */
  productMetaTitle?: string;
  /** @主属性是否需要配图 */
  productNeedOptionImage?: string;
  /** @子商品是否需要配图 */
  productNeedVariantImage?: string;
  /** @商品备注 */
  productNote?: string;
  /** @商品价格 */
  productPrice?: number;
  /** @是否上架商品 */
  productPublished?: string;
  /** @是否需要物流 */
  productRequiresShipping?: string;
  /** @商品状态 0-不可用状态 1-可用状态 2-商品信息未完善 */
  productStatus?: string;
  /** @标签ID */
  productTagIds?: string[];
  /** @是否收税 */
  productTaxable?: string;
  /** @商品标题 */
  productTitle?: string;
  /** @供应商名称 */
  productVendor?: string[];
  /** @乐观锁版本号 */
  revision?: number;
  /** @商品spu */
  spu?: string;
  /** @商户ID */
  storeId?: string;
  /** @商品SKU集合 */
  variants?: VariantPutDto[];
};
export type QueryProductDto = {
  /** @关联商品ID列表 */
  associatedProducts?: ProductListVo[];
  /** @是否为多规格 */
  hasOnlyDefaultVariant?: string;
  /** @商品图片集合 */
  images?: ImagePutDto[];
  /** @最新版本号 */
  latestVersion?: number;
  /** @商品属性集合 */
  options?: OptionPutDto[];
  /** @商品活动 */
  productActivity?: string;
  /** @子标题 */
  productBrief?: string;
  /** @分类ID */
  productCategories?: CategoryDetailVo[];
  /** @商品描述 */
  productDescription?: string;
  /** @是否展示虚拟销量 */
  productDisplayFakeSales?: string;
  /** @虚拟销量 */
  productFakeSales?: number;
  /** @商品slug */
  productHandle?: string;
  /** @商品ID */
  productId?: string;
  /** @商品主图 */
  productImage?: string;
  /** @库存追踪方案 */
  productInventoryPolicy?: string;
  /** @是否跟踪库存 */
  productInventoryTracking?: string;
  /** @商品备注 */
  productLanguage?: string;
  /** @seo描述 */
  productMetaDescription?: string;
  /** @seo关键字 */
  productMetaKeyword?: string;
  /** @seo标题 */
  productMetaTitle?: string;
  /** @主属性是否需要配图 */
  productNeedOptionImage?: string;
  /** @子商品是否需要配图 */
  productNeedVariantImage?: string;
  /** @商品备注 */
  productNote?: string;
  /** @商品价格 */
  productPrice?: number;
  /** @是否上架商品 */
  productPublished?: string;
  /** @是否需要物流 */
  productRequiresShipping?: string;
  /** @商品状态 0-不可用状态 1-可用状态 2-商品信息未完善 */
  productStatus?: string;
  /** @标签ID */
  productTags?: TagDto[];
  /** @是否收税 */
  productTaxable?: string;
  /** @商品标题 */
  productTitle?: string;
  /** @供应商名称 */
  productVendor?: string[];
  /** @乐观锁版本号 */
  revision?: number;
  /** @商品spu */
  spu?: string;
  /** @商户ID */
  storeId?: string;
  /** @商品SKU集合 */
  variants?: VariantPutDto[];
};
export type Sort = {
  field?: string;
  isAsc?: boolean;
};
export type Sort1 = {
  /** @排序字段名称 */
  field?: string;
  /** @是否升序 true: 升序 false: 降序 */
  isAsc?: boolean;
};
export type TagDto = {
  /** @最新版本号 */
  latestVersion?: number;
  /** @乐观锁 */
  revision?: number;
  /** @标签ID */
  tagId?: string;
  /** @标签名称 */
  tagName?: string;
  /** @标签位置 */
  tagPosition?: number;
  /** @标签状态;0-不可用 1-可用 */
  tagStatus?: string;
  /** @版本号 */
  version?: number;
};
export type TagVo = {
  createdAt?: number;
  createdBy?: string;
  latestVersion?: number;
  revision?: number;
  storeId?: string;
  tagId?: string;
  tagName?: string;
  tagPosition?: number;
  tagStatus?: string;
  updatedAt?: number;
  updatedBy?: string;
  version?: number;
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
export type VariantInfo = {
  productId?: string;
  variantId?: string;
};
export type VariantInfoVo = {
  categoryIds?: string[];
  imageAlt?: string;
  imageHeight?: string;
  imageSrc?: string;
  imageWidth?: string;
  productId?: string;
  productInventoryPolicy?: string;
  productInventoryTracking?: string;
  productTitle?: string;
  sku?: string;
  variantCurrency?: string;
  variantId?: string;
  variantOptions?: string;
  variantOriginalPrice?: number;
  variantSellingPrice?: number;
  variantWeighUnit?: string;
  variantWeight?: number;
  version?: number;
};
export type VariantListVo = {
  variantId?: string;
  variantInventoryQuantity?: number;
  variantOptions?: string;
  variantSellingPrice?: number;
};
export type VariantOrderInfoDto = {
  checkoutToken?: string;
  orderItems?: VariantOrderItemDto[];
  orderNumber?: string;
};
export type VariantOrderItemDto = {
  checkoutToken?: string;
  productId?: string;
  productInventoryPolicy?: string;
  productInventoryTracking?: string;
  quantity?: number;
  sku?: string;
  variantId?: string;
};
export type VariantPostDto = {
  /** @子商品图片备注 */
  imageAlt?: string;
  /** @子商品图片高度 */
  imageHeight?: string;
  /** @子商品图片ID */
  imageId?: string;
  /** @子商品图片地址 */
  imageSrc?: string;
  /** @子商品图片宽度 */
  imageWidth?: string;
  /** @子商品位置 */
  position?: number;
  /** @SKU */
  sku?: string;
  /** @商户ID */
  storeId?: string;
  /** @子商品条形码 */
  variantBarcode?: string;
  /** @子商品成本价 */
  variantCostPrice?: number;
  /** @货币单位 */
  variantCurrency?: string;
  /** @子商品高度 */
  variantHeight?: number;
  /** @子商品可用库存 */
  variantInventoryQuantity?: number;
  /** @子商品长度 */
  variantLength?: number;
  /** @子商品锁定库存 */
  variantLockInventoryQuantity?: number;
  /** @子商品备注 */
  variantNote?: string;
  /** @子商品动态属性 */
  variantOptions?: string;
  /** @子商品原价 */
  variantOriginalPrice?: number;
  /** @子商品售价 */
  variantSellingPrice?: number;
  /** @子商品已售库存 */
  variantSoldInventoryQuantity?: number;
  /** @子商品状态 0--不可用 1--可用 */
  variantStatus?: string;
  /** @子商品名称 */
  variantTitle?: string;
  /** @子商品重量单位 */
  variantWeighUnit?: string;
  /** @子商品重量 */
  variantWeight?: number;
  /** @子商品商品ID */
  variantWidth?: number;
};
export type VariantPutDto = {
  /** @子商品图片备注 */
  imageAlt?: string;
  /** @子商品图片高度 */
  imageHeight?: string;
  /** @子商品图片ID */
  imageId?: string;
  /** @子商品图片地址 */
  imageSrc?: string;
  /** @子商品图片宽度 */
  imageWidth?: string;
  /** @子商品位置 */
  position?: number;
  /** @商品ID */
  productId?: string;
  /** @SKU */
  sku?: string;
  /** @商户ID */
  storeId?: string;
  /** @子商品条形码 */
  variantBarcode?: string;
  /** @子商品成本价 */
  variantCostPrice?: number;
  /** @货币单位 */
  variantCurrency?: string;
  /** @子商品高度 */
  variantHeight?: number;
  /** @子商品ID */
  variantId?: string;
  /** @子商品可用库存 */
  variantInventoryQuantity?: number;
  /** @子商品长度 */
  variantLength?: number;
  /** @子商品可用库存 */
  variantLockInventoryQuantity?: number;
  /** @子商品备注 */
  variantNote?: string;
  /** @子商品动态属性 */
  variantOptions?: string;
  /** @子商品原价 */
  variantOriginalPrice?: number;
  /** @子商品售价 */
  variantSellingPrice?: number;
  /** @子商品已售库存 */
  variantSoldInventoryQuantity?: number;
  /** @子商品状态 0--不可用 1--可用 */
  variantStatus?: string;
  /** @子商品名称 */
  variantTitle?: string;
  /** @子商品重量单位 */
  variantWeighUnit?: string;
  /** @子商品重量 */
  variantWeight?: number;
  /** @子商品宽度 */
  variantWidth?: number;
  /** @版本号 */
  version?: number;
};
export type VariantQuery = {
  variantInfos?: VariantInfo[];
};
export type FenYeFanHuiDuiXiangProductEsListVo = {
  /** @是否还有下一页 */
  hasNextPage?: boolean;
  /** @当前页码 */
  pageNum?: number;
  /** @每页记录数 */
  pageSize?: number;
  /** @记录数 */
  records?: ProductEsListVo[];
  /** @总记录数 */
  total?: number;
};
export type FenYeFanHuiDuiXiangProductListVo = {
  /** @是否还有下一页 */
  hasNextPage?: boolean;
  /** @当前页码 */
  pageNum?: number;
  /** @每页记录数 */
  pageSize?: number;
  /** @记录数 */
  records?: ProductListVo[];
  /** @总记录数 */
  total?: number;
};
export type TongYiFanHuiDuiXiangImportProgressVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ImportProgressVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangImportResultVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ImportResultVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListImageUploadVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ImageUploadVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListProductListVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ProductListVo[];
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
export type TongYiFanHuiDuiXiangListVariantListVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: VariantListVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangProductStatisticsVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ProductStatisticsVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangQueryProductDto = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: QueryProductDto;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangint = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: number;
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
export type TongYiFanHuiDuiXiangFenYeFanHuiDuiXiangProductListVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: FenYeFanHuiDuiXiangProductListVo;
  /** @返回信息 */
  msg?: string;
};
