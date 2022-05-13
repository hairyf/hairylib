/*
 * @Author: Mr.Mao
 * @LastEditors: Zhilong
 * @Date: 2021-02-24 18:18:59
 * @LastEditTime: 2021-08-06 10:50:13
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'

/** 定义 RouteMeta 类型 */
declare module 'vue-router' {
  interface RouteMeta {
    /** 完整路径信息 */
    fullPath?: string
    /** 路径映射 */
    pathMaps?: string[]
  }
}

/**
 * 递归处理路由高亮信息
 * @param routes 当前路由列表
 * @param upperPath 上层路由路径
 */
export const handleMetaPathMaps = (routes: RouteRecordRaw[], upperPath?: string) => {
  let pathMaps: string[] = []
  const deepHandler = (routes: RouteRecordRaw[], upperPath?: string) => {
    typeof upperPath !== 'string' && (pathMaps = [])
    for (const index in routes) {
      const route = routes[index]
      // 拼接路由绝对路径
      const fullPath = upperPath ? `${upperPath == '/' ? '/' : upperPath + '/'}${route.path}` : route.path
      // 记录路由路径信息
      pathMaps.push(fullPath)
      // 添加路由路径信息
      if (route.meta) {
        route.meta.pathMaps = [...pathMaps]
        route.meta.fullPath = fullPath
      } else {
        route.meta = { pathMaps: [...pathMaps], fullPath }
      }
      // 再次递归
      if (Array.isArray(route.children)) {
        deepHandler(route.children, fullPath)
      }
      pathMaps = pathMaps.slice(0, pathMaps.indexOf(fullPath))
    }
  }
  deepHandler(routes, upperPath)
}

/**
 * 递归输出当前路由元信息表
 * @param routes 当前路由列表
 */
export const getDeepMetaTable = (routes: RouteRecordRaw[]) => {
  const deepHandler = (rs: RouteRecordRaw[]) => {
    return rs.map((route) => {
      const newRoute: any = route.meta
      if (route.children) {
        newRoute.children = deepHandler(route.children)
      }
      return newRoute
    })
  }
  return JSON.stringify(deepHandler(routes))
}

/**
 * 递归对比路由权限表, 返回路由交集列表
 * @param baseRoutes 基本路由
 * @param surfaceRoutes 对比路由信息
 * @returns 比较路由列表
 */
export const intersection = (baseRoutes: RouteRecordRaw[] = [], surfaceRoutes: RouteRecordRaw[] = []) => {
  const filterRoutes = baseRoutes.filter((base) => {
    const surface = surfaceRoutes.find((v) => base.name === v.name)
    if (base.children && base.children?.length > 0) {
      base.children = intersection(base.children, surface?.children)
    }
    return surface
  })
  return filterRoutes
}

/**
 * 定义默认重定向地址
 * @if route.children && route.children.length > 0 && !route.redirect
 * @param routes 当前路由表
 * @param upperPath 上层路由路径
 */
export const handleRedirects = (routes: RouteRecordRaw[] = [], upperPath?: string) => {
  // 二层递归获取子项拼接路径
  const getChildrenFullPath = (route: RouteRecordRaw): string => {
    if (route?.children) {
      if (route.path == '/') {
        return getChildrenFullPath(route.children[0])
      }
      return `${route.path}/${getChildrenFullPath(route.children[0])}`
    }
    return route.path
  }
  routes.forEach((route) => {
    if (!(route.children && route.children.length > 0) || route.redirect) return false
    // 当前完整地址
    const fullPath = upperPath ? `${upperPath == '/' ? '' : upperPath + '/'}${route.path}` : route.path
    // 当前拼接符
    const splic = route.path === '/' ? '' : '/'
    route.redirect = `${fullPath}${splic}${getChildrenFullPath(route.children[0])}`
    // 再次递归设置重定向地址
    handleRedirects(route.children, fullPath)
  })
}

/**
 * 设置当前路由表默认路由路径 / => 第一路径
 * path: / 未设置，则添加 { path: '/', redirect: routes[0].path }
 */
export const handleDefaultRedirect = (routes: RouteRecordRaw[] = []) => {
  const existHomeRoute = routes.some((v) => v.path === '/')
  if (existHomeRoute) return false
  routes.unshift({ path: '/', redirect: routes[0].path })
}

/**
 * 判断当前路由是否存在目标路由链表
 * @param current
 * @param target
 * @returns
 */
export const someOf = (current: RouteLocationNormalizedLoaded, target: RouteRecordRaw) => {
  return current.meta.pathMaps?.includes(target.meta?.fullPath || '') || false
}
