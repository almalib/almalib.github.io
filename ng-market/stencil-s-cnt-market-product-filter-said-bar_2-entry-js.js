(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-cnt-market-product-filter-said-bar_2-entry-js"],{

/***/ "./node_modules/s-market/dist/esm/s-cnt-market-product-filter-said-bar_2.entry.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/s-market/dist/esm/s-cnt-market-product-filter-said-bar_2.entry.js ***!
  \****************************************************************************************/
/*! exports provided: s_cnt_market_product_filter_said_bar, s_cnt_market_product_page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_product_filter_said_bar", function() { return SCntMarketProductPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_product_page", function() { return SCntMarketProductPage$1; });
/* harmony import */ var _index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-dec6b4d5.js */ "./node_modules/s-market/dist/esm/index-dec6b4d5.js");


const sCntMarketProductFilterSaidBarCss = ".sort-filter-wrap.sc-s-cnt-market-product-filter-said-bar{overflow:hidden}.sort-title.sc-s-cnt-market-product-filter-said-bar{color:#888;text-transform:uppercase;margin-bottom:10px}.sort-btn-container.sc-s-cnt-market-product-filter-said-bar{height:38px;border:1px solid #21a038;border-radius:6px;font-size:12px;white-space:nowrap;text-transform:uppercase;display:-ms-inline-flexbox;display:inline-flex;overflow:hidden}.sort-button.sc-s-cnt-market-product-filter-said-bar{cursor:pointer;padding:0 13px;font-weight:500;color:#393939;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border:none;font-size:12px;white-space:nowrap;text-transform:uppercase}.selected.sc-s-cnt-market-product-filter-said-bar{background-color:#21a038;color:#fff}.filter-section-check-wrap.sc-s-cnt-market-product-filter-said-bar{font-size:14px;line-height:20px;cursor:pointer}.filter-section-wrap.sc-s-cnt-market-product-filter-said-bar{margin-bottom:25px}.filter-section-check-container.sc-s-cnt-market-product-filter-said-bar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;padding:4px 0}.filter-section-check.sc-s-cnt-market-product-filter-said-bar{webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;color:inherit;cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:inherit;width:30px;height:30px;margin-right:5px}.disc-check.sc-s-cnt-market-product-filter-said-bar,.disc-checked.sc-s-cnt-market-product-filter-said-bar{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border:2px solid #b7b7b7;width:16px;height:16px;border-radius:50%;cursor:pointer}.disc-check.sc-s-cnt-market-product-filter-said-bar i.sc-s-cnt-market-product-filter-said-bar{display:none}.disc-checked.sc-s-cnt-market-product-filter-said-bar{border:none;width:20px;height:20px;background-color:#fc4c04;color:white;font-size:9px}.filter-section-check-text.sc-s-cnt-market-product-filter-said-bar{line-height:18px;color:inherit;cursor:inherit;display:table-cell;font-size:inherit;vertical-align:middle}.filter-section-check-text.sc-s-cnt-market-product-filter-said-bar div.sc-s-cnt-market-product-filter-said-bar{margin-right:10px;width:125px;word-wrap:break-word;word-break:break-word}.filter-header.sc-s-cnt-market-product-filter-said-bar{color:#888;text-transform:uppercase;margin-bottom:10px}.filter-items.sc-s-cnt-market-product-filter-said-bar{-webkit-box-sizing:border-box;box-sizing:border-box;display:table;padding:0 6px;width:100%}.filter-item-title.sc-s-cnt-market-product-filter-said-bar{font-weight:700;color:#010101 !important}.filter-item.sc-s-cnt-market-product-filter-said-bar,.filter-item-title.sc-s-cnt-market-product-filter-said-bar{cursor:pointer;color:#7e7c86;font-size:15px;line-height:18px;padding:3px 0;text-align:left}.filter-item.sc-s-cnt-market-product-filter-said-bar:hover,.filter-item-title.sc-s-cnt-market-product-filter-said-bar:hover{color:#21a038 !important}.brand-item-wrap.sc-s-cnt-market-product-filter-said-bar{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:3px 0}.filter-item.sc-s-cnt-market-product-filter-said-bar{display:inline-block}.product-quantity.sc-s-cnt-market-product-filter-said-bar{display:inline-block;color:#888;font-size:85%;text-align:right;font-weight:inherit;padding:3px 0}";

