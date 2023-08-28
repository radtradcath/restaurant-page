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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Philosopher/Philosopher-Regular.ttf */ "./src/fonts/Philosopher/Philosopher-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Philosopher/Philosopher-Bold.ttf */ "./src/fonts/Philosopher/Philosopher-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Philosopher/Philosopher-Italic.ttf */ "./src/fonts/Philosopher/Philosopher-Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Philosopher/Philosopher-BoldItalic.ttf */ "./src/fonts/Philosopher/Philosopher-BoldItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/body-bg.jpg */ "./src/img/body-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/welcome-bg.jpg */ "./src/img/welcome-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/info-bg.jpg */ "./src/img/info-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Philosopher';
    font-weight: 400;
    font-style: normal;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
}

@font-face {
    font-family: 'Philosopher';
    font-weight: 700;
    font-style: normal;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}

@font-face {
    font-family: 'Philosopher';
    font-style: italic;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');
}

@font-face {
    font-family: 'Philosopher';
    font-weight: 700;
    font-style: italic;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('truetype');
}

* {
    font-family: 'Philosopher', sans-serif;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    margin: 0;
    height: 100vh;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-size: 13%;
    background-attachment: fixed;
}

#pageContainer {
    position: relative;
    display: grid;
    grid-template-rows: 70px 1fr 70px;
    height: 100%;
    width: 75%;
}

#formContainer {
    grid-row: 2 / 3;
    background-color: rgb(243, 220, 9);
    height: 100%;
    display: flex;    
    justify-content: center;
}

form {
    font-size: 1.5em;
    color: white;
    border-radius: 10px;
    margin-bottom: 30px;
    position: relative;
    margin: auto;
    background-color: rgba(8, 8, 75, 0.966);
    height: 85%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
}

form :first-child {
    font-size: 2em;
    position: absolute;
    top: 3%;
    left: 10%;
}

form button {
    font-size: 1.5em;
    color: rgba(8, 8, 75, 0.966);
    background-color: rgb(236, 236, 53);
    border: 1px solid transparent;
    border-radius: 10px;
    width: 160px;
    height: 70px;
    margin-bottom: 20px;
}

form button:hover {
    color: rgba(8, 8, 75, 0.966);
    background-color: rgb(240, 240, 175);
}

form textarea {
    padding: 5px 5px;
    font-size: 1rem;
    resize: none;
}

input {
    font-size: 1em;
    padding-left: 20px;
    width: 50%;
    height: 40px;
    border-radius: 10px;
    outline: none;
    border: 0px;
}


header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    grid-row: 1 / 2;
    margin: 0;
    background-color: rgba(8, 8, 75, 0.966);
    width: inherit;
    box-shadow: 0px 9px 16px -6px rgba(5,5,5,1);
}

ul {
    font-size: 2rem;
    color: white;
    display: flex;
    list-style: none;
    gap: 50px;
    margin-right: 30px;
}

header div {
    margin: 10px 0 5px 10px;
    width: 80px;
    height: 80px;
}

#mainContent {
    grid-row: 2 / 3;
    display: grid;
    grid-template-rows: 1fr 1fr;
}

.welcome {    
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    grid-row: 1 / 2;
    margin-bottom: 30px;
}

.welcome h1 {
    padding-left: 5%;
    margin-top: 10%;
    font-family: 'Philosopher', sans-serif;
    font-size: 4em;
    font-weight: 700;
    font-style: normal;
    color: white;
}

.welcome h2 {
    text-align: end;
    margin-left: 40%;
    margin-top: 25%;
    padding-right: 8%;
    font-family: 'Philosopher', sans-serif;
    font-size: 3em;
    font-weight: 700;
    font-style: normal;
    color: white;
}

.info {
    color: rgb(18, 28, 121);
    font-size: 1.5em;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
    background-size: 115%;
    font-weight: 700;
    grid-row: 2 / 3;
}

.info :first-child {
    margin-top: 15%;
    background-color: rgba(255, 255, 255, 0.295);
    padding-right: 8%;
    padding-left: 5%;
    word-spacing: 1px;
}

.info :last-child {
    background-color: rgba(255, 255, 255, 0.295);
    padding-right: 8%;
    padding-left: 5%;
}

footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    background-color: rgba(8, 8, 75, 0.966);
    grid-row: 3 / 4;
}

footer img {
    height: 50px;
    width: auto;
}

