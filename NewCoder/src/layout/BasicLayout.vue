<script setup lang="ts">
import { RouterView } from 'vue-router';
import GlobalHeader from '../components/GlobalHeader.vue';
</script>

<template>
    <div id="basicLayout">
        <a-layout style="min-height: 100vh;">
            <a-layout-header class="header">
                <GlobalHeader></GlobalHeader>
            </a-layout-header>
            <a-layout-content class="content">
                <RouterView></RouterView>
            </a-layout-content>
            <a-layout-footer class="footer">
                Powered by storious version: 1.0
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<style scoped>
#basicLayout {}

#basicLayout .header {
    box-shadow: #eee 1px 1px 5px;
}

#basicLayout .content {
    background: liner-gradient(to, right, #bbbb, #fff);
    margin-bottom: 16px;
    padding: 20px;
}

#basicLayout .footer {
    background: #efefef;
    padding: 16px;
    position: sticky;
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
}
</style>
