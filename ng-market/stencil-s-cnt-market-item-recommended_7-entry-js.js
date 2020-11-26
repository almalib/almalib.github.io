(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-cnt-market-item-recommended_7-entry-js"],{

/***/ "./node_modules/s-market/dist/esm/s-cnt-market-item-recommended_7.entry.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/s-market/dist/esm/s-cnt-market-item-recommended_7.entry.js ***!
  \*********************************************************************************/
/*! exports provided: s_cnt_market_item_recommended, s_cnt_market_product, s_cnt_market_products_list_card, s_cnt_market_promo_slider_card, s_cnt_market_recently_watched_card, s_cnt_market_recommended, s_cnt_market_specification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_item_recommended", function() { return SCntMarketItemRecommended; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_product", function() { return SCntMarketProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_products_list_card", function() { return SCntMarketProductsListCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_promo_slider_card", function() { return SCntMarketPromoSliderCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_recently_watched_card", function() { return SCntMarketRecentlyWatchedCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_recommended", function() { return SCntMarketRecommended; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_specification", function() { return SCntMarketSpecification; });
/* harmony import */ var _index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-dec6b4d5.js */ "./node_modules/s-market/dist/esm/index-dec6b4d5.js");


const sCntMarketItemRecommendedCss = ".recomm.sc-s-cnt-market-item-recommended{display:-ms-flexbox;display:flex;border:1px solid lightgray;border-radius:5px;cursor:pointer;width:226px;padding:5px 10px}.block-image.sc-s-cnt-market-item-recommended{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100px;height:100px}.image.sc-s-cnt-market-item-recommended{width:70px;height:80px;background-color:black}.price.sc-s-cnt-market-item-recommended{margin:5px 0 6px 10px;font-size:0.8em;font-weight:600}.productName.sc-s-cnt-market-item-recommended{font-size:0.7em;margin:0 0 10px 10px}.weight.sc-s-cnt-market-item-recommended{font-size:0.8em;font-weight:600;opacity:.5;margin:0 0 0 10px}";

const SCntMarketItemRecommended = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "recomm" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-image" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "image", style: {
                backgroundImage: "url(" + this.getRecommended.image + ")",
            } })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "price" }, this.getRecommended.price), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "productName" }, this.getRecommended.productName), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "weight" }, this.getRecommended.weight)))));
    }
};
SCntMarketItemRecommended.style = sCntMarketItemRecommendedCss;

