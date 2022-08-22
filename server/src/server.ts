import express from 'express'
import http from 'http'
import mongoose from 'mongoose'
import { auth, requiresAuth } from 'express-openid-connect'
import { config } from './config/config'

const app = express()

app.use(auth(config.auth))

app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.listen(config.server.port, () => {
    console.log('app listening on port' + config.server.port,);
})