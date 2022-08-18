
export type latterType = {
    latter: string,
    isCorrect: boolean | null
}

export type wordType = {
    word: string,
    isCorrect: boolean | null,
    latters: latterType[]
}
export interface IcurrWordOrLetter {
    idx: number,
    str: string
}

export type testType = {
    wpm: number,
    acc: number,
    time: number,
    currWord: IcurrWordOrLetter,
    currLatter: IcurrWordOrLetter,
    txt: wordType[]
} | null


export type caretPosType = {
    top: number,
    left: number,
    right: number,
    bottom: number,
    leftEnd: number,
}


export type testModeType = 'time' | 'words'
export type testLevelType = 15 | 30 | 45 | 60
export type optionsType = testModeType | testLevelType