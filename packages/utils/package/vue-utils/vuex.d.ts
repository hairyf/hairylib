import { StoreOptions, Store } from 'vuex';
/**
 * 新增动态类型的vuex模块
 * @param store
 * @returns store
 */
export declare const createModule: <S>(store: StoreOptions<S>) => Store<S>;
