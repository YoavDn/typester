
<script setup lang='ts'>
import { computed } from 'vue';
import { useCaretStore } from '@/stores/CaretStore'
import { useTestStore } from '@/stores/TestStore'
import { useTestOptionsStore } from '@/stores/TestSettings';

const testOptionsStore = useTestOptionsStore()
const testStore = useTestStore()
const caretStore = useCaretStore()

const caretPos = computed(() => caretStore.getCaretPos)
const isLatterEnd = computed(() => caretStore.getIslatterEnd)
const rtl = computed(() => testOptionsStore.getRtl)
const testSettings = computed(() => testOptionsStore.getTestSettings)

const caretCssPos = computed(() => {
    if (caretPos.value !== null) {
        const { top, left, leftEnd, right, } = caretPos.value
        if (rtl.value) {
            if (isLatterEnd.value) return { top: top + 'px', left: left + 'px' }
            return { top: top + 'px', left: leftEnd + 'px' }

        } else {
            if (isLatterEnd.value) return { top: top + 'px', left: leftEnd + 'px' }
            return { top: top + 'px', left: left + 'px' }
        }

    }
})

const caretDisplay = computed(() => ({ 'caret-key-frame': !testStore.isActive }))

const isSmoothCaret = computed(() => {
    return { 'smooth-caret-trans': testSettings.value.smoothCaret }
})
</script>


<template>
    <div :class="['caret', caretDisplay, isSmoothCaret]" :style="caretCssPos">
    </div>
</template>
    

<style lang="scss" >
@import '@/assets/style/main.scss';

.caret {
    position: absolute;
    width: 2px;
    border-radius: 2px;

    height: 4rem;
    background-color: var(--theme);
    z-index: 299;
    transform-origin: top left;
    // transition: all .20s ease 0s;
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
