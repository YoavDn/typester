"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;
exports.config = {
    auth: {
        authRequired: false,
        auth0Logout: true,
        secret: process.env.SECRET || '',
        baseURL: process.env.BASE_URL || '',
        clientId: process.env.CLIENT_ID || '',
        issuerBaseUrl: process.env.ISSIER_BASE_URL || ''
    },
    server: {
        port: SERVER_PORT
    }
};
//# sourceMappingURL=config.js.map