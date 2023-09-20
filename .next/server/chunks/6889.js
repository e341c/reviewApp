"use strict";
exports.id = 6889;
exports.ids = [6889];
exports.modules = {

/***/ 68552:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AwsCrc32 = void 0;
var tslib_1 = __webpack_require__(73533);
var util_1 = __webpack_require__(56194);
var index_1 = __webpack_require__(44001);
var AwsCrc32 = /** @class */ function() {
    function AwsCrc32() {
        this.crc32 = new index_1.Crc32();
    }
    AwsCrc32.prototype.update = function(toHash) {
        if ((0, util_1.isEmptyData)(toHash)) return;
        this.crc32.update((0, util_1.convertToBuffer)(toHash));
    };
    AwsCrc32.prototype.digest = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
                return [
                    2 /*return*/ ,
                    (0, util_1.numToUint8)(this.crc32.digest())
                ];
            });
        });
    };
    AwsCrc32.prototype.reset = function() {
        this.crc32 = new index_1.Crc32();
    };
    return AwsCrc32;
}();
exports.AwsCrc32 = AwsCrc32; //# sourceMappingURL=aws_crc32.js.map


/***/ }),

/***/ 44001:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;
var tslib_1 = __webpack_require__(73533);
var util_1 = __webpack_require__(56194);
function crc32(data) {
    return new Crc32().update(data).digest();
}
exports.crc32 = crc32;
var Crc32 = /** @class */ function() {
    function Crc32() {
        this.checksum = 0xffffffff;
    }
    Crc32.prototype.update = function(data) {
        var e_1, _a;
        try {
            for(var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()){
                var byte = data_1_1.value;
                this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 0xff];
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return this;
    };
    Crc32.prototype.digest = function() {
        return (this.checksum ^ 0xffffffff) >>> 0;
    };
    return Crc32;
}();
exports.Crc32 = Crc32;
// prettier-ignore
var a_lookUpTable = [
    0x00000000,
    0x77073096,
    0xEE0E612C,
    0x990951BA,
    0x076DC419,
    0x706AF48F,
    0xE963A535,
    0x9E6495A3,
    0x0EDB8832,
    0x79DCB8A4,
    0xE0D5E91E,
    0x97D2D988,
    0x09B64C2B,
    0x7EB17CBD,
    0xE7B82D07,
    0x90BF1D91,
    0x1DB71064,
    0x6AB020F2,
    0xF3B97148,
    0x84BE41DE,
    0x1ADAD47D,
    0x6DDDE4EB,
    0xF4D4B551,
    0x83D385C7,
    0x136C9856,
    0x646BA8C0,
    0xFD62F97A,
    0x8A65C9EC,
    0x14015C4F,
    0x63066CD9,
    0xFA0F3D63,
    0x8D080DF5,
    0x3B6E20C8,
    0x4C69105E,
    0xD56041E4,
    0xA2677172,
    0x3C03E4D1,
    0x4B04D447,
    0xD20D85FD,
    0xA50AB56B,
    0x35B5A8FA,
    0x42B2986C,
    0xDBBBC9D6,
    0xACBCF940,
    0x32D86CE3,
    0x45DF5C75,
    0xDCD60DCF,
    0xABD13D59,
    0x26D930AC,
    0x51DE003A,
    0xC8D75180,
    0xBFD06116,
    0x21B4F4B5,
    0x56B3C423,
    0xCFBA9599,
    0xB8BDA50F,
    0x2802B89E,
    0x5F058808,
    0xC60CD9B2,
    0xB10BE924,
    0x2F6F7C87,
    0x58684C11,
    0xC1611DAB,
    0xB6662D3D,
    0x76DC4190,
    0x01DB7106,
    0x98D220BC,
    0xEFD5102A,
    0x71B18589,
    0x06B6B51F,
    0x9FBFE4A5,
    0xE8B8D433,
    0x7807C9A2,
    0x0F00F934,
    0x9609A88E,
    0xE10E9818,
    0x7F6A0DBB,
    0x086D3D2D,
    0x91646C97,
    0xE6635C01,
    0x6B6B51F4,
    0x1C6C6162,
    0x856530D8,
    0xF262004E,
    0x6C0695ED,
    0x1B01A57B,
    0x8208F4C1,
    0xF50FC457,
    0x65B0D9C6,
    0x12B7E950,
    0x8BBEB8EA,
    0xFCB9887C,
    0x62DD1DDF,
    0x15DA2D49,
    0x8CD37CF3,
    0xFBD44C65,
    0x4DB26158,
    0x3AB551CE,
    0xA3BC0074,
    0xD4BB30E2,
    0x4ADFA541,
    0x3DD895D7,
    0xA4D1C46D,
    0xD3D6F4FB,
    0x4369E96A,
    0x346ED9FC,
    0xAD678846,
    0xDA60B8D0,
    0x44042D73,
    0x33031DE5,
    0xAA0A4C5F,
    0xDD0D7CC9,
    0x5005713C,
    0x270241AA,
    0xBE0B1010,
    0xC90C2086,
    0x5768B525,
    0x206F85B3,
    0xB966D409,
    0xCE61E49F,
    0x5EDEF90E,
    0x29D9C998,
    0xB0D09822,
    0xC7D7A8B4,
    0x59B33D17,
    0x2EB40D81,
    0xB7BD5C3B,
    0xC0BA6CAD,
    0xEDB88320,
    0x9ABFB3B6,
    0x03B6E20C,
    0x74B1D29A,
    0xEAD54739,
    0x9DD277AF,
    0x04DB2615,
    0x73DC1683,
    0xE3630B12,
    0x94643B84,
    0x0D6D6A3E,
    0x7A6A5AA8,
    0xE40ECF0B,
    0x9309FF9D,
    0x0A00AE27,
    0x7D079EB1,
    0xF00F9344,
    0x8708A3D2,
    0x1E01F268,
    0x6906C2FE,
    0xF762575D,
    0x806567CB,
    0x196C3671,
    0x6E6B06E7,
    0xFED41B76,
    0x89D32BE0,
    0x10DA7A5A,
    0x67DD4ACC,
    0xF9B9DF6F,
    0x8EBEEFF9,
    0x17B7BE43,
    0x60B08ED5,
    0xD6D6A3E8,
    0xA1D1937E,
    0x38D8C2C4,
    0x4FDFF252,
    0xD1BB67F1,
    0xA6BC5767,
    0x3FB506DD,
    0x48B2364B,
    0xD80D2BDA,
    0xAF0A1B4C,
    0x36034AF6,
    0x41047A60,
    0xDF60EFC3,
    0xA867DF55,
    0x316E8EEF,
    0x4669BE79,
    0xCB61B38C,
    0xBC66831A,
    0x256FD2A0,
    0x5268E236,
    0xCC0C7795,
    0xBB0B4703,
    0x220216B9,
    0x5505262F,
    0xC5BA3BBE,
    0xB2BD0B28,
    0x2BB45A92,
    0x5CB36A04,
    0xC2D7FFA7,
    0xB5D0CF31,
    0x2CD99E8B,
    0x5BDEAE1D,
    0x9B64C2B0,
    0xEC63F226,
    0x756AA39C,
    0x026D930A,
    0x9C0906A9,
    0xEB0E363F,
    0x72076785,
    0x05005713,
    0x95BF4A82,
    0xE2B87A14,
    0x7BB12BAE,
    0x0CB61B38,
    0x92D28E9B,
    0xE5D5BE0D,
    0x7CDCEFB7,
    0x0BDBDF21,
    0x86D3D2D4,
    0xF1D4E242,
    0x68DDB3F8,
    0x1FDA836E,
    0x81BE16CD,
    0xF6B9265B,
    0x6FB077E1,
    0x18B74777,
    0x88085AE6,
    0xFF0F6A70,
    0x66063BCA,
    0x11010B5C,
    0x8F659EFF,
    0xF862AE69,
    0x616BFFD3,
    0x166CCF45,
    0xA00AE278,
    0xD70DD2EE,
    0x4E048354,
    0x3903B3C2,
    0xA7672661,
    0xD06016F7,
    0x4969474D,
    0x3E6E77DB,
    0xAED16A4A,
    0xD9D65ADC,
    0x40DF0B66,
    0x37D83BF0,
    0xA9BCAE53,
    0xDEBB9EC5,
    0x47B2CF7F,
    0x30B5FFE9,
    0xBDBDF21C,
    0xCABAC28A,
    0x53B39330,
    0x24B4A3A6,
    0xBAD03605,
    0xCDD70693,
    0x54DE5729,
    0x23D967BF,
    0xB3667A2E,
    0xC4614AB8,
    0x5D681B02,
    0x2A6F2B94,
    0xB40BBE37,
    0xC30C8EA1,
    0x5A05DF1B,
    0x2D02EF8D
];
var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);
var aws_crc32_1 = __webpack_require__(68552);
Object.defineProperty(exports, "AwsCrc32", ({
    enumerable: true,
    get: function() {
        return aws_crc32_1.AwsCrc32;
    }
})); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 73533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 45850:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.convertToBuffer = void 0;
var util_utf8_browser_1 = __webpack_require__(27737);
// Quick polyfill
var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
    return Buffer.from(input, "utf8");
} : util_utf8_browser_1.fromUtf8;
function convertToBuffer(data) {
    // Already a Uint8, do nothing
    if (data instanceof Uint8Array) return data;
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
exports.convertToBuffer = convertToBuffer; //# sourceMappingURL=convertToBuffer.js.map


/***/ }),

