<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';


const visible = ref(false)

const openQrcode = () => {
    visible.value = !visible.value;
    console.log(visible)
}

</script>

<template>
    <div id="userLayout">
        <a-layout style="min-height: 100vh;">
            <a-layout-header class="header">
            </a-layout-header>
            <a-layout-content class="content">
                <a-card class="card" style="width: 360px; margin: 0 auto;" hoverable>

                    <div class="qrcode-container">
                        <template v-if="visible">
                            <img src="../assets/logo.jpeg" alt="账号登录" class="img" @click="openQrcode" />
                        </template>
                        <template v-else>
                            <img src="../assets/qrcode.png" alt="二维码登录" class="img" @click="openQrcode" />
                        </template>
                    </div>

                    <template v-if="!visible">
                        <a-space>
                            <img class="logo" src="../assets/logo.svg" />
                        </a-space>
                        <RouterView></RouterView>
                    </template>
                    <template v-else>
                        <div style="font-size: x-large;margin-bottom: 20px;">扫码登录</div>
                        <img src="../assets/qrcode.png" class="show_full" />
                        <div>打开App扫一扫</div>
                    </template>
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
}

#userLayout .card {
    width: 360px;
    margin-left: 24px;
    transition-property: all;
    border-radius: 15px;
    border: 1px solid #ccc;
    padding: 5px;
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

.show_full{
    width: 300px;
    height: 300px;
}

.qrcode-container {
    position: absolute;
    top: -50px;
    /* 从顶部的距离 */
    right: -50px;
    /* 从右侧的距离 */
    width: 80px;
    /* 二维码容器的宽度 */
    height: 80px;
    /* 二维码容器的高度 */
    background-color: #fff;
    /* 二维码容器的背景颜色 */
    border-radius: 50%;
    /* 二维码容器的圆角 */
    padding: 5px;
    /* 二维码容器的内边距 */
}

.qrcode-container .img {
    cursor: pointer;
    width: 100%;
    /* 二维码图像的宽度 */
    height: 100%;
    /* 二维码图像的高度 */
}
</style>
