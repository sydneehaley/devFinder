"use strict";
// const { PrismaClient } = require("@prisma/client");
Object.defineProperty(exports, "__esModule", { value: true });
// let prisma;
// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }
// module.exports = { prisma };
const client_1 = require("@prisma/client");
const prisma = global.prisma || new client_1.PrismaClient();
if (process.env.NODE_ENV === "development")
    global.prisma = prisma;
exports.default = prisma;
