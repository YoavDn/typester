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
exports.signup = exports.userService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../models/user.model");
exports.userService = {
    signup
};
function signup(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const queryUser = yield user_model_1.User.findOne({ email: user.email });
            if (queryUser)
                throw new Error;
            console.log(user);
            const newUser = new user_model_1.User({
                username: user.username,
                email: user.email,
                password: yield bcrypt_1.default.hash(user.password, 10)
            });
            return newUser.save()
                .then(() => newUser)
                .catch((err) => err);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.signup = signup;
//# sourceMappingURL=user.service.js.map