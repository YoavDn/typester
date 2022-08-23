import express from 'express'
import session from 'express-session'
import mongoose, { Error } from 'mongoose'
import passport from 'passport'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import passportlocal from 'passport-local'
import bodyParser from 'body-parser'
import cors from 'cors'
import { config } from './config/config'
const localStrategy = passportlocal.Strategy

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


mongoose.connect(config.mongo.url, (err: Error) => {
    if (err) throw err
    console.log('connected to mongo !');
})

var corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:5173']
}
app.use(cors(corsOptions))


app.use(require('serve-static')(__dirname + '/../../public'));
app.use(session({
    secret: config.session.secret,
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser(config.session.secret));
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport.config')(passport)


const routes = require('./routes')
app.use('/api/user', routes)


app.get('/', (req, res) => {
    res.send('hii')
});

app.listen(config.server.port, () => {
    console.log('app listening on port' + config.server.port,);
})