(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-cnt-market-back-to-top_13-entry-js"],{

/***/ "./node_modules/s-market/dist/esm/s-cnt-market-back-to-top_13.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/s-market/dist/esm/s-cnt-market-back-to-top_13.entry.js ***!
  \*****************************************************************************/
/*! exports provided: s_cnt_market_back_to_top, s_cnt_market_down_footer, s_cnt_market_footer, s_cnt_market_footer_info, s_cnt_market_footer_info_item, s_cnt_market_footer_items, s_cnt_market_footer_modal_form, s_cnt_market_header, s_cnt_market_header_body, s_cnt_market_header_nav, s_cnt_market_top_bar, s_cnt_market_up_footer, s_cnt_market_up_footer_form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_back_to_top", function() { return SCntMarketBackToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_down_footer", function() { return SCntMarketDownFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_footer", function() { return SCntMarketFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_footer_info", function() { return SCntMarketFooterInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_footer_info_item", function() { return SCntMarketFooterInfoItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_footer_items", function() { return SCntMarketFooterItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_footer_modal_form", function() { return SCntMarketFooterModalForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_header", function() { return SCntMarketHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_header_body", function() { return SCntMarketHeaderBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_header_nav", function() { return SCntMarketHeaderNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_top_bar", function() { return SCntMarketTopBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_up_footer", function() { return SCntMarketUpFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_cnt_market_up_footer_form", function() { return SCntMarketUpFooterForm; });
/* harmony import */ var _index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-dec6b4d5.js */ "./node_modules/s-market/dist/esm/index-dec6b4d5.js");
/* harmony import */ var _mock_s_2377f0be_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-s-2377f0be.js */ "./node_modules/s-market/dist/esm/mock-s-2377f0be.js");



const sCntMarketBackToTopCss = ".back-to-top.sc-s-cnt-market-back-to-top{position:fixed;right:48px;bottom:48px}.back-to-top.sc-s-cnt-market-back-to-top button.sc-s-cnt-market-back-to-top{background:#fff;-webkit-box-shadow:0 10px 30px rgba(208, 210, 212, 0.4);box-shadow:0 10px 30px rgba(208, 210, 212, 0.4);border:1px solid #d0d2d4;color:#333536;width:48px;height:50px;border-radius:100%;cursor:pointer;font-size:24px;-webkit-transition:0.3s;transition:0.3s}.back-to-top.sc-s-cnt-market-back-to-top button.sc-s-cnt-market-back-to-top:hover{background-color:#f3f4f7;border:1px solid #d0d2d4}.back-to-top.sc-s-cnt-market-back-to-top button.sc-s-cnt-market-back-to-top:focus{outline:none}.fadeIn.sc-s-cnt-market-back-to-top{-webkit-animation:fadeIn 0.5s;animation:fadeIn 0.5s}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.fadeOut.sc-s-cnt-market-back-to-top{opacity:0;-webkit-animation:fadeOut 0.5s;animation:fadeOut 0.5s}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}";

const SCntMarketBackToTop = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    componentDidLoad() {
        document.addEventListener("scroll", () => this.toggleClassOnScroll());
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "back-to-top fadeOut", ref: (el) => (this.btnTag = el), onClick: () => this.scrollToTop() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-angle-up" }))));
    }
    /**
     * Метод для показа и скрытия кнопки наверх
     */
    toggleClassOnScroll() {
        let scrollTop = window.scrollY;
        if (scrollTop > 300) {
            this.btnTag.classList.remove("fadeOut");
            this.btnTag.classList.add("fadeIn");
        }
        else {
            this.btnTag.classList.remove("fadeIn");
            this.btnTag.classList.add("fadeOut");
        }
    }
    /**
     * Прокрутка страницы наверх
     */
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
};
SCntMarketBackToTop.style = sCntMarketBackToTopCss;

const sCntMarketDownFooterCss = ".downFooter.sc-s-cnt-market-down-footer{padding:20px 0 15px 0;background-color:#f3f4f7}.common.sc-s-cnt-market-down-footer{display:-ms-flexbox;display:flex}.copyright.sc-s-cnt-market-down-footer{opacity:0.6;font-weight:600}.company.sc-s-cnt-market-down-footer{opacity:0.6;margin-top:4px}.iconsApp.sc-s-cnt-market-down-footer{display:-ms-flexbox;display:flex}.icons.sc-s-cnt-market-down-footer{display:-ms-flexbox;display:flex}.facebook.sc-s-cnt-market-down-footer,.vk.sc-s-cnt-market-down-footer,.instagram.sc-s-cnt-market-down-footer,.apple.sc-s-cnt-market-down-footer,.google.sc-s-cnt-market-down-footer{width:35px;height:35px;line-height:35px;margin:0 22px 0 0;text-align:center;border-radius:8px;background-color:white;font-size:1.2em;cursor:pointer;color:gray}.download.sc-s-cnt-market-down-footer{width:250px;color:gray;font-size:0.9em}.my-block.sc-s-cnt-market-down-footer{display:-ms-flexbox;display:flex}.apple.sc-s-cnt-market-down-footer{margin-left:20px}.google.sc-s-cnt-market-down-footer{font-size:1em}@media only screen and (max-width: 992px){.copy.sc-s-cnt-market-down-footer{margin-bottom:15px;text-align:center}.iconsApp.sc-s-cnt-market-down-footer{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.icons.sc-s-cnt-market-down-footer{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.download.sc-s-cnt-market-down-footer{text-align:center;width:100%}}@media only screen and (max-width: 768px){.common.sc-s-cnt-market-down-footer{display:block;text-align:center}.icons.sc-s-cnt-market-down-footer{-ms-flex-pack:center;justify-content:center;margin:15px}.iconsApp.sc-s-cnt-market-down-footer{margin:20px auto}.my-block.sc-s-cnt-market-down-footer{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column}.download.sc-s-cnt-market-down-footer{width:100%;padding:10px 30px;margin:auto;text-align:center}}@media only screen and (max-width: 414px){.downFooter.sc-s-cnt-market-down-footer{text-align:center}.facebook.sc-s-cnt-market-down-footer,.vk.sc-s-cnt-market-down-footer,.instagram.sc-s-cnt-market-down-footer,.apple.sc-s-cnt-market-down-footer,.google.sc-s-cnt-market-down-footer{margin:10px}.my-block.sc-s-cnt-market-down-footer{text-align:center;margin:auto}.iconsApp.sc-s-cnt-market-down-footer{margin-top:0;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}}@media only screen and (max-width: 320px){.copy.sc-s-cnt-market-down-footer{margin:auto;text-align:center;font-size:0.9em}.my-block.sc-s-cnt-market-down-footer{display:block}.download.sc-s-cnt-market-down-footer{text-align:center}}";

const SCntMarketDownFooter = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "downFooter" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 col-lg-6" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 col-md-6" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "copy " }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "copyright" }, this.footerCopyrightRow.copyright), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "company" }, this.footerCopyrightRow.nameCompany))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 col-md-6" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "icons" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "facebook" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-facebook" })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "vk" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-vk" })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "instagram" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-instagram" }))))))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 col-lg-6" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 col-md-6" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "download" }, this.footerCopyrightRow.download)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 col-md-6" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "iconsApp" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "apple" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-apple" })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "google" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-google-play" })))))))))));
    }
};
SCntMarketDownFooter.style = sCntMarketDownFooterCss;

