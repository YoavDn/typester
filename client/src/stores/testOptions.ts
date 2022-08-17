import { defineStore } from 'pinia'

type testModeType = 'time' | 'words'
type testLevelType = 15 | 30 | 45 | 60

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
            this.testMode = testMode
        },

        setTestLevel(testLevel: testLevelType) {
            this.testLevel = testLevel
        }
    }
})
