import type { testLevelType, testModeType, testType } from "@/types";

export const testUtils = {
    checkTestEnd,
    calcWordWpm
}

export function checkTestEnd(test: testType, latterEnd: boolean, level: testLevelType) {
    if (level - 1 !== test.currWord.idx
        || test.currLatter.idx !== test.currWord.str.length - 1
        || !latterEnd) return false

    return true
}

export function calcWordWpm(time: number): number {
    console.log(time);
    return time
}

