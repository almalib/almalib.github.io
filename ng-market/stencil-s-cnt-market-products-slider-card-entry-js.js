(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-cnt-market-products-slider-card-entry-js"],{

/***/ "./node_modules/s-market/dist/esm/s-cnt-market-products-slider-card.entry.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/s-market/dist/esm/s-cnt-market-products-slider-card.entry.js ***!
  \***********************************************************************************/
/*! exports provided: s_cnt_market_products_slider_card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_products_slider_card", function() { return SCntMarketProductsSliderCard; });
/* harmony import */ var _index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-dec6b4d5.js */ "./node_modules/s-market/dist/esm/index-dec6b4d5.js");


const sCntMarketProductsSliderCardCss = ".products-card.sc-s-cnt-market-products-slider-card{width:100%;padding:5px 10px;border:solid 1px #e7e4e4;border-radius:4px;height:100%;position:relative}.products-card-item.sc-s-cnt-market-products-slider-card{height:100%;display:-ms-flexbox;display:flex;cursor:pointer}.products-card.sc-s-cnt-market-products-slider-card:hover .products-cart.sc-s-cnt-market-products-slider-card{display:block}.products-card-img-wrapper.sc-s-cnt-market-products-slider-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:70px;min-width:70px;margin-right:10px}.products-card-img.sc-s-cnt-market-products-slider-card{width:100%;height:90px;background-position:center;background-size:cover}.products-card-desc.sc-s-cnt-market-products-slider-card{width:100%}.products-price.sc-s-cnt-market-products-slider-card{margin-bottom:2px;display:inline-block;font-weight:700;font-size:13px}.price-dis.sc-s-cnt-market-products-slider-card{margin-right:4px;color:#e80f4a}.price-old.sc-s-cnt-market-products-slider-card{font-weight:500;font-size:11px;color:#343434;text-decoration:line-through}.products-name.sc-s-cnt-market-products-slider-card{height:62px;overflow:hidden;font-size:12px;color:#343434;word-break:break-word}.products-bottom-info.sc-s-cnt-market-products-slider-card{font-weight:700;font-size:12px;color:#8f8e94}.products-cart.sc-s-cnt-market-products-slider-card{position:absolute;right:10px;bottom:6px;padding:8px 0 0 8px;z-index:2;display:none}.products-cart-add.sc-s-cnt-market-products-slider-card{background:#21a038;border-radius:4px;width:46px;height:26px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#fff}.fa-plus.sc-s-cnt-market-products-slider-card{font-size:10px;margin-right:3px}";

const SCntMarketProductsSliderCard = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.showModal = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showModal", 7);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-card", onClick: () => this.showModalHandler(this.productsSliderCards) }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-card-item" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-card-img-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-card-img", style: {
                backgroundImage: `url(${this.productsSliderCards.img})`,
            } })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-card-desc" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-price" }, this.productsSliderCards.price ? (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "price" }, this.productsSliderCards.price, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, " ", this.productsSliderCards.currency))) : (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "price-dis" }, this.productsSliderCards.disPrice, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, " ", this.productsSliderCards.currency)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "price-old" }, this.productsSliderCards.oldPrice, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, " ", this.productsSliderCards.currency))))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "products-name" }, this.productsSliderCards.desc), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-bottom-info" }, this.productsSliderCards.weight))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-cart" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-cart-box" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-cart-add" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-plus" }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-shopping-cart" }))))));
    }
    /**
     *
     */
    showModalHandler(z) {
        this.showModal.emit(z);
    }
};
SCntMarketProductsSliderCard.style = sCntMarketProductsSliderCardCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-cnt-market-products-slider-card-entry-js.js.map