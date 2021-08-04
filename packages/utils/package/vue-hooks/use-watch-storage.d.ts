import { StorageLike } from '@vueuse/core';
/**
 * 引入具有跨层级响应式缓存 Ref
 * @param key 缓存对应 key 值
 * @param defaultValue 缓存默认值
 */
export declare const useWatchStorage: {
    <T = null>(key: string, defaultValue: T, options?: StorageLike | undefined): import("vue").WritableComputedRef<T>;
    option: StorageLike | undefined;
};
/**
 * 引入具有跨层级响应式缓存 Ref (localStorage)
 * @param key 缓存对应 key 值
 * @param defaultValue 缓存默认值
 */
export declare const useWatchLocalStorage: <T = null>(key: string, defaultValue: T) => import("vue").WritableComputedRef<T>;
/**
 * 引入具有跨层级响应式缓存 Ref (sessionStorage)
 * @param key 缓存对应 key 值
 * @param defaultValue 缓存默认值
 */
export declare const useWatchSessionStorage: <T = null>(key: string, defaultValue: T) => import("vue").WritableComputedRef<T>;
