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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar dev = \"development\" !== \"production\";\nvar server = dev ? \"http://localhost:3000\" : \"https://your_deployment.server.com\";\nvar fetcher = function(url) {\n    return fetch(url).then(function(res) {\n        return res.json();\n    });\n};\nvar API = \"\".concat(server, \"/api/jobs\");\nfunction getServerSideProps() {\n    return _getServerSideProps.apply(this, arguments);\n}\nfunction _getServerSideProps() {\n    _getServerSideProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        var repoInfo;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetcher(API)\n                    ];\n                case 1:\n                    repoInfo = _state.sent();\n                    return [\n                        2,\n                        {\n                            props: {\n                                fallback: (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, API, repoInfo)\n                            }\n                        }\n                    ];\n            }\n        });\n    });\n    return _getServerSideProps.apply(this, arguments);\n}\nvar config = {\n    fallbackData: \"fallback\",\n    revalidateOnMount: false,\n    refreshInterval: 1000\n};\nvar JobsList = function() {\n    _s();\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(API, fetcher, config).data;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref[0], setLoading = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (typeof data === \"object\") {\n            setTimeout(function() {\n                setLoading(false);\n            }, 1000);\n        }\n    }, []);\n    // there should be no `undefined` state\n    console.log(\"Is data ready?\", !!data);\n    console.log(data);\n    console.log(typeof data === \"object\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[82%] flex flex-col items-start justify-start\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Jobs\"\n            }, void 0, false, {\n                fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, _this);\n};\n_s(JobsList, \"7t5MNwIcEgvjlylWHuvzVmq7eH4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = JobsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobsList);\nvar _c;\n$RefreshReg$(_c, \"JobsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2pvYnMvSm9ic0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFeUI7QUFDbUI7QUFFNUMsSUFBTUcsR0FBRyxHQUFHQyxhQUxDLEtBS3dCLFlBQVk7QUFFakQsSUFBTUMsTUFBTSxHQUFHRixHQUFHLEdBQUcsdUJBQXVCLEdBQUcsb0NBQW9DO0FBQ25GLElBQU1HLE9BQU8sR0FBRyxTQUFDQyxHQUFXO1dBQUtDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQUNFLElBQUksQ0FBQyxTQUFDQyxHQUFHO2VBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO0tBQUEsQ0FBQztDQUFBO0FBQ3JFLElBQU1DLEdBQUcsR0FBRyxFQUFDLENBQVMsTUFBUyxDQUFoQlAsTUFBTSxFQUFDLFdBQVMsQ0FBQztBQUV6QixTQUFlUSxrQkFBa0I7V0FBbEJBLG1CQUFrQjtDQVN2QztTQVRxQkEsbUJBQWtCO0lBQWxCQSxtQkFBa0IsR0FBakMsK0ZBQW9DO1lBQ25DQyxRQUFROzs7O29CQUFHOzt3QkFBTVIsT0FBTyxDQUFDTSxHQUFHLENBQUM7c0JBQUE7O29CQUE3QkUsUUFBUSxHQUFHLGFBQWtCO29CQUNuQzs7d0JBQU87NEJBQ0xDLEtBQUssRUFBRTtnQ0FDTEMsUUFBUSxFQUNOLHFGQUFDSixHQUFHLEVBQUdFLFFBQVE7NkJBRWxCO3lCQUNGO3NCQUFDOzs7SUFDSixDQUFDO1dBVHFCRCxtQkFBa0I7O0FBV3hDLElBQU1JLE1BQU0sR0FBcUI7SUFDL0JDLFlBQVksRUFBRSxVQUFVO0lBQ3hCQyxpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCQyxlQUFlLEVBQUUsSUFBSTtDQUV0QjtBQUVELElBQU1DLFFBQVEsR0FBRyxXQUFNOztJQUNyQixJQUFNLElBQU0sR0FBS3JCLCtDQUFNLENBQVFZLEdBQUcsRUFBRU4sT0FBTyxFQUFFVyxNQUFNLENBQUMsQ0FBNUNLLElBQUk7SUFDWixJQUE4QnBCLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBckNxQixPQUFPLEdBQWdCckIsR0FBYyxHQUE5QixFQUFFc0IsVUFBVSxHQUFJdEIsR0FBYyxHQUFsQjtJQUUxQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSSxPQUFPcUIsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QkcsVUFBVSxDQUFDLFdBQU07Z0JBQ2ZELFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsdUNBQXVDO0lBQ3ZDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUNMLElBQUksQ0FBQyxDQUFDO0lBQ3RDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDLENBQUM7SUFDbEJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU9MLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQztJQUV0QyxxQkFDRSw4REFBQ00sS0FBRztRQUFDQyxTQUFTLEVBQUMsaURBQWlEO2tCQUM5RCw0RUFBQ0QsS0FBRztzQkFDRiw0RUFBQ0UsSUFBRTswQkFBQyxNQUFJOzs7OztxQkFBSzs7Ozs7aUJBQ1Q7Ozs7O2FBWUYsQ0FDTjtBQUNKLENBQUM7R0FuQ0tULFFBQVE7O1FBQ0tyQiwyQ0FBTTs7O0FBRG5CcUIsS0FBQUEsUUFBUTtBQXFDZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvam9icy9Kb2JzTGlzdC50c3g/MDVmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgdXNlSm9icyBmcm9tICcuLi8uLi9ob29rcy91c2VKb2JzJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IFNXUkNvbmZpZ3VyYXRpb24gfSBmcm9tICdzd3InO1xuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxuY29uc3Qgc2VydmVyID0gZGV2ID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcgOiAnaHR0cHM6Ly95b3VyX2RlcGxveW1lbnQuc2VydmVyLmNvbSc7XG5jb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5jb25zdCBBUEkgPSBgJHtzZXJ2ZXJ9L2FwaS9qb2JzYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcmVwb0luZm8gPSBhd2FpdCBmZXRjaGVyKEFQSSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGZhbGxiYWNrOiB7XG4gICAgICAgIFtBUEldOiByZXBvSW5mbyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cblxuY29uc3QgY29uZmlnOiBTV1JDb25maWd1cmF0aW9uID0ge1xuICBmYWxsYmFja0RhdGE6ICdmYWxsYmFjaycsXG4gIHJldmFsaWRhdGVPbk1vdW50OiBmYWxzZSxcbiAgcmVmcmVzaEludGVydmFsOiAxMDAwLFxuICAvLyAuLi5cbn07XG5cbmNvbnN0IEpvYnNMaXN0ID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUjxhbnlbXT4oQVBJLCBmZXRjaGVyLCBjb25maWcpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIC8vIHRoZXJlIHNob3VsZCBiZSBubyBgdW5kZWZpbmVkYCBzdGF0ZVxuICBjb25zb2xlLmxvZygnSXMgZGF0YSByZWFkeT8nLCAhIWRhdGEpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc29sZS5sb2codHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LVs4MiVdIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1zdGFydCc+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Sm9iczwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2PlxuICAgICAgICB7ZGF0YT8ubWFwKChqb2IsIGkpID0+IChcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdwLTAgbS0wJz5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDY+e2pvYi50aXRsZX08L2g2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBKb2JzTGlzdDtcbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImRldiIsInByb2Nlc3MiLCJzZXJ2ZXIiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkFQSSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcG9JbmZvIiwicHJvcHMiLCJmYWxsYmFjayIsImNvbmZpZyIsImZhbGxiYWNrRGF0YSIsInJldmFsaWRhdGVPbk1vdW50IiwicmVmcmVzaEludGVydmFsIiwiSm9ic0xpc3QiLCJkYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/jobs/JobsList.tsx\n"));

/***/ })

});