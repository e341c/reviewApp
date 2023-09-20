"use strict";
(() => {
var exports = {};
exports.id = 6323;
exports.ids = [6323];
exports.modules = {

/***/ 21841:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 54742:
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

// NAMESPACE OBJECT: ./app/api/review/edit/[id]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
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
// EXTERNAL MODULE: ./models/Review.js
var Review = __webpack_require__(13707);
// EXTERNAL MODULE: ./models/User.js
var User = __webpack_require__(24946);
// EXTERNAL MODULE: ./models/Category.js
var Category = __webpack_require__(859);
// EXTERNAL MODULE: ./models/Tags.js
var Tags = __webpack_require__(9597);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-node/v4.js + 3 modules
var v4 = __webpack_require__(51063);
// EXTERNAL MODULE: ./utils/s3.js
var s3 = __webpack_require__(39282);
;// CONCATENATED MODULE: ./app/api/review/edit/[id]/route.js









const revalidate = 1;
const POST = async (req, { params })=>{
    const { id } = params;
    const formData = await req.formData();
    try {
        await (0,db/* default */.Z)();
        await User/* default */.Z.find();
        await Category/* default */.Z.find();
        await Tags/* default */.Z.find();
        const review = await Review/* default */.Z.findById(id);
        const file = formData.get("file");
        const titleReview = formData.get("titleReview");
        const titleItem = formData.get("titleItem");
        const category = formData.get("category");
        const tags = formData.getAll("tags");
        const desc = formData.get("desc");
        const likes = formData.get("likes");
        const rating = formData.get("rating");
        const reviewRating = formData.get("reviewRating");
        const editReview = {
            titleReview,
            titleItem,
            category,
            tags,
            desc,
            likes,
            rating,
            reviewRating
        };
        if (file === "null") {
            console.log(1);
            await Review/* default */.Z.findOneAndUpdate(review, editReview);
            return new next_response/* default */.Z("Review updated, without image", {
                status: 201
            });
        } else {
            const reviewImg = review.img.replace("https://d2ykbx43rxyrs3.cloudfront.net/", "");
            (0,s3/* deleteImageFromS3 */.Q)(reviewImg);
            const mimeType = file.type;
            const fileExtension = mimeType.split("/")[1];
            const buffer = Buffer.from(await file.arrayBuffer());
            const fileName = (0,v4/* default */.Z)() + "." + fileExtension;
            const url = await (0,s3/* uploadImageToS3 */.e)(buffer, fileName, mimeType);
            const cloudFront = "https://d2ykbx43rxyrs3.cloudfront.net/" + fileName;
            await Review/* default */.Z.findOneAndUpdate(review, {
                img: cloudFront
            });
        }
        await Review/* default */.Z.findOneAndUpdate(review, editReview);
        return new next_response/* default */.Z("Review updated with image", {
            status: 201
        });
    } catch (error) {
        return new next_response/* default */.Z(error, {
            status: 500
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Freview%2Fedit%2F%5Bid%5D%2Froute&name=app%2Fapi%2Freview%2Fedit%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Freview%2Fedit%2F%5Bid%5D%2Froute.js&appDir=%2FUsers%2Feriktabys%2FDesktop%2FItransitions%2Frecommendations%2Fclient%2Fapp&appPaths=%2Fapi%2Freview%2Fedit%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/review/edit/[id]/route",
        pathname: "/api/review/edit/[id]",
        filename: "route",
        bundlePath: "app/api/review/edit/[id]/route"
    },
    resolvedPagePath: "/Users/eriktabys/Desktop/Itransitions/recommendations/client/app/api/review/edit/[id]/route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/review/edit/[id]/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3587,5501,9335,6889,1063,88,552,9882], () => (__webpack_exec__(54742)));
module.exports = __webpack_exports__;

})();