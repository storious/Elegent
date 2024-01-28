<script setup lang="ts">
import { routes } from "../router/routes";
import { useRouter } from "vue-router";
import { ref } from "vue"
import { useStore } from "vuex"

const router = useRouter();

// 默认主页
const selectKeys = ref(["/"]);
//监听路由
//跳转时, 更新选中的菜单
router.afterEach((to, from, failure) => {
    selectKeys.value = [to.path];
});

const doMenuClick = (key: string) => {
    router.push({
        path: key,
    });
};

const store = useStore();
// console.log(store.state.user);

setTimeout(() => {
    store.dispatch("user/getLoginUser", {
        userName: "admin",
        role:"login"
    })
    // console.log(store.state.user.loginUser);
}, 3000);

</script>
<template>
    <a-row id="globalHeader" style="margin-bottom: 16px;" align="center">
        <a-col flex="auto">
            <a-menu mode="horizontal" :selected-keys:="selectKeys" @menu-item-click="doMenuClick">
                <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
                    <div class="title-bar">
                        <img class="logo" src="../assets/logo.svg" />
                        <div class="title">New Coder</div>
                    </div>
                </a-menu-item>
                <a-menu-item v-for="item in routes" :key="item.path">
                    {{ item.name }}
                </a-menu-item>
            </a-menu>
        </a-col>
        <a-col flex="100px">
            <div>{{ store.state.user?.loginUser?.userName ?? '未登录' }}</div>
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
    font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: large;
    margin-left: 8px;
}

.logo {
    height: 50px;
}
</style>
