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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat-VariableFont_wght.ttf */ "./src/fonts/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: montserrat;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

:root {
    --primary: #EA40A4;
    --business: #3a82ee;
    --personal: var(--primary);
    --light: #eee;
    --dark: #313154;
    --danger: #ff5b57;
    --grey: #888;
    --shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

    --business-glow: 0px 0px 4px rgba(58, 130, 238, 0.75);
    --personal-glow: 0px 0px 4px rgba(234, 64, 164, 0.75);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: montserrat, sans-serif;
}

body {
    display: grid;
    grid-template-columns: minmax(min-content, 1fr);
    grid-template-rows: max-content 4fr min-content;

    height: 100vh;
    color: var(--dark);
    background-color: var(--light);
}

/*HEADER*/
header {
    background-color: bisque;
}

/*MAIN*/

aside {
    background-color: rgb(189, 246, 227);
}

#main {
    display: grid;
    grid-template-columns: minmax(min-content, 1fr) 3fr;
}



/*FOOTER*/
footer {
    background-color: rgb(199, 196, 191)
}

footer img {
    width: 15px;
    margin: 0 5px;
}

/*----------------*/`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,4CAAkD;AACtD;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,0BAA0B;IAC1B,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,wCAAwC;;IAExC,qDAAqD;IACrD,qDAAqD;AACzD;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,+CAA+C;IAC/C,+CAA+C;;IAE/C,aAAa;IACb,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA,SAAS;AACT;IACI,wBAAwB;AAC5B;;AAEA,OAAO;;AAEP;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,mDAAmD;AACvD;;;;AAIA,SAAS;AACT;IACI;AACJ;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA,mBAAmB","sourcesContent":["@font-face {\n    font-family: montserrat;\n    src: url(./fonts/Montserrat-VariableFont_wght.ttf);\n}\n\n:root {\n    --primary: #EA40A4;\n    --business: #3a82ee;\n    --personal: var(--primary);\n    --light: #eee;\n    --dark: #313154;\n    --danger: #ff5b57;\n    --grey: #888;\n    --shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n\n    --business-glow: 0px 0px 4px rgba(58, 130, 238, 0.75);\n    --personal-glow: 0px 0px 4px rgba(234, 64, 164, 0.75);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: montserrat, sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: minmax(min-content, 1fr);\n    grid-template-rows: max-content 4fr min-content;\n\n    height: 100vh;\n    color: var(--dark);\n    background-color: var(--light);\n}\n\n/*HEADER*/\nheader {\n    background-color: bisque;\n}\n\n/*MAIN*/\n\naside {\n    background-color: rgb(189, 246, 227);\n}\n\n#main {\n    display: grid;\n    grid-template-columns: minmax(min-content, 1fr) 3fr;\n}\n\n\n\n/*FOOTER*/\nfooter {\n    background-color: rgb(199, 196, 191)\n}\n\nfooter img {\n    width: 15px;\n    margin: 0 5px;\n}\n\n/*----------------*/"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/form-and-todolist.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/form-and-todolist.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `input:not([type="radio"]):not([type="checkbox"]),
button {
    appearance: none;
    border: none;
    outline: none;
    background: none;
    cursor: initial;
}

section {
    margin-top: 2em;
    margin-bottom: 2em;
    padding-left: 1.5em;
    padding-right: 1.5em;
}

h3 {
    color: var(--dark);
    font-size: 1em;
    font-weight: 400;
    margin-bottom: 0.5em;
}

h4 {
    color: var(--grey);
    font-size: 0.875em;
    font-weight: 700;
    margin-bottom: 0.75em;
}

.greeting .title {
    display: flex;
}

.greeting .title input {
    margin-left: 0.5em;
    flex: 1 1 0%;
    min-width: 0;
}

.greeting .title input,
.greeting .title {
    color: var(--dark);
    font-size: 1.5rem;
    font-weight: 700;
}

.create-todo input[type="text"] {
    display: block;
    width: 100%;
    font-size: 1.125rem;
    padding: 1rem 1.5rem;
    color: var(--dark);
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: var(--shadow);
    margin-bottom: 1.5rem;
}

.create-todo .options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin-bottom: 1.5rem;
}

.create-todo .options label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: var(--shadow);
    cursor: pointer;
}

input[type="radio"],
input[type="checkbox"] {
    display: none;
}

.bubble {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid var(--business);
    box-shadow: var(--business-glow);
}

.bubble.personal {
    border-color: var(--personal);
    box-shadow: var(--personal-glow);
}

.bubble::after {
    content: "";
    display: block;
    opacity: 0;
    width: 0px;
    height: 0px;
    background-color: var(--business);
    box-shadow: var(--business-glow);
    border-radius: 50%;
    transition: 0.2s ease-in-out;
}

.bubble.personal::after {
    background-color: var(--personal);
    box-shadow: var(--personal-glow);
}

input:checked~.bubble::after {
    width: 10px;
    height: 10px;
    opacity: 1;
}

.create-todo .options label div {
    font-size: 1.125rem;
    margin-top: 1rem;
}

