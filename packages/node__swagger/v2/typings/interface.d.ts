import { CommonFiled } from './filed'
export interface InterfaceOptions {
  /**
   * 接口名称
   */
  name: string
  /**
   * 所有字段
   */
  properties: CommonFiled[]
}
export interface FiledProperty {
  jsonDocs?: string[] | string
  name: string
  type: string
  required?: boolean
}