<script setup lang="ts">

import {
    IconThumbUp,
    IconStar,
    IconUser,
    IconEdit,
    IconEye,
    IconTrophy,
    IconCode,
    IconBarChart
} from '@arco-design/web-vue/es/icon';
import router from '../../router';

const barPercent = [
    { label: 'Progress 1', percent: 0.25, level: "简单", ac: 21, all: 133 },
    { label: 'Progress 2', percent: 0.50, level: "中等", ac: 42, all: 132 },
    { label: 'Progress 3', percent: 0.75, level: "困难", ac: 124, all: 124 }
];

let sum_all = 0, sum_ac = 0;
for (let item in barPercent) {
    sum_all += barPercent[item].all;
    sum_ac += barPercent[item].ac;
}

const circlePercent: any = (sum_ac / sum_all).toFixed(4);

const toHome = ()=>{
    router.push({
        path: "/"
    })
}

</script>

<template>
    <div id="profileView" style="display: flex;">
        <a-card style="max-width: 360px;" class="personal-info">
            <a-avatar :size="64" style="margin-bottom: 20px; margin-right: 10px;">
                <IconUser />
                <template #trigger-icon>
                    <IconEdit />
                </template>
            </a-avatar>
            <a-typography-text>Username</a-typography-text>
            <div style="margin-bottom: 20px;">
                <a-breadcrumb separator="|">
                    <a-breadcrumb-item>关注了 0</a-breadcrumb-item>
                    <a-breadcrumb-item>关注者 0</a-breadcrumb-item>
                </a-breadcrumb>
            </div>
            <div class="icons" style="margin-bottom: 20px;">
                <a-space size="large">
                    <a-space>
                        <IconThumbUp />获赞 100
                    </a-space>
                    <a-space>
                        <icon-star />收藏 0
                    </a-space>
                    <a-space>
                        <icon-eye />阅读 299
                    </a-space>
                </a-space>
            </div>
            <a-card-meta title="个人简介" style="margin-bottom: 20px;">
                <template #description>
                    <a-typography-text>
                        这里空空如也
                    </a-typography-text>
                </template>
            </a-card-meta>

            <a-button type="outline" shape="round" long click="">编辑资料</a-button>
            <a-space></a-space>
            <a-button type="primary" shape="round" long @click="toHome">返回首页</a-button>

        </a-card>
        <a-grid :cols="4" :colGap="12" :rowGap="16">

            <a-grid-item :span="2" class="demo-item">
                <a-typography-title :heading="6">解题数量</a-typography-title>
                <div class="progress-layout">
                    <div class="circle-progress">
                        <a-progress type="circle" size="large" :percent="circlePercent" :color="{
                            '0%': 'rgb(var(--primary-6))',
                            '75%': 'rgb(var(--success-6))',
                        }" />
                    </div>
                    <div class="bar-progress">
                        <a-progress v-for="item in barPercent" size="large" :key="item.label" :percent="item.ac / item.all"
                            :color="{
                                '0%': 'rgb(var(--primary-6))',
                                '75%': 'rgb(var(--success-6))',
                            }">
                            <template v-slot:text="">
                                {{ item.level }} : {{ item.ac }} / {{ item.all }}
                            </template>
                        </a-progress>
                    </div>
                </div>
            </a-grid-item>
            <a-grid-item :span="2" class="demo-item">
                <a-space style="margin-top: 5px;">
                    <icon-trophy size="32" />个人荣誉
                </a-space>
                <div style="display: flex; margin-left: 10px;">
                    <a-space>
                        <icon-code size="20" />
                        rating: <a-typography-text type="warning">
                            1900
                        </a-typography-text>
                    </a-space>
                </div>
                <div style="display: flex; margin-left: 10px;">
                    <a-space>
                        <icon-bar-chart size="20" />
                        历史最佳: <a-typography-text type="danger">
                            2000
                        </a-typography-text>
                    </a-space>
                </div>

            </a-grid-item>
            <a-grid-item class="" style="height: auto;" :offset="0" :span="4">
                <a-calendar></a-calendar>
            </a-grid-item>

            <a-grid-item class="demo-item" :offset="0" :span="4">item | span - 3</a-grid-item>
        </a-grid>
    </div>
</template>

<style scoped>
.icon-hover {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: all 0.1s;
}

.icon-hover:hover {
    background-color: rgb(var(--gray-2));
}

.progress-layout {
    display: flex;
    align-items: center;
    margin-left: 10px;
}

.circle-progress {
    margin-right: 50px;
}

.bar-progress {
    margin-right: 20px;
}

.personal-info {
    width: 360px;
    margin-left: 60px;
    margin-right: 40px;
    justify-content: center;
}

#profileView .demo-item {
    height: 200px;
    overflow: hidden;
    /* justify-content: center; */
    line-height: 50px;
    border-radius: 15px;
    border: 1px solid #ccc;
    /* color: var(--color-white); */
    text-align: center;
}
</style>