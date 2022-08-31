import { useRouter, useRoute } from 'vue-router'
import { testLogic } from '@/service/testLogic'
import { defineStore } from 'pinia'
import { useTestStore, } from './TestStore'
import { ref, computed, reactive, watchEffect } from 'vue'
import type { testModeType, testLevelType, ITestSettings } from '@/types'



export const useTestOptionsStore = defineStore("testPtions", () => {
    const testStore = useTestStore()
    const router = useRouter()

    const testMode = ref<testModeType>(testLogic.localTestMode().mode)
    const testLevel = ref<testLevelType>(testLogic.localTestMode().level)
    const testSettings = reactive<ITestSettings>(testLogic.localSettings())


    // getters
    const getTestSettings = computed(() => testSettings)
    const getRtl = computed(() => testSettings.lang === 'hebrew')
    const getTestMode = computed(() => testMode.value)
    const getTestLevel = computed(() => testLevel.value)
    const getIsOnMinWords = computed(() => testLevel.value === 15 && testMode.value === 'words')



    //actions 
    function setTestMode(mode: testModeType) {
        testMode.value = mode
        testLogic.saveLocalTestMode({ mode: testMode.value, level: testLevel.value })

        testStore.setNewTest()
        router.push('/test')
    }

    function setTestLevel(level: testLevelType) {
        testLevel.value = level
        testLogic.saveLocalTestMode({ mode: testMode.value, level: testLevel.value })
        testStore.setNewTest()
        router.push('/test')
    }


    function setNewSettings(newSettings: ITestSettings) {
        testSettings.lang = newSettings.lang
        testSettings.difficulty = newSettings.difficulty
        testSettings.smoothCaret = newSettings.smoothCaret
        localStorage.setItem('testSettings', JSON.stringify(newSettings))
    }

    return {
        getTestLevel,
        setNewSettings,
        getRtl,
        getTestSettings,
        testSettings,
        getTestMode,
        setTestMode,
        setTestLevel,
        getIsOnMinWords
    }
})



