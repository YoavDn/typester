<script setup lang='ts'>
import { computed } from 'vue'
import LeaderboardStage from '@/components/LeaderboardStage.vue';
import LeaderboardTable from '../components/LeaderboardTable.vue';
import { useLeaderboardStore } from '@/stores/LeaderboardStore';
const leaderboardStore = useLeaderboardStore()

const leaderboardList = computed(() => leaderboardStore.getLeaderboardTests)

</script>

<template>
    <section v-if="leaderboardList.length > 0" class="leaderboard-page">
        <LeaderboardStage :leaderboardList="leaderboardList" />
        <LeaderboardTable :leaderboardList="leaderboardList" />
    </section>
</template>


<style lang='scss'>
.leader-board-page {
    width: 100%;
}
</style>