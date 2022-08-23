    
<script setup lang='ts'>

import { ref, onMounted, computed, watchEffect, watch, onUnmounted } from 'vue';
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
const isReloadTest = computed(() => testStore.getIsNewTest)
const testLevel = computed(() => testOptionsStore.getTestLevel)
const testMode = computed(() => testOptionsStore.getTestMode)
const caretPos = computed(() => caretStore.getCaretPos)

//refs
const ElGameInput = ref<null | HTMLInputElement>(null)
const ElMainContainer = ref<HTMLElement | null>(null)
const ElWords = ref<HTMLElement[]>([])
const ElWordsContainer = ref<HTMLElement | null>(null)

const wordsToRender = computed(() => {
    return testMode.value === 'words' && testLevel.value === 15 ?
        testRef.value?.txt.slice(0, testLevel.value) :
        testRef.value?.txt
})

ElMainContainer.value?.scrollTo({
    top: 0,
    behavior: 'smooth'
})

onUnmounted(() => {
    finishWatch()
    newTestWatch()
    scrollWatch()
    wordsStyleWatch()

})

onMounted(() => {
    initTest()
})

const finishWatch = watchEffect(() => {
    if (testMode.value === 'time' && testRef.value!.time > testLevel.value) testStore.finishTest()
})

const newTestWatch = watchEffect(() => {
    if (isReloadTest.value === true) {
        testStore.newTest()
        if (ElWords.value.length > 1) initTest()
    }
})

const scrollWatch = watchEffect(() => {
    if (caretPos.value) scrollIntoMiddleLine()
})

const wordsStyleWatch = watchEffect(() => {
    if (!testRef.value || ElWords.value.length < 1) return
    const { currWord } = testRef.value
    const activeWord = ElWords.value[currWord.idx - 1]

    if (currWord.idx < 1) return

    if (testRef.value!.txt[currWord.idx - 1].isCorrect === false) {
        activeWord.classList.add('word-bad')
    } else if (testRef.value!.txt[currWord.idx - 1].isCorrect) {
        activeWord.classList.remove('word-bad')
    }
})

function initTest() {
    ElGameInput.value?.focus()
    caretStore.setLatterEnd(false)
    ElMainContainer.value?.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    updateCaret()
}

function handleInput(e: Event) {

    if (ElGameInput === null || !testRef.value || ElWords.value.length < 1) return
    const key = (e.target as HTMLInputElement).value

    testStore.handleType(key)
    ElGameInput.value!.value = ''

    //update care
    updateCaret()
}

function handleSpicialKeys(e: Event) {
    const key = (e as KeyboardEvent).key

    if (key === 'Enter' && !isActiveTest.value) {
        ElWords.value.forEach(wordEl => {
            wordEl.classList.remove('word-bad')
            updateCaret()
        })
        testStore.reloadTest()
    } else if (key === 'Backspace' || key === 'Escape') {
        ElGameInput.value?.focus()
        testStore.hendleSpicialKeys(key)
        updateCaret()
    }
    //update care
}



function updateCaret() {
    if (ElMainContainer !== null && testRef.value) {
        const { currWord, currLatter } = testRef.value

        const latterRef = ElWords.value[currWord.idx].children[currLatter.idx]
        caretStore.updatedCaretPos(latterRef as HTMLElement, ElWordsContainer.value as HTMLElement)
    }
}

function inputFocus() {
    ElGameInput.value?.focus()
}

function activateTest() {
    testStore.activateTest()
    inputFocus()
}


function scrollIntoMiddleLine() {
    const caretPos = caretStore.getCaretPos

    if (testOptionsStore.getIsOnMinWords) return
    if (caretPos === null) return

    ElMainContainer.value?.scrollTo({
        top: caretPos.top,
        behavior: 'smooth'
    })
}

const updateWordsRefs = ((el: HTMLElement | null, idx: number) => {
    if (el === null) return
    ElWords.value[idx] = el
})

const timeLeft = computed(() => {
    if (!testRef.value) return
    return testLevel.value - Math.round(testRef.value.time)
})
const testWordsComplete = computed(() => testRef.value?.currWord.idx + "/" + testLevel.value)


</script>

<template>
    <section class="test-container" @click="activateTest">
        <div v-if="!isActiveTest && testRef?.currWord.idx !== 0" class="overlay">
            <div class="text-modal">
                <h2>Press any key to continue</h2>
                <h3>Press Enter to reaplay</h3>
            </div>
        </div>
        <div class="test-options-bar flex">
            <div :style="{ opacity: isActiveTest ? 1 : 0 }" class="test-mode">
                <h2 v-if="testMode === 'time'">{{ timeLeft }}</h2>
                <h2 v-else>{{ testWordsComplete }}</h2>
            </div>
        </div>
        <div class="words-wapper" @click="inputFocus" ref="ElMainContainer">
            <Caret />
            <input class="game-input" tabindex="0" ref="ElGameInput" @keydown="handleSpicialKeys"
                @input.stop="handleInput" type="text">
            <main class="word-container flex" ref="ElWordsContainer">
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
            font-family: "Roboto Mono", sans-serif;
            font-weight: 400;
            color: var(--theme);
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

        .word {
            display: flex;
            font-family: "Roboto Mono", sans-serif;
            line-height: 1.2em;
            font-size: 2.5rem;
            font-weight: 400;
            letter-spacing: .1rem;
            margin: .6rem;

            &.word-bad {
                text-decoration: underline;
                text-decoration-color: var(--text-typo);
            }
        }
    }




}
</style>