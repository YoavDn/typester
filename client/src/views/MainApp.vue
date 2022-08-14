    
<script setup lang='ts'>
import { useTestStore } from '@/stores/test';

const test = useTestStore()
test.loadTest()


const testRef = test.getTest
console.log(testRef);



</script>

<template>
    <h2>main app</h2>
</template>

    
<style lang="scss" scoped>
@import '@/assets/style/main.scss';

h2 {
    color: $text
}
</style>