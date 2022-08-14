    
<script setup lang='ts'>
import Word from '@/components/Word.vue';
import { useTestStore } from '@/stores/test';

const test = useTestStore()
test.loadTest()


const testRef = test.getTest
console.log(testRef);



</script>

<template>
    <div class="words-wapper">
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


    .word-container {
        position: absolute;
        align-items: flex-start;
        height: fit-content;
        overflow: hidden;
        flex-wrap: wrap;
        width: 100%;

        .word {
            display: flex;
            font-size: 2.6rem;
            margin: .6rem
        }
    }
}
</style>