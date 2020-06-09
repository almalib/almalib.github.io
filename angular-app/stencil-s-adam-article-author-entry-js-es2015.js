(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-article-author-entry-js"],{

/***/ "./node_modules/adam-stencil-v-1/dist/esm/s-adam-article-author.entry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/adam-stencil-v-1/dist/esm/s-adam-article-author.entry.js ***!
  \*******************************************************************************/
/*! exports provided: s_adam_article_author */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_article_author", function() { return SAdamArticleAuthor; });
/* harmony import */ var _index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-770c2699.js */ "./node_modules/adam-stencil-v-1/dist/esm/index-770c2699.js");


const sAdamArticleAuthorCss = "";

const SAdamArticleAuthor = class {
    constructor(hostRef) {
        Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Author, { arr: this.authorInfo })));
    }
};
const Author = (props) => {
    return props.arr.map(item => {
        return Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-author-info", { authorInfoStore: item });
    });
};
SAdamArticleAuthor.style = sAdamArticleAuthorCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-adam-article-author-entry-js-es2015.js.map