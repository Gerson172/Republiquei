"use strict";
exports.id = 49;
exports.ids = [49];
exports.modules = {

/***/ 3049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AnnounceRepublicData": () => (/* binding */ AnnounceRepublicData),
  "SearchLocation": () => (/* binding */ SearchLocation),
  "default": () => (/* binding */ searchRepublic)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@heroicons/react/24/solid"
var solid_ = __webpack_require__(8802);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(9989);
;// CONCATENATED MODULE: ./components/AnnounceRepublic/index.tsx






function AnnounceRepublic({ id , images , accessibility , title , location , price , sex  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "republic/" + id,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "transition ease-in-out delay-200 w-full max-w-sm bg-white border-2 mb-8 rounded-lg drop-shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "carousel pb-4 rounded-t-lg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "carousel-item w-full h-64 rounded-t-lg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "object-cover object-center",
                                    width: 400,
                                    height: 200,
                                    src: images[0],
                                    alt: accessibility
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "carousel-item w-full h-64",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "object-cover object-center",
                                    width: 400,
                                    height: 200,
                                    src: images[1],
                                    alt: accessibility
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "carousel-item w-full h-64",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "object-cover object-center",
                                    width: 400,
                                    height: 200,
                                    src: images[2],
                                    alt: accessibility
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "carousel-item w-full h-64",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "object-cover object-center",
                                    width: 400,
                                    height: 200,
                                    src: images[3],
                                    alt: accessibility
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "px-7 pb-5 text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "text-xl font-semibold tracking-tight text-gray-900 dark:text-white",
                                    children: title
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-between items-center px-3 mt-2.5 mb-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "px-5 py-5 bg-gray-50 border-solid border rounded",
                                        children: sex == "Male" ? /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaMale, {
                                            className: "text-blue-500"
                                        }) : sex == "Female" ? /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFemale, {
                                            className: "text-pink-500"
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoMaleFemale, {
                                            className: "text-green-900"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "px-5 py-5 bg-gray-50 border-solid border rounded",
                                        children: sex == "Male" ? /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaMale, {
                                            className: "text-blue-500"
                                        }) : sex == "Female" ? /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFemale, {
                                            className: "text-pink-500"
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoMaleFemale, {
                                            className: "text-green-900"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "px-5 py-5 bg-gray-50 border-solid border rounded",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaBed, {
                                            className: "text-blue-500"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "px-5 py-5 bg-gray-50 border-solid border rounded",
                                        children: sex == "Male" ? /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaMale, {
                                            className: "text-blue-500"
                                        }) : sex == "Female" ? /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFemale, {
                                            className: "text-pink-500"
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoMaleFemale, {
                                            className: "text-green-900"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center font-bold",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(solid_.MapPinIcon, {
                                                className: "h-6 w-6 text-blue-500"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "text-blue-500",
                                                children: location
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-2xl font-bold text-gray-900 dark:text-white",
                                        children: price.toLocaleString("pt-br", {
                                            style: "currency",
                                            currency: "BRL"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const components_AnnounceRepublic = (AnnounceRepublic);

;// CONCATENATED MODULE: ./components/Footer/index.tsx

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "bg-white dark:bg-gray-900 border-t dark:border-none",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400",
                                    children: "Company"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: " hover:underline",
                                                children: "About"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "hover:underline",
                                                children: "Careers"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "hover:underline",
                                                children: "Brand Center"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "hover:underline",
                                                children: "Blog"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400",
                                    children: "Help center"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "hover:underline",
                                                children: "Discord Server"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "hover:underline",
                                                children: "Twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "hover:underline",
                                                children: "Facebook"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "hover:underline",
                                                children: "Contact Us"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400",
                                    children: "Legal"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "hover:underline",
                                                children: "Privacy Policy"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "hover:underline",
                                                children: "Licensing"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "hover:underline",
                                                children: "Terms & Conditions"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400",
                                    children: "Download"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "hover:underline",
                                                children: "iOS"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "hover:underline",
                                                children: "Android"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "hover:underline",
                                                children: "Windows"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "hover:underline",
                                                children: "MacOS"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "py-6 px-4 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-sm text-gray-500 dark:text-gray-300 sm:text-center",
                            children: [
                                "\xa9 2022 ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.republiquei.com",
                                    children: "Republiquei"
                                }),
                                ". All Rights Reserved."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex mt-4 space-x-6 sm:justify-center md:mt-0",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#",
                                    className: "text-gray-400 hover:text-gray-900 dark:hover:text-white",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            className: "w-5 h-5",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                "fill-rule": "evenodd",
                                                d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                                                "clip-rule": "evenodd"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sr-only",
                                            children: "Facebook page"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#",
                                    className: "text-gray-400 hover:text-gray-900 dark:hover:text-white",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            className: "w-5 h-5",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                "fill-rule": "evenodd",
                                                d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                                                "clip-rule": "evenodd"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sr-only",
                                            children: "Instagram page"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#",
                                    className: "text-gray-400 hover:text-gray-900 dark:hover:text-white",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            className: "w-5 h-5",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sr-only",
                                            children: "Twitter page"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#",
                                    className: "text-gray-400 hover:text-gray-900 dark:hover:text-white",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            className: "w-5 h-5",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                "fill-rule": "evenodd",
                                                d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                                                "clip-rule": "evenodd"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sr-only",
                                            children: "GitHub account"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#",
                                    className: "text-gray-400 hover:text-gray-900 dark:hover:text-white",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            className: "w-5 h-5",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                "fill-rule": "evenodd",
                                                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
                                                "clip-rule": "evenodd"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sr-only",
                                            children: "Dribbble account"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./components/NavBar/index.tsx + 1 modules
var NavBar = __webpack_require__(2141);
;// CONCATENATED MODULE: ./components/Pagination/index.tsx

function Pagination() {
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        "aria-label": "Page navigation example",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "inline-flex items-center -space-x-px",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "#",
                        className: "block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sr-only",
                                children: "Previous"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                "aria-hidden": "true",
                                className: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    "fill-rule": "evenodd",
                                    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                    "clip-rule": "evenodd"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        className: "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                        children: "1"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        className: "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                        children: "2"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        "aria-current": "page",
                        className: "z-10 py-2 px-3 leading-tight text-white bg-blue-500 border border-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
                        children: "3"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        className: "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                        children: "4"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        className: "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                        children: "5"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "#",
                        className: "block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sr-only",
                                children: "Next"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                "aria-hidden": "true",
                                className: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    "fill-rule": "evenodd",
                                    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                    "clip-rule": "evenodd"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const components_Pagination = (Pagination);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/im"
var im_ = __webpack_require__(924);
;// CONCATENATED MODULE: ./pages/searchRepublic/index.tsx








const AnnounceRepublicData = [
    {
        id: 1,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720", 
        ],
        acessibility: "Imagem de Republica",
        title: "Rep\xfablica com 4 dormit\xf3rios pr\xf3ximo a USP",
        location: "S\xe3o Paulo - SP",
        price: 1700,
        sex: "Male"
    },
    {
        id: 2,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-51733314/original/f41a9db0-f9d6-4403-ae0d-3d9e0b30e76b.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51733314/original/00e7527c-030b-4e74-833a-911fa0f9965b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51733314/original/47641c2d-e524-489c-a484-d949ea69e28a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51733314/original/5acaca53-402c-4654-a107-9966eb9d38db.jpeg?im_w=720"
        ],
        acessibility: "Imagem de Republica",
        title: "Rep\xfablica com 2 dormit\xf3rios pr\xf3ximo a UFRJ",
        location: "Barra da Tijuca - RJ",
        price: 1200,
        sex: "Male"
    },
    {
        id: 3,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720", 
        ],
        acessibility: "Imagem de Republica",
        title: "Rep\xfablica com 4 dormit\xf3rios pr\xf3ximo a UFS",
        location: "Salvador - Bahia",
        price: 700,
        sex: "Male"
    },
    {
        id: 4,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720", 
        ],
        acessibility: "Imagem de Republica",
        title: "Rep\xfablica com 4 dormit\xf3rios pr\xf3ximo a UFS",
        location: "Salvador - BA",
        price: 700,
        sex: "Male"
    },
    {
        id: 5,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720", 
        ],
        acessibility: "Imagem de Republica",
        title: "Rep\xfablica com 4 dormit\xf3rios pr\xf3ximo a UFS",
        location: "Salvador - BA",
        price: 500,
        sex: "Male"
    },
    {
        id: 6,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720", 
        ],
        acessibility: "Imagem de Republica",
        title: "Rep\xfablica com 4 dormit\xf3rios pr\xf3ximo a UFS",
        location: "Salvador - BA",
        price: 1000,
        sex: "Male"
    },
    {
        id: 7,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720", 
        ],
        acessibility: "Imagem de Republica",
        title: "Rep\xfablica com 4 dormit\xf3rios pr\xf3ximo a UFS",
        location: "Salvador - BA",
        price: 1000,
        sex: "Male"
    },
    {
        id: 8,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720", 
        ],
        acessibility: "Imagem de Republica",
        title: "Rep\xfablica com 4 dormit\xf3rios pr\xf3ximo a UFS",
        location: "Salvador - BA",
        price: 1000,
        sex: "Male"
    },
    {
        id: 9,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720", 
        ],
        acessibility: "Imagem de Republica",
        title: "Rep\xfablica com 4 dormit\xf3rios pr\xf3ximo a UFS",
        location: "Salvador - BA",
        price: 1000,
        sex: "Male"
    },
    {
        id: 10,
        images: [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/5c61abbc-59f3-4d8a-8ebf-cced1fac4526.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/e97b5669-1185-4793-bf43-0c74150ce3d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/3cfe95fb-65bc-4dec-a44d-38eadc5b6e9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53007186/original/077748cf-4bfd-417f-b225-1bee62d6b782.jpeg?im_w=720", 
        ],
        acessibility: "Imagem de Republica",
        title: "Rep\xfablica com 4 dormit\xf3rios pr\xf3ximo a UFS",
        location: "Salvador - BA",
        price: 1000,
        sex: "Male"
    }, 
];
const SearchLocation = ()=>{
    const { 0: search , 1: setSearch  } = (0,external_react_.useState)("");
    const filterAnnounceRepublicData = AnnounceRepublicData.filter((republica)=>republica.location.startsWith(search.charAt(0).toUpperCase() + search.slice(1)));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "absolute top-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute top-5 right-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(im_.ImSearch, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        value: search,
                        type: "text",
                        onChange: (e)=>setSearch(e.target.value),
                        className: "h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none",
                        placeholder: "Digite a localiza\xe7\xe3o"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full flex flex-wrap items-center justify-between px-32",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: "first-letter:font-bold",
                        children: [
                            filterAnnounceRepublicData.length,
                            " rep\xfablicas para morar em Praia Grande - SP"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                id: "dropdownDefault",
                                "data-dropdown-toggle": "dropdown",
                                className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 gap-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                                type: "button",
                                children: [
                                    "Filter",
                                    /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoFilterOutline, {
                                        className: "text-white text-lg"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                id: "dropdownDivider",
                                className: "hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "py-1 text-sm text-gray-700 dark:text-gray-200",
                                        "aria-labelledby": "dropdownDividerButton",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                                    children: "Dashboard"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                                    children: "Settings"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                                    children: "Earnings"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "py-1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",
                                            children: "Separated link"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "flex flex-row flex-wrap justify-center gap-4 mt-8 mb-14",
                children: filterAnnounceRepublicData.map((data, id)=>/*#__PURE__*/ jsx_runtime_.jsx(components_AnnounceRepublic, {
                        id: data.id,
                        images: data.images,
                        accessibility: data.acessibility,
                        title: data.title,
                        location: data.location,
                        price: data.price,
                        sex: data.sex
                    }, id))
            })
        ]
    });
};
const SearchRepublic = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "flex flex-row flex-wrap justify-center gap-4 mt-8 mb-14",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchLocation, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Pagination, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const searchRepublic = (SearchRepublic);


/***/ })

};
;