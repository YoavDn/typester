import { defineStore } from "pinia"
import { computed, ref, reactive } from 'vue'
import type { leaderboardItem } from '@/types'
import { testService } from "@/service/test.service"

export const useLeaderboardStore = defineStore('leaderboard', () => {

    const leaderboardList = ref<leaderboardItem[]>([])

    const getLeaderboardTests = computed(() => leaderboardList.value)

    async function setLeaderboardTests() {
        leaderboardList.value = await testService.getTopTests()
        console.log(leaderboardList.value);
        // const res: leaderboardItem[] = await testService.getTopTests()
    }


    return {
        setLeaderboardTests,
        getLeaderboardTests,
        leaderboardList,
    }
})