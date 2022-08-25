import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {

    const isDark = ref<'dark' | 'light'>(localTheme())

    const getAppTheme = computed(() => isDark.value)

    function localTheme(): "dark" | 'light' {
        const theme = localStorage.getItem('AppTheme') as 'dark' | 'light' | null
        console.log(theme);
        if (!theme) localStorage.setItem('AppTheme', 'dark')
        return theme!
    }

    function setTheme(theme: 'dark' | 'light') {
        localStorage.setItem('AppTheme', theme)
        isDark.value = theme
    }

    return {
        isDark,
        getAppTheme,
        setTheme
    }

})