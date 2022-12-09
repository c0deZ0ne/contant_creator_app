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
exports.deleteUpdate = exports.updateUpdate = exports.createUpdate = exports.getUpdates = exports.getOneUpdate = void 0;
const db_1 = __importDefault(require("../db"));
const getOneUpdate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (db_1.default === null || db_1.default === void 0 ? void 0 : db_1.default.update.findUnique({
            where: {
                id: req.params.id,
            },
        }));
        return res.status(200).json({ code: 200, data: data });
    }
    catch (error) {
        res.status(400).json({ code: 400, error: error.meta.cause });
    }
});
exports.getOneUpdate = getOneUpdate;
const getUpdates = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const updates = prisma.update
    try {
        let products = yield db_1.default.product.findMany({
            where: {
                belongsToId: req.params.id,
            },
            include: {
                Update: true,
            },
        });
        const updates = products.reduce((allupdates, curentProduct) => {
            return [...allupdates, ...curentProduct.Update];
        }, []);
        res.status(200).json({ code: 200, data: updates });
    }
    catch (error) {
        res.status(400).json({ code: 400, error: error.meta.cause });
    }
});
exports.getUpdates = getUpdates;
const createUpdate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { body, title, productID } = req.body;
    console.log(body, title, productID);
    try {
        let product = yield db_1.default.product.findUnique({
            where: {
                id: req.body.productID,
            },
        });
        if (!product)
            return res
                .status(400)
                .json({ code: 400, error: " error creating update " });
        /// let update = await prisma.update.create({
        //   data: {
        //     body,
        //     title,
        //     productID,
        //   },
        // });
        let update = yield db_1.default.update.create({
            data: {
                body,
                title,
                product: { connect: { id: product.id } },
            },
        });
        return res.status(201).json({ code: 201, data: update });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ code: 400, error: (_a = error === null || error === void 0 ? void 0 : error.meta) === null || _a === void 0 ? void 0 : _a.cause });
    }
});
exports.createUpdate = createUpdate;
const updateUpdate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        let products = yield db_1.default.product.findMany({
            where: {
                belongsToId: req.body.id,
            },
            include: {
                Update: true,
            },
        });
        const updates = products.reduce((allupdates, curentProduct) => {
            return [...allupdates, ...curentProduct === null || curentProduct === void 0 ? void 0 : curentProduct.Update];
        }, []);
        let match = updates.find((update) => update.id == req.params.id); //check for match in user data
        if (!match)
            return res
                .status(400)
                .json({ code: 400, error: "could not update or no data toupdate" });
        let updatedUpdate = yield db_1.default.update.update({
            where: {
                id: req.params.id,
            },
            data: req.body,
        });
        res.status(200).json({ code: 200, data: updatedUpdate });
    }
    catch (error) {
        res.status(400).json({ code: 400, error: (_b = error === null || error === void 0 ? void 0 : error.meta) === null || _b === void 0 ? void 0 : _b.cause });
    }
});
exports.updateUpdate = updateUpdate;
const deleteUpdate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        console.log("delete");
        let products = yield db_1.default.product.findMany({
            where: {
                belongsToId: req.body.id,
            },
            include: {
                Update: true,
            },
        });
        const updates = products.reduce((allupdates, curentProduct) => {
            return [...allupdates, ...curentProduct === null || curentProduct === void 0 ? void 0 : curentProduct.Update];
        }, []);
        let match = updates.find((update) => update.id == req.params.id); //check for match in user data
        if (!match)
            return res
                .status(400)
                .json({ code: 400, error: "could not delete or no data delete" });
        let deleteUpdate = yield db_1.default.update.delete({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ code: 200, data: deleteUpdate });
    }
    catch (error) {
        res.status(400).json({ code: 400, error: (_c = error === null || error === void 0 ? void 0 : error.meta) === null || _c === void 0 ? void 0 : _c.cause });
    }
});
exports.deleteUpdate = deleteUpdate;
//# sourceMappingURL=update.js.map