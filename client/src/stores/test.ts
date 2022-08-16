import { defineStore } from "pinia";
import type { testType } from "@/types";
import { testService } from "@/service/test.service";
import { useCaretStore } from "./caret";

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

            //hadle game start
            if (currLatter.idx === 0 && currWord.idx === 0) {
                const caretStore = useCaretStore()
                this.isActive = true
            }


            // when correct
            if (latter === this.test?.currLatter.str) {
                if (currLatter.str === 'space') this.setNextWord(true)
                else this.setLatterNewStatus(true)

            } else { //when wrong
                if (currLatter.str === 'space') this.setNextWord(false)
                else this.setLatterNewStatus(false)
            }
        },

        finishWord(correct: boolean) {
            if (this.test === null) return
            const { currLatter, currWord } = this.test!
            const caretStore = useCaretStore()

            currLatter.str = 'space'
            caretStore.setLatterEnd(true)

            //chacking if the word is correct
            if (this.test!.txt[currWord.idx].latters.every(l => l.isCorrect)) {
                this.test.txt[currWord.idx].isCorrect = true
            } else {
                this.test.txt[currWord.idx].isCorrect = false
            }

        },

        setNextWord(correct: boolean) {
            if (this.test === null) return
            const { currLatter, currWord } = this.test!
            const caretStore = useCaretStore()
            caretStore.setLatterEnd(false)

            currWord.idx++
            currWord.str = this.test!.txt[currWord.idx].word
            currLatter.idx = 0
            currLatter.str = currWord.str[0]
        },

        setLatterNewStatus(correct: boolean) {
            if (this.test === null) return
            const { currLatter, currWord } = this.test!

            this.test.txt[currWord.idx].latters[currLatter.idx].isCorrect = correct ? true : false
            if (currLatter.idx === currWord.str.length - 1) {
                this.finishWord(correct)
            } else {

                currLatter.idx++
                currLatter.str = currWord.str[currLatter.idx]
            }

        },

        // hendleSpicialKeys(key: string) {


        // }
    }
})