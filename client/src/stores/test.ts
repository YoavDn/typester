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

            // when correct
            if (latter === this.test?.currLatter.str) {
                if (currLatter.idx === currWord.str.length - 1) this.finishWord(true)
                else this.setLatterNewStatus(true)

            } else { //when wrong
                if (currLatter.idx === currWord.str.length - 1) this.finishWord(false)
                else this.setLatterNewStatus(false)
            }
        },

        finishWord(correct: boolean) {
            if (this.test === null) return
            const { currLatter, currWord } = this.test!
            const caretStore = useCaretStore()

            currLatter.str = 'space'
            caretStore.toggleLTR()

            //chacking if the word is correct
            if (this.test!.txt[currWord.idx].latters.every(l => l.isCorrect)) {
                console.log('hi2')
                this.test.txt[currWord.idx].isCorrect = true
            } else {
                this.test.txt[currWord.idx].isCorrect = false
            }

        },

        setNextWord() {
            if (this.test === null) return
            const { currLatter, currWord } = this.test!
            const caretStore = useCaretStore()
            caretStore.toggleLTR()

            currWord.idx++
            currWord.str = this.test!.txt[currWord.idx].word
            currLatter.idx = 0
            currLatter.str = currWord.str[0]
        },

        setLatterNewStatus(correct: boolean) {
            if (this.test === null) return
            const { currLatter, currWord } = this.test!
            console.log(currLatter.idx === currWord.str.length - 1);


            currLatter.idx++
            currLatter.str = currWord.str[currLatter.idx]
            console.log(currLatter.str);
            this.test.txt[currWord.idx].latters[currLatter.idx].isCorrect = correct ? true : false

        }
    }
})