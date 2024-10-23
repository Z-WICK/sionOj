import { StoreOptions } from "vuex";

export default {
  // 启用命名空间，防止模块间的命名冲突
  namespaced: true,
  // 定义模块的初始状态，这里包含登录用户的信息
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "notLogin",
    },
  }),
  // 定义模块的 actions，用于处理异步操作或复杂逻辑
  actions: {
    // 获取登录用户信息的 action
    getLoginUser({ commit, state }, payload) {
      // todo 改为从远程请求获取登录信息
      // 这里通过 commit 提交一个假数据 'sion'，模拟更新用户状态
      commit("updateUser", { userName: "sion" });
    },
  },
  // 定义 mutations，用于直接修改 state
  mutations: {
    // 更新用户信息的 mutation
    updateUser(state, payload) {
      // 更新 loginUser 的值为传入的 payload
      state.loginUser = payload;
    },
  },
  // 使用 TypeScript 的类型断言，声明这是一个 Vuex 的模块配置
} as StoreOptions<any>;