const sCntMarketProductCss = ".info.sc-s-cnt-market-product{margin-top:10px;font-size:.9em}.product.sc-s-cnt-market-product{position:relative;padding-bottom:30px}.brand.sc-s-cnt-market-product{opacity:.5;margin-right:15px;cursor:pointer}.brand.sc-s-cnt-market-product:hover{opacity:.7}.brand.sc-s-cnt-market-product::after{content:'❯';padding-left:15px;color:green}.products.sc-s-cnt-market-product{opacity:.5;margin-right:15px;cursor:pointer}.products.sc-s-cnt-market-product:hover{opacity:.7}.products.sc-s-cnt-market-product::after{content:'❯';padding-left:15px;color:green}.category.sc-s-cnt-market-product{opacity:.5;margin-top:2px;cursor:pointer}.category.sc-s-cnt-market-product:hover{opacity:.7}.image.sc-s-cnt-market-product{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.image.sc-s-cnt-market-product div.sc-s-cnt-market-product{cursor:-webkit-zoom-in;cursor:zoom-in;background-size:cover;background-position:center;width:250px;height:250px}.product-img-item-wrapper.sc-s-cnt-market-product{overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin:15px -5px 0}.product-img-item.sc-s-cnt-market-product{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-top:5px;padding:0 5px;width:25%}.product-img-item.sc-s-cnt-market-product div.sc-s-cnt-market-product{-webkit-transition:border .25s ease-out;transition:border .25s ease-out;border:1px solid transparent;border-radius:4px;cursor:pointer;max-width:100%;padding:5px;width:76px;height:76px;background-size:cover;background-position:center}.product-img-item-checked.sc-s-cnt-market-product img.sc-s-cnt-market-product{border-color:#21a038}.info-product.sc-s-cnt-market-product{position:relative}.close.sc-s-cnt-market-product{width:40px;height:40px;line-height:40px;text-align:center;border-radius:50%;border:1px solid lightgray;position:absolute;top:20px;right:5px;cursor:pointer;z-index:1}.close.sc-s-cnt-market-product:hover{background-color:#eaecef;-webkit-transition:.3s;transition:.3s}.name.sc-s-cnt-market-product{margin-bottom:5px;font-size:1.2em;font-family:'Roboto', sans-serif}.modal-nav.sc-s-cnt-market-product{padding-top:5px;padding-bottom:30px}.weight.sc-s-cnt-market-product{opacity:.5}.price.sc-s-cnt-market-product{margin:35px 0 5px 0;font-size:1.3em;font-weight:600}.info-presence.sc-s-cnt-market-product{display:-ms-flexbox;display:flex;color:#3db21b}.circle.sc-s-cnt-market-product{font-size:.55em;color:#3db21b}.cir.sc-s-cnt-market-product{margin-right:3px}.presence.sc-s-cnt-market-product{margin:0 0 0 8px;font-size:.8em;font-weight:600;line-height:12px}.my-item.sc-s-cnt-market-product{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.button.sc-s-cnt-market-product{margin:30px 0 0 0;-ms-flex:1;flex:1}.my-button.sc-s-cnt-market-product{width:100%;height:40px;border-radius:7px;border:none;outline:none;font-size:1.1em;font-weight:600;color:white;background-color:#11980a;cursor:pointer}.my-button.sc-s-cnt-market-product:hover{background-color:green;-webkit-transition:.3s;transition:.3s}.heart.sc-s-cnt-market-product{width:40px;height:40px;margin:30px 0 0 10px;background-color:transparent;border:1px solid lightgray;border-radius:7px;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}#check.sc-s-cnt-market-product i.sc-s-cnt-market-product{color:green;-webkit-transition:color .4s;transition:color .4s;-webkit-animation-name:pulse;animation-name:pulse;-webkit-animation-duration:0.2s;animation-duration:0.2s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1}.my-heart.sc-s-cnt-market-product{font-size:1.5em;color:#d3ecd7}@media only screen and (max-width: 400px){.product.sc-s-cnt-market-product{max-width:400px}.info-product.sc-s-cnt-market-product{max-width:400px;margin-bottom:30px}.price.sc-s-cnt-market-product{margin:0 0 15px 0}.heart.sc-s-cnt-market-product{margin:30px 0 0 20px}.name.sc-s-cnt-market-product{padding-top:20px}}@media only screen and (max-width: 767px){.close.sc-s-cnt-market-product{top:16px;right:0px}.container.sc-s-cnt-market-product{max-width:100%}}@media (max-width: 575px){.image.sc-s-cnt-market-product{margin-bottom:15px}}.product-popup__images-block.sc-s-cnt-market-product{margin-bottom:15px}@-webkit-keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}100%{-webkit-transform:scale(1);transform:scale(1)}}";

const SCntMarketProduct = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnModal = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnModal", 7);
    }
    componentDidLoad() {
        this.selectedImg = this.getProduct.defaultImgId;
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "close", onClick: () => this.closeModalHandler() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fa fa-times", "aria-hidden": "true" })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row modal-nav" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "brand" }, this.getProduct.brand), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "products" }, this.getProduct.products), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "category" }, this.getProduct.category)))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-sm-6" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "image" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ProductImg, { arr: this.getProduct.image, selectedImg: this.selectedImg })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-img-item-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ProductImgItems, { arr: this.getProduct.image, imgIdSelect: (x) => this.imgIdSelect(x) }))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-sm-6" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-product" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "name" }, this.getProduct.name), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "weight" }, this.getProduct.weight), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "price" }, this.getProduct.price, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.getProduct.currency)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-presence" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "circle" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fa fa-circle cir", "aria-hidden": "true" }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fa fa-circle cir", "aria-hidden": "true" }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fa fa-circle cir", "aria-hidden": "true" }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fa fa-circle cir", "aria-hidden": "true" })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "presence" })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "my-item" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "button" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "my-button" }, this.productBlock.button)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "heart", ref: (el) => this.likeCheck = el, onClick: () => this.iconLike(this.likeCheck) }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.productBlock.likeIcon, "aria-hidden": "true" })))))))));
    }
    /**
     * Закрытие модального окна
     */
    closeModalHandler() {
        this.clickOnModal.emit();
    }
    /**
     * Закрытие модального окна
     */
    imgIdSelect(number) {
        this.selectedImg = number;
    }
    /**
     * Закрытие модального окна
     */
    iconLike(detail) {
        if (detail === this.likeCheck) {
            if (detail.id != 'check') {
                detail.id = 'check';
            }
            else {
                detail.id = '';
            }
        }
    }
};
/*
* компонентная функция для вывода элементов
 */
