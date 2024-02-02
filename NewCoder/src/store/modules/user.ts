import { StoreOptions } from "vuex/types/index.js";
import ACCESS_ENUM from "../../access/accessEnum";
import { UserControllerService } from "../../../generated"


export default {
    namespaced: true,
    state: () => ({
        loginUser: {
            userName: "未登录",
        },
    }),
    actions: {
        async getLoginUser({ commit, state }) {
            //远程获取登录信息
            const res = await UserControllerService.getLoginUserUsingGet();

            if (res.code === 0) {
                commit("updateUser", res.data);
            }
            else {
                commit("updateUser", { ...state.loginUser, userRole: ACCESS_ENUM.NOT_LOGIN });
            }
        },
        async userLogout({ commit, state }) {
            await UserControllerService.userLogoutUsingPost();
            commit("updateUser", { ...state.loginUser, userName: "未登录", userRole: ACCESS_ENUM.NOT_LOGIN })
        }
    },
    mutations: {
        updateUser(state, payload) {
            state.loginUser = payload;
        },
    },

} as StoreOptions<any>