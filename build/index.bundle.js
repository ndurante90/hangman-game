/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/cross.png */ \"./src/assets/cross.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body,  .hangman-game-container{\\r\\n    height: 100vh;\\r\\n}\\r\\n\\r\\n\\r\\n.word-puppet-wrapper{\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.word-puppet-wrapper > div{\\r\\n    flex: 1;\\r\\n}\\r\\n\\r\\n.hangman-flex-wrapper{\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.hangman-word{\\r\\n    display: flex;\\r\\n    height: 400px;\\r\\n    /*border: 1px solid black;*/\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.hangman-word .letter{\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n    text-align: center;\\r\\n    font-size: 40px;\\r\\n    border-bottom: 4px solid black;\\r\\n    margin: 10px;\\r\\n}\\r\\n\\r\\n.keyboard{\\r\\n    padding-top: 30px;\\r\\n    padding-bottom: 30px;\\r\\n    width: 80%;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n}\\r\\n\\r\\n.keyboard-row{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    padding-top: 10px;\\r\\n    padding-bottom: 5px;\\r\\n}\\r\\n\\r\\n.keyboard-row button{\\r\\n    width: 60px;\\r\\n    height: 60px;\\r\\n    font-size: 20px;\\r\\n    cursor: pointer;\\r\\n    color: black;\\r\\n}\\r\\n\\r\\n#row-1 button{\\r\\n    margin-right: 20px;\\r\\n}\\r\\n\\r\\n#row-2 button{\\r\\n    margin-right: 20px;\\r\\n}\\r\\n\\r\\n#row-3 button{\\r\\n    margin-right: 20px;\\r\\n}\\r\\n\\r\\n.cross-decoration{\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-repeat: no-repeat;\\r\\n    background-size: cover;\\r\\n    background-blend-mode: darken;\\r\\n    color: red !important;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\n.keyboard-row button:disabled{\\r\\n    background-color: lightgreen;\\r\\n}\\r\\n\\r\\n.keyboard-row button.cross-decoration:disabled{\\r\\n    background-color: initial;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://hangman-game/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://hangman-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://hangman-game/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://hangman-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"COMPLETE_NOTIFICATION\": () => (/* binding */ COMPLETE_NOTIFICATION),\n/* harmony export */   \"createNotification\": () => (/* binding */ createNotification),\n/* harmony export */   \"errorNotification\": () => (/* binding */ errorNotification),\n/* harmony export */   \"nextNotification\": () => (/* binding */ nextNotification)\n/* harmony export */ });\nvar COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();\nfunction errorNotification(error) {\n    return createNotification('E', undefined, error);\n}\nfunction nextNotification(value) {\n    return createNotification('N', value, undefined);\n}\nfunction createNotification(kind, value, error) {\n    return {\n        kind: kind,\n        value: value,\n        error: error,\n    };\n}\n//# sourceMappingURL=NotificationFactories.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Observable.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Observable.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Observable\": () => (/* binding */ Observable)\n/* harmony export */ });\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ \"./node_modules/rxjs/dist/esm5/internal/Subscriber.js\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subscription */ \"./node_modules/rxjs/dist/esm5/internal/Subscription.js\");\n/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ \"./node_modules/rxjs/dist/esm5/internal/symbol/observable.js\");\n/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ \"./node_modules/rxjs/dist/esm5/internal/util/pipe.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ \"./node_modules/rxjs/dist/esm5/internal/config.js\");\n/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/isFunction */ \"./node_modules/rxjs/dist/esm5/internal/util/isFunction.js\");\n/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/errorContext */ \"./node_modules/rxjs/dist/esm5/internal/util/errorContext.js\");\n\n\n\n\n\n\n\nvar Observable = (function () {\n    function Observable(subscribe) {\n        if (subscribe) {\n            this._subscribe = subscribe;\n        }\n    }\n    Observable.prototype.lift = function (operator) {\n        var observable = new Observable();\n        observable.source = this;\n        observable.operator = operator;\n        return observable;\n    };\n    Observable.prototype.subscribe = function (observerOrNext, error, complete) {\n        var _this = this;\n        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(observerOrNext, error, complete);\n        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_1__.errorContext)(function () {\n            var _a = _this, operator = _a.operator, source = _a.source;\n            subscriber.add(operator\n                ?\n                    operator.call(subscriber, source)\n                : source\n                    ?\n                        _this._subscribe(subscriber)\n                    :\n                        _this._trySubscribe(subscriber));\n        });\n        return subscriber;\n    };\n    Observable.prototype._trySubscribe = function (sink) {\n        try {\n            return this._subscribe(sink);\n        }\n        catch (err) {\n            sink.error(err);\n        }\n    };\n    Observable.prototype.forEach = function (next, promiseCtor) {\n        var _this = this;\n        promiseCtor = getPromiseCtor(promiseCtor);\n        return new promiseCtor(function (resolve, reject) {\n            var subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({\n                next: function (value) {\n                    try {\n                        next(value);\n                    }\n                    catch (err) {\n                        reject(err);\n                        subscriber.unsubscribe();\n                    }\n                },\n                error: reject,\n                complete: resolve,\n            });\n            _this.subscribe(subscriber);\n        });\n    };\n    Observable.prototype._subscribe = function (subscriber) {\n        var _a;\n        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);\n    };\n    Observable.prototype[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable] = function () {\n        return this;\n    };\n    Observable.prototype.pipe = function () {\n        var operations = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            operations[_i] = arguments[_i];\n        }\n        return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(operations)(this);\n    };\n    Observable.prototype.toPromise = function (promiseCtor) {\n        var _this = this;\n        promiseCtor = getPromiseCtor(promiseCtor);\n        return new promiseCtor(function (resolve, reject) {\n            var value;\n            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });\n        });\n    };\n    Observable.create = function (subscribe) {\n        return new Observable(subscribe);\n    };\n    return Observable;\n}());\n\nfunction getPromiseCtor(promiseCtor) {\n    var _a;\n    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_4__.config.Promise) !== null && _a !== void 0 ? _a : Promise;\n}\nfunction isObserver(value) {\n    return value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.next) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.error) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.complete);\n}\nfunction isSubscriber(value) {\n    return (value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) || (isObserver(value) && (0,_Subscription__WEBPACK_IMPORTED_MODULE_6__.isSubscription)(value));\n}\n//# sourceMappingURL=Observable.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/Observable.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Subscriber.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subscriber.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EMPTY_OBSERVER\": () => (/* binding */ EMPTY_OBSERVER),\n/* harmony export */   \"SafeSubscriber\": () => (/* binding */ SafeSubscriber),\n/* harmony export */   \"Subscriber\": () => (/* binding */ Subscriber)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isFunction */ \"./node_modules/rxjs/dist/esm5/internal/util/isFunction.js\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ \"./node_modules/rxjs/dist/esm5/internal/Subscription.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ \"./node_modules/rxjs/dist/esm5/internal/config.js\");\n/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/reportUnhandledError */ \"./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js\");\n/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/noop */ \"./node_modules/rxjs/dist/esm5/internal/util/noop.js\");\n/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationFactories */ \"./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js\");\n/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduler/timeoutProvider */ \"./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js\");\n/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/errorContext */ \"./node_modules/rxjs/dist/esm5/internal/util/errorContext.js\");\n\n\n\n\n\n\n\n\n\nvar Subscriber = (function (_super) {\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Subscriber, _super);\n    function Subscriber(destination) {\n        var _this = _super.call(this) || this;\n        _this.isStopped = false;\n        if (destination) {\n            _this.destination = destination;\n            if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_1__.isSubscription)(destination)) {\n                destination.add(_this);\n            }\n        }\n        else {\n            _this.destination = EMPTY_OBSERVER;\n        }\n        return _this;\n    }\n    Subscriber.create = function (next, error, complete) {\n        return new SafeSubscriber(next, error, complete);\n    };\n    Subscriber.prototype.next = function (value) {\n        if (this.isStopped) {\n            handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.nextNotification)(value), this);\n        }\n        else {\n            this._next(value);\n        }\n    };\n    Subscriber.prototype.error = function (err) {\n        if (this.isStopped) {\n            handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.errorNotification)(err), this);\n        }\n        else {\n            this.isStopped = true;\n            this._error(err);\n        }\n    };\n    Subscriber.prototype.complete = function () {\n        if (this.isStopped) {\n            handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.COMPLETE_NOTIFICATION, this);\n        }\n        else {\n            this.isStopped = true;\n            this._complete();\n        }\n    };\n    Subscriber.prototype.unsubscribe = function () {\n        if (!this.closed) {\n            this.isStopped = true;\n            _super.prototype.unsubscribe.call(this);\n            this.destination = null;\n        }\n    };\n    Subscriber.prototype._next = function (value) {\n        this.destination.next(value);\n    };\n    Subscriber.prototype._error = function (err) {\n        try {\n            this.destination.error(err);\n        }\n        finally {\n            this.unsubscribe();\n        }\n    };\n    Subscriber.prototype._complete = function () {\n        try {\n            this.destination.complete();\n        }\n        finally {\n            this.unsubscribe();\n        }\n    };\n    return Subscriber;\n}(_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription));\n\nvar _bind = Function.prototype.bind;\nfunction bind(fn, thisArg) {\n    return _bind.call(fn, thisArg);\n}\nvar ConsumerObserver = (function () {\n    function ConsumerObserver(partialObserver) {\n        this.partialObserver = partialObserver;\n    }\n    ConsumerObserver.prototype.next = function (value) {\n        var partialObserver = this.partialObserver;\n        if (partialObserver.next) {\n            try {\n                partialObserver.next(value);\n            }\n            catch (error) {\n                handleUnhandledError(error);\n            }\n        }\n    };\n    ConsumerObserver.prototype.error = function (err) {\n        var partialObserver = this.partialObserver;\n        if (partialObserver.error) {\n            try {\n                partialObserver.error(err);\n            }\n            catch (error) {\n                handleUnhandledError(error);\n            }\n        }\n        else {\n            handleUnhandledError(err);\n        }\n    };\n    ConsumerObserver.prototype.complete = function () {\n        var partialObserver = this.partialObserver;\n        if (partialObserver.complete) {\n            try {\n                partialObserver.complete();\n            }\n            catch (error) {\n                handleUnhandledError(error);\n            }\n        }\n    };\n    return ConsumerObserver;\n}());\nvar SafeSubscriber = (function (_super) {\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SafeSubscriber, _super);\n    function SafeSubscriber(observerOrNext, error, complete) {\n        var _this = _super.call(this) || this;\n        var partialObserver;\n        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(observerOrNext) || !observerOrNext) {\n            partialObserver = {\n                next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,\n                error: error !== null && error !== void 0 ? error : undefined,\n                complete: complete !== null && complete !== void 0 ? complete : undefined,\n            };\n        }\n        else {\n            var context_1;\n            if (_this && _config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedNextContext) {\n                context_1 = Object.create(observerOrNext);\n                context_1.unsubscribe = function () { return _this.unsubscribe(); };\n                partialObserver = {\n                    next: observerOrNext.next && bind(observerOrNext.next, context_1),\n                    error: observerOrNext.error && bind(observerOrNext.error, context_1),\n                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),\n                };\n            }\n            else {\n                partialObserver = observerOrNext;\n            }\n        }\n        _this.destination = new ConsumerObserver(partialObserver);\n        return _this;\n    }\n    return SafeSubscriber;\n}(Subscriber));\n\nfunction handleUnhandledError(error) {\n    if (_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling) {\n        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_5__.captureError)(error);\n    }\n    else {\n        (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__.reportUnhandledError)(error);\n    }\n}\nfunction defaultErrorHandler(err) {\n    throw err;\n}\nfunction handleStoppedNotification(notification, subscriber) {\n    var onStoppedNotification = _config__WEBPACK_IMPORTED_MODULE_4__.config.onStoppedNotification;\n    onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__.timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });\n}\nvar EMPTY_OBSERVER = {\n    closed: true,\n    next: _util_noop__WEBPACK_IMPORTED_MODULE_8__.noop,\n    error: defaultErrorHandler,\n    complete: _util_noop__WEBPACK_IMPORTED_MODULE_8__.noop,\n};\n//# sourceMappingURL=Subscriber.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/Subscriber.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Subscription.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subscription.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EMPTY_SUBSCRIPTION\": () => (/* binding */ EMPTY_SUBSCRIPTION),\n/* harmony export */   \"Subscription\": () => (/* binding */ Subscription),\n/* harmony export */   \"isSubscription\": () => (/* binding */ isSubscription)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isFunction */ \"./node_modules/rxjs/dist/esm5/internal/util/isFunction.js\");\n/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/UnsubscriptionError */ \"./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js\");\n/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/arrRemove */ \"./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js\");\n\n\n\n\nvar Subscription = (function () {\n    function Subscription(initialTeardown) {\n        this.initialTeardown = initialTeardown;\n        this.closed = false;\n        this._parentage = null;\n        this._finalizers = null;\n    }\n    Subscription.prototype.unsubscribe = function () {\n        var e_1, _a, e_2, _b;\n        var errors;\n        if (!this.closed) {\n            this.closed = true;\n            var _parentage = this._parentage;\n            if (_parentage) {\n                this._parentage = null;\n                if (Array.isArray(_parentage)) {\n                    try {\n                        for (var _parentage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {\n                            var parent_1 = _parentage_1_1.value;\n                            parent_1.remove(this);\n                        }\n                    }\n                    catch (e_1_1) { e_1 = { error: e_1_1 }; }\n                    finally {\n                        try {\n                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);\n                        }\n                        finally { if (e_1) throw e_1.error; }\n                    }\n                }\n                else {\n                    _parentage.remove(this);\n                }\n            }\n            var initialFinalizer = this.initialTeardown;\n            if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(initialFinalizer)) {\n                try {\n                    initialFinalizer();\n                }\n                catch (e) {\n                    errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError ? e.errors : [e];\n                }\n            }\n            var _finalizers = this._finalizers;\n            if (_finalizers) {\n                this._finalizers = null;\n                try {\n                    for (var _finalizers_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {\n                        var finalizer = _finalizers_1_1.value;\n                        try {\n                            execFinalizer(finalizer);\n                        }\n                        catch (err) {\n                            errors = errors !== null && errors !== void 0 ? errors : [];\n                            if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError) {\n                                errors = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(errors)), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(err.errors));\n                            }\n                            else {\n                                errors.push(err);\n                            }\n                        }\n                    }\n                }\n                catch (e_2_1) { e_2 = { error: e_2_1 }; }\n                finally {\n                    try {\n                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);\n                    }\n                    finally { if (e_2) throw e_2.error; }\n                }\n            }\n            if (errors) {\n                throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError(errors);\n            }\n        }\n    };\n    Subscription.prototype.add = function (teardown) {\n        var _a;\n        if (teardown && teardown !== this) {\n            if (this.closed) {\n                execFinalizer(teardown);\n            }\n            else {\n                if (teardown instanceof Subscription) {\n                    if (teardown.closed || teardown._hasParent(this)) {\n                        return;\n                    }\n                    teardown._addParent(this);\n                }\n                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);\n            }\n        }\n    };\n    Subscription.prototype._hasParent = function (parent) {\n        var _parentage = this._parentage;\n        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));\n    };\n    Subscription.prototype._addParent = function (parent) {\n        var _parentage = this._parentage;\n        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;\n    };\n    Subscription.prototype._removeParent = function (parent) {\n        var _parentage = this._parentage;\n        if (_parentage === parent) {\n            this._parentage = null;\n        }\n        else if (Array.isArray(_parentage)) {\n            (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_parentage, parent);\n        }\n    };\n    Subscription.prototype.remove = function (teardown) {\n        var _finalizers = this._finalizers;\n        _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_finalizers, teardown);\n        if (teardown instanceof Subscription) {\n            teardown._removeParent(this);\n        }\n    };\n    Subscription.EMPTY = (function () {\n        var empty = new Subscription();\n        empty.closed = true;\n        return empty;\n    })();\n    return Subscription;\n}());\n\nvar EMPTY_SUBSCRIPTION = Subscription.EMPTY;\nfunction isSubscription(value) {\n    return (value instanceof Subscription ||\n        (value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.unsubscribe)));\n}\nfunction execFinalizer(finalizer) {\n    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(finalizer)) {\n        finalizer();\n    }\n    else {\n        finalizer.unsubscribe();\n    }\n}\n//# sourceMappingURL=Subscription.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/Subscription.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/config.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/config.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\nvar config = {\n    onUnhandledError: null,\n    onStoppedNotification: null,\n    Promise: undefined,\n    useDeprecatedSynchronousErrorHandling: false,\n    useDeprecatedNextContext: false,\n};\n//# sourceMappingURL=config.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/config.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timeoutProvider\": () => (/* binding */ timeoutProvider)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n\nvar timeoutProvider = {\n    setTimeout: function (handler, timeout) {\n        var args = [];\n        for (var _i = 2; _i < arguments.length; _i++) {\n            args[_i - 2] = arguments[_i];\n        }\n        var delegate = timeoutProvider.delegate;\n        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {\n            return delegate.setTimeout.apply(delegate, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([handler, timeout], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));\n        }\n        return setTimeout.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([handler, timeout], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));\n    },\n    clearTimeout: function (handle) {\n        var delegate = timeoutProvider.delegate;\n        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);\n    },\n    delegate: undefined,\n};\n//# sourceMappingURL=timeoutProvider.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/symbol/observable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/symbol/observable.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"observable\": () => (/* binding */ observable)\n/* harmony export */ });\nvar observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();\n//# sourceMappingURL=observable.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/symbol/observable.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UnsubscriptionError\": () => (/* binding */ UnsubscriptionError)\n/* harmony export */ });\n/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ \"./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js\");\n\nvar UnsubscriptionError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(function (_super) {\n    return function UnsubscriptionErrorImpl(errors) {\n        _super(this);\n        this.message = errors\n            ? errors.length + \" errors occurred during unsubscription:\\n\" + errors.map(function (err, i) { return i + 1 + \") \" + err.toString(); }).join('\\n  ')\n            : '';\n        this.name = 'UnsubscriptionError';\n        this.errors = errors;\n    };\n});\n//# sourceMappingURL=UnsubscriptionError.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrRemove\": () => (/* binding */ arrRemove)\n/* harmony export */ });\nfunction arrRemove(arr, item) {\n    if (arr) {\n        var index = arr.indexOf(item);\n        0 <= index && arr.splice(index, 1);\n    }\n}\n//# sourceMappingURL=arrRemove.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createErrorClass\": () => (/* binding */ createErrorClass)\n/* harmony export */ });\nfunction createErrorClass(createImpl) {\n    var _super = function (instance) {\n        Error.call(instance);\n        instance.stack = new Error().stack;\n    };\n    var ctorFunc = createImpl(_super);\n    ctorFunc.prototype = Object.create(Error.prototype);\n    ctorFunc.prototype.constructor = ctorFunc;\n    return ctorFunc;\n}\n//# sourceMappingURL=createErrorClass.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/errorContext.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/errorContext.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"captureError\": () => (/* binding */ captureError),\n/* harmony export */   \"errorContext\": () => (/* binding */ errorContext)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./node_modules/rxjs/dist/esm5/internal/config.js\");\n\nvar context = null;\nfunction errorContext(cb) {\n    if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {\n        var isRoot = !context;\n        if (isRoot) {\n            context = { errorThrown: false, error: null };\n        }\n        cb();\n        if (isRoot) {\n            var _a = context, errorThrown = _a.errorThrown, error = _a.error;\n            context = null;\n            if (errorThrown) {\n                throw error;\n            }\n        }\n    }\n    else {\n        cb();\n    }\n}\nfunction captureError(err) {\n    if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling && context) {\n        context.errorThrown = true;\n        context.error = err;\n    }\n}\n//# sourceMappingURL=errorContext.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/util/errorContext.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/identity.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/identity.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"identity\": () => (/* binding */ identity)\n/* harmony export */ });\nfunction identity(x) {\n    return x;\n}\n//# sourceMappingURL=identity.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/util/identity.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isFunction.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isFunction\": () => (/* binding */ isFunction)\n/* harmony export */ });\nfunction isFunction(value) {\n    return typeof value === 'function';\n}\n//# sourceMappingURL=isFunction.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/util/isFunction.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/noop.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/noop.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"noop\": () => (/* binding */ noop)\n/* harmony export */ });\nfunction noop() { }\n//# sourceMappingURL=noop.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/util/noop.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/pipe.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/pipe.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pipe\": () => (/* binding */ pipe),\n/* harmony export */   \"pipeFromArray\": () => (/* binding */ pipeFromArray)\n/* harmony export */ });\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ \"./node_modules/rxjs/dist/esm5/internal/util/identity.js\");\n\nfunction pipe() {\n    var fns = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        fns[_i] = arguments[_i];\n    }\n    return pipeFromArray(fns);\n}\nfunction pipeFromArray(fns) {\n    if (fns.length === 0) {\n        return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;\n    }\n    if (fns.length === 1) {\n        return fns[0];\n    }\n    return function piped(input) {\n        return fns.reduce(function (prev, fn) { return fn(prev); }, input);\n    };\n}\n//# sourceMappingURL=pipe.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/util/pipe.js?");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reportUnhandledError\": () => (/* binding */ reportUnhandledError)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./node_modules/rxjs/dist/esm5/internal/config.js\");\n/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/timeoutProvider */ \"./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js\");\n\n\nfunction reportUnhandledError(err) {\n    _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(function () {\n        var onUnhandledError = _config__WEBPACK_IMPORTED_MODULE_1__.config.onUnhandledError;\n        if (onUnhandledError) {\n            onUnhandledError(err);\n        }\n        else {\n            throw err;\n        }\n    });\n}\n//# sourceMappingURL=reportUnhandledError.js.map\n\n//# sourceURL=webpack://hangman-game/./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://hangman-game/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://hangman-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://hangman-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://hangman-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://hangman-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://hangman-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://hangman-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__assign\": () => (/* binding */ __assign),\n/* harmony export */   \"__asyncDelegator\": () => (/* binding */ __asyncDelegator),\n/* harmony export */   \"__asyncGenerator\": () => (/* binding */ __asyncGenerator),\n/* harmony export */   \"__asyncValues\": () => (/* binding */ __asyncValues),\n/* harmony export */   \"__await\": () => (/* binding */ __await),\n/* harmony export */   \"__awaiter\": () => (/* binding */ __awaiter),\n/* harmony export */   \"__classPrivateFieldGet\": () => (/* binding */ __classPrivateFieldGet),\n/* harmony export */   \"__classPrivateFieldIn\": () => (/* binding */ __classPrivateFieldIn),\n/* harmony export */   \"__classPrivateFieldSet\": () => (/* binding */ __classPrivateFieldSet),\n/* harmony export */   \"__createBinding\": () => (/* binding */ __createBinding),\n/* harmony export */   \"__decorate\": () => (/* binding */ __decorate),\n/* harmony export */   \"__exportStar\": () => (/* binding */ __exportStar),\n/* harmony export */   \"__extends\": () => (/* binding */ __extends),\n/* harmony export */   \"__generator\": () => (/* binding */ __generator),\n/* harmony export */   \"__importDefault\": () => (/* binding */ __importDefault),\n/* harmony export */   \"__importStar\": () => (/* binding */ __importStar),\n/* harmony export */   \"__makeTemplateObject\": () => (/* binding */ __makeTemplateObject),\n/* harmony export */   \"__metadata\": () => (/* binding */ __metadata),\n/* harmony export */   \"__param\": () => (/* binding */ __param),\n/* harmony export */   \"__read\": () => (/* binding */ __read),\n/* harmony export */   \"__rest\": () => (/* binding */ __rest),\n/* harmony export */   \"__spread\": () => (/* binding */ __spread),\n/* harmony export */   \"__spreadArray\": () => (/* binding */ __spreadArray),\n/* harmony export */   \"__spreadArrays\": () => (/* binding */ __spreadArrays),\n/* harmony export */   \"__values\": () => (/* binding */ __values)\n/* harmony export */ });\n/******************************************************************************\r\nCopyright (c) Microsoft Corporation.\r\n\r\nPermission to use, copy, modify, and/or distribute this software for any\r\npurpose with or without fee is hereby granted.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\nPERFORMANCE OF THIS SOFTWARE.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = function(d, b) {\r\n    extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n    return extendStatics(d, b);\r\n};\r\n\r\nfunction __extends(d, b) {\r\n    if (typeof b !== \"function\" && b !== null)\r\n        throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    }\r\n    return __assign.apply(this, arguments);\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nvar __createBinding = Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n        desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n});\r\n\r\nfunction __exportStar(m, o) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);\r\n}\r\n\r\nfunction __values(o) {\r\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\r\n    if (m) return m.call(o);\r\n    if (o && typeof o.length === \"number\") return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\n/** @deprecated */\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\n/** @deprecated */\r\nfunction __spreadArrays() {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n}\r\n\r\nfunction __spreadArray(to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n}\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator], i;\r\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\r\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\r\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nvar __setModuleDefault = Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\r\nfunction __classPrivateFieldGet(receiver, state, kind, f) {\r\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\r\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\r\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\r\n}\r\n\r\nfunction __classPrivateFieldSet(receiver, state, value, kind, f) {\r\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\r\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\r\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\r\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\r\n}\r\n\r\nfunction __classPrivateFieldIn(state, receiver) {\r\n    if (receiver === null || (typeof receiver !== \"object\" && typeof receiver !== \"function\")) throw new TypeError(\"Cannot use 'in' operator on non-object\");\r\n    return typeof state === \"function\" ? receiver === state : state.has(receiver);\r\n}\r\n\n\n//# sourceURL=webpack://hangman-game/./node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "./src/components/game-container.js":
/*!******************************************!*\
  !*** ./src/components/game-container.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameContainer\": () => (/* binding */ GameContainer)\n/* harmony export */ });\n/* harmony import */ var _model_settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/settings.js */ \"./src/model/settings.js\");\n/* harmony import */ var _model_word_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/word.js */ \"./src/model/word.js\");\n/* harmony import */ var _services_errors_observable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/errors-observable.js */ \"./src/services/errors-observable.js\");\n/* harmony import */ var _services_keyboard_button_observable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/keyboard-button-observable.js */ \"./src/services/keyboard-button-observable.js\");\n/* harmony import */ var _services_words_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/words.service.js */ \"./src/services/words.service.js\");\n/* harmony import */ var _keyboard_component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keyboard-component.js */ \"./src/components/keyboard-component.js\");\n/* harmony import */ var _puppet_component_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./puppet-component.js */ \"./src/components/puppet-component.js\");\n/* harmony import */ var _word_component_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./word-component.js */ \"./src/components/word-component.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass GameContainer {\r\n  constructor(playerName) {\r\n    this.keyboardButtonObservable = new _services_keyboard_button_observable_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardButtonObservable();\r\n    this.errorsObservable = new _services_errors_observable_js__WEBPACK_IMPORTED_MODULE_2__.ErrorsObservable();\r\n    this.settings = new _model_settings_js__WEBPACK_IMPORTED_MODULE_0__.Settings(playerName);\r\n    this.wordComponent = new _word_component_js__WEBPACK_IMPORTED_MODULE_7__.WordComponent();\r\n    this.keyboardComponent = new _keyboard_component_js__WEBPACK_IMPORTED_MODULE_5__.KeyBoardComponent();\r\n    this.puppetComponent = new _puppet_component_js__WEBPACK_IMPORTED_MODULE_6__.PuppetComponent(this.errorsObservable);\r\n    this.wordsService = new _services_words_service_js__WEBPACK_IMPORTED_MODULE_4__.WordsService();\r\n    this.word = \"\";\r\n    this.hiddenWord = null;\r\n  }\r\n\r\n  //add hint\r\n  async init() {\r\n    let errors = false;\r\n    //insert loading icon that rotate to simulate the loading process\r\n    await this.wordsService.getRandomResource().then((data) => {\r\n      if (data.detail) {\r\n        alert(\"There was an error! Try again\");\r\n        errors = true;\r\n        return;\r\n      }\r\n      const hint = this.wordsService.getResourceTypeFromUrl(data.url);\r\n      const value = hint == \"films\" ? data.title : data.name;\r\n      this.wordComponent.word = new _model_word_js__WEBPACK_IMPORTED_MODULE_1__.Word(value, hint);\r\n    });\r\n\r\n    this.keyboardButtonObservable.subscribe((buttonText) => {\r\n      const element = document.getElementById(`btn-${buttonText}`);\r\n      if (element != null) {\r\n        this.wordComponent.updatesWord(buttonText, this.errorsObservable);\r\n        this.keyboardComponent.disableButton(buttonText);\r\n\r\n        this.puppetComponent.updateImage(element);\r\n        //document.body.innerHTML = this.template();\r\n      }\r\n\r\n      window.setTimeout(() => {\r\n        //circle.style.transform = `translate(${x}px, ${y}px)`;\r\n      }, 1000);\r\n    });\r\n\r\n    if (!errors) {\r\n      document.body.innerHTML = this.template();\r\n    }\r\n  }\r\n\r\n  template() {\r\n    return `<div class=\"hangman-game-container\">\r\n               <div class=\"word-puppet-wrapper\">\r\n               <div class=\"hangman-flex-wrapper\">\r\n                  ${this.wordComponent.template}\r\n               </div>\r\n               <div>\r\n                  ${this.puppetComponent.template}\r\n               </div>\r\n               </div>\r\n               <div>\r\n               ${this.keyboardComponent.template}\r\n               </div>\r\n            </div>`;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://hangman-game/./src/components/game-container.js?");

