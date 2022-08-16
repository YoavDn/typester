import { defineStore } from "pinia";
import type { testType } from "@/types";
import { testService } from "@/service/test.service";
import { useCaretStore } from "./caret";

export const useTestStore = defineStore({
    id: 'test',
    state: () => ({
        test: null as testType,
        isActive: false,
        timeout: null as null | ReturnType<typeof setTimeout>

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

        setAFK() {
            this.isActive = false
        },

        handleType(latter: string) {
            if (this.test === null) return
            const { currLatter, currWord } = this.test!
            this.isActive = true
            if (this.timeout !== null) clearTimeout(this.timeout)
            this.timeout = setTimeout(() => { this.setAFK() }, 5000)




            // when correct
            if (latter === this.test?.currLatter.str) {
                if (currLatter.str === 'space') this.setNextWord(true)
                else this.setLatterNewStatus(true)

            } else { //when wrong
                if (currLatter.str === 'space') this.setNextWord(false)
                else this.setLatterNewStatus(false)
            }
        },

        finishWord() {
            if (this.test === null) return
            const { currLatter, currWord } = this.test
            const caretStore = useCaretStore()

            // currLatter.str = 'space'
            // caretStore.setLatterEnd(true)

            //chacking if the word is correct
            if (this.test.txt[currWord.idx].latters.every(l => l.isCorrect)) {
                this.test.txt[currWord.idx].isCorrect = true
            } else {
                this.test.txt[currWord.idx].isCorrect = false
            }

        },

        setNextWord(correct: boolean) {
            if (this.test === null) return
            this.finishWord()

            const { currLatter, currWord } = this.test
            const caretStore = useCaretStore()
            caretStore.setLatterEnd(false)

            currWord.idx++
            currWord.str = this.test!.txt[currWord.idx].word
            currLatter.idx = 0
            currLatter.str = currWord.str[0]
        },

        setPrevWord() {
            if (this.test === null) return
            const { currLatter, currWord } = this.test
            const caretStore = useCaretStore()
            caretStore.setLatterEnd(true)

            currWord.idx--

            const prevWord = this.test.txt[currWord.idx]
            currLatter.idx = prevWord.latters.length - 1
            currWord.str = prevWord.word
            currLatter.str = currWord.str[currWord.str.length - 1]
        },

        setLatterNewStatus(lStatus: boolean) {
            if (this.test === null) return
            const { currLatter, currWord } = this.test
            const caretStore = useCaretStore()

            this.test.txt[currWord.idx].latters[currLatter.idx].isCorrect = lStatus ? true : false

            if (currLatter.idx === currWord.str.length - 1) {
                // this.finishWord(lStatus)
                currLatter.str = 'space'
                caretStore.setLatterEnd(true)
                // this.setNextWord(lStatus)
            } else {
                currLatter.idx++
                currLatter.str = currWord.str[currLatter.idx]
            }

        },

        hendleSpicialKeys(key: string) {

            switch (key) {
                case "Backspace":
                    this.hendleBackspace()
            }

        },



        hendleBackspace() {
            console.log('backspace');
            if (this.test === null) return
            const { currWord, currLatter } = this.test
            const caretStore = useCaretStore()

            // when on first latter
            if (currLatter.idx === 0 && currWord.idx === 0) return

            // remove option to go back to correct (after first word)
            if (currWord.idx > 1) {
                const allCorrect = this.test.txt.slice(0, currWord.idx).every(w => w.isCorrect)
                if (allCorrect && currLatter.idx === 0) return
            }
            //when going back to prev word
            if (currLatter.idx === 0) {
                this.setPrevWord()

                //the end of the word
            } else if (currLatter.idx === currWord.str.length - 1 && caretStore.$state.isLatterEnd) {
                caretStore.setLatterEnd(false)
                currLatter.str = currWord.str[currWord.str.length - 1]
                this.test.txt[currWord.idx].latters[currLatter.idx].isCorrect = null

                //default
            } else {
                currLatter.idx--
                this.test.txt[currWord.idx].latters[currLatter.idx].isCorrect = null
                currLatter.str = currWord.str[currLatter.idx]
            }
        }
    }
})