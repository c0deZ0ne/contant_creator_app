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
exports.deleteUpdate = exports.updateUpdate = exports.createUpdate = exports.getUpdate = exports.updateProduct = exports.signin = exports.createProduct = exports.createUser = exports.option = void 0;
const joi_1 = __importDefault(require("joi"));
exports.option = {
    abortEarly: false,
    errors: {
        wrap: {
            label: "",
        },
    },
};
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let schema = joi_1.default.object({
        username: joi_1.default.string().required().min(4),
        password: joi_1.default.string().min(4).required(),
    });
    const check = schema.validate(req.body, exports.option);
    if (check.error) {
        return res.status(400).json({ code: 400, error: check.error.message });
    }
    else {
        next();
    }
});
exports.createUser = createUser;
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let schema = joi_1.default.object({
        name: joi_1.default.string().required().min(13),
    });
    console.log("validating");
    const valid = schema.validate(req.body, exports.option);
    if (valid.error) {
        res.status(400).json({ code: 400, error: valid.error.message });
    }
    else {
        next();
    }
});
exports.createProduct = createProduct;
const signin = (req, res, next) => {
    let schema = joi_1.default.object({
        username: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
    });
    const valid = schema.validate(req.body, exports.option);
    if (valid.error) {
        res.status(400).json({ code: 400, error: valid.error.message });
    }
    else {
        next();
    }
};
exports.signin = signin;
const updateProduct = (req, res, next) => {
    let schema = joi_1.default.object({
        name: joi_1.default.string().required(),
    });
    const valid = schema.validate(req.body, exports.option);
    if (valid.error) {
        res.status(400).json({ code: 400, error: valid.error.message });
    }
    else {
        next();
    }
};
exports.updateProduct = updateProduct;
//joi update
const getUpdate = (req, res, next) => {
    let schema = joi_1.default.object({
        name: joi_1.default.string().required(),
    });
    const valid = schema.validate(req.body, exports.option);
    if (valid.error) {
        res.status(400).json({ code: 400, error: valid.error.message });
    }
    else {
        next();
    }
};
exports.getUpdate = getUpdate;
const createUpdate = (req, res, next) => {
    let schema = joi_1.default.object({
        body: joi_1.default.string().required(),
        title: joi_1.default.string().required(),
        productID: joi_1.default.string().required(),
    });
    const valid = schema.validate(req.body, exports.option);
    if (valid.error) {
        res.status(400).json({ code: 400, error: valid.error.message });
    }
    else {
        next();
    }
};
exports.createUpdate = createUpdate;
const updateUpdate = (req, res, next) => {
    let schema = joi_1.default.object({
        name: joi_1.default.string(),
        title: joi_1.default.string().optional(),
        body: joi_1.default.string().required(),
        asset: joi_1.default.string().optional(),
        status: joi_1.default.string().optional(),
        version: joi_1.default.string().required(),
    });
    const valid = schema.validate(req.body, exports.option);
    if (valid.error) {
        res.status(400).json({ code: 400, error: valid.error.message });
    }
    else {
        next();
    }
};
exports.updateUpdate = updateUpdate;
const deleteUpdate = (req, res, next) => {
    let schema = joi_1.default.object({
        name: joi_1.default.string().required(),
    });
    const valid = schema.validate(req.body, exports.option);
    if (valid.error) {
        res.status(400).json({ code: 400, error: valid.error.message });
    }
    else {
        next();
    }
};
exports.deleteUpdate = deleteUpdate;
//# sourceMappingURL=schema.js.map