/***/ }),

/***/ "./src/components/keyboard-button-component.js":
/*!*****************************************************!*\
  !*** ./src/components/keyboard-button-component.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyBoardButtonComponent\": () => (/* binding */ KeyBoardButtonComponent)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./src/constants.js\");\n\r\n\r\n\r\nclass KeyBoardButtonComponent {\r\n  constructor(car) {\r\n    this.car = car;\r\n  }\r\n\r\n  get template() {\r\n    return `<button id=\"btn-${this.car}\" class=\"button\">${this.car}</button>`;\r\n    /*const el = document.createElement(\"div\");\r\n    el.setAttribute(\"id\", \"btn-\" + this.car);\r\n    el.setAttribute(\"class\", \"button\");\r\n    el.textContent = this.car.toUpperCase();\r\n    el.onclick = () => {\r\n      alert(\"ciao\");\r\n    };\r\n    console.log(el);\r\n    return el;*/\r\n  }\r\n\r\n  press() {\r\n    console.log(this.car);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://hangman-game/./src/components/keyboard-button-component.js?");

/***/ }),

/***/ "./src/components/keyboard-component.js":
/*!**********************************************!*\
  !*** ./src/components/keyboard-component.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyBoardComponent\": () => (/* binding */ KeyBoardComponent)\n/* harmony export */ });\n/* harmony import */ var _keyboard_button_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard-button-component.js */ \"./src/components/keyboard-button-component.js\");\n\r\n\r\nclass KeyBoardComponent {\r\n  rows = {\r\n    1: \"qwertyuiop\",\r\n    2: \"asdfghjkl\",\r\n    3: \"zxcvbnm\",\r\n  };\r\n\r\n  buttons = [];\r\n\r\n  constructor() {}\r\n\r\n  /**\r\n   * Return visual keyboard layout\r\n   * @returns {string} - keyboard layout\r\n   */\r\n  get template() {\r\n    let template = `<div class=\"keyboard\">`;\r\n    Object.keys(this.rows).forEach((key) => {\r\n      template += this.getRow(key);\r\n    });\r\n    template += \"</div>\";\r\n    return template;\r\n  }\r\n\r\n  /**\r\n   * Return single row template\r\n   * @param {string} num\r\n   * @returns {string} - a row template\r\n   */\r\n  getRow(num) {\r\n    let rowTemplate = `<div class=\"keyboard-row\" id=\"row-${num}\">`;\r\n    for (let car of this.rows[num]) {\r\n      const component = new _keyboard_button_component_js__WEBPACK_IMPORTED_MODULE_0__.KeyBoardButtonComponent(car.toUpperCase());\r\n      rowTemplate += component.template;\r\n    }\r\n    rowTemplate += \"</div>\";\r\n    return rowTemplate;\r\n  }\r\n\r\n  disableButton(buttonText) {\r\n    const btn = document.getElementById(\"btn-\" + buttonText);\r\n    btn.setAttribute(\"disabled\", true);\r\n    const wordElement = document.querySelector(\r\n      `[data-letter=\"${buttonText.toLowerCase()}\"]`\r\n    );\r\n    console.log(wordElement);\r\n    if (!wordElement) {\r\n      btn.setAttribute(\"class\", \"cross-decoration\");\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://hangman-game/./src/components/keyboard-component.js?");

