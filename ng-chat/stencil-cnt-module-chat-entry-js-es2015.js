(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-cnt-module-chat-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/cnt-module-chat.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/cnt-module-chat.entry.js ***!
  \*********************************************************************/
/*! exports provided: cnt_module_chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cnt_module_chat", function() { return CntModuleChat; });
/* harmony import */ var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-53235049.js */ "./node_modules/stencil-chat/dist/esm/index-53235049.js");
/* harmony import */ var _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-bfa1c413.js */ "./node_modules/stencil-chat/dist/esm/index-bfa1c413.js");
/* harmony import */ var _utils_4870d924_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils-4870d924.js */ "./node_modules/stencil-chat/dist/esm/utils-4870d924.js");




const cntModuleChatCss = ".wrapper-chat.sc-cnt-module-chat{-webkit-box-shadow:0 0 10px 1px #828282;box-shadow:0 0 10px 1px #828282;border-radius:10px;width:400px;overflow:hidden;height:calc(100vh - 130px);background-color:#fff}.m-chat-wrapper.sc-cnt-module-chat{height:calc(100vh - 170px)}.drop-file-wrapper.sc-cnt-module-chat{height:calc(100vh - 177px)}.content-chat.sc-cnt-module-chat .personal-wrapper.sc-cnt-module-chat .personal-message.sc-cnt-module-chat{height:calc(100vh - 370px)}.content-chat.sc-cnt-module-chat .personal-footer.sc-cnt-module-chat .footer-wrapper.sc-cnt-module-chat{border-radius:10px 10px 5px 5px}.content-chat.sc-cnt-module-chat .profile.sc-cnt-module-chat .mobile.sc-cnt-module-chat{height:100vh;overflow:auto}@media (max-width: 414px){.wrapper-chat.sc-cnt-module-chat{border-radius:0px}.wrapper-chat.sc-cnt-module-chat{width:414px;height:100vh}.content-chat.sc-cnt-module-chat .personal-wrapper.sc-cnt-module-chat .personal-message.sc-cnt-module-chat{height:calc(100vh - 215px)}}.wrapper-modal.sc-cnt-module-chat{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-direction:column;flex-direction:column;position:fixed;top:2%;right:2%;z-index:999}.message.sc-cnt-module-chat{font-size:14px;height:21px;overflow:hidden;width:260px;margin-top:5px;white-space:nowrap;cursor:pointer}.user.sc-cnt-module-chat{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:end;align-items:flex-end}.user-img.sc-cnt-module-chat{width:20%;margin:auto}.user-img.sc-cnt-module-chat .img.sc-cnt-module-chat{width:43px;height:43px;border-radius:50%;background-size:cover;margin:auto}.user-info.sc-cnt-module-chat{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:90%}.user-info.sc-cnt-module-chat .name.sc-cnt-module-chat{font-weight:500;font-size:13px}.sc-cnt-module-chat::-webkit-scrollbar{width:5px}.sc-cnt-module-chat::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);-webkit-border-radius:5px;border-radius:3px}.sc-cnt-module-chat::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:rgba(108, 108, 108, 0.8);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.5)}.sc-cnt-module-chat::-webkit-scrollbar-thumb:window-inactive{background:rgba(106, 106, 106, 0.4)}@media (max-width: 414px){.wrapper-modal.sc-cnt-module-chat{top:0%;right:0%;max-width:414px}.wrapper-chat.sc-cnt-module-chat{width:414px}.personal-messages.sc-cnt-module-chat{height:80vh}.users.sc-cnt-module-chat{height:80vh}.m-chat-wrapper.sc-cnt-module-chat{height:calc(100vh - 40px)}}@media (max-width: 375px){.wrapper-chat.sc-cnt-module-chat{max-width:375px;padding-right:0px}.users.sc-cnt-module-chat{padding:0px 10px}.new-mess.sc-cnt-module-chat{right:12%}}@media (max-width: 320px){.wrapper-chat.sc-cnt-module-chat{max-width:320px}.chat-header.sc-cnt-module-chat a.sc-cnt-module-chat{right:25%}.message-date.sc-cnt-module-chat{font-size:11px}.users.sc-cnt-module-chat{padding:0px 25px}.personal-messages.sc-cnt-module-chat{padding:0 10px}}";

