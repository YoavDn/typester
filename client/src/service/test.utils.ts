import type { testLevelType, testModeType, testType } from "@/types";

export function checkTestEnd(test: testType, latterEnd: boolean, mode: testModeType, level: testLevelType) {
    if (!test) return

    if (mode === 'words') {
        if (level - 1 !== test.currWord.idx
            || test.currLatter.idx !== test.currWord.str.length - 1
            || !latterEnd) return false
        return true
    } else {
        if (level !== test.time) return false
        return true
    }
}

