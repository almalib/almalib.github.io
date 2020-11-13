(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-contacts-list-body_3-entry-js"],{

/***/ "./node_modules/s-chat/dist/esm/contacts-list-body_3.entry.js":
/*!********************************************************************!*\
  !*** ./node_modules/s-chat/dist/esm/contacts-list-body_3.entry.js ***!
  \********************************************************************/
/*! exports provided: contacts_list_body, m_chat_footer, s_adam_profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contacts_list_body", function() { return ContactsListBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m_chat_footer", function() { return MChatFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_profile", function() { return SAdamProfile; });
/* harmony import */ var _index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-063f1606.js */ "./node_modules/s-chat/dist/esm/index-063f1606.js");


const contactsListBodyCss = ".contacts-list-body.sc-contacts-list-body{padding:20px 20px 0px;border-bottom:1px solid #ccc;height:calc(100vh - 175px);overflow:auto}.contacts-list-body.sc-contacts-list-body{padding:20px 30px 0px;border-bottom:1px solid #ccc;height:calc(100vh - 155px);overflow:auto}.sc-contacts-list-body::-webkit-scrollbar{width:0px;background:transparent}.module.sc-contacts-list-body .contacts-list-body.sc-contacts-list-body{height:calc(100vh - 325px)}";

const ContactsListBody = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной/Комп версии
         * */
        this.theme = "mobile";
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-list-body" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ContactCard, { contacts: this.contacts }))));
    }
    /**
     * Метод выобра темы для Мобильная/Модульной версии
     * */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
};
/**
 * Компонент высшего порядка для передачи данных о контактах
 * */
const ContactCard = (props) => {
    return props.contacts.map((item) => {
        return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contact-card", { contact: item });
    });
};
ContactsListBody.style = contactsListBodyCss;

const mChatFooterCss = ".m-chat-footer.sc-m-chat-footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin:15px;padding:0px 15px}.m-chat-footer.sc-m-chat-footer span.sc-m-chat-footer i.sc-m-chat-footer{color:#979eab;font-size:18px;-webkit-transition:0.3s ease;transition:0.3s ease}.m-chat-footer.sc-m-chat-footer span.sc-m-chat-footer{cursor:pointer}.m-chat-footer.sc-m-chat-footer span.sc-m-chat-footer i.sc-m-chat-footer:hover{color:rgb(87, 128, 247)}.module.sc-m-chat-footer .showContacts.sc-m-chat-footer{display:none}";

const MChatFooter = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной версии
         * */
        this.theme = "mobile";
        this.clickToShowDialogs = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.clickToShowContacts = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowContacts", 7);
        this.clickToShowMenuBar = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowMenuBar", 7);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "m-chat-footer" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "showDialogs", onClick: () => this.clickToShowDialogsHandler() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-comment" })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "showContacts", onClick: () => this.clickToShowContactsHandler() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-user-friends" })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "showMenuBar", onClick: () => this.clickToShowMenuBarHandler() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-bars" })))));
    }
    /**
     * Метод выобра темы для Мобильная/Модульной версии
     * */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
    /**
     * click to show dialogs
     * */
    clickToShowDialogsHandler() {
        this.clickToShowDialogs.emit();
    }
    /**
     * click to show Contacts
     * */
    clickToShowContactsHandler() {
        this.clickToShowContacts.emit();
    }
    /**
     * click to show Contacts
     * */
    clickToShowMenuBarHandler() {
        this.clickToShowMenuBar.emit();
    }
};
MChatFooter.style = mChatFooterCss;

