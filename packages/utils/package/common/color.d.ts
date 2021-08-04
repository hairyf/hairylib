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
 * 根据颜色融合出黑色与白色, 透明度色
 * @param color
 */
export declare const fuseThemeColor: (color: string) => {
    'primaryColorLight-2': string;
    'primaryColorLight-4': string;
    'primaryColorLight-6': string;
    'primaryColorLight-8': string;
    'primaryColorDark-2': string;
    'primaryColorDark-4': string;
    'primaryColorDark-6': string;
    'primaryColorDark-8': string;
    'primaryColorOpacity-2': string;
    'primaryColorOpacity-4': string;
    'primaryColorOpacity-6': string;
    'primaryColorOpacity-8': string;
};
