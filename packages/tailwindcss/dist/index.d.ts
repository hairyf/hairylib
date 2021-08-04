import { TailwindConfig } from "tailwindcss/tailwind-config";
/**
 * 初始化返回预设
 * @param config 深层合并预设
 * @returns 预设
 */
declare const mergePresets: (config?: Partial<TailwindConfig>) => Partial<TailwindConfig>;
export default mergePresets;