/***/ }),

/***/ "./src/components/level-component.js":
/*!*******************************************!*\
  !*** ./src/components/level-component.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LevelComponent\": () => (/* binding */ LevelComponent)\n/* harmony export */ });\nclass LevelComponent {\r\n  selectedDifficult;\r\n  constructor() {\r\n    this.htmlTemplate = `\r\n    <div class=\"difficult-wrapper\">\r\n       <button class=\"difficult-btn\" value=\"easy\">Easy</button>\r\n       <button class=\"difficult-btn\" value=\"medium\">Medium</button>\r\n       <button class=\"difficult-btn\" value=\"hard\">Hard</button>\r\n    </div>`;\r\n  }\r\n\r\n  get template() {\r\n    return this.htmlTemplate;\r\n  }\r\n\r\n  selectDifficult(evt) {\r\n    this.selectDifficult = evt.target.value;\r\n    alert(evt.target.value);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://hangman-game/./src/components/level-component.js?");

/***/ }),

/***/ "./src/components/menu-component.js":
/*!******************************************!*\
  !*** ./src/components/menu-component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuComponent\": () => (/* binding */ MenuComponent)\n/* harmony export */ });\n/* harmony import */ var _level_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level-component.js */ \"./src/components/level-component.js\");\n\r\n\r\nclass MenuComponent {\r\n  playerName;\r\n  LevelComponent;\r\n  constructor() {\r\n    this.levelComponent = new _level_component_js__WEBPACK_IMPORTED_MODULE_0__.LevelComponent();\r\n  }\r\n\r\n  template = () => `<div class=\"hangman-menu-wrapper\">\r\n                       <h1>The Hangman Game</h1>\r\n                       <div>\r\n                           <input id=\"player-name\" type=\"text\" placeholder=\"Insert player name\">\r\n                           ${this.levelComponent.template}\r\n                       </div>\r\n                    </div>`;\r\n}\r\n\n\n//# sourceURL=webpack://hangman-game/./src/components/menu-component.js?");

