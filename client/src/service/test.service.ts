import type { testType, wordType } from '@/types'
import { commonEnWords } from '../wordsData/commonWords'


export const testService = {
    generateNewTest,
    retest,
    countTypos
}

function generateNewTest(lang = 'english') {
    const wordsMap = randomTxt().map(word => {
        return {
            word,
            isCorrect: null,
            wpm: 0,
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
            wpm: 0,
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


function countTypos(test: testType): number {
    return test!.txt.reduce((sum, word) => {
        for (let i = 0; i < word.latters.length; i++) {
            if (word.latters[i].isCorrect === false) sum++
        }
        return sum
    }, 0)
}