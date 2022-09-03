"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const mongoose_1 = require("mongoose");
const TestSchema = new mongoose_1.Schema({
    wpm: { type: Number, },
    wpmRaw: { type: Number },
    passed: { type: Boolean },
    acc: { type: Number },
    realAcc: { type: Number },
    time: { type: Number },
    timestamp: { type: Number },
    uid: { type: String }
});
exports.Test = (0, mongoose_1.model)('Test', TestSchema);
//# sourceMappingURL=test.model.js.map