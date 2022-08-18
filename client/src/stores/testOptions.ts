import { defineStore } from 'pinia'
import { useTestStore, } from './test'
import { ref, computed } from 'vue'
import type { testModeType, testLevelType } from '@/types'


export const useTestOptionsStore = defineStore("testPtions", () => {
    const testStore = useTestStore()

    const testMode = ref<testModeType>('words')
    const testLevel = ref<testLevelType>(15)

    // getters
    const getTestMode = computed(() => testMode.value)
    const getTestLevel = computed(() => testLevel.value)

    //actions 

    function setTestMode(mode: testModeType) {
        testMode.value = mode
        testStore.setReload()
    }

    function setTestLevel(level: testLevelType) {
        testLevel.value = level
        testStore.setReload()
    }

    return {
        getTestLevel,
        getTestMode,
        setTestMode,
        setTestLevel
    }
})



