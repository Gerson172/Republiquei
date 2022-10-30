"use strict";
exports.id = 141;
exports.ids = [141];
exports.modules = {

/***/ 2141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_NavBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/NavBar/NavBarBuilder/index.tsx


function NavBarBuilder({ navbar  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "dark:text-white hover:text-sky-500",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/searchRepublic",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "javascript:void(0)",
                                children: "Buscar Republica"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "dark:text-white hover:text-sky-500",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/owner",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "javascript:void(0)",
                                children: "Para Proprietarios"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "dark:text-white hover:text-sky-500",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/about",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "javascript:void(0)",
                                children: "Sobre n\xf3s"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "dark:text-white hover:text-sky-500",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/help",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "javascript:void(0)",
                                children: "Ajuda"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-3 space-y-2 lg:hidden md:inline-block",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "#",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "inline-block w-full px-6 py-4 font-bold text-gray-800 bg-white rounded-md drop-shadow",
                            children: "Anunciar"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/login",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "inline-block w-full px-6 py-4 font-bold text-white bg-sky-500 rounded-md shadow",
                            children: "Entrar"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const NavBar_NavBarBuilder = (NavBarBuilder);

;// CONCATENATED MODULE: ./components/NavBar/index.tsx






function getStaticProps() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = (0,router_.useRouter)();
    return router.pathname == "/searchRepublic";
}
function NavBar() {
    const { 0: navbar , 1: setNavbar  } = (0,external_react_.useState)(false);
    const customLoader = ({ src  })=>{
        return src;
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "w-full bg-white dark:bg-gray-800 drop-shadow",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between py-3 md:py-5 md:block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "flex flex-row items-center gap-x-2",
                                    href: "javascript:void(0)",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            loader: customLoader,
                                            alt: "logo",
                                            src: "/favicon.png",
                                            width: 50,
                                            height: 50
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-2xl text-sky-500 font-bold dark:text-white uppercase",
                                            children: "Republiquei"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border",
                                    onClick: ()=>setNavbar(!navbar),
                                    children: navbar ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6 dark:text-white",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                            clipRule: "evenodd"
                                        })
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6 dark:text-white",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M4 6h16M4 12h16M4 18h16"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: getStaticProps() ? "" : /*#__PURE__*/ jsx_runtime_.jsx(NavBar_NavBarBuilder, {
                        navbar: navbar
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "hidden space-x-2 md:inline-block",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/announce",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "px-6 py-4 font-bold text-gray-800 bg-white rounded-md drop-shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
                                children: "Anunciar"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/login",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "transition ease-in-out delay-200 hover:scale-105 px-6 py-4 font-bold text-white bg-sky-500 rounded-md shadow",
                                children: "Entrar"
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const components_NavBar = (NavBar);


/***/ })

};
;