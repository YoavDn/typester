import express from 'express'
import session from 'express-session'
// import mongoose from 'mongoose'
const mongoose = require('mongoose')
import passport from 'passport'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'
import { config } from './config/config'

const app = express()

// app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))




var corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:5173']
}
app.use(cors(corsOptions))


const oneDay = 1000 * 60 * 60 * 24
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(session({
    secret: config.session.secret,
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.session())
app.use(passport.initialize())
import './passport/passport.local'
import './passport/passport.google'

mongoose.connect(config.mongo.url)
    .then(() => console.log('connected to mongo'))
    .catch(() => console.log('feild to connect'))

// const routes = require('./routes')÷
import routes from './routes'
app.use('/api/user', routes)


app.get('/', (req, res) => {
    res.send('hiii')
})


app.listen(config.server.port, () => {
    console.log('app listening on port' + config.server.port,);
})