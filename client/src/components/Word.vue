
    
<script setup lang='ts'>
import type { wordType } from '@/types';
import Latter from './Latter.vue';
defineProps<{ word: wordType }>()
</script>


<template>
    <div class="latter" v-for="latter in word.latters">
        <Latter :latter="latter" />
    </div>
</template>
    
<style lang="scss" scoped>
@import '@/assets/style/main.scss';

.latter {
    border-bottom: .05em solid transparent;
}
</style>