.create-todo input[type="submit"] {
    display: block;
    width: 100%;
    font-size: 1.125rem;
    padding: 1rem 1.5rem;
    color: #fff;
    background-color: var(--primary);
    border-radius: 0.5rem;
    box-shadow: var(--personal-glow);
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

.create-todo input[type="submit"]:hover {
    opacity: 0.75;
}

.todo-list .list {
    margin: 1rem 0;
}

.todo-list .todo-item {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: var(--shadow);
    margin-bottom: 1rem;
}

.todo-item label {
    display: block;
    margin-right: 1rem;
    cursor: pointer;
}

.todo-item .todo-content {
    flex: 1 1 0%;
}

.todo-item .todo-content input {
    color: var(--dark);
    font-size: 1.125rem;
}

.todo-item .actions {
    display: flex;
    align-items: center;
}

.todo-item .actions button {
    display: block;
    padding: 0.5rem;
    border-radius: 0.25rem;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

.todo-item .actions button:hover {
    opacity: 0.75;
}

.todo-item .actions .edit {
    margin-right: 0.5rem;
    background-color: var(--primary);
}

.todo-item .actions .delete {
    background-color: var(--danger);
}

.todo-item.done .todo-content input {
    text-decoration: line-through;
    color: var(--grey);
}`, "",{"version":3,"sources":["webpack://./src/styles/form-and-todolist.css"],"names":[],"mappings":"AAAA;;IAEI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;;IAEI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,sBAAsB;IACtB,qBAAqB;IACrB,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,sBAAsB;IACtB,qBAAqB;IACrB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,iCAAiC;IACjC,gCAAgC;AACpC;;AAEA;IACI,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI,WAAW;IACX,cAAc;IACd,UAAU;IACV,UAAU;IACV,WAAW;IACX,iCAAiC;IACjC,gCAAgC;IAChC,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,iCAAiC;IACjC,gCAAgC;AACpC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,oBAAoB;IACpB,WAAW;IACX,gCAAgC;IAChC,qBAAqB;IACrB,gCAAgC;IAChC,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,qBAAqB;IACrB,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,sBAAsB;IACtB,WAAW;IACX,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,gCAAgC;AACpC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;AACtB","sourcesContent":["input:not([type=\"radio\"]):not([type=\"checkbox\"]),\nbutton {\n    appearance: none;\n    border: none;\n    outline: none;\n    background: none;\n    cursor: initial;\n}\n\nsection {\n    margin-top: 2em;\n    margin-bottom: 2em;\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n}\n\nh3 {\n    color: var(--dark);\n    font-size: 1em;\n    font-weight: 400;\n    margin-bottom: 0.5em;\n}\n\nh4 {\n    color: var(--grey);\n    font-size: 0.875em;\n    font-weight: 700;\n    margin-bottom: 0.75em;\n}\n\n.greeting .title {\n    display: flex;\n}\n\n.greeting .title input {\n    margin-left: 0.5em;\n    flex: 1 1 0%;\n    min-width: 0;\n}\n\n.greeting .title input,\n.greeting .title {\n    color: var(--dark);\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\n.create-todo input[type=\"text\"] {\n    display: block;\n    width: 100%;\n    font-size: 1.125rem;\n    padding: 1rem 1.5rem;\n    color: var(--dark);\n    background-color: #fff;\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow);\n    margin-bottom: 1.5rem;\n}\n\n.create-todo .options {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 1rem;\n    margin-bottom: 1.5rem;\n}\n\n.create-todo .options label {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 1.5rem;\n    background-color: #fff;\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow);\n    cursor: pointer;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n    display: none;\n}\n\n.bubble {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    border: 2px solid var(--business);\n    box-shadow: var(--business-glow);\n}\n\n.bubble.personal {\n    border-color: var(--personal);\n    box-shadow: var(--personal-glow);\n}\n\n.bubble::after {\n    content: \"\";\n    display: block;\n    opacity: 0;\n    width: 0px;\n    height: 0px;\n    background-color: var(--business);\n    box-shadow: var(--business-glow);\n    border-radius: 50%;\n    transition: 0.2s ease-in-out;\n}\n\n.bubble.personal::after {\n    background-color: var(--personal);\n    box-shadow: var(--personal-glow);\n}\n\ninput:checked~.bubble::after {\n    width: 10px;\n    height: 10px;\n    opacity: 1;\n}\n\n.create-todo .options label div {\n    font-size: 1.125rem;\n    margin-top: 1rem;\n}\n\n.create-todo input[type=\"submit\"] {\n    display: block;\n    width: 100%;\n    font-size: 1.125rem;\n    padding: 1rem 1.5rem;\n    color: #fff;\n    background-color: var(--primary);\n    border-radius: 0.5rem;\n    box-shadow: var(--personal-glow);\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n}\n\n.create-todo input[type=\"submit\"]:hover {\n    opacity: 0.75;\n}\n\n.todo-list .list {\n    margin: 1rem 0;\n}\n\n.todo-list .todo-item {\n    display: flex;\n    align-items: center;\n    background-color: #fff;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow);\n    margin-bottom: 1rem;\n}\n\n.todo-item label {\n    display: block;\n    margin-right: 1rem;\n    cursor: pointer;\n}\n\n.todo-item .todo-content {\n    flex: 1 1 0%;\n}\n\n.todo-item .todo-content input {\n    color: var(--dark);\n    font-size: 1.125rem;\n}\n\n.todo-item .actions {\n    display: flex;\n    align-items: center;\n}\n\n.todo-item .actions button {\n    display: block;\n    padding: 0.5rem;\n    border-radius: 0.25rem;\n    color: #fff;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n}\n\n.todo-item .actions button:hover {\n    opacity: 0.75;\n}\n\n.todo-item .actions .edit {\n    margin-right: 0.5rem;\n    background-color: var(--primary);\n}\n\n.todo-item .actions .delete {\n    background-color: var(--danger);\n}\n\n.todo-item.done .todo-content input {\n    text-decoration: line-through;\n    color: var(--grey);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/sidebar.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/sidebar.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.selected {
    text-decoration: underline;
    color: red;
}`, "",{"version":3,"sources":["webpack://./src/styles/sidebar.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,UAAU;AACd","sourcesContent":[".selected {\n    text-decoration: underline;\n    color: red;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/form-and-todolist.css":
/*!******************************************!*\
  !*** ./src/styles/form-and-todolist.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_and_todolist_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./form-and-todolist.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/form-and-todolist.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_form_and_todolist_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_form_and_todolist_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_form_and_todolist_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_form_and_todolist_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/sidebar.css":
/*!********************************!*\
  !*** ./src/styles/sidebar.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/sidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/defaultList.js":
/*!***************************************!*\
  !*** ./src/components/defaultList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultlist)
/* harmony export */ });
/* harmony import */ var _styles_form_and_todolist_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/form-and-todolist.css */ "./src/styles/form-and-todolist.css");


function defaultlist() {
    const contentDiv = document.getElementById('content') //content div

    /* DEFAULT LIST DIV*/
    const defaultList = document.createElement('div');
    defaultList.classList.add('default-list');
    defaultList.id = 'default-list';

    const todoListElement = document.createElement('section'); // TODO LIST OF ITEMS
    todoListElement.classList.add('todo-list');
    const todoListElement_h3 = document.createElement('h3');
    todoListElement_h3.textContent = 'To Do List';
    todoListElement.appendChild(todoListElement_h3);

    const todoList_div = document.createElement('div');
    todoList_div.classList.add('list');
    todoList_div.id = 'todo-list';


    todoListElement.appendChild(todoList_div);
    defaultList.appendChild(todoListElement);
    contentDiv.appendChild(defaultList); //add default list to main div

    return defaultList;
}

/***/ }),

/***/ "./src/components/displayToDo.js":
/*!***************************************!*\
  !*** ./src/components/displayToDo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayToDos: () => (/* binding */ displayToDos)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/components/todos.js");


