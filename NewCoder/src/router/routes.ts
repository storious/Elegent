import { RouteRecordRaw } from "vue-router";
import Home from '../components/HelloWorld.vue';
import Problems from "../views/ProblemSetView.vue"

export const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "首页",
        component: Home
    },

    {
        path: "/ProblemSet",
        name: "题库",
        component: Problems,
        meta: {
            access: "loginUser"
        }
    },

    {
        path: "/noAuth",
        name: "无权限",
        component: () =>
            import("../views/NoAuthView.vue"),
    },

    {
        path: "/about",
        name: "关于我的",
        component: () =>
            import("../views/AboutView.vue"),
    }
]
