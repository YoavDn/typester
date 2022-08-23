import passport from 'passport'
import bcrypt from 'bcrypt'
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const localStrategy = require('passport-local').Strategy
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
        newUser.save()
            .then(() => newUser)
            .catch((err) => err)


    } catch (err) {
        console.log(err);
    }
}




// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
// },
//     function (accessToken, refreshToken, profile, cb) {
//         User.findOrCreate({ googleId: profile.id }, function (err, user) {
//             return cb(err, user);
//         });
//     }
// ));