const sAdamProfileCss = ".comp.sc-s-adam-profile .links-wrapper.sc-s-adam-profile a.sc-s-adam-profile{display:none}.mobile.sc-s-adam-profile .links-wpapper.sc-s-adam-profile{display:-ms-flexbox;display:flex}.mobile.sc-s-adam-profile .about-user.sc-s-adam-profile{margin-bottom:30px}.module.sc-s-adam-profile .about-user.sc-s-adam-profile{margin-bottom:30px}.sc-s-adam-profile::-webkit-scrollbar{width:0px;background:transparent}.mobile.sc-s-adam-profile .profile.sc-s-adam-profile{height:100vh}.profile.sc-s-adam-profile{background-color:#f7f8f9;padding:20px;height:95vh;overflow:auto}.about-user.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;margin-bottom:70px}.profile-user-photo.sc-s-adam-profile{width:80px;height:80px;background-size:cover;background-position:center;margin-bottom:20px;border-radius:100%;cursor:pointer}.profile.sc-s-adam-profile .user-name.sc-s-adam-profile{font-size:14px;margin-bottom:10px}.user-mail.sc-s-adam-profile{margin-bottom:30px;font-size:12px;color:#8d8d8d}.about-user.sc-s-adam-profile .c-chat.sc-s-adam-profile{margin:0 15px}.user-social.sc-s-adam-profile{margin-bottom:40px}.user-social-title.sc-s-adam-profile,.media-title.sc-s-adam-profile{font-weight:700;font-size:12px;margin-bottom:10px}.user-social-block.sc-s-adam-profile{background:white;min-height:140px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding:20px}.user-social-block.sc-s-adam-profile .c-chat.sc-s-adam-profile{width:16px;text-align:center;margin-right:20px}.user-social-name.sc-s-adam-profile,.mediafile-desc.sc-s-adam-profile{font-size:12px;color:#8d8d8d;font-weight:600}.media-header.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.media-descr.sc-s-adam-profile{font-size:8px;color:#8d8d8d}.media-item.sc-s-adam-profile{padding:10px;background:white;margin-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.mediafile.sc-s-adam-profile{width:40px;height:40px;border-radius:5px;margin-right:20px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.pdf.sc-s-adam-profile{background-color:#ff908c}.zip.sc-s-adam-profile{background-color:#58c4c9}.doc.sc-s-adam-profile{background-color:#73a4e9}.mediafile.sc-s-adam-profile span.sc-s-adam-profile{color:white;font-size:8px;font-weight:600}.c-chat.sc-s-adam-profile{color:#bacbe3;cursor:pointer}.hover-link.sc-s-adam-profile:hover{color:#6328f8}.sc-s-adam-profile::-webkit-scrollbar{width:0px;background:transparent}.user-folders-block.sc-s-adam-profile{background:white;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding:20px}.user-folders-block.sc-s-adam-profile .c-chat.sc-s-adam-profile{width:16px;text-align:center;margin-right:20px;cursor:pointer}.user-folders-block.sc-s-adam-profile .user-social-name.sc-s-adam-profile{cursor:pointer}.user-add-folder.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:#ffffff;padding:15px 20px;margin-bottom:30px;cursor:pointer}.user-add-folder.sc-s-adam-profile div.sc-s-adam-profile{color:#8d8d8d;-webkit-transition:0.3s ease;transition:0.3s ease}.user-add-folder.sc-s-adam-profile i.sc-s-adam-profile{-webkit-transition:0.3s ease;transition:0.3s ease}.user-add-folder.sc-s-adam-profile div.sc-s-adam-profile:hover{color:#4c567d}.user-add-folder.sc-s-adam-profile:hover i.sc-s-adam-profile{color:#4c567d}.user-add-btn.sc-s-adam-profile{margin-left:20px;font-size:14px;color:#4c567d;font-weight:600}.user-social-title.sc-s-adam-profile,.media-title.sc-s-adam-profile{font-weight:600;font-size:14px;margin-bottom:10px}.user-folder.sc-s-adam-profile{margin-top:30px}.user-folder-link.sc-s-adam-profile{padding:10px 0px;font-size:14px;cursor:pointer}.user-folders-blocks.sc-s-adam-profile{background-color:#fff;max-height:130px;overflow:auto}.user-folders-blocks.sc-s-adam-profile ul.sc-s-adam-profile li.sc-s-adam-profile{list-style:none;cursor:pointer;font-size:14px;font-weight:600;color:#8d8d8d;-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-s-adam-profile:hover{color:#4c567d;border-bottom:1px solid #4c567d}.list-item-wrapper.sc-s-adam-profile:hover i.sc-s-adam-profile{color:#4c567d}.list-item-wrapper.sc-s-adam-profile i.sc-s-adam-profile{-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-s-adam-profile{display:-ms-flexbox;display:flex;width:100%;border-bottom:1px solid #ccc;padding:10px;-ms-flex-align:center;align-items:center;-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-s-adam-profile i.sc-s-adam-profile{margin-right:20px;margin-left:10px;font-size:16px}.list-folders.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.delete-folder.sc-s-adam-profile{width:40px;text-align:center;border-bottom:1px solid #ccc;padding:10px;-webkit-transition:0.3s ease;transition:0.3s ease;font-size:16px;text-replace:0.3s ease}.delete-folder.sc-s-adam-profile:hover{border-bottom:1px solid darkred;color:darkred}.delete-folder.sc-s-adam-profile:hover .c-chat.sc-s-adam-profile{color:darkred}.user-folders.sc-s-adam-profile{margin:30px 0px}.user-folders-title.sc-s-adam-profile{margin-bottom:10px}.folders-content.sc-s-adam-profile{height:100vh;overflow:auto}.user-social-title.sc-s-adam-profile{font-weight:600;font-size:14px;margin-bottom:10px;color:#4c567d}.user-social-name.sc-s-adam-profile{font-size:14px;font-weight:600;color:#8d8d8d}.module.sc-s-adam-profile .profile.sc-s-adam-profile{height:calc(100vh - 172px)}@media (max-width: 414px){.module.sc-s-adam-profile .profile.sc-s-adam-profile{height:calc(100vh - 50px)}}";

