/* eslint-disable */

/**
 * @swagger 2.0
 * @description <div style='font-size:14px;color:red;'>Enchant Branding Global RESTful APIs</div>
 * @version 2.0
 * @title Enchant Branding Global
 * @basePath /admin-api/ebg-idaas-web
 * @see http://43.129.65.194:3000/api/plugin/exportSwagger?type=OpenAPIV2&pid=17&status=all&isWiki=false
 * @author sfe
 * @throws 🈲 > 禁止手动修改
 */

import http from "@/utils/http";
import { AxiosRequestConfig } from "axios";
import * as SwaggerType from "@/swagger/types/.mock.business.type";

const baseURL = import.meta.env.VITE_APP_BASE_API as string;

/**
 * @name 查询当前登录人的所有公司列表
 * @method POST
 */
export function postCompanyListCompanyAuthInfo(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListCompanyAuthInfo>;
  const url = `/company/listCompanyAuthInfo`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", ...config });
}

/**
 * @name 全量更新这个权限的所有资源
 * @method GET
 */
export function getEbgPermissionResourceList(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListResourceListVo>;
  const url = `/ebg/permissionResource/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 全量更新这个权限的所有资源
 * @method PUT
 */
export function putEbgPermissionResourceUpdatePermissionResource(data: SwaggerType.UpdatePermissionResourceDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/ebg/permissionResource/updatePermissionResource`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 获取认证结果
 * @method POST
 */
export function postGetAuthResult(data: SwaggerType.AuthDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.AuthResult>;
  const url = `/getAuthResult`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 重置密码
 * @method PUT
 */
export function putPasswordReset(data: SwaggerType.ResetPasswordDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangLoginVo>;
  const url = `/password/reset`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 发送重置密码连接
 * @method POST
 */
export function postPasswordSendResetPassword(data: SwaggerType.SendResetPasswordDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/password/sendResetPassword`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 修改密码
 * @method PUT
 */
export function putPasswordUpdate(data: SwaggerType.UpdatePasswordDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/password/update`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 权限列表
 * @method GET
 */
export function getPermissionList(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPermissionGroupVo>;
  const url = `/permission/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 获取用户权限
 * @method GET
 */
export function getPermissionPermissionDetail(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangUserPermissionDetailVo>;
  const url = `/permission/permissionDetail`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 角色创建
 * @method POST
 */
export function postRoleCreate(data: SwaggerType.RoleDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/role/create`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 获取角色详情
 * @method GET
 */
export function getRoleGetDetailRoleId(query: SwaggerType.RoleIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangRoleDetailVo>;
  const url = `/role/getDetail/${query.roleId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 获取角色列表
 * @method GET
 */
export function getRoleList(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListListRoleVo>;
  const url = `/role/list`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 角色修改
 * @method PUT
 */
export function putRoleUpdate(data: SwaggerType.RoleDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/role/update`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}

/**
 * @name 登录
 * @method POST
 */
export function postSessionLogin(data: SwaggerType.LoginDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangLoginVo>;
  const url = `/session/login`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 退出登录
 * @method POST
 */
export function postSessionLogout(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/session/logout`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", ...config });
}

/**
 * @name 注册
 * @method POST
 */
export function postSessionRegister(data: SwaggerType.RegisterDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/session/register`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 发送注册短信
 * @method POST
 */
export function postSmsSendRegisterSms(data: SwaggerType.SendSmsDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/sms/sendRegisterSms`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 员工创建
 * @method POST
 */
export function postStaffCreate(data: SwaggerType.StaffDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/staff/create`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 删除员工
 * @method DELETE
 */
export function deleteStaffDeleteStaffId(query: SwaggerType.StaffIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/staff/delete/${query.staffId}`;
  return http.request<ResponseType>({ baseURL, url, method: "DELETE", ...config });
}

/**
 * @name 获取员工详情
 * @method GET
 */
export function getStaffGetDetailStaffId(query: SwaggerType.StaffIdPath, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangStaffDetailVo>;
  const url = `/staff/getDetail/${query.staffId}`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 店铺管理顶部导航栏员工信息
 * @method GET
 */
export function getStaffGetLoginStaffInfo(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangLoginStaffInfoVo>;
  const url = `/staff/getLoginStaffInfo`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 公司管理顶部导航栏员工信息
 * @method GET
 */
export function getStaffGetLoginStaffInfo4Company(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangLoginStaffInfo4CompanyVo>;
  const url = `/staff/getLoginStaffInfo4Company`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 获取员工列表
 * @method POST
 */
export function postStaffList(data: SwaggerType.ListStaffQuery, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangPageListStaffVo>;
  const url = `/staff/list`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", data, ...config });
}

/**
 * @name 获取超级管理员信息
 * @method GET
 */
export function getStaffSuperAdminInfo(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangSuperAdminInfoVo>;
  const url = `/staff/superAdminInfo`;
  return http.request<ResponseType>({ baseURL, url, method: "GET", ...config });
}

/**
 * @name 员工修改
 * @method PUT
 */
export function putStaffUpdate(data: SwaggerType.StaffDto, config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangobject>;
  const url = `/staff/update`;
  return http.request<ResponseType>({ baseURL, url, method: "PUT", data, ...config });
}
