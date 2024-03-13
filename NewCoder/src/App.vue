<script setup lang="ts">
import { useRoute } from "vue-router";
import BasicLayout from "../src/layout/BasicLayout.vue";
import { onMounted, ref, watch } from "vue";


const route = useRoute()

// 全局初始化函数
const doInit = () => {
  console.log("Welcome to New Coder!!!");
};

const currentPath = ref("");
onMounted(() => {
  doInit();
  currentPath.value = route.path; // 初始化当前路径

  // 监听路由变化
  watch(
    () => route.path,
    (newPath) => {
      currentPath.value = newPath;
    }
  );
});

</script>


<template>
  <div id="app">
    <RouterView :key="currentPath"></RouterView>
  </div>
</template>


<style scoped>
#app {
  font-family: Inter, -apple-system, BlinkMacSystemFont, PingFang SC, Hiragino Sans GB, noto sans, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>
  <!-- openapi --input http://localhost:8101//v2/api-docs --output ./generated --client axios -->