const SCntMarketProductPage = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.checkDesc = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "checkDesc", 7);
        this.clickBrandSelect = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickBrandSelect", 7);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", { class: "sort-filter-wrap" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "filter-section-wrap" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "sort-title" }, this.productFilter.sortTitle), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "sort-btn-wrap" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "sort-btn-container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.checkedSortBtn ? "sort-button" : "sort-button selected", onClick: () => this.checkSortPopularBtn() }, this.productFilter.sortFirstBtn), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.checkedSortBtn ? "sort-button selected" : "sort-button", onClick: () => this.checkSortPriceBtn() }, this.productFilter.sortSecondBtn)))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "filter-section-wrap" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: "filter-section-check-wrap" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "filter-section-check-container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "filter-section-check" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.checkedDesc ? 'disc-checked' : 'disc-check', onClick: () => this.checkDesc.emit() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.productFilter.sortDescIcon }))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "filter-section-check-text" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.productFilter.sortDescText)))))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "filter-section-wrap" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "filter-header" }, this.productFilter.brandTitle), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "filter-items" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "filter-item-title", onClick: () => this.clickBrandSelect.emit() }, this.productFilter.brandAllBtn), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ProductsBrandItemFunctionalComponent, { array: this.brands.card, clickBrandSelect: (x) => this.clickBrandSelect.emit(x) })))));
    }
    /**
     * функция присвоения значения при выборе товоров при нажатии первой кнопки сортировки
     */
    checkSortPopularBtn() {
        this.checkedSortBtn = false;
    }
    /**
     * функция присвоения значения при выборе товоров при нажатии второй кнопки сортировки
     */
    checkSortPriceBtn() {
        this.checkedSortBtn = true;
    }
};
/**
 * Компонентная функция вывода брендов
 */
const ProductsBrandItemFunctionalComponent = (props) => {
    const brands = [];
    const brandsLength = [];
    props.array.forEach((item) => {
        let brand = item.productData.getSpecification.BrandName;
        brandsLength.push(brand);
        const allBrands = () => {
            if (brands.indexOf(brand) === -1) {
                brands.push(brand);
            }
        };
        allBrands();
    });
    return brands.map(item => {
        let quantityProd = [];
        brandsLength.map((len) => {
            if (len === item) {
                quantityProd.push(item);
            }
        });
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "brand-item-wrap" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "filter-item", onClick: () => props.clickBrandSelect(item) }, item), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-quantity" }, quantityProd.length)));
    });
};
SCntMarketProductPage.style = sCntMarketProductFilterSaidBarCss;

