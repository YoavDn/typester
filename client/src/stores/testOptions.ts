import { defineStore } from 'pinia'
import { useTestStore, } from './test'
import type { testModeType, testLevelType } from '@/types'


export const useTestOptionsStore = defineStore({
    id: 'testOptions',
    state: () => ({
        testMode: 'words' as testModeType,
        testLevel: 15 as testLevelType,
    }),
    getters: {
        getTestMode: ({ testMode }) => testMode,
        getTestLevel: ({ testLevel }) => testLevel,
        getIsOnMinWords: ({ testLevel, testMode }) => testLevel === 15 && testMode === 'words'
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
            testStore.setReload()

        }
    }
})
