/**
 * @title Swagger Petstore
 * @description This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
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
 * @summary Update an existing pet
 * @method put
 * @tags pet
 * @consumes application/json; application/xml
 * @produces application/xml; application/json
 */
export function putPet(data: OpenAPITypes.PutPetBody, config?: AxiosRequestConfig) {
  const url = `/pet`;
  return http.request<OpenAPITypes.Response<void>>({ url, method: "put", baseURL, data, ...config });
}
/**
 * @summary Finds Pets by status
 * @description Multiple status values can be provided with comma separated strings
 * @method get
 * @tags pet
 * @produces application/xml; application/json
 */
export function getPetFindByStatus(params: OpenAPITypes.GetPetFindByStatusQuery, config?: AxiosRequestConfig) {
  const url = `/pet/findByStatus`;
  return http.request<OpenAPITypes.Response<OpenAPITypes.Pet[]>>({ url, method: "get", baseURL, params, ...config });
}
/**
 * @summary Finds Pets by tags
 * @description Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
 * @method get
 * @tags pet
 * @produces application/xml; application/json
 */
export function getPetFindByTags(params: OpenAPITypes.GetPetFindByTagsQuery, config?: AxiosRequestConfig) {
  const url = `/pet/findByTags`;
  return http.request<OpenAPITypes.Response<OpenAPITypes.Pet[]>>({ url, method: "get", baseURL, params, ...config });
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
/**
 * @summary Updates a pet in the store with form data
 * @method post
 * @tags pet
 * @consumes application/x-www-form-urlencoded
 * @produces application/xml; application/json
 */
export function postPetPetId(data: FormData, paths: OpenAPITypes.PostPetPetIdPath, config?: AxiosRequestConfig) {
  const url = `/pet/${paths?.petId}`;
  return http.request<OpenAPITypes.Response<void>>({ url, method: "post", baseURL, data, ...config });
}
/**
 * @summary Deletes a pet
 * @method delete
 * @tags pet
 * @produces application/xml; application/json
 */
export function deletePetPetId(paths: OpenAPITypes.DeletePetPetIdPath, headers?: OpenAPITypes.DeletePetPetIdHeader, config?: AxiosRequestConfig) {
  const url = `/pet/${paths?.petId}`;
  return http.request<OpenAPITypes.Response<void>>({ url, method: "delete", baseURL, headers, ...config });
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
 * @summary Returns pet inventories by status
 * @description Returns a map of status codes to quantities
 * @method get
 * @tags store
 * @produces application/json
 */
export function getStoreInventory(config?: AxiosRequestConfig) {
  const url = `/store/inventory`;
  return http.request<OpenAPITypes.Response<Record<string, number>>>({ url, method: "get", baseURL, ...config });
}
/**
 * @summary Place an order for a pet
 * @method post
 * @tags store
 * @produces application/xml; application/json
 */
export function postStoreOrder(data: OpenAPITypes.PostStoreOrderBody, config?: AxiosRequestConfig) {
  const url = `/store/order`;
  return http.request<OpenAPITypes.Response<OpenAPITypes.Order>>({ url, method: "post", baseURL, data, ...config });
}
/**
 * @summary Find purchase order by ID
 * @description For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions
 * @method get
 * @tags store
 * @produces application/xml; application/json
 */
export function getStoreOrderOrderId(paths: OpenAPITypes.GetStoreOrderOrderIdPath, config?: AxiosRequestConfig) {
  const url = `/store/order/${paths?.orderId}`;
  return http.request<OpenAPITypes.Response<OpenAPITypes.Order>>({ url, method: "get", baseURL, ...config });
}
/**
 * @summary Delete purchase order by ID
 * @description For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors
 * @method delete
 * @tags store
 * @produces application/xml; application/json
 */
export function deleteStoreOrderOrderId(paths: OpenAPITypes.DeleteStoreOrderOrderIdPath, config?: AxiosRequestConfig) {
  const url = `/store/order/${paths?.orderId}`;
  return http.request<OpenAPITypes.Response<void>>({ url, method: "delete", baseURL, ...config });
}
/**
 * @summary Create user
 * @description This can only be done by the logged in user.
 * @method post
 * @tags user
 * @produces application/xml; application/json
 */
export function postUser(data: OpenAPITypes.PostUserBody, config?: AxiosRequestConfig) {
  const url = `/user`;
  return http.request<OpenAPITypes.Response<void>>({ url, method: "post", baseURL, data, ...config });
}
/**
 * @summary Creates list of users with given input array
 * @method post
 * @tags user
 * @produces application/xml; application/json
 */
export function postUserCreateWithArray(data: OpenAPITypes.PostUserCreateWithArrayBody, config?: AxiosRequestConfig) {
  const url = `/user/createWithArray`;
  return http.request<OpenAPITypes.Response<void>>({ url, method: "post", baseURL, data, ...config });
}
/**
 * @summary Creates list of users with given input array
 * @method post
 * @tags user
 * @produces application/xml; application/json
 */
export function postUserCreateWithList(data: OpenAPITypes.PostUserCreateWithListBody, config?: AxiosRequestConfig) {
  const url = `/user/createWithList`;
  return http.request<OpenAPITypes.Response<void>>({ url, method: "post", baseURL, data, ...config });
}
/**
 * @summary Logs user into the system
 * @method get
 * @tags user
 * @produces application/xml; application/json
 */
export function getUserLogin(params: OpenAPITypes.GetUserLoginQuery, config?: AxiosRequestConfig) {
  const url = `/user/login`;
  return http.request<OpenAPITypes.Response<string>>({ url, method: "get", baseURL, params, ...config });
}
/**
 * @summary Logs out current logged in user session
 * @method get
 * @tags user
 * @produces application/xml; application/json
 */
export function getUserLogout(config?: AxiosRequestConfig) {
  const url = `/user/logout`;
  return http.request<OpenAPITypes.Response<void>>({ url, method: "get", baseURL, ...config });
}
/**
 * @summary Get user by user name
 * @method get
 * @tags user
 * @produces application/xml; application/json
 */
export function getUserUsername(paths: OpenAPITypes.GetUserUsernamePath, config?: AxiosRequestConfig) {
  const url = `/user/${paths?.username}`;
  return http.request<OpenAPITypes.Response<OpenAPITypes.User>>({ url, method: "get", baseURL, ...config });
}
/**
 * @summary Updated user
 * @description This can only be done by the logged in user.
 * @method put
 * @tags user
 * @produces application/xml; application/json
 */
export function putUserUsername(data: OpenAPITypes.PutUserUsernameBody, paths: OpenAPITypes.PutUserUsernamePath, config?: AxiosRequestConfig) {
  const url = `/user/${paths?.username}`;
  return http.request<OpenAPITypes.Response<void>>({ url, method: "put", baseURL, data, ...config });
}
/**
 * @summary Delete user
 * @description This can only be done by the logged in user.
 * @method delete
 * @tags user
 * @produces application/xml; application/json
 */
export function deleteUserUsername(paths: OpenAPITypes.DeleteUserUsernamePath, config?: AxiosRequestConfig) {
  const url = `/user/${paths?.username}`;
  return http.request<OpenAPITypes.Response<void>>({ url, method: "delete", baseURL, ...config });
}
