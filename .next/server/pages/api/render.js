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
exports.id = "pages/api/render";
exports.ids = ["pages/api/render"];
exports.modules = {

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("puppeteer");;

/***/ }),

/***/ "(api)/./pages/api/render.ts":
/*!*****************************!*\
  !*** ./pages/api/render.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Handler\": () => (/* binding */ Handler)\n/* harmony export */ });\n/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! puppeteer */ \"puppeteer\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([puppeteer__WEBPACK_IMPORTED_MODULE_0__]);\npuppeteer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst Handler = async (req, res)=>{\n    const browser = await puppeteer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].launch();\n    const page = await browser.newPage();\n    await page.goto(\"https://indeed.com\");\n    // Type into search box.\n    await page.type(\"#text-input-what\", \"Software Engineer\");\n    await browser.close();\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVuZGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2tDO0FBRTNCLE1BQU1DLE9BQU8sR0FBbUIsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDekQsTUFBTUMsT0FBTyxHQUFHLE1BQU1KLHdEQUFnQixFQUFFO0lBQ3hDLE1BQU1NLElBQUksR0FBRyxNQUFNRixPQUFPLENBQUNHLE9BQU8sRUFBRTtJQUVwQyxNQUFNRCxJQUFJLENBQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRXRDLHdCQUF3QjtJQUN4QixNQUFNRixJQUFJLENBQUNHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBRXpELE1BQU1MLE9BQU8sQ0FBQ00sS0FBSyxFQUFFLENBQUM7QUFDeEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvYXBpL3JlbmRlci50cz8yMzFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlIYW5kbGVyIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgcHVwcGV0ZWVyIGZyb20gJ3B1cHBldGVlcic7XG5cbmV4cG9ydCBjb25zdCBIYW5kbGVyOiBOZXh0QXBpSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBicm93c2VyID0gYXdhaXQgcHVwcGV0ZWVyLmxhdW5jaCgpO1xuICBjb25zdCBwYWdlID0gYXdhaXQgYnJvd3Nlci5uZXdQYWdlKCk7XG5cbiAgYXdhaXQgcGFnZS5nb3RvKCdodHRwczovL2luZGVlZC5jb20nKTtcblxuICAvLyBUeXBlIGludG8gc2VhcmNoIGJveC5cbiAgYXdhaXQgcGFnZS50eXBlKCcjdGV4dC1pbnB1dC13aGF0JywgJ1NvZnR3YXJlIEVuZ2luZWVyJyk7XG5cbiAgYXdhaXQgYnJvd3Nlci5jbG9zZSgpO1xufTtcbiJdLCJuYW1lcyI6WyJwdXBwZXRlZXIiLCJIYW5kbGVyIiwicmVxIiwicmVzIiwiYnJvd3NlciIsImxhdW5jaCIsInBhZ2UiLCJuZXdQYWdlIiwiZ290byIsInR5cGUiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/render.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/render.ts"));
module.exports = __webpack_exports__;

})();