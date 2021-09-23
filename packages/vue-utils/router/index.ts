/*
 * @Author: Mr.Mao
 * @LastEditors: Zhilong
 * @Date: 2021-02-24 18:18:59
 * @LastEditTime: 2021-08-06 10:50:13
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { RouteRecordRaw } from 'vue-router'
import { downloadBlobFile } from '@hairy/browser'
/** 定义 RouteMeta 类型 */
declare module 'vue-router' {
  interface RouteMeta {
    /** 完整路径信息 */
    completePath?: string
    /** 路径映射 */
    pathMaps?: string[]
  }
}

/**
 * 递归处理路由高亮信息
 * @param routes 当前路由列表
 * @param upperPath 上层路由路径
 */
export const calculRouterActive = (routes: RouteRecordRaw[], upperPath?: string) => {
  let pathMaps: string[] = []
  const recursion = (routes: RouteRecordRaw[], upperPath?: string) => {
    typeof upperPath !== 'string' && (pathMaps = [])
    for (const index in routes) {
      const route = routes[index]
      // 拼接路由绝对路径
      const completePath = upperPath
        ? `${upperPath == '/' ? '/' : upperPath + '/'}${route.path}`
        : route.path
      // 记录路由路径信息
      pathMaps.push(completePath)
      // 添加路由路径信息
      if (route.meta) {
        route.meta.pathMaps = [...pathMaps]
        route.meta.completePath = completePath
      } else {
        route.meta = { pathMaps: [...pathMaps], completePath }
      }
      // 再次递归
      if (Array.isArray(route.children)) {
        recursion(route.children, completePath)
      }
      pathMaps = pathMaps.slice(0, pathMaps.indexOf(completePath))
    }
  }
  recursion(routes, upperPath)
}

/**
 * 递归输出当前路由权限表
 * @param routes 当前路由列表
 */
export const outputRoutes = (routes: RouteRecordRaw[]) => {
  const recursion = (rs: RouteRecordRaw[]) => {
    return rs.map((route) => {
      const newRoute: any = {
        name: route.meta?.title as string
      }
      if (route.children) {
        newRoute.children = recursion(route.children)
      }
      return newRoute
    })
  }
  downloadBlobFile(JSON.stringify(recursion(routes)), 'routers.json')
}

/**
 * 递归对比路由权限表, 返回路由列表
 * @param baseRoutes 基本路由
 * @param surfaceRoutes 对比路由信息
 * @returns 比较路由列表
 */
export const compareRoutes = (
  baseRoutes: RouteRecordRaw[] = [],
  surfaceRoutes: RouteRecordRaw[] = []
) => {
  const filterRoutes = baseRoutes.filter((brte) => {
    const srte = surfaceRoutes.find((v) => brte.name === v.name)
    if (brte.children && brte.children?.length > 0) {
      brte.children = compareRoutes(brte.children, srte?.children)
    }
    return srte
  })
  return filterRoutes
}

/**
 * 递归设置默认重定向地址
 * @param routes 当前路由表
 * @param upperPath 上层路由路径
 */
export const setDefaultRoutes = (routes: RouteRecordRaw[] = [], upperPath?: string) => {
  // 二层递归获取子项拼接路径
  const getChildrenCompletePath = (route: RouteRecordRaw): string => {
    if (route?.children) {
      if (route.path == '/') {
        return getChildrenCompletePath(route.children[0])
      }
      return `${route.path}/${getChildrenCompletePath(route.children[0])}`
    }
    return route.path
  }
  routes.forEach((route) => {
    if (!(route.children && route.children.length > 0)) return false
    // 当前完整地址
    const completePath = upperPath
      ? `${upperPath == '/' ? '' : upperPath + '/'}${route.path}`
      : route.path
    // 当前拼接符
    const splic = route.path === '/' ? '' : '/'
    route.redirect = `${completePath}${splic}${getChildrenCompletePath(route.children[0])}`
    // 再次递归设置重定向地址
    setDefaultRoutes(route.children, completePath)
  })
}

/**
 * 设置当前路由表默认路由路径 / => 第一路径
 */
export const setDefaultHomeRoute = (routes: RouteRecordRaw[] = []) => {
  const existHomeRoute = routes.some((v) => v.path === '/')
  if (existHomeRoute) return false
  routes.unshift({ path: '/', redirect: routes[0].path })
}
