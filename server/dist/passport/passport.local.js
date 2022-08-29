"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const localStrategy = passport_local_1.default.Strategy;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../models/user.model");
passport_1.default.use(new localStrategy(function verify(username, password, done) {
    user_model_1.User.findOne({ username, }, function (err, user) {
        if (err)
            return done(err);
        if (!user) {
            return done(null, false, { message: 'Incorrect  ' });
        }
        bcrypt_1.default.compare(password, user.password, (err, res) => {
            if (err)
                return done(err);
            if (res === false)
                return done(null, false, { message: "incorreect Pssword" });
            return done(null, user);
        });
    });
}));
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((_id, done) => {
    user_model_1.User.findOne({ _id: _id }, (err, user) => {
        const userInfo = { username: user.username, email: user.email };
        done(null, userInfo);
    });
});
//# sourceMappingURL=passport.local.js.map