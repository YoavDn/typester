    
<script setup lang='ts'>
import Word from '@/components/Word.vue';
import Caret from '@/components/Caret.vue'
import { useLatterPos } from '@/features/useLatterPos'
import { useTestStore } from '@/stores/test';
import { ref, onMounted } from 'vue';
import type { caretPosType } from '@/types'

const test = useTestStore()
test.loadTest()

const testRef = test.getTest
const gameInput = ref<null | HTMLInputElement>(null)
const mainContainer = ref<HTMLElement | null>(null)
const wordRefs = ref([])

let caretPos = ref<caretPosType | null>(null)


onMounted(() => {
    gameInput.value?.focus()
    if (typeof mainContainer !== null
        && typeof caretPos !== null) {
        caretPos.value = useLatterPos(wordRefs.value[3], mainContainer.value)
    }
    test.activateTest()
})



function handleInput() {
    if (gameInput.value !== null) {
        console.log(gameInput.value.value);
    }
}

function inputFocus() {
    gameInput.value?.focus()
}

</script>

<template>

    <div class="words-wapper" @click="inputFocus" ref="mainContainer">
        <Caret v-if="test.isActive && caretPos" :caretPos="caretPos" />
        <input class="game-input" ref="gameInput" @input="handleInput" type="text">
        <main class="word-container flex">
            <div class="word flex" v-for="(wordObj, idx) in testRef?.txt" ref="wordRefs" :key="wordObj.word">
                <Word :word="wordObj" />
            </div>
        </main>
    </div>
</template>

    
<style lang="scss" scoped>
@import '@/assets/style/main.scss';



.words-wapper {
    height: 143.11px;
    position: relative;
    overflow: hidden;

    .game-input {
        position: fixed;
        height: 0;
        opacity: 0;

        z-index: -10;
    }


    .word-container {
        position: absolute;
        align-items: flex-start;
        height: fit-content;
        overflow: hidden;
        flex-wrap: wrap;
        width: 100%;
        z-index: 99;

        .word {
            display: flex;
            font-size: 2.6rem;
            margin: .6rem
        }
    }
}
</style>