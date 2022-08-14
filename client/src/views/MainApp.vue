    
<script setup lang='ts'>
import { useTestStore } from '@/stores/test';

const test = useTestStore()
test.loadTest()


const testRef = test.getTest
console.log(testRef);



</script>

<template>
    <h2>hii</h2>
    <pre>{{testRef}}</pre>
</template>

    
<style>
</style>