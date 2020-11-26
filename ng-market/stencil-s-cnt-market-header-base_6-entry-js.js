(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-cnt-market-header-base_6-entry-js"],{

/***/ "./node_modules/s-market/dist/esm/s-cnt-market-header-base_6.entry.js":
/*!****************************************************************************!*\
  !*** ./node_modules/s-market/dist/esm/s-cnt-market-header-base_6.entry.js ***!
  \****************************************************************************/
/*! exports provided: s_cnt_market_header_base, s_cnt_market_header_wrapper, s_cnt_market_modal_window, s_cnt_market_products_list, s_cnt_market_promo_slider, s_cnt_market_recently_watched */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_header_base", function() { return SCntMarketHeaderUnlogged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_header_wrapper", function() { return SCntMarketHeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_modal_window", function() { return SCntMarketModalWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_products_list", function() { return SCntMarketProductsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_promo_slider", function() { return SCntMarketPromoSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_recently_watched", function() { return SCntMarketRecentlyWatched; });
/* harmony import */ var _index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-dec6b4d5.js */ "./node_modules/s-market/dist/esm/index-dec6b4d5.js");


const sCntMarketHeaderBaseCss = ".container-fluid.sc-s-cnt-market-header-base{padding-left:0;padding-right:0;margin-bottom:120px}.unlogged-wrapper.sc-s-cnt-market-header-base{display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;height:80px;z-index:300;top:0;left:0;right:0;background-color:#ffffff;-webkit-box-shadow:0 2px 12px 0 rgba(51, 53, 54, 0.15);box-shadow:0 2px 12px 0 rgba(51, 53, 54, 0.15);width:100%;-webkit-transition:.3s ease;transition:.3s ease}.sticky.sc-s-cnt-market-header-base{-webkit-transition:.3s ease;transition:.3s ease;position:fixed}.logo.sc-s-cnt-market-header-base{width:242px;height:33px;background-size:contain;background-repeat:no-repeat;background-position:center}.left.sc-s-cnt-market-header-base{display:-ms-flexbox;display:flex;height:100%;-ms-flex-align:center;align-items:center}.right.sc-s-cnt-market-header-base{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.number.sc-s-cnt-market-header-base a.sc-s-cnt-market-header-base{display:-ms-flexbox;display:flex;justify-items:center;font-size:20px;font-weight:600;color:#343434;white-space:nowrap;text-decoration:none}.btn-login.sc-s-cnt-market-header-base{margin-left:24px}.btn-login.sc-s-cnt-market-header-base button.sc-s-cnt-market-header-base{line-height:24px;border:1px solid #d0d2d4;color:#343434;font-size:16px;padding:11px 16px;background-color:#ffffff;border-radius:6px;-webkit-transition:.3s ease;transition:.3s ease;cursor:pointer}.btn-login.sc-s-cnt-market-header-base button.sc-s-cnt-market-header-base:hover{background-color:#f3f4f7;border:1px solid #d0d2d4;color:#333536}";

const SCntMarketHeaderUnlogged = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.openLoginModal = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "openLoginModal", 7);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container-fluid" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "unlogged-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-6" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "left" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logo", style: {
                backgroundImage: `url(${this.logo})`,
            } }))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-6" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "right" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "number" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "tel:+78002221100" }, this.number)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-login" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: () => this.openLoginModal.emit() }, "\u0412\u043E\u0439\u0442\u0438")))))))));
    }
};
SCntMarketHeaderUnlogged.style = sCntMarketHeaderBaseCss;

const sCntMarketHeaderWrapperCss = "";

const SCntMarketHeaderWrapper = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.openLoginModal = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "openLoginModal", 7);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.firstPage
            ? Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-header-base", { logo: this.categories.body.logo, number: this.categories.numberHeader })
            : Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-header", { categories: this.categories, login: this.login })));
    }
};
SCntMarketHeaderWrapper.style = sCntMarketHeaderWrapperCss;

const sCntMarketModalWindowCss = ".window.sc-s-cnt-market-modal-window{padding:30px 0 30px 0;position:fixed;left:0;top:0;width:100vw;height:100vh;overflow:auto;background-color:rgba(0,0,0,.4);z-index:2001}.container.sc-s-cnt-market-modal-window{max-width:760px;border-radius:15px;background-color:white}@media only screen and (max-width: 767px){.close.sc-s-cnt-market-modal-window{top:16px;right:16px}.container.sc-s-cnt-market-modal-window{max-width:100%}}";

const SCntMarketModalWindow = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnModal = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnModal", 7);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "window", ref: (el) => this.modalTag = el, onClick: (event) => this.closeModal(event) }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container " }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-product", { productBlock: this.productModal.productBlock, getProduct: this.productData.productData.getProduct }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-recommended", { recommendedBlock: this.productModal.recommendedBlock, getRecommended: this.productData.productData.getRecommended }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-specification", { specificationBlock: this.productModal.specificationBlock, getSpecification: this.productData.productData.getSpecification }))));
    }
    /**
     * Закрытие модального окна
     */
    closeModal(event) {
        if (event.target === this.modalTag) {
            this.clickOnModal.emit();
        }
    }
    /**
     * проверяем на заполненность
     * */
    checkInputHandler(parent, input) {
        !input.value
            ? parent.classList.add("error")
            : parent.classList.remove("error");
    }
    /**
     * проверяем конкретно имя
     * */
    checkInputFocusHandler(parent, input) {
        if (input.value.length > 2) {
            parent.classList.remove("error");
        }
    }
};
SCntMarketModalWindow.style = sCntMarketModalWindowCss;

