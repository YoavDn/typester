"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// passport.deserializeUser((_id, done: any) => {
//     User.findOne({ _id: _id }, (err: Error, user: IUser) => {
//         const userInfo = { username: user.username, email: user.email, id: user._id }
//         done(null, userInfo)
//     })
// })
passport_1.default.deserializeUser((_id, done) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ _id: _id });
    const userToSend = { id: user._id, email: user.email, username: user.username };
    done(null, userToSend);
}));
//# sourceMappingURL=passport.local.js.map