function displayToDos() {
    const todoList = document.querySelector('#todo-list');
    todoList.innerHTML = '';

    _todos__WEBPACK_IMPORTED_MODULE_0__.todos.forEach(todo => {
        const todoItem = document.createElement('div'); // TODO ITEM
        todoItem.classList.add('todo-item');

        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = todo.done;
        const span = document.createElement('span');
        span.classList.add('bubble');
    
        if (todo.category == 'personal') {
            span.classList.add('personal');
        } else {
            span.classList.add('business');
        }

        label.appendChild(input);
        label.appendChild(span);

        const content = document.createElement('div'); //TODO ITEM CONTENT
        content.classList.add('todo-content');
        const content_input = document.createElement('input');
        content_input.type = 'text';
        content_input.value = `${todo.content}`;
        content_input.setAttribute('readonly', true);
        content.appendChild(content_input);

        const actions = document.createElement('div'); //ACTION BUTTONS
        actions.classList.add('actions');
        const edit = document.createElement('button');
        edit.classList.add('edit');
        edit.textContent = 'Edit'
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Delete';
        actions.appendChild(edit);
        actions.appendChild(deleteButton);

        todoItem.appendChild(label);
        todoItem.appendChild(content);
        todoItem.appendChild(actions);

        todoList.appendChild(todoItem);

        if (todo.done) {
            todoItem.classList.add('done');
        }

        input.addEventListener('click', e => {
            todo.done = e.target.checked;
            (0,_todos__WEBPACK_IMPORTED_MODULE_0__.saveTodos)();

            if (todo.done) {
                todoItem.classList.add('done');
            } else {
                todoItem.classList.remove('done');
            }
            displayToDos();
        })

        edit.addEventListener('click', e => {
            const input  = content.querySelector('input');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', e => {
                input.setAttribute('readonly', true);
                todo.content = e.target.value;
                (0,_todos__WEBPACK_IMPORTED_MODULE_0__.saveTodos)();
                displayToDos();
            })
        })

        deleteButton.addEventListener('click', e => {
            ;(0,_todos__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(todo);
            displayToDos();
        })
    })

}



/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var _assets_github_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/github-logo.png */ "./src/assets/github-logo.png");


function footer() {
    const footerElement = document.getElementById('footer');

      const footerContainer = document.createElement('div');
      footerContainer.classList.add('footer-container');
  
      const footerIcon = new Image();
      footerIcon.src = _assets_github_logo_png__WEBPACK_IMPORTED_MODULE_0__; 
      footerContainer.innerHTML = "built & designed by";
      footerContainer.appendChild(footerIcon);
      const gitLink = document.createElement('a');
      gitLink.innerHTML = 'maximkwski';
      gitLink.target = "_blank";
      gitLink.rel = "noopener noreferrer";
      gitLink.href = "https://github.com/maximkwski";
      footerContainer.appendChild(gitLink);
      
      footerContainer.innerHTML += " | ";
      const sourceLink = document.createElement('a');
      sourceLink.innerHTML = 'source';
      sourceLink.target = "_blank";
      sourceLink.rel = "noopener noreferrer";
      sourceLink.href = "https://github.com/maximkwski/todo-things-project";
      
      
      footerContainer.appendChild(sourceLink);
      
      footerElement.appendChild(footerContainer);

    return footerElement;
}

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _styles_form_and_todolist_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/form-and-todolist.css */ "./src/styles/form-and-todolist.css");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/components/todos.js");
/* harmony import */ var _displayToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayToDo */ "./src/components/displayToDo.js");




function form() {
    // const contentDiv = document.getElementById('main') //main div
    const contentDiv = document.querySelector('#content')

    //FORM
    const createToDoElement = document.createElement('section');
    createToDoElement.classList.add('create-todo');
    const createToDoElement_h3 = document.createElement('h3');
    createToDoElement_h3.textContent = 'Create To Do';
    createToDoElement.appendChild(createToDoElement_h3);
    const todoForm = document.createElement('form');
    todoForm.id = 'new-todo-form';
    const todoForm_h4 = document.createElement('h4');
    todoForm_h4.textContent = "What's on your todo list?";
    const todoForm_input = document.createElement('input');
    todoForm_input.type = 'text';
    todoForm_input.name = 'content';
    todoForm_input.id = 'content';
    todoForm_input.placeholder = "e.g make a video";
    todoForm.appendChild(todoForm_h4);
    todoForm.appendChild(todoForm_input);

    const optionsDiv = document.createElement('div'); //options div
    optionsDiv.classList.add('options');

    const label1 = document.createElement('label'); // option business
    const label1_input = document.createElement('input');
    label1_input.type = 'radio';
    label1_input.name = 'category';
    label1_input.id = 'category1';
    label1_input.value = 'business';
    const business_span = document.createElement('span');
    business_span.classList.add('bubble');
    business_span.classList.add('business');
    const business_div = document.createElement('div');
    business_div.textContent = 'Business';
    label1.appendChild(label1_input);
    label1.appendChild(business_span);
    label1.appendChild(business_div);
    optionsDiv.appendChild(label1);

    const label2 = document.createElement('label'); // option personal
    const label2_input = document.createElement('input');
    label2_input.type = 'radio';
    label2_input.name = 'category';
    label2_input.id = 'category2';
    label2_input.value = 'personal';
    const personal_span = document.createElement('span');
    personal_span.classList.add('bubble');
    personal_span.classList.add('personal');
    const personal_div = document.createElement('div');
    personal_div.textContent = 'Personal';
    label2.appendChild(label2_input);
    label2.appendChild(personal_span);
    label2.appendChild(personal_div);
    optionsDiv.appendChild(label2);

    todoForm.appendChild(optionsDiv); // add options div

    const submit_btn = document.createElement('input');
    submit_btn.type = 'submit';
    submit_btn.value = 'Add To Do';
    todoForm.appendChild(submit_btn); // add submit btn

    createToDoElement.appendChild(todoForm);
    contentDiv.appendChild(createToDoElement); // add create todo item 


    todoForm.addEventListener('submit', e => {
        e.preventDefault();

        const todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()

        }

        ;(0,_todos__WEBPACK_IMPORTED_MODULE_1__.addTodo)(todo);

        e.target.reset();
        // displayToDos();
    })
}

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header() {
    const headerElement = document.getElementById('header');

    const greetingElement = document.createElement('section'); // greeting element
    greetingElement.classList.add('greeting');
    const greeting_h2 = document.createElement('h2');
    greeting_h2.classList.add('title');
    greeting_h2.innerHTML = "Greetings, ";
    const greeting_input = document.createElement('input');
    greeting_input.type = 'text';
    greeting_input.id = 'name';
    greeting_input.placeholder = 'Name here';
    greeting_h2.appendChild(greeting_input);
    greetingElement.appendChild(greeting_h2);
    headerElement.appendChild(greetingElement); // add greeting elem


    window.addEventListener('load', () => {
        const nameInput = document.querySelector('#name');

        const username = localStorage.getItem('username') || '';
        nameInput.value = username;

        nameInput.addEventListener('change', e => {
            localStorage.setItem('username', e.target.value);
        })

    })

    return headerElement;
}

/***/ }),

/***/ "./src/components/projects.js":
/*!************************************!*\
  !*** ./src/components/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projects)
/* harmony export */ });
function projects() {
    const defaultList = document.querySelector('#content');
    const projectsDiv = document.createElement('section');
    projectsDiv.innerHTML = 'SHO TAM';

    defaultList.appendChild(projectsDiv);
}

