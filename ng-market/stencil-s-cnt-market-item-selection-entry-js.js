(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-cnt-market-item-selection-entry-js"],{

/***/ "./node_modules/s-market/dist/esm/s-cnt-market-item-selection.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/s-market/dist/esm/s-cnt-market-item-selection.entry.js ***!
  \*****************************************************************************/
/*! exports provided: s_cnt_market_item_selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_item_selection", function() { return SCntMarketItemSelection; });
/* harmony import */ var _index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-dec6b4d5.js */ "./node_modules/s-market/dist/esm/index-dec6b4d5.js");


const sCntMarketItemSelectionCss = ".common.sc-s-cnt-market-item-selection{cursor:pointer;display:-ms-flexbox;display:flex;margin:15px 3%;position:relative;-webkit-box-shadow:0 10px 45px rgba(0,0,0,.08), 0 5px 10px rgba(0,0,0,.05);box-shadow:0 10px 45px rgba(0,0,0,.08), 0 5px 10px rgba(0,0,0,.05);border-radius:12px;background-color:#fff;padding:20px 19px}.common.sc-s-cnt-market-item-selection:hover{-webkit-box-shadow:0 4px 12px 0 #d0d2d4;box-shadow:0 4px 12px 0 #d0d2d4;-webkit-transition:.15s,-webkit-box-shadow;transition:.15s,-webkit-box-shadow;transition:box-shadow,.15s;transition:box-shadow,.15s,-webkit-box-shadow}.image.sc-s-cnt-market-item-selection{width:70px;height:70px;border-radius:50%;border:1px solid #d8d8d8;-ms-flex-pack:center;justify-content:center}.img.sc-s-cnt-market-item-selection{width:68px;height:20px;margin:25px 0 0 0;background-size:cover;background-position:center}.title.sc-s-cnt-market-item-selection{padding:17px 0 5px 15px;font-size:20px;font-family:'Roboto', sans-serif}.common.sc-s-cnt-market-item-selection:hover .title.sc-s-cnt-market-item-selection{color:#666;-webkit-transition:.15s;transition:.15s}.text.sc-s-cnt-market-item-selection{padding-left:15px;line-height:1.14;color:#7c7e80;font-size:14px}@media only screen and (max-width: 575px){.common.sc-s-cnt-market-item-selection:nth-child(n){margin:7px 0}}";

const SCntMarketItemSelection = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnSelection = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnSelection", 7);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "common", onClick: () => this.clickOnSelectionHandler() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "image" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img", style: { backgroundImage: "url(" + this.forSelection.image + ")" } })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "commonText" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title" }, this.forSelection.title), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text" }, this.forSelection.text))));
    }
    /**
     *
     * */
    clickOnSelectionHandler() {
        this.clickOnSelection.emit();
    }
};
SCntMarketItemSelection.style = sCntMarketItemSelectionCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-cnt-market-item-selection-entry-js.js.map