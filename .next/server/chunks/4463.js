exports.id = 4463;
exports.ids = [4463];
exports.modules = {

/***/ 47037:
/***/ ((module) => {

function t(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var i=getComputedStyle(t,null);return e(i.overflowY,n)||e(i.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function i(t,e,n,i,r,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-i:l>e&&d<n||o<t&&d>n?l-e+r:0}module.exports=function(e,r){var o=window,l=r.scrollMode,d=r.block,f=r.inline,h=r.boundary,u=r.skipOverflowHiddenElements,s="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var c,a,g=document.scrollingElement||document.documentElement,m=[],p=e;t(p)&&s(p);){if((p=null==(a=(c=p).parentElement)?c.getRootNode().host||null:a)===g){m.push(p);break}null!=p&&p===document.body&&n(p)&&!n(document.documentElement)||null!=p&&n(p,u)&&m.push(p)}for(var w=o.visualViewport?o.visualViewport.width:innerWidth,v=o.visualViewport?o.visualViewport.height:innerHeight,W=window.scrollX||pageXOffset,H=window.scrollY||pageYOffset,b=e.getBoundingClientRect(),y=b.height,E=b.width,M=b.top,V=b.right,x=b.bottom,I=b.left,C="start"===d||"nearest"===d?M:"end"===d?x:M+y/2,R="center"===f?I+E/2:"end"===f?V:I,T=[],k=0;k<m.length;k++){var B=m[k],D=B.getBoundingClientRect(),O=D.height,X=D.width,Y=D.top,L=D.right,S=D.bottom,j=D.left;if("if-needed"===l&&M>=0&&I>=0&&x<=v&&V<=w&&M>=Y&&x<=S&&I>=j&&V<=L)return T;var N=getComputedStyle(B),q=parseInt(N.borderLeftWidth,10),z=parseInt(N.borderTopWidth,10),A=parseInt(N.borderRightWidth,10),F=parseInt(N.borderBottomWidth,10),G=0,J=0,K="offsetWidth"in B?B.offsetWidth-B.clientWidth-q-A:0,P="offsetHeight"in B?B.offsetHeight-B.clientHeight-z-F:0,Q="offsetWidth"in B?0===B.offsetWidth?0:X/B.offsetWidth:0,U="offsetHeight"in B?0===B.offsetHeight?0:O/B.offsetHeight:0;if(g===B)G="start"===d?C:"end"===d?C-v:"nearest"===d?i(H,H+v,v,z,F,H+C,H+C+y,y):C-v/2,J="start"===f?R:"center"===f?R-w/2:"end"===f?R-w:i(W,W+w,w,q,A,W+R,W+R+E,E),G=Math.max(0,G+H),J=Math.max(0,J+W);else{G="start"===d?C-Y-z:"end"===d?C-S+F+P:"nearest"===d?i(Y,S,O,z,F+P,C,C+y,y):C-(Y+O/2)+P/2,J="start"===f?R-j-q:"center"===f?R-(j+X/2)+K/2:"end"===f?R-L+A+K:i(j,L,X,q,A+K,R,R+E,E);var Z=B.scrollLeft,$=B.scrollTop;C+=$-(G=Math.max(0,Math.min($+G/U,B.scrollHeight-O/U+P))),R+=Z-(J=Math.max(0,Math.min(Z+J/Q,B.scrollWidth-X/Q+K)))}T.push({el:B,top:G,left:J})}return T};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 96967:
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ 63569:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ }),

/***/ 72141:
/***/ (() => {



/***/ }),

/***/ 61645:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useAsync = useAsync;
exports.withAsync = withAsync;

var _extends2 = _interopRequireDefault(__webpack_require__(43259));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));

var _lodash = _interopRequireDefault(__webpack_require__(63569));

var _propTypes = _interopRequireDefault(__webpack_require__(55601));

var _react = _interopRequireWildcard(__webpack_require__(18038));

var _useForceUpdate = _interopRequireDefault(__webpack_require__(63202));

var _usePrevious = _interopRequireDefault(__webpack_require__(54565));

var _propTypes2 = __webpack_require__(87561);

var _utils = __webpack_require__(4165);

var _excluded = ["allowNew", "delay", "emptyLabel", "isLoading", "minLength", "onInputChange", "onSearch", "options", "promptText", "searchText", "useCache"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var propTypes = {
  /**
   * Delay, in milliseconds, before performing search.
   */
  delay: _propTypes["default"].number,

  /**
   * Whether or not a request is currently pending. Necessary for the
   * container to know when new results are available.
   */
  isLoading: _propTypes["default"].bool.isRequired,

  /**
   * Number of input characters that must be entered before showing results.
   */
  minLength: _propTypes["default"].number,

  /**
   * Callback to perform when the search is executed.
   */
  onSearch: _propTypes["default"].func.isRequired,

  /**
   * Options to be passed to the typeahead. Will typically be the query
   * results, but can also be initial default options.
   */
  options: _propTypes["default"].arrayOf(_propTypes2.optionType),

  /**
   * Message displayed in the menu when there is no user input.
   */
  promptText: _propTypes["default"].node,

  /**
   * Message displayed in the menu while the request is pending.
   */
  searchText: _propTypes["default"].node,

  /**
   * Whether or not the component should cache query results.
   */
  useCache: _propTypes["default"].bool
};

/**
 * Logic that encapsulates common behavior and functionality around
 * asynchronous searches, including:
 *
 *  - Debouncing user input
 *  - Optional query caching
 *  - Search prompt and empty results behaviors
 */
function useAsync(props) {
  var allowNew = props.allowNew,
      _props$delay = props.delay,
      delay = _props$delay === void 0 ? 200 : _props$delay,
      emptyLabel = props.emptyLabel,
      isLoading = props.isLoading,
      _props$minLength = props.minLength,
      minLength = _props$minLength === void 0 ? 2 : _props$minLength,
      onInputChange = props.onInputChange,
      onSearch = props.onSearch,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      _props$promptText = props.promptText,
      promptText = _props$promptText === void 0 ? 'Type to search...' : _props$promptText,
      _props$searchText = props.searchText,
      searchText = _props$searchText === void 0 ? 'Searching...' : _props$searchText,
      _props$useCache = props.useCache,
      useCache = _props$useCache === void 0 ? true : _props$useCache,
      otherProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var cacheRef = (0, _react.useRef)({});
  var handleSearchDebouncedRef = (0, _react.useRef)(null);
  var queryRef = (0, _react.useRef)(props.defaultInputValue || '');
  var forceUpdate = (0, _useForceUpdate["default"])();
  var prevProps = (0, _usePrevious["default"])(props);
  var handleSearch = (0, _react.useCallback)(function (query) {
    queryRef.current = query;

    if (!query || minLength && query.length < minLength) {
      return;
    } // Use cached results, if applicable.


    if (useCache && cacheRef.current[query]) {
      // Re-render the component with the cached results.
      forceUpdate();
      return;
    } // Perform the search.


    onSearch(query);
  }, [forceUpdate, minLength, onSearch, useCache]); // Set the debounced search function.

  (0, _react.useEffect)(function () {
    handleSearchDebouncedRef.current = (0, _lodash["default"])(handleSearch, delay);
    return function () {
      handleSearchDebouncedRef.current && handleSearchDebouncedRef.current.cancel();
    };
  }, [delay, handleSearch]);
  (0, _react.useEffect)(function () {
    // Ensure that we've gone from a loading to a completed state. Otherwise
    // an empty response could get cached if the component updates during the
    // request (eg: if the parent re-renders for some reason).
    if (!isLoading && prevProps && prevProps.isLoading && useCache) {
      cacheRef.current[queryRef.current] = options;
    }
  });

  var getEmptyLabel = function getEmptyLabel() {
    if (!queryRef.current.length) {
      return promptText;
    }

    if (isLoading) {
      return searchText;
    }

    return emptyLabel;
  };

  var handleInputChange = (0, _react.useCallback)(function (query, e) {
    onInputChange && onInputChange(query, e);
    handleSearchDebouncedRef.current && handleSearchDebouncedRef.current(query);
  }, [onInputChange]);
  var cachedQuery = cacheRef.current[queryRef.current];
  return _objectSpread(_objectSpread({}, otherProps), {}, {
    // Disable custom selections during a search if `allowNew` isn't a function.
    allowNew: (0, _utils.isFunction)(allowNew) ? allowNew : allowNew && !isLoading,
    emptyLabel: getEmptyLabel(),
    isLoading: isLoading,
    minLength: minLength,
    onInputChange: handleInputChange,
    options: useCache && cachedQuery ? cachedQuery : options
  });
}
/* istanbul ignore next */


function withAsync(Component) {
  (0, _utils.warn)(false, 'Warning: `withAsync` is deprecated and will be removed in the next ' + 'major version. Use `useAsync` instead.');
  var AsyncTypeahead = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, props, useAsync(props), {
      ref: ref
    }));
  });
  AsyncTypeahead.displayName = "withAsync(".concat((0, _utils.getDisplayName)(Component), ")"); // @ts-ignore

  AsyncTypeahead.propTypes = propTypes;
  return AsyncTypeahead;
}

/***/ }),

/***/ 38810:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useItem = useItem;
exports.withItem = withItem;

var _extends2 = _interopRequireDefault(__webpack_require__(43259));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));

var _propTypes = _interopRequireDefault(__webpack_require__(55601));

var _react = _interopRequireWildcard(__webpack_require__(18038));

var _scrollIntoViewIfNeeded = _interopRequireDefault(__webpack_require__(14674));

var _Context = __webpack_require__(23268);

var _utils = __webpack_require__(4165);

var _propTypes2 = __webpack_require__(87561);

var _excluded = ["label", "onClick", "option", "position"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var propTypes = {
  option: _propTypes2.optionType.isRequired,
  position: _propTypes["default"].number
};

function useItem(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      option = _ref.option,
      position = _ref.position,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useTypeaheadContext = (0, _Context.useTypeaheadContext)(),
      activeIndex = _useTypeaheadContext.activeIndex,
      id = _useTypeaheadContext.id,
      isOnlyResult = _useTypeaheadContext.isOnlyResult,
      onActiveItemChange = _useTypeaheadContext.onActiveItemChange,
      onInitialItemChange = _useTypeaheadContext.onInitialItemChange,
      onMenuItemClick = _useTypeaheadContext.onMenuItemClick,
      setItem = _useTypeaheadContext.setItem;

  var itemRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (position === 0) {
      onInitialItemChange(option);
    }
  });
  (0, _react.useEffect)(function () {
    if (position === activeIndex) {
      onActiveItemChange(option); // Automatically scroll the menu as the user keys through it.

      var node = itemRef.current;
      node && (0, _scrollIntoViewIfNeeded["default"])(node, {
        block: 'nearest',
        boundary: node.parentNode,
        inline: 'nearest',
        scrollMode: 'if-needed'
      });
    }
  });
  var handleClick = (0, _react.useCallback)(function (e) {
    onMenuItemClick(option, e);
    onClick && onClick(e);
  }, [onClick, onMenuItemClick, option]);
  var active = isOnlyResult || activeIndex === position; // Update the item's position in the item stack.

  setItem(option, position);
  return _objectSpread(_objectSpread({}, props), {}, {
    active: active,
    'aria-label': label,
    'aria-selected': active,
    id: (0, _utils.getMenuItemId)(id, position),
    onClick: handleClick,
    onMouseDown: _utils.preventInputBlur,
    ref: itemRef,
    role: 'option'
  });
}
/* istanbul ignore next */


function withItem(Component) {
  (0, _utils.warn)(false, 'Warning: `withItem` is deprecated and will be removed in the next ' + 'major version. Use `useItem` instead.');

  var WrappedMenuItem = function WrappedMenuItem(props) {
    return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, props, useItem(props)));
  };

  WrappedMenuItem.displayName = "withItem(".concat((0, _utils.getDisplayName)(Component), ")");
  WrappedMenuItem.propTypes = propTypes;
  return WrappedMenuItem;
}

/***/ }),

/***/ 47847:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useToken = useToken;
exports.withToken = withToken;

var _extends2 = _interopRequireDefault(__webpack_require__(43259));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));

var _propTypes = _interopRequireDefault(__webpack_require__(55601));

var _react = _interopRequireWildcard(__webpack_require__(18038));

var _useRootClose = _interopRequireDefault(__webpack_require__(89935));

var _utils = __webpack_require__(4165);

var _propTypes2 = __webpack_require__(87561);

var _excluded = ["onBlur", "onClick", "onFocus", "onRemove", "option"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var propTypes = {
  onBlur: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onRemove: _propTypes["default"].func,
  option: _propTypes2.optionType.isRequired
};

function useToken(_ref) {
  var onBlur = _ref.onBlur,
      onClick = _ref.onClick,
      onFocus = _ref.onFocus,
      onRemove = _ref.onRemove,
      option = _ref.option,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      rootElement = _useState4[0],
      attachRef = _useState4[1];

  var handleBlur = function handleBlur(e) {
    setActive(false);
    onBlur && onBlur(e);
  };

  var handleClick = function handleClick(e) {
    setActive(true);
    onClick && onClick(e);
  };

  var handleFocus = function handleFocus(e) {
    setActive(true);
    onFocus && onFocus(e);
  };

  var handleRemove = function handleRemove() {
    onRemove && onRemove(option);
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'Backspace' && active) {
      // Prevent browser from going back.
      e.preventDefault();
      handleRemove();
    }
  };

  (0, _useRootClose["default"])(rootElement, handleBlur, _objectSpread(_objectSpread({}, props), {}, {
    disabled: !active
  }));
  return {
    active: active,
    onBlur: handleBlur,
    onClick: handleClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onRemove: (0, _utils.isFunction)(onRemove) ? handleRemove : undefined,
    ref: attachRef
  };
}
/* istanbul ignore next */


function withToken(Component) {
  (0, _utils.warn)(false, 'Warning: `withToken` is deprecated and will be removed in the next ' + 'major version. Use `useToken` instead.');
  var displayName = "withToken(".concat((0, _utils.getDisplayName)(Component), ")");

  var WrappedToken = function WrappedToken(props) {
    return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, props, useToken(props)));
  };

  WrappedToken.displayName = displayName;
  WrappedToken.propTypes = propTypes;
  return WrappedToken;
}

/***/ }),

/***/ 88524:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(43259));

var _react = _interopRequireWildcard(__webpack_require__(18038));

var _async = __webpack_require__(61645);

var _Typeahead = _interopRequireDefault(__webpack_require__(42751));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AsyncTypeahead = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_Typeahead["default"], (0, _extends2["default"])({}, (0, _async.useAsync)(props), {
    ref: ref
  }));
});
var _default = AsyncTypeahead;
exports["default"] = _default;

/***/ }),

/***/ 50220:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _AsyncTypeahead["default"];
  }
}));

var _AsyncTypeahead = _interopRequireWildcard(__webpack_require__(88524));

Object.keys(_AsyncTypeahead).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _AsyncTypeahead[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AsyncTypeahead[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 60826:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(43259));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));

var _classnames = _interopRequireDefault(__webpack_require__(89367));

var _propTypes = _interopRequireDefault(__webpack_require__(55601));

var _react = _interopRequireDefault(__webpack_require__(18038));

var _utils = __webpack_require__(4165);

var _propTypes2 = __webpack_require__(87561);

var _excluded = ["className", "label", "onClick", "onKeyDown", "size"];
var propTypes = {
  label: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  size: _propTypes2.sizeType
};
var defaultProps = {
  label: 'Clear'
};

/**
 * ClearButton
 *
 * http://getbootstrap.com/css/#helper-classes-close
 */
var ClearButton = function ClearButton(_ref) {
  var className = _ref.className,
      label = _ref.label,
      _onClick = _ref.onClick,
      _onKeyDown = _ref.onKeyDown,
      size = _ref.size,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({}, props, {
    "aria-label": label,
    className: (0, _classnames["default"])('close', 'btn-close', 'rbt-close', {
      'rbt-close-lg': (0, _utils.isSizeLarge)(size),
      'rbt-close-sm': (0, _utils.isSizeSmall)(size)
    }, className),
    onClick: function onClick(e) {
      e.stopPropagation();
      _onClick && _onClick(e);
    },
    onKeyDown: function onKeyDown(e) {
      // Prevent browser from navigating back.
      if (e.key === 'Backspace') {
        e.preventDefault();
      }

      _onKeyDown && _onKeyDown(e);
    },
    type: "button"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    "aria-hidden": "true",
    className: "rbt-close-content"
  }, "\xD7"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only visually-hidden"
  }, label));
};