/***/ 56194:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
var convertToBuffer_1 = __webpack_require__(45850);
Object.defineProperty(exports, "convertToBuffer", ({
    enumerable: true,
    get: function() {
        return convertToBuffer_1.convertToBuffer;
    }
}));
var isEmptyData_1 = __webpack_require__(50354);
Object.defineProperty(exports, "isEmptyData", ({
    enumerable: true,
    get: function() {
        return isEmptyData_1.isEmptyData;
    }
}));
var numToUint8_1 = __webpack_require__(71865);
Object.defineProperty(exports, "numToUint8", ({
    enumerable: true,
    get: function() {
        return numToUint8_1.numToUint8;
    }
}));
var uint32ArrayFrom_1 = __webpack_require__(90357);
Object.defineProperty(exports, "uint32ArrayFrom", ({
    enumerable: true,
    get: function() {
        return uint32ArrayFrom_1.uint32ArrayFrom;
    }
})); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 50354:
/***/ ((__unused_webpack_module, exports) => {


// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isEmptyData = void 0;
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
exports.isEmptyData = isEmptyData; //# sourceMappingURL=isEmptyData.js.map


/***/ }),

/***/ 71865:
/***/ ((__unused_webpack_module, exports) => {


// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.numToUint8 = void 0;
function numToUint8(num) {
    return new Uint8Array([
        (num & 0xff000000) >> 24,
        (num & 0x00ff0000) >> 16,
        (num & 0x0000ff00) >> 8,
        num & 0x000000ff
    ]);
}
exports.numToUint8 = numToUint8; //# sourceMappingURL=numToUint8.js.map


/***/ }),

/***/ 90357:
/***/ ((__unused_webpack_module, exports) => {


// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.uint32ArrayFrom = void 0;
// IE 11 does not support Array.from, so we do it manually
function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while(a_index < a_lookUpTable.length){
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
        }
        return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
}
exports.uint32ArrayFrom = uint32ArrayFrom; //# sourceMappingURL=uint32ArrayFrom.js.map


/***/ }),

/***/ 50979:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ALGORITHM_IDENTIFIER = exports.HOST_HEADER = exports.EXPIRES_QUERY_PARAM = exports.SIGNED_HEADERS_QUERY_PARAM = exports.AMZ_DATE_QUERY_PARAM = exports.CREDENTIAL_QUERY_PARAM = exports.ALGORITHM_QUERY_PARAM = exports.SHA256_HEADER = exports.UNSIGNED_PAYLOAD = void 0;
exports.UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
exports.SHA256_HEADER = "X-Amz-Content-Sha256";
exports.ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
exports.CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
exports.AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
exports.SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
exports.EXPIRES_QUERY_PARAM = "X-Amz-Expires";
exports.HOST_HEADER = "host";
exports.ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";


/***/ }),

/***/ 74560:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getSignedUrl = void 0;
const util_format_url_1 = __webpack_require__(6211);
const middleware_endpoint_1 = __webpack_require__(90583);
const protocol_http_1 = __webpack_require__(74720);
const presigner_1 = __webpack_require__(7713);
const getSignedUrl = async (client, command, options = {})=>{
    var _a, _b;
    let s3Presigner;
    if (typeof client.config.endpointProvider === "function") {
        const endpointV2 = await (0, middleware_endpoint_1.getEndpointFromInstructions)(command.input, command.constructor, client.config);
        const authScheme = (_b = (_a = endpointV2.properties) === null || _a === void 0 ? void 0 : _a.authSchemes) === null || _b === void 0 ? void 0 : _b[0];
        s3Presigner = new presigner_1.S3RequestPresigner({
            ...client.config,
            signingName: authScheme === null || authScheme === void 0 ? void 0 : authScheme.signingName,
            region: async ()=>authScheme === null || authScheme === void 0 ? void 0 : authScheme.signingRegion
        });
    } else {
        s3Presigner = new presigner_1.S3RequestPresigner(client.config);
    }
    const presignInterceptMiddleware = (next, context)=>async (args)=>{
            var _a, _b;
            const { request } = args;
            if (!protocol_http_1.HttpRequest.isInstance(request)) {
                throw new Error("Request to be presigned is not an valid HTTP request.");
            }
            delete request.headers["amz-sdk-invocation-id"];
            delete request.headers["amz-sdk-request"];
            delete request.headers["x-amz-user-agent"];
            const presigned = await s3Presigner.presign(request, {
                ...options,
                signingRegion: (_a = options.signingRegion) !== null && _a !== void 0 ? _a : context["signing_region"],
                signingService: (_b = options.signingService) !== null && _b !== void 0 ? _b : context["signing_service"]
            });
            return {
                response: {},
                output: {
                    $metadata: {
                        httpStatusCode: 200
                    },
                    presigned
                }
            };
        };
    const middlewareName = "presignInterceptMiddleware";
    const clientStack = client.middlewareStack.clone();
    clientStack.addRelativeTo(presignInterceptMiddleware, {
        name: middlewareName,
        relation: "before",
        toMiddleware: "awsAuthMiddleware",
        override: true
    });
    const handler = command.resolveMiddleware(clientStack, client.config, {});
    const { output } = await handler({
        input: command.input
    });
    const { presigned } = output;
    return (0, util_format_url_1.formatUrl)(presigned);
};
exports.getSignedUrl = getSignedUrl;


/***/ }),

/***/ 86889:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(74560), exports);
tslib_1.__exportStar(__webpack_require__(7713), exports);


/***/ }),

/***/ 7713:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.S3RequestPresigner = void 0;
const signature_v4_multi_region_1 = __webpack_require__(38392);
const constants_1 = __webpack_require__(50979);
class S3RequestPresigner {
    constructor(options){
        const resolvedOptions = {
            service: options.signingName || options.service || "s3",
            uriEscapePath: options.uriEscapePath || false,
            applyChecksum: options.applyChecksum || false,
            ...options
        };
        this.signer = new signature_v4_multi_region_1.SignatureV4MultiRegion(resolvedOptions);
    }
    presign(requestToSign, { unsignableHeaders = new Set(), unhoistableHeaders = new Set(), ...options } = {}) {
        unsignableHeaders.add("content-type");
        Object.keys(requestToSign.headers).map((header)=>header.toLowerCase()).filter((header)=>header.startsWith("x-amz-server-side-encryption")).forEach((header)=>{
            unhoistableHeaders.add(header);
        });
        requestToSign.headers[constants_1.SHA256_HEADER] = constants_1.UNSIGNED_PAYLOAD;
        const currentHostHeader = requestToSign.headers.host;
        const port = requestToSign.port;
        const expectedHostHeader = `${requestToSign.hostname}${requestToSign.port != null ? ":" + port : ""}`;
        if (!currentHostHeader || currentHostHeader === requestToSign.hostname && requestToSign.port != null) {
            requestToSign.headers.host = expectedHostHeader;
        }
        return this.signer.presign(requestToSign, {
            expiresIn: 900,
            unsignableHeaders,
            unhoistableHeaders,
            ...options
        });
    }
}
exports.S3RequestPresigner = S3RequestPresigner;


/***/ }),

/***/ 70415:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SignatureV4MultiRegion = void 0;
const signature_v4_1 = __webpack_require__(91562);
const load_crt_1 = __webpack_require__(58604);
const signature_v4_crt_container_1 = __webpack_require__(23036);
class SignatureV4MultiRegion {
    constructor(options){
        this.sigv4Signer = new signature_v4_1.SignatureV4(options);
        this.signerOptions = options;
    }
    async sign(requestToSign, options = {}) {
        if (options.signingRegion === "*") {
            if (this.signerOptions.runtime !== "node") throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
            return this.getSigv4aSigner().sign(requestToSign, options);
        }
        return this.sigv4Signer.sign(requestToSign, options);
    }
    async presign(originalRequest, options = {}) {
        if (options.signingRegion === "*") {
            if (this.signerOptions.runtime !== "node") throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
            return this.getSigv4aSigner().presign(originalRequest, options);
        }
        return this.sigv4Signer.presign(originalRequest, options);
    }
    getSigv4aSigner() {
        if (!this.sigv4aSigner) {
            let CrtSignerV4 = null;
            try {
                (0, load_crt_1.loadCrt)();
                CrtSignerV4 = signature_v4_crt_container_1.signatureV4CrtContainer.CrtSignerV4;
                if (typeof CrtSignerV4 !== "function") throw new Error();
            } catch (e) {
                e.message = `${e.message}\nPlease check if you have installed "@aws-sdk/signature-v4-crt" package explicitly. \n` + "For more information please go to " + "https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt";
                throw e;
            }
            this.sigv4aSigner = new CrtSignerV4({
                ...this.signerOptions,
                signingAlgorithm: 1
            });
        }
        return this.sigv4aSigner;
    }
}
exports.SignatureV4MultiRegion = SignatureV4MultiRegion;


/***/ }),

/***/ 38392:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(70415), exports);
tslib_1.__exportStar(__webpack_require__(23036), exports);


/***/ }),

