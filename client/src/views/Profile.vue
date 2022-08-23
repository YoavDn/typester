<script setup lang='ts'>
import GoogleSvg from '@/assets/imgs/google.svg'
import EmailSvg from '@/assets/imgs/email.svg'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user';
const userStore = useUserStore()
const loggedInuser = userStore.getLoggedInUser

const isWithEmail = ref<boolean>(false)

</script>


<template>
    <section v-if="loggedInuser" class="user-page"></section>
    <section v-else class="login-signup-page">
        <h2 class="login-title">Log in to Typester</h2>
        <div v-if="!isWithEmail" class="login-with-options flex-column">
            <div class="login-option google flex">
                <GoogleSvg />
                <h2>continue with google</h2>
            </div>
            <div @click="isWithEmail = true" class="login-option email flex">
                <EmailSvg />
                <h2>continue with Email</h2>
            </div>

        </div>
        <form v-if="isWithEmail" class="login-form">
            <input name="email" type="text" placeholder="Email Adress">
            <input name="password" type="password" placeholder="Password">
            <button class="login-btn">Login</button>
            <p @click="isWithEmail = false">&leftarrow; Other Login Options</p>
        </form>

    </section>
</template>


<style lang='scss'>
@import '@/assets/style/main.scss';

.login-signup-page {
    margin: auto;
    height: 300px;

    .login-title {
        font-size: 2.8rem;
        font-weight: 700;
        color: $text;
        text-align: center;
        margin-bottom: 3.4rem;
    }

    .login-with-options {
        width: 350px;


        .login-option {
            cursor: pointer;
            margin: 1rem;
            padding: 1rem;
            justify-content: center;
            align-items: center;
            border-radius: .6rem;
            line-height: 25px;
            gap: 10px;
            transition: all .2s;

            h2 {
                font-size: 17px;
                line-height: 24px;
                font-weight: 400;
            }

            &.google {
                background-color: $text;

                &:hover {
                    background-color: darken($text, 8%);
                }
            }

            &.email {
                color: $text;
                background-color: $main-theme;

                &:hover {
                    background-color: lighten($main-theme, 8%);
                }
            }
        }
    }


    .login-form {
        display: flex;
        flex-direction: column;
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
            margin-block: 1rem;
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

        p {
            cursor: pointer;
            text-align: center;
            line-height: 50px;
            font-size: 1.5rem;
            color: $text;

            &:hover {
                text-decoration: underline;
            }
        }

    }
}
</style>