const sCntMarketFooterCss = ".upFooter.sc-s-cnt-market-footer{padding:25px 0 0 0;background-color:#f3f4f7;margin-top:100px}.logo.sc-s-cnt-market-footer{width:100%;height:40px;background-size:contain;background-position:center;background-repeat:no-repeat;margin:0 70px 0 0}.line.sc-s-cnt-market-footer{width:100%;height:1px;background-color:#e4ece7;margin-top:25px}@media screen and (max-width: 992px){.logo.sc-s-cnt-market-footer{margin-bottom:30px}}@media only screen and (max-width: 320px){.logo.sc-s-cnt-market-footer{margin:auto}}";

const SCntMarketFooter = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "upFooter" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: " col-12 col-lg-3   " }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logo", style: {
                backgroundImage: `url(${this.footerData.logoFooter})`,
            } })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterMenu, { array: this.footerData.footerMenu }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: " col-12 col-sm-12 col-md-4 col-lg-3 " }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-up-footer-form", { footerContactColumn: this.footerData.footerContactColumn })))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "line" }, " ")), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-down-footer", { footerCopyrightRow: this.footerData.footerCopyrightRow }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-footer-info", { footerLinksPolitics: this.footerData.footerLinksPolitics })));
    }
};
/**
 * Получаем список элементов меню
 * */
const FooterMenu = (props) => {
    return props.array.map((item) => {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: " col-12 col-sm-6 col-md-4 col-lg-3" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-up-footer", { footerMenu: item })));
    });
};
SCntMarketFooter.style = sCntMarketFooterCss;

const sCntMarketFooterInfoCss = ".footerInfo.sc-s-cnt-market-footer-info{padding:15px 0 60px 0;background-color:#eaebef}";

const SCntMarketFooterInfo = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footerInfo" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row justify-content-center" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterInfoItem, { array: this.footerLinksPolitics })))));
    }
};
/**
 * получение списка меню
 * */
const FooterInfoItem = (props) => {
    return props.array.map((item) => {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-auto" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-footer-info-item", { footerLinksPolitics: item })));
    });
};
SCntMarketFooterInfo.style = sCntMarketFooterInfoCss;

const sCntMarketFooterInfoItemCss = ".text.sc-s-cnt-market-footer-info-item{color:#a7afaa;font-size:.9em;cursor:pointer;-webkit-transition:.3s;transition:.3s}.text.sc-s-cnt-market-footer-info-item:hover{color:grey}@media only screen and (max-width: 320px){.text.sc-s-cnt-market-footer-info-item{margin-bottom:10px}}";

const SCntMarketFooterInfoItem = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text" }, this.footerLinksPolitics.title));
    }
};
SCntMarketFooterInfoItem.style = sCntMarketFooterInfoItemCss;

const sCntMarketFooterItemsCss = ".item-li.sc-s-cnt-market-footer-items{font-size:.9em;line-height:1.9em;opacity:.8;cursor:pointer}.item-li.sc-s-cnt-market-footer-items:hover{color:#21a038;-webkit-transition:.3s;transition:.3s}@media only screen and (max-width: 320px){.item-li.sc-s-cnt-market-footer-items{margin:auto;text-align:center}}";

const SCntMarketFooterItems = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "item-li" }, this.footerItems.title);
    }
};
SCntMarketFooterItems.style = sCntMarketFooterItemsCss;

