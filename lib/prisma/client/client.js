"use strict";
// const { PrismaClient } = require("@prisma/client");
exports.__esModule = true;
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
var client_1 = require("@prisma/client");
var prisma = global.prisma || new client_1.PrismaClient();
if (process.env.NODE_ENV === "development")
    global.prisma = prisma;
exports["default"] = prisma;
