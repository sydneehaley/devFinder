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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ JobsList; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\nvar _s = $RefreshSig$();\n\n\nvar dev = \"development\" !== \"production\";\n// const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';\n// const fetcher = (url: string) => fetch(url).then((res) => res.json());\n// const API = `${server}/api/jobs`;\n// type Data = {};\n// export async function getServerSideProps() {\n//   const repoInfo = await fetcher(API);\n//   return {\n//     props: {\n//       fallback: {\n//         [API]: repoInfo,\n//       },\n//     },\n//   };\n// }\n// const config: SWRConfiguration = {\n//     fallbackData: 'fallback',\n//     revalidateOnMount: false,\n//   };\n// const JobsList = () => {\n//   const { data } = useSWR<any[]>(API, fetcher, config);\n//   const [loading, setLoading] = useState(true);\n//   useEffect(() => {\n//     if (typeof data === 'object') {\n//       setTimeout(() => {\n//         setLoading(false);\n//       }, 1000);\n//     }\n//   }, []);\n//   // there should be no `undefined` state\n//   console.log('Is data ready?', !!data);\n//   console.log(data);\n//   console.log(typeof data === 'object');\n//   return (\n//     <div className='w-[82%] flex flex-col items-start justify-start'>\n//       <div>\n//         <h1>Jobs</h1>\n//       </div>\n//       {/* <div>\n//         {data?.map((job, i) => (\n//           <ul className='p-0 m-0'>\n//             <li>\n//               <div>\n//                 <h6>{job.title}</h6>\n//               </div>\n//             </li>\n//           </ul>\n//         ))}\n//       </div> */}\n//     </div>\n//   );\n// };\n// export default JobsList;\nvar server = dev ? \"http://localhost:3000\" : \"https://your_deployment.server.com\";\nvar fetcher = function(url) {\n    return fetch(url).then(function(res) {\n        return res.json();\n    });\n};\nvar API = \"\".concat(server, \"/api/jobs\");\nfunction getServerSideProps() {\n    return _getServerSideProps.apply(this, arguments);\n}\nfunction _getServerSideProps() {\n    _getServerSideProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n        var article;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetcher(API)\n                    ];\n                case 1:\n                    article = _state.sent();\n                    return [\n                        2,\n                        {\n                            props: {\n                                fallback: {\n                                    \"/api/article\": article\n                                }\n                            }\n                        }\n                    ];\n            }\n        });\n    });\n    return _getServerSideProps.apply(this, arguments);\n}\nfunction Jobs() {\n    _s();\n    // `data` will always be available as it's in `fallback`.\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(API, fetcher).data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: data.title\n    }, void 0, false, {\n        fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n        lineNumber: 91,\n        columnNumber: 10\n    }, this);\n}\n_s(Jobs, \"Bw9uScf/xQBWZKhLCWSR33xISM4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Jobs;\nfunction JobsList(param) {\n    var fallback = param.fallback;\n    // SWR hooks inside the `SWRConfig` boundary will use those values.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_1__.SWRConfig, {\n        value: {\n            fallback: fallback\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Jobs, {}, void 0, false, {\n            fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n            lineNumber: 98,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_c1 = JobsList;\nvar _c, _c1;\n$RefreshReg$(_c, \"Jobs\");\n$RefreshReg$(_c1, \"JobsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2pvYnMvSm9ic0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUV5QjtBQUlPO0FBQ2hDLElBQU1FLEdBQUcsR0FBR0MsYUFQQyxLQU93QixZQUFZO0FBRWpELHVGQUF1RjtBQUN2Rix5RUFBeUU7QUFDekUsb0NBQW9DO0FBRXBDLGtCQUFrQjtBQUVsQiwrQ0FBK0M7QUFDL0MseUNBQXlDO0FBQ3pDLGFBQWE7QUFDYixlQUFlO0FBQ2Ysb0JBQW9CO0FBQ3BCLDJCQUEyQjtBQUMzQixXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUCxJQUFJO0FBRUoscUNBQXFDO0FBQ3JDLGdDQUFnQztBQUNoQyxnQ0FBZ0M7QUFDaEMsT0FBTztBQUVQLDJCQUEyQjtBQUUzQiwwREFBMEQ7QUFDMUQsa0RBQWtEO0FBRWxELHNCQUFzQjtBQUN0QixzQ0FBc0M7QUFDdEMsMkJBQTJCO0FBQzNCLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsUUFBUTtBQUNSLFlBQVk7QUFFWiw0Q0FBNEM7QUFDNUMsMkNBQTJDO0FBQzNDLHVCQUF1QjtBQUN2QiwyQ0FBMkM7QUFFM0MsYUFBYTtBQUNiLHdFQUF3RTtBQUN4RSxjQUFjO0FBQ2Qsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyxtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCLHVDQUF1QztBQUN2Qyx1QkFBdUI7QUFDdkIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYixPQUFPO0FBQ1AsS0FBSztBQUVMLDJCQUEyQjtBQUUzQixJQUFNQyxNQUFNLEdBQUdGLEdBQUcsR0FBRyx1QkFBdUIsR0FBRyxvQ0FBb0M7QUFDbkYsSUFBTUcsT0FBTyxHQUFHLFNBQUNDLEdBQVc7V0FBS0MsS0FBSyxDQUFDRCxHQUFHLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFNBQUNDLEdBQUc7ZUFBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7S0FBQSxDQUFDO0NBQUE7QUFDckUsSUFBTUMsR0FBRyxHQUFHLEVBQUMsQ0FBUyxNQUFTLENBQWhCUCxNQUFNLEVBQUMsV0FBUyxDQUFDO0FBRXpCLFNBQWVRLGtCQUFrQjtXQUFsQkEsbUJBQWtCO0NBVXZDO1NBVnFCQSxtQkFBa0I7SUFBbEJBLG1CQUFrQixHQUFqQywrRkFBb0M7WUFFbkNDLE9BQU87Ozs7b0JBQUc7O3dCQUFNUixPQUFPLENBQUNNLEdBQUcsQ0FBQztzQkFBQTs7b0JBQTVCRSxPQUFPLEdBQUcsYUFBa0I7b0JBQ2xDOzt3QkFBTzs0QkFDTEMsS0FBSyxFQUFFO2dDQUNMQyxRQUFRLEVBQUU7b0NBQ1IsY0FBYyxFQUFFRixPQUFPO2lDQUN4Qjs2QkFDRjt5QkFDRjtzQkFBQzs7O0lBQ0osQ0FBQztXQVZxQkQsbUJBQWtCOztBQVl4QyxTQUFTSSxJQUFJLEdBQUc7O0lBQ2QseURBQXlEO0lBQ3pELElBQU0sSUFBTSxHQUFLaEIsK0NBQU0sQ0FBQ1csR0FBRyxFQUFFTixPQUFPLENBQUMsQ0FBN0JZLElBQUk7SUFDWixxQkFBTyw4REFBQ0MsSUFBRTtrQkFBRUQsSUFBSSxDQUFDRSxLQUFLOzs7OztZQUFNLENBQUM7QUFDL0IsQ0FBQztHQUpRSCxJQUFJOztRQUVNaEIsMkNBQU07OztBQUZoQmdCLEtBQUFBLElBQUk7QUFNRSxTQUFTSSxRQUFRLENBQUMsS0FBb0UsRUFBRTtRQUF0RSxRQUFVLEdBQVYsS0FBb0UsQ0FBbEVMLFFBQVE7SUFDekMsbUVBQW1FO0lBQ25FLHFCQUNFLDhEQUFDZCwwQ0FBUztRQUFDb0IsS0FBSyxFQUFFO1lBQUVOLFFBQVEsRUFBUkEsUUFBUTtTQUFFO2tCQUM1Qiw0RUFBQ0MsSUFBSTs7OztnQkFBRzs7Ozs7WUFDRSxDQUNaO0FBQ0osQ0FBQztBQVB1QkksTUFBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2pvYnMvSm9ic0xpc3QudHN4PzA1ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHVzZUpvYnMgZnJvbSAnLi4vLi4vaG9va3MvdXNlSm9icyc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgdHlwZSB7IFNXUkNvbmZpZ3VyYXRpb24gfSBmcm9tICdzd3InO1xuaW1wb3J0IHsgU1dSQ29uZmlnIH0gZnJvbSAnc3dyJztcbmNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbi8vIGNvbnN0IHNlcnZlciA9IGRldiA/ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnIDogJ2h0dHBzOi8veW91cl9kZXBsb3ltZW50LnNlcnZlci5jb20nO1xuLy8gY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuLy8gY29uc3QgQVBJID0gYCR7c2VydmVyfS9hcGkvam9ic2A7XG5cbi8vIHR5cGUgRGF0YSA9IHt9O1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuLy8gICBjb25zdCByZXBvSW5mbyA9IGF3YWl0IGZldGNoZXIoQVBJKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgZmFsbGJhY2s6IHtcbi8vICAgICAgICAgW0FQSV06IHJlcG9JbmZvLFxuLy8gICAgICAgfSxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfVxuXG4vLyBjb25zdCBjb25maWc6IFNXUkNvbmZpZ3VyYXRpb24gPSB7XG4vLyAgICAgZmFsbGJhY2tEYXRhOiAnZmFsbGJhY2snLFxuLy8gICAgIHJldmFsaWRhdGVPbk1vdW50OiBmYWxzZSxcbi8vICAgfTtcblxuLy8gY29uc3QgSm9ic0xpc3QgPSAoKSA9PiB7XG5cbi8vICAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1I8YW55W10+KEFQSSwgZmV0Y2hlciwgY29uZmlnKTtcbi8vICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4vLyAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4vLyAgICAgICB9LCAxMDAwKTtcbi8vICAgICB9XG4vLyAgIH0sIFtdKTtcblxuLy8gICAvLyB0aGVyZSBzaG91bGQgYmUgbm8gYHVuZGVmaW5lZGAgc3RhdGVcbi8vICAgY29uc29sZS5sb2coJ0lzIGRhdGEgcmVhZHk/JywgISFkYXRhKTtcbi8vICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgIGNvbnNvbGUubG9nKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jyk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bODIlXSBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktc3RhcnQnPlxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGgxPkpvYnM8L2gxPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICB7LyogPGRpdj5cbi8vICAgICAgICAge2RhdGE/Lm1hcCgoam9iLCBpKSA9PiAoXG4vLyAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0ncC0wIG0tMCc+XG4vLyAgICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICAgICAgPGg2Pntqb2IudGl0bGV9PC9oNj5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgIDwvdWw+XG4vLyAgICAgICAgICkpfVxuLy8gICAgICAgPC9kaXY+ICovfVxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgSm9ic0xpc3Q7XG5cbmNvbnN0IHNlcnZlciA9IGRldiA/ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnIDogJ2h0dHBzOi8veW91cl9kZXBsb3ltZW50LnNlcnZlci5jb20nO1xuY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuY29uc3QgQVBJID0gYCR7c2VydmVyfS9hcGkvam9ic2A7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIC8vIGBnZXRTdGF0aWNQcm9wc2AgaXMgZXhlY3V0ZWQgb24gdGhlIHNlcnZlciBzaWRlLlxuICBjb25zdCBhcnRpY2xlID0gYXdhaXQgZmV0Y2hlcihBUEkpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBmYWxsYmFjazoge1xuICAgICAgICAnL2FwaS9hcnRpY2xlJzogYXJ0aWNsZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gSm9icygpIHtcbiAgLy8gYGRhdGFgIHdpbGwgYWx3YXlzIGJlIGF2YWlsYWJsZSBhcyBpdCdzIGluIGBmYWxsYmFja2AuXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKEFQSSwgZmV0Y2hlcik7XG4gIHJldHVybiA8aDE+e2RhdGEudGl0bGV9PC9oMT47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpvYnNMaXN0KHsgZmFsbGJhY2sgfTogSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlPHR5cGVvZiBnZXRTZXJ2ZXJTaWRlUHJvcHM+KSB7XG4gIC8vIFNXUiBob29rcyBpbnNpZGUgdGhlIGBTV1JDb25maWdgIGJvdW5kYXJ5IHdpbGwgdXNlIHRob3NlIHZhbHVlcy5cbiAgcmV0dXJuIChcbiAgICA8U1dSQ29uZmlnIHZhbHVlPXt7IGZhbGxiYWNrIH19PlxuICAgICAgPEpvYnMgLz5cbiAgICA8L1NXUkNvbmZpZz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJTV1JDb25maWciLCJkZXYiLCJwcm9jZXNzIiwic2VydmVyIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJBUEkiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJhcnRpY2xlIiwicHJvcHMiLCJmYWxsYmFjayIsIkpvYnMiLCJkYXRhIiwiaDEiLCJ0aXRsZSIsIkpvYnNMaXN0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/jobs/JobsList.tsx\n"));

/***/ })

});