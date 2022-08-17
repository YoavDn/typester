    
<script setup lang='ts'>

import { ref, onMounted, computed, watchEffect, watch } from 'vue';
import { useLatterPos } from '@/features/useLatterPos'
import { useTestStore } from '@/stores/test';
import { useCaretStore } from '@/stores/caret';

//cmps
import Word from '@/components/Word.vue';
import Caret from '@/components/Caret.vue'
const caretStore = useCaretStore()
const testStore = useTestStore()
testStore.loadTest()

const testRef = computed(() => testStore.getTest)
const gameInput = ref<null | HTMLInputElement>(null)
const mainContainer = ref<HTMLElement | null>(null)
const wordRefs = ref<HTMLElement[]>([])



onMounted(() => {
    gameInput.value?.focus()
    caretStore.setLatterEnd(false)
    updateCaret()
})

watchEffect(() => {
    if (caretStore.getCaretPos !== null) {
        scrollIntoMiddleLine()
    }
})


watchEffect(() => {
    if (!testRef.value || wordRefs.value.length < 1) return
    const { currWord } = testRef.value
    const activeWord = wordRefs.value[currWord.idx - 1]

    if (currWord.idx < 1) return

    if (testRef.value!.txt[currWord.idx - 1].isCorrect === false) {
        activeWord.classList.add('word-bad')
    } else if (testRef.value!.txt[currWord.idx - 1].isCorrect) {
        activeWord.classList.remove('word-bad')
    }
})

function handleInput(e: Event) {
    if (gameInput === null || !testRef.value || wordRefs.value.length < 1) return
    testStore.handleType((e.target as HTMLInputElement).value)
    gameInput.value!.value = ''

    //update care
    updateCaret()
}

function updateCaret() {
    if (mainContainer !== null && testRef.value) {
        const { currWord, currLatter } = testRef.value
        const latterRef = wordRefs.value[currWord.idx].children[currLatter.idx]
        caretStore.updatedCaretPos(latterRef as HTMLElement, mainContainer.value as HTMLElement)
    }
}

function handleSpicialKeys(e: Event) {
    const key = (e as KeyboardEvent).key
    if (key === 'Backspace'
        || key === 'tab'
        || key === 'esc') {

        testStore.hendleSpicialKeys(key)
        updateCaret()
    }

}


function inputFocus() {
    gameInput.value?.focus()
}

function scrollIntoMiddleLine() {
    const caretPos = caretStore.getCaretPos
    const currLineIdx = caretStore.getCurrLineIdx
    if (caretPos === null) return

    const relativeTop = caretStore.$state.relativeTop


    mainContainer.value?.scrollTo({
        top: relativeTop,
        behavior: 'smooth'
    })

}

</script>

<template>
    <div class="words-wapper" @click="inputFocus" ref="mainContainer">
        <Caret />
        <input class="game-input" ref="gameInput" @keydown="handleSpicialKeys" @input="handleInput" type="text">
        <main class="word-container flex">
            <div class="word flex" v-for="wordObj in testRef?.txt" ref="wordRefs" :key="wordObj.word">
                <Word :word="wordObj" />
            </div>
        </main>
    </div>
</template>

    
<style lang="scss">
@import '@/assets/style/main.scss';



.words-wapper {
    height: 135px;
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
        flex-wrap: wrap;
        width: 100%;
        z-index: 99;
        padding-bottom: 1em;

        .word {
            display: flex;
            font-size: 2.5rem;
            line-height: 1.2em;
            font-weight: 400;
            letter-spacing: .1rem;
            margin: .6rem;

            &.word-bad {
                text-decoration: underline;
                text-decoration-color: $text-typo;
            }
        }
    }




}
</style>