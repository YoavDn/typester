
import passport from 'passport';
import passportlocal from 'passport-local'
const localStrategy = passportlocal.Strategy
import bcrypt from 'bcrypt'
import { config } from '../config/config'
import { IUser, User } from '../models/user.model'


passport.use(new localStrategy(function verify(username: string, password: string, done) {
    User.findOne({ username, }, function (err: Error, user: IUser) {
        if (err) return done(err)
        if (!user) { return done(null, false, { message: 'Incorrect  ' }) }

        bcrypt.compare(password, user.password, (err, res) => {
            if (err) return done(err)
            if (res === false) return done(null, false, { message: "incorreect Pssword" })
            return done(null, user)
        })
    })
}))

passport.serializeUser((user, done) => {
    done(null, user)
})


passport.deserializeUser(async (_id, done: any) => {
    User.findOne({ _id: _id }, (err: Error, user: IUser) => {
        const userToSend = {
            id: user._id,
            email: user.email,
            username: user.username,
            imgUrl: user.imgUrl ?? ''
        }
        done(null, userToSend)
    })

})
