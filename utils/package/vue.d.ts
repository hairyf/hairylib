import { StoreOptions, Store } from 'vuex';
import { RouteRecordRaw } from 'vue-router';
import { Component } from 'vue';
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
 * 新增动态类型的vuex模块
 * @param store
 * @returns store
 */
export declare const createModule: <S>(store: StoreOptions<S>) => Store<S>;
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
/**
 * 渲染组件实例
 * @param Constructor 组件
 * @param props 组件参数
 * @returns 组件实例
 */
export declare const renderInstance: <T = Component<any, any, any, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions>>(Constructor: T, props: Record<string, any>) => import("vue").ComponentInternalInstance | null;