a:visited {
    color: white;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,gBAAgB;IAChB,kBAAkB;IAClB,+DAA0E;AAC9E;;AAEA;IACI,0BAA0B;IAC1B,gBAAgB;IAChB,kBAAkB;IAClB,+DAAuE;AAC3E;;AAEA;IACI,0BAA0B;IAC1B,kBAAkB;IAClB,+DAAyE;AAC7E;;AAEA;IACI,0BAA0B;IAC1B,gBAAgB;IAChB,kBAAkB;IAClB,+DAA6E;AACjF;;AAEA;IACI,sCAAsC;IACtC,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,aAAa;IACb,yDAAwC;IACxC,oBAAoB;IACpB,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,iCAAiC;IACjC,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,eAAe;IACf,kCAAkC;IAClC,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,uCAAuC;IACvC,WAAW;IACX,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,OAAO;IACP,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,4BAA4B;IAC5B,mCAAmC;IACnC,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,WAAW;AACf;;;AAGA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,SAAS;IACT,uCAAuC;IACvC,cAAc;IACd,2CAA2C;AAC/C;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,yDAA2C;IAC3C,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,sCAAsC;IACtC,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,sCAAsC;IACtC,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,yDAAwC;IACxC,qBAAqB;IACrB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,4CAA4C;IAC5C,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,4CAA4C;IAC5C,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,uCAAuC;IACvC,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;AAChB","sourcesContent":["@font-face {\n    font-family: 'Philosopher';\n    font-weight: 400;\n    font-style: normal;\n    src: url('./fonts/Philosopher/Philosopher-Regular.ttf') format('truetype');\n}\n\n@font-face {\n    font-family: 'Philosopher';\n    font-weight: 700;\n    font-style: normal;\n    src: url('./fonts/Philosopher/Philosopher-Bold.ttf') format('truetype');\n}\n\n@font-face {\n    font-family: 'Philosopher';\n    font-style: italic;\n    src: url('./fonts/Philosopher/Philosopher-Italic.ttf') format('truetype');\n}\n\n@font-face {\n    font-family: 'Philosopher';\n    font-weight: 700;\n    font-style: italic;\n    src: url('./fonts/Philosopher/Philosopher-BoldItalic.ttf') format('truetype');\n}\n\n* {\n    font-family: 'Philosopher', sans-serif;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    height: 100vh;\n    background-image: url(./img/body-bg.jpg);\n    background-size: 13%;\n    background-attachment: fixed;\n}\n\n#pageContainer {\n    position: relative;\n    display: grid;\n    grid-template-rows: 70px 1fr 70px;\n    height: 100%;\n    width: 75%;\n}\n\n#formContainer {\n    grid-row: 2 / 3;\n    background-color: rgb(243, 220, 9);\n    height: 100%;\n    display: flex;    \n    justify-content: center;\n}\n\nform {\n    font-size: 1.5em;\n    color: white;\n    border-radius: 10px;\n    margin-bottom: 30px;\n    position: relative;\n    margin: auto;\n    background-color: rgba(8, 8, 75, 0.966);\n    height: 85%;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 10px;\n}\n\nform :first-child {\n    font-size: 2em;\n    position: absolute;\n    top: 3%;\n    left: 10%;\n}\n\nform button {\n    font-size: 1.5em;\n    color: rgba(8, 8, 75, 0.966);\n    background-color: rgb(236, 236, 53);\n    border: 1px solid transparent;\n    border-radius: 10px;\n    width: 160px;\n    height: 70px;\n    margin-bottom: 20px;\n}\n\nform button:hover {\n    color: rgba(8, 8, 75, 0.966);\n    background-color: rgb(240, 240, 175);\n}\n\nform textarea {\n    padding: 5px 5px;\n    font-size: 1rem;\n    resize: none;\n}\n\ninput {\n    font-size: 1em;\n    padding-left: 20px;\n    width: 50%;\n    height: 40px;\n    border-radius: 10px;\n    outline: none;\n    border: 0px;\n}\n\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    grid-row: 1 / 2;\n    margin: 0;\n    background-color: rgba(8, 8, 75, 0.966);\n    width: inherit;\n    box-shadow: 0px 9px 16px -6px rgba(5,5,5,1);\n}\n\nul {\n    font-size: 2rem;\n    color: white;\n    display: flex;\n    list-style: none;\n    gap: 50px;\n    margin-right: 30px;\n}\n\nheader div {\n    margin: 10px 0 5px 10px;\n    width: 80px;\n    height: 80px;\n}\n\n#mainContent {\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n\n.welcome {    \n    background-image: url(./img/welcome-bg.jpg);\n    grid-row: 1 / 2;\n    margin-bottom: 30px;\n}\n\n.welcome h1 {\n    padding-left: 5%;\n    margin-top: 10%;\n    font-family: 'Philosopher', sans-serif;\n    font-size: 4em;\n    font-weight: 700;\n    font-style: normal;\n    color: white;\n}\n\n.welcome h2 {\n    text-align: end;\n    margin-left: 40%;\n    margin-top: 25%;\n    padding-right: 8%;\n    font-family: 'Philosopher', sans-serif;\n    font-size: 3em;\n    font-weight: 700;\n    font-style: normal;\n    color: white;\n}\n\n.info {\n    color: rgb(18, 28, 121);\n    font-size: 1.5em;\n    background-image: url(./img/info-bg.jpg);\n    background-size: 115%;\n    font-weight: 700;\n    grid-row: 2 / 3;\n}\n\n.info :first-child {\n    margin-top: 15%;\n    background-color: rgba(255, 255, 255, 0.295);\n    padding-right: 8%;\n    padding-left: 5%;\n    word-spacing: 1px;\n}\n\n.info :last-child {\n    background-color: rgba(255, 255, 255, 0.295);\n    padding-right: 8%;\n    padding-left: 5%;\n}\n\nfooter {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    color: white;\n    background-color: rgba(8, 8, 75, 0.966);\n    grid-row: 3 / 4;\n}\n\nfooter img {\n    height: 50px;\n    width: auto;\n}\n\na:visited {\n    color: white;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderContact: () => (/* binding */ renderContact)
/* harmony export */ });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./src/template.js");



