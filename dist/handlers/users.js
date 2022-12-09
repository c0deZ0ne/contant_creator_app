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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.createNewUser = void 0;
const db_1 = __importDefault(require("../db"));
const auth_1 = require("../modules/auth");
// import { createUserSchema, option } from "../utils";
const createNewUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //joi validate
    try {
        const { username, password } = req.body;
        const user = yield db_1.default.user.create({
            data: {
                username,
                password: yield (0, auth_1.hashPassword)(password),
            },
        });
        //create token
        const userToken = yield (0, auth_1.createToken)(user);
        return res.json({ code: 201, token: userToken });
    }
    catch (error) {
        // res.json({ code: 400, message: "Username already exist" });
        next({
            code: 400,
            error: "internal server error",
        });
    }
});
exports.createNewUser = createNewUser;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        let user = yield db_1.default.user.findUnique({
            where: {
                username: username,
            },
        });
        if (!user)
            return res
                .status(401)
                .json({ code: 401, message: "username or password is incurrect" });
        const isValid = yield (0, auth_1.comparePassword)(password, user === null || user === void 0 ? void 0 : user.password);
        console.log(isValid);
        if (!isValid)
            return res
                .status(401)
                .json({ code: 401, message: "username or password is incurrect" });
        const token = yield (0, auth_1.createToken)(user);
        res.status(200).json({ code: 200, token });
    }
    catch (error) {
        console.log(error);
        res
            .status(400)
            .json({ code: 400, message: "username or password is incurrect" });
    }
});
exports.signin = signin;
//# sourceMappingURL=users.js.map