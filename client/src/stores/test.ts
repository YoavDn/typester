import { defineStore } from "pinia";
import type { testType } from "@/types";
import { testService } from "@/service/test.service";

export const useTestStore = defineStore({
    id: 'test',
    state: () => ({
        test: null as testType,
        isActive: false
    }),
    getters: {
        getTest: (state) => state.test
    },

    actions: {
        loadTest() {
            this.test = testService.generateNewTest()
        },

        activateTest() {
            this.isActive = true
        },

        handleType(latter: string) {

        }
    }
})