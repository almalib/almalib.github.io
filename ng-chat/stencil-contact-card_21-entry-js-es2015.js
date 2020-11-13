(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-contact-card_21-entry-js"],{

/***/ "./node_modules/s-chat/dist/esm/contact-card_21.entry.js":
/*!***************************************************************!*\
  !*** ./node_modules/s-chat/dist/esm/contact-card_21.entry.js ***!
  \***************************************************************/
/*! exports provided: contact_card, contacts_list_header, dialog_card, dialog_categories, footer_audio, footer_text, message_from, message_img, message_text, my_component, personal_footer, s_adam_chat, s_adam_contacts, s_adam_dialogs, s_adam_direct, s_adam_nav_item, s_adam_navigate, s_adam_no_chat, s_adam_personal_header, user_folders, user_status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contact_card", function() { return ContactCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contacts_list_header", function() { return ContactsListHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialog_card", function() { return DialogCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialog_categories", function() { return DialogCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer_audio", function() { return FooterAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer_text", function() { return FooterText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "message_from", function() { return MessageFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "message_img", function() { return MessageImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "message_text", function() { return MessageText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "my_component", function() { return MyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personal_footer", function() { return PersonalFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_chat", function() { return SAdamChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_contacts", function() { return SAdamContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_dialogs", function() { return SAdamDialogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_direct", function() { return SAdamDirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_nav_item", function() { return SAdamNavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_navigate", function() { return SAdamNavigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_no_chat", function() { return SAdamNoChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_personal_header", function() { return SAdamPersonalHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user_folders", function() { return UserFolders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user_status", function() { return UserStatus; });
/* harmony import */ var _index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-063f1606.js */ "./node_modules/s-chat/dist/esm/index-063f1606.js");
/* harmony import */ var _utils_f6ec1f87_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-f6ec1f87.js */ "./node_modules/s-chat/dist/esm/utils-f6ec1f87.js");
/* harmony import */ var _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-582bc2f2.js */ "./node_modules/s-chat/dist/esm/index-582bc2f2.js");
/* harmony import */ var _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-5b093f4b.js */ "./node_modules/s-chat/dist/esm/mock-5b093f4b.js");





const contactCardCss = ".m-contact-card.sc-contact-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:20px;cursor:pointer}.img-user.sc-contact-card{margin-right:20px;text-align:center}.img-user.sc-contact-card .img.sc-contact-card{width:50px;height:50px;border-radius:50%;background-position:center;background-size:cover}.info-card.sc-contact-card{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;-ms-flex-pack:justify;justify-content:space-between}.unfo-user.sc-contact-card{width:80%;overflow:hidden}.comp.sc-contact-card .unfo-user.sc-contact-card{width:auto}.name-user.sc-contact-card{font-size:14px;font-weight:600;color:#4c567d}.message-user.sc-contact-card{font-size:14px;color:#979eab;white-space:nowrap}.data-message.sc-contact-card{text-align:center}.data-message.sc-contact-card .date.sc-contact-card{font-size:10px;color:#979eab}.data-message.sc-contact-card .new-message.sc-contact-card{font-size:10px;color:#979eab}.add-new-message.sc-contact-card{background-color:#ff7e7f;font-size:10px;padding:1px 5px;border-radius:50%;color:#fff}.comp.sc-contact-card .info-card.sc-contact-card{width:70%}.comp.sc-contact-card .m-contact-card.sc-contact-card{padding:20px 10px;margin:0}.comp.sc-contact-card .m-contact-card.sc-contact-card:hover{background-color:white}.comp.sc-contact-card .data-message.sc-contact-card{height:100%}";

const ContactCard = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной версии
         * */
        this.theme = "mobile";
        this.clickToContact = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToContact", 7);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-list-card" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "m-contact-card", onClick: () => this.clickToDialogHandler() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img-user" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img", style: { backgroundImage: `url(${this.contact.img})` } })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-card" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "unfo-user" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "name-user" }, this.contact.name), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "message-user" }, " ", "last seen ", this.createSendTime(this.contact.time.created))))))));
    }
    /**
     * Метод выобра темы для Мобильная/Модульной версии
     * */
    getClassForHost() {
        // console.log(this.theme)
        return {
            [this.theme]: true,
        };
    }
    /**
     * click to contact
     * */
    clickToDialogHandler() {
        this.clickToContact.emit(this.contact);
    }
    /*
     * last visit time
     * **/
    createSendTime(array) {
        const timeNow = array;
        let hours = timeNow.getHours();
        let minutes = timeNow.getMinutes();
        // add zero for minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        // выводим время в минутах/часах
        return `${hours} : ${minutes}`;
    }
};
ContactCard.style = contactCardCss;

const contactsListHeaderCss = ".contacts-list-header.sc-contacts-list-header{border-bottom:1px solid #eaeaea;background-color:#eaeaea45;padding:20px 0px 10px 0px}.comp.sc-contacts-list-header .contacts-list-header.sc-contacts-list-header{background-color:transparent;padding:0 0 20px 0;border-bottom:none}.comp.sc-contacts-list-header{margin:0 -20px;padding:0 20px}.custom-link.sc-contacts-list-header{cursor:pointer}.contacts-list-description.sc-contacts-list-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;padding:0px 20px}.comp.sc-contacts-list-header .contacts-list-description.sc-contacts-list-header{display:none}.contacts-list-arraw-back.sc-contacts-list-header i.sc-contacts-list-header{font-size:14px;color:#979eab}.contacts-list-title.sc-contacts-list-header{font-weight:600;color:#4c567d;-ms-flex-align:center;align-items:center;width:100%;margin-left:-12px;text-align:center}.contacts-list-input.sc-contacts-list-header{text-align:center;margin:10px 0px;position:relative;padding:0 20px}.comp.sc-contacts-list-header .contacts-list-input.sc-contacts-list-header{margin:0}.contacts-list-input.sc-contacts-list-header input.sc-contacts-list-header{text-align:center;border-radius:5px;border:none;background-color:#eaeaea;width:100%;padding:5px;font-size:14px;outline:none}.comp.sc-contacts-list-header .contacts-list-input.sc-contacts-list-header input.sc-contacts-list-header{text-align:left;border-radius:0;background-color:white;width:100%;padding:10px 40px;font-size:13px}.contacts-list-input.sc-contacts-list-header i.sc-contacts-list-header{position:absolute;top:30%;z-index:2;left:39%;font-size:14px;color:#979eab}.comp.sc-contacts-list-header input.sc-contacts-list-header::-moz-placeholder{color:#979eab}.comp.sc-contacts-list-header input.sc-contacts-list-header::-webkit-input-placeholder{color:#979eab}";

