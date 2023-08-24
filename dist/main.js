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
    grid-template-rows: max-content 5fr min-content;

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
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
}

.header-logo {
    grid-column: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;

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

.burger-menu {
    display: none;

    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
    height: 35px;
    width: 35px;
    cursor: pointer;
    padding: 6px 3px;
    margin: 0.5rem 1rem;
    border: 1px solid var(--dark);
    border-radius: 0.5rem;


}

.burger-menu:active {
    border-color: var(--primary);

    .bar {
        background-color: var(--primary);
    }
}

span.bar {
    width: 25px;
    height: 3px;
    background-color: var(--dark);
    border-radius: 0.5rem;
}


/*MAIN*/

aside {
    background-color: #8ed2c9;
}

#main {
    display: grid;
    grid-template-columns: minmax(min-content, 1fr) 2fr;
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

/*----------------*/

@media only screen and (max-width: 768px) {
    .burger-menu {
        display: flex;
    }

    #main {
        grid-template-columns: 1fr;
    }

    aside {
        height: 0px;
        overflow: hidden;
        transition: height 0.3s ease-in-out;
        box-shadow: var(--shadow);
    }

    .burg-active {
        border-color: var(--primary);

        .bar {
            background-color: var(--primary);
        }
    }

    .active {
        display: block;
        height: 285px;
    }

    .header-logo {
        grid-column: 2/-1;
        justify-self: end;
    }

    footer {
        flex-direction: column;
        align-items: center;
    }

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,4CAAkD;AACtD;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,0BAA0B;IAC1B,gBAAgB;IAChB,eAAe;IACf,0BAA0B;IAC1B,YAAY;IACZ,wCAAwC;;IAExC,qDAAqD;IACrD,oDAAoD;IACpD,kDAAkD;;IAElD,wBAAwB;IACxB,0BAA0B;IAC1B,qBAAqB;;IAErB,+CAA+C;IAC/C,kDAAkD;IAClD,gDAAgD;;AAEpD;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,+CAA+C;IAC/C,+CAA+C;;IAE/C,aAAa;IACb,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA,SAAS;AACT;IACI,yBAAyB;IACzB,yBAAyB;IACzB,UAAU;IACV,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;;IAEb,mBAAmB;IACnB,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,YAAY;IACZ,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,6BAA6B;IAC7B,qBAAqB;;;AAGzB;;AAEA;IACI,4BAA4B;;IAE5B;QACI,gCAAgC;IACpC;AACJ;;AAEA;IACI,WAAW;IACX,WAAW;IACX,6BAA6B;IAC7B,qBAAqB;AACzB;;;AAGA,OAAO;;AAEP;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mDAAmD;AACvD;;;;AAIA,SAAS;AACT;IACI,yBAAyB;IACzB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA,mBAAmB;;AAEnB;IACI;QACI,aAAa;IACjB;;IAEA;QACI,0BAA0B;IAC9B;;IAEA;QACI,WAAW;QACX,gBAAgB;QAChB,mCAAmC;QACnC,yBAAyB;IAC7B;;IAEA;QACI,4BAA4B;;QAE5B;YACI,gCAAgC;QACpC;IACJ;;IAEA;QACI,cAAc;QACd,aAAa;IACjB;;IAEA;QACI,iBAAiB;QACjB,iBAAiB;IACrB;;IAEA;QACI,sBAAsB;QACtB,mBAAmB;IACvB;;AAEJ","sourcesContent":["@font-face {\n    font-family: montserrat;\n    src: url(./fonts/Montserrat-VariableFont_wght.ttf);\n}\n\n:root {\n    --primary: #00aaa0;\n    --business: #3a82ee;\n    --personal: var(--primary);\n    --light: #e0e5e4;\n    --dark: #313154;\n    --danger: rgb(255, 91, 87);\n    --grey: #888;\n    --shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n\n    --business-glow: 0px 0px 4px rgba(58, 130, 238, 0.75);\n    --personal-glow: 0px 0px 4px rgba(0, 170, 160, 0.75);\n    --danger-glow: 0px 0px 4px rgba(255, 91, 87, 0.75);\n\n    --low: rgba(97, 255, 66);\n    --medium: rgb(244, 252, 2);\n    --high: var(--danger);\n\n    --low-glow: 0px 0px 4px rgba(97, 255, 66, 0.75);\n    --medium-glow: 0px 0px 4px rgba(244, 252, 2, 0.75);\n    --high-glow: 0px 0px 4px rgba(255, 91, 87, 0.75);\n    ;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: montserrat, sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: minmax(min-content, 1fr);\n    grid-template-rows: max-content 5fr min-content;\n\n    height: 100vh;\n    color: var(--dark);\n    background-color: var(--light);\n}\n\nsection {\n    margin-top: 2em;\n    margin-bottom: 2em;\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n}\n\nh3 {\n    color: var(--dark);\n    font-size: 1em;\n    font-weight: 400;\n    margin-bottom: 0.5em;\n}\n\nh4 {\n    color: var(--grey);\n    font-size: 0.875em;\n    font-weight: 700;\n    margin-bottom: 0.75em;\n}\n\n/*HEADER*/\nheader {\n    background-color: #fcf4d9;\n    box-shadow: var(--shadow);\n    z-index: 1;\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n}\n\n.header-logo {\n    grid-column: 2/3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\nheader h1 {\n    margin: 0.5rem 1rem;\n    text-transform: uppercase;\n    font-weight: 400;\n}\n\nheader img {\n    height: 3rem;\n    width: 3rem;\n}\n\n.burger-menu {\n    display: none;\n\n    /* display: flex; */\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3px;\n    height: 35px;\n    width: 35px;\n    cursor: pointer;\n    padding: 6px 3px;\n    margin: 0.5rem 1rem;\n    border: 1px solid var(--dark);\n    border-radius: 0.5rem;\n\n\n}\n\n.burger-menu:active {\n    border-color: var(--primary);\n\n    .bar {\n        background-color: var(--primary);\n    }\n}\n\nspan.bar {\n    width: 25px;\n    height: 3px;\n    background-color: var(--dark);\n    border-radius: 0.5rem;\n}\n\n\n/*MAIN*/\n\naside {\n    background-color: #8ed2c9;\n}\n\n#main {\n    display: grid;\n    grid-template-columns: minmax(min-content, 1fr) 2fr;\n}\n\n\n\n/*FOOTER*/\nfooter {\n    background-color: #d55b3e;\n    display: flex;\n    justify-content: space-between;\n}\n\nfooter div {\n    margin: 0.2rem 1rem;\n}\n\nfooter img {\n    width: 15px;\n    margin: 0 5px;\n}\n\nfooter a {\n    /* text-decoration: none; */\n    color: var(--dark);\n\n}\n\n.footer-container {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n}\n\n/*----------------*/\n\n@media only screen and (max-width: 768px) {\n    .burger-menu {\n        display: flex;\n    }\n\n    #main {\n        grid-template-columns: 1fr;\n    }\n\n    aside {\n        height: 0px;\n        overflow: hidden;\n        transition: height 0.3s ease-in-out;\n        box-shadow: var(--shadow);\n    }\n\n    .burg-active {\n        border-color: var(--primary);\n\n        .bar {\n            background-color: var(--primary);\n        }\n    }\n\n    .active {\n        display: block;\n        height: 285px;\n    }\n\n    .header-logo {\n        grid-column: 2/-1;\n        justify-self: end;\n    }\n\n    footer {\n        flex-direction: column;\n        align-items: center;\n    }\n\n}"],"sourceRoot":""}]);
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

input[type="date"] {
    font-size: 1.125rem;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/projects.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,sBAAsB;IACtB,qBAAqB;IACrB,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,cAAc;IACd,qBAAqB;AACzB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,sBAAsB;IACtB,qBAAqB;IACrB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;IAClB,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,oBAAoB;IACpB,WAAW;IACX,gCAAgC;IAChC,qBAAqB;IACrB,gCAAgC;IAChC,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB","sourcesContent":["#project-form input[type=\"text\"] {\n    display: block;\n    width: 100%;\n    font-size: 1.125rem;\n    padding: 1rem 1.5rem;\n    color: var(--dark);\n    background-color: #fff;\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow);\n    margin-bottom: 1.5rem;\n}\n\n#project-form .options {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 1rem;\n    margin-bottom: 1.5rem;\n}\n\n#project-form .options label,\n#project-form #due-date {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 1.5rem;\n    background-color: #fff;\n    border-radius: 0.5rem;\n    box-shadow: var(--shadow);\n    cursor: pointer;\n}\n\n#project-form #due-date {\n    margin-bottom: 1.5rem;\n}\n\ninput[type=\"date\"] {\n    font-size: 1.125rem;\n}\n\n#project-form #dueDate input {\n    font-size: 1.125rem;\n    border: 1px solid var(--grey);\n    color: var(--dark);\n    border-radius: 0.5rem;\n    padding: 0.5rem 1rem;\n}\n\n#project-form input[type=\"submit\"] {\n    display: block;\n    width: 100%;\n    font-size: 1.125rem;\n    padding: 1rem 1.5rem;\n    color: #fff;\n    background-color: var(--primary);\n    border-radius: 0.5rem;\n    box-shadow: var(--personal-glow);\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n}\n\n#project-form input[type=\"submit\"]:hover {\n    opacity: 0.75;\n}"],"sourceRoot":""}]);
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

    _todos__WEBPACK_IMPORTED_MODULE_0__.todos.sort((a, b) => b.createdAt - a.createdAt).forEach(todo => {
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




/* TO-DO FORM */
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

    const burgerMenu = document.createElement('div');
    burgerMenu.classList.add('burger-menu');
    burgerMenu.id = 'burger';
    for (let i = 0; i < 3; i++) {
        const bar = document.createElement('span');
        bar.classList.add('bar');
        burgerMenu.appendChild(bar);
    }

    const headerIcon = new Image();
    headerIcon.src = _assets_logo_header_png__WEBPACK_IMPORTED_MODULE_0__;
    const header_h1 = document.createElement('h1');
    header_h1.textContent = "To-Do-Things";
    const headerLogo = document.createElement('div');
    headerLogo.classList.add('header-logo');
    headerLogo.appendChild(headerIcon);
    headerLogo.appendChild(header_h1);

    headerElement.appendChild(burgerMenu);
    headerElement.appendChild(headerLogo);

    burgerMenu.addEventListener("click", () => {
        const sideBar = document.querySelector('aside');
        sideBar.classList.toggle("active");
        burgerMenu.classList.toggle("burg-active")
    });

    

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

    dueDate.addEventListener('click', e => {
            const input  = dueDate.querySelector('input');
            input.focus();
    })

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
            const previousLi = document.querySelector('.selected');
            previousLi.classList.remove('selected');
            projectList[i].classList.add('selected');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxlQUFlLE9BQU8sS0FBSyxhQUFhLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFFBQVEsV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxTQUFTLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvR0FBb0csWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8s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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFHQUFxRyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FB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QUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9zdHlsZXMvZm9ybS1hbmQtdG9kb2xpc3QuY3NzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL25vdGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9wcm9qZWN0SXRlbS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9zdHlsZXMvcHJvamVjdHMuY3NzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL3NpZGViYXIuY3NzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL2Zvcm0tYW5kLXRvZG9saXN0LmNzcz85ZjkxIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL25vdGVzLmNzcz9jOWJjIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL3Byb2plY3RJdGVtLmNzcz9lNDBjIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL3Byb2plY3RzLmNzcz8xYWFhIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL3NpZGViYXIuY3NzPzQ4MTYiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXlUb0RvLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9xdWlja05vdGVzLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuOnJvb3Qge1xuICAgIC0tcHJpbWFyeTogIzAwYWFhMDtcbiAgICAtLWJ1c2luZXNzOiAjM2E4MmVlO1xuICAgIC0tcGVyc29uYWw6IHZhcigtLXByaW1hcnkpO1xuICAgIC0tbGlnaHQ6ICNlMGU1ZTQ7XG4gICAgLS1kYXJrOiAjMzEzMTU0O1xuICAgIC0tZGFuZ2VyOiByZ2IoMjU1LCA5MSwgODcpO1xuICAgIC0tZ3JleTogIzg4ODtcbiAgICAtLXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gICAgLS1idXNpbmVzcy1nbG93OiAwcHggMHB4IDRweCByZ2JhKDU4LCAxMzAsIDIzOCwgMC43NSk7XG4gICAgLS1wZXJzb25hbC1nbG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDE3MCwgMTYwLCAwLjc1KTtcbiAgICAtLWRhbmdlci1nbG93OiAwcHggMHB4IDRweCByZ2JhKDI1NSwgOTEsIDg3LCAwLjc1KTtcblxuICAgIC0tbG93OiByZ2JhKDk3LCAyNTUsIDY2KTtcbiAgICAtLW1lZGl1bTogcmdiKDI0NCwgMjUyLCAyKTtcbiAgICAtLWhpZ2g6IHZhcigtLWRhbmdlcik7XG5cbiAgICAtLWxvdy1nbG93OiAwcHggMHB4IDRweCByZ2JhKDk3LCAyNTUsIDY2LCAwLjc1KTtcbiAgICAtLW1lZGl1bS1nbG93OiAwcHggMHB4IDRweCByZ2JhKDI0NCwgMjUyLCAyLCAwLjc1KTtcbiAgICAtLWhpZ2gtZ2xvdzogMHB4IDBweCA0cHggcmdiYSgyNTUsIDkxLCA4NywgMC43NSk7XG4gICAgO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0LCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgNWZyIG1pbi1jb250ZW50O1xuXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG5zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgIHBhZGRpbmctbGVmdDogMS41ZW07XG4gICAgcGFkZGluZy1yaWdodDogMS41ZW07XG59XG5cbmgzIHtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuaDQge1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgICBmb250LXNpemU6IDAuODc1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XG59XG5cbi8qSEVBREVSKi9cbmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjRkOTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyO1xufVxuXG4uaGVhZGVyLWxvZ28ge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cbmhlYWRlciBoMSB7XG4gICAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmhlYWRlciBpbWcge1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogM3JlbTtcbn1cblxuLmJ1cmdlci1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA2cHggM3B4O1xuICAgIG1hcmdpbjogMC41cmVtIDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyayk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuXG5cbn1cblxuLmJ1cmdlci1tZW51OmFjdGl2ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblxuICAgIC5iYXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG59XG5cbnNwYW4uYmFyIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cblxuLypNQUlOKi9cblxuYXNpZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZWQyYzk7XG59XG5cbiNtYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LCAxZnIpIDJmcjtcbn1cblxuXG5cbi8qRk9PVEVSKi9cbmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1NWIzZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuZm9vdGVyIGRpdiB7XG4gICAgbWFyZ2luOiAwLjJyZW0gMXJlbTtcbn1cblxuZm9vdGVyIGltZyB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuZm9vdGVyIGEge1xuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgKi9cbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG5cbn1cblxuLmZvb3Rlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5idXJnZXItbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgI21haW4ge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbiAgICBhc2lkZSB7XG4gICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgICB9XG5cbiAgICAuYnVyZy1hY3RpdmUge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuXG4gICAgICAgIC5iYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aXZlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMjg1cHg7XG4gICAgfVxuXG4gICAgLmhlYWRlci1sb2dvIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvLTE7XG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIH1cblxuICAgIGZvb3RlciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRDQUFrRDtBQUN0RDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWix3Q0FBd0M7O0lBRXhDLHFEQUFxRDtJQUNyRCxvREFBb0Q7SUFDcEQsa0RBQWtEOztJQUVsRCx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHFCQUFxQjs7SUFFckIsK0NBQStDO0lBQy9DLGtEQUFrRDtJQUNsRCxnREFBZ0Q7O0FBRXBEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtDQUErQztJQUMvQywrQ0FBK0M7O0lBRS9DLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBLFNBQVM7QUFDVDtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTs7SUFFYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHFCQUFxQjs7O0FBR3pCOztBQUVBO0lBQ0ksNEJBQTRCOztJQUU1QjtRQUNJLGdDQUFnQztJQUNwQztBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOzs7QUFHQSxPQUFPOztBQUVQO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1EQUFtRDtBQUN2RDs7OztBQUlBLFNBQVM7QUFDVDtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLG1DQUFtQztRQUNuQyx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSw0QkFBNEI7O1FBRTVCO1lBQ0ksZ0NBQWdDO1FBQ3BDO0lBQ0o7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcXG4gICAgc3JjOiB1cmwoLi9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5OiAjMDBhYWEwO1xcbiAgICAtLWJ1c2luZXNzOiAjM2E4MmVlO1xcbiAgICAtLXBlcnNvbmFsOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgLS1saWdodDogI2UwZTVlNDtcXG4gICAgLS1kYXJrOiAjMzEzMTU0O1xcbiAgICAtLWRhbmdlcjogcmdiKDI1NSwgOTEsIDg3KTtcXG4gICAgLS1ncmV5OiAjODg4O1xcbiAgICAtLXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcblxcbiAgICAtLWJ1c2luZXNzLWdsb3c6IDBweCAwcHggNHB4IHJnYmEoNTgsIDEzMCwgMjM4LCAwLjc1KTtcXG4gICAgLS1wZXJzb25hbC1nbG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDE3MCwgMTYwLCAwLjc1KTtcXG4gICAgLS1kYW5nZXItZ2xvdzogMHB4IDBweCA0cHggcmdiYSgyNTUsIDkxLCA4NywgMC43NSk7XFxuXFxuICAgIC0tbG93OiByZ2JhKDk3LCAyNTUsIDY2KTtcXG4gICAgLS1tZWRpdW06IHJnYigyNDQsIDI1MiwgMik7XFxuICAgIC0taGlnaDogdmFyKC0tZGFuZ2VyKTtcXG5cXG4gICAgLS1sb3ctZ2xvdzogMHB4IDBweCA0cHggcmdiYSg5NywgMjU1LCA2NiwgMC43NSk7XFxuICAgIC0tbWVkaXVtLWdsb3c6IDBweCAwcHggNHB4IHJnYmEoMjQ0LCAyNTIsIDIsIDAuNzUpO1xcbiAgICAtLWhpZ2gtZ2xvdzogMHB4IDBweCA0cHggcmdiYSgyNTUsIDkxLCA4NywgMC43NSk7XFxuICAgIDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCA1ZnIgbWluLWNvbnRlbnQ7XFxuXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMS41ZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNWVtO1xcbn1cXG5cXG5oMyB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG5oNCB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XFxufVxcblxcbi8qSEVBREVSKi9cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmNGQ5O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyO1xcbn1cXG5cXG4uaGVhZGVyLWxvZ28ge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDNyZW07XFxufVxcblxcbi5idXJnZXItbWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA2cHggM3B4O1xcbiAgICBtYXJnaW46IDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcblxcbn1cXG5cXG4uYnVyZ2VyLW1lbnU6YWN0aXZlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG5cXG4gICAgLmJhciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgfVxcbn1cXG5cXG5zcGFuLmJhciB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuXFxuLypNQUlOKi9cXG5cXG5hc2lkZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZWQyYzk7XFxufVxcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgobWluLWNvbnRlbnQsIDFmcikgMmZyO1xcbn1cXG5cXG5cXG5cXG4vKkZPT1RFUiovXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1NWIzZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5mb290ZXIgZGl2IHtcXG4gICAgbWFyZ2luOiAwLjJyZW0gMXJlbTtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgKi9cXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcblxcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNnB4O1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLmJ1cmdlci1tZW51IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgI21haW4ge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgYXNpZGUge1xcbiAgICAgICAgaGVpZ2h0OiAwcHg7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbiAgICB9XFxuXFxuICAgIC5idXJnLWFjdGl2ZSB7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xcblxcbiAgICAgICAgLmJhciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmFjdGl2ZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGhlaWdodDogMjg1cHg7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlci1sb2dvIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIH1cXG5cXG4gICAgZm9vdGVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaW5wdXQ6bm90KFt0eXBlPVwicmFkaW9cIl0pOm5vdChbdHlwZT1cImNoZWNrYm94XCJdKSxcbmJ1dHRvbiB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmNyZWF0ZS10b2RvIC5vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC1nYXA6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uY3JlYXRlLXRvZG8gLm9wdGlvbnMgbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnViYmxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1idXNpbmVzcyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnVzaW5lc3MtZ2xvdyk7XG59XG5cbi5idWJibGUucGVyc29uYWwge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGVyc29uYWwpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXBlcnNvbmFsLWdsb3cpO1xufVxuXG4uYnViYmxlOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnVzaW5lc3MpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJ1c2luZXNzLWdsb3cpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnViYmxlLnBlcnNvbmFsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVyc29uYWwpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXBlcnNvbmFsLWdsb3cpO1xufVxuXG5pbnB1dDpjaGVja2Vkfi5idWJibGU6OmFmdGVyIHtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmNyZWF0ZS10b2RvIC5vcHRpb25zIGxhYmVsIGRpdiB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uY3JlYXRlLXRvZG8gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm94LXNoYWRvdzogdmFyKC0tcGVyc29uYWwtZ2xvdyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jcmVhdGUtdG9kbyBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc1O1xufVxuXG4udG9kby1saXN0IC5saXN0IHtcbiAgICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLnRvZG8tbGlzdCAudG9kby1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi50b2RvLWl0ZW0gbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b2RvLWl0ZW0gLnRvZG8tY29udGVudCB7XG4gICAgZmxleDogMSAxIDAlO1xufVxuXG4udG9kby1pdGVtIC50b2RvLWNvbnRlbnQgaW5wdXQge1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuXG4udG9kby1pdGVtIC5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b2RvLWl0ZW0gLmFjdGlvbnMgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnRvZG8taXRlbSAuYWN0aW9ucyBidXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNzU7XG59XG5cbi50b2RvLWl0ZW0gLmFjdGlvbnMgLmVkaXQge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4udG9kby1pdGVtIC5hY3Rpb25zIC5kZWxldGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcik7XG59XG5cbi50b2RvLWl0ZW0uZG9uZSAudG9kby1jb250ZW50IGlucHV0IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvcm0tYW5kLXRvZG9saXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaW5wdXQ6bm90KFt0eXBlPVxcXCJyYWRpb1xcXCJdKTpub3QoW3R5cGU9XFxcImNoZWNrYm94XFxcIl0pLFxcbmJ1dHRvbiB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY3Vyc29yOiBpbml0aWFsO1xcbn1cXG5cXG4uY3JlYXRlLXRvZG8gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLmNyZWF0ZS10b2RvIC5vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLmNyZWF0ZS10b2RvIC5vcHRpb25zIGxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5idWJibGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1idXNpbmVzcyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJ1c2luZXNzLWdsb3cpO1xcbn1cXG5cXG4uYnViYmxlLnBlcnNvbmFsIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wZXJzb25hbCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXBlcnNvbmFsLWdsb3cpO1xcbn1cXG5cXG4uYnViYmxlOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1c2luZXNzKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnVzaW5lc3MtZ2xvdyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ1YmJsZS5wZXJzb25hbDo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wZXJzb25hbCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXBlcnNvbmFsLWdsb3cpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2Vkfi5idWJibGU6OmFmdGVyIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNyZWF0ZS10b2RvIC5vcHRpb25zIGxhYmVsIGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5jcmVhdGUtdG9kbyBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1wZXJzb25hbC1nbG93KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY3JlYXRlLXRvZG8gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbn1cXG5cXG4udG9kby1saXN0IC5saXN0IHtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi50b2RvLWxpc3QgLnRvZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRvZG8taXRlbSBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8taXRlbSAudG9kby1jb250ZW50IHtcXG4gICAgZmxleDogMSAxIDAlO1xcbn1cXG5cXG4udG9kby1pdGVtIC50b2RvLWNvbnRlbnQgaW5wdXQge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblxcbi50b2RvLWl0ZW0gLmFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1pdGVtIC5hY3Rpb25zIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2RvLWl0ZW0gLmFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLnRvZG8taXRlbSAuYWN0aW9ucyAuZWRpdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLnRvZG8taXRlbSAuYWN0aW9ucyAuZGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcXG59XFxuXFxuLnRvZG8taXRlbS5kb25lIC50b2RvLWNvbnRlbnQgaW5wdXQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNub3RlcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjIwcHgpO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLm5vdGUtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubm90ZS1pdGVtIGgzIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xuICAgIHBhZGRpbmc6IDRweCAwO1xufVxuXG4ubm90ZS1pdGVtIHRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuI25vdGVzIGlucHV0W3R5cGU9XCJidXR0b25cIl0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm94LXNoYWRvdzogdmFyKC0tcHJpbWFyeS1nbG93KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuI25vdGVzIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNzU7XG59XG5cbi5kZWxldGUtbm90ZSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jcm9zcyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICAvKiBDcm9zcyBjb2xvciAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNyb3NzOjpiZWZvcmUsXG4uY3Jvc3M6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDA7XG59XG5cbi5jcm9zczo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmNyb3NzOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uZGVsZXRlLW5vdGU6aG92ZXIsXG4uZGVsZXRlLW5vdGU6YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAwLjc1O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ub3Rlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix5QkFBeUI7O0lBRXpCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztBQUNYOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBOztJQUVJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI25vdGVzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDIyMHB4KTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubm90ZS1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5vdGUtaXRlbSBoMyB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBwYWRkaW5nOiA0cHggMDtcXG59XFxuXFxuLm5vdGUtaXRlbSB0ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IGluaXRpYWw7XFxufVxcblxcbiNub3RlcyBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1wcmltYXJ5LWdsb3cpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNub3RlcyBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxufVxcblxcbi5kZWxldGUtbm90ZSB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNyb3NzIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIC8qIENyb3NzIGNvbG9yICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNyb3NzOjpiZWZvcmUsXFxuLmNyb3NzOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcik7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5jcm9zczo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5jcm9zczo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5kZWxldGUtbm90ZTpob3ZlcixcXG4uZGVsZXRlLW5vdGU6YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBQUk9KRUNUIEZPUk0gKi9cblxuLnByaW9yaXR5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xufVxuXG4ucHJpb3JpdHkgaDMge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnByaW9yaXR5LWxhYmVscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnByaW9yaXR5IGxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJibCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbG93KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1sb3ctZ2xvdyk7XG59XG5cbi5iYmwubG93IHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWxvdyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbG93LWdsb3cpO1xufVxuXG4uYmJsLm1lZGl1bSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tZWRpdW0pO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLW1lZGl1bS1nbG93KTtcbn1cblxuLmJibC5oaWdoIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhpZ2gpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWhpZ2gtZ2xvdyk7XG59XG5cbi5iYmw6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3cpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWxvdy1nbG93KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmJibC5sb3c6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3cpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWxvdy1nbG93KTtcbn1cblxuLmJibC5tZWRpdW06OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0pO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLW1lZGl1bS1nbG93KTtcbn1cblxuLmJibC5oaWdoOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0taGlnaC1nbG93KTtcbn1cblxuaW5wdXQ6Y2hlY2tlZH4uYmJsOjphZnRlciB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5jcmVhdGUtdG9kbyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kYW5nZXItZ2xvdyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jcmVhdGUtdG9kbyBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc1O1xufVxuXG4vKiBQUk9KRUNUIElURU0gQU5EIFRBU0tTIExJU1QgKi9cblxuLnByb2plY3QtaXRlbSBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cblxuLnByb2plY3QtaXRlbSBoMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFzay1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnRhc2staXRlbSBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2staXRlbSAudGFzay1jb250ZW50IHtcbiAgICBmbGV4OiAxIDEgMCU7XG59XG5cbi50YXNrLWl0ZW0gLnRhc2stY29udGVudCBpbnB1dCB7XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi50YXNrLWl0ZW0gLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2staXRlbSAuYWN0aW9ucyBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4udGFzay1pdGVtIC5hY3Rpb25zIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43NTtcbn1cblxuLnRhc2staXRlbSAuYWN0aW9ucyAuZWRpdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi50YXNrLWl0ZW0gLmFjdGlvbnMgLmRlbGV0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcbn1cblxuLnRhc2staXRlbS5kb25lIC50YXNrLWNvbnRlbnQgaW5wdXQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcbn1cblxuc3BhbiAuYmJsIC5sb3cge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxvdyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnVzaW5lc3MtbG93KTtcbn1cblxuc3BhbiAuYmJsIC5tZWRpdW0ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1lZGl1bSk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWVkaXVtLWdsb3cpO1xufVxuXG5zcGFuIC5iYmwgLmhpZ2gge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhpZ2gpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWhpZ2gtZ2xvdyk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Byb2plY3RJdGVtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQkFBaUI7O0FBRWpCO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGVBQWU7SUFDZixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCOztJQUV2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUFJPSkVDVCBGT1JNICovXFxuXFxuLnByaW9yaXR5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cXG4ucHJpb3JpdHkgaDMge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnByaW9yaXR5IGxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJibCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxvdyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWxvdy1nbG93KTtcXG59XFxuXFxuLmJibC5sb3cge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWxvdyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWxvdy1nbG93KTtcXG59XFxuXFxuLmJibC5tZWRpdW0ge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1lZGl1bSk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLW1lZGl1bS1nbG93KTtcXG59XFxuXFxuLmJibC5oaWdoIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oaWdoKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0taGlnaC1nbG93KTtcXG59XFxuXFxuLmJibDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3cpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1sb3ctZ2xvdyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJibC5sb3c6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93KTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tbG93LWdsb3cpO1xcbn1cXG5cXG4uYmJsLm1lZGl1bTo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0pO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1tZWRpdW0tZ2xvdyk7XFxufVxcblxcbi5iYmwuaGlnaDo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0taGlnaC1nbG93KTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZH4uYmJsOjphZnRlciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jcmVhdGUtdG9kbyBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGFuZ2VyLWdsb3cpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jcmVhdGUtdG9kbyBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxufVxcblxcbi8qIFBST0pFQ1QgSVRFTSBBTkQgVEFTS1MgTElTVCAqL1xcblxcbi5wcm9qZWN0LWl0ZW0gaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcblxcbi5wcm9qZWN0LWl0ZW0gaDMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50YXNrLWl0ZW0gbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWl0ZW0gLnRhc2stY29udGVudCB7XFxuICAgIGZsZXg6IDEgMSAwJTtcXG59XFxuXFxuLnRhc2staXRlbSAudGFzay1jb250ZW50IGlucHV0IHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG5cXG4udGFzay1pdGVtIC5hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbSAuYWN0aW9ucyBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzay1pdGVtIC5hY3Rpb25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxufVxcblxcbi50YXNrLWl0ZW0gLmFjdGlvbnMgLmVkaXQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi50YXNrLWl0ZW0gLmFjdGlvbnMgLmRlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcik7XFxufVxcblxcbi50YXNrLWl0ZW0uZG9uZSAudGFzay1jb250ZW50IGlucHV0IHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuc3BhbiAuYmJsIC5sb3cge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1sb3cpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idXNpbmVzcy1sb3cpO1xcbn1cXG5cXG5zcGFuIC5iYmwgLm1lZGl1bSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1lZGl1bSk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLW1lZGl1bS1nbG93KTtcXG59XFxuXFxuc3BhbiAuYmJsIC5oaWdoIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taGlnaCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWhpZ2gtZ2xvdyk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI3Byb2plY3QtZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbiNwcm9qZWN0LWZvcm0gLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLWdhcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbiNwcm9qZWN0LWZvcm0gLm9wdGlvbnMgbGFiZWwsXG4jcHJvamVjdC1mb3JtICNkdWUtZGF0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcHJvamVjdC1mb3JtICNkdWUtZGF0ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cblxuI3Byb2plY3QtZm9ybSAjZHVlRGF0ZSBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xufVxuXG4jcHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXBlcnNvbmFsLWdsb3cpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4jcHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNzU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Byb2plY3RzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNwcm9qZWN0LWZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSAub3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbiNwcm9qZWN0LWZvcm0gLm9wdGlvbnMgbGFiZWwsXFxuI3Byb2plY3QtZm9ybSAjZHVlLWRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSAjZHVlLWRhdGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblxcbiNwcm9qZWN0LWZvcm0gI2R1ZURhdGUgaW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXBlcnNvbmFsLWdsb3cpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZWxlY3RlZCB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4uZ3JlZXRpbmcge1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuYXNpZGU+dWwge1xuICAgIG1hcmdpbjogMXJlbSAycmVtO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5ncmVldGluZyAudGl0bGUge31cblxuLmdyZWV0aW5nIC50aXRsZSBpbnB1dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIG1pbi13aWR0aDogMDtcblxufVxuXG4uZ3JlZXRpbmcgLnRpdGxlIGlucHV0LFxuLmdyZWV0aW5nIC50aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYXNpZGUgdWwgbGkge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuXG5hc2lkZSB1bCBsaTpub3QoW2lkPVwicHJvamVjdHNcIl0pIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnVsIGltZyB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuYXNpZGUgdWwgbGk6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGkjcHJvamVjdHMgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5saSNwcm9qZWN0cyB1bCBsaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG5saSNwcm9qZWN0cyBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMnB4IDhweDtcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5saSNwcm9qZWN0cyBidXR0b246YWN0aXZlLFxubGkjcHJvamVjdHMgYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zaWRlYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7O0FBRWhCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLDRCQUE0Qjs7QUFFaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNlbGVjdGVkIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4uZ3JlZXRpbmcge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuYXNpZGU+dWwge1xcbiAgICBtYXJnaW46IDFyZW0gMnJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmdyZWV0aW5nIC50aXRsZSB7fVxcblxcbi5ncmVldGluZyAudGl0bGUgaW5wdXQge1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgIG1pbi13aWR0aDogMDtcXG5cXG59XFxuXFxuLmdyZWV0aW5nIC50aXRsZSBpbnB1dCxcXG4uZ3JlZXRpbmcgLnRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5hc2lkZSB1bCBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcblxcbmFzaWRlIHVsIGxpOm5vdChbaWQ9XFxcInByb2plY3RzXFxcIl0pIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudWwgaW1nIHtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG5hc2lkZSB1bCBsaTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubGkjcHJvamVjdHMgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5saSNwcm9qZWN0cyB1bCBsaSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbmxpI3Byb2plY3RzIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMnB4IDhweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmxpI3Byb2plY3RzIGJ1dHRvbjphY3RpdmUsXFxubGkjcHJvamVjdHMgYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybS1hbmQtdG9kb2xpc3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLWFuZC10b2RvbGlzdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm90ZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3Rlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdEl0ZW0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0SXRlbS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0cy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGViYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9mb3JtLWFuZC10b2RvbGlzdC5jc3MnO1xuaW1wb3J0IGZvcm0gZnJvbSAnLi9mb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmYXVsdGxpc3QoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykgLy9jb250ZW50IGRpdlxuXG4gICAgY29uc3QgdG9kb0xpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpOyAvLyBUT0RPIExJU1QgT0YgSVRFTVNcbiAgICB0b2RvTGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0Jyk7XG4gICAgY29uc3QgdG9kb0xpc3RFbGVtZW50X2gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0b2RvTGlzdEVsZW1lbnRfaDMudGV4dENvbnRlbnQgPSAnVG8gRG8gTGlzdCc7XG4gICAgdG9kb0xpc3RFbGVtZW50LmFwcGVuZENoaWxkKHRvZG9MaXN0RWxlbWVudF9oMyk7XG5cbiAgICBjb25zdCB0b2RvTGlzdF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvTGlzdF9kaXYuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuICAgIHRvZG9MaXN0X2Rpdi5pZCA9ICd0b2RvLWxpc3QnO1xuXG5cbiAgICB0b2RvTGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb0xpc3RfZGl2KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRvZG9MaXN0RWxlbWVudCk7IC8vYWRkIGRlZmF1bHQgbGlzdCB0byBtYWluIGRpdlxuXG4gICAgZm9ybSgpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnREaXY7XG59IiwiaW1wb3J0IHsgdG9kb3MsIHNhdmVUb2RvcywgYWRkVG9kbywgcmVtb3ZlVG9kbyB9IGZyb20gJy4vdG9kb3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvRG9zKCkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbGlzdCcpO1xuICAgIHRvZG9MaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgdG9kb3Muc29ydCgoYSwgYikgPT4gYi5jcmVhdGVkQXQgLSBhLmNyZWF0ZWRBdCkuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gVE9ETyBJVEVNXG4gICAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRvZG8uZG9uZTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdidWJibGUnKTtcbiAgICBcbiAgICAgICAgaWYgKHRvZG8uY2F0ZWdvcnkgPT0gJ3BlcnNvbmFsJykge1xuICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdwZXJzb25hbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdidXNpbmVzcycpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vVE9ETyBJVEVNIENPTlRFTlRcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgY29udGVudF9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnRlbnRfaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgY29udGVudF9pbnB1dC52YWx1ZSA9IGAke3RvZG8uY29udGVudH1gO1xuICAgICAgICBjb250ZW50X2lucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCB0cnVlKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50X2lucHV0KTtcblxuICAgICAgICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vQUNUSU9OIEJVVFRPTlNcbiAgICAgICAgYWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdhY3Rpb25zJyk7XG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgICAgIGVkaXQudGV4dENvbnRlbnQgPSAnRWRpdCdcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChhY3Rpb25zKTtcblxuICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XG5cbiAgICAgICAgaWYgKHRvZG8uZG9uZSkge1xuICAgICAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIHRvZG8uZG9uZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBzYXZlVG9kb3MoKTtcblxuICAgICAgICAgICAgaWYgKHRvZG8uZG9uZSkge1xuICAgICAgICAgICAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZG9uZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzcGxheVRvRG9zKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBlID0+IHtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdG9kby5jb250ZW50ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgc2F2ZVRvZG9zKCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRvRG9zKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlVG9kbyh0b2RvKTtcbiAgICAgICAgICAgIGRpc3BsYXlUb0RvcygpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9KVxuICAgIFxuXG59XG5cbiIsImltcG9ydCBnaXRJY29uIGZyb20gJy4uL2Fzc2V0cy9naXRodWItbG9nby5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcblxuICAgICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRhaW5lcicpO1xuICBcbiAgICAgIGNvbnN0IGZvb3Rlckljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGZvb3Rlckljb24uc3JjID0gZ2l0SWNvbjsgXG4gICAgICBmb290ZXJDb250YWluZXIuaW5uZXJIVE1MID0gXCJidWlsdCAmIGRlc2lnbmVkIGJ5XCI7XG4gICAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVySWNvbik7XG4gICAgICBjb25zdCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgZ2l0TGluay5pbm5lckhUTUwgPSAnbWF4aW1rd3NraSc7XG4gICAgICBnaXRMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgICBnaXRMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICAgICAgZ2l0TGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vbWF4aW1rd3NraVwiO1xuICAgICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGdpdExpbmspO1xuICAgICAgXG4gICAgICBmb290ZXJDb250YWluZXIuaW5uZXJIVE1MICs9IFwiIHwgXCI7XG4gICAgICBjb25zdCBzb3VyY2VMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgc291cmNlTGluay5pbm5lckhUTUwgPSAnc291cmNlJztcbiAgICAgIHNvdXJjZUxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICAgIHNvdXJjZUxpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gICAgICBzb3VyY2VMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9tYXhpbWt3c2tpL3RvZG8tdGhpbmdzLXByb2plY3RcIjtcblxuICAgICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvdXJjZUxpbmspO1xuXG4gICAgICBjb25zdCBpY29uc0J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpY29uc0J5LmNsYXNzTGlzdC5hZGQoJ2ljb25zLXJlZicpO1xuICAgICAgaWNvbnNCeS50ZXh0Q29udGVudCA9ICdJY29ucyBieSAnO1xuICAgICAgY29uc3QgaWNvbnNBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBpY29uc0FuY2hvci5ocmVmID0gJ2h0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL3RvLWRvJztcbiAgICAgIGljb25zQW5jaG9yLnRpdGxlID0gJ3RvIGRvIGljb25zJztcbiAgICAgIGljb25zQW5jaG9yLnRleHRDb250ZW50ID0gJ0dyYXBoaWNzIFBsYXp6YSAtIEZsYXRpY29uJztcbiAgICAgIGljb25zQnkuYXBwZW5kQ2hpbGQoaWNvbnNBbmNob3IpO1xuICAgICAgXG4gICAgICBcblxuICAgICAgZm9vdGVyRWxlbWVudC5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xuICAgICAgZm9vdGVyRWxlbWVudC5hcHBlbmRDaGlsZChpY29uc0J5KTtcblxuICAgIHJldHVybiBmb290ZXJFbGVtZW50O1xufSIsImltcG9ydCAnLi4vc3R5bGVzL2Zvcm0tYW5kLXRvZG9saXN0LmNzcyc7XG5pbXBvcnQgeyBhZGRUb2RvIH0gZnJvbSAnLi90b2Rvcyc7XG5pbXBvcnQgeyBkaXNwbGF5VG9Eb3MgfSBmcm9tICcuL2Rpc3BsYXlUb0RvJztcblxuLyogVE8tRE8gRk9STSAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybSgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG4gICAgLy9GT1JNXG4gICAgY29uc3QgY3JlYXRlVG9Eb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY3JlYXRlVG9Eb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLXRvZG8nKTtcbiAgICBjb25zdCBjcmVhdGVUb0RvRWxlbWVudF9oMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY3JlYXRlVG9Eb0VsZW1lbnRfaDMudGV4dENvbnRlbnQgPSAnQ3JlYXRlIFRvIERvJztcbiAgICBjcmVhdGVUb0RvRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVUb0RvRWxlbWVudF9oMyk7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdG9kb0Zvcm0uaWQgPSAnbmV3LXRvZG8tZm9ybSc7XG4gICAgY29uc3QgdG9kb0Zvcm1faDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHRvZG9Gb3JtX2g0LnRleHRDb250ZW50ID0gXCJXaGF0J3Mgb24geW91ciB0b2RvIGxpc3Q/XCI7XG4gICAgY29uc3QgdG9kb0Zvcm1faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9Gb3JtX2lucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdG9kb0Zvcm1faW5wdXQubmFtZSA9ICdjb250ZW50JztcbiAgICB0b2RvRm9ybV9pbnB1dC5pZCA9ICdjb250ZW50JztcbiAgICB0b2RvRm9ybV9pbnB1dC5wbGFjZWhvbGRlciA9IFwiZS5nIG1ha2UgYSB2aWRlb1wiO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Gb3JtX2g0KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRm9ybV9pbnB1dCk7XG5cbiAgICBjb25zdCBvcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vb3B0aW9ucyBkaXZcbiAgICBvcHRpb25zRGl2LmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcblxuICAgIGNvbnN0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IC8vIG9wdGlvbiBidXNpbmVzc1xuICAgIGNvbnN0IGxhYmVsMV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGFiZWwxX2lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgIGxhYmVsMV9pbnB1dC5uYW1lID0gJ2NhdGVnb3J5JztcbiAgICBsYWJlbDFfaW5wdXQuaWQgPSAnY2F0ZWdvcnkxJztcbiAgICBsYWJlbDFfaW5wdXQudmFsdWUgPSAnYnVzaW5lc3MnO1xuICAgIGNvbnN0IGJ1c2luZXNzX3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYnVzaW5lc3Nfc3Bhbi5jbGFzc0xpc3QuYWRkKCdidWJibGUnKTtcbiAgICBidXNpbmVzc19zcGFuLmNsYXNzTGlzdC5hZGQoJ2J1c2luZXNzJyk7XG4gICAgY29uc3QgYnVzaW5lc3NfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVzaW5lc3NfZGl2LnRleHRDb250ZW50ID0gJ0J1c2luZXNzJztcbiAgICBsYWJlbDEuYXBwZW5kQ2hpbGQobGFiZWwxX2lucHV0KTtcbiAgICBsYWJlbDEuYXBwZW5kQ2hpbGQoYnVzaW5lc3Nfc3Bhbik7XG4gICAgbGFiZWwxLmFwcGVuZENoaWxkKGJ1c2luZXNzX2Rpdik7XG4gICAgb3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChsYWJlbDEpO1xuXG4gICAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgLy8gb3B0aW9uIHBlcnNvbmFsXG4gICAgY29uc3QgbGFiZWwyX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsYWJlbDJfaW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgbGFiZWwyX2lucHV0Lm5hbWUgPSAnY2F0ZWdvcnknO1xuICAgIGxhYmVsMl9pbnB1dC5pZCA9ICdjYXRlZ29yeTInO1xuICAgIGxhYmVsMl9pbnB1dC52YWx1ZSA9ICdwZXJzb25hbCc7XG4gICAgY29uc3QgcGVyc29uYWxfc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwZXJzb25hbF9zcGFuLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZScpO1xuICAgIHBlcnNvbmFsX3NwYW4uY2xhc3NMaXN0LmFkZCgncGVyc29uYWwnKTtcbiAgICBjb25zdCBwZXJzb25hbF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwZXJzb25hbF9kaXYudGV4dENvbnRlbnQgPSAnUGVyc29uYWwnO1xuICAgIGxhYmVsMi5hcHBlbmRDaGlsZChsYWJlbDJfaW5wdXQpO1xuICAgIGxhYmVsMi5hcHBlbmRDaGlsZChwZXJzb25hbF9zcGFuKTtcbiAgICBsYWJlbDIuYXBwZW5kQ2hpbGQocGVyc29uYWxfZGl2KTtcbiAgICBvcHRpb25zRGl2LmFwcGVuZENoaWxkKGxhYmVsMik7XG5cbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChvcHRpb25zRGl2KTsgLy8gYWRkIG9wdGlvbnMgZGl2XG5cbiAgICBjb25zdCBzdWJtaXRfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXRfYnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRfYnRuLnZhbHVlID0gJ0FkZCBUbyBEbyc7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0X2J0bik7IC8vIGFkZCBzdWJtaXQgYnRuXG5cbiAgICBjcmVhdGVUb0RvRWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVUb0RvRWxlbWVudCk7IC8vIGFkZCBjcmVhdGUgdG9kbyBpdGVtIFxuXG4gICAgXG4gICAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB0b2RvID0ge1xuICAgICAgICAgICAgY29udGVudDogZS50YXJnZXQuZWxlbWVudHMuY29udGVudC52YWx1ZSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiBlLnRhcmdldC5lbGVtZW50cy5jYXRlZ29yeS52YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuXG4gICAgICAgIH1cblxuICAgICAgICBhZGRUb2RvKHRvZG8pO1xuICAgICAgICBkaXNwbGF5VG9Eb3MoKTtcbiAgICAgICAgZS50YXJnZXQucmVzZXQoKTtcbiAgICB9KVxufSIsImltcG9ydCBoZWFkZXJQbmcgZnJvbSAnLi4vYXNzZXRzL2xvZ28taGVhZGVyLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLW1lbnUnKTtcbiAgICBidXJnZXJNZW51LmlkID0gJ2J1cmdlcic7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgY29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCgnYmFyJyk7XG4gICAgICAgIGJ1cmdlck1lbnUuYXBwZW5kQ2hpbGQoYmFyKTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJJY29uID0gbmV3IEltYWdlKCk7XG4gICAgaGVhZGVySWNvbi5zcmMgPSBoZWFkZXJQbmc7XG4gICAgY29uc3QgaGVhZGVyX2gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXJfaDEudGV4dENvbnRlbnQgPSBcIlRvLURvLVRoaW5nc1wiO1xuICAgIGNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJMb2dvLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sb2dvJyk7XG4gICAgaGVhZGVyTG9nby5hcHBlbmRDaGlsZChoZWFkZXJJY29uKTtcbiAgICBoZWFkZXJMb2dvLmFwcGVuZENoaWxkKGhlYWRlcl9oMSk7XG5cbiAgICBoZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKGJ1cmdlck1lbnUpO1xuICAgIGhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nbyk7XG5cbiAgICBidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImJ1cmctYWN0aXZlXCIpXG4gICAgfSk7XG5cbiAgICBcblxuICAgIHJldHVybiBoZWFkZXJFbGVtZW50O1xufSIsImltcG9ydCAnLi4vc3R5bGVzL3Byb2plY3RJdGVtLmNzcyc7XG5pbXBvcnQgeyBwcm9qZWN0cywgc2F2ZVByb2plY3RzLCByZW1vdmVQcm9qZWN0IH0gZnJvbSBcIi4vdG9kb3NcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IGRlZmF1bHRsaXN0IGZyb20gJy4vZGVmYXVsdExpc3QnO1xuaW1wb3J0IHsgZGlzcGxheVRvRG9zIH0gZnJvbSAnLi9kaXNwbGF5VG9Ebyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0SXRlbShwcm9qKSB7XG5cbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpO1xuICAgIGNvbnN0IHByb2plY3RfaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2plY3RfaDIudGV4dENvbnRlbnQgPSBgJHtwcm9qLnRpdGxlfWA7XG4gICAgY29uc3QgcHJvamVjdF9jYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcHJvamVjdF9jYXRlZ29yeS50ZXh0Q29udGVudCA9IGAke3Byb2ouY2F0ZWdvcnl9YDtcbiAgICBjb25zdCBwcm9qZWN0X2R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gKHByb2ouZHVlRGF0ZSkuc3BsaXQoJy0nKTtcbiAgICBwcm9qZWN0X2R1ZS50ZXh0Q29udGVudCA9IGBEdWU6ICR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcblxuICAgIGNvbnN0IHRhc2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHRhc2tsaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdCcpO1xuICAgIHRhc2tsaXN0LmlkID0gJ3Rhc2stbGlzdCc7XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VGFza3MoKSB7XG4gICAgICAgIHRhc2tsaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIHByb2oudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vdGFzayBpdGVtXG4gICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyAvL3Rhc2sgY2hlY2tib3hcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRhc2suZG9uZTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2JibCcpO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09ICdsb3cnKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdsb3cnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnbWVkaXVtJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdoaWdoJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vdGFzayBjb250ZW50XG4gICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudF9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb250ZW50X2lucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICBjb250ZW50X2lucHV0LnZhbHVlID0gYCR7dGFzay5jb250ZW50fWA7XG4gICAgICAgICAgICBjb250ZW50X2lucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCB0cnVlKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudF9pbnB1dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9BQ1RJT04gQlVUVE9OU1xuICAgICAgICAgICAgYWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdhY3Rpb25zJyk7XG4gICAgICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICAgICAgICAgIGVkaXQudGV4dENvbnRlbnQgPSAnRWRpdCdcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgICAgICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGVkaXQpO1xuICAgICAgICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGFjdGlvbnMpO1xuXG4gICAgICAgICAgICB0YXNrbGlzdC5hcHBlbmQodGFza0l0ZW0pO1xuXG4gICAgICAgICAgICBpZiAodGFzay5kb25lKSB7XG4gICAgICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2suZG9uZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgc2F2ZVByb2plY3RzKCk7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKHRhc2suZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZG9uZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCAgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuICAgICAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suY29udGVudCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBzYXZlUHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvai50YXNrcyA9IHByb2oudGFza3MuZmlsdGVyKHQgPT4gdCAhPSB0YXNrKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qLnRhc2tzKTtcbiAgICAgICAgICAgICAgICBzYXZlUHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcblxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICB0YXNrbGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGRpc3BsYXlUYXNrcygpO1xuXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0X2gyKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RfY2F0ZWdvcnkpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdF9kdWUpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodGFza2xpc3QpOyAvL2FkZCB0YXNrbGlzdCB0byBwcm9qZWN0IGl0ZW1cblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7IC8vYWRkIHByb2plY3QgdG8gY29udGVudCBkaXZcblxuICAgLy9GT1JNXG4gICBjb25zdCBjcmVhdGVUb0RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgIGNyZWF0ZVRvRG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS10b2RvJyk7XG4gICBjb25zdCBjcmVhdGVUb0RvRWxlbWVudF9oMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICBjcmVhdGVUb0RvRWxlbWVudF9oMy50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICBjcmVhdGVUb0RvRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVUb0RvRWxlbWVudF9oMyk7XG4gICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgIHRvZG9Gb3JtLmlkID0gJ25ldy10b2RvLWZvcm0nO1xuICAgY29uc3QgdG9kb0Zvcm1faDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgdG9kb0Zvcm1faDQudGV4dENvbnRlbnQgPSBcIldoYXQncyBvbiB5b3VyIHByb2plY3QgbGlzdD9cIjtcbiAgIGNvbnN0IHRvZG9Gb3JtX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgIHRvZG9Gb3JtX2lucHV0LnJlcXVpcmVkID0gJ3RydWUnO1xuICAgdG9kb0Zvcm1faW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgIHRvZG9Gb3JtX2lucHV0Lm5hbWUgPSAnY29udGVudCc7XG4gICB0b2RvRm9ybV9pbnB1dC5pZCA9ICdjb250ZW50JztcbiAgIHRvZG9Gb3JtX2lucHV0LnBsYWNlaG9sZGVyID0gXCJlLmcgbWFrZSBhIHZpZGVvXCI7XG4gICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRm9ybV9oNCk7XG4gICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRm9ybV9pbnB1dCk7XG5cbiAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICAgXG4gICBjb25zdCBwcmlvcml0eV9oMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICBwcmlvcml0eV9oMy50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlfaDMpO1xuXG4gICBjb25zdCBwcmlvcml0eV9sYWJlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIHByaW9yaXR5X2xhYmVscy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbHMnKTsgXG5cbiAgIGNvbnN0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IC8vIHByaW9yaXR5IGxvd1xuICAgY29uc3QgbGFiZWwxX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgIGxhYmVsMV9pbnB1dC5yZXF1aXJlZCA9ICd0cnVlJztcbiAgIGxhYmVsMV9pbnB1dC5jaGVja2VkID0gJ3RydWUnO1xuICAgIGxhYmVsMV9pbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBsYWJlbDFfaW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgbGFiZWwxX2lucHV0LmlkID0gJ3ByaW9yaXR5MSc7XG4gICAgbGFiZWwxX2lucHV0LnZhbHVlID0gJ2xvdyc7XG4gICAgY29uc3QgbG93X3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbG93X3NwYW4uY2xhc3NMaXN0LmFkZCgnYmJsJyk7XG4gICAgbG93X3NwYW4uY2xhc3NMaXN0LmFkZCgnbG93Jyk7XG4gICAgY29uc3QgbG93X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvd19kaXYudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICBsYWJlbDEuYXBwZW5kQ2hpbGQobGFiZWwxX2lucHV0KTtcbiAgICBsYWJlbDEuYXBwZW5kQ2hpbGQobG93X3NwYW4pO1xuICAgIGxhYmVsMS5hcHBlbmRDaGlsZChsb3dfZGl2KTtcbiAgICBwcmlvcml0eV9sYWJlbHMuYXBwZW5kQ2hpbGQobGFiZWwxKTtcblxuICAgIGNvbnN0IGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IC8vIHByaW9yaXR5IG1lZGl1bVxuICAgY29uc3QgbGFiZWwyX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsYWJlbDJfaW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgbGFiZWwyX2lucHV0Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgIGxhYmVsMl9pbnB1dC5pZCA9ICdwcmlvcml0eTInO1xuICAgIGxhYmVsMl9pbnB1dC52YWx1ZSA9ICdtZWRpdW0nO1xuICAgIGNvbnN0IG1lZGl1bV9zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1lZGl1bV9zcGFuLmNsYXNzTGlzdC5hZGQoJ2JibCcpO1xuICAgIG1lZGl1bV9zcGFuLmNsYXNzTGlzdC5hZGQoJ21lZGl1bScpO1xuICAgIGNvbnN0IG1lZGl1bV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZWRpdW1fZGl2LnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgbGFiZWwyLmFwcGVuZENoaWxkKGxhYmVsMl9pbnB1dCk7XG4gICAgbGFiZWwyLmFwcGVuZENoaWxkKG1lZGl1bV9zcGFuKTtcbiAgICBsYWJlbDIuYXBwZW5kQ2hpbGQobWVkaXVtX2Rpdik7XG4gICAgcHJpb3JpdHlfbGFiZWxzLmFwcGVuZENoaWxkKGxhYmVsMik7XG5cbiAgICBjb25zdCBsYWJlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyAvLyBwcmlvcml0eSBoaWdoXG4gICBjb25zdCBsYWJlbDNfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxhYmVsM19pbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBsYWJlbDNfaW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgbGFiZWwzX2lucHV0LmlkID0gJ3ByaW9yaXR5Myc7XG4gICAgbGFiZWwzX2lucHV0LnZhbHVlID0gJ2hpZ2gnO1xuICAgIGNvbnN0IGhpZ2hfc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBoaWdoX3NwYW4uY2xhc3NMaXN0LmFkZCgnYmJsJyk7XG4gICAgaGlnaF9zcGFuLmNsYXNzTGlzdC5hZGQoJ2hpZ2gnKTtcbiAgICBjb25zdCBoaWdoX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhpZ2hfZGl2LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgIGxhYmVsMy5hcHBlbmRDaGlsZChsYWJlbDNfaW5wdXQpO1xuICAgIGxhYmVsMy5hcHBlbmRDaGlsZChoaWdoX3NwYW4pO1xuICAgIGxhYmVsMy5hcHBlbmRDaGlsZChoaWdoX2Rpdik7XG4gICAgcHJpb3JpdHlfbGFiZWxzLmFwcGVuZENoaWxkKGxhYmVsMyk7XG5cbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eV9sYWJlbHMpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcblxuICAgY29uc3Qgc3VibWl0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0X2J0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0X2J0bi52YWx1ZSA9ICdBZGQgVGFzayc7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0X2J0bik7IC8vIGFkZCBzdWJtaXQgYnRuXG4gICAgXG4gICAgY3JlYXRlVG9Eb0VsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9Eb0VsZW1lbnQpO1xuXG4gICAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgICAgIGNvbnN0IHRhc2sgPSB7XG4gICAgICAgICAgICBjb250ZW50OiBlLnRhcmdldC5lbGVtZW50cy5jb250ZW50LnZhbHVlLFxuICAgICAgICAgICAgcHJpb3JpdHk6IGUudGFyZ2V0LmVsZW1lbnRzLnByaW9yaXR5LnZhbHVlLFxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cbiAgICAgICAgfVxuICAgICAgIFxuXG4gICAgICAgIHByb2oudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgc2F2ZVByb2plY3RzKCk7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICBlLnRhcmdldC5yZXNldCgpO1xuICAgIH0pXG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZWxldGVQcm9qZWN0LnR5cGUgPSAnYnV0dG9uJztcbiAgICBkZWxldGVQcm9qZWN0LnZhbHVlID0gJ0RlbGV0ZSBQcm9qZWN0JztcbiAgICBjcmVhdGVUb0RvRWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcblxuICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICByZW1vdmVQcm9qZWN0KHByb2opO1xuICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgaWYgKHByb2plY3RzWzBdKSB7XG4gICAgICAgICAgIHByb2plY3RJdGVtKHByb2plY3RzWzBdKTtcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZhdWx0bGlzdCgpO1xuICAgICAgICBkaXNwbGF5VG9Eb3MoKTtcbiAgICAgICB9XG5cbiAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICB9KVxuXG5cbiAgICByZXR1cm4gY29udGVudERpdjtcbn0iLCJpbXBvcnQgJy4uL3N0eWxlcy9wcm9qZWN0cy5jc3MnO1xuaW1wb3J0IHsgcHJvamVjdHMsIGFkZFByb2plY3QgfSBmcm9tICcuL3RvZG9zJztcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0SXRlbSB9IGZyb20gJy4uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzPnVsJyk7XG4gICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBjb25zdCBwcm9qZWN0X2xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwcm9qZWN0X2xpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpO1xuXG4gICAgcHJvamVjdF9saS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0X2xpKTtcbiAgICB9KTtcblxuICAgIGRpc3BsYXlQcm9qZWN0SXRlbSgpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtcHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3RzX2gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwcm9qZWN0c19oMy50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCc7XG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNfaDMpO1xuXG4gICAgLy9mb3JtXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcHJvamVjdEZvcm0uaWQgPSAncHJvamVjdC1mb3JtJztcbiAgICBjb25zdCBwcm9qZWN0Rm9ybV9oNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgcHJvamVjdEZvcm1faDQudGV4dENvbnRlbnQgPSBcIldoYXQncyB5b3VyIHByb2plY3QncyB0aXRsZT9cIjtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdEZvcm1faW5wdXQucmVxdWlyZWQgPSAndHJ1ZSc7XG4gICAgcHJvamVjdEZvcm1faW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBwcm9qZWN0Rm9ybV9pbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgICBwcm9qZWN0Rm9ybV9pbnB1dC5pZCA9ICd0aXRsZSc7XG4gICAgcHJvamVjdEZvcm1faW5wdXQucGxhY2Vob2xkZXIgPSBcImUuZyBiaXJ0aGRheSBwYXJ0eSBwbGFubmluZ1wiO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RGb3JtX2g0KTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybV9pbnB1dCk7XG5cbiAgICAvL29wdGlvbnNcbiAgICBjb25zdCBvcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vb3B0aW9ucyBkaXZcbiAgICBvcHRpb25zRGl2LmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcblxuICAgIGNvbnN0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IC8vIG9wdGlvbiBidXNpbmVzc1xuICAgIGNvbnN0IGxhYmVsMV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGFiZWwxX2lucHV0LmNoZWNrZWQgPSAndHJ1ZSc7XG4gICAgbGFiZWwxX2lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgIGxhYmVsMV9pbnB1dC5uYW1lID0gJ2NhdGVnb3J5JztcbiAgICBsYWJlbDFfaW5wdXQuaWQgPSAnY2F0ZWdvcnkxJztcbiAgICBsYWJlbDFfaW5wdXQudmFsdWUgPSAnYnVzaW5lc3MnO1xuICAgIGNvbnN0IGJ1c2luZXNzX3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYnVzaW5lc3Nfc3Bhbi5jbGFzc0xpc3QuYWRkKCdidWJibGUnKTtcbiAgICBidXNpbmVzc19zcGFuLmNsYXNzTGlzdC5hZGQoJ2J1c2luZXNzJyk7XG4gICAgY29uc3QgYnVzaW5lc3NfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVzaW5lc3NfZGl2LnRleHRDb250ZW50ID0gJ0J1c2luZXNzJztcbiAgICBsYWJlbDEuYXBwZW5kQ2hpbGQobGFiZWwxX2lucHV0KTtcbiAgICBsYWJlbDEuYXBwZW5kQ2hpbGQoYnVzaW5lc3Nfc3Bhbik7XG4gICAgbGFiZWwxLmFwcGVuZENoaWxkKGJ1c2luZXNzX2Rpdik7XG4gICAgb3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChsYWJlbDEpO1xuXG4gICAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgLy8gb3B0aW9uIHBlcnNvbmFsXG4gICAgY29uc3QgbGFiZWwyX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsYWJlbDJfaW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgbGFiZWwyX2lucHV0Lm5hbWUgPSAnY2F0ZWdvcnknO1xuICAgIGxhYmVsMl9pbnB1dC5pZCA9ICdjYXRlZ29yeTInO1xuICAgIGxhYmVsMl9pbnB1dC52YWx1ZSA9ICdwZXJzb25hbCc7XG4gICAgY29uc3QgcGVyc29uYWxfc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwZXJzb25hbF9zcGFuLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZScpO1xuICAgIHBlcnNvbmFsX3NwYW4uY2xhc3NMaXN0LmFkZCgncGVyc29uYWwnKTtcbiAgICBjb25zdCBwZXJzb25hbF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwZXJzb25hbF9kaXYudGV4dENvbnRlbnQgPSAnUGVyc29uYWwnO1xuICAgIGxhYmVsMi5hcHBlbmRDaGlsZChsYWJlbDJfaW5wdXQpO1xuICAgIGxhYmVsMi5hcHBlbmRDaGlsZChwZXJzb25hbF9zcGFuKTtcbiAgICBsYWJlbDIuYXBwZW5kQ2hpbGQocGVyc29uYWxfZGl2KTtcbiAgICBvcHRpb25zRGl2LmFwcGVuZENoaWxkKGxhYmVsMik7XG5cbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChvcHRpb25zRGl2KTsgLy8gYWRkIG9wdGlvbnMgZGl2XG5cbiAgICAvL0RVRSBEQVRFIERJVlxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgZHVlRGF0ZS5pZCA9ICdkdWUtZGF0ZSc7XG4gICAgY29uc3QgZHVlRGF0ZV9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZHVlRGF0ZV9sYWJlbC5mb3IgPSAnZHVlRGF0ZSc7XG4gICAgZHVlRGF0ZV9sYWJlbC50ZXh0Q29udGVudCA9ICdEdWU6JztcbiAgICBjb25zdCBkdWVEYXRlX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlX2lucHV0LnJlcXVpcmVkID0gJ3RydWUnO1xuICAgIGR1ZURhdGVfaW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkdWVEYXRlX2lucHV0LmlkID0gJ2R1ZURhdGUnO1xuICAgIGR1ZURhdGVfaW5wdXQubmFtZSA9ICdkdWVEYXRlJztcbiAgICBkdWVEYXRlLmFwcGVuZENoaWxkKGR1ZURhdGVfbGFiZWwpO1xuICAgIGR1ZURhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZV9pbnB1dCk7XG5cbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTsgLy9hZGQgZHVlLWRhdGVcblxuICAgIC8vU1VCTUlUIFBST0pFQ1RcbiAgICBjb25zdCBzdWJtaXRfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXRfYnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRfYnRuLnZhbHVlID0gJ0NyZWF0ZSBhIFByb2plY3QnO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdF9idG4pOyAvLyBhZGQgc3VibWl0IGJ0blxuXG4gICAgZHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgID0gZHVlRGF0ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICB9KVxuXG4gICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0ID0ge1xuICAgICAgICAgICAgdGl0bGU6IGUudGFyZ2V0LmVsZW1lbnRzLnRpdGxlLnZhbHVlLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IGUudGFyZ2V0LmVsZW1lbnRzLmNhdGVnb3J5LnZhbHVlLFxuICAgICAgICAgICAgdGFza3M6IFtdLFxuICAgICAgICAgICAgZHVlRGF0ZTogZS50YXJnZXQuZWxlbWVudHMuZHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIGUudGFyZ2V0LnJlc2V0KCk7XG4gICAgfSlcblxuXG5cblxuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcbn0iLCJpbXBvcnQgJy4uL3N0eWxlcy9ub3Rlcy5jc3MnO1xuaW1wb3J0IHsgbm90ZXMsIGFkZE5vdGUsIHJlbW92ZU5vdGUsIHNhdmVOb3RlcyB9IGZyb20gXCIuL3RvZG9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHF1aWNrTm90ZXMoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IG5vdGVzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBub3Rlc0VsZW1lbnQuaWQgPSAnbm90ZXMnO1xuXG4gICAgbm90ZXMuZm9yRWFjaChub3RlID0+IHtcbiAgICAgICAgY29uc3Qgbm90ZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9ub3RlIGl0ZW1cbiAgICAgICAgbm90ZUl0ZW0uY2xhc3NMaXN0LmFkZCgnbm90ZS1pdGVtJyk7XG5cbiAgICAgICAgY29uc3QgZGF0ZV9oMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGRhdGVfaDMuaW5uZXJIVE1MID0gbm90ZS5kYXRlO1xuXG4gICAgICAgIGNvbnN0IG5vdGVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBub3RlX2lucHV0Lm5hbWUgPSAndGV4dGFyZWEnO1xuICAgICAgICBub3RlX2lucHV0LnZhbHVlID0gYCR7bm90ZS5jb250ZW50fWA7XG4gICAgICAgIG5vdGVfaW5wdXQucGxhY2Vob2xkZXIgPSAndHlwZSB5b3VyIG5vdGUgaGVyZS4uJztcblxuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1ub3RlJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnY3Jvc3MnKTtcbiAgICAgICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKHNwYW4pO1xuXG5cbiAgICAgICAgbm90ZUl0ZW0uYXBwZW5kQ2hpbGQoZGF0ZV9oMyk7XG4gICAgICAgIG5vdGVJdGVtLmFwcGVuZENoaWxkKG5vdGVfaW5wdXQpO1xuICAgICAgICBub3RlSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICBub3Rlc0VsZW1lbnQuYXBwZW5kQ2hpbGQobm90ZUl0ZW0pO1xuXG5cbiAgICAgICAgbm90ZV9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZSA9PiB7XG4gICAgICAgICAgICBub3RlLmNvbnRlbnQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHNhdmVOb3RlcygpO1xuICAgICAgICAgICAgcXVpY2tOb3RlcygpO1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICByZW1vdmVOb3RlKG5vdGUpO1xuICAgICAgICAgICAgc2F2ZU5vdGVzKCk7XG4gICAgICAgICAgICBxdWlja05vdGVzKCk7XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGROb3RlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBhZGROb3RlQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBhZGROb3RlQnRuLnZhbHVlID0gJ0NyZWF0ZSBOb3RlJztcbiAgICBub3Rlc0VsZW1lbnQuYXBwZW5kQ2hpbGQoYWRkTm90ZUJ0bik7XG5cbiAgICBhZGROb3RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdGUgPSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpXG4gICAgICAgIH1cbiAgICAgICAgYWRkTm90ZShub3RlKTtcbiAgICAgICAgcXVpY2tOb3RlcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhub3Rlcyk7XG4gICAgfSlcblxuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChub3Rlc0VsZW1lbnQpO1xuICAgIFxuICAgIHJldHVybiBjb250ZW50RGl2O1xufSIsImltcG9ydCAnLi4vc3R5bGVzL3NpZGViYXIuY3NzJztcbmltcG9ydCBub3RlUG5nIGZyb20gJy4uL2Fzc2V0cy9ub3RlLnBuZyc7XG5pbXBvcnQgdG9kb1BuZyBmcm9tICcuLi9hc3NldHMvdG9kby5wbmcnO1xuaW1wb3J0IHByb2plY3RzUG5nIGZyb20gJy4uL2Fzc2V0cy9wcm9qZWN0cy5wbmcnO1xuXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vdG9kb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWRlYmFyKCkge1xuICAgIC8qTkFWIE1FTlUqL1xuICAgIGNvbnN0IHNpZGViYXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKTtcbiAgICBzaWRlYmFyRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGdyZWV0aW5nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBncmVldGluZyBlbGVtZW50XG4gICAgZ3JlZXRpbmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyZWV0aW5nJyk7XG4gICAgY29uc3QgZ3JlZXRpbmdfaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGdyZWV0aW5nX2gyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgZ3JlZXRpbmdfaDIuaW5uZXJIVE1MID0gXCJHcmVldGluZ3MsIFwiO1xuICAgIGNvbnN0IGdyZWV0aW5nX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBncmVldGluZ19pbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGdyZWV0aW5nX2lucHV0LmlkID0gJ25hbWUnO1xuICAgIGdyZWV0aW5nX2lucHV0Lm1heExlbmd0aCA9IDEyO1xuICAgIGdyZWV0aW5nX2lucHV0LnNpemUgPSAxMjtcbiAgICBncmVldGluZ19pbnB1dC5wbGFjZWhvbGRlciA9ICdOYW1lIGhlcmUnO1xuICAgIGdyZWV0aW5nX2gyLmFwcGVuZENoaWxkKGdyZWV0aW5nX2lucHV0KTtcbiAgICBncmVldGluZ0VsZW1lbnQuYXBwZW5kQ2hpbGQoZ3JlZXRpbmdfaDIpO1xuICAgIHNpZGViYXJFbGVtZW50LmFwcGVuZENoaWxkKGdyZWV0aW5nRWxlbWVudCk7IC8vIGFkZCBncmVldGluZyBlbGVtXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcblxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpIHx8ICcnO1xuICAgICAgICBuYW1lSW5wdXQudmFsdWUgPSB1c2VybmFtZTtcblxuICAgICAgICBuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0pXG5cbiAgICB9KVxuXG4gICAgLyogTUVOVSAqL1xuICAgIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGxpX2RlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpX2RlZmF1bHQuaWQgPSAnZGVmYXVsdCc7XG4gICAgY29uc3QgdG9kb0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB0b2RvSWNvbi5zcmMgPSB0b2RvUG5nO1xuICAgIGNvbnN0IGxpX2RlZmF1bHRfYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaV9kZWZhdWx0X2EudGV4dENvbnRlbnQgPSAnVG8tRG8gTGlzdCc7XG4gICAgbGlfZGVmYXVsdC5hcHBlbmRDaGlsZCh0b2RvSWNvbik7XG4gICAgbGlfZGVmYXVsdC5hcHBlbmRDaGlsZChsaV9kZWZhdWx0X2EpO1xuICAgIGNvbnN0IGxpX3Byb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaV9wcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHByb2plY3RzSWNvbi5zcmMgPSBwcm9qZWN0c1BuZztcbiAgICBsaV9wcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0ljb24pO1xuICAgIGxpX3Byb2plY3RzRGl2LmlubmVySFRNTCArPSAnTXkgUHJvamVjdHMnO1xuICAgIGxpX3Byb2plY3RzLmlkID0gJ3Byb2plY3RzJztcbiAgICBsaV9wcm9qZWN0cy5hcHBlbmRDaGlsZChsaV9wcm9qZWN0c0Rpdik7XG4gICAgY29uc3QgcHJvamVjdHNVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cblxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RfbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBwcm9qZWN0X2xpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpO1xuICAgIFxuICAgICAgICBwcm9qZWN0X2xpLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuICAgICAgICBwcm9qZWN0c1VsLmFwcGVuZENoaWxkKHByb2plY3RfbGkpO1xuICAgIH0pO1xuICAgIGxpX3Byb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzVWwpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3QuaWQgPSAnYWRkLXByb2plY3QnO1xuICAgIGFkZFByb2plY3QudHlwZSA9ICdidXR0b24nO1xuICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgIGxpX3Byb2plY3RzLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG4gICAgY29uc3QgbGlfbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpX25vdGVzLmlkID0gJ2xpLW5vdGVzJztcbiAgICBjb25zdCBub3Rlc0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBub3Rlc0ljb24uc3JjID0gbm90ZVBuZztcbiAgICBjb25zdCBsaV9ub3Rlc19hID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpX25vdGVzX2EudGV4dENvbnRlbnQgPSAnUXVpY2sgTm90ZXMnO1xuICAgIGxpX25vdGVzLmFwcGVuZENoaWxkKG5vdGVzSWNvbik7XG4gICAgbGlfbm90ZXMuYXBwZW5kQ2hpbGQobGlfbm90ZXNfYSk7XG5cbiAgICBcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKGxpX2RlZmF1bHQpO1xuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQobGlfcHJvamVjdHMpO1xuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQobGlfbm90ZXMpO1xuICAgIHNpZGViYXJFbGVtZW50LmFwcGVuZENoaWxkKG5hdk1lbnUpO1xuXG5cbiAgICByZXR1cm4gc2lkZWJhckVsZW1lbnQ7XG59IiwiZXhwb3J0IGxldCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRvZG9zKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb3MoKSB7XG4gIHJldHVybiB0b2Rvcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG8odG9kbykge1xuICB0b2Rvcy5wdXNoKHRvZG8pO1xuICBzYXZlVG9kb3MoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRvZG8odG9kbykge1xuICB0b2RvcyA9IHRvZG9zLmZpbHRlcih0ID0+IHQgIT0gdG9kbyk7XG4gIHNhdmVUb2RvcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJUb2RvcygpIHtcbiAgdG9kb3MgPSBbXTtcbiAgc2F2ZVRvZG9zKCk7XG59XG5cbi8qIFBST0pFQ1RTICovXG5leHBvcnQgbGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgfHwgW107XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvamVjdHMoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIHNhdmVQcm9qZWN0cygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0KSB7XG4gIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKHQgPT4gdCAhPSBwcm9qZWN0KTtcbiAgc2F2ZVByb2plY3RzKCk7XG59XG5cbi8qIG5vdGVzICovXG5cbmV4cG9ydCBsZXQgbm90ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpKSB8fCBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVOb3RlcygpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vdGVzJywgSlNPTi5zdHJpbmdpZnkobm90ZXMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vdGVzKCkge1xuICByZXR1cm4gbm90ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROb3RlKG5vdGUpIHtcbiAgbm90ZXMucHVzaChub3RlKTtcbiAgc2F2ZU5vdGVzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb3RlKG5vdGUpIHtcbiAgbm90ZXMgPSBub3Rlcy5maWx0ZXIobiA9PiBuICE9IG5vdGUpXG4gIHNhdmVOb3RlcygpO1xufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHNpZGViYXIgZnJvbSAnLi9jb21wb25lbnRzL3NpZGViYXInO1xuaW1wb3J0IGZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCBkZWZhdWx0bGlzdCBmcm9tICcuL2NvbXBvbmVudHMvZGVmYXVsdExpc3QnO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9jb21wb25lbnRzL3Byb2plY3RzJztcbmltcG9ydCBxdWlja05vdGVzIGZyb20gJy4vY29tcG9uZW50cy9xdWlja05vdGVzJztcbmltcG9ydCB7IGRpc3BsYXlUb0RvcyB9IGZyb20gJy4vY29tcG9uZW50cy9kaXNwbGF5VG9Ebyc7XG5pbXBvcnQgeyBwcm9qZWN0SXRlbSB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0SXRlbSc7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vY29tcG9uZW50cy90b2Rvcyc7XG5cbmhlYWRlcigpO1xuc2lkZWJhcigpO1xuZm9vdGVyKCk7XG5kZWZhdWx0bGlzdCgpO1xuZGlzcGxheVRvRG9zKCk7XG5cblxuLyogTkFWIEJBUiAqL1xuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGU+dWwnKTtcbm5hdkJhci5xdWVyeVNlbGVjdG9yKCdsaSNkZWZhdWx0PmEnKS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xubmF2QmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgXG4gICAgY29uc3QgcHJldmlvdXNMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuICAgIGlmIChlLnRhcmdldC5pbm5lckhUTUwgPT09ICdUby1EbyBMaXN0Jykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBwcmV2aW91c0xpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGRlZmF1bHRsaXN0KCk7XG4gICAgICAgIGRpc3BsYXlUb0RvcygpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaW5uZXJIVE1MID09PSAnUXVpY2sgTm90ZXMnKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHByZXZpb3VzTGkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgcXVpY2tOb3RlcygpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaW5uZXJIVE1MID09PSAnQWRkIFByb2plY3QnKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHByZXZpb3VzTGkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdCgpO1xuICAgIH1cblxufSlcblxuLy9ESVNQTEFZIFBST0pFQ1RcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdEl0ZW0oKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHM+dWwnKS5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByb2plY3RMaXN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0xpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG4gICAgICAgICAgICBwcmV2aW91c0xpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdFtpXS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdEl0ZW0ocHJvamVjdHNbaV0pO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBkaXNwbGF5UHJvamVjdEl0ZW0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=