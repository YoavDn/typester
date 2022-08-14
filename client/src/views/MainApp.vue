    
<script setup lang='ts'>
import Word from '@/components/Word.vue';
import { useTestStore } from '@/stores/test';
import { ref, onMounted } from 'vue';

const test = useTestStore()
test.loadTest()

const gameInput = ref<null | HTMLInputElement>(null)

onMounted(() => {
    if (gameInput.value !== null) {
        gameInput.value.focus()
        console.log(gameInput);
    }

})

const testRef = test.getTest
console.log(testRef);


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

    <div class="words-wapper" @click="inputFocus">
        <input class="game-input" ref="gameInput" @input="handleInput" type="text">
        <main class="word-container flex">
            <div class="word flex" v-for="wordObj in testRef?.txt" :key="wordObj.word">
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