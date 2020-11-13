(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-module-chat-entry-js"],{

/***/ "./node_modules/s-chat/dist/esm/index-582bc2f2.js":
/*!********************************************************!*\
  !*** ./node_modules/s-chat/dist/esm/index-582bc2f2.js ***!
  \********************************************************/
/*! exports provided: C, a, b, c, d, e, f, g, h, i, j, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return ChatMessageDirectionEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChatUserPresenceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ChatUserActionStatusState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createTextMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ChatViewToShowEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return filterContactBySearchValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return filterDialogsBySearchValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return filterDialogsByCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return filterMessageBySearchValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return chatConvertWritingStatusToMessage; });
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

/***/ "./node_modules/s-chat/dist/esm/module-chat.entry.js":
/*!***********************************************************!*\
  !*** ./node_modules/s-chat/dist/esm/module-chat.entry.js ***!
  \***********************************************************/
/*! exports provided: module_chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "module_chat", function() { return ModuleChat; });
/* harmony import */ var _index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-063f1606.js */ "./node_modules/s-chat/dist/esm/index-063f1606.js");
/* harmony import */ var _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-582bc2f2.js */ "./node_modules/s-chat/dist/esm/index-582bc2f2.js");
/* harmony import */ var _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-5b093f4b.js */ "./node_modules/s-chat/dist/esm/mock-5b093f4b.js");




const moduleChatCss = "";

const ModuleChat = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.messages = _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["M"];
        this.dialogs = _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["d"];
        this.dictionary = _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["D"];
    }
    componentDidLoad() {
        window['ref'] = this.ref;
        setInterval(() => {
            // console.log(
            //   'messages setInterval',
            //
            // );
            this.messages = [..._mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["M"]];
            this.dialogs = [..._mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["d"]];
            this.dictionary = this.dictionary === _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["D"] ? _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["b"] : _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["D"];
            // console.log(
            //   'updated dictionary',
            //   this.dictionary
            // );
            // @ts-ignore
            Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["f"])(this.ref2);
        }, 10000);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("cnt-module-chat", { ref: (el) => this.ref = el, categories: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["c"], dialogs: this.dialogs, contacts: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["a"], dictionary: this.dictionary, message: this.messages, onClickToDialog: (ev) => this.clickToDialog(ev.detail), onSendTextMessage: (ev) => this.sendTextMessage(ev.detail), onShowFullChat: (ev) => this.showFullChat(ev.detail), disableInnerSearchDialogsState: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["e"], disableInnerSearchMessagesState: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["f"] }));
    }
    clickToDialog(dialog) {
        this.messages = _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["M"].map((message) => (Object.assign(Object.assign({}, message), { content: (message.direction !== _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_1__["C"].center &&
                message.type === _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_1__["a"].text)
                ? `${dialog.name}> ${message.content}`
                : message.content })));
        // console.log(
        //   'clickToDialog [12]',
        //   dialog
        // );
    }
    showFullChat(ev) {
        return ev;
        // console.log(
        //   'showFullChat',
        //   ev
        // )
    }
    sendTextMessage(message) {
        // console.log(
        //   'sendTextMessage [2]',
        //   message
        // );
        this.messages = [
            ...this.messages,
            Object(_index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_1__["d"])(message, {
                uid: "test-id-2",
                icon: "https://via.placeholder.com/60x60?text=User",
                name: "Адам",
                phone: "79291234567",
            })
        ];
    }
    get ref2() { return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
ModuleChat.style = moduleChatCss;




/***/ })

}]);
//# sourceMappingURL=stencil-module-chat-entry-js-es2015.js.map