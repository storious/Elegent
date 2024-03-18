<!--
 * @Author: storious <2227563488@qq.com>
 * @Date: 2024-01-27 09:47:56
 * @LastEditors: storious
 * @LastEditTime: 2024-03-10 14:16:29
 * @Description: 
 * @FilePath: \oj\NewCoder\src\App.vue
-->
<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted } from "vue";


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


<style lang="scss" scoped>
#app {
  font-family: Inter, -apple-system, BlinkMacSystemFont, PingFang SC, Hiragino Sans GB, noto sans, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>
  <!-- openapi --input http://localhost:8101//v2/api-docs --output ./generated --client axios -->