/***/ }),

/***/ "./src/components/puppet-component.js":
/*!********************************************!*\
  !*** ./src/components/puppet-component.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PuppetComponent\": () => (/* binding */ PuppetComponent)\n/* harmony export */ });\n\r\n\r\nclass PuppetComponent {\r\n  constructor(errorsObservable) {\r\n    this.errorsNumber = 0;\r\n    this.template = `<div class=\"puppet\">\r\n                         <img src=\"../assets/{image_name.jpg}\">\r\n                    </div>`;\r\n    this.errorsObservable = errorsObservable;\r\n  }\r\n\r\n  getImage() {\r\n    return `hangman-${this.errorsNumber}.png`;\r\n  }\r\n\r\n  updateImage(buttonElement) {\r\n    this.errorsObservable.subscribe((res) => {\r\n      this.errorsNumber = res;\r\n      this.template = `<div class=\"puppet\">\r\n      <img src=\"../assets/${this.getImage()}\">\r\n </div>`;\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://hangman-game/./src/components/puppet-component.js?");

/***/ }),

/***/ "./src/components/word-component.js":
/*!******************************************!*\
  !*** ./src/components/word-component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WordComponent\": () => (/* binding */ WordComponent)\n/* harmony export */ });\n/* harmony import */ var _model_word__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/word */ \"./src/model/word.js\");\n\r\n\r\nclass WordComponent {\r\n  constructor() {}\r\n  get template() {\r\n    return `\r\n    <div class=\"hangman-word\">\r\n       ${this.getHiddenWordTemplate(this.word)}\r\n    </div>\r\n    <div class=\"hint\">\r\n       <strong>Hint:</strong> Think to Star Wars ${this.word.hint}\r\n    </div>\r\n    `;\r\n  }\r\n\r\n  get word() {\r\n    return this._word;\r\n  }\r\n\r\n  /**\r\n   * @param {Word} value\r\n   */\r\n  set word(value) {\r\n    this._word = value;\r\n  }\r\n\r\n  /**\r\n   * Get template for hidden word\r\n   * @param {Word} word\r\n   * @returns {string} - template for hidden word\r\n   */\r\n  getHiddenWordTemplate(word) {\r\n    let template = \"\";\r\n    for (let carIndex in word.text) {\r\n      template += `<div class=\"letter\" id=\"letter-${carIndex}\"></div>`;\r\n    }\r\n    return template;\r\n  }\r\n\r\n  updatesWord(buttonText, obs) {\r\n    buttonText = buttonText.toLowerCase();\r\n    if (this.word) {\r\n      let textArray = this.word.text.split(\"\").reduce(function (a, e, i) {\r\n        if (e.toLowerCase() === buttonText) a.push(i);\r\n        return a;\r\n      }, []);\r\n\r\n      if (textArray.length == 0) {\r\n        obs.countError();\r\n      }\r\n\r\n      textArray.forEach((element) => {\r\n        const letter = document.getElementById(\"letter-\" + element);\r\n        letter.innerText = buttonText;\r\n        letter.setAttribute(\"data-letter\", `${buttonText}`);\r\n      });\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://hangman-game/./src/components/word-component.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MaximumIdValue\": () => (/* binding */ MaximumIdValue),\n/* harmony export */   \"emitCar\": () => (/* binding */ emitCar),\n/* harmony export */   \"obs$\": () => (/* binding */ obs$)\n/* harmony export */ });\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ \"./node_modules/rxjs/dist/esm5/internal/Observable.js\");\n\r\n\r\nconst MaximumIdValue = {\r\n  people: 84,\r\n  planets: 60,\r\n  films: 6,\r\n  species: 37,\r\n  starships: 36,\r\n  vehicles: 28,\r\n};\r\n\r\nconst obs$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((subscriber) => {\r\n  subscriber.next(null);\r\n});\r\n\r\nfunction emitCar(car) {\r\n  obs$.next(car);\r\n}\r\n\n\n//# sourceURL=webpack://hangman-game/./src/constants.js?");

