(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-btn-wrapper_10-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/btn-wrapper_10.entry.js":
/*!********************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/btn-wrapper_10.entry.js ***!
  \********************************************************************/
/*! exports provided: btn_wrapper, module_header, module_personal, s_saqhan_chat_add_question, s_saqhan_chat_files, s_saqhan_chat_files_wrapper, s_saqhan_chat_form_search, s_saqhan_chat_form_search_files, s_saqhan_chat_users, s_saqhan_chat_users_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btn_wrapper", function() { return BtnWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "module_header", function() { return ModuleHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "module_personal", function() { return ModulePersonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_add_question", function() { return SSaqhanChatAddQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_files", function() { return SSaqhanChatFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_files_wrapper", function() { return SSaqhanChatFilesWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_form_search", function() { return SSaqhanChatFormSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_form_search_files", function() { return SSaqhanChatFormSearchFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_users", function() { return SSaqhanChatUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_users_wrapper", function() { return SSaqhanChatUsersWrapper; });
/* harmony import */ var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-53235049.js */ "./node_modules/stencil-chat/dist/esm/index-53235049.js");


const btnWrapperCss = ".btn-open.sc-btn-wrapper{width:60px;height:60px;font-size:24px;border:none;background-color:#72b94d;color:#fff;border-radius:50%;outline:none !important;cursor:pointer}.open-chat.sc-btn-wrapper{text-align:right;z-index:999;position:fixed;right:20px;bottom:20px}.btn-green.sc-btn-wrapper{position:relative}.counterNewMess.sc-btn-wrapper{position:absolute;right:-5px;top:0px;color:#fff;text-align:center;width:25px;padding:5px 5px;border-radius:50%;background-color:#c73f45;font-size:12px}@media (max-width: 414px){.btn-open.sc-btn-wrapper{width:40px;height:40px}.open-chat.sc-btn-wrapper{right:0px;bottom:60px}.open-chat.sc-btn-wrapper::after{font-size:10px;padding:0px 5px;top:-20px;left:-15px}.btn-open.sc-btn-wrapper{font-size:18px}.counterNewMess.sc-btn-wrapper{width:18px;font-size:8px}}@media (max-width: 375px){.open-chat.sc-btn-wrapper{right:15px;bottom:60px}}";

const BtnWrapper = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToShowChat = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowChat", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "open-chat" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'btn-green' }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: () => this.clickToShowChatHandler(), class: "btn-open" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.showChat ? (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-times" })) : (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-comment-dots" })))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'counterNewMess' }, this.dialogs)))));
    }
    clickToShowChatHandler() {
        this.clickToShowChat.emit();
    }
};
BtnWrapper.style = btnWrapperCss;

const moduleHeaderCss = ".header-chat.sc-module-header{background-color:#ececec;padding:10px 20px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.header-chat.sc-module-header .close.sc-module-header i.sc-module-header{font-size:20px;color:#ccc;-webkit-transition:0.3s ease;transition:0.3s ease}.header-chat.sc-module-header .close.sc-module-header i.sc-module-header:hover{color:#4c567d;cursor:pointer}.showFullChat.sc-module-header i.sc-module-header{color:#4c567d;cursor:pointer}";

const ModuleHeader = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.close = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "close", 7);
        this.showFullChat = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showFullChat", 3);
    }
    /**
     *
     * */
    // @State() dictionary: any;
    //
    // componentDidLoad() {
    //   ChatDictionaryService.dictionary$.subscribe(
    //     (dictionary) => {
    //       this.dictionary = dictionary;
    //     }
    //   )
    // }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-chat" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "showFullChat", style: { visibility: this.disableShowFullChatState ? 'hidden' : null }, onClick: () => this.showFullChatHandler() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-expand" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-chat-title" }, "\u041C\u043E\u0434\u0443\u043B\u044C\u043D\u044B\u0439 \u0447\u0430\u0442"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "close", onClick: () => this.close.emit() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-times-circle" }))));
    }
    /**
     * Разворачивать полную версию чата при клике иконку
     * */
    showFullChatHandler() {
        if (!this.disableShowFullChatState) {
            this.showFullChat.emit();
        }
    }
};
ModuleHeader.style = moduleHeaderCss;

