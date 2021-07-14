import { RouteRecordRaw } from 'vue-router';
/** 定义 RouteMeta 类型 */
declare module 'vue-router' {
    interface RouteMeta {
        /** 完整路径信息 */
        completePath?: string;
        /** 路径映射 */
        pathMaps?: string[];
    }
}
/**
 * 递归处理路由高亮信息
 * @param routes 当前路由列表
 * @param upperPath 上层路由路径
 */
export declare const calculRouterActive: (routes: RouteRecordRaw[], upperPath?: string | undefined) => void;
/**
 * 递归输出当前路由权限表
 * @param routes 当前路由列表
 */
export declare const outputRoutes: (routes: RouteRecordRaw[]) => void;
/**
 * 递归对比路由权限表, 返回路由列表
 * @param baseRoutes 基本路由
 * @param surfaceRoutes 对比路由信息
 * @returns 比较路由列表
 */
export declare const compareRoutes: (baseRoutes?: RouteRecordRaw[], surfaceRoutes?: RouteRecordRaw[]) => RouteRecordRaw[];
/**
 * 递归设置默认重定向地址
 * @param routes 当前路由表
 * @param upperPath 上层路由路径
 */
export declare const setDefaultRoutes: (routes?: RouteRecordRaw[], upperPath?: string | undefined) => void;
/**
 * 设置当前路由表默认路由路径 / => 第一路径
 */
export declare const setDefaultHomeRoute: (routes?: RouteRecordRaw[]) => false | undefined;
