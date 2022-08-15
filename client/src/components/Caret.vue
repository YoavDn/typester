
<script setup lang='ts'>
import { computed } from 'vue';
import { useCaretStore } from '@/stores/caret'

const caretStore = useCaretStore()
const caretPos = computed(() => caretStore.getCaretPos)
const isLatterEnd = computed(() => caretStore.getIslatterEnd)

const caretCssPos = computed(() => {
    if (caretPos.value !== null) {
        const { top, left, leftEnd, right, } = caretPos.value
        if (isLatterEnd.value) return { top: top + 'px', left: leftEnd + 'px' }
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
    width: 3px;
    border-radius: 2px;
    // top: 10px;
    height: 3.5rem;
    transform: translateY(10%);
    background-color: rgb(227, 20, 92);
    z-index: 299;
    transition: all .25s ease 0s;
}
</style>
