import { useRouter, useRoute } from 'vue-router'
import { defineStore } from 'pinia'
import { useTestStore, } from './test'
import { ref, computed } from 'vue'
import type { testModeType, testLevelType } from '@/types'


export const useTestOptionsStore = defineStore("testPtions", () => {
    const testStore = useTestStore()
    const router = useRouter()

    const testMode = ref<testModeType>('words')
    const testLevel = ref<testLevelType>(30)

    // getters
    const getTestMode = computed(() => testMode.value)
    const getTestLevel = computed(() => testLevel.value)
    const getIsOnMinWords = computed(() => testLevel.value === 15 && testMode.value === 'words')

    //actions 
    function setTestMode(mode: testModeType) {
        testMode.value = mode
        testStore.setNewTest()
        router.push('/')
    }

    function setTestLevel(level: testLevelType) {
        testLevel.value = level
        testStore.setNewTest()
        router.push('/')
    }

    return {
        getTestLevel,
        getTestMode,
        setTestMode,
        setTestLevel,
        getIsOnMinWords
    }
})