/***/ 58604:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.loadCrt = void 0;
const signature_v4_crt_container_1 = __webpack_require__(23036);
function loadCrt() {
    if (signature_v4_crt_container_1.signatureV4CrtContainer.CrtSignerV4) {
        return;
    }
    try {
        if (true) {
            const __require = undefined;
            const moduleName = "@aws-sdk/signature-v4-crt";
            __webpack_require__(56864).call(null, moduleName);
        }
    } catch (e) {}
}
exports.loadCrt = loadCrt;


/***/ }),

/***/ 23036:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.signatureV4CrtContainer = void 0;
exports.signatureV4CrtContainer = {
    CrtSignerV4: null
};


/***/ }),

/***/ 6211:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.formatUrl = void 0;
const querystring_builder_1 = __webpack_require__(76176);
function formatUrl(request) {
    var _a, _b;
    const { port, query } = request;
    let { protocol, path, hostname } = request;
    if (protocol && protocol.slice(-1) !== ":") {
        protocol += ":";
    }
    if (port) {
        hostname += `:${port}`;
    }
    if (path && path.charAt(0) !== "/") {
        path = `/${path}`;
    }
    let queryString = query ? (0, querystring_builder_1.buildQueryString)(query) : "";
    if (queryString && queryString[0] !== "?") {
        queryString = `?${queryString}`;
    }
    let auth = "";
    if (request.username != null || request.password != null) {
        const username = (_a = request.username) !== null && _a !== void 0 ? _a : "";
        const password = (_b = request.password) !== null && _b !== void 0 ? _b : "";
        auth = `${username}:${password}@`;
    }
    let fragment = "";
    if (request.fragment) {
        fragment = `#${request.fragment}`;
    }
    return `${protocol}//${auth}${hostname}${path}${queryString}${fragment}`;
}
exports.formatUrl = formatUrl;


/***/ }),

/***/ 27737:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toUtf8 = exports.fromUtf8 = void 0;
const pureJs_1 = __webpack_require__(73310);
const whatwgEncodingApi_1 = __webpack_require__(13053);
const fromUtf8 = (input)=>typeof TextEncoder === "function" ? (0, whatwgEncodingApi_1.fromUtf8)(input) : (0, pureJs_1.fromUtf8)(input);
exports.fromUtf8 = fromUtf8;
const toUtf8 = (input)=>typeof TextDecoder === "function" ? (0, whatwgEncodingApi_1.toUtf8)(input) : (0, pureJs_1.toUtf8)(input);
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 73310:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toUtf8 = exports.fromUtf8 = void 0;
const fromUtf8 = (input)=>{
    const bytes = [];
    for(let i = 0, len = input.length; i < len; i++){
        const value = input.charCodeAt(i);
        if (value < 0x80) {
            bytes.push(value);
        } else if (value < 0x800) {
            bytes.push(value >> 6 | 192, value & 63 | 128);
        } else if (i + 1 < input.length && (value & 0xfc00) === 0xd800 && (input.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            const surrogatePair = 0x10000 + ((value & 1023) << 10) + (input.charCodeAt(++i) & 1023);
            bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
        } else {
            bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
        }
    }
    return Uint8Array.from(bytes);
};
exports.fromUtf8 = fromUtf8;
const toUtf8 = (input)=>{
    let decoded = "";
    for(let i = 0, len = input.length; i < len; i++){
        const byte = input[i];
        if (byte < 0x80) {
            decoded += String.fromCharCode(byte);
        } else if (192 <= byte && byte < 224) {
            const nextByte = input[++i];
            decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
        } else if (240 <= byte && byte < 365) {
            const surrogatePair = [
                byte,
                input[++i],
                input[++i],
                input[++i]
            ];
            const encoded = "%" + surrogatePair.map((byteValue)=>byteValue.toString(16)).join("%");
            decoded += decodeURIComponent(encoded);
        } else {
            decoded += String.fromCharCode((byte & 15) << 12 | (input[++i] & 63) << 6 | input[++i] & 63);
        }
    }
    return decoded;
};
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 13053:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toUtf8 = exports.fromUtf8 = void 0;
function fromUtf8(input) {
    return new TextEncoder().encode(input);
}
exports.fromUtf8 = fromUtf8;
function toUtf8(input) {
    return new TextDecoder("utf-8").decode(input);
}
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 10315:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.EventStreamCodec = void 0;
const crc32_1 = __webpack_require__(44001);
const HeaderMarshaller_1 = __webpack_require__(75261);
const splitMessage_1 = __webpack_require__(99618);
class EventStreamCodec {
    constructor(toUtf8, fromUtf8){
        this.headerMarshaller = new HeaderMarshaller_1.HeaderMarshaller(toUtf8, fromUtf8);
        this.messageBuffer = [];
        this.isEndOfStream = false;
    }
    feed(message) {
        this.messageBuffer.push(this.decode(message));
    }
    endOfStream() {
        this.isEndOfStream = true;
    }
    getMessage() {
        const message = this.messageBuffer.pop();
        const isEndOfStream = this.isEndOfStream;
        return {
            getMessage () {
                return message;
            },
            isEndOfStream () {
                return isEndOfStream;
            }
        };
    }
    getAvailableMessages() {
        const messages = this.messageBuffer;
        this.messageBuffer = [];
        const isEndOfStream = this.isEndOfStream;
        return {
            getMessages () {
                return messages;
            },
            isEndOfStream () {
                return isEndOfStream;
            }
        };
    }
    encode({ headers: rawHeaders, body }) {
        const headers = this.headerMarshaller.format(rawHeaders);
        const length = headers.byteLength + body.byteLength + 16;
        const out = new Uint8Array(length);
        const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        const checksum = new crc32_1.Crc32();
        view.setUint32(0, length, false);
        view.setUint32(4, headers.byteLength, false);
        view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
        out.set(headers, 12);
        out.set(body, headers.byteLength + 12);
        view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
        return out;
    }
    decode(message) {
        const { headers, body } = (0, splitMessage_1.splitMessage)(message);
        return {
            headers: this.headerMarshaller.parse(headers),
            body
        };
    }
    formatHeaders(rawHeaders) {
        return this.headerMarshaller.format(rawHeaders);
    }
}
exports.EventStreamCodec = EventStreamCodec;


/***/ }),

/***/ 75261:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.HeaderMarshaller = void 0;
const util_hex_encoding_1 = __webpack_require__(37814);
const Int64_1 = __webpack_require__(36231);
class HeaderMarshaller {
    constructor(toUtf8, fromUtf8){
        this.toUtf8 = toUtf8;
        this.fromUtf8 = fromUtf8;
    }
    format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)){
            const bytes = this.fromUtf8(headerName);
            chunks.push(Uint8Array.from([
                bytes.byteLength
            ]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes)=>carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks){
            out.set(chunk, position);
            position += chunk.byteLength;
        }
        return out;
    }
    formatHeaderValue(header) {
        switch(header.type){
            case "boolean":
                return Uint8Array.from([
                    header.value ? 0 : 1
                ]);
            case "byte":
                return Uint8Array.from([
                    2,
                    header.value
                ]);
            case "short":
                const shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, 3);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case "integer":
                const intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, 4);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case "long":
                const longBytes = new Uint8Array(9);
                longBytes[0] = 5;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case "binary":
                const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
                binView.setUint8(0, 6);
                binView.setUint16(1, header.value.byteLength, false);
                const binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case "string":
                const utf8Bytes = this.fromUtf8(header.value);
                const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
                strView.setUint8(0, 7);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                const strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case "timestamp":
                const tsBytes = new Uint8Array(9);
                tsBytes[0] = 8;
                tsBytes.set(Int64_1.Int64.fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case "uuid":
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error(`Invalid UUID received: ${header.value}`);
                }
                const uuidBytes = new Uint8Array(17);
                uuidBytes[0] = 9;
                uuidBytes.set((0, util_hex_encoding_1.fromHex)(header.value.replace(/\-/g, "")), 1);
                return uuidBytes;
        }
    }
    parse(headers) {
        const out = {};
        let position = 0;
        while(position < headers.byteLength){
            const nameLength = headers.getUint8(position++);
            const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
            position += nameLength;
            switch(headers.getUint8(position++)){
                case 0:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: true
                    };
                    break;
                case 1:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: false
                    };
                    break;
                case 2:
                    out[name] = {
                        type: BYTE_TAG,
                        value: headers.getInt8(position++)
                    };
                    break;
                case 3:
                    out[name] = {
                        type: SHORT_TAG,
                        value: headers.getInt16(position, false)
                    };
                    position += 2;
                    break;
                case 4:
                    out[name] = {
                        type: INT_TAG,
                        value: headers.getInt32(position, false)
                    };
                    position += 4;
                    break;
                case 5:
                    out[name] = {
                        type: LONG_TAG,
                        value: new Int64_1.Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
                    };
                    position += 8;
                    break;
                case 6:
                    const binaryLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: BINARY_TAG,
                        value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
                    };
                    position += binaryLength;
                    break;
                case 7:
                    const stringLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: STRING_TAG,
                        value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
                    };
                    position += stringLength;
                    break;
                case 8:
                    out[name] = {
                        type: TIMESTAMP_TAG,
                        value: new Date(new Int64_1.Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
                    };
                    position += 8;
                    break;
                case 9:
                    const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
                    position += 16;
                    out[name] = {
                        type: UUID_TAG,
                        value: `${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(0, 4))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(4, 6))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(6, 8))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(8, 10))}-${(0, util_hex_encoding_1.toHex)(uuidBytes.subarray(10))}`
                    };
                    break;
                default:
                    throw new Error(`Unrecognized header type tag`);
            }
        }
        return out;
    }
}
exports.HeaderMarshaller = HeaderMarshaller;
var HEADER_VALUE_TYPE;
(function(HEADER_VALUE_TYPE) {
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["short"] = 3] = "short";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["long"] = 5] = "long";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["string"] = 7] = "string";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
const BOOLEAN_TAG = "boolean";
const BYTE_TAG = "byte";
const SHORT_TAG = "short";
const INT_TAG = "integer";
const LONG_TAG = "long";
const BINARY_TAG = "binary";
const STRING_TAG = "string";
const TIMESTAMP_TAG = "timestamp";
const UUID_TAG = "uuid";
const UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;


