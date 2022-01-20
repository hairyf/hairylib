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

import http from "@/utils/http";
import { AxiosRequestConfig } from "axios";
import * as SwaggerType from "@/swagger/types/.mock.business.type";

const baseURL = import.meta.env.VITE_APP_BASE_API as string;

/**
 * @name 保存
 * @method POST
 */
export function postAdPixels(data: SwaggerType.AdPixelsDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/ad/pixels`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 更新
 * @method PUT
 */
export function putAdPixels(data: SwaggerType.AdPixelsDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/ad/pixels`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 配置列表
 * @method GET
 */
export function getAdPixelsConf(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListAdPixelsDto>;
  const url = `/ad/pixels/conf`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name B端列表
 * @method GET
 */
export function getAdPixelsList(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangAdPixelsListVo>;
  const url = `/ad/pixels/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 详情
 * @method GET
 */
export function getAdPixelsPixelsId(query: SwaggerType.PixelsIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangAdPixelsVo>;
  const url = `/ad/pixels/${query.pixelsId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 删除
 * @method DELETE
 */
export function deleteAdPixelsPixelsId(query: SwaggerType.PixelsIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/ad/pixels/${query.pixelsId}`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", ...config });
}

/**
 * @name 获取订单动态表头
 * @method GET
 */
export function getAdminStoreDynamicHeader(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListStoreTableDynamicHeaderVo>;
  const url = `/admin/store/dynamic/header`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 更新订单动态表头
 * @method PUT
 */
export function putAdminStoreDynamicHeader(data: SwaggerType.StoreTableDynamicHeaderDto[], config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/admin/store/dynamic/header`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name batchQueryStoreList
 * @method GET
 */
export function getBatchQueryStoreList(params: SwaggerType.BatchQueryStoreListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListStoreVo>;
  const url = `/batchQueryStoreList`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 5. 获取指定类型（分组）标签
 * @method GET
 */
export function getCommonTypeTags(query: SwaggerType.TypePath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListTagVo>;
  const url = `/common/${query.type}/tags`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 1. 创建标签
 * @method POST
 */
export function postCommonTypeTags(query: SwaggerType.TypePath, data: SwaggerType.TagDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTagDto>;
  const url = `/common/${query.type}/tags`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 3. 删除标签, 批量(tagIds: id1,id2,id3)
 * @method DELETE
 */
export function deleteCommonTypeTagsTagIds(query: SwaggerType.TagIdsTypePath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangboolean>;
  const url = `/common/${query.type}/tags/${query.tagIds}`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", ...config });
}

/**
 * @name 4. 获取一个标签
 * @method GET
 */
export function getCommonTypeTagsTagId(query: SwaggerType.TagIdTypePath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTagVo>;
  const url = `/common/${query.type}/tags/${query.tagId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name createCompany
 * @method POST
 */
export function postCompanyCreateCompany(data: SwaggerType.CreateCompanyDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<boolean>;
  const url = `/company/createCompany`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name listCompanyByIds
 * @method POST
 */
export function postCompanyListCompanyByIds(data: string[], config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.CompanyDto[]>;
  const url = `/company/listCompanyByIds`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 公司主页面板
 * @method POST
 */
export function postCompanyPanel(data: SwaggerType.StoreQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangCompany4StoreVo>;
  const url = `/company/panel`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name getCountryAndStateWithIso2Code
 * @method GET
 */
export function getCountriesCountryCodeStatesStateIso2(query: SwaggerType.CountryCodeStateIso2Path, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.CountryStateVo>;
  const url = `/countries/${query.countryCode}/states/${query.stateIso2}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 创建自定义页面
 * @method POST
 */
export function postCustomPage(data: SwaggerType.CustomPageCreateDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/custom_page`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 删除自定义页面
 * @method DELETE
 */
export function deleteCustomPage(data: SwaggerType.CustomPageDeleteDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/custom_page`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", data, ...config });
}

/**
 * @name 校验标题是否可用
 * @method POST
 */
export function postCustomPageCheckTitle(data: SwaggerType.TitleCheckDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangboolean>;
  const url = `/custom_page/check_title`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 回显自定义页面
 * @method GET
 */
export function getCustomPageEchoCustomPageId(query: SwaggerType.CustomPageIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangCustomPageEchoVo>;
  const url = `/custom_page/echo/${query.customPageId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 分页查询自定义页面
 * @method POST
 */
export function postCustomPageList(data: SwaggerType.CustomPageListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangIPageCustomPageListVo>;
  const url = `/custom_page/list`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 修改自定义页面
 * @method PUT
 */
export function putCustomPageCustomPageId(query: SwaggerType.CustomPageIdPath, data: SwaggerType.CustomPageUpdateDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/custom_page/${query.customPageId}`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 根据域名获取商家id
 * @method GET
 */
export function getGetStoreIdByDomain(params: SwaggerType.GetStoreIdByDomainQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangStoreIdDto>;
  const url = `/getStoreIdByDomain`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name batchQueryStoreList
 * @method GET
 */
export function getInnerApiStoreBatchQueryStoreList(params: SwaggerType.InnerApiStoreBatchQueryStoreListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.StoreApiVo[]>;
  const url = `/innerApi/store/batchQueryStoreList`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name getStoreBaseInfo
 * @method GET
 */
export function getInnerApiStoreStoreId(query: SwaggerType.StoreIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.StoreBaseInfoApiDto>;
  const url = `/innerApi/store/${query.storeId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name getStoreMabangConfig
 * @method GET
 */
export function getMabangConfigStoreId(query: SwaggerType.StoreIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.MabangConfigVo>;
  const url = `/mabang/config/${query.storeId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 保存
 * @method POST
 */
export function postMenuBar(data: SwaggerType.MenuBarSettingSaveDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/menu/bar`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 更新
 * @method PUT
 */
export function putMenuBar(data: SwaggerType.MenuBarSettingSaveDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/menu/bar`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 列表
 * @method GET
 */
export function getMenuBarListShowPosition(query: SwaggerType.ShowPositionPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListMenuBarSettingVo>;
  const url = `/menu/bar/list/${query.showPosition}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 详情
 * @method GET
 */
export function getMenuBarMenuId(query: SwaggerType.MenuIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangMenuBarSettingDetailVo>;
  const url = `/menu/bar/${query.menuId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 删除
 * @method DELETE
 */
export function deleteMenuBarMenuId(query: SwaggerType.MenuIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/menu/bar/${query.menuId}`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", ...config });
}

/**
 * @name 获取店铺订单超时
 * @method GET
 */
export function getOrderTimeOutSetting(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<number>;
  const url = `/order/time/out/setting`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 9. 查询店铺套餐信息
 * @method GET
 */
export function getPackagePlan(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPackagePlanListVo>;
  const url = `/package-plan`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 查询结账设置
 * @method GET
 */
export function getSettingsCheckout(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangCheckoutSettingDto>;
  const url = `/settings/checkout`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 保存结账设置
 * @method POST
 */
export function postSettingsCheckout(data: SwaggerType.CheckoutSettingDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/settings/checkout`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 修改结账设置
 * @method PUT
 */
export function putSettingsCheckout(data: SwaggerType.CheckoutSettingDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/settings/checkout`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 查询是否存在邮费方案
 * @method GET
 */
export function getShippingGroupCheckFlowSetting(query: SwaggerType.FlowSettingPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangboolean>;
  const url = `/shipping/group/check/${query.flowSetting}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 添加自定义分组
 * @method POST
 */
export function postShippingGroupCustom(data: SwaggerType.ShippingGroupDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/shipping/group/custom`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 查询区域列表组合信息
 * @method GET
 */
export function getShippingGroupList(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangShippingGroupPageInfoVo>;
  const url = `/shipping/group/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 区域分组优先级变更
 * @method PATCH
 */
export function patchShippingGroupPriorityTargetGroupId(query: SwaggerType.TargetGroupIdPath, data: Record<string, any>, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/shipping/group/priority/${query.targetGroupId}`;
  return http.request<ResponseType>({ baseURL, url, method: "PATCH", data, ...config });
}

/**
 * @name 添加区域
 * @method POST
 */
export function postShippingGroupRegion(data: SwaggerType.ShippingRegionDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/shipping/group/region`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 获取物流方案
 * @method POST
 */
export function postShippingGroupRegionRatePlanClient(data: SwaggerType.ClientShippingRatePlanDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangClientShippingRatePlanVo>;
  const url = `/shipping/group/region/rate-plan/client`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name getAdminShippingRatePlan
 * @method GET
 */
export function getShippingGroupRegionRatePlanClientShippingRatePlanId(params: SwaggerType.ShippingGroupRegionRatePlanClientShippingRatePlanIdQuery, query: SwaggerType.ShippingRatePlanIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.ShippingRatePlanInfoVo>;
  const url = `/shipping/group/region/rate-plan/client/${query.shippingRatePlanId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name B端获取物流方案（通过方案id）
 * @method POST
 */
export function postShippingGroupRegionRatePlanClientShippingRatePlanId(query: SwaggerType.ShippingRatePlanIdPath, data: SwaggerType.ClientValidateShippingRatePlanDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangShippingRatePlanInfo>;
  const url = `/shipping/group/region/rate-plan/client/${query.shippingRatePlanId}`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 修改区域接口
 * @method PUT
 */
export function putShippingGroupRegionShippingRegionId(query: SwaggerType.ShippingRegionIdPath, data: SwaggerType.ShippingRegionDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/shipping/group/region/${query.shippingRegionId}`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 删除区域
 * @method DELETE
 */
export function deleteShippingGroupRegionShippingRegionId(query: SwaggerType.ShippingRegionIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/shipping/group/region/${query.shippingRegionId}`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", ...config });
}

/**
 * @name 区域@添加邮费方案
 * @method POST
 */
export function postShippingGroupRegionShippingRegionIdRatePlan(query: SwaggerType.ShippingRegionIdPath, data: SwaggerType.ShippingRatePlanDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/shipping/group/region/${query.shippingRegionId}/rate-plan`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 区域@更新邮费方案
 * @method PUT
 */
export function putShippingGroupRegionShippingRegionIdRatePlanRatePlanId(query: SwaggerType.RatePlanIdShippingRegionIdPath, data: SwaggerType.ShippingRatePlanDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/shipping/group/region/${query.shippingRegionId}/rate-plan/${query.ratePlanId}`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 区域@查询指定邮费方案
 * @method GET
 */
export function getShippingGroupRegionShippingRegionIdRatePlanRetePlanId(query: SwaggerType.RetePlanIdShippingRegionIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangShippingRatePlanVo>;
  const url = `/shipping/group/region/${query.shippingRegionId}/rate-plan/${query.retePlanId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 区域@移除邮费方案
 * @method DELETE
 */
export function deleteShippingGroupRegionShippingRegionIdRatePlanRetePlanId(query: SwaggerType.RetePlanIdShippingRegionIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/shipping/group/region/${query.shippingRegionId}/rate-plan/${query.retePlanId}`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", ...config });
}

/**
 * @name 查询指定分组信息
 * @method GET
 */
export function getShippingGroupShippingGroupId(query: SwaggerType.ShippingGroupIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangShippingGroupVo>;
  const url = `/shipping/group/${query.shippingGroupId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 修改自定义分组
 * @method PUT
 */
export function putShippingGroupShippingGroupIdCustom(query: SwaggerType.ShippingGroupIdPath, data: SwaggerType.ShippingGroupDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/shipping/group/${query.shippingGroupId}/custom`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 删除自定义分组
 * @method DELETE
 */
export function deleteShippingGroupShippingGroupIdCustom(query: SwaggerType.ShippingGroupIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/shipping/group/${query.shippingGroupId}/custom`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", ...config });
}

/**
 * @name 1. 创建店铺
 * @method POST
 */
export function postStore(data: SwaggerType.StoreDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangStoreIdVo>;
  const url = `/store`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 5. 查询店铺基本信息
 * @method GET
 */
export function getStoreBaseInfo(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangStoreBaseInfoVo>;
  const url = `/store/baseInfo`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 4. 修改店铺基本信息
 * @method PATCH
 */
export function patchStoreBaseInfo(data: SwaggerType.StoreBaseInfoDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangStoreIdVo>;
  const url = `/store/baseInfo`;
  return http.request<ResponseType>({ baseURL, url, method: "PATCH", data, ...config });
}

/**
 * @name 7. 查询店铺相关常量信息
 * @method GET
 */
export function getStoreConstantList(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangStoreConstantVo>;
  const url = `/store/constant/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 3. 查询店铺列表
 * @method POST
 */
export function postStoreQuery(data: SwaggerType.StoreQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPageStoreVo>;
  const url = `/store/query`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 8. 店铺搜索列表（下拉框搜索使用）
 * @method GET
 */
export function getStoreQueryCombo(params: SwaggerType.StoreQueryComboQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListStoreComboVo>;
  const url = `/store/query/combo`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 6. 查询一个店铺信息
 * @method GET
 */
export function getStoreStoreId(query: SwaggerType.StoreIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangStoreVo>;
  const url = `/store/${query.storeId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 2. 修改店铺
 * @method PUT
 */
export function putStoreStoreId(query: SwaggerType.StoreIdPath, data: SwaggerType.StoreDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangStoreIdVo>;
  const url = `/store/${query.storeId}`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name getStoreIdByDomain
 * @method GET
 */
export function getStoreGetStoreIdByDomain(params: SwaggerType.StoreGetStoreIdByDomainQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.StoreIdDto>;
  const url = `/store=/getStoreIdByDomain`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 获取国家、地区列表信息
 * @method GET
 */
export function getWorldCountries(params: SwaggerType.WorldCountriesQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListCountry2Vo>;
  const url = `/world/countries`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 获取州、省列表信息
 * @method GET
 */
export function getWorldCountryCodeStates(query: SwaggerType.CountryCodePath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListState2Vo>;
  const url = `/world/${query.countryCode}/states`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 获取城市列表信息
 * @method GET
 */
export function getWorldCountryCodeStateCodeCities(query: SwaggerType.CountryCodeStateCodePath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListCity2Vo>;
  const url = `/world/${query.countryCode}/${query.stateCode}/cities`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}
