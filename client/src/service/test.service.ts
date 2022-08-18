import type { testType } from '@/types'
import { commonEnWords } from '../wordsData/commonWords'


export const testService = {
    generateNewTest
}

function generateNewTest(lang = 'english') {
    const wordsMap = randomTxt().map(word => {
        return {
            word,
            isCorrect: null,
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
        acc: 0,
        wpm: 0,
        txt: wordsMap

    }
    return test
}





export function randomTxt(lang = 'english') {
    const txtBody = commonEnWords.split('\n').sort(() => Math.random() - .5).slice(0, 100)

    return txtBody
}