const ContactsListHeader = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной версии
         * */
        this.theme = "mobile";
        this.clickToShowDialogs = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.searchContact = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchContact", 7);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-list-header" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-list-description" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-list-arraw-back custom-link ", onClick: () => this.clickToShowDialogsHandler() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-arrow-left" })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-list-title" }, "Contacts")), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-list-input" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", placeholder: "Search..", onInput: (e) => this.searchContactHandler(e.target.value) })))));
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
     * show Dialogs
     * */
    clickToShowDialogsHandler() {
        this.clickToShowDialogs.emit();
    }
    /**
     *
     * */
    searchContactHandler(value) {
        this.searchContact.emit(value);
    }
};
ContactsListHeader.style = contactsListHeaderCss;

const dialogCardCss = ".m-dialog-card.sc-dialog-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:20px;cursor:pointer}.img-user.sc-dialog-card{margin-right:20px;text-align:center}.img-user.sc-dialog-card .img.sc-dialog-card{width:50px;height:50px;border-radius:50%;background-position:center;background-size:cover}.info-card.sc-dialog-card{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;-ms-flex-pack:justify;justify-content:space-between}.unfo-user.sc-dialog-card{width:80%;overflow:hidden}.mobile.sc-dialog-card .unfo-user.sc-dialog-card{max-width:250px;overflow:hidden}.name-user.sc-dialog-card{font-size:14px;font-weight:600;color:#4c567d}.message-user.sc-dialog-card{font-size:14px;color:#979eab;white-space:nowrap}.data-message.sc-dialog-card{text-align:center}.data-message.sc-dialog-card .date.sc-dialog-card{font-size:10px;color:#979eab}.data-message.sc-dialog-card .new-message.sc-dialog-card{font-size:10px;color:#979eab}.add-new-message.sc-dialog-card{background-color:#ff7e7f;font-size:10px;padding:1px 5px;border-radius:50%;color:#fff}.comp.sc-dialog-card .info-card.sc-dialog-card{width:70%}.comp.sc-dialog-card .m-dialog-card.sc-dialog-card{padding:20px 10px;margin:0}.comp.sc-dialog-card .m-dialog-card.sc-dialog-card:hover{background-color:white}.comp.sc-dialog-card .data-message.sc-dialog-card{height:100%}@media (max-width: 320px){.info-card.sc-dialog-card{max-width:210px}}";

const DialogCard = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * карточка диалога
         * */
        this.theme = "mobile";
        this.clickToDialog = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "m-dialog-card", onClick: () => this.clickToDialogHandler() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img-user" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.mess.online ? "img online" : "img", style: { backgroundImage: `url(${this.mess.img})` } })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-card" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "unfo-user" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "name-user" }, this.mess.name), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "message-user" }, this.mess.mess)), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "data-message" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "date" }, " ", this.createSendTime(this.mess.time.created)), this.showNewMess(this.mess))))));
    }
    showNewMess(dialog) {
        if (dialog.newMessage > 0) {
            return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "add-new-message" }, " ", dialog.newMessage);
        }
    }
    /**
     * Управление по клику на диалог
     * */
    clickToDialogHandler() {
        // this.clickToDialog.emit({ data: this.mess });
        this.clickToDialog.emit(this.mess);
    }
    // public clickToLinkHandler() {
    //   this.clickToLink.emit({place: ChatLinkTypeEnum.showPersonalDialog, data: this.mess })
    // }
    /**
     * Метод выобра темы для ПК/Мобильная/Модульной версии
     * */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
    /**
     * Метод вывода времени отправки сообщения
     * */
    createSendTime(array) {
        const timeNow = array;
        let hours = timeNow.getHours();
        let minutes = timeNow.getMinutes();
        // add zero for minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        // выводим время в минутах/часах
        return `${hours} : ${minutes}`;
    }
};
DialogCard.style = dialogCardCss;

const dialogCategoriesCss = "@charset \"UTF-8\";.btns-nav.sc-dialog-categories{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow-x:scroll;overflow-y:hidden;height:30px}.btns-nav.sc-dialog-categories span.sc-dialog-categories{cursor:pointer;font-size:14px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;font-weight:600;color:#979eab;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out;padding:0 20px;height:30px;border-bottom:1px solid #ccc}.btns-nav.sc-dialog-categories span.sc-dialog-categories:hover,.btns-nav.sc-dialog-categories span.active.sc-dialog-categories{border-bottom:1px solid #5780f7}.btns-nav.sc-dialog-categories span.sc-dialog-categories:hover{color:#5780f7}.btns-nav.sc-dialog-categories span.active.sc-dialog-categories{color:black}.comp.sc-dialog-categories .btns-nav.sc-dialog-categories{border-bottom:none}.comp.sc-dialog-categories{margin:0 -20px}.comp.sc-dialog-categories .btns-nav.sc-dialog-categories span.sc-dialog-categories{padding-bottom:10px}.mobile.sc-dialog-categories .btns-nav.sc-dialog-categories{margin-top:10px}.module.sc-dialog-categories .btns-nav.sc-dialog-categories span.sc-dialog-categories{font-size:14px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0px 20px;height:30px;text-align:center;font-weight:600;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out}.module.sc-dialog-categories .btns-nav.sc-dialog-categories{-ms-flex-pack:start;justify-content:start}.sc-dialog-categories::-webkit-scrollbar{height:0px}";

const DialogCategories = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         *
         * */
        this.theme = "comp";
        /**
         *
         * */
        this.categories = [];
        this.clickToCategory = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToCategory", 7);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btns-nav" }, this.getCategories(this.categories))));
    }
    /**
     * Метод получения названий категорий
     * */
    getCategories(array) {
        return array.map((item) => {
            var _a;
            return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: { active: item.id === ((_a = this.lastClickedCategory) === null || _a === void 0 ? void 0 : _a.id) }, onClick: () => this.clickToCategoryHandler(item) }, item.name));
        });
    }
    /**
     * */
    clickToCategoryHandler(item) {
        this.clickToCategory.emit(this.lastClickedCategory = item);
    }
    /**
     *
     * */
    getClassForHost() {
        return {
            [this.theme]: true
        };
    }
};
DialogCategories.style = dialogCategoriesCss;

