import checkAccess from "../access/checkAccess";
import router from "../router";
import store from "../store";
import ACCESS_ENUM from "./accessEnum";


router.beforeEach(async (to, from, next) => {
    // console.log(store.state.user.loginUser);
    const loginUser = store.state.user.loginUser;
    //如果未登录过
    if (!loginUser.role) {
        await store.dispatch("user/getLoginUser");
    }

    const needAccess = to.meta?.access ?? ACCESS_ENUM.NOT_LOGIN;
    // 必须登录才能访问
    if(needAccess !== ACCESS_ENUM.NOT_LOGIN)
    {
        //如果没登陆
        if(!loginUser.role)
        {
            next('/user/login?redirect=${to.fullPath}');
            return;
        }
    }

    if (!checkAccess(loginUser, to.meta?.access as string)) {
        next("../noAuth");
        return
    }

    next()
});