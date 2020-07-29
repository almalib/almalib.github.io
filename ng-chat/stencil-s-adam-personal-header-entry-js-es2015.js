(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-personal-header-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/index-bfa1c413.js":
/*!**************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/index-bfa1c413.js ***!
  \**************************************************************/
/*! exports provided: C, a, b, c, d, e, f, g, h, i, j, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return ChatMessageDirectionEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChatUserPresenceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return chatConvertWritingStatusToMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ChatUserActionStatusState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createTextMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return filterContactBySearchValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ChatViewToShowEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return filterDialogsBySearchValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return filterDialogsByCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return filterMessageBySearchValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return scrollToBot; });
/**
 *
 * */
var ChatMessageDirectionEnum;
(function (ChatMessageDirectionEnum) {
    /**
     * сообщения написал кто то другой, и получено мною
     * */
    ChatMessageDirectionEnum[ChatMessageDirectionEnum["toMe"] = 0] = "toMe";
    /**
     * сообщения написал я
     * */
    ChatMessageDirectionEnum[ChatMessageDirectionEnum["fromMe"] = 1] = "fromMe";
    /**
     * сообщения которое будет отображаться в центре
     * */
    ChatMessageDirectionEnum[ChatMessageDirectionEnum["center"] = 2] = "center";
})(ChatMessageDirectionEnum || (ChatMessageDirectionEnum = {}));
/**
 *
 * */
var ChatMessageTypeEnum;
(function (ChatMessageTypeEnum) {
    /**
     * сообщения написал кто то другой, и получено мною
     * */
    ChatMessageTypeEnum["text"] = "text";
    /**
     * аудио сообщения записанное самим пользователем
     * */
    ChatMessageTypeEnum["liveAudio"] = "live-audio";
    /**
     * аудио сообщение любое которое не записано самим пользователем
     * */
    ChatMessageTypeEnum["audio"] = "audio";
    /**
     * фотка сделанная на устройстве пользователя и отправленная сразу
     * */
    ChatMessageTypeEnum["liveImage"] = "live-image";
    /**
     * фотка из устройства отправителя
     * */
    ChatMessageTypeEnum["image"] = "image";
    /**
     * видео сделанная на устройстве пользователя и отправленная сразу
     * */
    ChatMessageTypeEnum["liveVideo"] = "live-video";
    /**
     * видео из устройства отправителя
     * */
    ChatMessageTypeEnum["video"] = "video";
    /**
     * файл из устройства отправителя
     * */
    ChatMessageTypeEnum["file"] = "file";
    /**
     * timestamp
     * */
    ChatMessageTypeEnum["date"] = "date";
    /**
     * Печатает сообщение
     */
    ChatMessageTypeEnum["loading"] = "loading";
})(ChatMessageTypeEnum || (ChatMessageTypeEnum = {}));
var ChatLinkTypeEnum;
(function (ChatLinkTypeEnum) {
    ChatLinkTypeEnum["showFile"] = "showFile";
    ChatLinkTypeEnum["showDialogs"] = "showDialogs";
    ChatLinkTypeEnum["showPersonalDialog"] = "showPersonalDialog";
    ChatLinkTypeEnum["userNamePersonal"] = "user-name-personal";
    ChatLinkTypeEnum["addDialog"] = "\"add-dialog\"";
    ChatLinkTypeEnum["fromMobileContacts"] = "\"contacts\"";
    ChatLinkTypeEnum["fromMobileMenuBar"] = "menu-bar";
})(ChatLinkTypeEnum || (ChatLinkTypeEnum = {}));
/**
 *
 * */
function chatConvertWritingStatusToMessage(writing) {
    return {
        /**
         * содержимое сообщения
         * */
        content: null,
        /**
         * тип сообщения
         * */
        type: ChatMessageTypeEnum.loading,
        /** время создание */
        time: {
            /** время создания */
            created: Date.now(),
        },
        /**
         * направления сообщения
         * */
        direction: ChatMessageDirectionEnum.toMe,
        /**
         * отправитель
         * */
        sender: {
            uid: writing.uid,
            icon: writing.icon,
            name: writing.name,
            phone: writing.phone,
        },
    };
}
// /**
//  * dialogue search
//  * */
//  export function ChatSearchDialog(value: string) {
//   if (!this.disableInnerSearchDialogs) {
//     this.dialogsState = filterDialogsBySearchValue(
//       value,
//       this.dialogs
//     );
//   }
// }
// /**
//  * search for private messages
//  * */
//  export function ChatSearchPersonalMessages(value: string ) {
//   if (!this.disableInnerSearchMessages) {
//     this.messageState = filterMessageBySearchValue(
//       value,
//       this.message
//     )
//   }
// }
/**
 * создание текстового сообщения
 * */
function createTextMessage(text, sender, options) {
    return createMessage(ChatMessageTypeEnum.text, text, sender, options);
}
/**
 * создание сообщения
 * */
function createMessage(type, content, sender, options) {
    var _a, _b, _c, _d, _e, _f, _g;
    return {
        content: content,
        sender: sender,
        type: type,
        direction: (_a = options === null || options === void 0 ? void 0 : options.direction) !== null && _a !== void 0 ? _a : ChatMessageDirectionEnum.fromMe,
        time: {
            created: (_c = (_b = options === null || options === void 0 ? void 0 : options.time) === null || _b === void 0 ? void 0 : _b.created) !== null && _c !== void 0 ? _c : new Date(),
            delivery: (_e = (_d = options === null || options === void 0 ? void 0 : options.time) === null || _d === void 0 ? void 0 : _d.created) !== null && _e !== void 0 ? _e : null,
            read: (_g = (_f = options === null || options === void 0 ? void 0 : options.time) === null || _f === void 0 ? void 0 : _f.created) !== null && _g !== void 0 ? _g : null
        },
    };
}
/**
 * filter message by search value
 * */
function filterMessageBySearchValue(value, message) {
    return value
        ? message.filter((item) => {
            return typeof item.content === "string"
                ? item.content.toLowerCase().includes(value.toLowerCase())
                : false;
        })
        : message;
}
/**
 * filter dialogs by search value
 * */
function filterDialogsBySearchValue(value, dialogs) {
    return value
        ? dialogs.filter((item) => {
            return typeof item.name === "string"
                ? item.name.toLowerCase().includes(value.toLowerCase())
                : false;
        })
        : dialogs;
}
/**
 * filter contact by search value
 * */
function filterContactBySearchValue(value, contacts) {
    return value
        ? contacts.filter((item) => {
            return typeof item.name === "string"
                ? item.name.toLowerCase().includes(value.toLowerCase())
                : false;
        })
        : contacts;
}
/**
 * filter dialogs by category id
 * */
function filterDialogsByCategory(category, dialogs) {
    return (category && category.id !== "all")
        ? dialogs.filter((dialog) => dialog.category === category.id)
        : dialogs;
}
var ChatViewToShowEnum;
(function (ChatViewToShowEnum) {
    ChatViewToShowEnum["files"] = "files";
    ChatViewToShowEnum["dialogs"] = "dialogs";
    ChatViewToShowEnum["personal"] = "personal";
    ChatViewToShowEnum["profile"] = "profile";
    ChatViewToShowEnum["users"] = "users";
    ChatViewToShowEnum["contacts"] = "contacts";
    ChatViewToShowEnum["folders"] = "folders";
})(ChatViewToShowEnum || (ChatViewToShowEnum = {}));
var ChatUserActionStatusState;
(function (ChatUserActionStatusState) {
    ChatUserActionStatusState["writing"] = "writing";
    ChatUserActionStatusState["audioRecording"] = "audio-recording";
})(ChatUserActionStatusState || (ChatUserActionStatusState = {}));
var ChatUserPresenceState;
(function (ChatUserPresenceState) {
    ChatUserPresenceState[ChatUserPresenceState["offline"] = 0] = "offline";
    ChatUserPresenceState[ChatUserPresenceState["online"] = 1] = "online";
})(ChatUserPresenceState || (ChatUserPresenceState = {}));
function scrollToBot(scrollContainer, options) {
    var _a;
    const timer = (_a = options === null || options === void 0 ? void 0 : options.timer) !== null && _a !== void 0 ? _a : 100, y = options === null || options === void 0 ? void 0 : options.y, cb = () => {
        scrollContainer.scrollBy(0, y !== null && y !== void 0 ? y : scrollContainer.scrollHeight);
    };
    if (timer) {
        setTimeout(cb, timer);
    }
    else {
        cb();
    }
}




/***/ }),

