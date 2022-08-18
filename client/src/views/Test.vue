    
<script setup lang='ts'>

import { ref, onMounted, computed, watchEffect, watch } from 'vue';
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
const caretPos = computed(() => caretStore.getCaretPos)

//refs
const gameInput = ref<null | HTMLInputElement>(null)
const mainContainer = ref<HTMLElement | null>(null)
const wordRefs = ref<HTMLElement[]>([])
const wordsContainer = ref<HTMLElement | null>(null)

const wordsToRender = computed(() => {
    return testMode.value === 'words' && testLevel.value === 15 ?
        testRef.value?.txt.slice(0, testLevel.value) :
        testRef.value?.txt
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
    if (caretPos.value)
        scrollIntoMiddleLine()
})

const wordsWapperHeight = computed(() => {
    console.log(wordRefs.value);
    if (mainContainer !== null && testRef.value && wordRefs.value.length > 1) {
        console.log(wordRefs.value[0].clientHeight);
        return { height: wordRefs.value[0].children[0].clientHeight * 3 + "px" }
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
    if (wordsContainer.value!.clientHeight - 5 > mainContainer.value!.clientHeight) caretStore.setisAllWordsShown(false)
    else caretStore.setisAllWordsShown(true)

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
    if (!mainContainer || !wordsContainer) return
    if (caretPos === null) return

    console.log(wordsContainer.value!.clientHeight - 5, mainContainer.value!.clientHeight,);
    if ((wordsContainer.value!.clientHeight - 5) > mainContainer.value!.clientHeight) {
        const relativeTop = caretStore.getRelativeTop
        console.log('why');
        mainContainer.value!.scrollTo({
            top: relativeTop,
            behavior: 'smooth'
        })
    }
}

const updateWordsRefs = ((el: HTMLElement | null, idx: number) => {
    if (el === null) return
    wordRefs.value[idx] = el
})

const timeLeft = computed(() => {
    if (!testRef.value) return
    return testLevel.value - testRef.value.time
})
const testWordsComplete = computed(() => testRef.value?.currWord.idx + "/" + testLevel.value)


</script>

<template>
    <section class="test-container">
        <!-- <div v-if="!isActiveTest && testRef?.currWord.idx !== 0" class="overlay">
            <h2>Press any key to continue</h2>
        </div> -->
        <div class="test-options-bar flex">
            <div :style="{ opacity: isActiveTest ? 1 : 0 }" class="test-mode">
                <h2 v-if="testMode === 'time'">{{ timeLeft }}</h2>
                <h2 v-else>{{ testWordsComplete }}</h2>
            </div>
        </div>
        <div class="words-wapper" :style="wordsWapperHeight" @click="inputFocus" ref="mainContainer">
            <Caret />
            <input class="game-input" ref="gameInput" @keydown="handleSpicialKeys" @input="handleInput" type="text">
            <main class="word-container flex" ref="wordsContainer">
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

        .word {
            display: flex;
            line-height: 4.1rem;
            font-size: 2.5rem;
            font-weight: 400;
            letter-spacing: .1rem;
            margin-inline: .6rem;

            &.word-bad {
                text-decoration: underline;
                text-decoration-color: $text-typo;
            }
        }
    }




}
</style>