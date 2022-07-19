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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin:0;\r\n}\r\n:root {\r\n    box-sizing: border-box;\r\n    font-family: Roboto, sans-serif;\r\n    --main-color: #41B7AD;\r\n    --font-color:#374959;\r\n}\r\nbody {\r\n    margin: 0;\r\n}\r\n#container {\r\n    height:100vh;\r\n    display:grid;\r\n    grid-template-rows: 90px 1fr;\r\n    grid-template-columns: 1fr 2.5fr;\r\n}\r\n.header {\r\n    grid-column: 1 / 3;\r\n    background-color: var(--main-color);\r\n    color:white;\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content:center;\r\n}\r\n.logo {\r\n    height: 75%;\r\n    margin-right: 40px;\r\n}\r\n.side-bar {\r\n    padding: 36px;\r\n    background-color: white;\r\n    color:var(--font-color); \r\n}\r\n.content {\r\n    background-color: #ECECEC;\r\n}\r\n.main-task{\r\n    \r\n    border-top: 2px solid lightblue;\r\n    margin: 12px 0 12px 0;\r\n}\r\n.inbox,.daily-task,.weekly-task{\r\n    padding:24px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap:12px;\r\n}\r\n.inbox:hover,.daily-task:hover,.weekly-task:hover {\r\n    background: var(--main-color);\r\n}\r\n.project-task{\r\n    border-top: 2px solid lightblue;\r\n    margin: 12px 0 12px 0;\r\n}\r\n.create-project {\r\n    border-radius: 8px;\r\n    width:90%;\r\n    padding:12px;\r\n    color: var(--font-color);\r\n    border: 2px solid var(--main-color);    \r\n    display:flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\nlabel[for=\"project-name\"]{\r\n    display:block;\r\n    text-align: center;\r\n    font-weight:bold;   \r\n    font-size: 1.4rem;\r\n    margin-bottom:8px;\r\n}\r\ninput[id=\"project-name\"] {\r\n    border:0;\r\n    width:97%;\r\n    height:30px;\r\n    background-color: lightgray;\r\n    font-size: 1.2rem;\r\n    font-weight:600;\r\n    text-align: center;\r\n    color:var(--font-color)74958;\r\n}\r\n.create-project-btn {\r\n    display:flex;\r\n    justify-content: center;\r\n    padding: 0 24px 0 24px;\r\n    gap:4px;\r\n}\r\n.add-project,.cancel-project {\r\n    color:white;\r\n    border-radius: 6px;\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    padding:6px;\r\n    font-size:1.5rem;\r\n    font-weight:500;\r\n    background-color: white;\r\n    border:0;\r\n}\r\n.add-project {\r\n    background-color: green;\r\n    border:2px solid transparent;\r\n}\r\n.add-project:hover {\r\n    color: var(--font-color);\r\n    background-color:white;\r\n    border:2px solid green;\r\n}\r\n.cancel-project {\r\n    background-color: red;\r\n    border:2px solid transparent;\r\n}\r\n.cancel-project:hover {\r\n    color: var(--font-color);\r\n    background-color:white;\r\n    border:2px solid red;\r\n}\r\n.btn {\r\n    width:100%;\r\n    padding:24px;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: var(--font-color);\r\n    border:0;\r\n    background-color:white;\r\n    display:flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 12px;\r\n}\r\n.btn:hover {\r\n    background-color:var(--main-color);\r\n}\r\n.content {\r\n    padding: 36px;\r\n}\r\n.content-header {\r\n    border-radius: 8px;\r\n    height: 100px;\r\n    background-color: var(--main-color);\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.content-header h2 {\r\n    color:white;\r\n    font-size: 2.5rem;\r\n}\r\n.task-btn {\r\n    text-align: left;\r\n    width:100%;\r\n    height:40px;\r\n    margin-top:12px;\r\n    border-radius: 10px;\r\n}\r\n.task-btn:hover {\r\n    background-color: var(--main-color);\r\n    color:white;\r\n}\r\n.create-task {\r\n    border-radius: 12px;\r\n    margin-top:24px ;\r\n    padding:16px 24px 16px 24px;\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n    color:var(--font-color);\r\n    background-color:white;\r\n    display:flex;\r\n    align-items: center;\r\n}\r\nlabel[for=\"name\"],label[for=\"due\"] {\r\n    margin-right:12px;\r\n}\r\ninput[id=\"name\"],input[id=\"due\"] {\r\n    margin-right:12px;\r\n    height: 24px;\r\n    width: 180px;\r\n}\r\n.label {\r\n    flex: 0 0 auto;\r\n}\r\n.btn-group {\r\n    \r\n    display:flex;\r\n    width:100%;\r\n    gap:6px;\r\n}\r\n.btn-group > * {\r\n    border-radius: 6px;\r\n    width:100%;\r\n    background-color:white;\r\n    border:0;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    padding:12px;\r\n    color:white;\r\n}\r\n.add {\r\n    background: green;\r\n    border:2px solid transparent;\r\n}\r\n.add:hover {\r\n    background-color:white;\r\n    border:2px solid green;\r\n    color:var(--font-color);\r\n}\r\n.cancel {\r\n    background-color: red;\r\n    border:2px solid transparent;\r\n}\r\n.cancel:hover {\r\n    background-color:white;\r\n    border:2px solid red;\r\n    color:var(--font-color);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,QAAQ;AACZ;AACA;IACI,sBAAsB;IACtB,+BAA+B;IAC/B,qBAAqB;IACrB,oBAAoB;AACxB;AACA;IACI,SAAS;AACb;AACA;IACI,YAAY;IACZ,YAAY;IACZ,4BAA4B;IAC5B,gCAAgC;AACpC;AACA;IACI,kBAAkB;IAClB,mCAAmC;IACnC,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,uBAAuB;AAC3B;AACA;IACI,yBAAyB;AAC7B;AACA;;IAEI,+BAA+B;IAC/B,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;AACA;IACI,6BAA6B;AACjC;AACA;IACI,+BAA+B;IAC/B,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,wBAAwB;IACxB,mCAAmC;IACnC,YAAY;IACZ,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,QAAQ;IACR,SAAS;IACT,WAAW;IACX,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;IACtB,OAAO;AACX;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,uBAAuB;IACvB,QAAQ;AACZ;AACA;IACI,uBAAuB;IACvB,4BAA4B;AAChC;AACA;IACI,wBAAwB;IACxB,sBAAsB;IACtB,sBAAsB;AAC1B;AACA;IACI,qBAAqB;IACrB,4BAA4B;AAChC;AACA;IACI,wBAAwB;IACxB,sBAAsB;IACtB,oBAAoB;AACxB;AACA;IACI,UAAU;IACV,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,wBAAwB;IACxB,QAAQ;IACR,sBAAsB;IACtB,YAAY;IACZ,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,kCAAkC;AACtC;AACA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mCAAmC;IACnC,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,gBAAgB;IAChB,UAAU;IACV,WAAW;IACX,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,mCAAmC;IACnC,WAAW;AACf;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,2BAA2B;IAC3B,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;IACvB,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,cAAc;AAClB;AACA;;IAEI,YAAY;IACZ,UAAU;IACV,OAAO;AACX;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,sBAAsB;IACtB,QAAQ;IACR,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,WAAW;AACf;AACA;IACI,iBAAiB;IACjB,4BAA4B;AAChC;AACA;IACI,sBAAsB;IACtB,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,qBAAqB;IACrB,4BAA4B;AAChC;AACA;IACI,sBAAsB;IACtB,oBAAoB;IACpB,uBAAuB;AAC3B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n* {\r\n    margin:0;\r\n}\r\n:root {\r\n    box-sizing: border-box;\r\n    font-family: Roboto, sans-serif;\r\n    --main-color: #41B7AD;\r\n    --font-color:#374959;\r\n}\r\nbody {\r\n    margin: 0;\r\n}\r\n#container {\r\n    height:100vh;\r\n    display:grid;\r\n    grid-template-rows: 90px 1fr;\r\n    grid-template-columns: 1fr 2.5fr;\r\n}\r\n.header {\r\n    grid-column: 1 / 3;\r\n    background-color: var(--main-color);\r\n    color:white;\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content:center;\r\n}\r\n.logo {\r\n    height: 75%;\r\n    margin-right: 40px;\r\n}\r\n.side-bar {\r\n    padding: 36px;\r\n    background-color: white;\r\n    color:var(--font-color); \r\n}\r\n.content {\r\n    background-color: #ECECEC;\r\n}\r\n.main-task{\r\n    \r\n    border-top: 2px solid lightblue;\r\n    margin: 12px 0 12px 0;\r\n}\r\n.inbox,.daily-task,.weekly-task{\r\n    padding:24px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap:12px;\r\n}\r\n.inbox:hover,.daily-task:hover,.weekly-task:hover {\r\n    background: var(--main-color);\r\n}\r\n.project-task{\r\n    border-top: 2px solid lightblue;\r\n    margin: 12px 0 12px 0;\r\n}\r\n.create-project {\r\n    border-radius: 8px;\r\n    width:90%;\r\n    padding:12px;\r\n    color: var(--font-color);\r\n    border: 2px solid var(--main-color);    \r\n    display:flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\nlabel[for=\"project-name\"]{\r\n    display:block;\r\n    text-align: center;\r\n    font-weight:bold;   \r\n    font-size: 1.4rem;\r\n    margin-bottom:8px;\r\n}\r\ninput[id=\"project-name\"] {\r\n    border:0;\r\n    width:97%;\r\n    height:30px;\r\n    background-color: lightgray;\r\n    font-size: 1.2rem;\r\n    font-weight:600;\r\n    text-align: center;\r\n    color:var(--font-color)74958;\r\n}\r\n.create-project-btn {\r\n    display:flex;\r\n    justify-content: center;\r\n    padding: 0 24px 0 24px;\r\n    gap:4px;\r\n}\r\n.add-project,.cancel-project {\r\n    color:white;\r\n    border-radius: 6px;\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    padding:6px;\r\n    font-size:1.5rem;\r\n    font-weight:500;\r\n    background-color: white;\r\n    border:0;\r\n}\r\n.add-project {\r\n    background-color: green;\r\n    border:2px solid transparent;\r\n}\r\n.add-project:hover {\r\n    color: var(--font-color);\r\n    background-color:white;\r\n    border:2px solid green;\r\n}\r\n.cancel-project {\r\n    background-color: red;\r\n    border:2px solid transparent;\r\n}\r\n.cancel-project:hover {\r\n    color: var(--font-color);\r\n    background-color:white;\r\n    border:2px solid red;\r\n}\r\n.btn {\r\n    width:100%;\r\n    padding:24px;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: var(--font-color);\r\n    border:0;\r\n    background-color:white;\r\n    display:flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 12px;\r\n}\r\n.btn:hover {\r\n    background-color:var(--main-color);\r\n}\r\n.content {\r\n    padding: 36px;\r\n}\r\n.content-header {\r\n    border-radius: 8px;\r\n    height: 100px;\r\n    background-color: var(--main-color);\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.content-header h2 {\r\n    color:white;\r\n    font-size: 2.5rem;\r\n}\r\n.task-btn {\r\n    text-align: left;\r\n    width:100%;\r\n    height:40px;\r\n    margin-top:12px;\r\n    border-radius: 10px;\r\n}\r\n.task-btn:hover {\r\n    background-color: var(--main-color);\r\n    color:white;\r\n}\r\n.create-task {\r\n    border-radius: 12px;\r\n    margin-top:24px ;\r\n    padding:16px 24px 16px 24px;\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n    color:var(--font-color);\r\n    background-color:white;\r\n    display:flex;\r\n    align-items: center;\r\n}\r\nlabel[for=\"name\"],label[for=\"due\"] {\r\n    margin-right:12px;\r\n}\r\ninput[id=\"name\"],input[id=\"due\"] {\r\n    margin-right:12px;\r\n    height: 24px;\r\n    width: 180px;\r\n}\r\n.label {\r\n    flex: 0 0 auto;\r\n}\r\n.btn-group {\r\n    \r\n    display:flex;\r\n    width:100%;\r\n    gap:6px;\r\n}\r\n.btn-group > * {\r\n    border-radius: 6px;\r\n    width:100%;\r\n    background-color:white;\r\n    border:0;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    padding:12px;\r\n    color:white;\r\n}\r\n.add {\r\n    background: green;\r\n    border:2px solid transparent;\r\n}\r\n.add:hover {\r\n    background-color:white;\r\n    border:2px solid green;\r\n    color:var(--font-color);\r\n}\r\n.cancel {\r\n    background-color: red;\r\n    border:2px solid transparent;\r\n}\r\n.cancel:hover {\r\n    background-color:white;\r\n    border:2px solid red;\r\n    color:var(--font-color);\r\n}"],"sourceRoot":""}]);
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

// JS DOMs
const addProjectbtn = document.querySelector('.btn');
const sideBar = document.querySelector('.side-bar');
class task{
    constructor(name,dueDate,index) {
        this.name = name;
        this.dueDate = dueDate;
        this.index = index;
    }
}
// main storage
let index = [];

addProjectbtn.addEventListener('click',showAddProjectForm);
function showAddProjectForm() {
    sideBar.removeChild(sideBar.lastElementChild);
    const projectForm = document.createElement('div');
    projectForm.classList.add('create-project');
        const projectHeader = document.createElement('div');
        projectForm.appendChild(projectHeader);
            const labelProjectName = document.createElement('label');
            labelProjectName.setAttribute('for','project-name');
            labelProjectName.textContent = 'Project Name';
            projectHeader.appendChild(labelProjectName);

            const inputProjectName = document.createElement('input');
            inputProjectName.setAttribute('id','project-name');
            inputProjectName.setAttribute('type','text');
            projectHeader.appendChild(inputProjectName);
        
        const projectButtons = document.createElement('div');
        projectButtons.classList.add('create-project-btn');
        projectForm.appendChild(projectButtons);
            const addButton = document.createElement('button');
            addButton.setAttribute('type','button');
            addButton.classList.add('add-project');
            addButton.textContent = 'Add';
            projectButtons.appendChild(addButton);

            const cancelButton = document.createElement('button');
            cancelButton.setAttribute('type','button');
            cancelButton.classList.add('cancel-project');
            cancelButton.textContent = 'Cancel';
            projectButtons.appendChild(cancelButton);
    
    sideBar.appendChild(projectForm);
}








// project storage
let projects = [];




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN0TTtBQUNBLDZDQUE2QyxpQkFBaUIsS0FBSyxXQUFXLCtCQUErQix3Q0FBd0MsOEJBQThCLDZCQUE2QixLQUFLLFVBQVUsa0JBQWtCLEtBQUssZ0JBQWdCLHFCQUFxQixxQkFBcUIscUNBQXFDLHlDQUF5QyxLQUFLLGFBQWEsMkJBQTJCLDRDQUE0QyxvQkFBb0IscUJBQXFCLDRCQUE0QiwrQkFBK0IsS0FBSyxXQUFXLG9CQUFvQiwyQkFBMkIsS0FBSyxlQUFlLHNCQUFzQixnQ0FBZ0MsaUNBQWlDLEtBQUssY0FBYyxrQ0FBa0MsS0FBSyxlQUFlLGdEQUFnRCw4QkFBOEIsS0FBSyxvQ0FBb0MscUJBQXFCLHNCQUFzQiw0QkFBNEIsaUJBQWlCLEtBQUssdURBQXVELHNDQUFzQyxLQUFLLGtCQUFrQix3Q0FBd0MsOEJBQThCLEtBQUsscUJBQXFCLDJCQUEyQixrQkFBa0IscUJBQXFCLGlDQUFpQyxnREFBZ0QscUJBQXFCLCtCQUErQixrQkFBa0IsS0FBSyxnQ0FBZ0Msc0JBQXNCLDJCQUEyQiw0QkFBNEIsMEJBQTBCLDBCQUEwQixLQUFLLGdDQUFnQyxpQkFBaUIsa0JBQWtCLG9CQUFvQixvQ0FBb0MsMEJBQTBCLHdCQUF3QiwyQkFBMkIscUNBQXFDLEtBQUsseUJBQXlCLHFCQUFxQixnQ0FBZ0MsK0JBQStCLGdCQUFnQixLQUFLLGtDQUFrQyxvQkFBb0IsMkJBQTJCLHNCQUFzQixxQkFBcUIsb0JBQW9CLHlCQUF5Qix3QkFBd0IsZ0NBQWdDLGlCQUFpQixLQUFLLGtCQUFrQixnQ0FBZ0MscUNBQXFDLEtBQUssd0JBQXdCLGlDQUFpQywrQkFBK0IsK0JBQStCLEtBQUsscUJBQXFCLDhCQUE4QixxQ0FBcUMsS0FBSywyQkFBMkIsaUNBQWlDLCtCQUErQiw2QkFBNkIsS0FBSyxVQUFVLG1CQUFtQixxQkFBcUIsd0JBQXdCLHlCQUF5QixpQ0FBaUMsaUJBQWlCLCtCQUErQixxQkFBcUIsb0NBQW9DLDRCQUE0QixrQkFBa0IsS0FBSyxnQkFBZ0IsMkNBQTJDLEtBQUssY0FBYyxzQkFBc0IsS0FBSyxxQkFBcUIsMkJBQTJCLHNCQUFzQiw0Q0FBNEMscUJBQXFCLGdDQUFnQyw0QkFBNEIsS0FBSyx3QkFBd0Isb0JBQW9CLDBCQUEwQixLQUFLLGVBQWUseUJBQXlCLG1CQUFtQixvQkFBb0Isd0JBQXdCLDRCQUE0QixLQUFLLHFCQUFxQiw0Q0FBNEMsb0JBQW9CLEtBQUssa0JBQWtCLDRCQUE0Qix5QkFBeUIsb0NBQW9DLDBCQUEwQix5QkFBeUIsZ0NBQWdDLCtCQUErQixxQkFBcUIsNEJBQTRCLEtBQUssNENBQTRDLDBCQUEwQixLQUFLLDBDQUEwQywwQkFBMEIscUJBQXFCLHFCQUFxQixLQUFLLFlBQVksdUJBQXVCLEtBQUssZ0JBQWdCLDZCQUE2QixtQkFBbUIsZ0JBQWdCLEtBQUssb0JBQW9CLDJCQUEyQixtQkFBbUIsK0JBQStCLGlCQUFpQix3QkFBd0IseUJBQXlCLHFCQUFxQixvQkFBb0IsS0FBSyxVQUFVLDBCQUEwQixxQ0FBcUMsS0FBSyxnQkFBZ0IsK0JBQStCLCtCQUErQixnQ0FBZ0MsS0FBSyxhQUFhLDhCQUE4QixxQ0FBcUMsS0FBSyxtQkFBbUIsK0JBQStCLDZCQUE2QixnQ0FBZ0MsS0FBSyxPQUFPLGdGQUFnRixVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsdUdBQXVHLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0s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QUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL20tdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL20tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL20tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL20tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL20tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL20tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL20tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbn1cXHJcXG46cm9vdCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxyXFxuICAgIC0tbWFpbi1jb2xvcjogIzQxQjdBRDtcXHJcXG4gICAgLS1mb250LWNvbG9yOiMzNzQ5NTk7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6MTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMi41ZnI7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcclxcbn1cXHJcXG4ubG9nbyB7XFxyXFxuICAgIGhlaWdodDogNzUlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxyXFxufVxcclxcbi5zaWRlLWJhciB7XFxyXFxuICAgIHBhZGRpbmc6IDM2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTsgXFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQztcXHJcXG59XFxyXFxuLm1haW4tdGFza3tcXHJcXG4gICAgXFxyXFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGJsdWU7XFxyXFxuICAgIG1hcmdpbjogMTJweCAwIDEycHggMDtcXHJcXG59XFxyXFxuLmluYm94LC5kYWlseS10YXNrLC53ZWVrbHktdGFza3tcXHJcXG4gICAgcGFkZGluZzoyNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6MTJweDtcXHJcXG59XFxyXFxuLmluYm94OmhvdmVyLC5kYWlseS10YXNrOmhvdmVyLC53ZWVrbHktdGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG4ucHJvamVjdC10YXNre1xcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRibHVlO1xcclxcbiAgICBtYXJnaW46IDEycHggMCAxMnB4IDA7XFxyXFxufVxcclxcbi5jcmVhdGUtcHJvamVjdCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgd2lkdGg6OTAlO1xcclxcbiAgICBwYWRkaW5nOjEycHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7ICAgIFxcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG59XFxyXFxubGFiZWxbZm9yPVxcXCJwcm9qZWN0LW5hbWVcXFwiXXtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDpib2xkOyAgIFxcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTo4cHg7XFxyXFxufVxcclxcbmlucHV0W2lkPVxcXCJwcm9qZWN0LW5hbWVcXFwiXSB7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbiAgICB3aWR0aDo5NyU7XFxyXFxuICAgIGhlaWdodDozMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDo2MDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6dmFyKC0tZm9udC1jb2xvcik3NDk1ODtcXHJcXG59XFxyXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0biB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjRweCAwIDI0cHg7XFxyXFxuICAgIGdhcDo0cHg7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdCwuY2FuY2VsLXByb2plY3Qge1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBmbGV4LWJhc2lzOiAwO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIHBhZGRpbmc6NnB4O1xcclxcbiAgICBmb250LXNpemU6MS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDo1MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG59XFxyXFxuLmFkZC1wcm9qZWN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCBncmVlbjtcXHJcXG59XFxyXFxuLmNhbmNlbC1wcm9qZWN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uY2FuY2VsLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xcclxcbn1cXHJcXG4uYnRuIHtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgcGFkZGluZzoyNHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxufVxcclxcbi5idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDM2cHg7XFxyXFxufVxcclxcbi5jb250ZW50LWhlYWRlciB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jb250ZW50LWhlYWRlciBoMiB7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuLnRhc2stYnRuIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgaGVpZ2h0OjQwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6MTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLnRhc2stYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uY3JlYXRlLXRhc2sge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOjI0cHggO1xcclxcbiAgICBwYWRkaW5nOjE2cHggMjRweCAxNnB4IDI0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5sYWJlbFtmb3I9XFxcIm5hbWVcXFwiXSxsYWJlbFtmb3I9XFxcImR1ZVxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjEycHg7XFxyXFxufVxcclxcbmlucHV0W2lkPVxcXCJuYW1lXFxcIl0saW5wdXRbaWQ9XFxcImR1ZVxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjEycHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgd2lkdGg6IDE4MHB4O1xcclxcbn1cXHJcXG4ubGFiZWwge1xcclxcbiAgICBmbGV4OiAwIDAgYXV0bztcXHJcXG59XFxyXFxuLmJ0bi1ncm91cCB7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGdhcDo2cHg7XFxyXFxufVxcclxcbi5idG4tZ3JvdXAgPiAqIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBwYWRkaW5nOjEycHg7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uYWRkIHtcXHJcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5hZGQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIGdyZWVuO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuLmNhbmNlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLmNhbmNlbDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLFFBQVE7QUFDWjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSwrQkFBK0I7SUFDL0IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsT0FBTztBQUNYO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osVUFBVTtJQUNWLE9BQU87QUFDWDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbn1cXHJcXG46cm9vdCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxyXFxuICAgIC0tbWFpbi1jb2xvcjogIzQxQjdBRDtcXHJcXG4gICAgLS1mb250LWNvbG9yOiMzNzQ5NTk7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6MTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMi41ZnI7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcclxcbn1cXHJcXG4ubG9nbyB7XFxyXFxuICAgIGhlaWdodDogNzUlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxyXFxufVxcclxcbi5zaWRlLWJhciB7XFxyXFxuICAgIHBhZGRpbmc6IDM2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTsgXFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQztcXHJcXG59XFxyXFxuLm1haW4tdGFza3tcXHJcXG4gICAgXFxyXFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGJsdWU7XFxyXFxuICAgIG1hcmdpbjogMTJweCAwIDEycHggMDtcXHJcXG59XFxyXFxuLmluYm94LC5kYWlseS10YXNrLC53ZWVrbHktdGFza3tcXHJcXG4gICAgcGFkZGluZzoyNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6MTJweDtcXHJcXG59XFxyXFxuLmluYm94OmhvdmVyLC5kYWlseS10YXNrOmhvdmVyLC53ZWVrbHktdGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG4ucHJvamVjdC10YXNre1xcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRibHVlO1xcclxcbiAgICBtYXJnaW46IDEycHggMCAxMnB4IDA7XFxyXFxufVxcclxcbi5jcmVhdGUtcHJvamVjdCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgd2lkdGg6OTAlO1xcclxcbiAgICBwYWRkaW5nOjEycHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7ICAgIFxcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG59XFxyXFxubGFiZWxbZm9yPVxcXCJwcm9qZWN0LW5hbWVcXFwiXXtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDpib2xkOyAgIFxcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTo4cHg7XFxyXFxufVxcclxcbmlucHV0W2lkPVxcXCJwcm9qZWN0LW5hbWVcXFwiXSB7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbiAgICB3aWR0aDo5NyU7XFxyXFxuICAgIGhlaWdodDozMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDo2MDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6dmFyKC0tZm9udC1jb2xvcik3NDk1ODtcXHJcXG59XFxyXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0biB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjRweCAwIDI0cHg7XFxyXFxuICAgIGdhcDo0cHg7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdCwuY2FuY2VsLXByb2plY3Qge1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBmbGV4LWJhc2lzOiAwO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIHBhZGRpbmc6NnB4O1xcclxcbiAgICBmb250LXNpemU6MS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDo1MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG59XFxyXFxuLmFkZC1wcm9qZWN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCBncmVlbjtcXHJcXG59XFxyXFxuLmNhbmNlbC1wcm9qZWN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uY2FuY2VsLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xcclxcbn1cXHJcXG4uYnRuIHtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgcGFkZGluZzoyNHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxufVxcclxcbi5idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDM2cHg7XFxyXFxufVxcclxcbi5jb250ZW50LWhlYWRlciB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jb250ZW50LWhlYWRlciBoMiB7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuLnRhc2stYnRuIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgaGVpZ2h0OjQwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6MTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLnRhc2stYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uY3JlYXRlLXRhc2sge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOjI0cHggO1xcclxcbiAgICBwYWRkaW5nOjE2cHggMjRweCAxNnB4IDI0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5sYWJlbFtmb3I9XFxcIm5hbWVcXFwiXSxsYWJlbFtmb3I9XFxcImR1ZVxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjEycHg7XFxyXFxufVxcclxcbmlucHV0W2lkPVxcXCJuYW1lXFxcIl0saW5wdXRbaWQ9XFxcImR1ZVxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjEycHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgd2lkdGg6IDE4MHB4O1xcclxcbn1cXHJcXG4ubGFiZWwge1xcclxcbiAgICBmbGV4OiAwIDAgYXV0bztcXHJcXG59XFxyXFxuLmJ0bi1ncm91cCB7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGdhcDo2cHg7XFxyXFxufVxcclxcbi5idG4tZ3JvdXAgPiAqIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBwYWRkaW5nOjEycHg7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uYWRkIHtcXHJcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5hZGQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIGdyZWVuO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuLmNhbmNlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLmNhbmNlbDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuLy8gSlMgRE9Nc1xyXG5jb25zdCBhZGRQcm9qZWN0YnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xyXG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtYmFyJyk7XHJcbmNsYXNzIHRhc2t7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGR1ZURhdGUsaW5kZXgpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG59XHJcbi8vIG1haW4gc3RvcmFnZVxyXG5sZXQgaW5kZXggPSBbXTtcclxuXHJcbmFkZFByb2plY3RidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHNob3dBZGRQcm9qZWN0Rm9ybSk7XHJcbmZ1bmN0aW9uIHNob3dBZGRQcm9qZWN0Rm9ybSgpIHtcclxuICAgIHNpZGVCYXIucmVtb3ZlQ2hpbGQoc2lkZUJhci5sYXN0RWxlbWVudENoaWxkKTtcclxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtcHJvamVjdCcpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWxQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGxhYmVsUHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LW5hbWUnKTtcclxuICAgICAgICAgICAgbGFiZWxQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWUnO1xyXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGxhYmVsUHJvamVjdE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5wdXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGlucHV0UHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtbmFtZScpO1xyXG4gICAgICAgICAgICBpbnB1dFByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcclxuICAgICAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChpbnB1dFByb2plY3ROYW1lKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHByb2plY3RCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1wcm9qZWN0LWJ0bicpO1xyXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25zKTtcclxuICAgICAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuICAgICAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1wcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xyXG4gICAgXHJcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIHByb2plY3Qgc3RvcmFnZVxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9