"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerMiddleware = void 0;
const headerMiddleware = (req, res, next) => {
    req.headers['accept'] = 'application/json';
    next();
};
exports.headerMiddleware = headerMiddleware;