/***/ }),

/***/ "./src/hangman.js":
/*!************************!*\
  !*** ./src/hangman.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Hangman\": () => (/* binding */ Hangman)\n/* harmony export */ });\n/* harmony import */ var _components_game_container_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/game-container.js */ \"./src/components/game-container.js\");\n/* harmony import */ var _components_menu_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu-component.js */ \"./src/components/menu-component.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const hangman = new Hangman();\r\n  hangman.loadGame();\r\n});\r\n\r\nclass Hangman {\r\n  /**\r\n   * Function that loads a new game\r\n   */\r\n  loadGame() {\r\n    /* \r\n       Istantiate a new MainMenu component \r\n       and add a new button\r\n    */\r\n    let mainMenu = new _components_menu_component_js__WEBPACK_IMPORTED_MODULE_1__.MenuComponent();\r\n    document.body.innerHTML = mainMenu.template();\r\n    this.addButton(\"Start Game\", this.startNewGame);\r\n\r\n    /**\r\n     *  Handle button click of difficult component\r\n     */\r\n    const buttons = document.body.getElementsByClassName(\"difficult-btn\");\r\n    for (let button of buttons) {\r\n      button.addEventListener(\"click\", mainMenu.levelComponent.selectDifficult);\r\n    }\r\n    /*let service = new WordsService();\r\n    service\r\n      .getRandomResource()\r\n      .then((response) => response.json())\r\n      .then((data) => console.log(data));*/\r\n  }\r\n\r\n  /**\r\n   * Function that appends a new button to the DOM body.\r\n   * The new button should execute a custom action\r\n   * @param {string} buttonText\r\n   * @param {function} action\r\n   */\r\n  addButton(text, action) {\r\n    const button = document.createElement(\"button\");\r\n    button.innerText = text;\r\n    button.addEventListener(\"click\", action);\r\n    document.body.append(button);\r\n  }\r\n\r\n  /**\r\n   * Function that init a new GameContainer\r\n   */\r\n  startNewGame() {\r\n    const playerName = document.getElementById(\"player-name\");\r\n    if (playerName.value != \"\") {\r\n      const gameContainer = new _components_game_container_js__WEBPACK_IMPORTED_MODULE_0__.GameContainer(playerName);\r\n      gameContainer.init();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://hangman-game/./src/hangman.js?");

