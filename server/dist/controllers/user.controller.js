"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.getCurrUser = exports.signup = exports.logout = void 0;
const passport_1 = __importDefault(require("passport"));
const user_service_1 = require("../services/user.service");
function logout(req, res) {
    req.logout(function (err) {
        if (err) {
            return err;
        }
    });
}
exports.logout = logout;
function signup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = req.body;
            const Saveduser = yield user_service_1.userService.signup(user);
            console.log(Saveduser);
            login(req, res);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.signup = signup;
function getCurrUser(req, res) {
    if (!req.user) {
        console.log('hello');
        res.send(null);
    }
    else {
        res.send(req.user);
    }
}
exports.getCurrUser = getCurrUser;
function login(req, res) {
    passport_1.default.authenticate("local", (err, user, info) => {
        if (err) {
            return err;
        }
        if (!user) {
            return res.status(400).send([user, "Cannot log in", info]);
        }
        req.login(user, err => {
            const userToSend = { email: user.email, username: user.username, id: user._id };
            res.send(userToSend);
        });
    })(req, res);
}
exports.login = login;
//# sourceMappingURL=user.controller.js.map