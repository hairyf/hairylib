import { StoreOptions, Store } from 'vuex'
/**
 * 创建包含动态类型的 vuex 模块
 * @param store
 * @returns store
 */
export const createModule = <S>(store: StoreOptions<S>) => store as Store<S>
