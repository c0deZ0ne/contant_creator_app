"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.validCreatBodyExpress = void 0;
const express_validator_1 = require("express-validator");
exports.validCreatBodyExpress = [
    (0, express_validator_1.body)(["username"]).isString().isLength({ min: 4, max: 30 }),
    (0, express_validator_1.body)("password").isString().isLength({ min: 4, max: 30 }),
];
var UPDATE_STATUS;
(function (UPDATE_STATUS) {
    UPDATE_STATUS["INPROGRESS"] = "UPDATE_STATUS";
    UPDATE_STATUS["SHIPPED"] = "SHIPPED";
    UPDATE_STATUS["DEPRECATED"] = "DEPRECATED";
})(UPDATE_STATUS || (UPDATE_STATUS = {}));
exports.updateProduct = [
    (0, express_validator_1.body)(["username"]).isString().isLength({ min: 6, max: 30 }),
    (0, express_validator_1.oneOf)([
        (0, express_validator_1.body)(["status"]).contains(UPDATE_STATUS.SHIPPED ||
            UPDATE_STATUS.DEPRECATED ||
            UPDATE_STATUS.INPROGRESS),
    ]),
    (0, express_validator_1.body)("password").isString().isLength({ min: 6, max: 30 }),
];
//# sourceMappingURL=schema.js.map