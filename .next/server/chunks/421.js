"use strict";
exports.id = 421;
exports.ids = [421];
exports.modules = {

/***/ 7421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Button.js
var Button = __webpack_require__(3780);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Form.js
var Form = __webpack_require__(9486);
var Form_default = /*#__PURE__*/__webpack_require__.n(Form);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/InputGroup.js
var InputGroup = __webpack_require__(9136);
var InputGroup_default = /*#__PURE__*/__webpack_require__.n(InputGroup);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(2196);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.mjs
var fontawesome_svg_core = __webpack_require__(9024);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(2050);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(1072);
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









fontawesome_svg_core.library.add(free_solid_svg_icons/* faCheckSquare */.a3n, free_solid_svg_icons/* faCoffee */.SvR, free_solid_svg_icons/* faSearch */.wn1, free_solid_svg_icons/* faCircleHalfStroke */.DhN);
function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        style: {
            position: "fixed",
            top: "0",
            left: "0",
            right: "0"
        },
        className: "bg-body shadow",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container d-flex justify-content-between align-items-center py-3",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: "nav-link",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "mb-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "HOME"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex justify-content-between align-items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex me-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/register",
                                    className: "nav-link",
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
                                    className: "nav-link",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "Login"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "me-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((InputGroup_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                        placeholder: "Find an overview",
                                        "aria-label": "Find an overview",
                                        "aria-describedby": "basic-addon2"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        variant: "outline-secondary",
                                        id: "button-addon2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                            icon: "fa-solid fa-magnifying-glass"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeButton, {})
                        })
                    ]
                })
            ]
        })
    });
}


/***/ })

};
;