const ProductImg = (props) => {
    return props.arr.map((item) => {
        if (props.selectedImg === item.id) {
            return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { style: { backgroundImage: "url(" + item.img + ")" } }));
        }
    });
};
/*
* компонентная функция для вывода элементов
 */
const ProductImgItems = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-img-item" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { style: { backgroundImage: "url(" + item.img + ")" }, onClick: () => props.imgIdSelect(item.id) })));
    });
};
SCntMarketProduct.style = sCntMarketProductCss;

const sCntMarketProductsListCardCss = ".products-list-header.sc-s-cnt-market-products-list-card{margin:40px 0 25px;display:-ms-flexbox;display:flex}.products-list-title.sc-s-cnt-market-products-list-card{color:#393939;font-size:26px;font-weight:700;line-height:30px;cursor:pointer}.products-list-title.sc-s-cnt-market-products-list-card:hover{color:#21a038}.show-all.sc-s-cnt-market-products-list-card{-webkit-transition:all .25s ease-out;transition:all .25s ease-out;border-radius:4px;border:1px solid #e5edec;color:#21a038;font-size:12px;font-weight:400;margin-left:10px;padding:5px 10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}.show-all.sc-s-cnt-market-products-list-card:hover{border:1px solid #21a038;color:#21a038}i.sc-s-cnt-market-products-list-card{margin-left:4px;fill:#21a038;height:10px}.show-all.sc-s-cnt-market-products-list-card span.sc-s-cnt-market-products-list-card{display:inline-block}.products-list-body.sc-s-cnt-market-products-list-card{display:-ms-flexbox;display:flex}.product-list-card.sc-s-cnt-market-products-list-card{padding:12px;border:1px solid #e1dede;font-size:14px;margin:0 -1px -1px 0;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;height:350px}@media (max-width: 768px){.show-all.sc-s-cnt-market-products-list-card{display:none}.products-list-title.sc-s-cnt-market-products-list-card{font-size:20px}.product-list-card.sc-s-cnt-market-products-list-card{height:278px}}@media (max-width: 480px){.product-list-card.sc-s-cnt-market-products-list-card{padding:8px;height:265px}}";

const SCntMarketProductsListCard = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Передача данных для списка товаров в стейт
         */
        this.productListState = this.productsList.card;
        this.showModal = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showModal", 7);
        this.selectedId = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "selectedId", 7);
    }
    componentDidLoad() {
        this.changesAmountCards();
        window.addEventListener("resize", () => this.changesAmountCards());
    }
    disconnectedCallback() {
        window.removeEventListener("resize", () => this.changesAmountCards());
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-list-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-list-header" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-list-title" }, this.productsList.header.title), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "show-all", onClick: () => this.selectedId.emit(this.productsList.id) }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.productsList.header.allProducts), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-angle-right" }))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-list-body" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ProductsListItemFunctionalComponent, { array: this.productListState }))));
    }
    /**
     * Количество выводимых карточек товара в зависимости от размера экрана
     */
    changesAmountCards() {
        if (window.innerWidth < 1883 && window.innerWidth >= 1676) {
            this.productListState = this.productsList.card.slice(0, 8);
        }
        else if (window.innerWidth < 1676 && window.innerWidth >= 1469) {
            this.productListState = this.productsList.card.slice(0, 7);
        }
        else if (window.innerWidth < 1469 && window.innerWidth >= 1261) {
            this.productListState = this.productsList.card.slice(0, 6);
        }
        else if (window.innerWidth < 1261 && window.innerWidth >= 1055) {
            this.productListState = this.productsList.card.slice(0, 5);
        }
        else if (window.innerWidth < 1055 && window.innerWidth >= 848) {
            this.productListState = this.productsList.card.slice(0, 4);
        }
        else if (window.innerWidth < 848 && window.innerWidth >= 481) {
            this.productListState = this.productsList.card.slice(0, 3);
        }
        else if (window.innerWidth < 481) {
            this.productListState = this.productsList.card.slice(0, 2);
        }
        else {
            this.productListState = this.productsList.card.slice(0, 9);
        }
    }
};
const ProductsListItemFunctionalComponent = (props) => {
    return props.array.map((item) => {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-list-card" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-products-list-item", { productsListCard: item })));
    });
};
SCntMarketProductsListCard.style = sCntMarketProductsListCardCss;

