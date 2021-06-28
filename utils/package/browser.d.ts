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
 * 判断该类名存不存在
 * @param el 判断元素
 * @param className 类名
 * @returns 是否存在
 */
export declare const isClassName: (el: HTMLElement, className: string) => boolean;
/**
 * 跳转到新的页面
 * @param url 跳转url
 */
export declare const ejectWindow: (url: string) => void;
/**
 * 动态设置HTML标签图标
 * @param path 图标路径
 */
export declare const setHtmlIconLink: (path: string) => false | undefined;
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
