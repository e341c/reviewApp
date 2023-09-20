exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 56864:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 56864;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 39282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ deleteImageFromS3),
/* harmony export */   e: () => (/* binding */ uploadImageToS3)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21841);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86889);
/* harmony import */ var _aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_1__);


const s3Client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});
async function uploadImageToS3(file, fileName) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${fileName}`,
        Body: file
    };
    const command = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.PutObjectCommand(params);
    const res = await s3Client.send(command);
    const getCommand = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.GetObjectCommand(params);
    const url = await (0,_aws_sdk_s3_request_presigner__WEBPACK_IMPORTED_MODULE_1__.getSignedUrl)(s3Client, getCommand, {
        expiresIn: 3600
    });
    return url;
}
async function deleteImageFromS3(fileName) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${fileName}`
    };
    const command = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.DeleteObjectCommand(params);
    const res = await s3Client.send(command);
}



/***/ })

};
;