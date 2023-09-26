"use strict";
exports.id = 6813;
exports.ids = [6813];
exports.modules = {

/***/ 31865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Filter)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Button.js
var Button = __webpack_require__(93780);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Form.js
var Form = __webpack_require__(39486);
var Form_default = /*#__PURE__*/__webpack_require__.n(Form);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(93258);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var dist = __webpack_require__(97146);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/InputGroup.js
var InputGroup = __webpack_require__(9136);
var InputGroup_default = /*#__PURE__*/__webpack_require__.n(InputGroup);
;// CONCATENATED MODULE: ./components/Filter/Categories.jsx





const API_URL = "http://localhost:3000";
function Categories({ url, getCategory }) {
    const { data: categories, error, isLoading } = (0,dist/* default */.ZP)(API_URL + "/api/category", async ()=>{
        const res = await axios/* default */.Z.get(`/api/category`);
        return res.data;
    }, {
        revalidateOnMount: true,
        revalidateOnFocus: false
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
        className: "col col-auto mb-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                children: "Choice category"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((InputGroup_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Select, {
                    name: "category",
                    placeholder: "Choice category",
                    "aria-label": "category",
                    onChange: (e)=>{
                        getCategory(e.target.value);
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "",
                            children: "All categories"
                        }),
                        categories?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: item.name,
                                children: item.name
                            }, item._id))
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(52196);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(42050);
;// CONCATENATED MODULE: ./components/Filter/SearchBar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function SearchBar({ url, getSearch }) {
    const [query, setQuery] = (0,react_.useState)("");
    getSearch(query);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
        className: "col col-auto mb-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                children: "Enter review title, text, author or comment"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((InputGroup_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((InputGroup_default()).Text, {
                        className: "text-secondary",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                            icon: free_solid_svg_icons/* faMagnifyingGlass */.Y$T
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                        placeholder: "Find a review",
                        value: query,
                        "aria-label": "Find a review",
                        "aria-describedby": "basic-addon2",
                        onChange: (e)=>setQuery(e.target.value)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "outline-secondary",
                        className: "input-group-text ",
                        id: "basic-addon3",
                        onClick: ()=>{
                            setQuery("");
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                            icon: free_solid_svg_icons/* faXmark */.g82
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/react-bootstrap-typeahead/css/Typeahead.css
var Typeahead = __webpack_require__(72141);
// EXTERNAL MODULE: ./node_modules/react-bootstrap-typeahead/cjs/index.js
var cjs = __webpack_require__(14545);
;// CONCATENATED MODULE: ./components/Filter/Tags.jsx







const Tags_API_URL = "http://localhost:3000";
function Tags({ url, getTags }) {
    const [tags, setTags] = (0,react_.useState)([]);
    const [tagsOptions, setTagsOptions] = (0,react_.useState)([]);
    const { data, error, isLoading } = (0,dist/* default */.ZP)(Tags_API_URL + "/api/tags", async ()=>{
        const res = await axios/* default */.Z.get(`/api/tags`);
        setTagsOptions(res.data.map((item)=>{
            return item.name;
        }));
        return res.data;
    }, {
        revalidateOnMount: true,
        revalidateOnFocus: false
    });
    getTags(tags);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
        className: "col col-auto mb-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                children: "Choice tags"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(cjs.Typeahead, {
                id: "basic-typeahead-multiple",
                labelKey: "name",
                multiple: true,
                onChange: setTags,
                options: tagsOptions,
                placeholder: "Choose several tags...",
                selected: tags,
                className: "text-body"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Filter/Filter.jsx








const Filter_API_URL = "http://localhost:3000";
function Filter({ url, getReviews, getQuery }) {
    const [category, setCategory] = (0,react_.useState)("");
    const [search, setSearch] = (0,react_.useState)("");
    const [tags, setTags] = (0,react_.useState)([]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res = await axios/* default */.Z.get(Filter_API_URL + `${url}?category=${category}&search=${search}&tags=${tags}`);
        getReviews(res.data);
        getQuery(search);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col col-auto mb-3",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()), {
            onSubmit: handleSubmit,
            className: "row",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Tags, {
                    getTags: (result)=>{
                        setTags(result);
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Categories, {
                    getCategory: (result)=>{
                        setCategory(result);
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {
                    getSearch: (result)=>{
                        setSearch(result);
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Group, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "primary",
                        type: "submit",
                        children: "Search"
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 3836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Sort)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39486);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__);



function Sort({ reviews, getSort }) {
    const [sorting, setSorting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleChange = (e)=>{
        const selectValue = e.target.value;
        setSorting(selectValue);
        const sortArr = reviews;
        if (selectValue === "title-descending" || selectValue === "title-ascending") {
            if (selectValue === "title-descending") {
                sortArr.sort((review1, review2)=>{
                    const title1 = review1.titleReview.toUpperCase();
                    const title2 = review2.titleReview.toUpperCase();
                    if (title1 < title2) {
                        return 1;
                    }
                    if (title1 > title2) {
                        return -1;
                    }
                    return 0;
                });
            }
            if (selectValue === "title-ascending") {
                sortArr.sort((review1, review2)=>{
                    const title1 = review1.titleReview.toUpperCase();
                    const title2 = review2.titleReview.toUpperCase();
                    if (title1 > title2) {
                        return 1;
                    }
                    if (title1 < title2) {
                        return -1;
                    }
                    return 0;
                });
            }
            getSort(sortArr);
        }
        const dateArr = sortArr.map((item)=>{
            return {
                ...item,
                createdAt: new Date(item.createdAt)
            };
        });
        if (selectValue === "date-last") {
            dateArr.sort((review1, review2)=>Number(review2.createdAt) - Number(review1.createdAt));
        }
        if (selectValue === "date-new") {
            dateArr.sort((review1, review2)=>Number(review1.createdAt) - Number(review2.createdAt));
        }
        getSort(dateArr);
    };
    if (sorting === "") {
        getSort(reviews);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mb-3 col col-auto",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Group), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Label), {
                    children: "Sort by"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Select), {
                    name: "sort",
                    placeholder: "Sort by",
                    "aria-label": "Sort",
                    onChange: handleChange,
                    value: sorting,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "",
                            children: "Select Sort Type"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "title-ascending",
                            children: "Review title ascending"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "title-descending",
                            children: "Review title descending"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "date-last",
                            children: "Date latest"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "date-new",
                            children: "Date oldest"
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