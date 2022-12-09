"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config_1 = __importDefault(require("./config"));
const server_1 = __importDefault(require("./server"));
process.on("unhandledRejection", (e) => {
    console.log(e);
});
process.on("uncaughtException", (e) => {
    console.log(e);
});
server_1.default.listen(config_1.default.port, () => {
    console.log(`Server running on port ${config_1.default.port}`);
});
//# sourceMappingURL=index.js.map