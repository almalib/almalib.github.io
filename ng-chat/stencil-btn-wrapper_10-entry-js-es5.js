function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-btn-wrapper_10-entry-js"], {
  /***/
  "./node_modules/stencil-chat/dist/esm/btn-wrapper_10.entry.js":
  /*!********************************************************************!*\
    !*** ./node_modules/stencil-chat/dist/esm/btn-wrapper_10.entry.js ***!
    \********************************************************************/

  /*! exports provided: btn_wrapper, module_header, module_personal, s_saqhan_chat_add_question, s_saqhan_chat_files, s_saqhan_chat_files_wrapper, s_saqhan_chat_form_search, s_saqhan_chat_form_search_files, s_saqhan_chat_users, s_saqhan_chat_users_wrapper */

  /***/
  function node_modulesStencilChatDistEsmBtnWrapper_10EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "btn_wrapper", function () {
      return BtnWrapper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "module_header", function () {
      return ModuleHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "module_personal", function () {
      return ModulePersonal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_add_question", function () {
      return SSaqhanChatAddQuestion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_files", function () {
      return SSaqhanChatFiles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_files_wrapper", function () {
      return SSaqhanChatFilesWrapper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_form_search", function () {
      return SSaqhanChatFormSearch;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_form_search_files", function () {
      return SSaqhanChatFormSearchFiles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_users", function () {
      return SSaqhanChatUsers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_users_wrapper", function () {
      return SSaqhanChatUsersWrapper;
    });
    /* harmony import */


    var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-53235049.js */
    "./node_modules/stencil-chat/dist/esm/index-53235049.js");

    var btnWrapperCss = ".btn-open.sc-btn-wrapper{width:60px;height:60px;font-size:24px;border:none;background-color:#72b94d;color:#fff;border-radius:50%;outline:none !important;cursor:pointer}.open-chat.sc-btn-wrapper{text-align:right;z-index:999;position:fixed;right:20px;bottom:20px}.btn-green.sc-btn-wrapper{position:relative}.counterNewMess.sc-btn-wrapper{position:absolute;right:-5px;top:0px;color:#fff;text-align:center;width:25px;padding:5px 5px;border-radius:50%;background-color:#c73f45;font-size:12px}@media (max-width: 414px){.btn-open.sc-btn-wrapper{width:40px;height:40px}.open-chat.sc-btn-wrapper{right:0px;bottom:60px}.open-chat.sc-btn-wrapper::after{font-size:10px;padding:0px 5px;top:-20px;left:-15px}.btn-open.sc-btn-wrapper{font-size:18px}.counterNewMess.sc-btn-wrapper{width:18px;font-size:8px}}@media (max-width: 375px){.open-chat.sc-btn-wrapper{right:15px;bottom:60px}}";

    var BtnWrapper = /*#__PURE__*/function () {
      function BtnWrapper(hostRef) {
        _classCallCheck(this, BtnWrapper);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToShowChat = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowChat", 7);
      }

      _createClass(BtnWrapper, [{
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "btn-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "open-chat"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": 'btn-green'
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            onClick: function onClick() {
              return _this.clickToShowChatHandler();
            },
            "class": "btn-open"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.showChat ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-times"
          }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-comment-dots"
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": 'counterNewMess'
          }, this.dialogs))));
        }
      }, {
        key: "clickToShowChatHandler",
        value: function clickToShowChatHandler() {
          this.clickToShowChat.emit();
        }
      }]);

      return BtnWrapper;
    }();

    BtnWrapper.style = btnWrapperCss;
    var moduleHeaderCss = ".header-chat.sc-module-header{background-color:#ececec;padding:10px 20px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.header-chat.sc-module-header .close.sc-module-header i.sc-module-header{font-size:20px;color:#ccc;-webkit-transition:0.3s ease;transition:0.3s ease}.header-chat.sc-module-header .close.sc-module-header i.sc-module-header:hover{color:#4c567d;cursor:pointer}.showFullChat.sc-module-header i.sc-module-header{color:#4c567d;cursor:pointer}";

    var ModuleHeader = /*#__PURE__*/function () {
      function ModuleHeader(hostRef) {
        _classCallCheck(this, ModuleHeader);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.close = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "close", 7);
        this.showFullChat = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showFullChat", 3);
      }
      /**
       *
       * */
      // @State() dictionary: any;
      //
      // componentDidLoad() {
      //   ChatDictionaryService.dictionary$.subscribe(
      //     (dictionary) => {
      //       this.dictionary = dictionary;
      //     }
      //   )
      // }


      _createClass(ModuleHeader, [{
        key: "render",
        value: function render() {
          var _this2 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "header-chat"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "showFullChat",
            style: {
              visibility: this.disableShowFullChatState ? 'hidden' : null
            },
            onClick: function onClick() {
              return _this2.showFullChatHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-expand"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "header-chat-title"
          }, "\u041C\u043E\u0434\u0443\u043B\u044C\u043D\u044B\u0439 \u0447\u0430\u0442"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "close",
            onClick: function onClick() {
              return _this2.close.emit();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-times-circle"
          })));
        }
        /**
         * Разворачивать полную версию чата при клике иконку
         * */

      }, {
        key: "showFullChatHandler",
        value: function showFullChatHandler() {
          if (!this.disableShowFullChatState) {
            this.showFullChat.emit();
          }
        }
      }]);

      return ModuleHeader;
    }();

    ModuleHeader.style = moduleHeaderCss;
    var modulePersonalCss = ".personal-wrapper.sc-module-personal .personal-footer.sc-module-personal .footer-wrapper.sc-module-personal{border-radius:15px 15px 0px 0px}";

    var ModulePersonal = /*#__PURE__*/function () {
      function ModulePersonal(hostRef) {
        _classCallCheck(this, ModulePersonal);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Возможность записи аудио
         */

        this.canRecordAudio = false;
        /**
         * */

        this.writing = [];
        this.searchPersonalMessages = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchPersonalMessages", 7);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.sendTextMessage = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendTextMessage", 7);
        this.clickToUserProfile = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToUserProfile", 7);
        this.cancelSearchPersonal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "cancelSearchPersonal", 7);
      }

      _createClass(ModulePersonal, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-header", {
            chatActionState: this.chatActionState,
            openedDialog: this.openedDialog,
            chatPresenceState: this.chatPresenceState,
            dialogs: this.dialogs,
            message: this.message
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-message", {
            writing: this.writing,
            theme: "module",
            message: this.message
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-footer", {
            canRecordAudio: this.canRecordAudio,
            theme: "module"
          }));
        }
      }]);

      return ModulePersonal;
    }();

    ModulePersonal.style = modulePersonalCss;
    var sSaqhanChatAddQuestionCss = ".btn-new-ask.sc-s-saqhan-chat-add-question{text-align:center;margin-top:10px}.btn-add-question.sc-s-saqhan-chat-add-question{border-radius:30px;padding:10px 30px;border:none;background-color:#72b94d;color:#ffffff;text-transform:uppercase;font-size:12px;outline:none;letter-spacing:1px}.custom-link.sc-s-saqhan-chat-add-question{cursor:pointer}";

    var SSaqhanChatAddQuestion = /*#__PURE__*/function () {
      function SSaqhanChatAddQuestion(hostRef) {
        _classCallCheck(this, SSaqhanChatAddQuestion);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.sendNewMessModal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendNewMessModal", 7);
      }

      _createClass(SSaqhanChatAddQuestion, [{
        key: "render",
        value: function render() {
          var _this3 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "btn-new-wrap"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "btn-new-ask"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            "class": "btn-add-question custom-link ",
            onClick: function onClick() {
              return _this3.sendNewMessModalHandler();
            }
          }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430\u043C")));
        }
      }, {
        key: "sendNewMessModalHandler",
        value: function sendNewMessModalHandler() {
          this.sendNewMessModal.emit();
        }
      }]);

      return SSaqhanChatAddQuestion;
    }();

    SSaqhanChatAddQuestion.style = sSaqhanChatAddQuestionCss;
    var sSaqhanChatFilesCss = ".wrapper-files.sc-s-saqhan-chat-files{padding:0px 20px}.block-file.sc-s-saqhan-chat-files{cursor:pointer}.chat-files.sc-s-saqhan-chat-files .row.sc-s-saqhan-chat-files{-ms-flex-align:center;align-items:center}.chat-files.sc-s-saqhan-chat-files .block-input.sc-s-saqhan-chat-files::before{font-family:\"Font Awesome 5 Free\";font-weight:400;content:\"\\f0eb\";position:relative;left:20px;z-index:999;color:#5a5a5a}.block-file.sc-s-saqhan-chat-files i.sc-s-saqhan-chat-files{font-size:16px;color:#5a5a5a}.btn-back.sc-s-saqhan-chat-files::after{content:\"1\";background-color:#c73f45;padding:1px 6px;color:#fff;font-size:10px;border-radius:30px;position:relative;right:7px;top:-15px;z-index:999}.btn-back.sc-s-saqhan-chat-files{cursor:pointer}.btn-back.sc-s-saqhan-chat-files span.sc-s-saqhan-chat-files i.sc-s-saqhan-chat-files{color:#a9a9a9;font-size:15px}.file-card.sc-s-saqhan-chat-files{padding-top:10px;border-bottom:1px solid #e5e5e5}.block-info.sc-s-saqhan-chat-files{display:-ms-flexbox;display:flex;margin-bottom:15px}.file-date.sc-s-saqhan-chat-files{font-size:14px;font-weight:500;margin-bottom:10px}.file-img.sc-s-saqhan-chat-files{width:60px;height:60px;margin-right:15px;border-radius:3px;background-image:url(\"https://via.placeholder.com/500x500?text=Visit\")}.file-name.sc-s-saqhan-chat-files{font-size:14px;font-weight:500;margin-bottom:10px}.file-size.sc-s-saqhan-chat-files{font-size:12px;color:#5a5a5a}.block-files.sc-s-saqhan-chat-files{display:-ms-flexbox;display:flex;width:75%;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.block-repost.sc-s-saqhan-chat-files{-webkit-transition:0.3s easy;transition:0.3s easy}.block-repost.sc-s-saqhan-chat-files a.sc-s-saqhan-chat-files{display:none;color:#000;font-size:12px;margin-left:10px}.block-info.sc-s-saqhan-chat-files:hover .block-repost.sc-s-saqhan-chat-files a.sc-s-saqhan-chat-files{display:inline-block;cursor:pointer}@media (max-width: 375px){.input-search.sc-s-saqhan-chat-files{width:auto;padding:10px 30px}}@media (max-width: 320px){.wrapper-chat.sc-s-saqhan-chat-files{width:320px}}";

    var SSaqhanChatFiles = /*#__PURE__*/function () {
      function SSaqhanChatFiles(hostRef) {
        _classCallCheck(this, SSaqhanChatFiles);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SSaqhanChatFiles, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": " wrapper-files"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-card"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-date"
          }, "19 \u043D\u043E\u044F\u0431\u0440\u044F 2018"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-info"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-img"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-files"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-info"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-name"
          }, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F_\u0411\u0430\u043D\u043A\u0430_\u043A_\u0420\u0435\u0441\u0443\u0440\u0441\u0443.."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-size"
          }, "18.8 \u041A\u0411 13:27")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-repost"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "#"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-share"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "#"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-download"
          })))))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-card"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-date"
          }, "17 \u043D\u043E\u044F\u0431\u0440\u044F 2018"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-info"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-img"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-files"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-info"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-name"
          }, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F_\u0411\u0430\u043D\u043A\u0430_\u043A_\u0420\u0435\u0441\u0443\u0440\u0441\u0443.."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-size"
          }, "18.8 \u041A\u0411 13:27")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-repost"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "#"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-share"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "#"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-download"
          }))))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-info"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-img"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-files"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-info"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-name"
          }, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F_\u0411\u0430\u043D\u043A\u0430_\u043A_\u0420\u0435\u0441\u0443\u0440\u0441\u0443.."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-size"
          }, "18.8 \u041A\u0411 13:27")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-repost"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "#"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-share"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "#"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-download"
          })))))));
        }
      }]);

      return SSaqhanChatFiles;
    }();

    SSaqhanChatFiles.style = sSaqhanChatFilesCss;
    var sSaqhanChatFilesWrapperCss = "";

    var SSaqhanChatFilesWrapper = /*#__PURE__*/function () {
      function SSaqhanChatFilesWrapper(hostRef) {
        _classCallCheck(this, SSaqhanChatFilesWrapper);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
      }

      _createClass(SSaqhanChatFilesWrapper, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-form-search-files", null), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-files", null));
        }
      }]);

      return SSaqhanChatFilesWrapper;
    }();

    SSaqhanChatFilesWrapper.style = sSaqhanChatFilesWrapperCss;
    var sSaqhanChatFormSearchCss = ".header-wrapper.sc-s-saqhan-chat-form-search{border-bottom:1px solid #ececec}.chat-files.sc-s-saqhan-chat-form-search{text-align:center;padding:10px 10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.chat-files.sc-s-saqhan-chat-form-search .row.sc-s-saqhan-chat-form-search{-ms-flex-align:center;align-items:center}.block-input.sc-s-saqhan-chat-form-search{width:100%;display:-ms-flexbox;display:flex;position:relative}.block-input.sc-s-saqhan-chat-form-search i.sc-s-saqhan-chat-form-search{position:absolute;top:12px;left:20px;color:#97a9c9}.input-search.sc-s-saqhan-chat-form-search{width:100%;border-radius:3px;border:none;background-color:#ececec;outline:none;color:#5a5a5a;padding-top:10px;padding-bottom:10px;padding-left:40px;margin-left:8px;margin-right:20px}.block-file.sc-s-saqhan-chat-form-search{padding-right:15px}.block-file.sc-s-saqhan-chat-form-search i.sc-s-saqhan-chat-form-search{font-size:18px;color:#ccc}@media (max-width: 375px){.input-search.sc-s-saqhan-chat-form-search{padding:10px 30px}.chat-files.sc-s-saqhan-chat-form-search .block-input.sc-s-saqhan-chat-form-search::before{left:13px}}@media (max-width: 320px){.block-input.sc-s-saqhan-chat-form-search{text-align:center}}";

    var SSaqhanChatFormSearch = /*#__PURE__*/function () {
      function SSaqhanChatFormSearch(hostRef) {
        _classCallCheck(this, SSaqhanChatFormSearch);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * array categories
         * */

        this.categories = [];
        this.clickToFilesBtn = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToFilesBtn", 7);
        this.searchDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialog", 7);
      }

      _createClass(SSaqhanChatFormSearch, [{
        key: "render",
        value: function render() {
          var _this4 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "header-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": " chat-files"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-input"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-search"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "text",
            "class": "input-search",
            placeholder: "\u041F\u043E\u0438\u0441\u043A \u0447\u0430\u0442\u043E\u0432 \u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439",
            onInput: function onInput(e) {
              return _this4.searchDialogsHandler(e.target.value);
            }
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-file"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-file-alt"
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-categories", {
            theme: "module",
            categories: this.categories
          }));
        }
        /**
         * click to Files btn
         * */

      }, {
        key: "clickToFilesBtnHandler",
        value: function clickToFilesBtnHandler() {
          this.clickToFilesBtn.emit();
        }
      }, {
        key: "searchDialogsHandler",
        value: function searchDialogsHandler(e) {
          this.searchDialog.emit(e);
        }
      }]);

      return SSaqhanChatFormSearch;
    }();

    SSaqhanChatFormSearch.style = sSaqhanChatFormSearchCss;
    var sSaqhanChatFormSearchFilesCss = ".block-file.sc-s-saqhan-chat-form-search-files{cursor:pointer}.chat-files-search.sc-s-saqhan-chat-form-search-files{text-align:center;padding:10px 0px;border-bottom:1px solid #ececec;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly}.btn-back.sc-s-saqhan-chat-form-search-files{cursor:pointer}.chat-files.sc-s-saqhan-chat-form-search-files .row.sc-s-saqhan-chat-form-search-files{-ms-flex-align:center;align-items:center}.block-input-files.sc-s-saqhan-chat-form-search-files{width:70%;position:relative}.block-input-files.sc-s-saqhan-chat-form-search-files::before{font-family:\"Font Awesome 5 Free\";font-weight:400;content:\"\\f0eb\";position:absolute;left:15px;top:10px;z-index:999;color:#5a5a5a}.input-search-files.sc-s-saqhan-chat-form-search-files{width:100%;border-radius:3px;border:none;background-color:#ececec;padding:10px 40px;outline:none}.chat-files.sc-s-saqhan-chat-form-search-files .block-input.sc-s-saqhan-chat-form-search-files::before{font-family:\"Font Awesome 5 Free\";font-weight:400;content:\"\\f274\";position:relative;left:20px;z-index:999;color:#5a5a5a}.block-file.sc-s-saqhan-chat-form-search-files i.sc-s-saqhan-chat-form-search-files{font-size:18px;color:#5a5a5a}@media (max-width: 375px){.input-search.sc-s-saqhan-chat-form-search-files{width:92%;padding:10px 30px}}";

    var SSaqhanChatFormSearchFiles = /*#__PURE__*/function () {
      function SSaqhanChatFormSearchFiles(hostRef) {
        _classCallCheck(this, SSaqhanChatFormSearchFiles);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
      }

      _createClass(SSaqhanChatFormSearchFiles, [{
        key: "render",
        value: function render() {
          var _this5 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "header-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "chat-files-search"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "btn-back",
            onClick: function onClick() {
              return _this5.clickToShowDialogsHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-chevron-left"
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-input-files"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "text",
            "class": "input-search-files",
            placeholder: "\u041F\u043E\u0438\u0441\u043A \u0444\u0430\u0439\u043B\u043E\u0432"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-file"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-filter"
          }))));
        }
        /**
         * show Dialogs
         * */

      }, {
        key: "clickToShowDialogsHandler",
        value: function clickToShowDialogsHandler() {
          this.clickToShowDialogs.emit();
        }
      }]);

      return SSaqhanChatFormSearchFiles;
    }();

    SSaqhanChatFormSearchFiles.style = sSaqhanChatFormSearchFilesCss;
    var sSaqhanChatUsersCss = ".user-wrapper.sc-s-saqhan-chat-users{cursor:pointer;padding:0px 20px}@media (max-width: 375px){.user-wrapper.sc-s-saqhan-chat-users{cursor:pointer;padding:0px 0px;padding-right:0px;padding-top:10px}}";

    var SSaqhanChatUsers = /*#__PURE__*/function () {
      function SSaqhanChatUsers(hostRef) {
        _classCallCheck(this, SSaqhanChatUsers);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Массив данных с диалогами
         * */

        this.dialogs = [];
      }

      _createClass(SSaqhanChatUsers, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-user", {
            dialogs: this.dialogs
          }));
        }
      }]);

      return SSaqhanChatUsers;
    }();

    SSaqhanChatUsers.style = sSaqhanChatUsersCss;
    var sSaqhanChatUsersWrapperCss = ".chat-wrap.sc-s-saqhan-chat-users-wrapper{width:100%;height:calc(100vh - 317px);overflow:auto;padding-top:15px}.sc-s-saqhan-chat-users-wrapper::-webkit-scrollbar{width:0px;background:transparent}@media (max-width: 414px){.chat-wrap.sc-s-saqhan-chat-users-wrapper{height:calc(100vh - 190px)}}@media (max-width: 375px){.chat-wrap.sc-s-saqhan-chat-users-wrapper{height:calc(100vh - 190px);padding:0px 15px}.chat-files.sc-s-saqhan-chat-users-wrapper .block-input.sc-s-saqhan-chat-users-wrapper::before{left:13px}}";

    var SSaqhanChatUsersWrapper = /*#__PURE__*/function () {
      function SSaqhanChatUsersWrapper(hostRef) {
        _classCallCheck(this, SSaqhanChatUsersWrapper);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Массив данных с диалогами
         * */

        this.dialogs = [];
        /**
         *
         * */

        this.categories = [];
        /**
         * Массив данных с личным чатом
         * */

        this.personalMessage = [];
        this.clickToCategory = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToCategory", 7);
        this.searchDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialog", 7);
        this.clickToDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
        this.clickToFilesBtn = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToFilesBtn", 7);
        this.sendNewMessModal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendNewMessModal", 7);
      }

      _createClass(SSaqhanChatUsersWrapper, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-form-search", {
            categories: this.categories
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "chat-wrap"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-users", {
            dialogs: this.dialogs
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-add-question", null));
        }
      }]);

      return SSaqhanChatUsersWrapper;
    }();

    SSaqhanChatUsersWrapper.style = sSaqhanChatUsersWrapperCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-btn-wrapper_10-entry-js-es5.js.map