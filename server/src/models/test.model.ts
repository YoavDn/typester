
import { Schema, model, connect, Document, InferSchemaType } from 'mongoose';


export type testType = {
    wpm: number,
    passed: boolean
    wpmRaw: number,
    acc: number,
    realAcc: number,
    time: number,
    timestamp?: Number
}
export interface ITest extends testType {
    uid: string
}

const TestSchema = new Schema<ITest>({
    wpm: { type: Number, },
    wpmRaw: { type: Number },
    passed: { type: Boolean },
    acc: { type: Number },
    realAcc: { type: Number },
    time: { type: Number },
    timestamp: { type: Number },
    uid: { type: String }
})


export const Test = model<testType>('Test', TestSchema)

