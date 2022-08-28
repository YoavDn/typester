import passport from 'passport'
import bcrypt from 'bcrypt'
import type { IUser } from '../models/user.model'
import { User } from '../models/user.model'


export const userService = {
    signup
}

export async function signup(user: IUser) {
    try {
        const queryUser = await User.findOne({ email: user.email })
        if (queryUser) throw new Error
        console.log(user);
        const newUser = new User({
            username: user.username,
            email: user.email,
            password: await bcrypt.hash(user.password, 10)
        })
        return newUser.save()
            .then(() => newUser)
            .catch((err) => err)


    } catch (err) {
        console.log(err);
    }
}

