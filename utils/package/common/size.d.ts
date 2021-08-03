/**
 * 如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上px单位
 * @param unit 单元
 * @returns string
 */
export declare const analyUnit: (unit: string | number) => string;
/** size 转换配置 */
export declare type AnalySizeOption = string | number | {
    width: string | number;
    height: string | number;
} | [number | string, number | string];
/**
 * 将 size 转换为宽高
 * @param size { AnalySizeOption }
 * @returns
 */
export declare const analySize: (size: AnalySizeOption) => {
    width: string;
    height: string;
};
