(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-module-chat-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/module-chat.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/module-chat.entry.js ***!
  \*****************************************************************/
/*! exports provided: module_chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "module_chat", function() { return ModuleChat; });
/* harmony import */ var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-53235049.js */ "./node_modules/stencil-chat/dist/esm/index-53235049.js");
/* harmony import */ var _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-bfa1c413.js */ "./node_modules/stencil-chat/dist/esm/index-bfa1c413.js");
/* harmony import */ var _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-2d06f4a2.js */ "./node_modules/stencil-chat/dist/esm/mock-2d06f4a2.js");




const moduleChatCss = "";

const ModuleChat = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.messages = _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["M"];
        this.dialogs = _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["d"];
        this.dictionary = _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["D"];
    }
    componentDidLoad() {
        window['ref'] = this.ref;
        setInterval(() => {
            // console.log(
            //   'messages setInterval',
            //
            // );
            this.messages = [..._mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["M"]];
            this.dialogs = [..._mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["d"]];
            this.dictionary = this.dictionary === _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["D"] ? _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["b"] : _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["D"];
            // console.log(
            //   'updated dictionary',
            //   this.dictionary
            // );
            // @ts-ignore
            Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["f"])(this.ref2);
        }, 10000);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("cnt-module-chat", { ref: (el) => this.ref = el, categories: _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["a"], dialogs: this.dialogs, contacts: _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["c"], dictionary: this.dictionary, message: this.messages, onClickToDialog: (ev) => this.clickToDialog(ev.detail), onSendTextMessage: (ev) => this.sendTextMessage(ev.detail), onShowFullChat: (ev) => this.showFullChat(ev.detail), disableInnerSearchDialogsState: _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["e"], disableInnerSearchMessagesState: _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["f"] }));
    }
    clickToDialog(dialog) {
        this.messages = _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_2__["M"].map((message) => (Object.assign(Object.assign({}, message), { content: (message.direction !== _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["C"].center &&
                message.type === _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["a"].text)
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
            Object(_index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["e"])(message, {
                uid: "test-id-2",
                icon: "https://via.placeholder.com/60x60?text=User",
                name: "Адам",
                phone: "79291234567",
            })
        ];
    }
    get ref2() { return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
ModuleChat.style = moduleChatCss;




/***/ })

}]);
//# sourceMappingURL=stencil-module-chat-entry-js-es2015.js.map