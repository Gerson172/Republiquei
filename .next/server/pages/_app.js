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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_infra_api_queryClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/infra/api/queryClient */ \"./src/infra/api/queryClient.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // Verifica se há um usuário autenticado ao carregar a página\n        const userData = sessionStorage.getItem(\"user\");\n        if (userData) {\n            const userObject = JSON.parse(userData);\n            setUser(userObject);\n        } else {\n        //router.push('/login'); // Redireciona para a página de login se não houver usuário autenticado\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"https://unpkg.com/leaflet@1.9.3/dist/leaflet.css\",\n                    integrity: \"sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=\",\n                    crossOrigin: \"\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\018301631\\\\Documents\\\\Faculdade\\\\Republiquei\\\\pages\\\\_app.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\018301631\\\\Documents\\\\Faculdade\\\\Republiquei\\\\pages\\\\_app.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n                client: _src_infra_api_queryClient__WEBPACK_IMPORTED_MODULE_3__.queryClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps,\n                    user: user,\n                    setUser: setUser\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\018301631\\\\Documents\\\\Faculdade\\\\Republiquei\\\\pages\\\\_app.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\018301631\\\\Documents\\\\Faculdade\\\\Republiquei\\\\pages\\\\_app.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRW1CO0FBQ1M7QUFDbEI7QUFDSTtBQUNmO0FBRTdCLFNBQVNNLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBRWpELE1BQU1DLE1BQU0sR0FBR1Asc0RBQVMsRUFBRTtJQUMxQixNQUFNLEtBQUNRLElBQUksTUFBRUMsT0FBTyxNQUFJUCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUV0Q0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2Q7UUFDRyxNQUFHUyxRQUFRLEdBQUdDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxJQUFJRixRQUFRLEVBQUU7WUFDWixNQUFNRyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxRQUFRLENBQUM7WUFDdkNELE9BQU8sQ0FBQ0ksVUFBVSxDQUFDLENBQUM7U0FDckIsTUFBTTtRQUNMO1NBQ0Q7S0FDRixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1AscUJBQ0U7OzBCQUNFLDhEQUFDVixrREFBSTswQkFDSCw0RUFBQ2EsTUFBSTtvQkFDSEMsR0FBRyxFQUFDLFlBQVk7b0JBQ2hCQyxJQUFJLEVBQUMsa0RBQWtEO29CQUN2REMsU0FBUyxFQUFDLHFEQUFxRDtvQkFDL0RDLFdBQVcsRUFBQyxFQUFFOzs7Ozt3QkFBRzs7Ozs7b0JBQ2Q7MEJBQ1AsOERBQUN0Qiw0REFBbUI7Z0JBQUN1QixNQUFNLEVBQUV0QixtRUFBVzswQkFDdEMsNEVBQUNNLFNBQVM7b0JBQUUsR0FBR0MsU0FBUztvQkFBRUUsSUFBSSxFQUFFQSxJQUFJO29CQUFFQyxPQUFPLEVBQUVBLE9BQU87Ozs7O3dCQUFJOzs7OztvQkFDdEM7O29CQUVyQixDQUFDO0NBQ1A7QUFFRCxpRUFBZUwsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlcHVibGlxdWVpLTAxLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgeyBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcXVlcnknXHJcbmltcG9ydCB7IHF1ZXJ5Q2xpZW50IH0gZnJvbSAnLi4vc3JjL2luZnJhL2FwaS9xdWVyeUNsaWVudCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFZlcmlmaWNhIHNlIGjDoSB1bSB1c3XDoXJpbyBhdXRlbnRpY2FkbyBhbyBjYXJyZWdhciBhIHDDoWdpbmFcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAgIGNvbnN0IHVzZXJPYmplY3QgPSBKU09OLnBhcnNlKHVzZXJEYXRhKTtcclxuICAgICAgc2V0VXNlcih1c2VyT2JqZWN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vcm91dGVyLnB1c2goJy9sb2dpbicpOyAvLyBSZWRpcmVjaW9uYSBwYXJhIGEgcMOhZ2luYSBkZSBsb2dpbiBzZSBuw6NvIGhvdXZlciB1c3XDoXJpbyBhdXRlbnRpY2Fkb1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCIgXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldEAxLjkuMy9kaXN0L2xlYWZsZXQuY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTI1Ni1rTGFUMkdPU3BIZWNoaHNvenpCK2ZsbkQrelV5akUyTGxmV1BnVTA0eHlJPVwiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cIlwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSB1c2VyPXt1c2VyfSBzZXRVc2VyPXtzZXRVc2VyfSAvPlxyXG4gICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XHJcblxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsiUXVlcnlDbGllbnRQcm92aWRlciIsInF1ZXJ5Q2xpZW50IiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ1c2VyIiwic2V0VXNlciIsInVzZXJEYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlck9iamVjdCIsIkpTT04iLCJwYXJzZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiaW50ZWdyaXR5IiwiY3Jvc3NPcmlnaW4iLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/infra/api/queryClient.ts":
/*!**************************************!*\
  !*** ./src/infra/api/queryClient.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"queryClient\": () => (/* binding */ queryClient)\n/* harmony export */ });\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5mcmEvYXBpL3F1ZXJ5Q2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUVsQyxNQUFNQyxXQUFXLEdBQUcsSUFBSUQsb0RBQVcsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlcHVibGlxdWVpLTAxLy4vc3JjL2luZnJhL2FwaS9xdWVyeUNsaWVudC50cz81M2M0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknXHJcblxyXG5leHBvcnQgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKSJdLCJuYW1lcyI6WyJRdWVyeUNsaWVudCIsInF1ZXJ5Q2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/infra/api/queryClient.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();