ClearButton.propTypes = propTypes;
ClearButton.defaultProps = defaultProps;
var _default = ClearButton;
exports["default"] = _default;

/***/ }),

/***/ 8090:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _ClearButton["default"];
  }
}));

var _ClearButton = _interopRequireWildcard(__webpack_require__(60826));

Object.keys(_ClearButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ClearButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ClearButton[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 82922:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(55601));

var _react = _interopRequireDefault(__webpack_require__(18038));

var _utils = __webpack_require__(4165);

var propTypes = {
  children: _propTypes["default"].string.isRequired,
  highlightClassName: _propTypes["default"].string,
  search: _propTypes["default"].string.isRequired
};
var defaultProps = {
  highlightClassName: 'rbt-highlight-text'
};

/**
 * Stripped-down version of https://github.com/helior/react-highlighter
 *
 * Results are already filtered by the time the component is used internally so
 * we can safely ignore case and diacritical marks for the purposes of matching.
 */
var Highlighter = function Highlighter(_ref) {
  var children = _ref.children,
      highlightClassName = _ref.highlightClassName,
      search = _ref.search;

  if (!search || !children) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
  }

  var matchCount = 0;
  var remaining = children;
  var highlighterChildren = [];

  while (remaining) {
    var bounds = (0, _utils.getMatchBounds)(remaining, search); // No match anywhere in the remaining string, stop.

    if (!bounds) {
      highlighterChildren.push(remaining);
      break;
    } // Capture the string that leads up to a match.


    var nonMatch = remaining.slice(0, bounds.start);

    if (nonMatch) {
      highlighterChildren.push(nonMatch);
    } // Capture the matching string.


    var match = remaining.slice(bounds.start, bounds.end);
    highlighterChildren.push( /*#__PURE__*/_react["default"].createElement("mark", {
      className: highlightClassName,
      key: matchCount
    }, match));
    matchCount += 1; // And if there's anything left over, continue the loop.

    remaining = remaining.slice(bounds.end);
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, highlighterChildren);
};

Highlighter.propTypes = propTypes;
Highlighter.defaultProps = defaultProps;
var _default = Highlighter;
exports["default"] = _default;

/***/ }),

/***/ 45864:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _Highlighter["default"];
  }
}));

var _Highlighter = _interopRequireWildcard(__webpack_require__(82922));

Object.keys(_Highlighter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Highlighter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Highlighter[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 45454:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useHint = exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(18038));

var _Context = __webpack_require__(23268);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// IE doesn't seem to get the composite computed value (eg: 'padding',
// 'borderStyle', etc.), so generate these from the individual values.
function interpolateStyle(styles, attr) {
  var subattr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  // Title-case the sub-attribute.
  if (subattr) {
    /* eslint-disable-next-line no-param-reassign */
    subattr = subattr.replace(subattr[0], subattr[0].toUpperCase());
  }

  return ['Top', 'Right', 'Bottom', 'Left'].map(function (dir) {
    return styles["".concat(attr).concat(dir).concat(subattr)];
  }).join(' ');
}

function copyStyles(inputNode, hintNode) {
  var inputStyle = window.getComputedStyle(inputNode);
  /* eslint-disable no-param-reassign */

  hintNode.style.borderStyle = interpolateStyle(inputStyle, 'border', 'style');
  hintNode.style.borderWidth = interpolateStyle(inputStyle, 'border', 'width');
  hintNode.style.fontSize = inputStyle.fontSize;
  hintNode.style.fontWeight = inputStyle.fontWeight;
  hintNode.style.height = inputStyle.height;
  hintNode.style.lineHeight = inputStyle.lineHeight;
  hintNode.style.margin = interpolateStyle(inputStyle, 'margin');
  hintNode.style.padding = interpolateStyle(inputStyle, 'padding');
  /* eslint-enable no-param-reassign */
}

var useHint = function useHint() {
  var _useTypeaheadContext = (0, _Context.useTypeaheadContext)(),
      hintText = _useTypeaheadContext.hintText,
      inputNode = _useTypeaheadContext.inputNode;

  var hintRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (inputNode && hintRef.current) {
      copyStyles(inputNode, hintRef.current);
    }
  });
  return {
    hintRef: hintRef,
    hintText: hintText
  };
};

exports.useHint = useHint;

var Hint = function Hint(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var _useHint = useHint(),
      hintRef = _useHint.hintRef,
      hintText = _useHint.hintText;

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flex: 1,
      height: '100%',
      position: 'relative'
    }
  }, children, /*#__PURE__*/_react["default"].createElement("input", {
    "aria-hidden": true,
    className: "rbt-input-hint",
    ref: hintRef,
    readOnly: true,
    style: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      boxShadow: 'none',
      color: 'rgba(0, 0, 0, 0.54)',
      left: 0,
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      width: '100%'
    },
    tabIndex: -1,
    value: hintText
  }));
};

var _default = Hint;
exports["default"] = _default;

/***/ }),

/***/ 53341:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _Hint["default"];
  }
}));

var _Hint = _interopRequireWildcard(__webpack_require__(45454));

Object.keys(_Hint).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Hint[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Hint[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 33019:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(43259));

var _classnames = _interopRequireDefault(__webpack_require__(89367));

var _react = _interopRequireWildcard(__webpack_require__(18038));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Input = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({}, props, {
    className: (0, _classnames["default"])('rbt-input-main', props.className),
    ref: ref
  }));
});
var _default = Input;
exports["default"] = _default;

/***/ }),

/***/ 85863:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _Input["default"];
  }
}));

var _Input = _interopRequireWildcard(__webpack_require__(33019));

Object.keys(_Input).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Input[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Input[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 22476:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(55601));

var _react = _interopRequireDefault(__webpack_require__(18038));

var propTypes = {
  label: _propTypes["default"].string
};
var defaultProps = {
  label: 'Loading...'
};

var Loader = function Loader(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "rbt-loader spinner-border spinner-border-sm",
    role: "status"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only visually-hidden"
  }, label));
};

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;
var _default = Loader;
exports["default"] = _default;

/***/ }),

/***/ 89056:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _Loader["default"];
  }
}));

var _Loader = _interopRequireWildcard(__webpack_require__(22476));

Object.keys(_Loader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Loader[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Loader[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 98627:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));

var _extends2 = _interopRequireDefault(__webpack_require__(43259));

var _classnames = _interopRequireDefault(__webpack_require__(89367));

var _propTypes = _interopRequireDefault(__webpack_require__(55601));

var _react = _interopRequireWildcard(__webpack_require__(18038));

var _MenuItem = __webpack_require__(80065);

var _utils = __webpack_require__(4165);

var _propTypes2 = __webpack_require__(87561);

var _excluded = ["emptyLabel", "innerRef", "maxHeight", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var MenuDivider = function MenuDivider() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-divider",
    role: "separator"
  });
};

var MenuHeader = function MenuHeader(props) {
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
    _react["default"].createElement("div", (0, _extends2["default"])({}, props, {
      className: "dropdown-header",
      role: "heading"
    }))
  );
};

var propTypes = {
  'aria-label': _propTypes["default"].string,

  /**
   * Message to display in the menu if there are no valid results.
   */
  emptyLabel: _propTypes["default"].node,

  /**
   * Needed for accessibility.
   */
  id: (0, _propTypes2.checkPropType)(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]), _propTypes2.isRequiredForA11y),

  /**
   * Maximum height of the dropdown menu.
   */
  maxHeight: _propTypes["default"].string
};
var defaultProps = {
  'aria-label': 'menu-options'
};

/**
 * Menu component that handles empty state when passed a set of results.
 */
var Menu = function Menu(_ref) {
  var _ref$emptyLabel = _ref.emptyLabel,
      emptyLabel = _ref$emptyLabel === void 0 ? 'No matches found.' : _ref$emptyLabel,
      innerRef = _ref.innerRef,
      _ref$maxHeight = _ref.maxHeight,
      maxHeight = _ref$maxHeight === void 0 ? '300px' : _ref$maxHeight,
      style = _ref.style,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var children = _react.Children.count(props.children) === 0 ? /*#__PURE__*/_react["default"].createElement(_MenuItem.BaseMenuItem, {
    disabled: true,
    role: "option"
  }, emptyLabel) : props.children;
  return (
    /*#__PURE__*/

    /* eslint-disable jsx-a11y/interactive-supports-focus */
    _react["default"].createElement("div", (0, _extends2["default"])({}, props, {
      className: (0, _classnames["default"])('rbt-menu', 'dropdown-menu', 'show', props.className),
      onMouseDown: // Prevent input from blurring when clicking on the menu scrollbar.
      _utils.preventInputBlur,
      ref: innerRef,
      role: "listbox",
      style: _objectSpread(_objectSpread({}, style), {}, {
        display: 'block',
        maxHeight: maxHeight,
        overflow: 'auto'
      })
    }), children)
    /* eslint-enable jsx-a11y/interactive-supports-focus */

  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.Divider = MenuDivider;
Menu.Header = MenuHeader;
var _default = Menu;
exports["default"] = _default;

/***/ }),

/***/ 68307:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _Menu["default"];
  }
}));

var _Menu = _interopRequireWildcard(__webpack_require__(98627));

Object.keys(_Menu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Menu[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Menu[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 9081:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BaseMenuItem = void 0;
exports["default"] = MenuItem;

var _extends2 = _interopRequireDefault(__webpack_require__(43259));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));

var _classnames = _interopRequireDefault(__webpack_require__(89367));

var _react = _interopRequireWildcard(__webpack_require__(18038));

var _item = __webpack_require__(38810);

var _excluded = ["active", "children", "className", "disabled", "onClick"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BaseMenuItem = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      _onClick = _ref.onClick,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("a", (0, _extends2["default"])({}, props, {
    className: (0, _classnames["default"])('dropdown-item', {
      active: active,
      disabled: disabled
    }, className),
    href: props.href || '#',
    onClick: function onClick(e) {
      e.preventDefault();
      !disabled && _onClick && _onClick(e);
    },
    ref: ref
  }), children);
});
exports.BaseMenuItem = BaseMenuItem;

function MenuItem(props) {
  return /*#__PURE__*/_react["default"].createElement(BaseMenuItem, (0, _item.useItem)(props));
}

/***/ }),

/***/ 80065:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _MenuItem["default"];
  }
}));

var _MenuItem = _interopRequireWildcard(__webpack_require__(9081));

Object.keys(_MenuItem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MenuItem[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MenuItem[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 23317:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));

var _propTypes = _interopRequireDefault(__webpack_require__(55601));

var _useOverlay = _interopRequireDefault(__webpack_require__(31647));

var _constants = __webpack_require__(34235);

var _utils = __webpack_require__(4165);

var _excluded = ["referenceElement", "isMenuShown"];
// `Element` is not defined during server-side rendering, so shim it here.

/* istanbul ignore next */
var SafeElement = typeof Element === 'undefined' ? _utils.noop : Element;
var propTypes = {
  /**
   * Specify menu alignment. The default value is `justify`, which makes the
   * menu as wide as the input and truncates long values. Specifying `left`
   * or `right` will align the menu to that side and the width will be
   * determined by the length of menu item values.
   */
  align: _propTypes["default"].oneOf(_constants.ALIGN_VALUES),
  children: _propTypes["default"].func.isRequired,

  /**
   * Specify whether the menu should appear above the input.
   */
  dropup: _propTypes["default"].bool,

  /**
   * Whether or not to automatically adjust the position of the menu when it
   * reaches the viewport boundaries.
   */
  flip: _propTypes["default"].bool,
  isMenuShown: _propTypes["default"].bool,
  positionFixed: _propTypes["default"].bool,
  // @ts-ignore
  referenceElement: _propTypes["default"].instanceOf(SafeElement)
};

var Overlay = function Overlay(_ref) {
  var referenceElement = _ref.referenceElement,
      isMenuShown = _ref.isMenuShown,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var overlayProps = (0, _useOverlay["default"])(referenceElement, props);

  if (!isMenuShown) {
    return null;
  }

  return props.children(overlayProps);
};

Overlay.propTypes = propTypes;
var _default = Overlay;
exports["default"] = _default;

/***/ }),

/***/ 70726:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useOverlay: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _Overlay["default"];
  }
}));
Object.defineProperty(exports, "useOverlay", ({
  enumerable: true,
  get: function get() {
    return _useOverlay["default"];
  }
}));

var _Overlay = _interopRequireWildcard(__webpack_require__(23317));

Object.keys(_Overlay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Overlay[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Overlay[key];
    }
  });
});

var _useOverlay = _interopRequireDefault(__webpack_require__(31647));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 31647:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getModifiers = getModifiers;
exports.getPlacement = getPlacement;
exports.useOverlay = useOverlay;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));

var _react = __webpack_require__(18038);

var _reactPopper = __webpack_require__(57306);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var setPopperWidth = {
  enabled: true,
  fn: function fn(data) {
    // eslint-disable-next-line no-param-reassign
    data.state.styles.popper.width = "".concat(data.state.rects.reference.width, "px");
  },
  name: 'setPopperWidth',
  phase: 'write'
};

function getModifiers(props) {
  var modifiers = [{
    enabled: !!props.flip,
    name: 'flip'
  }];

  if (props.align !== 'right' && props.align !== 'left') {
    modifiers.push(setPopperWidth);
  }

  return modifiers;
}

function getPlacement(props) {
  var x = props.align === 'right' ? 'end' : 'start';
  var y = props.dropup ? 'top' : 'bottom';
  return "".concat(y, "-").concat(x);
}

function useOverlay(referenceElement, options) {
  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      popperElement = _useState2[0],
      attachRef = _useState2[1];

  var _usePopper = (0, _reactPopper.usePopper)(referenceElement, popperElement, {
    modifiers: getModifiers(options),
    placement: getPlacement(options),
    strategy: options.positionFixed ? 'fixed' : 'absolute'
  }),
      attributes = _usePopper.attributes,
      styles = _usePopper.styles,
      forceUpdate = _usePopper.forceUpdate;

  var refElementHeight = referenceElement === null || referenceElement === void 0 ? void 0 : referenceElement.offsetHeight; // Re-position the popper if the height of the reference element changes.
  // Exclude `forceUpdate` from dependencies since it changes with each render.

  (0, _react.useEffect)(function () {
    forceUpdate && forceUpdate();
  }, [refElementHeight]); // eslint-disable-line

  return _objectSpread(_objectSpread({}, attributes.popper), {}, {
    innerRef: attachRef,
    style: styles.popper
  });
}

var _default = useOverlay;
exports["default"] = _default;

/***/ }),

/***/ 1908:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));

var _useRootClose = _interopRequireDefault(__webpack_require__(4983));

var _excluded = ["children", "onRootClose"];

function RootClose(_ref) {
  var children = _ref.children,
      onRootClose = _ref.onRootClose,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var rootRef = (0, _useRootClose["default"])(onRootClose, props);
  return children(rootRef);
}

var _default = RootClose;
exports["default"] = _default;

/***/ }),

/***/ 4432:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useRootClose: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _RootClose["default"];
  }
}));
Object.defineProperty(exports, "useRootClose", ({
  enumerable: true,
  get: function get() {
    return _useRootClose["default"];
  }
}));

var _RootClose = _interopRequireWildcard(__webpack_require__(1908));

Object.keys(_RootClose).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _RootClose[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _RootClose[key];
    }
  });
});

var _useRootClose = _interopRequireDefault(__webpack_require__(4983));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 4983:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__(18038);

var _useRootClose2 = _interopRequireDefault(__webpack_require__(89935));

function useRootClose(onRootClose, options) {
  var rootElementRef = (0, _react.useRef)(null);
  (0, _useRootClose2["default"])(rootElementRef.current, onRootClose, options);
  return rootElementRef;
}

var _default = useRootClose;
exports["default"] = _default;

/***/ }),

/***/ 48830:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));

var _extends2 = _interopRequireDefault(__webpack_require__(43259));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));

var _classnames = _interopRequireDefault(__webpack_require__(89367));

var _react = _interopRequireWildcard(__webpack_require__(18038));

var _ClearButton = _interopRequireDefault(__webpack_require__(8090));