const sCntMarketProductPageCss = ".product-page-body.sc-s-cnt-market-product-page{-ms-flex:1 auto;flex:1 auto}.product-page-nav-wrapper.sc-s-cnt-market-product-page{position:relative;border-bottom:1px solid #f0efec;margin:auto;max-width:1656px}.product-page-nav-container.sc-s-cnt-market-product-page{padding:30px}.product-page-nav-title-wrap.sc-s-cnt-market-product-page{position:relative;border-bottom:1px solid #f0efec;margin:auto}.product-page-nav-title.sc-s-cnt-market-product-page{padding:30px}.info.sc-s-cnt-market-product-page{margin-top:10px;font-size:.9em}.category.sc-s-cnt-market-product-page{opacity:.5;margin-top:2px;cursor:pointer}.category.sc-s-cnt-market-product-page:hover{opacity:.7}.category.sc-s-cnt-market-product-page::after{content:'❯';padding:0 15px;color:green}.slogan.sc-s-cnt-market-product-page{opacity:.5;margin-top:2px;cursor:pointer}.slogan.sc-s-cnt-market-product-page:hover{opacity:.7}.products.sc-s-cnt-market-product-page{position:relative;padding:0 0 30px 8px}.product-page-nav-title.sc-s-cnt-market-product-page h1.sc-s-cnt-market-product-page{font-weight:700;font-size:36px;color:#393939;line-height:40px;margin:20px 0;text-align:center}.selected-category-all-wrapper.sc-s-cnt-market-product-page{margin:10px auto 0;text-align:center;max-width:1200px}.selected-category-all-btn.sc-s-cnt-market-product-page{background:#21a038;border-color:#21a038;color:#fff;webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;border-radius:6px;margin-top:10px;display:inline-block;text-align:center;cursor:pointer;white-space:nowrap;padding:6px 14px;font-size:14px;line-height:1.62857143}.product-page-content-wrapper.sc-s-cnt-market-product-page{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}.product-page-content-parent.sc-s-cnt-market-product-page{position:relative;display:-ms-flexbox;display:flex}.product-page-content-container.sc-s-cnt-market-product-page{width:100%}.product-page-filter-container.sc-s-cnt-market-product-page{margin-top:44px}.product-page-filter-container.sc-s-cnt-market-product-page aside.sc-s-cnt-market-product-page{margin-right:10px}.products.sc-s-cnt-market-product-page{margin-top:40px}.products-carousel-title.sc-s-cnt-market-product-page{font-size:26px;font-weight:700;color:#343434;margin-top:4px;margin-bottom:20px}.carousel-cell.sc-s-cnt-market-product-page{-ms-flex:1;flex:1;min-width:235px;max-width:235px;padding-right:10px}.main-container.sc-s-cnt-market-product-page{margin:auto}@media only screen and (min-width: 641px){.main-container.sc-s-cnt-market-product-page{max-width:621px}}@media only screen and (min-width: 848px){.main-container.sc-s-cnt-market-product-page{max-width:828px}}@media only screen and (min-width: 1055px){.main-container.sc-s-cnt-market-product-page{max-width:1035px}}@media only screen and (min-width: 1262px){.main-container.sc-s-cnt-market-product-page{max-width:1242px}}@media only screen and (min-width: 1469px){.main-container.sc-s-cnt-market-product-page{max-width:1449px}}@media only screen and (min-width: 1676px){.main-container.sc-s-cnt-market-product-page{max-width:1656px}}@media only screen and (min-width: 1883px){.main-container.sc-s-cnt-market-product-page{max-width:1863px}}@media (max-width: 768px){.products.sc-s-cnt-market-product-page{padding:0 10px}.products-carousel-title.sc-s-cnt-market-product-page{font-size:20px}}@media screen and (max-width: 320px){.products.sc-s-cnt-market-product-page{padding:0 5px}}.product-wrapper.sc-s-cnt-market-product-page{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:hidden;padding-bottom:1px;list-style:none;margin:0;padding-left:8px}.product-list-card.sc-s-cnt-market-product-page{padding:12px;background:#fff;border:1px solid #e1dede;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;margin:0 -1px -1px 0;vertical-align:top;width:207px;height:350px}@media (max-width: 768px){.info.sc-s-cnt-market-product-page{font-size:12px}.product-page-nav-title.sc-s-cnt-market-product-page h1.sc-s-cnt-market-product-page{font-size:26px}.products-carousel-title.sc-s-cnt-market-product-page{font-size:18px}.product-page-filter-container.sc-s-cnt-market-product-page{display:none}.product-wrapper.sc-s-cnt-market-product-page{margin-top:30px}}@media (max-width: 576px){.product-list-card.sc-s-cnt-market-product-page{width:50%}}";

