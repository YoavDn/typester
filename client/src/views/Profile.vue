<script setup lang='ts'>

import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user';
import Login from '@/components/Login.vue';
import UserInfo from '@/components/UserInfo.vue'

defineEmits(['loginWithEmail', 'loginWithGoogle'])
const userStore = useUserStore()
const loggedInUser = computed(() => userStore.getLoggedInUser)

const isWithEmail = ref<boolean>(false)

async function loginWithEmail(inputs: { username: string, password: string }) {
    await userStore.login(inputs)
}

async function loginWithGoogle() {
    await userStore.loginWithGoogle()
}

async function register(registerInputs: { password: string, email: string, username: string }) {
    await userStore.signup(registerInputs)
}

</script>


<template>
    <UserInfo v-if="loggedInUser" :user="loggedInUser" />
    <Login v-else :isWithEmail="isWithEmail" :user="loggedInUser"
        @setEmailOption="(isEmail: boolean) => isWithEmail = isEmail" @emailLogin="loginWithEmail"
        @loginWithGoogle="loginWithGoogle" @register="register" />

</template>


<style lang='scss'>
</style>