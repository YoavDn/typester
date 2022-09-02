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
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const passport_1 = __importDefault(require("passport"));
const GoogleStrategy = passport_google_oauth20_1.default.Strategy;
const config_1 = require("../config/config");
const user_model_1 = require("../models/user.model");
passport_1.default.use(new GoogleStrategy({
    clientID: config_1.config.googleAuth.clientId,
    clientSecret: config_1.config.googleAuth.clientIdSecret,
    callbackURL: process.env.NODE_ENV === 'production'
        ? "https://typester-app.herokuapp.com/api/user/google/callback"
        : 'http://localhost:3000/api/user/google/callback',
}, (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log(profile, 'provile');
    const user = yield user_model_1.User.findOne({ googleId: profile.id });
    // If user doesn't exist creates a new user. (similar to sign up)
    if (!user) {
        const newUser = yield user_model_1.User.create({
            googleId: profile.id,
            username: profile.displayName,
            email: (_a = profile.emails) === null || _a === void 0 ? void 0 : _a[0].value,
            imgUrl: profile.photos[0].value
            // we are using optional chaining because profile.emails may be undefined.
        });
        if (newUser) {
            done(null, newUser);
        }
    }
    else {
        done(null, user);
    }
})));
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findById(id);
    done(null, user);
}));
//# sourceMappingURL=passport.google.js.map