const footerAudioCss = ".record-dot.sc-footer-audio{width:10px;height:10px;background-color:#ff7e7f;border-radius:100%}.personal-footer.sc-footer-audio{position:absolute;bottom:0;width:100%;background-color:white;z-index:1}.footer-wrapper.sc-footer-audio{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-radius:20px;-ms-flex-align:center;align-items:center;padding:10px 20px;-webkit-box-shadow:0px 0px 10px 1px #d4d4d4;box-shadow:0px 0px 10px 1px #d4d4d4;font-size:18px;color:#979eab}.audio.sc-footer-audio{width:20px;text-align:center;cursor:pointer}.input-wrapper.sc-footer-audio{width:100%}.input-wrapper.sc-footer-audio input.sc-footer-audio{width:100%;text-align:center;padding:10px 0;border:none;font-size:16px;outline:none;color:#4c567d}input.input-audio.sc-footer-audio{text-align:center !important}.comp.sc-footer-audio .footer-wrapper.sc-footer-audio{-webkit-box-shadow:none;box-shadow:none;border:1px solid lightgray}.mobile.sc-footer-audio .footer-wrapper.sc-footer-audio{border-radius:15px 15px 0px 0px}.animate-audio.sc-footer-audio{width:40px;height:40px;background-color:red;border-radius:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.recording-btn.sc-footer-audio{display:block;width:40px;height:40px;border-radius:100%;background-color:#bacbe3;opacity:0.2;position:absolute;right:10px}.c-chat-microphone.sc-footer-audio{z-index:1;position:absolute;top:24px;right:23px}.timer.sc-footer-audio{margin-left:10px}.record-audio.sc-footer-audio{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:14px}.module.sc-footer-audio .personal-footer.sc-footer-audio .footer-wrapper.sc-footer-audio{border-radius:15px 15px 0px 0px}.mobile.sc-footer-audio .footer-wrapper.sc-footer-audio{border-radius:15px 15px 0px 0px}";

const FooterAudio = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Пропс с классом CSS
         */
        this.theme = "comp";
        /**
         * Курсор за пределами инпута остановка таймера
         * */
        this.mouseUpCallback = (event) => {
            const state = this.outInputTag.contains(event.target);
            this.recordFinished.emit(state);
        };
        this.recordFinished = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "recordFinished", 7);
    }
    componentDidLoad() {
        document.addEventListener("mouseup", this.mouseUpCallback);
        this.startTimer();
    }
    disconnectedCallback() {
        document.removeEventListener("mouseup", this.mouseUpCallback);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "personal-footer" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer-wrapper", onMouseLeave: (e) => this.mouseOutInput(e), ref: (el) => (this.outInputTag = el) }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "record-audio" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "record-dot" }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "timer", ref: (el) => (this.timerElement = el) })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-wrapper" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", null, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { class: "input-audio", type: "text", placeholder: "Release outside this field to cancel", readonly: true }))), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "audio", id: "audio" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-microphone" })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "recording-btn" })))));
    }
    /**
     * смена класса
     */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
    /**
     * Старт таймера
     * */
    startTimer() {
        const timer = new _utils_f6ec1f87_js__WEBPACK_IMPORTED_MODULE_1__["T"]();
        timer.start((time) => {
            {
                this.timerElement.innerText = time;
            }
        });
    }
    /**
     * Событие при MouseLeave
     * */
    mouseOutInput(e) {
        console.log("mouseOutInput", e);
    }
};
FooterAudio.style = footerAudioCss;

const footerTextCss = ".personal-footer.sc-footer-text{position:absolute;bottom:0;width:100%;background-color:white;z-index:1}.footer-wrapper.sc-footer-text{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-radius:20px;-ms-flex-align:center;align-items:center;padding:10px 20px;-webkit-box-shadow:0px 0px 10px 1px #d4d4d4;box-shadow:0px 0px 10px 1px #d4d4d4;font-size:18px;color:#979eab}.file.sc-footer-text,.audio.sc-footer-text{width:20px;text-align:center;cursor:pointer}.file.sc-footer-text i.sc-footer-text:hover{color:#6328f8}.audio.sc-footer-text i.sc-footer-text:hover{color:#6328f8}.input-wrapper.sc-footer-text{width:100%;padding:0px 15px}.input-wrapper.sc-footer-text input.sc-footer-text{width:100%;text-align:center;color:#4c567d;padding:10px 0;border:none;font-size:16px;outline:none}.comp.sc-footer-text .footer-wrapper.sc-footer-text{-webkit-box-shadow:none;box-shadow:none;border:1px solid lightgray}.comp.sc-footer-text .input-wrapper.sc-footer-text input.sc-footer-text{text-align:left}.module.sc-footer-text .input-wrapper.sc-footer-text input.sc-footer-text{text-align:left}.module.sc-footer-text .personal-footer.sc-footer-text .footer-wrapper.sc-footer-text{border-radius:15px 15px 0px 0px}.mobile.sc-footer-text .footer-wrapper.sc-footer-text{border-radius:15px 15px 0px 0px}.animate-audio.sc-footer-text{width:40px;height:40px;background-color:red;border-radius:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.c-chat-microphone.sc-footer-text{z-index:1;position:absolute;top:24px;right:23px}";

