
export type latterType = {
    latter: string,
    isPassed: boolean
}

export type wordType = {
    word: string,
    isPassed: boolean,
    latters: latterType[]
}

export type testType = {
    wpm: number,
    acc: number,
    currWord: { idx: number, str: string },
    currLatter: { idx: number, str: string },
    txt: wordType[]
} | null


export type caretPosType = {
    top: number,
    left: number,
    right: number,
    bottom: number
}