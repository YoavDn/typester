import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import type { testType } from "@/types";
import { testService } from "@/service/test.service";
import { useCaretStore } from "./caret";
import { useTestOptionsStore } from "./testOptions";
import { checkTestEnd } from '@/service/test.utils'



export const useTestStore = defineStore({
    id: 'test',
    state: () => ({
        test: null as testType,
        isActive: false,
        AFKtimeout: null as null | ReturnType<typeof setTimeout>,
        timeInterval: null as null | ReturnType<typeof setInterval>,
        isReloadTest: false,
    }),
    getters: {
        getTest: ({ test }) => test,
        getIsReloadTest: ({ isReloadTest }) => isReloadTest,
        getWordFromTxt: ({ test }) => test?.txt[test.currWord.idx],
        getLatterFromTxt: ({ test }) => test?.txt[test.currWord.idx].latters[test.currLatter.idx],
        getIsActiveTest: ({ isActive }) => isActive,
    },

    actions: {
        loadTest() { this.test = testService.generateNewTest() },
        setReload() { this.isReloadTest = true },

        activateTest() {
            this.isActive = true
            this.handleTime(true)
        },

        reloadTest() {
            this.test = testService.generateNewTest()
            this.test.time = 0
            this.isReloadTest = false
            this.handleTime(false)
        },

        setAFK() {
            this.isActive = false
            this.handleTime(false)
        },

        handleTime(start: boolean) {
            if (!this.test) return

            if (start) {
                this.isActive = true
                this.timeInterval = setInterval(() => this.test!.time++, 1000)
            } else {
                clearInterval(this.timeInterval!)
                this.timeInterval = null
            }
        },

        finishTest() {
            console.log('finished Test !!');
            //  @ts-ignore
            this.$router.push('/testResult')
        },

        handleType(latter: string) {
            if (this.test === null) return
            // this.isActive = true
            if (!this.isActive) this.handleTime(true)

            const testOptionsStore = useTestOptionsStore()
            const caretStore = useCaretStore()
            const { currLatter, currWord } = this.test

            //when finish test
            if (checkTestEnd(caretStore.getIslatterEnd,
                currWord,
                currLatter,
                testOptionsStore.getTestLevel,
                this.test.time)) {
                this.finishTest()
                return
            }


            // check if user typing
            if (this.AFKtimeout !== null) clearTimeout(this.AFKtimeout)
            this.AFKtimeout = setTimeout(() => { this.setAFK() }, 3000)

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
            const { currWord } = this.test

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