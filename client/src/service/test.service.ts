import type { testType } from '@/types'
import { commonEnWords } from '../utils/commonWords'


export const testService = {
    generateNewTest
}

function generateNewTest(lang = 'english') {

    const wordsMap = randomTxt().map(word => {
        return {
            word,
            isPassed: false,
            latters: word.split('').map(latter => {
                return {
                    latter,
                    isPassed: false,
                }
            })
        }
    })

    const test: testType = {
        currLatter: 0,
        currWord: 0,
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