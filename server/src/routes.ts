

import express from 'express'
import passport from 'passport'
import { login, logout, signup, getCurrUser } from './controllers/user.controller'
import { authMiddleware } from './middlewares/user.middleware'
const router = express.Router()


router.get('/current_user', authMiddleware, getCurrUser)
router.post('/signin', passport.authenticate('local'), login)
router.post('/signup', passport.authenticate('local'), signup)
router.post('/logout', logout)
router.get('/google/login', passport.authenticate('google', {
    scope: ['email', "profile"]
}))
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
    res.send(req.user)
})


module.exports = router