const sCntMarketFooterModalFormCss = ".drawer-backdrop.sc-s-cnt-market-footer-modal-form{position:fixed;left:0px;right:auto;bottom:0px;z-index:2000;top:0px;background:rgba(0, 0, 0, 0.5);height:100%;width:100%;opacity:0;visibility:hidden;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;pointer-events:none}.drawer-backdrop.opened.sc-s-cnt-market-footer-modal-form{opacity:1;visibility:visible;pointer-events:auto}.drawer-footer-modal.sc-s-cnt-market-footer-modal-form{opacity:0;visibility:hidden;position:fixed;left:0;top:0;bottom:0;right:0;-webkit-transform:translateY(-5%);transform:translateY(-5%);-webkit-transition:all 0.2s;transition:all 0.2s;overflow:scroll}.drawer-footer-modal.opened.sc-s-cnt-market-footer-modal-form{opacity:1;-webkit-transition:all 0.2s;transition:all 0.2s;-webkit-transform:translateY(0%);transform:translateY(0%);visibility:visible;z-index:2100}.drawer-content.sc-s-cnt-market-footer-modal-form{max-width:700px;margin:30px auto;position:relative;-webkit-transition:-webkit-transform 0.3s 35ms;transition:-webkit-transform 0.3s 35ms;transition:transform 0.3s 35ms;transition:transform 0.3s 35ms, -webkit-transform 0.3s 35ms}.wrapper-content.sc-s-cnt-market-footer-modal-form{background-color:#fff;width:100%;max-width:100%;border-radius:16px;-webkit-box-shadow:0 8px 30px rgba(0, 0, 0, 0.1);box-shadow:0 8px 30px rgba(0, 0, 0, 0.1);padding:30px}.modal-nav.sc-s-cnt-market-footer-modal-form{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.close-modal-form.sc-s-cnt-market-footer-modal-form{border-radius:50%;padding:10px 13px;border:1px solid #d0d2d4;color:#333536;background-color:#ffffff;cursor:pointer;-webkit-transition:0.3s ease;transition:0.3s ease;outline:none}.close-modal-form.sc-s-cnt-market-footer-modal-form:hover{background-color:#f3f4f7;border:1px solid #d0d2d4;color:#333536}.modal-content.sc-s-cnt-market-footer-modal-form{padding:15px 30px}header.sc-s-cnt-market-footer-modal-form{text-align:center}header.sc-s-cnt-market-footer-modal-form .title.sc-s-cnt-market-footer-modal-form{font-size:32px;font-weight:700;line-height:1.25;letter-spacing:-0.4px;color:#343434;margin-bottom:22px;text-align:center}header.sc-s-cnt-market-footer-modal-form .subtitle.sc-s-cnt-market-footer-modal-form{font-size:16px;font-weight:500;line-height:1.5;color:#333536;text-align:left}.input-wrapper.sc-s-cnt-market-footer-modal-form{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin:15px 0}.left.sc-s-cnt-market-footer-modal-form,.right.sc-s-cnt-market-footer-modal-form{width:50%}.right.sc-s-cnt-market-footer-modal-form{margin-left:15px}.input-parent.sc-s-cnt-market-footer-modal-form{margin-top:10px;margin-bottom:15px}.input-parent.sc-s-cnt-market-footer-modal-form input.sc-s-cnt-market-footer-modal-form{font-family:inherit;font-size:16px;font-weight:500;line-height:24px;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:auto;min-width:100%;height:48px;padding:11px 16px;-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-property:border-color, opacity, background-color, -webkit-box-shadow;transition-property:border-color, opacity, background-color, -webkit-box-shadow;transition-property:border-color, box-shadow, opacity, background-color;transition-property:border-color, box-shadow, opacity, background-color, -webkit-box-shadow;color:#333536;border-radius:8px;border:1px solid #d0d2d4;background-color:#fff;-webkit-box-shadow:none;box-shadow:none;overflow:auto;-webkit-appearance:none;-webkit-overflow-scrolling:touch;outline:none}.error.sc-s-cnt-market-footer-modal-form input.sc-s-cnt-market-footer-modal-form{border-color:#f36;background-color:#ffebf0}.error.sc-s-cnt-market-footer-modal-form .error-text.sc-s-cnt-market-footer-modal-form{visibility:visible}.error-text.sc-s-cnt-market-footer-modal-form{visibility:hidden;color:#ff3366;font-size:12px;margin-left:10px}.input-parent.sc-s-cnt-market-footer-modal-form input.sc-s-cnt-market-footer-modal-form::-webkit-input-placeholder{font-weight:500;color:#c2c3c4}.input-parent.sc-s-cnt-market-footer-modal-form input.sc-s-cnt-market-footer-modal-form::-moz-placeholder{font-weight:500;color:#c2c3c4}.input-parent.sc-s-cnt-market-footer-modal-form input.sc-s-cnt-market-footer-modal-form:-ms-input-placeholder{font-weight:500;color:#c2c3c4}.input-parent.sc-s-cnt-market-footer-modal-form input.sc-s-cnt-market-footer-modal-form::-ms-input-placeholder{font-weight:500;color:#c2c3c4}.input-parent.sc-s-cnt-market-footer-modal-form input.sc-s-cnt-market-footer-modal-form::placeholder{font-weight:500;color:#c2c3c4}.form-hr.sc-s-cnt-market-footer-modal-form{height:1px;overflow:hidden;border:none;background-color:#979797;opacity:0.23;margin:0 -60px}.subject-wrapper.sc-s-cnt-market-footer-modal-form{margin-top:10px;margin-left:-8px;margin-right:-8px}.subject-btn.sc-s-cnt-market-footer-modal-form{margin-top:16px;margin-left:8px;margin-right:8px;border-radius:16px;font-size:14px;border:1px solid #d0d2d4;background-color:#fff;color:#333536;padding:6px 16px;-webkit-transition:0.3s ease;transition:0.3s ease;cursor:pointer}.subject-btn.selected.sc-s-cnt-market-footer-modal-form{background-color:#21a038;color:#fff;outline:#21a038}.subject-btn.sc-s-cnt-market-footer-modal-form:hover{background-color:#f3f4f7;border:1px solid #d0d2d4;color:#333536}.textarea-wrapper.sc-s-cnt-market-footer-modal-form{margin-top:30px}.textarea-wrapper.sc-s-cnt-market-footer-modal-form textarea.sc-s-cnt-market-footer-modal-form{min-height:100px;outline:#21a038;font-family:inherit;font-size:16px;font-weight:500;line-height:24px;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:auto;min-width:100%;margin:0;padding:11px 16px;-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-property:border-color, opacity, background-color, -webkit-box-shadow;transition-property:border-color, opacity, background-color, -webkit-box-shadow;transition-property:border-color, box-shadow, opacity, background-color;transition-property:border-color, box-shadow, opacity, background-color, -webkit-box-shadow;color:#333536;border-radius:8px;border:1px solid #d0d2d4;background-color:#fff;-webkit-box-shadow:none;box-shadow:none;overflow:auto;-webkit-appearance:none;-webkit-overflow-scrolling:touch}.politics.sc-s-cnt-market-footer-modal-form{margin-top:30px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.politics.sc-s-cnt-market-footer-modal-form .right.sc-s-cnt-market-footer-modal-form{text-align:right}.politics-title.sc-s-cnt-market-footer-modal-form{font-size:14px}.left.sc-s-cnt-market-footer-modal-form label.sc-s-cnt-market-footer-modal-form{display:-ms-flexbox;display:flex}.btn-send.sc-s-cnt-market-footer-modal-form{background-color:#21a038;-webkit-box-shadow:0 10px 30px rgba(33, 160, 56, 0.4);box-shadow:0 10px 30px rgba(33, 160, 56, 0.4);font-size:16px;line-height:24px;border-radius:8px;padding:11px 16px;min-width:100%;color:#fff;cursor:pointer;-webkit-transition:0.3s ease;transition:0.3s ease;border:1px solid transparent;outline:none}.btn-send.sc-s-cnt-market-footer-modal-form:hover{background-color:#21b056}.checkbox-input.sc-s-cnt-market-footer-modal-form::before{content:\" \";display:-ms-inline-flexbox;display:inline-flex;text-align:center;color:white;font-size:28px;line-height:20px}.checkbox-input.sc-s-cnt-market-footer-modal-form:checked{border-color:#21a038;background-color:#21a038}.checkbox-input.sc-s-cnt-market-footer-modal-form:checked:not(:disabled){background-color:#21a038}.checkbox-input.sc-s-cnt-market-footer-modal-form{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;width:30px;height:25px;border-radius:6px;border:1px solid #d0d2d4;background-color:#fff;-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:border-color, background-color, -webkit-box-shadow;transition-property:border-color, background-color, -webkit-box-shadow;transition-property:border-color, background-color, box-shadow;transition-property:border-color, background-color, box-shadow, -webkit-box-shadow;color:#fff;margin-right:10px}.politics-title.sc-s-cnt-market-footer-modal-form a.sc-s-cnt-market-footer-modal-form{text-decoration:underline;color:#21a038;-webkit-transition:color 0.2s ease;transition:color 0.2s ease}@media (max-width: 414px){.input-wrapper.sc-s-cnt-market-footer-modal-form{-ms-flex-direction:column;flex-direction:column}.left.sc-s-cnt-market-footer-modal-form,.right.sc-s-cnt-market-footer-modal-form{width:100%}.right.sc-s-cnt-market-footer-modal-form{margin-left:0px}.modal-content.sc-s-cnt-market-footer-modal-form{padding:15px 0px}.left.sc-s-cnt-market-footer-modal-form{text-align:left}.politics-title.sc-s-cnt-market-footer-modal-form{font-size:12px}}";

