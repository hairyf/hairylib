/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-21 12:34:29
 */
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
  /**
   * 是否自定义打包规则 (使用包内部的打包命令)
   */
  internalBuild?: boolean
  /**
   * 是否手动导入
   */
  manualImport?: boolean
  /**
   * 自定义导入文件
   */
  importFile?: string
  /**
   * 打包是否合并文件, 默认为 true
   */
  mergeBuild?: boolean
}

interface HairyFunction {
  /** 方法名 */
  name: string
  /** 所属包 */
  package: string
  /** 更新时间 */
  lastUpdated: number
  /** 方法分类 */
}