/***/ }),

/***/ 36231:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Int64 = void 0;
const util_hex_encoding_1 = __webpack_require__(37814);
class Int64 {
    constructor(bytes){
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
    }
    static fromNumber(number) {
        if (number > 9223372036854776000 || number < -9223372036854776000) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for(let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256){
            bytes[i] = remaining;
        }
        if (number < 0) {
            negate(bytes);
        }
        return new Int64(bytes);
    }
    valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
            negate(bytes);
        }
        return parseInt((0, util_hex_encoding_1.toHex)(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
        return String(this.valueOf());
    }
}
exports.Int64 = Int64;
function negate(bytes) {
    for(let i = 0; i < 8; i++){
        bytes[i] ^= 0xff;
    }
    for(let i = 7; i > -1; i--){
        bytes[i]++;
        if (bytes[i] !== 0) break;
    }
}


/***/ }),

/***/ 42719:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 70911:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.MessageDecoderStream = void 0;
class MessageDecoderStream {
    constructor(options){
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const bytes of this.options.inputStream){
            const decoded = this.options.decoder.decode(bytes);
            yield decoded;
        }
    }
}
exports.MessageDecoderStream = MessageDecoderStream;


/***/ }),

/***/ 93231:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.MessageEncoderStream = void 0;
class MessageEncoderStream {
    constructor(options){
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const msg of this.options.messageStream){
            const encoded = this.options.encoder.encode(msg);
            yield encoded;
        }
        if (this.options.includeEndFrame) {
            yield new Uint8Array(0);
        }
    }
}
exports.MessageEncoderStream = MessageEncoderStream;


/***/ }),

/***/ 69670:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SmithyMessageDecoderStream = void 0;
class SmithyMessageDecoderStream {
    constructor(options){
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const message of this.options.messageStream){
            const deserialized = await this.options.deserializer(message);
            if (deserialized === undefined) continue;
            yield deserialized;
        }
    }
}
exports.SmithyMessageDecoderStream = SmithyMessageDecoderStream;


/***/ }),

/***/ 80567:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SmithyMessageEncoderStream = void 0;
class SmithyMessageEncoderStream {
    constructor(options){
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const chunk of this.options.inputStream){
            const payloadBuf = this.options.serializer(chunk);
            yield payloadBuf;
        }
    }
}
exports.SmithyMessageEncoderStream = SmithyMessageEncoderStream;


/***/ }),

/***/ 96779:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(10315), exports);
tslib_1.__exportStar(__webpack_require__(75261), exports);
tslib_1.__exportStar(__webpack_require__(36231), exports);
tslib_1.__exportStar(__webpack_require__(42719), exports);
tslib_1.__exportStar(__webpack_require__(70911), exports);
tslib_1.__exportStar(__webpack_require__(93231), exports);
tslib_1.__exportStar(__webpack_require__(69670), exports);
tslib_1.__exportStar(__webpack_require__(80567), exports);


/***/ }),

/***/ 99618:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.splitMessage = void 0;
const crc32_1 = __webpack_require__(44001);
const PRELUDE_MEMBER_LENGTH = 4;
const PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
const CHECKSUM_LENGTH = 4;
const MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
function splitMessage({ byteLength, byteOffset, buffer }) {
    if (byteLength < MINIMUM_MESSAGE_LENGTH) {
        throw new Error("Provided message too short to accommodate event stream message overhead");
    }
    const view = new DataView(buffer, byteOffset, byteLength);
    const messageLength = view.getUint32(0, false);
    if (byteLength !== messageLength) {
        throw new Error("Reported message length does not match received message length");
    }
    const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
    const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
    const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
    const checksummer = new crc32_1.Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
    if (expectedPreludeChecksum !== checksummer.digest()) {
        throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
    }
    checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
    if (expectedMessageChecksum !== checksummer.digest()) {
        throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
    }
    return {
        headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
        body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
    };
}
exports.splitMessage = splitMessage;


/***/ }),

/***/ 45220:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isArrayBuffer = void 0;
const isArrayBuffer = (arg)=>typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
exports.isArrayBuffer = isArrayBuffer;


/***/ }),

/***/ 7900:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createConfigValueProvider = void 0;
const createConfigValueProvider = (configKey, canonicalEndpointParamKey, config)=>{
    const configProvider = async ()=>{
        var _a;
        const configValue = (_a = config[configKey]) !== null && _a !== void 0 ? _a : config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
            return configValue();
        }
        return configValue;
    };
    if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async ()=>{
            const endpoint = await configProvider();
            if (endpoint && typeof endpoint === "object") {
                if ("url" in endpoint) {
                    return endpoint.url.href;
                }
                if ("hostname" in endpoint) {
                    const { protocol, hostname, port, path } = endpoint;
                    return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
                }
            }
            return endpoint;
        };
    }
    return configProvider;
};
exports.createConfigValueProvider = createConfigValueProvider;


/***/ }),

/***/ 15595:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resolveParams = exports.getEndpointFromInstructions = void 0;
const service_customizations_1 = __webpack_require__(15946);
const createConfigValueProvider_1 = __webpack_require__(7900);
const getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context)=>{
    const endpointParams = await (0, exports.resolveParams)(commandInput, instructionsSupplier, clientConfig);
    if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
    }
    const endpoint = clientConfig.endpointProvider(endpointParams, context);
    return endpoint;
};
exports.getEndpointFromInstructions = getEndpointFromInstructions;
const resolveParams = async (commandInput, instructionsSupplier, clientConfig)=>{
    var _a;
    const endpointParams = {};
    const instructions = ((_a = instructionsSupplier === null || instructionsSupplier === void 0 ? void 0 : instructionsSupplier.getEndpointParameterInstructions) === null || _a === void 0 ? void 0 : _a.call(instructionsSupplier)) || {};
    for (const [name, instruction] of Object.entries(instructions)){
        switch(instruction.type){
            case "staticContextParams":
                endpointParams[name] = instruction.value;
                break;
            case "contextParams":
                endpointParams[name] = commandInput[instruction.name];
                break;
            case "clientContextParams":
            case "builtInParams":
                endpointParams[name] = await (0, createConfigValueProvider_1.createConfigValueProvider)(instruction.name, name, clientConfig)();
                break;
            default:
                throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
    }
    if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
    }
    if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await (0, service_customizations_1.resolveParamsForS3)(endpointParams);
    }
    return endpointParams;
};
exports.resolveParams = resolveParams;


/***/ }),

/***/ 55923:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(15595), exports);
tslib_1.__exportStar(__webpack_require__(60918), exports);


/***/ }),

/***/ 60918:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toEndpointV1 = void 0;
const url_parser_1 = __webpack_require__(95969);
const toEndpointV1 = (endpoint)=>{
    if (typeof endpoint === "object") {
        if ("url" in endpoint) {
            return (0, url_parser_1.parseUrl)(endpoint.url);
        }
        return endpoint;
    }
    return (0, url_parser_1.parseUrl)(endpoint);
};
exports.toEndpointV1 = toEndpointV1;


/***/ }),

/***/ 23289:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.endpointMiddleware = void 0;
const getEndpointFromInstructions_1 = __webpack_require__(15595);
const endpointMiddleware = ({ config, instructions })=>{
    return (next, context)=>async (args)=>{
            var _a, _b;
            const endpoint = await (0, getEndpointFromInstructions_1.getEndpointFromInstructions)(args.input, {
                getEndpointParameterInstructions () {
                    return instructions;
                }
            }, {
                ...config
            }, context);
            context.endpointV2 = endpoint;
            context.authSchemes = (_a = endpoint.properties) === null || _a === void 0 ? void 0 : _a.authSchemes;
            const authScheme = (_b = context.authSchemes) === null || _b === void 0 ? void 0 : _b[0];
            if (authScheme) {
                context["signing_region"] = authScheme.signingRegion;
                context["signing_service"] = authScheme.signingName;
            }
            return next({
                ...args
            });
        };
};
exports.endpointMiddleware = endpointMiddleware;


/***/ }),

/***/ 84416:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getEndpointPlugin = exports.endpointMiddlewareOptions = void 0;
const middleware_serde_1 = __webpack_require__(53926);
const endpointMiddleware_1 = __webpack_require__(23289);
exports.endpointMiddlewareOptions = {
    step: "serialize",
    tags: [
        "ENDPOINT_PARAMETERS",
        "ENDPOINT_V2",
        "ENDPOINT"
    ],
    name: "endpointV2Middleware",
    override: true,
    relation: "before",
    toMiddleware: middleware_serde_1.serializerMiddlewareOption.name
};
const getEndpointPlugin = (config, instructions)=>({
        applyToStack: (clientStack)=>{
            clientStack.addRelativeTo((0, endpointMiddleware_1.endpointMiddleware)({
                config,
                instructions
            }), exports.endpointMiddlewareOptions);
        }
    });
