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
  "./node_modules/stencil-chat/dist/esm/module-chat.entry.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/stencil-chat/dist/esm/module-chat.entry.js ***!
    \*****************************************************************/

  /*! exports provided: module_chat */

  /***/
  function node_modulesStencilChatDistEsmModuleChatEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "module_chat", function () {
      return ModuleChat;
    });
    /* harmony import */


    var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-53235049.js */
    "./node_modules/stencil-chat/dist/esm/index-53235049.js");
    /* harmony import */


    var _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index-bfa1c413.js */
    "./node_modules/stencil-chat/dist/esm/index-bfa1c413.js");
    /* harmony import */


    var _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mock-2d06f4a2.js */
    "./node_modules/stencil-chat/dist/esm/mock-2d06f4a2.js");

    var moduleChatCss = "";

    var ModuleChat = /*#__PURE__*/function () {
      function ModuleChat(hostRef) {
        _classCallCheck(this, ModuleChat);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.messages = _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["M"];
        this.dialogs = _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["d"];
        this.dictionary = _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["D"];
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
            _this.messages = _toConsumableArray(_mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["M"]);
            _this.dialogs = _toConsumableArray(_mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["d"]);
            _this.dictionary = _this.dictionary === _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["D"] ? _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["b"] : _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["D"]; // console.log(
            //   'updated dictionary',
            //   this.dictionary
            // );
            // @ts-ignore

            Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_this.ref2);
          }, 10000);
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("cnt-module-chat", {
            ref: function ref(el) {
              return _this2.ref = el;
            },
            categories: _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["a"],
            dialogs: this.dialogs,
            contacts: _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["c"],
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
            disableInnerSearchDialogsState: _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["e"],
            disableInnerSearchMessagesState: _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["f"]
          });
        }
      }, {
        key: "clickToDialog",
        value: function clickToDialog(dialog) {
          this.messages = _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["M"].map(function (message) {
            return Object.assign(Object.assign({}, message), {
              content: message.direction !== _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["C"].center && message.type === _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["a"].text ? "".concat(dialog.name, "> ").concat(message.content) : message.content
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
          this.messages = [].concat(_toConsumableArray(this.messages), [Object(_index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["e"])(message, {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Адам",
            phone: "79291234567"
          })]);
        }
      }, {
        key: "ref2",
        get: function get() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
        }
      }]);

      return ModuleChat;
    }();

    ModuleChat.style = moduleChatCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-module-chat-entry-js-es5.js.map