/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-01-25 15:25:06
 * @LastEditTime: 2021-03-01 17:27:02
 * @Description: 历史记录逻辑钩子
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { ref, watch } from "vue"
interface HistorysStorage {
  get: () => string[]
  set: (historys: string[]) => void
}
export const useHistorys = (historyStore: HistorysStorage) => {
  const historys = ref<string[]>(historyStore.get())
  // 添加历史记录
  const unshiftHistory = (searchText: string) => {
    const oldIndex = historys.value.indexOf(searchText);
    if (oldIndex !== -1) historys.value.splice(oldIndex, 1);
    historys.value.unshift(searchText);
    if (historys.value.length > 8) {
      historys.value.splice(historys.value.length - 1, 1);
    }
  }
  // 移除历史记录
  const removeHistory = () => {
    historys.value = [];
  }
  // 监听记录
  watch(historys, (values) => historyStore.set(values))
  // 返回钩子
  return { unshiftHistory, removeHistory, list: historys }
}