var _token = __webpack_require__(47847);

var _utils = __webpack_require__(4165);

var _excluded = ["active", "children", "className", "onRemove", "tabIndex"],
    _excluded2 = ["children", "option", "readOnly"],
    _excluded3 = ["ref"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var InteractiveToken = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      onRemove = _ref.onRemove,
      tabIndex = _ref.tabIndex,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, props, {
    className: (0, _classnames["default"])('rbt-token', 'rbt-token-removeable', {
      'rbt-token-active': !!active
    }, className),
    ref: ref,
    tabIndex: tabIndex || 0
  }), children, /*#__PURE__*/_react["default"].createElement(_ClearButton["default"], {
    className: "rbt-token-remove-button",
    label: "Remove",
    onClick: onRemove,
    tabIndex: -1
  }));
});

var StaticToken = function StaticToken(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      disabled = _ref2.disabled,
      href = _ref2.href;
  var classnames = (0, _classnames["default"])('rbt-token', {
    'rbt-token-disabled': disabled
  }, className);

  if (href && !disabled) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      className: classnames,
      href: href
    }, children);
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classnames
  }, children);
};

/**
 * Individual token component, generally displayed within the
 * `TypeaheadInputMulti` component, but can also be rendered on its own.
 */
var Token = function Token(_ref3) {
  var children = _ref3.children,
      option = _ref3.option,
      readOnly = _ref3.readOnly,
      props = (0, _objectWithoutProperties2["default"])(_ref3, _excluded2);

  var _useToken = (0, _token.useToken)(_objectSpread(_objectSpread({}, props), {}, {
    option: option
  })),
      ref = _useToken.ref,
      tokenProps = (0, _objectWithoutProperties2["default"])(_useToken, _excluded3);

  var child = /*#__PURE__*/_react["default"].createElement("div", {
    className: "rbt-token-label"
  }, children);

  return !props.disabled && !readOnly && (0, _utils.isFunction)(tokenProps.onRemove) ? /*#__PURE__*/_react["default"].createElement(InteractiveToken, (0, _extends2["default"])({}, props, tokenProps, {
    ref: ref
  }), child) : /*#__PURE__*/_react["default"].createElement(StaticToken, props, child);
};

var _default = Token;
exports["default"] = _default;

/***/ }),

/***/ 1519:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _Token["default"];
  }
}));

var _Token = _interopRequireWildcard(__webpack_require__(48830));

Object.keys(_Token).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Token[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Token[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 22380:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));

var _createClass2 = _interopRequireDefault(__webpack_require__(43977));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(49687));

var _inherits2 = _interopRequireDefault(__webpack_require__(22261));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(7880));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(35091));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));

var _extends2 = _interopRequireDefault(__webpack_require__(43259));

var _classnames = _interopRequireDefault(__webpack_require__(89367));

var _propTypes = _interopRequireDefault(__webpack_require__(55601));

var _react = _interopRequireWildcard(__webpack_require__(18038));

var _Typeahead = _interopRequireDefault(__webpack_require__(99383));

var _ClearButton = _interopRequireDefault(__webpack_require__(8090));

var _Loader = _interopRequireDefault(__webpack_require__(89056));

var _Overlay = _interopRequireDefault(__webpack_require__(70726));

var _RootClose = _interopRequireDefault(__webpack_require__(4432));

var _Token = _interopRequireDefault(__webpack_require__(48830));

var _TypeaheadInputMulti = _interopRequireDefault(__webpack_require__(366));

var _TypeaheadInputSingle = _interopRequireDefault(__webpack_require__(70744));

var _TypeaheadMenu = _interopRequireDefault(__webpack_require__(13626));

var _utils = __webpack_require__(4165);

var _propTypes2 = __webpack_require__(87561);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var propTypes = {
  /**
   * Displays a button to clear the input when there are selections.
   */
  clearButton: _propTypes["default"].bool,

  /**
   * Props to be applied directly to the input. `onBlur`, `onChange`,
   * `onFocus`, and `onKeyDown` are ignored.
   */
  inputProps: (0, _propTypes2.checkPropType)(_propTypes["default"].object, _propTypes2.inputPropsType),

  /**
   * Bootstrap 4 only. Adds the `is-invalid` classname to the `form-control`.
   */
  isInvalid: _propTypes["default"].bool,

  /**
   * Indicate whether an asynchronous data fetch is happening.
   */
  isLoading: _propTypes["default"].bool,

  /**
   * Bootstrap 4 only. Adds the `is-valid` classname to the `form-control`.
   */
  isValid: _propTypes["default"].bool,

  /**
   * Callback for custom input rendering.
   */
  renderInput: _propTypes["default"].func,

  /**
   * Callback for custom menu rendering.
   */
  renderMenu: _propTypes["default"].func,

  /**
   * Callback for custom menu rendering.
   */
  renderToken: _propTypes["default"].func,

  /**
   * Specifies the size of the input.
   */
  size: _propTypes2.sizeType
};
var defaultProps = {
  isLoading: false
};

var defaultRenderMenu = function defaultRenderMenu(results, menuProps, props) {
  return /*#__PURE__*/_react["default"].createElement(_TypeaheadMenu["default"], (0, _extends2["default"])({}, menuProps, {
    labelKey: props.labelKey,
    options: results,
    text: props.text
  }));
};

var defaultRenderToken = function defaultRenderToken(option, props, idx) {
  return /*#__PURE__*/_react["default"].createElement(_Token["default"], {
    disabled: props.disabled,
    key: idx,
    onRemove: props.onRemove,
    option: option,
    tabIndex: props.tabIndex
  }, (0, _utils.getOptionLabel)(option, props.labelKey));
};

var overlayPropKeys = ['align', 'dropup', 'flip', 'positionFixed'];

function getOverlayProps(props) {
  return (0, _utils.pick)(props, overlayPropKeys);
}

var TypeaheadComponent = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(TypeaheadComponent, _React$Component);

  var _super = _createSuper(TypeaheadComponent);

  function TypeaheadComponent() {
    var _this;

    (0, _classCallCheck2["default"])(this, TypeaheadComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_referenceElement", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "referenceElementRef", function (referenceElement) {
      _this._referenceElement = referenceElement;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderInput", function (inputProps, props) {
      var _this$props = _this.props,
          isInvalid = _this$props.isInvalid,
          isValid = _this$props.isValid,
          multiple = _this$props.multiple,
          renderInput = _this$props.renderInput,
          renderToken = _this$props.renderToken,
          size = _this$props.size;

      if ((0, _utils.isFunction)(renderInput)) {
        return renderInput(inputProps, props);
      }

      var commonProps = _objectSpread(_objectSpread({}, inputProps), {}, {
        isInvalid: isInvalid,
        isValid: isValid,
        size: size
      });

      if (!multiple) {
        return /*#__PURE__*/_react["default"].createElement(_TypeaheadInputSingle["default"], commonProps);
      }

      var labelKey = props.labelKey,
          onRemove = props.onRemove,
          selected = props.selected;
      return /*#__PURE__*/_react["default"].createElement(_TypeaheadInputMulti["default"], (0, _extends2["default"])({}, commonProps, {
        placeholder: selected.length ? '' : inputProps.placeholder,
        selected: selected
      }), selected.map(function (option, idx) {
        return (renderToken || defaultRenderToken)(option, _objectSpread(_objectSpread({}, commonProps), {}, {
          labelKey: labelKey,
          onRemove: onRemove
        }), idx);
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderMenu", function (results, menuProps, props) {
      var _this$props2 = _this.props,
          emptyLabel = _this$props2.emptyLabel,
          id = _this$props2.id,
          maxHeight = _this$props2.maxHeight,
          newSelectionPrefix = _this$props2.newSelectionPrefix,
          paginationText = _this$props2.paginationText,
          renderMenu = _this$props2.renderMenu,
          renderMenuItemChildren = _this$props2.renderMenuItemChildren;
      return (renderMenu || defaultRenderMenu)(results, _objectSpread(_objectSpread({}, menuProps), {}, {
        emptyLabel: emptyLabel,
        id: id,
        maxHeight: maxHeight,
        newSelectionPrefix: newSelectionPrefix,
        paginationText: paginationText,
        renderMenuItemChildren: renderMenuItemChildren
      }), props);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderAux", function (_ref) {
      var onClear = _ref.onClear,
          selected = _ref.selected;
      var _this$props3 = _this.props,
          clearButton = _this$props3.clearButton,
          disabled = _this$props3.disabled,
          isLoading = _this$props3.isLoading,
          size = _this$props3.size;
      var content;

      if (isLoading) {
        content = /*#__PURE__*/_react["default"].createElement(_Loader["default"], null);
      } else if (clearButton && !disabled && selected.length) {
        content = /*#__PURE__*/_react["default"].createElement(_ClearButton["default"], {
          onClick: onClear,
          onMouseDown: _utils.preventInputBlur,
          size: size
        });
      }

      return content ? /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('rbt-aux', {
          'rbt-aux-lg': (0, _utils.isSizeLarge)(size)
        })
      }, content) : null;
    });
    return _this;
  }

  (0, _createClass2["default"])(TypeaheadComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          instanceRef = _this$props4.instanceRef,
          open = _this$props4.open,
          options = _this$props4.options,
          style = _this$props4.style;
      return /*#__PURE__*/_react["default"].createElement(_Typeahead["default"], (0, _extends2["default"])({}, this.props, {
        options: options,
        ref: instanceRef
      }), function (props) {
        var hideMenu = props.hideMenu,
            isMenuShown = props.isMenuShown,
            results = props.results;

        var auxContent = _this2._renderAux(props);

        return /*#__PURE__*/_react["default"].createElement(_RootClose["default"], {
          disabled: open || !isMenuShown,
          onRootClose: hideMenu
        }, function (ref) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: (0, _classnames["default"])('rbt', {
              'has-aux': !!auxContent,
              'is-invalid': _this2.props.isInvalid,
              'is-valid': _this2.props.isValid
            }, className),
            ref: ref,
            style: _objectSpread(_objectSpread({}, style), {}, {
              outline: 'none',
              position: 'relative'
            }),
            tabIndex: -1
          }, _this2._renderInput(_objectSpread(_objectSpread({}, props.getInputProps(_this2.props.inputProps)), {}, {
            referenceElementRef: _this2.referenceElementRef
          }), props), /*#__PURE__*/_react["default"].createElement(_Overlay["default"], (0, _extends2["default"])({}, getOverlayProps(_this2.props), {
            isMenuShown: isMenuShown,
            referenceElement: _this2._referenceElement
          }), function (menuProps) {
            return _this2._renderMenu(results, menuProps, props);
          }), auxContent, (0, _utils.isFunction)(children) ? children(props) : children);
        });
      });
    }
  }]);
  return TypeaheadComponent;
}(_react["default"].Component);

(0, _defineProperty2["default"])(TypeaheadComponent, "propTypes", propTypes);
(0, _defineProperty2["default"])(TypeaheadComponent, "defaultProps", defaultProps);

var _default = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(TypeaheadComponent, (0, _extends2["default"])({}, props, {
    instanceRef: ref
  }));
});

exports["default"] = _default;

/***/ }),

/***/ 42751:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _Typeahead["default"];
  }
}));

var _Typeahead = _interopRequireWildcard(__webpack_require__(22380));

Object.keys(_Typeahead).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Typeahead[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Typeahead[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 34928:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(43259));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));

var _classnames = _interopRequireDefault(__webpack_require__(89367));

var _react = _interopRequireDefault(__webpack_require__(18038));

var _Hint = _interopRequireDefault(__webpack_require__(53341));

var _Input = _interopRequireDefault(__webpack_require__(85863));

var _utils = __webpack_require__(4165);

var _excluded = ["children", "className", "inputClassName", "inputRef", "referenceElementRef", "selected"];

function TypeaheadInputMulti(props) {
  var wrapperRef = _react["default"].useRef(null);

  var inputElem = _react["default"].useRef(null);

  var _propsWithBsClassName = (0, _utils.propsWithBsClassName)(props),
      children = _propsWithBsClassName.children,
      className = _propsWithBsClassName.className,
      inputClassName = _propsWithBsClassName.inputClassName,
      inputRef = _propsWithBsClassName.inputRef,
      referenceElementRef = _propsWithBsClassName.referenceElementRef,
      selected = _propsWithBsClassName.selected,
      rest = (0, _objectWithoutProperties2["default"])(_propsWithBsClassName, _excluded);

  function getInputRef(input) {
    inputElem.current = input;
    props.inputRef(input);
  }
  /**
   * Forward click or focus events on the container element to the input.
   */


  function handleContainerClickOrFocus(e) {
    // Don't focus the input if it's disabled.
    if (props.disabled) {
      e.currentTarget.blur();
      return;
    }

    var inputNode = inputElem.current;

    if (!inputNode || // Ignore if the clicked element is a child of the container, ie: a token
    // or the input itself.
    e.currentTarget.contains(e.target) && e.currentTarget !== e.target) {
      return;
    }

    if ((0, _utils.isSelectable)(inputNode)) {
      // Move cursor to the end if the user clicks outside the actual input.
      inputNode.selectionStart = inputNode.value.length;
    }

    inputNode.focus();
  }

  function handleKeyDown(e) {
    if (e.key === 'Backspace' && selected.length && !props.value) {
      var _wrapperRef$current;

      // Prevent browser from going back.
      e.preventDefault(); // If the input is selected and there is no text, focus the last
      // token when the user hits backspace.

      var wrapperChildren = (_wrapperRef$current = wrapperRef.current) === null || _wrapperRef$current === void 0 ? void 0 : _wrapperRef$current.children;

      if (wrapperChildren !== null && wrapperChildren !== void 0 && wrapperChildren.length) {
        var lastToken = wrapperChildren[wrapperChildren.length - 2];
        lastToken === null || lastToken === void 0 ? void 0 : lastToken.focus();
      }
    }

    props.onKeyDown && props.onKeyDown(e);
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('rbt-input-multi', {
      disabled: props.disabled
    }, className),
    onClick: handleContainerClickOrFocus,
    onFocus: handleContainerClickOrFocus,
    ref: referenceElementRef,
    tabIndex: -1
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "rbt-input-wrapper",
    ref: wrapperRef
  }, children, /*#__PURE__*/_react["default"].createElement(_Hint["default"], null, /*#__PURE__*/_react["default"].createElement(_Input["default"], (0, _extends2["default"])({}, rest, {
    className: inputClassName,
    onKeyDown: handleKeyDown,
    ref: getInputRef,
    style: {
      backgroundColor: 'transparent',
      border: 0,
      boxShadow: 'none',
      cursor: 'inherit',
      outline: 'none',
      padding: 0,
      width: '100%',
      zIndex: 1
    }
  })))));
}

var _default = TypeaheadInputMulti;
exports["default"] = _default;

/***/ }),

/***/ 366:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _TypeaheadInputMulti["default"];
  }
}));

var _TypeaheadInputMulti = _interopRequireWildcard(__webpack_require__(34928));

Object.keys(_TypeaheadInputMulti).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TypeaheadInputMulti[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TypeaheadInputMulti[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 14989:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(43259));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));

var _react = _interopRequireDefault(__webpack_require__(18038));

var _Hint = _interopRequireDefault(__webpack_require__(53341));

var _Input = _interopRequireDefault(__webpack_require__(85863));

var _utils = __webpack_require__(4165);

var _excluded = ["inputRef", "referenceElementRef"];

var TypeaheadInputSingle = function TypeaheadInputSingle(_ref) {
  var inputRef = _ref.inputRef,
      referenceElementRef = _ref.referenceElementRef,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_Hint["default"], null, /*#__PURE__*/_react["default"].createElement(_Input["default"], (0, _extends2["default"])({}, (0, _utils.propsWithBsClassName)(props), {
    ref: function ref(node) {
      inputRef(node);
      referenceElementRef(node);
    }
  })));
};

var _default = TypeaheadInputSingle;
exports["default"] = _default;

/***/ }),

/***/ 70744:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _TypeaheadInputSingle["default"];
  }
}));

var _TypeaheadInputSingle = _interopRequireWildcard(__webpack_require__(14989));

Object.keys(_TypeaheadInputSingle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TypeaheadInputSingle[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TypeaheadInputSingle[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 70762:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(43259));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));

