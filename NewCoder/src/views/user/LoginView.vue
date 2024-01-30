<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserLoginRequest } from "../../../generated";
import message from '@arco-design/web-vue/es/message';
import { useRouter } from "vue-router";
import { useStore } from "vuex"

const form = reactive({
    userAccount: '',
    userPassword: '',
} as UserLoginRequest);

const router = useRouter();
const store = useStore();

const handleSubmit = async () => {
    const res = await UserControllerService.userLoginUsingPost(form);
    // console.log(form)

    if (res.code === 0) {
        router.push({
            path: "/",
            replace: true,
        });
        store.dispatch("user/getLoginUser");
        // alert("登录成功," + JSON.stringify(res.data))
    }
    else {
        message.error("登录失败," + res.message);
    }
}


</script>

<template>
    <div id="userLoginView">
        <a-form style="max-width: 360px; margin:0 auto" label-algin="left" auto-label-width="true" :model="form"
            @submit="handleSubmit">
            <a-form-item field="userAccount" label="账号">
                <a-input v-model="form.userAccount" placeholder="请输入账号" />
            </a-form-item>
            <a-form-item field="userPassword" label="密码">
                <a-input-password v-model="form.userPassword" placeholder="请输入密码" />
            </a-form-item>
            <a-form-item>
                <a-button type="primary" html-type="submit">登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<style scoped></style>