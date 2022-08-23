
import mongoose from 'mongoose';
import passport from 'passport';
import passportlocal from 'passport-local'
const localStrategy = passportlocal.Strategy
import bcrypt from 'bcrypt'
import { config } from './config'
import { User } from '../models/user.model'

module.exports = function (passport: any) {

    passport.use(new localStrategy(function (username: string, password: string, done) {
        User.findOne({ username, }, function (err: Error, user: any) {
            if (err) return done(err)
            if (!user) { return done(null, false, { message: 'Incorrect  ' }) }

            bcrypt.compare(password, user.password, (err, res) => {
                if (err) return done(err)
                if (res === false) return done(null, false, { message: "incorreect Pssword" })

                return done(null, user)
            })
        })
    }))

    passport.serializeUser((user: any, done: any) => {
        done(null, user.id)
    })

    passport.deserializeUser((id: any, done: any) => {
        User.findById({ _id: id }, function (err: Error, user: any) {
            done(err, user)
        })
    })

}