var _propTypes = _interopRequireDefault(__webpack_require__(55601));

var _react = _interopRequireDefault(__webpack_require__(18038));

var _Highlighter = _interopRequireDefault(__webpack_require__(45864));

var _Menu = _interopRequireDefault(__webpack_require__(68307));

var _MenuItem = _interopRequireDefault(__webpack_require__(80065));

var _utils = __webpack_require__(4165);

var _excluded = ["labelKey", "newSelectionPrefix", "options", "paginationText", "renderMenuItemChildren", "text"];
var propTypes = {
  /**
   * Provides the ability to specify a prefix before the user-entered text to
   * indicate that the selection will be new. No-op unless `allowNew={true}`.
   */
  newSelectionPrefix: _propTypes["default"].node,

  /**
   * Prompt displayed when large data sets are paginated.
   */
  paginationText: _propTypes["default"].node,

  /**
   * Provides a hook for customized rendering of menu item contents.
   */
  renderMenuItemChildren: _propTypes["default"].func
};
var defaultProps = {
  newSelectionPrefix: 'New selection: ',
  paginationText: 'Display additional results...',
  renderMenuItemChildren: function renderMenuItemChildren(option, props) {
    return /*#__PURE__*/_react["default"].createElement(_Highlighter["default"], {
      search: props.text
    }, (0, _utils.getOptionLabel)(option, props.labelKey));
  }
};

var TypeaheadMenu = function TypeaheadMenu(props) {
  var labelKey = props.labelKey,
      newSelectionPrefix = props.newSelectionPrefix,
      options = props.options,
      paginationText = props.paginationText,
      renderMenuItemChildren = props.renderMenuItemChildren,
      text = props.text,
      menuProps = (0, _objectWithoutProperties2["default"])(props, _excluded);

  var renderMenuItem = function renderMenuItem(option, position) {
    var label = (0, _utils.getOptionLabel)(option, labelKey);
    var menuItemProps = {
      disabled: !!(0, _utils.getOptionProperty)(option, 'disabled'),
      label: label,
      option: option,
      position: position
    };

    if ((0, _utils.getOptionProperty)(option, 'customOption')) {
      return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], (0, _extends2["default"])({}, menuItemProps, {
        className: "rbt-menu-custom-option",
        key: position,
        label: label
      }), newSelectionPrefix, /*#__PURE__*/_react["default"].createElement(_Highlighter["default"], {
        search: text
      }, label));
    }

    if ((0, _utils.getOptionProperty)(option, 'paginationOption')) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
        key: "pagination-option-divider"
      }, /*#__PURE__*/_react["default"].createElement(_Menu["default"].Divider, null), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], (0, _extends2["default"])({}, menuItemProps, {
        className: "rbt-menu-pagination-option",
        label: // TODO: Fix how (aria-)labels are passed to `MenuItem`.
        // `paginationText` can be a ReactNode.
        (0, _utils.isString)(paginationText) ? paginationText : ''
      }), paginationText));
    }

    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], (0, _extends2["default"])({}, menuItemProps, {
      key: position
    }), renderMenuItemChildren(option, props, position));
  };

  return /*#__PURE__*/_react["default"].createElement(_Menu["default"], (0, _extends2["default"])({}, menuProps, {
    key: // Force a re-render if the text changes to ensure that menu
    // positioning updates correctly.
    text
  }), options.map(renderMenuItem));
};

TypeaheadMenu.propTypes = propTypes;
TypeaheadMenu.defaultProps = defaultProps;
var _default = TypeaheadMenu;
exports["default"] = _default;

/***/ }),

/***/ 13626:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _TypeaheadMenu["default"];
  }
}));

var _TypeaheadMenu = _interopRequireWildcard(__webpack_require__(70762));

Object.keys(_TypeaheadMenu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TypeaheadMenu[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TypeaheadMenu[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 34235:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SIZES = exports.DEFAULT_LABELKEY = exports.ALIGN_VALUES = void 0;
var ALIGN_VALUES = ['justify', 'left', 'right'];
exports.ALIGN_VALUES = ALIGN_VALUES;
var DEFAULT_LABELKEY = 'label';
exports.DEFAULT_LABELKEY = DEFAULT_LABELKEY;
var SIZES = ['lg', 'sm'];
exports.SIZES = SIZES;

/***/ }),

/***/ 23268:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useTypeaheadContext = exports.defaultContext = exports.TypeaheadContext = void 0;

var _react = __webpack_require__(18038);

var _utils = __webpack_require__(4165);

var defaultContext = {
  activeIndex: -1,
  hintText: '',
  id: '',
  initialItem: null,
  inputNode: null,
  isOnlyResult: false,
  onActiveItemChange: _utils.noop,
  onAdd: _utils.noop,
  onInitialItemChange: _utils.noop,
  onMenuItemClick: _utils.noop,
  setItem: _utils.noop
};
exports.defaultContext = defaultContext;
var TypeaheadContext = /*#__PURE__*/(0, _react.createContext)(defaultContext);
exports.TypeaheadContext = TypeaheadContext;

var useTypeaheadContext = function useTypeaheadContext() {
  return (0, _react.useContext)(TypeaheadContext);
};

exports.useTypeaheadContext = useTypeaheadContext;

/***/ }),

/***/ 99383:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(43259));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));

var _createClass2 = _interopRequireDefault(__webpack_require__(43977));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(49687));

var _inherits2 = _interopRequireDefault(__webpack_require__(22261));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(7880));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(35091));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));

var _fastDeepEqual = _interopRequireDefault(__webpack_require__(96967));

var _propTypes = _interopRequireDefault(__webpack_require__(55601));

var _react = _interopRequireDefault(__webpack_require__(18038));

var _TypeaheadManager = _interopRequireDefault(__webpack_require__(7608));

var _TypeaheadState = __webpack_require__(82721);

var _propTypes2 = __webpack_require__(87561);

var _utils = __webpack_require__(4165);

var _constants = __webpack_require__(34235);

var _excluded = ["onChange"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var propTypes = {
  /**
   * Allows the creation of new selections on the fly. Note that any new items
   * will be added to the list of selections, but not the list of original
   * options unless handled as such by `Typeahead`'s parent.
   *
   * If a function is specified, it will be used to determine whether a custom
   * option should be included. The return value should be true or false.
   */
  allowNew: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func]),

  /**
   * Autofocus the input when the component initially mounts.
   */
  autoFocus: _propTypes["default"].bool,

  /**
   * Whether or not filtering should be case-sensitive.
   */
  caseSensitive: (0, _propTypes2.checkPropType)(_propTypes["default"].bool, _propTypes2.caseSensitiveType),

  /**
   * The initial value displayed in the text input.
   */
  defaultInputValue: (0, _propTypes2.checkPropType)(_propTypes["default"].string, _propTypes2.defaultInputValueType),

  /**
   * Whether or not the menu is displayed upon initial render.
   */
  defaultOpen: _propTypes["default"].bool,

  /**
   * Specify any pre-selected options. Use only if you want the component to
   * be uncontrolled.
   */
  defaultSelected: (0, _propTypes2.checkPropType)(_propTypes["default"].arrayOf(_propTypes2.optionType), _propTypes2.defaultSelectedType),

  /**
   * Either an array of fields in `option` to search, or a custom filtering
   * callback.
   */
  filterBy: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string.isRequired), _propTypes["default"].func]),

  /**
   * Highlights the menu item if there is only one result and allows selecting
   * that item by hitting enter. Does not work with `allowNew`.
   */
  highlightOnlyResult: (0, _propTypes2.checkPropType)(_propTypes["default"].bool, _propTypes2.highlightOnlyResultType),

  /**
   * An html id attribute, required for assistive technologies such as screen
   * readers.
   */
  id: (0, _propTypes2.checkPropType)(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]), _propTypes2.isRequiredForA11y),

  /**
   * Whether the filter should ignore accents and other diacritical marks.
   */
  ignoreDiacritics: (0, _propTypes2.checkPropType)(_propTypes["default"].bool, _propTypes2.ignoreDiacriticsType),

  /**
   * Specify the option key to use for display or a function returning the
   * display string. By default, the selector will use the `label` key.
   */
  labelKey: (0, _propTypes2.checkPropType)(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]), _propTypes2.labelKeyType),

  /**
   * Maximum number of results to display by default. Mostly done for
   * performance reasons so as not to render too many DOM nodes in the case of
   * large data sets.
   */
  maxResults: _propTypes["default"].number,

  /**
   * Number of input characters that must be entered before showing results.
   */
  minLength: _propTypes["default"].number,

  /**
   * Whether or not multiple selections are allowed.
   */
  multiple: _propTypes["default"].bool,

  /**
   * Invoked when the input is blurred. Receives an event.
   */
  onBlur: _propTypes["default"].func,

  /**
   * Invoked whenever items are added or removed. Receives an array of the
   * selected options.
   */
  onChange: _propTypes["default"].func,

  /**
   * Invoked when the input is focused. Receives an event.
   */
  onFocus: _propTypes["default"].func,

  /**
   * Invoked when the input value changes. Receives the string value of the
   * input.
   */
  onInputChange: _propTypes["default"].func,

  /**
   * Invoked when a key is pressed. Receives an event.
   */
  onKeyDown: _propTypes["default"].func,

  /**
   * Invoked when menu visibility changes.
   */
  onMenuToggle: _propTypes["default"].func,

  /**
   * Invoked when the pagination menu item is clicked. Receives an event.
   */
  onPaginate: _propTypes["default"].func,

  /**
   * Whether or not the menu should be displayed. `undefined` allows the
   * component to control visibility, while `true` and `false` show and hide
   * the menu, respectively.
   */
  open: _propTypes["default"].bool,

  /**
   * Full set of options, including pre-selected options. Must either be an
   * array of objects (recommended) or strings.
   */
  options: _propTypes["default"].arrayOf(_propTypes2.optionType).isRequired,

  /**
   * Give user the ability to display additional results if the number of
   * results exceeds `maxResults`.
   */
  paginate: _propTypes["default"].bool,

  /**
   * The selected option(s) displayed in the input. Use this prop if you want
   * to control the component via its parent.
   */
  selected: (0, _propTypes2.checkPropType)(_propTypes["default"].arrayOf(_propTypes2.optionType), _propTypes2.selectedType)
};
var defaultProps = {
  allowNew: false,
  autoFocus: false,
  caseSensitive: false,
  defaultInputValue: '',
  defaultOpen: false,
  defaultSelected: [],
  filterBy: [],
  highlightOnlyResult: false,
  ignoreDiacritics: true,
  labelKey: _constants.DEFAULT_LABELKEY,
  maxResults: 100,
  minLength: 0,
  multiple: false,
  onBlur: _utils.noop,
  onFocus: _utils.noop,
  onInputChange: _utils.noop,
  onKeyDown: _utils.noop,
  onMenuToggle: _utils.noop,
  onPaginate: _utils.noop,
  paginate: true
};

/**
 * Manually trigger the input's change event.
 * https://stackoverflow.com/questions/23892547/what-is-the-best-way-to-trigger-onchange-event-in-react-js/46012210#46012210
 */
function triggerInputChange(input, value) {
  var inputValue = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
  inputValue && inputValue.set && inputValue.set.call(input, value);
  var e = new Event('input', {
    bubbles: true
  });
  input.dispatchEvent(e);
}

