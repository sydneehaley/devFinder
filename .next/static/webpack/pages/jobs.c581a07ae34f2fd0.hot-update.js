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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nvar dev = \"development\" !== \"production\";\n// const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';\n// const fetcher = (url: string) => fetch(url).then((res) => res.json());\n// const API = `${server}/api/jobs`;\n// type Data = {};\n// export async function getServerSideProps() {\n//   const repoInfo = await fetcher(API);\n//   return {\n//     props: {\n//       fallback: {\n//         [API]: repoInfo,\n//       },\n//     },\n//   };\n// }\n// const config: SWRConfiguration = {\n//     fallbackData: 'fallback',\n//     revalidateOnMount: false,\n//   };\n// const JobsList = () => {\n//   const { data } = useSWR<any[]>(API, fetcher, config);\n//   const [loading, setLoading] = useState(true);\n//   useEffect(() => {\n//     if (typeof data === 'object') {\n//       setTimeout(() => {\n//         setLoading(false);\n//       }, 1000);\n//     }\n//   }, []);\n//   // there should be no `undefined` state\n//   console.log('Is data ready?', !!data);\n//   console.log(data);\n//   console.log(typeof data === 'object');\n//   return (\n//     <div className='w-[82%] flex flex-col items-start justify-start'>\n//       <div>\n//         <h1>Jobs</h1>\n//       </div>\n//       {/* <div>\n//         {data?.map((job, i) => (\n//           <ul className='p-0 m-0'>\n//             <li>\n//               <div>\n//                 <h6>{job.title}</h6>\n//               </div>\n//             </li>\n//           </ul>\n//         ))}\n//       </div> */}\n//     </div>\n//   );\n// };\n// export default JobsList;\n// const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';\n// const fetcher = (url: string) => fetch(url).then((res) => res.json());\n// const API = `${server}/api/jobs`;\nvar fetcher = function(url) {\n    return fetch(url).then(function(res) {\n        return res.json();\n    });\n};\nvar API = \"https://api.github.com/repos/vercel/swr\";\nfunction getServerSideProps() {\n    return _getServerSideProps.apply(this, arguments);\n}\nfunction _getServerSideProps() {\n    _getServerSideProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n        var repoInfo;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetcher(API)\n                    ];\n                case 1:\n                    repoInfo = _state.sent();\n                    return [\n                        2,\n                        {\n                            props: {\n                                fallback: (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, API, repoInfo)\n                            }\n                        }\n                    ];\n            }\n        });\n    });\n    return _getServerSideProps.apply(this, arguments);\n}\nfunction Repo() {\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(API), data = ref.data, error = ref.error;\n    // there should be no `undefined` state\n    console.log(\"Is data ready?\", !!data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: data.name\n            }, void 0, false, {\n                fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data.description\n            }, void 0, false, {\n                fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"\\uD83D\\uDC40 \",\n                    data.subscribers_count\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"✨ \",\n                    data.stargazers_count\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n                lineNumber: 101,\n                columnNumber: 51\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"\\uD83C\\uDF74 \",\n                    data.forks_count\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n                lineNumber: 101,\n                columnNumber: 94\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, this);\n}\n_s(Repo, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Repo;\nfunction App(param) {\n    var fallback = param.fallback;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_1__.SWRConfig, {\n        value: {\n            fallback: fallback\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Repo, {}, void 0, false, {\n            fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n            lineNumber: 109,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sydneehaley/Desktop/devFinder.nosync/components/jobs/JobsList.tsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n} // export async function getServerSideProps() {\n //   // `getStaticProps` is executed on the server side.\n //   const jobs = await fetcher(API);\n //   return {\n //     props: {\n //       fallback: {\n //         [API]: jobs,\n //       },\n //     },\n //   };\n // }\n // function Jobs() {\n //   // `data` will always be available as it's in `fallback`.\n //   const { data } = useSWR(API);\n //   return <h1>Title here</h1>;\n // }\n // export default function JobsList({ fallback }: InferGetServerSidePropsType<typeof getServerSideProps>) {\n //   // SWR hooks inside the `SWRConfig` boundary will use those values.\n //   return (\n //     <SWRConfig value={{ fallback }}>\n //       <Jobs />\n //     </SWRConfig>\n //   );\n // }\n_c1 = App;\nvar _c, _c1;\n$RefreshReg$(_c, \"Repo\");\n$RefreshReg$(_c1, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBQVU7Ozs7OztZQUN4SCxDQUNOO0FBQ0osQ0FBQztHQWJRYixJQUFJOztRQUNhZiwyQ0FBTTs7O0FBRHZCZSxLQUFBQSxJQUFJO0FBZUUsU0FBU2MsR0FBRyxDQUFDLEtBQW9FLEVBQUU7UUFBdEUsUUFBVSxHQUFWLEtBQW9FLENBQWxFZixRQUFRO0lBQ3BDLHFCQUNFLDhEQUFDYiwwQ0FBUztRQUFDNkIsS0FBSyxFQUFFO1lBQUVoQixRQUFRLEVBQVJBLFFBQVE7U0FBRTtrQkFDNUIsNEVBQUNDLElBQUk7Ozs7Z0JBQUc7Ozs7O1lBQ0UsQ0FDWjtBQUNKLENBQUMsQ0FFRCwrQ0FBK0M7Q0FDL0Msd0RBQXdEO0NBQ3hELHFDQUFxQztDQUNyQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLG9CQUFvQjtDQUNwQix1QkFBdUI7Q0FDdkIsV0FBVztDQUNYLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsSUFBSTtDQUVKLG9CQUFvQjtDQUNwQiw4REFBOEQ7Q0FDOUQsa0NBQWtDO0NBQ2xDLGdDQUFnQztDQUNoQyxJQUFJO0NBRUosMkdBQTJHO0NBQzNHLHdFQUF3RTtDQUN4RSxhQUFhO0NBQ2IsdUNBQXVDO0NBQ3ZDLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsT0FBTztDQUNQLElBQUk7QUFqQ29CYyxNQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvam9icy9Kb2JzTGlzdC50c3g/MDVmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgdXNlSm9icyBmcm9tICcuLi8uLi9ob29rcy91c2VKb2JzJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tICduZXh0JztcbmltcG9ydCB0eXBlIHsgU1dSQ29uZmlndXJhdGlvbiB9IGZyb20gJ3N3cic7XG5pbXBvcnQgeyBTV1JDb25maWcgfSBmcm9tICdzd3InO1xuaW1wb3J0IHsgVXJsIH0gZnJvbSAndXJsJztcbmNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbi8vIGNvbnN0IHNlcnZlciA9IGRldiA/ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnIDogJ2h0dHBzOi8veW91cl9kZXBsb3ltZW50LnNlcnZlci5jb20nO1xuLy8gY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuLy8gY29uc3QgQVBJID0gYCR7c2VydmVyfS9hcGkvam9ic2A7XG5cbi8vIHR5cGUgRGF0YSA9IHt9O1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuLy8gICBjb25zdCByZXBvSW5mbyA9IGF3YWl0IGZldGNoZXIoQVBJKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgZmFsbGJhY2s6IHtcbi8vICAgICAgICAgW0FQSV06IHJlcG9JbmZvLFxuLy8gICAgICAgfSxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfVxuXG4vLyBjb25zdCBjb25maWc6IFNXUkNvbmZpZ3VyYXRpb24gPSB7XG4vLyAgICAgZmFsbGJhY2tEYXRhOiAnZmFsbGJhY2snLFxuLy8gICAgIHJldmFsaWRhdGVPbk1vdW50OiBmYWxzZSxcbi8vICAgfTtcblxuLy8gY29uc3QgSm9ic0xpc3QgPSAoKSA9PiB7XG5cbi8vICAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1I8YW55W10+KEFQSSwgZmV0Y2hlciwgY29uZmlnKTtcbi8vICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4vLyAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4vLyAgICAgICB9LCAxMDAwKTtcbi8vICAgICB9XG4vLyAgIH0sIFtdKTtcblxuLy8gICAvLyB0aGVyZSBzaG91bGQgYmUgbm8gYHVuZGVmaW5lZGAgc3RhdGVcbi8vICAgY29uc29sZS5sb2coJ0lzIGRhdGEgcmVhZHk/JywgISFkYXRhKTtcbi8vICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgIGNvbnNvbGUubG9nKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jyk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bODIlXSBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktc3RhcnQnPlxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGgxPkpvYnM8L2gxPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICB7LyogPGRpdj5cbi8vICAgICAgICAge2RhdGE/Lm1hcCgoam9iLCBpKSA9PiAoXG4vLyAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0ncC0wIG0tMCc+XG4vLyAgICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICAgICAgPGg2Pntqb2IudGl0bGV9PC9oNj5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgIDwvdWw+XG4vLyAgICAgICAgICkpfVxuLy8gICAgICAgPC9kaXY+ICovfVxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgSm9ic0xpc3Q7XG5cbi8vIGNvbnN0IHNlcnZlciA9IGRldiA/ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnIDogJ2h0dHBzOi8veW91cl9kZXBsb3ltZW50LnNlcnZlci5jb20nO1xuLy8gY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuLy8gY29uc3QgQVBJID0gYCR7c2VydmVyfS9hcGkvam9ic2A7XG5cbmNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbmNvbnN0IEFQSSA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3ZlcmNlbC9zd3InO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCByZXBvSW5mbyA9IGF3YWl0IGZldGNoZXIoQVBJKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZmFsbGJhY2s6IHtcbiAgICAgICAgW0FQSV06IHJlcG9JbmZvLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBSZXBvKCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoQVBJKTtcblxuICAvLyB0aGVyZSBzaG91bGQgYmUgbm8gYHVuZGVmaW5lZGAgc3RhdGVcbiAgY29uc29sZS5sb2coJ0lzIGRhdGEgcmVhZHk/JywgISFkYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2RhdGEubmFtZX08L2gxPlxuICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPHN0cm9uZz7wn5GAIHtkYXRhLnN1YnNjcmliZXJzX2NvdW50fTwvc3Ryb25nPiA8c3Ryb25nPuKcqCB7ZGF0YS5zdGFyZ2F6ZXJzX2NvdW50fTwvc3Ryb25nPiA8c3Ryb25nPvCfjbQge2RhdGEuZm9ya3NfY291bnR9PC9zdHJvbmc+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IGZhbGxiYWNrIH06IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPikge1xuICByZXR1cm4gKFxuICAgIDxTV1JDb25maWcgdmFsdWU9e3sgZmFsbGJhY2sgfX0+XG4gICAgICA8UmVwbyAvPlxuICAgIDwvU1dSQ29uZmlnPlxuICApO1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuLy8gICAvLyBgZ2V0U3RhdGljUHJvcHNgIGlzIGV4ZWN1dGVkIG9uIHRoZSBzZXJ2ZXIgc2lkZS5cbi8vICAgY29uc3Qgam9icyA9IGF3YWl0IGZldGNoZXIoQVBJKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgZmFsbGJhY2s6IHtcbi8vICAgICAgICAgW0FQSV06IGpvYnMsXG4vLyAgICAgICB9LFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIEpvYnMoKSB7XG4vLyAgIC8vIGBkYXRhYCB3aWxsIGFsd2F5cyBiZSBhdmFpbGFibGUgYXMgaXQncyBpbiBgZmFsbGJhY2tgLlxuLy8gICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihBUEkpO1xuLy8gICByZXR1cm4gPGgxPlRpdGxlIGhlcmU8L2gxPjtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSm9ic0xpc3QoeyBmYWxsYmFjayB9OiBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGU8dHlwZW9mIGdldFNlcnZlclNpZGVQcm9wcz4pIHtcbi8vICAgLy8gU1dSIGhvb2tzIGluc2lkZSB0aGUgYFNXUkNvbmZpZ2AgYm91bmRhcnkgd2lsbCB1c2UgdGhvc2UgdmFsdWVzLlxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxTV1JDb25maWcgdmFsdWU9e3sgZmFsbGJhY2sgfX0+XG4vLyAgICAgICA8Sm9icyAvPlxuLy8gICAgIDwvU1dSQ29uZmlnPlxuLy8gICApO1xuLy8gfVxuIl0sIm5hbWVzIjpbInVzZVNXUiIsIlNXUkNvbmZpZyIsImRldiIsInByb2Nlc3MiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkFQSSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcG9JbmZvIiwicHJvcHMiLCJmYWxsYmFjayIsIlJlcG8iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwic3Ryb25nIiwic3Vic2NyaWJlcnNfY291bnQiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiZm9ya3NfY291bnQiLCJBcHAiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/jobs/JobsList.tsx\n"));

/***/ })

});