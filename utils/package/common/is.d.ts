/**
 * 获取数据类型
 * @param target 检测对象
 * @returns 返回字符串
 */
export declare const checkedTypeof: (target: any) => string;
/**
 * 不符合预期则弹出警告
 * @param condition
 * @param infos
 */
export declare const assert: (condition: boolean, ...infos: any[]) => boolean;
export declare const isClient: boolean;
export declare const isBoolean: (val: any) => val is boolean;
export declare const isFunction: <T extends Function>(val: any) => val is T;
export declare const isNumber: (val: any) => val is number;
export declare const isString: (val: unknown) => val is string;
export declare const isObject: (val: any) => val is object;
export declare const isArray: (val: any) => val is any[];
export declare const isWindow: (val: any) => val is Window;
