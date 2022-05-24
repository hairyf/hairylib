import { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'

/**
 * 判断当前路由是否存在目标路由链表
 * 需要提前调用 handleMetaPathMaps
 * @param current
 * @param target
 * @returns
 */
export const someOf = (
  current: RouteLocationNormalizedLoaded,
  target: RouteRecordRaw | RouteLocationNormalizedLoaded
) => {
  const fullPath = target.meta?.fullPath || (target as any)?.fullPath
  return current.meta.pathMaps?.includes(fullPath) || false
}

/**
 * 递归对比路由权限表(name 字段), 返回路由交集列表
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
 * 递归输出当前路由元信息表
 * @param routes 当前路由列表
 */
export const getNestedMeta = (routes: RouteRecordRaw[]) => {
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