const SCntMarketFooterModalForm = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnCloseModalForm = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnCloseModalForm", 7);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.showModalForm ? "drawer-backdrop opened " : "drawer-backdrop" }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.showModalForm
                ? "drawer-footer-modal opened"
                : "drawer-footer-modal", onClick: (event) => this.closeModalFormHandler(event), ref: (el) => (this.backgroundModalFormTag = el) }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "drawer-content" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "wrapper-content" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "modal-nav" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "close-modal-form", onClick: () => this.closeModalFormButton() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-times" }))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "modal-content" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("header", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title" }, "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C"), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "subtitle" }, "\u041C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0433\u043E\u0442\u043E\u0432\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0443\u0441\u043B\u044B\u0448\u0430\u0442\u044C \u0432\u0430\u0448\u0438 \u043E\u0442\u0437\u044B\u0432\u044B \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u043D\u0430\u0448\u0435\u0433\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u0430.")), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "left" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-parent ", ref: (el) => (this.inputNameParentTag = el) }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F", ref: (el) => (this.inputNameTag = el), onBlur: () => this.checkInputHandler(this.inputNameParentTag, this.inputNameTag), onInput: () => this.checkInputFocusHandler(this.inputNameParentTag, this.inputNameTag) }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "error-text" }, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0438\u043C\u044F")), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-parent", ref: (el) => (this.inputTelephoneParentTag = el) }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", placeholder: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D", ref: (el) => (this.inputTelephoneTag = el), onBlur: () => this.checkInputHandler(this.inputTelephoneParentTag, this.inputTelephoneTag), onInput: () => this.checkTelephoneInputFocusHandler(this.inputTelephoneParentTag, this.inputTelephoneTag) }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "error-text" }, "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "right" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-parent", ref: el => this.inputEmailParentTag = el }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", placeholder: "\u0410\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B", ref: el => this.inputEmailTag = el, onBlur: () => this.checkInputHandler(this.inputEmailParentTag, this.inputEmailTag), onInput: () => this.checkTelephoneInputFocusHandler(this.inputEmailParentTag, this.inputEmailTag) }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "error-text" }, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 email")), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-parent", ref: (el) => this.inputCityParentTag = el }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", placeholder: "\u0412\u0430\u0448 \u0433\u043E\u0440\u043E\u0434", ref: (el) => this.inputCityTag = el, onBlur: () => this.checkInputHandler(this.inputCityParentTag, this.inputCityTag), onInput: () => this.checkInputFocusHandler(this.inputCityParentTag, this.inputCityTag) }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "error-text" }, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0433\u043E\u0440\u043E\u0434")))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hr", { class: "form-hr" }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "subject-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "subject-btn selected" }, "\u041E\u0442\u0437\u044B\u0432\u044B \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F"), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "subject-btn" }, "\u0412\u043E\u043F\u0440\u043E\u0441 \u043F\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443"), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "subject-btn" }, "\u0416\u0430\u043B\u043E\u0431\u0430"), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "subject-btn" }, "\u0412\u043E\u043F\u0440\u043E\u0441 \u043F\u0440\u0435\u0441\u0441-\u0441\u043B\u0443\u0436\u0431\u0435"), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "subject-btn" }, "\u0414\u0440\u0443\u0433\u043E\u0435")), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "textarea-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("textarea", { placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441" })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "politics" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "left" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: "" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { class: "checkbox-input", type: "checkbox" }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "politics-title" }, "\u0414\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0438 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435", Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, " \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445")))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "right" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "btn-send" }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))))))))));
    }
    /**
     * close modal form
     * */
    closeModalFormHandler(event) {
        if (this.backgroundModalFormTag === event.target) {
            this.clickOnCloseModalForm.emit();
        }
    }
    /**
     * click on close btn
     * */
    closeModalFormButton() {
        console.log('closeModalFormHandler 3');
        this.clickOnCloseModalForm.emit();
    }
    /**
     * проверяем на заполненность
     * */
    checkInputHandler(parent, children) {
        !children.value
            ? parent.classList.add("error")
            : parent.classList.remove("error");
    }
    /**
     * проверяем конкретно имя
     * */
    checkInputFocusHandler(parent, children) {
        if (children.value.length > 2) {
            parent.classList.remove("error");
        }
    }
    /**
     * проверяем количество символов для телефона
     * */
    checkTelephoneInputFocusHandler(parent, children) {
        if (children.value.length > 7) {
            parent.classList.remove("error");
        }
    }
};
SCntMarketFooterModalForm.style = sCntMarketFooterModalFormCss;

const sCntMarketHeaderCss = ".header-wrapper.sc-s-cnt-market-header{-webkit-box-shadow:0 6px 11px -6px rgba(0, 0, 0, 0.1);box-shadow:0 6px 11px -6px rgba(0, 0, 0, 0.1);margin-bottom:185px}.header-wrapper.sc-s-cnt-market-header .container-fluid.sc-s-cnt-market-header{padding-left:0;padding-right:0}.header-wrapper-child.sc-s-cnt-market-header{position:fixed;-webkit-transition:0.2s;transition:0.2s;right:0;left:0;z-index:2000;background-color:#fff;-webkit-box-shadow:0 6px 11px -6px rgba(0, 0, 0, 0.1);box-shadow:0 6px 11px -6px rgba(0, 0, 0, 0.1)}.sticky.sc-s-cnt-market-header{margin-top:-75px;-webkit-transition:0.3s ease;transition:0.3s ease}@media (max-width: 414px){.sticky.sc-s-cnt-market-header{margin-top:-90px}}";

const SCntMarketHeader = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные об авторизации пользователя
         * */
        this.login = false;
        this.openLoginModal = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "openLoginModal", 7);
    }
    componentDidLoad() {
        window.onscroll = () => {
            this.stickyTop();
        };
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container-fluid" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-wrapper-child", ref: (el) => (this.stickyTopTag = el) }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-top-bar", { topBar: this.categories.topBar }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-header-body", { body: this.categories.body }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-header-nav", { login: this.login, navBar: this.categories.navBar, selectShops: this.categories.selectShops, leftMenuCatalogArr: this.categories.leftMenuCatalog, onClickOnWishlist: () => this.clickOnWishlist(), onClickOnOrders: () => this.clickOnOrders(), onClickOnByProducts: () => this.clickOnByProducts() })))))));
    }
    /**
     * Метод для смены внешнего вида главного меню при скролле
     */
    stickyTop() {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 90) {
            this.stickyTopTag.classList.add("sticky");
        }
        else {
            this.stickyTopTag.classList.remove("sticky");
        }
    }
    /**
     *
     * */
    clickOnWishlist() {
        console.log('clickOnWishlist1');
    }
    /**
     *
     * */
    clickOnOrders() {
        console.log('clickOnOrders2');
    }
    /**
     *
     * */
    clickOnByProducts() {
        console.log('clickOnByProducts23');
    }
};
SCntMarketHeader.style = sCntMarketHeaderCss;

const sCntMarketHeaderBodyCss = ".header-body-wrapper.sc-s-cnt-market-header-body{padding-top:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.logo-wrapper.sc-s-cnt-market-header-body{min-width:280px}.logo.sc-s-cnt-market-header-body{width:200px;height:33px;background-position:center;background-size:cover;cursor:pointer}.menu-ul.sc-s-cnt-market-header-body li.sc-s-cnt-market-header-body{list-style:none;display:inline-block;padding:0px 20px;color:#96959b;font-size:14px;-webkit-transition:0.3s ease;transition:0.3s ease}.menu-ul.sc-s-cnt-market-header-body{padding:0;margin:0}.menu-ul.sc-s-cnt-market-header-body li.sc-s-cnt-market-header-body:hover{color:#21a038;cursor:pointer}.menu-ul.sc-s-cnt-market-header-body li.sc-s-cnt-market-header-body:first-child{color:#393939}.menu-ul.sc-s-cnt-market-header-body li.sc-s-cnt-market-header-body:first-child:hover{color:#21a038}.mobile-menu-btn.sc-s-cnt-market-header-body button.sc-s-cnt-market-header-body{padding:5px 10px;border:none;color:#1ea038;border-radius:3px;cursor:pointer;outline:none}.mobile-menu.sc-s-cnt-market-header-body{position:fixed;top:20px;left:0;width:0;height:0;overflow:hidden;text-align:center;z-index:9999;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;padding:0;background-color:#343a40d1;opacity:1}.mobile-menu-wraŒpper.sc-s-cnt-market-header-body ul.sc-s-cnt-market-header-body li.sc-s-cnt-market-header-body{color:#ffffff;padding:10px 0px}.mobile-menu-wrapper.sc-s-cnt-market-header-body ul.sc-s-cnt-market-header-body li.sc-s-cnt-market-header-body:hover{background-color:#1ea038}.mobile-menu-ul.sc-s-cnt-market-header-body li.sc-s-cnt-market-header-body{color:#fff;cursor:pointer;-webkit-transition:0.3s ease;transition:0.3s ease;padding:10px 0px}.mobile-menu-ul.sc-s-cnt-market-header-body li.sc-s-cnt-market-header-body:hover{color:#1ea038;background-color:#fff}.mobile-menu-wrapper.sc-s-cnt-market-header-body ul.sc-s-cnt-market-header-body li.sc-s-cnt-market-header-body{color:#ffffff;padding:10px 0px}.mobile-menu.active.sc-s-cnt-market-header-body{height:100%;width:100%;top:0;opacity:1}.mobile-menu-close.sc-s-cnt-market-header-body{color:#fff;cursor:pointer;padding:5px 10px;background-color:#21b056;-webkit-transition:all 0.3s;transition:all 0.3s;position:absolute;top:50px;border:none}li.nav-item.active.sc-s-cnt-market-header-body,li.nav-item.sc-s-cnt-market-header-body{-webkit-transition:0.3s ease;transition:0.3s ease}li.nav-item.active.sc-s-cnt-market-header-body,li.nav-item.sc-s-cnt-market-header-body:hover,li.nav-item.sc-s-cnt-market-header-body:focus{background-color:#007bff}.mobile-menu-wrapper.sc-s-cnt-market-header-body{height:100%;overflow:auto;font-size:14px;line-height:20px;text-transform:uppercase;font-weight:700;margin-top:60px}.mobile-menu-wrapper.sc-s-cnt-market-header-body ul.sc-s-cnt-market-header-body{padding:30px 0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:100%}.mobile-menu-wrapper.sc-s-cnt-market-header-body ul.sc-s-cnt-market-header-body li.sc-s-cnt-market-header-body a.sc-s-cnt-market-header-body{color:#fe6347}@media (max-width: 1024px){.logo-wrapper.sc-s-cnt-market-header-body{min-width:auto}}@media (min-width: 414px){.mobile-menu-btn.sc-s-cnt-market-header-body{display:none}.header-navbar-list.sc-s-cnt-market-header-body{display:block}}@media (max-width: 414px){.mobile-menu-btn.sc-s-cnt-market-header-body{display:block}.menu-ul.sc-s-cnt-market-header-body{display:none}.header-body-wrapper.sc-s-cnt-market-header-body{-ms-flex-pack:justify;justify-content:space-between}}";

