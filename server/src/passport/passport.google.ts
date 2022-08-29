import googleStrategy from 'passport-google-oauth20'
import passport from 'passport'
const GoogleStrategy = googleStrategy.Strategy
import { config } from '../config/config'
import { User } from '../models/user.model'


passport.use(new GoogleStrategy({
    clientID: config.googleAuth.clientId,
    clientSecret: config.googleAuth.clientIdSecret,
    callbackURL: "/api/user/google/callback",
},
    async (accessToken, refreshToken, profile, done) => {
        console.log(profile, 'provile');
        const user = await User.findOne({ googleId: profile.id });

        // If user doesn't exist creates a new user. (similar to sign up)
        if (!user) {
            const newUser = await User.create({
                googleId: profile.id,
                username: profile.displayName,
                email: profile.emails?.[0].value,
                // we are using optional chaining because profile.emails may be undefined.
            });
            if (newUser) {
                done(null, newUser);
            }
        } else {
            done(null, user);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
    done(null, user)
})