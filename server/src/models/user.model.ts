
import { Schema, model, connect } from 'mongoose';
import { config } from '../config/config'


export interface IUser {
    username: string;
    email: string
    password: string;
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
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
})

async function run() {
    await connect(config.mongo.url)
}

export const User = model<IUser>('User', UserSchema)