const SCntMarketHeaderBody = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-body-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logo-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logo", style: { backgroundImage: `url(${this.body.logo})` } })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-navbar-list" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mobile-menu-btn " }, !this.isShowBar ? (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: () => this.showMobileMenuHandler() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-bars" }))) : (""), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mobile-menu d-lg-none", ref: (el) => (this.mobileMenuTag = el) }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mobile-menu-close", onClick: () => this.showMobileMenuHandler() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-times" }))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", { class: "mobile-menu-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: "mobile-menu-list-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { class: "main-item" }, "\uD83D\uDC69\u200D\uD83D\uDCBB \u0414\u043B\u044F \u0411\u0438\u0437\u043D\u0435\u0441\u0430"), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, "\u041A\u0430\u043A \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C"), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, "\u041F\u043E\u043C\u043E\u0449\u044C"), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430")))))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: "menu-ul" }, this.getItemsMenu(this.body.navMenuItem))))))));
    }
    /**
     * Открытие и закрытие мобильного меню при нажатии на иконки
     */
    showMobileMenuHandler() {
        this.mobileMenuTag.classList.toggle("active");
        this.isShowBar = true;
    }
    /*
     * получаем список меню
     * */
    getItemsMenu(array) {
        return array.map((item) => {
            return Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, item.name);
        });
    }
};
SCntMarketHeaderBody.style = sCntMarketHeaderBodyCss;

const sCntMarketHeaderNavCss = ".nav-wrapper.sc-s-cnt-market-header-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#333536;height:72px}.catalog.sc-s-cnt-market-header-nav{margin-right:15px}.catalog.sc-s-cnt-market-header-nav button.sc-s-cnt-market-header-nav{height:100%;white-space:nowrap;font-size:14px;border-radius:6px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-weight:500;line-height:20px;letter-spacing:0.03em;border:1px solid transparent;background-color:#21a038;color:#fff;padding:7px 16px;cursor:pointer;-webkit-transition:0.3s ease;transition:0.3s ease;outline:none}.catalog.sc-s-cnt-market-header-nav button.sc-s-cnt-market-header-nav i.sc-s-cnt-market-header-nav{width:20px;height:20px;line-height:22px}.catalog.sc-s-cnt-market-header-nav button.sc-s-cnt-market-header-nav span.sc-s-cnt-market-header-nav{display:inline-block;margin-left:4px}.catalog.sc-s-cnt-market-header-nav button.sc-s-cnt-market-header-nav:hover{background-color:#21b056}.nav-search.sc-s-cnt-market-header-nav{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;height:38px}.button-menu.sc-s-cnt-market-header-nav{background-color:rgb(0, 45, 114);border-radius:6px 0 0 6px;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:8px 8px 8px 16px;border:1px solid rgba(0, 0, 0, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer}.full-menu-nav-btn.sc-s-cnt-market-header-nav{width:75px;height:100%;background-position:center;background-size:contain;background-repeat:no-repeat}.button-menu.sc-s-cnt-market-header-nav i.sc-s-cnt-market-header-nav{color:rgb(255, 228, 1);padding:0px 3px}.button-menu.sc-s-cnt-market-header-nav img.sc-s-cnt-market-header-nav{max-width:75px;max-height:30px;width:auto;height:auto}.search-wrapper.sc-s-cnt-market-header-nav{position:relative;height:100%;-ms-flex:1;flex:1}.search-wrapper.sc-s-cnt-market-header-nav form.sc-s-cnt-market-header-nav{display:-ms-flexbox;display:flex;height:100%;overflow:hidden}input[placeholder].sc-s-cnt-market-header-nav,textarea[placeholder].sc-s-cnt-market-header-nav{color:#7b7b7b}.search-wrapper.sc-s-cnt-market-header-nav input.sc-s-cnt-market-header-nav{background-color:#edeff2;border:none;outline:none;font-size:15px;line-height:20px;font-weight:500;padding:0 12px;-ms-flex:1;flex:1}.search-wrapper.sc-s-cnt-market-header-nav button.sc-s-cnt-market-header-nav{background-color:#edeff2;color:#7c7e80;border-radius:0 6px 6px 0;border:none;outline:none;cursor:pointer;padding:0 12px}.search-wrapper.sc-s-cnt-market-header-nav button.sc-s-cnt-market-header-nav:hover{background-color:#f1f3f5}.search-wrapper.sc-s-cnt-market-header-nav button.sc-s-cnt-market-header-nav i.sc-s-cnt-market-header-nav{font-size:16px}.not-logged.sc-s-cnt-market-header-nav{height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0 6px;margin-left:12px;font-size:14px;cursor:pointer;background-color:#fff;border:1px solid #edeff2;padding:10px;border-radius:6px}.not-logged.sc-s-cnt-market-header-nav i.sc-s-cnt-market-header-nav{color:#21a038}.user-profile-btn.sc-s-cnt-market-header-nav{height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#21a038;margin:0 6px;margin-left:12px;cursor:pointer}.user-profile-btn.sc-s-cnt-market-header-nav a.sc-s-cnt-market-header-nav{position:relative;width:40px;height:38px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background-color:#fff;border:1px solid #edeff2;border-radius:6px;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none}.user-wish-list.sc-s-cnt-market-header-nav{height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#21a038;margin:0 6px;cursor:pointer}.user-wish-list.sc-s-cnt-market-header-nav a.sc-s-cnt-market-header-nav{position:relative;width:40px;height:38px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background-color:#fff;border:1px solid #edeff2;border-radius:6px;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none}.nav-user-profile.sc-s-cnt-market-header-nav{position:relative}.nav-user-profile.sc-s-cnt-market-header-nav i.sc-s-cnt-market-header-nav:hover{color:#21b056}.user-wish-list.sc-s-cnt-market-header-nav i.sc-s-cnt-market-header-nav:hover{color:#21b056}.user-orders.sc-s-cnt-market-header-nav a.sc-s-cnt-market-header-nav i.sc-s-cnt-market-header-nav{color:#21a038;margin-right:5px}.user-orders.sc-s-cnt-market-header-nav a.sc-s-cnt-market-header-nav span.sc-s-cnt-market-header-nav{font-size:14px}.user-orders.sc-s-cnt-market-header-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:6px;margin:0 6px;cursor:pointer;background-color:#fff;border:1px solid #edeff2;color:#333536;position:relative;height:38px;-ms-flex-pack:center;justify-content:center;border-radius:6px;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none}.user-cart.sc-s-cnt-market-header-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;padding:6px;margin:0 6px;cursor:pointer;background-color:#fff;border:1px solid #edeff2;color:#333536;position:relative;height:38px;-ms-flex-pack:center;justify-content:center;border-radius:6px;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none}.user-cart.sc-s-cnt-market-header-nav a.sc-s-cnt-market-header-nav i.sc-s-cnt-market-header-nav{color:#21a038;margin-right:5px}.user-cart.sc-s-cnt-market-header-nav a.sc-s-cnt-market-header-nav span.sc-s-cnt-market-header-nav{font-size:14px}.count-cart.sc-s-cnt-market-header-nav{min-width:24px;height:24px;padding:0 6px;border-radius:24px;font-size:12px;background-color:#21a038;color:#fff;position:absolute;top:-10px;right:-15px;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-weight:500}@media (max-width: 1200px){.user-cart.sc-s-cnt-market-header-nav span.sc-s-cnt-market-header-nav,.user-orders.sc-s-cnt-market-header-nav span.sc-s-cnt-market-header-nav,.catalog.sc-s-cnt-market-header-nav button.sc-s-cnt-market-header-nav span.sc-s-cnt-market-header-nav{display:none}}@media (max-width: 768px){.full-menu-nav-btn.sc-s-cnt-market-header-nav{display:none}.search-wrapper.sc-s-cnt-market-header-nav input.sc-s-cnt-market-header-nav{font-size:12px}}@media (max-width: 414px){.user-orders.sc-s-cnt-market-header-nav,.user-wish-list.sc-s-cnt-market-header-nav{display:none}.catalog.sc-s-cnt-market-header-nav{margin-right:10px}.user-cart.sc-s-cnt-market-header-nav{margin:0px}.user-profile-btn.sc-s-cnt-market-header-nav{margin-left:6px}}@media (max-width: 375px){.search-wrapper.sc-s-cnt-market-header-nav form.sc-s-cnt-market-header-nav{width:150px}}@media (max-width: 320px){.search-wrapper.sc-s-cnt-market-header-nav form.sc-s-cnt-market-header-nav{width:100px}}";

