"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('hello world');
});
app.listen(config_1.config.server.port, () => {
    console.log('app listening on port' + config_1.config.server.port);
});
//# sourceMappingURL=server.js.map