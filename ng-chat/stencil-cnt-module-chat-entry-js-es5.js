function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-cnt-module-chat-entry-js"], {
  /***/
  "./node_modules/s-chat/dist/esm/cnt-module-chat.entry.js":
  /*!***************************************************************!*\
    !*** ./node_modules/s-chat/dist/esm/cnt-module-chat.entry.js ***!
    \***************************************************************/

  /*! exports provided: cnt_module_chat */

  /***/
  function node_modulesSChatDistEsmCntModuleChatEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cnt_module_chat", function () {
      return CntModuleChat;
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

    var cntModuleChatCss = ".wrapper-chat.sc-cnt-module-chat{-webkit-box-shadow:0 0 10px 1px #828282;box-shadow:0 0 10px 1px #828282;border-radius:10px;width:400px;overflow:hidden;height:calc(100vh - 130px);background-color:#fff}.m-chat-wrapper.sc-cnt-module-chat{height:calc(100vh - 170px)}.drop-file-wrapper.sc-cnt-module-chat{height:calc(100vh - 177px)}.content-chat.sc-cnt-module-chat .personal-wrapper.sc-cnt-module-chat .personal-message.sc-cnt-module-chat{height:calc(100vh - 370px)}.content-chat.sc-cnt-module-chat .personal-footer.sc-cnt-module-chat .footer-wrapper.sc-cnt-module-chat{border-radius:10px 10px 5px 5px}.content-chat.sc-cnt-module-chat .profile.sc-cnt-module-chat .mobile.sc-cnt-module-chat{height:100vh;overflow:auto}@media (max-width: 414px){.wrapper-chat.sc-cnt-module-chat{border-radius:0px}.wrapper-chat.sc-cnt-module-chat{width:414px;height:100vh}.content-chat.sc-cnt-module-chat .personal-wrapper.sc-cnt-module-chat .personal-message.sc-cnt-module-chat{height:calc(100vh - 215px)}}.wrapper-modal.sc-cnt-module-chat{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-direction:column;flex-direction:column;position:fixed;top:2%;right:2%;z-index:999}.message.sc-cnt-module-chat{font-size:14px;height:21px;overflow:hidden;width:260px;margin-top:5px;white-space:nowrap;cursor:pointer}.user.sc-cnt-module-chat{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:end;align-items:flex-end}.user-img.sc-cnt-module-chat{width:20%;margin:auto}.user-img.sc-cnt-module-chat .img.sc-cnt-module-chat{width:43px;height:43px;border-radius:50%;background-size:cover;margin:auto}.user-info.sc-cnt-module-chat{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:90%}.user-info.sc-cnt-module-chat .name.sc-cnt-module-chat{font-weight:500;font-size:13px}.sc-cnt-module-chat::-webkit-scrollbar{width:5px}.sc-cnt-module-chat::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);-webkit-border-radius:5px;border-radius:3px}.sc-cnt-module-chat::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:rgba(108, 108, 108, 0.8);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.5)}.sc-cnt-module-chat::-webkit-scrollbar-thumb:window-inactive{background:rgba(106, 106, 106, 0.4)}@media (max-width: 414px){.wrapper-modal.sc-cnt-module-chat{top:0%;right:0%;max-width:414px}.wrapper-chat.sc-cnt-module-chat{width:414px}.personal-messages.sc-cnt-module-chat{height:80vh}.users.sc-cnt-module-chat{height:80vh}.m-chat-wrapper.sc-cnt-module-chat{height:calc(100vh - 40px)}}@media (max-width: 375px){.wrapper-chat.sc-cnt-module-chat{max-width:375px;padding-right:0px}.users.sc-cnt-module-chat{padding:0px 10px}.new-mess.sc-cnt-module-chat{right:12%}}@media (max-width: 320px){.wrapper-chat.sc-cnt-module-chat{max-width:320px}.chat-header.sc-cnt-module-chat a.sc-cnt-module-chat{right:25%}.message-date.sc-cnt-module-chat{font-size:11px}.users.sc-cnt-module-chat{padding:0px 25px}.personal-messages.sc-cnt-module-chat{padding:0 10px}}";

    var CntModuleChat = /*#__PURE__*/function () {
      function CntModuleChat(hostRef) {
        var _this = this;

        _classCallCheck(this, CntModuleChat);

        Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef); // /**
        //  * Заголовок для чата
        //  * */
        // @Prop() titleModule: TitleModuleInterface;

        /**
         * добавляем печатающий
         * */

        this.writing = [];
        /**
         * видимость
         * */

        this.visibleState = true;
        /**
         * select content default
         * */

        this.chatViewState = _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["e"].dialogs; //============================================================================================

        /**
         * Возможность записи аудио
         */

        this.canRecordAudio = false;
        /**
         * массив данных для контактов
         * */

        this.contactsState = this.contacts;
        /**
         * массив данных категорий
         * */

        this.categoriesState = this.categories;
        /**
         * массив данных диалогов
         * */

        this.dialogsState = this.dialogs;
        /**
         * массив данных персонального чата
         * */

        this.messageState = this.message;
        /**
         * Select show content
         * */

        this.ShowContent = function (content) {
          // console.log("ShowContent", content);
          switch (content) {
            case "dialogs":
              return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-users-wrapper", {
                dialogs: _this.dialogsState,
                categories: _this.categoriesState,
                onClickToCategory: function onClickToCategory(item) {
                  return _this.safeFiltersDialog(_this.lastSearchDialog, item.detail, _this.dialogs);
                },
                onClickToDialog: function onClickToDialog(item) {
                  return _this.clickToDialogHandler(item.detail);
                },
                onClickToFilesBtn: function onClickToFilesBtn() {
                  return _this.clickToFilesBtnHandler();
                },
                onSearchDialog: function onSearchDialog(item) {
                  return _this.safeFiltersDialog(item.detail, _this.lastClickedCategory, _this.dialogs);
                },
                onSendNewMessModal: function onSendNewMessModal() {
                  return _this.sendNewMessModal();
                }
              });

            case "personal":
              return (// <div class='drop-file-wrapper' >
                //   <s-adam-copying></s-adam-copying>
                // </div>
                Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("module-personal", {
                  chatPresenceState: _this.chatPresenceState,
                  openedDialog: _this.openedDialog,
                  chatActionState: _this.chatActionState,
                  writing: _this.writing,
                  canRecordAudio: _this.canRecordAudio,
                  onSendTextMessage: function onSendTextMessage() {
                    return _this.scrollMessageViewToBot();
                  },
                  dialogs: _this.dialogsState,
                  message: _this.messageState,
                  onSearchPersonalMessages: function onSearchPersonalMessages(e) {
                    return _this.searchPersonalMessages(e.detail);
                  },
                  onClickToShowDialogs: function onClickToShowDialogs() {
                    return _this.clickToShowDialogsHandler();
                  },
                  onClickToUserProfile: function onClickToUserProfile() {
                    return _this.clickToUserProfileHandler();
                  },
                  onCancelSearchPersonal: function onCancelSearchPersonal() {
                    return _this.cancelSearchPersonal();
                  }
                })
              );

            case "files":
              return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-files-wrapper", {
                // onClickToLink={(item) => this.clickToLink(item.detail)}
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this.clickToShowDialogsHandler();
                }
              });

            case "profile":
              return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-profile", {
                theme: "module",
                categories: _this.categoriesState,
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this.clickToShowDialogsHandler();
                },
                onClickToShowFolders: function onClickToShowFolders() {
                  return _this.clickToShowFoldersHandler();
                }
              });

            case "contacts":
              return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list", {
                theme: "module",
                contacts: _this.contacts,
                // onSearchContact={(detail) => this.searchContact({ detail })}
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this.clickToShowDialogsHandler();
                }
              });

            case "folders":
              return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-folders", {
                onCreateFolder: function onCreateFolder(e) {
                  return _this.createFolderHandler(e.detail);
                },
                dialogs: _this.dialogsState,
                onClickToUserProfile: function onClickToUserProfile() {
                  return _this.clickToUserProfileHandler();
                }
              });
          }
        };

        this.showFullChat = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showFullChat", 7);
        this.createFolder = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "createFolder", 7);
        this.clickToDialog = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
        this.sendTextMessage = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendTextMessage", 7);
        this.clickToFilesBtn = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToFilesBtn", 7);
        this.searchContact = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchContact", 7);
        this.chatViewStateChange = Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "chatViewStateChange", 7);
      }
      /**
       * позволяет установить печатающие данные
       * */


      _createClass(CntModuleChat, [{
        key: "setWritingState",
        value: function () {
          var _setWritingState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.writing = item ? [item] : null;

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function setWritingState(_x) {
            return _setWritingState.apply(this, arguments);
          }

          return setWritingState;
        }()
        /**
         * меняет статус (присутстия собеседников или контакта) в чате
         * */

      }, {
        key: "updateChatPresenceState",
        value: function () {
          var _updateChatPresenceState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(item) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.chatPresenceState = item;

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function updateChatPresenceState(_x2) {
            return _updateChatPresenceState.apply(this, arguments);
          }

          return updateChatPresenceState;
        }()
        /**
         * меняет статусы действия текущих (печатает, записывает и т.д.)
         * */

      }, {
        key: "updateChatActionState",
        value: function () {
          var _updateChatActionState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(item) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.chatActionState = item;

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function updateChatActionState(_x3) {
            return _updateChatActionState.apply(this, arguments);
          }

          return updateChatActionState;
        }()
        /**
         * скрывает весь блок что бы на экране не было вообще видно
         * */

      }, {
        key: "hide",
        value: function () {
          var _hide = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.visibleState = false;

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          function hide() {
            return _hide.apply(this, arguments);
          }

          return hide;
        }()
        /**
         * позволяет активировать/деактивароть возможность записи аудио
         * */

      }, {
        key: "activeRecordAudioState",
        value: function () {
          var _activeRecordAudioState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(state) {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.canRecordAudio = state;

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          function activeRecordAudioState(_x4) {
            return _activeRecordAudioState.apply(this, arguments);
          }

          return activeRecordAudioState;
        }()
        /**
         * позволяет активировать/деактивароть возможность октрытие приложение
         * */

      }, {
        key: "activeShowFullChat",
        value: function () {
          var _activeShowFullChat = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(state) {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.disableShowFullChatState = !state;

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          function activeShowFullChat(_x5) {
            return _activeShowFullChat.apply(this, arguments);
          }

          return activeShowFullChat;
        }()
        /**
         * сменить окно показа
         * */

      }, {
        key: "changeViewToShow",
        value: function () {
          var _changeViewToShow = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(state) {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.chatViewState = state;

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));

          function changeViewToShow(_x6) {
            return _changeViewToShow.apply(this, arguments);
          }

          return changeViewToShow;
        }()
        /**
         * скролит вниз окно сообщений
         * */

      }, {
        key: "safeScrollToBotMessageView",
        value: function () {
          var _safeScrollToBotMessageView = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.scrollMessageViewToBot();

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));

          function safeScrollToBotMessageView() {
            return _safeScrollToBotMessageView.apply(this, arguments);
          }

          return safeScrollToBotMessageView;
        }()
        /**
         * показывает весь блок после скрытия
         * */

      }, {
        key: "show",
        value: function () {
          var _show = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    // show a prompt
                    this.visibleState = true;

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));

          function show() {
            return _show.apply(this, arguments);
          }

          return show;
        }()
        /**
         * показывает только кнопку
         * */

      }, {
        key: "close",
        value: function () {
          var _close = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.showChat(false);

                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));

          function close() {
            return _close.apply(this, arguments);
          }

          return close;
        }()
        /**
         * открывает блок чатов
         * */

      }, {
        key: "open",
        value: function () {
          var _open = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.showChat(true);

                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));

          function open() {
            return _open.apply(this, arguments);
          }

          return open;
        }()
        /**
         * */

      }, {
        key: "openDialog",
        value: function () {
          var _openDialog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(dialog) {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.open();
                    this.clickToDialogHandler(dialog, true);

                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));

          function openDialog(_x7) {
            return _openDialog.apply(this, arguments);
          }

          return openDialog;
        }()
      }, {
        key: "watchDictionaryHandler",
        value: function watchDictionaryHandler(newValue) {
          this.updateDictionary(newValue);
        }
      }, {
        key: "watchDialogsHandler",
        value: function watchDialogsHandler(newValue) {
          this.safeFiltersDialog(this.lastSearchDialog, this.lastClickedCategory, newValue);
        }
      }, {
        key: "watchMessageHandler",
        value: function watchMessageHandler(newValue, oldValue) {
          console.log("The new value of activated is: ", {
            newValue: newValue,
            oldValue: oldValue
          });
          this.messageState = this.message;
        }
      }, {
        key: "watchCategoriesHandler",
        value: function watchCategoriesHandler(newValue) {
          this.categoriesState = newValue;
          this.safeFiltersDialog(this.lastSearchDialog, this.lastClickedCategory, this.dialogs);
        }
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          this.updateDictionary(this.dictionary);
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            style: {
              display: !this.visibleState ? "none" : null
            }
          }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "wrapper-modal"
          }, this.openState ? Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "wrapper-chat"
          }, Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("module-header", {
            disableShowFullChatState: this.disableShowFullChatState,
            onShowFullChat: function onShowFullChat() {
              return _this2.showFullChatHandler();
            },
            onClose: function onClose() {
              return _this2.onClose();
            }
          }), Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-chat-wrapper"
          }, this.ShowContent(this.chatViewState))) : "", Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["h"])("btn-wrapper", {
            onClickToShowChat: function onClickToShowChat() {
              return _this2.showChat();
            },
            showChat: this.openState,
            dialogs: this.countNewMess(this.dialogs)
          })));
        }
        /**
         *
         * */

      }, {
        key: "updateDictionary",
        value: function updateDictionary(newValue) {
          _utils_f6ec1f87_js__WEBPACK_IMPORTED_MODULE_1__["C"].dictionary$.next(newValue); // console.log("changed - dictionary");

        }
      }, {
        key: "countNewMess",
        value: function countNewMess(array) {
          var counter = 0;
          array.map(function (item) {
            counter += item.newMessage;
          });
          return counter;
        }
        /**
         * */
        // public clickToCategory(value: ChatCategoryInterface) {
        //   this.dialogsState = filterDialogsByCategory(value, this.dialogs);
        // }

        /**
         * dialogue search
         * */

      }, {
        key: "safeFiltersDialog",
        value: function safeFiltersDialog(searchValue, category, allDialogs) {
          this.lastSearchDialog = searchValue;
          this.lastClickedCategory = category;
          var filteredDialogsBySearchValue = allDialogs;

          if (!this.disableInnerSearchDialogsState) {
            filteredDialogsBySearchValue = Object(_index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["g"])(searchValue, allDialogs);
          }

          this.dialogsState = Object(_index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["h"])(category, filteredDialogsBySearchValue);
        }
        /**
         * search for private messages
         * */

      }, {
        key: "searchPersonalMessages",
        value: function searchPersonalMessages(value) {
          if (!this.disableInnerSearchMessagesState) {
            this.messageState = Object(_index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["i"])(value, this.message);
          }
        }
      }, {
        key: "createFolderHandler",
        value: function createFolderHandler(item) {
          return item; // console.log("createFolderHandler", item);
        }
        /**
         * Метод отмена поиска
         * **/

      }, {
        key: "cancelSearchPersonal",
        value: function cancelSearchPersonal() {
          this.messageState = this.message;
        }
        /**
         * Метод для изменения состояния чата
         * */

      }, {
        key: "showChat",
        value: function showChat() {
          var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.openState;
          this.openState = state;
        }
        /**
         * Метод для закрытия чата
         * */

      }, {
        key: "onClose",
        value: function onClose() {
          this.openState = false;
        }
        /**
         * click to Link
         * */

      }, {
        key: "clickToLinkHandler",
        value: function clickToLinkHandler() {
          return this.chatViewState;
        }
        /**
         *
         * */

      }, {
        key: "clickToDialogHandler",
        value: function clickToDialogHandler(dialog, pseudoClick) {
          if (pseudoClick) {
            this.clickToDialog.emit(dialog);
          }

          this.openedDialog = dialog;
          this.updateViewState(_index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["e"].personal);
        }
        /**
         *
         * */

      }, {
        key: "clickToFilesBtnHandler",
        value: function clickToFilesBtnHandler() {
          this.updateViewState(_index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["e"].files);
        }
        /**
         *
         * */

      }, {
        key: "showFullChatHandler",
        value: function showFullChatHandler() {
          this.showFullChat.emit({
            view: this.chatViewState,
            data: this.chatViewState === _index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["e"].personal ? this.openedDialog : null
          });
        }
        /**
         *
         * */

      }, {
        key: "clickToShowDialogsHandler",
        value: function clickToShowDialogsHandler() {
          this.updateViewState(_index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["e"].dialogs);
        }
        /**
         *
         * */

      }, {
        key: "clickToUserProfileHandler",
        value: function clickToUserProfileHandler() {
          this.updateViewState(_index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["e"].profile);
        }
        /**
         *
         * */

      }, {
        key: "sendNewMessModal",
        value: function sendNewMessModal() {
          this.updateViewState(_index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["e"].contacts);
        }
        /**
         *
         * */

      }, {
        key: "clickToShowFoldersHandler",
        value: function clickToShowFoldersHandler() {
          this.updateViewState(_index_582bc2f2_js__WEBPACK_IMPORTED_MODULE_2__["e"].folders);
        }
        /**
         *
         * */

      }, {
        key: "scrollMessageViewToBot",
        value: function scrollMessageViewToBot() {
          _utils_f6ec1f87_js__WEBPACK_IMPORTED_MODULE_1__["a"].safeScrollToBot();
        }
        /**
         * */

      }, {
        key: "updateViewState",
        value: function updateViewState(state) {
          this.chatViewStateChange.emit(this.chatViewState = state);
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_063f1606_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "dictionary": ["watchDictionaryHandler"],
            "dialogs": ["watchDialogsHandler"],
            "message": ["watchMessageHandler"],
            "categories": ["watchCategoriesHandler"]
          };
        }
      }]);

      return CntModuleChat;
    }();

    CntModuleChat.style = cntModuleChatCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-cnt-module-chat-entry-js-es5.js.map