/***/ }),

/***/ "./src/components/quickNotes.js":
/*!**************************************!*\
  !*** ./src/components/quickNotes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ quickNotes)
/* harmony export */ });
function quickNotes() {
    const contentDiv = document.querySelector('#content');

    const notes = document.createElement('section');
    notes.id = 'notes';
    notes.innerHTML = 'Quick notes';
    contentDiv.appendChild(notes);
    
    return contentDiv;
}

/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sidebar)
/* harmony export */ });
/* harmony import */ var _styles_sidebar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/sidebar.css */ "./src/styles/sidebar.css");


function sidebar() {
    /*NAV MENU*/

    const sidebarElement = document.querySelector('aside');
    const header_h1 = document.createElement('h1');
    header_h1.textContent = "To-Do-Things";
    sidebarElement.appendChild(header_h1);
    const navMenu = document.createElement('ul');
    const li_default = document.createElement('li');
    li_default.id = 'default';
    const li_default_a = document.createElement('a');
    li_default_a.textContent = 'Default List'
    li_default.appendChild(li_default_a);
    const li_projects = document.createElement('li');
    li_projects.id = 'projects'
    const li_projects_a = document.createElement('a');
    li_projects_a.textContent = 'My Projects';
    li_projects.appendChild(li_projects_a);
    const li_notes = document.createElement('li');
    li_notes.id = 'notes';
    const li_notes_a = document.createElement('a');
    li_notes_a.textContent = 'Quick Notes';
    li_notes.appendChild(li_notes_a);

    navMenu.appendChild(li_default);
    navMenu.appendChild(li_projects);
    navMenu.appendChild(li_notes);
    sidebarElement.appendChild(navMenu);

    const addToDo = document.createElement('button');
    addToDo.id = 'add-todo';
    addToDo.type = 'button';
    addToDo.textContent = 'ADD';
    sidebarElement.appendChild(addToDo);

    return sidebarElement;
}

/***/ }),

/***/ "./src/components/todos.js":
/*!*********************************!*\
  !*** ./src/components/todos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   clearTodos: () => (/* binding */ clearTodos),
/* harmony export */   getTodos: () => (/* binding */ getTodos),
/* harmony export */   removeTodo: () => (/* binding */ removeTodo),
/* harmony export */   saveTodos: () => (/* binding */ saveTodos),
/* harmony export */   todos: () => (/* binding */ todos)
/* harmony export */ });
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
  return todos;
}

function addTodo(todo) {
  todos.push(todo);
  saveTodos();
}

function removeTodo(todo) {
  todos = todos.filter(t => t != todo);
  saveTodos();
}

function clearTodos() {
  todos = [];
  saveTodos();
}

/***/ }),

/***/ "./src/assets/github-logo.png":
/*!************************************!*\
  !*** ./src/assets/github-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7615be16eed41f806def.png";

/***/ }),

/***/ "./src/fonts/Montserrat-VariableFont_wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Montserrat-VariableFont_wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3faa3eef13649db02044.ttf";

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
/******/ 			"main": 0
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar */ "./src/components/sidebar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/form */ "./src/components/form.js");
/* harmony import */ var _components_defaultList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/defaultList */ "./src/components/defaultList.js");
/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects */ "./src/components/projects.js");
/* harmony import */ var _components_quickNotes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/quickNotes */ "./src/components/quickNotes.js");
/* harmony import */ var _components_todos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/todos */ "./src/components/todos.js");
/* harmony import */ var _components_displayToDo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/displayToDo */ "./src/components/displayToDo.js");











(0,_components_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_components_defaultList__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_components_displayToDo__WEBPACK_IMPORTED_MODULE_9__.displayToDos)();


const navBar = document.querySelector('aside>ul');
navBar.querySelector('li#default>a').classList.add('selected');
navBar.addEventListener('click', e => {
    const previousLi = navBar.querySelector('li>a.selected');
    if (previousLi && !(e.target.querySelector('li>a'))) {
        console.log('sho')
        previousLi.classList.remove('selected');
    }
    e.target.classList.add('selected');
    if (e.target.innerHTML === 'Default List') {
        document.querySelector('#content').innerHTML = '';
        (0,_components_defaultList__WEBPACK_IMPORTED_MODULE_5__["default"])();
        (0,_components_displayToDo__WEBPACK_IMPORTED_MODULE_9__.displayToDos)();
    } else if (e.target.innerHTML === 'My Projects') {
        document.querySelector('#content').innerHTML = '';
        (0,_components_projects__WEBPACK_IMPORTED_MODULE_6__["default"])();
    } else if (e.target.innerHTML === 'Quick Notes') {
        document.querySelector('#content').innerHTML = '';
        (0,_components_quickNotes__WEBPACK_IMPORTED_MODULE_7__["default"])();
    } 
})

