import { RouteRecordRaw } from 'vue-router'

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
export const routesWithMetaPathMaps = (routes: RouteRecordRaw[], upperPath?: string) => {
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
 * 定义默认重定向地址
 * @if route.children && route.children.length > 0 && !route.redirect
 * @param routes 当前路由表
 * @param upperPath 上层路由路径
 */
export const routesWithRedirects = (routes: RouteRecordRaw[] = [], upperPath?: string) => {
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
    routesWithRedirects(route.children, fullPath)
  })
}

/**
 * 设置当前路由表默认路由路径 / => 第一路径
 * path: / 未设置，则添加 { path: '/', redirect: routes[0].path }
 */
export const routesWithDefaultRedirect = (routes: RouteRecordRaw[] = []) => {
  const existHomeRoute = routes.some((v) => v.path === '/')
  if (existHomeRoute) return false
  routes.unshift({ path: '/', redirect: routes[0].path })
}
