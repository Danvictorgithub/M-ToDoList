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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin:0;\r\n}\r\n:root {\r\n    box-sizing: border-box;\r\n    font-family: Roboto, sans-serif;\r\n    --main-color: #41B7AD;\r\n    --font-color:#374959;\r\n}\r\nbody {\r\n    margin: 0;\r\n}\r\n#container {\r\n    height:100vh;\r\n    display:grid;\r\n    grid-template-rows: 90px 1fr;\r\n    grid-template-columns: 1fr 2.5fr;\r\n}\r\n.header {\r\n    grid-column: 1 / 3;\r\n    background-color: var(--main-color);\r\n    color:white;\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content:center;\r\n}\r\n.logo {\r\n    height: 75%;\r\n    margin-right: 40px;\r\n}\r\n.side-bar {\r\n    padding: 36px;\r\n    background-color: white;\r\n    color:var(--font-color); \r\n}\r\n.content {\r\n    background-color: #ECECEC;\r\n}\r\n.main-task{\r\n    \r\n    border-top: 2px solid lightblue;\r\n    margin: 12px 0 12px 0;\r\n}\r\n.inbox,.daily-task,.weekly-task{\r\n    padding:24px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap:12px;\r\n}\r\n.inbox:hover,.daily-task:hover,.weekly-task:hover {\r\n    background: var(--main-color);\r\n}\r\n.project-task{\r\n    border-top: 2px solid lightblue;\r\n    margin: 12px 0 12px 0;\r\n}\r\n.create-project {\r\n    border-radius: 8px;\r\n    width:90%;\r\n    padding:12px;\r\n    color: var(--font-color);\r\n    border: 2px solid var(--main-color);    \r\n    display:none;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\nlabel[for=\"project-name\"]{\r\n    display:block;\r\n    text-align: center;\r\n    font-weight:bold;   \r\n    font-size: 1.4rem;\r\n    margin-bottom:8px;\r\n}\r\ninput[id=\"project-name\"] {\r\n    border:0;\r\n    width:97%;\r\n    height:30px;\r\n    background-color: lightgray;\r\n    font-size: 1.2rem;\r\n    font-weight:600;\r\n    text-align: center;\r\n    color:var(--font-color)74958;\r\n    margin-bottom: 12px;\r\n}\r\n.create-project-btn {\r\n    display:flex;\r\n    justify-content: center;\r\n    padding: 0 24px 0 24px;\r\n    gap:4px;\r\n}\r\n.add-project,.cancel-project {\r\n    color:white;\r\n    border-radius: 6px;\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    padding:6px;\r\n    font-size:1.5rem;\r\n    font-weight:500;\r\n    background-color: white;\r\n    border:0;\r\n}\r\n.add-project {\r\n    background-color: green;\r\n    border:2px solid transparent;\r\n}\r\n.add-project:hover {\r\n    color: var(--font-color);\r\n    background-color:white;\r\n    border:2px solid green;\r\n}\r\n.cancel-project {\r\n    background-color: red;\r\n    border:2px solid transparent;\r\n}\r\n.cancel-project:hover {\r\n    color: var(--font-color);\r\n    background-color:white;\r\n    border:2px solid red;\r\n}\r\n.btn {\r\n    width:100%;\r\n    padding:24px;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: var(--font-color);\r\n    border:0;\r\n    background-color:white;\r\n    display:flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 12px;\r\n}\r\n.btn:hover {\r\n    background-color:var(--main-color);\r\n}\r\n.content {\r\n    padding: 36px;\r\n}\r\n.content-header {\r\n    border-radius: 8px;\r\n    height: 100px;\r\n    background-color: var(--main-color);\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.content-header h2 {\r\n    color:white;\r\n    font-size: 2.5rem;\r\n}\r\n.task-btn {\r\n    text-align: left;\r\n    width:100%;\r\n    height:40px;\r\n    margin-top:12px;\r\n    border-radius: 10px;\r\n}\r\n.task-btn:hover {\r\n    background-color: var(--main-color);\r\n    color:white;\r\n}\r\n.create-task {\r\n    border-radius: 12px;\r\n    margin-top:24px ;\r\n    padding:16px 24px 16px 24px;\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n    color:var(--font-color);\r\n    background-color:white;\r\n    display:none;\r\n    align-items: center;\r\n}\r\nlabel[for=\"name\"],label[for=\"due\"] {\r\n    margin-right:12px;\r\n}\r\ninput[id=\"name\"],input[id=\"due\"] {\r\n    margin-right:12px;\r\n    height: 24px;\r\n    width: 180px;\r\n}\r\n.label {\r\n    flex: 0 0 auto;\r\n}\r\n.btn-group {\r\n    \r\n    display:flex;\r\n    width:100%;\r\n    gap:6px;\r\n}\r\n.btn-group > * {\r\n    border-radius: 6px;\r\n    width:100%;\r\n    background-color:white;\r\n    border:0;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    padding:12px;\r\n    color:white;\r\n}\r\n.add {\r\n    background: green;\r\n    border:2px solid transparent;\r\n}\r\n.add:hover {\r\n    background-color:white;\r\n    border:2px solid green;\r\n    color:var(--font-color);\r\n}\r\n.cancel {\r\n    background-color: red;\r\n    border:2px solid transparent;\r\n}\r\n.cancel:hover {\r\n    background-color:white;\r\n    border:2px solid red;\r\n    color:var(--font-color);\r\n}\r\n.task {\r\n    border-radius: 10px;\r\n    margin-top:10px;\r\n    background-color: white;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    padding:12px 24px 12px 24px;\r\n    color:var(--font-color);\r\n}\r\n.task-name,.task-date {\r\n    display:flex;\r\n    gap:12px;\r\n}\r\n.task-delete {\r\n    background-color:white;\r\n    padding:0;\r\n    border:0;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n* {\r\n    margin:0;\r\n}\r\n:root {\r\n    box-sizing: border-box;\r\n    font-family: Roboto, sans-serif;\r\n    --main-color: #41B7AD;\r\n    --font-color:#374959;\r\n}\r\nbody {\r\n    margin: 0;\r\n}\r\n#container {\r\n    height:100vh;\r\n    display:grid;\r\n    grid-template-rows: 90px 1fr;\r\n    grid-template-columns: 1fr 2.5fr;\r\n}\r\n.header {\r\n    grid-column: 1 / 3;\r\n    background-color: var(--main-color);\r\n    color:white;\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content:center;\r\n}\r\n.logo {\r\n    height: 75%;\r\n    margin-right: 40px;\r\n}\r\n.side-bar {\r\n    padding: 36px;\r\n    background-color: white;\r\n    color:var(--font-color); \r\n}\r\n.content {\r\n    background-color: #ECECEC;\r\n}\r\n.main-task{\r\n    \r\n    border-top: 2px solid lightblue;\r\n    margin: 12px 0 12px 0;\r\n}\r\n.inbox,.daily-task,.weekly-task{\r\n    padding:24px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap:12px;\r\n}\r\n.inbox:hover,.daily-task:hover,.weekly-task:hover {\r\n    background: var(--main-color);\r\n}\r\n.project-task{\r\n    border-top: 2px solid lightblue;\r\n    margin: 12px 0 12px 0;\r\n}\r\n.create-project {\r\n    border-radius: 8px;\r\n    width:90%;\r\n    padding:12px;\r\n    color: var(--font-color);\r\n    border: 2px solid var(--main-color);    \r\n    display:none;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\nlabel[for=\"project-name\"]{\r\n    display:block;\r\n    text-align: center;\r\n    font-weight:bold;   \r\n    font-size: 1.4rem;\r\n    margin-bottom:8px;\r\n}\r\ninput[id=\"project-name\"] {\r\n    border:0;\r\n    width:97%;\r\n    height:30px;\r\n    background-color: lightgray;\r\n    font-size: 1.2rem;\r\n    font-weight:600;\r\n    text-align: center;\r\n    color:var(--font-color)74958;\r\n    margin-bottom: 12px;\r\n}\r\n.create-project-btn {\r\n    display:flex;\r\n    justify-content: center;\r\n    padding: 0 24px 0 24px;\r\n    gap:4px;\r\n}\r\n.add-project,.cancel-project {\r\n    color:white;\r\n    border-radius: 6px;\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    padding:6px;\r\n    font-size:1.5rem;\r\n    font-weight:500;\r\n    background-color: white;\r\n    border:0;\r\n}\r\n.add-project {\r\n    background-color: green;\r\n    border:2px solid transparent;\r\n}\r\n.add-project:hover {\r\n    color: var(--font-color);\r\n    background-color:white;\r\n    border:2px solid green;\r\n}\r\n.cancel-project {\r\n    background-color: red;\r\n    border:2px solid transparent;\r\n}\r\n.cancel-project:hover {\r\n    color: var(--font-color);\r\n    background-color:white;\r\n    border:2px solid red;\r\n}\r\n.btn {\r\n    width:100%;\r\n    padding:24px;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: var(--font-color);\r\n    border:0;\r\n    background-color:white;\r\n    display:flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 12px;\r\n}\r\n.btn:hover {\r\n    background-color:var(--main-color);\r\n}\r\n.content {\r\n    padding: 36px;\r\n}\r\n.content-header {\r\n    border-radius: 8px;\r\n    height: 100px;\r\n    background-color: var(--main-color);\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.content-header h2 {\r\n    color:white;\r\n    font-size: 2.5rem;\r\n}\r\n.task-btn {\r\n    text-align: left;\r\n    width:100%;\r\n    height:40px;\r\n    margin-top:12px;\r\n    border-radius: 10px;\r\n}\r\n.task-btn:hover {\r\n    background-color: var(--main-color);\r\n    color:white;\r\n}\r\n.create-task {\r\n    border-radius: 12px;\r\n    margin-top:24px ;\r\n    padding:16px 24px 16px 24px;\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n    color:var(--font-color);\r\n    background-color:white;\r\n    display:none;\r\n    align-items: center;\r\n}\r\nlabel[for=\"name\"],label[for=\"due\"] {\r\n    margin-right:12px;\r\n}\r\ninput[id=\"name\"],input[id=\"due\"] {\r\n    margin-right:12px;\r\n    height: 24px;\r\n    width: 180px;\r\n}\r\n.label {\r\n    flex: 0 0 auto;\r\n}\r\n.btn-group {\r\n    \r\n    display:flex;\r\n    width:100%;\r\n    gap:6px;\r\n}\r\n.btn-group > * {\r\n    border-radius: 6px;\r\n    width:100%;\r\n    background-color:white;\r\n    border:0;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    padding:12px;\r\n    color:white;\r\n}\r\n.add {\r\n    background: green;\r\n    border:2px solid transparent;\r\n}\r\n.add:hover {\r\n    background-color:white;\r\n    border:2px solid green;\r\n    color:var(--font-color);\r\n}\r\n.cancel {\r\n    background-color: red;\r\n    border:2px solid transparent;\r\n}\r\n.cancel:hover {\r\n    background-color:white;\r\n    border:2px solid red;\r\n    color:var(--font-color);\r\n}\r\n.task {\r\n    border-radius: 10px;\r\n    margin-top:10px;\r\n    background-color: white;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    padding:12px 24px 12px 24px;\r\n    color:var(--font-color);\r\n}\r\n.task-name,.task-date {\r\n    display:flex;\r\n    gap:12px;\r\n}\r\n.task-delete {\r\n    background-color:white;\r\n    padding:0;\r\n    border:0;\r\n}"],"sourceRoot":""}]);
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


// JS DOMs
const addProjectbtn = document.querySelector('.btn');
const sideBar = document.querySelector('.side-bar');
const projectTaskNav = document.querySelector('.project-task');
const createProjectform = document.querySelector('.create-project');
const addTaskbtn = document.querySelector('.task-btn');
const createTaskForm = document.querySelector(".create-task");
const taskList = document.querySelector('.taskList');
let inputName = document.querySelector('#name');
let inputDue = document.querySelector('#due');

class taskCreate{
    constructor(name,dueDate,index) {
        this.name = name;
        this.dueDate = dueDate;
        this.index = index;
    }
}
// main storage
let index = [];

addTaskbtn.addEventListener('click',showTaskForm);
function showTaskForm() {
    addTaskbtn.style.display = 'none';
    createTaskForm.style.display = 'flex';
}
function hideTaskForm() {
    addTaskbtn.style.display = 'flex';
    createTaskForm.style.display = 'none';
}
(function taskDOM() {
    const addButton = document.querySelector('.add');
    const cancelButton = document.querySelector('.cancel');
    
    addButton.addEventListener('click', ()=>{
        createTask();
    })
    cancelButton.addEventListener('click', hideTaskForm);
})();
function createTask() {
    const task = new taskCreate(inputName.value,inputDue.value,index.length);
    index.unshift(task);
    updateInbox();
    console.log(index);
}
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
function updateInbox() {
    refreshIndex();
    addInbox();
}
function addInbox() {
    index.forEach( (taskIndex)=> {
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

                const taskDelete = document.createElement('button');
                taskDelete.classList.add('task-delete');
                taskDelete.setAttribute('value',`${taskIndex.index}`);
                taskDueContainer.appendChild(taskDelete);
                    const taskDeleteImage = document.createElement('img');
                    taskDeleteImage.src = _close_circle_png__WEBPACK_IMPORTED_MODULE_1__;
                    taskDelete.appendChild(taskDeleteImage);
        taskList.appendChild(taskContainer);
    });
}
function refreshIndex() {
    while(taskList.childNodes.length != 0) {
        taskList.removeChild(taskList.lastChild);
    }
}

// project storage
let projects = {};




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLEtB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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxnQkFBZ0I7QUFDakU7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGVBQWU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxrQkFBa0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZ0JBQWdCO0FBQ25FO0FBQ0E7QUFDQSwwQ0FBMEMsOENBQUM7QUFDM0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL20tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL20tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL20tdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL20tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL20tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL20tdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtLW1haW4tY29sb3I6ICM0MUI3QUQ7XFxyXFxuICAgIC0tZm9udC1jb2xvcjojMzc0OTU5O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OjEwMHZoO1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuNWZyO1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG59XFxyXFxuLmxvZ28ge1xcclxcbiAgICBoZWlnaHQ6IDc1JTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG4uc2lkZS1iYXIge1xcclxcbiAgICBwYWRkaW5nOiAzNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6dmFyKC0tZm9udC1jb2xvcik7IFxcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XFxyXFxufVxcclxcbi5tYWluLXRhc2t7XFxyXFxuICAgIFxcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRibHVlO1xcclxcbiAgICBtYXJnaW46IDEycHggMCAxMnB4IDA7XFxyXFxufVxcclxcbi5pbmJveCwuZGFpbHktdGFzaywud2Vla2x5LXRhc2t7XFxyXFxuICAgIHBhZGRpbmc6MjRweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOjEycHg7XFxyXFxufVxcclxcbi5pbmJveDpob3ZlciwuZGFpbHktdGFzazpob3Zlciwud2Vla2x5LXRhc2s6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuLnByb2plY3QtdGFza3tcXHJcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXHJcXG4gICAgbWFyZ2luOiAxMnB4IDAgMTJweCAwO1xcclxcbn1cXHJcXG4uY3JlYXRlLXByb2plY3Qge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIHdpZHRoOjkwJTtcXHJcXG4gICAgcGFkZGluZzoxMnB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpOyAgICBcXHJcXG4gICAgZGlzcGxheTpub25lO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxufVxcclxcbmxhYmVsW2Zvcj1cXFwicHJvamVjdC1uYW1lXFxcIl17XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDsgICBcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206OHB4O1xcclxcbn1cXHJcXG5pbnB1dFtpZD1cXFwicHJvamVjdC1uYW1lXFxcIl0ge1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG4gICAgd2lkdGg6OTclO1xcclxcbiAgICBoZWlnaHQ6MzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOnZhcigtLWZvbnQtY29sb3IpNzQ5NTg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcbi5jcmVhdGUtcHJvamVjdC1idG4ge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDI0cHggMCAyNHB4O1xcclxcbiAgICBnYXA6NHB4O1xcclxcbn1cXHJcXG4uYWRkLXByb2plY3QsLmNhbmNlbC1wcm9qZWN0IHtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgZmxleC1iYXNpczogMDtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBwYWRkaW5nOjZweDtcXHJcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgZ3JlZW47XFxyXFxufVxcclxcbi5jYW5jZWwtcHJvamVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLmNhbmNlbC1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuLmJ0biB7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIHBhZGRpbmc6MjRweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nOiAzNnB4O1xcclxcbn1cXHJcXG4uY29udGVudC1oZWFkZXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uY29udGVudC1oZWFkZXIgaDIge1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcbi50YXNrLWJ0biB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGhlaWdodDo0MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOjEycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi50YXNrLWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuLmNyZWF0ZS10YXNrIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDoyNHB4IDtcXHJcXG4gICAgcGFkZGluZzoxNnB4IDI0cHggMTZweCAyNHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6dmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxubGFiZWxbZm9yPVxcXCJuYW1lXFxcIl0sbGFiZWxbZm9yPVxcXCJkdWVcXFwiXSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDoxMnB4O1xcclxcbn1cXHJcXG5pbnB1dFtpZD1cXFwibmFtZVxcXCJdLGlucHV0W2lkPVxcXCJkdWVcXFwiXSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDoxMnB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIHdpZHRoOiAxODBweDtcXHJcXG59XFxyXFxuLmxhYmVsIHtcXHJcXG4gICAgZmxleDogMCAwIGF1dG87XFxyXFxufVxcclxcbi5idG4tZ3JvdXAge1xcclxcbiAgICBcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBnYXA6NnB4O1xcclxcbn1cXHJcXG4uYnRuLWdyb3VwID4gKiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgcGFkZGluZzoxMnB4O1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuLmFkZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uYWRkOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCBncmVlbjtcXHJcXG4gICAgY29sb3I6dmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcbi5jYW5jZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5jYW5jZWw6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcXHJcXG4gICAgY29sb3I6dmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcbi50YXNrIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6MTJweCAyNHB4IDEycHggMjRweDtcXHJcXG4gICAgY29sb3I6dmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcbi50YXNrLW5hbWUsLnRhc2stZGF0ZSB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZ2FwOjEycHg7XFxyXFxufVxcclxcbi50YXNrLWRlbGV0ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7SUFDSSxRQUFRO0FBQ1o7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7O0lBRUksK0JBQStCO0lBQy9CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixPQUFPO0FBQ1g7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsUUFBUTtBQUNaO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBOztJQUVJLFlBQVk7SUFDWixVQUFVO0lBQ1YsT0FBTztBQUNYO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFFBQVE7QUFDWjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxRQUFRO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS1tYWluLWNvbG9yOiAjNDFCN0FEO1xcclxcbiAgICAtLWZvbnQtY29sb3I6IzM3NDk1OTtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDoxMDB2aDtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjVmcjtcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxufVxcclxcbi5sb2dvIHtcXHJcXG4gICAgaGVpZ2h0OiA3NSU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXHJcXG59XFxyXFxuLnNpZGUtYmFyIHtcXHJcXG4gICAgcGFkZGluZzogMzZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGNvbG9yOnZhcigtLWZvbnQtY29sb3IpOyBcXHJcXG59XFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xcclxcbn1cXHJcXG4ubWFpbi10YXNre1xcclxcbiAgICBcXHJcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXHJcXG4gICAgbWFyZ2luOiAxMnB4IDAgMTJweCAwO1xcclxcbn1cXHJcXG4uaW5ib3gsLmRhaWx5LXRhc2ssLndlZWtseS10YXNre1xcclxcbiAgICBwYWRkaW5nOjI0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDoxMnB4O1xcclxcbn1cXHJcXG4uaW5ib3g6aG92ZXIsLmRhaWx5LXRhc2s6aG92ZXIsLndlZWtseS10YXNrOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcbi5wcm9qZWN0LXRhc2t7XFxyXFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGJsdWU7XFxyXFxuICAgIG1hcmdpbjogMTJweCAwIDEycHggMDtcXHJcXG59XFxyXFxuLmNyZWF0ZS1wcm9qZWN0IHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICB3aWR0aDo5MCU7XFxyXFxuICAgIHBhZGRpbmc6MTJweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTsgICAgXFxyXFxuICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5sYWJlbFtmb3I9XFxcInByb2plY3QtbmFtZVxcXCJde1xcclxcbiAgICBkaXNwbGF5OmJsb2NrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7ICAgXFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOjhweDtcXHJcXG59XFxyXFxuaW5wdXRbaWQ9XFxcInByb2plY3QtbmFtZVxcXCJdIHtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxuICAgIHdpZHRoOjk3JTtcXHJcXG4gICAgaGVpZ2h0OjMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTc0OTU4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG4uY3JlYXRlLXByb2plY3QtYnRuIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMCAyNHB4IDAgMjRweDtcXHJcXG4gICAgZ2FwOjRweDtcXHJcXG59XFxyXFxuLmFkZC1wcm9qZWN0LC5jYW5jZWwtcHJvamVjdCB7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDA7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgcGFkZGluZzo2cHg7XFxyXFxuICAgIGZvbnQtc2l6ZToxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbn1cXHJcXG4uYWRkLXByb2plY3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIGdyZWVuO1xcclxcbn1cXHJcXG4uY2FuY2VsLXByb2plY3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5jYW5jZWwtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcbi5idG4ge1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBwYWRkaW5nOjI0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG59XFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMzZweDtcXHJcXG59XFxyXFxuLmNvbnRlbnQtaGVhZGVyIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRlbnQtaGVhZGVyIGgyIHtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG4udGFzay1idG4ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBoZWlnaHQ6NDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDoxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4udGFzay1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcbi5jcmVhdGUtdGFzayB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6MjRweCA7XFxyXFxuICAgIHBhZGRpbmc6MTZweCAyNHB4IDE2cHggMjRweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOnZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmxhYmVsW2Zvcj1cXFwibmFtZVxcXCJdLGxhYmVsW2Zvcj1cXFwiZHVlXFxcIl0ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6MTJweDtcXHJcXG59XFxyXFxuaW5wdXRbaWQ9XFxcIm5hbWVcXFwiXSxpbnB1dFtpZD1cXFwiZHVlXFxcIl0ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6MTJweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICB3aWR0aDogMTgwcHg7XFxyXFxufVxcclxcbi5sYWJlbCB7XFxyXFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcclxcbn1cXHJcXG4uYnRuLWdyb3VwIHtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgZ2FwOjZweDtcXHJcXG59XFxyXFxuLmJ0bi1ncm91cCA+ICoge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHBhZGRpbmc6MTJweDtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcbi5hZGQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLmFkZDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgZ3JlZW47XFxyXFxuICAgIGNvbG9yOnZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG4uY2FuY2VsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uY2FuY2VsOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XFxyXFxuICAgIGNvbG9yOnZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG4udGFzayB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6MTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOjEycHggMjRweCAxMnB4IDI0cHg7XFxyXFxuICAgIGNvbG9yOnZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG4udGFzay1uYW1lLC50YXNrLWRhdGUge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGdhcDoxMnB4O1xcclxcbn1cXHJcXG4udGFzay1kZWxldGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHggZnJvbSAnLi9jbG9zZS1jaXJjbGUucG5nJztcclxuLy8gSlMgRE9Nc1xyXG5jb25zdCBhZGRQcm9qZWN0YnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xyXG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtYmFyJyk7XHJcbmNvbnN0IHByb2plY3RUYXNrTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFzaycpO1xyXG5jb25zdCBjcmVhdGVQcm9qZWN0Zm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdCcpO1xyXG5jb25zdCBhZGRUYXNrYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYnRuJyk7XHJcbmNvbnN0IGNyZWF0ZVRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtdGFza1wiKTtcclxuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0xpc3QnKTtcclxubGV0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XHJcbmxldCBpbnB1dER1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUnKTtcclxuXHJcbmNsYXNzIHRhc2tDcmVhdGV7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGR1ZURhdGUsaW5kZXgpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG59XHJcbi8vIG1haW4gc3RvcmFnZVxyXG5sZXQgaW5kZXggPSBbXTtcclxuXHJcbmFkZFRhc2tidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHNob3dUYXNrRm9ybSk7XHJcbmZ1bmN0aW9uIHNob3dUYXNrRm9ybSgpIHtcclxuICAgIGFkZFRhc2tidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGNyZWF0ZVRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbn1cclxuZnVuY3Rpb24gaGlkZVRhc2tGb3JtKCkge1xyXG4gICAgYWRkVGFza2J0bi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgY3JlYXRlVGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG4oZnVuY3Rpb24gdGFza0RPTSgpIHtcclxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQnKTtcclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcclxuICAgIFxyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBjcmVhdGVUYXNrKCk7XHJcbiAgICB9KVxyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZVRhc2tGb3JtKTtcclxufSkoKTtcclxuZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcclxuICAgIGNvbnN0IHRhc2sgPSBuZXcgdGFza0NyZWF0ZShpbnB1dE5hbWUudmFsdWUsaW5wdXREdWUudmFsdWUsaW5kZXgubGVuZ3RoKTtcclxuICAgIGluZGV4LnVuc2hpZnQodGFzayk7XHJcbiAgICB1cGRhdGVJbmJveCgpO1xyXG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG59XHJcbmFkZFByb2plY3RidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHNob3dBZGRQcm9qZWN0Rm9ybSk7XHJcbmZ1bmN0aW9uIHNob3dBZGRQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGhpZGVBZGRQcm9qZWN0YnRuKCk7XHJcbiAgICBjcmVhdGVQcm9qZWN0Zm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Zsb3cnO1xyXG59XHJcbmZ1bmN0aW9uIHNob3dBZGRQcm9qZWN0YnRuKCkge1xyXG4gICAgcHJvamVjdFRhc2tOYXYuc3R5bGUuZGlzcGxheSA9ICdmbG93JztcclxuICAgIGNyZWF0ZVByb2plY3Rmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuZnVuY3Rpb24gaGlkZUFkZFByb2plY3RidG4oKSB7XHJcbiAgICBwcm9qZWN0VGFza05hdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcbihmdW5jdGlvbiBwcm9qZWN0RE9NKCkge1xyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLXByb2plY3QnKTsgXHJcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QWRkUHJvamVjdGJ0bik7XHJcbn0pKCk7XHJcbmZ1bmN0aW9uIHVwZGF0ZUluYm94KCkge1xyXG4gICAgcmVmcmVzaEluZGV4KCk7XHJcbiAgICBhZGRJbmJveCgpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEluYm94KCkge1xyXG4gICAgaW5kZXguZm9yRWFjaCggKHRhc2tJbmRleCk9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsYCR7dGFza0luZGV4LmluZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0YXNrTmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTmFtZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdjaGVja2JveCcpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd2YWx1ZScsYCR7dGFza0luZGV4LmluZGV4fWApO1xyXG4gICAgICAgICAgICAgICAgdGFza05hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICAgICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gYCR7dGFza0luZGV4Lm5hbWV9YDtcclxuICAgICAgICAgICAgICAgIHRhc2tOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgdGFza0R1ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0YXNrRHVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEdWVDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrRHVlLnRleHRDb250ZW50ID0gYCR7dGFza0luZGV4LmR1ZURhdGV9YDtcclxuICAgICAgICAgICAgICAgIHRhc2tEdWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0R1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgdGFza0RlbGV0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgdGFza0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxgJHt0YXNrSW5kZXguaW5kZXh9YCk7XHJcbiAgICAgICAgICAgICAgICB0YXNrRHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZWxldGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEZWxldGVJbWFnZS5zcmMgPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEZWxldGUuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUltYWdlKTtcclxuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJlZnJlc2hJbmRleCgpIHtcclxuICAgIHdoaWxlKHRhc2tMaXN0LmNoaWxkTm9kZXMubGVuZ3RoICE9IDApIHtcclxuICAgICAgICB0YXNrTGlzdC5yZW1vdmVDaGlsZCh0YXNrTGlzdC5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBwcm9qZWN0IHN0b3JhZ2VcclxubGV0IHByb2plY3RzID0ge307XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==