const modulePersonalCss = ".personal-wrapper.sc-module-personal .personal-footer.sc-module-personal .footer-wrapper.sc-module-personal{border-radius:15px 15px 0px 0px}";

const ModulePersonal = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Возможность записи аудио
         */
        this.canRecordAudio = false;
        /**
         * */
        this.writing = [];
        this.searchPersonalMessages = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchPersonalMessages", 7);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.sendTextMessage = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendTextMessage", 7);
        this.clickToUserProfile = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToUserProfile", 7);
        this.cancelSearchPersonal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "cancelSearchPersonal", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "personal-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-header", { chatActionState: this.chatActionState, openedDialog: this.openedDialog, chatPresenceState: this.chatPresenceState, dialogs: this.dialogs, message: this.message }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-message", { writing: this.writing, theme: "module", message: this.message }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-footer", { canRecordAudio: this.canRecordAudio, theme: "module" })));
    }
};
ModulePersonal.style = modulePersonalCss;

const sSaqhanChatAddQuestionCss = ".btn-new-ask.sc-s-saqhan-chat-add-question{text-align:center;margin-top:10px}.btn-add-question.sc-s-saqhan-chat-add-question{border-radius:30px;padding:10px 30px;border:none;background-color:#72b94d;color:#ffffff;text-transform:uppercase;font-size:12px;outline:none;letter-spacing:1px}.custom-link.sc-s-saqhan-chat-add-question{cursor:pointer}";

const SSaqhanChatAddQuestion = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.sendNewMessModal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendNewMessModal", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-new-wrap" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-new-ask" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "btn-add-question custom-link ", onClick: () => this.sendNewMessModalHandler() }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430\u043C"))));
    }
    sendNewMessModalHandler() {
        this.sendNewMessModal.emit();
    }
};
SSaqhanChatAddQuestion.style = sSaqhanChatAddQuestionCss;

const sSaqhanChatFilesCss = ".wrapper-files.sc-s-saqhan-chat-files{padding:0px 20px}.block-file.sc-s-saqhan-chat-files{cursor:pointer}.chat-files.sc-s-saqhan-chat-files .row.sc-s-saqhan-chat-files{-ms-flex-align:center;align-items:center}.chat-files.sc-s-saqhan-chat-files .block-input.sc-s-saqhan-chat-files::before{font-family:\"Font Awesome 5 Free\";font-weight:400;content:\"\\f0eb\";position:relative;left:20px;z-index:999;color:#5a5a5a}.block-file.sc-s-saqhan-chat-files i.sc-s-saqhan-chat-files{font-size:16px;color:#5a5a5a}.btn-back.sc-s-saqhan-chat-files::after{content:\"1\";background-color:#c73f45;padding:1px 6px;color:#fff;font-size:10px;border-radius:30px;position:relative;right:7px;top:-15px;z-index:999}.btn-back.sc-s-saqhan-chat-files{cursor:pointer}.btn-back.sc-s-saqhan-chat-files span.sc-s-saqhan-chat-files i.sc-s-saqhan-chat-files{color:#a9a9a9;font-size:15px}.file-card.sc-s-saqhan-chat-files{padding-top:10px;border-bottom:1px solid #e5e5e5}.block-info.sc-s-saqhan-chat-files{display:-ms-flexbox;display:flex;margin-bottom:15px}.file-date.sc-s-saqhan-chat-files{font-size:14px;font-weight:500;margin-bottom:10px}.file-img.sc-s-saqhan-chat-files{width:60px;height:60px;margin-right:15px;border-radius:3px;background-image:url(\"https://via.placeholder.com/500x500?text=Visit\")}.file-name.sc-s-saqhan-chat-files{font-size:14px;font-weight:500;margin-bottom:10px}.file-size.sc-s-saqhan-chat-files{font-size:12px;color:#5a5a5a}.block-files.sc-s-saqhan-chat-files{display:-ms-flexbox;display:flex;width:75%;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.block-repost.sc-s-saqhan-chat-files{-webkit-transition:0.3s easy;transition:0.3s easy}.block-repost.sc-s-saqhan-chat-files a.sc-s-saqhan-chat-files{display:none;color:#000;font-size:12px;margin-left:10px}.block-info.sc-s-saqhan-chat-files:hover .block-repost.sc-s-saqhan-chat-files a.sc-s-saqhan-chat-files{display:inline-block;cursor:pointer}@media (max-width: 375px){.input-search.sc-s-saqhan-chat-files{width:auto;padding:10px 30px}}@media (max-width: 320px){.wrapper-chat.sc-s-saqhan-chat-files{width:320px}}";

