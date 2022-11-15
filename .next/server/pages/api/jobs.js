"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/jobs";
exports.ids = ["pages/api/jobs"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma/client/client.js":
/*!*************************************!*\
  !*** ./lib/prisma/client/client.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n// const { PrismaClient } = require(\"@prisma/client\");\nexports.__esModule = true;\n// let prisma;\n// if (process.env.NODE_ENV === \"production\") {\n//   prisma = new PrismaClient();\n// } else {\n//   if (!global.prisma) {\n//     global.prisma = new PrismaClient();\n//   }\n//   prisma = global.prisma;\n// }\n// module.exports = { prisma };\nvar client_1 = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nvar prisma = global.prisma || new client_1.PrismaClient();\nif (true) global.prisma = prisma;\nexports[\"default\"] = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hL2NsaWVudC9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixzREFBc0Q7QUFDdERBLGtCQUFrQixHQUFHLElBQUksQ0FBQztBQUMxQixjQUFjO0FBQ2QsK0NBQStDO0FBQy9DLGlDQUFpQztBQUNqQyxXQUFXO0FBQ1gsMEJBQTBCO0FBQzFCLDBDQUEwQztBQUMxQyxNQUFNO0FBQ04sNEJBQTRCO0FBQzVCLElBQUk7QUFDSiwrQkFBK0I7QUFDL0IsSUFBSUUsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLHNDQUFnQixDQUFDO0FBQ3hDLElBQUlDLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFNLElBQUksSUFBSUYsUUFBUSxDQUFDSSxZQUFZLEVBQUU7QUFDekQsSUFBSUMsSUFBc0MsRUFDdENGLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNLENBQUM7QUFDM0JKLGtCQUFrQixHQUFHSSxNQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9saWIvcHJpc21hL2NsaWVudC9jbGllbnQuanM/NjNlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIGNvbnN0IHsgUHJpc21hQ2xpZW50IH0gPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gbGV0IHByaXNtYTtcbi8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbi8vICAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuLy8gfSBlbHNlIHtcbi8vICAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4vLyAgICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbi8vICAgfVxuLy8gICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xuLy8gfVxuLy8gbW9kdWxlLmV4cG9ydHMgPSB7IHByaXNtYSB9O1xudmFyIGNsaWVudF8xID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpO1xudmFyIHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IGNsaWVudF8xLlByaXNtYUNsaWVudCgpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpXG4gICAgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gcHJpc21hO1xuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiY2xpZW50XzEiLCJyZXF1aXJlIiwicHJpc21hIiwiZ2xvYmFsIiwiUHJpc21hQ2xpZW50IiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma/client/client.js\n");

/***/ }),

/***/ "(api)/./pages/api/jobs/index.ts":
/*!*********************************!*\
  !*** ./pages/api/jobs/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma_client_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma/client/client */ \"(api)/./lib/prisma/client/client.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const jobs = await _lib_prisma_client_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].jobs.findMany();\n    res.status(200).json(jobs);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvam9icy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUN1RDtBQUV2RCxpRUFBZSxPQUFPQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLO0lBQ2xFLE1BQU1DLElBQUksR0FBRyxNQUFNSCwrRUFBb0IsRUFBRTtJQUN6Q0UsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvYXBpL2pvYnMvaW5kZXgudHM/NzJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYS9jbGllbnQvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCBqb2JzID0gYXdhaXQgcHJpc21hLmpvYnMuZmluZE1hbnkoKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oam9icyk7XG59O1xuIl0sIm5hbWVzIjpbInByaXNtYSIsInJlcSIsInJlcyIsImpvYnMiLCJmaW5kTWFueSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/jobs/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/jobs/index.ts"));
module.exports = __webpack_exports__;

})();