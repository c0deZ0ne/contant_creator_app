"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("./handlers/products");
const update_1 = require("./handlers/update");
const joi_validator_1 = require("./modules/middleware/joi-validator");
const router = (0, express_1.Router)();
// product routes
/**
 * @swagger
 * Products:
 */
router.get("/product", joi_validator_1.joialidator, products_1.getAllProduct);
router.post("/product", joi_validator_1.joialidator, products_1.createProduct);
router.get("/product/:id", joi_validator_1.joialidator, products_1.getProdut);
router.put("/product/:id", joi_validator_1.joialidator, products_1.updateProdut);
router.delete("/product/:id", joi_validator_1.joialidator, products_1.deleteProduct);
// Update routes
/**
 * @swagger
 * Update
 */
router.get("/update", joi_validator_1.joialidator, update_1.getUpdates);
router.get("/update/:id", joi_validator_1.joialidator, update_1.getOneUpdate);
router.post("/update", joi_validator_1.joialidator, update_1.createUpdate);
router.put("/update/:id", joi_validator_1.joialidator, update_1.updateUpdate);
router.delete("/update/:id", joi_validator_1.joialidator, update_1.deleteUpdate);
// UpdatePoint  routes
/**
 * @swagger
 * UpdatePoints
 */
router.get("/updatepoint", () => { });
router.post("/updatepoint", () => { });
router.get("/updatepoint/:id", () => { });
router.put("/updatepoint/:id", () => { });
router.delete("/updatepoint/:id", () => { });
exports.default = router;
//# sourceMappingURL=router.js.map