function renderContact() {
    let template = (0,_template_js__WEBPACK_IMPORTED_MODULE_0__.renderTemplate)();
    const formContainer = document.createElement('div');
    const form = document.createElement('form');
    const formTitle = document.createElement('div');
    const nameLabel = document.createElement('label');
    const emailLabel = document.createElement('label');
    const commLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const emailInput = document.createElement('input');
    const commInput = document.createElement('textarea');
    const submitBtn = document.createElement('button');     

    
    template.pageContainer.appendChild(formContainer);
    formContainer.appendChild(form);    
    formContainer.setAttribute('id', 'formContainer');
    formTitle.textContent = "Submit your message!"    

    nameLabel.setAttribute('for', 'username');
    nameLabel.textContent = "Name";
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'username');
    nameInput.setAttribute('name', 'name');

    emailLabel.setAttribute('for', 'usermail');
    emailLabel.textContent = 'E-mail';
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'usermail');
    emailInput.setAttribute('name', 'usermail');

    commLabel.setAttribute('for', 'comment');
    commLabel.textContent = 'Description'
    commInput.setAttribute('type', 'textarea');
    commInput.setAttribute('id', 'comment');
    commInput.setAttribute('name', 'comment');
    commInput.setAttribute('rows', '15');
    commInput.setAttribute('cols', '50');

    submitBtn.textContent = 'Send!'

    form.appendChild(formTitle);
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(commLabel);
    form.appendChild(commInput);
    form.appendChild(submitBtn);
};

   


/***/ }),

/***/ "./src/landing-page.js":
/*!*****************************!*\
  !*** ./src/landing-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderLanding: () => (/* binding */ renderLanding)
/* harmony export */ });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./src/template.js");



function renderLanding() {
    let template = (0,_template_js__WEBPACK_IMPORTED_MODULE_0__.renderTemplate)();
    const mainContent = document.createElement('div');
    const welcomeContainer = document.createElement('div');
    const welcomeHeader = document.createElement('h1');
    const welcomeMessage = document.createElement('h2');
    const infoContainer = document.createElement('div');
    const infoPara1 = document.createElement('p');
    const infoPara2 = document.createElement('p');

    template.pageContainer.appendChild(mainContent);
    mainContent.setAttribute('id', 'mainContent');
    mainContent.appendChild(welcomeContainer);
    mainContent.appendChild(infoContainer);

    welcomeContainer.classList.add('welcome');
    welcomeContainer.appendChild(welcomeHeader);
    welcomeHeader.textContent = "Welcome to BBQ Bro!";
    welcomeContainer.appendChild(welcomeMessage);
    welcomeMessage.textContent = "What could be better than a suculent burger with crunchy fries? Oh, I see: THAT alongside a milk-shake!"

    infoContainer.classList.add('info')
    infoContainer.appendChild(infoPara1);
    infoPara1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat reprehenderit eius. Debitis sit laborum, praesentium perferendis maiores ex doloribus molestiae! Maiores minus repellat tenetur voluptas molestias quibusdam optio dolorum.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat reprehenderit eius. Debitis sit laborum, praesentium perferendis maiores ex doloribus molestiae! Maiores minus repellat tenetur voluptas molestias quibusdam optio dolorum.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat reprehenderit eius. "
    infoContainer.appendChild(infoPara2);
    infoPara2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat reprehenderit eius. Debitis sit laborum, praesentium perferendis maiores ex doloribus molestiae! Maiores minus repellat tenetur voluptas molestias quibusdam optio dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat reprehenderit eius. Debitis sit laborum, praesentium perferendis maiores ex doloribus molestiae! Maiores minus repellat tenetur voluptas molestias quibusdam optio dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat reprehenderit eius. Debitis sit laborum, praesentium perferendis maiores ex doloribus molestiae! Maiores minus repellat tenetur voluptas molestias quibusdam optio dolorum."
};

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTemplate: () => (/* binding */ renderTemplate)
/* harmony export */ });
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/header-logo.svg */ "./src/img/header-logo.svg");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page */ "./src/landing-page.js");





