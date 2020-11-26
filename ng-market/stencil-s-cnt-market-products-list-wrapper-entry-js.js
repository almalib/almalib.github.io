(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-cnt-market-products-list-wrapper-entry-js"],{

/***/ "./node_modules/s-market/dist/esm/s-cnt-market-products-list-wrapper.entry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/s-market/dist/esm/s-cnt-market-products-list-wrapper.entry.js ***!
  \************************************************************************************/
/*! exports provided: s_cnt_market_products_list_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_products_list_wrapper", function() { return SCntMarketProductsListWrapper; });
/* harmony import */ var _index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-dec6b4d5.js */ "./node_modules/s-market/dist/esm/index-dec6b4d5.js");
/* harmony import */ var _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-a-ed77f751.js */ "./node_modules/s-market/dist/esm/mock-a-ed77f751.js");
/* harmony import */ var _mock_b_bb75bb06_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-b-bb75bb06.js */ "./node_modules/s-market/dist/esm/mock-b-bb75bb06.js");




const sCntMarketProductsListWrapperCss = ".sc-s-cnt-market-products-list-wrapper-h{display:block}";

const SCntMarketProductsListWrapper = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Авторизация юзера
         * */
        this.login = true;
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "app" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-header", { categories: _mock_b_bb75bb06_js__WEBPACK_IMPORTED_MODULE_2__["h"], login: this.login }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("main", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "overlayBackDrop" }, " "), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-product-adding", { onClickOnBackProductList: () => this.clickOnBackProductList() }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-footer", { footerData: _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__["f"] }, " "), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-back-to-top", null, " "))));
    }
    /**
     * клик по кнопке добавления товара
     * */
    clickOnAddNewProduct() {
        console.log('clickOnAddNewProduct 11');
    }
    /**
     * clickOnBackProductList
     * */
    clickOnBackProductList() {
        console.log('clickOnBackProductList');
    }
};
SCntMarketProductsListWrapper.style = sCntMarketProductsListWrapperCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-cnt-market-products-list-wrapper-entry-js.js.map