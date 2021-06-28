interface HistorysStorage {
    get: () => string[];
    set: (historys: string[]) => void;
}
export declare const useHistorys: (historyStore: HistorysStorage) => {
    unshiftHistory: (searchText: string) => void;
    removeHistory: () => void;
    list: import("vue").Ref<string[]>;
};
export {};