exports.getEndpointPlugin = getEndpointPlugin;


/***/ }),

/***/ 90583:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(55923), exports);
tslib_1.__exportStar(__webpack_require__(23289), exports);
tslib_1.__exportStar(__webpack_require__(84416), exports);
tslib_1.__exportStar(__webpack_require__(27273), exports);
tslib_1.__exportStar(__webpack_require__(37547), exports);


/***/ }),

/***/ 27273:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resolveEndpointConfig = void 0;
const util_middleware_1 = __webpack_require__(20362);
const toEndpointV1_1 = __webpack_require__(60918);
const resolveEndpointConfig = (input)=>{
    var _a, _b, _c;
    const tls = (_a = input.tls) !== null && _a !== void 0 ? _a : true;
    const { endpoint } = input;
    const customEndpointProvider = endpoint != null ? async ()=>(0, toEndpointV1_1.toEndpointV1)(await (0, util_middleware_1.normalizeProvider)(endpoint)()) : undefined;
    const isCustomEndpoint = !!endpoint;
    return {
        ...input,
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: (0, util_middleware_1.normalizeProvider)((_b = input.useDualstackEndpoint) !== null && _b !== void 0 ? _b : false),
        useFipsEndpoint: (0, util_middleware_1.normalizeProvider)((_c = input.useFipsEndpoint) !== null && _c !== void 0 ? _c : false)
    };
};
exports.resolveEndpointConfig = resolveEndpointConfig;


/***/ }),

/***/ 15946:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(82623), exports);


/***/ }),

/***/ 82623:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isArnBucketName = exports.isDnsCompatibleBucketName = exports.S3_HOSTNAME_PATTERN = exports.DOT_PATTERN = exports.resolveParamsForS3 = void 0;
const resolveParamsForS3 = async (endpointParams)=>{
    const bucket = (endpointParams === null || endpointParams === void 0 ? void 0 : endpointParams.Bucket) || "";
    if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    }
    if ((0, exports.isArnBucketName)(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
            throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
    } else if (!(0, exports.isDnsCompatibleBucketName)(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
    }
    if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
    }
    return endpointParams;
};
exports.resolveParamsForS3 = resolveParamsForS3;
const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
exports.DOT_PATTERN = /\./;
exports.S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;
const isDnsCompatibleBucketName = (bucketName)=>DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
exports.isDnsCompatibleBucketName = isDnsCompatibleBucketName;
const isArnBucketName = (bucketName)=>{
    const [arn, partition, service, region, account, typeOrId] = bucketName.split(":");
    const isArn = arn === "arn" && bucketName.split(":").length >= 6;
    const isValidArn = [
        arn,
        partition,
        service,
        account,
        typeOrId
    ].filter(Boolean).length === 5;
    if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
    }
    return arn === "arn" && !!partition && !!service && !!account && !!typeOrId;
};
exports.isArnBucketName = isArnBucketName;


/***/ }),

/***/ 37547:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 91999:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.deserializerMiddleware = void 0;
const deserializerMiddleware = (options, deserializer)=>(next, context)=>async (args)=>{
            const { response } = await next(args);
            try {
                const parsed = await deserializer(response, options);
                return {
                    response,
                    output: parsed
                };
            } catch (error) {
                Object.defineProperty(error, "$response", {
                    value: response
                });
                if (!("$metadata" in error)) {
                    const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
                    error.message += "\n  " + hint;
                }
                throw error;
            }
        };
exports.deserializerMiddleware = deserializerMiddleware;


/***/ }),

/***/ 53926:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(91999), exports);
tslib_1.__exportStar(__webpack_require__(65829), exports);
tslib_1.__exportStar(__webpack_require__(2697), exports);


/***/ }),

/***/ 65829:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getSerdePlugin = exports.serializerMiddlewareOption = exports.deserializerMiddlewareOption = void 0;
const deserializerMiddleware_1 = __webpack_require__(91999);
const serializerMiddleware_1 = __webpack_require__(2697);
exports.deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: [
        "DESERIALIZER"
    ],
    override: true
};
exports.serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: [
        "SERIALIZER"
    ],
    override: true
};
function getSerdePlugin(config, serializer, deserializer) {
    return {
        applyToStack: (commandStack)=>{
            commandStack.add((0, deserializerMiddleware_1.deserializerMiddleware)(config, deserializer), exports.deserializerMiddlewareOption);
            commandStack.add((0, serializerMiddleware_1.serializerMiddleware)(config, serializer), exports.serializerMiddlewareOption);
        }
    };
}
exports.getSerdePlugin = getSerdePlugin;


/***/ }),

/***/ 2697:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.serializerMiddleware = void 0;
const serializerMiddleware = (options, serializer)=>(next, context)=>async (args)=>{
            var _a;
            const endpoint = ((_a = context.endpointV2) === null || _a === void 0 ? void 0 : _a.url) && options.urlParser ? async ()=>options.urlParser(context.endpointV2.url) : options.endpoint;
            if (!endpoint) {
                throw new Error("No valid endpoint provider available.");
            }
            const request = await serializer(args.input, {
                ...options,
                endpoint
            });
            return next({
                ...args,
                request
            });
        };
exports.serializerMiddleware = serializerMiddleware;


/***/ }),

/***/ 1564:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Field = void 0;
const types_1 = __webpack_require__(82491);
class Field {
    constructor({ name, kind = types_1.FieldPosition.HEADER, values = [] }){
        this.name = name;
        this.kind = kind;
        this.values = values;
    }
    add(value) {
        this.values.push(value);
    }
    set(values) {
        this.values = values;
    }
    remove(value) {
        this.values = this.values.filter((v)=>v !== value);
    }
    toString() {
        return this.values.map((v)=>v.includes(",") || v.includes(" ") ? `"${v}"` : v).join(", ");
    }
    get() {
        return this.values;
    }
}
exports.Field = Field;


/***/ }),

/***/ 72410:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Fields = void 0;
class Fields {
    constructor({ fields = [], encoding = "utf-8" }){
        this.entries = {};
        fields.forEach(this.setField.bind(this));
        this.encoding = encoding;
    }
    setField(field) {
        this.entries[field.name.toLowerCase()] = field;
    }
    getField(name) {
        return this.entries[name.toLowerCase()];
    }
    removeField(name) {
        delete this.entries[name.toLowerCase()];
    }
    getByType(kind) {
        return Object.values(this.entries).filter((field)=>field.kind === kind);
    }
}
exports.Fields = Fields;


/***/ }),

/***/ 638:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resolveHttpHandlerRuntimeConfig = exports.getHttpHandlerExtensionConfiguration = void 0;
const getHttpHandlerExtensionConfiguration = (runtimeConfig)=>{
    let httpHandler = runtimeConfig.httpHandler;
    return {
        setHttpHandler (handler) {
            httpHandler = handler;
        },
        httpHandler () {
            return httpHandler;
        },
        updateHttpClientConfig (key, value) {
            httpHandler.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs () {
            return httpHandler.httpHandlerConfigs();
        }
    };
};
exports.getHttpHandlerExtensionConfiguration = getHttpHandlerExtensionConfiguration;
const resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration)=>{
    return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler()
    };
};
exports.resolveHttpHandlerRuntimeConfig = resolveHttpHandlerRuntimeConfig;


/***/ }),

/***/ 45154:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(638), exports);


/***/ }),

/***/ 34043:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 54051:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.HttpRequest = void 0;
class HttpRequest {
    constructor(options){
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
    }
    static isInstance(request) {
        if (!request) return false;
        const req = request;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
    }
    clone() {
        const cloned = new HttpRequest({
            ...this,
            headers: {
                ...this.headers
            }
        });
        if (cloned.query) cloned.query = cloneQuery(cloned.query);
        return cloned;
    }
}
exports.HttpRequest = HttpRequest;
function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName)=>{
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [
                ...param
            ] : param
        };
    }, {});
}


/***/ }),

/***/ 6578:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.HttpResponse = void 0;
class HttpResponse {
    constructor(options){
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
    }
    static isInstance(response) {
        if (!response) return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
}
exports.HttpResponse = HttpResponse;


/***/ }),

/***/ 74720:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(45154), exports);
tslib_1.__exportStar(__webpack_require__(1564), exports);
tslib_1.__exportStar(__webpack_require__(72410), exports);
tslib_1.__exportStar(__webpack_require__(34043), exports);
tslib_1.__exportStar(__webpack_require__(54051), exports);
tslib_1.__exportStar(__webpack_require__(6578), exports);
tslib_1.__exportStar(__webpack_require__(4166), exports);
tslib_1.__exportStar(__webpack_require__(73087), exports);


/***/ }),

/***/ 4166:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isValidHostname = void 0;
function isValidHostname(hostname) {
    const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
    return hostPattern.test(hostname);
}
exports.isValidHostname = isValidHostname;


/***/ }),

