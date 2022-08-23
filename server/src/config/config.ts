import dotenv from 'dotenv'

dotenv.config()

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000

export const config = {
    mongo: { url: process.env.MONGO_CONNECT },
    server: { port: SERVER_PORT },
    session: { secret: process.env.SESSTION_SECRET }
}