const SSaqhanChatFiles = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: " wrapper-files" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-card" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-date" }, "19 \u043D\u043E\u044F\u0431\u0440\u044F 2018"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-info" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-img" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-files" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-info" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-name" }, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F_\u0411\u0430\u043D\u043A\u0430_\u043A_\u0420\u0435\u0441\u0443\u0440\u0441\u0443.."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-size" }, "18.8 \u041A\u0411 13:27")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-repost" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-share" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-download" })))))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-card" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-date" }, "17 \u043D\u043E\u044F\u0431\u0440\u044F 2018"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-info" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-img" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-files" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-info" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-name" }, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F_\u0411\u0430\u043D\u043A\u0430_\u043A_\u0420\u0435\u0441\u0443\u0440\u0441\u0443.."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-size" }, "18.8 \u041A\u0411 13:27")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-repost" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-share" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-download" }))))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-info" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-img" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-files" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-info" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-name" }, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F_\u0411\u0430\u043D\u043A\u0430_\u043A_\u0420\u0435\u0441\u0443\u0440\u0441\u0443.."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-size" }, "18.8 \u041A\u0411 13:27")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-repost" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-share" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-download" }))))))));
    }
};
SSaqhanChatFiles.style = sSaqhanChatFilesCss;

const sSaqhanChatFilesWrapperCss = "";

const SSaqhanChatFilesWrapper = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-form-search-files", null), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-files", null)));
    }
};
SSaqhanChatFilesWrapper.style = sSaqhanChatFilesWrapperCss;

const sSaqhanChatFormSearchCss = ".header-wrapper.sc-s-saqhan-chat-form-search{border-bottom:1px solid #ececec}.chat-files.sc-s-saqhan-chat-form-search{text-align:center;padding:10px 10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.chat-files.sc-s-saqhan-chat-form-search .row.sc-s-saqhan-chat-form-search{-ms-flex-align:center;align-items:center}.block-input.sc-s-saqhan-chat-form-search{width:100%;display:-ms-flexbox;display:flex;position:relative}.block-input.sc-s-saqhan-chat-form-search i.sc-s-saqhan-chat-form-search{position:absolute;top:12px;left:20px;color:#97a9c9}.input-search.sc-s-saqhan-chat-form-search{width:100%;border-radius:3px;border:none;background-color:#ececec;outline:none;color:#5a5a5a;padding-top:10px;padding-bottom:10px;padding-left:40px;margin-left:8px;margin-right:20px}.block-file.sc-s-saqhan-chat-form-search{padding-right:15px}.block-file.sc-s-saqhan-chat-form-search i.sc-s-saqhan-chat-form-search{font-size:18px;color:#ccc}@media (max-width: 375px){.input-search.sc-s-saqhan-chat-form-search{padding:10px 30px}.chat-files.sc-s-saqhan-chat-form-search .block-input.sc-s-saqhan-chat-form-search::before{left:13px}}@media (max-width: 320px){.block-input.sc-s-saqhan-chat-form-search{text-align:center}}";

const SSaqhanChatFormSearch = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * array categories
         * */
        this.categories = [];
        this.clickToFilesBtn = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToFilesBtn", 7);
        this.searchDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialog", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: " chat-files" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-input" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-search" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", class: "input-search", placeholder: "\u041F\u043E\u0438\u0441\u043A \u0447\u0430\u0442\u043E\u0432 \u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439", onInput: (e) => this.searchDialogsHandler(e.target.value) })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-file" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-file-alt" }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-categories", { theme: "module", categories: this.categories })));
    }
    /**
     * click to Files btn
     * */
    clickToFilesBtnHandler() {
        this.clickToFilesBtn.emit();
    }
    searchDialogsHandler(e) {
        this.searchDialog.emit(e);
    }
};
SSaqhanChatFormSearch.style = sSaqhanChatFormSearchCss;

