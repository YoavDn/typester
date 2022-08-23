
<script setup lang='ts'>
import { computed } from 'vue';
import type { latterType } from '@/types';
const props = defineProps<{ latter: latterType }>()

const latterColor = computed(() => (
    {
        correct: props.latter.isCorrect === true,
        typo: props.latter.isCorrect === false,
        notTyped: props.latter.isCorrect === null
    }
))
</script>
<template>
    <p :class="[latter, latterColor]">{{ latter.latter }}</p>
</template>

<style lang="scss" >
@import '@/assets/style/main.scss';

.latter {
    &.notTyped {
        color: var(--text-dull);
    }

    &.typo {
        color: var(--text-typo);
    }

    &.correct {
        color: var(--text)
    }
}
</style>
    
        
