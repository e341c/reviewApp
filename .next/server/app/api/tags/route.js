"use strict";
(() => {
var exports = {};
exports.id = 2191;
exports.ids = [2191];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 93755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/tags/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST),
  revalidate: () => (revalidate)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./utils/db.js
var db = __webpack_require__(56575);
// EXTERNAL MODULE: ./models/Tags.js
var Tags = __webpack_require__(9597);
;// CONCATENATED MODULE: ./app/api/tags/route.js



const revalidate = 10;
const GET = async (req)=>{
    try {
        await (0,db/* default */.Z)();
        const tags = await Tags/* default */.Z.find();
        return new next_response/* default */.Z(JSON.stringify(tags), {
            status: 200
        });
    } catch (error) {
        return new next_response/* default */.Z(error, {
            status: 500
        });
    }
};
const POST = async (req)=>{
    const body = await req.json();
    try {
        await (0,db/* default */.Z)();
        body.map(async (item)=>{
            const tag = await Tags/* default */.Z.find({
                name: item.name
            });
            if (tag[0]?.name != item.name) {
                new Tags/* default */.Z({
                    name: item.name
                }).save();
            }
        });
        return new next_response/* default */.Z("Tags added", {
            status: 200
        });
    } catch (error) {
        return new next_response/* default */.Z(error, {
            status: 500
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Ftags%2Froute&name=app%2Fapi%2Ftags%2Froute&pagePath=private-next-app-dir%2Fapi%2Ftags%2Froute.js&appDir=%2FUsers%2Feriktabys%2FDesktop%2FItransitions%2Frecommendations%2Fclient%2Fapp&appPaths=%2Fapi%2Ftags%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/tags/route",
        pathname: "/api/tags",
        filename: "route",
        bundlePath: "app/api/tags/route"
    },
    resolvedPagePath: "/Users/eriktabys/Desktop/Itransitions/recommendations/client/app/api/tags/route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/tags/route";


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ 9597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());
const tagsSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Tags || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Tags", tagsSchema));


/***/ }),

/***/ 56575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connect = async ()=>{
    try {
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);
    } catch (error) {
        throw new Error("Connection failed!");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3587,5501,9335], () => (__webpack_exec__(93755)));
module.exports = __webpack_exports__;

})();