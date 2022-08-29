

import express from 'express'
import passport from 'passport'
import { login, logout, signup, getCurrUser } from './controllers/user.controller'
import { authMiddleware } from './middlewares/user.middleware'
const router = express.Router()


router.get('/current_user', getCurrUser)
router.post('/signin', login)
router.post('/signup', signup)
router.post('/logout', logout)
router.get('/google/login', passport.authenticate('google', {
    scope: ['email', "profile"]
}))
router.get('/google/callback', passport.authenticate('google', {
    successRedirect: process.env.NODE_ENV === 'production' ? '/profile' : 'http://localhost:5173/profile',
    failureRedirect: process.env.NODE_ENV === 'production' ? '/profile' : 'http://localhost:5173/profile',
}))


// module.exports = router
export default router