"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// required environment variables
['NODE_ENV', 'PORT'].forEach((name) => {
    if (!process.env[name]) {
        throw new Error(`Environment variable ${name} is missing`);
    }
});
exports.config = {
    env: process.env.NODE_ENV,
    logger: {
        level: process.env.LOG_LEVEL || 'info',
        enabled: process.env.BOOLEAN ? process.env.BOOLEAN.toLowerCase() === 'true' : false,
    },
    server: {
        port: Number(process.env.PORT),
    },
};
