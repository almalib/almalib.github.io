function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-module-chat-entry-js"], {
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
  "./node_modules/s-chat/dist/esm/module-chat.entry.js":
  /*!***********************************************************!*\
    !*** ./node_modules/s-chat/dist/esm/module-chat.entry.js ***!
    \***********************************************************/

  /*! exports provided: module_chat */

  /***/
  function node_modulesSChatDistEsmModuleChatEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "module_chat", function () {
      return ModuleChat;
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

    var moduleChatCss = "";

    var ModuleChat = /*#__PURE__*/function () {
      function ModuleChat(hostRef) {
        _classCallCheck(this, ModuleChat);

        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.messages = _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["M"];
        this.dialogs = _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["d"];
        this.dictionary = _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["D"];
      }

      _createClass(ModuleChat, [{
        key: "componentDidLoad",
        value: function componentDidLoad() {
          var _this = this;

          window['ref'] = this.ref;
          setInterval(function () {
            // console.log(
            //   'messages setInterval',
            //
            // );
            _this.messages = _toConsumableArray(_mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["M"]);
            _this.dialogs = _toConsumableArray(_mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["d"]);
            _this.dictionary = _this.dictionary === _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["D"] ? _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["b"] : _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["D"]; // console.log(
            //   'updated dictionary',
            //   this.dictionary
            // );
            // @ts-ignore

            Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_this.ref2);
          }, 10000);
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("cnt-module-chat", {
            ref: function ref(el) {
              return _this2.ref = el;
            },
            categories: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["c"],
            dialogs: this.dialogs,
            contacts: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["a"],
            dictionary: this.dictionary,
            message: this.messages,
            onClickToDialog: function onClickToDialog(ev) {
              return _this2.clickToDialog(ev.detail);
            },
            onSendTextMessage: function onSendTextMessage(ev) {
              return _this2.sendTextMessage(ev.detail);
            },
            onShowFullChat: function onShowFullChat(ev) {
              return _this2.showFullChat(ev.detail);
            },
            disableInnerSearchDialogsState: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["e"],
            disableInnerSearchMessagesState: _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["f"]
          });
        }
      }, {
        key: "clickToDialog",
        value: function clickToDialog(dialog) {
          this.messages = _mock_5b093f4b_js__WEBPACK_IMPORTED_MODULE_2__["M"].map(function (message) {
            return Object.assign(Object.assign({}, message), {
              content: message.direction !== _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_1__["C"].center && message.type === _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_1__["a"].text ? "".concat(dialog.name, "> ").concat(message.content) : message.content
            });
          }); // console.log(
          //   'clickToDialog [12]',
          //   dialog
          // );
        }
      }, {
        key: "showFullChat",
        value: function showFullChat(ev) {
          return ev; // console.log(
          //   'showFullChat',
          //   ev
          // )
        }
      }, {
        key: "sendTextMessage",
        value: function sendTextMessage(message) {
          // console.log(
          //   'sendTextMessage [2]',
          //   message
          // );
          this.messages = [].concat(_toConsumableArray(this.messages), [Object(_index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_1__["d"])(message, {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Адам",
            phone: "79291234567"
          })]);
        }
      }, {
        key: "ref2",
        get: function get() {
          return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
        }
      }]);

      return ModuleChat;
    }();

    ModuleChat.style = moduleChatCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-module-chat-entry-js-es5.js.map