const SCntMarketProductPage$1 = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные карточек слайдера популярных продуктов
         */
        this.productsSliderCards = [];
        this.showModal = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showModal", 7);
    }
    componentDidLoad() {
        let elem = this.carouselTag;
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
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "product-page-body" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-page-nav-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-page-nav-container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-page-nav-title-wrap" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-page-nav-title" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "category" }, this.productsPage.categoryName), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "slogan" }, this.productsPage.slogan)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TitleFunctionalComponent, { array: this.productsList, selectedCategoryId: this.selectedCategoryId })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "selected-category-all-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "selected-category-all-btn", onClick: () => this.clickBrandSelect(undefined) }, this.productsPage.allBrandBtn)))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-page-content-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-page-content-parent" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-page-filter-container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("aside", null, this.ProductsForFilterFunctionalComponent())), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "product-page-content-container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "main-container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-carousel-title" }, this.productsSliderTitle), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "products-carousel", ref: (el) => (this.carouselTag = el) }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ProductsSliderCardFunctionalComponent, { array: this.productsSliderCards })))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: "product-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ProductsListItemFunctionalComponent, { array: this.productsList, selectedCategoryId: this.selectedCategoryId, selectedBrand: this.selectedBrand, checkedDesc: this.checkedDesc })))))))));
    }
    checkDesc() {
        this.checkedDesc = !this.checkedDesc;
    }
    /**
     * Компонентная функция вывода фильтра
     */
    ProductsForFilterFunctionalComponent() {
        return this.productsList.map((item) => {
            if (this.selectedCategoryId === item.id) {
                return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-product-filter-said-bar", { brands: item, checkedDesc: this.checkedDesc, productFilter: this.productsPage.productsPageFilter, onCheckDesc: () => this.checkDesc(), onClickBrandSelect: (x) => this.clickBrandSelect(x) }));
            }
        });
    }
    ;
    /**
     * функция для присвоения значения выбранного бренда
     */
    clickBrandSelect({ detail }) {
        this.selectedBrand = detail;
    }
};
/**
 * компонентная функция для вывода Заголовка выбранной категории
 */
const TitleFunctionalComponent = (props) => {
    return props.array.map((item) => {
        if (props.selectedCategoryId === item.id) {
            return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, item.header.title));
        }
    });
};
/**
 * Компонентная функция вывода слайдера
 */
const ProductsSliderCardFunctionalComponent = (props) => {
    return props.array.map((item) => {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-cell" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-products-slider-card", { productsSliderCards: item })));
    });
};
/**
 * Компонентная функция вывода продуктов
 */
const ProductsListItemFunctionalComponent = (props) => {
    /**
     * Если значение бренд совпадает (let brandName = i.productData.getSpecification.BrandName;) со значением выбранного бренда в компоненте фильтра(сайдБар фильтр)
     * (props.selectedBrand) и значения не undefined и "" пустое значение то вывести из массива объекты с таким брендом, иначе вывести все товары,
     * также если была активирована кнопка товары с скидкой (props.checkedDesc) то вывести товары только с скидкой.
     */
    return props.array.map((item) => {
        if (props.selectedCategoryId === item.id) {
            return item.card.map((i) => {
                let brandName = i.productData.getSpecification.BrandName;
                if (props.selectedBrand === brandName && props.selectedBrand != undefined && props.selectedBrand != '') {
                    if (props.checkedDesc === true) {
                        if (i.disPrice) {
                            return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { class: "product-list-card" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-products-list-item", { productsListCard: i })));
                        }
                    }
                    else {
                        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { class: "product-list-card" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-products-list-item", { productsListCard: i })));
                    }
                }
                else if (props.selectedBrand === undefined || props.selectedBrand === '' || props.selectedBrand === null) {
                    if (props.checkedDesc === true) {
                        if (i.disPrice) {
                            return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { class: "product-list-card" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-products-list-item", { productsListCard: i })));
                        }
                    }
                    else {
                        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { class: "product-list-card" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-products-list-item", { productsListCard: i })));
                    }
                }
            });
        }
    });
};
SCntMarketProductPage$1.style = sCntMarketProductPageCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-cnt-market-product-filter-said-bar_2-entry-js.js.map