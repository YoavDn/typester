import type { testLevelType, testModeType, testType } from "@/types";

export function checkTestEnd(test: testType, latterEnd: boolean, level: testLevelType) {
    if (!test) return false

    if (level - 1 !== test.currWord.idx
        || test.currLatter.idx !== test.currWord.str.length - 1
        || !latterEnd) return false

    return true
}

