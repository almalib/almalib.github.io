(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-cnt-market-shop-entry-js"],{

/***/ "./node_modules/s-market/dist/esm/s-cnt-market-shop.entry.js":
/*!*******************************************************************!*\
  !*** ./node_modules/s-market/dist/esm/s-cnt-market-shop.entry.js ***!
  \*******************************************************************/
/*! exports provided: s_cnt_market_shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_shop", function() { return SCntMarketShop; });
/* harmony import */ var _index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-dec6b4d5.js */ "./node_modules/s-market/dist/esm/index-dec6b4d5.js");
/* harmony import */ var _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-a-ed77f751.js */ "./node_modules/s-market/dist/esm/mock-a-ed77f751.js");



const sCntMarketShopCss = "";

const SCntMarketShop = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Стейт для открытия/закрытия модального окна
         */
        this.showModalState = false;
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("main", null, this.productListPage ? (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-product-page", { onShowModal: (x) => this.showOrCloseModal(x), productsSliderCards: _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__["d"], productsSliderTitle: _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__["w"], productsList: _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__["c"], selectedCategoryId: this.selectedCategoryId, productsPage: _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__["x"] })) : (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-products-list", { onShowModal: (x) => this.showOrCloseModal(x), onSelectedId: (id) => this.selectedId(id), productsList: _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__["c"] }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-promo-slider", { promoSliderCards: _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__["g"] }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-products-slider", { productsSliderCards: _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__["d"], productsSliderTitle: _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__["e"], onShowModal: (x) => this.showOrCloseModal(x) }))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-recently-watched", { onShowModal: (x) => this.showOrCloseModal(x), recentlyWatchedProducts: _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__["r"], recentlyWatchedTitle: _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__["b"] }), this.showModalState ? (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-modal-window", { productModal: _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__["p"], productData: this.productData, onClickOnModal: (x) => this.showOrCloseModal(x) })) : (""), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-back-to-top", null)));
    }
    /**
     * Открытие и закрытие модального окна
     */
    showOrCloseModal({ detail }) {
        this.showModalState = !this.showModalState;
        this.bodyToggleScroll();
        this.productData = Object.assign({}, detail);
    }
    /**
     * Открытие и закрытие модального окна
     */
    selectedId({ detail }) {
        this.productListPage = true;
        this.selectedCategoryId = detail;
    }
    /**
     * Отключение и включение прокрутки body
     */
    bodyToggleScroll() {
        if (this.showModalState) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }
};
SCntMarketShop.style = sCntMarketShopCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-cnt-market-shop-entry-js.js.map