const FooterText = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Пропс с классом
         */
        this.theme = "comp";
        /**
         * Возможность записи аудио
         */
        this.canRecordAudio = false;
        /**
         * */
        this.showAudioSendButton = true;
        this.showSendFileFooter = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showSendFileFooter", 7);
        this.showRecordAudioFooter = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showRecordAudioFooter", 7);
        this.sendTextMessage = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendTextMessage", 7);
    }
    /**
     *
     * */
    mouseEnter(event) {
        console.log("mouseEnter", event);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "personal-footer" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer-wrapper" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file", onClick: () => this.showSendFileFooter.emit() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-paperclip" })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-wrapper" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", { onSubmit: (e) => this.sendMessageFromForm(e) }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", ref: (el) => (this.inputElement = el), onInput: (e) => this.switchIconInput(e.target.value), placeholder: "Type something ..." }))), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "audio", id: "audio" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])(SendButtonTag, { showAudio: this.canRecordAudio && this.showAudioSendButton, sendMessageFromButton: this.sendMessageFromButton.bind(this), clickOnAudio: this.showRecordAudioFooter }))))));
    }
    /**
     * Смена класса
     */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
    /**
     * when sending message-from
     * */
    sendingNewMess() {
        const input = this.inputElement;
        if (input.value === "") {
            return false;
        }
        else {
            // скрипт отправки сообщения
            // console.log("send mess:", input.value);
            this.sendTextMessage.emit(input.value);
            // скрипт отправки сообщения
            this.switchIconInput((input.value = ""));
        }
    }
    /**
     * send message from form
     * */
    sendMessageFromForm(e) {
        e.preventDefault();
        this.sendingNewMess();
    }
    /**
     * send message from send button
     * */
    sendMessageFromButton() {
        this.sendingNewMess();
    }
    /**
     * Функция для для отправки сообщения
     * */
    switchIconInput(value) {
        this.showAudioSendButton = !value.replace(/[\t\n\r ]+/g, "").length;
    }
};
/**
 * Смена иконки микрофона на стрелку
 * */
const SendButtonTag = (props) => {
    return (props === null || props === void 0 ? void 0 : props.showAudio) ? (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-microphone", onMouseDown: () => props.clickOnAudio.emit() })) : (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-location-arrow", onClick: () => props.sendMessageFromButton() }));
};
FooterText.style = footerTextCss;

const messageFromCss = ".from-mess-wrapper.sc-message-from .mess-img.sc-message-from{height:150px;border-radius:20px 0 20px 20px;background-position:center;background-size:cover}.from-mess-wrapper.sc-message-from{margin:15px 0px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.from-mess-wrap.sc-message-from{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;width:100%}.from-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:350px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:10px;border:1px solid #c7d0e8;border-radius:20px 0px 20px 20px;background-color:#ebf0fe;color:#799af8;font-size:14px;min-height:42px}.from-mess-wrapper.sc-message-from .mess-img.sc-message-from{max-width:350px;min-width:300px;height:150px;border-radius:20px 0 20px 20px;background-position:center;background-size:cover}.to-me-mess-wrapper.sc-message-from{margin:15px 0px}.to-me-mess-wrap.sc-message-from{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:end}.to-me-mess-wrap.sc-message-from .img.sc-message-from{width:30px;height:30px;margin-right:10px;border-radius:50%;background-size:cover;background-position:center}.to-me-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:350px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:10px;border:1px solid #ccc;border-radius:0px 20px 20px 20px;font-size:14px;color:#979eab;display:-ms-flexbox;display:flex;-ms-flex-align:unset;align-items:unset;-ms-flex-pack:justify;justify-content:space-between;background:white;min-height:42px}.to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{max-width:350px;min-width:300px;height:150px;border-radius:0px 20px 20px 20px;background-position:center;background-size:cover}.user-mess.sc-message-from .check.sc-message-from{font-size:10px;margin-left:5px}.system-message.sc-message-from{text-align:center;font-size:13px;color:#969696;margin:25px 0px;border-bottom:1px solid #ccc;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.system-message.sc-message-from div.sc-message-from{border:1px solid #969696;padding:5px 8px;border-radius:15px;background-color:#fff;margin-bottom:-15px}.module.sc-message-from .personal-message.sc-message-from .to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:260px}.module.sc-message-from .from-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:260px}.module.sc-message-from .personal-message.sc-message-from .from-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:260px}.module.sc-message-from .to-me-mess-wrap.sc-message-from{max-width:315px}@media (max-width: 414px){.from-mess-wrapper.sc-message-from .mess-img.sc-message-from,.to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:230px}.mess-img.sc-message-from .check.sc-message-from{left:90%}.from-mess-wrapper.sc-message-from .from-mess.sc-message-from,.to-me-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:230px}}@media (max-width: 320px){.from-mess-wrapper.sc-message-from .mess-img.sc-message-from,.to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:200px}.mess-img.sc-message-from .check.sc-message-from{left:90%}.from-mess-wrapper.sc-message-from .from-mess.sc-message-from,.to-me-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:200px}}";

const MessageFrom = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.message ? this.renderMessage(this.message) : '');
    }
    /**
     * */
    getWritingMessage(writing) {
        if (!(writing === null || writing === void 0 ? void 0 : writing.length)) {
            return '';
        }
        // @ts-ignore
        const message = ({
            sender: {
                icon: writing[0].icon
            },
            type: _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["a"].loading
        });
        return this.getToMeMessage(message);
    }
    /**
     *
     * */
    getToMeMessage(message) {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "to-me-mess-wrapper" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "to-me-mess-wrap" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "img", style: {
                backgroundImage: `url(${message.sender.icon})`,
            } }), this.createType(message))));
    }
    /**
     *
     * */
    getCenterMeMessage(message) {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "system-message" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.checkTypeSystemMessage(message.content))));
    }
    /**
     *
     * */
    getFromMeMessage(message) {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "from-mess-wrapper " }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "from-mess-wrap" }, this.createType(message)))));
    }
    /**
     * Определяем от кого сообщение
     * @param message
     */
    renderMessage(message) {
        switch (message.direction) {
            case _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["C"].fromMe:
                return this.getFromMeMessage(message);
            case _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["C"].toMe:
                return this.getToMeMessage(message);
            case _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["C"].center:
                return this.getCenterMeMessage(message);
        }
    }
    /**
     * Определяем тип сообщения
     * @param message
     */
    createType(message) {
        switch (message.type) {
            case _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["a"].text:
                return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "from-mess" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-text", { checkSendMess: this.checkSendMess(message), createSendTime: this.createSendTime(message.time.created), message: message })));
            case _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["a"].image:
                return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mess-img", style: { backgroundImage: `url(${this.message.content})` } }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-img", { checkSendMess: this.checkSendMess(message), message: message })));
            // case ChatMessageTypeEnum.loading:
            //   return (
            //     <div class="from-mess">
            //       <div id="circleG">
            //         <div id="circleG_1" class="circleG"></div>
            //         <div id="circleG_2" class="circleG"></div>
            //         <div id="circleG_3" class="circleG"></div>
            //       </div>
            //     </div>
            //   );
        }
    }
    /**
     * Метод вывода времени отправки
     * */
    createSendTime(array) {
        const timeNow = array;
        let hours = timeNow.getHours();
        let minutes = timeNow.getMinutes();
        // add zero for minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return `${hours} : ${minutes}`;
    }
    /**
     * Проверка статуса доставки сообщения
     * */
    checkSendMess(array) {
        if (array.time.read) {
            return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "check" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-check-double" })));
        }
        else if (array.time.delivery) {
            return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "check" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-check" })));
        }
        else {
            return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "check" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-check" })));
        }
    }
    /**
     * Проверка на тип полученного системного сообщения
     * */
    checkTypeSystemMessage(message) {
        if (typeof message === "string") {
            return message;
        }
        else if (typeof message === "number") {
            return Object(_utils_f6ec1f87_js__WEBPACK_IMPORTED_MODULE_1__["d"])(message).format("DD MMMM");
        }
    }
};
MessageFrom.style = messageFromCss;

