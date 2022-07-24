/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin:0;\r\n}\r\n:root {\r\n    box-sizing: border-box;\r\n    font-family: Roboto, sans-serif;\r\n    --main-color: #41B7AD;\r\n    --font-color:#374959;\r\n}\r\nbody {\r\n    margin: 0;\r\n}\r\n#container {\r\n    height:100vh;\r\n    display:grid;\r\n    grid-template-rows: 90px 1fr;\r\n    grid-template-columns: 1fr 2.5fr;\r\n}\r\n.header {\r\n    grid-column: 1 / 3;\r\n    background-color: var(--main-color);\r\n    color:white;\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content:center;\r\n}\r\n.logo {\r\n    height: 75%;\r\n    margin-right: 40px;\r\n}\r\n.side-bar {\r\n    padding: 36px;\r\n    background-color: white;\r\n    color:var(--font-color); \r\n}\r\n.content {\r\n    background-color: #ECECEC;\r\n}\r\n.main-task{\r\n    \r\n    border-top: 2px solid lightblue;\r\n    margin: 12px 0 12px 0;\r\n}\r\n.inbox,.daily-task,.weekly-task{\r\n    padding:24px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap:12px;\r\n}\r\n.inbox:hover,.daily-task:hover,.weekly-task:hover {\r\n    background: var(--main-color);\r\n}\r\n.project-task{\r\n    border-top: 2px solid lightblue;\r\n    margin: 12px 0 12px 0;\r\n}\r\n.create-project {\r\n    border-radius: 8px;\r\n    width:90%;\r\n    padding:12px;\r\n    color: var(--font-color);\r\n    border: 2px solid var(--main-color);    \r\n    display:none;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\nlabel[for=\"project-name\"]{\r\n    display:block;\r\n    text-align: center;\r\n    font-weight:bold;   \r\n    font-size: 1.4rem;\r\n    margin-bottom:8px;\r\n}\r\ninput[id=\"project-name\"] {\r\n    border:0;\r\n    width:97%;\r\n    height:30px;\r\n    background-color: lightgray;\r\n    font-size: 1.2rem;\r\n    font-weight:600;\r\n    text-align: center;\r\n    color:var(--font-color)74958;\r\n    margin-bottom: 12px;\r\n}\r\n.create-project-btn {\r\n    display:flex;\r\n    justify-content: center;\r\n    padding: 0 24px 0 24px;\r\n    gap:4px;\r\n}\r\n.add-project,.cancel-project {\r\n    color:white;\r\n    border-radius: 6px;\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    padding:6px;\r\n    font-size:1.5rem;\r\n    font-weight:500;\r\n    background-color: white;\r\n    border:0;\r\n}\r\n.add-project {\r\n    background-color: green;\r\n    border:2px solid transparent;\r\n}\r\n.add-project:hover {\r\n    color: var(--font-color);\r\n    background-color:white;\r\n    border:2px solid green;\r\n}\r\n.cancel-project {\r\n    background-color: red;\r\n    border:2px solid transparent;\r\n}\r\n.cancel-project:hover {\r\n    color: var(--font-color);\r\n    background-color:white;\r\n    border:2px solid red;\r\n}\r\n.btn {\r\n    width:100%;\r\n    padding:24px;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: var(--font-color);\r\n    border:0;\r\n    background-color:white;\r\n    display:flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 12px;\r\n}\r\n.btn:hover {\r\n    background-color:var(--main-color);\r\n}\r\n.content {\r\n    padding: 36px;\r\n}\r\n.content-header {\r\n    border-radius: 8px;\r\n    height: 100px;\r\n    background-color: var(--main-color);\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.content-header h2 {\r\n    color:white;\r\n    font-size: 2.5rem;\r\n}\r\n.task-btn {\r\n    text-align: left;\r\n    width:100%;\r\n    height:40px;\r\n    margin-top:12px;\r\n    border-radius: 10px;\r\n}\r\n.task-btn:hover {\r\n    background-color: var(--main-color);\r\n    color:white;\r\n}\r\n.create-task {\r\n    border-radius: 12px;\r\n    margin-top:24px ;\r\n    padding:16px 24px 16px 24px;\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n    color:var(--font-color);\r\n    background-color:white;\r\n    display:none;\r\n    align-items: center;\r\n}\r\nlabel[for=\"name\"],label[for=\"due\"] {\r\n    margin-right:12px;\r\n}\r\ninput[id=\"name\"],input[id=\"due\"] {\r\n    margin-right:12px;\r\n    height: 24px;\r\n    width: 180px;\r\n}\r\n.label {\r\n    flex: 0 0 auto;\r\n}\r\n.btn-group {\r\n    \r\n    display:flex;\r\n    width:100%;\r\n    gap:6px;\r\n}\r\n.btn-group > * {\r\n    border-radius: 6px;\r\n    width:100%;\r\n    background-color:white;\r\n    border:0;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    padding:12px;\r\n    color:white;\r\n}\r\n.add {\r\n    background: green;\r\n    border:2px solid transparent;\r\n}\r\n.add:hover {\r\n    background-color:white;\r\n    border:2px solid green;\r\n    color:var(--font-color);\r\n}\r\n.cancel {\r\n    background-color: red;\r\n    border:2px solid transparent;\r\n}\r\n.cancel:hover {\r\n    background-color:white;\r\n    border:2px solid red;\r\n    color:var(--font-color);\r\n}\r\n.task {\r\n    border-radius: 10px;\r\n    margin-top:10px;\r\n    background-color: white;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    padding:12px 24px 12px 24px;\r\n    color:var(--font-color);\r\n}\r\n.task-name,.task-date {\r\n    display:flex;\r\n    gap:12px;\r\n}\r\n.task-delete {\r\n    background-color:white;\r\n    padding:0;\r\n    border:0;\r\n}\r\n.project {\r\n    text-align: center;\r\n    font-size: 1.3rem;\r\n    margin: 12px 0 12px 0;\r\n    padding:24px;\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap:48px;\r\n}\r\n.remove-project {\r\n    background-color: inherit;\r\n    padding:0;\r\n    border:0;\r\n    display:flex;\r\n}\r\n.project:hover{\r\n    background-color:var(--main-color);\r\n    display:flex;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n* {\r\n    margin:0;\r\n}\r\n:root {\r\n    box-sizing: border-box;\r\n    font-family: Roboto, sans-serif;\r\n    --main-color: #41B7AD;\r\n    --font-color:#374959;\r\n}\r\nbody {\r\n    margin: 0;\r\n}\r\n#container {\r\n    height:100vh;\r\n    display:grid;\r\n    grid-template-rows: 90px 1fr;\r\n    grid-template-columns: 1fr 2.5fr;\r\n}\r\n.header {\r\n    grid-column: 1 / 3;\r\n    background-color: var(--main-color);\r\n    color:white;\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content:center;\r\n}\r\n.logo {\r\n    height: 75%;\r\n    margin-right: 40px;\r\n}\r\n.side-bar {\r\n    padding: 36px;\r\n    background-color: white;\r\n    color:var(--font-color); \r\n}\r\n.content {\r\n    background-color: #ECECEC;\r\n}\r\n.main-task{\r\n    \r\n    border-top: 2px solid lightblue;\r\n    margin: 12px 0 12px 0;\r\n}\r\n.inbox,.daily-task,.weekly-task{\r\n    padding:24px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap:12px;\r\n}\r\n.inbox:hover,.daily-task:hover,.weekly-task:hover {\r\n    background: var(--main-color);\r\n}\r\n.project-task{\r\n    border-top: 2px solid lightblue;\r\n    margin: 12px 0 12px 0;\r\n}\r\n.create-project {\r\n    border-radius: 8px;\r\n    width:90%;\r\n    padding:12px;\r\n    color: var(--font-color);\r\n    border: 2px solid var(--main-color);    \r\n    display:none;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\nlabel[for=\"project-name\"]{\r\n    display:block;\r\n    text-align: center;\r\n    font-weight:bold;   \r\n    font-size: 1.4rem;\r\n    margin-bottom:8px;\r\n}\r\ninput[id=\"project-name\"] {\r\n    border:0;\r\n    width:97%;\r\n    height:30px;\r\n    background-color: lightgray;\r\n    font-size: 1.2rem;\r\n    font-weight:600;\r\n    text-align: center;\r\n    color:var(--font-color)74958;\r\n    margin-bottom: 12px;\r\n}\r\n.create-project-btn {\r\n    display:flex;\r\n    justify-content: center;\r\n    padding: 0 24px 0 24px;\r\n    gap:4px;\r\n}\r\n.add-project,.cancel-project {\r\n    color:white;\r\n    border-radius: 6px;\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    padding:6px;\r\n    font-size:1.5rem;\r\n    font-weight:500;\r\n    background-color: white;\r\n    border:0;\r\n}\r\n.add-project {\r\n    background-color: green;\r\n    border:2px solid transparent;\r\n}\r\n.add-project:hover {\r\n    color: var(--font-color);\r\n    background-color:white;\r\n    border:2px solid green;\r\n}\r\n.cancel-project {\r\n    background-color: red;\r\n    border:2px solid transparent;\r\n}\r\n.cancel-project:hover {\r\n    color: var(--font-color);\r\n    background-color:white;\r\n    border:2px solid red;\r\n}\r\n.btn {\r\n    width:100%;\r\n    padding:24px;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: var(--font-color);\r\n    border:0;\r\n    background-color:white;\r\n    display:flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 12px;\r\n}\r\n.btn:hover {\r\n    background-color:var(--main-color);\r\n}\r\n.content {\r\n    padding: 36px;\r\n}\r\n.content-header {\r\n    border-radius: 8px;\r\n    height: 100px;\r\n    background-color: var(--main-color);\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.content-header h2 {\r\n    color:white;\r\n    font-size: 2.5rem;\r\n}\r\n.task-btn {\r\n    text-align: left;\r\n    width:100%;\r\n    height:40px;\r\n    margin-top:12px;\r\n    border-radius: 10px;\r\n}\r\n.task-btn:hover {\r\n    background-color: var(--main-color);\r\n    color:white;\r\n}\r\n.create-task {\r\n    border-radius: 12px;\r\n    margin-top:24px ;\r\n    padding:16px 24px 16px 24px;\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n    color:var(--font-color);\r\n    background-color:white;\r\n    display:none;\r\n    align-items: center;\r\n}\r\nlabel[for=\"name\"],label[for=\"due\"] {\r\n    margin-right:12px;\r\n}\r\ninput[id=\"name\"],input[id=\"due\"] {\r\n    margin-right:12px;\r\n    height: 24px;\r\n    width: 180px;\r\n}\r\n.label {\r\n    flex: 0 0 auto;\r\n}\r\n.btn-group {\r\n    \r\n    display:flex;\r\n    width:100%;\r\n    gap:6px;\r\n}\r\n.btn-group > * {\r\n    border-radius: 6px;\r\n    width:100%;\r\n    background-color:white;\r\n    border:0;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    padding:12px;\r\n    color:white;\r\n}\r\n.add {\r\n    background: green;\r\n    border:2px solid transparent;\r\n}\r\n.add:hover {\r\n    background-color:white;\r\n    border:2px solid green;\r\n    color:var(--font-color);\r\n}\r\n.cancel {\r\n    background-color: red;\r\n    border:2px solid transparent;\r\n}\r\n.cancel:hover {\r\n    background-color:white;\r\n    border:2px solid red;\r\n    color:var(--font-color);\r\n}\r\n.task {\r\n    border-radius: 10px;\r\n    margin-top:10px;\r\n    background-color: white;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    padding:12px 24px 12px 24px;\r\n    color:var(--font-color);\r\n}\r\n.task-name,.task-date {\r\n    display:flex;\r\n    gap:12px;\r\n}\r\n.task-delete {\r\n    background-color:white;\r\n    padding:0;\r\n    border:0;\r\n}\r\n.project {\r\n    text-align: center;\r\n    font-size: 1.3rem;\r\n    margin: 12px 0 12px 0;\r\n    padding:24px;\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap:48px;\r\n}\r\n.remove-project {\r\n    background-color: inherit;\r\n    padding:0;\r\n    border:0;\r\n    display:flex;\r\n}\r\n.project:hover{\r\n    background-color:var(--main-color);\r\n    display:flex;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/close-circle.png":
/*!******************************!*\
  !*** ./src/close-circle.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/fc49cb91e6ad9ff48a6a.png";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _close_circle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close-circle.png */ "./src/close-circle.png");
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");



