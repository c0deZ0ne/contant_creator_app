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
Object.defineProperty(exports, "__esModule", { value: true });
exports.joialidator = void 0;
const schema_1 = require("./schema");
const joialidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const location = req.url;
    const method = req.method;
    const { id } = req.params;
    const data = req.body;
    let productRoute = new RegExp(/^\/product$/);
    let productWithRouteParams = new RegExp(/^\/product\/[\w-]{30,}/g);
    let updateRoute = new RegExp(/^\/update$/);
    let updatetWithRouteParams = new RegExp(/^\/update\/[\w-]{30,}/g);
    // user route validator
    if (location == "/signin") {
        (0, schema_1.signin)(req, res, next);
    }
    else if (location == "/user") {
        //check for route params
        if (method == "POST") {
            //creating user
            (0, schema_1.createUser)(req, res, next);
        }
        else if (method == "GET" && id) {
            //get
        }
        else if (method == "PUT" && id) {
            //update
        }
        else if (method == "PATCH" && id) {
            // update
        }
        else if (method == "DELETE" && id) {
            next();
        }
        else if (method == "UPDATE" && id) {
            // update
        }
        else {
        }
    }
    else if (location.match(productRoute) ||
        location.match(productWithRouteParams)) {
        //product route
        console.log("productRout Match");
        if (method == "POST") {
            //creating products validator
            (0, schema_1.createProduct)(req, res, next);
        }
        else if (method == "GET") {
            //get
            next();
        }
        else if (method == "GET" && id) {
            //get
            next();
        }
        else if (method == "PUT" && id) {
            //update
            (0, schema_1.updateProduct)(req, res, next);
            console.log("mu " + id);
        }
        else if (method == "PATCH" && id) {
            // update
        }
        else if (method == "DELETE" && id) {
            // delete
            console.log(id);
            next();
        }
        else if (method == "UPDATE" && id) {
            // update
            console.log(id);
        }
        else {
            console.log("wrong route");
        }
    }
    else if (location.match(updateRoute) ||
        location.match(updatetWithRouteParams)) {
        //check for route params
        if (method == "POST") {
            //creating products validate inputs
            (0, schema_1.createUpdate)(req, res, next);
        }
        else if (method == "GET") {
            //get all updates by user
            next();
        }
        else if (method == "GET" && id) {
            next();
        }
        else if (method == "PUT" && id) {
            //update
            console.log("update");
            (0, schema_1.updateUpdate)(req, res, next);
        }
        else if (method == "PATCH" && id) {
            // update
        }
        else if (method == "DELETE" && id) {
            // delete
            next();
        }
    }
    else {
        console.log(id);
        console.log("no route");
    }
});
exports.joialidator = joialidator;
//# sourceMappingURL=index.js.map