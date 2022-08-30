"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const user_controller_1 = require("./controllers/user.controller");
const test_contorller_1 = require("./controllers/test.contorller");
const router = express_1.default.Router();
//users
router.get('/user/current_user', user_controller_1.getCurrUser);
router.post('/user/signin', user_controller_1.login);
router.post('/user/signup', user_controller_1.signup);
router.post('/user/logout', user_controller_1.logout);
router.get('/user/google/login', passport_1.default.authenticate('google', {
    scope: ['email', "profile"]
}));
router.get('/user/google/callback', passport_1.default.authenticate('google', {
    successRedirect: process.env.NODE_ENV === 'production' ? 'https://typester-app.herokuapp.com/profile' : 'http://localhost:5173/profile',
    failureRedirect: process.env.NODE_ENV === 'production' ? 'https://typester-app.herokuapp.com/profile' : 'http://localhost:5173/profile',
}));
//test
router.get('/test/:userId', test_contorller_1.getUserTests);
router.post('/test/save', test_contorller_1.saveTest);
exports.default = router;
//# sourceMappingURL=routes.js.map