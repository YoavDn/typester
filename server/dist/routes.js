"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const user_controller_1 = require("./controllers/user.controller");
const router = express_1.default.Router();
router.get('/current_user', user_controller_1.getCurrUser);
router.post('/signin', user_controller_1.login);
router.post('/signup', user_controller_1.signup);
router.post('/logout', user_controller_1.logout);
router.get('/google/login', passport_1.default.authenticate('google', {
    scope: ['email', "profile"]
}));
router.get('/google/callback', passport_1.default.authenticate('google', {
    successRedirect: process.env.NODE_ENV === 'production' ? '/profile' : 'http://localhost:5173/profile',
    failureRedirect: process.env.NODE_ENV === 'production' ? '/profile' : 'http://localhost:5173/profile',
}));
// module.exports = router
exports.default = router;
//# sourceMappingURL=routes.js.map