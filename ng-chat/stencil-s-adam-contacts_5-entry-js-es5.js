function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-contacts_5-entry-js"], {
  /***/
  "./node_modules/stencil-chat/dist/esm/index-bfa1c413.js":
  /*!**************************************************************!*\
    !*** ./node_modules/stencil-chat/dist/esm/index-bfa1c413.js ***!
    \**************************************************************/

  /*! exports provided: C, a, b, c, d, e, f, g, h, i, j, s */

  /***/
  function node_modulesStencilChatDistEsmIndexBfa1c413Js(module, __webpack_exports__, __webpack_require__) {
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
      return chatConvertWritingStatusToMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return ChatUserActionStatusState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "e", function () {
      return createTextMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "f", function () {
      return filterContactBySearchValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return ChatViewToShowEnum;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return filterDialogsBySearchValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "i", function () {
      return filterDialogsByCategory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "j", function () {
      return filterMessageBySearchValue;
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
  "./node_modules/stencil-chat/dist/esm/s-adam-contacts_5.entry.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/stencil-chat/dist/esm/s-adam-contacts_5.entry.js ***!
    \***********************************************************************/

  /*! exports provided: s_adam_contacts, s_adam_dialogs, s_adam_direct, s_adam_navigate, s_adam_no_chat */

  /***/
  function node_modulesStencilChatDistEsmSAdamContacts_5EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_adam_contacts", function () {
      return SAdamContacts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_adam_dialogs", function () {
      return SAdamDialogs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_adam_direct", function () {
      return SAdamDirect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_adam_navigate", function () {
      return SAdamNavigate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_adam_no_chat", function () {
      return SAdamNoChat;
    });
    /* harmony import */


    var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-53235049.js */
    "./node_modules/stencil-chat/dist/esm/index-53235049.js");
    /* harmony import */


    var _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index-bfa1c413.js */
    "./node_modules/stencil-chat/dist/esm/index-bfa1c413.js");

    var sAdamContactsCss = ".contacts-column.sc-s-adam-contacts{background-color:#f7f8f9;padding:20px 20px 0 20px;height:100vh}.col-3.sc-s-adam-contacts{padding:0 !important}.contacts.sc-s-adam-contacts{overflow-y:auto;height:calc(100vh - 100px);padding-bottom:20px}.sc-s-adam-contacts::-webkit-scrollbar{width:0px;background:transparent}";

    var SAdamContacts = /*#__PURE__*/function () {
      function SAdamContacts(hostRef) {
        _classCallCheck(this, SAdamContacts);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Тема для модульного/мобильного чата
         * */

        this.theme = "mobile";
      }
      /**
       * при изменении входящих контактов фильтрует данные заново
       * */


      _createClass(SAdamContacts, [{
        key: "watchContactsHandler",
        value: function watchContactsHandler(newValue) {
          this.filterContacts(this.lastSearchValue, newValue);
        }
      }, {
        key: "componentWillRender",
        value: function componentWillRender() {
          this.filterContacts(this.lastSearchValue);
        }
      }, {
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-column"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list-header", {
            theme: this.theme,
            onSearchContact: function onSearchContact(e) {
              return _this.filterContacts(e.detail);
            }
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts"
          }, this.contactsFiltered.map(function (dialog) {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contact-card", {
              theme: _this.theme,
              contact: dialog
            });
          })));
        }
        /**
         *
         * */

      }, {
        key: "filterContacts",
        value: function filterContacts(value) {
          var allContacts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.contacts;
          this.lastSearchValue = value;

          if (!this.disableInnerSearchContactState) {
            this.contactsFiltered = Object(_index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["f"])(value, allContacts);
          }
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "contacts": ["watchContactsHandler"]
          };
        }
      }]);

      return SAdamContacts;
    }();

    SAdamContacts.style = sAdamContactsCss;
    var sAdamDialogsCss = ".col-3.sc-s-adam-dialogs{padding:0 !important}.contacts-column.sc-s-adam-dialogs{background-color:#f7f8f9;padding:20px 20px 0 20px;height:100vh}.contacts.sc-s-adam-dialogs{overflow-y:auto;height:calc(100vh - 129px);padding-bottom:20px}.dialog.sc-s-adam-dialogs{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:30px 0;padding:20px 10px;cursor:pointer}.dialog.sc-s-adam-dialogs:hover{background-color:white}.dialog.sc-s-adam-dialogs:active{background-color:white}.dialog-photo.sc-s-adam-dialogs{width:40px;height:40px;background-size:cover;background-position:center;margin-right:15px}.dialog-message-caption.sc-s-adam-dialogs{font-weight:700;font-size:13px}.dialog-message-text.sc-s-adam-dialogs{font-size:12px;color:gray}.message-time.sc-s-adam-dialogs{font-size:10px;margin-left:auto;color:lightgray}.sc-s-adam-dialogs::-webkit-scrollbar{width:0px;background:transparent}";

    var SAdamDialogs = /*#__PURE__*/function () {
      function SAdamDialogs(hostRef) {
        _classCallCheck(this, SAdamDialogs);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
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
        this.clickToDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
        this.searchDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialogs", 7);
        this.clickToCategory = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToCategory", 7);
      }

      _createClass(SAdamDialogs, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-column"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list-header", {
            theme: "comp"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-categories", {
            categories: this.categories
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts"
          }, this.dialogs.map(function (dialog) {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-card", {
              theme: "comp",
              mess: dialog
            });
          })));
        }
      }]);

      return SAdamDialogs;
    }();

    SAdamDialogs.style = sAdamDialogsCss;
    var sAdamDirectCss = ".chat-messages.sc-s-adam-direct{padding:40px 20px;overflow-y:auto;height:calc(100vh - 168px);position:relative}.sc-s-adam-direct::-webkit-scrollbar{width:0px;background:transparent}";

    var SAdamDirect = /*#__PURE__*/function () {
      function SAdamDirect(hostRef) {
        _classCallCheck(this, SAdamDirect);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Личный диалог
         */

        this.message = [];
        this.visibleUserProfile = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "visibleUserProfile", 7);
        this.searchPersonalMessage = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchPersonalMessage", 7);
      }
      /**
       * меняет статус (присутстия собеседников или контакта) в чате
       * */
      // @Method() async updateChatPresenceState(item: ChatUserPresenceState) {
      //   this.chatPresenceState = item;
      // }


      _createClass(SAdamDirect, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "direct-comp"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-personal-header", {
            chatPresenceState: this.chatPresenceState,
            chatActionState: this.chatActionState
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "chat-messages"
          }, this.message.map(function (message) {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-from", {
              message: message
            });
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-footer", null));
        }
      }]);

      return SAdamDirect;
    }();

    SAdamDirect.style = sAdamDirectCss;
    var sAdamNavigateCss = ".nav-column.sc-s-adam-navigate{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;padding-top:20px}.logo.sc-s-adam-navigate{width:50px;height:50px;background-size:cover;background-position:center;margin-bottom:50px;border-radius:100%;cursor:pointer}";

    var SAdamNavigate = /*#__PURE__*/function () {
      function SAdamNavigate(hostRef) {
        _classCallCheck(this, SAdamNavigate);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visibleContacts = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "visibleContacts", 7);
      }

      _createClass(SAdamNavigate, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "nav-column"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "logo border-radius",
            style: {
              backgroundImage: 'url(' + this.logo.logo + ')'
            }
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-nav-item", null));
        }
      }]);

      return SAdamNavigate;
    }();

    SAdamNavigate.style = sAdamNavigateCss;
    var sAdamNoChatCss = ".select-chat.sc-s-adam-no-chat{position:absolute;bottom:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);color:#8d8d8d}";

    var SAdamNoChat = /*#__PURE__*/function () {
      function SAdamNoChat(hostRef) {
        _classCallCheck(this, SAdamNoChat);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SAdamNoChat, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "select-chat"
          }, "Please select a chat");
        }
      }]);

      return SAdamNoChat;
    }();

    SAdamNoChat.style = sAdamNoChatCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-adam-contacts_5-entry-js-es5.js.map