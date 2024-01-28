<script setup lang="ts">
import { RouterView } from 'vue-router';
import GlobalHeader from '../components/GlobalHeader.vue';
</script>

<template>
    <div id="basicLayout">
        <a-layout style="height: 400px;">
            <a-layout-header class="header">
                <GlobalHeader></GlobalHeader>
            </a-layout-header>
            <a-layout-content class="content">
                <RouterView></RouterView>
            </a-layout-content>
            <a-layout-footer class="footer"></a-layout-footer>
        </a-layout>
    </div>
</template>

<style scoped>
#basicLayout {}

#basicLayout .header {
    margin-bottom: 16px;
    box-shadow: #eee 1px 1px 5px;
}

#basicLayout .content {
    background: liner-gradient(to, right, #aaaa, #fff);
    margin-bottom: 16px;
}

#basicLayout .footer {
    background: #efefef;
    padding: 16px;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
}
</style>
