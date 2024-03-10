<script setup lang="ts">
import { routes } from "../router/routes";
import { useRouter } from "vue-router";
import { ref, computed } from "vue"
import { useStore } from "vuex"
import checkAccess from "../access/checkAccess"
import { 
    IconUser,
    IconImport,
    IconExport
} from '@arco-design/web-vue/es/icon';
import ACCESS_ENUM from "../access/accessEnum";



const router = useRouter();
const store = useStore();

//需要展示的路由菜单
const visibleRoutes = computed(() => {
    return routes.filter((item) => {
        if (item.meta?.hideInMenu) {
            return false;
        }
        const loginUser = store.state.user.loginUser;
        //通过权限过滤菜单
        if (!checkAccess(loginUser, item?.meta?.access as string)) {
            return false;
        }
        return true;
    });
});
// 默认主页
const selectKeys = ref(["/"]);
//监听路由
//跳转时, 更新选中的菜单
router.afterEach((to) => {
    selectKeys.value = [to.path];
});

const doMenuClick = (key: string) => {
    router.push({
        path: key,
    });
};

const toLoginOrProfile = () => {
    const loginUser = store.state.user.loginUser;
    // console.log(loginUser);

    if (!loginUser.userRole || loginUser.userRole === ACCESS_ENUM.NOT_LOGIN) {
        router.push({
            path: "/user/login"
        })
    }
    else {
        router.push({
            path: "/profile/info"
        })
    }
}

const handleSelect = async (option: any) => {

    if (option.value === "login") {
        if (store.state.user.loginUser.userRole === ACCESS_ENUM.NOT_LOGIN) {
            router.push(
                {
                    path: "/user/login"
                }
            )
        }
    } else if (option.value === "logout") {
        if (store.state.user.loginUser.userRole !== ACCESS_ENUM.NOT_LOGIN) {
            await store.dispatch("user/userLogout")
            router.push({
                path: "/",
                replace: true
            })
        }
    }

}

</script>
<template>
    <a-row id="globalHeader" style="margin-bottom: 16px;" align="center" :warp="false">
        <a-col flex="auto">
            <a-menu mode="horizontal" :selected-keys:="selectKeys" @menu-item-click="doMenuClick">
                <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
                    <div class="title-bar">
                        <img class="logo" src="../assets/logo.svg" />
                        <div class="title">New Coder</div>
                    </div>
                </a-menu-item>
                <a-menu-item v-for="item in visibleRoutes" :key="item.path">
                    {{ item.name }}
                </a-menu-item>
            </a-menu>
        </a-col>
        <a-col flex="50px">
            <a-dropdown @select="handleSelect">
                <a-avatar>
                    <IconUser />
                </a-avatar>
                <template #content>
                    <a-doption :value="{ value: 'login' }" popup-visible><icon-import /> 登录 / 注册</a-doption>
                    <a-doption :value="{ value: 'logout' }" popup-visible><icon-export /> 登出</a-doption>
                </template>
            </a-dropdown>

        </a-col>
        <a-col flex="100px">
            <a-link @click="toLoginOrProfile">{{ store.state.user?.loginUser?.userName ?? '未登录' }}</a-link>
        </a-col>
    </a-row>
</template>


<style scoped>
.title-bar {
    display: flex;
    align-items: center;
}

.title {
    color: black;
    font-family: Inter, -apple-system, BlinkMacSystemFont, PingFang SC, Hiragino Sans GB, noto sans, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: large;
    margin-left: 8px;
}

.logo {
    height: 50px;
}
</style>
