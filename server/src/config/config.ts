import dotenv from 'dotenv'

dotenv.config()

const SECRET = process.env.SECRET || ''
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000

export const config = {
    secret: {
        secret: SECRET
    },
    server: {
        port: SERVER_PORT
    }
}