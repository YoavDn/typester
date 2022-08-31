import type { ITestSettings, testType, wordType, Dict, langType } from '@/types'
import { englishWords } from '@/wordsData/english'
import { frenchWords } from '@/wordsData/french'
import { hebrewWords } from '@/wordsData/hebrew'
import { russianWords } from '@/wordsData/russian'
import { spanishWords } from '@/wordsData/spanish'
import { germanWords } from '@/wordsData/german'
import { testUtils } from './test.utils'


export const testLogic = {
    generateNewTest,
    retest,
    countAllTypos,
    calcWordWpm,
    calcTestWpm,
    saveTestToLocalStorage,
    localTestMode,
    saveLocalTestMode,
    localSettings
}



const testLang: Dict = {
    english: englishWords,
    french: frenchWords,
    spanish: spanishWords,
    russian: russianWords,
    german: germanWords,
    hebrew: hebrewWords,

}

function localSettings(): ITestSettings {
    const localSettings = localStorage.getItem('testSettings')
    if (localSettings) return JSON.parse(localSettings)

    const defaultSettings: ITestSettings = {
        difficulty: 'normal',
        smoothCaret: true,
        lang: 'english'
    }
    localStorage.setItem('testSettings', JSON.stringify(defaultSettings))

    return defaultSettings
}

function localTestMode() {
    const localOptions: string | null = (localStorage.getItem('testMode'))
    if (!localOptions) {
        localStorage.setItem('testMode', JSON.stringify({ mode: 'time', level: 15 }))
        return { mode: 'time', level: 15 }
    }

    return JSON.parse(localOptions as string)

}



function saveLocalTestMode(options: { mode: string, level: number }) {
    localStorage.setItem('testMode', JSON.stringify(options))
}


function generateNewTest(lang: langType) {
    const wordsMap = randomTxt(lang).map(word => {
        return {
            word,
            isCorrect: null,
            wpm: 0,
            wpmRaw: 0,
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
        passed: null,
        typoCount: 0,
        sumType: 0,
        acc: 0,
        realAcc: 0,
        wpm: 0,
        wpmRaw: 0,
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
    const txtBody = testLang[lang].split('\n').sort(() => Math.random() - .5).slice(0, 100)
    // const txtBody = englishWords.split('\n').sort(() => Math.random() - .5).slice(0, 100)
    return txtBody
}

function _resetWordsObj(txt: wordType[]) {
    return txt.map(word => {
        return {
            word: word.word,
            typeCount: 0,
            wpm: 0,
            wpmRaw: 0,
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

export function calcTestWpm(test: testType): [number, number] {
    const sumWpm = test.txt.map(({ wpm }) => wpm).slice(0, test.currWord.idx).reduce((sum, num) => sum += num, 0)
    const sumWpmRaw = test.txt.map(({ wpmRaw }) => wpmRaw).slice(0, test.currWord.idx).reduce((sum, num) => sum += num, 0)
    const averageWpm = Math.round(sumWpm / test.currWord.idx)
    const averageWpmRaw = Math.round(sumWpmRaw / test.currWord.idx)

    return [averageWpm, averageWpmRaw]
}

function calcWordWpm(test: testType) {
    const newWords = test.txt.map((word, idx) => {
        let wordsTypos = 0
        let wordCorrectChars = 0

        for (let i = 0; i < idx; i++) {
            wordsTypos += testUtils.countTypos(test.txt[i])
            wordCorrectChars += testUtils.countCorrectChars(test.txt[i])
        }
        if (idx < test.currWord.idx) {
            word.wpm = testUtils.calcWpm(wordCorrectChars, idx, word.time)
            word.wpmRaw = testUtils.calcWpmRaw(word.typeCount, idx, word.time)
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

