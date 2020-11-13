(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-chat-user-entry-js"],{

/***/ "./node_modules/s-chat/dist/esm/s-saqhan-chat-user.entry.js":
/*!******************************************************************!*\
  !*** ./node_modules/s-chat/dist/esm/s-saqhan-chat-user.entry.js ***!
  \******************************************************************/
/*! exports provided: s_saqhan_chat_user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_user", function() { return SSaqhanChatUser; });
/* harmony import */ var _index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-063f1606.js */ "./node_modules/s-chat/dist/esm/index-063f1606.js");


const sSaqhanChatUserCss = "";

const SSaqhanChatUser = class {
    constructor(hostRef) {
        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-wrapper" }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])(UserMessage, { user: this.dialogs })));
    }
};
/**
 * компонентная функция
 * */
const UserMessage = (props) => {
    return props.user.map((item) => {
        return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-card", { mess: item });
    });
};
SSaqhanChatUser.style = sSaqhanChatUserCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-saqhan-chat-user-entry-js-es2015.js.map