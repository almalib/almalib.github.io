(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~stencil-contact-card_24-entry-js~stencil-module-chat-entry-js~stencil-s-adam-chat-entry-js"],{

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

/***/ "./node_modules/stencil-chat/dist/esm/mock-2d06f4a2.js":
/*!*************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/mock-2d06f4a2.js ***!
  \*************************************************************/
/*! exports provided: D, M, a, b, c, d, e, f, l */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return DictionaryMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MessageMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DictionaryMockEng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return contacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dialogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return disableInnerSearchDialogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return disableInnerSearchMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return logo; });
/* harmony import */ var _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-bfa1c413.js */ "./node_modules/stencil-chat/dist/esm/index-bfa1c413.js");


const DictionaryMock = {
    module: {
        appName: "Модульный чат"
    },
    shared: {},
    comp: {},
};
const DictionaryMockEng = {
    module: {
        appName: "Module chat"
    },
    shared: {},
    comp: {},
};
const dialogs = [
    {
        id: 1,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Даниил Копылов',
        mess: 'Конфликтный гештальт',
        time: {
            created: new Date(),
        },
        newMessage: 4,
        category: 'work',
        online: true,
    },
    {
        id: 2,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Ярослав Кириллов',
        mess: 'Реакция, по определению, доступна.',
        time: {
            created: new Date(),
        },
        newMessage: 0,
        category: 'family',
        online: true,
    },
    {
        id: 3,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Марина Коновалова',
        mess: 'Чем больше люди узнают друг друга, тем больше воспитание',
        time: {
            created: new Date(),
        },
        newMessage: 3,
        category: 'friends',
        online: false,
    },
    {
        id: 4,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Алина Брагина',
        mess: 'Предсознательное стабильно. Рефлексия вызывает стимул. ',
        time: {
            created: new Date(),
        },
        newMessage: 0,
        category: 'friends',
        online: true,
    },
    {
        id: 5,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Иван Степанович',
        mess: 'Эскапизм осознаёт импульс.',
        time: {
            created: new Date(),
        },
        newMessage: 1,
        category: 'work',
        online: false,
    },
    {
        id: 6,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Элеонора Тимофеевна',
        mess: 'Психе выбирает закон. Психоз изменяем.',
        time: {
            created: new Date(),
        },
        newMessage: 2,
        category: 'work',
        online: true,
    },
    {
        id: 7,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Александра Дмитриевна',
        mess: 'Конформизм понимает психоз.',
        time: {
            created: new Date(),
        },
        newMessage: 1,
        category: 'work',
        online: false,
    },
    {
        id: 8,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Вадим Тимофеевич',
        mess: 'Как было показано выше, психоз притягивает',
        time: {
            created: new Date(),
        },
        newMessage: 0,
        category: 'family',
        online: true,
    },
    {
        id: 9,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Яков Даниилович',
        mess: 'Придерживаясь жестких принципов социального Дарвинизма',
        time: {
            created: new Date(),
        },
        newMessage: 1,
        category: 'interesting',
        online: false,
    },
    {
        id: 10,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Виктория Ильина',
        mess: 'Предсознательное вызывает позитивистский генезис.',
        time: {
            created: new Date(),
        },
        newMessage: 0,
        category: 'study',
        online: false,
    },
];
const categories = [
    {
        name: 'Все',
        id: 'all',
    },
    {
        name: 'Работа',
        id: 'work',
    },
    {
        name: 'Семья',
        id: 'family',
    },
    {
        name: 'Друзья',
        id: 'friends',
    },
    {
        name: 'Учеба',
        id: 'study',
    },
    {
        name: 'Интересное',
        id: 'interesting',
    },
    {
        name: 'Личное',
        id: 'self',
    },
    {
        name: 'Машины',
        id: 'auto',
    },
    {
        name: 'Игры',
        id: 'games',
    },
];
const MessageMock = [
    {
        content: "Привет, как дела?",
        sender: {
            uid: "test-id-1",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Сайхан",
            phone: "79291234567",
        },
        type: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["a"].text,
        direction: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["C"].toMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        sender: {
            uid: "test-id-1",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Сайхан",
            phone: "79291234567",
        },
        type: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["a"].text,
        direction: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["C"].toMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: "Олег подключился к чату",
        sender: {
            uid: "",
            icon: "",
            name: "",
            phone: "",
        },
        type: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["a"].text,
        direction: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["C"].center,
        time: {
            created: new Date(),
        },
    },
    {
        content: "https://via.placeholder.com/500",
        sender: {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Сайхан",
            phone: "79291234567",
        },
        type: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["a"].image,
        direction: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["C"].toMe,
        time: {
            created: new Date(),
            delivery: new Date(),
            read: new Date(),
        },
    },
    {
        content: 1593606947701,
        sender: {
            uid: "",
            icon: "",
            name: "",
            phone: "",
        },
        type: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["a"].date,
        direction: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["C"].center,
        time: {
            created: new Date(),
        },
    },
    {
        content: "Все гуд!",
        sender: {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Адам",
            phone: "79291234567",
        },
        type: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["a"].text,
        direction: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["C"].fromMe,
        time: {
            created: new Date(),
            delivery: new Date(),
            read: new Date(),
        },
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit df sss",
        sender: {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Адам",
            phone: "79291234567",
        },
        type: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["a"].text,
        direction: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["C"].fromMe,
        time: {
            created: new Date(),
            read: new Date(),
        },
    },
    {
        content: "https://via.placeholder.com/500",
        sender: {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Адам",
            phone: "79291234567",
        },
        type: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["a"].image,
        direction: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["C"].fromMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: "Где ты?",
        sender: {
            uid: "test-id-1",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Сайхан",
            phone: "79291234567",
        },
        type: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["a"].text,
        direction: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["C"].toMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: "Чат пилю",
        sender: {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Адам",
            phone: "79291234567",
        },
        type: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["a"].text,
        direction: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["C"].fromMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: "Прикинь, я тоже",
        sender: {
            uid: "test-id-1",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Сайхан",
            phone: "79291234567",
        },
        type: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["a"].text,
        direction: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_0__["C"].toMe,
        time: {
            created: new Date(),
        },
    }
];
const logo = {
    id: "logo",
    logo: "https://via.placeholder.com/100x100?text=Text",
};
// export const titleModule = {
//   id: 'modal',
//   title: 'Модульный чат'
// }
// export const navItems = [
//   {
//     id: 1,
//     icon: "c-chat c-chat-comment-alt",
//   },
//   {
//     id: 2,
//     icon: "c-chat c-chat-shopping-bag",
//   },
//   {
//     id: 3,
//     icon: "c-chat c-chat-cart-arrow-down",
//   },
//   {
//     id: 4,
//     icon: "c-chat c-chat-calendar-alt",
//   },
//   {
//     id: 5,
//     icon: "c-chat c-chat-cog",
//   },
// ];
const contacts = [
    {
        id: 1,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Randolph Newman",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 2,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Harry Sutton",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 3,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Matthew Jake Sanchez",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 4,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Isaac Jack King",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 5,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Joseph Samuel Johnson",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 6,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Mike Vazovski",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 7,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Dominic Mason",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 8,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Blake David",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 9,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Joseph Samuel Johnson",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 10,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Alejandro Kyle Jenkins",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 11,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Hunter Joshua Coleman",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 12,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Jordan Isaiah Martinez",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
];
const disableInnerSearchDialogs = false;
const disableInnerSearchMessages = false;




/***/ })

}]);
//# sourceMappingURL=default~stencil-contact-card_24-entry-js~stencil-module-chat-entry-js~stencil-s-adam-chat-entry-js-es2015.js.map