var Typeahead = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Typeahead, _React$Component);

  var _super = _createSuper(Typeahead);

  function Typeahead() {
    var _this;

    (0, _classCallCheck2["default"])(this, Typeahead);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", (0, _TypeaheadState.getInitialState)(_this.props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputNode", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isMenuShown", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "items", []);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "blur", function () {
      _this.inputNode && _this.inputNode.blur();

      _this.hideMenu();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "clear", function () {
      _this.setState(_TypeaheadState.clearTypeahead);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "focus", function () {
      _this.inputNode && _this.inputNode.focus();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getInput", function () {
      return _this.inputNode;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputRef", function (inputNode) {
      _this.inputNode = inputNode;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setItem", function (item, position) {
      _this.items[position] = item;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hideMenu", function () {
      _this.setState(_TypeaheadState.hideMenu);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMenu", function () {
      _this.setState(_TypeaheadState.toggleMenu);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleActiveIndexChange", function (activeIndex) {
      _this.setState(function (state) {
        return {
          activeIndex: activeIndex,
          activeItem: activeIndex >= 0 ? state.activeItem : undefined
        };
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleActiveItemChange", function (activeItem) {
      // Don't update the active item if it hasn't changed.
      if (!(0, _fastDeepEqual["default"])(activeItem, _this.state.activeItem)) {
        _this.setState({
          activeItem: activeItem
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleBlur", function (e) {
      e.persist();

      _this.setState({
        isFocused: false
      }, function () {
        return _this.props.onBlur(e);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleChange", function (selected) {
      _this.props.onChange && _this.props.onChange(selected);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleClear", function () {
      _this.inputNode && triggerInputChange(_this.inputNode, '');

      _this.setState(_TypeaheadState.clearTypeahead, function () {
        // Change handler is automatically triggered for single selections but
        // not multi-selections.
        if (_this.props.multiple) {
          _this._handleChange([]);
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleClick", function (e) {
      var _this$props$inputProp;

      e.persist();
      var onClick = (_this$props$inputProp = _this.props.inputProps) === null || _this$props$inputProp === void 0 ? void 0 : _this$props$inputProp.onClick;

      _this.setState(_TypeaheadState.clickOrFocusInput, function () {
        return (0, _utils.isFunction)(onClick) && onClick(e);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleFocus", function (e) {
      e.persist();

      _this.setState(_TypeaheadState.clickOrFocusInput, function () {
        return _this.props.onFocus(e);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleInitialItemChange", function (initialItem) {
      // Don't update the initial item if it hasn't changed.
      if (!(0, _fastDeepEqual["default"])(initialItem, _this.state.initialItem)) {
        _this.setState({
          initialItem: initialItem
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleInputChange", function (e) {
      e.persist();
      var text = e.currentTarget.value;
      var _this$props = _this.props,
          multiple = _this$props.multiple,
          onInputChange = _this$props.onInputChange; // Clear selections when the input value changes in single-select mode.

      var shouldClearSelections = _this.state.selected.length && !multiple;

      _this.setState(function (state, props) {
        var _getInitialState = (0, _TypeaheadState.getInitialState)(props),
            activeIndex = _getInitialState.activeIndex,
            activeItem = _getInitialState.activeItem,
            shownResults = _getInitialState.shownResults;

        return {
          activeIndex: activeIndex,
          activeItem: activeItem,
          selected: shouldClearSelections ? [] : state.selected,
          showMenu: true,
          shownResults: shownResults,
          text: text
        };
      }, function () {
        onInputChange(text, e);
        shouldClearSelections && _this._handleChange([]);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleKeyDown", function (e) {
      var activeItem = _this.state.activeItem; // Skip most actions when the menu is hidden.

      if (!_this.isMenuShown) {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          _this.setState({
            showMenu: true
          });
        }

        _this.props.onKeyDown(e);

        return;
      }

      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowDown':
          // Prevent input cursor from going to the beginning when pressing up.
          e.preventDefault();

          _this._handleActiveIndexChange((0, _utils.getUpdatedActiveIndex)(_this.state.activeIndex, e.key, _this.items));

          break;

        case 'Enter':
          // Prevent form submission while menu is open.
          e.preventDefault();
          activeItem && _this._handleMenuItemSelect(activeItem, e);
          break;

        case 'Escape':
        case 'Tab':
          // ESC simply hides the menu. TAB will blur the input and move focus to
          // the next item; hide the menu so it doesn't gain focus.
          _this.hideMenu();

          break;

        default:
          break;
      }

      _this.props.onKeyDown(e);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleMenuItemSelect", function (option, e) {
      if ((0, _utils.getOptionProperty)(option, 'paginationOption')) {
        _this._handlePaginate(e);
      } else {
        _this._handleSelectionAdd(option);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handlePaginate", function (e) {
      e.persist();

      _this.setState(function (state, props) {
        return {
          shownResults: state.shownResults + props.maxResults
        };
      }, function () {
        return _this.props.onPaginate(e, _this.state.shownResults);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleSelectionAdd", function (option) {
      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          labelKey = _this$props2.labelKey;
      var selected;
      var selection = option;
      var text; // Add a unique id to the custom selection. Avoid doing this in `render` so
      // the id doesn't increment every time.

      if (!(0, _utils.isString)(selection) && selection.customOption) {
        selection = _objectSpread(_objectSpread({}, selection), {}, {
          id: (0, _utils.uniqueId)('new-id-')
        });
      }

      if (multiple) {
        // If multiple selections are allowed, add the new selection to the
        // existing selections.
        selected = _this.state.selected.concat(selection);
        text = '';
      } else {
        // If only a single selection is allowed, replace the existing selection
        // with the new one.
        selected = [selection];
        text = (0, _utils.getOptionLabel)(selection, labelKey);
      }

      _this.setState(function (state, props) {
        return _objectSpread(_objectSpread({}, (0, _TypeaheadState.hideMenu)(state, props)), {}, {
          initialItem: selection,
          selected: selected,
          text: text
        });
      }, function () {
        return _this._handleChange(selected);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleSelectionRemove", function (selection) {
      var selected = _this.state.selected.filter(function (option) {
        return !(0, _fastDeepEqual["default"])(option, selection);
      }); // Make sure the input stays focused after the item is removed.


      _this.focus();

      _this.setState(function (state, props) {
        return _objectSpread(_objectSpread({}, (0, _TypeaheadState.hideMenu)(state, props)), {}, {
          selected: selected
        });
      }, function () {
        return _this._handleChange(selected);
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Typeahead, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.autoFocus && this.focus();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props3 = this.props,
          labelKey = _this$props3.labelKey,
          multiple = _this$props3.multiple,
          selected = _this$props3.selected;
      (0, _utils.validateSelectedPropChange)(selected, prevProps.selected); // Sync selections in state with those in props.

      if (selected && !(0, _fastDeepEqual["default"])(selected, prevState.selected)) {
        this.setState({
          selected: selected
        });

        if (!multiple) {
          this.setState({
            text: selected.length ? (0, _utils.getOptionLabel)(selected[0], labelKey) : ''
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          onChange = _this$props4.onChange,
          props = (0, _objectWithoutProperties2["default"])(_this$props4, _excluded);

      var mergedPropsAndState = _objectSpread(_objectSpread({}, props), this.state);

      var filterBy = mergedPropsAndState.filterBy,
          labelKey = mergedPropsAndState.labelKey,
          options = mergedPropsAndState.options,
          paginate = mergedPropsAndState.paginate,
          shownResults = mergedPropsAndState.shownResults,
          text = mergedPropsAndState.text;
      this.isMenuShown = (0, _utils.isShown)(mergedPropsAndState);
      this.items = []; // Reset items on re-render.

      var results = [];

      if (this.isMenuShown) {
        var cb = (0, _utils.isFunction)(filterBy) ? filterBy : _utils.defaultFilterBy;
        results = options.filter(function (option) {
          return cb(option, mergedPropsAndState);
        }); // This must come before results are truncated.

        var shouldPaginate = paginate && results.length > shownResults; // Truncate results if necessary.

        results = (0, _utils.getTruncatedOptions)(results, shownResults); // Add the custom option if necessary.

        if ((0, _utils.addCustomOption)(results, mergedPropsAndState)) {
          results.push((0, _defineProperty2["default"])({
            customOption: true
          }, (0, _utils.getStringLabelKey)(labelKey), text));
        } // Add the pagination item if necessary.


        if (shouldPaginate) {
          var _results$push2;

          results.push((_results$push2 = {}, (0, _defineProperty2["default"])(_results$push2, (0, _utils.getStringLabelKey)(labelKey), ''), (0, _defineProperty2["default"])(_results$push2, "paginationOption", true), _results$push2));
        }
      }

      return /*#__PURE__*/_react["default"].createElement(_TypeaheadManager["default"], (0, _extends2["default"])({}, mergedPropsAndState, {
        hideMenu: this.hideMenu,
        inputNode: this.inputNode,
        inputRef: this.inputRef,
        isMenuShown: this.isMenuShown,
        onActiveItemChange: this._handleActiveItemChange,
        onAdd: this._handleSelectionAdd,
        onBlur: this._handleBlur,
        onChange: this._handleInputChange,
        onClear: this._handleClear,
        onClick: this._handleClick,
        onFocus: this._handleFocus,
        onHide: this.hideMenu,
        onInitialItemChange: this._handleInitialItemChange,
        onKeyDown: this._handleKeyDown,
        onMenuItemClick: this._handleMenuItemSelect,
        onRemove: this._handleSelectionRemove,
        results: results,
        setItem: this.setItem,
        toggleMenu: this.toggleMenu
      }));
    }
  }]);
  return Typeahead;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Typeahead, "propTypes", propTypes);
(0, _defineProperty2["default"])(Typeahead, "defaultProps", defaultProps);
var _default = Typeahead;
exports["default"] = _default;

/***/ }),

/***/ 7608:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));

var _react = _interopRequireWildcard(__webpack_require__(18038));

var _Context = __webpack_require__(23268);

var _utils = __webpack_require__(4165);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var inputPropKeys = ['activeIndex', 'disabled', 'id', 'inputRef', 'isFocused', 'isMenuShown', 'multiple', 'onBlur', 'onChange', 'onClick', 'onFocus', 'onKeyDown', 'placeholder'];
var propKeys = ['activeIndex', 'hideMenu', 'isMenuShown', 'labelKey', 'onClear', 'onHide', 'onRemove', 'results', 'selected', 'text', 'toggleMenu'];
var contextKeys = ['activeIndex', 'id', 'initialItem', 'inputNode', 'onActiveItemChange', 'onAdd', 'onInitialItemChange', 'onMenuItemClick', 'setItem'];

var TypeaheadManager = function TypeaheadManager(props) {
  var allowNew = props.allowNew,
      children = props.children,
      initialItem = props.initialItem,
      isMenuShown = props.isMenuShown,
      onAdd = props.onAdd,
      onInitialItemChange = props.onInitialItemChange,
      onKeyDown = props.onKeyDown,
      onMenuToggle = props.onMenuToggle,
      results = props.results,
      selectHint = props.selectHint;
  var hintText = (0, _utils.getHintText)(props);
  (0, _react.useEffect)(function () {
    // Clear the initial item when there are no results.
    if (!(allowNew || results.length)) {
      onInitialItemChange();
    }
  });
  var isInitialRender = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    onMenuToggle(isMenuShown);
  }, [isMenuShown, onMenuToggle]);

  var handleKeyDown = function handleKeyDown(e) {
    onKeyDown(e);

    if (!initialItem) {
      return;
    }

    var addOnlyResult = e.key === 'Enter' && (0, _utils.getIsOnlyResult)(props);
    var shouldSelectHint = hintText && (0, _utils.defaultSelectHint)(e, selectHint);

    if (addOnlyResult || shouldSelectHint) {
      onAdd(initialItem);
    }
  };

  var childProps = _objectSpread(_objectSpread({}, (0, _utils.pick)(props, propKeys)), {}, {
    getInputProps: (0, _utils.getInputProps)(_objectSpread(_objectSpread({}, (0, _utils.pick)(props, inputPropKeys)), {}, {
      onKeyDown: handleKeyDown,
      value: (0, _utils.getInputText)(props)
    }))
  });

  var contextValue = _objectSpread(_objectSpread({}, (0, _utils.pick)(props, contextKeys)), {}, {
    hintText: hintText,
    isOnlyResult: (0, _utils.getIsOnlyResult)(props)
  });

  return /*#__PURE__*/_react["default"].createElement(_Context.TypeaheadContext.Provider, {
    value: contextValue
  }, (0, _utils.isFunction)(children) ? children(childProps) : children);
};

var _default = TypeaheadManager;
exports["default"] = _default;

/***/ }),

/***/ 82721:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clearTypeahead = clearTypeahead;
exports.clickOrFocusInput = clickOrFocusInput;
exports.getInitialState = getInitialState;
exports.hideMenu = hideMenu;
exports.toggleMenu = toggleMenu;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));

var _utils = __webpack_require__(4165);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function getInitialState(props) {
  var defaultInputValue = props.defaultInputValue,
      defaultOpen = props.defaultOpen,
      defaultSelected = props.defaultSelected,
      maxResults = props.maxResults,
      multiple = props.multiple;
  var selected = props.selected ? props.selected.slice() : defaultSelected.slice();
  var text = defaultInputValue;

  if (!multiple && selected.length) {
    // Set the text if an initial selection is passed in.
    text = (0, _utils.getOptionLabel)(selected[0], props.labelKey);

    if (selected.length > 1) {
      // Limit to 1 selection in single-select mode.
      selected = selected.slice(0, 1);
    }
  }

  return {
    activeIndex: -1,
    activeItem: undefined,
    initialItem: undefined,
    isFocused: false,
    selected: selected,
    showMenu: defaultOpen,
    shownResults: maxResults,
    text: text
  };
}

function clearTypeahead(state, props) {
  return _objectSpread(_objectSpread({}, getInitialState(props)), {}, {
    isFocused: state.isFocused,
    selected: [],
    text: ''
  });
}

function clickOrFocusInput(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isFocused: true,
    showMenu: true
  });
}

function hideMenu(state, props) {
  var _getInitialState = getInitialState(props),
      activeIndex = _getInitialState.activeIndex,
      activeItem = _getInitialState.activeItem,
      initialItem = _getInitialState.initialItem,
      shownResults = _getInitialState.shownResults;

  return _objectSpread(_objectSpread({}, state), {}, {
    activeIndex: activeIndex,
    activeItem: activeItem,
    initialItem: initialItem,
    showMenu: false,
    shownResults: shownResults
  });
}

function toggleMenu(state, props) {
  return state.showMenu ? hideMenu(state, props) : _objectSpread(_objectSpread({}, state), {}, {
    showMenu: true
  });
}

/***/ }),

/***/ 14545:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  AsyncTypeahead: true,
  ClearButton: true,
  Highlighter: true,
  Hint: true,
  useHint: true,
  Input: true,
  Loader: true,
  Menu: true,
  MenuItem: true,
  Token: true,
  Typeahead: true,
  TypeaheadInputMulti: true,
  TypeaheadInputSingle: true,
  TypeaheadMenu: true,
  TypeaheadRef: true
};
Object.defineProperty(exports, "AsyncTypeahead", ({
  enumerable: true,
  get: function get() {
    return _AsyncTypeahead["default"];
  }
}));
Object.defineProperty(exports, "ClearButton", ({
  enumerable: true,
  get: function get() {
    return _ClearButton["default"];
  }
}));
Object.defineProperty(exports, "Highlighter", ({
  enumerable: true,
  get: function get() {
    return _Highlighter["default"];
  }
}));
Object.defineProperty(exports, "Hint", ({
  enumerable: true,
  get: function get() {
    return _Hint["default"];
  }
}));
Object.defineProperty(exports, "Input", ({
  enumerable: true,
  get: function get() {
    return _Input["default"];
  }
}));
Object.defineProperty(exports, "Loader", ({
  enumerable: true,
  get: function get() {
    return _Loader["default"];
  }
}));
Object.defineProperty(exports, "Menu", ({
  enumerable: true,
  get: function get() {
    return _Menu["default"];
  }
}));
Object.defineProperty(exports, "MenuItem", ({
  enumerable: true,
  get: function get() {
    return _MenuItem["default"];
  }
}));
Object.defineProperty(exports, "Token", ({
  enumerable: true,
  get: function get() {
    return _Token["default"];
  }
}));
Object.defineProperty(exports, "Typeahead", ({
  enumerable: true,
  get: function get() {
    return _Typeahead["default"];
  }
}));
Object.defineProperty(exports, "TypeaheadInputMulti", ({
  enumerable: true,
  get: function get() {
    return _TypeaheadInputMulti["default"];
  }
}));
Object.defineProperty(exports, "TypeaheadInputSingle", ({
  enumerable: true,
  get: function get() {
    return _TypeaheadInputSingle["default"];
  }
}));
Object.defineProperty(exports, "TypeaheadMenu", ({
  enumerable: true,
  get: function get() {
    return _TypeaheadMenu["default"];
  }
}));
Object.defineProperty(exports, "TypeaheadRef", ({
  enumerable: true,
  get: function get() {
    return _Typeahead2["default"];
  }
}));
Object.defineProperty(exports, "useHint", ({
  enumerable: true,
  get: function get() {
    return _Hint.useHint;
  }
}));

var _AsyncTypeahead = _interopRequireDefault(__webpack_require__(50220));

var _ClearButton = _interopRequireDefault(__webpack_require__(8090));

var _Highlighter = _interopRequireDefault(__webpack_require__(45864));

var _Hint = _interopRequireWildcard(__webpack_require__(53341));

var _Input = _interopRequireDefault(__webpack_require__(85863));

var _Loader = _interopRequireDefault(__webpack_require__(89056));

var _Menu = _interopRequireWildcard(__webpack_require__(68307));

Object.keys(_Menu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Menu[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Menu[key];
    }
  });
});

var _MenuItem = _interopRequireWildcard(__webpack_require__(80065));

Object.keys(_MenuItem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MenuItem[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MenuItem[key];
    }
  });
});

var _Token = _interopRequireWildcard(__webpack_require__(1519));

Object.keys(_Token).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Token[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Token[key];
    }
  });
});

var _Typeahead = _interopRequireWildcard(__webpack_require__(42751));

Object.keys(_Typeahead).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Typeahead[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Typeahead[key];
    }
  });
});

var _TypeaheadInputMulti = _interopRequireDefault(__webpack_require__(366));

var _TypeaheadInputSingle = _interopRequireDefault(__webpack_require__(70744));

var _TypeaheadMenu = _interopRequireWildcard(__webpack_require__(13626));

Object.keys(_TypeaheadMenu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TypeaheadMenu[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TypeaheadMenu[key];
    }
  });
});

var _async = __webpack_require__(61645);

Object.keys(_async).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _async[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _async[key];
    }
  });
});

var _item = __webpack_require__(38810);

Object.keys(_item).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _item[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _item[key];
    }
  });
});

var _token = __webpack_require__(47847);

Object.keys(_token).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _token[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _token[key];
    }
  });
});

var _Typeahead2 = _interopRequireDefault(__webpack_require__(99383));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 87561:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.caseSensitiveType = caseSensitiveType;
exports.checkPropType = checkPropType;
exports.defaultInputValueType = defaultInputValueType;
exports.defaultSelectedType = defaultSelectedType;
exports.deprecated = deprecated;
exports.highlightOnlyResultType = highlightOnlyResultType;
exports.ignoreDiacriticsType = ignoreDiacriticsType;
exports.inputPropsType = inputPropsType;
exports.isRequiredForA11y = isRequiredForA11y;
exports.labelKeyType = labelKeyType;
exports.optionType = void 0;
exports.selectedType = selectedType;
exports.sizeType = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));

var _propTypes = _interopRequireDefault(__webpack_require__(55601));

var _constants = __webpack_require__(34235);

var _utils = __webpack_require__(4165);

var INPUT_PROPS_BLACKLIST = [{
  alt: 'onBlur',
  prop: 'onBlur'
}, {
  alt: 'onInputChange',
  prop: 'onChange'
}, {
  alt: 'onFocus',
  prop: 'onFocus'
}, {
  alt: 'onKeyDown',
  prop: 'onKeyDown'
}];

var sizeType = _propTypes["default"].oneOf(_constants.SIZES);

exports.sizeType = sizeType;

/**
 * Allows additional warnings or messaging related to prop validation.
 */
function checkPropType(validator, callback) {
  return function (props, propName, componentName) {
    _propTypes["default"].checkPropTypes((0, _defineProperty2["default"])({}, propName, validator), props, 'prop', componentName);

    (0, _utils.isFunction)(callback) && callback(props, propName, componentName);
  };
}

function caseSensitiveType(props) {
  var caseSensitive = props.caseSensitive,
      filterBy = props.filterBy;
  (0, _utils.warn)(!caseSensitive || typeof filterBy !== 'function', 'Your `filterBy` function will override the `caseSensitive` prop.');
}

function deprecated(validator, reason) {
  return function (props, propName, componentName) {
    if (props[propName] != null) {
      (0, _utils.warn)(false, "The `".concat(propName, "` prop is deprecated. ").concat(reason));
    }

    return _propTypes["default"].checkPropTypes((0, _defineProperty2["default"])({}, propName, validator), props, 'prop', componentName);
  };
}

