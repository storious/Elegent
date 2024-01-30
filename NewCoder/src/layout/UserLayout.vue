<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
    <div id="userLayout">
        <a-layout style="min-height: 100vh;">
            <a-layout-header class="header">
            </a-layout-header>
            <a-layout-content class="content">
                <a-card class="card" style="width: 360px; margin: 0 auto;" hoverable>
                    <a-space>
                        <img class="logo" src="../assets/logo.svg" />
                        <img class="text-logo" src="../assets/text-logo.png">
                        <!-- <div>New Coder</div> -->
                    </a-space>
                    <RouterView></RouterView>
                </a-card>
            </a-layout-content>
            <a-layout-footer class="footer">
                Powered by storious version: 1.0
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<style scoped>
#userLayout {
    text-align: center;
    background-image: url("../assets/login_background.jpg");
    /* background: rgba(var(--dsw-layer-bg-rgb), 1); */
}

#userLayout .card {
    width: 360px;
    margin-left: 24px;
    transition-property: all;
}
.card:hover {
  transform: translateY(-4px);
}

#userLayout .header {
    margin-bottom: 10%;
}

#userLayout .logo {
    width: 80px;
    height: 80px;
}

#userLayout .text-logo {
    width: 120px;
    height: auto;
}

#userLayout .content {
    background: liner-gradient(to, right, #bbbb, #fff);
    margin-bottom: 16px;
    padding: 20px;
}

#userLayout .footer {
    background: #efefef;
    padding: 16px;
    position: sticky;
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
}
</style>
