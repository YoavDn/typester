import { useRouter, useRoute } from 'vue-router'
import { testService } from '@/service/test.service'
import { defineStore } from 'pinia'
import { useTestStore, } from './test'
import { ref, computed } from 'vue'
import type { testModeType, testLevelType } from '@/types'


export const useTestOptionsStore = defineStore("testPtions", () => {
    const testStore = useTestStore()
    const router = useRouter()

    // const testMode = ref<testModeType>('words')
    // const testLevel = ref<testLevelType>(30)
    const testMode = ref<testModeType>(testService.localOption().mode)
    const testLevel = ref<testLevelType>(testService.localOption().level)

    // getters
    const getTestMode = computed(() => testMode.value)
    const getTestLevel = computed(() => testLevel.value)
    const getIsOnMinWords = computed(() => testLevel.value === 15 && testMode.value === 'words')



    //actions 
    function setTestMode(mode: testModeType) {
        testMode.value = mode
        testService.saveLocalOption({ mode: testMode.value, level: testLevel.value })

        testStore.setNewTest()
        router.push('/test')
    }

    function setTestLevel(level: testLevelType) {
        testLevel.value = level
        testService.saveLocalOption({ mode: testMode.value, level: testLevel.value })
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



