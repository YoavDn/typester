
<script setup lang='ts'>
import { computed } from 'vue';
import { useCaretStore } from '@/stores/caret'

const caretStore = useCaretStore()
const caretPos = computed(() => caretStore.getCaretPos)
console.log(caretPos);

const caretCssPos = computed(() => {
    if (caretPos.value !== null) {
        const { top, left } = caretPos.value!
        return { top: top + 'px', left: left + 'px' }
    }
})
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
