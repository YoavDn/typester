

export interface IUser {
    email: string,
    id: string,
    username: string,
}

export type latterType = {
    latter: string,
    isCorrect: boolean | null
}

export type wordType = {
    word: string,
    wpm: number,
    wpmRaw: number
    typeCount: number,
    time: number
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
    realAcc: number,
    time: number,
    typoCount: number,
    sumType: number,
    currWord: IcurrWordOrLetter,
    currLatter: IcurrWordOrLetter,
    txt: wordType[]
}


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
export type pagesType = "/test" | "/leaderboard" | "/profile" | "/settings" | '/'

