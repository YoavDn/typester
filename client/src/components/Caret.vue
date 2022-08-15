
<script setup lang='ts'>
import { computed } from 'vue';
const { caretPos } = defineProps<{ caretPos: { top: number, left: number } }>()

console.log(caretPos);

const caretCssPos = computed(() => {
    const { top, left } = caretPos
    return { top: top + 'px', left: left + 'px' }
})
console.log(caretCssPos);
</script>


<template>
    <div class="caret" :style="caretCssPos">
    </div>
</template>
    

<style lang="scss" >
.caret {
    position: absolute;
    width: 2px;
    // top: 10px;
    height: 2.7rem;
    transform: translateY(20%);
    background-color: rgb(57, 101, 222);
    z-index: 299;

}
</style>