const CntModuleChat = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        // /**
        //  * Заголовок для чата
        //  * */
        // @Prop() titleModule: TitleModuleInterface;
        /**
         * добавляем печатающий
         * */
        this.writing = [];
        /**
         * видимость
         * */
        this.visibleState = true;
        /**
         * select content default
         * */
        this.chatViewState = _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["g"].dialogs;
        //============================================================================================
        /**
         * Возможность записи аудио
         */
        this.canRecordAudio = false;
        /**
         * массив данных для контактов
         * */
        this.contactsState = this.contacts;
        /**
         * массив данных категорий
         * */
        this.categoriesState = this.categories;
        /**
         * массив данных диалогов
         * */
        this.dialogsState = this.dialogs;
        /**
         * массив данных персонального чата
         * */
        this.messageState = this.message;
        /**
         * Select show content
         * */
        this.ShowContent = (content) => {
            // console.log("ShowContent", content);
            switch (content) {
                case "dialogs":
                    return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-users-wrapper", { dialogs: this.dialogsState, categories: this.categoriesState, onClickToCategory: (item) => this.safeFiltersDialog(this.lastSearchDialog, item.detail, this.dialogs), onClickToDialog: (item) => this.clickToDialogHandler(item.detail), onClickToFilesBtn: () => this.clickToFilesBtnHandler(), onSearchDialog: (item) => this.safeFiltersDialog(item.detail, this.lastClickedCategory, this.dialogs), onSendNewMessModal: () => this.sendNewMessModal() }));
                case "personal":
                    return (
                    // <div class='drop-file-wrapper' >
                    //   <s-adam-copying></s-adam-copying>
                    // </div>
                    Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("module-personal", { chatPresenceState: this.chatPresenceState, openedDialog: this.openedDialog, chatActionState: this.chatActionState, writing: this.writing, canRecordAudio: this.canRecordAudio, onSendTextMessage: () => this.scrollMessageViewToBot(), dialogs: this.dialogsState, message: this.messageState, onSearchPersonalMessages: (e) => this.searchPersonalMessages(e.detail), onClickToShowDialogs: () => this.clickToShowDialogsHandler(), onClickToUserProfile: () => this.clickToUserProfileHandler(), onCancelSearchPersonal: () => this.cancelSearchPersonal() }));
                case "files":
                    return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-files-wrapper", {
                        // onClickToLink={(item) => this.clickToLink(item.detail)}
                        onClickToShowDialogs: () => this.clickToShowDialogsHandler()
                    }));
                case "profile":
                    return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-profile", { theme: "module", categories: this.categoriesState, onClickToShowDialogs: () => this.clickToShowDialogsHandler(), onClickToShowFolders: () => this.clickToShowFoldersHandler() }));
                case "contacts":
                    return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list", { theme: "module", contacts: this.contacts,
                        // onSearchContact={(detail) => this.searchContact({ detail })}
                        onClickToShowDialogs: () => this.clickToShowDialogsHandler() }));
                case "folders":
                    return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-folders", { onCreateFolder: (e) => this.createFolderHandler(e.detail), dialogs: this.dialogsState, onClickToUserProfile: () => this.clickToUserProfileHandler() }));
            }
        };
        this.showFullChat = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showFullChat", 7);
        this.createFolder = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "createFolder", 7);
        this.clickToDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
        this.sendTextMessage = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendTextMessage", 7);
        this.clickToFilesBtn = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToFilesBtn", 7);
        this.searchContact = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchContact", 7);
        this.chatViewStateChange = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "chatViewStateChange", 7);
    }
    /**
     * позволяет установить печатающие данные
     * */
    async setWritingState(item) {
        this.writing = item ? [item] : null;
    }
    /**
     * меняет статус (присутстия собеседников или контакта) в чате
     * */
    async updateChatPresenceState(item) {
        this.chatPresenceState = item;
    }
    /**
     * меняет статусы действия текущих (печатает, записывает и т.д.)
     * */
    async updateChatActionState(item) {
        this.chatActionState = item;
    }
    /**
     * скрывает весь блок что бы на экране не было вообще видно
     * */
    async hide() {
        this.visibleState = false;
    }
    /**
     * позволяет активировать/деактивароть возможность записи аудио
     * */
    async activeRecordAudioState(state) {
        this.canRecordAudio = state;
    }
    /**
     * позволяет активировать/деактивароть возможность октрытие приложение
     * */
    async activeShowFullChat(state) {
        this.disableShowFullChatState = !state;
    }
    /**
     * сменить окно показа
     * */
    async changeViewToShow(state) {
        this.chatViewState = state;
    }
    /**
     * скролит вниз окно сообщений
     * */
    async safeScrollToBotMessageView() {
        this.scrollMessageViewToBot();
    }
    /**
     * показывает весь блок после скрытия
     * */
    async show() {
        // show a prompt
        this.visibleState = true;
    }
    /**
     * показывает только кнопку
     * */
    async close() {
        this.showChat(false);
    }
    /**
     * открывает блок чатов
     * */
    async open() {
        this.showChat(true);
    }
    /**
     * */
    async openDialog(dialog) {
        this.open();
        this.clickToDialogHandler(dialog, true);
    }
    watchDictionaryHandler(newValue) {
        this.updateDictionary(newValue);
    }
    watchDialogsHandler(newValue) {
        this.safeFiltersDialog(this.lastSearchDialog, this.lastClickedCategory, newValue);
    }
    watchMessageHandler(newValue, oldValue) {
        console.log("The new value of activated is: ", { newValue, oldValue });
        this.messageState = this.message;
    }
    watchCategoriesHandler(newValue) {
        this.categoriesState = newValue;
        this.safeFiltersDialog(this.lastSearchDialog, this.lastClickedCategory, this.dialogs);
    }
    componentDidLoad() {
        this.updateDictionary(this.dictionary);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["H"], { style: { display: !this.visibleState ? "none" : null } }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "wrapper-modal" }, this.openState ? (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "wrapper-chat" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("module-header", { disableShowFullChatState: this.disableShowFullChatState, onShowFullChat: () => this.showFullChatHandler(), onClose: () => this.onClose() }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "m-chat-wrapper" }, this.ShowContent(this.chatViewState)))) : (""), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("btn-wrapper", { onClickToShowChat: () => this.showChat(), showChat: this.openState, dialogs: this.countNewMess(this.dialogs) }))));
    }
    /**
     *
     * */
    updateDictionary(newValue) {
        _utils_4870d924_js__WEBPACK_IMPORTED_MODULE_2__["a"].dictionary$.next(newValue);
        // console.log("changed - dictionary");
    }
    countNewMess(array) {
        let counter = 0;
        array.map((item) => {
            counter += item.newMessage;
        });
        return counter;
    }
    /**
     * */
    // public clickToCategory(value: ChatCategoryInterface) {
    //   this.dialogsState = filterDialogsByCategory(value, this.dialogs);
    // }
    /**
     * dialogue search
     * */
    safeFiltersDialog(searchValue, category, allDialogs) {
        this.lastSearchDialog = searchValue;
        this.lastClickedCategory = category;
        let filteredDialogsBySearchValue = allDialogs;
        if (!this.disableInnerSearchDialogsState) {
            filteredDialogsBySearchValue = Object(_index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["h"])(searchValue, allDialogs);
        }
        this.dialogsState = Object(_index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["i"])(category, filteredDialogsBySearchValue);
    }
    /**
     * search for private messages
     * */
    searchPersonalMessages(value) {
        if (!this.disableInnerSearchMessagesState) {
            this.messageState = Object(_index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["j"])(value, this.message);
        }
    }
    createFolderHandler(item) {
        return item;
        // console.log("createFolderHandler", item);
    }
    /**
     * Метод отмена поиска
     * **/
    cancelSearchPersonal() {
        this.messageState = this.message;
    }
    /**
     * Метод для изменения состояния чата
     * */
    showChat(state = !this.openState) {
        this.openState = state;
    }
    /**
     * Метод для закрытия чата
     * */
    onClose() {
        this.openState = false;
    }
    /**
     * click to Link
     * */
    clickToLinkHandler() {
        return this.chatViewState;
    }
    /**
     *
     * */
    clickToDialogHandler(dialog, pseudoClick) {
        if (pseudoClick) {
            this.clickToDialog.emit(dialog);
        }
        this.openedDialog = dialog;
        this.updateViewState(_index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["g"].personal);
    }
    /**
     *
     * */
    clickToFilesBtnHandler() {
        this.updateViewState(_index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["g"].files);
    }
    /**
     *
     * */
    showFullChatHandler() {
        this.showFullChat.emit({
            view: this.chatViewState,
            data: this.chatViewState === _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["g"].personal
                ? this.openedDialog
                : null,
        });
    }
    /**
     *
     * */
    clickToShowDialogsHandler() {
        this.updateViewState(_index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["g"].dialogs);
    }
    /**
     *
     * */
    clickToUserProfileHandler() {
        this.updateViewState(_index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["g"].profile);
    }
    /**
     *
     * */
    sendNewMessModal() {
        this.updateViewState(_index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["g"].contacts);
    }
    /**
     *
     * */
    clickToShowFoldersHandler() {
        this.updateViewState(_index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["g"].folders);
    }
    /**
     *
     * */
    scrollMessageViewToBot() {
        _utils_4870d924_js__WEBPACK_IMPORTED_MODULE_2__["C"].safeScrollToBot();
    }
    /**
     * */
    updateViewState(state) {
        this.chatViewStateChange.emit((this.chatViewState = state));
    }
    get el() { return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
    static get watchers() { return {
        "dictionary": ["watchDictionaryHandler"],
        "dialogs": ["watchDialogsHandler"],
        "message": ["watchMessageHandler"],
        "categories": ["watchCategoriesHandler"]
    }; }
};
CntModuleChat.style = cntModuleChatCss;




/***/ }),

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




/***/ })

}]);
//# sourceMappingURL=stencil-cnt-module-chat-entry-js-es2015.js.map