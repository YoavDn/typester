"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_openid_connect_1 = require("express-openid-connect");
const config_1 = require("./config/config");
const app = (0, express_1.default)();
app.use((0, express_openid_connect_1.auth)(config_1.config.auth));
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
app.listen(config_1.config.server.port, () => {
    console.log('app listening on port' + config_1.config.server.port);
});
//# sourceMappingURL=server.js.map