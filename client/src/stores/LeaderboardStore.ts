import { defineStore } from "pinia"
import { computed, ref, reactive } from 'vue'
import type { leaderboardItem } from '@/types'
import { testService } from "@/service/test.service"

export const useLeaderboardStore = defineStore('leaderboard', () => {

    const leaderboardList = ref<leaderboardItem[]>([])

    async function getLeaderboardTests() {
        leaderboardList.value = await testService.getTopTests()
        // const res: leaderboardItem[] = await testService.getTopTests()
    }

    return {
        getLeaderboardTests,
        leaderboardList,
    }
})