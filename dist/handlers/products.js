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
exports.deleteProduct = exports.updateProdut = exports.createProduct = exports.getProdut = exports.getAllProduct = void 0;
const db_1 = __importDefault(require("../db"));
// Get all by UserId  that belongs to user
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield db_1.default.user.findUnique({
            where: {
                id: req.user.id,
            },
            include: {
                products: true,
            },
        });
        res.status(200).json({ code: 200, data: user === null || user === void 0 ? void 0 : user.products });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            code: 400,
            error: "somethin went wrong",
        });
    }
});
exports.getAllProduct = getAllProduct;
// get A product by ProductId
const getProdut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ProductId = req.params.id;
        const product = yield db_1.default.product.findFirst({
            where: {
                id: ProductId,
                belongsToId: req.user.id,
            },
        });
        res.status(200).json({ code: 200, data: product });
    }
    catch (error) {
        res.status(400).json({ code: 400, error: "no product" });
    }
});
exports.getProdut = getProdut;
// create a product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield db_1.default.product.create({
            data: {
                name: req.body.name,
                belongsToId: req.user.id,
            },
        });
        res.status(201).json({ code: 201, data: product });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ code: 400, error: "couldn't create " });
    }
});
exports.createProduct = createProduct;
// update a product
const updateProdut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield db_1.default.product.update({
            where: {
                id_belongsToId: {
                    id: req.params.id,
                    belongsToId: req.user.id,
                },
            },
            data: {
                name: req.body.name,
            },
        });
        res.status(200).json({ code: 200, data: product });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ code: 400, error: error.meta.cause });
    }
});
exports.updateProdut = updateProdut;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedta = yield db_1.default.product.delete({
            where: {
                id_belongsToId: {
                    id: req.params.id,
                    belongsToId: req.user.id,
                },
            },
        });
        res.status(200).json({ code: 200, data: deletedta });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ code: 400, error: error.meta.cause });
    }
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=products.js.map