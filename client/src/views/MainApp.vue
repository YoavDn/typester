    
<script setup lang='ts'>

import { ref, onMounted, computed, watchEffect, onUpdated, reactive } from 'vue';
import { useLatterPos } from '@/features/useLatterPos'
import { useTestStore } from '@/stores/test';
import { useCaretStore } from '@/stores/caret';

//cmps
import Word from '@/components/Word.vue';
import Caret from '@/components/Caret.vue'
import { useTestOptionsStore } from '@/stores/testOptions';
//stores
const caretStore = useCaretStore()
const testStore = useTestStore()
const testOptionsStore = useTestOptionsStore()

//getters
const testRef = computed(() => testStore.getTest)
const isActiveTest = computed(() => testStore.getIsActiveTest)
const isReloadTest = computed(() => testStore.getIsReloadTest)
const testLevel = computed(() => testOptionsStore.getTestLevel)
const testMode = computed(() => testOptionsStore.getTestMode)
//refs
const gameInput = ref<null | HTMLInputElement>(null)
const mainContainer = ref<HTMLElement | null>(null)
const wordRefs = ref<HTMLElement[]>([])

const wordsToRender = computed(() => {
    return testMode.value === 'time' ?
        testRef.value?.txt :
        testRef.value?.txt.slice(0, testLevel.value)
})

//making fisrt test on load
testStore.loadTest()


onMounted(() => {
    initTest()
})

watchEffect(() => {
    if (isReloadTest.value === true) {
        testStore.reloadTest()
        if (wordRefs.value.length > 1) initTest()
    }

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

function initTest() {
    gameInput.value?.focus()
    caretStore.setLatterEnd(false)
    updateCaret()
}

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

const updateWordsRefs = ((el: HTMLElement | null, idx: number) => {
    if (el === null) return
    wordRefs.value[idx] = el
})

// const testTime = computed(()=> )
const testWordsComplete = computed(() => testRef.value?.currWord.idx + "/" + testLevel.value)


</script>

<template>
    <section class="test-container">
        <div v-if="!isActiveTest" class="overlay">
            <h2>Press any key to continue</h2>
        </div>
        <div class="test-options-bar flex">
            <div :style="{ opacity: isActiveTest ? 1 : 0 }" class="test-mode">
                <h2 v-if="testMode === 'time'">30</h2>
                <h2 v-else>{{ testWordsComplete }}</h2>
            </div>
        </div>
        <div class="words-wapper" @click="inputFocus" ref="mainContainer">
            <Caret />
            <input class="game-input" ref="gameInput" @keydown="handleSpicialKeys" @input="handleInput" type="text">
            <main class="word-container flex">
                <div class="word flex" v-for="(wordObj, idx) in wordsToRender"
                    :ref="(el) => updateWordsRefs(el as HTMLElement | null, idx)" :key="wordObj.word">
                    <Word :word="wordObj" />
                </div>
            </main>
        </div>
    </section>
</template>

    
<style lang="scss">
@import '@/assets/style/main.scss';

.test-container {
    position: relative;
}

.test-options-bar {
    margin: .6rem;

    .test-mode {
        transition: all .3s;

        h2 {
            font-size: 2.4rem;
            font-weight: 400;
            color: $main-theme;
        }
    }

}

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