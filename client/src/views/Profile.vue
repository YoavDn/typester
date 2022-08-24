<script setup lang='ts'>

import { ref } from 'vue'
import { useUserStore } from '@/stores/user';
import Login from '@/components/Login.vue';
const userStore = useUserStore()
const loggedInUser = userStore.getLoggedInUser

const isWithEmail = ref<boolean>(false)

function loginWithEmail(inputs: { email: string, password: string }) {
    console.log(inputs);
}

</script>


<template>
    <section v-if="loggedInUser" class="user-page"></section>
    <Login :isWithEmail="isWithEmail" :user="loggedInUser" @setEmailOption="(isEmail: boolean) => isWithEmail = isEmail"
        @emailLogin="loginWithEmail" />

</template>


<style lang='scss'>
</style>