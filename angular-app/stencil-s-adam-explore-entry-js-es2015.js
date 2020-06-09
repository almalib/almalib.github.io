(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-explore-entry-js"],{

/***/ "./node_modules/adam-stencil-v-1/dist/esm/s-adam-explore.entry.js":
/*!************************************************************************!*\
  !*** ./node_modules/adam-stencil-v-1/dist/esm/s-adam-explore.entry.js ***!
  \************************************************************************/
/*! exports provided: s_adam_explore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_explore", function() { return SAdamExplore; });
/* harmony import */ var _index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-770c2699.js */ "./node_modules/adam-stencil-v-1/dist/esm/index-770c2699.js");


const sAdamExploreCss = ".container-explore{background:black;max-width:1024px;position:relative}.explore-img{width:250px;height:370px;position:absolute;bottom:-185px;-webkit-box-shadow:0 10px 20px rgba(0, 0, 0, 0.2);box-shadow:0 10px 20px rgba(0, 0, 0, 0.2)}.explore-report{color:#ffffff}.explore-report p{font-size:14px;margin-bottom:30px}.explore-title{font-weight:500;margin-top:0}.container-explore .btn{height:40px;padding-top:13px}@media screen and (max-width: 992px){.explore-img{display:none}.explore-report{text-align:center}}@media (max-width: 320px){.explore-title{font-size:18px}}";

const SAdamExplore = class {
    constructor(hostRef) {
        Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnExploreItems = Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnExploreItems", 7);
    }
    render() {
        return (Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container-fluid" }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container-explore p-5" }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row d-flex align-items-center" }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 col-lg-4 offset-lg-3" }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "explore-report" }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", { class: "explore-title" }, this.exploreItems.title), Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, this.exploreItems.text), Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "btn", onClick: () => this.clickOnExploreItems.emit({ place: 'button', item: this.exploreItems }) }, this.exploreItems.button))), Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-4 offset-lg-1" }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "explore-img", style: { backgroundImage: 'url(' + this.exploreItems.img + ')' }, onClick: () => this.clickOnExploreItems.emit({ place: 'image', item: this.exploreItems }) }))))));
    }
};
SAdamExplore.style = sAdamExploreCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-adam-explore-entry-js-es2015.js.map