const sCntMarketPromoSliderCardCss = ".promo-slider-card-container.sc-s-cnt-market-promo-slider-card{background-position:50%;background-repeat:no-repeat;background-size:cover;border-radius:4px;height:160px}.promo-slider-card-content.sc-s-cnt-market-promo-slider-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:100%;padding:0 25px;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.promo-slider-card-body.sc-s-cnt-market-promo-slider-card{-ms-flex-preferred-size:65%;flex-basis:65%;padding-right:5px}.promo-slider-card-message.sc-s-cnt-market-promo-slider-card{padding-bottom:13px;color:#fff}.promo-slider-card-message-header.sc-s-cnt-market-promo-slider-card{font-size:20px;font-weight:700;line-height:26px;padding-bottom:2px}.promo-slider-card-message-body.sc-s-cnt-market-promo-slider-card{font-size:14px;line-height:20px}.promo-slider-card-action.sc-s-cnt-market-promo-slider-card{background:#fff;border-radius:4px;color:#43b02a;font-size:14px;font-weight:700;padding:6px 14px;text-decoration:none;cursor:pointer}.promo-slider-card-logo.sc-s-cnt-market-promo-slider-card{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;width:35%}.promo-slider-card-logo-bg.sc-s-cnt-market-promo-slider-card{display:-ms-flexbox;display:flex;background:#fff;border-radius:50px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100px;width:100px;overflow:hidden}.promo-slider-card-logo-img.sc-s-cnt-market-promo-slider-card{height:80%;width:80%;background-size:cover;background-position:center}.promo-slider-card-action.sc-s-cnt-market-promo-slider-card:hover{background:#f6fff4;color:#666}";

const SCntMarketPromoSliderCard = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "promo-slider-card" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "promo-slider-card-container", style: {
                backgroundColor: `rgb(${this.promoSliderCards.bgColor})`,
                backgroundImage: `url(${this.promoSliderCards.bgImage})`,
            } }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "promo-slider-card-content" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "promo-slider-card-body" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "promo-slider-card-message", style: { color: `rgb(${this.promoSliderCards.color})` } }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "promo-slider-card-message-header" }, this.promoSliderCards.title), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "promo-slider-card-message-body" }, this.promoSliderCards.description)), this.promoSliderCards.link ? (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "promo-slider-card-action" }, this.promoSliderCards.link)) : ("")), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "promo-slider-card-logo" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "promo-slider-card-logo-bg" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "promo-slider-card-logo-img", style: {
                backgroundImage: `url(${this.promoSliderCards.img})`,
            } })))))));
    }
};
SCntMarketPromoSliderCard.style = sCntMarketPromoSliderCardCss;

