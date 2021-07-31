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
