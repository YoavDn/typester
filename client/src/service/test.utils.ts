import type { testLevelType, testModeType, testType, wordType } from "@/types";
import { testLogic } from "./testLogic";

export const testUtils = {
    checkTestEnd,
    countTypos,
    calcWpm,
    countCorrectChars,
    calcWpmRaw,
}

export function checkTestEnd(test: testType, latterEnd: boolean, level: testLevelType) {
    if (level - 1 !== test.currWord.idx
        || test.currLatter.idx !== test.currWord.str.length - 1
        || !latterEnd) return false

    return true
}

export function calcWpmRaw(chars: number, spaces: number, testSeconds: number) {
    const wpmRaw = Math.round(((chars - spaces) * (60 / testSeconds)) / 5)
    return wpmRaw
}

export function calcWpm(correctChars: number, spaces: number, testSeconds: number) {
    const wpm = Math.round(((correctChars + spaces) * (60 / testSeconds)) / 5)
    if (isNaN(wpm)) return 0
    return wpm
}


export function countTypos(word: wordType) {
    return word.latters.reduce((typos, latter) => {
        if (latter.isCorrect === false) typos++
        return typos
    }, 0)
}

export function countCorrectChars(word: wordType) {
    return word.latters.reduce((correctChar, latter) => {
        if (latter.isCorrect === true) correctChar++
        return correctChar
    }, 0)
}