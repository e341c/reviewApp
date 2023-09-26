exports.id = 6038;
exports.ids = [6038];
exports.modules = {

/***/ 87903:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 15640:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54041));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 37421));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 79022))

/***/ }),

/***/ 37421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(74284);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(71072);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Button.js
var Button = __webpack_require__(93780);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(52196);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(42050);
;// CONCATENATED MODULE: ./components/ThemeButton.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const ThemeButton = ()=>{
    const { resolvedTheme, setTheme } = (0,dist/* useTheme */.F)();
    const [mounted, setMounted] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>setMounted(true), []);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
        variant: "outline-secondary",
        style: {
            width: "42px"
        },
        onClick: ()=>setTheme(resolvedTheme === "dark" ? "light" : "dark"),
        children: resolvedTheme === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
            icon: free_solid_svg_icons/* faSun */.enB
        }) : /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
            icon: free_solid_svg_icons/* faMoon */.DBF
        })
    });
};
/* harmony default export */ const components_ThemeButton = (ThemeButton);

;// CONCATENATED MODULE: ./components/Header.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Header() {
    const { data: session, status } = (0,react.useSession)();
    const id = session?.user.id;
    (0,react_.useEffect)(()=>{
        Promise.all(/* import() */[__webpack_require__.e(7802), __webpack_require__.e(6867)]).then(__webpack_require__.t.bind(__webpack_require__, 46867, 23));
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar fixed-top navbar-expand-lg bg-body shadow",
        style: {
            zIndex: "1090"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    className: "navbar-brand",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "mb-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                            children: "HOME"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler ms-auto",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "navbar-toggler-icon"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "navbar-nav ms-auto mb-2 mb-lg-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: status === "unauthenticated" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "d-flex me-3 align-items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/register",
                                                className: "nav-link text-primary",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: "Sign up"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "m-0",
                                                children: "\xa0or\xa0"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/login",
                                                className: "nav-link text-primary",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: "Login"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: status === "authenticated" && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/profile`,
                                        className: "nav-link text-primary me-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "Profile"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: session?.user.admin && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/admin`,
                                        className: "nav-link text-primary me-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "Admin"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeButton, {})
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 79022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74284);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function AuthProvider({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {
        children: children
    });
}


/***/ }),

/***/ 54041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71072);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Providers({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_1__/* .ThemeProvider */ .f, {
        attribute: "data-bs-theme",
        children: children
    });
}


/***/ }),

/***/ 18411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./scss/main.scss
var main = __webpack_require__(19413);
// EXTERNAL MODULE: ./style/components/rbt-token.css
var rbt_token = __webpack_require__(1021);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./providers/ThemeProvider.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/eriktabys/Desktop/Itransitions/recommendations/client/providers/ThemeProvider.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const ThemeProvider = (__default__);
;// CONCATENATED MODULE: ./providers/AuthProvider.jsx

const AuthProvider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/eriktabys/Desktop/Itransitions/recommendations/client/providers/AuthProvider.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AuthProvider_esModule, $$typeof: AuthProvider_$$typeof } = AuthProvider_proxy;
const AuthProvider_default_ = AuthProvider_proxy.default;


/* harmony default export */ const AuthProvider = (AuthProvider_default_);
;// CONCATENATED MODULE: ./components/Header.jsx

const Header_proxy = (0,module_proxy.createProxy)(String.raw`/Users/eriktabys/Desktop/Itransitions/recommendations/client/components/Header.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Header_esModule, $$typeof: Header_$$typeof } = Header_proxy;
const Header_default_ = Header_proxy.default;


/* harmony default export */ const Header = (Header_default_);
;// CONCATENATED MODULE: ./app/layout.js






const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(AuthProvider, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ThemeProvider, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container position-relative",
                            style: {
                                marginTop: "80px"
                            },
                            children: children
                        })
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 57481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 19413:
/***/ (() => {



/***/ }),

/***/ 1021:
/***/ (() => {



/***/ })

};
;