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

import http from "@/utils/http";
import { AxiosRequestConfig } from "axios";
import * as SwaggerType from "@/swagger/types/.mock.business.type";

const baseURL = import.meta.env.VITE_APP_BASE_API as string;

/**
 * @name 通过属性查询卡片表对象
 * @method GET
 */
export function getBlock(params: SwaggerType.BlockQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangBlockVo>;
  const url = `/block`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 新增卡片表
 * @method POST
 */
export function postBlock(data: SwaggerType.BlockDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangBlockVo>;
  const url = `/block`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 更新卡片表
 * @method PUT
 */
export function putBlock(data: SwaggerType.BlockDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangBlockVo>;
  const url = `/block`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 批量删除卡片表
 * @method DELETE
 */
export function deleteBlock(data: string[], config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangBlockVo>;
  const url = `/block`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", data, ...config });
}

/**
 * @name 批量新增卡片表
 * @method POST
 */
export function postBlockBatch(data: SwaggerType.BlockDto[], config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangBlockVo>;
  const url = `/block/batch`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 通过属性查询卡片表列表
 * @method GET
 */
export function getBlockList(params: SwaggerType.BlockListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListBlockVo>;
  const url = `/block/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 通过Id查询卡片表对象
 * @method GET
 */
export function getBlockId(query: SwaggerType.IdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangBlockVo>;
  const url = `/block/${query.id}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 通过ID删除卡片表
 * @method DELETE
 */
export function deleteBlockId(query: SwaggerType.IdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangBlockVo>;
  const url = `/block/${query.id}`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", ...config });
}

/**
 * @name 测试开放接口
 * @method GET
 */
export function getOpenApiHello(params: SwaggerType.OpenApiHelloQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangstring>;
  const url = `/open/api/hello`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 订单详情接口
 * @method GET
 */
export function getOpenApiOrderDetail(params: SwaggerType.OpenApiOrderDetailQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangOrderDetailListVo>;
  const url = `/open/api/order/detail`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 标记发货接口
 * @method POST
 */
export function postOpenApiOrderFulfillment(data: SwaggerType.LuYueDingDanFaHuo, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/open/api/order/fulfillment`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 更新物流单号接口
 * @method PUT
 */
export function putOpenApiOrderFulfillment(data: SwaggerType.LuYueDingDanFaHuo, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiang>;
  const url = `/open/api/order/fulfillment`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 订单详情分页列表
 * @method GET
 */
export function getOpenApiOrderList(params: SwaggerType.OpenApiOrderListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangFenYeFanHuiDuiXiangOrderDetailListVo>;
  const url = `/open/api/order/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 获取AppToken
 * @method GET
 */
export function getOpenAuthGetAppToken(params: SwaggerType.OpenAuthGetAppTokenQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangAppTokenVo>;
  const url = `/open/auth/getAppToken`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 获取授权码
 * @method GET
 */
export function getOpenAuthGetAuthCode(params: SwaggerType.OpenAuthGetAuthCodeQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangOauthCodeVo>;
  const url = `/open/auth/getAuthCode`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 测试开放接口
 * @method GET
 */
export function getOpenAuthHello(params: SwaggerType.OpenAuthHelloQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangstring>;
  const url = `/open/auth/hello`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 刷新AppToken
 * @method GET
 */
export function getOpenAuthRefreshAppToken(params: SwaggerType.OpenAuthRefreshAppTokenQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangAppTokenVo>;
  const url = `/open/auth/refreshAppToken`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 查询模版列表
 * @method POST
 */
export function postOpenTemplateListAll(params: SwaggerType.OpenTemplateListAllQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TemplateVo[]>;
  const url = `/open/template/list/all`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", params, ...config });
}

/**
 * @name 通过属性查询页面表对象
 * @method GET
 */
export function getPage(params: SwaggerType.PageQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPageVo>;
  const url = `/page`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 新增页面表
 * @method POST
 */
export function postPage(data: SwaggerType.PageDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPageVo>;
  const url = `/page`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 更新页面表
 * @method PUT
 */
export function putPage(data: SwaggerType.PageDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPageVo>;
  const url = `/page`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 批量删除页面表
 * @method DELETE
 */
export function deletePage(data: string[], config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPageVo>;
  const url = `/page`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", data, ...config });
}

/**
 * @name 批量新增页面表
 * @method POST
 */
export function postPageBatch(data: SwaggerType.PageDto[], config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPageVo>;
  const url = `/page/batch`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 通过属性查询页面表列表
 * @method GET
 */
export function getPageList(params: SwaggerType.PageListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListPageVo>;
  const url = `/page/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 解析模板
 * @method GET
 */
export function getPageParse(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<void>;
  const url = `/page/parse`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 通过Id查询页面表对象
 * @method GET
 */
export function getPageId(query: SwaggerType.IdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPageVo>;
  const url = `/page/${query.id}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 通过ID删除页面表
 * @method DELETE
 */
export function deletePageId(query: SwaggerType.IdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPageVo>;
  const url = `/page/${query.id}`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", ...config });
}

/**
 * @name 通过属性查询全局卡片表对象
 * @method GET
 */
export function getSchemaBlock(params: SwaggerType.SchemaBlockQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangSchemaBlockVo>;
  const url = `/schemaBlock`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 新增全局卡片表
 * @method POST
 */
export function postSchemaBlock(data: SwaggerType.SchemaBlockDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangSchemaBlockVo>;
  const url = `/schemaBlock`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 更新全局卡片表
 * @method PUT
 */
export function putSchemaBlock(data: SwaggerType.SchemaBlockDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangSchemaBlockVo>;
  const url = `/schemaBlock`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 批量删除全局卡片表
 * @method DELETE
 */
export function deleteSchemaBlock(data: string[], config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangSchemaBlockVo>;
  const url = `/schemaBlock`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", data, ...config });
}

/**
 * @name 批量新增全局卡片表
 * @method POST
 */
export function postSchemaBlockBatch(data: SwaggerType.SchemaBlockDto[], config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangSchemaBlockVo>;
  const url = `/schemaBlock/batch`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 通过属性查询全局卡片表列表
 * @method GET
 */
export function getSchemaBlockList(params: SwaggerType.SchemaBlockListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListSchemaBlockVo>;
  const url = `/schemaBlock/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 通过Id查询全局卡片表对象
 * @method GET
 */
export function getSchemaBlockId(query: SwaggerType.IdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangSchemaBlockVo>;
  const url = `/schemaBlock/${query.id}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 通过ID删除全局卡片表
 * @method DELETE
 */
export function deleteSchemaBlockId(query: SwaggerType.IdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangSchemaBlockVo>;
  const url = `/schemaBlock/${query.id}`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", ...config });
}

/**
 * @name 通过属性查询组件表对象
 * @method GET
 */
export function getSection(params: SwaggerType.SectionQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangSectionVo>;
  const url = `/section`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 新增组件表
 * @method POST
 */
export function postSection(data: SwaggerType.SectionDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangSectionVo>;
  const url = `/section`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 更新组件表
 * @method PUT
 */
export function putSection(data: SwaggerType.SectionDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangSectionVo>;
  const url = `/section`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 批量删除组件表
 * @method DELETE
 */
export function deleteSection(data: string[], config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangSectionVo>;
  const url = `/section`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", data, ...config });
}

/**
 * @name 批量新增组件表
 * @method POST
 */
export function postSectionBatch(data: SwaggerType.SectionDto[], config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangSectionVo>;
  const url = `/section/batch`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 通过属性查询组件表列表
 * @method GET
 */
export function getSectionList(params: SwaggerType.SectionListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListSectionVo>;
  const url = `/section/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 通过Id查询组件表对象
 * @method GET
 */
export function getSectionId(query: SwaggerType.IdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangSectionVo>;
  const url = `/section/${query.id}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 通过ID删除组件表
 * @method DELETE
 */
export function deleteSectionId(query: SwaggerType.IdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangSectionVo>;
  const url = `/section/${query.id}`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", ...config });
}

/**
 * @name 通过属性查询模版信息表对象
 * @method GET
 */
export function getTemplate(params: SwaggerType.TemplateQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTemplateVo>;
  const url = `/template`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 新增模版信息表
 * @method POST
 */
export function postTemplate(data: SwaggerType.TemplateDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTemplateVo>;
  const url = `/template`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 更新模版信息表
 * @method PUT
 */
export function putTemplate(data: SwaggerType.TemplateDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTemplateVo>;
  const url = `/template`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 批量删除模版信息表
 * @method DELETE
 */
export function deleteTemplate(data: string[], config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTemplateVo>;
  const url = `/template`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", data, ...config });
}

/**
 * @name 批量新增模版信息表
 * @method POST
 */
export function postTemplateBatch(data: SwaggerType.TemplateDto[], config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTemplateVo>;
  const url = `/template/batch`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 通过属性查询模版信息表列表
 * @method GET
 */
export function getTemplateList(params: SwaggerType.TemplateListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListTemplateVo>;
  const url = `/template/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 通过Id查询模版信息表对象
 * @method GET
 */
export function getTemplateId(query: SwaggerType.IdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTemplateVo>;
  const url = `/template/${query.id}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 通过ID删除模版信息表
 * @method DELETE
 */
export function deleteTemplateId(query: SwaggerType.IdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTemplateVo>;
  const url = `/template/${query.id}`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", ...config });
}

/**
 * @name 通过属性查询模板组件表对象
 * @method GET
 */
export function getTemplateSection(params: SwaggerType.TemplateSectionQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTemplateSectionVo>;
  const url = `/templateSection`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 新增模板组件表
 * @method POST
 */
export function postTemplateSection(data: SwaggerType.TemplateSectionDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTemplateSectionVo>;
  const url = `/templateSection`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 更新模板组件表
 * @method PUT
 */
export function putTemplateSection(data: SwaggerType.TemplateSectionDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTemplateSectionVo>;
  const url = `/templateSection`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 批量删除模板组件表
 * @method DELETE
 */
export function deleteTemplateSection(data: string[], config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTemplateSectionVo>;
  const url = `/templateSection`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", data, ...config });
}

/**
 * @name 批量新增模板组件表
 * @method POST
 */
export function postTemplateSectionBatch(data: SwaggerType.TemplateSectionDto[], config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTemplateSectionVo>;
  const url = `/templateSection/batch`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 通过属性查询模板组件表列表
 * @method GET
 */
export function getTemplateSectionList(params: SwaggerType.TemplateSectionListQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListTemplateSectionVo>;
  const url = `/templateSection/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", params, ...config });
}

/**
 * @name 通过Id查询模板组件表对象
 * @method GET
 */
export function getTemplateSectionId(query: SwaggerType.IdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTemplateSectionVo>;
  const url = `/templateSection/${query.id}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 通过ID删除模板组件表
 * @method DELETE
 */
export function deleteTemplateSectionId(query: SwaggerType.IdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangTemplateSectionVo>;
  const url = `/templateSection/${query.id}`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", ...config });
}

/**
 * @name 创建应用
 * @method POST
 */
export function postWebApplication(data: SwaggerType.ApplicationAddDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangboolean>;
  const url = `/web/application`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 查询接口
 * @method GET
 */
export function getWebApplicationAppKey(query: SwaggerType.AppKeyPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangApplication>;
  const url = `/web/application/${query.appKey}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 新增接口
 * @method POST
 */
export function postWebDeveloper(data: SwaggerType.DeveloperAddDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangboolean>;
  const url = `/web/developer`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}
