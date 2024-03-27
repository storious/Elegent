<script setup lang="ts">
import {
    IconHome,
    IconMenuUnfold
} from '@arco-design/web-vue/es/icon';
import { ref } from 'vue'

const visible = ref(false)

const doMenuClick = (key: string) => {
    if (key === "2") {
        visible.value = !visible.value
    }
};

const handleOk = () => {
    visible.value = false;
}

const handleCancel = () => {
    visible.value = false;
}

</script>

<template>
    <div id="description-layout">
        <a-layout style="min-height: 100vh;">
            <a-layout-header class="header">
                <div class="menu-demo">
                    <a-menu mode="horizontal" theme="dark" :default-selected-keys="['1']"
                        @menu-item-click="doMenuClick">
                        <a-menu-item key="1">
                            首页
                            <template #icon>
                                <IconHome></IconHome>
                            </template>
                        </a-menu-item>
                        <a-menu-item key="2">
                            题库
                            <template #icon>
                                <icon-menu-unfold />
                            </template>
                        </a-menu-item>
                        <a-menu-item key="3">Cloud Service</a-menu-item>
                        <a-menu-item key="4">Cooperation</a-menu-item>
                    </a-menu>
                </div>
            </a-layout-header>
            <a-layout-content class="content">
                <a-drawer :width="340" :visible="visible" placement="left" @ok="handleOk" @cancel="handleCancel"
                    unmountOnClose>
                </a-drawer>
                <RouterView></RouterView>
            </a-layout-content>
        </a-layout>
    </div>
</template>

<style scoped>
#description-layout .header {
    box-shadow: #ddd 1px 1px 5px;
    background-color: #fff;
}

#description-layout .content {
    background: liner-gradient(to, right, #aaa, #ddd);
    margin-bottom: 16px;
    padding: 8px;
}

#description-layout .menu-demo {
    box-sizing: border-box;
    width: 100%;
    padding: 0.5px;
    border-radius: 2em;
    background-color: var(--color-neutral-2);
}
</style>