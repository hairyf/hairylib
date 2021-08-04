/**
 * 剔除字符串代码字段
 * @param str 字符串
 * @returns 剔除字符串
 */
export declare const removeStrCode: (str: string) => string;
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
 * 时间戳格式化(秒)
 * @param timestamp 格式化时间戳(秒)
 * @param format 格式化时间格式
 * @returns 格式时间字符串
 */
export declare const formatUnix: (timestamp: number, format?: string) => string;
/**
 * 替换 html string 中任意 tag 内任意 attr 值
 * @param html html string
 * @param option
 * @returns
 */
export declare const setHtmlStrTagAttr: (html: string, option: {
    tag: string | string[];
    attr: string;
    value: string;
}) => string;
/**
 * 移除所有标签的一个或多个属性
 * @param html html string
 * @param attr attr string
 * @returns html
 */
export declare const removeHtmlStrTagAttr: (html: string, attr: string | string[]) => string;
