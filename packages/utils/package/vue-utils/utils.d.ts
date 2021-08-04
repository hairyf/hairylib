import { Component } from "vue";
/**
 * 渲染组件实例
 * @param Constructor 组件
 * @param props 组件参数
 * @returns 组件实例
 */
export declare const renderInstance: <T = Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>(Constructor: T, props: Record<string, any>) => import("vue").ComponentInternalInstance | null;
