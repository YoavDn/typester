import type { testLevelType, testModeType, testType, wordType } from "@/types";
import { testService } from "./test.service";

export const testUtils = {
    checkTestEnd,
    countTypos,
    calcWpm
}

export function checkTestEnd(test: testType, latterEnd: boolean, level: testLevelType) {
    if (level - 1 !== test.currWord.idx
        || test.currLatter.idx !== test.currWord.str.length - 1
        || !latterEnd) return false

    return true
}

export function calcWpm(typos: number, sumType: number, time: number) {
    const grossWpm = (sumType / 5) / (time / 60)
    const netWpm = grossWpm - (typos / time / 60)
    return Math.round(netWpm)
}


export function countTypos(word: wordType) {
    return word.latters.reduce((typos, latter) => {
        if (latter.isCorrect === false) typos++
        return typos
    }, 0)
}