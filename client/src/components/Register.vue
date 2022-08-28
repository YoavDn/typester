<script setup lang='ts'>
import { reactive } from 'vue';
const emits = defineEmits(['handleRegister'])
const registerInputs = reactive({
    username: '',
    password: '',
    email: ''
})

function register() {
    emits('handleRegister', registerInputs)
    registerInputs.email = ''
    registerInputs.password = ''
    registerInputs.username = ''
}

</script>


<template>
    <form class="login-form">
        <input v-model="registerInputs.email" name="text" type="email" placeholder="Email" required>
        <input v-model="registerInputs.username" name="text" type="text" placeholder="Username" required>
        <input v-model="registerInputs.password" name="password" type="password" placeholder="Password" required>
        <button @click.prevent="register" class="login-btn">Sign up</button>
    </form>
</template>


<style lang='scss'>
</style>