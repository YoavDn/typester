
export type latterType = {
    latter: string,
    isCorrect: boolean
}

export type wordType = {
    word: string,
    isCorrect: boolean,
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
    bottom: number,
    leftEnd: number,
}