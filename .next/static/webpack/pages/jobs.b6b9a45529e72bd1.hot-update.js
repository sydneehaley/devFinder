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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar dev = \"development\" !== \"production\";\nvar server = dev ? \"http://localhost:3000\" : \"https://your_deployment.server.com\";\nvar fetcher = function(url) {\n    return fetch(url).then(function(res) {\n        return res.json();\n    });\n};\nvar API = \"\".concat(server, \"/api/jobs\");\nfunction getServerSideProps() {\n    return _getServerSideProps.apply(this, arguments);\n}\nfunction _getServerSideProps() {\n    _getServerSideProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        var repoInfo;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetcher(API)\n                    ];\n                case 1:\n                    repoInfo = _state.sent();\n                    return [\n                        2,\n                        {\n                            props: {\n                                fallback: (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, API, repoInfo)\n                            }\n                        }\n                    ];\n            }\n        });\n    });\n    return _getServerSideProps.apply(this, arguments);\n}\nvar JobsList = function(param) {\n    var fallback = param.fallback;\n    _s();\n    var config = {\n        // fallbackData: 'fallback',\n        revalidateOnMount: false,\n        fallback: fallback\n    };\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(API, config).data;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref[0], setLoading = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (typeof data === \"object\") {\n            setTimeout(function() {\n                setLoading(false);\n            }, 1000);\n        }\n    }, []);\n    // there should be no `undefined` state\n    console.log(\"Is data ready?\", !!data);\n    console.log(data);\n    console.log(typeof data === \"object\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[82%] flex flex-col items-start justify-start\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Jobs\"\n            }, void 0, false, {\n                fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this);\n};\n_s(JobsList, \"7t5MNwIcEgvjlylWHuvzVmq7eH4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = JobsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobsList);\nvar _c;\n$RefreshReg$(_c, \"JobsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2pvYnMvSm9ic0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFeUI7QUFDbUI7QUFLNUMsSUFBTUcsR0FBRyxHQUFHQyxhQVJDLEtBUXdCLFlBQVk7QUFFakQsSUFBTUMsTUFBTSxHQUFHRixHQUFHLEdBQUcsdUJBQXVCLEdBQUcsb0NBQW9DO0FBQ25GLElBQU1HLE9BQU8sR0FBRyxTQUFDQyxHQUFXO1dBQUtDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQUNFLElBQUksQ0FBQyxTQUFDQyxHQUFHO2VBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO0tBQUEsQ0FBQztDQUFBO0FBQ3JFLElBQU1DLEdBQUcsR0FBRyxFQUFDLENBQVMsTUFBUyxDQUFoQlAsTUFBTSxFQUFDLFdBQVMsQ0FBQztBQUl6QixTQUFlUSxrQkFBa0I7V0FBbEJBLG1CQUFrQjtDQVN2QztTQVRxQkEsbUJBQWtCO0lBQWxCQSxtQkFBa0IsR0FBakMsK0ZBQW9DO1lBQ25DQyxRQUFROzs7O29CQUFHOzt3QkFBTVIsT0FBTyxDQUFDTSxHQUFHLENBQUM7c0JBQUE7O29CQUE3QkUsUUFBUSxHQUFHLGFBQWtCO29CQUNuQzs7d0JBQU87NEJBQ0xDLEtBQUssRUFBRTtnQ0FDTEMsUUFBUSxFQUNOLHFGQUFDSixHQUFHLEVBQUdFLFFBQVE7NkJBRWxCO3lCQUNGO3NCQUFDOzs7SUFDSixDQUFDO1dBVHFCRCxtQkFBa0I7O0FBV3hDLElBQU1JLFFBQVEsR0FBRyxnQkFBMEU7UUFBdkVELFFBQVEsU0FBUkEsUUFBUTs7SUFDMUIsSUFBTUUsTUFBTSxHQUFxQjtRQUMvQiw0QkFBNEI7UUFDNUJDLGlCQUFpQixFQUFFLEtBQUs7UUFDeEJILFFBQVEsRUFBUkEsUUFBUTtLQUNUO0lBRUQsSUFBTSxJQUFNLEdBQUtoQiwrQ0FBTSxDQUFRWSxHQUFHLEVBQUVNLE1BQU0sQ0FBQyxDQUFuQ0UsSUFBSTtJQUNaLElBQThCbEIsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUFyQ21CLE9BQU8sR0FBZ0JuQixHQUFjLEdBQTlCLEVBQUVvQixVQUFVLEdBQUlwQixHQUFjLEdBQWxCO0lBRTFCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJLE9BQU9tQixJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCRyxVQUFVLENBQUMsV0FBTTtnQkFDZkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNYLENBQUM7SUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCx1Q0FBdUM7SUFDdkNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQ0wsSUFBSSxDQUFDLENBQUM7SUFDdENJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxJQUFJLENBQUMsQ0FBQztJQUNsQkksT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBT0wsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDO0lBRXRDLHFCQUNFLDhEQUFDTSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxpREFBaUQ7a0JBQzlELDRFQUFDRCxLQUFHO3NCQUNGLDRFQUFDRSxJQUFFOzBCQUFDLE1BQUk7Ozs7O3FCQUFLOzs7OztpQkFDVDs7Ozs7YUFZRixDQUNOO0FBQ0osQ0FBQztHQXpDS1gsUUFBUTs7UUFPS2pCLDJDQUFNOzs7QUFQbkJpQixLQUFBQSxRQUFRO0FBMkNkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9qb2JzL0pvYnNMaXN0LnRzeD8wNWY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB1c2VKb2JzIGZyb20gJy4uLy4uL2hvb2tzL3VzZUpvYnMnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHR5cGUgeyBTV1JDb25maWd1cmF0aW9uIH0gZnJvbSAnc3dyJztcbmltcG9ydCB7IFNXUkNvbmZpZyB9IGZyb20gJ3N3cic7XG5pbXBvcnQgeyBVcmwgfSBmcm9tICd1cmwnO1xuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxuY29uc3Qgc2VydmVyID0gZGV2ID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcgOiAnaHR0cHM6Ly95b3VyX2RlcGxveW1lbnQuc2VydmVyLmNvbSc7XG5jb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5jb25zdCBBUEkgPSBgJHtzZXJ2ZXJ9L2FwaS9qb2JzYDtcblxudHlwZSBEYXRhID0ge307XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcG9JbmZvID0gYXdhaXQgZmV0Y2hlcihBUEkpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBmYWxsYmFjazoge1xuICAgICAgICBbQVBJXTogcmVwb0luZm8sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG5cbmNvbnN0IEpvYnNMaXN0ID0gKHsgZmFsbGJhY2sgfTogSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlPHR5cGVvZiBnZXRTZXJ2ZXJTaWRlUHJvcHM+KSA9PiB7XG4gIGNvbnN0IGNvbmZpZzogU1dSQ29uZmlndXJhdGlvbiA9IHtcbiAgICAvLyBmYWxsYmFja0RhdGE6ICdmYWxsYmFjaycsXG4gICAgcmV2YWxpZGF0ZU9uTW91bnQ6IGZhbHNlLFxuICAgIGZhbGxiYWNrLFxuICB9O1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSPGFueVtdPihBUEksIGNvbmZpZyk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgLy8gdGhlcmUgc2hvdWxkIGJlIG5vIGB1bmRlZmluZWRgIHN0YXRlXG4gIGNvbnNvbGUubG9nKCdJcyBkYXRhIHJlYWR5PycsICEhZGF0YSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBjb25zb2xlLmxvZyh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctWzgyJV0gZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0Jz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Kb2JzPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXY+XG4gICAgICAgIHtkYXRhPy5tYXAoKGpvYiwgaSkgPT4gKFxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3AtMCBtLTAnPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoNj57am9iLnRpdGxlfTwvaDY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpvYnNMaXN0O1xuIl0sIm5hbWVzIjpbInVzZVNXUiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGV2IiwicHJvY2VzcyIsInNlcnZlciIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiQVBJIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVwb0luZm8iLCJwcm9wcyIsImZhbGxiYWNrIiwiSm9ic0xpc3QiLCJjb25maWciLCJyZXZhbGlkYXRlT25Nb3VudCIsImRhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/jobs/JobsList.tsx\n"));

/***/ })

});