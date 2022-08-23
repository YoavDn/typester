<script setup lang='ts'>
import { useUserStore } from '@/stores/user';
const userStore = useUserStore()
const loggedInuser = userStore.getLoggedInUser
</script>


<template>
    <section v-if="loggedInuser" class="user-page"></section>
    <section v-else class="login-signup-page">
        <h2 class="login-title">Log in to Typester</h2>
        <form class="login-form">
            <input name="email" type="text" placeholder="Email Adress">
            <input name="password" type="password" placeholder="Password">
            <button class="login-btn">Login</button>
        </form>
    </section>
</template>


<style lang='scss'>
@import '@/assets/style/main.scss';

.login-signup-page {
    margin: auto;
    height: 300px;

    .login-title {
        font-size: 3.5rem;
        font-weight: 700;
        color: $text;
        text-align: center;
        margin-bottom: 1rem;
    }


    .login-form {
        display: flex;
        flex-direction: column;
        padding-block: 3rem;
        margin: auto;
        width: 300px;

        input {
            font-size: 16px;
            line-height: 40px;
            display: inline-flex;
            margin-bottom: 1rem;
            padding: 1px 1rem;
            background-color: transparent;
            border: solid 1px rgba($text , .4);
            border-radius: .6rem;
            color: $text;
            outline: none;

            &::placeholder {
                font-size: 16px;
                font-weight: 200;
            }

            &:focus {
                border: solid 1px $text;
            }
        }

        .login-btn {
            cursor: pointer;
            margin-top: 1rem;
            border: solid 1px $main-theme;
            font-size: 16px;
            color: $text;
            border-radius: .6rem;
            padding: 1rem;
            transition: all .2s;
            background-color: $main-theme;

            &:hover {
                background-color: transparent;
            }
        }

    }
}
</style>