import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {

    const loggedInUser = ref<any>(null)
    // const loggedInUser = ref<any>({ username: 'yoav' })
    const getLoggedInUser = computed(() => loggedInUser.value)

    return {
        loggedInUser,
        getLoggedInUser
    }
})