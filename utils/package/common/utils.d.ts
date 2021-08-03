/**
 * 地址参数计算
 * @param url 传入url
 * @param params 请求参数
 * @returns 拼接url
 */
export declare const paramsAnaly: (url: string, params: Record<string, any>) => string;
/**
 * 自定义 Promise 等待
 * @param code 等待时间
 */
export declare const awaitPromise: (code?: number) => Promise<unknown>;
/**
 * 生成递进的数组
 * @param start 开始数值
 * @param end 结束数值
 * @returns 递进的数组
 */
export declare const generateArray: (start: number, end: number) => number[];
/**
 * 根据过滤返回对应数据
 * @param params
 * @param filters
 */
export declare const pickByParams: <T extends object>(params: T, filters: any[], deep?: boolean) => Partial<T>;
/**
 * 将 formData 转换为 ojbect
 * @param formData
 */
export declare const formDataToObject: (formData: FormData) => Record<string, string>;
/**
 * 将 object 转换为 formData
 * @param object
 */
export declare const objectToFormData: (object: Record<string, string>) => FormData;
