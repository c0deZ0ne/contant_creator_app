"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true })); //help urlencoded data to be readable object
// middlewares
const auth_1 = require("./modules/auth");
const users_1 = require("./handlers/users");
const joi_validator_1 = require("./modules/middleware/joi-validator");
const schema_1 = require("./modules/middleware/express-validator/schema");
const express_validator_1 = require("./modules/middleware/express-validator");
// end of middlewares
//import  routes starts here
const router_1 = __importDefault(require("./router"));
// end of import routes
app.use("/api", auth_1.protect, router_1.default);
app.post("/user", joi_validator_1.joialidator, schema_1.validCreatBodyExpress, express_validator_1.handleInputError, users_1.createNewUser);
app.post("/signin", joi_validator_1.joialidator, users_1.signin);
app.get("/", (req, res, next) => {
    res.status(200).json({ code: 200, message: "hello" });
    // setTimeout(() => {
    //   next(new Error("every thing here is error "));
    // }, 10);
    // // throw "some error";
});
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ code: 500, error: err.message });
});
exports.default = app;
//# sourceMappingURL=server.js.map