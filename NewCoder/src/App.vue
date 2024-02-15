<script setup lang="ts">
import BasicLayout from "../src/layout/BasicLayout.vue";
import { onMounted } from "vue";

// 全局初始化函数
const doInit = () => {
  console.log("Welcome to New Coder!!!");
};

onMounted(() => {
  doInit();
})

</script>

<template>
  <div id="app">
    <template v-if="$route.path.startsWith('/user')">
      <RouterView></RouterView>
    </template>
    <template v-else-if="$route.path.startsWith('/profile')">
      <RouterView></RouterView>
    </template>
    <template v-else>
      <BasicLayout></BasicLayout>
    </template>
  </div>
</template>


<style scoped>
#app {
  font-family: Inter, -apple-system, BlinkMacSystemFont, PingFang SC, Hiragino Sans GB, noto sans, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>
  <!-- openapi --input http://localhost:8101//v2/api-docs --output ./generated --client axios -->
