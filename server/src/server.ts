import express from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import cookieSession from 'cookie-session'
import passport from 'passport'
import MongoStore from 'connect-mongo'

import bodyParser from 'body-parser'
import path from 'path'
import cors from 'cors'
import { config } from './config/config'

const app = express()
console.log(process.env.NODE_ENV);
// app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    var corsOptions = {
        credentials: true,
        origin: ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:5173']
    }
    app.use(cors(corsOptions))
}


app.use(require('serve-static')(__dirname + '/../../public'));
app.use(session({
    secret: config.session.secret,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: config.mongo.url }),
}));

app.use(passport.session())
app.use(passport.initialize())
import './passport/passport.local'
import './passport/passport.google'

mongoose.connect(config.mongo.url,)
    .then(() => console.log('connected to mongo'))
    .catch(() => console.log('feild to connect'))

mongoose.connection.on('err', console.error.bind(console, 'Mongo Connection error'))

// const routes = require('./routes')÷
import routes from './routes'
app.use('/api', routes)


app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


app.listen(process.env.PORT || 3000, () => {
    console.log('app listening on port' + config.server.port,);
})