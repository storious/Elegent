<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";


const router = useRouter()

// 全局初始化函数
const doInit = () => {
  console.log("Welcome to New Coder!!!");
};

onMounted(() => {
  doInit();
  router.push({path: "/home"})
});

</script>


<template>
  <div id="app">
    <RouterView></RouterView>
  </div>
</template>


<style scoped>
#app {
  font-family: Inter, -apple-system, BlinkMacSystemFont, PingFang SC, Hiragino Sans GB, noto sans, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>
  <!-- openapi --input http://localhost:8101//v2/api-docs --output ./generated --client axios -->