const messageImgCss = ".mess-img-content.sc-message-img{height:100%;position:relative}.check.sc-message-img{position:absolute;bottom:10px;right:20px;font-size:10px;color:#fff}";

const MessageImg = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mess-img-content" }, this.message.direction === _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["C"].fromMe
            ? this.checkSendMess : ''));
    }
};
MessageImg.style = messageImgCss;

const messageTextCss = ".check.sc-message-text{font-size:10px;margin-left:5px}.text-wrapper.sc-message-text{-ms-flex:1;flex:1}.info-wrapper.sc-message-text{display:-ms-flexbox;display:flex;text-align:right;white-space:nowrap}.personal-mess-date.sc-message-text{font-size:10px;margin-left:10px}.mess-content-wrap.sc-message-text{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.module.sc-message-text to-me-mess-wrapper.sc-message-text{max-width:315px}";

const MessageText = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mess-content-wrap" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text-wrapper" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "message-text" }, this.message.content)), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-wrapper" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "personal-mess-date" }, this.createSendTime), this.message.direction === _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["C"].fromMe
            ? this.checkSendMess
            : "")));
    }
};
MessageText.style = messageTextCss;

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        // return <mobile-chat></mobile-chat>;
        // return <module-chat></module-chat>;
        return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-chat", null);
    }
};
MyComponent.style = myComponentCss;

const personalFooterCss = "";

const PersonalFooter = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.theme = "comp";
        /**
         * Возможность записи аудио
         */
        this.canRecordAudio = false;
        /**
         * audio animation state
         */
        this.switchFooter = true;
        this.clickToLink = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
    }
    toggleFooter() {
        this.switchFooter = !this.switchFooter;
    }
    onMouseUp(e) {
        console.log("onMouseUp", e.target);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.switchFooter ? (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer-text", { canRecordAudio: this.canRecordAudio, theme: this.theme, onShowRecordAudioFooter: () => this.toggleFooter() })) : (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer-audio", { theme: this.theme, onRecordFinished: (state) => this.recordFinished(state.detail) }))));
    }
    recordFinished(state) {
        this.toggleFooter();
        console.log("recordFinished", { state });
    }
};
PersonalFooter.style = personalFooterCss;

const sAdamChatCss = ".col-1.sc-s-adam-chat,.col.sc-s-adam-chat,.col-3.sc-s-adam-chat{padding:0 !important}.container.sc-s-adam-chat{max-width:1280px;width:100%}.main-wrapper.sc-s-adam-chat{background-color:#ebeff6;height:100vh;position:relative}main.sc-s-adam-chat{height:95vh;overflow:hidden;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:100%}.chat.sc-s-adam-chat{position:relative;height:95vh}.white-col.sc-s-adam-chat{background-color:#fdfdfd}";

const SAdamChat = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         *Стейт для переключения на личный чат
         */
        this.dialogVisible = "noChat";
        /**
         * Стейт для показа профиля пользователя
         */
        this.profileVisible = false;
        /**
         * Стейт для показа контактов или диалогов
         */
        this.contactsVisible = true;
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "main-wrapper" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("main", null, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-1 white-col" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-navigate", { onVisibleContacts: () => this.visibleContacts(), logo: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_3__["l"] })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-3" }, this.showContacts(this.contactsVisible)), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col white-col" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "chat" }, this.showChat(this.dialogVisible))), this.showProfile(this.profileVisible))))));
    }
    /**
     * Метод, который выводит необходимый чат
     * @param content
     */
    showChat(content) {
        switch (content) {
            case "showChat":
                return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-direct", { onVisibleUserProfile: () => {
                        this.visibleProfile();
                    }, onSearchPersonalMessage: () => this.searchPersonalMessages(), message: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_3__["M"] }));
            case "noChat":
                return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-no-chat", null);
            //Компонент с версткой копирования
            // <s-adam-copying></s-adam-copying>
        }
    }
    showProfile(item) {
        if (item === true) {
            return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-3" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-folders", { onClickToUserProfile: () => this.clickOnUserProfile(), onCreateFolder: (e) => this.createFolderHandler(e.detail), dialogs: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_3__["d"], theme: "comp" })));
        }
        else {
            return "";
        }
    }
    createFolderHandler(item) {
        console.log("createFolderHandler", item);
    }
    /**
     * Показать контакты или диалоги
     * @param item
     */
    showContacts(item) {
        if (item === true) {
            return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-dialogs", { onSearchDialogs: () => this.searchDialogs(), onClickToDialog: () => {
                    this.toggleChat();
                }, dialogs: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_3__["d"], categories: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_3__["c"], onClickToCategory: () => this.clickToCategory() }));
        }
        else {
            return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-contacts", { theme: "comp", contacts: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_3__["a"], disableInnerSearchContactState: this.disableInnerSearchContactState }));
        }
    }
    /**
     *
     */
    clickOnUserProfile() {
    }
    createFolder() {
    }
    /**
     * click to Link
     * */
    clickToLink() {
    }
    /**
     *
     */
    searchDialogs() {
    }
    /**
     *
     */
    searchPersonalMessages() {
    }
    /**
     *
     * @param detail
     */
    clickToCategory() {
    }
    /**
     * Метод для переключения на личный чат
     * @param detail
     */
    toggleChat() {
        this.dialogVisible = "showChat";
    }
    /**
     * Метод для открытия и закрытия личного профиля
     * @param detail
     */
    visibleProfile() {
        this.profileVisible = !this.profileVisible;
    }
    /**
     * Метод для переключения на контакты
     */
    visibleContacts() {
        this.contactsVisible = !this.contactsVisible;
    }
    /**
     *
     */
    clickToShowFoldersHandler() {
    }
};
SAdamChat.style = sAdamChatCss;

