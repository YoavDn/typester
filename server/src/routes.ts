

import express from 'express'
import passport from 'passport'
import { login, logout, signup, getCurrUser } from './controllers/user.controller'
import { authMiddleware } from './middlewares/user.middleware'
const router = express.Router()


router.get('/login', authMiddleware, getCurrUser)
router.post('/signin', passport.authenticate('local'), login)
router.post('/signup', passport.authenticate('local'), signup)
router.post('/logout', logout)


module.exports = router