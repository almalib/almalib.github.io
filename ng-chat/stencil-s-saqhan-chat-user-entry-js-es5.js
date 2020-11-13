function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-chat-user-entry-js"], {
  /***/
  "./node_modules/s-chat/dist/esm/s-saqhan-chat-user.entry.js":
  /*!******************************************************************!*\
    !*** ./node_modules/s-chat/dist/esm/s-saqhan-chat-user.entry.js ***!
    \******************************************************************/

  /*! exports provided: s_saqhan_chat_user */

  /***/
  function node_modulesSChatDistEsmSSaqhanChatUserEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_user", function () {
      return SSaqhanChatUser;
    });
    /* harmony import */


    var _index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-063f1606.js */
    "./node_modules/s-chat/dist/esm/index-063f1606.js");

    var sSaqhanChatUserCss = "";

    var SSaqhanChatUser = /*#__PURE__*/function () {
      function SSaqhanChatUser(hostRef) {
        _classCallCheck(this, SSaqhanChatUser);

        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SSaqhanChatUser, [{
        key: "render",
        value: function render() {
          return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-wrapper"
          }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])(UserMessage, {
            user: this.dialogs
          }));
        }
      }]);

      return SSaqhanChatUser;
    }();
    /**
     * компонентная функция
     * */


    var UserMessage = function UserMessage(props) {
      return props.user.map(function (item) {
        return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-card", {
          mess: item
        });
      });
    };

    SSaqhanChatUser.style = sSaqhanChatUserCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-saqhan-chat-user-entry-js-es5.js.map