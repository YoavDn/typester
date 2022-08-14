import { defineStore } from "pinia";
import type { testType } from "@/types";

export const useTestStore = defineStore({
    id: 'test',
    state: () => ({
        txtBody: null as null | string,
        test: null as testType,
        isActive: false
    }),

    actions: {
        loadTest: () => 
    }
})