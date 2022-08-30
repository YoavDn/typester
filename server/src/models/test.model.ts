
import { Schema, model, connect, Document, InferSchemaType } from 'mongoose';

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
    wpmRaw: number,
    acc: number,
    realAcc: number,
    time: number,
    typoCount: number,
    sumType: number,
    currWord: IcurrWordOrLetter,
    currLatter: IcurrWordOrLetter,
    txt: wordType[]
}
export interface ITest extends testType {
    uid: string
}

const TestSchema = new Schema<ITest>({
    wpm: { type: Number, },
    wpmRaw: { type: Number },
    acc: { type: Number },
    realAcc: { type: Number },
    time: { type: Number },
    typoCount: { type: Number },
    sumType: { type: Number },
    currWord: { type: Object },
    currLatter: { type: Object },
    txt: { type: Schema.Types.Mixed },
    uid: { type: String }
})


export const Test = model<testType>('Test', TestSchema)

