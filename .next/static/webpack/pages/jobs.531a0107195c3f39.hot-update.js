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

/***/ "./components/jobs/JobsList.tsx":
/*!**************************************!*\
  !*** ./components/jobs/JobsList.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar dev = \"development\" !== \"production\";\nvar server = dev ? \"http://localhost:3000\" : \"https://your_deployment.server.com\";\nvar fetcher = function(url) {\n    return fetch(url).then(function(res) {\n        return res.json();\n    });\n};\nvar API = \"\".concat(server, \"/api/jobs\");\nfunction getServerSideProps() {\n    return _getServerSideProps.apply(this, arguments);\n}\nfunction _getServerSideProps() {\n    _getServerSideProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        var repoInfo;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetcher(API)\n                    ];\n                case 1:\n                    repoInfo = _state.sent();\n                    return [\n                        2,\n                        {\n                            props: {\n                                fallback: {\n                                    // [API]: repoInfo,\n                                    test: \"jdfjkjf\"\n                                }\n                            }\n                        }\n                    ];\n            }\n        });\n    });\n    return _getServerSideProps.apply(this, arguments);\n}\nvar JobsList = function(param) {\n    var fallback = param.fallback;\n    _s();\n    var config = {\n        // fallbackData: 'fallback',\n        revalidateOnMount: false,\n        fallback: fallback\n    };\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(config).data;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref[0], setLoading = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (typeof data === \"object\") {\n            setTimeout(function() {\n                setLoading(false);\n            }, 1000);\n        }\n    }, []);\n    // there should be no `undefined` state\n    console.log(\"Is data ready?\", !!data);\n    console.log(data);\n    console.log(typeof data === \"object\");\n    console.log(fallback);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[82%] flex flex-col items-start justify-start\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Jobs\"\n            }, void 0, false, {\n                fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, _this);\n};\n_s(JobsList, \"7t5MNwIcEgvjlylWHuvzVmq7eH4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = JobsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobsList);\nvar _c;\n$RefreshReg$(_c, \"JobsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2pvYnMvSm9ic0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBRXlCO0FBQ21CO0FBSzVDLElBQU1HLEdBQUcsR0FBR0MsYUFSQyxLQVF3QixZQUFZO0FBRWpELElBQU1DLE1BQU0sR0FBR0YsR0FBRyxHQUFHLHVCQUF1QixHQUFHLG9DQUFvQztBQUNuRixJQUFNRyxPQUFPLEdBQTBCLFNBQUNDLEdBQUc7V0FBS0MsS0FBSyxDQUFDRCxHQUFHLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFNBQUNDLEdBQUc7ZUFBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7S0FBQSxDQUFDO0NBQUE7QUFDcEYsSUFBTUMsR0FBRyxHQUFHLEVBQUMsQ0FBUyxNQUFTLENBQWhCUCxNQUFNLEVBQUMsV0FBUyxDQUFDO0FBSXpCLFNBQWVRLGtCQUFrQjtXQUFsQkEsbUJBQWtCO0NBVXZDO1NBVnFCQSxtQkFBa0I7SUFBbEJBLG1CQUFrQixHQUFqQywrRkFBb0M7WUFDbkNDLFFBQVE7Ozs7b0JBQUc7O3dCQUFNUixPQUFPLENBQUNNLEdBQUcsQ0FBQztzQkFBQTs7b0JBQTdCRSxRQUFRLEdBQUcsYUFBa0I7b0JBQ25DOzt3QkFBTzs0QkFDTEMsS0FBSyxFQUFFO2dDQUNMQyxRQUFRLEVBQUU7b0NBQ1IsbUJBQW1CO29DQUNuQkMsSUFBSSxFQUFFLFNBQVM7aUNBQ2hCOzZCQUNGO3lCQUNGO3NCQUFDOzs7SUFDSixDQUFDO1dBVnFCSixtQkFBa0I7O0FBWXhDLElBQU1LLFFBQVEsR0FBRyxnQkFBMEU7UUFBdkVGLFFBQVEsU0FBUkEsUUFBUTs7SUFDMUIsSUFBTUcsTUFBTSxHQUFxQjtRQUMvQiw0QkFBNEI7UUFDNUJDLGlCQUFpQixFQUFFLEtBQUs7UUFDeEJKLFFBQVEsRUFBUkEsUUFBUTtLQUNUO0lBRUQsSUFBTSxJQUFNLEdBQUtoQiwrQ0FBTSxDQUFRbUIsTUFBTSxDQUFDLENBQTlCRSxJQUFJO0lBQ1osSUFBOEJuQixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQXJDb0IsT0FBTyxHQUFnQnBCLEdBQWMsR0FBOUIsRUFBRXFCLFVBQVUsR0FBSXJCLEdBQWMsR0FBbEI7SUFFMUJELGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUksT0FBT29CLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUJHLFVBQVUsQ0FBQyxXQUFNO2dCQUNmRCxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQztJQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHVDQUF1QztJQUN2Q0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDTCxJQUFJLENBQUMsQ0FBQztJQUN0Q0ksT0FBTyxDQUFDQyxHQUFHLENBQUNMLElBQUksQ0FBQyxDQUFDO0lBQ2xCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPTCxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUM7SUFDdENJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixRQUFRLENBQUMsQ0FBQztJQUV0QixxQkFDRSw4REFBQ1csS0FBRztRQUFDQyxTQUFTLEVBQUMsaURBQWlEO2tCQUM5RCw0RUFBQ0QsS0FBRztzQkFDRiw0RUFBQ0UsSUFBRTswQkFBQyxNQUFJOzs7OztxQkFBSzs7Ozs7aUJBQ1Q7Ozs7O2FBWUYsQ0FDTjtBQUNKLENBQUM7R0ExQ0tYLFFBQVE7O1FBT0tsQiwyQ0FBTTs7O0FBUG5Ca0IsS0FBQUEsUUFBUTtBQTRDZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvam9icy9Kb2JzTGlzdC50c3g/MDVmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgdXNlSm9icyBmcm9tICcuLi8uLi9ob29rcy91c2VKb2JzJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tICduZXh0JztcbmltcG9ydCB0eXBlIHsgU1dSQ29uZmlndXJhdGlvbiwgRmV0Y2hlciB9IGZyb20gJ3N3cic7XG5pbXBvcnQgeyBTV1JDb25maWcgfSBmcm9tICdzd3InO1xuaW1wb3J0IHsgVXJsIH0gZnJvbSAndXJsJztcbmNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbmNvbnN0IHNlcnZlciA9IGRldiA/ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnIDogJ2h0dHBzOi8veW91cl9kZXBsb3ltZW50LnNlcnZlci5jb20nO1xuY29uc3QgZmV0Y2hlcjogRmV0Y2hlcjxVc2VyLCBzdHJpbmc+ID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuY29uc3QgQVBJID0gYCR7c2VydmVyfS9hcGkvam9ic2A7XG5cbnR5cGUgVXNlciA9IGFueTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcmVwb0luZm8gPSBhd2FpdCBmZXRjaGVyKEFQSSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGZhbGxiYWNrOiB7XG4gICAgICAgIC8vIFtBUEldOiByZXBvSW5mbyxcbiAgICAgICAgdGVzdDogJ2pkZmpramYnLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBKb2JzTGlzdCA9ICh7IGZhbGxiYWNrIH06IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPikgPT4ge1xuICBjb25zdCBjb25maWc6IFNXUkNvbmZpZ3VyYXRpb24gPSB7XG4gICAgLy8gZmFsbGJhY2tEYXRhOiAnZmFsbGJhY2snLFxuICAgIHJldmFsaWRhdGVPbk1vdW50OiBmYWxzZSxcbiAgICBmYWxsYmFjayxcbiAgfTtcblxuICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUjxhbnlbXT4oY29uZmlnKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyB0aGVyZSBzaG91bGQgYmUgbm8gYHVuZGVmaW5lZGAgc3RhdGVcbiAgY29uc29sZS5sb2coJ0lzIGRhdGEgcmVhZHk/JywgISFkYXRhKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnNvbGUubG9nKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jyk7XG4gIGNvbnNvbGUubG9nKGZhbGxiYWNrKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LVs4MiVdIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1zdGFydCc+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Sm9iczwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2PlxuICAgICAgICB7ZGF0YT8ubWFwKChqb2IsIGkpID0+IChcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdwLTAgbS0wJz5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDY+e2pvYi50aXRsZX08L2g2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBKb2JzTGlzdDtcbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImRldiIsInByb2Nlc3MiLCJzZXJ2ZXIiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkFQSSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcG9JbmZvIiwicHJvcHMiLCJmYWxsYmFjayIsInRlc3QiLCJKb2JzTGlzdCIsImNvbmZpZyIsInJldmFsaWRhdGVPbk1vdW50IiwiZGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/jobs/JobsList.tsx\n"));

/***/ })

});