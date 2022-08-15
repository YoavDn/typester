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
                // when finish a word 

                if (currLatter.idx === currWord.str.length) {
                    this.finishWord()
                } else {
                    currLatter.idx++
                    currLatter.str = currWord.str[currLatter.idx]
                    this.getWordFromTxt?.latters
                    //seting the latter status
                    this.test.txt[currWord.idx].latters[currLatter.idx].isCorrect = true
                }
                //when wrong
            } else {

                if (currLatter.idx === currWord.str.length) {
                    this.finishWord()
                }
                //seting the latter status
                this.test!.txt[currWord.idx].latters[currLatter.idx].isCorrect = false

            }
        },

        finishWord() {
            if (this.test === null) return
            const { currLatter, currWord } = this.test!

            //chacking if the word is correct
            if (this.test!.txt[currWord.idx].latters.every(l => l.isCorrect)) {
                this.test.txt[currWord.idx].isCorrect = true
            } else {
                this.test.txt[currWord.idx].isCorrect = false
            }
            //seting the new postion
            currWord.idx++
            currWord.str = this.test!.txt[currWord.idx].word
            currLatter.idx = 0
            currLatter.str = currWord.str[0]
        }
    }
})