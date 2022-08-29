"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
// import mongoose from 'mongoose'
const mongoose = require('mongoose');
const passport_1 = __importDefault(require("passport"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const app = (0, express_1.default)();
console.log(process.env.NODE_ENV);
// app.use(express.json())
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.resolve(__dirname, 'public')));
}
else {
    var corsOptions = {
        credentials: true,
        origin: ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:5173']
    };
    app.use((0, cors_1.default)(corsOptions));
}
// app.use(require('serve-static')(__dirname + '/../../public'));
app.use((0, express_session_1.default)({
    secret: config_1.config.session.secret,
    resave: false,
    saveUninitialized: false,
}));
app.use(passport_1.default.session());
app.use(passport_1.default.initialize());
require("./passport/passport.local");
require("./passport/passport.google");
mongoose.connect(config_1.config.mongo.url)
    .then(() => console.log('connected to mongo'))
    .catch(() => console.log('feild to connect'));
// const routes = require('./routes')÷
const routes_1 = __importDefault(require("./routes"));
app.use('/api/user', routes_1.default);
app.get('/**', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
app.listen(config_1.config.server.port, () => {
    console.log('app listening on port' + config_1.config.server.port);
});
//# sourceMappingURL=server.js.map