const sAdamContactsCss = ".contacts-column.sc-s-adam-contacts{background-color:#f7f8f9;padding:20px 20px 0 20px;height:100vh}.col-3.sc-s-adam-contacts{padding:0 !important}.contacts.sc-s-adam-contacts{overflow-y:auto;height:calc(100vh - 100px);padding-bottom:20px}.sc-s-adam-contacts::-webkit-scrollbar{width:0px;background:transparent}";

const SAdamContacts = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Тема для модульного/мобильного чата
         * */
        this.theme = "mobile";
    }
    /**
     * при изменении входящих контактов фильтрует данные заново
     * */
    watchContactsHandler(newValue) {
        this.filterContacts(this.lastSearchValue, newValue);
    }
    componentWillRender() {
        this.filterContacts(this.lastSearchValue);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-column" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list-header", { theme: this.theme, onSearchContact: (e) => this.filterContacts(e.detail) }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts" }, this.contactsFiltered.map((dialog) => {
            return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contact-card", { theme: this.theme, contact: dialog }));
        }))));
    }
    /**
     *
     * */
    filterContacts(value, allContacts = this.contacts) {
        this.lastSearchValue = value;
        if (!this.disableInnerSearchContactState) {
            this.contactsFiltered = Object(_index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["f"])(value, allContacts);
        }
    }
    static get watchers() { return {
        "contacts": ["watchContactsHandler"]
    }; }
};
SAdamContacts.style = sAdamContactsCss;

const sAdamDialogsCss = ".col-3.sc-s-adam-dialogs{padding:0 !important}.contacts-column.sc-s-adam-dialogs{background-color:#f7f8f9;padding:20px 20px 0 20px;height:100vh}.contacts.sc-s-adam-dialogs{overflow-y:auto;height:calc(100vh - 129px);padding-bottom:20px}.dialog.sc-s-adam-dialogs{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:30px 0;padding:20px 10px;cursor:pointer}.dialog.sc-s-adam-dialogs:hover{background-color:white}.dialog.sc-s-adam-dialogs:active{background-color:white}.dialog-photo.sc-s-adam-dialogs{width:40px;height:40px;background-size:cover;background-position:center;margin-right:15px}.dialog-message-caption.sc-s-adam-dialogs{font-weight:700;font-size:13px}.dialog-message-text.sc-s-adam-dialogs{font-size:12px;color:gray}.message-time.sc-s-adam-dialogs{font-size:10px;margin-left:auto;color:lightgray}.sc-s-adam-dialogs::-webkit-scrollbar{width:0px;background:transparent}";

const SAdamDialogs = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Массив с элементами диалога
         */
        this.dialogs = [];
        /**
         * Тема для модульного/мобильного чата
         * */
        this.theme = "mobile";
        /**
         * массив категорий диалогов
         */
        this.categories = [];
        this.clickToDialog = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
        this.searchDialogs = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialogs", 7);
        this.clickToCategory = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToCategory", 7);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-column" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list-header", { theme: "comp" }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-categories", { categories: this.categories }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts" }, this.dialogs.map((dialog) => {
            return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-card", { theme: "comp", mess: dialog });
        }))));
    }
};
SAdamDialogs.style = sAdamDialogsCss;

const sAdamDirectCss = ".chat-messages.sc-s-adam-direct{padding:40px 20px;overflow-y:auto;height:calc(100vh - 168px);position:relative}.sc-s-adam-direct::-webkit-scrollbar{width:0px;background:transparent}";

const SAdamDirect = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Личный диалог
         */
        this.message = [];
        this.visibleUserProfile = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "visibleUserProfile", 7);
        this.searchPersonalMessage = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchPersonalMessage", 7);
    }
    /**
     * меняет статус (присутстия собеседников или контакта) в чате
     * */
    // @Method() async updateChatPresenceState(item: ChatUserPresenceState) {
    //   this.chatPresenceState = item;
    // }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "direct-comp" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-personal-header", { chatPresenceState: this.chatPresenceState, chatActionState: this.chatActionState }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "chat-messages" }, this.message.map((message) => {
            return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-from", { message: message });
        })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-footer", null)));
    }
};
SAdamDirect.style = sAdamDirectCss;

const sAdamNavItemCss = ".c-chat.sc-s-adam-nav-item{color:#bacbe3}.hover-link.sc-s-adam-nav-item:hover{color:#6328f8;cursor:pointer}.hover-link.sc-s-adam-nav-item:active{color:#6328f8}.nav-item.sc-s-adam-nav-item{margin-bottom:20px}.nav-item-wrapper.sc-s-adam-nav-item{text-align:center}";

const SAdamNavItem = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visibleContacts = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "visibleContacts", 7);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nav-item-wrapper" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nav-item" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { onClick: () => this.visibleContactsHandler(), class: "c-chat c-chat-comment-alt hover-link" })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { target: "_blank", href: "https://github.com/almalib/ng-chat", class: "nav-item c-chat hover-link" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { "aria-hidden": "true", focusable: "false", "data-prefix": "fab", "data-icon": "github", class: "svg-inline--fa fa-github fa-w-16", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 496 512" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { fill: "currentColor", d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" })))));
    }
    /**
     * Показать личный профиль юзера
     */
    visibleContactsHandler() {
        this.visibleContacts.emit();
    }
};
SAdamNavItem.style = sAdamNavItemCss;

const sAdamNavigateCss = ".nav-column.sc-s-adam-navigate{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;padding-top:20px}.logo.sc-s-adam-navigate{width:50px;height:50px;background-size:cover;background-position:center;margin-bottom:50px;border-radius:100%;cursor:pointer}";

const SAdamNavigate = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visibleContacts = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "visibleContacts", 7);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nav-column" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logo border-radius", style: { backgroundImage: 'url(' + this.logo.logo + ')' } }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-nav-item", null)));
    }
};
SAdamNavigate.style = sAdamNavigateCss;

const sAdamNoChatCss = ".select-chat.sc-s-adam-no-chat{position:absolute;bottom:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);color:#8d8d8d}";

