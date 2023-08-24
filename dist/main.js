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
        box-shadow: var(--shadow);
        transition: height 0.3s ease-in-out;
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
        /* max-height: max-content; */
        overflow-y: auto;
    }

    .header-logo {
        grid-column: 2/-1;
        justify-self: end;
    }

    footer {
        flex-direction: column;
        align-items: center;
    }

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,4CAAkD;AACtD;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,0BAA0B;IAC1B,gBAAgB;IAChB,eAAe;IACf,0BAA0B;IAC1B,YAAY;IACZ,wCAAwC;;IAExC,qDAAqD;IACrD,oDAAoD;IACpD,kDAAkD;;IAElD,wBAAwB;IACxB,0BAA0B;IAC1B,qBAAqB;;IAErB,+CAA+C;IAC/C,kDAAkD;IAClD,gDAAgD;;AAEpD;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,+CAA+C;IAC/C,+CAA+C;;IAE/C,aAAa;IACb,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA,SAAS;AACT;IACI,yBAAyB;IACzB,yBAAyB;IACzB,UAAU;IACV,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;;IAEb,mBAAmB;IACnB,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,YAAY;IACZ,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,6BAA6B;IAC7B,qBAAqB;;;AAGzB;;AAEA;IACI,4BAA4B;;IAE5B;QACI,gCAAgC;IACpC;AACJ;;AAEA;IACI,WAAW;IACX,WAAW;IACX,6BAA6B;IAC7B,qBAAqB;AACzB;;;AAGA,OAAO;;AAEP;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mDAAmD;AACvD;;;;AAIA,SAAS;AACT;IACI,yBAAyB;IACzB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA,mBAAmB;;AAEnB;IACI;QACI,aAAa;IACjB;;IAEA;QACI,0BAA0B;IAC9B;;IAEA;QACI,WAAW;QACX,gBAAgB;QAChB,yBAAyB;QACzB,mCAAmC;IACvC;;IAEA;QACI,4BAA4B;;QAE5B;YACI,gCAAgC;QACpC;IACJ;;IAEA;QACI,cAAc;QACd,aAAa;QACb,6BAA6B;QAC7B,gBAAgB;IACpB;;IAEA;QACI,iBAAiB;QACjB,iBAAiB;IACrB;;IAEA;QACI,sBAAsB;QACtB,mBAAmB;IACvB;;AAEJ","sourcesContent":["@font-face {\n    font-family: montserrat;\n    src: url(./fonts/Montserrat-VariableFont_wght.ttf);\n}\n\n:root {\n    --primary: #00aaa0;\n    --business: #3a82ee;\n    --personal: var(--primary);\n    --light: #e0e5e4;\n    --dark: #313154;\n    --danger: rgb(255, 91, 87);\n    --grey: #888;\n    --shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n\n    --business-glow: 0px 0px 4px rgba(58, 130, 238, 0.75);\n    --personal-glow: 0px 0px 4px rgba(0, 170, 160, 0.75);\n    --danger-glow: 0px 0px 4px rgba(255, 91, 87, 0.75);\n\n    --low: rgba(97, 255, 66);\n    --medium: rgb(244, 252, 2);\n    --high: var(--danger);\n\n    --low-glow: 0px 0px 4px rgba(97, 255, 66, 0.75);\n    --medium-glow: 0px 0px 4px rgba(244, 252, 2, 0.75);\n    --high-glow: 0px 0px 4px rgba(255, 91, 87, 0.75);\n    ;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: montserrat, sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: minmax(min-content, 1fr);\n    grid-template-rows: max-content 5fr min-content;\n\n    height: 100vh;\n    color: var(--dark);\n    background-color: var(--light);\n}\n\nsection {\n    margin-top: 2em;\n    margin-bottom: 2em;\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n}\n\nh3 {\n    color: var(--dark);\n    font-size: 1em;\n    font-weight: 400;\n    margin-bottom: 0.5em;\n}\n\nh4 {\n    color: var(--grey);\n    font-size: 0.875em;\n    font-weight: 700;\n    margin-bottom: 0.75em;\n}\n\n/*HEADER*/\nheader {\n    background-color: #fcf4d9;\n    box-shadow: var(--shadow);\n    z-index: 1;\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n}\n\n.header-logo {\n    grid-column: 2/3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\nheader h1 {\n    margin: 0.5rem 1rem;\n    text-transform: uppercase;\n    font-weight: 400;\n}\n\nheader img {\n    height: 3rem;\n    width: 3rem;\n}\n\n.burger-menu {\n    display: none;\n\n    /* display: flex; */\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3px;\n    height: 35px;\n    width: 35px;\n    cursor: pointer;\n    padding: 6px 3px;\n    margin: 0.5rem 1rem;\n    border: 1px solid var(--dark);\n    border-radius: 0.5rem;\n\n\n}\n\n.burger-menu:active {\n    border-color: var(--primary);\n\n    .bar {\n        background-color: var(--primary);\n    }\n}\n\nspan.bar {\n    width: 25px;\n    height: 3px;\n    background-color: var(--dark);\n    border-radius: 0.5rem;\n}\n\n\n/*MAIN*/\n\naside {\n    background-color: #8ed2c9;\n}\n\n#main {\n    display: grid;\n    grid-template-columns: minmax(min-content, 1fr) 2fr;\n}\n\n\n\n/*FOOTER*/\nfooter {\n    background-color: #d55b3e;\n    display: flex;\n    justify-content: space-between;\n}\n\nfooter div {\n    margin: 0.2rem 1rem;\n}\n\nfooter img {\n    width: 15px;\n    margin: 0 5px;\n}\n\nfooter a {\n    /* text-decoration: none; */\n    color: var(--dark);\n\n}\n\n.footer-container {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n}\n\n/*----------------*/\n\n@media only screen and (max-width: 768px) {\n    .burger-menu {\n        display: flex;\n    }\n\n    #main {\n        grid-template-columns: 1fr;\n    }\n\n    aside {\n        height: 0px;\n        overflow: hidden;\n        box-shadow: var(--shadow);\n        transition: height 0.3s ease-in-out;\n    }\n\n    .burg-active {\n        border-color: var(--primary);\n\n        .bar {\n            background-color: var(--primary);\n        }\n    }\n\n    .active {\n        display: block;\n        height: 285px;\n        /* max-height: max-content; */\n        overflow-y: auto;\n    }\n\n    .header-logo {\n        grid-column: 2/-1;\n        justify-self: end;\n    }\n\n    footer {\n        flex-direction: column;\n        align-items: center;\n    }\n\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvR0FBb0csWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFHQUFxRyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLDJEQUEyRCxvQkFBb0IsOEJBQThCLCtCQUErQixnQkFBZ0Isc0JBQXNCLDRCQUE0Qiw2QkFBNkIsNEJBQTRCLGdDQUFnQyxHQUFHLGtCQUFrQix5QkFBeUIsR0FBRyxzQkFBc0Isb0JBQW9CLG9DQUFvQyxHQUFHLHFCQUFxQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsd0JBQXdCLEdBQUcsVUFBVSxvQkFBb0IsMEJBQTBCLDhCQUE4QixrQkFBa0IsbUJBQW1CLHlCQUF5QixtQ0FBbUMsa0NBQWtDLEdBQUcsY0FBYywrQkFBK0Isa0NBQWtDLEdBQUcsaUJBQWlCLGtDQUFrQyxxQ0FBcUMsR0FBRyxlQUFlLGdDQUFnQyxtQ0FBbUMsR0FBRyxpQkFBaUIsb0JBQW9CLHFCQUFxQixpQkFBaUIsaUJBQWlCLGtCQUFrQixtQ0FBbUMsa0NBQWtDLHlCQUF5QixtQ0FBbUMsR0FBRyxxQkFBcUIsbUNBQW1DLGtDQUFrQyxHQUFHLHdCQUF3QixzQ0FBc0MscUNBQXFDLEdBQUcsc0JBQXNCLG9DQUFvQyxtQ0FBbUMsR0FBRywrQkFBK0Isa0JBQWtCLG1CQUFtQixpQkFBaUIsR0FBRyx5Q0FBeUMscUJBQXFCLGtCQUFrQiwwQkFBMEIsMkJBQTJCLHlCQUF5QixrQkFBa0Isc0NBQXNDLDRCQUE0QixxQ0FBcUMsc0JBQXNCLG1DQUFtQyxHQUFHLCtDQUErQyxvQkFBb0IsR0FBRywyREFBMkQseUJBQXlCLHVCQUF1QixHQUFHLHdCQUF3Qix5QkFBeUIsR0FBRyxnQkFBZ0Isb0JBQW9CLDBCQUEwQiwrQkFBK0Isb0JBQW9CLDRCQUE0QixnQ0FBZ0MsMEJBQTBCLEdBQUcsc0JBQXNCLHFCQUFxQix5QkFBeUIsc0JBQXNCLEdBQUcsOEJBQThCLG1CQUFtQixHQUFHLG9DQUFvQyx5QkFBeUIsMEJBQTBCLEdBQUcseUJBQXlCLG9CQUFvQiwwQkFBMEIsR0FBRyxnQ0FBZ0MscUJBQXFCLHNCQUFzQiw2QkFBNkIsa0JBQWtCLHNCQUFzQixtQ0FBbUMsR0FBRyxzQ0FBc0Msb0JBQW9CLEdBQUcsK0JBQStCLDJCQUEyQix1Q0FBdUMsR0FBRyxpQ0FBaUMsc0NBQXNDLEdBQUcseUNBQXlDLG9DQUFvQyx5QkFBeUIsR0FBRyxvQkFBb0IsbUNBQW1DLHNDQUFzQyxHQUFHLHVCQUF1QixzQ0FBc0MscUNBQXFDLEdBQUcscUJBQXFCLG9DQUFvQyxtQ0FBbUMsR0FBRyxtQkFBbUI7QUFDemxLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TXZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTywwRkFBMEYsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsOERBQThELHFCQUFxQixrQkFBa0IsMEJBQTBCLDJCQUEyQix5QkFBeUIsNkJBQTZCLDRCQUE0QixnQ0FBZ0MsNEJBQTRCLEdBQUcsNEJBQTRCLG9CQUFvQiw0Q0FBNEMscUJBQXFCLDRCQUE0QixHQUFHLDREQUE0RCxvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsc0JBQXNCLDZCQUE2Qiw0QkFBNEIsZ0NBQWdDLHNCQUFzQixHQUFHLDZCQUE2Qiw0QkFBNEIsR0FBRywwQkFBMEIsMEJBQTBCLEdBQUcsa0NBQWtDLDBCQUEwQixvQ0FBb0MseUJBQXlCLDRCQUE0QiwyQkFBMkIsR0FBRywwQ0FBMEMscUJBQXFCLGtCQUFrQiwwQkFBMEIsMkJBQTJCLGtCQUFrQix1Q0FBdUMsNEJBQTRCLHVDQUF1QyxzQkFBc0IsbUNBQW1DLEdBQUcsZ0RBQWdELG9CQUFvQixHQUFHLG1CQUFtQjtBQUMzakU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsT0FBTyx5RkFBeUYsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxjQUFjLHFDQUFxQyw0QkFBNEIsR0FBRyxlQUFlLG1CQUFtQix5QkFBeUIsR0FBRyxnQkFBZ0Isd0JBQXdCLHVCQUF1QixHQUFHLHVCQUF1Qiw0QkFBNEIseUJBQXlCLG1CQUFtQixLQUFLLCtDQUErQyx5QkFBeUIsMEJBQTBCLHVCQUF1QixHQUFHLGlCQUFpQix3QkFBd0IsNEJBQTRCLEdBQUcsMENBQTBDLG9CQUFvQiwwQkFBMEIsR0FBRyxZQUFZLG9CQUFvQixxQkFBcUIsMkJBQTJCLEdBQUcsdUJBQXVCLHNCQUFzQixHQUFHLHFCQUFxQixvQkFBb0IsMEJBQTBCLDRCQUE0QixHQUFHLHVCQUF1Qix3QkFBd0IseUJBQXlCLEdBQUcsd0JBQXdCLHNCQUFzQixvQ0FBb0MseUJBQXlCLHVCQUF1Qix3QkFBd0IsbUNBQW1DLEdBQUcsMERBQTBELDRCQUE0QixtQ0FBbUMsS0FBSyxtQkFBbUI7QUFDN3pEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDbkYxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBa0g7QUFDbEg7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxrR0FBTzs7OztBQUk0RDtBQUNwRixPQUFPLGlFQUFlLGtHQUFPLElBQUksa0dBQU8sVUFBVSxrR0FBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUE0RztBQUM1RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRGQUFPOzs7O0FBSXNEO0FBQzlFLE9BQU8saUVBQWUsNEZBQU8sSUFBSSw0RkFBTyxVQUFVLDRGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBeUc7QUFDekc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx5RkFBTzs7OztBQUltRDtBQUMzRSxPQUFPLGlFQUFlLHlGQUFPLElBQUkseUZBQU8sVUFBVSx5RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXdHO0FBQ3hHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJa0Q7QUFDMUUsT0FBTyxpRUFBZSx3RkFBTyxJQUFJLHdGQUFPLFVBQVUsd0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNieUM7QUFDZjs7QUFFWDtBQUNmOztBQUVBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsNkNBQTZDOztBQUU3QyxJQUFJLGlEQUFJOztBQUVSO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCZ0U7O0FBRXpEO0FBQ1A7QUFDQTs7QUFFQSxJQUFJLHlDQUFLO0FBQ1Qsd0RBQXdEO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxhQUFhO0FBQzlDO0FBQ0E7O0FBRUEsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGlEQUFTOztBQUVyQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQVM7QUFDekI7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBLFlBQVksbURBQVU7QUFDdEI7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZnRDs7QUFFakM7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvREFBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNDeUM7QUFDUDtBQUNXOztBQUU3QztBQUNlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0Q7QUFDdEQ7O0FBRUEsb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0EsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxRQUFRLGdEQUFPO0FBQ2YsUUFBUSwwREFBWTtBQUNwQjtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDdkZrRDs7QUFFbkM7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixvREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DbUM7QUFDNkI7QUFDbkI7QUFDTDtBQUNLOztBQUV0Qzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsV0FBVztBQUMzQztBQUNBLHNDQUFzQyxjQUFjO0FBQ3BEO0FBQ0E7QUFDQSxzQ0FBc0MsTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLOztBQUUzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsYUFBYTtBQUNsRDtBQUNBOztBQUVBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFZO0FBQ2hDO0FBQ0EsaUJBQWlCOztBQUVqQixhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvREFBWTtBQUM1Qjs7QUFFQSxhQUFhOzs7QUFHYjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxvREFBWTtBQUNwQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8scURBQWE7QUFDcEI7QUFDQSxXQUFXLDRDQUFRO0FBQ25CLHVCQUF1Qiw0Q0FBUTtBQUMvQixTQUFTO0FBQ1QsUUFBUSx3REFBVztBQUNuQixRQUFRLDBEQUFZO0FBQ3BCOztBQUVBLE9BQU8sMERBQWU7QUFDdEIsS0FBSzs7O0FBR0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVBnQztBQUNlO0FBQ1A7O0FBRWpDO0FBQ1A7QUFDQTs7QUFFQSxHQUFHLDRDQUFRO0FBQ1g7QUFDQTs7QUFFQSxnQ0FBZ0MsY0FBYztBQUM5QztBQUNBLEtBQUs7O0FBRUwsSUFBSSxxREFBa0I7O0FBRXRCOztBQUVlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRDtBQUN0RDs7QUFFQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFFBQVEsbURBQVU7QUFDbEI7QUFDQTtBQUNBLEtBQUs7Ozs7O0FBS0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEk2QjtBQUNtQzs7QUFFakQ7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSx5Q0FBSztBQUNULHdEQUF3RDtBQUN4RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsYUFBYTtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVksaURBQVM7QUFDckI7O0FBRUEsU0FBUzs7QUFFVDtBQUNBLFlBQVksbURBQVU7QUFDdEIsWUFBWSxpREFBUztBQUNyQjtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0RBQU87QUFDZjtBQUNBLG9CQUFvQix5Q0FBSztBQUN6QixLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFK0I7QUFDVTtBQUNBO0FBQ1E7O0FBRWQ7O0FBRXBCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBSSw0Q0FBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZDQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZPOztBQUVBO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDTzs7QUFFQTtBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVPOztBQUVBO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRXFCO0FBQ29CO0FBQ0U7QUFDRjtBQUNVO0FBQ0Q7QUFDRDtBQUNPO0FBQ0Q7QUFDVDs7QUFFOUMsOERBQU07QUFDTiwrREFBTztBQUNQLDhEQUFNO0FBQ04sbUVBQVc7QUFDWCxxRUFBWTs7O0FBR1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUFXO0FBQ25CLFFBQVEscUVBQVk7QUFDcEIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQVU7QUFDbEIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQWE7QUFDckI7O0FBRUEsQ0FBQzs7QUFFRDtBQUNPO0FBQ1A7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0VBQVcsQ0FBQyx1REFBUTtBQUNoQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9zdHlsZXMvZm9ybS1hbmQtdG9kb2xpc3QuY3NzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL25vdGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9wcm9qZWN0SXRlbS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9zdHlsZXMvcHJvamVjdHMuY3NzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL3NpZGViYXIuY3NzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL2Zvcm0tYW5kLXRvZG9saXN0LmNzcz85ZjkxIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL25vdGVzLmNzcz9jOWJjIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL3Byb2plY3RJdGVtLmNzcz9lNDBjIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL3Byb2plY3RzLmNzcz8xYWFhIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvc3R5bGVzL3NpZGViYXIuY3NzPzQ4MTYiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXlUb0RvLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9xdWlja05vdGVzLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLXRoaW5ncy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby10aGluZ3MtcHJvamVjdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tdGhpbmdzLXByb2plY3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuOnJvb3Qge1xuICAgIC0tcHJpbWFyeTogIzAwYWFhMDtcbiAgICAtLWJ1c2luZXNzOiAjM2E4MmVlO1xuICAgIC0tcGVyc29uYWw6IHZhcigtLXByaW1hcnkpO1xuICAgIC0tbGlnaHQ6ICNlMGU1ZTQ7XG4gICAgLS1kYXJrOiAjMzEzMTU0O1xuICAgIC0tZGFuZ2VyOiByZ2IoMjU1LCA5MSwgODcpO1xuICAgIC0tZ3JleTogIzg4ODtcbiAgICAtLXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gICAgLS1idXNpbmVzcy1nbG93OiAwcHggMHB4IDRweCByZ2JhKDU4LCAxMzAsIDIzOCwgMC43NSk7XG4gICAgLS1wZXJzb25hbC1nbG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDE3MCwgMTYwLCAwLjc1KTtcbiAgICAtLWRhbmdlci1nbG93OiAwcHggMHB4IDRweCByZ2JhKDI1NSwgOTEsIDg3LCAwLjc1KTtcblxuICAgIC0tbG93OiByZ2JhKDk3LCAyNTUsIDY2KTtcbiAgICAtLW1lZGl1bTogcmdiKDI0NCwgMjUyLCAyKTtcbiAgICAtLWhpZ2g6IHZhcigtLWRhbmdlcik7XG5cbiAgICAtLWxvdy1nbG93OiAwcHggMHB4IDRweCByZ2JhKDk3LCAyNTUsIDY2LCAwLjc1KTtcbiAgICAtLW1lZGl1bS1nbG93OiAwcHggMHB4IDRweCByZ2JhKDI0NCwgMjUyLCAyLCAwLjc1KTtcbiAgICAtLWhpZ2gtZ2xvdzogMHB4IDBweCA0cHggcmdiYSgyNTUsIDkxLCA4NywgMC43NSk7XG4gICAgO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0LCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgNWZyIG1pbi1jb250ZW50O1xuXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG5zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgIHBhZGRpbmctbGVmdDogMS41ZW07XG4gICAgcGFkZGluZy1yaWdodDogMS41ZW07XG59XG5cbmgzIHtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuaDQge1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgICBmb250LXNpemU6IDAuODc1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XG59XG5cbi8qSEVBREVSKi9cbmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjRkOTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyO1xufVxuXG4uaGVhZGVyLWxvZ28ge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cbmhlYWRlciBoMSB7XG4gICAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmhlYWRlciBpbWcge1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogM3JlbTtcbn1cblxuLmJ1cmdlci1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA2cHggM3B4O1xuICAgIG1hcmdpbjogMC41cmVtIDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyayk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuXG5cbn1cblxuLmJ1cmdlci1tZW51OmFjdGl2ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblxuICAgIC5iYXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG59XG5cbnNwYW4uYmFyIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cblxuLypNQUlOKi9cblxuYXNpZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZWQyYzk7XG59XG5cbiNtYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LCAxZnIpIDJmcjtcbn1cblxuXG5cbi8qRk9PVEVSKi9cbmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1NWIzZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuZm9vdGVyIGRpdiB7XG4gICAgbWFyZ2luOiAwLjJyZW0gMXJlbTtcbn1cblxuZm9vdGVyIGltZyB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuZm9vdGVyIGEge1xuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgKi9cbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG5cbn1cblxuLmZvb3Rlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5idXJnZXItbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgI21haW4ge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbiAgICBhc2lkZSB7XG4gICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICAuYnVyZy1hY3RpdmUge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuXG4gICAgICAgIC5iYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aXZlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMjg1cHg7XG4gICAgICAgIC8qIG1heC1oZWlnaHQ6IG1heC1jb250ZW50OyAqL1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cblxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyLy0xO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICB9XG5cbiAgICBmb290ZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osd0NBQXdDOztJQUV4QyxxREFBcUQ7SUFDckQsb0RBQW9EO0lBQ3BELGtEQUFrRDs7SUFFbEQsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixxQkFBcUI7O0lBRXJCLCtDQUErQztJQUMvQyxrREFBa0Q7SUFDbEQsZ0RBQWdEOztBQUVwRDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0MsK0NBQStDOztJQUUvQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7O0lBRWIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixxQkFBcUI7OztBQUd6Qjs7QUFFQTtJQUNJLDRCQUE0Qjs7SUFFNUI7UUFDSSxnQ0FBZ0M7SUFDcEM7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7O0FBR0EsT0FBTzs7QUFFUDtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtREFBbUQ7QUFDdkQ7Ozs7QUFJQSxTQUFTO0FBQ1Q7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsbUNBQW1DO0lBQ3ZDOztJQUVBO1FBQ0ksNEJBQTRCOztRQUU1QjtZQUNJLGdDQUFnQztRQUNwQztJQUNKOztJQUVBO1FBQ0ksY0FBYztRQUNkLGFBQWE7UUFDYiw2QkFBNkI7UUFDN0IsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnk6ICMwMGFhYTA7XFxuICAgIC0tYnVzaW5lc3M6ICMzYTgyZWU7XFxuICAgIC0tcGVyc29uYWw6IHZhcigtLXByaW1hcnkpO1xcbiAgICAtLWxpZ2h0OiAjZTBlNWU0O1xcbiAgICAtLWRhcms6ICMzMTMxNTQ7XFxuICAgIC0tZGFuZ2VyOiByZ2IoMjU1LCA5MSwgODcpO1xcbiAgICAtLWdyZXk6ICM4ODg7XFxuICAgIC0tc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuXFxuICAgIC0tYnVzaW5lc3MtZ2xvdzogMHB4IDBweCA0cHggcmdiYSg1OCwgMTMwLCAyMzgsIDAuNzUpO1xcbiAgICAtLXBlcnNvbmFsLWdsb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMTcwLCAxNjAsIDAuNzUpO1xcbiAgICAtLWRhbmdlci1nbG93OiAwcHggMHB4IDRweCByZ2JhKDI1NSwgOTEsIDg3LCAwLjc1KTtcXG5cXG4gICAgLS1sb3c6IHJnYmEoOTcsIDI1NSwgNjYpO1xcbiAgICAtLW1lZGl1bTogcmdiKDI0NCwgMjUyLCAyKTtcXG4gICAgLS1oaWdoOiB2YXIoLS1kYW5nZXIpO1xcblxcbiAgICAtLWxvdy1nbG93OiAwcHggMHB4IDRweCByZ2JhKDk3LCAyNTUsIDY2LCAwLjc1KTtcXG4gICAgLS1tZWRpdW0tZ2xvdzogMHB4IDBweCA0cHggcmdiYSgyNDQsIDI1MiwgMiwgMC43NSk7XFxuICAgIC0taGlnaC1nbG93OiAwcHggMHB4IDRweCByZ2JhKDI1NSwgOTEsIDg3LCAwLjc1KTtcXG4gICAgO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDVmciBtaW4tY29udGVudDtcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMS41ZW07XFxufVxcblxcbmgzIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbmg0IHtcXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBmb250LXNpemU6IDAuODc1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVlbTtcXG59XFxuXFxuLypIRUFERVIqL1xcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2Y0ZDk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxufVxcblxcbi5oZWFkZXItbG9nbyB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBtYXJnaW46IDAuNXJlbSAxcmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG59XFxuXFxuLmJ1cmdlci1tZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3B4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDZweCAzcHg7XFxuICAgIG1hcmdpbjogMC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFxuXFxufVxcblxcbi5idXJnZXItbWVudTphY3RpdmUge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xcblxcbiAgICAuYmFyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICB9XFxufVxcblxcbnNwYW4uYmFyIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG5cXG4vKk1BSU4qL1xcblxcbmFzaWRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhlZDJjOTtcXG59XFxuXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwgMWZyKSAyZnI7XFxufVxcblxcblxcblxcbi8qRk9PVEVSKi9cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDU1YjNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmZvb3RlciBkaXYge1xcbiAgICBtYXJnaW46IDAuMnJlbSAxcmVtO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiBub25lOyAqL1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuXFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAuYnVyZ2VyLW1lbnUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAjbWFpbiB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcblxcbiAgICBhc2lkZSB7XFxuICAgICAgICBoZWlnaHQ6IDBweDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG5cXG4gICAgLmJ1cmctYWN0aXZlIHtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuXFxuICAgICAgICAuYmFyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuYWN0aXZlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgaGVpZ2h0OiAyODVweDtcXG4gICAgICAgIC8qIG1heC1oZWlnaHQ6IG1heC1jb250ZW50OyAqL1xcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyLWxvZ28ge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvLTE7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgfVxcblxcbiAgICBmb290ZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBpbnB1dDpub3QoW3R5cGU9XCJyYWRpb1wiXSk6bm90KFt0eXBlPVwiY2hlY2tib3hcIl0pLFxuYnV0dG9uIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG4uY3JlYXRlLXRvZG8gaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uY3JlYXRlLXRvZG8gLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLWdhcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5jcmVhdGUtdG9kbyAub3B0aW9ucyBsYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0sXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5idWJibGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJ1c2luZXNzKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idXNpbmVzcy1nbG93KTtcbn1cblxuLmJ1YmJsZS5wZXJzb25hbCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wZXJzb25hbCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tcGVyc29uYWwtZ2xvdyk7XG59XG5cbi5idWJibGU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXNpbmVzcyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnVzaW5lc3MtZ2xvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idWJibGUucGVyc29uYWw6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wZXJzb25hbCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tcGVyc29uYWwtZ2xvdyk7XG59XG5cbmlucHV0OmNoZWNrZWR+LmJ1YmJsZTo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uY3JlYXRlLXRvZG8gLm9wdGlvbnMgbGFiZWwgZGl2IHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jcmVhdGUtdG9kbyBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1wZXJzb25hbC1nbG93KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNzU7XG59XG5cbi50b2RvLWxpc3QgLmxpc3Qge1xuICAgIG1hcmdpbjogMXJlbSAwO1xufVxuXG4udG9kby1saXN0IC50b2RvLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnRvZG8taXRlbSBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvZG8taXRlbSAudG9kby1jb250ZW50IHtcbiAgICBmbGV4OiAxIDEgMCU7XG59XG5cbi50b2RvLWl0ZW0gLnRvZG8tY29udGVudCBpbnB1dCB7XG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi50b2RvLWl0ZW0gLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZG8taXRlbSAuYWN0aW9ucyBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4udG9kby1pdGVtIC5hY3Rpb25zIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43NTtcbn1cblxuLnRvZG8taXRlbSAuYWN0aW9ucyAuZWRpdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi50b2RvLWl0ZW0gLmFjdGlvbnMgLmRlbGV0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcbn1cblxuLnRvZG8taXRlbS5kb25lIC50b2RvLWNvbnRlbnQgaW5wdXQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9ybS1hbmQtdG9kb2xpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJpbnB1dDpub3QoW3R5cGU9XFxcInJhZGlvXFxcIl0pOm5vdChbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSksXFxuYnV0dG9uIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IGluaXRpYWw7XFxufVxcblxcbi5jcmVhdGUtdG9kbyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4uY3JlYXRlLXRvZG8gLm9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLWdhcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4uY3JlYXRlLXRvZG8gLm9wdGlvbnMgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ1YmJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJ1c2luZXNzKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnVzaW5lc3MtZ2xvdyk7XFxufVxcblxcbi5idWJibGUucGVyc29uYWwge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXBlcnNvbmFsKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tcGVyc29uYWwtZ2xvdyk7XFxufVxcblxcbi5idWJibGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnVzaW5lc3MpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idXNpbmVzcy1nbG93KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYnViYmxlLnBlcnNvbmFsOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBlcnNvbmFsKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tcGVyc29uYWwtZ2xvdyk7XFxufVxcblxcbmlucHV0OmNoZWNrZWR+LmJ1YmJsZTo6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY3JlYXRlLXRvZG8gLm9wdGlvbnMgbGFiZWwgZGl2IHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXBlcnNvbmFsLWdsb3cpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jcmVhdGUtdG9kbyBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxufVxcblxcbi50b2RvLWxpc3QgLmxpc3Qge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnRvZG8tbGlzdCAudG9kby1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udG9kby1pdGVtIGxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1pdGVtIC50b2RvLWNvbnRlbnQge1xcbiAgICBmbGV4OiAxIDEgMCU7XFxufVxcblxcbi50b2RvLWl0ZW0gLnRvZG8tY29udGVudCBpbnB1dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuLnRvZG8taXRlbSAuYWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWl0ZW0gLmFjdGlvbnMgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZG8taXRlbSAuYWN0aW9ucyBidXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbn1cXG5cXG4udG9kby1pdGVtIC5hY3Rpb25zIC5lZGl0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4udG9kby1pdGVtIC5hY3Rpb25zIC5kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xcbn1cXG5cXG4udG9kby1pdGVtLmRvbmUgLnRvZG8tY29udGVudCBpbnB1dCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI25vdGVzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyMjBweCk7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ubm90ZS1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ub3RlLWl0ZW0gaDMge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XG4gICAgcGFkZGluZzogNHB4IDA7XG59XG5cbi5ub3RlLWl0ZW0gdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG4jbm90ZXMgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMjBweDtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1wcmltYXJ5LWdsb3cpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4jbm90ZXMgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43NTtcbn1cblxuLmRlbGV0ZS1ub3RlIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNyb3NzIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIC8qIENyb3NzIGNvbG9yICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3Jvc3M6OmJlZm9yZSxcbi5jcm9zczo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbn1cblxuLmNyb3NzOjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpO1xufVxuXG4uY3Jvc3M6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC00NWRlZyk7XG59XG5cbi5kZWxldGUtbm90ZTpob3Zlcixcbi5kZWxldGUtbm90ZTphY3RpdmUge1xuICAgIG9wYWNpdHk6IDAuNzU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25vdGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHlCQUF5Qjs7SUFFekIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsZUFBZTs7SUFFZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0FBQ1g7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7O0lBRUksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbm90ZXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjIwcHgpO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5ub3RlLWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBoZWlnaHQ6IDIyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubm90ZS1pdGVtIGgzIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JleSk7XFxuICAgIHBhZGRpbmc6IDRweCAwO1xcbn1cXG5cXG4ubm90ZS1pdGVtIHRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogaW5pdGlhbDtcXG59XFxuXFxuI25vdGVzIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIyMHB4O1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXByaW1hcnktZ2xvdyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuI25vdGVzIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLmRlbGV0ZS1ub3RlIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3Jvc3Mge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgLyogQ3Jvc3MgY29sb3IgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY3Jvc3M6OmJlZm9yZSxcXG4uY3Jvc3M6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLmNyb3NzOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmNyb3NzOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLmRlbGV0ZS1ub3RlOmhvdmVyLFxcbi5kZWxldGUtbm90ZTphY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFBST0pFQ1QgRk9STSAqL1xuXG4ucHJpb3JpdHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG59XG5cbi5wcmlvcml0eSBoMyB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ucHJpb3JpdHktbGFiZWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ucHJpb3JpdHkgbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmJsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1sb3cpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWxvdy1nbG93KTtcbn1cblxuLmJibC5sb3cge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbG93KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1sb3ctZ2xvdyk7XG59XG5cbi5iYmwubWVkaXVtIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1lZGl1bSk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWVkaXVtLWdsb3cpO1xufVxuXG4uYmJsLmhpZ2gge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGlnaCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0taGlnaC1nbG93KTtcbn1cblxuLmJibDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbG93LWdsb3cpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYmJsLmxvdzo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbG93LWdsb3cpO1xufVxuXG4uYmJsLm1lZGl1bTo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bSk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWVkaXVtLWdsb3cpO1xufVxuXG4uYmJsLmhpZ2g6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1oaWdoLWdsb3cpO1xufVxuXG5pbnB1dDpjaGVja2Vkfi5iYmw6OmFmdGVyIHtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XCJidXR0b25cIl0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWRhbmdlci1nbG93KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNzU7XG59XG5cbi8qIFBST0pFQ1QgSVRFTSBBTkQgVEFTS1MgTElTVCAqL1xuXG4ucHJvamVjdC1pdGVtIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuXG4ucHJvamVjdC1pdGVtIGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YXNrLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4udGFzay1pdGVtIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1pdGVtIC50YXNrLWNvbnRlbnQge1xuICAgIGZsZXg6IDEgMSAwJTtcbn1cblxuLnRhc2staXRlbSAudGFzay1jb250ZW50IGlucHV0IHtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cblxuLnRhc2staXRlbSAuYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFzay1pdGVtIC5hY3Rpb25zIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi50YXNrLWl0ZW0gLmFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc1O1xufVxuXG4udGFzay1pdGVtIC5hY3Rpb25zIC5lZGl0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnRhc2staXRlbSAuYWN0aW9ucyAuZGVsZXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xufVxuXG4udGFzay1pdGVtLmRvbmUgLnRhc2stY29udGVudCBpbnB1dCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xufVxuXG5zcGFuIC5iYmwgLmxvdyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbG93KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1idXNpbmVzcy1sb3cpO1xufVxuXG5zcGFuIC5iYmwgLm1lZGl1bSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWVkaXVtKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1tZWRpdW0tZ2xvdyk7XG59XG5cbnNwYW4gLmJibCAuaGlnaCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taGlnaCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0taGlnaC1nbG93KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcHJvamVjdEl0ZW0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjs7QUFFakI7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLGdDQUFnQzs7QUFFaEM7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBQUk9KRUNUIEZPUk0gKi9cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxufVxcblxcbi5wcmlvcml0eSBoMyB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ucHJpb3JpdHkgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYmJsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbG93KTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tbG93LWdsb3cpO1xcbn1cXG5cXG4uYmJsLmxvdyB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbG93KTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tbG93LWdsb3cpO1xcbn1cXG5cXG4uYmJsLm1lZGl1bSB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWVkaXVtKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWVkaXVtLWdsb3cpO1xcbn1cXG5cXG4uYmJsLmhpZ2gge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhpZ2gpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1oaWdoLWdsb3cpO1xcbn1cXG5cXG4uYmJsOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWxvdy1nbG93KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYmJsLmxvdzo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3cpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1sb3ctZ2xvdyk7XFxufVxcblxcbi5iYmwubWVkaXVtOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bSk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLW1lZGl1bS1nbG93KTtcXG59XFxuXFxuLmJibC5oaWdoOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1oaWdoLWdsb3cpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2Vkfi5iYmw6OmFmdGVyIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kYW5nZXItZ2xvdyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNyZWF0ZS10b2RvIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLyogUFJPSkVDVCBJVEVNIEFORCBUQVNLUyBMSVNUICovXFxuXFxuLnByb2plY3QtaXRlbSBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuXFxuLnByb2plY3QtaXRlbSBoMyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2staXRlbSBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbSAudGFzay1jb250ZW50IHtcXG4gICAgZmxleDogMSAxIDAlO1xcbn1cXG5cXG4udGFzay1pdGVtIC50YXNrLWNvbnRlbnQgaW5wdXQge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblxcbi50YXNrLWl0ZW0gLmFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1pdGVtIC5hY3Rpb25zIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrLWl0ZW0gLmFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLnRhc2staXRlbSAuYWN0aW9ucyAuZWRpdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLnRhc2staXRlbSAuYWN0aW9ucyAuZGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcXG59XFxuXFxuLnRhc2staXRlbS5kb25lIC50YXNrLWNvbnRlbnQgaW5wdXQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG5zcGFuIC5iYmwgLmxvdyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxvdyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJ1c2luZXNzLWxvdyk7XFxufVxcblxcbnNwYW4gLmJibCAubWVkaXVtIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWVkaXVtKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWVkaXVtLWdsb3cpO1xcbn1cXG5cXG5zcGFuIC5iYmwgLmhpZ2gge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oaWdoKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0taGlnaC1nbG93KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjcHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuI3Byb2plY3QtZm9ybSAub3B0aW9ucyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtZ2FwOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuI3Byb2plY3QtZm9ybSAub3B0aW9ucyBsYWJlbCxcbiNwcm9qZWN0LWZvcm0gI2R1ZS1kYXRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNwcm9qZWN0LWZvcm0gI2R1ZS1kYXRlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuXG4jcHJvamVjdC1mb3JtICNkdWVEYXRlIGlucHV0IHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5cbiNwcm9qZWN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm94LXNoYWRvdzogdmFyKC0tcGVyc29uYWwtZ2xvdyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbiNwcm9qZWN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43NTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcHJvamVjdHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3Byb2plY3QtZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtIC5vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSAub3B0aW9ucyBsYWJlbCxcXG4jcHJvamVjdC1mb3JtICNkdWUtZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtICNkdWUtZGF0ZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSAjZHVlRGF0ZSBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tcGVyc29uYWwtZ2xvdyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNlbGVjdGVkIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5ncmVldGluZyB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5hc2lkZT51bCB7XG4gICAgbWFyZ2luOiAxcmVtIDJyZW07XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmdyZWV0aW5nIC50aXRsZSB7fVxuXG4uZ3JlZXRpbmcgLnRpdGxlIGlucHV0IHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgbWluLXdpZHRoOiAwO1xuXG59XG5cbi5ncmVldGluZyAudGl0bGUgaW5wdXQsXG4uZ3JlZXRpbmcgLnRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5hc2lkZSB1bCBsaSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5cbmFzaWRlIHVsIGxpOm5vdChbaWQ9XCJwcm9qZWN0c1wiXSkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxudWwgaW1nIHtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG5hc2lkZSB1bCBsaTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5saSNwcm9qZWN0cyBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbmxpI3Byb2plY3RzIHVsIGxpIHtcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbmxpI3Byb2plY3RzIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmxpI3Byb2plY3RzIGJ1dHRvbjphY3RpdmUsXG5saSNwcm9qZWN0cyBidXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBLGtCQUFrQjs7QUFFbEI7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTs7QUFFaEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsNEJBQTRCOztBQUVoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2VsZWN0ZWQge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5ncmVldGluZyB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG5hc2lkZT51bCB7XFxuICAgIG1hcmdpbjogMXJlbSAycmVtO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZ3JlZXRpbmcgLnRpdGxlIHt9XFxuXFxuLmdyZWV0aW5nIC50aXRsZSBpbnB1dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWluLXdpZHRoOiAwO1xcblxcbn1cXG5cXG4uZ3JlZXRpbmcgLnRpdGxlIGlucHV0LFxcbi5ncmVldGluZyAudGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmFzaWRlIHVsIGxpIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuXFxuYXNpZGUgdWwgbGk6bm90KFtpZD1cXFwicHJvamVjdHNcXFwiXSkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG51bCBpbWcge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbmFzaWRlIHVsIGxpOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5saSNwcm9qZWN0cyBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbmxpI3Byb2plY3RzIHVsIGxpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxubGkjcHJvamVjdHMgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAycHggOHB4O1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxubGkjcHJvamVjdHMgYnV0dG9uOmFjdGl2ZSxcXG5saSNwcm9qZWN0cyBidXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLWFuZC10b2RvbGlzdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm0tYW5kLXRvZG9saXN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3Rlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vdGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0SXRlbS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RJdGVtLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0cy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vc3R5bGVzL2Zvcm0tYW5kLXRvZG9saXN0LmNzcyc7XG5pbXBvcnQgZm9ybSBmcm9tICcuL2Zvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZhdWx0bGlzdCgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSAvL2NvbnRlbnQgZGl2XG5cbiAgICBjb25zdCB0b2RvTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7IC8vIFRPRE8gTElTVCBPRiBJVEVNU1xuICAgIHRvZG9MaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QnKTtcbiAgICBjb25zdCB0b2RvTGlzdEVsZW1lbnRfaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRvZG9MaXN0RWxlbWVudF9oMy50ZXh0Q29udGVudCA9ICdUbyBEbyBMaXN0JztcbiAgICB0b2RvTGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb0xpc3RFbGVtZW50X2gzKTtcblxuICAgIGNvbnN0IHRvZG9MaXN0X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9MaXN0X2Rpdi5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgdG9kb0xpc3RfZGl2LmlkID0gJ3RvZG8tbGlzdCc7XG5cblxuICAgIHRvZG9MaXN0RWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvTGlzdF9kaXYpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodG9kb0xpc3RFbGVtZW50KTsgLy9hZGQgZGVmYXVsdCBsaXN0IHRvIG1haW4gZGl2XG5cbiAgICBmb3JtKCk7XG5cbiAgICByZXR1cm4gY29udGVudERpdjtcbn0iLCJpbXBvcnQgeyB0b2Rvcywgc2F2ZVRvZG9zLCBhZGRUb2RvLCByZW1vdmVUb2RvIH0gZnJvbSAnLi90b2Rvcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VG9Eb3MoKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1saXN0Jyk7XG4gICAgdG9kb0xpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgICB0b2Rvcy5zb3J0KChhLCBiKSA9PiBiLmNyZWF0ZWRBdCAtIGEuY3JlYXRlZEF0KS5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBUT0RPIElURU1cbiAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBpbnB1dC5jaGVja2VkID0gdG9kby5kb25lO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZScpO1xuICAgIFxuICAgICAgICBpZiAodG9kby5jYXRlZ29yeSA9PSAncGVyc29uYWwnKSB7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3BlcnNvbmFsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2J1c2luZXNzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9UT0RPIElURU0gQ09OVEVOVFxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGVudCcpO1xuICAgICAgICBjb25zdCBjb250ZW50X2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29udGVudF9pbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICBjb250ZW50X2lucHV0LnZhbHVlID0gYCR7dG9kby5jb250ZW50fWA7XG4gICAgICAgIGNvbnRlbnRfaW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsIHRydWUpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRfaW5wdXQpO1xuXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9BQ1RJT04gQlVUVE9OU1xuICAgICAgICBhY3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2FjdGlvbnMnKTtcbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICAgICAgZWRpdC50ZXh0Q29udGVudCA9ICdFZGl0J1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGFjdGlvbnMpO1xuXG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcblxuICAgICAgICBpZiAodG9kby5kb25lKSB7XG4gICAgICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgdG9kby5kb25lID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIHNhdmVUb2RvcygpO1xuXG4gICAgICAgICAgICBpZiAodG9kby5kb25lKSB7XG4gICAgICAgICAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXNwbGF5VG9Eb3MoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCAgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0b2RvLmNvbnRlbnQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICBzYXZlVG9kb3MoKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5VG9Eb3MoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICByZW1vdmVUb2RvKHRvZG8pO1xuICAgICAgICAgICAgZGlzcGxheVRvRG9zKCk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH0pXG4gICAgXG5cbn1cblxuIiwiaW1wb3J0IGdpdEljb24gZnJvbSAnLi4vYXNzZXRzL2dpdGh1Yi1sb2dvLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuXG4gICAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGFpbmVyJyk7XG4gIFxuICAgICAgY29uc3QgZm9vdGVySWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgZm9vdGVySWNvbi5zcmMgPSBnaXRJY29uOyBcbiAgICAgIGZvb3RlckNvbnRhaW5lci5pbm5lckhUTUwgPSBcImJ1aWx0ICYgZGVzaWduZWQgYnlcIjtcbiAgICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJJY29uKTtcbiAgICAgIGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBnaXRMaW5rLmlubmVySFRNTCA9ICdtYXhpbWt3c2tpJztcbiAgICAgIGdpdExpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICAgIGdpdExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gICAgICBnaXRMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9tYXhpbWt3c2tpXCI7XG4gICAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG4gICAgICBcbiAgICAgIGZvb3RlckNvbnRhaW5lci5pbm5lckhUTUwgKz0gXCIgfCBcIjtcbiAgICAgIGNvbnN0IHNvdXJjZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBzb3VyY2VMaW5rLmlubmVySFRNTCA9ICdzb3VyY2UnO1xuICAgICAgc291cmNlTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgc291cmNlTGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgICAgIHNvdXJjZUxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL21heGlta3dza2kvdG9kby10aGluZ3MtcHJvamVjdFwiO1xuXG4gICAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc291cmNlTGluayk7XG5cbiAgICAgIGNvbnN0IGljb25zQnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGljb25zQnkuY2xhc3NMaXN0LmFkZCgnaWNvbnMtcmVmJyk7XG4gICAgICBpY29uc0J5LnRleHRDb250ZW50ID0gJ0ljb25zIGJ5ICc7XG4gICAgICBjb25zdCBpY29uc0FuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGljb25zQW5jaG9yLmhyZWYgPSAnaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvdG8tZG8nO1xuICAgICAgaWNvbnNBbmNob3IudGl0bGUgPSAndG8gZG8gaWNvbnMnO1xuICAgICAgaWNvbnNBbmNob3IudGV4dENvbnRlbnQgPSAnR3JhcGhpY3MgUGxhenphIC0gRmxhdGljb24nO1xuICAgICAgaWNvbnNCeS5hcHBlbmRDaGlsZChpY29uc0FuY2hvcik7XG4gICAgICBcbiAgICAgIFxuXG4gICAgICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKGZvb3RlckNvbnRhaW5lcik7XG4gICAgICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKGljb25zQnkpO1xuXG4gICAgcmV0dXJuIGZvb3RlckVsZW1lbnQ7XG59IiwiaW1wb3J0ICcuLi9zdHlsZXMvZm9ybS1hbmQtdG9kb2xpc3QuY3NzJztcbmltcG9ydCB7IGFkZFRvZG8gfSBmcm9tICcuL3RvZG9zJztcbmltcG9ydCB7IGRpc3BsYXlUb0RvcyB9IGZyb20gJy4vZGlzcGxheVRvRG8nO1xuXG4vKiBUTy1ETyBGT1JNICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbiAgICAvL0ZPUk1cbiAgICBjb25zdCBjcmVhdGVUb0RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjcmVhdGVUb0RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtdG9kbycpO1xuICAgIGNvbnN0IGNyZWF0ZVRvRG9FbGVtZW50X2gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjcmVhdGVUb0RvRWxlbWVudF9oMy50ZXh0Q29udGVudCA9ICdDcmVhdGUgVG8gRG8nO1xuICAgIGNyZWF0ZVRvRG9FbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRvRG9FbGVtZW50X2gzKTtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0b2RvRm9ybS5pZCA9ICduZXctdG9kby1mb3JtJztcbiAgICBjb25zdCB0b2RvRm9ybV9oNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgdG9kb0Zvcm1faDQudGV4dENvbnRlbnQgPSBcIldoYXQncyBvbiB5b3VyIHRvZG8gbGlzdD9cIjtcbiAgICBjb25zdCB0b2RvRm9ybV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0Zvcm1faW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0b2RvRm9ybV9pbnB1dC5uYW1lID0gJ2NvbnRlbnQnO1xuICAgIHRvZG9Gb3JtX2lucHV0LmlkID0gJ2NvbnRlbnQnO1xuICAgIHRvZG9Gb3JtX2lucHV0LnBsYWNlaG9sZGVyID0gXCJlLmcgbWFrZSBhIHZpZGVvXCI7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Zvcm1faDQpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Gb3JtX2lucHV0KTtcblxuICAgIGNvbnN0IG9wdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9vcHRpb25zIGRpdlxuICAgIG9wdGlvbnNEaXYuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycpO1xuXG4gICAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgLy8gb3B0aW9uIGJ1c2luZXNzXG4gICAgY29uc3QgbGFiZWwxX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsYWJlbDFfaW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgbGFiZWwxX2lucHV0Lm5hbWUgPSAnY2F0ZWdvcnknO1xuICAgIGxhYmVsMV9pbnB1dC5pZCA9ICdjYXRlZ29yeTEnO1xuICAgIGxhYmVsMV9pbnB1dC52YWx1ZSA9ICdidXNpbmVzcyc7XG4gICAgY29uc3QgYnVzaW5lc3Nfc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBidXNpbmVzc19zcGFuLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZScpO1xuICAgIGJ1c2luZXNzX3NwYW4uY2xhc3NMaXN0LmFkZCgnYnVzaW5lc3MnKTtcbiAgICBjb25zdCBidXNpbmVzc19kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXNpbmVzc19kaXYudGV4dENvbnRlbnQgPSAnQnVzaW5lc3MnO1xuICAgIGxhYmVsMS5hcHBlbmRDaGlsZChsYWJlbDFfaW5wdXQpO1xuICAgIGxhYmVsMS5hcHBlbmRDaGlsZChidXNpbmVzc19zcGFuKTtcbiAgICBsYWJlbDEuYXBwZW5kQ2hpbGQoYnVzaW5lc3NfZGl2KTtcbiAgICBvcHRpb25zRGl2LmFwcGVuZENoaWxkKGxhYmVsMSk7XG5cbiAgICBjb25zdCBsYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyAvLyBvcHRpb24gcGVyc29uYWxcbiAgICBjb25zdCBsYWJlbDJfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxhYmVsMl9pbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBsYWJlbDJfaW5wdXQubmFtZSA9ICdjYXRlZ29yeSc7XG4gICAgbGFiZWwyX2lucHV0LmlkID0gJ2NhdGVnb3J5Mic7XG4gICAgbGFiZWwyX2lucHV0LnZhbHVlID0gJ3BlcnNvbmFsJztcbiAgICBjb25zdCBwZXJzb25hbF9zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHBlcnNvbmFsX3NwYW4uY2xhc3NMaXN0LmFkZCgnYnViYmxlJyk7XG4gICAgcGVyc29uYWxfc3Bhbi5jbGFzc0xpc3QuYWRkKCdwZXJzb25hbCcpO1xuICAgIGNvbnN0IHBlcnNvbmFsX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBlcnNvbmFsX2Rpdi50ZXh0Q29udGVudCA9ICdQZXJzb25hbCc7XG4gICAgbGFiZWwyLmFwcGVuZENoaWxkKGxhYmVsMl9pbnB1dCk7XG4gICAgbGFiZWwyLmFwcGVuZENoaWxkKHBlcnNvbmFsX3NwYW4pO1xuICAgIGxhYmVsMi5hcHBlbmRDaGlsZChwZXJzb25hbF9kaXYpO1xuICAgIG9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQobGFiZWwyKTtcblxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKG9wdGlvbnNEaXYpOyAvLyBhZGQgb3B0aW9ucyBkaXZcblxuICAgIGNvbnN0IHN1Ym1pdF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdF9idG4udHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdF9idG4udmFsdWUgPSAnQWRkIFRvIERvJztcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRfYnRuKTsgLy8gYWRkIHN1Ym1pdCBidG5cblxuICAgIGNyZWF0ZVRvRG9FbGVtZW50LmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvRG9FbGVtZW50KTsgLy8gYWRkIGNyZWF0ZSB0b2RvIGl0ZW0gXG5cbiAgICBcbiAgICB0b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHRvZG8gPSB7XG4gICAgICAgICAgICBjb250ZW50OiBlLnRhcmdldC5lbGVtZW50cy5jb250ZW50LnZhbHVlLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IGUudGFyZ2V0LmVsZW1lbnRzLmNhdGVnb3J5LnZhbHVlLFxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvZG8odG9kbyk7XG4gICAgICAgIGRpc3BsYXlUb0RvcygpO1xuICAgICAgICBlLnRhcmdldC5yZXNldCgpO1xuICAgIH0pXG59IiwiaW1wb3J0IGhlYWRlclBuZyBmcm9tICcuLi9hc3NldHMvbG9nby1oZWFkZXIucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKCdidXJnZXItbWVudScpO1xuICAgIGJ1cmdlck1lbnUuaWQgPSAnYnVyZ2VyJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGJhci5jbGFzc0xpc3QuYWRkKCdiYXInKTtcbiAgICAgICAgYnVyZ2VyTWVudS5hcHBlbmRDaGlsZChiYXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlckljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBoZWFkZXJJY29uLnNyYyA9IGhlYWRlclBuZztcbiAgICBjb25zdCBoZWFkZXJfaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlcl9oMS50ZXh0Q29udGVudCA9IFwiVG8tRG8tVGhpbmdzXCI7XG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxvZ28nKTtcbiAgICBoZWFkZXJMb2dvLmFwcGVuZENoaWxkKGhlYWRlckljb24pO1xuICAgIGhlYWRlckxvZ28uYXBwZW5kQ2hpbGQoaGVhZGVyX2gxKTtcblxuICAgIGhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoYnVyZ2VyTWVudSk7XG4gICAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcblxuICAgIGJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYnVyZy1hY3RpdmVcIilcbiAgICB9KTtcblxuICAgIFxuXG4gICAgcmV0dXJuIGhlYWRlckVsZW1lbnQ7XG59IiwiaW1wb3J0ICcuLi9zdHlsZXMvcHJvamVjdEl0ZW0uY3NzJztcbmltcG9ydCB7IHByb2plY3RzLCBzYXZlUHJvamVjdHMsIHJlbW92ZVByb2plY3QgfSBmcm9tIFwiLi90b2Rvc1wiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgZGVmYXVsdGxpc3QgZnJvbSAnLi9kZWZhdWx0TGlzdCc7XG5pbXBvcnQgeyBkaXNwbGF5VG9Eb3MgfSBmcm9tICcuL2Rpc3BsYXlUb0RvJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RJdGVtKHByb2opIHtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICAgY29uc3QgcHJvamVjdF9oMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcHJvamVjdF9oMi50ZXh0Q29udGVudCA9IGAke3Byb2oudGl0bGV9YDtcbiAgICBjb25zdCBwcm9qZWN0X2NhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwcm9qZWN0X2NhdGVnb3J5LnRleHRDb250ZW50ID0gYCR7cHJvai5jYXRlZ29yeX1gO1xuICAgIGNvbnN0IHByb2plY3RfZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSAocHJvai5kdWVEYXRlKS5zcGxpdCgnLScpO1xuICAgIHByb2plY3RfZHVlLnRleHRDb250ZW50ID0gYER1ZTogJHttb250aH0vJHtkYXl9LyR7eWVhcn1gO1xuXG4gICAgY29uc3QgdGFza2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgdGFza2xpc3QuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0Jyk7XG4gICAgdGFza2xpc3QuaWQgPSAndGFzay1saXN0JztcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgICAgICAgdGFza2xpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgcHJvai50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy90YXNrIGl0ZW1cbiAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IC8vdGFzayBjaGVja2JveFxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdGFzay5kb25lO1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnYmJsJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ2xvdycpIHtcbiAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2xvdycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09ICdtZWRpdW0nKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdtZWRpdW0nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSAnaGlnaCcpIHtcbiAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2hpZ2gnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy90YXNrIGNvbnRlbnRcbiAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFzay1jb250ZW50Jyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50X2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnRlbnRfaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGNvbnRlbnRfaW5wdXQudmFsdWUgPSBgJHt0YXNrLmNvbnRlbnR9YDtcbiAgICAgICAgICAgIGNvbnRlbnRfaW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsIHRydWUpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50X2lucHV0KTtcblxuICAgICAgICAgICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL0FDVElPTiBCVVRUT05TXG4gICAgICAgICAgICBhY3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2FjdGlvbnMnKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgICAgICAgICAgZWRpdC50ZXh0Q29udGVudCA9ICdFZGl0J1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgICAgICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XG5cbiAgICAgICAgICAgIHRhc2tsaXN0LmFwcGVuZCh0YXNrSXRlbSk7XG5cbiAgICAgICAgICAgIGlmICh0YXNrLmRvbmUpIHtcbiAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGFzay5kb25lID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgICAgICBzYXZlUHJvamVjdHMoKTtcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAodGFzay5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ICA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5jb250ZW50ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHNhdmVQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qLnRhc2tzID0gcHJvai50YXNrcy5maWx0ZXIodCA9PiB0ICE9IHRhc2spO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2oudGFza3MpO1xuICAgICAgICAgICAgICAgIHNhdmVQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIHRhc2tsaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgZGlzcGxheVRhc2tzKCk7XG5cbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RfaDIpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdF9jYXRlZ29yeSk7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0X2R1ZSk7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCh0YXNrbGlzdCk7IC8vYWRkIHRhc2tsaXN0IHRvIHByb2plY3QgaXRlbVxuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTsgLy9hZGQgcHJvamVjdCB0byBjb250ZW50IGRpdlxuXG4gICAvL0ZPUk1cbiAgIGNvbnN0IGNyZWF0ZVRvRG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgY3JlYXRlVG9Eb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLXRvZG8nKTtcbiAgIGNvbnN0IGNyZWF0ZVRvRG9FbGVtZW50X2gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgIGNyZWF0ZVRvRG9FbGVtZW50X2gzLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgIGNyZWF0ZVRvRG9FbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRvRG9FbGVtZW50X2gzKTtcbiAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgdG9kb0Zvcm0uaWQgPSAnbmV3LXRvZG8tZm9ybSc7XG4gICBjb25zdCB0b2RvRm9ybV9oNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICB0b2RvRm9ybV9oNC50ZXh0Q29udGVudCA9IFwiV2hhdCdzIG9uIHlvdXIgcHJvamVjdCBsaXN0P1wiO1xuICAgY29uc3QgdG9kb0Zvcm1faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgdG9kb0Zvcm1faW5wdXQucmVxdWlyZWQgPSAndHJ1ZSc7XG4gICB0b2RvRm9ybV9pbnB1dC50eXBlID0gJ3RleHQnO1xuICAgdG9kb0Zvcm1faW5wdXQubmFtZSA9ICdjb250ZW50JztcbiAgIHRvZG9Gb3JtX2lucHV0LmlkID0gJ2NvbnRlbnQnO1xuICAgdG9kb0Zvcm1faW5wdXQucGxhY2Vob2xkZXIgPSBcImUuZyBtYWtlIGEgdmlkZW9cIjtcbiAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Gb3JtX2g0KTtcbiAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Gb3JtX2lucHV0KTtcblxuICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICBcbiAgIGNvbnN0IHByaW9yaXR5X2gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgIHByaW9yaXR5X2gzLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OidcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eV9oMyk7XG5cbiAgIGNvbnN0IHByaW9yaXR5X2xhYmVscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgcHJpb3JpdHlfbGFiZWxzLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVscycpOyBcblxuICAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgLy8gcHJpb3JpdHkgbG93XG4gICBjb25zdCBsYWJlbDFfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgbGFiZWwxX2lucHV0LnJlcXVpcmVkID0gJ3RydWUnO1xuICAgbGFiZWwxX2lucHV0LmNoZWNrZWQgPSAndHJ1ZSc7XG4gICAgbGFiZWwxX2lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgIGxhYmVsMV9pbnB1dC5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICBsYWJlbDFfaW5wdXQuaWQgPSAncHJpb3JpdHkxJztcbiAgICBsYWJlbDFfaW5wdXQudmFsdWUgPSAnbG93JztcbiAgICBjb25zdCBsb3dfc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBsb3dfc3Bhbi5jbGFzc0xpc3QuYWRkKCdiYmwnKTtcbiAgICBsb3dfc3Bhbi5jbGFzc0xpc3QuYWRkKCdsb3cnKTtcbiAgICBjb25zdCBsb3dfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG93X2Rpdi50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgIGxhYmVsMS5hcHBlbmRDaGlsZChsYWJlbDFfaW5wdXQpO1xuICAgIGxhYmVsMS5hcHBlbmRDaGlsZChsb3dfc3Bhbik7XG4gICAgbGFiZWwxLmFwcGVuZENoaWxkKGxvd19kaXYpO1xuICAgIHByaW9yaXR5X2xhYmVscy5hcHBlbmRDaGlsZChsYWJlbDEpO1xuXG4gICAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgLy8gcHJpb3JpdHkgbWVkaXVtXG4gICBjb25zdCBsYWJlbDJfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxhYmVsMl9pbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBsYWJlbDJfaW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgbGFiZWwyX2lucHV0LmlkID0gJ3ByaW9yaXR5Mic7XG4gICAgbGFiZWwyX2lucHV0LnZhbHVlID0gJ21lZGl1bSc7XG4gICAgY29uc3QgbWVkaXVtX3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWVkaXVtX3NwYW4uY2xhc3NMaXN0LmFkZCgnYmJsJyk7XG4gICAgbWVkaXVtX3NwYW4uY2xhc3NMaXN0LmFkZCgnbWVkaXVtJyk7XG4gICAgY29uc3QgbWVkaXVtX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lZGl1bV9kaXYudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICBsYWJlbDIuYXBwZW5kQ2hpbGQobGFiZWwyX2lucHV0KTtcbiAgICBsYWJlbDIuYXBwZW5kQ2hpbGQobWVkaXVtX3NwYW4pO1xuICAgIGxhYmVsMi5hcHBlbmRDaGlsZChtZWRpdW1fZGl2KTtcbiAgICBwcmlvcml0eV9sYWJlbHMuYXBwZW5kQ2hpbGQobGFiZWwyKTtcblxuICAgIGNvbnN0IGxhYmVsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IC8vIHByaW9yaXR5IGhpZ2hcbiAgIGNvbnN0IGxhYmVsM19pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGFiZWwzX2lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgIGxhYmVsM19pbnB1dC5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICBsYWJlbDNfaW5wdXQuaWQgPSAncHJpb3JpdHkzJztcbiAgICBsYWJlbDNfaW5wdXQudmFsdWUgPSAnaGlnaCc7XG4gICAgY29uc3QgaGlnaF9zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhpZ2hfc3Bhbi5jbGFzc0xpc3QuYWRkKCdiYmwnKTtcbiAgICBoaWdoX3NwYW4uY2xhc3NMaXN0LmFkZCgnaGlnaCcpO1xuICAgIGNvbnN0IGhpZ2hfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGlnaF9kaXYudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgbGFiZWwzLmFwcGVuZENoaWxkKGxhYmVsM19pbnB1dCk7XG4gICAgbGFiZWwzLmFwcGVuZENoaWxkKGhpZ2hfc3Bhbik7XG4gICAgbGFiZWwzLmFwcGVuZENoaWxkKGhpZ2hfZGl2KTtcbiAgICBwcmlvcml0eV9sYWJlbHMuYXBwZW5kQ2hpbGQobGFiZWwzKTtcblxuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5X2xhYmVscyk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuXG4gICBjb25zdCBzdWJtaXRfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXRfYnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRfYnRuLnZhbHVlID0gJ0FkZCBUYXNrJztcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRfYnRuKTsgLy8gYWRkIHN1Ym1pdCBidG5cbiAgICBcbiAgICBjcmVhdGVUb0RvRWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVUb0RvRWxlbWVudCk7XG5cbiAgICB0b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cbiAgICAgICAgY29uc3QgdGFzayA9IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGUudGFyZ2V0LmVsZW1lbnRzLmNvbnRlbnQudmFsdWUsXG4gICAgICAgICAgICBwcmlvcml0eTogZS50YXJnZXQuZWxlbWVudHMucHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKClcblxuICAgICAgICB9XG4gICAgICAgXG5cbiAgICAgICAgcHJvai50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICBzYXZlUHJvamVjdHMoKTtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIGUudGFyZ2V0LnJlc2V0KCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlbGV0ZVByb2plY3QudHlwZSA9ICdidXR0b24nO1xuICAgIGRlbGV0ZVByb2plY3QudmFsdWUgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgIGNyZWF0ZVRvRG9FbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuXG4gICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgIHJlbW92ZVByb2plY3QocHJvaik7XG4gICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICBpZiAocHJvamVjdHNbMF0pIHtcbiAgICAgICAgICAgcHJvamVjdEl0ZW0ocHJvamVjdHNbMF0pO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmF1bHRsaXN0KCk7XG4gICAgICAgIGRpc3BsYXlUb0RvcygpO1xuICAgICAgIH1cblxuICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgIH0pXG5cblxuICAgIHJldHVybiBjb250ZW50RGl2O1xufSIsImltcG9ydCAnLi4vc3R5bGVzL3Byb2plY3RzLmNzcyc7XG5pbXBvcnQgeyBwcm9qZWN0cywgYWRkUHJvamVjdCB9IGZyb20gJy4vdG9kb3MnO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RJdGVtIH0gZnJvbSAnLi4nO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHM+dWwnKTtcbiAgIHByb2plY3RMaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIGNvbnN0IHByb2plY3RfbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHByb2plY3RfbGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG5cbiAgICBwcm9qZWN0X2xpLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RfbGkpO1xuICAgIH0pO1xuXG4gICAgZGlzcGxheVByb2plY3RJdGVtKCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHByb2plY3RzRGl2LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1wcm9qZWN0Jyk7XG4gICAgY29uc3QgcHJvamVjdHNfaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHByb2plY3RzX2gzLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0JztcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0c19oMyk7XG5cbiAgICAvL2Zvcm1cbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybS5pZCA9ICdwcm9qZWN0LWZvcm0nO1xuICAgIGNvbnN0IHByb2plY3RGb3JtX2g0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBwcm9qZWN0Rm9ybV9oNC50ZXh0Q29udGVudCA9IFwiV2hhdCdzIHlvdXIgcHJvamVjdCdzIHRpdGxlP1wiO1xuICAgIGNvbnN0IHByb2plY3RGb3JtX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0Rm9ybV9pbnB1dC5yZXF1aXJlZCA9ICd0cnVlJztcbiAgICBwcm9qZWN0Rm9ybV9pbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHByb2plY3RGb3JtX2lucHV0Lm5hbWUgPSAndGl0bGUnO1xuICAgIHByb2plY3RGb3JtX2lucHV0LmlkID0gJ3RpdGxlJztcbiAgICBwcm9qZWN0Rm9ybV9pbnB1dC5wbGFjZWhvbGRlciA9IFwiZS5nIGJpcnRoZGF5IHBhcnR5IHBsYW5uaW5nXCI7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1faDQpO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RGb3JtX2lucHV0KTtcblxuICAgIC8vb3B0aW9uc1xuICAgIGNvbnN0IG9wdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9vcHRpb25zIGRpdlxuICAgIG9wdGlvbnNEaXYuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycpO1xuXG4gICAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgLy8gb3B0aW9uIGJ1c2luZXNzXG4gICAgY29uc3QgbGFiZWwxX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsYWJlbDFfaW5wdXQuY2hlY2tlZCA9ICd0cnVlJztcbiAgICBsYWJlbDFfaW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgbGFiZWwxX2lucHV0Lm5hbWUgPSAnY2F0ZWdvcnknO1xuICAgIGxhYmVsMV9pbnB1dC5pZCA9ICdjYXRlZ29yeTEnO1xuICAgIGxhYmVsMV9pbnB1dC52YWx1ZSA9ICdidXNpbmVzcyc7XG4gICAgY29uc3QgYnVzaW5lc3Nfc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBidXNpbmVzc19zcGFuLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZScpO1xuICAgIGJ1c2luZXNzX3NwYW4uY2xhc3NMaXN0LmFkZCgnYnVzaW5lc3MnKTtcbiAgICBjb25zdCBidXNpbmVzc19kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXNpbmVzc19kaXYudGV4dENvbnRlbnQgPSAnQnVzaW5lc3MnO1xuICAgIGxhYmVsMS5hcHBlbmRDaGlsZChsYWJlbDFfaW5wdXQpO1xuICAgIGxhYmVsMS5hcHBlbmRDaGlsZChidXNpbmVzc19zcGFuKTtcbiAgICBsYWJlbDEuYXBwZW5kQ2hpbGQoYnVzaW5lc3NfZGl2KTtcbiAgICBvcHRpb25zRGl2LmFwcGVuZENoaWxkKGxhYmVsMSk7XG5cbiAgICBjb25zdCBsYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyAvLyBvcHRpb24gcGVyc29uYWxcbiAgICBjb25zdCBsYWJlbDJfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxhYmVsMl9pbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBsYWJlbDJfaW5wdXQubmFtZSA9ICdjYXRlZ29yeSc7XG4gICAgbGFiZWwyX2lucHV0LmlkID0gJ2NhdGVnb3J5Mic7XG4gICAgbGFiZWwyX2lucHV0LnZhbHVlID0gJ3BlcnNvbmFsJztcbiAgICBjb25zdCBwZXJzb25hbF9zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHBlcnNvbmFsX3NwYW4uY2xhc3NMaXN0LmFkZCgnYnViYmxlJyk7XG4gICAgcGVyc29uYWxfc3Bhbi5jbGFzc0xpc3QuYWRkKCdwZXJzb25hbCcpO1xuICAgIGNvbnN0IHBlcnNvbmFsX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBlcnNvbmFsX2Rpdi50ZXh0Q29udGVudCA9ICdQZXJzb25hbCc7XG4gICAgbGFiZWwyLmFwcGVuZENoaWxkKGxhYmVsMl9pbnB1dCk7XG4gICAgbGFiZWwyLmFwcGVuZENoaWxkKHBlcnNvbmFsX3NwYW4pO1xuICAgIGxhYmVsMi5hcHBlbmRDaGlsZChwZXJzb25hbF9kaXYpO1xuICAgIG9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQobGFiZWwyKTtcblxuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKG9wdGlvbnNEaXYpOyAvLyBhZGQgb3B0aW9ucyBkaXZcblxuICAgIC8vRFVFIERBVEUgRElWXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKTtcbiAgICBkdWVEYXRlLmlkID0gJ2R1ZS1kYXRlJztcbiAgICBjb25zdCBkdWVEYXRlX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkdWVEYXRlX2xhYmVsLmZvciA9ICdkdWVEYXRlJztcbiAgICBkdWVEYXRlX2xhYmVsLnRleHRDb250ZW50ID0gJ0R1ZTonO1xuICAgIGNvbnN0IGR1ZURhdGVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGR1ZURhdGVfaW5wdXQucmVxdWlyZWQgPSAndHJ1ZSc7XG4gICAgZHVlRGF0ZV9pbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGR1ZURhdGVfaW5wdXQuaWQgPSAnZHVlRGF0ZSc7XG4gICAgZHVlRGF0ZV9pbnB1dC5uYW1lID0gJ2R1ZURhdGUnO1xuICAgIGR1ZURhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZV9sYWJlbCk7XG4gICAgZHVlRGF0ZS5hcHBlbmRDaGlsZChkdWVEYXRlX2lucHV0KTtcblxuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpOyAvL2FkZCBkdWUtZGF0ZVxuXG4gICAgLy9TVUJNSVQgUFJPSkVDVFxuICAgIGNvbnN0IHN1Ym1pdF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdF9idG4udHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdF9idG4udmFsdWUgPSAnQ3JlYXRlIGEgUHJvamVjdCc7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0X2J0bik7IC8vIGFkZCBzdWJtaXQgYnRuXG5cbiAgICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCAgPSBkdWVEYXRlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgIH0pXG5cbiAgICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB7XG4gICAgICAgICAgICB0aXRsZTogZS50YXJnZXQuZWxlbWVudHMudGl0bGUudmFsdWUsXG4gICAgICAgICAgICBjYXRlZ29yeTogZS50YXJnZXQuZWxlbWVudHMuY2F0ZWdvcnkudmFsdWUsXG4gICAgICAgICAgICB0YXNrczogW10sXG4gICAgICAgICAgICBkdWVEYXRlOiBlLnRhcmdldC5lbGVtZW50cy5kdWVEYXRlLnZhbHVlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICB9XG5cblxuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgZS50YXJnZXQucmVzZXQoKTtcbiAgICB9KVxuXG5cblxuXG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xufSIsImltcG9ydCAnLi4vc3R5bGVzL25vdGVzLmNzcyc7XG5pbXBvcnQgeyBub3RlcywgYWRkTm90ZSwgcmVtb3ZlTm90ZSwgc2F2ZU5vdGVzIH0gZnJvbSBcIi4vdG9kb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXVpY2tOb3RlcygpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3Qgbm90ZXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIG5vdGVzRWxlbWVudC5pZCA9ICdub3Rlcyc7XG5cbiAgICBub3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xuICAgICAgICBjb25zdCBub3RlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL25vdGUgaXRlbVxuICAgICAgICBub3RlSXRlbS5jbGFzc0xpc3QuYWRkKCdub3RlLWl0ZW0nKTtcblxuICAgICAgICBjb25zdCBkYXRlX2gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgZGF0ZV9oMy5pbm5lckhUTUwgPSBub3RlLmRhdGU7XG5cbiAgICAgICAgY29uc3Qgbm90ZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIG5vdGVfaW5wdXQubmFtZSA9ICd0ZXh0YXJlYSc7XG4gICAgICAgIG5vdGVfaW5wdXQudmFsdWUgPSBgJHtub3RlLmNvbnRlbnR9YDtcbiAgICAgICAgbm90ZV9pbnB1dC5wbGFjZWhvbGRlciA9ICd0eXBlIHlvdXIgbm90ZSBoZXJlLi4nO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLW5vdGUnKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdjcm9zcycpO1xuICAgICAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoc3Bhbik7XG5cblxuICAgICAgICBub3RlSXRlbS5hcHBlbmRDaGlsZChkYXRlX2gzKTtcbiAgICAgICAgbm90ZUl0ZW0uYXBwZW5kQ2hpbGQobm90ZV9pbnB1dCk7XG4gICAgICAgIG5vdGVJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIG5vdGVzRWxlbWVudC5hcHBlbmRDaGlsZChub3RlSXRlbSk7XG5cblxuICAgICAgICBub3RlX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBlID0+IHtcbiAgICAgICAgICAgIG5vdGUuY29udGVudCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgc2F2ZU5vdGVzKCk7XG4gICAgICAgICAgICBxdWlja05vdGVzKCk7XG5cbiAgICAgICAgfSlcblxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIHJlbW92ZU5vdGUobm90ZSk7XG4gICAgICAgICAgICBzYXZlTm90ZXMoKTtcbiAgICAgICAgICAgIHF1aWNrTm90ZXMoKTtcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZE5vdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGFkZE5vdGVCdG4udHlwZSA9ICdidXR0b24nO1xuICAgIGFkZE5vdGVCdG4udmFsdWUgPSAnQ3JlYXRlIE5vdGUnO1xuICAgIG5vdGVzRWxlbWVudC5hcHBlbmRDaGlsZChhZGROb3RlQnRuKTtcblxuICAgIGFkZE5vdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgY29uc3Qgbm90ZSA9IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgICBhZGROb3RlKG5vdGUpO1xuICAgICAgICBxdWlja05vdGVzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5vdGVzKTtcbiAgICB9KVxuXG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG5vdGVzRWxlbWVudCk7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRlbnREaXY7XG59IiwiaW1wb3J0ICcuLi9zdHlsZXMvc2lkZWJhci5jc3MnO1xuaW1wb3J0IG5vdGVQbmcgZnJvbSAnLi4vYXNzZXRzL25vdGUucG5nJztcbmltcG9ydCB0b2RvUG5nIGZyb20gJy4uL2Fzc2V0cy90b2RvLnBuZyc7XG5pbXBvcnQgcHJvamVjdHNQbmcgZnJvbSAnLi4vYXNzZXRzL3Byb2plY3RzLnBuZyc7XG5cbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi90b2Rvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGViYXIoKSB7XG4gICAgLypOQVYgTUVOVSovXG4gICAgY29uc3Qgc2lkZWJhckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xuICAgIHNpZGViYXJFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgZ3JlZXRpbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGdyZWV0aW5nIGVsZW1lbnRcbiAgICBncmVldGluZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ3JlZXRpbmcnKTtcbiAgICBjb25zdCBncmVldGluZ19oMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZ3JlZXRpbmdfaDIuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBncmVldGluZ19oMi5pbm5lckhUTUwgPSBcIkdyZWV0aW5ncywgXCI7XG4gICAgY29uc3QgZ3JlZXRpbmdfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGdyZWV0aW5nX2lucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgZ3JlZXRpbmdfaW5wdXQuaWQgPSAnbmFtZSc7XG4gICAgZ3JlZXRpbmdfaW5wdXQubWF4TGVuZ3RoID0gMTI7XG4gICAgZ3JlZXRpbmdfaW5wdXQuc2l6ZSA9IDEyO1xuICAgIGdyZWV0aW5nX2lucHV0LnBsYWNlaG9sZGVyID0gJ05hbWUgaGVyZSc7XG4gICAgZ3JlZXRpbmdfaDIuYXBwZW5kQ2hpbGQoZ3JlZXRpbmdfaW5wdXQpO1xuICAgIGdyZWV0aW5nRWxlbWVudC5hcHBlbmRDaGlsZChncmVldGluZ19oMik7XG4gICAgc2lkZWJhckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ3JlZXRpbmdFbGVtZW50KTsgLy8gYWRkIGdyZWV0aW5nIGVsZW1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgfHwgJyc7XG4gICAgICAgIG5hbWVJbnB1dC52YWx1ZSA9IHVzZXJuYW1lO1xuXG4gICAgICAgIG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSlcblxuICAgIH0pXG5cbiAgICAvKiBNRU5VICovXG4gICAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgbGlfZGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlfZGVmYXVsdC5pZCA9ICdkZWZhdWx0JztcbiAgICBjb25zdCB0b2RvSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHRvZG9JY29uLnNyYyA9IHRvZG9Qbmc7XG4gICAgY29uc3QgbGlfZGVmYXVsdF9hID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpX2RlZmF1bHRfYS50ZXh0Q29udGVudCA9ICdUby1EbyBMaXN0JztcbiAgICBsaV9kZWZhdWx0LmFwcGVuZENoaWxkKHRvZG9JY29uKTtcbiAgICBsaV9kZWZhdWx0LmFwcGVuZENoaWxkKGxpX2RlZmF1bHRfYSk7XG4gICAgY29uc3QgbGlfcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpX3Byb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdHNJY29uID0gbmV3IEltYWdlKCk7XG4gICAgcHJvamVjdHNJY29uLnNyYyA9IHByb2plY3RzUG5nO1xuICAgIGxpX3Byb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3RzSWNvbik7XG4gICAgbGlfcHJvamVjdHNEaXYuaW5uZXJIVE1MICs9ICdNeSBQcm9qZWN0cyc7XG4gICAgbGlfcHJvamVjdHMuaWQgPSAncHJvamVjdHMnO1xuICAgIGxpX3Byb2plY3RzLmFwcGVuZENoaWxkKGxpX3Byb2plY3RzRGl2KTtcbiAgICBjb25zdCBwcm9qZWN0c1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdF9saSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHByb2plY3RfbGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICAgXG4gICAgICAgIHByb2plY3RfbGkudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XG4gICAgICAgIHByb2plY3RzVWwuYXBwZW5kQ2hpbGQocHJvamVjdF9saSk7XG4gICAgfSk7XG4gICAgbGlfcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNVbCk7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvamVjdC5pZCA9ICdhZGQtcHJvamVjdCc7XG4gICAgYWRkUHJvamVjdC50eXBlID0gJ2J1dHRvbic7XG4gICAgYWRkUHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG4gICAgbGlfcHJvamVjdHMuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgICBjb25zdCBsaV9ub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlfbm90ZXMuaWQgPSAnbGktbm90ZXMnO1xuICAgIGNvbnN0IG5vdGVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG5vdGVzSWNvbi5zcmMgPSBub3RlUG5nO1xuICAgIGNvbnN0IGxpX25vdGVzX2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGlfbm90ZXNfYS50ZXh0Q29udGVudCA9ICdRdWljayBOb3Rlcyc7XG4gICAgbGlfbm90ZXMuYXBwZW5kQ2hpbGQobm90ZXNJY29uKTtcbiAgICBsaV9ub3Rlcy5hcHBlbmRDaGlsZChsaV9ub3Rlc19hKTtcblxuICAgIFxuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQobGlfZGVmYXVsdCk7XG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChsaV9wcm9qZWN0cyk7XG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChsaV9ub3Rlcyk7XG4gICAgc2lkZWJhckVsZW1lbnQuYXBwZW5kQ2hpbGQobmF2TWVudSk7XG5cblxuICAgIHJldHVybiBzaWRlYmFyRWxlbWVudDtcbn0iLCJleHBvcnQgbGV0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkgfHwgW107XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVG9kb3MoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvcygpIHtcbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kbyh0b2RvKSB7XG4gIHRvZG9zLnB1c2godG9kbyk7XG4gIHNhdmVUb2RvcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9kbyh0b2RvKSB7XG4gIHRvZG9zID0gdG9kb3MuZmlsdGVyKHQgPT4gdCAhPSB0b2RvKTtcbiAgc2F2ZVRvZG9zKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclRvZG9zKCkge1xuICB0b2RvcyA9IFtdO1xuICBzYXZlVG9kb3MoKTtcbn1cblxuLyogUFJPSkVDVFMgKi9cbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9qZWN0cygpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICByZXR1cm4gcHJvamVjdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgc2F2ZVByb2plY3RzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIodCA9PiB0ICE9IHByb2plY3QpO1xuICBzYXZlUHJvamVjdHMoKTtcbn1cblxuLyogbm90ZXMgKi9cblxuZXhwb3J0IGxldCBub3RlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJykpIHx8IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZU5vdGVzKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZXMnLCBKU09OLnN0cmluZ2lmeShub3RlcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm90ZXMoKSB7XG4gIHJldHVybiBub3Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5vdGUobm90ZSkge1xuICBub3Rlcy5wdXNoKG5vdGUpO1xuICBzYXZlTm90ZXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vdGUobm90ZSkge1xuICBub3RlcyA9IG5vdGVzLmZpbHRlcihuID0+IG4gIT0gbm90ZSlcbiAgc2F2ZU5vdGVzKCk7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgc2lkZWJhciBmcm9tICcuL2NvbXBvbmVudHMvc2lkZWJhcic7XG5pbXBvcnQgZm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IGRlZmF1bHRsaXN0IGZyb20gJy4vY29tcG9uZW50cy9kZWZhdWx0TGlzdCc7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL2NvbXBvbmVudHMvcHJvamVjdHMnO1xuaW1wb3J0IHF1aWNrTm90ZXMgZnJvbSAnLi9jb21wb25lbnRzL3F1aWNrTm90ZXMnO1xuaW1wb3J0IHsgZGlzcGxheVRvRG9zIH0gZnJvbSAnLi9jb21wb25lbnRzL2Rpc3BsYXlUb0RvJztcbmltcG9ydCB7IHByb2plY3RJdGVtIH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2plY3RJdGVtJztcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9jb21wb25lbnRzL3RvZG9zJztcblxuaGVhZGVyKCk7XG5zaWRlYmFyKCk7XG5mb290ZXIoKTtcbmRlZmF1bHRsaXN0KCk7XG5kaXNwbGF5VG9Eb3MoKTtcblxuXG4vKiBOQVYgQkFSICovXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZT51bCcpO1xubmF2QmFyLnF1ZXJ5U2VsZWN0b3IoJ2xpI2RlZmF1bHQ+YScpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5uYXZCYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBcbiAgICBjb25zdCBwcmV2aW91c0xpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG4gICAgaWYgKGUudGFyZ2V0LmlubmVySFRNTCA9PT0gJ1RvLURvIExpc3QnKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHByZXZpb3VzTGkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgZGVmYXVsdGxpc3QoKTtcbiAgICAgICAgZGlzcGxheVRvRG9zKCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pbm5lckhUTUwgPT09ICdRdWljayBOb3RlcycpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcHJldmlvdXNMaS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICBxdWlja05vdGVzKCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pbm5lckhUTUwgPT09ICdBZGQgUHJvamVjdCcpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcHJldmlvdXNMaS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0KCk7XG4gICAgfVxuXG59KVxuXG4vL0RJU1BMQVkgUFJPSkVDVFxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0SXRlbSgpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cz51bCcpLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHJvamVjdExpc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzTGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIHByZXZpb3VzTGkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0W2ldLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0SXRlbShwcm9qZWN0c1tpXSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRpc3BsYXlQcm9qZWN0SXRlbSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==