function renderTemplate() {
    const body = document.querySelector('body');
    const pageContainer = document.createElement('div');
    const header = document.createElement('header');
    const logo = document.createElement('div');
    const nav = document.createElement('div');
    const navlink1 = document.createElement('button');
    const navlink2 = document.createElement('button');
    const navlink3 = document.createElement('button');
    const footer = document.createElement('footer');
    const footerTM = document.createElement('div');
    const credit1 = document.createElement('div');
    const credit2 = document.createElement('div');
    const creditLink1 = document.createElement('a');
    const creditLink2 = document.createElement('a');
    const myLogo = new Image();
    const footerLogo = new Image();
    

    footerLogo.src = _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__;
    myLogo.src = _img_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__;
    logo.appendChild(myLogo);

    body.appendChild(pageContainer);
    header.appendChild(logo);
    header.appendChild(nav);
    pageContainer.setAttribute('id', 'pageContainer');
    pageContainer.appendChild(header);
    pageContainer.appendChild(footer);

    nav.appendChild(navlink1);
    nav.appendChild(navlink2);
    nav.appendChild(navlink3);
    navlink1.textContent = "Home";
    navlink2.textContent = "Menu";
    navlink3.textContent = "Contact";
    const tabs = nav.querySelectorAll('button');
    

    function callback(e) {
        console.log('hahaa');
        switch (e.target.textContent) {
            case 'Home':
                body.removeChild(pageContainer); 
                (0,_landing_page__WEBPACK_IMPORTED_MODULE_2__.renderLanding)();
                break;
            case 'Contact':
                body.removeChild(pageContainer);            
                (0,_contact__WEBPACK_IMPORTED_MODULE_0__.renderContact)();
                break;
            case 'Menu':
                break;
            default:                
        }
    }

    tabs.forEach((tab) => {
        console.log('aqui');
        tab.addEventListener('click', callback);
    })

    creditLink1.setAttribute('href', "https://www.freepik.com/free-vector/gradient-barbecue-logo-template_15291802.htm#query=hamburger%20logo&position=0&from_view=search&track=ais");
    creditLink1.textContent = 'Image by Freepik';
    creditLink2.setAttribute('href', "https://www.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_40222111.htm#query=burger%20background&position=27&from_view=keyword&track=ais#position=27&query=burger%20background");
    creditLink2.textContent = 'Image by rorozoa, on Freepik';
    credit1.appendChild(creditLink1);
    credit2.appendChild(creditLink2);
    footerTM.appendChild(footerLogo);
    footer.appendChild(credit1);
    footer.appendChild(footerTM);
    footer.appendChild(credit2);

    return {
        body,
        pageContainer,
        header,
        logo,
        nav,
        navlink1,
        navlink2,
        navlink3,
        tabs,
        footer,
        footerTM,
        credit1,
        credit2,
        creditLink1,
        creditLink2,
        myLogo,
        footerLogo,
    }
};

/***/ }),

/***/ "./src/fonts/Philosopher/Philosopher-Bold.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Philosopher/Philosopher-Bold.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e98a8743136a6828ccf.ttf";

/***/ }),

/***/ "./src/fonts/Philosopher/Philosopher-BoldItalic.ttf":
/*!**********************************************************!*\
  !*** ./src/fonts/Philosopher/Philosopher-BoldItalic.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e826fd8c668a2dd6f7f8.ttf";

/***/ }),

/***/ "./src/fonts/Philosopher/Philosopher-Italic.ttf":
/*!******************************************************!*\
  !*** ./src/fonts/Philosopher/Philosopher-Italic.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f107ae423ac4037b2c1f.ttf";

/***/ }),

/***/ "./src/fonts/Philosopher/Philosopher-Regular.ttf":
/*!*******************************************************!*\
  !*** ./src/fonts/Philosopher/Philosopher-Regular.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93c7d8b5efe3f355f3ca.ttf";

/***/ }),

