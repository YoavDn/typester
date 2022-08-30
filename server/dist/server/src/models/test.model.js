"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const mongoose_1 = require("mongoose");
const TestSchema = new mongoose_1.Schema({
    wpm: { type: Number, },
    wpmRaw: { type: Number },
    acc: { type: Number },
    realAcc: { type: Number },
    time: { type: Number },
    typoCount: { type: Number },
    sumType: { type: Number },
    currWord: { type: Object },
    currLatter: { type: Object },
    txt: { type: mongoose_1.Schema.Types.Mixed },
    uid: { type: String }
});
exports.Test = (0, mongoose_1.model)('Test', TestSchema);
//# sourceMappingURL=test.model.js.map