const sCntMarketProductsListCss = ".main-container.sc-s-cnt-market-products-list{margin:auto}@media only screen and (min-width: 641px){.main-container.sc-s-cnt-market-products-list{width:621px}}@media only screen and (min-width: 848px){.main-container.sc-s-cnt-market-products-list{width:828px}}@media only screen and (min-width: 1055px){.main-container.sc-s-cnt-market-products-list{width:1035px}}@media only screen and (min-width: 1262px){.main-container.sc-s-cnt-market-products-list{width:1242px}}@media only screen and (min-width: 1469px){.main-container.sc-s-cnt-market-products-list{width:1449px}}@media only screen and (min-width: 1676px){.main-container.sc-s-cnt-market-products-list{width:1656px}}@media only screen and (min-width: 1883px){.main-container.sc-s-cnt-market-products-list{width:1863px}}@media (max-width: 768px){.products-list.sc-s-cnt-market-products-list{padding:0 10px}}@media (max-width: 320px){.products-list.sc-s-cnt-market-products-list{padding:0 5px}}";

const SCntMarketProductsList = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.showModal = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showModal", 7);
        this.selectedId = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "selectedId", 7);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-list" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "main-container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-list-row" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ProductsListFunctionalComponent, { array: this.productsList })))));
    }
};
const ProductsListFunctionalComponent = (props) => {
    return props.array.map((item) => {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-products-list-card", { productsList: item }));
    });
};
SCntMarketProductsList.style = sCntMarketProductsListCss;

const sCntMarketPromoSliderCss = ".carousel-cell.sc-s-cnt-market-promo-slider{width:450px;height:160px;margin-right:10px}.main-carousel.sc-s-cnt-market-promo-slider{margin:24px 70px}@media screen and (max-width: 992px){.main-carousel.sc-s-cnt-market-promo-slider{display:none}}";

const SCntMarketPromoSlider = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Получаем данные карточек промо-слайдера
         */
        this.promoSliderCards = [];
    }
    componentDidLoad() {
        const elem = this.promoCarouselTag;
        new Flickity(elem, {
            cellAlign: 'left',
            pageDots: false,
            freeScroll: true,
            draggable: false,
            wrapAround: true,
            percentPosition: false,
        });
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "main-carousel", ref: (el) => this.promoCarouselTag = el }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(PromoSliderCardFunctionalComponent, { array: this.promoSliderCards })));
    }
};
const PromoSliderCardFunctionalComponent = (props) => {
    return props.array.map((item) => {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-cell" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-promo-slider-card", { promoSliderCards: item })));
    });
};
SCntMarketPromoSlider.style = sCntMarketPromoSliderCss;

const sCntMarketRecentlyWatchedCss = ".recently-watched.sc-s-cnt-market-recently-watched{background-color:#f7f7f7;margin-top:40px;padding:20px 10px 25px}.carousel-cell.sc-s-cnt-market-recently-watched{-ms-flex:1;flex:1;width:150px;padding-right:10px}.products-carousel-title.sc-s-cnt-market-recently-watched{margin-top:0;margin-bottom:20px;font-weight:700;font-size:18px;line-height:1;color:#343434}.main-container.sc-s-cnt-market-recently-watched{margin:auto}@media only screen and (min-width: 641px){.main-container.sc-s-cnt-market-recently-watched{width:621px}}@media only screen and (min-width: 848px){.main-container.sc-s-cnt-market-recently-watched{width:828px}}@media only screen and (min-width: 1055px){.main-container.sc-s-cnt-market-recently-watched{width:1035px}}@media only screen and (min-width: 1262px){.main-container.sc-s-cnt-market-recently-watched{width:1242px}}@media only screen and (min-width: 1469px){.main-container.sc-s-cnt-market-recently-watched{width:1449px}}@media only screen and (min-width: 1676px){.main-container.sc-s-cnt-market-recently-watched{width:1656px}}@media only screen and (min-width: 1883px){.main-container.sc-s-cnt-market-recently-watched{width:1863px}}@media screen and (max-width: 320px){.recently-watched.sc-s-cnt-market-recently-watched{padding:20px 5px 25px}}";

const SCntMarketRecentlyWatched = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные карточек слайдера просмотренных товаров
         */
        this.recentlyWatchedProducts = [];
        this.showModal = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showModal", 7);
    }
    componentDidLoad() {
        const elem = this.carouselTag;
        new Flickity(elem, {
            cellAlign: "left",
            pageDots: false,
            freeScroll: true,
            draggable: false,
            wrapAround: true,
            percentPosition: false,
        });
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "recently-watched products" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "main-container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-carousel-title" }, this.recentlyWatchedTitle), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-carousel", ref: (el) => (this.carouselTag = el) }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(RecentlyWatchedSliderFunctionalComponent, { array: this.recentlyWatchedProducts })))));
    }
};
const RecentlyWatchedSliderFunctionalComponent = (props) => {
    return props.array.map((item) => {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-cell" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-recently-watched-card", { recentlyWatchedProducts: item })));
    });
};
SCntMarketRecentlyWatched.style = sCntMarketRecentlyWatchedCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-cnt-market-header-base_6-entry-js.js.map