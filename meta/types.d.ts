/** 扩展包清单 */
interface PackageManifest {
  /**
   * 扩展包名称
   */
  name: string
  /**
   * 扩展包描述
   */
  display: string
  /**
   * 扩展包作者
   */
  author?: string
  /**
   * 扩展包描述信息
   */
  description?: string
  /**
   * rollup 打包忽略依赖
   */
  external?: string[]
  /**
   * rollup 依赖全局命名
   */
  globals?: Record<string, string>
  /**
   * 是否弃用
   */
  deprecated?: boolean
  /**
   * rollup 打包模块是否使用 iife 模式
   */
  iife?: boolean
  /**
   * 是否列入打包，默认为 true
   */
  build?: boolean
}