const sSaqhanChatFormSearchFilesCss = ".block-file.sc-s-saqhan-chat-form-search-files{cursor:pointer}.chat-files-search.sc-s-saqhan-chat-form-search-files{text-align:center;padding:10px 0px;border-bottom:1px solid #ececec;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly}.btn-back.sc-s-saqhan-chat-form-search-files{cursor:pointer}.chat-files.sc-s-saqhan-chat-form-search-files .row.sc-s-saqhan-chat-form-search-files{-ms-flex-align:center;align-items:center}.block-input-files.sc-s-saqhan-chat-form-search-files{width:70%;position:relative}.block-input-files.sc-s-saqhan-chat-form-search-files::before{font-family:\"Font Awesome 5 Free\";font-weight:400;content:\"\\f0eb\";position:absolute;left:15px;top:10px;z-index:999;color:#5a5a5a}.input-search-files.sc-s-saqhan-chat-form-search-files{width:100%;border-radius:3px;border:none;background-color:#ececec;padding:10px 40px;outline:none}.chat-files.sc-s-saqhan-chat-form-search-files .block-input.sc-s-saqhan-chat-form-search-files::before{font-family:\"Font Awesome 5 Free\";font-weight:400;content:\"\\f274\";position:relative;left:20px;z-index:999;color:#5a5a5a}.block-file.sc-s-saqhan-chat-form-search-files i.sc-s-saqhan-chat-form-search-files{font-size:18px;color:#5a5a5a}@media (max-width: 375px){.input-search.sc-s-saqhan-chat-form-search-files{width:92%;padding:10px 30px}}";

const SSaqhanChatFormSearchFiles = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "chat-files-search" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-back", onClick: () => this.clickToShowDialogsHandler() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-chevron-left" }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-input-files" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", class: "input-search-files", placeholder: "\u041F\u043E\u0438\u0441\u043A \u0444\u0430\u0439\u043B\u043E\u0432" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-file" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-filter" })))));
    }
    /**
     * show Dialogs
     * */
    clickToShowDialogsHandler() {
        this.clickToShowDialogs.emit();
    }
};
SSaqhanChatFormSearchFiles.style = sSaqhanChatFormSearchFilesCss;

const sSaqhanChatUsersCss = ".user-wrapper.sc-s-saqhan-chat-users{cursor:pointer;padding:0px 20px}@media (max-width: 375px){.user-wrapper.sc-s-saqhan-chat-users{cursor:pointer;padding:0px 0px;padding-right:0px;padding-top:10px}}";

const SSaqhanChatUsers = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Массив данных с диалогами
         * */
        this.dialogs = [];
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-user", { dialogs: this.dialogs })));
    }
};
SSaqhanChatUsers.style = sSaqhanChatUsersCss;

const sSaqhanChatUsersWrapperCss = ".chat-wrap.sc-s-saqhan-chat-users-wrapper{width:100%;height:calc(100vh - 317px);overflow:auto;padding-top:15px}.sc-s-saqhan-chat-users-wrapper::-webkit-scrollbar{width:0px;background:transparent}@media (max-width: 414px){.chat-wrap.sc-s-saqhan-chat-users-wrapper{height:calc(100vh - 190px)}}@media (max-width: 375px){.chat-wrap.sc-s-saqhan-chat-users-wrapper{height:calc(100vh - 190px);padding:0px 15px}.chat-files.sc-s-saqhan-chat-users-wrapper .block-input.sc-s-saqhan-chat-users-wrapper::before{left:13px}}";

const SSaqhanChatUsersWrapper = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Массив данных с диалогами
         * */
        this.dialogs = [];
        /**
         *
         * */
        this.categories = [];
        /**
         * Массив данных с личным чатом
         * */
        this.personalMessage = [];
        this.clickToCategory = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToCategory", 7);
        this.searchDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialog", 7);
        this.clickToDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
        this.clickToFilesBtn = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToFilesBtn", 7);
        this.sendNewMessModal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendNewMessModal", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-form-search", { categories: this.categories }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "chat-wrap" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-users", { dialogs: this.dialogs })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-add-question", null)));
    }
};
SSaqhanChatUsersWrapper.style = sSaqhanChatUsersWrapperCss;




/***/ })

}]);
//# sourceMappingURL=stencil-btn-wrapper_10-entry-js-es2015.js.map