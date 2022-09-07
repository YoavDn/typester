<script setup lang='ts'>
import Register from './Register.vue';
import GoogleSvg from '@/assets/imgs/google.svg'
import { EnvelopeIcon } from '@heroicons/vue/24/outline';
import { reactive, ref } from 'vue';

defineProps<{ isWithEmail: Boolean, user: any }>()
const emits = defineEmits(['setEmailOption',
    'emailLogin',
    'loginWithGoogle',
    'handleRegister',
    'register'])

const isRegister = ref(false)

const loginInputs = reactive({
    username: '',
    password: ''
})

function login() {
    emits('emailLogin', loginInputs)
    loginInputs.username = ''
    loginInputs.password = ''
}

function register(registerInputs: { email: string, password: string, username: string }) {
    emits('register', registerInputs)
}

</script>


<template>
    <section v-if="!user" class="login-signup-page">
        <h2 class="login-title">{{ isRegister ? 'Resgister' : 'Log in' }} to Typester</h2>
        <div v-if="!isWithEmail" class="login-with-options flex-column">
            <div @click="$emit('loginWithGoogle')" class="login-option google flex">
                <GoogleSvg />
                <h2>continue with google</h2>
            </div>
            <div @click="$emit('setEmailOption', true)" class="login-option email flex">
                <EnvelopeIcon class="email-svg" />
                <h2>continue with Email</h2>
            </div>

        </div>
        <form v-if="isWithEmail && !isRegister" class="login-form">
            <input v-model="loginInputs.username" name="text" type="text" placeholder="Username" required>
            <input v-model="loginInputs.password" name="password" type="password" placeholder="Password" required>
            <button @click.prevent="login" class="login-btn">Login</button>
        </form>
        <Register v-if="isRegister" @handleRegister="register" />

        <p v-if="isWithEmail && !isRegister" class="sign-up-p">Don't have an account ?</p>
        <button v-if="isWithEmail && !isRegister" @click="isRegister = true" class="sign-up-btn">Sign up</button>
        <p v-if="isWithEmail" class="other-login-options" @click="$emit('setEmailOption', false), isRegister = false">
            &leftarrow; Other
            Login Options</p>
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
                    color: white;
                    width: 24px;
                }

                &:hover {
                    background-color: var(--theme);
                }
            }
        }

        @media (max-width: 500px) {
            width: 280px;
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
            color: white;
            border-radius: .6rem;
            padding: 1rem;
            transition: all .2s;
            background-color: var(--theme);

            &:hover {
                color: var(--text);
                background-color: transparent;
            }
        }



    }

    .other-login-options {
        cursor: pointer;
        text-align: center;
        line-height: 50px;
        font-size: 1.5rem;
        color: var(--text);

        &:hover {
            text-decoration: underline;
        }
    }

    .sign-up-p {
        text-align: center;
        color: var(--text);
        font-size: 1.3rem;
        line-height: 3rem;
        margin-bottom: 1rem;
    }

    .sign-up-btn {
        cursor: pointer;
        display: block;
        padding: .7rem 2.3rem;
        font-family: "Inter", sans-serif;
        border-radius: .3rem;
        border: solid 1px var(--text);
        color: var(--text);
        margin: auto;
        background-color: transparent;
        margin-bottom: 1rem;
        transition: background-color .3s ease;

        &:hover {
            color: var(--bg);
            background-color: var(--text);
        }
    }
}
</style>