/***/ 73087:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 76176:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.buildQueryString = void 0;
const util_uri_escape_1 = __webpack_require__(89521);
function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()){
        const value = query[key];
        key = (0, util_uri_escape_1.escapeUri)(key);
        if (Array.isArray(value)) {
            for(let i = 0, iLen = value.length; i < iLen; i++){
                parts.push(`${key}=${(0, util_uri_escape_1.escapeUri)(value[i])}`);
            }
        } else {
            let qsEntry = key;
            if (value || typeof value === "string") {
                qsEntry += `=${(0, util_uri_escape_1.escapeUri)(value)}`;
            }
            parts.push(qsEntry);
        }
    }
    return parts.join("&");
}
exports.buildQueryString = buildQueryString;


/***/ }),

/***/ 32541:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.parseQueryString = void 0;
function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        for (const pair of querystring.split("&")){
            let [key, value = null] = pair.split("=");
            key = decodeURIComponent(key);
            if (value) {
                value = decodeURIComponent(value);
            }
            if (!(key in query)) {
                query[key] = value;
            } else if (Array.isArray(query[key])) {
                query[key].push(value);
            } else {
                query[key] = [
                    query[key],
                    value
                ];
            }
        }
    }
    return query;
}
exports.parseQueryString = parseQueryString;


/***/ }),