const sCntMarketRecentlyWatchedCardCss = ".product-card.sc-s-cnt-market-recently-watched-card{position:relative;z-index:1;width:100%;padding:6px 10px;background-color:#fff;border:solid 1px #e7e4e4;border-radius:4px;cursor:pointer}.product-card-img-wrapper.sc-s-cnt-market-recently-watched-card{width:100%;margin-bottom:9px}.product-card-img.sc-s-cnt-market-recently-watched-card{width:70px;height:70px;margin:auto;background-size:cover;background-position:center}.product-card-desc.sc-s-cnt-market-recently-watched-card{width:100%}.price.sc-s-cnt-market-recently-watched-card{font-weight:700;font-size:14px;color:#343434;margin-bottom:5px}.product-cart.sc-s-cnt-market-recently-watched-card{padding:0 8px;display:none;position:absolute;top:50%;right:1px;left:1px;z-index:2;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;height:40px;margin-right:0;background:rgba(255,255,255,0.6);border-top:1px solid #ededed;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.product-card.sc-s-cnt-market-recently-watched-card:hover .product-cart.sc-s-cnt-market-recently-watched-card{display:-ms-flexbox;display:flex}.product-bottom-info.sc-s-cnt-market-recently-watched-card{font-weight:700;font-size:12px;color:#8f8e94}.product-cart-add.sc-s-cnt-market-recently-watched-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:28px;padding:5px 10px;background-color:#21a038;color:#ffffff;font-size:17px;-webkit-transition:background,.3s;transition:background,.3s;border-radius:4px}.product-cart-add.sc-s-cnt-market-recently-watched-card:hover{background-color:#187629}.fa-plus.sc-s-cnt-market-recently-watched-card{font-size:8px;margin-right:2px}.price-discount-sale.sc-s-cnt-market-recently-watched-card{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;-ms-flex-wrap:wrap;flex-wrap:wrap}.price-default.sc-s-cnt-market-recently-watched-card{margin-right:8px;color:#e80e49}.price-original.sc-s-cnt-market-recently-watched-card{color:#8f8e94;font-weight:500;text-decoration:line-through}";

const SCntMarketRecentlyWatchedCard = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.showModal = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showModal", 7);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-card", onClick: () => this.showModalHandler(this.recentlyWatchedProducts) }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-card-item" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-card-img-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-card-img", style: {
                backgroundImage: `url(${this.recentlyWatchedProducts.img})`,
            } })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-card-desc" }, " ", Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-price" }, this.recentlyWatchedProducts.price ? (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "price" }, this.recentlyWatchedProducts.price, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, " ", this.recentlyWatchedProducts.currency))) : (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "price-discount" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "price price-discount-sale" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "price-default" }, this.recentlyWatchedProducts.disPrice, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.recentlyWatchedProducts.currency)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "price-original" }, this.recentlyWatchedProducts.oldPrice, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.recentlyWatchedProducts.currency)))))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-bottom-info" }, this.recentlyWatchedProducts.weight))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-cart" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-cart-box" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-cart-add" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-plus" }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-shopping-cart" }))))));
    }
    /**
     *
     */
    showModalHandler(x) {
        this.showModal.emit(x);
    }
};
SCntMarketRecentlyWatchedCard.style = sCntMarketRecentlyWatchedCardCss;

const sCntMarketRecommendedCss = ".container.sc-s-cnt-market-recommended{width:768px;margin:15px 0 30px 0;padding:0 25px 0 0}.info.sc-s-cnt-market-recommended{font-weight:600;margin-bottom:12px}.icons.sc-s-cnt-market-recommended{margin:0 0 0 0;display:-ms-flexbox;display:flex}.arrow-left.sc-s-cnt-market-recommended,.arrow-right.sc-s-cnt-market-recommended{width:32px;height:32px;line-height:28px;margin:0 10px 0 0;text-align:center;border:1px solid lightgray;border-radius:5px;color:lightgray;cursor:pointer}.arrow-right.sc-s-cnt-market-recommended{color:white;background-color:#21a038;border:none}.arrow-right.sc-s-cnt-market-recommended:hover{background-color:#117b0a;-webkit-transition:.3s;transition:.3s}.recommended.sc-s-cnt-market-recommended{margin:0 15px}.no-gutters.sc-s-cnt-market-recommended{padding-bottom:30px}.carousel-cell.sc-s-cnt-market-recommended{margin-right:10px}";

const SCntMarketRecommended = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    componentDidLoad() {
        let elem = this.carouselTag;
        // @ts-ignore
        let flkty = new Flickity(elem, {
            // options
            pageDots: false,
            cellAlign: "left",
        });
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "recommended products" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row justify-content-between" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info" }, this.recommendedBlock.recommendedTitle))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "no-gutters", ref: (el) => (this.carouselTag = el) }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(GetRecommended, { array: this.getRecommended.featuredProduct }))));
    }
};
const GetRecommended = (props) => {
    return props.array.map((item) => {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-cell" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-item-recommended", { getRecommended: item })));
    });
};
SCntMarketRecommended.style = sCntMarketRecommendedCss;

