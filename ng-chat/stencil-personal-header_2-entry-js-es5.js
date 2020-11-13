function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-personal-header_2-entry-js"], {
  /***/
  "./node_modules/s-chat/dist/esm/personal-header_2.entry.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/s-chat/dist/esm/personal-header_2.entry.js ***!
    \*****************************************************************/

  /*! exports provided: personal_header, personal_message */

  /***/
  function node_modulesSChatDistEsmPersonalHeader_2EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "personal_header", function () {
      return PersonalHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "personal_message", function () {
      return PersonalMessage;
    });
    /* harmony import */


    var _index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-063f1606.js */
    "./node_modules/s-chat/dist/esm/index-063f1606.js");
    /* harmony import */


    var _utils_f6ec1f87_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./utils-f6ec1f87.js */
    "./node_modules/s-chat/dist/esm/utils-f6ec1f87.js");
    /* harmony import */


    var _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./index-582bc2f2.js */
    "./node_modules/s-chat/dist/esm/index-582bc2f2.js");

    var personalHeaderCss = ".drop-down.sc-personal-header{position:absolute;right:20px;padding:10px;background-color:#dadada8f;border-radius:10px 0px 10px 10px}.drop-down.sc-personal-header ul.sc-personal-header li.sc-personal-header{list-style:none}.searchPersonalmess.sc-personal-header input.sc-personal-header{text-align:center;border-radius:5px;border:none;background-color:#eaeaea;width:100%;height:25px;font-size:14px;outline:none}.cancel-search.sc-personal-header{padding:5px;cursor:pointer}.search-wrapper.sc-personal-header{margin-bottom:-10px}.personal-header.sc-personal-header{padding:20px 20px 20px;border-bottom:1px solid #ccc;position:relative;height:85px}.header-nav.sc-personal-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.header-nav.sc-personal-header span.sc-personal-header i.sc-personal-header{color:#979eab;-webkit-transition:0.3s ease;transition:0.3s ease}.header-nav.sc-personal-header span.sc-personal-header i.sc-personal-header:hover{cursor:pointer;color:rgb(87, 128, 247)}.header-nav.sc-personal-header .user-name-personal-wrapper.sc-personal-header{font-weight:600;color:#4c567d;text-align:center;width:100%;position:relative}.users-nav.sc-personal-header{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;margin:auto;margin-top:7px}.img-user-other.sc-personal-header{text-align:center;border-radius:50%}.img-user-other.sc-personal-header .img.sc-personal-header{width:30px;height:30px;margin:3px;border-radius:50%;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-size:cover;background-position:center}.img-user-current.sc-personal-header{text-align:center;border:2px solid #4c567d;border-radius:50%}.img-user-current.sc-personal-header .img.sc-personal-header{width:35px;height:35px;margin:3px;border-radius:50%;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-size:cover;background-position:center}.user-active.sc-personal-header{width:100%;text-align:center}.user-active.sc-personal-header span.sc-personal-header{color:#4c567d;font-size:14px}.header-nav.sc-personal-header span.sc-personal-header i.sc-personal-header{width:14px}.user-name-personal.sc-personal-header{position:relative}.user-online-status.sc-personal-header,.user-ofline-status.sc-personal-header{width:10px;height:10px;border-radius:50%;display:inline-block;margin-left:5px}.user-online-status.sc-personal-header{background-color:#7dbd27}.user-ofline-status.sc-personal-header{background-color:#ccc}";

    var PersonalHeader = /*#__PURE__*/function () {
      function PersonalHeader(hostRef) {
        var _this = this;

        _classCallCheck(this, PersonalHeader);

        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Показывать/скрывать меню
         * */

        this.isShowDropDown = false;
        /**
         * Переключение поиска и окна с диалогами в шапке
         * */

        this.isPersonalMess = true;

        this.showDrop = function () {
          return _this.isShowDropDown = !_this.isShowDropDown;
        };

        this.clickToLink = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
        this.clickToUserProfile = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToUserProfile", 7);
        this.searchContact = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchContact", 7);
        this.searchPersonalMessages = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchPersonalMessages", 7);
        this.clickToShowDialogs = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.cancelSearchPersonal = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "cancelSearchPersonal", 7);
        this.clickToDialog = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
      }

      _createClass(PersonalHeader, [{
        key: "render",
        value: function render() {
          var _this2 = this;

          return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-header"
          }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "header-nav"
          }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "custom-link",
            onClick: function onClick() {
              return _this2.clickToShowDialogsHandler();
            }
          }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-arrow-left"
          })), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": " user-name-personal-wrapper"
          }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "custom-link user-name-personal",
            onClick: function onClick() {
              return _this2.clickToUserProfileHandler();
            }
          }, this.getNameUser(), this.chatPresenceState === _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["b"].online ? Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-online-status"
          }) : Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-ofline-status"
          }))), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "custom-link",
            onClick: function onClick() {
              return _this2.showInputSearchPersonalMess();
            }
          }, this.isPersonalMess ? Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-search"
          }) : Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-times"
          }))), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "users-nav"
          }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-active"
          }, this.isPersonalMess ? Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-status", {
            theme: "module",
            chatActionState: this.chatActionState,
            chatPresenceState: this.chatPresenceState
          }) : Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "search-wrapper"
          }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "searchPersonalmess"
          }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "text",
            placeholder: "search",
            onInput: function onInput(e) {
              return _this2.searchPersonalMessagesHandler(e.target["value"]);
            }
          })))))));
        }
        /**
         * get name user
         * */

      }, {
        key: "getNameUser",
        value: function getNameUser() {
          var _a;

          return (_a = this.openedDialog) === null || _a === void 0 ? void 0 : _a.name;
        }
      }, {
        key: "showInputSearchPersonalMess",
        value: function showInputSearchPersonalMess() {
          this.isPersonalMess = !this.isPersonalMess;
          this.cancelSearchPersonal.emit();
        }
        /**
         * show Dialogs
         * */

      }, {
        key: "clickToShowDialogsHandler",
        value: function clickToShowDialogsHandler() {
          this.clickToShowDialogs.emit();
        }
        /**
         * click to show user profile
         * */

      }, {
        key: "clickToUserProfileHandler",
        value: function clickToUserProfileHandler() {
          this.clickToUserProfile.emit();
        }
        /**
         * search for private messages
         * */

      }, {
        key: "searchPersonalMessagesHandler",
        value: function searchPersonalMessagesHandler(value) {
          this.searchPersonalMessages.emit(value);
        }
        /**
         * TODO
         * Метод для получения изображений предыдущих и следующих диалогов
         * */

      }, {
        key: "getIconUsers",
        value: function getIconUsers(array) {}
        /**
         * Управление по клику на диалог
         * */

      }, {
        key: "clickToDialogHandler",
        value: function clickToDialogHandler(item) {
          this.clickToDialog.emit({
            data: item
          });
          console.log(item);
        }
        /**
         * Метод получения названий категорий
         * */

      }, {
        key: "getIconDialogs",
        value: function getIconDialogs(array) {
          var _this3 = this;

          return array.map(function (item) {
            return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "img-user-other"
            }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "img online",
              onClick: function onClick() {
                return _this3.clickToDialogHandler(item);
              },
              style: {
                backgroundImage: "url(".concat(item.img, ")")
              }
            }));
          }).slice(5);
        }
      }]);

      return PersonalHeader;
    }();

    PersonalHeader.style = personalHeaderCss;
    var personalMessageCss = ".personal-message.sc-personal-message{padding:20px 0px;height:calc(100vh - 370px);overflow:auto}.mobile.sc-personal-message .personal-message.sc-personal-message{height:calc(100vh - 145px)}.mobile.sc-personal-message .personal-message.sc-personal-message{padding:20px}.module.sc-personal-message .personal-message.sc-personal-message{padding:20px;height:calc(100vh - 310px);overflow:hidden}.module.sc-personal-message .personal-message-inner.sc-personal-message{height:100%;overflow-y:auto}.module.sc-personal-message .personal-message.sc-personal-message .to-me-mess-wrapper.sc-personal-message .from-mess.sc-personal-message{max-width:260px}.sc-personal-message::-webkit-scrollbar{width:0px;background:transparent}@media (max-width: 414px){.module.sc-personal-message .personal-message.sc-personal-message{height:calc(100vh - 190px)}}";

    var PersonalMessage = /*#__PURE__*/function () {
      function PersonalMessage(hostRef) {
        _classCallCheck(this, PersonalMessage);

        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * */

        this.theme = "mobile";
        /**
         * */

        this.writing = [];
      }

      _createClass(PersonalMessage, [{
        key: "componentDidLoad",
        value: function componentDidLoad() {
          var _this4 = this;

          // this.scrollToBot();
          _utils_f6ec1f87_js__WEBPACK_IMPORTED_MODULE_1__["a"].setScrollToBot(function () {
            _this4.scrollToBot();
          });

          _utils_f6ec1f87_js__WEBPACK_IMPORTED_MODULE_1__["a"].safeScrollToBot();
        }
      }, {
        key: "render",
        value: function render() {
          var _this5 = this;

          var _a;

          return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-message"
          }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-message-inner",
            ref: function ref(el) {
              return _this5.scrollContainer = el;
            }
          }, this.message.map(function (message) {
            return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-from", {
              message: message
            });
          }), ((_a = this.writing) === null || _a === void 0 ? void 0 : _a.length) ? Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-from", {
            message: Object(_index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["j"])(this.writing[0])
          }) : "")));
        }
        /**
         *
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
        /**
         *
         * */

      }, {
        key: "scrollToBot",
        value: function scrollToBot() {
          Object(_index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.scrollContainer, {
            timer: 100
          });
        }
      }]);

      return PersonalMessage;
    }();

    PersonalMessage.style = personalMessageCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-personal-header_2-entry-js-es5.js.map