(function(){})();
// JS DOMs
const addProjectbtn = document.querySelector('.btn');
const projectTaskNav = document.querySelector('.project-task');
const createProjectform = document.querySelector('.create-project');
const addTaskbtn = document.querySelector('.task-btn');
const createTaskForm = document.querySelector(".create-task");
const taskList = document.querySelector('.taskList');
const projectList = document.querySelector('.projectList');
const storages = document.querySelectorAll('.storage');
let inputName = document.querySelector('#name');
let inputDue = document.querySelector('#due');
// Task Class
class taskCreate{
    constructor(name,dueDate,index) {
        this.name = name;
        this.dueDate = dueDate;
        this.index = index;
    }
}
// main storage
// let index = ['index'];
// let indexToday = ['today'];
// let indexWeek = ['week'];
let index = [];
let indexToday = [];
let indexWeek = [];
let storage = {'index':index,
              'indexToday':indexToday,
              'indexWeek':indexWeek,              
}
// Storage Manipulation
let currentStorage = 'index';
// Task Button SHOW/HIDE Functions
addTaskbtn.addEventListener('click',showTaskForm);
function taskbtnToggle() {
    if (currentStorage == 'indexToday' || currentStorage == 'indexWeek'){
        hidetaskbtn();
        createTaskForm.style.display = 'none';
    } else {
        showTaskbtn();
    }
}
function showTaskForm() {
    addTaskbtn.style.display = 'none';
    createTaskForm.style.display = 'flex';
}
function hideTaskForm() {
    addTaskbtn.style.display = 'flex';
    createTaskForm.style.display = 'none';
}
(function refreshStorage() {
    storages.forEach((child) => {
        child.addEventListener('click',changeStorage);
    });
})();

