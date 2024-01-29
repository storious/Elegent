<script setup lang="ts">
import { useRouter } from "vue-router";
import BasicLayout from "../src/layout/BasicLayout.vue";
import store from "./store";
import checkAccess from "./access/checkAccess";

const router = useRouter();

// 全局初始化函数
const doInit = () => {
  console.log("Welcome to New Coder!!!");
};

router.beforeEach((to, from, next) => {
  if (!checkAccess(store.state.user.loginUser, to.meta?.access as string)) {
    next("../noAuth");
    return
  }

  next()
});

</script>

<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style scoped></style>
