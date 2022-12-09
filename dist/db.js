"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client"); // import prisma client
const prisma = new client_1.PrismaClient(); // create prisma client instance
exports.default = prisma; // export prisma client instance to access anywhere
//# sourceMappingURL=db.js.map