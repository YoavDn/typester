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
exports.topTests = exports.getUserTests = exports.saveTest = void 0;
const test_service_1 = require("../services/test.service");
function saveTest(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const test = req.body.test;
            const savedTest = yield test_service_1.testService.saveTest(test, req.body.uid);
            return savedTest;
        }
        catch (err) {
            return console.log(err);
        }
    });
}
exports.saveTest = saveTest;
function getUserTests(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userTests = yield test_service_1.testService.userTests(req.params.userId);
            res.send(userTests);
        }
        catch (err) {
            return console.log(err);
        }
    });
}
exports.getUserTests = getUserTests;
function topTests(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const topTests = yield test_service_1.testService.getTopTests();
            return res.send(topTests);
        }
        catch (err) {
            return console.log(err);
        }
    });
}
exports.topTests = topTests;
//# sourceMappingURL=test.contorller.js.map