/***/ }),

/***/ "./src/model/settings.js":
/*!*******************************!*\
  !*** ./src/model/settings.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Settings\": () => (/* binding */ Settings)\n/* harmony export */ });\nclass Settings {\r\n  playerName;\r\n  attemptsNumber;\r\n\r\n  constructor(playerName, attemptsNumber = null) {\r\n    this.playerName = playerName;\r\n    this.attemptsNumber = attemptsNumber;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://hangman-game/./src/model/settings.js?");

/***/ }),

/***/ "./src/model/word.js":
/*!***************************!*\
  !*** ./src/model/word.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Word\": () => (/* binding */ Word)\n/* harmony export */ });\nclass Word {\r\n  text;\r\n  hint;\r\n\r\n  constructor(text, hint) {\r\n    this.text = text;\r\n    this.hint = hint;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://hangman-game/./src/model/word.js?");

/***/ }),

/***/ "./src/services/errors-observable.js":
/*!*******************************************!*\
  !*** ./src/services/errors-observable.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ErrorsObservable\": () => (/* binding */ ErrorsObservable)\n/* harmony export */ });\nclass ErrorsObservable {\r\n  errorsNumber = 0;\r\n  constructor() {\r\n    this.subscriptions = [];\r\n  }\r\n\r\n  countError = () => {\r\n    this.errorsNumber++;\r\n    this.subscriptions.forEach((sub) => sub(this.errorsNumber));\r\n  };\r\n\r\n  subscribe(callback) {\r\n    this.subscriptions.push(callback);\r\n\r\n    return () => {\r\n      this.subscriptions = this.subscriptions.filter((cb) => cb !== callback);\r\n    };\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://hangman-game/./src/services/errors-observable.js?");

/***/ }),

