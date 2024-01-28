<script setup lang="ts">
import { useRouter } from "vue-router";
import BasicLayout from "../src/layout/BasicLayout.vue";
import store from "./store";

const router = useRouter();

router.beforeEach((to, from, next) => {
  if (to.meta?.access === "loginUser") {
    // console.log(store.state.user.loginUser);
    if (store.state.user.loginUser?.role === "notLogin") {
      next("../noAuth");
      return
    }
  }
  // console.log(to);
  next()
});

</script>

<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style scoped></style>
