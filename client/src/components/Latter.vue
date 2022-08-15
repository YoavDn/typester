
<script setup lang='ts'>
import { computed } from 'vue';
import type { latterType } from '@/types';
const props = defineProps<{ latter: latterType }>()

const latterColor = computed(() => ({ correct: props.latter.isCorrect === true, typo: props.latter.isCorrect === false }))
</script>
<template>
    <p :class="[latter, latterColor]">{{ latter.latter }}</p>
</template>

<style lang="scss" >
@import '@/assets/style/main.scss';

.latter {
    color: $text-dull;

    &.typo {
        color: $text-typo;
    }

    &.correct {
        color: $text
    }
}
</style>
    
        
