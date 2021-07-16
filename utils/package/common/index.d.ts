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
 * 时间戳格式化(秒)
 * @param timestamp 格式化时间戳(秒)
 * @param format 格式化时间格式
 * @returns 格式时间字符串
 */
export declare const formatUnix: (timestamp: number, format?: string) => string;
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
/**
 * 颜色混合器
 * @param colorOne 颜色值
 * @param colorTwo 颜色值
 * @param ratio 根据 colorTwo 混合比例, 0~1 区间, 1 则是完全的 colorTwo
 * @returns 混合颜色
 */
export declare const blendColor: (colorOne: string, colorTwo: string, ratio: number) => string;
/**
 * 将 hex 颜色转成 rgb
 * @param hex
 * @param opacity
 * @returns rgba String
 */
export declare const hexToRgba: (hex: string, opacity: number) => {
    red: number;
    green: number;
    blue: number;
    rgba: string;
};
/**
 * 自定义 Promise 等待
 * @param code 等待时间
 */
export declare const awaitPromise: (code?: number) => Promise<unknown>;
