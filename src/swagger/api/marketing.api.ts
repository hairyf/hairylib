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

import http from "@/utils/http";
import { AxiosRequestConfig } from "axios";
import * as SwaggerType from "@/swagger/types/.mock.business.type";

const baseURL = import.meta.env.VITE_APP_BASE_API as string;

/**
 * @name 优惠码删除
 * @method DELETE
 */
export function deletePromotionCode(data: SwaggerType.PromotionCodeUpdeteDataStatusDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/promotion/code`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", data, ...config });
}

/**
 * @name 获取自动生成优惠码
 * @method GET
 */
export function getPromotionCodeAutoCreatedCodeStoreId(query: SwaggerType.StoreIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/promotion/code/auto/created/code/${query.storeId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 优惠码禁用
 * @method PUT
 */
export function putPromotionCodeBatchDisable(data: SwaggerType.PromotionCodeUpdeteDataStatusDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/promotion/code/batch/disable`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 优惠码启用
 * @method PUT
 */
export function putPromotionCodeBatchEnable(data: SwaggerType.PromotionCodeUpdeteDataStatusDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/promotion/code/batch/enable`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 检查优惠码是否重复
 * @method GET
 */
export function getPromotionCodeCheckSameCodeStoreIdPromotionCodeTitle(query: SwaggerType.PromotionCodeStoreIdTitlePath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/promotion/code/check/same/code/${query.storeId}/${query.promotionCode}/${query.title}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 优惠码创建
 * @method POST
 */
export function postPromotionCodeCreate(data: SwaggerType.PromotionCodeSettingsDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/promotion/code/create`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 优惠码更新详情数据接口
 * @method GET
 */
export function getPromotionCodeDetailPromotionId(query: SwaggerType.PromotionIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPromotionCodeDetailVo>;
  const url = `/promotion/code/detail/${query.promotionId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 优惠码列表
 * @method GET
 */
export function getPromotionCodeList(params: SwaggerType.PromotionCodeListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPagePromotionCodeSettingsListVo>;
  const url = `/promotion/code/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 优惠码tab统计数据
 * @method GET
 */
export function getPromotionCodeListTab(params: SwaggerType.PromotionCodeListTabQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangActivityListTabVo>;
  const url = `/promotion/code/list/tab`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 优惠码预览
 * @method GET
 */
export function getPromotionCodePageReviewPromotionId(query: SwaggerType.PromotionIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPromotionCodeReviewVo>;
  const url = `/promotion/code/page/review/${query.promotionId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 单张优惠码统计数据
 * @method GET
 */
export function getPromotionCodeStatisticsPromotionId(query: SwaggerType.PromotionIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPromotionCodeStatisticsVo>;
  const url = `/promotion/code/statistics/${query.promotionId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 优惠码更新
 * @method PUT
 */
export function putPromotionCodeUpdate(data: SwaggerType.PromotionCodeSettingsDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/promotion/code/update`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 创建满减活动
 * @method POST
 */
export function postReductionActivity(data: SwaggerType.ManJianHuoDongDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/reduction/activity`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 更新满减活动
 * @method PUT
 */
export function putReductionActivity(data: SwaggerType.ManJianHuoDongDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/reduction/activity`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 批量删除
 * @method DELETE
 */
export function deleteReductionActivity(params: SwaggerType.ReductionActivityQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/reduction/activity`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", params, ...config });
}

/**
 * @name 活动关联分类列表
 * @method POST
 */
export function postReductionActivityAssociateCategoryList(data: SwaggerType.FenLeiHuoDongLieBiaoChaXunTiaoJian, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListFenLeiHuoDongVo>;
  const url = `/reduction/activity/associate/category/list`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 获取商品关联的活动
 * @method GET
 */
export function getReductionActivityAssociateProductId(query: SwaggerType.ProductIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangYouXiaoHuoDong>;
  const url = `/reduction/activity/associate/${query.productId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 关联的分类树
 * @method GET
 */
export function getReductionActivityCategoryTrees(params: SwaggerType.ReductionActivityCategoryTreesQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListTreestring>;
  const url = `/reduction/activity/category/trees`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 检查活动名称是否存在(1存在，0不存在)
 * @method GET
 */
export function getReductionActivityCheck(params: SwaggerType.ReductionActivityCheckQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangstring>;
  const url = `/reduction/activity/check`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 批量启用/禁用
 * @method PUT
 */
export function putReductionActivityEnabled(data: SwaggerType.ManJianHuoDongQiYongJinYongDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/reduction/activity/enabled`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 满减活动分页列表
 * @method GET
 */
export function getReductionActivityList(params: SwaggerType.ReductionActivityListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPageManJianHuoDongVo>;
  const url = `/reduction/activity/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 满减活动tab统计数据
 * @method GET
 */
export function getReductionActivityListTab(params: SwaggerType.ReductionActivityListTabQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangActivityListTabVo>;
  const url = `/reduction/activity/list/tab`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 商品活动列表
 * @method POST
 */
export function postReductionActivityProductList(data: SwaggerType.ShangPinHuoDongLieBiaoChaXunTiaoJian, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangFenYeFanHuiDuiXiangShangPinHuoDongVo>;
  const url = `/reduction/activity/product/list`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 获取是否允许全场商品
 * @method GET
 */
export function getReductionActivityScopeFull(params: SwaggerType.ReductionActivityScopeFullQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangstring>;
  const url = `/reduction/activity/scope/full`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 获取进行中活动列表
 * @method GET
 */
export function getReductionActivityValidList(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListYouXiaoHuoDong>;
  const url = `/reduction/activity/valid/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 根据满减活动id获取满减活动详情
 * @method GET
 */
export function getReductionActivityId(query: SwaggerType.IdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangManJianHuoDongVo>;
  const url = `/reduction/activity/${query.id}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}
