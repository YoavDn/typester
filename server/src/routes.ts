import express from 'express'
import passport from 'passport'
import { login, logout, signup, getCurrUser } from './controllers/user.controller'
import { saveTest, getUserTests, topTests } from './controllers/test.contorller'
import { authMiddleware } from './middlewares/user.middleware'
const router = express.Router()

//users
router.get('/user/current_user', getCurrUser)
router.post('/user/signin', login)
router.post('/user/signup', signup)
router.post('/user/logout', logout)
router.get('/user/google/login', passport.authenticate('google', {
    scope: ['email', "profile"]
}))
router.get('/user/google/callback', passport.authenticate('google', {
    successRedirect: process.env.NODE_ENV === 'production' ? 'https://typester.onrender.com/profile' : 'http://localhost:5173/profile',
    failureRedirect: process.env.NODE_ENV === 'production' ? 'https://typester.onrender.com/profile' : 'http://localhost:5173/profile',
    // successRedirect: process.env.NODE_ENV === 'production' ? 'http://localhost:3000/profile' : 'http://localhost:3000/profile',
    // failureRedirect: process.env.NODE_ENV === 'production' ? 'http://localhost:3000/profile' : 'http://localhost:3000/profile',
}))

//test routes
router.get('/test/top_tests', topTests)
router.get('/test/:userId', getUserTests)
router.post('/test/save', saveTest)


export default router