/***/ "./src/img/body-bg.jpg":
/*!*****************************!*\
  !*** ./src/img/body-bg.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e463f9035989911d3ce5.jpg";

/***/ }),

/***/ "./src/img/header-logo.svg":
/*!*********************************!*\
  !*** ./src/img/header-logo.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afd5a0cebf84ed3444b7.svg";

/***/ }),

/***/ "./src/img/info-bg.jpg":
/*!*****************************!*\
  !*** ./src/img/info-bg.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "700c124ff0f011a8897a.jpg";

/***/ }),

/***/ "./src/img/welcome-bg.jpg":
/*!********************************!*\
  !*** ./src/img/welcome-bg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f80c35739ed8d41c623.jpg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landing_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page.js */ "./src/landing-page.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_landing_page_js__WEBPACK_IMPORTED_MODULE_0__.renderLanding)();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUtBQThEO0FBQzFHLDRDQUE0Qyw2SkFBMkQ7QUFDdkcsNENBQTRDLGlLQUE2RDtBQUN6Ryw0Q0FBNEMseUtBQWlFO0FBQzdHLDRDQUE0QywrR0FBb0M7QUFDaEYsNENBQTRDLHFIQUF1QztBQUNuRiw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEs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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FnRDtBQUNEO0FBQzFCOztBQUVyQiwrREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sYW5kaW5nLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RlbXBsYXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1BoaWxvc29waGVyL1BoaWxvc29waGVyLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9QaGlsb3NvcGhlci9QaGlsb3NvcGhlci1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvUGhpbG9zb3BoZXIvUGhpbG9zb3BoZXItSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vZm9udHMvUGhpbG9zb3BoZXIvUGhpbG9zb3BoZXItQm9sZEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9ib2R5LWJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1nL3dlbGNvbWUtYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9pbWcvaW5mby1iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUGhpbG9zb3BoZXInO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdQaGlsb3NvcGhlcic7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1BoaWxvc29waGVyJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1BoaWxvc29waGVyJztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiAnUGhpbG9zb3BoZXInLCBzYW5zLXNlcmlmO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTMlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbiNwYWdlQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDcwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA3NSU7XG59XG5cbiNmb3JtQ29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjIwLCA5KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDsgICAgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmZvcm0ge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgOCwgNzUsIDAuOTY2KTtcbiAgICBoZWlnaHQ6IDg1JTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG5mb3JtIDpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMyU7XG4gICAgbGVmdDogMTAlO1xufVxuXG5mb3JtIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBjb2xvcjogcmdiYSg4LCA4LCA3NSwgMC45NjYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgNTMpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5mb3JtIGJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoOCwgOCwgNzUsIDAuOTY2KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDE3NSk7XG59XG5cbmZvcm0gdGV4dGFyZWEge1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAwcHg7XG59XG5cblxuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgOCwgNzUsIDAuOTY2KTtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBib3gtc2hhZG93OiAwcHggOXB4IDE2cHggLTZweCByZ2JhKDUsNSw1LDEpO1xufVxuXG51bCB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZ2FwOiA1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuaGVhZGVyIGRpdiB7XG4gICAgbWFyZ2luOiAxMHB4IDAgNXB4IDEwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xufVxuXG4jbWFpbkNvbnRlbnQge1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbn1cblxuLndlbGNvbWUgeyAgICBcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi53ZWxjb21lIGgxIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBmb250LWZhbWlseTogJ1BoaWxvc29waGVyJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDRlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi53ZWxjb21lIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgICBtYXJnaW4tdG9wOiAyNSU7XG4gICAgcGFkZGluZy1yaWdodDogOCU7XG4gICAgZm9udC1mYW1pbHk6ICdQaGlsb3NvcGhlcicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW5mbyB7XG4gICAgY29sb3I6IHJnYigxOCwgMjgsIDEyMSk7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTUlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xufVxuXG4uaW5mbyA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjk1KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHdvcmQtc3BhY2luZzogMXB4O1xufVxuXG4uaW5mbyA6bGFzdC1jaGlsZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI5NSk7XG4gICAgcGFkZGluZy1yaWdodDogOCU7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgOCwgNzUsIDAuOTY2KTtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG59XG5cbmZvb3RlciBpbWcge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogYXV0bztcbn1cblxuYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogd2hpdGU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsK0RBQTBFO0FBQzlFOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsK0RBQXVFO0FBQzNFOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQiwrREFBeUU7QUFDN0U7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwrREFBNkU7QUFDakY7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsYUFBYTtJQUNiLHlEQUF3QztJQUN4QyxvQkFBb0I7SUFDcEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixTQUFTO0lBQ1QsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseURBQTJDO0lBQzNDLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQix5REFBd0M7SUFDeEMscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLDRDQUE0QztJQUM1QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUGhpbG9zb3BoZXInO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BoaWxvc29waGVyL1BoaWxvc29waGVyLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQaGlsb3NvcGhlcic7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUGhpbG9zb3BoZXIvUGhpbG9zb3BoZXItQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BoaWxvc29waGVyJztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9QaGlsb3NvcGhlci9QaGlsb3NvcGhlci1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQaGlsb3NvcGhlcic7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUGhpbG9zb3BoZXIvUGhpbG9zb3BoZXItQm9sZEl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogJ1BoaWxvc29waGVyJywgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9ib2R5LWJnLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTMlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG4jcGFnZUNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA3MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA3NSU7XFxufVxcblxcbiNmb3JtQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyMjAsIDkpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgOCwgNzUsIDAuOTY2KTtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuZm9ybSA6Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMlO1xcbiAgICBsZWZ0OiAxMCU7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgY29sb3I6IHJnYmEoOCwgOCwgNzUsIDAuOTY2KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCA1Myk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuZm9ybSBidXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogcmdiYSg4LCA4LCA3NSwgMC45NjYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDE3NSk7XFxufVxcblxcbmZvcm0gdGV4dGFyZWEge1xcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMHB4O1xcbn1cXG5cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgOCwgNzUsIDAuOTY2KTtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGJveC1zaGFkb3c6IDBweCA5cHggMTZweCAtNnB4IHJnYmEoNSw1LDUsMSk7XFxufVxcblxcbnVsIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGdhcDogNTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG5oZWFkZXIgZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4IDAgNXB4IDEwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbiNtYWluQ29udGVudCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4ud2VsY29tZSB7ICAgIFxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvd2VsY29tZS1iZy5qcGcpO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi53ZWxjb21lIGgxIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBmb250LWZhbWlseTogJ1BoaWxvc29waGVyJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA0ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ud2VsY29tZSBoMiB7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcXG4gICAgbWFyZ2luLXRvcDogMjUlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4JTtcXG4gICAgZm9udC1mYW1pbHk6ICdQaGlsb3NvcGhlcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBjb2xvcjogcmdiKDE4LCAyOCwgMTIxKTtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2luZm8tYmcuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTUlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5pbmZvIDpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDE1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI5NSk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDglO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgICB3b3JkLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLmluZm8gOmxhc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjk1KTtcXG4gICAgcGFkZGluZy1yaWdodDogOCU7XFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgOCwgNzUsIDAuOTY2KTtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7cmVuZGVyVGVtcGxhdGV9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuZXhwb3J0IHtyZW5kZXJDb250YWN0fTtcblxuZnVuY3Rpb24gcmVuZGVyQ29udGFjdCgpIHtcbiAgICBsZXQgdGVtcGxhdGUgPSByZW5kZXJUZW1wbGF0ZSgpO1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgY29tbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGNvbW1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7ICAgICBcblxuICAgIFxuICAgIHRlbXBsYXRlLnBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTsgICAgXG4gICAgZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm1Db250YWluZXInKTtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIlN1Ym1pdCB5b3VyIG1lc3NhZ2UhXCIgICAgXG5cbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndXNlcm5hbWUnKTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWVcIjtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd1c2VybmFtZScpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuXG4gICAgZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd1c2VybWFpbCcpO1xuICAgIGVtYWlsTGFiZWwudGV4dENvbnRlbnQgPSAnRS1tYWlsJztcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd1c2VybWFpbCcpO1xuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3VzZXJtYWlsJyk7XG5cbiAgICBjb21tTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY29tbWVudCcpO1xuICAgIGNvbW1MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbidcbiAgICBjb21tSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHRhcmVhJyk7XG4gICAgY29tbUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tbWVudCcpO1xuICAgIGNvbW1JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY29tbWVudCcpO1xuICAgIGNvbW1JbnB1dC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMTUnKTtcbiAgICBjb21tSW5wdXQuc2V0QXR0cmlidXRlKCdjb2xzJywgJzUwJyk7XG5cbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU2VuZCEnXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjb21tTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY29tbUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG59O1xuXG4gICBcbiIsImltcG9ydCB7IHJlbmRlclRlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5leHBvcnQgeyByZW5kZXJMYW5kaW5nIH07XG5cbmZ1bmN0aW9uIHJlbmRlckxhbmRpbmcoKSB7XG4gICAgbGV0IHRlbXBsYXRlID0gcmVuZGVyVGVtcGxhdGUoKTtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHdlbGNvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB3ZWxjb21lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCB3ZWxjb21lTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGluZm9QYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBpbmZvUGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICB0ZW1wbGF0ZS5wYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbiAgICBtYWluQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5Db250ZW50Jyk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQod2VsY29tZUNvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG5cbiAgICB3ZWxjb21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUnKTtcbiAgICB3ZWxjb21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWVIZWFkZXIpO1xuICAgIHdlbGNvbWVIZWFkZXIudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gQkJRIEJybyFcIjtcbiAgICB3ZWxjb21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWVNZXNzYWdlKTtcbiAgICB3ZWxjb21lTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiV2hhdCBjb3VsZCBiZSBiZXR0ZXIgdGhhbiBhIHN1Y3VsZW50IGJ1cmdlciB3aXRoIGNydW5jaHkgZnJpZXM/IE9oLCBJIHNlZTogVEhBVCBhbG9uZ3NpZGUgYSBtaWxrLXNoYWtlIVwiXG5cbiAgICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2luZm8nKVxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb1BhcmExKTtcbiAgICBpbmZvUGFyYTEudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFZlcm8gcGxhY2VhdCByZXByZWhlbmRlcml0IGVpdXMuIERlYml0aXMgc2l0IGxhYm9ydW0sIHByYWVzZW50aXVtIHBlcmZlcmVuZGlzIG1haW9yZXMgZXggZG9sb3JpYnVzIG1vbGVzdGlhZSEgTWFpb3JlcyBtaW51cyByZXBlbGxhdCB0ZW5ldHVyIHZvbHVwdGFzIG1vbGVzdGlhcyBxdWlidXNkYW0gb3B0aW8gZG9sb3J1bS4uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFZlcm8gcGxhY2VhdCByZXByZWhlbmRlcml0IGVpdXMuIERlYml0aXMgc2l0IGxhYm9ydW0sIHByYWVzZW50aXVtIHBlcmZlcmVuZGlzIG1haW9yZXMgZXggZG9sb3JpYnVzIG1vbGVzdGlhZSEgTWFpb3JlcyBtaW51cyByZXBlbGxhdCB0ZW5ldHVyIHZvbHVwdGFzIG1vbGVzdGlhcyBxdWlidXNkYW0gb3B0aW8gZG9sb3J1bS4uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFZlcm8gcGxhY2VhdCByZXByZWhlbmRlcml0IGVpdXMuIFwiXG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvUGFyYTIpO1xuICAgIGluZm9QYXJhMi50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVmVybyBwbGFjZWF0IHJlcHJlaGVuZGVyaXQgZWl1cy4gRGViaXRpcyBzaXQgbGFib3J1bSwgcHJhZXNlbnRpdW0gcGVyZmVyZW5kaXMgbWFpb3JlcyBleCBkb2xvcmlidXMgbW9sZXN0aWFlISBNYWlvcmVzIG1pbnVzIHJlcGVsbGF0IHRlbmV0dXIgdm9sdXB0YXMgbW9sZXN0aWFzIHF1aWJ1c2RhbSBvcHRpbyBkb2xvcnVtLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBWZXJvIHBsYWNlYXQgcmVwcmVoZW5kZXJpdCBlaXVzLiBEZWJpdGlzIHNpdCBsYWJvcnVtLCBwcmFlc2VudGl1bSBwZXJmZXJlbmRpcyBtYWlvcmVzIGV4IGRvbG9yaWJ1cyBtb2xlc3RpYWUhIE1haW9yZXMgbWludXMgcmVwZWxsYXQgdGVuZXR1ciB2b2x1cHRhcyBtb2xlc3RpYXMgcXVpYnVzZGFtIG9wdGlvIGRvbG9ydW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFZlcm8gcGxhY2VhdCByZXByZWhlbmRlcml0IGVpdXMuIERlYml0aXMgc2l0IGxhYm9ydW0sIHByYWVzZW50aXVtIHBlcmZlcmVuZGlzIG1haW9yZXMgZXggZG9sb3JpYnVzIG1vbGVzdGlhZSEgTWFpb3JlcyBtaW51cyByZXBlbGxhdCB0ZW5ldHVyIHZvbHVwdGFzIG1vbGVzdGlhcyBxdWlidXNkYW0gb3B0aW8gZG9sb3J1bS5cIlxufTsiLCJleHBvcnQgeyByZW5kZXJUZW1wbGF0ZSB9O1xuaW1wb3J0IHsgcmVuZGVyQ29udGFjdCB9IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2ltZy9oZWFkZXItbG9nby5zdmcnXG5pbXBvcnQgeyByZW5kZXJMYW5kaW5nIH0gZnJvbSAnLi9sYW5kaW5nLXBhZ2UnO1xuXG5mdW5jdGlvbiByZW5kZXJUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmF2bGluazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBuYXZsaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG5hdmxpbmszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZm9vdGVyVE0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjcmVkaXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY3JlZGl0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNyZWRpdExpbmsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGNyZWRpdExpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IG15TG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGZvb3RlckxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBcblxuICAgIGZvb3RlckxvZ28uc3JjID0gTG9nbztcbiAgICBteUxvZ28uc3JjID0gTG9nbztcbiAgICBsb2dvLmFwcGVuZENoaWxkKG15TG9nbyk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHBhZ2VDb250YWluZXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBwYWdlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncGFnZUNvbnRhaW5lcicpO1xuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2bGluazEpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZsaW5rMik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdmxpbmszKTtcbiAgICBuYXZsaW5rMS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIG5hdmxpbmsyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbmF2bGluazMudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBjb25zdCB0YWJzID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgIFxuXG4gICAgZnVuY3Rpb24gY2FsbGJhY2soZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnaGFoYWEnKTtcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChwYWdlQ29udGFpbmVyKTsgXG4gICAgICAgICAgICAgICAgcmVuZGVyTGFuZGluZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQ29udGFjdCc6XG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChwYWdlQ29udGFpbmVyKTsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZW5kZXJDb250YWN0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdNZW51JzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6ICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FxdWknKTtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spO1xuICAgIH0pXG5cbiAgICBjcmVkaXRMaW5rMS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2dyYWRpZW50LWJhcmJlY3VlLWxvZ28tdGVtcGxhdGVfMTUyOTE4MDIuaHRtI3F1ZXJ5PWhhbWJ1cmdlciUyMGxvZ28mcG9zaXRpb249MCZmcm9tX3ZpZXc9c2VhcmNoJnRyYWNrPWFpc1wiKTtcbiAgICBjcmVkaXRMaW5rMS50ZXh0Q29udGVudCA9ICdJbWFnZSBieSBGcmVlcGlrJztcbiAgICBjcmVkaXRMaW5rMi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtcGhvdG8vZXhwbG9kaW5nLWJ1cmdlci13aXRoLXZlZ2V0YWJsZXMtbWVsdGVkLWNoZWVzZS1ibGFjay1iYWNrZ3JvdW5kLWdlbmVyYXRpdmUtYWlfNDAyMjIxMTEuaHRtI3F1ZXJ5PWJ1cmdlciUyMGJhY2tncm91bmQmcG9zaXRpb249MjcmZnJvbV92aWV3PWtleXdvcmQmdHJhY2s9YWlzI3Bvc2l0aW9uPTI3JnF1ZXJ5PWJ1cmdlciUyMGJhY2tncm91bmRcIik7XG4gICAgY3JlZGl0TGluazIudGV4dENvbnRlbnQgPSAnSW1hZ2UgYnkgcm9yb3pvYSwgb24gRnJlZXBpayc7XG4gICAgY3JlZGl0MS5hcHBlbmRDaGlsZChjcmVkaXRMaW5rMSk7XG4gICAgY3JlZGl0Mi5hcHBlbmRDaGlsZChjcmVkaXRMaW5rMik7XG4gICAgZm9vdGVyVE0uYXBwZW5kQ2hpbGQoZm9vdGVyTG9nbyk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWRpdDEpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUTSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWRpdDIpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9keSxcbiAgICAgICAgcGFnZUNvbnRhaW5lcixcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBsb2dvLFxuICAgICAgICBuYXYsXG4gICAgICAgIG5hdmxpbmsxLFxuICAgICAgICBuYXZsaW5rMixcbiAgICAgICAgbmF2bGluazMsXG4gICAgICAgIHRhYnMsXG4gICAgICAgIGZvb3RlcixcbiAgICAgICAgZm9vdGVyVE0sXG4gICAgICAgIGNyZWRpdDEsXG4gICAgICAgIGNyZWRpdDIsXG4gICAgICAgIGNyZWRpdExpbmsxLFxuICAgICAgICBjcmVkaXRMaW5rMixcbiAgICAgICAgbXlMb2dvLFxuICAgICAgICBmb290ZXJMb2dvLFxuICAgIH1cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtyZW5kZXJMYW5kaW5nfSBmcm9tICcuL2xhbmRpbmctcGFnZS5qcyc7XG5pbXBvcnQge3JlbmRlckNvbnRhY3RQYWdlfSBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbnJlbmRlckxhbmRpbmcoKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=