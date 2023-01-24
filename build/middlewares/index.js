"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerMiddleware = exports.notFoundMiddleware = void 0;
const notfound_middleware_1 = require("./notfound.middleware");
Object.defineProperty(exports, "notFoundMiddleware", { enumerable: true, get: function () { return notfound_middleware_1.notFoundMiddleware; } });
const header_Middleware_1 = require("./header.Middleware");
Object.defineProperty(exports, "headerMiddleware", { enumerable: true, get: function () { return header_Middleware_1.headerMiddleware; } });
