import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import type { testType } from "@/types";
import { testService } from "@/service/test.service";
import { useCaretStore } from "./caret";
import { useTestOptionsStore } from "./testOptions";
import { testUtils } from '@/service/test.utils'



export const useTestStore = defineStore({
    id: 'test',
    state: () => ({
        test: testService.generateNewTest() as testType,
        isActive: false,
        AFKtimeout: null as null | ReturnType<typeof setTimeout>,
        testTimeInterval: null as null | ReturnType<typeof setInterval>,
        isNewTest: false,

    }),
    getters: {
        getTest: ({ test }) => test,
        getIsNewTest: ({ isNewTest }) => isNewTest,
        getWordFromTxt: ({ test }) => test?.txt[test.currWord.idx],
        getLatterFromTxt: ({ test }) => test?.txt[test.currWord.idx].latters[test.currLatter.idx],
        getIsActiveTest: ({ isActive }) => isActive,
    },

    actions: {
        loadTest() { this.test = testService.generateNewTest() },
        setNewTest() { this.isNewTest = true },

        activateTest() {
            this.isActive = true
            this.handleTime(true)
        },

        newTest() {
            this.test = testService.generateNewTest()
            this.test.time = 0
            this.isNewTest = false
            this.handleTime(false)
            //@ts-ignore 
            this.$router.push('/')
        },

        reloadTest() {
            this.test!.time = 0

            this.handleTime(false)
            this.test = testService.retest(this.test)
        },

        setAFK() {
            this.isActive = false
            this.handleTime(false)
        },

        handleTime(start: boolean) {
            if (start) {
                this.isActive = true
                this.testTimeInterval = setInterval(() => this.test!.time++, 1000)
            } else {
                clearInterval(this.testTimeInterval!)
                this.testTimeInterval = null
            }
        },




        finishTest() {
            console.log('finished Test !!');
            testService.calcWordWpm(this.test)

            this.test.realAcc = Math.round(100 - (this.test.typoCount * 100) / this.test.sumType)
            this.test.acc = Math.round(100 - (testService.countAllTypos(this.test) * 100) / this.test.sumType)
            this.test.wpm = testService.calcTestWpm(this.test)
            //  @ts-ignore
            this.$router.push('/testResult')
        },

        handleType(latter: string) {
            if (this.test === null) return
            const testOptionsStore = useTestOptionsStore()
            const caretStore = useCaretStore()
            const { currLatter, currWord } = this.test
            const activeLatter = this.test.txt[currWord.idx].latters[currLatter.idx]
            if (!this.isActive) this.handleTime(true)


            //whether to check on finish
            if (testOptionsStore.getTestMode === 'words') {
                const isTestEnd = testUtils.checkTestEnd(this.test, caretStore.getIslatterEnd, testOptionsStore.getTestLevel)
                //when finish test
                if (isTestEnd) {
                    this.handleTime(false)
                    this.finishTest()
                    return
                }
            }

            this.test.sumType++
            // check if user typing
            if (this.AFKtimeout !== null) clearTimeout(this.AFKtimeout)
            this.AFKtimeout = setTimeout(() => { this.setAFK() }, 3000)

            // when correct
            if (latter === this.test?.currLatter.str) {
                if (currLatter.str === 'space') this.setNextWord(true)
                else this.setLatterNewStatus(true)

            } else { //when wrong
                this.test.typoCount++
                if (currLatter.str === 'space') this.setNextWord(false)
                else this.setLatterNewStatus(false)
            }
        },

        finishWord() {
            const { currWord } = this.test
            this.test.txt[currWord.idx].wpm = this.test.time
            //chacking if the word is correct
            if (this.test.txt[currWord.idx].latters.every(l => l.isCorrect)) {
                this.test.txt[currWord.idx].isCorrect = true
            } else {
                this.test.txt[currWord.idx].isCorrect = false
            }
        },

        setNextWord(correct: boolean) {
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
                    break
                case "Escape":
                    this.setAFK()
            }
        },

        hendleBackspace() {
            console.log('backspace');
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