import { useRouter, useRoute } from 'vue-router'
import { testLogic } from '@/service/testLogic'
import { defineStore } from 'pinia'
import { useTestStore, } from './test'
import { ref, computed } from 'vue'
import type { testModeType, testLevelType } from '@/types'


export const useTestOptionsStore = defineStore("testPtions", () => {
    const testStore = useTestStore()
    const router = useRouter()

    const testMode = ref<testModeType>(testLogic.localOption().mode)
    const testLevel = ref<testLevelType>(testLogic.localOption().level)

    // getters
    const getTestMode = computed(() => testMode.value)
    const getTestLevel = computed(() => testLevel.value)
    const getIsOnMinWords = computed(() => testLevel.value === 15 && testMode.value === 'words')



    //actions 
    function setTestMode(mode: testModeType) {
        testMode.value = mode
        testLogic.saveLocalOption({ mode: testMode.value, level: testLevel.value })

        testStore.setNewTest()
        router.push('/test')
    }

    function setTestLevel(level: testLevelType) {
        testLevel.value = level
        testLogic.saveLocalOption({ mode: testMode.value, level: testLevel.value })
        testStore.setNewTest()
        router.push('/test')
    }

    return {
        getTestLevel,
        getTestMode,
        setTestMode,
        setTestLevel,
        getIsOnMinWords
    }
})



