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



// project storage
let projects = {};




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLEtB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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsZ0JBQWdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxlQUFlO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsa0JBQWtCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGdCQUFnQjtBQUNuRTtBQUNBO0FBQ0EsMENBQTBDLDhDQUFDO0FBQzNDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL20tdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL20tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL20tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tLXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL20tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL20tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbS10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tLXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS1tYWluLWNvbG9yOiAjNDFCN0FEO1xcclxcbiAgICAtLWZvbnQtY29sb3I6IzM3NDk1OTtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDoxMDB2aDtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjVmcjtcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxufVxcclxcbi5sb2dvIHtcXHJcXG4gICAgaGVpZ2h0OiA3NSU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXHJcXG59XFxyXFxuLnNpZGUtYmFyIHtcXHJcXG4gICAgcGFkZGluZzogMzZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGNvbG9yOnZhcigtLWZvbnQtY29sb3IpOyBcXHJcXG59XFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xcclxcbn1cXHJcXG4ubWFpbi10YXNre1xcclxcbiAgICBcXHJcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXHJcXG4gICAgbWFyZ2luOiAxMnB4IDAgMTJweCAwO1xcclxcbn1cXHJcXG4uaW5ib3gsLmRhaWx5LXRhc2ssLndlZWtseS10YXNre1xcclxcbiAgICBwYWRkaW5nOjI0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDoxMnB4O1xcclxcbn1cXHJcXG4uaW5ib3g6aG92ZXIsLmRhaWx5LXRhc2s6aG92ZXIsLndlZWtseS10YXNrOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcbi5wcm9qZWN0LXRhc2t7XFxyXFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGJsdWU7XFxyXFxuICAgIG1hcmdpbjogMTJweCAwIDEycHggMDtcXHJcXG59XFxyXFxuLmNyZWF0ZS1wcm9qZWN0IHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICB3aWR0aDo5MCU7XFxyXFxuICAgIHBhZGRpbmc6MTJweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTsgICAgXFxyXFxuICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5sYWJlbFtmb3I9XFxcInByb2plY3QtbmFtZVxcXCJde1xcclxcbiAgICBkaXNwbGF5OmJsb2NrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7ICAgXFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOjhweDtcXHJcXG59XFxyXFxuaW5wdXRbaWQ9XFxcInByb2plY3QtbmFtZVxcXCJdIHtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxuICAgIHdpZHRoOjk3JTtcXHJcXG4gICAgaGVpZ2h0OjMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTc0OTU4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG4uY3JlYXRlLXByb2plY3QtYnRuIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMCAyNHB4IDAgMjRweDtcXHJcXG4gICAgZ2FwOjRweDtcXHJcXG59XFxyXFxuLmFkZC1wcm9qZWN0LC5jYW5jZWwtcHJvamVjdCB7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDA7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgcGFkZGluZzo2cHg7XFxyXFxuICAgIGZvbnQtc2l6ZToxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbn1cXHJcXG4uYWRkLXByb2plY3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIGdyZWVuO1xcclxcbn1cXHJcXG4uY2FuY2VsLXByb2plY3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5jYW5jZWwtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcbi5idG4ge1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBwYWRkaW5nOjI0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG59XFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMzZweDtcXHJcXG59XFxyXFxuLmNvbnRlbnQtaGVhZGVyIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRlbnQtaGVhZGVyIGgyIHtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG4udGFzay1idG4ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBoZWlnaHQ6NDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDoxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4udGFzay1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcbi5jcmVhdGUtdGFzayB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6MjRweCA7XFxyXFxuICAgIHBhZGRpbmc6MTZweCAyNHB4IDE2cHggMjRweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOnZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmxhYmVsW2Zvcj1cXFwibmFtZVxcXCJdLGxhYmVsW2Zvcj1cXFwiZHVlXFxcIl0ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6MTJweDtcXHJcXG59XFxyXFxuaW5wdXRbaWQ9XFxcIm5hbWVcXFwiXSxpbnB1dFtpZD1cXFwiZHVlXFxcIl0ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6MTJweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICB3aWR0aDogMTgwcHg7XFxyXFxufVxcclxcbi5sYWJlbCB7XFxyXFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcclxcbn1cXHJcXG4uYnRuLWdyb3VwIHtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgZ2FwOjZweDtcXHJcXG59XFxyXFxuLmJ0bi1ncm91cCA+ICoge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHBhZGRpbmc6MTJweDtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcbi5hZGQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLmFkZDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgZ3JlZW47XFxyXFxuICAgIGNvbG9yOnZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG4uY2FuY2VsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uY2FuY2VsOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XFxyXFxuICAgIGNvbG9yOnZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG4udGFzayB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6MTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOjEycHggMjRweCAxMnB4IDI0cHg7XFxyXFxuICAgIGNvbG9yOnZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG4udGFzay1uYW1lLC50YXNrLWRhdGUge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGdhcDoxMnB4O1xcclxcbn1cXHJcXG4udGFzay1kZWxldGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksUUFBUTtBQUNaO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBOztJQUVJLCtCQUErQjtJQUMvQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsT0FBTztBQUNYO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osVUFBVTtJQUNWLE9BQU87QUFDWDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixRQUFRO0FBQ1o7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsUUFBUTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbn1cXHJcXG46cm9vdCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxyXFxuICAgIC0tbWFpbi1jb2xvcjogIzQxQjdBRDtcXHJcXG4gICAgLS1mb250LWNvbG9yOiMzNzQ5NTk7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6MTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMi41ZnI7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcclxcbn1cXHJcXG4ubG9nbyB7XFxyXFxuICAgIGhlaWdodDogNzUlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxyXFxufVxcclxcbi5zaWRlLWJhciB7XFxyXFxuICAgIHBhZGRpbmc6IDM2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTsgXFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQztcXHJcXG59XFxyXFxuLm1haW4tdGFza3tcXHJcXG4gICAgXFxyXFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGJsdWU7XFxyXFxuICAgIG1hcmdpbjogMTJweCAwIDEycHggMDtcXHJcXG59XFxyXFxuLmluYm94LC5kYWlseS10YXNrLC53ZWVrbHktdGFza3tcXHJcXG4gICAgcGFkZGluZzoyNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6MTJweDtcXHJcXG59XFxyXFxuLmluYm94OmhvdmVyLC5kYWlseS10YXNrOmhvdmVyLC53ZWVrbHktdGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG4ucHJvamVjdC10YXNre1xcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRibHVlO1xcclxcbiAgICBtYXJnaW46IDEycHggMCAxMnB4IDA7XFxyXFxufVxcclxcbi5jcmVhdGUtcHJvamVjdCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgd2lkdGg6OTAlO1xcclxcbiAgICBwYWRkaW5nOjEycHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7ICAgIFxcclxcbiAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG59XFxyXFxubGFiZWxbZm9yPVxcXCJwcm9qZWN0LW5hbWVcXFwiXXtcXHJcXG4gICAgZGlzcGxheTpibG9jaztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDpib2xkOyAgIFxcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTo4cHg7XFxyXFxufVxcclxcbmlucHV0W2lkPVxcXCJwcm9qZWN0LW5hbWVcXFwiXSB7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbiAgICB3aWR0aDo5NyU7XFxyXFxuICAgIGhlaWdodDozMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDo2MDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6dmFyKC0tZm9udC1jb2xvcik3NDk1ODtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuLmNyZWF0ZS1wcm9qZWN0LWJ0biB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjRweCAwIDI0cHg7XFxyXFxuICAgIGdhcDo0cHg7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdCwuY2FuY2VsLXByb2plY3Qge1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBmbGV4LWJhc2lzOiAwO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIHBhZGRpbmc6NnB4O1xcclxcbiAgICBmb250LXNpemU6MS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDo1MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG59XFxyXFxuLmFkZC1wcm9qZWN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCBncmVlbjtcXHJcXG59XFxyXFxuLmNhbmNlbC1wcm9qZWN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uY2FuY2VsLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xcclxcbn1cXHJcXG4uYnRuIHtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgcGFkZGluZzoyNHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxufVxcclxcbi5idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDM2cHg7XFxyXFxufVxcclxcbi5jb250ZW50LWhlYWRlciB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jb250ZW50LWhlYWRlciBoMiB7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuLnRhc2stYnRuIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgaGVpZ2h0OjQwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6MTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLnRhc2stYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uY3JlYXRlLXRhc2sge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOjI0cHggO1xcclxcbiAgICBwYWRkaW5nOjE2cHggMjRweCAxNnB4IDI0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTpub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5sYWJlbFtmb3I9XFxcIm5hbWVcXFwiXSxsYWJlbFtmb3I9XFxcImR1ZVxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjEycHg7XFxyXFxufVxcclxcbmlucHV0W2lkPVxcXCJuYW1lXFxcIl0saW5wdXRbaWQ9XFxcImR1ZVxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjEycHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgd2lkdGg6IDE4MHB4O1xcclxcbn1cXHJcXG4ubGFiZWwge1xcclxcbiAgICBmbGV4OiAwIDAgYXV0bztcXHJcXG59XFxyXFxuLmJ0bi1ncm91cCB7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGdhcDo2cHg7XFxyXFxufVxcclxcbi5idG4tZ3JvdXAgPiAqIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBwYWRkaW5nOjEycHg7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uYWRkIHtcXHJcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5hZGQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIGdyZWVuO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuLmNhbmNlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLmNhbmNlbDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuLnRhc2sge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzoxMnB4IDI0cHggMTJweCAyNHB4O1xcclxcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuLnRhc2stbmFtZSwudGFzay1kYXRlIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBnYXA6MTJweDtcXHJcXG59XFxyXFxuLnRhc2stZGVsZXRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzowO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB4IGZyb20gJy4vY2xvc2UtY2lyY2xlLnBuZyc7XHJcbi8vIEpTIERPTXNcclxuY29uc3QgYWRkUHJvamVjdGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcclxuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLWJhcicpO1xyXG5jb25zdCBwcm9qZWN0VGFza05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhc2snKTtcclxuY29uc3QgY3JlYXRlUHJvamVjdGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXByb2plY3QnKTtcclxuY29uc3QgYWRkVGFza2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWJ0bicpO1xyXG5jb25zdCBjcmVhdGVUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXRhc2tcIik7XHJcbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tMaXN0Jyk7XHJcbmxldCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xyXG5sZXQgaW5wdXREdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlJyk7XHJcblxyXG5jbGFzcyB0YXNrQ3JlYXRle1xyXG4gICAgY29uc3RydWN0b3IobmFtZSxkdWVEYXRlLGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIH1cclxufVxyXG4vLyBtYWluIHN0b3JhZ2VcclxubGV0IGluZGV4ID0gW107XHJcblxyXG5hZGRUYXNrYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxzaG93VGFza0Zvcm0pO1xyXG5mdW5jdGlvbiBzaG93VGFza0Zvcm0oKSB7XHJcbiAgICBhZGRUYXNrYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBjcmVhdGVUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG59XHJcbmZ1bmN0aW9uIGhpZGVUYXNrRm9ybSgpIHtcclxuICAgIGFkZFRhc2tidG4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIGNyZWF0ZVRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuKGZ1bmN0aW9uIHRhc2tET00oKSB7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkJyk7XHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJyk7XHJcbiAgICBcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgY3JlYXRlVGFzaygpO1xyXG4gICAgfSlcclxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVUYXNrRm9ybSk7XHJcbn0pKCk7XHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IHRhc2tDcmVhdGUoaW5wdXROYW1lLnZhbHVlLGlucHV0RHVlLnZhbHVlLGluZGV4Lmxlbmd0aCk7XHJcbiAgICBpbmRleC51bnNoaWZ0KHRhc2spO1xyXG4gICAgdXBkYXRlSW5ib3goKTtcclxuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxufVxyXG5hZGRQcm9qZWN0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxzaG93QWRkUHJvamVjdEZvcm0pO1xyXG5mdW5jdGlvbiBzaG93QWRkUHJvamVjdEZvcm0oKSB7XHJcbiAgICBoaWRlQWRkUHJvamVjdGJ0bigpO1xyXG4gICAgY3JlYXRlUHJvamVjdGZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbG93JztcclxufVxyXG5mdW5jdGlvbiBzaG93QWRkUHJvamVjdGJ0bigpIHtcclxuICAgIHByb2plY3RUYXNrTmF2LnN0eWxlLmRpc3BsYXkgPSAnZmxvdyc7XHJcbiAgICBjcmVhdGVQcm9qZWN0Zm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcbmZ1bmN0aW9uIGhpZGVBZGRQcm9qZWN0YnRuKCkge1xyXG4gICAgcHJvamVjdFRhc2tOYXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG4oZnVuY3Rpb24gcHJvamVjdERPTSgpIHtcclxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1wcm9qZWN0Jyk7IFxyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FkZFByb2plY3RidG4pO1xyXG59KSgpO1xyXG5mdW5jdGlvbiB1cGRhdGVJbmJveCgpIHtcclxuICAgIGluZGV4LmZvckVhY2goICh0YXNrSW5kZXgpPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLGAke3Rhc2tJbmRleC5pbmRleH1gKTtcclxuICAgICAgICAgICAgY29uc3QgdGFza05hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGFza05hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05hbWVDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndmFsdWUnLGAke3Rhc2tJbmRleC5pbmRleH1gKTtcclxuICAgICAgICAgICAgICAgIHRhc2tOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IGAke3Rhc2tJbmRleC5uYW1lfWA7XHJcbiAgICAgICAgICAgICAgICB0YXNrTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGFza0R1ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKTtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRHVlQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgICAgICAgICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IGAke3Rhc2tJbmRleC5kdWVEYXRlfWA7XHJcbiAgICAgICAgICAgICAgICB0YXNrRHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUnKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZWxldGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsYCR7dGFza0luZGV4LmluZGV4fWApO1xyXG4gICAgICAgICAgICAgICAgdGFza0R1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGVsZXRlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrRGVsZXRlSW1hZ2Uuc3JjID0geDtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrRGVsZXRlLmFwcGVuZENoaWxkKHRhc2tEZWxldGVJbWFnZSk7XHJcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBwcm9qZWN0IHN0b3JhZ2VcclxubGV0IHByb2plY3RzID0ge307XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==