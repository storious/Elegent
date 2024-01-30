import { RouteRecordRaw } from "vue-router";
import Home from '../components/HelloWorld.vue';
import Problems from "../views/ProblemSetView.vue"
import ACCESS_ENUM from "../access/accessEnum";

export const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "首页",
        component: Home
    },

    {
        path: "/user",
        name: "用户",
        component: ()=>import("../layout/UserLayout.vue"),
        children: [
            {
                path: "/user/login",
                name: "用户登录",
                component:()=> import("../views/user/LoginView.vue"),
            },
            {
                path: "/user/register",
                name: "用户注册",
                component:()=> import("../views/user/RegisterView.vue"),
            },
        ],
        meta: {
            hideInMenu: true
        }
    },

    {
        path: "/ProblemSet",
        name: "题库",
        component: Problems,
        meta: {
            access: ACCESS_ENUM.NOT_LOGIN
        }
    },
    {
        path: "/admin",
        name: "管理员菜单",
        component: () => import("../views/AdminView.vue"),
        meta: {
            access: ACCESS_ENUM.ADMIN
        }
    },

    {
        path: "/noAuth",
        name: "无权限",
        component: () =>
            import("../views/NoAuthView.vue"),
        meta: {
            hideInMenu: true
        }

    },

    {
        path: "/about",
        name: "关于我的",
        component: () =>
            import("../views/AboutView.vue"),
    }
]