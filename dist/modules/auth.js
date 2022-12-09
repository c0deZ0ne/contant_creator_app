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
exports.protect = exports.createToken = exports.hashPassword = exports.comparePassword = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//compare password
const comparePassword = (password, hash) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.compare(password, hash);
});
exports.comparePassword = comparePassword;
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.hash(password, 10);
});
exports.hashPassword = hashPassword;
const createToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    let secrete = process.env.JWT_SECRETE;
    if (secrete) {
        const token = jsonwebtoken_1.default.sign({ id: user.id, username: user.username }, secrete, {
            expiresIn: "1d",
        });
        return token;
    }
    else {
        return null;
    }
});
exports.createToken = createToken;
const protect = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let bearer = req.headers.authorization;
        if (!bearer) {
            res.status(401).json({ message: "Not authorized to access this route" });
            return;
        }
        const [, token] = bearer.split(" ");
        console.log(token);
        if (!token)
            return res.status(401).json({ message: "Not valide token" });
        let secrete = process.env.JWT_SECRETE;
        if (secrete) {
            let user = jsonwebtoken_1.default.verify(token, secrete);
            if (!user)
                return res.status(401).json({ message: "Not valide token" });
            req.user = user;
            next();
        }
        else {
            req.user = null;
            res.status(500).json({ code: 500, message: "internal server error" });
        }
    }
    catch (error) {
        // console.log(error);
        res.status(401).json({ message: "Not valide" });
    }
});
exports.protect = protect;
//# sourceMappingURL=auth.js.map