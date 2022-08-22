import dotenv from 'dotenv'

dotenv.config()

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000

export const config = {
    auth: {
        authRequired: false,
        auth0Logout: true,
        baseURL: process.env.BASE_URL,
        secret: process.env.SECRET,
        clientID: process.env.CLIENT_ID,
        issuerBaseURL: process.env.ISSUER_BASE_URL
    },

    server: {
        port: SERVER_PORT
    }
}