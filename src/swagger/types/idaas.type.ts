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

/** @响应infer数据取值 */
export type Response<T> = T extends { data?: infer V } ? V : T;
/** @删除员工 */
export type StaffIdPath = {
  /** @staffId */
  staffId: string;
};
/** @获取角色详情 */
export type RoleIdPath = {
  /** @roleId */
  roleId: string;
};
export type AuthDto = {
  companyId?: string;
  storeId?: string;
  tag?: string;
  token?: string;
  type?: string;
  url?: string;
};
export type AuthResult = {
  errCode?: string;
  errMsg?: string;
  error?: string;
  hasAuth?: boolean;
  hasPermissionStoreIds?: string[];
  haveLogin?: boolean;
  permissionScope?: string;
  userId?: string;
};
export type CompanyAuthInfo = {
  /** @公司id */
  companyId?: string;
  /** @公司名称 */
  name?: string;
  /** @这个公司下这个人的拥有店铺权限数量数量 */
  storeCount?: number;
};
export type ListRoleVo = {
  /** @是否是默认权限，默认权限不可修改 */
  defaulted?: boolean;
  /** @角色id */
  id?: string;
  /** @角色名称 */
  name?: string;
  /** @备注信息 */
  remark?: string;
  /** @角色范围: store,company */
  scope?: string;
  /** @角色类型 default,custom,template */
  type?: string;
};
export type ListStaffQuery = {
  /** @搜索关键字 */
  keyword?: string;
  /** @当前页码 */
  pageNum?: number;
  /** @每页记录数 */
  pageSize?: number;
  /** @角色id */
  roleId?: string;
  /** @商家id */
  storeId?: string;
};
export type ListStaffVo = {
  /** @email */
  email?: string;
  /** @员工id */
  id?: string;
  /** @姓名 */
  name?: string;
  /** @角色个数 */
  roleCount?: number;
  /** @角色id */
  roleId?: string;
  /** @角色名称 */
  roleName?: string;
  /** @店铺数量 */
  storeCount?: number;
  /** @店铺id */
  storeId?: string;
  /** @店铺名称 */
  storeName?: string;
  /** @店铺域名 */
  storeUrl?: string;
};
/** @登录需要的参数 */
export type LoginDto = {
  /** @email */
  email?: string;
  /** @密码 */
  password?: string;
};
export type LoginStaffInfo4CompanyVo = {
  /** @email */
  email?: string;
  /** @姓名 */
  name?: string;
  /** @角色名称 */
  roleName?: string;
  /** @用户id */
  userId?: string;
};
export type LoginStaffInfoVo = {
  /** @email */
  email?: string;
  /** @是否有公司角色 */
  hasCompanyRole?: boolean;
  /** @姓名 */
  name?: string;
  /** @当前店铺角色名称 */
  roleName?: string;
  /** @用户id */
  userId?: string;
};
/** @认证结果 */
export type LoginVo = {
  /** @token */
  token?: string;
  /** @用户id */
  userId?: string;
};
export type OrderItem = {
  asc?: boolean;
  column?: string;
};
export type PageListStaffVo = {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: ListStaffVo[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};
export type PermissionGroupVo = {
  /** @公司权限 */
  companyPermissionList?: PermissionListVo[];
  /** @店铺权限 */
  storePermissionList?: PermissionListVo[];
};
/** @所有权限对象 */
export type PermissionListVo = {
  /** @子权限列表 */
  childPermissionList?: PermissionListVo[];
  /** @是否是默认权限 */
  defaulted?: boolean;
  /** @权限id */
  id?: string;
  /** @是否是权限 */
  isAuth?: boolean;
  /** @权限名称 */
  name?: string;
};
export type RegisterDto = {
  /** @验证码 */
  code?: string;
  /** @公司名称 */
  companyName?: string;
  /** @邮箱 */
  email?: string;
  /** @姓名 */
  name?: string;
  /** @密码 */
  password?: string;
  /** @手机号码 */
  phone?: string;
};
export type ResetPasswordDto = {
  /** @新密码 */
  password?: string;
  /** @重置密码令牌 */
  resetPassToken?: string;
};
export type ResourceInfo = {
  /** @资源标识 */
  tag?: string;
  /** @资源类型 */
  type?: string;
  /** @路径 */
  url?: string;
};
export type ResourceListVo = {
  /** @是否是默认权限 */
  defaulted?: boolean;
  /** @权限名称 */
  name?: string;
  /** @父级名称 */
  parentName?: string;
  permissionId?: string;
  resourceList?: ResourceInfo[];
  /** @角色范围: store,company */
  scope?: string;
};
export type RoleDetailVo = {
  /** @公司id */
  companyId?: string;
  /** @角色名称 */
  name?: string;
  /** @所有权限id */
  permissionIdList?: string[];
  /** @备注信息 */
  remark?: string;
  /** @角色范围: store,company */
  scope?: string;
  /** @角色类型 default,custom */
  type?: string;
};
/** @Role对象 */
export type RoleDto = {
  /** @角色id */
  id?: string;
  /** @角色名称 */
  name?: string;
  /** @所有选择的权限id */
  permissionList?: string[];
  /** @备注信息 */
  remark?: string;
  /** @角色范围,store:商家范围，company:公司范围 */
  scope?: string;
};
export type SendResetPasswordDto = {
  email?: string;
};
export type SendSmsDto = {
  /** @手机号码 */
  phone?: string;
};
export type StaffDetailVo = {
  /** @email */
  email?: string;
  /** @姓名 */
  name?: string;
  /** @员工角色集合 */
  staffRoleList?: StaffRoleInfo[];
  /** @用户id */
  userId?: string;
};
/** @Staff对象 */
export type StaffDto = {
  email?: string;
  /** @员工id */
  id?: string;
  /** @姓名 */
  name?: string;
  /** @员工角色列表 */
  staffRoleList?: StaffRoleDto[];
};
export type StaffRoleDto = {
  /** @角色id */
  roleId?: string;
  /** @店铺id */
  storeId?: string;
};
export type StaffRoleInfo = {
  /** @公司id */
  companyId?: string;
  /** @角色id */
  roleId?: string;
  /** @角色名称 */
  roleName?: string;
  /** @商家id */
  storeId?: string;
};
export type SuperAdminInfoVo = {
  /** @邮箱 */
  email?: string;
  /** @名称 */
  name?: string;
};
export type UpdatePasswordDto = {
  /** @新密码 */
  newPassword?: string;
  /** @原密码 */
  oldPassword?: string;
};
export type UpdatePermissionResourceDto = {
  /** @权限id */
  id?: string;
  /** @前端未完善前可用这个名字后端自动匹配权限id */
  name?: string;
  resourceInfoList?: ResourceInfo[];
};
export type UserPermissionDetailVo = {
  /** @所有按钮url(编号) */
  buttonUrls?: string[];
  /** @所有权限资源url（路由地址） */
  menuUrls?: string[];
};
export type TongYiFanHuiDuiXiangListCompanyAuthInfo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: CompanyAuthInfo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListListRoleVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ListRoleVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangListResourceListVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: ResourceListVo[];
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangLoginStaffInfo4CompanyVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: LoginStaffInfo4CompanyVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangLoginStaffInfoVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: LoginStaffInfoVo;
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
export type TongYiFanHuiDuiXiangPageListStaffVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: PageListStaffVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangPermissionGroupVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: PermissionGroupVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangRoleDetailVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: RoleDetailVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangStaffDetailVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: StaffDetailVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangSuperAdminInfoVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: SuperAdminInfoVo;
  /** @返回信息 */
  msg?: string;
};
export type TongYiFanHuiDuiXiangUserPermissionDetailVo = {
  /** @返回状态码 */
  code?: string;
  /** @返回数据 */
  data?: UserPermissionDetailVo;
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
