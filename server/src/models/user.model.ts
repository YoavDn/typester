
import { Schema, model, connect, Document } from 'mongoose';




export type IUser = Document & {
    username: string;
    email: string
    password?: string;
    googleId?: string,
    id?: string,
    imgUrl?: string
}

const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    googleId: {
        type: String,
        unique: true
    },
    imgUrl: {
        type: String,
    }
})


export const User = model<IUser>('User', UserSchema)