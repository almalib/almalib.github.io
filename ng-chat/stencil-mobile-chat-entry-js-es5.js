function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-mobile-chat-entry-js"], {
  /***/
  "./node_modules/s-chat/dist/esm/index-582bc2f2.js":
  /*!********************************************************!*\
    !*** ./node_modules/s-chat/dist/esm/index-582bc2f2.js ***!
    \********************************************************/

  /*! exports provided: C, a, b, c, d, e, f, g, h, i, j, s */

  /***/
  function node_modulesSChatDistEsmIndex582bc2f2Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "C", function () {
      return ChatMessageDirectionEnum;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return ChatMessageTypeEnum;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return ChatUserPresenceState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return ChatUserActionStatusState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return createTextMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "e", function () {
      return ChatViewToShowEnum;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "f", function () {
      return filterContactBySearchValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return filterDialogsBySearchValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return filterDialogsByCategory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "i", function () {
      return filterMessageBySearchValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "j", function () {
      return chatConvertWritingStatusToMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return scrollToBot;
    });
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
          created: Date.now()
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
          phone: writing.phone
        }
      };
    } // /**
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
        }
      };
    }
    /**
     * filter message by search value
     * */


    function filterMessageBySearchValue(value, message) {
      return value ? message.filter(function (item) {
        return typeof item.content === "string" ? item.content.toLowerCase().includes(value.toLowerCase()) : false;
      }) : message;
    }
    /**
     * filter dialogs by search value
     * */


    function filterDialogsBySearchValue(value, dialogs) {
      return value ? dialogs.filter(function (item) {
        return typeof item.name === "string" ? item.name.toLowerCase().includes(value.toLowerCase()) : false;
      }) : dialogs;
    }
    /**
     * filter contact by search value
     * */


    function filterContactBySearchValue(value, contacts) {
      return value ? contacts.filter(function (item) {
        return typeof item.name === "string" ? item.name.toLowerCase().includes(value.toLowerCase()) : false;
      }) : contacts;
    }
    /**
     * filter dialogs by category id
     * */


    function filterDialogsByCategory(category, dialogs) {
      return category && category.id !== "all" ? dialogs.filter(function (dialog) {
        return dialog.category === category.id;
      }) : dialogs;
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

      var timer = (_a = options === null || options === void 0 ? void 0 : options.timer) !== null && _a !== void 0 ? _a : 100,
          y = options === null || options === void 0 ? void 0 : options.y,
          cb = function cb() {
        scrollContainer.scrollBy(0, y !== null && y !== void 0 ? y : scrollContainer.scrollHeight);
      };

      if (timer) {
        setTimeout(cb, timer);
      } else {
        cb();
      }
    }
    /***/

  },

  /***/
  "./node_modules/s-chat/dist/esm/mobile-chat.entry.js":
  /*!***********************************************************!*\
    !*** ./node_modules/s-chat/dist/esm/mobile-chat.entry.js ***!
    \***********************************************************/

  /*! exports provided: mobile_chat */

  /***/
  function node_modulesSChatDistEsmMobileChatEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mobile_chat", function () {
      return MobileChat;
    });
    /* harmony import */


    var _index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-063f1606.js */
    "./node_modules/s-chat/dist/esm/index-063f1606.js");
    /* harmony import */


    var _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index-582bc2f2.js */
    "./node_modules/s-chat/dist/esm/index-582bc2f2.js");
    /* harmony import */


    var _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mock-5b093f4b.js */
    "./node_modules/s-chat/dist/esm/mock-5b093f4b.js");

    var mobileChatCss = ".temp.sc-mobile-chat{width:414px;height:708px;overflow:hidden;margin:auto;border:5px solid #4c567d;border-radius:20px;position:absolute;left:0;right:0;-webkit-transform:translate(0, 15%);transform:translate(0, 15%);-webkit-box-shadow:15px 10px 40px 1px #4c567d;box-shadow:15px 10px 40px 1px #4c567d}.temp.sc-mobile-chat .m-chat-dialogs.sc-mobile-chat{height:63vh}.temp.sc-mobile-chat .personal-message.sc-mobile-chat{height:59vh}.sc-mobile-chat::-webkit-scrollbar{width:5px}.sc-mobile-chat::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);-webkit-border-radius:5px;border-radius:3px}.sc-mobile-chat::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:rgba(108, 108, 108, 0.8);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.5)}.sc-mobile-chat::-webkit-scrollbar-thumb:window-inactive{background:rgba(106, 106, 106, 0.4)}";

    var MobileChat = /*#__PURE__*/function () {
      function MobileChat(hostRef) {
        _classCallCheck(this, MobileChat);

        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Выбираем какой контент показывать
         * */

        this.showContent = "dialogs"; // profile
        // folders
        // contacts

        /**
         * массив данных для диалогов
         * */

        this.dialogs = _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["d"];
        /**
         * массив данных для контактов
         * */

        this.contacts = _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["a"];
        /**
         * массив данных личных диалогово
         * */

        this.message = _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["M"];
      }
      /**
       * click to Link
       * */


      _createClass(MobileChat, [{
        key: "clickToLink",
        value: function clickToLink(_ref) {
          var detail = _ref.detail;
          return detail; // console.log(detail);
        }
        /**
         * click to Link
         * */

      }, {
        key: "clickToDialog",
        value: function clickToDialog(_ref2) {
          var detail = _ref2.detail;
          return detail; // console.log("clickToDialog", detail);
        }
        /**
         * click to Link
         * */

      }, {
        key: "clickToContact",
        value: function clickToContact(_ref3) {
          var detail = _ref3.detail;
          return detail; // console.log("clickToContact", detail);
        }
        /**
         * Click to category filter
         * */

      }, {
        key: "clickToCategory",
        value: function clickToCategory(_ref4) {
          var detail = _ref4.detail;
          return detail; // console.log("clickToCategory", detail);
        }
        /**
         * Поиск контактов
         * */

      }, {
        key: "searchContact",
        value: function searchContact(e) {
          return e; // console.log("searchContact", e);
        }
        /**
         * Поиск среди диалогов
         * */

      }, {
        key: "searchDialogs",
        value: function searchDialogs(e) {
          return e; // console.log("searchDialogs", e.detail.detail);
        }
        /**
         * Поиск среди диалогов
         * */

      }, {
        key: "searchPersonalMessages",
        value: function searchPersonalMessages(e) {
          return e; // console.log("searchPersonalMessages", e);
        }
        /**
         * click to add dialog
         * */

      }, {
        key: "clickToAddDialog",
        value: function clickToAddDialog() {} // console.log("clickToAddDialog");

        /**
         * click to click To Show Dialogs
         * */

      }, {
        key: "clickToShowDialogs",
        value: function clickToShowDialogs() {} // console.log("clickToShowDialogs");

        /**
         * click to click To Show Contacts
         * */

      }, {
        key: "clickToShowContacts",
        value: function clickToShowContacts() {} // console.log("clickToShowContacts");

        /**
         * click to click To Show MenuBar
         * */

      }, {
        key: "clickToShowMenuBar",
        value: function clickToShowMenuBar() {} // console.log("clickToShowMenuBar");
        // personal chat

        /**
         * click to click To Show MenuBar
         * */

      }, {
        key: "clickToUserProfile",
        value: function clickToUserProfile() {// console.log("clickToUserProfile");
        }
      }, {
        key: "cancelSearchPersonal",
        value: function cancelSearchPersonal() {// console.log("cancelSearchPersonal");
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.getContent(this.showContent));
        }
      }, {
        key: "componentWillLoad",
        value: function componentWillLoad() {
          this.dialogs = _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["d"];
        }
      }, {
        key: "clickToShowDialogsHandler",
        value: function clickToShowDialogsHandler() {// console.log('clickToShowDialogsHandler');
        }
      }, {
        key: "clickToShowFoldersHandler",
        value: function clickToShowFoldersHandler() {} // console.log('clickToShowFoldersHandler');

        /**
         *
         * */

      }, {
        key: "clickOnUserProfile",
        value: function clickOnUserProfile() {} // console.log('clickOnUserProfile')

        /**
         *
         * */

      }, {
        key: "createFolderHandler",
        value: function createFolderHandler(e) {
          return e; // console.log('createFolderHandler', e)
        }
        /**
         * Метод для вывода определенного контента
         * */

      }, {
        key: "getContent",
        value: function getContent(content) {
          var _this = this;

          switch (content) {
            case "dialogs":
              return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("mobile-dialogs", {
                onClickToAddDialog: function onClickToAddDialog() {
                  return _this.clickToAddDialog();
                },
                onClickToDialog: function onClickToDialog(item) {
                  return _this.clickToDialog(item);
                },
                onClickToCategory: function onClickToCategory(item) {
                  return _this.clickToCategory(item);
                },
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this.clickToShowDialogs();
                },
                onClickToShowContacts: function onClickToShowContacts() {
                  return _this.clickToShowContacts();
                },
                onClickToShowMenuBar: function onClickToShowMenuBar() {
                  return _this.clickToShowMenuBar();
                },
                onSearchDialogs: function onSearchDialogs(detail) {
                  return _this.searchDialogs({
                    detail: detail
                  });
                },
                onCancelSearchPersonal: function onCancelSearchPersonal() {
                  return _this.cancelSearchPersonal();
                },
                categories: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["c"],
                dialogs: this.dialogs
              });

            case "personal":
              return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("mobile-personal", {
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this.clickToShowDialogs();
                },
                onClickToUserProfile: function onClickToUserProfile() {
                  return _this.clickToUserProfile();
                },
                message: this.message,
                onSearchPersonalMessages: function onSearchPersonalMessages(detail) {
                  return _this.searchPersonalMessages({
                    detail: detail
                  });
                },
                onCancelSearchPersonal: function onCancelSearchPersonal() {
                  return _this.cancelSearchPersonal();
                }
              });

            case "profile":
              return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-profile", {
                theme: "mobile",
                categories: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["c"],
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this.clickToShowDialogsHandler();
                },
                onClickToShowFolders: function onClickToShowFolders() {
                  return _this.clickToShowFoldersHandler();
                }
              });

            case "folders":
              return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-folders", {
                onClickToUserProfile: function onClickToUserProfile() {
                  return _this.clickOnUserProfile();
                },
                onCreateFolder: function onCreateFolder(e) {
                  return _this.createFolderHandler(e.detail);
                },
                dialogs: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["d"],
                theme: "mobile"
              });

            case "contacts":
              return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list", {
                contacts: this.contacts,
                onSearchContact: function onSearchContact(detail) {
                  return _this.searchContact({
                    detail: detail
                  });
                },
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this.clickToShowDialogs();
                },
                onClickToShowContacts: function onClickToShowContacts() {
                  return _this.clickToShowContacts();
                },
                onClickToShowMenuBar: function onClickToShowMenuBar() {
                  return _this.clickToShowMenuBar();
                },
                onClickToContact: function onClickToContact(item) {
                  return _this.clickToContact(item);
                }
              });

            default:
              return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "no content");
          }
        }
      }]);

      return MobileChat;
    }();

    MobileChat.style = mobileChatCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-mobile-chat-entry-js-es5.js.map