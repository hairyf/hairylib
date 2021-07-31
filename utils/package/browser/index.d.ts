export declare const isBrowser: boolean;
export declare const isWeex: boolean;
export declare const weexPlatform: any;
export declare const UA: string | false;
export declare const isIE: boolean | "";
export declare const isIE9: boolean | "";
export declare const isIE11: boolean;
export declare const isEdge: boolean | "";
export declare const isAndroid: boolean;
export declare const isIOS: boolean;
export declare const isChrome: boolean | "";
export declare const isPhantomJS: boolean | "";
export declare const isFF: false | RegExpMatchArray | null;
export * from './files';
/**
 * 跳转到新的页面
 * @param url 跳转url
 */
export declare const ejectWindow: (url: string) => void;
/**
 * 根据颜色融合出黑色与白色, 透明度色
 * @param color
 * @returns
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
