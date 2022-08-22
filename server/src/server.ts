import express from 'express'
import http from 'http'
import mongoose from 'mongoose'
import { config } from './config/config'

const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(config.server.port, () => {
    console.log('app listening on port' + config.server.port);
})