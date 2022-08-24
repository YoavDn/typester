<script setup lang='ts'>
import GoogleSvg from '@/assets/imgs/google.svg'
import EmailSvg from '@/assets/imgs/email.svg'
import { reactive } from 'vue';
defineProps<{ isWithEmail: Boolean, user: any }>()
const emits = defineEmits(['emailLogin'])

const loginInputs = reactive({
    email: '',
    password: ''
})

function login() {
    emits('emailLogin', loginInputs)
    loginInputs.email = ''
    loginInputs.password = ''
}
</script>


<template>
    <section v-if="!user" class="login-signup-page">
        <h2 class="login-title">Log in to Typester</h2>
        <div v-if="!isWithEmail" class="login-with-options flex-column">
            <div class="login-option google flex">
                <GoogleSvg />
                <h2>continue with google</h2>
            </div>
            <div @click="$emit('setEmailOption', true)" class="login-option email flex">
                <EmailSvg class="email-svg" />
                <h2>continue with Email</h2>
            </div>

        </div>
        <form v-if="isWithEmail" class="login-form">
            <input v-model="loginInputs.email" name="email" type="text" placeholder="Email Adress" required>
            <input v-model="loginInputs.password" name="password" type="password" placeholder="Password" required>
            <button @click.prevent="login" class="login-btn">Login</button>
            <p @click="$emit('setEmailOption', false)">&leftarrow; Other Login Options</p>
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
        color: var(--text);
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
                color: var(--bg);
                font-weight: 400;
            }

            &.google {
                background-color: var(--text);

                &:hover {
                    background-color: var(--text);
                }
            }

            &.email {
                h2 {
                    color: white
                }

                background-color: var(--theme);

                .email-svg {
                    fill: var(--text)
                }

                &:hover {
                    background-color: var(--theme);
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
            border: solid 1px var(--text-dull);
            border-radius: .6rem;
            color: var(--text);
            outline: none;

            &::placeholder {
                font-size: 16px;
                font-weight: 200;
            }

            &:focus {
                border: solid 1px var(--text);
            }
        }

        .login-btn {
            cursor: pointer;
            margin-block: 1rem;
            border: solid 1px var(--theme);
            font-size: 16px;
            color: var(--text);
            border-radius: .6rem;
            padding: 1rem;
            transition: all .2s;
            background-color: var(--theme);

            &:hover {
                background-color: transparent;
            }
        }

        p {
            cursor: pointer;
            text-align: center;
            line-height: 50px;
            font-size: 1.5rem;
            color: var(--text);

            &:hover {
                text-decoration: underline;
            }
        }

    }
}
</style>