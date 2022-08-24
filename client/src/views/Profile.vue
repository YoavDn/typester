<script setup lang='ts'>

import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user';
import Login from '@/components/Login.vue';
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

</script>


<template>
    <section v-if="loggedInUser" class="user-page"></section>
    <Login v-else :isWithEmail="isWithEmail" :user="loggedInUser"
        @setEmailOption="(isEmail: boolean) => isWithEmail = isEmail" @emailLogin="loginWithEmail"
        @loginWithGoogle="loginWithGoogle" />

</template>


<style lang='scss'>
</style>