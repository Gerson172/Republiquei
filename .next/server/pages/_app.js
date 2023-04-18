"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
;// CONCATENATED MODULE: ./src/infra/api/queryClient.ts

const queryClient = new external_react_query_.QueryClient();

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.tsx







function MyApp({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    const { 0: user , 1: setUser  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        // Verifica se há um usuário autenticado ao carregar a página
        const userData = sessionStorage.getItem("user");
        if (userData) {
            const userObject = JSON.parse(userData);
            setUser(userObject);
        } else {
        //router.push('/login'); // Redireciona para a página de login se não houver usuário autenticado
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "https://unpkg.com/leaflet@1.9.3/dist/leaflet.css",
                    integrity: "sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=",
                    crossOrigin: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_.QueryClientProvider, {
                client: queryClient,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps,
                    user: user,
                    setUser: setUser
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5750));
module.exports = __webpack_exports__;

})();