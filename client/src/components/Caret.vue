
<script setup lang='ts'>
import { computed } from 'vue';
import { useCaretStore } from '@/stores/caret'
import { useTestStore } from '@/stores/test'

const testStore = useTestStore()
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

const caretDisplay = computed(() => ({ 'caret-key-frame': !testStore.isActive }))
</script>


<template>
    <div :class="['caret', caretDisplay]" :style="caretCssPos">
    </div>
</template>
    

<style lang="scss" >
.caret {
    position: absolute;
    width: 2.4px;
    border-radius: 2px;
    // top: 10px;
    height: 3.5rem;
    // transform: translateY(10%);
    background-color: rgb(227, 20, 92);
    z-index: 299;
    transition: all .20s ease 0s;
}

.caret-key-frame {
    animation: caretBlink infinite alternate .5s ease;
}


@keyframes caretBlink {
    from {
        opacity: .2;
    }

    to {
        opacity: 1;
    }
}
</style>
