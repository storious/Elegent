<script setup lang="ts">
import {
    IconHome,
    IconQrcode
} from '@arco-design/web-vue/es/icon'

</script>

<template>
    <div id="description-view">

        <a-split :style="{
            height: '850px',
            width: '100%',
            minWidth: '500px',
            border: '1px solid var(--color-border)'
        }" min="80px">
            <template #first>
                <a-typography-paragraph>Left</a-typography-paragraph>
            </template>
            <template #second>
                <div>
                    <a-split direction="vertical" :style="{ height: '850px' }" min="80px" max="800px"
                        default-size="0.8">
                        <template #first><a-typography-paragraph>Top</a-typography-paragraph></template>
                        <template #second><a-typography-paragraph>
                                <div class="bottom">Bottom</div>
                            </a-typography-paragraph></template>
                    </a-split>
                </div>
            </template>
        </a-split>
    </div>
</template>

<style scoped></style>