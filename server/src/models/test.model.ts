
import { Schema, model, connect, Document, InferSchemaType } from 'mongoose';
import type { testType } from '../../../client/src/types'

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

