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
    --primary: #00aaa0;
    --business: #3a82ee;
    --personal: var(--primary);
    --light: #e0e5e4;
    --dark: #313154;
    --danger: rgb(255, 91, 87);
    --grey: #888;
    --shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

    --business-glow: 0px 0px 4px rgba(58, 130, 238, 0.75);
    --personal-glow: 0px 0px 4px rgba(0, 170, 160, 0.75);
    --danger-glow: 0px 0px 4px rgba(255, 91, 87, 0.75);

    --low: rgba(97, 255, 66);
    --medium: rgb(244, 252, 2);
    --high: var(--danger);

    --low-glow: 0px 0px 4px rgba(97, 255, 66, 0.75);
    --medium-glow: 0px 0px 4px rgba(244, 252, 2, 0.75);
    --high-glow: 0px 0px 4px rgba(255, 91, 87, 0.75);
    ;
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

/*HEADER*/
header {
    background-color: #fcf4d9;
    box-shadow: var(--shadow);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

header h1 {
    margin: 0.5rem 1rem;
    text-transform: uppercase;
    font-weight: 400;
}

header img {
    height: 3rem;
    width: 3rem;
}


/*MAIN*/

aside {
    background-color: #8ed2c9;
}

#main {
    display: grid;
    grid-template-columns: minmax(min-content, 1fr) 3fr;
}



/*FOOTER*/
footer {
    background-color: #d55b3e;
    display: flex;
    justify-content: space-between;
}

footer div {
    margin: 0.2rem 1rem;
}

footer img {
    width: 15px;
    margin: 0 5px;
}

footer a {
    /* text-decoration: none; */
    color: var(--dark);

}

.footer-container {
    display: flex;
    align-items: center;
    gap: 6px;
}

/*----------------*/`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,4CAAkD;AACtD;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,0BAA0B;IAC1B,gBAAgB;IAChB,eAAe;IACf,0BAA0B;IAC1B,YAAY;IACZ,wCAAwC;;IAExC,qDAAqD;IACrD,oDAAoD;IACpD,kDAAkD;;IAElD,wBAAwB;IACxB,0BAA0B;IAC1B,qBAAqB;;IAErB,+CAA+C;IAC/C,kDAAkD;IAClD,gDAAgD;;AAEpD;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,+CAA+C;IAC/C,+CAA+C;;IAE/C,aAAa;IACb,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA,SAAS;AACT;IACI,yBAAyB;IACzB,yBAAyB;IACzB,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;;AAGA,OAAO;;AAEP;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mDAAmD;AACvD;;;;AAIA,SAAS;AACT;IACI,yBAAyB;IACzB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA,mBAAmB","sourcesContent":["@font-face {\n    font-family: montserrat;\n    src: url(./fonts/Montserrat-VariableFont_wght.ttf);\n}\n\n:root {\n    --primary: #00aaa0;\n    --business: #3a82ee;\n    --personal: var(--primary);\n    --light: #e0e5e4;\n    --dark: #313154;\n    --danger: rgb(255, 91, 87);\n    --grey: #888;\n    --shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n\n    --business-glow: 0px 0px 4px rgba(58, 130, 238, 0.75);\n    --personal-glow: 0px 0px 4px rgba(0, 170, 160, 0.75);\n    --danger-glow: 0px 0px 4px rgba(255, 91, 87, 0.75);\n\n    --low: rgba(97, 255, 66);\n    --medium: rgb(244, 252, 2);\n    --high: var(--danger);\n\n    --low-glow: 0px 0px 4px rgba(97, 255, 66, 0.75);\n    --medium-glow: 0px 0px 4px rgba(244, 252, 2, 0.75);\n    --high-glow: 0px 0px 4px rgba(255, 91, 87, 0.75);\n    ;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: montserrat, sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: minmax(min-content, 1fr);\n    grid-template-rows: max-content 4fr min-content;\n\n    height: 100vh;\n    color: var(--dark);\n    background-color: var(--light);\n}\n\nsection {\n    margin-top: 2em;\n    margin-bottom: 2em;\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n}\n\nh3 {\n    color: var(--dark);\n    font-size: 1em;\n    font-weight: 400;\n    margin-bottom: 0.5em;\n}\n\nh4 {\n    color: var(--grey);\n    font-size: 0.875em;\n    font-weight: 700;\n    margin-bottom: 0.75em;\n}\n\n/*HEADER*/\nheader {\n    background-color: #fcf4d9;\n    box-shadow: var(--shadow);\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nheader h1 {\n    margin: 0.5rem 1rem;\n    text-transform: uppercase;\n    font-weight: 400;\n}\n\nheader img {\n    height: 3rem;\n    width: 3rem;\n}\n\n\n/*MAIN*/\n\naside {\n    background-color: #8ed2c9;\n}\n\n#main {\n    display: grid;\n    grid-template-columns: minmax(min-content, 1fr) 3fr;\n}\n\n\n\n/*FOOTER*/\nfooter {\n    background-color: #d55b3e;\n    display: flex;\n    justify-content: space-between;\n}\n\nfooter div {\n    margin: 0.2rem 1rem;\n}\n\nfooter img {\n    width: 15px;\n    margin: 0 5px;\n}\n\nfooter a {\n    /* text-decoration: none; */\n    color: var(--dark);\n\n}\n\n.footer-container {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n}\n\n/*----------------*/"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/styles/form-and-todolist.css"],"names":[],"mappings":"AAAA;;IAEI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,sBAAsB;IACtB,qBAAqB;IACrB,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,sBAAsB;IACtB,qBAAqB;IACrB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,iCAAiC;IACjC,gCAAgC;AACpC;;AAEA;IACI,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI,WAAW;IACX,cAAc;IACd,UAAU;IACV,UAAU;IACV,WAAW;IACX,iCAAiC;IACjC,gCAAgC;IAChC,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,iCAAiC;IACjC,gCAAgC;AACpC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,oBAAoB;IACpB,WAAW;IACX,gCAAgC;IAChC,qBAAqB;IACrB,gCAAgC;IAChC,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,qBAAqB;IACrB,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,sBAAsB;IACtB,WAAW;IACX,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,gCAAgC;AACpC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;AACtB","sourcesContent":["input:not([type=\"radio\"]):not([type=\"checkbox\"]),\nbutton {\n    appearance: none;\n    border: none;\n    outline: none;\n    background: none;\n    cursor: initial;\n}\n\n.create-todo input[type=\"text\"] {\n    display: block;\n    width: 100%;\n    font-size: 1.125rem;\n    padding: 1rem 1.5rem;\n    color: var(--dark);\n    background-color: #fff;\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow);\n    margin-bottom: 1.5rem;\n}\n\n.create-todo .options {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 1rem;\n    margin-bottom: 1.5rem;\n}\n\n.create-todo .options label {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 1.5rem;\n    background-color: #fff;\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow);\n    cursor: pointer;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n    display: none;\n}\n\n.bubble {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    border: 2px solid var(--business);\n    box-shadow: var(--business-glow);\n}\n\n.bubble.personal {\n    border-color: var(--personal);\n    box-shadow: var(--personal-glow);\n}\n\n.bubble::after {\n    content: \"\";\n    display: block;\n    opacity: 0;\n    width: 0px;\n    height: 0px;\n    background-color: var(--business);\n    box-shadow: var(--business-glow);\n    border-radius: 50%;\n    transition: 0.2s ease-in-out;\n}\n\n.bubble.personal::after {\n    background-color: var(--personal);\n    box-shadow: var(--personal-glow);\n}\n\ninput:checked~.bubble::after {\n    width: 10px;\n    height: 10px;\n    opacity: 1;\n}\n\n.create-todo .options label div {\n    font-size: 1.125rem;\n    margin-top: 1rem;\n}\n\n.create-todo input[type=\"submit\"] {\n    display: block;\n    width: 100%;\n    font-size: 1.125rem;\n    padding: 1rem 1.5rem;\n    color: #fff;\n    background-color: var(--primary);\n    border-radius: 0.5rem;\n    box-shadow: var(--personal-glow);\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n}\n\n.create-todo input[type=\"submit\"]:hover {\n    opacity: 0.75;\n}\n\n.todo-list .list {\n    margin: 1rem 0;\n}\n\n.todo-list .todo-item {\n    display: flex;\n    align-items: center;\n    background-color: #fff;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow);\n    margin-bottom: 1rem;\n}\n\n.todo-item label {\n    display: block;\n    margin-right: 1rem;\n    cursor: pointer;\n}\n\n.todo-item .todo-content {\n    flex: 1 1 0%;\n}\n\n.todo-item .todo-content input {\n    color: var(--dark);\n    font-size: 1.125rem;\n}\n\n.todo-item .actions {\n    display: flex;\n    align-items: center;\n}\n\n.todo-item .actions button {\n    display: block;\n    padding: 0.5rem;\n    border-radius: 0.25rem;\n    color: #fff;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n}\n\n.todo-item .actions button:hover {\n    opacity: 0.75;\n}\n\n.todo-item .actions .edit {\n    margin-right: 0.5rem;\n    background-color: var(--primary);\n}\n\n.todo-item .actions .delete {\n    background-color: var(--danger);\n}\n\n.todo-item.done .todo-content input {\n    text-decoration: line-through;\n    color: var(--grey);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/notes.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/notes.css ***!
  \********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `#notes {
    display: grid;
    grid-template-columns: repeat(auto-fit, 220px);
    gap: 1rem;
}

.note-item {
    background-color: #fff;
    height: 220px;
    border-radius: 0.5rem;
    background-color: beige;
    box-shadow: var(--shadow);

    display: flex;
    flex-direction: column;
}

.note-item h3 {
    align-self: center;
    color: var(--grey);
    padding: 4px 0;
}

.note-item textarea {
    background-color: transparent;
    padding: 0.5rem;
    font-size: 1.125rem;
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    cursor: initial;
}

#notes input[type="button"] {
    display: block;
    width: 100%;
    height: 220px;
    font-size: 1.125rem;
    padding: 1rem 1.5rem;
    color: #fff;
    background-color: var(--primary);
    border-radius: 0.5rem;
    box-shadow: var(--primary-glow);
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

#notes input[type="button"]:hover {
    opacity: 0.75;
}

.delete-note {
    width: 30px;
    height: 30px;
    margin: 4px;
    border-radius: 50%;
    background-color: transparent;
    align-self: flex-end;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
}

.cross {
    width: 50%;
    height: 2px;
    /* Cross color */
    position: relative;
}

.cross::before,
.cross::after {
    content: "";
    width: 100%;
    height: 2px;
    background-color: var(--danger);
    position: absolute;
    top: 50%;
    left: 0;
}

.cross::before {
    transform: translateY(-50%) rotate(45deg);
}

.cross::after {
    transform: translateY(-50%) rotate(-45deg);
}

