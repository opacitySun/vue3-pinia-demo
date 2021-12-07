import { defineStore } from 'pinia';

// state数据类型
type State = {
  count: number,
  accessToken: string
};

// 创建状态机模块
export const useTestStore = defineStore({
  // 模块唯一id
  id: 'storeTest',
  // 状态机的state
  state: (): State => ({
    count: 0,
    accessToken: ''
  }),
  // 状态机的action
  actions: {
    increment() {
      this.count++;
    },
    setToken(token: string) {
      this.accessToken = token;
    }
  },
  // 状态机数据持久化配置，基于pinia-plugin-persist
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ['accessToken']
      },
    ],
  }
});