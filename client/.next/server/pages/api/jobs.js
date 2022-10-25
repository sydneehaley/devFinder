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

/***/ "(api)/./pages/api/jobs/index.tsx":
/*!**********************************!*\
  !*** ./pages/api/jobs/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma_client_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/prisma/client/client */ \"(api)/../lib/prisma/client/client.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const jobs = await _lib_prisma_client_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].jobs.findMany();\n    res.status(200).json(jobs);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvam9icy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDMEQ7QUFFMUQsaUVBQWUsT0FBT0MsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSztJQUNsRSxNQUFNQyxJQUFJLEdBQUcsTUFBTUgsK0VBQW9CLEVBQUU7SUFDekNFLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNILElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2FwaS9qb2JzL2luZGV4LnRzeD8wY2UwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi8uLi9saWIvcHJpc21hL2NsaWVudC9jbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3Qgam9icyA9IGF3YWl0IHByaXNtYS5qb2JzLmZpbmRNYW55KCk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGpvYnMpO1xufTtcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJyZXEiLCJyZXMiLCJqb2JzIiwiZmluZE1hbnkiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/jobs/index.tsx\n");

/***/ }),

/***/ "(api)/../lib/prisma/client/client.js":
/*!**************************************!*\
  !*** ../lib/prisma/client/client.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n// const { PrismaClient } = require(\"@prisma/client\");\nexports.__esModule = true;\n// let prisma;\n// if (process.env.NODE_ENV === \"production\") {\n//   prisma = new PrismaClient();\n// } else {\n//   if (!global.prisma) {\n//     global.prisma = new PrismaClient();\n//   }\n//   prisma = global.prisma;\n// }\n// module.exports = { prisma };\nvar client_1 = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nvar prisma = global.prisma || new client_1.PrismaClient();\nif (true)\n    global.prisma = prisma;\nexports[\"default\"] = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi4vbGliL3ByaXNtYS9jbGllbnQvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsV0FBVyxlQUFlO0FBQzFCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixlQUFlLG1CQUFPLENBQUMsc0NBQWdCO0FBQ3ZDO0FBQ0EsSUFBSSxJQUFzQztBQUMxQztBQUNBLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uLi9saWIvcHJpc21hL2NsaWVudC9jbGllbnQuanM/NjU2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIGNvbnN0IHsgUHJpc21hQ2xpZW50IH0gPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gbGV0IHByaXNtYTtcbi8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbi8vICAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuLy8gfSBlbHNlIHtcbi8vICAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4vLyAgICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbi8vICAgfVxuLy8gICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xuLy8gfVxuLy8gbW9kdWxlLmV4cG9ydHMgPSB7IHByaXNtYSB9O1xudmFyIGNsaWVudF8xID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpO1xudmFyIHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IGNsaWVudF8xLlByaXNtYUNsaWVudCgpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpXG4gICAgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gcHJpc21hO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/../lib/prisma/client/client.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/jobs/index.tsx"));
module.exports = __webpack_exports__;

})();