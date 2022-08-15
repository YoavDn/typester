
<script setup lang='ts'>
import type { latterType } from '@/types';
defineProps<{ latter: latterType }>()
</script>
<template>
    <p>{{ latter.latter }}</p>
</template>
    