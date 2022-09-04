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
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveTest = exports.testService = void 0;
const user_model_1 = require("../models/user.model");
const test_model_1 = require("../models/test.model");
exports.testService = {
    saveTest,
    userTests,
    getTopTests
};
function saveTest(test, userID) {
    return __awaiter(this, void 0, void 0, function* () {
        const testToSave = new test_model_1.Test(Object.assign(Object.assign({}, test), { uid: userID }));
        yield testToSave.save();
        return testToSave;
    });
}
exports.saveTest = saveTest;
function userTests(userID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userTests = yield test_model_1.Test.find({ uid: userID });
            if (!userTests)
                return null;
            return userTests;
        }
        catch (err) {
            return console.log(err);
        }
    });
}
function getTopTests() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const topTests = yield test_model_1.Test.find({ acc: { $gt: 90 } }).sort({ 'wpm': -1 });
            const topTestsMap = topTests.slice(topTests.length < 50 ? 0 : 50).map((test) => __awaiter(this, void 0, void 0, function* () {
                return {
                    // @ts-ignore
                    user: yield user_model_1.User.findById(test.uid),
                    wpm: test.wpm,
                    acc: test.acc,
                    timestamp: test.timestamp
                };
            }));
            return Promise.all(topTestsMap);
        }
        catch (err) {
            return console.log(err);
        }
    });
}
//# sourceMappingURL=test.service.js.map