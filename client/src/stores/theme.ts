import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {

    const appTheme = ref<'dark' | 'light'>(localTheme())

    const getAppTheme = computed(() => appTheme.value)

    function localTheme(): "dark" | 'light' {
        const theme = localStorage.getItem('AppTheme');
        if (!theme) {
            localStorage.setItem('AppTheme', 'light')
            return 'light'
        }
        else {
            document.querySelector('body')?.classList.add(theme!)
            return theme as 'dark' | 'light'
        }
    }

    function setTheme(theme: 'dark' | 'light') {
        appTheme.value = theme
        localStorage.setItem('AppTheme', theme)
    }

    return {
        appTheme,
        getAppTheme,
        setTheme,
        localTheme
    }

})