/***/ 77857:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SignatureV4 = void 0;
const eventstream_codec_1 = __webpack_require__(96779);
const util_hex_encoding_1 = __webpack_require__(37814);
const util_middleware_1 = __webpack_require__(20362);
const util_utf8_1 = __webpack_require__(3278);
const constants_1 = __webpack_require__(25623);
const credentialDerivation_1 = __webpack_require__(53935);
const getCanonicalHeaders_1 = __webpack_require__(82839);
const getCanonicalQuery_1 = __webpack_require__(81847);
const getPayloadHash_1 = __webpack_require__(12230);
const headerUtil_1 = __webpack_require__(40843);
const moveHeadersToQuery_1 = __webpack_require__(72507);
const prepareRequest_1 = __webpack_require__(2076);
const utilDate_1 = __webpack_require__(15646);
class SignatureV4 {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }){
        this.headerMarshaller = new eventstream_codec_1.HeaderMarshaller(util_utf8_1.toUtf8, util_utf8_1.fromUtf8);
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = (0, util_middleware_1.normalizeProvider)(region);
        this.credentialProvider = (0, util_middleware_1.normalizeProvider)(credentials);
    }
    async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > constants_1.MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
        }
        const scope = (0, credentialDerivation_1.createScope)(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
        const request = (0, moveHeadersToQuery_1.moveHeadersToQuery)((0, prepareRequest_1.prepareRequest)(originalRequest), {
            unhoistableHeaders
        });
        if (credentials.sessionToken) {
            request.query[constants_1.TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[constants_1.ALGORITHM_QUERY_PARAM] = constants_1.ALGORITHM_IDENTIFIER;
        request.query[constants_1.CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[constants_1.AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[constants_1.EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = (0, getCanonicalHeaders_1.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        request.query[constants_1.SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[constants_1.SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await (0, getPayloadHash_1.getPayloadHash)(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, options) {
        if (typeof toSign === "string") {
            return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
        } else if (toSign.message) {
            return this.signMessage(toSign, options);
        } else {
            return this.signRequest(toSign, options);
        }
    }
    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = (0, credentialDerivation_1.createScope)(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
        const hashedPayload = await (0, getPayloadHash_1.getPayloadHash)({
            headers: {},
            body: payload
        }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = (0, util_hex_encoding_1.toHex)(await hash.digest());
        const stringToSign = [
            constants_1.EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload
        ].join("\n");
        return this.signString(stringToSign, {
            signingDate,
            signingRegion: region,
            signingService
        });
    }
    async signMessage(signableMessage, { signingDate = new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
            headers: this.headerMarshaller.format(signableMessage.message.headers),
            payload: signableMessage.message.body
        }, {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature
        });
        return promise.then((signature)=>{
            return {
                message: signableMessage.message,
                signature
            };
        });
    }
    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update((0, util_utf8_1.toUint8Array)(stringToSign));
        return (0, util_hex_encoding_1.toHex)(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion !== null && signingRegion !== void 0 ? signingRegion : await this.regionProvider();
        const request = (0, prepareRequest_1.prepareRequest)(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = (0, credentialDerivation_1.createScope)(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
        request.headers[constants_1.AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[constants_1.TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await (0, getPayloadHash_1.getPayloadHash)(request, this.sha256);
        if (!(0, headerUtil_1.hasHeader)(constants_1.SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[constants_1.SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = (0, getCanonicalHeaders_1.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[constants_1.AUTH_HEADER] = `${constants_1.ALGORITHM_IDENTIFIER} ` + `Credential=${credentials.accessKeyId}/${scope}, ` + `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` + `Signature=${signature}`;
        return request;
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${(0, getCanonicalQuery_1.getCanonicalQuery)(request)}
${sortedHeaders.map((name)=>`${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update((0, util_utf8_1.toUint8Array)(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${constants_1.ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${(0, util_hex_encoding_1.toHex)(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")){
                if ((pathSegment === null || pathSegment === void 0 ? void 0 : pathSegment.length) === 0) continue;
                if (pathSegment === ".") continue;
                if (pathSegment === "..") {
                    normalizedPathSegments.pop();
                } else {
                    normalizedPathSegments.push(pathSegment);
                }
            }
            const normalizedPath = `${(path === null || path === void 0 ? void 0 : path.startsWith("/")) ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && (path === null || path === void 0 ? void 0 : path.endsWith("/")) ? "/" : ""}`;
            const doubleEncoded = encodeURIComponent(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update((0, util_utf8_1.toUint8Array)(stringToSign));
        return (0, util_hex_encoding_1.toHex)(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
        return (0, credentialDerivation_1.getSigningKey)(this.sha256, credentials, shortDate, region, service || this.service);
    }
    validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
            throw new Error("Resolved credential object is not valid");
        }
    }
}
exports.SignatureV4 = SignatureV4;
const formatDate = (now)=>{
    const longDate = (0, utilDate_1.iso8601)(now).replace(/[\-:]/g, "");
    return {
        longDate,
        shortDate: longDate.slice(0, 8)
    };
};
const getCanonicalHeaderList = (headers)=>Object.keys(headers).sort().join(";");


/***/ }),

/***/ 79176:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.cloneQuery = exports.cloneRequest = void 0;
const cloneRequest = ({ headers, query, ...rest })=>({
        ...rest,
        headers: {
            ...headers
        },
        query: query ? (0, exports.cloneQuery)(query) : undefined
    });
exports.cloneRequest = cloneRequest;
const cloneQuery = (query)=>Object.keys(query).reduce((carry, paramName)=>{
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [
                ...param
            ] : param
        };
    }, {});
exports.cloneQuery = cloneQuery;


/***/ }),

/***/ 25623:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.MAX_PRESIGNED_TTL = exports.KEY_TYPE_IDENTIFIER = exports.MAX_CACHE_SIZE = exports.UNSIGNED_PAYLOAD = exports.EVENT_ALGORITHM_IDENTIFIER = exports.ALGORITHM_IDENTIFIER_V4A = exports.ALGORITHM_IDENTIFIER = exports.UNSIGNABLE_PATTERNS = exports.SEC_HEADER_PATTERN = exports.PROXY_HEADER_PATTERN = exports.ALWAYS_UNSIGNABLE_HEADERS = exports.HOST_HEADER = exports.TOKEN_HEADER = exports.SHA256_HEADER = exports.SIGNATURE_HEADER = exports.GENERATED_HEADERS = exports.DATE_HEADER = exports.AMZ_DATE_HEADER = exports.AUTH_HEADER = exports.REGION_SET_PARAM = exports.TOKEN_QUERY_PARAM = exports.SIGNATURE_QUERY_PARAM = exports.EXPIRES_QUERY_PARAM = exports.SIGNED_HEADERS_QUERY_PARAM = exports.AMZ_DATE_QUERY_PARAM = exports.CREDENTIAL_QUERY_PARAM = exports.ALGORITHM_QUERY_PARAM = void 0;
exports.ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
exports.CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
exports.AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
exports.SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
exports.EXPIRES_QUERY_PARAM = "X-Amz-Expires";
exports.SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
exports.TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
exports.REGION_SET_PARAM = "X-Amz-Region-Set";
exports.AUTH_HEADER = "authorization";
exports.AMZ_DATE_HEADER = exports.AMZ_DATE_QUERY_PARAM.toLowerCase();
exports.DATE_HEADER = "date";
exports.GENERATED_HEADERS = [
    exports.AUTH_HEADER,
    exports.AMZ_DATE_HEADER,
    exports.DATE_HEADER
];
exports.SIGNATURE_HEADER = exports.SIGNATURE_QUERY_PARAM.toLowerCase();
exports.SHA256_HEADER = "x-amz-content-sha256";
exports.TOKEN_HEADER = exports.TOKEN_QUERY_PARAM.toLowerCase();
exports.HOST_HEADER = "host";
exports.ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true
};
exports.PROXY_HEADER_PATTERN = /^proxy-/;
exports.SEC_HEADER_PATTERN = /^sec-/;
exports.UNSIGNABLE_PATTERNS = [
    /^proxy-/i,
    /^sec-/i
];
exports.ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
exports.ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
exports.EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
exports.UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
exports.MAX_CACHE_SIZE = 50;
exports.KEY_TYPE_IDENTIFIER = "aws4_request";
exports.MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;


/***/ }),

/***/ 53935:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.clearCredentialCache = exports.getSigningKey = exports.createScope = void 0;
const util_hex_encoding_1 = __webpack_require__(37814);
const util_utf8_1 = __webpack_require__(3278);
const constants_1 = __webpack_require__(25623);
const signingKeyCache = {};
const cacheQueue = [];
const createScope = (shortDate, region, service)=>`${shortDate}/${region}/${service}/${constants_1.KEY_TYPE_IDENTIFIER}`;
exports.createScope = createScope;
const getSigningKey = async (sha256Constructor, credentials, shortDate, region, service)=>{
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${(0, util_hex_encoding_1.toHex)(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while(cacheQueue.length > constants_1.MAX_CACHE_SIZE){
        delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [
        shortDate,
        region,
        service,
        constants_1.KEY_TYPE_IDENTIFIER
    ]){
        key = await hmac(sha256Constructor, key, signable);
    }
    return signingKeyCache[cacheKey] = key;
};
exports.getSigningKey = getSigningKey;
const clearCredentialCache = ()=>{
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach((cacheKey)=>{
        delete signingKeyCache[cacheKey];
    });
};
exports.clearCredentialCache = clearCredentialCache;
const hmac = (ctor, secret, data)=>{
    const hash = new ctor(secret);
    hash.update((0, util_utf8_1.toUint8Array)(data));
    return hash.digest();
};


/***/ }),

/***/ 82839:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getCanonicalHeaders = void 0;
const constants_1 = __webpack_require__(25623);
const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders)=>{
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()){
        if (headers[headerName] == undefined) {
            continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in constants_1.ALWAYS_UNSIGNABLE_HEADERS || (unsignableHeaders === null || unsignableHeaders === void 0 ? void 0 : unsignableHeaders.has(canonicalHeaderName)) || constants_1.PROXY_HEADER_PATTERN.test(canonicalHeaderName) || constants_1.SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
};
exports.getCanonicalHeaders = getCanonicalHeaders;


/***/ }),

/***/ 81847:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getCanonicalQuery = void 0;
const util_uri_escape_1 = __webpack_require__(89521);
const constants_1 = __webpack_require__(25623);
const getCanonicalQuery = ({ query = {} })=>{
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query).sort()){
        if (key.toLowerCase() === constants_1.SIGNATURE_HEADER) {
            continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
            serialized[key] = `${(0, util_uri_escape_1.escapeUri)(key)}=${(0, util_uri_escape_1.escapeUri)(value)}`;
        } else if (Array.isArray(value)) {
            serialized[key] = value.slice(0).reduce((encoded, value)=>encoded.concat([
                    `${(0, util_uri_escape_1.escapeUri)(key)}=${(0, util_uri_escape_1.escapeUri)(value)}`
                ]), []).sort().join("&");
        }
    }
    return keys.map((key)=>serialized[key]).filter((serialized)=>serialized).join("&");
};
exports.getCanonicalQuery = getCanonicalQuery;


/***/ }),

/***/ 12230:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getPayloadHash = void 0;
const is_array_buffer_1 = __webpack_require__(45220);
const util_hex_encoding_1 = __webpack_require__(37814);
const util_utf8_1 = __webpack_require__(3278);
const constants_1 = __webpack_require__(25623);
const getPayloadHash = async ({ headers, body }, hashConstructor)=>{
    for (const headerName of Object.keys(headers)){
        if (headerName.toLowerCase() === constants_1.SHA256_HEADER) {
            return headers[headerName];
        }
    }
    if (body == undefined) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    } else if (typeof body === "string" || ArrayBuffer.isView(body) || (0, is_array_buffer_1.isArrayBuffer)(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update((0, util_utf8_1.toUint8Array)(body));
        return (0, util_hex_encoding_1.toHex)(await hashCtor.digest());
    }
    return constants_1.UNSIGNED_PAYLOAD;
};
exports.getPayloadHash = getPayloadHash;


/***/ }),

/***/ 40843:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.deleteHeader = exports.getHeaderValue = exports.hasHeader = void 0;
const hasHeader = (soughtHeader, headers)=>{
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)){
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }
    return false;
};
exports.hasHeader = hasHeader;
const getHeaderValue = (soughtHeader, headers)=>{
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)){
        if (soughtHeader === headerName.toLowerCase()) {
            return headers[headerName];
        }
    }
    return undefined;
};
exports.getHeaderValue = getHeaderValue;
const deleteHeader = (soughtHeader, headers)=>{
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)){
        if (soughtHeader === headerName.toLowerCase()) {
            delete headers[headerName];
        }
    }
};
exports.deleteHeader = deleteHeader;


/***/ }),

/***/ 91562:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.prepareRequest = exports.moveHeadersToQuery = exports.getPayloadHash = exports.getCanonicalQuery = exports.getCanonicalHeaders = void 0;
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(77857), exports);
var getCanonicalHeaders_1 = __webpack_require__(82839);
Object.defineProperty(exports, "getCanonicalHeaders", ({
    enumerable: true,
    get: function() {
        return getCanonicalHeaders_1.getCanonicalHeaders;
    }
}));
var getCanonicalQuery_1 = __webpack_require__(81847);
Object.defineProperty(exports, "getCanonicalQuery", ({
    enumerable: true,
    get: function() {
        return getCanonicalQuery_1.getCanonicalQuery;
    }
}));
var getPayloadHash_1 = __webpack_require__(12230);
Object.defineProperty(exports, "getPayloadHash", ({
    enumerable: true,
    get: function() {
        return getPayloadHash_1.getPayloadHash;
    }
}));
var moveHeadersToQuery_1 = __webpack_require__(72507);
Object.defineProperty(exports, "moveHeadersToQuery", ({
    enumerable: true,
    get: function() {
        return moveHeadersToQuery_1.moveHeadersToQuery;
    }
}));
var prepareRequest_1 = __webpack_require__(2076);
Object.defineProperty(exports, "prepareRequest", ({
    enumerable: true,
    get: function() {
        return prepareRequest_1.prepareRequest;
    }
}));
tslib_1.__exportStar(__webpack_require__(53935), exports);


/***/ }),

/***/ 72507:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.moveHeadersToQuery = void 0;
const cloneRequest_1 = __webpack_require__(79176);
const moveHeadersToQuery = (request, options = {})=>{
    var _a;
    const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : (0, cloneRequest_1.cloneRequest)(request);
    for (const name of Object.keys(headers)){
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !((_a = options.unhoistableHeaders) === null || _a === void 0 ? void 0 : _a.has(lname))) {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return {
        ...request,
        headers,
        query
    };
};
exports.moveHeadersToQuery = moveHeadersToQuery;


/***/ }),

/***/ 2076:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.prepareRequest = void 0;
const cloneRequest_1 = __webpack_require__(79176);
const constants_1 = __webpack_require__(25623);
const prepareRequest = (request)=>{
    request = typeof request.clone === "function" ? request.clone() : (0, cloneRequest_1.cloneRequest)(request);
    for (const headerName of Object.keys(request.headers)){
        if (constants_1.GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    return request;
};
exports.prepareRequest = prepareRequest;


/***/ }),

/***/ 15646:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toDate = exports.iso8601 = void 0;
const iso8601 = (time)=>(0, exports.toDate)(time).toISOString().replace(/\.\d{3}Z$/, "Z");
exports.iso8601 = iso8601;
const toDate = (time)=>{
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};
exports.toDate = toDate;


/***/ }),

/***/ 90614:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 77074:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.HttpAuthLocation = void 0;
var HttpAuthLocation;
(function(HttpAuthLocation) {
    HttpAuthLocation["HEADER"] = "header";
    HttpAuthLocation["QUERY"] = "query";
})(HttpAuthLocation = exports.HttpAuthLocation || (exports.HttpAuthLocation = {}));


/***/ }),

/***/ 91526:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 9810:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 33069:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 71989:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 86231:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 1116:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(86231), exports);
tslib_1.__exportStar(__webpack_require__(89100), exports);
tslib_1.__exportStar(__webpack_require__(50507), exports);


/***/ }),

/***/ 89100:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 50507:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 99301:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 84514:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 91527:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.EndpointURLScheme = void 0;
var EndpointURLScheme;
(function(EndpointURLScheme) {
    EndpointURLScheme["HTTP"] = "http";
    EndpointURLScheme["HTTPS"] = "https";
})(EndpointURLScheme = exports.EndpointURLScheme || (exports.EndpointURLScheme = {}));


/***/ }),

/***/ 36208:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 21434:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 42994:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 815:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 44950:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(36208), exports);
tslib_1.__exportStar(__webpack_require__(21434), exports);
tslib_1.__exportStar(__webpack_require__(42994), exports);
tslib_1.__exportStar(__webpack_require__(43759), exports);
tslib_1.__exportStar(__webpack_require__(815), exports);


/***/ }),

/***/ 43759:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 12274:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 28739:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resolveChecksumRuntimeConfig = exports.getChecksumConfiguration = exports.AlgorithmId = void 0;
var AlgorithmId;
(function(AlgorithmId) {
    AlgorithmId["MD5"] = "md5";
    AlgorithmId["CRC32"] = "crc32";
    AlgorithmId["CRC32C"] = "crc32c";
    AlgorithmId["SHA1"] = "sha1";
    AlgorithmId["SHA256"] = "sha256";
})(AlgorithmId = exports.AlgorithmId || (exports.AlgorithmId = {}));
const getChecksumConfiguration = (runtimeConfig)=>{
    const checksumAlgorithms = [];
    if (runtimeConfig.sha256 !== undefined) {
        checksumAlgorithms.push({
            algorithmId: ()=>AlgorithmId.SHA256,
            checksumConstructor: ()=>runtimeConfig.sha256
        });
    }
    if (runtimeConfig.md5 != undefined) {
        checksumAlgorithms.push({
            algorithmId: ()=>AlgorithmId.MD5,
            checksumConstructor: ()=>runtimeConfig.md5
        });
    }
    return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm (algo) {
            this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms () {
            return this._checksumAlgorithms;
        }
    };
};
exports.getChecksumConfiguration = getChecksumConfiguration;
const resolveChecksumRuntimeConfig = (clientConfig)=>{
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm)=>{
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
};
exports.resolveChecksumRuntimeConfig = resolveChecksumRuntimeConfig;


/***/ }),

/***/ 89746:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resolveDefaultRuntimeConfig = exports.getDefaultClientConfiguration = void 0;
const checksum_1 = __webpack_require__(28739);
const getDefaultClientConfiguration = (runtimeConfig)=>{
    return {
        ...(0, checksum_1.getChecksumConfiguration)(runtimeConfig)
    };
};
exports.getDefaultClientConfiguration = getDefaultClientConfiguration;
const resolveDefaultRuntimeConfig = (config)=>{
    return {
        ...(0, checksum_1.resolveChecksumRuntimeConfig)(config)
    };
};
exports.resolveDefaultRuntimeConfig = resolveDefaultRuntimeConfig;


/***/ }),

/***/ 50245:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 19994:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AlgorithmId = void 0;
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(89746), exports);
tslib_1.__exportStar(__webpack_require__(50245), exports);
var checksum_1 = __webpack_require__(28739);
Object.defineProperty(exports, "AlgorithmId", ({
    enumerable: true,
    get: function() {
        return checksum_1.AlgorithmId;
    }
}));


/***/ }),

/***/ 45037:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FieldPosition = void 0;
var FieldPosition;
(function(FieldPosition) {
    FieldPosition[FieldPosition["HEADER"] = 0] = "HEADER";
    FieldPosition[FieldPosition["TRAILER"] = 1] = "TRAILER";
})(FieldPosition = exports.FieldPosition || (exports.FieldPosition = {}));


/***/ }),

/***/ 33673:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 52433:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 75417:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(33673), exports);
tslib_1.__exportStar(__webpack_require__(52433), exports);


/***/ }),

/***/ 82491:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(90614), exports);
tslib_1.__exportStar(__webpack_require__(77074), exports);
tslib_1.__exportStar(__webpack_require__(91526), exports);
tslib_1.__exportStar(__webpack_require__(9810), exports);
tslib_1.__exportStar(__webpack_require__(33069), exports);
tslib_1.__exportStar(__webpack_require__(71989), exports);
tslib_1.__exportStar(__webpack_require__(1116), exports);
tslib_1.__exportStar(__webpack_require__(99301), exports);
tslib_1.__exportStar(__webpack_require__(84514), exports);
tslib_1.__exportStar(__webpack_require__(91527), exports);
tslib_1.__exportStar(__webpack_require__(44950), exports);
tslib_1.__exportStar(__webpack_require__(12274), exports);
tslib_1.__exportStar(__webpack_require__(19994), exports);
tslib_1.__exportStar(__webpack_require__(45037), exports);
tslib_1.__exportStar(__webpack_require__(75417), exports);
tslib_1.__exportStar(__webpack_require__(62589), exports);
tslib_1.__exportStar(__webpack_require__(1755), exports);
tslib_1.__exportStar(__webpack_require__(2339), exports);
tslib_1.__exportStar(__webpack_require__(77856), exports);
tslib_1.__exportStar(__webpack_require__(6971), exports);
tslib_1.__exportStar(__webpack_require__(8132), exports);
tslib_1.__exportStar(__webpack_require__(68036), exports);
tslib_1.__exportStar(__webpack_require__(95599), exports);
tslib_1.__exportStar(__webpack_require__(87726), exports);
tslib_1.__exportStar(__webpack_require__(89606), exports);
tslib_1.__exportStar(__webpack_require__(54394), exports);
tslib_1.__exportStar(__webpack_require__(55337), exports);
tslib_1.__exportStar(__webpack_require__(86327), exports);
tslib_1.__exportStar(__webpack_require__(49570), exports);
tslib_1.__exportStar(__webpack_require__(43292), exports);
tslib_1.__exportStar(__webpack_require__(82602), exports);
tslib_1.__exportStar(__webpack_require__(7016), exports);
tslib_1.__exportStar(__webpack_require__(19027), exports);
tslib_1.__exportStar(__webpack_require__(10805), exports);


/***/ }),

/***/ 62589:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 1755:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 2339:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 77856:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 6971:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 8132:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 68036:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 95599:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 87726:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 89606:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 54394:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 55337:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 86327:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 49570:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.RequestHandlerProtocol = void 0;
var RequestHandlerProtocol;
(function(RequestHandlerProtocol) {
    RequestHandlerProtocol["HTTP_0_9"] = "http/0.9";
    RequestHandlerProtocol["HTTP_1_0"] = "http/1.0";
    RequestHandlerProtocol["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol = exports.RequestHandlerProtocol || (exports.RequestHandlerProtocol = {}));


/***/ }),

/***/ 43292:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 82602:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 7016:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 19027:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 10805:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));


/***/ }),

/***/ 95969:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.parseUrl = void 0;
const querystring_parser_1 = __webpack_require__(32541);
const parseUrl = (url)=>{
    if (typeof url === "string") {
        return (0, exports.parseUrl)(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
        query = (0, querystring_parser_1.parseQueryString)(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query
    };
};
exports.parseUrl = parseUrl;


/***/ }),

/***/ 18210:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromString = exports.fromArrayBuffer = void 0;
const is_array_buffer_1 = __webpack_require__(45220);
const buffer_1 = __webpack_require__(14300);
const fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset)=>{
    if (!(0, is_array_buffer_1.isArrayBuffer)(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return buffer_1.Buffer.from(input, offset, length);
};
exports.fromArrayBuffer = fromArrayBuffer;
const fromString = (input, encoding)=>{
    if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? buffer_1.Buffer.from(input, encoding) : buffer_1.Buffer.from(input);
};
exports.fromString = fromString;


/***/ }),

/***/ 37814:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toHex = exports.fromHex = void 0;
const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for(let i = 0; i < 256; i++){
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for(let i = 0; i < encoded.length; i += 2){
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        } else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
}
exports.fromHex = fromHex;
function toHex(bytes) {
    let out = "";
    for(let i = 0; i < bytes.byteLength; i++){
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}
exports.toHex = toHex;


/***/ }),

/***/ 20362:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(57782), exports);


/***/ }),

/***/ 57782:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizeProvider = void 0;
const normalizeProvider = (input)=>{
    if (typeof input === "function") return input;
    const promisified = Promise.resolve(input);
    return ()=>promisified;
};
exports.normalizeProvider = normalizeProvider;


/***/ }),

/***/ 60378:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.escapeUriPath = void 0;
const escape_uri_1 = __webpack_require__(12635);
const escapeUriPath = (uri)=>uri.split("/").map(escape_uri_1.escapeUri).join("/");
exports.escapeUriPath = escapeUriPath;


/***/ }),

/***/ 12635:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.escapeUri = void 0;
const escapeUri = (uri)=>encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
exports.escapeUri = escapeUri;
const hexEncode = (c)=>`%${c.charCodeAt(0).toString(16).toUpperCase()}`;


/***/ }),

/***/ 89521:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(12635), exports);
tslib_1.__exportStar(__webpack_require__(60378), exports);


/***/ }),

/***/ 30436:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromUtf8 = void 0;
const util_buffer_from_1 = __webpack_require__(18210);
const fromUtf8 = (input)=>{
    const buf = (0, util_buffer_from_1.fromString)(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};
exports.fromUtf8 = fromUtf8;


/***/ }),

/***/ 3278:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const tslib_1 = __webpack_require__(87422);
tslib_1.__exportStar(__webpack_require__(30436), exports);
tslib_1.__exportStar(__webpack_require__(98788), exports);
tslib_1.__exportStar(__webpack_require__(24971), exports);


/***/ }),

/***/ 98788:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toUint8Array = void 0;
const fromUtf8_1 = __webpack_require__(30436);
const toUint8Array = (data)=>{
    if (typeof data === "string") {
        return (0, fromUtf8_1.fromUtf8)(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};
exports.toUint8Array = toUint8Array;


/***/ }),

/***/ 24971:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toUtf8 = void 0;
const util_buffer_from_1 = __webpack_require__(18210);
const toUtf8 = (input)=>(0, util_buffer_from_1.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 87422:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
/** @deprecated */ function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
/** @deprecated */ function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources
});


/***/ })

};
;