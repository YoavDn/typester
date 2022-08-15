import { defineStore } from "pinia";
import type { testType } from "@/types";
import { testService } from "@/service/test.service";

export const useTestStore = defineStore({
    id: 'test',
    state: () => ({
        test: null as testType,
        isActive: false
    }),
    getters: {
        getTest: ({ test }) => test,
        getWordFromTxt: ({ test }) => test?.txt[test.currWord.idx],
        getLatterFromTxt: ({ test }) => test?.txt[test.currWord.idx].latters[test.currLatter.idx]
    },

    actions: {
        loadTest() {
            this.test = testService.generateNewTest()
        },

        activateTest() {
            this.isActive = true
        },

        handleType(latter: string) {
            if (this.test === null) return
            const { currLatter, currWord } = this.test!

            // when correct
            if (latter === this.test?.currLatter.str) {
                this.setLatterNewStatus(true)
                if (currLatter.idx === currWord.str.length) this.finishWord()

            } else { //when wrong
                this.setLatterNewStatus(false)
                if (currLatter.idx === currWord.str.length) this.finishWord()
            }
        },

        finishWord() {

            if (this.test === null) return
            const { currLatter, currWord } = this.test!
            console.log('hi');

            //chacking if the word is correct
            if (this.test!.txt[currWord.idx].latters.every(l => l.isCorrect)) {
                console.log('hi2')
                this.test.txt[currWord.idx].isCorrect = true
            } else {
                console.log('hi');
                this.test.txt[currWord.idx].isCorrect = false
            }
        },

        setNextWord() {
            if (this.test === null) return
            const { currLatter, currWord } = this.test!
            currWord.idx++
            currWord.str = this.test!.txt[currWord.idx].word
            currLatter.idx = 0
            currLatter.str = currWord.str[0]
        },

        setLatterNewStatus(isCorrect: boolean) {
            if (this.test === null) return
            const { currLatter, currWord } = this.test!

            currLatter.idx++
            currLatter.str = currWord.str[currLatter.idx]
            this.getWordFromTxt?.latters
            this.test.txt[currWord.idx].latters[currLatter.idx].isCorrect = isCorrect ? true : false

        }
    }
})