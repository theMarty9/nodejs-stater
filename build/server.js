"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const _config_1 = require("./config");
const _routes_1 = require("./routes");
const _middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
const port = _config_1.config.server.port;
app.use(express_1.default.json());
app.use(_middlewares_1.headerMiddleware);
app.use('/', _routes_1.homeRouter);
app.use(_middlewares_1.notFoundMiddleware);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