const SAdamProfile = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Задаем стиль для мобильной/пк версии
         * */
        this.theme = "comp";
        this.clickToShowDialogs = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.clickToShowFolders = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowFolders", 7);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "profile" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "links-wrapper" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { onClick: () => this.clickToShowDialogsHandler() }, " ", Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-arrow-left" }))), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "about-user" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "profile-user-photo border-radius", style: {
                backgroundImage: "url(https://via.placeholder.com/200x200?text=Text)",
            } }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-name" }, "Tim Ostin"), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-mail" }, "timostin@gmail.com"), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-contact" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-phone-alt hover-link" }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-video hover-link" }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-envelope hover-link" }))), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-title" }, "\u041F\u0430\u043F\u043A\u0438"), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-folders-blocks" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Folder, { categories: this.categories }))), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-add-folder", onClick: () => this.clickToShowFoldersHandler() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-folder-plus hover-link" }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-add-btn" }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u043F\u0430\u043F\u043A\u0443")), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-title" }, "Terhubung"), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-block" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-link" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-instagram-brands hover-link" }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "user-social-name" }, "TimOstin")), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-link" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-twitter-brands hover-link" }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "user-social-name" }, "Tim Ostin")), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-link" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-facebook-f-brands \u0440" }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "user-social-name" }, "Tim Ostin")))), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-header" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-title" }, "Media"), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-descr" }, "Lihat lebin banyak")), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-block" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-item" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mediafile pdf" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "PDF")), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "mediafile-desc" }, "Buku Hueanghong.pdf")), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-item" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mediafile zip" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "ZIP")), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "mediafile-desc" }, "File jungjang.zip")), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-item" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mediafile doc" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "DOC")), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "mediafile-desc" }, "Laporan keuangan.ppt")))))));
    }
    /**
     * выводим класс
     * */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
    clickToShowDialogsHandler() {
        this.clickToShowDialogs.emit();
    }
    clickToShowFoldersHandler() {
        this.clickToShowFolders.emit();
    }
};
const Folder = (props) => {
    return props.categories.map((item) => {
        if (item.id !== "all") {
            return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list-folders" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list-item-wrapper" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-folder " }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, item.name)), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "delete-folder" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-file-alt " })))));
        }
    });
};
SAdamProfile.style = sAdamProfileCss;




/***/ })

}]);
//# sourceMappingURL=stencil-contacts-list-body_3-entry-js-es2015.js.map