document.querySelector('#add-todo').addEventListener('click', e => {
    document.querySelector('#content').innerHTML = '';
    navBar.querySelector('li>a.selected').classList.remove('selected');
    (0,_components_form__WEBPACK_IMPORTED_MODULE_4__["default"])();
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvR0FBb0csWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxL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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQVc7QUFDbkIsUUFBUSxxRUFBWTtBQUNwQixNQUFNO0FBQ047QUFDQSxRQUFRLGdFQUFRO0FBQ2hCLE1BQU07QUFDTjtBQUNBLFFBQVEsa0VBQVU7QUFDbEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQUk7QUFDUixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9zdHlsZXMvZm9ybS1hbmQtdG9kb2xpc3QuY3NzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL3NpZGViYXIuY3NzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL2Zvcm0tYW5kLXRvZG9saXN0LmNzcz85ZjkxIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL3NpZGViYXIuY3NzPzQ4MTYiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXlUb0RvLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3F1aWNrTm90ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbjpyb290IHtcbiAgICAtLXByaW1hcnk6ICNFQTQwQTQ7XG4gICAgLS1idXNpbmVzczogIzNhODJlZTtcbiAgICAtLXBlcnNvbmFsOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAtLWxpZ2h0OiAjZWVlO1xuICAgIC0tZGFyazogIzMxMzE1NDtcbiAgICAtLWRhbmdlcjogI2ZmNWI1NztcbiAgICAtLWdyZXk6ICM4ODg7XG4gICAgLS1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAgIC0tYnVzaW5lc3MtZ2xvdzogMHB4IDBweCA0cHggcmdiYSg1OCwgMTMwLCAyMzgsIDAuNzUpO1xuICAgIC0tcGVyc29uYWwtZ2xvdzogMHB4IDBweCA0cHggcmdiYSgyMzQsIDY0LCAxNjQsIDAuNzUpO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0LCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgNGZyIG1pbi1jb250ZW50O1xuXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG4vKkhFQURFUiovXG5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcbn1cblxuLypNQUlOKi9cblxuYXNpZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODksIDI0NiwgMjI3KTtcbn1cblxuI21haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgobWluLWNvbnRlbnQsIDFmcikgM2ZyO1xufVxuXG5cblxuLypGT09URVIqL1xuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAxOTYsIDE5MSlcbn1cblxuZm9vdGVyIGltZyB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsNENBQWtEO0FBQ3REOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHdDQUF3Qzs7SUFFeEMscURBQXFEO0lBQ3JELHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0MsK0NBQStDOztJQUUvQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUEsT0FBTzs7QUFFUDtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtREFBbUQ7QUFDdkQ7Ozs7QUFJQSxTQUFTO0FBQ1Q7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUEsbUJBQW1CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcXG4gICAgc3JjOiB1cmwoLi9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5OiAjRUE0MEE0O1xcbiAgICAtLWJ1c2luZXNzOiAjM2E4MmVlO1xcbiAgICAtLXBlcnNvbmFsOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgLS1saWdodDogI2VlZTtcXG4gICAgLS1kYXJrOiAjMzEzMTU0O1xcbiAgICAtLWRhbmdlcjogI2ZmNWI1NztcXG4gICAgLS1ncmV5OiAjODg4O1xcbiAgICAtLXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcblxcbiAgICAtLWJ1c2luZXNzLWdsb3c6IDBweCAwcHggNHB4IHJnYmEoNTgsIDEzMCwgMjM4LCAwLjc1KTtcXG4gICAgLS1wZXJzb25hbC1nbG93OiAwcHggMHB4IDRweCByZ2JhKDIzNCwgNjQsIDE2NCwgMC43NSk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0LCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgobWluLWNvbnRlbnQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgNGZyIG1pbi1jb250ZW50O1xcblxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG59XFxuXFxuLypIRUFERVIqL1xcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG59XFxuXFxuLypNQUlOKi9cXG5cXG5hc2lkZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODksIDI0NiwgMjI3KTtcXG59XFxuXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwgMWZyKSAzZnI7XFxufVxcblxcblxcblxcbi8qRk9PVEVSKi9cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAxOTYsIDE5MSlcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0qL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaW5wdXQ6bm90KFt0eXBlPVwicmFkaW9cIl0pOm5vdChbdHlwZT1cImNoZWNrYm94XCJdKSxcbmJ1dHRvbiB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNWVtO1xufVxuXG5oMyB7XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbmg0IHtcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xufVxuXG4uZ3JlZXRpbmcgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZ3JlZXRpbmcgLnRpdGxlIGlucHV0IHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgZmxleDogMSAxIDAlO1xuICAgIG1pbi13aWR0aDogMDtcbn1cblxuLmdyZWV0aW5nIC50aXRsZSBpbnB1dCxcbi5ncmVldGluZyAudGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uY3JlYXRlLXRvZG8gaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uY3JlYXRlLXRvZG8gLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLWdhcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5jcmVhdGUtdG9kbyAub3B0aW9ucyBsYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0sXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5idWJibGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJ1c2luZXNzKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idXNpbmVzcy1nbG93KTtcbn1cblxuLmJ1YmJsZS5wZXJzb25hbCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wZXJzb25hbCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tcGVyc29uYWwtZ2xvdyk7XG59XG5cbi5idWJibGU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXNpbmVzcyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnVzaW5lc3MtZ2xvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idWJibGUucGVyc29uYWw6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wZXJzb25hbCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tcGVyc29uYWwtZ2xvdyk7XG59XG5cbmlucHV0OmNoZWNrZWR+LmJ1YmJsZTo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uY3JlYXRlLXRvZG8gLm9wdGlvbnMgbGFiZWwgZGl2IHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jcmVhdGUtdG9kbyBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1wZXJzb25hbC1nbG93KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNzU7XG59XG5cbi50b2RvLWxpc3QgLmxpc3Qge1xuICAgIG1hcmdpbjogMXJlbSAwO1xufVxuXG4udG9kby1saXN0IC50b2RvLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnRvZG8taXRlbSBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvZG8taXRlbSAudG9kby1jb250ZW50IHtcbiAgICBmbGV4OiAxIDEgMCU7XG59XG5cbi50b2RvLWl0ZW0gLnRvZG8tY29udGVudCBpbnB1dCB7XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi50b2RvLWl0ZW0gLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZG8taXRlbSAuYWN0aW9ucyBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4udG9kby1pdGVtIC5hY3Rpb25zIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43NTtcbn1cblxuLnRvZG8taXRlbSAuYWN0aW9ucyAuZWRpdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi50b2RvLWl0ZW0gLmFjdGlvbnMgLmRlbGV0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcbn1cblxuLnRvZG8taXRlbS5kb25lIC50b2RvLWNvbnRlbnQgaW5wdXQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9ybS1hbmQtdG9kb2xpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaW5wdXQ6bm90KFt0eXBlPVxcXCJyYWRpb1xcXCJdKTpub3QoW3R5cGU9XFxcImNoZWNrYm94XFxcIl0pLFxcbmJ1dHRvbiB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY3Vyc29yOiBpbml0aWFsO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMS41ZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNWVtO1xcbn1cXG5cXG5oMyB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG5oNCB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XFxufVxcblxcbi5ncmVldGluZyAudGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ3JlZXRpbmcgLnRpdGxlIGlucHV0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICBmbGV4OiAxIDEgMCU7XFxuICAgIG1pbi13aWR0aDogMDtcXG59XFxuXFxuLmdyZWV0aW5nIC50aXRsZSBpbnB1dCxcXG4uZ3JlZXRpbmcgLnRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi5jcmVhdGUtdG9kbyAub3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi5jcmVhdGUtdG9kbyAub3B0aW9ucyBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdLFxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnViYmxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnVzaW5lc3MpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idXNpbmVzcy1nbG93KTtcXG59XFxuXFxuLmJ1YmJsZS5wZXJzb25hbCB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGVyc29uYWwpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1wZXJzb25hbC1nbG93KTtcXG59XFxuXFxuLmJ1YmJsZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXNpbmVzcyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJ1c2luZXNzLWdsb3cpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idWJibGUucGVyc29uYWw6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVyc29uYWwpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1wZXJzb25hbC1nbG93KTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZH4uYnViYmxlOjphZnRlciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jcmVhdGUtdG9kbyAub3B0aW9ucyBsYWJlbCBkaXYge1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uY3JlYXRlLXRvZG8gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tcGVyc29uYWwtZ2xvdyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLnRvZG8tbGlzdCAubGlzdCB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4udG9kby1saXN0IC50b2RvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50b2RvLWl0ZW0gbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLWl0ZW0gLnRvZG8tY29udGVudCB7XFxuICAgIGZsZXg6IDEgMSAwJTtcXG59XFxuXFxuLnRvZG8taXRlbSAudG9kby1jb250ZW50IGlucHV0IHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG5cXG4udG9kby1pdGVtIC5hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8taXRlbSAuYWN0aW9ucyBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9kby1pdGVtIC5hY3Rpb25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxufVxcblxcbi50b2RvLWl0ZW0gLmFjdGlvbnMgLmVkaXQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi50b2RvLWl0ZW0gLmFjdGlvbnMgLmRlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcik7XFxufVxcblxcbi50b2RvLWl0ZW0uZG9uZSAudG9kby1jb250ZW50IGlucHV0IHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2VsZWN0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiByZWQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2VsZWN0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY29sb3I6IHJlZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm0tYW5kLXRvZG9saXN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybS1hbmQtdG9kb2xpc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGViYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9zdHlsZXMvZm9ybS1hbmQtdG9kb2xpc3QuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmYXVsdGxpc3QoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykgLy9jb250ZW50IGRpdlxuXG4gICAgLyogREVGQVVMVCBMSVNUIERJViovXG4gICAgY29uc3QgZGVmYXVsdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWZhdWx0TGlzdC5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0LWxpc3QnKTtcbiAgICBkZWZhdWx0TGlzdC5pZCA9ICdkZWZhdWx0LWxpc3QnO1xuXG4gICAgY29uc3QgdG9kb0xpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpOyAvLyBUT0RPIExJU1QgT0YgSVRFTVNcbiAgICB0b2RvTGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0Jyk7XG4gICAgY29uc3QgdG9kb0xpc3RFbGVtZW50X2gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0b2RvTGlzdEVsZW1lbnRfaDMudGV4dENvbnRlbnQgPSAnVG8gRG8gTGlzdCc7XG4gICAgdG9kb0xpc3RFbGVtZW50LmFwcGVuZENoaWxkKHRvZG9MaXN0RWxlbWVudF9oMyk7XG5cbiAgICBjb25zdCB0b2RvTGlzdF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvTGlzdF9kaXYuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuICAgIHRvZG9MaXN0X2Rpdi5pZCA9ICd0b2RvLWxpc3QnO1xuXG5cbiAgICB0b2RvTGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb0xpc3RfZGl2KTtcbiAgICBkZWZhdWx0TGlzdC5hcHBlbmRDaGlsZCh0b2RvTGlzdEVsZW1lbnQpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGVmYXVsdExpc3QpOyAvL2FkZCBkZWZhdWx0IGxpc3QgdG8gbWFpbiBkaXZcblxuICAgIHJldHVybiBkZWZhdWx0TGlzdDtcbn0iLCJpbXBvcnQgeyB0b2Rvcywgc2F2ZVRvZG9zLCBnZXRUb2RvcywgYWRkVG9kbywgcmVtb3ZlVG9kbywgY2xlYXJUb2RvcyB9IGZyb20gJy4vdG9kb3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvRG9zKCkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbGlzdCcpO1xuICAgIHRvZG9MaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gVE9ETyBJVEVNXG4gICAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRvZG8uZG9uZTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdidWJibGUnKTtcbiAgICBcbiAgICAgICAgaWYgKHRvZG8uY2F0ZWdvcnkgPT0gJ3BlcnNvbmFsJykge1xuICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdwZXJzb25hbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdidXNpbmVzcycpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vVE9ETyBJVEVNIENPTlRFTlRcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgY29udGVudF9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnRlbnRfaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgY29udGVudF9pbnB1dC52YWx1ZSA9IGAke3RvZG8uY29udGVudH1gO1xuICAgICAgICBjb250ZW50X2lucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCB0cnVlKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50X2lucHV0KTtcblxuICAgICAgICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vQUNUSU9OIEJVVFRPTlNcbiAgICAgICAgYWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdhY3Rpb25zJyk7XG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgICAgIGVkaXQudGV4dENvbnRlbnQgPSAnRWRpdCdcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChhY3Rpb25zKTtcblxuICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XG5cbiAgICAgICAgaWYgKHRvZG8uZG9uZSkge1xuICAgICAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIHRvZG8uZG9uZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBzYXZlVG9kb3MoKTtcblxuICAgICAgICAgICAgaWYgKHRvZG8uZG9uZSkge1xuICAgICAgICAgICAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZG9uZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzcGxheVRvRG9zKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBlID0+IHtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdG9kby5jb250ZW50ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgc2F2ZVRvZG9zKCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRvRG9zKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlVG9kbyh0b2RvKTtcbiAgICAgICAgICAgIGRpc3BsYXlUb0RvcygpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbn1cblxuIiwiaW1wb3J0IGdpdEljb24gZnJvbSAnLi4vYXNzZXRzL2dpdGh1Yi1sb2dvLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuXG4gICAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGFpbmVyJyk7XG4gIFxuICAgICAgY29uc3QgZm9vdGVySWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgZm9vdGVySWNvbi5zcmMgPSBnaXRJY29uOyBcbiAgICAgIGZvb3RlckNvbnRhaW5lci5pbm5lckhUTUwgPSBcImJ1aWx0ICYgZGVzaWduZWQgYnlcIjtcbiAgICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJJY29uKTtcbiAgICAgIGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBnaXRMaW5rLmlubmVySFRNTCA9ICdtYXhpbWt3c2tpJztcbiAgICAgIGdpdExpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICAgIGdpdExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gICAgICBnaXRMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9tYXhpbWt3c2tpXCI7XG4gICAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG4gICAgICBcbiAgICAgIGZvb3RlckNvbnRhaW5lci5pbm5lckhUTUwgKz0gXCIgfCBcIjtcbiAgICAgIGNvbnN0IHNvdXJjZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBzb3VyY2VMaW5rLmlubmVySFRNTCA9ICdzb3VyY2UnO1xuICAgICAgc291cmNlTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgc291cmNlTGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgICAgIHNvdXJjZUxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL21heGlta3dza2kvdG9kby10aGluZ3MtcHJvamVjdFwiO1xuICAgICAgXG4gICAgICBcbiAgICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzb3VyY2VMaW5rKTtcbiAgICAgIFxuICAgICAgZm9vdGVyRWxlbWVudC5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGZvb3RlckVsZW1lbnQ7XG59IiwiaW1wb3J0ICcuLi9zdHlsZXMvZm9ybS1hbmQtdG9kb2xpc3QuY3NzJztcbmltcG9ydCB7IHRvZG9zLCBzYXZlVG9kb3MsIGdldFRvZG9zLCBhZGRUb2RvLCByZW1vdmVUb2RvLCBjbGVhclRvZG9zIH0gZnJvbSAnLi90b2Rvcyc7XG5pbXBvcnQgeyBkaXNwbGF5VG9Eb3MgfSBmcm9tICcuL2Rpc3BsYXlUb0RvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybSgpIHtcbiAgICAvLyBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKSAvL21haW4gZGl2XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuICAgIC8vRk9STVxuICAgIGNvbnN0IGNyZWF0ZVRvRG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNyZWF0ZVRvRG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS10b2RvJyk7XG4gICAgY29uc3QgY3JlYXRlVG9Eb0VsZW1lbnRfaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNyZWF0ZVRvRG9FbGVtZW50X2gzLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBUbyBEbyc7XG4gICAgY3JlYXRlVG9Eb0VsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVG9Eb0VsZW1lbnRfaDMpO1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvZG9Gb3JtLmlkID0gJ25ldy10b2RvLWZvcm0nO1xuICAgIGNvbnN0IHRvZG9Gb3JtX2g0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICB0b2RvRm9ybV9oNC50ZXh0Q29udGVudCA9IFwiV2hhdCdzIG9uIHlvdXIgdG9kbyBsaXN0P1wiO1xuICAgIGNvbnN0IHRvZG9Gb3JtX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRm9ybV9pbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRvZG9Gb3JtX2lucHV0Lm5hbWUgPSAnY29udGVudCc7XG4gICAgdG9kb0Zvcm1faW5wdXQuaWQgPSAnY29udGVudCc7XG4gICAgdG9kb0Zvcm1faW5wdXQucGxhY2Vob2xkZXIgPSBcImUuZyBtYWtlIGEgdmlkZW9cIjtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRm9ybV9oNCk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Zvcm1faW5wdXQpO1xuXG4gICAgY29uc3Qgb3B0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL29wdGlvbnMgZGl2XG4gICAgb3B0aW9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdvcHRpb25zJyk7XG5cbiAgICBjb25zdCBsYWJlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyAvLyBvcHRpb24gYnVzaW5lc3NcbiAgICBjb25zdCBsYWJlbDFfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxhYmVsMV9pbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBsYWJlbDFfaW5wdXQubmFtZSA9ICdjYXRlZ29yeSc7XG4gICAgbGFiZWwxX2lucHV0LmlkID0gJ2NhdGVnb3J5MSc7XG4gICAgbGFiZWwxX2lucHV0LnZhbHVlID0gJ2J1c2luZXNzJztcbiAgICBjb25zdCBidXNpbmVzc19zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGJ1c2luZXNzX3NwYW4uY2xhc3NMaXN0LmFkZCgnYnViYmxlJyk7XG4gICAgYnVzaW5lc3Nfc3Bhbi5jbGFzc0xpc3QuYWRkKCdidXNpbmVzcycpO1xuICAgIGNvbnN0IGJ1c2luZXNzX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1c2luZXNzX2Rpdi50ZXh0Q29udGVudCA9ICdCdXNpbmVzcyc7XG4gICAgbGFiZWwxLmFwcGVuZENoaWxkKGxhYmVsMV9pbnB1dCk7XG4gICAgbGFiZWwxLmFwcGVuZENoaWxkKGJ1c2luZXNzX3NwYW4pO1xuICAgIGxhYmVsMS5hcHBlbmRDaGlsZChidXNpbmVzc19kaXYpO1xuICAgIG9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQobGFiZWwxKTtcblxuICAgIGNvbnN0IGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IC8vIG9wdGlvbiBwZXJzb25hbFxuICAgIGNvbnN0IGxhYmVsMl9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGFiZWwyX2lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgIGxhYmVsMl9pbnB1dC5uYW1lID0gJ2NhdGVnb3J5JztcbiAgICBsYWJlbDJfaW5wdXQuaWQgPSAnY2F0ZWdvcnkyJztcbiAgICBsYWJlbDJfaW5wdXQudmFsdWUgPSAncGVyc29uYWwnO1xuICAgIGNvbnN0IHBlcnNvbmFsX3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcGVyc29uYWxfc3Bhbi5jbGFzc0xpc3QuYWRkKCdidWJibGUnKTtcbiAgICBwZXJzb25hbF9zcGFuLmNsYXNzTGlzdC5hZGQoJ3BlcnNvbmFsJyk7XG4gICAgY29uc3QgcGVyc29uYWxfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGVyc29uYWxfZGl2LnRleHRDb250ZW50ID0gJ1BlcnNvbmFsJztcbiAgICBsYWJlbDIuYXBwZW5kQ2hpbGQobGFiZWwyX2lucHV0KTtcbiAgICBsYWJlbDIuYXBwZW5kQ2hpbGQocGVyc29uYWxfc3Bhbik7XG4gICAgbGFiZWwyLmFwcGVuZENoaWxkKHBlcnNvbmFsX2Rpdik7XG4gICAgb3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChsYWJlbDIpO1xuXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQob3B0aW9uc0Rpdik7IC8vIGFkZCBvcHRpb25zIGRpdlxuXG4gICAgY29uc3Qgc3VibWl0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0X2J0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0X2J0bi52YWx1ZSA9ICdBZGQgVG8gRG8nO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdF9idG4pOyAvLyBhZGQgc3VibWl0IGJ0blxuXG4gICAgY3JlYXRlVG9Eb0VsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9Eb0VsZW1lbnQpOyAvLyBhZGQgY3JlYXRlIHRvZG8gaXRlbSBcblxuXG4gICAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB0b2RvID0ge1xuICAgICAgICAgICAgY29udGVudDogZS50YXJnZXQuZWxlbWVudHMuY29udGVudC52YWx1ZSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiBlLnRhcmdldC5lbGVtZW50cy5jYXRlZ29yeS52YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuXG4gICAgICAgIH1cblxuICAgICAgICBhZGRUb2RvKHRvZG8pO1xuXG4gICAgICAgIGUudGFyZ2V0LnJlc2V0KCk7XG4gICAgICAgIC8vIGRpc3BsYXlUb0RvcygpO1xuICAgIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBncmVldGluZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7IC8vIGdyZWV0aW5nIGVsZW1lbnRcbiAgICBncmVldGluZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ3JlZXRpbmcnKTtcbiAgICBjb25zdCBncmVldGluZ19oMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZ3JlZXRpbmdfaDIuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBncmVldGluZ19oMi5pbm5lckhUTUwgPSBcIkdyZWV0aW5ncywgXCI7XG4gICAgY29uc3QgZ3JlZXRpbmdfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGdyZWV0aW5nX2lucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgZ3JlZXRpbmdfaW5wdXQuaWQgPSAnbmFtZSc7XG4gICAgZ3JlZXRpbmdfaW5wdXQucGxhY2Vob2xkZXIgPSAnTmFtZSBoZXJlJztcbiAgICBncmVldGluZ19oMi5hcHBlbmRDaGlsZChncmVldGluZ19pbnB1dCk7XG4gICAgZ3JlZXRpbmdFbGVtZW50LmFwcGVuZENoaWxkKGdyZWV0aW5nX2gyKTtcbiAgICBoZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKGdyZWV0aW5nRWxlbWVudCk7IC8vIGFkZCBncmVldGluZyBlbGVtXG5cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgfHwgJyc7XG4gICAgICAgIG5hbWVJbnB1dC52YWx1ZSA9IHVzZXJuYW1lO1xuXG4gICAgICAgIG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSlcblxuICAgIH0pXG5cbiAgICByZXR1cm4gaGVhZGVyRWxlbWVudDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0cygpIHtcbiAgICBjb25zdCBkZWZhdWx0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgcHJvamVjdHNEaXYuaW5uZXJIVE1MID0gJ1NITyBUQU0nO1xuXG4gICAgZGVmYXVsdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHF1aWNrTm90ZXMoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBub3Rlcy5pZCA9ICdub3Rlcyc7XG4gICAgbm90ZXMuaW5uZXJIVE1MID0gJ1F1aWNrIG5vdGVzJztcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgICBcbiAgICByZXR1cm4gY29udGVudERpdjtcbn0iLCJpbXBvcnQgJy4uL3N0eWxlcy9zaWRlYmFyLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGViYXIoKSB7XG4gICAgLypOQVYgTUVOVSovXG5cbiAgICBjb25zdCBzaWRlYmFyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XG4gICAgY29uc3QgaGVhZGVyX2gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXJfaDEudGV4dENvbnRlbnQgPSBcIlRvLURvLVRoaW5nc1wiO1xuICAgIHNpZGViYXJFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlcl9oMSk7XG4gICAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgbGlfZGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlfZGVmYXVsdC5pZCA9ICdkZWZhdWx0JztcbiAgICBjb25zdCBsaV9kZWZhdWx0X2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGlfZGVmYXVsdF9hLnRleHRDb250ZW50ID0gJ0RlZmF1bHQgTGlzdCdcbiAgICBsaV9kZWZhdWx0LmFwcGVuZENoaWxkKGxpX2RlZmF1bHRfYSk7XG4gICAgY29uc3QgbGlfcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpX3Byb2plY3RzLmlkID0gJ3Byb2plY3RzJ1xuICAgIGNvbnN0IGxpX3Byb2plY3RzX2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGlfcHJvamVjdHNfYS50ZXh0Q29udGVudCA9ICdNeSBQcm9qZWN0cyc7XG4gICAgbGlfcHJvamVjdHMuYXBwZW5kQ2hpbGQobGlfcHJvamVjdHNfYSk7XG4gICAgY29uc3QgbGlfbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpX25vdGVzLmlkID0gJ25vdGVzJztcbiAgICBjb25zdCBsaV9ub3Rlc19hID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpX25vdGVzX2EudGV4dENvbnRlbnQgPSAnUXVpY2sgTm90ZXMnO1xuICAgIGxpX25vdGVzLmFwcGVuZENoaWxkKGxpX25vdGVzX2EpO1xuXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChsaV9kZWZhdWx0KTtcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKGxpX3Byb2plY3RzKTtcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKGxpX25vdGVzKTtcbiAgICBzaWRlYmFyRWxlbWVudC5hcHBlbmRDaGlsZChuYXZNZW51KTtcblxuICAgIGNvbnN0IGFkZFRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUb0RvLmlkID0gJ2FkZC10b2RvJztcbiAgICBhZGRUb0RvLnR5cGUgPSAnYnV0dG9uJztcbiAgICBhZGRUb0RvLnRleHRDb250ZW50ID0gJ0FERCc7XG4gICAgc2lkZWJhckVsZW1lbnQuYXBwZW5kQ2hpbGQoYWRkVG9Ebyk7XG5cbiAgICByZXR1cm4gc2lkZWJhckVsZW1lbnQ7XG59IiwiZXhwb3J0IGxldCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRvZG9zKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb3MoKSB7XG4gIHJldHVybiB0b2Rvcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG8odG9kbykge1xuICB0b2Rvcy5wdXNoKHRvZG8pO1xuICBzYXZlVG9kb3MoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRvZG8odG9kbykge1xuICB0b2RvcyA9IHRvZG9zLmZpbHRlcih0ID0+IHQgIT0gdG9kbyk7XG4gIHNhdmVUb2RvcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJUb2RvcygpIHtcbiAgdG9kb3MgPSBbXTtcbiAgc2F2ZVRvZG9zKCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgc2lkZWJhciBmcm9tICcuL2NvbXBvbmVudHMvc2lkZWJhcic7XG5pbXBvcnQgZm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IGZvcm0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0IGRlZmF1bHRsaXN0IGZyb20gJy4vY29tcG9uZW50cy9kZWZhdWx0TGlzdCc7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL3Byb2plY3RzJztcbmltcG9ydCBxdWlja05vdGVzIGZyb20gJy4vY29tcG9uZW50cy9xdWlja05vdGVzJztcbmltcG9ydCB7IHRvZG9zLCBzYXZlVG9kb3MsIGdldFRvZG9zLCBhZGRUb2RvLCByZW1vdmVUb2RvLCBjbGVhclRvZG9zIH0gZnJvbSAnLi9jb21wb25lbnRzL3RvZG9zJztcbmltcG9ydCB7IGRpc3BsYXlUb0RvcyB9IGZyb20gJy4vY29tcG9uZW50cy9kaXNwbGF5VG9Ebyc7XG5cbmhlYWRlcigpO1xuc2lkZWJhcigpO1xuZm9vdGVyKCk7XG5kZWZhdWx0bGlzdCgpO1xuZGlzcGxheVRvRG9zKCk7XG5cblxuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGU+dWwnKTtcbm5hdkJhci5xdWVyeVNlbGVjdG9yKCdsaSNkZWZhdWx0PmEnKS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xubmF2QmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXNMaSA9IG5hdkJhci5xdWVyeVNlbGVjdG9yKCdsaT5hLnNlbGVjdGVkJyk7XG4gICAgaWYgKHByZXZpb3VzTGkgJiYgIShlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCdsaT5hJykpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG8nKVxuICAgICAgICBwcmV2aW91c0xpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgaWYgKGUudGFyZ2V0LmlubmVySFRNTCA9PT0gJ0RlZmF1bHQgTGlzdCcpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZGVmYXVsdGxpc3QoKTtcbiAgICAgICAgZGlzcGxheVRvRG9zKCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pbm5lckhUTUwgPT09ICdNeSBQcm9qZWN0cycpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcHJvamVjdHMoKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlubmVySFRNTCA9PT0gJ1F1aWNrIE5vdGVzJykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBxdWlja05vdGVzKCk7XG4gICAgfSBcbn0pXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdG9kbycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSAnJztcbiAgICBuYXZCYXIucXVlcnlTZWxlY3RvcignbGk+YS5zZWxlY3RlZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgZm9ybSgpO1xufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==