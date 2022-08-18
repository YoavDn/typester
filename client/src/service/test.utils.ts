import type { IcurrWordOrLetter, testLevelType, testModeType } from "@/types";

export function checkTestEnd(latterEnd: boolean, word: IcurrWordOrLetter, latter: IcurrWordOrLetter, testLevel: testLevelType, testTime: number) {
    if (testLevel - 1 === word.idx
        && latter.idx === word.str.length - 1
        && latterEnd
    ) return true

    if (testLevel === testTime) return true
}