const sCntMarketSpecificationCss = ".container.sc-s-cnt-market-specification{max-width:100%;padding:0;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box}.row-desc.sc-s-cnt-market-specification{overflow:hidden;-webkit-transition:height .3s cubic-bezier(.19,1,.22,1);transition:height .3s cubic-bezier(.19,1,.22,1);background-color:#f7f7f7;border-radius:4px;padding-bottom:25px;padding-top:25px;-webkit-box-sizing:border-box;box-sizing:border-box}.row-radius.sc-s-cnt-market-specification{border-radius:0 0 15px 15px}.op.sc-s-cnt-market-specification b.sc-s-cnt-market-specification{margin:20px 0 0 10px;font-size:18px;font-weight:600}.spec.sc-s-cnt-market-specification{margin:10px 0 0 10px;font-size:0.9rem}.my-spec.sc-s-cnt-market-specification{margin-top:23px;border:1px solid lightgray;border-radius:3px;background-color:white}.block-value.sc-s-cnt-market-specification{border-bottom:1px solid lightgray;padding:10px 15px}.line-item-wrapper.sc-s-cnt-market-specification{padding:0 15px}.line-item.sc-s-cnt-market-specification{border-bottom:1px solid lightgray}.value.sc-s-cnt-market-specification{font-size:1.1em;display:inline-block;font-weight:600}.nutritional-value-title.sc-s-cnt-market-specification{display:inline-block;padding:0 8px 10px 0;font-weight:600;font-size:0.9em}.weight.sc-s-cnt-market-specification{display:inline-block;padding:10px 0 10px 0;font-size:1.1em}.nutritional-value.sc-s-cnt-market-specification{display:inline-block;padding:10px 0 10px 80px;opacity:0.7;font-size:0.9em}.weightCarbohydrates.sc-s-cnt-market-specification{display:inline-block;padding:10px 0 10px 53px;opacity:0.7;font-size:0.9em}.calories.sc-s-cnt-market-specification{display:inline-block;padding:0 8px 20px 20px;font-weight:600;font-size:0.9em}.weightCalories.sc-s-cnt-market-specification{display:inline-block;padding:10px 0 10px 18px;opacity:0.7;font-size:0.9em}.item_1.sc-s-cnt-market-specification{font-weight:600;padding:15px 0 8px 15px}.info.sc-s-cnt-market-specification{font-weight:600;padding:10px 0 8px 15px}.composition.sc-s-cnt-market-specification{font-size:0.9em;padding:0 0 20px 15px;line-height:1.43;color:#393939}.line-composition.sc-s-cnt-market-specification{padding:10px 0;margin:auto;border-bottom:1px solid #e6e6e6;display:-ms-flexbox;display:flex}.line-composition.sc-s-cnt-market-specification:last-child{border-bottom:0}.product-property.sc-s-cnt-market-specification{border-bottom:1px solid #e6e6e6;padding:10px 0;font-size:0.9em}.product-property-child.sc-s-cnt-market-specification{display:-ms-flexbox;display:flex;line-height:16px}.info-value-title.sc-s-cnt-market-specification{line-height:1.27;-ms-flex:1;flex:1;margin-right:15px}.info-value-title.sc-s-cnt-market-specification strong.sc-s-cnt-market-specification{color:#333 !important}.info-value.sc-s-cnt-market-specification{line-height:1.27;-ms-flex:1;flex:1;color:#393939;word-break:break-word}.brand.sc-s-cnt-market-specification,.manufacturer.sc-s-cnt-market-specification,.country.sc-s-cnt-market-specification,.storageСonditions.sc-s-cnt-market-specification,.term.sc-s-cnt-market-specification,.kindOfCandy.sc-s-cnt-market-specification,.typeOfChocolate.sc-s-cnt-market-specification,.flavor.sc-s-cnt-market-specification,.supplements.sc-s-cnt-market-specification,.feature.sc-s-cnt-market-specification,.packaging.sc-s-cnt-market-specification{font-size:0.9em;display:inline-block;padding:10px 8px 5px 15px;font-weight:600;opacity:0.7;-ms-flex:1;flex:1}.brand-name.sc-s-cnt-market-specification{display:inline-block;opacity:0.7;color:#21a038;-ms-flex:1;flex:1}.lenta.sc-s-cnt-market-specification{display:inline-block;opacity:0.7;font-size:0.9em;-ms-flex:1;flex:1}.russia.sc-s-cnt-market-specification{display:inline-block;-ms-flex:1;flex:1;opacity:0.7;font-size:0.9em}.terms.sc-s-cnt-market-specification{display:inline-block;-ms-flex:1;flex:1;opacity:0.7;font-size:0.9em}.month.sc-s-cnt-market-specification{-ms-flex:1;flex:1;display:inline-block;opacity:0.7;font-size:0.9em}.chocolate.sc-s-cnt-market-specification{display:inline-block;-ms-flex:1;flex:1;opacity:0.7;font-size:0.9em}.bitter.sc-s-cnt-market-specification{display:inline-block;opacity:0.7;-ms-flex:1;flex:1;font-size:0.9em}.walnut.sc-s-cnt-market-specification{-ms-flex:1;flex:1;display:inline-block;opacity:0.7;font-size:0.9em}.hazelnut.sc-s-cnt-market-specification{display:inline-block;-ms-flex:1;flex:1;opacity:0.7;font-size:0.9em}.glazed.sc-s-cnt-market-specification{display:inline-block;-ms-flex:1;flex:1;opacity:0.7;font-size:0.9em}.box.sc-s-cnt-market-specification{display:inline-block;-ms-flex:1;flex:1;opacity:0.7;font-size:0.9em}.hide-show-info-wrap.sc-s-cnt-market-specification{width:100%;position:relative}.hide-information-container.sc-s-cnt-market-specification{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#f7f7f7;border:none;-webkit-box-shadow:none;box-shadow:none;color:#21a038;padding:15px 0 20px;position:relative;text-decoration:underline;text-align:center;cursor:pointer}.hide-information-container.sc-s-cnt-market-specification::before{background-image:-webkit-gradient(linear,left top, left bottom,color-stop(0, hsla(0,0%,96.9%,0)),to(#f7f7f7));background-image:linear-gradient(180deg,hsla(0,0%,96.9%,0) 0,#f7f7f7);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#00F7F7F7\",endColorstr=\"#FFF7F7F7\",GradientType=0);content:\"\";height:30px;left:0;position:absolute;right:0;top:-30px}@media only screen and (max-width: 400px){.block-composition.sc-s-cnt-market-specification{padding-top:20px}}";

