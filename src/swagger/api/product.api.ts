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

import http from "@/utils/http";
import { AxiosRequestConfig } from "axios";
import * as SwaggerType from "@/swagger/types/.mock.business.type";

const baseURL = import.meta.env.VITE_APP_BASE_API as string;

/**
 * @name 查询产品分类列表
 * @method GET
 */
export function getAdminCategories(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/admin/categories`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 添加产品分类
 * @method POST
 */
export function postAdminCategories(data: SwaggerType.CategoryDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/admin/categories`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 查询产品分类下拉列表
 * @method GET
 */
export function getAdminCategoriesDropdown(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/admin/categories/dropdown`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 根据id获取产品父级分类名称
 * @method GET
 */
export function getAdminCategoriesParentsCategoryId(query: SwaggerType.CategoryIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/admin/categories/parents/${query.categoryId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 根据id获取产品分类
 * @method GET
 */
export function getAdminCategoriesCategoryId(query: SwaggerType.CategoryIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/admin/categories/${query.categoryId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 修改产品分类
 * @method PUT
 */
export function putAdminCategoriesCategoryId(query: SwaggerType.CategoryIdPath, data: SwaggerType.CategoryDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/admin/categories/${query.categoryId}`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 删除产品分类
 * @method DELETE
 */
export function deleteAdminCategoriesCategoryId(query: SwaggerType.CategoryIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/admin/categories/${query.categoryId}`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", ...config });
}

/**
 * @name 分类启用或者关闭状态
 * @method PATCH
 */
export function patchAdminCategoriesCategoryId(query: SwaggerType.CategoryIdPath, data: SwaggerType.CategoryPatchDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/admin/categories/${query.categoryId}`;
  return http.request<ResponseType>({ baseURL, url, method: "PATCH", data, ...config });
}

/**
 * @name 检查一二级分类下新建分类是否存在产品
 * @method GET
 */
export function getAdminCategoriesCategoryIdCheckProduct(query: SwaggerType.CategoryIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/admin/categories/${query.categoryId}/check/product`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 分类下的产品迁移到子分类下
 * @method PATCH
 */
export function patchAdminCategoriesCategoryIdMigrations(query: SwaggerType.CategoryIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/admin/categories/${query.categoryId}/migrations`;
  return http.request<ResponseType>({ baseURL, url, method: "PATCH", ...config });
}

/**
 * @name 添加商品记录
 * @method POST
 */
export function postAdminProducts(data: SwaggerType.PostProductDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangstring>;
  const url = `/admin/products`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 更新商品记录
 * @method PUT
 */
export function putAdminProducts(data: SwaggerType.PutProductDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangint>;
  const url = `/admin/products`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 批量删除商品
 * @method DELETE
 */
export function deleteAdminProducts(data: SwaggerType.DeleteProductDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangint>;
  const url = `/admin/products`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", data, ...config });
}

/**
 * @name 查询关联商品
 * @method GET
 */
export function getAdminProductsAssociation(params: SwaggerType.AdminProductsAssociationQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListProductListVo>;
  const url = `/admin/products/association`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 批量修改商品分类
 * @method PUT
 */
export function putAdminProductsBatchCategories(data: SwaggerType.BatchUpdateCategoryDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/admin/products/batch/categories`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 批量修改商品价格
 * @method PUT
 */
export function putAdminProductsBatchPrice(data: SwaggerType.ProductPriceUpdateDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/admin/products/batch/price`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 复制商品记录
 * @method POST
 */
export function postAdminProductsCopyProductId(query: SwaggerType.ProductIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangint>;
  const url = `/admin/products/copy/${query.productId}`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", ...config });
}

/**
 * @name 导出商品
 * @method POST
 */
export function postAdminProductsExport(data: SwaggerType.ProductExportDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<void>;
  const url = `/admin/products/export`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 查询导入商品进度
 * @method GET
 */
export function getAdminProductsImport(params: SwaggerType.AdminProductsImportQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangImportProgressVo>;
  const url = `/admin/products/import`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 导入商品
 * @method POST
 */
export function postAdminProductsImport(params: SwaggerType.AdminProductsImportQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangImportResultVo>;
  const url = `/admin/products/import`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", params, ...config });
}

/**
 * @name B端商品列表
 * @method POST
 */
export function postAdminProductsList(data: SwaggerType.ProductListReq, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangFenYeFanHuiDuiXiangProductListVo>;
  const url = `/admin/products/list`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 批量修改商品上下架状态
 * @method PUT
 */
export function putAdminProductsPublishStatus(data: SwaggerType.PublishStatusUpdateDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/admin/products/publish_status`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 统计上下架信息
 * @method GET
 */
export function getAdminProductsStatistics(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangProductStatisticsVo>;
  const url = `/admin/products/statistics`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 列出SKU信息
 * @method GET
 */
export function getAdminProductsVariant(params: SwaggerType.AdminProductsVariantQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListVariantListVo>;
  const url = `/admin/products/variant`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 修改商品回显
 * @method GET
 */
export function getAdminProductsProductId(query: SwaggerType.ProductIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangQueryProductDto>;
  const url = `/admin/products/${query.productId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 添加标签信息
 * @method POST
 */
export function postAdminTags(data: SwaggerType.PostTagDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangstring>;
  const url = `/admin/tags`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 删除标签信息
 * @method DELETE
 */
export function deleteAdminTags(data: SwaggerType.DeleteTagDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangint>;
  const url = `/admin/tags`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", data, ...config });
}

/**
 * @name 标签列表
 * @method GET
 */
export function getAdminTagsListStoreId(query: SwaggerType.StoreIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListTagVo>;
  const url = `/admin/tags/list/${query.storeId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name decrementInventory
 * @method PUT
 */
export function putDecrementInventory(data: SwaggerType.VariantOrderInfoDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.InventoryInfoDto[]>;
  const url = `/decrementInventory`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 图片上传
 * @method POST
 */
export function postFilesImage(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListImageUploadVo>;
  const url = `/files/image`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", ...config });
}

/**
 * @name getActivityCategories
 * @method POST
 */
export function postGetActivityCategories(data: string[], config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.CategoryActivityDto[]>;
  const url = `/getActivityCategories`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name getCategoryList
 * @method GET
 */
export function getGetCategoryList(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.CategoryActivityNodeDto[]>;
  const url = `/getCategoryList`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name getCategoryTreeList
 * @method GET
 */
export function getGetCategoryTreeList(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.Treestring[]>;
  const url = `/getCategoryTreeList`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name getOrderItemProduct
 * @method GET
 */
export function getGetOrderItemProduct(params: SwaggerType.GetOrderItemProductQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.OrderItemProductVo>;
  const url = `/getOrderItemProduct`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name getProducts
 * @method POST
 */
export function postGetProducts(data: SwaggerType.ProductListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.FenYeFanHuiDuiXiangProductEsListVo>;
  const url = `/getProducts`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name getVariantsById
 * @method POST
 */
export function postGetVariantsById(data: SwaggerType.VariantQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<Record<string, any>>;
  const url = `/getVariantsById`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name inventoryCheck
 * @method POST
 */
export function postInventoryCheck(data: SwaggerType.VariantOrderInfoDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.InventoryInfoDto[]>;
  const url = `/inventory/check`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name lockInventory
 * @method PUT
 */
export function putLockInventory(data: SwaggerType.VariantOrderInfoDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.InventoryInfoDto[]>;
  const url = `/lock/inventory`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name unlockInventory
 * @method PUT
 */
export function putUnlockInventory(data: SwaggerType.VariantOrderInfoDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.InventoryInfoDto[]>;
  const url = `/unlock/inventory`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}
