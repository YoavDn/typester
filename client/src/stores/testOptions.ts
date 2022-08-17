import { defineStore } from 'pinia'
import { useTestStore, } from './test'
import type { testModeType, testLevelType } from '@/types'


export const useTestOptionsStore = defineStore({
    id: 'testOptions',
    state: () => ({
        testMode: 'time' as testModeType,
        testLevel: 30 as testLevelType,
    }),
    getters: {
        getTestMode: ({ testMode }) => testMode,
        getTestLevel: ({ testLevel }) => testLevel,
    },
    actions: {
        setTestMode(testMode: testModeType) {
            const testStore = useTestStore()
            this.testMode = testMode
            testStore.setReload()
        },

        setTestLevel(testLevel: testLevelType) {
            const testStore = useTestStore()
            this.testLevel = testLevel
        }
    }
})