const SCntMarketHeaderNav = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * магазины для вашего города
         * */
        this.selectShops = [];
        /**
         * Данные для магазинов из каталога
         * */
        this.leftMenuCatalogArr = [];
        this.openLoginModal = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "openLoginModal", 7);
        this.clickOnWishlist = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnWishlist", 7);
        this.clickOnOrders = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnOrders", 7);
        this.clickOnByProducts = Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnByProducts", 7);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nav-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "catalog" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: () => this.onClickCatalogHandler() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-bars" }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.navBar.catalogBtn)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-left-menu-catalog", { leftMenuCatalogArr: this.leftMenuCatalogArr, openedLeftMenu: this.openedLeftMenuState, onCloseLeftMenu: () => this.closeLeftMenu() })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nav-search" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "button-menu", onClick: () => this.onClickSelectStoreHandler() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "full-menu-nav-btn", style: {
                backgroundImage: `url(${this.navBar.backgroundImageFullMenu})`,
            } }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-angle-down" })), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-store-select-top", { selectShops: this.selectShops, openedStoreSelect: this.openedStoreSelectState, onCloseStoreSelect: () => this.closeStoreSelect() }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "search-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", placeholder: this.navBar.placeholder, onFocus: () => this.focusInputSearhHandler(), onBlur: () => this.blurInputSearchHandler() }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-search" }))))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nav-user-profile" }, this.login ? (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-profile-btn", onClick: () => this.onClickAccountHandler() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.navBar.iconUser })))) : (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: " not-logged", onClick: () => this.openLoginModal.emit() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.navBar.iconUser }), " \u0412\u043E\u0439\u0442\u0438"))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "menu-account-wrapper", ref: (el) => (this.modalTag = el) }, this.isShowUserAccountState ? (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-account-menu", { onCloseAccountMenu: () => this.closeAccountMenuHandler() })) : (""))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-wish-list", onClick: () => this.clickOnWishlistHandler() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.navBar.iconWishList }))), this.login ? (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-orders", onClick: () => this.clickOnOrdersHandler() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.navBar.iconOrders }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.navBar.titleOrders)))) : (""), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-cart" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { onClick: () => this.onClickBasketHandler() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-shopping-cart" }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.navBar.titleCart)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "count-cart" }, _mock_s_2377f0be_js__WEBPACK_IMPORTED_MODULE_1__["M"].length), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-basket", { openedBasket: this.openedBasketState, onCloseBasket: () => this.closeBasket(), marketCartProducts: _mock_s_2377f0be_js__WEBPACK_IMPORTED_MODULE_1__["M"] })))))));
    }
    /**
     * клик на выбор магазина в шапке
     * */
    onClickSelectStoreHandler() {
        this.openedStoreSelectState = true;
        document.querySelector("body").style.overflow = "hidden";
    }
    /**
     * Переключаем состояние аккаунта юзера
     **/
    onClickAccountHandler() {
        this.isShowUserAccountState = !this.isShowUserAccountState;
    }
    /**
     * close account menu
     * */
    closeAccountMenuHandler() {
        this.isShowUserAccountState = false;
        document.querySelector("body").style.overflow = "visible";
    }
    /**
     * Переключаем состояние аккаунта юзера
     * */
    clickOnModal(event) {
        if (event.target !== this.modalTag) {
            this.onClickAccountHandler();
        }
    }
    /**
     * Show/hide left menu
     * */
    onClickCatalogHandler() {
        this.openedLeftMenuState = true;
        document.querySelector("body").style.overflow = "hidden";
    }
    /**
     * Показываь корзину
     * */
    onClickBasketHandler() {
        this.openedBasketState = true;
        document.querySelector("body").style.overflow = "hidden";
    }
    /**
     * Закрыть корзину
     * */
    closeBasket() {
        this.openedBasketState = false;
        document.querySelector("body").style.overflow = "visible";
    }
    /**
     *
     * */
    closeLeftMenu() {
        this.openedLeftMenuState = false;
        document.querySelector("body").style.overflow = "visible";
    }
    /**
     * close select store
     * */
    closeStoreSelect() {
        this.openedStoreSelectState = false;
        document.querySelector("body").style.overflow = "visible";
    }
    /**
     * click to input
     * */
    focusInputSearhHandler() {
        const overlay = document.querySelector(".overlayBackDrop");
        overlay.classList.add("overlay");
    }
    /**
     * blur on input
     * */
    blurInputSearchHandler() {
        const overlay = document.querySelector(".overlayBackDrop");
        overlay.classList.remove("overlay");
    }
    /**
     * clickOnWishlistHandler
     * */
    clickOnWishlistHandler() {
        this.clickOnWishlist.emit();
    }
    /**
     * clickOnWishlistHandler
     * */
    clickOnOrdersHandler() {
        this.clickOnOrders.emit();
    }
};
SCntMarketHeaderNav.style = sCntMarketHeaderNavCss;

