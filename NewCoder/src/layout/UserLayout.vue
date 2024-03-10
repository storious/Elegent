<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import {
    IconDesktop,
    IconQrcode
} from '@arco-design/web-vue/es/icon'

const visible = ref(false)

const openQrcode = () => {
    visible.value = !visible.value;
}

</script>

<template>
    <div id="userLayout">
        <a-layout style="min-height: 100vh;">
            <a-layout-header class="header">
            </a-layout-header>
            <a-layout-content class="content">
                <a-card class="card" style="width: 360px; margin: 0 auto;" hoverable>
                    <div v-show="!visible" v-cloak>
                        <!-- <template> -->
                            <div class="qrcode-container" @click="openQrcode">
                                <icon-qrcode size="50"  class="img"></icon-qrcode>
                            </div>
                            <div>
                                <a-space>
                                    <img class="logo" src="../assets/logo.svg" />
                                </a-space>
                                <RouterView></RouterView>
                            </div>

                        <!-- </template> -->
                    </div>
                    <div v-show="visible" v-cloak>
                        <!-- <template> -->
                            <div class="qrcode-container" @click="openQrcode" >
                                <icon-desktop size="50" class="img"></icon-desktop>
                            </div>
                            <a-typography-title :heading="3">扫码登录</a-typography-title>
                            <img src="../assets/qrcode.png" class="show_full" />
                            <div>打开App扫一扫</div>
                        <!--    </template> -->
                        </div>
                </a-card>
            </a-layout-content>
            <a-layout-footer class="footer">
                Powered by storious version: 1.0
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<style scoped>
[v-cloak] {
    display: none !important
}

#userLayout {
    text-align: center;
    background-image: url("../assets/login_background.jpg");
}

#userLayout .card {
    width: 360px;
    margin-left: 24px;
    transition-property: all;
    border-radius: 15px;
    border: 1px solid #ccc;
    padding: 5px;
    box-shadow: #efefef;
}

.card:hover {
    transform: translateY(-4px);
}

#userLayout .header {
    margin-bottom: 10%;
}

#userLayout .logo {
    width: 100px;
    height: 100px;
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

.card {
    position: relative;

    overflow: hidden;
    /* 其他卡片样式 */
}

.show_full {
    width: 300px;
    height: 300px;
}

.qrcode-container {
    position: absolute;
    top: -5px;
    /* 从顶部的距离 */
    right: -2px;
    /* 从右侧的距离 */
    background-color: #fff;
    /* 二维码容器的背景颜色 */
    padding: 5px;
    /* 二维码容器的内边距 */
}

.qrcode-container .img {
    cursor: pointer;
}
</style>
