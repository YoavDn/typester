
type latterType = {
    latter: string,
    isPassed: boolean
}

type wordType = {
    wordType: string,
    isPassed: boolean,
    latters: latterType[]
}

export type testType = {
    wpm: number,
    acc: number,
    currWord: number,
    currLatter: number,
    txt: wordType[]
} | null