const sCntMarketTopBarCss = "*.sc-s-cnt-market-top-bar{-webkit-box-sizing:border-box;box-sizing:border-box}button.sc-s-cnt-market-top-bar{outline:none}.login-form.sc-s-cnt-market-top-bar{max-width:746px}.parent-block-top-bar.sc-s-cnt-market-top-bar{margin:0 !important;padding:0 !important;background-color:#f7f7f7;color:#333}.top-bar-content-outer-block.sc-s-cnt-market-top-bar{position:relative;width:100%;margin:auto;background-color:#f7f7f7}.top-bar-content-inner-block.sc-s-cnt-market-top-bar,.top-bar-delivery-and-adress.sc-s-cnt-market-top-bar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;height:100%}.top-bar-delivery-and-adress.sc-s-cnt-market-top-bar{width:100%}.top-bar-delivery-option-block.sc-s-cnt-market-top-bar{display:-ms-flexbox;display:flex;-webkit-box-shadow:none !important;box-shadow:none !important;margin-right:20px;width:auto;border-radius:6px;padding:4px;min-height:30px;background-color:#e7e9eb}#selected-delivery.sc-s-cnt-market-top-bar .selection-by-pickUp.sc-s-cnt-market-top-bar{background-color:#fff!important;color:#333536!important;margin-left:4px!important;-webkit-box-shadow:0 0 3px 0 rgba(0, 0, 0, .1)!important;box-shadow:0 0 3px 0 rgba(0, 0, 0, .1)!important}#selected-delivery.sc-s-cnt-market-top-bar .selection-by-delivery.sc-s-cnt-market-top-bar{background-color:transparent!important;color:#96959b!important;margin-right:0;-webkit-box-shadow:none;box-shadow:none}.selection-by-delivery.sc-s-cnt-market-top-bar,.selection-by-pickUp.sc-s-cnt-market-top-bar{cursor:pointer;border:none;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 8px;text-align:center;line-height:14px;font-size:14px;font-weight:500;-webkit-transition:all .2s;transition:all .2s}.selection-by-delivery.sc-s-cnt-market-top-bar{background-color:#fff;color:#333536;margin-right:4px;-webkit-box-shadow:0 0 3px 0 rgba(0, 0, 0, .1);box-shadow:0 0 3px 0 rgba(0, 0, 0, .1)}.selection-by-pickUp.sc-s-cnt-market-top-bar{background-color:transparent;color:#96959b}.option-adress-text-block.sc-s-cnt-market-top-bar{min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.option-adress-text-block.sc-s-cnt-market-top-bar span.sc-s-cnt-market-top-bar span.sc-s-cnt-market-top-bar{display:inline-block;font-weight:700;color:#21a038;cursor:pointer;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:250px}.option-adress-text-block.sc-s-cnt-market-top-bar span.sc-s-cnt-market-top-bar .selected-address.sc-s-cnt-market-top-bar{color:#333536;font-weight:500}.delivery-adress-btn.sc-s-cnt-market-top-bar{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;border:none;outline:none;background-color:transparent;-webkit-transition:background-color .3s;transition:background-color .3s;cursor:pointer;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;margin-left:12px;color:#b5b4b8}.delivery-adress-btn.sc-s-cnt-market-top-bar i.sc-s-cnt-market-top-bar{position:relative;display:inline-block;white-space:nowrap;text-decoration:none;text-align:center;font-size:15px}.shortest-delivery-time.sc-s-cnt-market-top-bar{margin-left:30px;white-space:nowrap;font-weight:700;font-size:13px}.shortest-delivery-time.sc-s-cnt-market-top-bar span.sc-s-cnt-market-top-bar{color:#21a038;padding-left:5px}.top-bar-number-wrapper.sc-s-cnt-market-top-bar{position:absolute;right:0}.phone-number-link.sc-s-cnt-market-top-bar{color:#333536;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;text-decoration:none;font-weight:700;border:none}.phone-number-link.sc-s-cnt-market-top-bar:hover{color:inherit;text-decoration:none}.phone_number.sc-s-cnt-market-top-bar{font-size:16px;color:#333536}.phone-work.sc-s-cnt-market-top-bar{color:#96959b;font-size:13px;margin-left:8px}@media (max-width: 1200px){.shortest-delivery-time.sc-s-cnt-market-top-bar{display:none}}@media (max-width: 992px){.top-bar-delivery-option-block.sc-s-cnt-market-top-bar{display:none}.option-adress-text-block.sc-s-cnt-market-top-bar{width:100%}.option-adress-text-block.sc-s-cnt-market-top-bar span.sc-s-cnt-market-top-bar{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:justify;justify-content:space-between;width:100%;padding:8px 0}.top-bar-number-wrapper.sc-s-cnt-market-top-bar{display:none}}";