const SCntMarketSpecification = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "specification" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row row-desc", ref: (el) => this.hideInfo = el }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-sm-6" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "op" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("b", null, this.specificationBlock.descriptionTitle)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "spec" }, this.getSpecification.description)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-sm-6" }, 
        // выводитсч если есть пищевая ценность
        this.getSpecification.nutritionalValue.length > 0 ?
            Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "my-spec" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-value" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "value" }, this.specificationBlock.nutritionalValueTitle), "\u00A0", this.specificationBlock.nutritionalOnTheValueTitle), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "line-item-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(NutritionalValue, { arr: this.getSpecification.nutritionalValue }))) :
            '', Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-composition" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "item_1" }, this.specificationBlock.compositionTitle), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "composition" }, this.getSpecification.composition), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "line-composition" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info" }, this.specificationBlock.generalInformationTitle)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-property" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-property-child" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-value-title" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("strong", null, this.getSpecification.BrandNameTitle)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-value brand-name" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("u", null, this.getSpecification.BrandName)))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(GeneralInformation, { arr: this.getSpecification.generalInformation })))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "hide-show-info-wrap" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "hide-information-container", onClick: () => this.clickHideInfo() }, this.specificationBlock.hideInformation)))));
    }
    clickHideInfo() {
        if (this.hideInfo.style.height !== '340px') {
            this.hideInfo.style.height = '340px';
        }
        else {
            this.hideInfo.style.height = 'auto';
        }
    }
};
/*
* компонентная функция для вывода элементов ...
 */
const NutritionalValue = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "line-item" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nutritional-value-title" }, item.infoTitle), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nutritional-value" }, item.info)));
    });
};
/*
* компонентная функция для вывода элементов ...
 */
const GeneralInformation = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-property" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-property-child" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-value-title" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("strong", null, item.infoTitle)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-value" }, item.info))));
    });
};
SCntMarketSpecification.style = sCntMarketSpecificationCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-cnt-market-item-recommended_7-entry-js.js.map