
import { Schema, model, connect, Document } from 'mongoose';
import { config } from '../config/config'



export type IUser = Document & {
    username: string;
    email: string
    password?: string;
    googleId?: string
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
    }
})


export const User = model<IUser>('User', UserSchema)