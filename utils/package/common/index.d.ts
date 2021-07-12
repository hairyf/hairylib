/**
 * 获取数据类型
 * @param target 检测对象
 * @returns 返回字符串
 */
export declare const checkedTypeof: (target: any) => string;
/**
 * 剔除字符串代码字段
 * @param str 字符串
 * @returns 剔除字符串
 */
export declare const removeStrCode: (str: string) => string;
/**
 * 如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上px单位
 * @param unit 单元
 * @returns string
 */
export declare const analyUnit: (unit: string | number) => string;
/**
 * 过滤为价格(两位小数点)
 * @param value 传入字符
 */
export declare const filterPrice: (value: string) => string;
/**
 * 过滤为正整数
 * @param value 传入字符
 */
export declare const filterInteger: (value: string) => string;
/**
 * 地址参数计算
 * @param url 传入url
 * @param params 请求参数
 * @returns 拼接url
 */
export declare const paramsAnaly: (url: string, params: Record<string, any>) => string;
/**
 * 生成递进的数组
 * @param start 开始数值
 * @param end 结束数值
 * @returns 递进的数组
 */
export declare const generateArray: (start: number, end: number) => number[];
