"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.status(401).send('You are not authenticated');
    }
    else {
        return next();
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=user.middleware.js.map