.delete-note:hover,
.delete-note:active {
    opacity: 0.75;
}`, "",{"version":3,"sources":["webpack://./src/styles/notes.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8CAA8C;IAC9C,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,yBAAyB;;IAEzB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,6BAA6B;IAC7B,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,WAAW;IACX,gCAAgC;IAChC,qBAAqB;IACrB,+BAA+B;IAC/B,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,6BAA6B;IAC7B,oBAAoB;IACpB,eAAe;;IAEf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;IAEI,WAAW;IACX,WAAW;IACX,WAAW;IACX,+BAA+B;IAC/B,kBAAkB;IAClB,QAAQ;IACR,OAAO;AACX;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;;IAEI,aAAa;AACjB","sourcesContent":["#notes {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 220px);\n    gap: 1rem;\n}\n\n.note-item {\n    background-color: #fff;\n    height: 220px;\n    border-radius: 0.5rem;\n    background-color: beige;\n    box-shadow: var(--shadow);\n\n    display: flex;\n    flex-direction: column;\n}\n\n.note-item h3 {\n    align-self: center;\n    color: var(--grey);\n    padding: 4px 0;\n}\n\n.note-item textarea {\n    background-color: transparent;\n    padding: 0.5rem;\n    font-size: 1.125rem;\n    width: 100%;\n    height: 100%;\n    resize: none;\n    border: none;\n    outline: none;\n    cursor: initial;\n}\n\n#notes input[type=\"button\"] {\n    display: block;\n    width: 100%;\n    height: 220px;\n    font-size: 1.125rem;\n    padding: 1rem 1.5rem;\n    color: #fff;\n    background-color: var(--primary);\n    border-radius: 0.5rem;\n    box-shadow: var(--primary-glow);\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n}\n\n#notes input[type=\"button\"]:hover {\n    opacity: 0.75;\n}\n\n.delete-note {\n    width: 30px;\n    height: 30px;\n    margin: 4px;\n    border-radius: 50%;\n    background-color: transparent;\n    align-self: flex-end;\n    cursor: pointer;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.cross {\n    width: 50%;\n    height: 2px;\n    /* Cross color */\n    position: relative;\n}\n\n.cross::before,\n.cross::after {\n    content: \"\";\n    width: 100%;\n    height: 2px;\n    background-color: var(--danger);\n    position: absolute;\n    top: 50%;\n    left: 0;\n}\n\n.cross::before {\n    transform: translateY(-50%) rotate(45deg);\n}\n\n.cross::after {\n    transform: translateY(-50%) rotate(-45deg);\n}\n\n.delete-note:hover,\n.delete-note:active {\n    opacity: 0.75;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/projectItem.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/projectItem.css ***!
  \**************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* PROJECT FORM */

.priority {
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: var(--shadow);
}

.priority h3 {
    align-self: center;
}

.priority-labels {
    display: flex;
    justify-content: space-around;
}

.priority label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;
}

.bbl {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid var(--low);
    box-shadow: var(--low-glow);
}

.bbl.low {
    border-color: var(--low);
    box-shadow: var(--low-glow);
}

.bbl.medium {
    border-color: var(--medium);
    box-shadow: var(--medium-glow);
}

.bbl.high {
    border-color: var(--high);
    box-shadow: var(--high-glow);
}

.bbl::after {
    content: "";
    display: block;
    opacity: 0;
    width: 0px;
    height: 0px;
    background-color: var(--low);
    box-shadow: var(--low-glow);
    border-radius: 50%;
    transition: 0.2s ease-in-out;
}

.bbl.low::after {
    background-color: var(--low);
    box-shadow: var(--low-glow);
}

.bbl.medium::after {
    background-color: var(--medium);
    box-shadow: var(--medium-glow);
}

.bbl.high::after {
    background-color: var(--high);
    box-shadow: var(--high-glow);
}

input:checked~.bbl::after {
    width: 10px;
    height: 10px;
    opacity: 1;
}

.create-todo input[type="button"] {
    display: block;
    width: 100%;
    font-size: 1.125rem;
    padding: 1rem 1.5rem;
    margin-top: 1.5rem;
    color: #fff;
    background-color: var(--danger);
    border-radius: 0.5rem;
    box-shadow: var(--danger-glow);
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

.create-todo input[type="button"]:hover {
    opacity: 0.75;
}

/* PROJECT ITEM AND TASKS LIST */

.project-item h2 {
    text-align: center;
    margin-top: 1rem;
}


.project-item h3 {
    text-align: center;
}

.task-item {
    display: flex;
    align-items: center;

    background-color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: var(--shadow);
    margin-bottom: 1rem;
}

.task-item label {
    display: block;
    margin-right: 1rem;
    cursor: pointer;
}

.task-item .task-content {
    flex: 1 1 0%;
}

.task-item .task-content input {
    color: var(--dark);
    font-size: 1.125rem;
}

.task-item .actions {
    display: flex;
    align-items: center;
}

.task-item .actions button {
    display: block;
    padding: 0.5rem;
    border-radius: 0.25rem;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

.task-item .actions button:hover {
    opacity: 0.75;
}

.task-item .actions .edit {
    margin-right: 0.5rem;
    background-color: var(--primary);
}

.task-item .actions .delete {
    background-color: var(--danger);
}

.task-item.done .task-content input {
    text-decoration: line-through;
    color: var(--grey);
}

span .bbl .low {
    border: 2px solid var(--low);
    box-shadow: var(--business-low);
}

span .bbl .medium {
    border: 2px solid var(--medium);
    box-shadow: var(--medium-glow);
}

span .bbl .high {
    border: 2px solid var(--high);
    box-shadow: var(--high-glow);
}`, "",{"version":3,"sources":["webpack://./src/styles/projectItem.css"],"names":[],"mappings":"AAAA,iBAAiB;;AAEjB;IACI,aAAa;IACb,yBAAyB;IACzB,sBAAsB;IACtB,SAAS;IACT,eAAe;IACf,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;;IAEvB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;IAC5B,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;IACxB,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;IACzB,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,cAAc;IACd,UAAU;IACV,UAAU;IACV,WAAW;IACX,4BAA4B;IAC5B,2BAA2B;IAC3B,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;IAC5B,2BAA2B;AAC/B;;AAEA;IACI,+BAA+B;IAC/B,8BAA8B;AAClC;;AAEA;IACI,6BAA6B;IAC7B,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,WAAW;IACX,+BAA+B;IAC/B,qBAAqB;IACrB,8BAA8B;IAC9B,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB;;AAEA,gCAAgC;;AAEhC;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;;AAGA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;;IAEnB,sBAAsB;IACtB,aAAa;IACb,qBAAqB;IACrB,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,sBAAsB;IACtB,WAAW;IACX,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,gCAAgC;AACpC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;IAC5B,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;IAC/B,8BAA8B;AAClC;;AAEA;IACI,6BAA6B;IAC7B,4BAA4B;AAChC","sourcesContent":["/* PROJECT FORM */\n\n.priority {\n    display: flex;\n    /* align-items: center; */\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1.5rem;\n    margin-bottom: 1.5rem;\n    background-color: #fff;\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow);\n}\n\n.priority h3 {\n    align-self: center;\n}\n\n.priority-labels {\n    display: flex;\n    justify-content: space-around;\n}\n\n.priority label {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    cursor: pointer;\n}\n\n.bbl {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    border: 2px solid var(--low);\n    box-shadow: var(--low-glow);\n}\n\n.bbl.low {\n    border-color: var(--low);\n    box-shadow: var(--low-glow);\n}\n\n.bbl.medium {\n    border-color: var(--medium);\n    box-shadow: var(--medium-glow);\n}\n\n.bbl.high {\n    border-color: var(--high);\n    box-shadow: var(--high-glow);\n}\n\n.bbl::after {\n    content: \"\";\n    display: block;\n    opacity: 0;\n    width: 0px;\n    height: 0px;\n    background-color: var(--low);\n    box-shadow: var(--low-glow);\n    border-radius: 50%;\n    transition: 0.2s ease-in-out;\n}\n\n.bbl.low::after {\n    background-color: var(--low);\n    box-shadow: var(--low-glow);\n}\n\n.bbl.medium::after {\n    background-color: var(--medium);\n    box-shadow: var(--medium-glow);\n}\n\n.bbl.high::after {\n    background-color: var(--high);\n    box-shadow: var(--high-glow);\n}\n\ninput:checked~.bbl::after {\n    width: 10px;\n    height: 10px;\n    opacity: 1;\n}\n\n.create-todo input[type=\"button\"] {\n    display: block;\n    width: 100%;\n    font-size: 1.125rem;\n    padding: 1rem 1.5rem;\n    margin-top: 1.5rem;\n    color: #fff;\n    background-color: var(--danger);\n    border-radius: 0.5rem;\n    box-shadow: var(--danger-glow);\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n}\n\n.create-todo input[type=\"button\"]:hover {\n    opacity: 0.75;\n}\n\n/* PROJECT ITEM AND TASKS LIST */\n\n.project-item h2 {\n    text-align: center;\n    margin-top: 1rem;\n}\n\n\n.project-item h3 {\n    text-align: center;\n}\n\n.task-item {\n    display: flex;\n    align-items: center;\n\n    background-color: #fff;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow);\n    margin-bottom: 1rem;\n}\n\n.task-item label {\n    display: block;\n    margin-right: 1rem;\n    cursor: pointer;\n}\n\n.task-item .task-content {\n    flex: 1 1 0%;\n}\n\n.task-item .task-content input {\n    color: var(--dark);\n    font-size: 1.125rem;\n}\n\n.task-item .actions {\n    display: flex;\n    align-items: center;\n}\n\n.task-item .actions button {\n    display: block;\n    padding: 0.5rem;\n    border-radius: 0.25rem;\n    color: #fff;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n}\n\n.task-item .actions button:hover {\n    opacity: 0.75;\n}\n\n.task-item .actions .edit {\n    margin-right: 0.5rem;\n    background-color: var(--primary);\n}\n\n.task-item .actions .delete {\n    background-color: var(--danger);\n}\n\n.task-item.done .task-content input {\n    text-decoration: line-through;\n    color: var(--grey);\n}\n\nspan .bbl .low {\n    border: 2px solid var(--low);\n    box-shadow: var(--business-low);\n}\n\nspan .bbl .medium {\n    border: 2px solid var(--medium);\n    box-shadow: var(--medium-glow);\n}\n\nspan .bbl .high {\n    border: 2px solid var(--high);\n    box-shadow: var(--high-glow);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/projects.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/projects.css ***!
  \***********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `#project-form input[type="text"] {
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

#project-form .options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin-bottom: 1.5rem;
}

#project-form .options label,
#project-form #due-date {
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

#project-form #due-date {
    margin-bottom: 1.5rem;
}

#project-form #dueDate input {
    font-size: 1.125rem;
    border: 1px solid var(--grey);
    color: var(--dark);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
}

#project-form input[type="submit"] {
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

#project-form input[type="submit"]:hover {
    opacity: 0.75;
}`, "",{"version":3,"sources":["webpack://./src/styles/projects.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,sBAAsB;IACtB,qBAAqB;IACrB,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,cAAc;IACd,qBAAqB;AACzB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,sBAAsB;IACtB,qBAAqB;IACrB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;IAClB,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,oBAAoB;IACpB,WAAW;IACX,gCAAgC;IAChC,qBAAqB;IACrB,gCAAgC;IAChC,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB","sourcesContent":["#project-form input[type=\"text\"] {\n    display: block;\n    width: 100%;\n    font-size: 1.125rem;\n    padding: 1rem 1.5rem;\n    color: var(--dark);\n    background-color: #fff;\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow);\n    margin-bottom: 1.5rem;\n}\n\n#project-form .options {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 1rem;\n    margin-bottom: 1.5rem;\n}\n\n#project-form .options label,\n#project-form #due-date {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 1.5rem;\n    background-color: #fff;\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow);\n    cursor: pointer;\n}\n\n#project-form #due-date {\n    margin-bottom: 1.5rem;\n}\n\n#project-form #dueDate input {\n    font-size: 1.125rem;\n    border: 1px solid var(--grey);\n    color: var(--dark);\n    border-radius: 0.5rem;\n    padding: 0.5rem 1rem;\n}\n\n#project-form input[type=\"submit\"] {\n    display: block;\n    width: 100%;\n    font-size: 1.125rem;\n    padding: 1rem 1.5rem;\n    color: #fff;\n    background-color: var(--primary);\n    border-radius: 0.5rem;\n    box-shadow: var(--personal-glow);\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n}\n\n#project-form input[type=\"submit\"]:hover {\n    opacity: 0.75;\n}"],"sourceRoot":""}]);
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
    color: var(--primary);
}

.greeting {
    margin: 1rem;
    text-align: center;
}


aside>ul {
    margin: 1rem 2rem;
    list-style: none;
}

.greeting .title {}

.greeting .title input {
    margin-left: 0.5em;
    min-width: 0;

}

.greeting .title input,
.greeting .title {
    color: var(--dark);
    font-size: 1.125rem;
    font-weight: 700;
}

aside ul li {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}


aside ul li:not([id="projects"]) {
    display: flex;
    align-items: center;
}

ul img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
}

aside ul li:hover {
    cursor: pointer;
}

li#projects div {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

li#projects ul li {
    margin-left: 3rem;
    display: list-item;
}

li#projects button {
    font-size: 1rem;
    border: 1px solid var(--grey);
    border-radius: 5px;
    padding: 2px 8px;
    margin-left: 3rem;
    transition: 0.2s ease-in-out;
}

