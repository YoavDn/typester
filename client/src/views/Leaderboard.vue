<script setup lang='ts'>
import LeaderboardStage from '@/components/LeaderboardStage.vue';
import LeaderboardTable from '../components/LeaderboardTable.vue';

</script>

<template>
    <section class="leaderboard-page">
        <LeaderboardStage v-if="true" />
        <LeaderboardTable />
    </section>
</template>


<style lang='scss'>
.leader-board-page {
    width: 100%;
}
</style>