function defaultInputValueType(props) {
  var defaultInputValue = props.defaultInputValue,
      defaultSelected = props.defaultSelected,
      multiple = props.multiple,
      selected = props.selected;
  var name = defaultSelected.length ? 'defaultSelected' : 'selected';
  (0, _utils.warn)(!(!multiple && defaultInputValue && (defaultSelected.length || selected && selected.length)), "`defaultInputValue` will be overridden by the value from `".concat(name, "`."));
}

function defaultSelectedType(props) {
  var defaultSelected = props.defaultSelected,
      multiple = props.multiple;
  (0, _utils.warn)(multiple || defaultSelected.length <= 1, 'You are passing multiple options to the `defaultSelected` prop of a ' + 'Typeahead in single-select mode. The selections will be truncated to a ' + 'single selection.');
}

function highlightOnlyResultType(_ref) {
  var allowNew = _ref.allowNew,
      highlightOnlyResult = _ref.highlightOnlyResult;
  (0, _utils.warn)(!(highlightOnlyResult && allowNew), '`highlightOnlyResult` will not work with `allowNew`.');
}

function ignoreDiacriticsType(props) {
  var filterBy = props.filterBy,
      ignoreDiacritics = props.ignoreDiacritics;
  (0, _utils.warn)(ignoreDiacritics || typeof filterBy !== 'function', 'Your `filterBy` function will override the `ignoreDiacritics` prop.');
}

function inputPropsType(_ref2) {
  var inputProps = _ref2.inputProps;

  if (!(inputProps && Object.prototype.toString.call(inputProps) === '[object Object]')) {
    return;
  } // Blacklisted properties.


  INPUT_PROPS_BLACKLIST.forEach(function (_ref3) {
    var alt = _ref3.alt,
        prop = _ref3.prop;
    var msg = alt ? " Use the top-level `".concat(alt, "` prop instead.") : null;
    (0, _utils.warn)(!inputProps[prop], "The `".concat(prop, "` property of `inputProps` will be ignored.").concat(msg));
  });
}

function isRequiredForA11y(props, propName, componentName) {
  (0, _utils.warn)(props[propName] != null, "The prop `".concat(propName, "` is required to make `").concat(componentName, "` ") + 'accessible for users of assistive technologies such as screen readers.');
}

function labelKeyType(_ref4) {
  var allowNew = _ref4.allowNew,
      labelKey = _ref4.labelKey;
  (0, _utils.warn)(!((0, _utils.isFunction)(labelKey) && allowNew), '`labelKey` must be a string when `allowNew={true}`.');
}

var optionType = _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]);

exports.optionType = optionType;

function selectedType(_ref5) {
  var multiple = _ref5.multiple,
      onChange = _ref5.onChange,
      selected = _ref5.selected;
  (0, _utils.warn)(multiple || !selected || selected.length <= 1, 'You are passing multiple options to the `selected` prop of a Typeahead ' + 'in single-select mode. This may lead to unexpected behaviors or errors.');
  (0, _utils.warn)(!selected || selected && (0, _utils.isFunction)(onChange), 'You provided a `selected` prop without an `onChange` handler. If you ' + 'want the typeahead to be uncontrolled, use `defaultSelected`. ' + 'Otherwise, set `onChange`.');
}

/***/ }),

/***/ 54998:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getOptionLabel = _interopRequireDefault(__webpack_require__(16208));

var _nodash = __webpack_require__(52901);

function addCustomOption(results, props) {
  var allowNew = props.allowNew,
      labelKey = props.labelKey,
      text = props.text;

  if (!allowNew || !text.trim()) {
    return false;
  } // If the consumer has provided a callback, use that to determine whether or
  // not to add the custom option.


  if ((0, _nodash.isFunction)(allowNew)) {
    return allowNew(results, props);
  } // By default, don't add the custom option if there is an exact text match
  // with an existing option.


  return !results.some(function (o) {
    return (0, _getOptionLabel["default"])(o, labelKey) === text;
  });
}

var _default = addCustomOption;
exports["default"] = _default;

/***/ }),

/***/ 611:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = defaultFilterBy;

var _fastDeepEqual = _interopRequireDefault(__webpack_require__(96967));

var _getOptionProperty = _interopRequireDefault(__webpack_require__(25685));

var _nodash = __webpack_require__(52901);

var _stripDiacritics = _interopRequireDefault(__webpack_require__(62892));

var _warn = _interopRequireDefault(__webpack_require__(49858));

function isMatch(input, string, props) {
  var searchStr = input;
  var str = string;

  if (!props.caseSensitive) {
    searchStr = searchStr.toLowerCase();
    str = str.toLowerCase();
  }

  if (props.ignoreDiacritics) {
    searchStr = (0, _stripDiacritics["default"])(searchStr);
    str = (0, _stripDiacritics["default"])(str);
  }

  return str.indexOf(searchStr) !== -1;
}
/**
 * Default algorithm for filtering results.
 */


function defaultFilterBy(option, props) {
  var filterBy = props.filterBy,
      labelKey = props.labelKey,
      multiple = props.multiple,
      selected = props.selected,
      text = props.text; // Don't show selected options in the menu for the multi-select case.

  if (multiple && selected.some(function (o) {
    return (0, _fastDeepEqual["default"])(o, option);
  })) {
    return false;
  }

  if ((0, _nodash.isFunction)(labelKey)) {
    return isMatch(text, labelKey(option), props);
  }

  var fields = filterBy.slice();

  if ((0, _nodash.isString)(labelKey)) {
    // Add the `labelKey` field to the list of fields if it isn't already there.
    if (fields.indexOf(labelKey) === -1) {
      fields.unshift(labelKey);
    }
  }

  if ((0, _nodash.isString)(option)) {
    (0, _warn["default"])(fields.length <= 1, 'You cannot filter by properties when `option` is a string.');
    return isMatch(text, option, props);
  }

  return fields.some(function (field) {
    var value = (0, _getOptionProperty["default"])(option, field);

    if (!(0, _nodash.isString)(value)) {
      (0, _warn["default"])(false, 'Fields passed to `filterBy` should have string values. Value will ' + 'be converted to a string; results may be unexpected.');
      value = String(value);
    }

    return isMatch(text, value, props);
  });
}

/***/ }),

/***/ 3503:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = defaultSelectHint;

var _isSelectable = _interopRequireDefault(__webpack_require__(61344));

function defaultSelectHint(e, selectHint) {
  var shouldSelectHint = false;

  if (e.key === 'ArrowRight') {
    // For selectable input types ("text", "search"), only select the hint if
    // it's at the end of the input value. For non-selectable types ("email",
    // "number"), always select the hint.
    shouldSelectHint = (0, _isSelectable["default"])(e.currentTarget) ? e.currentTarget.selectionStart === e.currentTarget.value.length : true;
  }

  if (e.key === 'Tab') {
    // Prevent input from blurring on TAB.
    e.preventDefault();
    shouldSelectHint = true;
  }

  return selectHint ? selectHint(shouldSelectHint, e) : shouldSelectHint;
}

/***/ }),

/***/ 69249:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getDisplayName;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

/***/ }),

/***/ 31909:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getMatchBounds = _interopRequireDefault(__webpack_require__(60518));

var _getOptionLabel = _interopRequireDefault(__webpack_require__(16208));

var _hasOwnProperty = _interopRequireDefault(__webpack_require__(31502));

var _nodash = __webpack_require__(52901);

function getHintText(_ref) {
  var activeIndex = _ref.activeIndex,
      initialItem = _ref.initialItem,
      isFocused = _ref.isFocused,
      isMenuShown = _ref.isMenuShown,
      labelKey = _ref.labelKey,
      multiple = _ref.multiple,
      selected = _ref.selected,
      text = _ref.text;

  // Don't display a hint under the following conditions:
  if ( // No text entered.
  !text || // The input is not focused.
  !isFocused || // The menu is hidden.
  !isMenuShown || // No item in the menu.
  !initialItem || // The initial item is a custom option.
  !(0, _nodash.isString)(initialItem) && (0, _hasOwnProperty["default"])(initialItem, 'customOption') || // One of the menu items is active.
  activeIndex > -1 || // There's already a selection in single-select mode.
  !!selected.length && !multiple) {
    return '';
  }

  var initialItemStr = (0, _getOptionLabel["default"])(initialItem, labelKey);
  var bounds = (0, _getMatchBounds["default"])(initialItemStr.toLowerCase(), text.toLowerCase());

  if (!(bounds && bounds.start === 0)) {
    return '';
  } // Text matching is case- and accent-insensitive, so to display the hint
  // correctly, splice the input string with the hint string.


  return text + initialItemStr.slice(bounds.end, initialItemStr.length);
}

var _default = getHintText;
exports["default"] = _default;

/***/ }),

/***/ 3094:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));

var _classnames = _interopRequireDefault(__webpack_require__(89367));

var _getMenuItemId = _interopRequireDefault(__webpack_require__(56809));

var _hasOwnProperty = _interopRequireDefault(__webpack_require__(31502));

var _excluded = ["activeIndex", "id", "isFocused", "isMenuShown", "multiple", "onClick", "onFocus", "placeholder"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getInputProps = function getInputProps(_ref) {
  var activeIndex = _ref.activeIndex,
      id = _ref.id,
      isFocused = _ref.isFocused,
      isMenuShown = _ref.isMenuShown,
      multiple = _ref.multiple,
      onClick = _ref.onClick,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return function () {
    var _cx;

    var inputProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var className = (0, _hasOwnProperty["default"])(inputProps, 'className') ? String(inputProps.className) : undefined;
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({
      // These props can be overridden by values in `inputProps`.
      autoComplete: 'off',
      placeholder: placeholder,
      type: 'text'
    }, inputProps), props), {}, {
      'aria-activedescendant': activeIndex >= 0 ? (0, _getMenuItemId["default"])(id, activeIndex) : undefined,
      'aria-autocomplete': 'both',
      'aria-expanded': isMenuShown,
      'aria-haspopup': 'listbox',
      'aria-multiselectable': multiple || undefined,
      'aria-owns': isMenuShown ? id : undefined,
      className: (0, _classnames["default"])((_cx = {}, (0, _defineProperty2["default"])(_cx, className || '', !multiple), (0, _defineProperty2["default"])(_cx, "focus", isFocused), _cx))
    }, multiple && {
      inputClassName: className
    }), {}, {
      onClick: onClick,
      onFocus: onFocus,
      role: 'combobox'
    });
  };
};

var _default = getInputProps;
exports["default"] = _default;

/***/ }),

/***/ 24908:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getOptionLabel = _interopRequireDefault(__webpack_require__(16208));

function getInputText(props) {
  var activeItem = props.activeItem,
      labelKey = props.labelKey,
      multiple = props.multiple,
      selected = props.selected,
      text = props.text;

  if (activeItem) {
    // Display the input value if the pagination item is active.
    return (0, _getOptionLabel["default"])(activeItem, labelKey);
  }

  if (!multiple && selected.length && selected[0]) {
    return (0, _getOptionLabel["default"])(selected[0], labelKey);
  }

  return text;
}

var _default = getInputText;
exports["default"] = _default;

/***/ }),

/***/ 83330:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getOptionProperty = _interopRequireDefault(__webpack_require__(25685));

function getIsOnlyResult(props) {
  var allowNew = props.allowNew,
      highlightOnlyResult = props.highlightOnlyResult,
      results = props.results;

  if (!highlightOnlyResult || allowNew) {
    return false;
  }

  return results.length === 1 && !(0, _getOptionProperty["default"])(results[0], 'disabled');
}

var _default = getIsOnlyResult;
exports["default"] = _default;

/***/ }),

/***/ 60518:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getMatchBounds;
exports.escapeStringRegexp = escapeStringRegexp;

var _invariant = _interopRequireDefault(__webpack_require__(18457));

var _stripDiacritics = _interopRequireDefault(__webpack_require__(62892));

var CASE_INSENSITIVE = 'i';
var COMBINING_MARKS = /[\u0300-\u036F]/;

// Export for testing.
function escapeStringRegexp(str) {
  !(typeof str === 'string') ?  false ? 0 : (0, _invariant["default"])(false) : void 0; // Escape characters with special meaning either inside or outside character
  // sets. Use a simple backslash escape when it’s always valid, and a \unnnn
  // escape when the simpler form would be disallowed by Unicode patterns’
  // stricter grammar.

  return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}

function getMatchBounds(subject, str) {
  var search = new RegExp(escapeStringRegexp((0, _stripDiacritics["default"])(str)), CASE_INSENSITIVE);
  var matches = search.exec((0, _stripDiacritics["default"])(subject));

  if (!matches) {
    return null;
  }

  var start = matches.index;
  var matchLength = matches[0].length; // Account for combining marks, which changes the indices.

  if (COMBINING_MARKS.test(subject)) {
    // Starting at the beginning of the subject string, check for the number of
    // combining marks and increment the start index whenever one is found.
    for (var ii = 0; ii <= start; ii++) {
      if (COMBINING_MARKS.test(subject[ii])) {
        start += 1;
      }
    } // Similarly, increment the length of the match string if it contains a
    // combining mark.


    for (var _ii = start; _ii <= start + matchLength; _ii++) {
      if (COMBINING_MARKS.test(subject[_ii])) {
        matchLength += 1;
      }
    }
  }

  return {
    end: start + matchLength,
    start: start
  };
}

/***/ }),

/***/ 56809:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getMenuItemId;

function getMenuItemId() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var position = arguments.length > 1 ? arguments[1] : undefined;
  return "".concat(id, "-item-").concat(position);
}

/***/ }),

/***/ 16208:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _invariant = _interopRequireDefault(__webpack_require__(18457));

var _getStringLabelKey = _interopRequireDefault(__webpack_require__(91474));

var _hasOwnProperty = _interopRequireDefault(__webpack_require__(31502));

var _nodash = __webpack_require__(52901);

/**
 * Retrieves the display string from an option. Options can be the string
 * themselves, or an object with a defined display string. Anything else throws
 * an error.
 */
function getOptionLabel(option, labelKey) {
  // Handle internally created options first.
  if (!(0, _nodash.isString)(option) && ((0, _hasOwnProperty["default"])(option, 'paginationOption') || (0, _hasOwnProperty["default"])(option, 'customOption'))) {
    return option[(0, _getStringLabelKey["default"])(labelKey)];
  }

  var optionLabel;

  if ((0, _nodash.isFunction)(labelKey)) {
    optionLabel = labelKey(option);
  } else if ((0, _nodash.isString)(option)) {
    optionLabel = option;
  } else {
    // `option` is an object and `labelKey` is a string.
    optionLabel = option[labelKey];
  }

  !(0, _nodash.isString)(optionLabel) ?  false ? 0 : (0, _invariant["default"])(false) : void 0;
  return optionLabel;
}

var _default = getOptionLabel;
exports["default"] = _default;

/***/ }),

/***/ 25685:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getOptionProperty;

var _nodash = __webpack_require__(52901);

function getOptionProperty(option, key) {
  if ((0, _nodash.isString)(option)) {
    return undefined;
  }

  return option[key];
}

/***/ }),

/***/ 91474:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getStringLabelKey;

var _constants = __webpack_require__(34235);

function getStringLabelKey(labelKey) {
  return typeof labelKey === 'string' ? labelKey : _constants.DEFAULT_LABELKEY;
}

/***/ }),

/***/ 39350:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * Truncates the result set based on `maxResults` and returns the new set.
 */
function getTruncatedOptions(options, maxResults) {
  if (!maxResults || maxResults >= options.length) {
    return options;
  }

  return options.slice(0, maxResults);
}

var _default = getTruncatedOptions;
exports["default"] = _default;

/***/ }),

/***/ 43386:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getUpdatedActiveIndex;
exports.isDisabledOption = isDisabledOption;
exports.skipDisabledOptions = skipDisabledOptions;

var _nodash = __webpack_require__(52901);

var _hasOwnProperty = _interopRequireDefault(__webpack_require__(31502));

function isDisabledOption(index, items) {
  var option = items[index];
  return !!option && !(0, _nodash.isString)(option) && (0, _hasOwnProperty["default"])(option, 'disabled');
}

function skipDisabledOptions(currentIndex, key, items) {
  var newIndex = currentIndex;

  while (isDisabledOption(newIndex, items)) {
    newIndex += key === 'ArrowUp' ? -1 : 1;
  }

  return newIndex;
}

