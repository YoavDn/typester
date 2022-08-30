import type { testLevelType, testModeType, testType, wordType } from '@/types'
import { commonEnWords } from '../wordsData/commonWords'
import { testUtils } from './test.utils'


export const testService = {
    generateNewTest,
    retest,
    countAllTypos,
    calcWordWpm,
    calcTestWpm,
    saveTestToLocalStorage,
    localOption,
    saveLocalOption
}

function localOption() {
    const localOptions: string | null = (localStorage.getItem('testOptions'))
    if (!localOptions) {
        localStorage.setItem('testOptions', JSON.stringify({ mode: 'time', level: 15 }))
        return { mode: 'time', level: 15 }
    }

    return JSON.parse(localOptions as string)

}

function saveLocalOption(options: { mode: string, level: number }) {
    localStorage.setItem('testOptions', JSON.stringify(options))
}


function generateNewTest(lang = 'english') {
    const wordsMap = randomTxt().map(word => {
        return {
            word,
            isCorrect: null,
            wpm: 0,
            typeCount: 0,
            time: 0,
            latters: word.split('').map(latter => {
                return {
                    latter: latter,
                    isCorrect: null,
                }
            })
        }
    })

    const test: testType = {
        currLatter: { idx: 0, str: wordsMap[0].latters[0].latter },
        currWord: { idx: 0, str: wordsMap[0].word },
        time: 0,
        typoCount: 0,
        sumType: 0,
        acc: 0,
        realAcc: 0,
        wpm: 0,
        txt: wordsMap
    }

    return test
}


export function retest(test: testType): testType {
    const cleanTest: testType = { ...test }

    cleanTest.currLatter = { idx: 0, str: cleanTest.txt[0].latters[0].latter }
    cleanTest.currWord = { idx: 0, str: cleanTest.txt[0].word }
    cleanTest.typoCount = 0
    cleanTest.sumType = 0
    cleanTest.txt = _resetWordsObj(test.txt)

    return cleanTest
}

export function randomTxt(lang = 'english') {
    const txtBody = commonEnWords.split('\n').sort(() => Math.random() - .5).slice(0, 100)
    return txtBody
}

function _resetWordsObj(txt: wordType[]) {
    return txt.map(word => {
        return {
            word: word.word,
            typeCount: 0,
            wpm: 0,
            time: 0,
            isCorrect: null,
            latters: word.word.split('').map(latter => {
                return {
                    latter: latter,
                    isCorrect: null,
                }
            })
        }
    })
}

function saveTestToLocalStorage(test: testType): void {
    window.localStorage.setItem('test', JSON.stringify(test))
}

export function calcTestWpm(test: testType): number {
    const sumWpm = test.txt.map(({ wpm }) => wpm).slice(0, test.currWord.idx).reduce((sum, num) => sum += num, 0)

    return Math.round(sumWpm / test.currWord.idx)
}

function calcWordWpm(test: testType) {
    const newWords = test.txt.map((word, idx) => {
        let wordsTypos = 0
        let wordCorrectChars = 0

        for (let i = 0; i < idx; i++) {
            // wordsTypos += testUtils.countTypos(test.txt[i])
            wordCorrectChars += testUtils.countCorrectChars(test.txt[i])
        }
        if (idx < test.currWord.idx) {
            word.wpm = testUtils.calcWpm(wordCorrectChars, idx, word.time)
            word.wpmRaw = testUtils.calcWpmRaw(word.word.length, idx, word.time)
        }

        return word
    })

    return newWords
}

function countAllTypos(test: testType): number {
    return test!.txt.reduce((sum, word) => {
        sum += testUtils.countTypos(word)
        return sum
    }, 0)
}

