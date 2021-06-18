/** 获取百分比尺寸 */
export declare const getPercentage: () => {
    full: string;
    auto: string;
    '1/2': string;
    '1/3': string;
    '2/3': string;
    '1/4': string;
    '2/4': string;
    '3/4': string;
    '1/5': string;
    '2/5': string;
    '3/5': string;
    '4/5': string;
    '1/6': string;
    '2/6': string;
    '3/6': string;
    '4/6': string;
    '5/6': string;
};
/** 获取 0 ~ max 尺寸 */
export declare const getSpacing: (end: number, progressiveMax?: number) => Record<string, string>;