/***/ "./node_modules/stencil-chat/dist/esm/s-adam-personal-header.entry.js":
/*!****************************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/s-adam-personal-header.entry.js ***!
  \****************************************************************************/
/*! exports provided: s_adam_personal_header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_personal_header", function() { return SAdamPersonalHeader; });
/* harmony import */ var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-53235049.js */ "./node_modules/stencil-chat/dist/esm/index-53235049.js");
/* harmony import */ var _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-bfa1c413.js */ "./node_modules/stencil-chat/dist/esm/index-bfa1c413.js");



const sAdamPersonalHeaderCss = ".header.sc-s-adam-personal-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;padding:20px;height:80px;border-bottom:1px solid #f7f8f9}.header-search-block.sc-s-adam-personal-header{padding:20px;border-bottom:1px solid #f7f8f9;height:80px}.user.sc-s-adam-personal-header{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.user-name.sc-s-adam-personal-header{font-weight:700}.online-marker.sc-s-adam-personal-header,.offline-marker.sc-s-adam-personal-header{width:10px;height:10px;border-radius:100%;background-color:#5dc969;margin-left:5px}.offline-marker.sc-s-adam-personal-header{background-color:#ccc}.search-message.sc-s-adam-personal-header,.settings.sc-s-adam-personal-header{color:#bacbe3;cursor:pointer}.search-message-wrapper.sc-s-adam-personal-header{width:100%;position:relative}.search-message-wrapper.sc-s-adam-personal-header input.sc-s-adam-personal-header{padding:10px 40px;width:100%;margin:0 auto;border:none;background-color:#f7f8f9;outline:none}.search-message-wrapper.sc-s-adam-personal-header .c-chat.sc-s-adam-personal-header{position:absolute;left:15px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer}.c-chat.sc-s-adam-personal-header{color:#bacbe3}.hover-link.sc-s-adam-personal-header:hover{color:#6328f8}.hover-link.sc-s-adam-personal-header:active{color:#6328f8}.nav-item.sc-s-adam-personal-header{margin-bottom:20px;cursor:pointer}.user-name-wrapper.sc-s-adam-personal-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;line-height:1}";

const SAdamPersonalHeader = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Стейт для переключения окна поиска сообщений
         */
        this.searchVisible = false;
        this.visibleUserProfile = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "visibleUserProfile", 7);
        this.searchPersonalMessage = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchPersonalMessage", 7);
        this.resetMessagesFilter = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "resetMessagesFilter", 7);
    }
    render() {
        return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.toggleHeader());
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
            return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "search-message", onClick: () => this.toggleSearchVisible() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-search hover-link" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-name-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-name" }, this.getNameUser()), this.chatPresenceState === _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["b"].online
                ? (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "online-marker" })) : (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "offline-marker" }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-status", { chatActionState: this.chatActionState, chatPresenceState: this.chatPresenceState })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "settings", onClick: () => this.visibleUserProfileHandler() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-cog hover-link" }))));
        }
        else {
            return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-search-block" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "search-message-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-arrow-left hover-link", onClick: () => this.toggleSearchVisible() }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { onInput: (e) => this.searchPersonalMessageHandler(e), type: "text", placeholder: "Search messages" }))));
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




/***/ })

}]);
//# sourceMappingURL=stencil-s-adam-personal-header-entry-js-es2015.js.map