li#projects button:active,
li#projects button:hover {
    color: var(--primary);
    border-color: var(--primary);

}`, "",{"version":3,"sources":["webpack://./src/styles/sidebar.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;;AAGA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA,kBAAkB;;AAElB;IACI,kBAAkB;IAClB,YAAY;;AAEhB;;AAEA;;IAEI,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;AACzB;;;AAGA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,6BAA6B;IAC7B,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,4BAA4B;AAChC;;AAEA;;IAEI,qBAAqB;IACrB,4BAA4B;;AAEhC","sourcesContent":[".selected {\n    color: var(--primary);\n}\n\n.greeting {\n    margin: 1rem;\n    text-align: center;\n}\n\n\naside>ul {\n    margin: 1rem 2rem;\n    list-style: none;\n}\n\n.greeting .title {}\n\n.greeting .title input {\n    margin-left: 0.5em;\n    min-width: 0;\n\n}\n\n.greeting .title input,\n.greeting .title {\n    color: var(--dark);\n    font-size: 1.125rem;\n    font-weight: 700;\n}\n\naside ul li {\n    font-size: 1.5rem;\n    margin-bottom: 0.5rem;\n}\n\n\naside ul li:not([id=\"projects\"]) {\n    display: flex;\n    align-items: center;\n}\n\nul img {\n    width: 1.5rem;\n    height: 1.5rem;\n    margin-right: 0.5rem;\n}\n\naside ul li:hover {\n    cursor: pointer;\n}\n\nli#projects div {\n    display: flex;\n    align-items: center;\n    margin-bottom: 0.5rem;\n}\n\nli#projects ul li {\n    margin-left: 3rem;\n    display: list-item;\n}\n\nli#projects button {\n    font-size: 1rem;\n    border: 1px solid var(--grey);\n    border-radius: 5px;\n    padding: 2px 8px;\n    margin-left: 3rem;\n    transition: 0.2s ease-in-out;\n}\n\nli#projects button:active,\nli#projects button:hover {\n    color: var(--primary);\n    border-color: var(--primary);\n\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/notes.css":
/*!******************************!*\
  !*** ./src/styles/notes.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_notes_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./notes.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/notes.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_notes_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_notes_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_notes_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_notes_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/projectItem.css":
/*!************************************!*\
  !*** ./src/styles/projectItem.css ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projectItem_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./projectItem.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/projectItem.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projectItem_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projectItem_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_projectItem_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_projectItem_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/projects.css":
/*!*********************************!*\
  !*** ./src/styles/projects.css ***!
  \*********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./projects.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/projects.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/components/form.js");



function defaultlist() {
    const contentDiv = document.getElementById('content') //content div

    const todoListElement = document.createElement('section'); // TODO LIST OF ITEMS
    todoListElement.classList.add('todo-list');
    const todoListElement_h3 = document.createElement('h3');
    todoListElement_h3.textContent = 'To Do List';
    todoListElement.appendChild(todoListElement_h3);

    const todoList_div = document.createElement('div');
    todoList_div.classList.add('list');
    todoList_div.id = 'todo-list';


    todoListElement.appendChild(todoList_div);
    // defaultList.appendChild(todoListElement);
    contentDiv.appendChild(todoListElement); //add default list to main div

    (0,_form__WEBPACK_IMPORTED_MODULE_1__["default"])();

    return contentDiv;
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

      const iconsBy = document.createElement('div');
      iconsBy.classList.add('icons-ref');
      iconsBy.textContent = 'Icons by ';
      const iconsAnchor = document.createElement('a');
      iconsAnchor.href = 'https://www.flaticon.com/free-icons/to-do';
      iconsAnchor.title = 'to do icons';
      iconsAnchor.textContent = 'Graphics Plazza - Flaticon';
      iconsBy.appendChild(iconsAnchor);
      
      

      footerElement.appendChild(footerContainer);
      footerElement.appendChild(iconsBy);

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
        (0,_displayToDo__WEBPACK_IMPORTED_MODULE_2__.displayToDos)();
        e.target.reset();
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
/* harmony import */ var _assets_logo_header_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo-header.png */ "./src/assets/logo-header.png");


function header() {
    const headerElement = document.getElementById('header');

    const headerIcon = new Image();
    headerIcon.src = _assets_logo_header_png__WEBPACK_IMPORTED_MODULE_0__;
    const header_h1 = document.createElement('h1');
    header_h1.textContent = "To-Do-Things";
    headerElement.appendChild(headerIcon);
    headerElement.appendChild(header_h1);

    

    return headerElement;
}

/***/ }),

/***/ "./src/components/projectItem.js":
/*!***************************************!*\
  !*** ./src/components/projectItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectItem: () => (/* binding */ projectItem)
/* harmony export */ });
/* harmony import */ var _styles_projectItem_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/projectItem.css */ "./src/styles/projectItem.css");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/components/todos.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/components/projects.js");
/* harmony import */ var _defaultList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultList */ "./src/components/defaultList.js");
/* harmony import */ var _displayToDo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayToDo */ "./src/components/displayToDo.js");






function projectItem(proj) {

    const contentDiv = document.querySelector('#content');

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-item');
    const project_h2 = document.createElement('h2');
    project_h2.textContent = `${proj.title}`;
    const project_category = document.createElement('h3');
    project_category.textContent = `${proj.category}`;
    const project_due = document.createElement('h3');
    const [year, month, day] = (proj.dueDate).split('-');
    project_due.textContent = `Due: ${month}/${day}/${year}`;

    const tasklist = document.createElement('section');
    tasklist.classList.add('task-list');
    tasklist.id = 'task-list';

    function displayTasks() {
        tasklist.innerHTML = '';

        proj.tasks.forEach(task => {
            const taskItem = document.createElement('div'); //task item
            taskItem.classList.add('task-item');
            
            const label = document.createElement('label'); //task checkbox
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.checked = task.done;
            const span = document.createElement('span');
            span.classList.add('bbl');
        
            if (task.priority == 'low') {
                span.classList.add('low');
            } else if (task.priority == 'medium') {
                span.classList.add('medium');
            } else if (task.priority == 'high') {
                span.classList.add('high');
            }

            label.appendChild(input);
            label.appendChild(span);

            const content = document.createElement('div'); //task content
            content.classList.add('task-content');
            const content_input = document.createElement('input');
            content_input.type = 'text';
            content_input.value = `${task.content}`;
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

            taskItem.appendChild(label);
            taskItem.appendChild(content);
            taskItem.appendChild(actions);

            tasklist.append(taskItem);

            if (task.done) {
                taskItem.classList.add('done');
            }

            input.addEventListener('click', e => {
                task.done = e.target.checked;
                (0,_todos__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();
    
                if (task.done) {
                    taskItem.classList.add('done');
                } else {
                    taskItem.classList.remove('done');
                }
                displayTasks();
            })

            edit.addEventListener('click', e => {
                const input  = content.querySelector('input');
                input.removeAttribute('readonly');
                input.focus();
                input.addEventListener('blur', e => {
                    input.setAttribute('readonly', true);
                    task.content = e.target.value;
                    (0,_todos__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();
                    displayTasks();
                })

            })

            deleteButton.addEventListener('click', e => {
                proj.tasks = proj.tasks.filter(t => t != task);
                console.log(proj.tasks);
                (0,_todos__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();
                displayTasks();

            })


            tasklist.appendChild(taskItem);
        });

    }
    displayTasks();


    
    projectDiv.appendChild(project_h2);
    projectDiv.appendChild(project_category);
    projectDiv.appendChild(project_due);
    projectDiv.appendChild(tasklist); //add tasklist to project item

    contentDiv.appendChild(projectDiv); //add project to content div




   //FORM
   const createToDoElement = document.createElement('section');
   createToDoElement.classList.add('create-todo');
   const createToDoElement_h3 = document.createElement('h3');
   createToDoElement_h3.textContent = 'Add Task';
   createToDoElement.appendChild(createToDoElement_h3);
   const todoForm = document.createElement('form');
   todoForm.id = 'new-todo-form';
   const todoForm_h4 = document.createElement('h4');
   todoForm_h4.textContent = "What's on your project list?";
   const todoForm_input = document.createElement('input');
   todoForm_input.required = 'true';
   todoForm_input.type = 'text';
   todoForm_input.name = 'content';
   todoForm_input.id = 'content';
   todoForm_input.placeholder = "e.g make a video";
   todoForm.appendChild(todoForm_h4);
   todoForm.appendChild(todoForm_input);

   const priorityDiv = document.createElement('div');
   priorityDiv.classList.add('priority');
   
   const priority_h3 = document.createElement('h3');
   priority_h3.textContent = 'Priority:'
    priorityDiv.appendChild(priority_h3);

   const priority_labels = document.createElement('div');
   priority_labels.classList.add('priority-labels'); 

   const label1 = document.createElement('label'); // priority low
   const label1_input = document.createElement('input');
   label1_input.required = 'true';
   label1_input.checked = 'true';
    label1_input.type = 'radio';
    label1_input.name = 'priority';
    label1_input.id = 'priority1';
    label1_input.value = 'low';
    const low_span = document.createElement('span');
    low_span.classList.add('bbl');
    low_span.classList.add('low');
    const low_div = document.createElement('div');
    low_div.textContent = 'Low';
    label1.appendChild(label1_input);
    label1.appendChild(low_span);
    label1.appendChild(low_div);
    priority_labels.appendChild(label1);

    const label2 = document.createElement('label'); // priority medium
   const label2_input = document.createElement('input');
    label2_input.type = 'radio';
    label2_input.name = 'priority';
    label2_input.id = 'priority2';
    label2_input.value = 'medium';
    const medium_span = document.createElement('span');
    medium_span.classList.add('bbl');
    medium_span.classList.add('medium');
    const medium_div = document.createElement('div');
    medium_div.textContent = 'Medium';
    label2.appendChild(label2_input);
    label2.appendChild(medium_span);
    label2.appendChild(medium_div);
    priority_labels.appendChild(label2);

    const label3 = document.createElement('label'); // priority high
   const label3_input = document.createElement('input');
    label3_input.type = 'radio';
    label3_input.name = 'priority';
    label3_input.id = 'priority3';
    label3_input.value = 'high';
    const high_span = document.createElement('span');
    high_span.classList.add('bbl');
    high_span.classList.add('high');
    const high_div = document.createElement('div');
    high_div.textContent = 'High';
    label3.appendChild(label3_input);
    label3.appendChild(high_span);
    label3.appendChild(high_div);
    priority_labels.appendChild(label3);

    priorityDiv.appendChild(priority_labels);
    todoForm.appendChild(priorityDiv);

   const submit_btn = document.createElement('input');
    submit_btn.type = 'submit';
    submit_btn.value = 'Add Task';
    todoForm.appendChild(submit_btn); // add submit btn
    
    createToDoElement.appendChild(todoForm);
    contentDiv.appendChild(createToDoElement);

    todoForm.addEventListener('submit', e => {
        e.preventDefault();


        const task = {
            content: e.target.elements.content.value,
            priority: e.target.elements.priority.value,
            done: false,
            createdAt: new Date().getTime()

        }
       

        proj.tasks.push(task);
        (0,_todos__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();
        displayTasks();
        e.target.reset();
    })

    const deleteProject = document.createElement('input');
    deleteProject.type = 'button';
    deleteProject.value = 'Delete Project';
    createToDoElement.appendChild(deleteProject);

    deleteProject.addEventListener('click', e => {
       (0,_todos__WEBPACK_IMPORTED_MODULE_1__.removeProject)(proj);
       contentDiv.innerHTML = '';
       if (_todos__WEBPACK_IMPORTED_MODULE_1__.projects[0]) {
           projectItem(_todos__WEBPACK_IMPORTED_MODULE_1__.projects[0]);
       } else {
        (0,_defaultList__WEBPACK_IMPORTED_MODULE_3__["default"])();
        (0,_displayToDo__WEBPACK_IMPORTED_MODULE_4__.displayToDos)();
       }

       (0,_projects__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();
    })


    return contentDiv;
}

/***/ }),

/***/ "./src/components/projects.js":
/*!************************************!*\
  !*** ./src/components/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject),
/* harmony export */   displayProjects: () => (/* binding */ displayProjects)
/* harmony export */ });
/* harmony import */ var _styles_projects_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/projects.css */ "./src/styles/projects.css");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/components/todos.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/index.js");




function displayProjects() {
   const projectList = document.querySelector('#projects>ul');
   projectList.innerHTML = '';

   _todos__WEBPACK_IMPORTED_MODULE_1__.projects.forEach(project => {
    const project_li = document.createElement('li');
    project_li.classList.add('project-item');

    project_li.textContent = `${project.title}`;
    projectList.appendChild(project_li);
    });

    (0,___WEBPACK_IMPORTED_MODULE_2__.displayProjectItem)();

}

function createProject() {
    const contentDiv = document.querySelector('#content');

    const projectsDiv = document.createElement('section');
    projectsDiv.classList.add('create-project');
    const projects_h3 = document.createElement('h3');
    projects_h3.textContent = 'Create Project';
    projectsDiv.appendChild(projects_h3);

    //form
    const projectForm = document.createElement('form');
    projectForm.id = 'project-form';
    const projectForm_h4 = document.createElement('h4');
    projectForm_h4.textContent = "What's your project's title?";
    const projectForm_input = document.createElement('input');
    projectForm_input.required = 'true';
    projectForm_input.type = 'text';
    projectForm_input.name = 'title';
    projectForm_input.id = 'title';
    projectForm_input.placeholder = "e.g birthday party planning";
    projectForm.appendChild(projectForm_h4);
    projectForm.appendChild(projectForm_input);

    //options
    const optionsDiv = document.createElement('div'); //options div
    optionsDiv.classList.add('options');

    const label1 = document.createElement('label'); // option business
    const label1_input = document.createElement('input');
    label1_input.checked = 'true';
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

    projectForm.appendChild(optionsDiv); // add options div

    //DUE DATE DIV
    const dueDate = document.createElement('div');
    dueDate.classList.add('due-date');
    dueDate.id = 'due-date';
    const dueDate_label = document.createElement('label');
    dueDate_label.for = 'dueDate';
    dueDate_label.textContent = 'Due:';
    const dueDate_input = document.createElement('input');
    dueDate_input.required = 'true';
    dueDate_input.type = 'date';
    dueDate_input.id = 'dueDate';
    dueDate_input.name = 'dueDate';
    dueDate.appendChild(dueDate_label);
    dueDate.appendChild(dueDate_input);

    projectForm.appendChild(dueDate); //add due-date

    //SUBMIT PROJECT
    const submit_btn = document.createElement('input');
    submit_btn.type = 'submit';
    submit_btn.value = 'Create a Project';
    projectForm.appendChild(submit_btn); // add submit btn

    projectForm.addEventListener('submit', e => {
        e.preventDefault();

        const project = {
            title: e.target.elements.title.value,
            category: e.target.elements.category.value,
            tasks: [],
            dueDate: e.target.elements.dueDate.value,
            createdAt: new Date().getTime()
        }


        ;(0,_todos__WEBPACK_IMPORTED_MODULE_1__.addProject)(project);
        displayProjects();
        e.target.reset();
    })




    projectsDiv.appendChild(projectForm);
    contentDiv.appendChild(projectsDiv);
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
/* harmony import */ var _styles_notes_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/notes.css */ "./src/styles/notes.css");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/components/todos.js");



function quickNotes() {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';

    const notesElement = document.createElement('section');
    notesElement.id = 'notes';

    _todos__WEBPACK_IMPORTED_MODULE_1__.notes.forEach(note => {
        const noteItem = document.createElement('div'); //note item
        noteItem.classList.add('note-item');

        const date_h3 = document.createElement('h3');
        date_h3.innerHTML = note.date;

        const note_input = document.createElement('textarea');
        note_input.name = 'textarea';
        note_input.value = `${note.content}`;
        note_input.placeholder = 'type your note here..';

        const deleteBtn = document.createElement('div');
        deleteBtn.classList.add('delete-note');
        const span = document.createElement('span');
        span.classList.add('cross');
        deleteBtn.appendChild(span);


        noteItem.appendChild(date_h3);
        noteItem.appendChild(note_input);
        noteItem.appendChild(deleteBtn);
        notesElement.appendChild(noteItem);


        note_input.addEventListener('blur', e => {
            note.content = e.target.value;
            (0,_todos__WEBPACK_IMPORTED_MODULE_1__.saveNotes)();
            quickNotes();

        })

        deleteBtn.addEventListener('click', e => {
            ;(0,_todos__WEBPACK_IMPORTED_MODULE_1__.removeNote)(note);
            (0,_todos__WEBPACK_IMPORTED_MODULE_1__.saveNotes)();
            quickNotes();
        })
    });

    const addNoteBtn = document.createElement('input');
    addNoteBtn.type = 'button';
    addNoteBtn.value = 'Create Note';
    notesElement.appendChild(addNoteBtn);

    addNoteBtn.addEventListener('click', e => {
        const note = {
            content: '',
            createdAt: new Date().getTime(),
            date: new Date().toLocaleDateString()
        }
        ;(0,_todos__WEBPACK_IMPORTED_MODULE_1__.addNote)(note);
        quickNotes();
        console.log(_todos__WEBPACK_IMPORTED_MODULE_1__.notes);
    })


    contentDiv.appendChild(notesElement);
    
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
/* harmony import */ var _assets_note_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/note.png */ "./src/assets/note.png");
/* harmony import */ var _assets_todo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/todo.png */ "./src/assets/todo.png");
/* harmony import */ var _assets_projects_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/projects.png */ "./src/assets/projects.png");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos */ "./src/components/todos.js");







function sidebar() {
    /*NAV MENU*/
    const sidebarElement = document.querySelector('aside');
    sidebarElement.innerHTML = '';

    const greetingElement = document.createElement('div'); // greeting element
    greetingElement.classList.add('greeting');
    const greeting_h2 = document.createElement('h2');
    greeting_h2.classList.add('title');
    greeting_h2.innerHTML = "Greetings, ";
    const greeting_input = document.createElement('input');
    greeting_input.type = 'text';
    greeting_input.id = 'name';
    greeting_input.maxLength = 12;
    greeting_input.size = 12;
    greeting_input.placeholder = 'Name here';
    greeting_h2.appendChild(greeting_input);
    greetingElement.appendChild(greeting_h2);
    sidebarElement.appendChild(greetingElement); // add greeting elem

    window.addEventListener('load', () => {
        const nameInput = document.querySelector('#name');

        const username = localStorage.getItem('username') || '';
        nameInput.value = username;

        nameInput.addEventListener('change', e => {
            localStorage.setItem('username', e.target.value);
        })

    })

    /* MENU */
    const navMenu = document.createElement('ul');
    const li_default = document.createElement('li');
    li_default.id = 'default';
    const todoIcon = new Image();
    todoIcon.src = _assets_todo_png__WEBPACK_IMPORTED_MODULE_2__;
    const li_default_a = document.createElement('a');
    li_default_a.textContent = 'To-Do List';
    li_default.appendChild(todoIcon);
    li_default.appendChild(li_default_a);
    const li_projects = document.createElement('li');
    const li_projectsDiv = document.createElement('div');
    const projectsIcon = new Image();
    projectsIcon.src = _assets_projects_png__WEBPACK_IMPORTED_MODULE_3__;
    li_projectsDiv.appendChild(projectsIcon);
    li_projectsDiv.innerHTML += 'My Projects';
    li_projects.id = 'projects';
    li_projects.appendChild(li_projectsDiv);
    const projectsUl = document.createElement('ul');


    _todos__WEBPACK_IMPORTED_MODULE_4__.projects.forEach(project => {
        const project_li = document.createElement('li');
        project_li.classList.add('project-item');
    
        project_li.textContent = `${project.title}`;
        projectsUl.appendChild(project_li);
    });
    
    li_projects.appendChild(projectsUl);

    // const projectsUl_add = document.createElement('li');
    const addProject = document.createElement('button');
    addProject.id = 'add-project';
    addProject.type = 'button';
    addProject.textContent = 'Add Project';
    li_projects.appendChild(addProject);

    const li_notes = document.createElement('li');
    li_notes.id = 'li-notes';
    const notesIcon = new Image();
    notesIcon.src = _assets_note_png__WEBPACK_IMPORTED_MODULE_1__;
    const li_notes_a = document.createElement('a');
    li_notes_a.textContent = 'Quick Notes';
    li_notes.appendChild(notesIcon);
    li_notes.appendChild(li_notes_a);

    
    navMenu.appendChild(li_default);
    navMenu.appendChild(li_projects);
    navMenu.appendChild(li_notes);
    sidebarElement.appendChild(navMenu);


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
/* harmony export */   addNote: () => (/* binding */ addNote),
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   clearTodos: () => (/* binding */ clearTodos),
/* harmony export */   getNotes: () => (/* binding */ getNotes),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   getTodos: () => (/* binding */ getTodos),
/* harmony export */   notes: () => (/* binding */ notes),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   removeNote: () => (/* binding */ removeNote),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   removeTodo: () => (/* binding */ removeTodo),
/* harmony export */   saveNotes: () => (/* binding */ saveNotes),
/* harmony export */   saveProjects: () => (/* binding */ saveProjects),
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

/* PROJECTS */
let projects = JSON.parse(localStorage.getItem('projects')) || [];

function saveProjects() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function getProjects() {
  return projects;
}

function addProject(project) {
  projects.push(project);
  saveProjects();
}

function removeProject(project) {
  projects = projects.filter(t => t != project);
  saveProjects();
}

/* notes */

let notes = JSON.parse(localStorage.getItem('notes')) || [];

function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

function getNotes() {
  return notes;
}

function addNote(note) {
  notes.push(note);
  saveNotes();
}

function removeNote(note) {
  notes = notes.filter(n => n != note)
  saveNotes();
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayProjectItem: () => (/* binding */ displayProjectItem)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar */ "./src/components/sidebar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_defaultList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/defaultList */ "./src/components/defaultList.js");
/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects */ "./src/components/projects.js");
/* harmony import */ var _components_quickNotes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/quickNotes */ "./src/components/quickNotes.js");
/* harmony import */ var _components_displayToDo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/displayToDo */ "./src/components/displayToDo.js");
/* harmony import */ var _components_projectItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projectItem */ "./src/components/projectItem.js");
/* harmony import */ var _components_todos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/todos */ "./src/components/todos.js");











(0,_components_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_components_defaultList__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_components_displayToDo__WEBPACK_IMPORTED_MODULE_7__.displayToDos)();


/* NAV BAR */
const navBar = document.querySelector('aside>ul');
navBar.querySelector('li#default>a').classList.add('selected');
navBar.addEventListener('click', e => {
    

    const previousLi = document.querySelector('.selected');
    if (e.target.innerHTML === 'To-Do List') {
        document.querySelector('#content').innerHTML = '';
        previousLi.classList.remove('selected');
        e.target.classList.add('selected');
        (0,_components_defaultList__WEBPACK_IMPORTED_MODULE_4__["default"])();
        (0,_components_displayToDo__WEBPACK_IMPORTED_MODULE_7__.displayToDos)();
    } else if (e.target.innerHTML === 'Quick Notes') {
        document.querySelector('#content').innerHTML = '';
        previousLi.classList.remove('selected');
        e.target.classList.add('selected');
        (0,_components_quickNotes__WEBPACK_IMPORTED_MODULE_6__["default"])();
    } else if (e.target.innerHTML === 'Add Project') {
        document.querySelector('#content').innerHTML = '';
        previousLi.classList.remove('selected');
        e.target.classList.add('selected');
        (0,_components_projects__WEBPACK_IMPORTED_MODULE_5__["default"])();
    }

})

//DISPLAY PROJECT
function displayProjectItem() {
    const projectList = document.querySelector('#projects>ul').children;
    for (let i = 0; i < projectList.length; i++) {
            projectList[i].addEventListener('click', e => {
                document.querySelector('#content').innerHTML = '';
    
                (0,_components_projectItem__WEBPACK_IMPORTED_MODULE_8__.projectItem)(_components_todos__WEBPACK_IMPORTED_MODULE_9__.projects[i]);
            })
    }
    
}
document.addEventListener('DOMContentLoaded', displayProjectItem);

/***/ }),

/***/ "./src/assets/github-logo.png":
/*!************************************!*\
  !*** ./src/assets/github-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7615be16eed41f806def.png";

/***/ }),

/***/ "./src/assets/logo-header.png":
/*!************************************!*\
  !*** ./src/assets/logo-header.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5bfb2f4042efea5981f.png";

/***/ }),

/***/ "./src/assets/note.png":
/*!*****************************!*\
  !*** ./src/assets/note.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b67fb3c5841c1bfd41d.png";

/***/ }),

/***/ "./src/assets/projects.png":
/*!*********************************!*\
  !*** ./src/assets/projects.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ab02702144b12ab122f.png";

/***/ }),

/***/ "./src/assets/todo.png":
/*!*****************************!*\
  !*** ./src/assets/todo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c28932b356bf0420f5c.png";

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxxR0FBcUcsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9B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Q0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL2Zvcm0tYW5kLXRvZG9saXN0LmNzcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9ub3Rlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9zdHlsZXMvcHJvamVjdEl0ZW0uY3NzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL3Byb2plY3RzLmNzcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9zaWRlYmFyLmNzcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9mb3JtLWFuZC10b2RvbGlzdC5jc3M/OWY5MSIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9ub3Rlcy5jc3M/YzliYyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9wcm9qZWN0SXRlbS5jc3M/ZTQwYyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9wcm9qZWN0cy5jc3M/MWFhYSIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9zaWRlYmFyLmNzcz80ODE2Iiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHRMaXN0LmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5VG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RJdGVtLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcXVpY2tOb3Rlcy5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbjpyb290IHtcbiAgICAtLXByaW1hcnk6ICMwMGFhYTA7XG4gICAgLS1idXNpbmVzczogIzNhODJlZTtcbiAgICAtLXBlcnNvbmFsOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAtLWxpZ2h0OiAjZTBlNWU0O1xuICAgIC0tZGFyazogIzMxMzE1NDtcbiAgICAtLWRhbmdlcjogcmdiKDI1NSwgOTEsIDg3KTtcbiAgICAtLWdyZXk6ICM4ODg7XG4gICAgLS1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAgIC0tYnVzaW5lc3MtZ2xvdzogMHB4IDBweCA0cHggcmdiYSg1OCwgMTMwLCAyMzgsIDAuNzUpO1xuICAgIC0tcGVyc29uYWwtZ2xvdzogMHB4IDBweCA0cHggcmdiYSgwLCAxNzAsIDE2MCwgMC43NSk7XG4gICAgLS1kYW5nZXItZ2xvdzogMHB4IDBweCA0cHggcmdiYSgyNTUsIDkxLCA4NywgMC43NSk7XG5cbiAgICAtLWxvdzogcmdiYSg5NywgMjU1LCA2Nik7XG4gICAgLS1tZWRpdW06IHJnYigyNDQsIDI1MiwgMik7XG4gICAgLS1oaWdoOiB2YXIoLS1kYW5nZXIpO1xuXG4gICAgLS1sb3ctZ2xvdzogMHB4IDBweCA0cHggcmdiYSg5NywgMjU1LCA2NiwgMC43NSk7XG4gICAgLS1tZWRpdW0tZ2xvdzogMHB4IDBweCA0cHggcmdiYSgyNDQsIDI1MiwgMiwgMC43NSk7XG4gICAgLS1oaWdoLWdsb3c6IDBweCAwcHggNHB4IHJnYmEoMjU1LCA5MSwgODcsIDAuNzUpO1xuICAgIDtcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDRmciBtaW4tY29udGVudDtcblxuICAgIGhlaWdodDogMTAwdmg7XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cblxuc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNWVtO1xufVxuXG5oMyB7XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbmg0IHtcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xufVxuXG4vKkhFQURFUiovXG5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2Y0ZDk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaGVhZGVyIGgxIHtcbiAgICBtYXJnaW46IDAuNXJlbSAxcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaGVhZGVyIGltZyB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiAzcmVtO1xufVxuXG5cbi8qTUFJTiovXG5cbmFzaWRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGVkMmM5O1xufVxuXG4jbWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwgMWZyKSAzZnI7XG59XG5cblxuXG4vKkZPT1RFUiovXG5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNTViM2U7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmZvb3RlciBkaXYge1xuICAgIG1hcmdpbjogMC4ycmVtIDFyZW07XG59XG5cbmZvb3RlciBpbWcge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG59XG5cbmZvb3RlciBhIHtcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICovXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuXG59XG5cbi5mb290ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLSovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRDQUFrRDtBQUN0RDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWix3Q0FBd0M7O0lBRXhDLHFEQUFxRDtJQUNyRCxvREFBb0Q7SUFDcEQsa0RBQWtEOztJQUVsRCx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHFCQUFxQjs7SUFFckIsK0NBQStDO0lBQy9DLGtEQUFrRDtJQUNsRCxnREFBZ0Q7O0FBRXBEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtDQUErQztJQUMvQywrQ0FBK0M7O0lBRS9DLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBLFNBQVM7QUFDVDtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOzs7QUFHQSxPQUFPOztBQUVQO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1EQUFtRDtBQUN2RDs7OztBQUlBLFNBQVM7QUFDVDtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBLG1CQUFtQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeTogIzAwYWFhMDtcXG4gICAgLS1idXNpbmVzczogIzNhODJlZTtcXG4gICAgLS1wZXJzb25hbDogdmFyKC0tcHJpbWFyeSk7XFxuICAgIC0tbGlnaHQ6ICNlMGU1ZTQ7XFxuICAgIC0tZGFyazogIzMxMzE1NDtcXG4gICAgLS1kYW5nZXI6IHJnYigyNTUsIDkxLCA4Nyk7XFxuICAgIC0tZ3JleTogIzg4ODtcXG4gICAgLS1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG5cXG4gICAgLS1idXNpbmVzcy1nbG93OiAwcHggMHB4IDRweCByZ2JhKDU4LCAxMzAsIDIzOCwgMC43NSk7XFxuICAgIC0tcGVyc29uYWwtZ2xvdzogMHB4IDBweCA0cHggcmdiYSgwLCAxNzAsIDE2MCwgMC43NSk7XFxuICAgIC0tZGFuZ2VyLWdsb3c6IDBweCAwcHggNHB4IHJnYmEoMjU1LCA5MSwgODcsIDAuNzUpO1xcblxcbiAgICAtLWxvdzogcmdiYSg5NywgMjU1LCA2Nik7XFxuICAgIC0tbWVkaXVtOiByZ2IoMjQ0LCAyNTIsIDIpO1xcbiAgICAtLWhpZ2g6IHZhcigtLWRhbmdlcik7XFxuXFxuICAgIC0tbG93LWdsb3c6IDBweCAwcHggNHB4IHJnYmEoOTcsIDI1NSwgNjYsIDAuNzUpO1xcbiAgICAtLW1lZGl1bS1nbG93OiAwcHggMHB4IDRweCByZ2JhKDI0NCwgMjUyLCAyLCAwLjc1KTtcXG4gICAgLS1oaWdoLWdsb3c6IDBweCAwcHggNHB4IHJnYmEoMjU1LCA5MSwgODcsIDAuNzUpO1xcbiAgICA7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0LCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgobWluLWNvbnRlbnQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgNGZyIG1pbi1jb250ZW50O1xcblxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVlbTtcXG59XFxuXFxuaDMge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuaDQge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XFxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xcbn1cXG5cXG4vKkhFQURFUiovXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjRkOTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICAgIG1hcmdpbjogMC41cmVtIDFyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAzcmVtO1xcbn1cXG5cXG5cXG4vKk1BSU4qL1xcblxcbmFzaWRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhlZDJjOTtcXG59XFxuXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwgMWZyKSAzZnI7XFxufVxcblxcblxcblxcbi8qRk9PVEVSKi9cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDU1YjNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmZvb3RlciBkaXYge1xcbiAgICBtYXJnaW46IDAuMnJlbSAxcmVtO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiBub25lOyAqL1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuXFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLSovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBpbnB1dDpub3QoW3R5cGU9XCJyYWRpb1wiXSk6bm90KFt0eXBlPVwiY2hlY2tib3hcIl0pLFxuYnV0dG9uIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG4uY3JlYXRlLXRvZG8gaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uY3JlYXRlLXRvZG8gLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLWdhcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5jcmVhdGUtdG9kbyAub3B0aW9ucyBsYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0sXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5idWJibGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJ1c2luZXNzKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idXNpbmVzcy1nbG93KTtcbn1cblxuLmJ1YmJsZS5wZXJzb25hbCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wZXJzb25hbCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tcGVyc29uYWwtZ2xvdyk7XG59XG5cbi5idWJibGU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXNpbmVzcyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnVzaW5lc3MtZ2xvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idWJibGUucGVyc29uYWw6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wZXJzb25hbCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tcGVyc29uYWwtZ2xvdyk7XG59XG5cbmlucHV0OmNoZWNrZWR+LmJ1YmJsZTo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uY3JlYXRlLXRvZG8gLm9wdGlvbnMgbGFiZWwgZGl2IHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jcmVhdGUtdG9kbyBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1wZXJzb25hbC1nbG93KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNzU7XG59XG5cbi50b2RvLWxpc3QgLmxpc3Qge1xuICAgIG1hcmdpbjogMXJlbSAwO1xufVxuXG4udG9kby1saXN0IC50b2RvLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnRvZG8taXRlbSBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvZG8taXRlbSAudG9kby1jb250ZW50IHtcbiAgICBmbGV4OiAxIDEgMCU7XG59XG5cbi50b2RvLWl0ZW0gLnRvZG8tY29udGVudCBpbnB1dCB7XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi50b2RvLWl0ZW0gLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZG8taXRlbSAuYWN0aW9ucyBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4udG9kby1pdGVtIC5hY3Rpb25zIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43NTtcbn1cblxuLnRvZG8taXRlbSAuYWN0aW9ucyAuZWRpdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi50b2RvLWl0ZW0gLmFjdGlvbnMgLmRlbGV0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcbn1cblxuLnRvZG8taXRlbS5kb25lIC50b2RvLWNvbnRlbnQgaW5wdXQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9ybS1hbmQtdG9kb2xpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJpbnB1dDpub3QoW3R5cGU9XFxcInJhZGlvXFxcIl0pOm5vdChbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSksXFxuYnV0dG9uIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IGluaXRpYWw7XFxufVxcblxcbi5jcmVhdGUtdG9kbyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4uY3JlYXRlLXRvZG8gLm9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLWdhcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4uY3JlYXRlLXRvZG8gLm9wdGlvbnMgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ1YmJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJ1c2luZXNzKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnVzaW5lc3MtZ2xvdyk7XFxufVxcblxcbi5idWJibGUucGVyc29uYWwge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXBlcnNvbmFsKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tcGVyc29uYWwtZ2xvdyk7XFxufVxcblxcbi5idWJibGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnVzaW5lc3MpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idXNpbmVzcy1nbG93KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYnViYmxlLnBlcnNvbmFsOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBlcnNvbmFsKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tcGVyc29uYWwtZ2xvdyk7XFxufVxcblxcbmlucHV0OmNoZWNrZWR+LmJ1YmJsZTo6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY3JlYXRlLXRvZG8gLm9wdGlvbnMgbGFiZWwgZGl2IHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXBlcnNvbmFsLWdsb3cpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jcmVhdGUtdG9kbyBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxufVxcblxcbi50b2RvLWxpc3QgLmxpc3Qge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRvZG8tbGlzdCAudG9kby1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udG9kby1pdGVtIGxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1pdGVtIC50b2RvLWNvbnRlbnQge1xcbiAgICBmbGV4OiAxIDEgMCU7XFxufVxcblxcbi50b2RvLWl0ZW0gLnRvZG8tY29udGVudCBpbnB1dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuLnRvZG8taXRlbSAuYWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWl0ZW0gLmFjdGlvbnMgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZG8taXRlbSAuYWN0aW9ucyBidXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbn1cXG5cXG4udG9kby1pdGVtIC5hY3Rpb25zIC5lZGl0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4udG9kby1pdGVtIC5hY3Rpb25zIC5kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xcbn1cXG5cXG4udG9kby1pdGVtLmRvbmUgLnRvZG8tY29udGVudCBpbnB1dCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI25vdGVzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyMjBweCk7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ubm90ZS1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ub3RlLWl0ZW0gaDMge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XG4gICAgcGFkZGluZzogNHB4IDA7XG59XG5cbi5ub3RlLWl0ZW0gdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG4jbm90ZXMgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMjBweDtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1wcmltYXJ5LWdsb3cpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4jbm90ZXMgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43NTtcbn1cblxuLmRlbGV0ZS1ub3RlIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNyb3NzIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIC8qIENyb3NzIGNvbG9yICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3Jvc3M6OmJlZm9yZSxcbi5jcm9zczo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbn1cblxuLmNyb3NzOjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpO1xufVxuXG4uY3Jvc3M6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC00NWRlZyk7XG59XG5cbi5kZWxldGUtbm90ZTpob3Zlcixcbi5kZWxldGUtbm90ZTphY3RpdmUge1xuICAgIG9wYWNpdHk6IDAuNzU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25vdGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHlCQUF5Qjs7SUFFekIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsZUFBZTs7SUFFZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0FBQ1g7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7O0lBRUksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbm90ZXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjIwcHgpO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5ub3RlLWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBoZWlnaHQ6IDIyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubm90ZS1pdGVtIGgzIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XFxuICAgIHBhZGRpbmc6IDRweCAwO1xcbn1cXG5cXG4ubm90ZS1pdGVtIHRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogaW5pdGlhbDtcXG59XFxuXFxuI25vdGVzIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIyMHB4O1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXByaW1hcnktZ2xvdyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuI25vdGVzIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLmRlbGV0ZS1ub3RlIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3Jvc3Mge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgLyogQ3Jvc3MgY29sb3IgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY3Jvc3M6OmJlZm9yZSxcXG4uY3Jvc3M6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLmNyb3NzOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmNyb3NzOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLmRlbGV0ZS1ub3RlOmhvdmVyLFxcbi5kZWxldGUtbm90ZTphY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFBST0pFQ1QgRk9STSAqL1xuXG4ucHJpb3JpdHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG59XG5cbi5wcmlvcml0eSBoMyB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ucHJpb3JpdHktbGFiZWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ucHJpb3JpdHkgbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmJsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1sb3cpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWxvdy1nbG93KTtcbn1cblxuLmJibC5sb3cge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbG93KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1sb3ctZ2xvdyk7XG59XG5cbi5iYmwubWVkaXVtIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1lZGl1bSk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWVkaXVtLWdsb3cpO1xufVxuXG4uYmJsLmhpZ2gge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGlnaCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0taGlnaC1nbG93KTtcbn1cblxuLmJibDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbG93LWdsb3cpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYmJsLmxvdzo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbG93LWdsb3cpO1xufVxuXG4uYmJsLm1lZGl1bTo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bSk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWVkaXVtLWdsb3cpO1xufVxuXG4uYmJsLmhpZ2g6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1oaWdoLWdsb3cpO1xufVxuXG5pbnB1dDpjaGVja2Vkfi5iYmw6OmFmdGVyIHtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XCJidXR0b25cIl0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWRhbmdlci1nbG93KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNzU7XG59XG5cbi8qIFBST0pFQ1QgSVRFTSBBTkQgVEFTS1MgTElTVCAqL1xuXG4ucHJvamVjdC1pdGVtIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuXG4ucHJvamVjdC1pdGVtIGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YXNrLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4udGFzay1pdGVtIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1pdGVtIC50YXNrLWNvbnRlbnQge1xuICAgIGZsZXg6IDEgMSAwJTtcbn1cblxuLnRhc2staXRlbSAudGFzay1jb250ZW50IGlucHV0IHtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cblxuLnRhc2staXRlbSAuYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFzay1pdGVtIC5hY3Rpb25zIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi50YXNrLWl0ZW0gLmFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc1O1xufVxuXG4udGFzay1pdGVtIC5hY3Rpb25zIC5lZGl0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnRhc2staXRlbSAuYWN0aW9ucyAuZGVsZXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xufVxuXG4udGFzay1pdGVtLmRvbmUgLnRhc2stY29udGVudCBpbnB1dCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xufVxuXG5zcGFuIC5iYmwgLmxvdyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbG93KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idXNpbmVzcy1sb3cpO1xufVxuXG5zcGFuIC5iYmwgLm1lZGl1bSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWVkaXVtKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1tZWRpdW0tZ2xvdyk7XG59XG5cbnNwYW4gLmJibCAuaGlnaCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taGlnaCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0taGlnaC1nbG93KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcHJvamVjdEl0ZW0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjs7QUFFakI7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLGdDQUFnQzs7QUFFaEM7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBQUk9KRUNUIEZPUk0gKi9cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxufVxcblxcbi5wcmlvcml0eSBoMyB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ucHJpb3JpdHkgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYmJsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbG93KTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tbG93LWdsb3cpO1xcbn1cXG5cXG4uYmJsLmxvdyB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbG93KTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tbG93LWdsb3cpO1xcbn1cXG5cXG4uYmJsLm1lZGl1bSB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWVkaXVtKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWVkaXVtLWdsb3cpO1xcbn1cXG5cXG4uYmJsLmhpZ2gge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhpZ2gpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1oaWdoLWdsb3cpO1xcbn1cXG5cXG4uYmJsOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWxvdy1nbG93KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYmJsLmxvdzo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3cpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1sb3ctZ2xvdyk7XFxufVxcblxcbi5iYmwubWVkaXVtOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bSk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLW1lZGl1bS1nbG93KTtcXG59XFxuXFxuLmJibC5oaWdoOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1oaWdoLWdsb3cpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2Vkfi5iYmw6OmFmdGVyIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kYW5nZXItZ2xvdyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLyogUFJPSkVDVCBJVEVNIEFORCBUQVNLUyBMSVNUICovXFxuXFxuLnByb2plY3QtaXRlbSBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuXFxuLnByb2plY3QtaXRlbSBoMyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2staXRlbSBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbSAudGFzay1jb250ZW50IHtcXG4gICAgZmxleDogMSAxIDAlO1xcbn1cXG5cXG4udGFzay1pdGVtIC50YXNrLWNvbnRlbnQgaW5wdXQge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblxcbi50YXNrLWl0ZW0gLmFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1pdGVtIC5hY3Rpb25zIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrLWl0ZW0gLmFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLnRhc2staXRlbSAuYWN0aW9ucyAuZWRpdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLnRhc2staXRlbSAuYWN0aW9ucyAuZGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcXG59XFxuXFxuLnRhc2staXRlbS5kb25lIC50YXNrLWNvbnRlbnQgaW5wdXQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG5zcGFuIC5iYmwgLmxvdyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxvdyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJ1c2luZXNzLWxvdyk7XFxufVxcblxcbnNwYW4gLmJibCAubWVkaXVtIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWVkaXVtKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWVkaXVtLWdsb3cpO1xcbn1cXG5cXG5zcGFuIC5iYmwgLmhpZ2gge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oaWdoKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0taGlnaC1nbG93KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjcHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuI3Byb2plY3QtZm9ybSAub3B0aW9ucyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtZ2FwOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuI3Byb2plY3QtZm9ybSAub3B0aW9ucyBsYWJlbCxcbiNwcm9qZWN0LWZvcm0gI2R1ZS1kYXRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNwcm9qZWN0LWZvcm0gI2R1ZS1kYXRlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbiNwcm9qZWN0LWZvcm0gI2R1ZURhdGUgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbn1cblxuI3Byb2plY3QtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1wZXJzb25hbC1nbG93KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuI3Byb2plY3QtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc1O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9wcm9qZWN0cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjcHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbiNwcm9qZWN0LWZvcm0gLm9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLWdhcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtIC5vcHRpb25zIGxhYmVsLFxcbiNwcm9qZWN0LWZvcm0gI2R1ZS1kYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0gI2R1ZS1kYXRlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtICNkdWVEYXRlIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1wZXJzb25hbC1nbG93KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2VsZWN0ZWQge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLmdyZWV0aW5nIHtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbmFzaWRlPnVsIHtcbiAgICBtYXJnaW46IDFyZW0gMnJlbTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uZ3JlZXRpbmcgLnRpdGxlIHt9XG5cbi5ncmVldGluZyAudGl0bGUgaW5wdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICBtaW4td2lkdGg6IDA7XG5cbn1cblxuLmdyZWV0aW5nIC50aXRsZSBpbnB1dCxcbi5ncmVldGluZyAudGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmFzaWRlIHVsIGxpIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cblxuYXNpZGUgdWwgbGk6bm90KFtpZD1cInByb2plY3RzXCJdKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG51bCBpbWcge1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbmFzaWRlIHVsIGxpOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxpI3Byb2plY3RzIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxubGkjcHJvamVjdHMgdWwgbGkge1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxubGkjcHJvamVjdHMgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxubGkjcHJvamVjdHMgYnV0dG9uOmFjdGl2ZSxcbmxpI3Byb2plY3RzIGJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2lkZWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUEsa0JBQWtCOztBQUVsQjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZOztBQUVoQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQiw0QkFBNEI7O0FBRWhDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWxlY3RlZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLmdyZWV0aW5nIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbmFzaWRlPnVsIHtcXG4gICAgbWFyZ2luOiAxcmVtIDJyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5ncmVldGluZyAudGl0bGUge31cXG5cXG4uZ3JlZXRpbmcgLnRpdGxlIGlucHV0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICBtaW4td2lkdGg6IDA7XFxuXFxufVxcblxcbi5ncmVldGluZyAudGl0bGUgaW5wdXQsXFxuLmdyZWV0aW5nIC50aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYXNpZGUgdWwgbGkge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5cXG5hc2lkZSB1bCBsaTpub3QoW2lkPVxcXCJwcm9qZWN0c1xcXCJdKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnVsIGltZyB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuYXNpZGUgdWwgbGk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxpI3Byb2plY3RzIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxubGkjcHJvamVjdHMgdWwgbGkge1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG5saSNwcm9qZWN0cyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDJweCA4cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5saSNwcm9qZWN0cyBidXR0b246YWN0aXZlLFxcbmxpI3Byb2plY3RzIGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm0tYW5kLXRvZG9saXN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybS1hbmQtdG9kb2xpc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vdGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm90ZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RJdGVtLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdEl0ZW0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGViYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9zdHlsZXMvZm9ybS1hbmQtdG9kb2xpc3QuY3NzJztcbmltcG9ydCBmb3JtIGZyb20gJy4vZm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmF1bHRsaXN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpIC8vY29udGVudCBkaXZcblxuICAgIGNvbnN0IHRvZG9MaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTsgLy8gVE9ETyBMSVNUIE9GIElURU1TXG4gICAgdG9kb0xpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdCcpO1xuICAgIGNvbnN0IHRvZG9MaXN0RWxlbWVudF9oMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdG9kb0xpc3RFbGVtZW50X2gzLnRleHRDb250ZW50ID0gJ1RvIERvIExpc3QnO1xuICAgIHRvZG9MaXN0RWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvTGlzdEVsZW1lbnRfaDMpO1xuXG4gICAgY29uc3QgdG9kb0xpc3RfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0xpc3RfZGl2LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgICB0b2RvTGlzdF9kaXYuaWQgPSAndG9kby1saXN0JztcblxuXG4gICAgdG9kb0xpc3RFbGVtZW50LmFwcGVuZENoaWxkKHRvZG9MaXN0X2Rpdik7XG4gICAgLy8gZGVmYXVsdExpc3QuYXBwZW5kQ2hpbGQodG9kb0xpc3RFbGVtZW50KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRvZG9MaXN0RWxlbWVudCk7IC8vYWRkIGRlZmF1bHQgbGlzdCB0byBtYWluIGRpdlxuXG4gICAgZm9ybSgpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnREaXY7XG59IiwiaW1wb3J0IHsgdG9kb3MsIHNhdmVUb2RvcywgZ2V0VG9kb3MsIGFkZFRvZG8sIHJlbW92ZVRvZG8sIGNsZWFyVG9kb3MgfSBmcm9tICcuL3RvZG9zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUb0RvcygpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWxpc3QnKTtcbiAgICB0b2RvTGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIFRPRE8gSVRFTVxuICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKTtcblxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgIGlucHV0LmNoZWNrZWQgPSB0b2RvLmRvbmU7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnYnViYmxlJyk7XG4gICAgXG4gICAgICAgIGlmICh0b2RvLmNhdGVnb3J5ID09ICdwZXJzb25hbCcpIHtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgncGVyc29uYWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnYnVzaW5lc3MnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL1RPRE8gSVRFTSBDT05URU5UXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndG9kby1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb250ZW50X2lucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIGNvbnRlbnRfaW5wdXQudmFsdWUgPSBgJHt0b2RvLmNvbnRlbnR9YDtcbiAgICAgICAgY29udGVudF9pbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgdHJ1ZSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudF9pbnB1dCk7XG5cbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL0FDVElPTiBCVVRUT05TXG4gICAgICAgIGFjdGlvbnMuY2xhc3NMaXN0LmFkZCgnYWN0aW9ucycpO1xuICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgICAgICBlZGl0LnRleHRDb250ZW50ID0gJ0VkaXQnXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGVkaXQpO1xuICAgICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XG5cbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0l0ZW0pO1xuXG4gICAgICAgIGlmICh0b2RvLmRvbmUpIHtcbiAgICAgICAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICB0b2RvLmRvbmUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgc2F2ZVRvZG9zKCk7XG5cbiAgICAgICAgICAgIGlmICh0b2RvLmRvbmUpIHtcbiAgICAgICAgICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BsYXlUb0RvcygpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ICA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcbiAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRvZG8uY29udGVudCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIHNhdmVUb2RvcygpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUb0RvcygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIHJlbW92ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICBkaXNwbGF5VG9Eb3MoKTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfSlcbiAgICBcblxufVxuXG4iLCJpbXBvcnQgZ2l0SWNvbiBmcm9tICcuLi9hc3NldHMvZ2l0aHViLWxvZ28ucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XG5cbiAgICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZm9vdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1jb250YWluZXInKTtcbiAgXG4gICAgICBjb25zdCBmb290ZXJJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICBmb290ZXJJY29uLnNyYyA9IGdpdEljb247IFxuICAgICAgZm9vdGVyQ29udGFpbmVyLmlubmVySFRNTCA9IFwiYnVpbHQgJiBkZXNpZ25lZCBieVwiO1xuICAgICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlckljb24pO1xuICAgICAgY29uc3QgZ2l0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGdpdExpbmsuaW5uZXJIVE1MID0gJ21heGlta3dza2knO1xuICAgICAgZ2l0TGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgZ2l0TGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgICAgIGdpdExpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL21heGlta3dza2lcIjtcbiAgICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChnaXRMaW5rKTtcbiAgICAgIFxuICAgICAgZm9vdGVyQ29udGFpbmVyLmlubmVySFRNTCArPSBcIiB8IFwiO1xuICAgICAgY29uc3Qgc291cmNlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHNvdXJjZUxpbmsuaW5uZXJIVE1MID0gJ3NvdXJjZSc7XG4gICAgICBzb3VyY2VMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgICBzb3VyY2VMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICAgICAgc291cmNlTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vbWF4aW1rd3NraS90b2RvLXRoaW5ncy1wcm9qZWN0XCI7XG5cbiAgICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzb3VyY2VMaW5rKTtcblxuICAgICAgY29uc3QgaWNvbnNCeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaWNvbnNCeS5jbGFzc0xpc3QuYWRkKCdpY29ucy1yZWYnKTtcbiAgICAgIGljb25zQnkudGV4dENvbnRlbnQgPSAnSWNvbnMgYnkgJztcbiAgICAgIGNvbnN0IGljb25zQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgaWNvbnNBbmNob3IuaHJlZiA9ICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy90by1kbyc7XG4gICAgICBpY29uc0FuY2hvci50aXRsZSA9ICd0byBkbyBpY29ucyc7XG4gICAgICBpY29uc0FuY2hvci50ZXh0Q29udGVudCA9ICdHcmFwaGljcyBQbGF6emEgLSBGbGF0aWNvbic7XG4gICAgICBpY29uc0J5LmFwcGVuZENoaWxkKGljb25zQW5jaG9yKTtcbiAgICAgIFxuICAgICAgXG5cbiAgICAgIGZvb3RlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGFpbmVyKTtcbiAgICAgIGZvb3RlckVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbnNCeSk7XG5cbiAgICByZXR1cm4gZm9vdGVyRWxlbWVudDtcbn0iLCJpbXBvcnQgJy4uL3N0eWxlcy9mb3JtLWFuZC10b2RvbGlzdC5jc3MnO1xuaW1wb3J0IHsgdG9kb3MsIHNhdmVUb2RvcywgZ2V0VG9kb3MsIGFkZFRvZG8sIHJlbW92ZVRvZG8sIGNsZWFyVG9kb3MgfSBmcm9tICcuL3RvZG9zJztcbmltcG9ydCB7IGRpc3BsYXlUb0RvcyB9IGZyb20gJy4vZGlzcGxheVRvRG8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbiAgICAvL0ZPUk1cbiAgICBjb25zdCBjcmVhdGVUb0RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjcmVhdGVUb0RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtdG9kbycpO1xuICAgIGNvbnN0IGNyZWF0ZVRvRG9FbGVtZW50X2gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjcmVhdGVUb0RvRWxlbWVudF9oMy50ZXh0Q29udGVudCA9ICdDcmVhdGUgVG8gRG8nO1xuICAgIGNyZWF0ZVRvRG9FbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRvRG9FbGVtZW50X2gzKTtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0b2RvRm9ybS5pZCA9ICduZXctdG9kby1mb3JtJztcbiAgICBjb25zdCB0b2RvRm9ybV9oNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgdG9kb0Zvcm1faDQudGV4dENvbnRlbnQgPSBcIldoYXQncyBvbiB5b3VyIHRvZG8gbGlzdD9cIjtcbiAgICBjb25zdCB0b2RvRm9ybV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0Zvcm1faW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0b2RvRm9ybV9pbnB1dC5uYW1lID0gJ2NvbnRlbnQnO1xuICAgIHRvZG9Gb3JtX2lucHV0LmlkID0gJ2NvbnRlbnQnO1xuICAgIHRvZG9Gb3JtX2lucHV0LnBsYWNlaG9sZGVyID0gXCJlLmcgbWFrZSBhIHZpZGVvXCI7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Zvcm1faDQpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Gb3JtX2lucHV0KTtcblxuICAgIGNvbnN0IG9wdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9vcHRpb25zIGRpdlxuICAgIG9wdGlvbnNEaXYuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycpO1xuXG4gICAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgLy8gb3B0aW9uIGJ1c2luZXNzXG4gICAgY29uc3QgbGFiZWwxX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsYWJlbDFfaW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgbGFiZWwxX2lucHV0Lm5hbWUgPSAnY2F0ZWdvcnknO1xuICAgIGxhYmVsMV9pbnB1dC5pZCA9ICdjYXRlZ29yeTEnO1xuICAgIGxhYmVsMV9pbnB1dC52YWx1ZSA9ICdidXNpbmVzcyc7XG4gICAgY29uc3QgYnVzaW5lc3Nfc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBidXNpbmVzc19zcGFuLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZScpO1xuICAgIGJ1c2luZXNzX3NwYW4uY2xhc3NMaXN0LmFkZCgnYnVzaW5lc3MnKTtcbiAgICBjb25zdCBidXNpbmVzc19kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXNpbmVzc19kaXYudGV4dENvbnRlbnQgPSAnQnVzaW5lc3MnO1xuICAgIGxhYmVsMS5hcHBlbmRDaGlsZChsYWJlbDFfaW5wdXQpO1xuICAgIGxhYmVsMS5hcHBlbmRDaGlsZChidXNpbmVzc19zcGFuKTtcbiAgICBsYWJlbDEuYXBwZW5kQ2hpbGQoYnVzaW5lc3NfZGl2KTtcbiAgICBvcHRpb25zRGl2LmFwcGVuZENoaWxkKGxhYmVsMSk7XG5cbiAgICBjb25zdCBsYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyAvLyBvcHRpb24gcGVyc29uYWxcbiAgICBjb25zdCBsYWJlbDJfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxhYmVsMl9pbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBsYWJlbDJfaW5wdXQubmFtZSA9ICdjYXRlZ29yeSc7XG4gICAgbGFiZWwyX2lucHV0LmlkID0gJ2NhdGVnb3J5Mic7XG4gICAgbGFiZWwyX2lucHV0LnZhbHVlID0gJ3BlcnNvbmFsJztcbiAgICBjb25zdCBwZXJzb25hbF9zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHBlcnNvbmFsX3NwYW4uY2xhc3NMaXN0LmFkZCgnYnViYmxlJyk7XG4gICAgcGVyc29uYWxfc3Bhbi5jbGFzc0xpc3QuYWRkKCdwZXJzb25hbCcpO1xuICAgIGNvbnN0IHBlcnNvbmFsX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBlcnNvbmFsX2Rpdi50ZXh0Q29udGVudCA9ICdQZXJzb25hbCc7XG4gICAgbGFiZWwyLmFwcGVuZENoaWxkKGxhYmVsMl9pbnB1dCk7XG4gICAgbGFiZWwyLmFwcGVuZENoaWxkKHBlcnNvbmFsX3NwYW4pO1xuICAgIGxhYmVsMi5hcHBlbmRDaGlsZChwZXJzb25hbF9kaXYpO1xuICAgIG9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQobGFiZWwyKTtcblxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKG9wdGlvbnNEaXYpOyAvLyBhZGQgb3B0aW9ucyBkaXZcblxuICAgIGNvbnN0IHN1Ym1pdF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdF9idG4udHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdF9idG4udmFsdWUgPSAnQWRkIFRvIERvJztcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRfYnRuKTsgLy8gYWRkIHN1Ym1pdCBidG5cblxuICAgIGNyZWF0ZVRvRG9FbGVtZW50LmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvRG9FbGVtZW50KTsgLy8gYWRkIGNyZWF0ZSB0b2RvIGl0ZW0gXG5cbiAgICBcbiAgICB0b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHRvZG8gPSB7XG4gICAgICAgICAgICBjb250ZW50OiBlLnRhcmdldC5lbGVtZW50cy5jb250ZW50LnZhbHVlLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IGUudGFyZ2V0LmVsZW1lbnRzLmNhdGVnb3J5LnZhbHVlLFxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvZG8odG9kbyk7XG4gICAgICAgIGRpc3BsYXlUb0RvcygpO1xuICAgICAgICBlLnRhcmdldC5yZXNldCgpO1xuICAgIH0pXG59IiwiaW1wb3J0IGhlYWRlclBuZyBmcm9tICcuLi9hc3NldHMvbG9nby1oZWFkZXIucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBoZWFkZXJJY29uID0gbmV3IEltYWdlKCk7XG4gICAgaGVhZGVySWNvbi5zcmMgPSBoZWFkZXJQbmc7XG4gICAgY29uc3QgaGVhZGVyX2gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXJfaDEudGV4dENvbnRlbnQgPSBcIlRvLURvLVRoaW5nc1wiO1xuICAgIGhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVySWNvbik7XG4gICAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXJfaDEpO1xuXG4gICAgXG5cbiAgICByZXR1cm4gaGVhZGVyRWxlbWVudDtcbn0iLCJpbXBvcnQgJy4uL3N0eWxlcy9wcm9qZWN0SXRlbS5jc3MnO1xuaW1wb3J0IHsgcHJvamVjdHMsIHNhdmVQcm9qZWN0cywgcmVtb3ZlUHJvamVjdCB9IGZyb20gXCIuL3RvZG9zXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCBkZWZhdWx0bGlzdCBmcm9tICcuL2RlZmF1bHRMaXN0JztcbmltcG9ydCB7IGRpc3BsYXlUb0RvcyB9IGZyb20gJy4vZGlzcGxheVRvRG8nO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEl0ZW0ocHJvaikge1xuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW0nKTtcbiAgICBjb25zdCBwcm9qZWN0X2gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwcm9qZWN0X2gyLnRleHRDb250ZW50ID0gYCR7cHJvai50aXRsZX1gO1xuICAgIGNvbnN0IHByb2plY3RfY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHByb2plY3RfY2F0ZWdvcnkudGV4dENvbnRlbnQgPSBgJHtwcm9qLmNhdGVnb3J5fWA7XG4gICAgY29uc3QgcHJvamVjdF9kdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IChwcm9qLmR1ZURhdGUpLnNwbGl0KCctJyk7XG4gICAgcHJvamVjdF9kdWUudGV4dENvbnRlbnQgPSBgRHVlOiAke21vbnRofS8ke2RheX0vJHt5ZWFyfWA7XG5cbiAgICBjb25zdCB0YXNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICB0YXNrbGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QnKTtcbiAgICB0YXNrbGlzdC5pZCA9ICd0YXNrLWxpc3QnO1xuXG4gICAgZnVuY3Rpb24gZGlzcGxheVRhc2tzKCkge1xuICAgICAgICB0YXNrbGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBwcm9qLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL3Rhc2sgaXRlbVxuICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgLy90YXNrIGNoZWNrYm94XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0YXNrLmRvbmU7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdiYmwnKTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PSAnbG93Jykge1xuICAgICAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnbG93Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ21lZGl1bScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09ICdoaWdoJykge1xuICAgICAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnaGlnaCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL3Rhc2sgY29udGVudFxuICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRlbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29udGVudF9pbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgY29udGVudF9pbnB1dC52YWx1ZSA9IGAke3Rhc2suY29udGVudH1gO1xuICAgICAgICAgICAgY29udGVudF9pbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgdHJ1ZSk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRfaW5wdXQpO1xuXG4gICAgICAgICAgICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vQUNUSU9OIEJVVFRPTlNcbiAgICAgICAgICAgIGFjdGlvbnMuY2xhc3NMaXN0LmFkZCgnYWN0aW9ucycpO1xuICAgICAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgICAgICAgICBlZGl0LnRleHRDb250ZW50ID0gJ0VkaXQnXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICAgICAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChhY3Rpb25zKTtcblxuICAgICAgICAgICAgdGFza2xpc3QuYXBwZW5kKHRhc2tJdGVtKTtcblxuICAgICAgICAgICAgaWYgKHRhc2suZG9uZSkge1xuICAgICAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrLmRvbmUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgICAgIHNhdmVQcm9qZWN0cygpO1xuICAgIFxuICAgICAgICAgICAgICAgIGlmICh0YXNrLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrLmNvbnRlbnQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZVByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgIHByb2oudGFza3MgPSBwcm9qLnRhc2tzLmZpbHRlcih0ID0+IHQgIT0gdGFzayk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvai50YXNrcyk7XG4gICAgICAgICAgICAgICAgc2F2ZVByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG5cbiAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgdGFza2xpc3QuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBkaXNwbGF5VGFza3MoKTtcblxuXG4gICAgXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0X2gyKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RfY2F0ZWdvcnkpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdF9kdWUpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodGFza2xpc3QpOyAvL2FkZCB0YXNrbGlzdCB0byBwcm9qZWN0IGl0ZW1cblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7IC8vYWRkIHByb2plY3QgdG8gY29udGVudCBkaXZcblxuXG5cblxuICAgLy9GT1JNXG4gICBjb25zdCBjcmVhdGVUb0RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgIGNyZWF0ZVRvRG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS10b2RvJyk7XG4gICBjb25zdCBjcmVhdGVUb0RvRWxlbWVudF9oMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICBjcmVhdGVUb0RvRWxlbWVudF9oMy50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICBjcmVhdGVUb0RvRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVUb0RvRWxlbWVudF9oMyk7XG4gICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgIHRvZG9Gb3JtLmlkID0gJ25ldy10b2RvLWZvcm0nO1xuICAgY29uc3QgdG9kb0Zvcm1faDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgdG9kb0Zvcm1faDQudGV4dENvbnRlbnQgPSBcIldoYXQncyBvbiB5b3VyIHByb2plY3QgbGlzdD9cIjtcbiAgIGNvbnN0IHRvZG9Gb3JtX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgIHRvZG9Gb3JtX2lucHV0LnJlcXVpcmVkID0gJ3RydWUnO1xuICAgdG9kb0Zvcm1faW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgIHRvZG9Gb3JtX2lucHV0Lm5hbWUgPSAnY29udGVudCc7XG4gICB0b2RvRm9ybV9pbnB1dC5pZCA9ICdjb250ZW50JztcbiAgIHRvZG9Gb3JtX2lucHV0LnBsYWNlaG9sZGVyID0gXCJlLmcgbWFrZSBhIHZpZGVvXCI7XG4gICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRm9ybV9oNCk7XG4gICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRm9ybV9pbnB1dCk7XG5cbiAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICAgXG4gICBjb25zdCBwcmlvcml0eV9oMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICBwcmlvcml0eV9oMy50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlfaDMpO1xuXG4gICBjb25zdCBwcmlvcml0eV9sYWJlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIHByaW9yaXR5X2xhYmVscy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbHMnKTsgXG5cbiAgIGNvbnN0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IC8vIHByaW9yaXR5IGxvd1xuICAgY29uc3QgbGFiZWwxX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgIGxhYmVsMV9pbnB1dC5yZXF1aXJlZCA9ICd0cnVlJztcbiAgIGxhYmVsMV9pbnB1dC5jaGVja2VkID0gJ3RydWUnO1xuICAgIGxhYmVsMV9pbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBsYWJlbDFfaW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgbGFiZWwxX2lucHV0LmlkID0gJ3ByaW9yaXR5MSc7XG4gICAgbGFiZWwxX2lucHV0LnZhbHVlID0gJ2xvdyc7XG4gICAgY29uc3QgbG93X3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbG93X3NwYW4uY2xhc3NMaXN0LmFkZCgnYmJsJyk7XG4gICAgbG93X3NwYW4uY2xhc3NMaXN0LmFkZCgnbG93Jyk7XG4gICAgY29uc3QgbG93X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvd19kaXYudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICBsYWJlbDEuYXBwZW5kQ2hpbGQobGFiZWwxX2lucHV0KTtcbiAgICBsYWJlbDEuYXBwZW5kQ2hpbGQobG93X3NwYW4pO1xuICAgIGxhYmVsMS5hcHBlbmRDaGlsZChsb3dfZGl2KTtcbiAgICBwcmlvcml0eV9sYWJlbHMuYXBwZW5kQ2hpbGQobGFiZWwxKTtcblxuICAgIGNvbnN0IGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IC8vIHByaW9yaXR5IG1lZGl1bVxuICAgY29uc3QgbGFiZWwyX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsYWJlbDJfaW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgbGFiZWwyX2lucHV0Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgIGxhYmVsMl9pbnB1dC5pZCA9ICdwcmlvcml0eTInO1xuICAgIGxhYmVsMl9pbnB1dC52YWx1ZSA9ICdtZWRpdW0nO1xuICAgIGNvbnN0IG1lZGl1bV9zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1lZGl1bV9zcGFuLmNsYXNzTGlzdC5hZGQoJ2JibCcpO1xuICAgIG1lZGl1bV9zcGFuLmNsYXNzTGlzdC5hZGQoJ21lZGl1bScpO1xuICAgIGNvbnN0IG1lZGl1bV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZWRpdW1fZGl2LnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgbGFiZWwyLmFwcGVuZENoaWxkKGxhYmVsMl9pbnB1dCk7XG4gICAgbGFiZWwyLmFwcGVuZENoaWxkKG1lZGl1bV9zcGFuKTtcbiAgICBsYWJlbDIuYXBwZW5kQ2hpbGQobWVkaXVtX2Rpdik7XG4gICAgcHJpb3JpdHlfbGFiZWxzLmFwcGVuZENoaWxkKGxhYmVsMik7XG5cbiAgICBjb25zdCBsYWJlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyAvLyBwcmlvcml0eSBoaWdoXG4gICBjb25zdCBsYWJlbDNfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxhYmVsM19pbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBsYWJlbDNfaW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgbGFiZWwzX2lucHV0LmlkID0gJ3ByaW9yaXR5Myc7XG4gICAgbGFiZWwzX2lucHV0LnZhbHVlID0gJ2hpZ2gnO1xuICAgIGNvbnN0IGhpZ2hfc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBoaWdoX3NwYW4uY2xhc3NMaXN0LmFkZCgnYmJsJyk7XG4gICAgaGlnaF9zcGFuLmNsYXNzTGlzdC5hZGQoJ2hpZ2gnKTtcbiAgICBjb25zdCBoaWdoX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhpZ2hfZGl2LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgIGxhYmVsMy5hcHBlbmRDaGlsZChsYWJlbDNfaW5wdXQpO1xuICAgIGxhYmVsMy5hcHBlbmRDaGlsZChoaWdoX3NwYW4pO1xuICAgIGxhYmVsMy5hcHBlbmRDaGlsZChoaWdoX2Rpdik7XG4gICAgcHJpb3JpdHlfbGFiZWxzLmFwcGVuZENoaWxkKGxhYmVsMyk7XG5cbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eV9sYWJlbHMpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcblxuICAgY29uc3Qgc3VibWl0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0X2J0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0X2J0bi52YWx1ZSA9ICdBZGQgVGFzayc7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0X2J0bik7IC8vIGFkZCBzdWJtaXQgYnRuXG4gICAgXG4gICAgY3JlYXRlVG9Eb0VsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9Eb0VsZW1lbnQpO1xuXG4gICAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgICAgIGNvbnN0IHRhc2sgPSB7XG4gICAgICAgICAgICBjb250ZW50OiBlLnRhcmdldC5lbGVtZW50cy5jb250ZW50LnZhbHVlLFxuICAgICAgICAgICAgcHJpb3JpdHk6IGUudGFyZ2V0LmVsZW1lbnRzLnByaW9yaXR5LnZhbHVlLFxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cbiAgICAgICAgfVxuICAgICAgIFxuXG4gICAgICAgIHByb2oudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgc2F2ZVByb2plY3RzKCk7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICBlLnRhcmdldC5yZXNldCgpO1xuICAgIH0pXG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZWxldGVQcm9qZWN0LnR5cGUgPSAnYnV0dG9uJztcbiAgICBkZWxldGVQcm9qZWN0LnZhbHVlID0gJ0RlbGV0ZSBQcm9qZWN0JztcbiAgICBjcmVhdGVUb0RvRWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcblxuICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICByZW1vdmVQcm9qZWN0KHByb2opO1xuICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgaWYgKHByb2plY3RzWzBdKSB7XG4gICAgICAgICAgIHByb2plY3RJdGVtKHByb2plY3RzWzBdKTtcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZhdWx0bGlzdCgpO1xuICAgICAgICBkaXNwbGF5VG9Eb3MoKTtcbiAgICAgICB9XG5cbiAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICB9KVxuXG5cbiAgICByZXR1cm4gY29udGVudERpdjtcbn0iLCJpbXBvcnQgJy4uL3N0eWxlcy9wcm9qZWN0cy5jc3MnO1xuaW1wb3J0IHsgcHJvamVjdHMsIGFkZFByb2plY3QgfSBmcm9tICcuL3RvZG9zJztcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0SXRlbSB9IGZyb20gJy4uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzPnVsJyk7XG4gICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBjb25zdCBwcm9qZWN0X2xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwcm9qZWN0X2xpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpO1xuXG4gICAgcHJvamVjdF9saS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0X2xpKTtcbiAgICB9KTtcblxuICAgIGRpc3BsYXlQcm9qZWN0SXRlbSgpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtcHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3RzX2gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwcm9qZWN0c19oMy50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCc7XG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNfaDMpO1xuXG4gICAgLy9mb3JtXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcHJvamVjdEZvcm0uaWQgPSAncHJvamVjdC1mb3JtJztcbiAgICBjb25zdCBwcm9qZWN0Rm9ybV9oNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgcHJvamVjdEZvcm1faDQudGV4dENvbnRlbnQgPSBcIldoYXQncyB5b3VyIHByb2plY3QncyB0aXRsZT9cIjtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdEZvcm1faW5wdXQucmVxdWlyZWQgPSAndHJ1ZSc7XG4gICAgcHJvamVjdEZvcm1faW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBwcm9qZWN0Rm9ybV9pbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgICBwcm9qZWN0Rm9ybV9pbnB1dC5pZCA9ICd0aXRsZSc7XG4gICAgcHJvamVjdEZvcm1faW5wdXQucGxhY2Vob2xkZXIgPSBcImUuZyBiaXJ0aGRheSBwYXJ0eSBwbGFubmluZ1wiO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RGb3JtX2g0KTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybV9pbnB1dCk7XG5cbiAgICAvL29wdGlvbnNcbiAgICBjb25zdCBvcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vb3B0aW9ucyBkaXZcbiAgICBvcHRpb25zRGl2LmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcblxuICAgIGNvbnN0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IC8vIG9wdGlvbiBidXNpbmVzc1xuICAgIGNvbnN0IGxhYmVsMV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGFiZWwxX2lucHV0LmNoZWNrZWQgPSAndHJ1ZSc7XG4gICAgbGFiZWwxX2lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgIGxhYmVsMV9pbnB1dC5uYW1lID0gJ2NhdGVnb3J5JztcbiAgICBsYWJlbDFfaW5wdXQuaWQgPSAnY2F0ZWdvcnkxJztcbiAgICBsYWJlbDFfaW5wdXQudmFsdWUgPSAnYnVzaW5lc3MnO1xuICAgIGNvbnN0IGJ1c2luZXNzX3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYnVzaW5lc3Nfc3Bhbi5jbGFzc0xpc3QuYWRkKCdidWJibGUnKTtcbiAgICBidXNpbmVzc19zcGFuLmNsYXNzTGlzdC5hZGQoJ2J1c2luZXNzJyk7XG4gICAgY29uc3QgYnVzaW5lc3NfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVzaW5lc3NfZGl2LnRleHRDb250ZW50ID0gJ0J1c2luZXNzJztcbiAgICBsYWJlbDEuYXBwZW5kQ2hpbGQobGFiZWwxX2lucHV0KTtcbiAgICBsYWJlbDEuYXBwZW5kQ2hpbGQoYnVzaW5lc3Nfc3Bhbik7XG4gICAgbGFiZWwxLmFwcGVuZENoaWxkKGJ1c2luZXNzX2Rpdik7XG4gICAgb3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChsYWJlbDEpO1xuXG4gICAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgLy8gb3B0aW9uIHBlcnNvbmFsXG4gICAgY29uc3QgbGFiZWwyX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsYWJlbDJfaW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgbGFiZWwyX2lucHV0Lm5hbWUgPSAnY2F0ZWdvcnknO1xuICAgIGxhYmVsMl9pbnB1dC5pZCA9ICdjYXRlZ29yeTInO1xuICAgIGxhYmVsMl9pbnB1dC52YWx1ZSA9ICdwZXJzb25hbCc7XG4gICAgY29uc3QgcGVyc29uYWxfc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwZXJzb25hbF9zcGFuLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZScpO1xuICAgIHBlcnNvbmFsX3NwYW4uY2xhc3NMaXN0LmFkZCgncGVyc29uYWwnKTtcbiAgICBjb25zdCBwZXJzb25hbF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwZXJzb25hbF9kaXYudGV4dENvbnRlbnQgPSAnUGVyc29uYWwnO1xuICAgIGxhYmVsMi5hcHBlbmRDaGlsZChsYWJlbDJfaW5wdXQpO1xuICAgIGxhYmVsMi5hcHBlbmRDaGlsZChwZXJzb25hbF9zcGFuKTtcbiAgICBsYWJlbDIuYXBwZW5kQ2hpbGQocGVyc29uYWxfZGl2KTtcbiAgICBvcHRpb25zRGl2LmFwcGVuZENoaWxkKGxhYmVsMik7XG5cbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChvcHRpb25zRGl2KTsgLy8gYWRkIG9wdGlvbnMgZGl2XG5cbiAgICAvL0RVRSBEQVRFIERJVlxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgZHVlRGF0ZS5pZCA9ICdkdWUtZGF0ZSc7XG4gICAgY29uc3QgZHVlRGF0ZV9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZHVlRGF0ZV9sYWJlbC5mb3IgPSAnZHVlRGF0ZSc7XG4gICAgZHVlRGF0ZV9sYWJlbC50ZXh0Q29udGVudCA9ICdEdWU6JztcbiAgICBjb25zdCBkdWVEYXRlX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlX2lucHV0LnJlcXVpcmVkID0gJ3RydWUnO1xuICAgIGR1ZURhdGVfaW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkdWVEYXRlX2lucHV0LmlkID0gJ2R1ZURhdGUnO1xuICAgIGR1ZURhdGVfaW5wdXQubmFtZSA9ICdkdWVEYXRlJztcbiAgICBkdWVEYXRlLmFwcGVuZENoaWxkKGR1ZURhdGVfbGFiZWwpO1xuICAgIGR1ZURhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZV9pbnB1dCk7XG5cbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTsgLy9hZGQgZHVlLWRhdGVcblxuICAgIC8vU1VCTUlUIFBST0pFQ1RcbiAgICBjb25zdCBzdWJtaXRfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXRfYnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRfYnRuLnZhbHVlID0gJ0NyZWF0ZSBhIFByb2plY3QnO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdF9idG4pOyAvLyBhZGQgc3VibWl0IGJ0blxuXG4gICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0ID0ge1xuICAgICAgICAgICAgdGl0bGU6IGUudGFyZ2V0LmVsZW1lbnRzLnRpdGxlLnZhbHVlLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IGUudGFyZ2V0LmVsZW1lbnRzLmNhdGVnb3J5LnZhbHVlLFxuICAgICAgICAgICAgdGFza3M6IFtdLFxuICAgICAgICAgICAgZHVlRGF0ZTogZS50YXJnZXQuZWxlbWVudHMuZHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIGUudGFyZ2V0LnJlc2V0KCk7XG4gICAgfSlcblxuXG5cblxuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcbn0iLCJpbXBvcnQgJy4uL3N0eWxlcy9ub3Rlcy5jc3MnO1xuaW1wb3J0IHsgbm90ZXMsIGFkZE5vdGUsIHJlbW92ZU5vdGUsIHNhdmVOb3RlcyB9IGZyb20gXCIuL3RvZG9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHF1aWNrTm90ZXMoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IG5vdGVzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBub3Rlc0VsZW1lbnQuaWQgPSAnbm90ZXMnO1xuXG4gICAgbm90ZXMuZm9yRWFjaChub3RlID0+IHtcbiAgICAgICAgY29uc3Qgbm90ZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9ub3RlIGl0ZW1cbiAgICAgICAgbm90ZUl0ZW0uY2xhc3NMaXN0LmFkZCgnbm90ZS1pdGVtJyk7XG5cbiAgICAgICAgY29uc3QgZGF0ZV9oMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGRhdGVfaDMuaW5uZXJIVE1MID0gbm90ZS5kYXRlO1xuXG4gICAgICAgIGNvbnN0IG5vdGVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBub3RlX2lucHV0Lm5hbWUgPSAndGV4dGFyZWEnO1xuICAgICAgICBub3RlX2lucHV0LnZhbHVlID0gYCR7bm90ZS5jb250ZW50fWA7XG4gICAgICAgIG5vdGVfaW5wdXQucGxhY2Vob2xkZXIgPSAndHlwZSB5b3VyIG5vdGUgaGVyZS4uJztcblxuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1ub3RlJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnY3Jvc3MnKTtcbiAgICAgICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKHNwYW4pO1xuXG5cbiAgICAgICAgbm90ZUl0ZW0uYXBwZW5kQ2hpbGQoZGF0ZV9oMyk7XG4gICAgICAgIG5vdGVJdGVtLmFwcGVuZENoaWxkKG5vdGVfaW5wdXQpO1xuICAgICAgICBub3RlSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICBub3Rlc0VsZW1lbnQuYXBwZW5kQ2hpbGQobm90ZUl0ZW0pO1xuXG5cbiAgICAgICAgbm90ZV9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZSA9PiB7XG4gICAgICAgICAgICBub3RlLmNvbnRlbnQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHNhdmVOb3RlcygpO1xuICAgICAgICAgICAgcXVpY2tOb3RlcygpO1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICByZW1vdmVOb3RlKG5vdGUpO1xuICAgICAgICAgICAgc2F2ZU5vdGVzKCk7XG4gICAgICAgICAgICBxdWlja05vdGVzKCk7XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGROb3RlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBhZGROb3RlQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBhZGROb3RlQnRuLnZhbHVlID0gJ0NyZWF0ZSBOb3RlJztcbiAgICBub3Rlc0VsZW1lbnQuYXBwZW5kQ2hpbGQoYWRkTm90ZUJ0bik7XG5cbiAgICBhZGROb3RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdGUgPSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpXG4gICAgICAgIH1cbiAgICAgICAgYWRkTm90ZShub3RlKTtcbiAgICAgICAgcXVpY2tOb3RlcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhub3Rlcyk7XG4gICAgfSlcblxuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChub3Rlc0VsZW1lbnQpO1xuICAgIFxuICAgIHJldHVybiBjb250ZW50RGl2O1xufSIsImltcG9ydCAnLi4vc3R5bGVzL3NpZGViYXIuY3NzJztcbmltcG9ydCBub3RlUG5nIGZyb20gJy4uL2Fzc2V0cy9ub3RlLnBuZyc7XG5pbXBvcnQgdG9kb1BuZyBmcm9tICcuLi9hc3NldHMvdG9kby5wbmcnO1xuaW1wb3J0IHByb2plY3RzUG5nIGZyb20gJy4uL2Fzc2V0cy9wcm9qZWN0cy5wbmcnO1xuXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vdG9kb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWRlYmFyKCkge1xuICAgIC8qTkFWIE1FTlUqL1xuICAgIGNvbnN0IHNpZGViYXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKTtcbiAgICBzaWRlYmFyRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGdyZWV0aW5nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBncmVldGluZyBlbGVtZW50XG4gICAgZ3JlZXRpbmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyZWV0aW5nJyk7XG4gICAgY29uc3QgZ3JlZXRpbmdfaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGdyZWV0aW5nX2gyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgZ3JlZXRpbmdfaDIuaW5uZXJIVE1MID0gXCJHcmVldGluZ3MsIFwiO1xuICAgIGNvbnN0IGdyZWV0aW5nX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBncmVldGluZ19pbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGdyZWV0aW5nX2lucHV0LmlkID0gJ25hbWUnO1xuICAgIGdyZWV0aW5nX2lucHV0Lm1heExlbmd0aCA9IDEyO1xuICAgIGdyZWV0aW5nX2lucHV0LnNpemUgPSAxMjtcbiAgICBncmVldGluZ19pbnB1dC5wbGFjZWhvbGRlciA9ICdOYW1lIGhlcmUnO1xuICAgIGdyZWV0aW5nX2gyLmFwcGVuZENoaWxkKGdyZWV0aW5nX2lucHV0KTtcbiAgICBncmVldGluZ0VsZW1lbnQuYXBwZW5kQ2hpbGQoZ3JlZXRpbmdfaDIpO1xuICAgIHNpZGViYXJFbGVtZW50LmFwcGVuZENoaWxkKGdyZWV0aW5nRWxlbWVudCk7IC8vIGFkZCBncmVldGluZyBlbGVtXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcblxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpIHx8ICcnO1xuICAgICAgICBuYW1lSW5wdXQudmFsdWUgPSB1c2VybmFtZTtcblxuICAgICAgICBuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0pXG5cbiAgICB9KVxuXG4gICAgLyogTUVOVSAqL1xuICAgIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGxpX2RlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpX2RlZmF1bHQuaWQgPSAnZGVmYXVsdCc7XG4gICAgY29uc3QgdG9kb0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB0b2RvSWNvbi5zcmMgPSB0b2RvUG5nO1xuICAgIGNvbnN0IGxpX2RlZmF1bHRfYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaV9kZWZhdWx0X2EudGV4dENvbnRlbnQgPSAnVG8tRG8gTGlzdCc7XG4gICAgbGlfZGVmYXVsdC5hcHBlbmRDaGlsZCh0b2RvSWNvbik7XG4gICAgbGlfZGVmYXVsdC5hcHBlbmRDaGlsZChsaV9kZWZhdWx0X2EpO1xuICAgIGNvbnN0IGxpX3Byb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaV9wcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHByb2plY3RzSWNvbi5zcmMgPSBwcm9qZWN0c1BuZztcbiAgICBsaV9wcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0ljb24pO1xuICAgIGxpX3Byb2plY3RzRGl2LmlubmVySFRNTCArPSAnTXkgUHJvamVjdHMnO1xuICAgIGxpX3Byb2plY3RzLmlkID0gJ3Byb2plY3RzJztcbiAgICBsaV9wcm9qZWN0cy5hcHBlbmRDaGlsZChsaV9wcm9qZWN0c0Rpdik7XG4gICAgY29uc3QgcHJvamVjdHNVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cblxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RfbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBwcm9qZWN0X2xpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpO1xuICAgIFxuICAgICAgICBwcm9qZWN0X2xpLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuICAgICAgICBwcm9qZWN0c1VsLmFwcGVuZENoaWxkKHByb2plY3RfbGkpO1xuICAgIH0pO1xuICAgIFxuICAgIGxpX3Byb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzVWwpO1xuXG4gICAgLy8gY29uc3QgcHJvamVjdHNVbF9hZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0LmlkID0gJ2FkZC1wcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0LnR5cGUgPSAnYnV0dG9uJztcbiAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgICBsaV9wcm9qZWN0cy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcblxuICAgIGNvbnN0IGxpX25vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaV9ub3Rlcy5pZCA9ICdsaS1ub3Rlcyc7XG4gICAgY29uc3Qgbm90ZXNJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbm90ZXNJY29uLnNyYyA9IG5vdGVQbmc7XG4gICAgY29uc3QgbGlfbm90ZXNfYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaV9ub3Rlc19hLnRleHRDb250ZW50ID0gJ1F1aWNrIE5vdGVzJztcbiAgICBsaV9ub3Rlcy5hcHBlbmRDaGlsZChub3Rlc0ljb24pO1xuICAgIGxpX25vdGVzLmFwcGVuZENoaWxkKGxpX25vdGVzX2EpO1xuXG4gICAgXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChsaV9kZWZhdWx0KTtcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKGxpX3Byb2plY3RzKTtcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKGxpX25vdGVzKTtcbiAgICBzaWRlYmFyRWxlbWVudC5hcHBlbmRDaGlsZChuYXZNZW51KTtcblxuXG4gICAgcmV0dXJuIHNpZGViYXJFbGVtZW50O1xufSIsImV4cG9ydCBsZXQgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKSB8fCBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb2RvcygpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9zKCkge1xuICByZXR1cm4gdG9kb3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvKHRvZG8pIHtcbiAgdG9kb3MucHVzaCh0b2RvKTtcbiAgc2F2ZVRvZG9zKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2RvKHRvZG8pIHtcbiAgdG9kb3MgPSB0b2Rvcy5maWx0ZXIodCA9PiB0ICE9IHRvZG8pO1xuICBzYXZlVG9kb3MoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVG9kb3MoKSB7XG4gIHRvZG9zID0gW107XG4gIHNhdmVUb2RvcygpO1xufVxuXG4vKiBQUk9KRUNUUyAqL1xuZXhwb3J0IGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHx8IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVByb2plY3RzKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gIHJldHVybiBwcm9qZWN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICBzYXZlUHJvamVjdHMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xuICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcih0ID0+IHQgIT0gcHJvamVjdCk7XG4gIHNhdmVQcm9qZWN0cygpO1xufVxuXG4vKiBub3RlcyAqL1xuXG5leHBvcnQgbGV0IG5vdGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXMnKSkgfHwgW107XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTm90ZXMoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KG5vdGVzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3RlcygpIHtcbiAgcmV0dXJuIG5vdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTm90ZShub3RlKSB7XG4gIG5vdGVzLnB1c2gobm90ZSk7XG4gIHNhdmVOb3RlcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm90ZShub3RlKSB7XG4gIG5vdGVzID0gbm90ZXMuZmlsdGVyKG4gPT4gbiAhPSBub3RlKVxuICBzYXZlTm90ZXMoKTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vY29tcG9uZW50cy9zaWRlYmFyJztcbmltcG9ydCBmb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgZGVmYXVsdGxpc3QgZnJvbSAnLi9jb21wb25lbnRzL2RlZmF1bHRMaXN0JztcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0cyc7XG5pbXBvcnQgcXVpY2tOb3RlcyBmcm9tICcuL2NvbXBvbmVudHMvcXVpY2tOb3Rlcyc7XG5pbXBvcnQgeyBkaXNwbGF5VG9Eb3MgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlzcGxheVRvRG8nO1xuaW1wb3J0IHsgcHJvamVjdEl0ZW0gfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvamVjdEl0ZW0nO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9kb3MnO1xuXG5oZWFkZXIoKTtcbnNpZGViYXIoKTtcbmZvb3RlcigpO1xuZGVmYXVsdGxpc3QoKTtcbmRpc3BsYXlUb0RvcygpO1xuXG5cbi8qIE5BViBCQVIgKi9cbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlPnVsJyk7XG5uYXZCYXIucXVlcnlTZWxlY3RvcignbGkjZGVmYXVsdD5hJykuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbm5hdkJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIFxuXG4gICAgY29uc3QgcHJldmlvdXNMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuICAgIGlmIChlLnRhcmdldC5pbm5lckhUTUwgPT09ICdUby1EbyBMaXN0Jykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBwcmV2aW91c0xpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGRlZmF1bHRsaXN0KCk7XG4gICAgICAgIGRpc3BsYXlUb0RvcygpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaW5uZXJIVE1MID09PSAnUXVpY2sgTm90ZXMnKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHByZXZpb3VzTGkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgcXVpY2tOb3RlcygpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaW5uZXJIVE1MID09PSAnQWRkIFByb2plY3QnKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHByZXZpb3VzTGkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdCgpO1xuICAgIH1cblxufSlcblxuLy9ESVNQTEFZIFBST0pFQ1RcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdEl0ZW0oKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHM+dWwnKS5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gJyc7XG4gICAgXG4gICAgICAgICAgICAgICAgcHJvamVjdEl0ZW0ocHJvamVjdHNbaV0pO1xuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgXG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZGlzcGxheVByb2plY3RJdGVtKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9