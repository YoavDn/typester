
<script setup lang='ts'>
import { useTestStore } from '@/stores/test';
import { computed } from 'vue';
const testStore = useTestStore()
const test = computed(() => testStore.getTest)

</script>


<template>
    <h2 v-if="test">{{ test.time }}</h2>
</template>


<style lang='scss'>
</style>