const SAdamNoChat = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "select-chat" }, "Please select a chat"));
    }
};
SAdamNoChat.style = sAdamNoChatCss;

const sAdamPersonalHeaderCss = ".header.sc-s-adam-personal-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;padding:20px;height:80px;border-bottom:1px solid #f7f8f9}.header-search-block.sc-s-adam-personal-header{padding:20px;border-bottom:1px solid #f7f8f9;height:80px}.user.sc-s-adam-personal-header{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.user-name.sc-s-adam-personal-header{font-weight:700}.online-marker.sc-s-adam-personal-header,.offline-marker.sc-s-adam-personal-header{width:10px;height:10px;border-radius:100%;background-color:#5dc969;margin-left:5px}.offline-marker.sc-s-adam-personal-header{background-color:#ccc}.search-message.sc-s-adam-personal-header,.settings.sc-s-adam-personal-header{color:#bacbe3;cursor:pointer}.search-message-wrapper.sc-s-adam-personal-header{width:100%;position:relative}.search-message-wrapper.sc-s-adam-personal-header input.sc-s-adam-personal-header{padding:10px 40px;width:100%;margin:0 auto;border:none;background-color:#f7f8f9;outline:none}.search-message-wrapper.sc-s-adam-personal-header .c-chat.sc-s-adam-personal-header{position:absolute;left:15px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer}.c-chat.sc-s-adam-personal-header{color:#bacbe3}.hover-link.sc-s-adam-personal-header:hover{color:#6328f8}.hover-link.sc-s-adam-personal-header:active{color:#6328f8}.nav-item.sc-s-adam-personal-header{margin-bottom:20px;cursor:pointer}.user-name-wrapper.sc-s-adam-personal-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;line-height:1}";

const SAdamPersonalHeader = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Стейт для переключения окна поиска сообщений
         */
        this.searchVisible = false;
        this.visibleUserProfile = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "visibleUserProfile", 7);
        this.searchPersonalMessage = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchPersonalMessage", 7);
        this.resetMessagesFilter = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "resetMessagesFilter", 7);
    }
    render() {
        return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.toggleHeader());
    }
    /**
     * Переключатель стейта
     */
    toggleSearchVisible() {
        this.searchVisible = !this.searchVisible;
        this.resetMessagesFilter.emit();
    }
    /**
     * Переключение шапки в личной переписке
     */
    toggleHeader() {
        if (this.searchVisible === false) {
            return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "search-message", onClick: () => this.toggleSearchVisible() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-search hover-link" })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-name-wrapper" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-name" }, this.getNameUser()), this.chatPresenceState === _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["b"].online
                ? (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "online-marker" })) : (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "offline-marker" }))), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-status", { chatActionState: this.chatActionState, chatPresenceState: this.chatPresenceState })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "settings", onClick: () => this.visibleUserProfileHandler() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-cog hover-link" }))));
        }
        else {
            return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-search-block" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "search-message-wrapper" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-arrow-left hover-link", onClick: () => this.toggleSearchVisible() }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { onInput: (e) => this.searchPersonalMessageHandler(e), type: "text", placeholder: "Search messages" }))));
        }
    }
    /**
     * Вывод имени юзера в шапке личной переписки
     * */
    getNameUser() {
        var _a;
        return (_a = this.openedDialog) === null || _a === void 0 ? void 0 : _a.name;
        // let name = "";
        //
        // this.message.forEach((item) => {
        //   if (name.indexOf(item.sender.name) === -1) {
        //     name = item.sender.name;
        //   }
        // });
        //
        // return name;
    }
    /**
     * Показать личный профиль юзера
     */
    visibleUserProfileHandler() {
        this.visibleUserProfile.emit();
    }
    /**
     * Поиск сообщений в личной переписке
     * @param e
     */
    searchPersonalMessageHandler(e) {
        this.searchPersonalMessage.emit(e.target.value);
    }
};
SAdamPersonalHeader.style = sAdamPersonalHeaderCss;

const userFoldersCss = ".folders-wrapper.sc-user-folders{background-color:#f7f8f9;padding:20px;overflow:auto}.sc-user-folders::-webkit-scrollbar{width:0px;background:transparent}.folders-title.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #cccccc;padding:0px 20px;padding-bottom:20px;margin:0px -20px}.folders-title.sc-user-folders .title.sc-user-folders{padding-left:20px}.folders-title.sc-user-folders .left.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}.folders-title.sc-user-folders .right.sc-user-folders{cursor:pointer}.left-back.sc-user-folders{cursor:pointer}.left-back.sc-user-folders i.sc-user-folders{color:#979eab;-webkit-transition:0.3s ease;transition:0.3s ease;width:14px}.advice.sc-user-folders{padding:10px;font-size:14px;background-color:#ececec;color:grey;margin-top:30px}.user-folders-block.sc-user-folders{background:white;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding:10px 10px}.user-folders-block.sc-user-folders .c-chat.sc-user-folders{width:16px;text-align:center;cursor:pointer}.user-social-title.sc-user-folders,.media-title.sc-user-folders{font-weight:600;font-size:14px;margin-bottom:10px}.user-folder.sc-user-folders{margin-top:30px}.user-folder-link.sc-user-folders{padding:10px 0px;font-size:14px;cursor:pointer}.user-folders-blocks.sc-user-folders{background-color:#fff;max-height:360px;overflow:auto}.comp.sc-user-folders .user-folders-blocks.sc-user-folders{max-height:none;height:calc(100vh - 390px);min-height:121px}.user-folders-blocks.sc-user-folders ul.sc-user-folders li.sc-user-folders{list-style:none;cursor:pointer;font-size:14px;font-weight:600;color:#8d8d8d;-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-user-folders:hover{color:#4c567d;border-bottom:1px solid #4c567d}.list-item-wrapper.sc-user-folders{display:-ms-flexbox;display:flex;width:100%;border-bottom:1px solid #ccc;padding:10px;-ms-flex-align:center;align-items:center;-webkit-transition:0.3s ease;transition:0.3s ease;cursor:pointer}.list-item-wrapper.sc-user-folders input.sc-user-folders{margin-right:20px;margin-left:10px;font-size:16px}.list-folders.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.delete-folder.sc-user-folders{width:40px;text-align:center;border-bottom:1px solid #ccc;padding:10px;-webkit-transition:0.3s ease;transition:0.3s ease;font-size:16px}.delete-folder.sc-user-folders:hover{border-bottom:1px solid darkred;color:darkred}.user-folders.sc-user-folders{margin:30px 0px}.user-folders-title.sc-user-folders{margin-bottom:10px}.folders-content.sc-user-folders{height:100vh;overflow:auto}.user-social-title.sc-user-folders{font-weight:600;font-size:14px;margin-bottom:10px;color:#4c567d}.user-social-name.sc-user-folders{font-size:14px;font-weight:600;color:#8d8d8d}.creating-folder-block.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.creating-folder-block.sc-user-folders form.sc-user-folders{width:100%}.creating-folder-block.sc-user-folders i.sc-user-folders{color:#4c567d}.creating-folder-block.sc-user-folders input.sc-user-folders{border:none;padding:10px;outline:none;width:100%}.icon-new-folder.sc-user-folders{width:20px;text-align:center}.icon-new-folder.sc-user-folders i.sc-user-folders{color:#bacbe3;-webkit-transition:0.3s ease;transition:0.3s ease}.icon-new-folder.sc-user-folders i.sc-user-folders:hover{color:#6328f8}.main-icon.sc-user-folders{margin-top:30px;text-align:center}.main-icon.sc-user-folders i.sc-user-folders{font-size:56px}";