function getUpdatedActiveIndex(currentIndex, key, items) {
  var newIndex = currentIndex; // Increment or decrement index based on user keystroke.

  newIndex += key === 'ArrowUp' ? -1 : 1; // Skip over any disabled options.

  newIndex = skipDisabledOptions(newIndex, key, items); // If we've reached the end, go back to the beginning or vice-versa.

  if (newIndex === items.length) {
    newIndex = -1;
  } else if (newIndex === -2) {
    newIndex = items.length - 1; // Skip over any disabled options.

    newIndex = skipDisabledOptions(newIndex, key, items);
  }

  return newIndex;
}

/***/ }),

/***/ 31502:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = hasOwnProperty;

/**
 * Check if an object has the given property in a type-safe way.
 */
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/***/ }),

/***/ 4165:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

var _typeof = __webpack_require__(67236);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  addCustomOption: true,
  defaultFilterBy: true,
  defaultSelectHint: true,
  getDisplayName: true,
  getHintText: true,
  getInputProps: true,
  getInputText: true,
  getIsOnlyResult: true,
  getMatchBounds: true,
  getMenuItemId: true,
  getOptionLabel: true,
  getOptionProperty: true,
  getStringLabelKey: true,
  getTruncatedOptions: true,
  getUpdatedActiveIndex: true,
  hasOwnProperty: true,
  isSelectable: true,
  isShown: true,
  preventInputBlur: true,
  propsWithBsClassName: true,
  stripDiacritics: true,
  validateSelectedPropChange: true,
  warn: true
};
Object.defineProperty(exports, "addCustomOption", ({
  enumerable: true,
  get: function get() {
    return _addCustomOption["default"];
  }
}));
Object.defineProperty(exports, "defaultFilterBy", ({
  enumerable: true,
  get: function get() {
    return _defaultFilterBy["default"];
  }
}));
Object.defineProperty(exports, "defaultSelectHint", ({
  enumerable: true,
  get: function get() {
    return _defaultSelectHint["default"];
  }
}));
Object.defineProperty(exports, "getDisplayName", ({
  enumerable: true,
  get: function get() {
    return _getDisplayName["default"];
  }
}));
Object.defineProperty(exports, "getHintText", ({
  enumerable: true,
  get: function get() {
    return _getHintText["default"];
  }
}));
Object.defineProperty(exports, "getInputProps", ({
  enumerable: true,
  get: function get() {
    return _getInputProps["default"];
  }
}));
Object.defineProperty(exports, "getInputText", ({
  enumerable: true,
  get: function get() {
    return _getInputText["default"];
  }
}));
Object.defineProperty(exports, "getIsOnlyResult", ({
  enumerable: true,
  get: function get() {
    return _getIsOnlyResult["default"];
  }
}));
Object.defineProperty(exports, "getMatchBounds", ({
  enumerable: true,
  get: function get() {
    return _getMatchBounds["default"];
  }
}));
Object.defineProperty(exports, "getMenuItemId", ({
  enumerable: true,
  get: function get() {
    return _getMenuItemId["default"];
  }
}));
Object.defineProperty(exports, "getOptionLabel", ({
  enumerable: true,
  get: function get() {
    return _getOptionLabel["default"];
  }
}));
Object.defineProperty(exports, "getOptionProperty", ({
  enumerable: true,
  get: function get() {
    return _getOptionProperty["default"];
  }
}));
Object.defineProperty(exports, "getStringLabelKey", ({
  enumerable: true,
  get: function get() {
    return _getStringLabelKey["default"];
  }
}));
Object.defineProperty(exports, "getTruncatedOptions", ({
  enumerable: true,
  get: function get() {
    return _getTruncatedOptions["default"];
  }
}));
Object.defineProperty(exports, "getUpdatedActiveIndex", ({
  enumerable: true,
  get: function get() {
    return _getUpdatedActiveIndex["default"];
  }
}));
Object.defineProperty(exports, "hasOwnProperty", ({
  enumerable: true,
  get: function get() {
    return _hasOwnProperty["default"];
  }
}));
Object.defineProperty(exports, "isSelectable", ({
  enumerable: true,
  get: function get() {
    return _isSelectable["default"];
  }
}));
Object.defineProperty(exports, "isShown", ({
  enumerable: true,
  get: function get() {
    return _isShown["default"];
  }
}));
Object.defineProperty(exports, "preventInputBlur", ({
  enumerable: true,
  get: function get() {
    return _preventInputBlur["default"];
  }
}));
Object.defineProperty(exports, "propsWithBsClassName", ({
  enumerable: true,
  get: function get() {
    return _propsWithBsClassName["default"];
  }
}));
Object.defineProperty(exports, "stripDiacritics", ({
  enumerable: true,
  get: function get() {
    return _stripDiacritics["default"];
  }
}));
Object.defineProperty(exports, "validateSelectedPropChange", ({
  enumerable: true,
  get: function get() {
    return _validateSelectedPropChange["default"];
  }
}));
Object.defineProperty(exports, "warn", ({
  enumerable: true,
  get: function get() {
    return _warn["default"];
  }
}));

var _addCustomOption = _interopRequireDefault(__webpack_require__(54998));

var _defaultFilterBy = _interopRequireDefault(__webpack_require__(611));

var _defaultSelectHint = _interopRequireDefault(__webpack_require__(3503));

var _getDisplayName = _interopRequireDefault(__webpack_require__(69249));

var _getHintText = _interopRequireDefault(__webpack_require__(31909));

var _getInputProps = _interopRequireDefault(__webpack_require__(3094));

var _getInputText = _interopRequireDefault(__webpack_require__(24908));

var _getIsOnlyResult = _interopRequireDefault(__webpack_require__(83330));

var _getMatchBounds = _interopRequireWildcard(__webpack_require__(60518));

Object.keys(_getMatchBounds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _getMatchBounds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getMatchBounds[key];
    }
  });
});

var _getMenuItemId = _interopRequireDefault(__webpack_require__(56809));

var _getOptionLabel = _interopRequireDefault(__webpack_require__(16208));

var _getOptionProperty = _interopRequireDefault(__webpack_require__(25685));

var _getStringLabelKey = _interopRequireDefault(__webpack_require__(91474));

var _getTruncatedOptions = _interopRequireDefault(__webpack_require__(39350));

var _getUpdatedActiveIndex = _interopRequireDefault(__webpack_require__(43386));

var _hasOwnProperty = _interopRequireDefault(__webpack_require__(31502));

var _isSelectable = _interopRequireDefault(__webpack_require__(61344));

var _isShown = _interopRequireDefault(__webpack_require__(4969));

var _nodash = __webpack_require__(52901);

Object.keys(_nodash).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _nodash[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _nodash[key];
    }
  });
});

var _preventInputBlur = _interopRequireDefault(__webpack_require__(81879));

var _propsWithBsClassName = _interopRequireDefault(__webpack_require__(25063));

var _size = __webpack_require__(2987);

Object.keys(_size).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _size[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _size[key];
    }
  });
});

var _stripDiacritics = _interopRequireDefault(__webpack_require__(62892));

var _validateSelectedPropChange = _interopRequireDefault(__webpack_require__(6248));

var _warn = _interopRequireDefault(__webpack_require__(49858));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 61344:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isSelectable;

/**
 * Check if an input type is selectable, based on WHATWG spec.
 *
 * See:
 *  - https://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome/24175357
 *  - https://html.spec.whatwg.org/multipage/input.html#do-not-apply
 */
function isSelectable(inputNode) {
  return inputNode.selectionStart != null;
}

/***/ }),

/***/ 4969:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isShown;

function isShown(_ref) {
  var open = _ref.open,
      minLength = _ref.minLength,
      showMenu = _ref.showMenu,
      text = _ref.text;

  // If menu visibility is controlled via props, that value takes precedence.
  if (open || open === false) {
    return open;
  }

  if (text.length < minLength) {
    return false;
  }

  return showMenu;
}

/***/ }),

/***/ 52901:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isFunction = isFunction;
exports.isString = isString;
exports.noop = noop;
exports.pick = pick;
exports.uniqueId = uniqueId;
var idCounter = 0; // eslint-disable-next-line @typescript-eslint/ban-types

function isFunction(value) {
  return typeof value === 'function';
}

function isString(value) {
  return typeof value === 'string';
} // eslint-disable-next-line @typescript-eslint/no-empty-function


function noop() {}

function pick(obj, keys) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var result = {};
  keys.forEach(function (key) {
    result[key] = obj[key];
  });
  return result;
}

function uniqueId(prefix) {
  idCounter += 1;
  return (prefix == null ? '' : String(prefix)) + idCounter;
}

/***/ }),

/***/ 81879:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = preventInputBlur;

/**
 * Prevent the main input from blurring when a menu item or the clear button is
 * clicked. (#226 & #310)
 */
function preventInputBlur(e) {
  e.preventDefault();
}

/***/ }),

/***/ 25063:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = propsWithBsClassName;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));

var _classnames = _interopRequireDefault(__webpack_require__(89367));

var _size = __webpack_require__(2987);

var _excluded = ["className", "isInvalid", "isValid", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * Returns Bootstrap classnames from `size` and validation props, along
 * with pass-through props.
 */
function propsWithBsClassName(_ref) {
  var className = _ref.className,
      isInvalid = _ref.isInvalid,
      isValid = _ref.isValid,
      size = _ref.size,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _objectSpread(_objectSpread({}, props), {}, {
    className: (0, _classnames["default"])('form-control', 'rbt-input', {
      'form-control-lg': (0, _size.isSizeLarge)(size),
      'form-control-sm': (0, _size.isSizeSmall)(size),
      'is-invalid': isInvalid,
      'is-valid': isValid
    }, className)
  });
}

/***/ }),

/***/ 2987:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isSizeLarge = isSizeLarge;
exports.isSizeSmall = isSizeSmall;

function isSizeLarge(size) {
  return size === 'lg';
}

function isSizeSmall(size) {
  return size === 'sm';
}

/***/ }),

/***/ 62892:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = stripDiacritics;

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Taken from: http://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/18391901#18391901
 */
// prettier-ignore
var map = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\xD0"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'OE',
  letters: "\x8C\u0152"
}, {
  base: 'oe',
  letters: "\x9C\u0153"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}].reduce(function (acc, _ref) {
  var base = _ref.base,
      letters = _ref.letters;
  letters.split('').forEach(function (letter) {
    acc[letter] = base;
  });
  return acc;
}, {}); // "what?" version ... http://jsperf.com/diacritics/12

function stripDiacritics(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036F]/g, '') // Remove combining diacritics

  /* eslint-disable-next-line no-control-regex */
  .replace(/[^\u0000-\u007E]/g, function (a) {
    return map[a] || a;
  });
}

/***/ }),

/***/ 6248:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = validateSelectedPropChange;

var _warn = _interopRequireDefault(__webpack_require__(49858));

function validateSelectedPropChange(prevSelected, selected) {
  var uncontrolledToControlled = !prevSelected && selected;
  var controlledToUncontrolled = prevSelected && !selected;
  var from, to, precedent;

  if (uncontrolledToControlled) {
    from = 'uncontrolled';
    to = 'controlled';
    precedent = 'an';
  } else {
    from = 'controlled';
    to = 'uncontrolled';
    precedent = 'a';
  }

  var message = "You are changing ".concat(precedent, " ").concat(from, " typeahead to be ").concat(to, ". ") + "Input elements should not switch from ".concat(from, " to ").concat(to, " (or vice versa). ") + 'Decide between using a controlled or uncontrolled element for the ' + 'lifetime of the component.';
  (0, _warn["default"])(!(uncontrolledToControlled || controlledToUncontrolled), message);
}

/***/ }),

/***/ 49858:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = warn;
exports.resetWarned = resetWarned;

var _warning = _interopRequireDefault(__webpack_require__(69754));

var warned = {};
/**
 * Copied from: https://github.com/ReactTraining/react-router/blob/master/modules/routerWarning.js
 */

function warn(falseToWarn, message) {
  // Only issue deprecation warnings once.
  if (!falseToWarn && message.indexOf('deprecated') !== -1) {
    if (warned[message]) {
      return;
    }

    warned[message] = true;
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  _warning["default"].apply(void 0, [falseToWarn, "[react-bootstrap-typeahead] ".concat(message)].concat(args));
}

function resetWarned() {
  warned = {};
}

/***/ }),

/***/ 79493:
/***/ ((module) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.3
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    // START: Modifications:
    // Apply guards for `Object.create(null)` handling. See:
    // - https://github.com/FormidableLabs/react-fast-compare/issues/64
    // - https://github.com/epoberezkin/fast-deep-equal/issues/49
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
    // END: Modifications

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ 9451:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

exports.__esModule = true;
exports["default"] = void 0;

var _ownerDocument = _interopRequireDefault(__webpack_require__(91383));

var _safeFindDOMNode = _interopRequireDefault(__webpack_require__(45523));

var _default = function _default(componentOrElement) {
  return (0, _ownerDocument["default"])((0, _safeFindDOMNode["default"])(componentOrElement));
};

exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 45523:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

exports.__esModule = true;
exports["default"] = safeFindDOMNode;

var _reactDom = _interopRequireDefault(__webpack_require__(98704));

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return _reactDom["default"].findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}

module.exports = exports.default;

/***/ }),

/***/ 89935:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);

exports.__esModule = true;
exports["default"] = void 0;

var _contains = _interopRequireDefault(__webpack_require__(81005));

var _listen = _interopRequireDefault(__webpack_require__(35264));

var _react = __webpack_require__(18038);

var _useEventCallback = _interopRequireDefault(__webpack_require__(90175));

var _warning = _interopRequireDefault(__webpack_require__(69754));

var _ownerDocument = _interopRequireDefault(__webpack_require__(9451));

var escapeKeyCode = 27;