function hidetaskbtn() {
    addTaskbtn.style.display = 'none';
}
function showTaskbtn() {
    addTaskbtn.style.display = 'flex';
}
function changeStorage() {
    currentStorage = `${this.getAttribute('value')}`;
    console.log(storage);
    const addButton = document.querySelector('.add');
    addButton.removeEventListener('click', createTaskHandler);
    taskDOM();
    updateInbox(storage[currentStorage]);
    taskbtnToggle();
}
// Task Creation Functions
function taskDOM() {
    const addButton = document.querySelector('.add');
    const cancelButton = document.querySelector('.cancel');
    addButton.addEventListener('click', createTaskHandler);
    cancelButton.addEventListener('click', hideTaskForm);
}
function createTaskHandler() {
    createTask(storage[currentStorage]);
}
taskDOM();
// storage is object
// Initialize task and assigns it to respective storage
function createTask(storage) {
    const task = new taskCreate(inputName.value,inputDue.value,index.length);
    storage.unshift(task);
    updateToday();
    updateInbox(storage);
}
console.log('hi');
function updateToday() {
    indexToday.forEach( (object) => {
        indexToday.pop();
    });
    index.forEach( (object) => {
        console.log(object.dueDate);
        if ((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(object.dueDate))) {
            indexToday.unshift(object);
        }
            
    });
}
function updateWeek() {
}
// Checks taskList and updates based on Storage or Changes/Deletion
function updateInbox(storage) {
    refreshIndex(storage);
    addInbox(storage);
}
function addInbox(storage) {
    console.log(storage)
    function deleteListener(event) {
        deleteTask(event,storage);
    }
    storage.forEach( (taskIndex)=> {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');
        taskContainer.setAttribute('id',`${taskIndex.index}`);
            const taskNameContainer = document.createElement('div');
            taskNameContainer.classList.add('task-name');
            taskContainer.appendChild(taskNameContainer);
                const checkBox = document.createElement('input');
                checkBox.setAttribute('type','checkbox');
                checkBox.setAttribute('value',`${taskIndex.index}`);
                taskNameContainer.appendChild(checkBox);

                const taskName = document.createElement('h3');
                taskName.textContent = `${taskIndex.name}`;
                taskNameContainer.appendChild(taskName);
            const taskDueContainer = document.createElement('div');
            taskDueContainer.classList.add('task-date');
            taskContainer.appendChild(taskDueContainer);
                const taskDue = document.createElement('h3');
                taskDue.textContent = `${taskIndex.dueDate}`;
                taskDueContainer.appendChild(taskDue);
                if (!(currentStorage == 'indexToday' || currentStorage == 'indexWeek')){
                    const taskDelete = document.createElement('button');
                    taskDelete.classList.add('task-delete');
                    taskDelete.setAttribute('value',`${taskIndex.index}`);
                    taskDueContainer.appendChild(taskDelete);
                    const taskDeleteImage = document.createElement('img');
                    taskDeleteImage.src = _close_circle_png__WEBPACK_IMPORTED_MODULE_1__;
                    taskDelete.appendChild(taskDeleteImage);
                    
                    taskDelete.addEventListener('click', deleteListener);
                }
                
        taskList.appendChild(taskContainer);
    });
}
function refreshIndex() {
    while(taskList.childNodes.length != 0) {
        taskList.removeChild(taskList.lastChild);
    }
    reAssignIndex();
}
function reAssignIndex() {
    let indexNo = 0;
    storage[currentStorage].forEach((child)=> {
        child.index = indexNo;
        indexNo++;
    });
}
function deleteTask(e,storage){
    storage.splice(e.target.parentElement.value,1);
    updateInbox(storage);
    console.log(storage);
};
// Project SHOW/HIDE Functions
addProjectbtn.addEventListener('click',showAddProjectForm);
function showAddProjectForm() {
    hideAddProjectbtn();
    createProjectform.style.display = 'flow';
}
function showAddProjectbtn() {
    projectTaskNav.style.display = 'flow';
    createProjectform.style.display = 'none';
}
function hideAddProjectbtn() {
    projectTaskNav.style.display = 'none';
}
(function projectDOM() {
    const addButton = document.querySelector('.add-project');
    const cancelButton = document.querySelector('.cancel-project'); 
    cancelButton.addEventListener('click', showAddProjectbtn);
})();




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQixxQkFBcUIsS0FBSyxtQkFBbUIsMkNBQTJDLHFCQUFxQixLQUFLLFdBQVcsZ0ZBQWdGLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVks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Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL20tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL20tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL20tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL20tdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL20tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL20tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL20tdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtLW1haW4tY29sb3I6ICM0MUI3QUQ7XFxyXFxuICAgIC0tZm9udC1jb2xvcjojMzc0OTU5O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OjEwMHZoO1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuNWZyO1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG59XFxyXFxuLmxvZ28ge1xcclxcbiAgICBoZWlnaHQ6IDc1JTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG4uc2lkZS1iYXIge1xcclxcbiAgICBwYWRkaW5nOiAzNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6dmFyKC0tZm9udC1jb2xvcik7IFxcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XFxyXFxufVxcclxcbi5tYWluLXRhc2t7XFxyXFxuICAgIFxcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRibHVlO1xcclxcbiAgICBtYXJnaW46IDEycHggMCAxMnB4IDA7XFxyXFxufVxcclxcbi5pbmJveCwuZGFpbHktdGFzaywud2Vla2x5LXRhc2t7XFxyXFxuICAgIHBhZGRpbmc6MjRweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOjEycHg7XFxyXFxufVxcclxcbi5pbmJveDpob3ZlciwuZGFpbHktdGFzazpob3Zlciwud2Vla2x5LXRhc2s6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuLnByb2plY3QtdGFza3tcXHJcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXHJcXG4gICAgbWFyZ2luOiAxMnB4IDAgMTJweCAwO1xcclxcbn1cXHJcXG4uY3JlYXRlLXByb2plY3Qge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIHdpZHRoOjkwJTtcXHJcXG4gICAgcGFkZGluZzoxMnB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpOyAgICBcXHJcXG4gICAgZGlzcGxheTpub25lO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxufVxcclxcbmxhYmVsW2Zvcj1cXFwicHJvamVjdC1uYW1lXFxcIl17XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDsgICBcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206OHB4O1xcclxcbn1cXHJcXG5pbnB1dFtpZD1cXFwicHJvamVjdC1uYW1lXFxcIl0ge1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG4gICAgd2lkdGg6OTclO1xcclxcbiAgICBoZWlnaHQ6MzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOnZhcigtLWZvbnQtY29sb3IpNzQ5NTg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcbi5jcmVhdGUtcHJvamVjdC1idG4ge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDI0cHggMCAyNHB4O1xcclxcbiAgICBnYXA6NHB4O1xcclxcbn1cXHJcXG4uYWRkLXByb2plY3QsLmNhbmNlbC1wcm9qZWN0IHtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgZmxleC1iYXNpczogMDtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBwYWRkaW5nOjZweDtcXHJcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgZ3JlZW47XFxyXFxufVxcclxcbi5jYW5jZWwtcHJvamVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLmNhbmNlbC1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuLmJ0biB7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIHBhZGRpbmc6MjRweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nOiAzNnB4O1xcclxcbn1cXHJcXG4uY29udGVudC1oZWFkZXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uY29udGVudC1oZWFkZXIgaDIge1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcbi50YXNrLWJ0biB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGhlaWdodDo0MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOjEycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi50YXNrLWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuLmNyZWF0ZS10YXNrIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDoyNHB4IDtcXHJcXG4gICAgcGFkZGluZzoxNnB4IDI0cHggMTZweCAyNHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6dmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxubGFiZWxbZm9yPVxcXCJuYW1lXFxcIl0sbGFiZWxbZm9yPVxcXCJkdWVcXFwiXSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDoxMnB4O1xcclxcbn1cXHJcXG5pbnB1dFtpZD1cXFwibmFtZVxcXCJdLGlucHV0W2lkPVxcXCJkdWVcXFwiXSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDoxMnB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIHdpZHRoOiAxODBweDtcXHJcXG59XFxyXFxuLmxhYmVsIHtcXHJcXG4gICAgZmxleDogMCAwIGF1dG87XFxyXFxufVxcclxcbi5idG4tZ3JvdXAge1xcclxcbiAgICBcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBnYXA6NnB4O1xcclxcbn1cXHJcXG4uYnRuLWdyb3VwID4gKiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgcGFkZGluZzoxMnB4O1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuLmFkZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uYWRkOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCBncmVlbjtcXHJcXG4gICAgY29sb3I6dmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcbi5jYW5jZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5jYW5jZWw6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcXHJcXG4gICAgY29sb3I6dmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcbi50YXNrIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6MTJweCAyNHB4IDEycHggMjRweDtcXHJcXG4gICAgY29sb3I6dmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcbi50YXNrLW5hbWUsLnRhc2stZGF0ZSB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZ2FwOjEycHg7XFxyXFxufVxcclxcbi50YXNrLWRlbGV0ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxufVxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgbWFyZ2luOiAxMnB4IDAgMTJweCAwO1xcclxcbiAgICBwYWRkaW5nOjI0cHg7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDo0OHB4O1xcclxcbn1cXHJcXG4ucmVtb3ZlLXByb2plY3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxufVxcclxcbi5wcm9qZWN0OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7SUFDSSxRQUFRO0FBQ1o7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7O0lBRUksK0JBQStCO0lBQy9CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYixr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IkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbn1cXHJcXG46cm9vdCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxyXFxuICAgIC0tbWFpbi1jb2xvcjogIzQxQjdBRDtcXHJcXG4gICAgLS1mb250LWNvbG9yOiMzNzQ5NTk7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6MTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMi41ZnI7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcclxcbn1cXHJcXG4ubG9nbyB7XFxyXFxuICAgIGhlaWdodDogNzUlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxyXFxufVxcclxcbi5zaWRlLWJhciB7XFxyXFxuICAgIHBhZGRpbmc6IDM2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTsgXFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQztcXHJcXG59XFxyXFxuLm1haW4tdGFza3tcXHJcXG4gICAgXFxyXFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGJsdWU7XFxyXFxuICAgIG1hcmdpbjogMTJweCAwIDEycHggMDtcXHJcXG59XFxyXFxuLmluYm94LC5kYWlseS10YXNrLC53ZWVrbHktdGFza3tcXHJcXG4gICAgcGFkZGluZzoyNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6MTJweDtcXHJcXG59XFxyXFxuLmluYm94OmhvdmVyLC5kYWlseS10YXNrOmhvdmVyLC53ZWVrbHktdGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG4ucHJvamVjdC10YXNre1xcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRibHVlO1xcclxcbiAgICBtYXJnaW46IDEycHggMCAxMnB4IDA7XFxyXFxufVxcclxcbi5jcmVhdGUtcHJvamVjdCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgd2lkdGg6OTAlO1xcclxcbiAgICBwYWRkaW5nOjEycHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7ICAgIFxcclxcbiAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG59XFxyXFxubGFiZWxbZm9yPVxcXCJwcm9qZWN0LW5hbWVcXFwiXXtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDpib2xkOyAgIFxcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTo4cHg7XFxyXFxufVxcclxcbmlucHV0W2lkPVxcXCJwcm9qZWN0LW5hbWVcXFwiXSB7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbiAgICB3aWR0aDo5NyU7XFxyXFxuICAgIGhlaWdodDozMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDo2MDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6dmFyKC0tZm9udC1jb2xvcik3NDk1ODtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0biB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjRweCAwIDI0cHg7XFxyXFxuICAgIGdhcDo0cHg7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdCwuY2FuY2VsLXByb2plY3Qge1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBmbGV4LWJhc2lzOiAwO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIHBhZGRpbmc6NnB4O1xcclxcbiAgICBmb250LXNpemU6MS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDo1MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG59XFxyXFxuLmFkZC1wcm9qZWN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCBncmVlbjtcXHJcXG59XFxyXFxuLmNhbmNlbC1wcm9qZWN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uY2FuY2VsLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xcclxcbn1cXHJcXG4uYnRuIHtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgcGFkZGluZzoyNHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxufVxcclxcbi5idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDM2cHg7XFxyXFxufVxcclxcbi5jb250ZW50LWhlYWRlciB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jb250ZW50LWhlYWRlciBoMiB7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuLnRhc2stYnRuIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgaGVpZ2h0OjQwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6MTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLnRhc2stYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uY3JlYXRlLXRhc2sge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOjI0cHggO1xcclxcbiAgICBwYWRkaW5nOjE2cHggMjRweCAxNnB4IDI0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTpub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5sYWJlbFtmb3I9XFxcIm5hbWVcXFwiXSxsYWJlbFtmb3I9XFxcImR1ZVxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjEycHg7XFxyXFxufVxcclxcbmlucHV0W2lkPVxcXCJuYW1lXFxcIl0saW5wdXRbaWQ9XFxcImR1ZVxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjEycHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgd2lkdGg6IDE4MHB4O1xcclxcbn1cXHJcXG4ubGFiZWwge1xcclxcbiAgICBmbGV4OiAwIDAgYXV0bztcXHJcXG59XFxyXFxuLmJ0bi1ncm91cCB7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGdhcDo2cHg7XFxyXFxufVxcclxcbi5idG4tZ3JvdXAgPiAqIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBwYWRkaW5nOjEycHg7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uYWRkIHtcXHJcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5hZGQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIGdyZWVuO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuLmNhbmNlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLmNhbmNlbDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuLnRhc2sge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzoxMnB4IDI0cHggMTJweCAyNHB4O1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuLnRhc2stbmFtZSwudGFzay1kYXRlIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBnYXA6MTJweDtcXHJcXG59XFxyXFxuLnRhc2stZGVsZXRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzowO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG59XFxyXFxuLnByb2plY3Qge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBtYXJnaW46IDEycHggMCAxMnB4IDA7XFxyXFxuICAgIHBhZGRpbmc6MjRweDtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOjQ4cHg7XFxyXFxufVxcclxcbi5yZW1vdmUtcHJvamVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG59XFxyXFxuLnByb2plY3Q6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB4IGZyb20gJy4vY2xvc2UtY2lyY2xlLnBuZyc7XHJcbmltcG9ydCBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzVG9kYXknO1xyXG4oZnVuY3Rpb24oKXt9KSgpO1xyXG4vLyBKUyBET01zXHJcbmNvbnN0IGFkZFByb2plY3RidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XHJcbmNvbnN0IHByb2plY3RUYXNrTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFzaycpO1xyXG5jb25zdCBjcmVhdGVQcm9qZWN0Zm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdCcpO1xyXG5jb25zdCBhZGRUYXNrYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYnRuJyk7XHJcbmNvbnN0IGNyZWF0ZVRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtdGFza1wiKTtcclxuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0xpc3QnKTtcclxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcclxuY29uc3Qgc3RvcmFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RvcmFnZScpO1xyXG5sZXQgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcclxubGV0IGlucHV0RHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZScpO1xyXG4vLyBUYXNrIENsYXNzXHJcbmNsYXNzIHRhc2tDcmVhdGV7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGR1ZURhdGUsaW5kZXgpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG59XHJcbi8vIG1haW4gc3RvcmFnZVxyXG4vLyBsZXQgaW5kZXggPSBbJ2luZGV4J107XHJcbi8vIGxldCBpbmRleFRvZGF5ID0gWyd0b2RheSddO1xyXG4vLyBsZXQgaW5kZXhXZWVrID0gWyd3ZWVrJ107XHJcbmxldCBpbmRleCA9IFtdO1xyXG5sZXQgaW5kZXhUb2RheSA9IFtdO1xyXG5sZXQgaW5kZXhXZWVrID0gW107XHJcbmxldCBzdG9yYWdlID0geydpbmRleCc6aW5kZXgsXHJcbiAgICAgICAgICAgICAgJ2luZGV4VG9kYXknOmluZGV4VG9kYXksXHJcbiAgICAgICAgICAgICAgJ2luZGV4V2Vlayc6aW5kZXhXZWVrLCAgICAgICAgICAgICAgXHJcbn1cclxuLy8gU3RvcmFnZSBNYW5pcHVsYXRpb25cclxubGV0IGN1cnJlbnRTdG9yYWdlID0gJ2luZGV4JztcclxuLy8gVGFzayBCdXR0b24gU0hPVy9ISURFIEZ1bmN0aW9uc1xyXG5hZGRUYXNrYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxzaG93VGFza0Zvcm0pO1xyXG5mdW5jdGlvbiB0YXNrYnRuVG9nZ2xlKCkge1xyXG4gICAgaWYgKGN1cnJlbnRTdG9yYWdlID09ICdpbmRleFRvZGF5JyB8fCBjdXJyZW50U3RvcmFnZSA9PSAnaW5kZXhXZWVrJyl7XHJcbiAgICAgICAgaGlkZXRhc2tidG4oKTtcclxuICAgICAgICBjcmVhdGVUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93VGFza2J0bigpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNob3dUYXNrRm9ybSgpIHtcclxuICAgIGFkZFRhc2tidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGNyZWF0ZVRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbn1cclxuZnVuY3Rpb24gaGlkZVRhc2tGb3JtKCkge1xyXG4gICAgYWRkVGFza2J0bi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgY3JlYXRlVGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG4oZnVuY3Rpb24gcmVmcmVzaFN0b3JhZ2UoKSB7XHJcbiAgICBzdG9yYWdlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjaGFuZ2VTdG9yYWdlKTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gaGlkZXRhc2tidG4oKSB7XHJcbiAgICBhZGRUYXNrYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuZnVuY3Rpb24gc2hvd1Rhc2tidG4oKSB7XHJcbiAgICBhZGRUYXNrYnRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlU3RvcmFnZSgpIHtcclxuICAgIGN1cnJlbnRTdG9yYWdlID0gYCR7dGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyl9YDtcclxuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UpO1xyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpO1xyXG4gICAgYWRkQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlVGFza0hhbmRsZXIpO1xyXG4gICAgdGFza0RPTSgpO1xyXG4gICAgdXBkYXRlSW5ib3goc3RvcmFnZVtjdXJyZW50U3RvcmFnZV0pO1xyXG4gICAgdGFza2J0blRvZ2dsZSgpO1xyXG59XHJcbi8vIFRhc2sgQ3JlYXRpb24gRnVuY3Rpb25zXHJcbmZ1bmN0aW9uIHRhc2tET00oKSB7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkJyk7XHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJyk7XHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUYXNrSGFuZGxlcik7XHJcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlVGFza0Zvcm0pO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tIYW5kbGVyKCkge1xyXG4gICAgY3JlYXRlVGFzayhzdG9yYWdlW2N1cnJlbnRTdG9yYWdlXSk7XHJcbn1cclxudGFza0RPTSgpO1xyXG4vLyBzdG9yYWdlIGlzIG9iamVjdFxyXG4vLyBJbml0aWFsaXplIHRhc2sgYW5kIGFzc2lnbnMgaXQgdG8gcmVzcGVjdGl2ZSBzdG9yYWdlXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2soc3RvcmFnZSkge1xyXG4gICAgY29uc3QgdGFzayA9IG5ldyB0YXNrQ3JlYXRlKGlucHV0TmFtZS52YWx1ZSxpbnB1dER1ZS52YWx1ZSxpbmRleC5sZW5ndGgpO1xyXG4gICAgc3RvcmFnZS51bnNoaWZ0KHRhc2spO1xyXG4gICAgdXBkYXRlVG9kYXkoKTtcclxuICAgIHVwZGF0ZUluYm94KHN0b3JhZ2UpO1xyXG59XHJcbmNvbnNvbGUubG9nKCdoaScpO1xyXG5mdW5jdGlvbiB1cGRhdGVUb2RheSgpIHtcclxuICAgIGluZGV4VG9kYXkuZm9yRWFjaCggKG9iamVjdCkgPT4ge1xyXG4gICAgICAgIGluZGV4VG9kYXkucG9wKCk7XHJcbiAgICB9KTtcclxuICAgIGluZGV4LmZvckVhY2goIChvYmplY3QpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhvYmplY3QuZHVlRGF0ZSk7XHJcbiAgICAgICAgaWYgKGlzVG9kYXkobmV3IERhdGUob2JqZWN0LmR1ZURhdGUpKSkge1xyXG4gICAgICAgICAgICBpbmRleFRvZGF5LnVuc2hpZnQob2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlV2VlaygpIHtcclxufVxyXG4vLyBDaGVja3MgdGFza0xpc3QgYW5kIHVwZGF0ZXMgYmFzZWQgb24gU3RvcmFnZSBvciBDaGFuZ2VzL0RlbGV0aW9uXHJcbmZ1bmN0aW9uIHVwZGF0ZUluYm94KHN0b3JhZ2UpIHtcclxuICAgIHJlZnJlc2hJbmRleChzdG9yYWdlKTtcclxuICAgIGFkZEluYm94KHN0b3JhZ2UpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEluYm94KHN0b3JhZ2UpIHtcclxuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UpXHJcbiAgICBmdW5jdGlvbiBkZWxldGVMaXN0ZW5lcihldmVudCkge1xyXG4gICAgICAgIGRlbGV0ZVRhc2soZXZlbnQsc3RvcmFnZSk7XHJcbiAgICB9XHJcbiAgICBzdG9yYWdlLmZvckVhY2goICh0YXNrSW5kZXgpPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLGAke3Rhc2tJbmRleC5pbmRleH1gKTtcclxuICAgICAgICAgICAgY29uc3QgdGFza05hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGFza05hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05hbWVDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndmFsdWUnLGAke3Rhc2tJbmRleC5pbmRleH1gKTtcclxuICAgICAgICAgICAgICAgIHRhc2tOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IGAke3Rhc2tJbmRleC5uYW1lfWA7XHJcbiAgICAgICAgICAgICAgICB0YXNrTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGFza0R1ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKTtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRHVlQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgICAgICAgICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IGAke3Rhc2tJbmRleC5kdWVEYXRlfWA7XHJcbiAgICAgICAgICAgICAgICB0YXNrRHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoY3VycmVudFN0b3JhZ2UgPT0gJ2luZGV4VG9kYXknIHx8IGN1cnJlbnRTdG9yYWdlID09ICdpbmRleFdlZWsnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrRGVsZXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLGAke3Rhc2tJbmRleC5pbmRleH1gKTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrRHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZWxldGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEZWxldGVJbWFnZS5zcmMgPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEZWxldGUuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUltYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0YXNrRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiByZWZyZXNoSW5kZXgoKSB7XHJcbiAgICB3aGlsZSh0YXNrTGlzdC5jaGlsZE5vZGVzLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgdGFza0xpc3QucmVtb3ZlQ2hpbGQodGFza0xpc3QubGFzdENoaWxkKTtcclxuICAgIH1cclxuICAgIHJlQXNzaWduSW5kZXgoKTtcclxufVxyXG5mdW5jdGlvbiByZUFzc2lnbkluZGV4KCkge1xyXG4gICAgbGV0IGluZGV4Tm8gPSAwO1xyXG4gICAgc3RvcmFnZVtjdXJyZW50U3RvcmFnZV0uZm9yRWFjaCgoY2hpbGQpPT4ge1xyXG4gICAgICAgIGNoaWxkLmluZGV4ID0gaW5kZXhObztcclxuICAgICAgICBpbmRleE5vKys7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBkZWxldGVUYXNrKGUsc3RvcmFnZSl7XHJcbiAgICBzdG9yYWdlLnNwbGljZShlLnRhcmdldC5wYXJlbnRFbGVtZW50LnZhbHVlLDEpO1xyXG4gICAgdXBkYXRlSW5ib3goc3RvcmFnZSk7XHJcbiAgICBjb25zb2xlLmxvZyhzdG9yYWdlKTtcclxufTtcclxuLy8gUHJvamVjdCBTSE9XL0hJREUgRnVuY3Rpb25zXHJcbmFkZFByb2plY3RidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHNob3dBZGRQcm9qZWN0Rm9ybSk7XHJcbmZ1bmN0aW9uIHNob3dBZGRQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGhpZGVBZGRQcm9qZWN0YnRuKCk7XHJcbiAgICBjcmVhdGVQcm9qZWN0Zm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Zsb3cnO1xyXG59XHJcbmZ1bmN0aW9uIHNob3dBZGRQcm9qZWN0YnRuKCkge1xyXG4gICAgcHJvamVjdFRhc2tOYXYuc3R5bGUuZGlzcGxheSA9ICdmbG93JztcclxuICAgIGNyZWF0ZVByb2plY3Rmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuZnVuY3Rpb24gaGlkZUFkZFByb2plY3RidG4oKSB7XHJcbiAgICBwcm9qZWN0VGFza05hdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcbihmdW5jdGlvbiBwcm9qZWN0RE9NKCkge1xyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLXByb2plY3QnKTsgXHJcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QWRkUHJvamVjdGJ0bik7XHJcbn0pKCk7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==