const SCntMarketTopBar = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container-fluid parent-block-top-bar" }, this.loginRegistrationCompleted ? (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-login-and-registration-form", { loginAndRegistration: this.topBar.loginAndRegistration, login: this.loginCompleted, registration: this.registrationCompleted, blockWidth: '746px', onCloseLogin: () => this.closeLoginModal(), onOpenLogin: () => this.openLogin(), onOpenRegistration: () => this.openRegistration() })) : (""), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container top-bar-content-outer-block" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "top-bar-content-inner-block" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "top-bar-delivery-and-adress" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "top-bar-delivery-option-block", id: this.pickUpCompleted ? "selected-delivery" : "" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "selection-by-delivery", onClick: () => this.openDeliveryHandler() }, this.topBar.choiceDelivery), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "selection-by-pickUp", onClick: () => this.openPickUpHandler() }, this.topBar.choicePickUp)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "option-adress-text-block", onClick: () => this.openDeliveryHandler() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: this.idAddress ? "selected-address" : "" }, this.idAddress
            ? this.idAddress
            : this.topBar.choiceAddress), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "delivery-adress-btn" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: this.topBar.choiceAddressIcon })))), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "shortest-delivery-time" }, this.topBar.timeOfDeliveryText, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.topBar.timeOfDelivery)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "top-bar-number-wrapper" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "tel:" + this.topBar.phoneNumber, class: "phone-number-link" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "phone_number" }, this.topBar.phoneNumber), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "phone-work" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.topBar.workingHours))))))), this.addressCompleted ? (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-delivery-modal", { delivery: this.deliveryCompleted, pickUp: this.pickUpCompleted, modalData: this.topBar.modalWindow, onCloseForm: () => this.closeAddressModal(), onOpenDelivery: () => this.openDelivery(), onOpenPickUp: () => this.openPickUp(), onIdSelectionAddress: (detail) => this.idSelectionAddress(detail),
            // event-ы для формы входа/регистрации
            onOpenLogin: () => this.openLoginModal() })) : ("")));
    }
    /**
     * Вызов модального окна выбора адреса
     */
    openAddressModal() {
        this.addressCompleted = true;
        document.body.style.overflow = 'hidden';
    }
    /**
     * Закрытие модального окна выбора адреса
     */
    closeAddressModal() {
        this.addressCompleted = false;
        document.body.style.overflow = '';
    }
    /**
     * открытие блока/компонента доставки при открытии модального окна
     */
    openDelivery() {
        this.deliveryCompleted = true;
        this.pickUpCompleted = false;
    }
    /**
     * открытие блока/компонента доставки c открытием модального окна адреса
     */
    openDeliveryHandler() {
        this.openDelivery();
        this.openAddressModal();
    }
    /**
     * открытие блока/компонента самовывоз при открытии модального окна
     */
    openPickUp() {
        this.pickUpCompleted = true;
        this.deliveryCompleted = false;
    }
    /**
     * открытие блока/компонента доставки c открытием модального окна адреса
     */
    openPickUpHandler() {
        this.openPickUp();
        this.openAddressModal();
    }
    /**
     * Вызов модального окна компонента входа
     */
    openLoginModal() {
        this.loginRegistrationCompleted = true;
        this.loginCompleted = true;
        this.registrationCompleted = false;
    }
    /**
     * Закрытие модального окна компонента входа
     */
    closeLoginModal() {
        this.loginRegistrationCompleted = false;
    }
    /**
     * открытие блока/компонента входа при открытии модального окна
     */
    openLogin() {
        this.loginCompleted = true;
        this.registrationCompleted = false;
    }
    /**
     * открытие блока/компонента регистрации при открытии модального окна
     */
    openRegistration() {
        this.registrationCompleted = true;
        this.loginCompleted = false;
    }
    /**
     * функция для прослушивания значения {detail}(улицы) у блока выбранного магазина
     * */
    idSelectionAddress({ detail }) {
        this.idAddress = detail;
        if (detail !== null) {
            if (detail.lenght > 30) {
                this.idAddress = detail.slice(0, 30) + "...";
            }
        }
    }
};
SCntMarketTopBar.style = sCntMarketTopBarCss;

const sCntMarketUpFooterCss = ".upFooter.sc-s-cnt-market-up-footer{padding:25px 0 0 0;background-color:#f3f4f7}.logo.sc-s-cnt-market-up-footer{width:220px;height:40px;margin-bottom:20px}.sberMarket.sc-s-cnt-market-up-footer,.help.sc-s-cnt-market-up-footer{font-weight:600;line-height:1.9em;opacity:.8}.item-li.sc-s-cnt-market-up-footer{font-size:.9em;line-height:1.9em;opacity:.8;cursor:pointer}.item-li.sc-s-cnt-market-up-footer:hover{color:#21a038;-webkit-transition:.3s;transition:.3s}.item-lil.sc-s-cnt-market-up-footer{line-height:1.9em;opacity:.8;cursor:pointer}.item-lil.sc-s-cnt-market-up-footer:hover{color:#21a038;-webkit-transition:.3s;transition:.3s}.item-lil.sc-s-cnt-market-up-footer::after{content:'✌';margin-left:5px;font-size:.9em}@media only screen and (max-width: 768px){.upFooter.sc-s-cnt-market-up-footer{max-width:768px}}@media only screen and (max-width: 414px){.my-block.sc-s-cnt-market-up-footer{text-align:center;margin:15px 0px}.my-block.sc-s-cnt-market-up-footer:first-child{margin-top:15px}}@media only screen and (max-width: 320px){.logo.sc-s-cnt-market-up-footer{margin:auto}.my-block.sc-s-cnt-market-up-footer{margin:auto;padding:0 0 20px 0}.sberMarket.sc-s-cnt-market-up-footer,.help.sc-s-cnt-market-up-footer,.item-li.sc-s-cnt-market-up-footer,.item-lil.sc-s-cnt-market-up-footer{margin:auto;text-align:center}}";

const SCntMarketUpFooter = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "my-block" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "sberMarket" }, this.footerMenu.title), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterItems, { array: this.footerMenu.menuItems })));
    }
};
//HOC для элементов меню
const FooterItems = (props) => {
    return props.array.map((item) => {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-footer-items", { footerItems: item }));
    });
};
SCntMarketUpFooter.style = sCntMarketUpFooterCss;

const sCntMarketUpFooterFormCss = ".number.sc-s-cnt-market-up-footer-form{font-weight:600;margin-bottom:10px;cursor:pointer;color:#21a038}.time.sc-s-cnt-market-up-footer-form{font-size:0.9em;opacity:0.7}.input-block.sc-s-cnt-market-up-footer-form{width:196px;height:35px;margin:10px 0 10px;padding:8px 0 8px 8px;display:-ms-flexbox;display:flex;background-color:white;border:1px solid #e4ece7;border-radius:8px;cursor:pointer}.icon.sc-s-cnt-market-up-footer-form{margin-top:2px}.icon.sc-s-cnt-market-up-footer-form:hover{color:#7c7e80}.input.sc-s-cnt-market-up-footer-form{margin-left:5px;font-size:0.9em}.text.sc-s-cnt-market-up-footer-form{margin:auto;font-size:0.9em;opacity:0.7;line-height:1.8em}@media only screen and (max-width: 768px){.upFooterForm.sc-s-cnt-market-up-footer-form{margin:30px 0;text-align:center}.input-block.sc-s-cnt-market-up-footer-form{margin:10px auto}}@media screen and (max-width: 414px){.upFooterForm.sc-s-cnt-market-up-footer-form{margin:0px;text-align:center}}@media only screen and (max-width: 320px){.upFooterForm.sc-s-cnt-market-up-footer-form{margin:auto;text-align:center}.number.sc-s-cnt-market-up-footer-form{text-align:center}.time.sc-s-cnt-market-up-footer-form{text-align:center;margin-bottom:10px}.input-block.sc-s-cnt-market-up-footer-form{text-align:center;margin:auto}.input.sc-s-cnt-market-up-footer-form{text-align:center}.text.sc-s-cnt-market-up-footer-form{text-align:center;margin:auto;padding-top:10px}}";

const SCntMarketUpFooterForm = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         *
         * */
        this.isShowFormState = false;
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "upFooterForm" }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "number" }, this.footerContactColumn.number), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "time" }, this.footerContactColumn.time), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-block", onClick: () => this.clickOnShowFormFooterHandler() }, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "far fa-comment-alt icon" }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input" }, this.footerContactColumn.input)), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-footer-modal-form", { showModalForm: this.isShowFormState, onClickOnCloseModalForm: () => this.clickOnCloseModalForm() }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text" }, this.footerContactColumn.text)));
    }
    /**
     * клик по форме обратной связи
     * */
    clickOnShowFormFooterHandler() {
        this.isShowFormState = true;
        document.querySelector("body").style.overflow = "hidden";
        // console.log('при первом клике в подвале', this.isShowFormState)
    }
    /**
     *
     * */
    clickOnCloseModalForm() {
        this.isShowFormState = false;
        document.querySelector("body").style.overflow = "visible";
        // console.log('состоняие у родителя', this.isShowFormState)
    }
};
SCntMarketUpFooterForm.style = sCntMarketUpFooterFormCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-cnt-market-back-to-top_13-entry-js.js.map