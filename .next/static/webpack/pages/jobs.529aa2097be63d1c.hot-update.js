"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/jobs",{

/***/ "./components/jobs/List.tsx":
/*!**********************************!*\
  !*** ./components/jobs/List.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar List = function(param) {\n    var data = param.data;\n    // there should be no `undefined` state\n    console.log(\"Is data ready?\", !!data);\n    console.log(data);\n    console.log(typeof data === \"object\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[82%] flex flex-col items-start justify-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Jobs\"\n                }, void 0, false, {\n                    fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/List.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/List.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data === null || data === void 0 ? void 0 : data.map(function(job, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"p-0 m-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    children: job.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/List.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/List.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/List.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/List.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/List.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/List.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = List;\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2pvYnMvTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBTUEsSUFBTUEsSUFBSSxHQUFvQixnQkFBYztRQUFYQyxJQUFJLFNBQUpBLElBQUk7SUFDbkMsdUNBQXVDO0lBQ3ZDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUNGLElBQUksQ0FBQyxDQUFDO0lBQ3RDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7SUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU9GLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQztJQUV0QyxxQkFDRSw4REFBQ0csS0FBRztRQUFDQyxTQUFTLEVBQUMsaURBQWlEOzswQkFDOUQsOERBQUNELEtBQUc7MEJBQ0YsNEVBQUNFLElBQUU7OEJBQUMsTUFBSTs7Ozs7eUJBQUs7Ozs7O3FCQUNUOzBCQUNOLDhEQUFDRixLQUFHOzBCQUNESCxJQUFJLGFBQUpBLElBQUksV0FBSyxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLElBQUksQ0FBRU0sR0FBRyxDQUFDLFNBQUNDLEdBQVEsRUFBRUMsQ0FBTTt5Q0FDMUIsOERBQUNDLElBQUU7d0JBQUNMLFNBQVMsRUFBQyxTQUFTO2tDQUNyQiw0RUFBQ00sSUFBRTtzQ0FDRCw0RUFBQ1AsS0FBRzswQ0FDRiw0RUFBQ1EsSUFBRTs4Q0FBRUosR0FBRyxDQUFDSyxLQUFLOzs7Ozt5Q0FBTTs7Ozs7cUNBQ2hCOzs7OztpQ0FDSDs7Ozs7NkJBQ0Y7aUJBQ04sQ0FBQzs7Ozs7cUJBQ0U7Ozs7OzthQUNGLENBQ047QUFDSixDQUFDO0FBeEJLYixLQUFBQSxJQUFJO0FBMEJWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9qb2JzL0xpc3QudHN4P2M1OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuXG50eXBlIFByb3BzID0ge1xuICBkYXRhPzogW107XG59O1xuXG5jb25zdCBMaXN0OiBOZXh0UGFnZTxQcm9wcz4gPSAoeyBkYXRhIH0pID0+IHtcbiAgLy8gdGhlcmUgc2hvdWxkIGJlIG5vIGB1bmRlZmluZWRgIHN0YXRlXG4gIGNvbnNvbGUubG9nKCdJcyBkYXRhIHJlYWR5PycsICEhZGF0YSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBjb25zb2xlLmxvZyh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctWzgyJV0gZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0Jz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Kb2JzPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge2RhdGE/Lm1hcCgoam9iOiBhbnksIGk6IGFueSkgPT4gKFxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3AtMCBtLTAnPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoNj57am9iLnRpdGxlfTwvaDY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiJdLCJuYW1lcyI6WyJMaXN0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImpvYiIsImkiLCJ1bCIsImxpIiwiaDYiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/jobs/List.tsx\n"));

/***/ })

});