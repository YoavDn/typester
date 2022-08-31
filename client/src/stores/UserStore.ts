import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
import type { IUser, testType, IUserTest } from '@/types'

import { userService } from '@/service/user.service'
import { testService } from '@/service/test.service'

export const useUserStore = defineStore('user', () => {

    const user = ref<IUser | null>(null)
    const userTests = ref<IUserTest[] | null>(null)

    const getLoggedInUser = computed(() => user.value)
    const getUserTests = computed(() => userTests.value)

    async function setUserTests() {
        if (!user.value) return
        userTests.value = await testService.getUserTests(user.value.id)
    }

    async function setLoggedInUser() {
        user.value = await userService.getLoggedInUser()
        setUserTests()
    }

    async function loginWithGoogle() {
        if (process.env.NODE_ENV === 'production') {
            window.open('/api/user/google/login')
        } else {
            window.open('http://localhost:3000/api/user/google/login')
        }
        // user.value = await userService.loginWithGoogle()
    }

    async function login(inputs: { username: string, password: string }) {
        user.value = await userService.login(inputs)
    }

    async function signup(registerInputs: { username: string, email: string, password: string }) {
        await userService.signup(registerInputs)
        document.location.reload()
    }

    async function logout() {
        await userService.logout()
    }

    return {
        user,
        userTests,
        getLoggedInUser,
        login,
        setLoggedInUser,
        loginWithGoogle,
        logout,
        signup,
        getUserTests
    }
})