import { AxiosStatic, AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
declare module 'axios' {
    interface AxiosRequestConfig {
        loading?: boolean;
        preventError?: boolean;
    }
}
interface AxiosLoadingOpts {
    /** 加载调起 */
    show: (config: AxiosRequestConfig) => void;
    /** 加载关闭 */
    clone: (config: AxiosRequestConfig, result: [AxiosResponse?, AxiosError?]) => void;
}
interface AxiosValidateOpts {
    /** 自定义校验器 */
    validate: (response: AxiosResponse) => boolean | void;
    /** 错误处理 */
    rejected: (error: AxiosError) => void;
}
declare type HttpInstance = AxiosStatic | AxiosInstance;
/**
 * axios 全局加载提示
 * @param axios 实例
 * @param show 展示逻辑钩子
 * @param clone 关闭逻辑钩子
 */
export declare const axiosLoading: (axios: HttpInstance, show: AxiosLoadingOpts['show'], clone: AxiosLoadingOpts['clone']) => void;
/**
 * axios 校验器
 * @param axios 实例
 * @param validate 校验器
 * @param rejected 错误处理
 */
export declare const axiosValidate: (axios: HttpInstance, validate: AxiosValidateOpts['validate'], rejected: AxiosValidateOpts['rejected']) => void;
interface AxiosPickByParamsOptions {
    /** 是否过滤请求头, 默认 false */
    header?: boolean;
    /** 是否过滤请求体, 默认 true */
    data?: boolean;
    /** 是否过滤请求参数, 默认 true */
    params?: boolean;
    /** 是否深层过滤, 默认 false */
    deep?: boolean;
}
/**
 * 根据过滤器, 过滤 body|params 参数
 * @param axios 实例
 * @param filters 过滤参数
 */
export declare const axiosPickByParams: (axios: HttpInstance, filters: any[], option?: AxiosPickByParamsOptions) => void;
export {};