var noop = function noop() {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var getRefTarget = function getRefTarget(ref) {
  return ref && ('current' in ref ? ref.current : ref);
};

/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
function useRootClose(ref, onRootClose, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      disabled = _ref.disabled,
      _ref$clickTrigger = _ref.clickTrigger,
      clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger;

  var preventMouseRootCloseRef = (0, _react.useRef)(false);
  var onClose = onRootClose || noop;
  var handleMouseCapture = (0, _react.useCallback)(function (e) {
    var _e$composedPath$;

    var currentTarget = getRefTarget(ref);
    (0, _warning["default"])(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!(0, _contains["default"])(currentTarget, (_e$composedPath$ = e.composedPath == null ? void 0 : e.composedPath()[0]) != null ? _e$composedPath$ : e.target);
  }, [ref]);
  var handleMouse = (0, _useEventCallback["default"])(function (e) {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  var handleKeyUp = (0, _useEventCallback["default"])(function (e) {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  (0, _react.useEffect)(function () {
    if (disabled || ref == null) return undefined; // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074

    var currentEvent = window.event;
    var doc = (0, _ownerDocument["default"])(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.

    var removeMouseCaptureListener = (0, _listen["default"])(doc, clickTrigger, handleMouseCapture, true);
    var removeMouseListener = (0, _listen["default"])(doc, clickTrigger, function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleMouse(e);
    });
    var removeKeyupListener = (0, _listen["default"])(doc, 'keyup', function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleKeyUp(e);
    });
    var mobileSafariHackListeners = [];

    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function (el) {
        return (0, _listen["default"])(el, 'mousemove', noop);
      });
    }

    return function () {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(function (remove) {
        return remove();
      });
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}

var _default = useRootClose;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 93462:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Manager = Manager;
exports.ManagerReferenceNodeSetterContext = exports.ManagerReferenceNodeContext = void 0;

var React = _interopRequireWildcard(__webpack_require__(18038));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ManagerReferenceNodeContext = React.createContext();
exports.ManagerReferenceNodeContext = ManagerReferenceNodeContext;
var ManagerReferenceNodeSetterContext = React.createContext();
exports.ManagerReferenceNodeSetterContext = ManagerReferenceNodeSetterContext;

function Manager(_ref) {
  var children = _ref.children;

  var _React$useState = React.useState(null),
      referenceNode = _React$useState[0],
      setReferenceNode = _React$useState[1];

  var hasUnmounted = React.useRef(false);
  React.useEffect(function () {
    return function () {
      hasUnmounted.current = true;
    };
  }, []);
  var handleSetReferenceNode = React.useCallback(function (node) {
    if (!hasUnmounted.current) {
      setReferenceNode(node);
    }
  }, []);
  return /*#__PURE__*/React.createElement(ManagerReferenceNodeContext.Provider, {
    value: referenceNode
  }, /*#__PURE__*/React.createElement(ManagerReferenceNodeSetterContext.Provider, {
    value: handleSetReferenceNode
  }, children));
}

/***/ }),

/***/ 58067:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Popper = Popper;

var React = _interopRequireWildcard(__webpack_require__(18038));

var _Manager = __webpack_require__(93462);

var _utils = __webpack_require__(59594);

var _usePopper2 = __webpack_require__(92072);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var NOOP = function NOOP() {
  return void 0;
};

var NOOP_PROMISE = function NOOP_PROMISE() {
  return Promise.resolve(null);
};

var EMPTY_MODIFIERS = [];

function Popper(_ref) {
  var _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
      _ref$strategy = _ref.strategy,
      strategy = _ref$strategy === void 0 ? 'absolute' : _ref$strategy,
      _ref$modifiers = _ref.modifiers,
      modifiers = _ref$modifiers === void 0 ? EMPTY_MODIFIERS : _ref$modifiers,
      referenceElement = _ref.referenceElement,
      onFirstUpdate = _ref.onFirstUpdate,
      innerRef = _ref.innerRef,
      children = _ref.children;
  var referenceNode = React.useContext(_Manager.ManagerReferenceNodeContext);

  var _React$useState = React.useState(null),
      popperElement = _React$useState[0],
      setPopperElement = _React$useState[1];

  var _React$useState2 = React.useState(null),
      arrowElement = _React$useState2[0],
      setArrowElement = _React$useState2[1];

  React.useEffect(function () {
    (0, _utils.setRef)(innerRef, popperElement);
  }, [innerRef, popperElement]);
  var options = React.useMemo(function () {
    return {
      placement: placement,
      strategy: strategy,
      onFirstUpdate: onFirstUpdate,
      modifiers: [].concat(modifiers, [{
        name: 'arrow',
        enabled: arrowElement != null,
        options: {
          element: arrowElement
        }
      }])
    };
  }, [placement, strategy, onFirstUpdate, modifiers, arrowElement]);

  var _usePopper = (0, _usePopper2.usePopper)(referenceElement || referenceNode, popperElement, options),
      state = _usePopper.state,
      styles = _usePopper.styles,
      forceUpdate = _usePopper.forceUpdate,
      update = _usePopper.update;

  var childrenProps = React.useMemo(function () {
    return {
      ref: setPopperElement,
      style: styles.popper,
      placement: state ? state.placement : placement,
      hasPopperEscaped: state && state.modifiersData.hide ? state.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: state && state.modifiersData.hide ? state.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: styles.arrow,
        ref: setArrowElement
      },
      forceUpdate: forceUpdate || NOOP,
      update: update || NOOP_PROMISE
    };
  }, [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate]);
  return (0, _utils.unwrapArray)(children)(childrenProps);
}

/***/ }),

/***/ 37742:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Reference = Reference;

var React = _interopRequireWildcard(__webpack_require__(18038));

var _warning = _interopRequireDefault(__webpack_require__(69754));

var _Manager = __webpack_require__(93462);

var _utils = __webpack_require__(59594);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Reference(_ref) {
  var children = _ref.children,
      innerRef = _ref.innerRef;
  var setReferenceNode = React.useContext(_Manager.ManagerReferenceNodeSetterContext);
  var refHandler = React.useCallback(function (node) {
    (0, _utils.setRef)(innerRef, node);
    (0, _utils.safeInvoke)(setReferenceNode, node);
  }, [innerRef, setReferenceNode]); // ran on unmount
  // eslint-disable-next-line react-hooks/exhaustive-deps

  React.useEffect(function () {
    return function () {
      return (0, _utils.setRef)(innerRef, null);
    };
  }, []);
  React.useEffect(function () {
    (0, _warning["default"])(Boolean(setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
  }, [setReferenceNode]);
  return (0, _utils.unwrapArray)(children)({
    ref: refHandler
  });
}

/***/ }),

/***/ 57306:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Popper", ({
  enumerable: true,
  get: function get() {
    return _Popper.Popper;
  }
}));
Object.defineProperty(exports, "Manager", ({
  enumerable: true,
  get: function get() {
    return _Manager.Manager;
  }
}));
Object.defineProperty(exports, "Reference", ({
  enumerable: true,
  get: function get() {
    return _Reference.Reference;
  }
}));
Object.defineProperty(exports, "usePopper", ({
  enumerable: true,
  get: function get() {
    return _usePopper.usePopper;
  }
}));

var _Popper = __webpack_require__(58067);

var _Manager = __webpack_require__(93462);

var _Reference = __webpack_require__(37742);

var _usePopper = __webpack_require__(92072);

/***/ }),

/***/ 92072:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.usePopper = void 0;

var React = _interopRequireWildcard(__webpack_require__(18038));

var ReactDOM = _interopRequireWildcard(__webpack_require__(98704));

var _core = __webpack_require__(57802);

var _reactFastCompare = _interopRequireDefault(__webpack_require__(79493));

var _utils = __webpack_require__(59594);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var EMPTY_MODIFIERS = [];

var usePopper = function usePopper(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }

  var prevOptions = React.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };

  var _React$useState = React.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0'
      },
      arrow: {
        position: 'absolute'
      }
    },
    attributes: {}
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  var updateStateModifier = React.useMemo(function () {
    return {
      name: 'updateState',
      enabled: true,
      phase: 'write',
      fn: function fn(_ref) {
        var state = _ref.state;
        var elements = Object.keys(state.elements);
        ReactDOM.flushSync(function () {
          setState({
            styles: (0, _utils.fromEntries)(elements.map(function (element) {
              return [element, state.styles[element] || {}];
            })),
            attributes: (0, _utils.fromEntries)(elements.map(function (element) {
              return [element, state.attributes[element]];
            }))
          });
        });
      },
      requires: ['computeStyles']
    };
  }, []);
  var popperOptions = React.useMemo(function () {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: 'applyStyles',
        enabled: false
      }])
    };

    if ((0, _reactFastCompare["default"])(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = React.useRef();
  (0, _utils.useIsomorphicLayoutEffect)(function () {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  (0, _utils.useIsomorphicLayoutEffect)(function () {
    if (referenceElement == null || popperElement == null) {
      return;
    }

    var createPopper = options.createPopper || _core.createPopper;
    var popperInstance = createPopper(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function () {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

exports.usePopper = usePopper;

/***/ }),

/***/ 59594:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIsomorphicLayoutEffect = exports.fromEntries = exports.setRef = exports.safeInvoke = exports.unwrapArray = void 0;

var React = _interopRequireWildcard(__webpack_require__(18038));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */


exports.unwrapArray = unwrapArray;

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Sets a ref using either a ref callback or a ref object
 */


exports.safeInvoke = safeInvoke;

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === 'function') {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};
/**
 * Simple ponyfill for Object.fromEntries
 */


exports.setRef = setRef;

var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (acc, _ref) {
    var key = _ref[0],
        value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 */


exports.fromEntries = fromEntries;
var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? React.useLayoutEffect : React.useEffect;
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;

/***/ }),

/***/ 99933:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0});var e=__webpack_require__(56786),t=__webpack_require__(18038),o=function(){return o=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function n(e,t,o){if(o||2===arguments.length)for(var n,i=0,r=t.length;i<r;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}function i(t){var n=t.size,i=void 0===n?25:n,r=t.SVGstrokeColor,l=void 0===r?"currentColor":r,a=t.SVGstorkeWidth,s=void 0===a?0:a,c=t.SVGclassName,d=void 0===c?"star-svg":c,u=t.SVGstyle;return e.jsx("svg",o({className:d,style:u,stroke:l,fill:"currentColor",strokeWidth:s,viewBox:"0 0 24 24",width:i,height:i,xmlns:"http://www.w3.org/2000/svg"},{children:e.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}))}function r(e,t){switch(t.type){case"PointerMove":return o(o({},e),{hoverValue:t.payload,hoverIndex:t.index});case"PointerLeave":return o(o({},e),{ratingValue:e.ratingValue,hoverIndex:0,hoverValue:null});case"MouseClick":return o(o({},e),{valueIndex:e.hoverIndex,ratingValue:t.payload});default:return e}}var l="style-module_starRatingWrap__q-lJC",a="style-module_simpleStarRating__nWUxf",s="style-module_fillIcons__6---A",c="style-module_emptyIcons__Bg-FZ",d="style-module_tooltip__tKc3i";function u(){return"undefined"!=typeof window&&window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||"undefined"!=typeof navigator&&navigator.maxTouchPoints>0}!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".style-module_starRatingWrap__q-lJC{display:inline-block;touch-action:none}.style-module_simpleStarRating__nWUxf{display:inline-block;overflow:hidden;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.style-module_fillIcons__6---A{display:inline-block;overflow:hidden;position:absolute;top:0;white-space:nowrap}.style-module_emptyIcons__Bg-FZ{display:inline-block}.style-module_tooltip__tKc3i{background-color:#333;border-radius:5px;color:#fff;display:inline-block;padding:5px 15px;vertical-align:middle}"),exports.i=function(v){var p,f,h=v.onClick,y=v.onPointerMove,m=v.onPointerEnter,g=v.onPointerLeave,x=v.initialValue,_=void 0===x?0:x,C=v.iconsCount,w=void 0===C?5:C,V=v.size,k=void 0===V?40:V,S=v.readonly,b=void 0!==S&&S,M=v.rtl,G=void 0!==M&&M,I=v.customIcons,N=void 0===I?[]:I,j=v.allowFraction,P=void 0!==j&&j,A=v.style,L=v.className,R=void 0===L?"react-simple-star-rating":L,T=v.transition,W=void 0!==T&&T,z=v.allowHover,B=void 0===z||z,E=v.disableFillHover,F=void 0!==E&&E,q=v.fillIcon,O=void 0===q?null:q,H=v.fillColor,J=void 0===H?"#ffbc0b":H,K=v.fillColorArray,U=void 0===K?[]:K,Z=v.fillStyle,D=v.fillClassName,X=void 0===D?"filled-icons":D,Y=v.emptyIcon,Q=void 0===Y?null:Y,$=v.emptyColor,ee=void 0===$?"#cccccc":$,te=v.emptyStyle,oe=v.emptyClassName,ne=void 0===oe?"empty-icons":oe,ie=v.allowTitleTag,re=void 0===ie||ie,le=v.showTooltip,ae=void 0!==le&&le,se=v.tooltipDefaultText,ce=void 0===se?"Your Rate":se,de=v.tooltipArray,ue=void 0===de?[]:de,ve=v.tooltipStyle,pe=v.tooltipClassName,fe=void 0===pe?"react-simple-star-rating-tooltip":pe,he=v.SVGclassName,ye=void 0===he?"star-svg":he,me=v.titleSeparator,ge=void 0===me?"out of":me,xe=v.SVGstyle,_e=v.SVGstorkeWidth,Ce=void 0===_e?0:_e,we=v.SVGstrokeColor,Ve=void 0===we?"currentColor":we,ke=t.useReducer(r,{hoverIndex:0,valueIndex:0,ratingValue:_,hoverValue:null}),Se=ke[0],be=Se.ratingValue,Me=Se.hoverValue,Ge=Se.hoverIndex,Ie=Se.valueIndex,Ne=ke[1];t.useEffect((function(){_&&Ne({type:"MouseClick",payload:0})}),[_]);var je=t.useMemo((function(){return P?2*w:w}),[P,w]),Pe=t.useMemo((function(){return _>je?0:P||Math.floor(_)===_?Math.round(_/w*100):2*Math.ceil(_)*10}),[P,_,w,je]),Ae=t.useMemo((function(){return(P?2*_-1:_-1)||0}),[P,_]),Le=t.useCallback((function(e){return w%2!=0?e/2/10:e*w/100}),[w]),Re=function(e){for(var t=e.clientX,o=e.currentTarget.children[0].getBoundingClientRect(),n=o.left,i=o.right,r=o.width,l=G?i-t:t-n,a=je,s=Math.round(r/je),c=0;c<=je;c+=1)if(l<=s*c){a=0===c&&l<s?0:c;break}var d=a-1;a>0&&(Ne({type:"PointerMove",payload:100*a/je,index:d}),y&&Me&&y(Le(Me),d,e))},Te=function(e){Me&&(Ne({type:"MouseClick",payload:Me}),h&&h(Le(Me),Ge,e))},We=t.useMemo((function(){if(B){if(F){var e=be&&be||Pe;return Me&&Me>e?Me:e}return Me&&Me||be&&be||Pe}return be&&be||Pe}),[B,F,Me,be,Pe]);t.useEffect((function(){ue.length>je&&console.error("tooltipArray Array length is bigger then Icons Count length.")}),[ue.length,je]);var ze=t.useCallback((function(e){return Me&&e[Ge]||be&&e[Ie]||_&&e[Ae]}),[Me,Ge,be,Ie,_,Ae]),Be=t.useMemo((function(){return Me&&Le(Me)||be&&Le(be)||_&&Le(Pe)}),[Me,Le,be,_,Pe]);return e.jsxs("span",o({className:l,style:{direction:"".concat(G?"rtl":"ltr")}},{children:[e.jsxs("span",o({className:"".concat(a," ").concat(R),style:o({cursor:b?"":"pointer"},A),onPointerMove:b?void 0:Re,onPointerEnter:b?void 0:function(e){m&&m(e),u()&&Re(e)},onPointerLeave:b?void 0:function(e){u()&&Te(),Ne({type:"PointerLeave"}),g&&g(e)},onClick:b?void 0:Te,"aria-hidden":"true"},{children:[e.jsx("span",o({className:"".concat(c," ").concat(ne),style:o({color:ee},te)},{children:n([],Array(w),!0).map((function(o,n){var r;return e.jsx(t.Fragment,{children:(null===(r=N[n])||void 0===r?void 0:r.icon)||Q||e.jsx(i,{SVGclassName:ye,SVGstyle:xe,SVGstorkeWidth:Ce,SVGstrokeColor:Ve,size:k})},n)}))})),e.jsx("span",o({className:"".concat(s," ").concat(X),style:o((p={},p[G?"right":"left"]=0,p.color=ze(U)||J,p.transition=W?"width .2s ease, color .2s ease":"",p.width="".concat(We,"%"),p),Z),title:re?"".concat(Be," ").concat(ge," ").concat(w):void 0},{children:n([],Array(w),!0).map((function(o,n){var r;return e.jsx(t.Fragment,{children:(null===(r=N[n])||void 0===r?void 0:r.icon)||O||e.jsx(i,{SVGclassName:ye,SVGstyle:xe,SVGstorkeWidth:Ce,SVGstrokeColor:Ve,size:k})},n)}))}))]})),ae&&e.jsx("span",o({className:"".concat(d," ").concat(fe),style:o((f={},f[G?"marginRight":"marginLeft"]=20,f),ve)},{children:(ue.length>0?ze(ue):Be)||ce}))]}))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 14674:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _computeScrollIntoView = _interopRequireDefault(__webpack_require__(47037));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}
function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = 'auto';
  }
  var canSmoothScroll = ('scrollBehavior' in document.body.style);
  actions.forEach(function (_ref) {
    var el = _ref.el,
      top = _ref.top,
      left = _ref.left;
    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top,
        left: left,
        behavior: behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}
function getOptions(options) {
  if (options === false) {
    return {
      block: 'end',
      inline: 'nearest'
    };
  }
  if (isOptionsObject(options)) {
    return options;
  }
  return {
    block: 'start',
    inline: 'nearest'
  };
}
function scrollIntoView(target, options) {
  var isTargetAttached = target.isConnected || target.ownerDocument.documentElement.contains(target);
  if (isOptionsObject(options) && typeof options.behavior === 'function') {
    return options.behavior(isTargetAttached ? (0, _computeScrollIntoView["default"])(target, options) : []);
  }
  if (!isTargetAttached) {
    return;
  }
  var computeOptions = getOptions(options);
  return defaultBehavior((0, _computeScrollIntoView["default"])(target, computeOptions), computeOptions.behavior);
}
var _default = scrollIntoView;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 14498:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(54845);
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

};
;