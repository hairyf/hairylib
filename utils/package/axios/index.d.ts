import { AxiosStatic, AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
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
export {};
