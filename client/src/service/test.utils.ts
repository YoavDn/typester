import type { testLevelType, testModeType, testType } from "@/types";
import { testService } from "./test.service";

export const testUtils = {
    checkTestEnd,
    calcdWpm,

}

export function checkTestEnd(test: testType, latterEnd: boolean, level: testLevelType) {
    if (level - 1 !== test.currWord.idx
        || test.currLatter.idx !== test.currWord.str.length - 1
        || !latterEnd) return false

    return true
}



export function calcdWpm(test: testType): number {
    const allTypos = test.txt.reduce((sum, word) => {
        for (let i = 0; i < word.latters.length; i++) {
            if (word.latters[i].isCorrect === false) sum++
        }
        return sum
    }, 0)

    const grossWpm = (test.sumType / 5) / (test.time / 60)
    const netWpm = grossWpm - (allTypos / test.time / 60)
    return Math.round(netWpm)
}


