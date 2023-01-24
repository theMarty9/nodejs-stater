"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const homeRouter = express_1.default.Router();
homeRouter.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
exports.default = homeRouter;
