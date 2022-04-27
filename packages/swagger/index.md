---
title: '@hairy/swagger'
category: 'Engineering'
---

# @hairy/swagger

根据 swagger 地址生成 Api 与 Types，暂不支持 JavaScript

## Install

`npm install @hairy/swagger`

## Usage

~~~typescript
import { swaggerWebClientGenerator } from '@hairy/swagger'

swaggerWebClientGenerator({
  uri: 'http://..../api-docs',
  baseURL: 'import.meta.env.VITE_APP_BASE_API',
  responseType: 'T extends { data?: infer V } ? V : void',
  output: { api: 'src/api/index.ts', type: 'src/api/index.type.ts', cwd: '' },
})
~~~

~~~typescript
// src/api/index.ts
/**
 * @swagger 2.0
 * @description <div style='font-size:14px;color:red;'>Enchant Branding Global RESTful APIs</div>
 * @version 2.0
 * @title Enchant Branding Global
 * @basePath /admin-api/ebg-idaas-web
 * @see http://dev-ebg.com/admin-api/ebg-idaas-web/v2/api-docs
 * @author sfe
 * @throws 🈲 > 禁止手动修改
 */

import http from "@/utils/http";
import { AxiosRequestConfig } from "axios";
import * as SwaggerType from "src/api/index.type.ts";

const baseURL = import.meta.env.VITE_APP_BASE_API;

/**
 * @name 查询当前登录人的所有公司列表
 * @method POST
 */
export function postCompanyListCompanyAuthInfo(config?: AxiosRequestConfig) {
  type ResponseType = SwaggerType.Response<SwaggerType.TongYiFanHuiDuiXiangListCompanyAuthInfo>;
  const url = `/company/listCompanyAuthInfo`;
  return http.request<ResponseType>({ baseURL, url, method: "POST", ...config });
}
// ...
~~~

~~~typescript
// src/api/type.ts
/**
 * @swagger 2.0
 * @description <div style='font-size:14px;color:red;'>Enchant Branding Global RESTful APIs</div>
 * @version 2.0
 * @title Enchant Branding Global
 * @basePath /admin-api/ebg-idaas-web
 * @see http://dev-ebg.com/admin-api/ebg-idaas-web/v2/api-docs
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
// ...
~~~


## Types

~~~typescript
interface SwaggerBuildConfig {
  /** @description 当前 Swagger 服务器配置地址 http://dev-ebg.com/api/ebg-order-app/v2/api-docs */
  uri: string;
  /** @description 当前接口基础地址, 一般可用于环境变量的定义 */
  baseURL?: string;
  /** @description 输出路径配置, 暂时只支持 ts 路径 */
  output?: {
    /** @default 'src/api/index.ts' */
    api?: string;
    /** @default 'src/api/index.type.ts' */
    type?: string;
    /** Node.js 进程的当前工作目录。 */
    cwd?: string;
  };
  /** @description 生成文件的导入类型 */
  import?: {
    /** @description 导入 axios 请求函数的别名地址 @default axios; */
    http?: string;
    /** @description 导入 types 生成类型的别名地址 @default output.type; */
    type?: string;
  };
  /**
   * @description 响应体的类型转换
   * @default T >>> type Response<T> = T >>> http.get<Response<Data>>('xxx')
   * @template `T extends { data?: infer V } ? V : void`
    */
  responseType?: string;
  /** swagger 携带请求参数 */
  requestConfig?: AxiosRequestConfig;
}
interface SwaggerWebClientGeneratorType {
  (config: SwaggerBuildConfig | SwaggerBuildConfig[]): Promise<void>;
  default: SwaggerBuildConfig;
}
~~~