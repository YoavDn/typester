import { defineStore } from "pinia"
import { computed, ref, reactive } from 'vue'
import type { leaderboardItem } from '@/types'
import { testService } from "@/service/test.service"

export const useLeaderboardStore = defineStore('leaderboard', () => {

    const leaderboardList = ref<leaderboardItem[]>([])

    async function getLeaderboardTests() {
        // leaderboardList.value = await testService.getTopTests()
        const res = await testService.getTopTests()
        console.log(res, 'shit');
    }

    return {
        getLeaderboardTests,
        leaderboardList,
    }
})