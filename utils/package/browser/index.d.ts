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
 * @returns {FileList}
 */
export declare const selectImages: () => Promise<File[]>;
/**
 * 选择多个文件
 * @param option
 * @returns {FileList}
 */
export declare const selectFiles: (option?: {
    multiple?: boolean;
    accept?: string;
}) => Promise<File[]>;
/**
 * 下载文件
 * @param url 下载地址
 * @param fileName 文件名称
 */
export declare const downloadFile: (url: string, fileName?: string | undefined) => void;
/**
 * 下载 blob 文件
 * @param data blob 数据
 * @param name 文件名称
 */
export declare const downloadBlobFile: (data: Blob, name: string) => void;
/**
 * 根据颜色融合出黑色与白色, 透明度色
 * @param color
 * @returns
 */
export declare const fuseThemeColor: (color: string) => {
    "primaryColorLight-2": string;
    "primaryColorLight-4": string;
    "primaryColorLight-6": string;
    "primaryColorLight-8": string;
    "primaryColorDark-2": string;
    "primaryColorDark-4": string;
    "primaryColorDark-6": string;
    "primaryColorDark-8": string;
    "primaryColorOpacity-2": {
        red: number;
        green: number;
        blue: number;
        rgba: string;
    };
    "primaryColorOpacity-4": {
        red: number;
        green: number;
        blue: number;
        rgba: string;
    };
    "primaryColorOpacity-6": {
        red: number;
        green: number;
        blue: number;
        rgba: string;
    };
    "primaryColorOpacity-8": {
        red: number;
        green: number;
        blue: number;
        rgba: string;
    };
};
