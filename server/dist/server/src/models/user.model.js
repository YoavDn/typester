"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    googleId: {
        type: String,
        unique: true
    }
});
exports.User = (0, mongoose_1.model)('User', UserSchema);
//# sourceMappingURL=user.model.js.map