/***/ "./src/services/keyboard-button-observable.js":
/*!****************************************************!*\
  !*** ./src/services/keyboard-button-observable.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyboardButtonObservable\": () => (/* binding */ KeyboardButtonObservable)\n/* harmony export */ });\nclass KeyboardButtonObservable {\r\n  constructor() {\r\n    this.subscriptions = [];\r\n    window.addEventListener(\"click\", this.handleClick);\r\n  }\r\n\r\n  handleClick = (e) => {\r\n    this.subscriptions.forEach((sub) => sub(e.target.textContent));\r\n  };\r\n\r\n  subscribe(callback) {\r\n    this.subscriptions.push(callback);\r\n\r\n    return () => {\r\n      this.subscriptions = this.subscriptions.filter((cb) => cb !== callback);\r\n    };\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://hangman-game/./src/services/keyboard-button-observable.js?");

/***/ }),

/***/ "./src/services/words.service.js":
/*!***************************************!*\
  !*** ./src/services/words.service.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WordsService\": () => (/* binding */ WordsService)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./src/constants.js\");\n\r\n\r\nclass WordsService {\r\n  baseUrl;\r\n  apiObjects;\r\n\r\n  constructor() {\r\n    this.baseUrl = \"https://swapi.dev/api/\";\r\n    this.apiObjects = [\r\n      \"people\",\r\n      \"films\",\r\n      \"planets\",\r\n      \"species\",\r\n      \"starships\",\r\n      \"vehicles\",\r\n    ];\r\n  }\r\n\r\n  /**\r\n   * Return a random resource as Promise\r\n   * @returns {Promise} - a promise generated by fetch call\r\n   */\r\n  async getRandomResource() {\r\n    let objectPath = this.getSpecificResourcePath();\r\n    const response = await fetch(this.baseUrl + objectPath);\r\n    const data = await response.json();\r\n    return data;\r\n  }\r\n\r\n  /**\r\n   * Returns a resource path \"/resource-type/resource-id\"\r\n   * @returns {string} - the resource path\r\n   */\r\n  getSpecificResourcePath() {\r\n    let resourceType = this.getResourceTypePath();\r\n    let number = Math.floor(Math.random() * _constants_js__WEBPACK_IMPORTED_MODULE_0__.MaximumIdValue[resourceType]) + 1;\r\n    let resourcePath = resourceType + \"/\" + number;\r\n    return resourcePath;\r\n  }\r\n\r\n  /**\r\n   * Returns a random type from apiObjects array\r\n   * @returns {string} - a specific resource type\r\n   */\r\n  getResourceTypePath() {\r\n    let selectedType = Math.floor(Math.random() * this.apiObjects.length);\r\n    return this.apiObjects[selectedType];\r\n  }\r\n\r\n  /**\r\n   * Return the resource type from url\r\n   * (e.g. from https://swapi.dev/api/people/1 return people)\r\n   * @param {string} url\r\n   */\r\n  getResourceTypeFromUrl(url) {\r\n    return url\r\n      .toString()\r\n      .slice(this.baseUrl.length, url.indexOf(\"/\", this.baseUrl.length));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://hangman-game/./src/services/words.service.js?");

/***/ }),

/***/ "./src/assets/cross.png":
/*!******************************!*\
  !*** ./src/assets/cross.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"84eedcaf96c68e31ebe4.png\";\n\n//# sourceURL=webpack://hangman-game/./src/assets/cross.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/hangman.js");
/******/ 	
/******/ })()
;