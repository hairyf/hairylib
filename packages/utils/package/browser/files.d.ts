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
 * 选择多个图片
 * @returns {FileList}
 */
export declare const selectImages: () => Promise<File[]>;
/**
 * 下载网络文件
 * @param url 下载地址
 * @param fileName 文件名称
 */
export declare const downloadWorkFile: (url: string, fileName?: string | undefined) => void;
/**
 * 生成 blob 文件，并下载
 * @param data blob 数据，或者字符串
 * @param name 文件名称
 */
export declare const downloadBlobFile: (data: Blob | string, name: string) => void;
export declare type ReaderType = 'readAsArrayBuffer' | 'readAsBinaryString' | 'readAsDataURL' | 'readAsText';
/**
 * 读取 File 文件
 * @param formType 转换形式
 * @param file 文件
 */
export declare const readFileReader: <T extends ReaderType>(formType: T, file: File) => Promise<T extends "readAsArrayBuffer" ? ArrayBuffer : string>;
