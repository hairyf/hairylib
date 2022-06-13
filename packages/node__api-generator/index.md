---
category: 'Node Utils'
---


# Api Generator

根据 OpenAPI-V2(swagger) 数据源（url/json/test）解析 AST，生成 Api 与 Types，暂不支持 JavaScript 生成

暂时仅支持 OpenAPI-V2 源解析与 AxiosTs Compiler，欢迎提交贡献另外的源解析，具体了解 [Running Process](#running-process)

脚手架[@hairy/cli/#apigenerator-code](https://hairylib.com/node__cli/#apigenerator-code)

## Install

```
pnpm add -D @hairy/api-generator
```

## Usage

~~~typescript
import { openAPIWebClientGenerator } from '@hairy/swagger'

openAPIWebClientGenerator({
  input: { uri: 'http://..../api-docs' },
  baseURL: 'import.meta.env.VITE_APP_BASE_API',
  responseType: 'T extends { data?: infer V } ? V : void',
  output: { main: 'src/api/index.ts', type: 'src/api/index.type.ts', cwd: '' }
})
~~~

### src/api/index.ts

~~~typescript
/**
 * @title Swagger Petstore
 * @description This is a sample server Petstore server.  You can find out more about
 * @swagger 2.0
 * @version 1.0.0
 */

import http, { AxiosRequestConfig } from "axios";
import * as OpenAPITypes from "./index.type";

const baseURL = import.meta.env.VITE_APP_BASE_API;

/**
 * @summary Add a new pet to the store
 * @method post
 * @tags pet
 * @consumes application/json; application/xml
 * @produces application/xml; application/json
 */
export function postPet(data: OpenAPITypes.PostPetBody, config?: AxiosRequestConfig) {
  const url = `/pet`;
  return http.request<OpenAPITypes.Response<void>>({ url, method: "post", baseURL, data, ...config });
}
/**
 * @summary uploads an image
 * @method post
 * @tags pet
 * @consumes multipart/form-data
 * @produces application/json
 */
export function postPetPetIdUploadImage(data: FormData, paths: OpenAPITypes.PostPetPetIdUploadImagePath, config?: AxiosRequestConfig) {
  const url = `/pet/${paths?.petId}/uploadImage`;
  return http.request<OpenAPITypes.Response<OpenAPITypes.ApiResponse>>({ url, method: "post", baseURL, data, ...config });
}
/**
 * @summary Find pet by ID
 * @description Returns a single pet
 * @method get
 * @tags pet
 * @produces application/xml; application/json
 */
export function getPetPetId(paths: OpenAPITypes.GetPetPetIdPath, config?: AxiosRequestConfig) {
  const url = `/pet/${paths?.petId}`;
  return http.request<OpenAPITypes.Response<OpenAPITypes.Pet>>({ url, method: "get", baseURL, ...config });
}
// ...
~~~

### src/api/index.type.ts

~~~typescript
/**
 * @title Swagger Petstore
 * @description This is a sample server Petstore server.  You can find out more about.
 * @swagger 2.0
 * @version 1.0.0
 */

export type Response<T> = T;

export interface PostPetBody {
  /** @description Pet object that needs to be added to the store */
  body: Pet;
}
export interface PutPetBody {
  /** @description Pet object that needs to be added to the store */
  body: Pet;
}
export interface GetPetFindByStatusQuery {
  /**
   * @description Status values that need to be considered for filter
   * @param ?status=available,pending,sold | status=available&status=pending&status=sold
   */
  status: string | ("available" | "pending" | "sold")[];
}
// ...
~~~

## Running Process

```typescript
const process = configs.map(
  pPipe(
    // 外模式 - 配置转换
    (config) => parserTsConfig(config),
    // 外模式 - 数据原
    (configRead) => dataSource(configRead),
    // 外模式 - 转模式
    (configRead) => JSONParser(configRead),
    // 模式   - 转内模式
    (configRead) => tsCompiler(configRead),
    // 内模式 - 转视图
    (configRead) => generate(configRead),
    // 视图   - 输出文件
    (configRead) => dest(configRead)
  )
)
await Promise.all(process)
```
