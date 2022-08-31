
<script setup lang='ts'>
import { computed } from 'vue';
import { useCaretStore } from '@/stores/CaretStore'
import { useTestStore } from '@/stores/TestStore'

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
@import '@/assets/style/main.scss';

.caret {
    position: absolute;
    width: 2px;
    border-radius: 2px;
    // top: 10px;
    // transform: translateY(-10%);
    height: 4rem;
    background-color: var(--theme);
    z-index: 299;
    transform-origin: top left;
    transition: all .20s ease 0s;
}

.caret-key-frame {
    animation: caretBlink 1s infinite
}


@keyframes caretBlink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: .3;
    }
}
</style>
