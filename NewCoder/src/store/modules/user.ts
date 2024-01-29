import { StoreOptions } from "vuex/types/index.js";
import ACCESS_ENUM from "../../access/accessEnum";

export default {
    namespaced: true,
    state: () => ({
        loginUser: {
            userName: "未登录",
            role: ACCESS_ENUM.NOT_LOGIN
        },
    }),
    actions: {
        getLoginUser({ commit, state }, payload) {
            //远程获取登录信息
            commit("updateUser", payload);
        },
    },
    mutations: {
        updateUser(state, payload) {
            state.loginUser = payload;
        },
    },

} as StoreOptions<any>