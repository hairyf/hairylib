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
export declare const isFF: false | "" | RegExpMatchArray | null;
/**
 * 跳转到新的页面
 * @param url 跳转url
 */
export declare const ejectWindow: (url: string) => void;
/**
 * 选择多个图片
 * @param option
 * @returns FileList
 */
export declare const selectImages: () => Promise<File[]>;
/**
 * 下载文件
 * @param url 下载地址
 * @param fileName 文件名称
 */
export declare const downloadFile: (url: string, fileName?: string | undefined) => void;
