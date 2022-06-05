/**
 * @title Swagger Petstore
 * @description This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
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
export interface GetPetFindByTagsQuery {
  /** @description Tags to filter by */
  tags: string | string[];
}
export interface GetPetPetIdPath {
  /** @description ID of pet to return */
  petId: number;
}
export interface PostPetPetIdPath {
  /** @description ID of pet that needs to be updated */
  petId: number;
}
export interface PostPetPetIdFormData {
  /** @description Updated name of the pet */
  name?: string;
  /** @description Updated status of the pet */
  status?: string;
}
export interface DeletePetPetIdHeader {
  api_key?: string;
  [key: string]: any;
}
export interface DeletePetPetIdPath {
  /** @description Pet id to delete */
  petId: number;
}
export interface PostPetPetIdUploadImagePath {
  /** @description ID of pet to update */
  petId: number;
}
export interface PostPetPetIdUploadImageFormData {
  /** @description Additional data to pass to server */
  additionalMetadata?: string;
  /** @description file to upload */
  file?: any;
}
export interface PostStoreOrderBody {
  /** @description order placed for purchasing the pet */
  body: Order;
}
export interface GetStoreOrderOrderIdPath {
  /** @description ID of pet that needs to be fetched */
  orderId: number;
}
export interface DeleteStoreOrderOrderIdPath {
  /** @description ID of the order that needs to be deleted */
  orderId: number;
}
export interface PostUserBody {
  /** @description Created user object */
  body: User;
}
export interface PostUserCreateWithArrayBody {
  /** @description List of user object */
  body: User[];
}
export interface PostUserCreateWithListBody {
  /** @description List of user object */
  body: User[];
}
export interface GetUserLoginQuery {
  /** @description The user name for login */
  username: string;
  /** @description The password for login in clear text */
  password: string;
}
export interface GetUserUsernamePath {
  /** @description The name that needs to be fetched. Use user1 for testing.  */
  username: string;
}
export interface PutUserUsernamePath {
  /** @description name that need to be updated */
  username: string;
}
export interface PutUserUsernameBody {
  /** @description Updated user object */
  body: User;
}
export interface DeleteUserUsernamePath {
  /** @description The name that needs to be deleted */
  username: string;
}
export interface Order {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  /** @description Order Status */
  status?: string;
  complete?: boolean;
}
export interface Category {
  id?: number;
  name?: string;
}
export interface User {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  /** @description User Status */
  userStatus?: number;
}
export interface Tag {
  id?: number;
  name?: string;
}
export interface Pet {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  /** @description pet status in the store */
  status?: string;
}
export interface ApiResponse {
  code?: number;
  type?: string;
  message?: string;
}