const UserFolders = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Задаем стиль для мобильной/пк версии
         * */
        this.theme = "mobile";
        this.clickToUserProfile = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToUserProfile", 7);
        this.createFolder = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "createFolder", 7);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "folders-wrapper" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "folders-title" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "left", onClick: () => this.clickToUserProfileHandler() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "left-back" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-arrow-left" })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title" }, "\u041F\u0430\u043F\u043A\u0438")), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "right" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { onClick: () => this.createFolderFromButton() }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "main-icon" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat sc-btn-wrapper c-chat-folder" })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "folders-content" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-folder" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-folders-block" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "creating-folder-block" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", { onSubmit: (e) => this.creatingFolderFromInputHandler(e) }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438", ref: (el) => (this.inputElement = el) })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "icon-new-folder" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat sc-btn-wrapper c-chat-folder", onClick: () => this.showInputCreateFolderHandler() }))))), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-folder" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-folders-title user-social-title" }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0442\u044B"), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-folders-blocks" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Dialogs, { dialog: this.dialogs }))))))));
    }
    /**
     * показывать инпут для создания папки
     * */
    showInputCreateFolderHandler() {
        this.showInputCreateFolderState = !this.showInputCreateFolderState;
    }
    /**
     *проверка и отправка данных на создание папки
     * */
    creatingFolderHandler() {
        const input = this.inputElement;
        if (input.value !== "") {
            this.createFolder.emit({
                name: input.value,
                chats: [],
            });
            input.value = "";
        }
    }
    /**
     * create folder from send button
     * */
    createFolderFromButton() {
        this.creatingFolderHandler();
    }
    /**
     *
     * */
    creatingFolderFromInputHandler(e) {
        e.preventDefault();
        this.creatingFolderHandler();
    }
    /**
     * переход на профиль пользователя
     * */
    clickToUserProfileHandler() {
        this.clickToUserProfile.emit();
    }
    /**
     * выводим класс
     * */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
};
const Dialogs = (props) => {
    return props.dialog.map((item) => {
        // if (item.id !== "all") {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list-folders" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list-item-wrapper" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "checkbox", id: item.name }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { htmlFor: item.name }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, item.name))))));
        // }
    });
};
UserFolders.style = userFoldersCss;

const userStatusCss = ".status-user.sc-user-status span.sc-user-status{color:#4c567d;font-size:14px}.module.sc-user-status .status-user.sc-user-status{margin-bottom:-7px}.user-writing.sc-user-status{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes blink{0%{opacity:0.2}20%{opacity:1}100%{opacity:0.2}}@keyframes blink{0%{opacity:0.2}20%{opacity:1}100%{opacity:0.2}}.user-saving.sc-user-status span.sc-user-status{-webkit-animation-name:blink;animation-name:blink;-webkit-animation-duration:1.4s;animation-duration:1.4s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-fill-mode:both;animation-fill-mode:both}.user-saving.sc-user-status span.sc-user-status:nth-child(2){-webkit-animation-delay:0.2s;animation-delay:0.2s}.user-saving.sc-user-status span.sc-user-status:nth-child(3){-webkit-animation-delay:0.4s;animation-delay:0.4s}";

const UserStatus = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Тема для блока
         * */
        this.theme = "comp";
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])(StatusBlockElement, { chatActionState: this.chatActionState, chatPresenceState: this.chatPresenceState })));
    }
    /**
     * Метод выобра темы для ПК/Мобильная/Модульной версии
     * */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
};
const ChatAnimationDots = (props) => {
    return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-saving" }, props.text, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "."), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "."), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, ".")));
};
/**
 * Компонент для вывода статуса действий
 * */
const UserActionStateElement = (props) => {
    switch (props.chatActionState) {
        case _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["c"].writing:
            return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-writing" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ChatAnimationDots, { text: "\u043F\u0435\u0447\u0430\u0442\u0430\u0435\u0442" })));
        case _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["c"].audioRecording:
            return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "user-writing" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ChatAnimationDots, { text: "\u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u0430\u0443\u0434\u0438\u043E" })));
        default:
            return "";
    }
};
/**
 * Компонент для вывода статуса присутствия пользоватея
 * */
const UserPresenceStateElement = (props) => {
    switch (props.chatPresenceState) {
        case _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["b"].online:
            return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "last-seen" }, "\u043E\u043D\u043B\u0430\u0439\u043D");
        default:
            return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "last-seen" }, "\u0431\u044B\u043B \u043D\u0435\u0434\u0430\u0432\u043D\u043E");
    }
};
/**
 * Компонент контроллер
 * */
const StatusBlockElement = (props) => {
    return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "status-user" }, props.chatActionState ? (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])(UserActionStateElement, { chatActionState: props.chatActionState })) : (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])(UserPresenceStateElement, { chatPresenceState: props.chatPresenceState }))));
};
UserStatus.style = userStatusCss;




/***/ })

}]);
//# sourceMappingURL=stencil-contact-card_21-entry-js-es2015.js.map