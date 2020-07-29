function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-contact-card_24-entry-js"], {
  /***/
  "./node_modules/stencil-chat/dist/esm/contact-card_24.entry.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/stencil-chat/dist/esm/contact-card_24.entry.js ***!
    \*********************************************************************/

  /*! exports provided: contact_card, contacts_list, contacts_list_body, contacts_list_header, dialog_card, dialog_categories, footer_audio, footer_text, m_chat_dialogs, m_chat_footer, m_chat_header, message_from, message_img, message_text, mobile_chat, mobile_dialogs, mobile_personal, my_component, personal_footer, personal_header, personal_message, s_adam_profile, user_folders, user_status */

  /***/
  function node_modulesStencilChatDistEsmContactCard_24EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "contact_card", function () {
      return ContactCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "contacts_list", function () {
      return ContactsList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "contacts_list_body", function () {
      return ContactsListBody;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "contacts_list_header", function () {
      return ContactsListHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dialog_card", function () {
      return DialogCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dialog_categories", function () {
      return DialogCategories;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "footer_audio", function () {
      return FooterAudio;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "footer_text", function () {
      return FooterText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "m_chat_dialogs", function () {
      return MChatDialogs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "m_chat_footer", function () {
      return MChatFooter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "m_chat_header", function () {
      return MChatHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "message_from", function () {
      return MessageFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "message_img", function () {
      return MessageImg;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "message_text", function () {
      return MessageText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mobile_chat", function () {
      return MobileChat;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mobile_dialogs", function () {
      return MobileDialogs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mobile_personal", function () {
      return MobilePersonal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "my_component", function () {
      return MyComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "personal_footer", function () {
      return PersonalFooter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "personal_header", function () {
      return PersonalHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "personal_message", function () {
      return PersonalMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_adam_profile", function () {
      return SAdamProfile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "user_folders", function () {
      return UserFolders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "user_status", function () {
      return UserStatus;
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


    var _utils_4870d924_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utils-4870d924.js */
    "./node_modules/stencil-chat/dist/esm/utils-4870d924.js");
    /* harmony import */


    var _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mock-2d06f4a2.js */
    "./node_modules/stencil-chat/dist/esm/mock-2d06f4a2.js");

    var contactCardCss = ".m-contact-card.sc-contact-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:20px;cursor:pointer}.img-user.sc-contact-card{margin-right:20px;text-align:center}.img-user.sc-contact-card .img.sc-contact-card{width:50px;height:50px;border-radius:50%;background-position:center;background-size:cover}.info-card.sc-contact-card{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;-ms-flex-pack:justify;justify-content:space-between}.unfo-user.sc-contact-card{width:80%;overflow:hidden}.comp.sc-contact-card .unfo-user.sc-contact-card{width:auto}.name-user.sc-contact-card{font-size:14px;font-weight:600;color:#4c567d}.message-user.sc-contact-card{font-size:14px;color:#979eab;white-space:nowrap}.data-message.sc-contact-card{text-align:center}.data-message.sc-contact-card .date.sc-contact-card{font-size:10px;color:#979eab}.data-message.sc-contact-card .new-message.sc-contact-card{font-size:10px;color:#979eab}.add-new-message.sc-contact-card{background-color:#ff7e7f;font-size:10px;padding:1px 5px;border-radius:50%;color:#fff}.comp.sc-contact-card .info-card.sc-contact-card{width:70%}.comp.sc-contact-card .m-contact-card.sc-contact-card{padding:20px 10px;margin:0}.comp.sc-contact-card .m-contact-card.sc-contact-card:hover{background-color:white}.comp.sc-contact-card .data-message.sc-contact-card{height:100%}";

    var ContactCard = /*#__PURE__*/function () {
      function ContactCard(hostRef) {
        _classCallCheck(this, ContactCard);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной версии
         * */

        this.theme = "mobile";
        this.clickToContact = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToContact", 7);
      }

      _createClass(ContactCard, [{
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-card"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-contact-card",
            onClick: function onClick() {
              return _this.clickToDialogHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "img-user"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "img",
            style: {
              backgroundImage: "url(".concat(this.contact.img, ")")
            }
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "info-card"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "unfo-user"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "name-user"
          }, this.contact.name), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "message-user"
          }, " ", "last seen ", this.createSendTime(this.contact.time.created)))))));
        }
        /**
         * Метод выобра темы для Мобильная/Модульной версии
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          // console.log(this.theme)
          return _defineProperty({}, this.theme, true);
        }
        /**
         * click to contact
         * */

      }, {
        key: "clickToDialogHandler",
        value: function clickToDialogHandler() {
          this.clickToContact.emit(this.contact);
        }
        /*
         * last visit time
         * **/

      }, {
        key: "createSendTime",
        value: function createSendTime(array) {
          var timeNow = array;
          var hours = timeNow.getHours();
          var minutes = timeNow.getMinutes(); // add zero for minutes

          if (minutes < 10) {
            minutes = "0" + minutes;
          } // выводим время в минутах/часах


          return "".concat(hours, " : ").concat(minutes);
        }
      }]);

      return ContactCard;
    }();

    ContactCard.style = contactCardCss;
    var contactsListCss = "";

    var ContactsList = /*#__PURE__*/function () {
      function ContactsList(hostRef) {
        _classCallCheck(this, ContactsList);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Тема для модульного/мобильного чата
         * */

        this.theme = "mobile";
        this.clickToLink = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
        this.searchContact = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchContact", 7);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.clickToShowContacts = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowContacts", 7);
        this.clickToShowMenuBar = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowMenuBar", 7);
        this.clickToContact = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToContact", 7);
      }
      /**
       * при изменении входящих контактов фильтрует данные заново
       * */


      _createClass(ContactsList, [{
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
          var _this2 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list-header", {
            onSearchContact: function onSearchContact(e) {
              return _this2.filterContacts(e.detail);
            }
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list-body", {
            theme: this.theme,
            contacts: this.contactsFiltered
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("m-chat-footer", {
            theme: this.theme
          }));
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

      return ContactsList;
    }();

    ContactsList.style = contactsListCss;
    var contactsListBodyCss = ".contacts-list-body.sc-contacts-list-body{padding:20px 20px 0px;border-bottom:1px solid #ccc;height:calc(100vh - 175px);overflow:auto}.contacts-list-body.sc-contacts-list-body{padding:20px 30px 0px;border-bottom:1px solid #ccc;height:calc(100vh - 155px);overflow:auto}.sc-contacts-list-body::-webkit-scrollbar{width:0px;background:transparent}.module.sc-contacts-list-body .contacts-list-body.sc-contacts-list-body{height:calc(100vh - 325px)}";

    var ContactsListBody = /*#__PURE__*/function () {
      function ContactsListBody(hostRef) {
        _classCallCheck(this, ContactsListBody);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной/Комп версии
         * */

        this.theme = "mobile";
      }

      _createClass(ContactsListBody, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-body"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ContactCard$1, {
            contacts: this.contacts
          })));
        }
        /**
         * Метод выобра темы для Мобильная/Модульной версии
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
      }]);

      return ContactsListBody;
    }();
    /**
     * Компонент высшего порядка для передачи данных о контактах
     * */


    var ContactCard$1 = function ContactCard$1(props) {
      return props.contacts.map(function (item) {
        return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contact-card", {
          contact: item
        });
      });
    };

    ContactsListBody.style = contactsListBodyCss;
    var contactsListHeaderCss = ".contacts-list-header.sc-contacts-list-header{border-bottom:1px solid #eaeaea;background-color:#eaeaea45;padding:20px 0px 10px 0px}.comp.sc-contacts-list-header .contacts-list-header.sc-contacts-list-header{background-color:transparent;padding:0 0 20px 0;border-bottom:none}.comp.sc-contacts-list-header{margin:0 -20px;padding:0 20px}.custom-link.sc-contacts-list-header{cursor:pointer}.contacts-list-description.sc-contacts-list-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;padding:0px 20px}.comp.sc-contacts-list-header .contacts-list-description.sc-contacts-list-header{display:none}.contacts-list-arraw-back.sc-contacts-list-header i.sc-contacts-list-header{font-size:14px;color:#979eab}.contacts-list-title.sc-contacts-list-header{font-weight:600;color:#4c567d;-ms-flex-align:center;align-items:center;width:100%;margin-left:-12px;text-align:center}.contacts-list-input.sc-contacts-list-header{text-align:center;margin:10px 0px;position:relative;padding:0 20px}.comp.sc-contacts-list-header .contacts-list-input.sc-contacts-list-header{margin:0}.contacts-list-input.sc-contacts-list-header input.sc-contacts-list-header{text-align:center;border-radius:5px;border:none;background-color:#eaeaea;width:100%;padding:5px;font-size:14px;outline:none}.comp.sc-contacts-list-header .contacts-list-input.sc-contacts-list-header input.sc-contacts-list-header{text-align:left;border-radius:0;background-color:white;width:100%;padding:10px 40px;font-size:13px}.contacts-list-input.sc-contacts-list-header i.sc-contacts-list-header{position:absolute;top:30%;z-index:2;left:39%;font-size:14px;color:#979eab}.comp.sc-contacts-list-header input.sc-contacts-list-header::-moz-placeholder{color:#979eab}.comp.sc-contacts-list-header input.sc-contacts-list-header::-webkit-input-placeholder{color:#979eab}";

    var ContactsListHeader = /*#__PURE__*/function () {
      function ContactsListHeader(hostRef) {
        _classCallCheck(this, ContactsListHeader);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной версии
         * */

        this.theme = "mobile";
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.searchContact = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchContact", 7);
      }

      _createClass(ContactsListHeader, [{
        key: "render",
        value: function render() {
          var _this3 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-header"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-description"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-arraw-back custom-link ",
            onClick: function onClick() {
              return _this3.clickToShowDialogsHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-arrow-left"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-title"
          }, "Contacts")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-input"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "text",
            placeholder: "Search..",
            onInput: function onInput(e) {
              return _this3.searchContactHandler(e.target.value);
            }
          }))));
        }
        /**
         * Метод выобра темы для Мобильная/Модульной версии
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
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
         *
         * */

      }, {
        key: "searchContactHandler",
        value: function searchContactHandler(value) {
          this.searchContact.emit(value);
        }
      }]);

      return ContactsListHeader;
    }();

    ContactsListHeader.style = contactsListHeaderCss;
    var dialogCardCss = ".m-dialog-card.sc-dialog-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:20px;cursor:pointer}.img-user.sc-dialog-card{margin-right:20px;text-align:center}.img-user.sc-dialog-card .img.sc-dialog-card{width:50px;height:50px;border-radius:50%;background-position:center;background-size:cover}.info-card.sc-dialog-card{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;-ms-flex-pack:justify;justify-content:space-between}.unfo-user.sc-dialog-card{width:80%;overflow:hidden}.mobile.sc-dialog-card .unfo-user.sc-dialog-card{max-width:250px;overflow:hidden}.name-user.sc-dialog-card{font-size:14px;font-weight:600;color:#4c567d}.message-user.sc-dialog-card{font-size:14px;color:#979eab;white-space:nowrap}.data-message.sc-dialog-card{text-align:center}.data-message.sc-dialog-card .date.sc-dialog-card{font-size:10px;color:#979eab}.data-message.sc-dialog-card .new-message.sc-dialog-card{font-size:10px;color:#979eab}.add-new-message.sc-dialog-card{background-color:#ff7e7f;font-size:10px;padding:1px 5px;border-radius:50%;color:#fff}.comp.sc-dialog-card .info-card.sc-dialog-card{width:70%}.comp.sc-dialog-card .m-dialog-card.sc-dialog-card{padding:20px 10px;margin:0}.comp.sc-dialog-card .m-dialog-card.sc-dialog-card:hover{background-color:white}.comp.sc-dialog-card .data-message.sc-dialog-card{height:100%}@media (max-width: 320px){.info-card.sc-dialog-card{max-width:210px}}";

    var DialogCard = /*#__PURE__*/function () {
      function DialogCard(hostRef) {
        _classCallCheck(this, DialogCard);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * карточка диалога
         * */

        this.theme = "mobile";
        this.clickToDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
      }

      _createClass(DialogCard, [{
        key: "render",
        value: function render() {
          var _this4 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-dialog-card",
            onClick: function onClick() {
              return _this4.clickToDialogHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "img-user"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.mess.online ? "img online" : "img",
            style: {
              backgroundImage: "url(".concat(this.mess.img, ")")
            }
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "info-card"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "unfo-user"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "name-user"
          }, this.mess.name), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "message-user"
          }, this.mess.mess)), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "data-message"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "date"
          }, " ", this.createSendTime(this.mess.time.created)), this.showNewMess(this.mess)))));
        }
      }, {
        key: "showNewMess",
        value: function showNewMess(dialog) {
          if (dialog.newMessage > 0) {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "add-new-message"
            }, " ", dialog.newMessage);
          }
        }
        /**
         * Управление по клику на диалог
         * */

      }, {
        key: "clickToDialogHandler",
        value: function clickToDialogHandler() {
          // this.clickToDialog.emit({ data: this.mess });
          this.clickToDialog.emit(this.mess);
        } // public clickToLinkHandler() {
        //   this.clickToLink.emit({place: ChatLinkTypeEnum.showPersonalDialog, data: this.mess })
        // }

        /**
         * Метод выобра темы для ПК/Мобильная/Модульной версии
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
        /**
         * Метод вывода времени отправки сообщения
         * */

      }, {
        key: "createSendTime",
        value: function createSendTime(array) {
          var timeNow = array;
          var hours = timeNow.getHours();
          var minutes = timeNow.getMinutes(); // add zero for minutes

          if (minutes < 10) {
            minutes = "0" + minutes;
          } // выводим время в минутах/часах


          return "".concat(hours, " : ").concat(minutes);
        }
      }]);

      return DialogCard;
    }();

    DialogCard.style = dialogCardCss;
    var dialogCategoriesCss = "@charset \"UTF-8\";.btns-nav.sc-dialog-categories{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow-x:scroll;overflow-y:hidden;height:30px}.btns-nav.sc-dialog-categories span.sc-dialog-categories{cursor:pointer;font-size:14px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;font-weight:600;color:#979eab;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out;padding:0 20px;height:30px;border-bottom:1px solid #ccc}.btns-nav.sc-dialog-categories span.sc-dialog-categories:hover,.btns-nav.sc-dialog-categories span.active.sc-dialog-categories{border-bottom:1px solid #5780f7}.btns-nav.sc-dialog-categories span.sc-dialog-categories:hover{color:#5780f7}.btns-nav.sc-dialog-categories span.active.sc-dialog-categories{color:black}.comp.sc-dialog-categories .btns-nav.sc-dialog-categories{border-bottom:none}.comp.sc-dialog-categories{margin:0 -20px}.comp.sc-dialog-categories .btns-nav.sc-dialog-categories span.sc-dialog-categories{padding-bottom:10px}.mobile.sc-dialog-categories .btns-nav.sc-dialog-categories{margin-top:10px}.module.sc-dialog-categories .btns-nav.sc-dialog-categories span.sc-dialog-categories{font-size:14px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0px 20px;height:30px;text-align:center;font-weight:600;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out}.module.sc-dialog-categories .btns-nav.sc-dialog-categories{-ms-flex-pack:start;justify-content:start}.sc-dialog-categories::-webkit-scrollbar{height:0px}";

    var DialogCategories = /*#__PURE__*/function () {
      function DialogCategories(hostRef) {
        _classCallCheck(this, DialogCategories);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         *
         * */

        this.theme = "comp";
        /**
         *
         * */

        this.categories = [];
        this.clickToCategory = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToCategory", 7);
      }

      _createClass(DialogCategories, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "btns-nav"
          }, this.getCategories(this.categories)));
        }
        /**
         * Метод получения названий категорий
         * */

      }, {
        key: "getCategories",
        value: function getCategories(array) {
          var _this5 = this;

          return array.map(function (item) {
            var _a;

            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": {
                active: item.id === ((_a = _this5.lastClickedCategory) === null || _a === void 0 ? void 0 : _a.id)
              },
              onClick: function onClick() {
                return _this5.clickToCategoryHandler(item);
              }
            }, item.name);
          });
        }
        /**
         * */

      }, {
        key: "clickToCategoryHandler",
        value: function clickToCategoryHandler(item) {
          this.clickToCategory.emit(this.lastClickedCategory = item);
        }
        /**
         *
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
      }]);

      return DialogCategories;
    }();

    DialogCategories.style = dialogCategoriesCss;
    var footerAudioCss = ".record-dot.sc-footer-audio{width:10px;height:10px;background-color:#ff7e7f;border-radius:100%}.personal-footer.sc-footer-audio{position:absolute;bottom:0;width:100%;background-color:white;z-index:1}.footer-wrapper.sc-footer-audio{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-radius:20px;-ms-flex-align:center;align-items:center;padding:10px 20px;-webkit-box-shadow:0px 0px 10px 1px #d4d4d4;box-shadow:0px 0px 10px 1px #d4d4d4;font-size:18px;color:#979eab}.audio.sc-footer-audio{width:20px;text-align:center;cursor:pointer}.input-wrapper.sc-footer-audio{width:100%}.input-wrapper.sc-footer-audio input.sc-footer-audio{width:100%;text-align:center;padding:10px 0;border:none;font-size:16px;outline:none;color:#4c567d}input.input-audio.sc-footer-audio{text-align:center !important}.comp.sc-footer-audio .footer-wrapper.sc-footer-audio{-webkit-box-shadow:none;box-shadow:none;border:1px solid lightgray}.mobile.sc-footer-audio .footer-wrapper.sc-footer-audio{border-radius:15px 15px 0px 0px}.animate-audio.sc-footer-audio{width:40px;height:40px;background-color:red;border-radius:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.recording-btn.sc-footer-audio{display:block;width:40px;height:40px;border-radius:100%;background-color:#bacbe3;opacity:0.2;position:absolute;right:10px}.c-chat-microphone.sc-footer-audio{z-index:1;position:absolute;top:24px;right:23px}.timer.sc-footer-audio{margin-left:10px}.record-audio.sc-footer-audio{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:14px}.module.sc-footer-audio .personal-footer.sc-footer-audio .footer-wrapper.sc-footer-audio{border-radius:15px 15px 0px 0px}.mobile.sc-footer-audio .footer-wrapper.sc-footer-audio{border-radius:15px 15px 0px 0px}";

    var FooterAudio = /*#__PURE__*/function () {
      function FooterAudio(hostRef) {
        var _this6 = this;

        _classCallCheck(this, FooterAudio);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Пропс с классом CSS
         */

        this.theme = "comp";
        /**
         * Курсор за пределами инпута остановка таймера
         * */

        this.mouseUpCallback = function (event) {
          var state = _this6.outInputTag.contains(event.target);

          _this6.recordFinished.emit(state);
        };

        this.recordFinished = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "recordFinished", 7);
      }

      _createClass(FooterAudio, [{
        key: "componentDidLoad",
        value: function componentDidLoad() {
          document.addEventListener("mouseup", this.mouseUpCallback);
          this.startTimer();
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          document.removeEventListener("mouseup", this.mouseUpCallback);
        }
      }, {
        key: "render",
        value: function render() {
          var _this7 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-footer"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "footer-wrapper",
            onMouseLeave: function onMouseLeave(e) {
              return _this7.mouseOutInput(e);
            },
            ref: function ref(el) {
              return _this7.outInputTag = el;
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "record-audio"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "record-dot"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "timer",
            ref: function ref(el) {
              return _this7.timerElement = el;
            }
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "input-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            "class": "input-audio",
            type: "text",
            placeholder: "Release outside this field to cancel",
            readonly: true
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "audio",
            id: "audio"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-microphone"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "recording-btn"
          }))));
        }
        /**
         * смена класса
         */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
        /**
         * Старт таймера
         * */

      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this8 = this;

          var timer = new _utils_4870d924_js__WEBPACK_IMPORTED_MODULE_2__["T"]();
          timer.start(function (time) {
            {
              _this8.timerElement.innerText = time;
            }
          });
        }
        /**
         * Событие при MouseLeave
         * */

      }, {
        key: "mouseOutInput",
        value: function mouseOutInput(e) {
          console.log("mouseOutInput", e);
        }
      }]);

      return FooterAudio;
    }();

    FooterAudio.style = footerAudioCss;
    var footerTextCss = ".personal-footer.sc-footer-text{position:absolute;bottom:0;width:100%;background-color:white;z-index:1}.footer-wrapper.sc-footer-text{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-radius:20px;-ms-flex-align:center;align-items:center;padding:10px 20px;-webkit-box-shadow:0px 0px 10px 1px #d4d4d4;box-shadow:0px 0px 10px 1px #d4d4d4;font-size:18px;color:#979eab}.file.sc-footer-text,.audio.sc-footer-text{width:20px;text-align:center;cursor:pointer}.file.sc-footer-text i.sc-footer-text:hover{color:#6328f8}.audio.sc-footer-text i.sc-footer-text:hover{color:#6328f8}.input-wrapper.sc-footer-text{width:100%;padding:0px 15px}.input-wrapper.sc-footer-text input.sc-footer-text{width:100%;text-align:center;color:#4c567d;padding:10px 0;border:none;font-size:16px;outline:none}.comp.sc-footer-text .footer-wrapper.sc-footer-text{-webkit-box-shadow:none;box-shadow:none;border:1px solid lightgray}.comp.sc-footer-text .input-wrapper.sc-footer-text input.sc-footer-text{text-align:left}.module.sc-footer-text .input-wrapper.sc-footer-text input.sc-footer-text{text-align:left}.module.sc-footer-text .personal-footer.sc-footer-text .footer-wrapper.sc-footer-text{border-radius:15px 15px 0px 0px}.mobile.sc-footer-text .footer-wrapper.sc-footer-text{border-radius:15px 15px 0px 0px}.animate-audio.sc-footer-text{width:40px;height:40px;background-color:red;border-radius:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.c-chat-microphone.sc-footer-text{z-index:1;position:absolute;top:24px;right:23px}";

    var FooterText = /*#__PURE__*/function () {
      function FooterText(hostRef) {
        _classCallCheck(this, FooterText);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Пропс с классом
         */

        this.theme = "comp";
        /**
         * Возможность записи аудио
         */

        this.canRecordAudio = false;
        /**
         * */

        this.showAudioSendButton = true;
        this.showSendFileFooter = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showSendFileFooter", 7);
        this.showRecordAudioFooter = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showRecordAudioFooter", 7);
        this.sendTextMessage = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendTextMessage", 7);
      }
      /**
       *
       * */


      _createClass(FooterText, [{
        key: "mouseEnter",
        value: function mouseEnter(event) {
          console.log("mouseEnter", event);
        }
      }, {
        key: "render",
        value: function render() {
          var _this9 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-footer"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "footer-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file",
            onClick: function onClick() {
              return _this9.showSendFileFooter.emit();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-paperclip"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "input-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", {
            onSubmit: function onSubmit(e) {
              return _this9.sendMessageFromForm(e);
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "text",
            ref: function ref(el) {
              return _this9.inputElement = el;
            },
            onInput: function onInput(e) {
              return _this9.switchIconInput(e.target.value);
            },
            placeholder: "Type something ..."
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "audio",
            id: "audio"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(SendButtonTag, {
            showAudio: this.canRecordAudio && this.showAudioSendButton,
            sendMessageFromButton: this.sendMessageFromButton.bind(this),
            clickOnAudio: this.showRecordAudioFooter
          })))));
        }
        /**
         * Смена класса
         */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
        /**
         * when sending message-from
         * */

      }, {
        key: "sendingNewMess",
        value: function sendingNewMess() {
          var input = this.inputElement;

          if (input.value === "") {
            return false;
          } else {
            // скрипт отправки сообщения
            // console.log("send mess:", input.value);
            this.sendTextMessage.emit(input.value); // скрипт отправки сообщения

            this.switchIconInput(input.value = "");
          }
        }
        /**
         * send message from form
         * */

      }, {
        key: "sendMessageFromForm",
        value: function sendMessageFromForm(e) {
          e.preventDefault();
          this.sendingNewMess();
        }
        /**
         * send message from send button
         * */

      }, {
        key: "sendMessageFromButton",
        value: function sendMessageFromButton() {
          this.sendingNewMess();
        }
        /**
         * Функция для для отправки сообщения
         * */

      }, {
        key: "switchIconInput",
        value: function switchIconInput(value) {
          this.showAudioSendButton = !value.replace(/[\t\n\r ]+/g, "").length;
        }
      }]);

      return FooterText;
    }();
    /**
     * Смена иконки микрофона на стрелку
     * */


    var SendButtonTag = function SendButtonTag(props) {
      return (props === null || props === void 0 ? void 0 : props.showAudio) ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
        "class": "c-chat c-chat-microphone",
        onMouseDown: function onMouseDown() {
          return props.clickOnAudio.emit();
        }
      }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
        "class": "c-chat c-chat-location-arrow",
        onClick: function onClick() {
          return props.sendMessageFromButton();
        }
      });
    };

    FooterText.style = footerTextCss;
    var mChatDialogsCss = ".m-chat-dialogs.sc-m-chat-dialogs{padding:20px 30px 0px;border-bottom:1px solid #ccc;height:calc(100vh - 135px);overflow:auto}@media (max-width: 414px){.m-chat-dialogs.sc-m-chat-dialogs{padding:20px 15px 0px}}";

    var MChatDialogs = /*#__PURE__*/function () {
      function MChatDialogs(hostRef) {
        _classCallCheck(this, MChatDialogs);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(MChatDialogs, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-chat-dialogs"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Dialog, {
            mess: this.dialogs
          }));
        }
      }]);

      return MChatDialogs;
    }();
    /**
     * Распаковка массива диалогов и выдача в компоненте <dialog-card/>
     * */


    var Dialog = function Dialog(array) {
      return array.mess.map(function (item) {
        return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-card", {
          mess: item
        });
      });
    };

    MChatDialogs.style = mChatDialogsCss;
    var mChatFooterCss = ".m-chat-footer.sc-m-chat-footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin:15px;padding:0px 15px}.m-chat-footer.sc-m-chat-footer span.sc-m-chat-footer i.sc-m-chat-footer{color:#979eab;font-size:18px;-webkit-transition:0.3s ease;transition:0.3s ease}.m-chat-footer.sc-m-chat-footer span.sc-m-chat-footer{cursor:pointer}.m-chat-footer.sc-m-chat-footer span.sc-m-chat-footer i.sc-m-chat-footer:hover{color:rgb(87, 128, 247)}.module.sc-m-chat-footer .showContacts.sc-m-chat-footer{display:none}";

    var MChatFooter = /*#__PURE__*/function () {
      function MChatFooter(hostRef) {
        _classCallCheck(this, MChatFooter);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной версии
         * */

        this.theme = "mobile";
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.clickToShowContacts = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowContacts", 7);
        this.clickToShowMenuBar = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowMenuBar", 7);
      }

      _createClass(MChatFooter, [{
        key: "render",
        value: function render() {
          var _this10 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-chat-footer"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "showDialogs",
            onClick: function onClick() {
              return _this10.clickToShowDialogsHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-comment"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "showContacts",
            onClick: function onClick() {
              return _this10.clickToShowContactsHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-user-friends"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "showMenuBar",
            onClick: function onClick() {
              return _this10.clickToShowMenuBarHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-bars"
          }))));
        }
        /**
         * Метод выобра темы для Мобильная/Модульной версии
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
        /**
         * click to show dialogs
         * */

      }, {
        key: "clickToShowDialogsHandler",
        value: function clickToShowDialogsHandler() {
          this.clickToShowDialogs.emit();
        }
        /**
         * click to show Contacts
         * */

      }, {
        key: "clickToShowContactsHandler",
        value: function clickToShowContactsHandler() {
          this.clickToShowContacts.emit();
        }
        /**
         * click to show Contacts
         * */

      }, {
        key: "clickToShowMenuBarHandler",
        value: function clickToShowMenuBarHandler() {
          this.clickToShowMenuBar.emit();
        }
      }]);

      return MChatFooter;
    }();

    MChatFooter.style = mChatFooterCss;
    var mChatHeaderCss = ".modal-wrapper.sc-m-chat-header{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0px 15px;height:40px;-webkit-transition:0.4s ease-in-out;transition:0.4s ease-in-out}.modal-wrapper.sc-m-chat-header input.sc-m-chat-header{text-align:center;border-radius:5px;border:none;background-color:#eaeaea;width:100%;padding:5px;font-size:14px;outline:none}.m-chat-header.sc-m-chat-header{border-bottom:1px solid #ccc}.m-chat-header.sc-m-chat-header .title.sc-m-chat-header{font-weight:600;color:#4c567d}.m-chat-header.sc-m-chat-header .search.sc-m-chat-header i.sc-m-chat-header{color:#979eab;-webkit-transition:0.3s ease;transition:0.3s ease}.m-chat-header.sc-m-chat-header .search.sc-m-chat-header i.sc-m-chat-header:hover{color:#5780f7}.m-chat-header.sc-m-chat-header .add.sc-m-chat-header i.sc-m-chat-header{color:#979eab;font-size:18px;-webkit-transition:0.3s ease;transition:0.3s ease}.m-chat-header.sc-m-chat-header .add.sc-m-chat-header i.sc-m-chat-header:hover{color:#5780f7}.title-wrapper.sc-m-chat-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding:20px 20px 0px}.custom-link.sc-m-chat-header{cursor:pointer}";

    var MChatHeader = /*#__PURE__*/function () {
      function MChatHeader(hostRef) {
        _classCallCheck(this, MChatHeader);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         *
         * */

        this.isShowModal = true;
        this.searchDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialogs", 7);
        this.cancelSearchPersonal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "cancelSearchPersonal", 7);
        this.clickToAddDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToAddDialog", 7);
      }
      /**
       * Показывать/скрывать окно поиска
       * */


      _createClass(MChatHeader, [{
        key: "showModal",
        value: function showModal() {
          this.isShowModal = !this.isShowModal;
        }
      }, {
        key: "cancelSearchPersonalHandler",
        value: function cancelSearchPersonalHandler() {
          this.cancelSearchPersonal.emit();
        }
      }, {
        key: "render",
        value: function render() {
          var _this11 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-chat-header"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "title-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "search custom-link",
            onClick: function onClick() {
              return _this11.showModal();
            }
          }, this.isShowModal ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-search"
          }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-times",
            onClick: function onClick() {
              return _this11.cancelSearchPersonalHandler();
            }
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "title"
          }, "Messages"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "add custom-link",
            onClick: function onClick() {
              return _this11.clickToAddDialogHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-cog hover-link"
          }))), this.isShowModal ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-categories", {
            theme: "mobile",
            categories: this.categories
          }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "modal-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "text",
            placeholder: "search",
            onInput: function onInput(e) {
              return _this11.searchDialogsHandler(e);
            }
          })));
        }
        /**
         * search Dialogs
         * */

      }, {
        key: "searchDialogsHandler",
        value: function searchDialogsHandler(event) {
          // @ts-ignore
          this.searchDialogs.emit(event.target.value);
        }
        /**
         * Add dialog method
         * */

      }, {
        key: "clickToAddDialogHandler",
        value: function clickToAddDialogHandler() {
          this.clickToAddDialog.emit();
        }
      }]);

      return MChatHeader;
    }();

    MChatHeader.style = mChatHeaderCss;
    var messageFromCss = ".from-mess-wrapper.sc-message-from .mess-img.sc-message-from{height:150px;border-radius:20px 0 20px 20px;background-position:center;background-size:cover}.from-mess-wrapper.sc-message-from{margin:15px 0px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.from-mess-wrap.sc-message-from{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;width:100%}.from-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:350px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:10px;border:1px solid #c7d0e8;border-radius:20px 0px 20px 20px;background-color:#ebf0fe;color:#799af8;font-size:14px;min-height:42px}.from-mess-wrapper.sc-message-from .mess-img.sc-message-from{max-width:350px;min-width:300px;height:150px;border-radius:20px 0 20px 20px;background-position:center;background-size:cover}.to-me-mess-wrapper.sc-message-from{margin:15px 0px}.to-me-mess-wrap.sc-message-from{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:end}.to-me-mess-wrap.sc-message-from .img.sc-message-from{width:30px;height:30px;margin-right:10px;border-radius:50%;background-size:cover;background-position:center}.to-me-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:350px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:10px;border:1px solid #ccc;border-radius:0px 20px 20px 20px;font-size:14px;color:#979eab;display:-ms-flexbox;display:flex;-ms-flex-align:unset;align-items:unset;-ms-flex-pack:justify;justify-content:space-between;background:white;min-height:42px}.to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{max-width:350px;min-width:300px;height:150px;border-radius:0px 20px 20px 20px;background-position:center;background-size:cover}.user-mess.sc-message-from .check.sc-message-from{font-size:10px;margin-left:5px}.system-message.sc-message-from{text-align:center;font-size:13px;color:#969696;margin:25px 0px;border-bottom:1px solid #ccc;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.system-message.sc-message-from div.sc-message-from{border:1px solid #969696;padding:5px 8px;border-radius:15px;background-color:#fff;margin-bottom:-15px}.module.sc-message-from .personal-message.sc-message-from .to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:260px}.module.sc-message-from .from-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:260px}.module.sc-message-from .personal-message.sc-message-from .from-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:260px}.module.sc-message-from .to-me-mess-wrap.sc-message-from{max-width:315px}@media (max-width: 414px){.from-mess-wrapper.sc-message-from .mess-img.sc-message-from,.to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:230px}.mess-img.sc-message-from .check.sc-message-from{left:90%}.from-mess-wrapper.sc-message-from .from-mess.sc-message-from,.to-me-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:230px}}@media (max-width: 320px){.from-mess-wrapper.sc-message-from .mess-img.sc-message-from,.to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:200px}.mess-img.sc-message-from .check.sc-message-from{left:90%}.from-mess-wrapper.sc-message-from .from-mess.sc-message-from,.to-me-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:200px}}";

    var MessageFrom = /*#__PURE__*/function () {
      function MessageFrom(hostRef) {
        _classCallCheck(this, MessageFrom);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(MessageFrom, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.message ? this.renderMessage(this.message) : '');
        }
        /**
         * */

      }, {
        key: "getWritingMessage",
        value: function getWritingMessage(writing) {
          if (!(writing === null || writing === void 0 ? void 0 : writing.length)) {
            return '';
          } // @ts-ignore


          var message = {
            sender: {
              icon: writing[0].icon
            },
            type: _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["a"].loading
          };
          return this.getToMeMessage(message);
        }
        /**
         *
         * */

      }, {
        key: "getToMeMessage",
        value: function getToMeMessage(message) {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "to-me-mess-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "to-me-mess-wrap"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "img",
            style: {
              backgroundImage: "url(".concat(message.sender.icon, ")")
            }
          }), this.createType(message)));
        }
        /**
         *
         * */

      }, {
        key: "getCenterMeMessage",
        value: function getCenterMeMessage(message) {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "system-message"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.checkTypeSystemMessage(message.content)));
        }
        /**
         *
         * */

      }, {
        key: "getFromMeMessage",
        value: function getFromMeMessage(message) {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "from-mess-wrapper "
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "from-mess-wrap"
          }, this.createType(message))));
        }
        /**
         * Определяем от кого сообщение
         * @param message
         */

      }, {
        key: "renderMessage",
        value: function renderMessage(message) {
          switch (message.direction) {
            case _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["C"].fromMe:
              return this.getFromMeMessage(message);

            case _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["C"].toMe:
              return this.getToMeMessage(message);

            case _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["C"].center:
              return this.getCenterMeMessage(message);
          }
        }
        /**
         * Определяем тип сообщения
         * @param message
         */

      }, {
        key: "createType",
        value: function createType(message) {
          switch (message.type) {
            case _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["a"].text:
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "from-mess"
              }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-text", {
                checkSendMess: this.checkSendMess(message),
                createSendTime: this.createSendTime(message.time.created),
                message: message
              }));

            case _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["a"].image:
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "mess-img",
                style: {
                  backgroundImage: "url(".concat(this.message.content, ")")
                }
              }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-img", {
                checkSendMess: this.checkSendMess(message),
                message: message
              }));
            // case ChatMessageTypeEnum.loading:
            //   return (
            //     <div class="from-mess">
            //       <div id="circleG">
            //         <div id="circleG_1" class="circleG"></div>
            //         <div id="circleG_2" class="circleG"></div>
            //         <div id="circleG_3" class="circleG"></div>
            //       </div>
            //     </div>
            //   );
          }
        }
        /**
         * Метод вывода времени отправки
         * */

      }, {
        key: "createSendTime",
        value: function createSendTime(array) {
          var timeNow = array;
          var hours = timeNow.getHours();
          var minutes = timeNow.getMinutes(); // add zero for minutes

          if (minutes < 10) {
            minutes = "0" + minutes;
          }

          return "".concat(hours, " : ").concat(minutes);
        }
        /**
         * Проверка статуса доставки сообщения
         * */

      }, {
        key: "checkSendMess",
        value: function checkSendMess(array) {
          if (array.time.read) {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "check"
            }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
              "class": "c-chat c-chat-check-double"
            }));
          } else if (array.time.delivery) {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "check"
            }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
              "class": "c-chat c-chat-check"
            }));
          } else {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "check"
            }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
              "class": "c-chat c-chat-check"
            }));
          }
        }
        /**
         * Проверка на тип полученного системного сообщения
         * */

      }, {
        key: "checkTypeSystemMessage",
        value: function checkTypeSystemMessage(message) {
          if (typeof message === "string") {
            return message;
          } else if (typeof message === "number") {
            return Object(_utils_4870d924_js__WEBPACK_IMPORTED_MODULE_2__["d"])(message).format("DD MMMM");
          }
        }
      }]);

      return MessageFrom;
    }();

    MessageFrom.style = messageFromCss;
    var messageImgCss = ".mess-img-content.sc-message-img{height:100%;position:relative}.check.sc-message-img{position:absolute;bottom:10px;right:20px;font-size:10px;color:#fff}";

    var MessageImg = /*#__PURE__*/function () {
      function MessageImg(hostRef) {
        _classCallCheck(this, MessageImg);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(MessageImg, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-img-content"
          }, this.message.direction === _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["C"].fromMe ? this.checkSendMess : '');
        }
      }]);

      return MessageImg;
    }();

    MessageImg.style = messageImgCss;
    var messageTextCss = ".check.sc-message-text{font-size:10px;margin-left:5px}.text-wrapper.sc-message-text{-ms-flex:1;flex:1}.info-wrapper.sc-message-text{display:-ms-flexbox;display:flex;text-align:right;white-space:nowrap}.personal-mess-date.sc-message-text{font-size:10px;margin-left:10px}.mess-content-wrap.sc-message-text{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.module.sc-message-text to-me-mess-wrapper.sc-message-text{max-width:315px}";

    var MessageText = /*#__PURE__*/function () {
      function MessageText(hostRef) {
        _classCallCheck(this, MessageText);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(MessageText, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-content-wrap"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "text-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "message-text"
          }, this.message.content)), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "info-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "personal-mess-date"
          }, this.createSendTime), this.message.direction === _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["C"].fromMe ? this.checkSendMess : ""));
        }
      }]);

      return MessageText;
    }();

    MessageText.style = messageTextCss;
    var mobileChatCss = ".temp.sc-mobile-chat{width:414px;height:708px;overflow:hidden;margin:auto;border:5px solid #4c567d;border-radius:20px;position:absolute;left:0;right:0;-webkit-transform:translate(0, 15%);transform:translate(0, 15%);-webkit-box-shadow:15px 10px 40px 1px #4c567d;box-shadow:15px 10px 40px 1px #4c567d}.temp.sc-mobile-chat .m-chat-dialogs.sc-mobile-chat{height:63vh}.temp.sc-mobile-chat .personal-message.sc-mobile-chat{height:59vh}.sc-mobile-chat::-webkit-scrollbar{width:5px}.sc-mobile-chat::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);-webkit-border-radius:5px;border-radius:3px}.sc-mobile-chat::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:rgba(108, 108, 108, 0.8);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.5)}.sc-mobile-chat::-webkit-scrollbar-thumb:window-inactive{background:rgba(106, 106, 106, 0.4)}";

    var MobileChat = /*#__PURE__*/function () {
      function MobileChat(hostRef) {
        _classCallCheck(this, MobileChat);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Выбираем какой контент показывать
         * */

        this.showContent = "contacts"; // profile
        // folders
        // contacts

        /**
         * массив данных для диалогов
         * */

        this.dialogs = _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_3__["d"];
        /**
         * массив данных для контактов
         * */

        this.contacts = _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_3__["c"];
        /**
         * массив данных личных диалогово
         * */

        this.message = _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_3__["M"];
      }
      /**
       * click to Link
       * */


      _createClass(MobileChat, [{
        key: "clickToLink",
        value: function clickToLink(_ref9) {
          var detail = _ref9.detail;
          return detail; // console.log(detail);
        }
        /**
         * click to Link
         * */

      }, {
        key: "clickToDialog",
        value: function clickToDialog(_ref10) {
          var detail = _ref10.detail;
          return detail; // console.log("clickToDialog", detail);
        }
        /**
         * click to Link
         * */

      }, {
        key: "clickToContact",
        value: function clickToContact(_ref11) {
          var detail = _ref11.detail;
          return detail; // console.log("clickToContact", detail);
        }
        /**
         * Click to category filter
         * */

      }, {
        key: "clickToCategory",
        value: function clickToCategory(_ref12) {
          var detail = _ref12.detail;
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
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.getContent(this.showContent));
        }
      }, {
        key: "componentWillLoad",
        value: function componentWillLoad() {
          this.dialogs = _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_3__["d"];
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
          var _this12 = this;

          switch (content) {
            case "dialogs":
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("mobile-dialogs", {
                onClickToAddDialog: function onClickToAddDialog() {
                  return _this12.clickToAddDialog();
                },
                onClickToDialog: function onClickToDialog(item) {
                  return _this12.clickToDialog(item);
                },
                onClickToCategory: function onClickToCategory(item) {
                  return _this12.clickToCategory(item);
                },
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this12.clickToShowDialogs();
                },
                onClickToShowContacts: function onClickToShowContacts() {
                  return _this12.clickToShowContacts();
                },
                onClickToShowMenuBar: function onClickToShowMenuBar() {
                  return _this12.clickToShowMenuBar();
                },
                onSearchDialogs: function onSearchDialogs(detail) {
                  return _this12.searchDialogs({
                    detail: detail
                  });
                },
                onCancelSearchPersonal: function onCancelSearchPersonal() {
                  return _this12.cancelSearchPersonal();
                },
                categories: _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_3__["a"],
                dialogs: this.dialogs
              });

            case "personal":
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("mobile-personal", {
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this12.clickToShowDialogs();
                },
                onClickToUserProfile: function onClickToUserProfile() {
                  return _this12.clickToUserProfile();
                },
                message: this.message,
                onSearchPersonalMessages: function onSearchPersonalMessages(detail) {
                  return _this12.searchPersonalMessages({
                    detail: detail
                  });
                },
                onCancelSearchPersonal: function onCancelSearchPersonal() {
                  return _this12.cancelSearchPersonal();
                }
              });

            case "profile":
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-profile", {
                theme: "mobile",
                categories: _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_3__["a"],
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this12.clickToShowDialogsHandler();
                },
                onClickToShowFolders: function onClickToShowFolders() {
                  return _this12.clickToShowFoldersHandler();
                }
              });

            case "folders":
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-folders", {
                onClickToUserProfile: function onClickToUserProfile() {
                  return _this12.clickOnUserProfile();
                },
                onCreateFolder: function onCreateFolder(e) {
                  return _this12.createFolderHandler(e.detail);
                },
                dialogs: _mock_2d06f4a2_js__WEBPACK_IMPORTED_MODULE_3__["d"],
                theme: "mobile"
              });

            case "contacts":
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list", {
                contacts: this.contacts,
                onSearchContact: function onSearchContact(detail) {
                  return _this12.searchContact({
                    detail: detail
                  });
                },
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this12.clickToShowDialogs();
                },
                onClickToShowContacts: function onClickToShowContacts() {
                  return _this12.clickToShowContacts();
                },
                onClickToShowMenuBar: function onClickToShowMenuBar() {
                  return _this12.clickToShowMenuBar();
                },
                onClickToContact: function onClickToContact(item) {
                  return _this12.clickToContact(item);
                }
              });

            default:
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "no content");
          }
        }
      }]);

      return MobileChat;
    }();

    MobileChat.style = mobileChatCss;
    var mobileDialogsCss = ".m-chat-wrapper.sc-mobile-dialogs{width:100%;height:100%}.sc-mobile-dialogs::-webkit-scrollbar{width:0px;background:transparent}";

    var MobileDialogs = /*#__PURE__*/function () {
      function MobileDialogs(hostRef) {
        _classCallCheck(this, MobileDialogs);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToCategory = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToCategory", 7);
        this.searchDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialogs", 7);
        this.cancelSearchPersonal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "cancelSearchPersonal", 7);
        this.clickToAddDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToAddDialog", 7);
        this.clickToDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.clickToShowContacts = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowContacts", 7);
        this.clickToShowMenuBar = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowMenuBar", 7);
      }

      _createClass(MobileDialogs, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-chat-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("m-chat-header", {
            categories: this.categories
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("m-chat-dialogs", {
            dialogs: this.dialogs
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("m-chat-footer", null));
        }
      }]);

      return MobileDialogs;
    }();

    MobileDialogs.style = mobileDialogsCss;
    var mobilePersonalCss = ".personal-wrapper.sc-mobile-personal .personal-footer.sc-mobile-personal .footer-wrapper.sc-mobile-personal{border-radius:15px 15px 0px 0px}.text-wrapper.sc-mobile-personal{width:75%}.info-wrapper.sc-mobile-personal{width:25%;min-width:55px;text-align:right}.header-nav.sc-mobile-personal div.sc-mobile-personal{cursor:pointer}.user-name-persona.sc-mobile-personal{cursor:pointer}.user-mess-wrapper.sc-mobile-personal,.admin-mess-wrapper.sc-mobile-personal{margin:15px 0}.personal-message.sc-mobile-personal{padding:20px 0px;height:calc(100vh - 185px);overflow:auto}.user-mess-wrapp.sc-mobile-personal{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:end}.user-mess-wrapp.sc-mobile-personal .img.sc-mobile-personal{width:30px;height:30px;margin-right:10px;border-radius:50%;background-size:cover;background-position:center}.user-mess.sc-mobile-personal{max-width:250px;padding:10px;border:1px solid #ccc;border-radius:0px 20px 20px 20px;font-size:14px;color:#979eab;display:-ms-flexbox;display:flex;-ms-flex-align:unset;align-items:unset;-ms-flex-pack:justify;justify-content:space-between}.admin-mess-wrapp.sc-mobile-personal{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.admin-mess.sc-mobile-personal{max-width:250px;padding:10px;border:1px solid #c7d0e8;border-radius:20px 0px 20px 20px;background-color:#ebf0fe;color:#799af8;font-size:14px;display:-ms-flexbox;display:flex}.personal-mess-date.sc-mobile-personal{font-size:10px;margin-left:5px}.user-mess.sc-mobile-personal .check.sc-mobile-personal{font-size:10px;margin-left:5px}.admin-mess-wrapper.sc-mobile-personal{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.admin-mess.sc-mobile-personal .check.sc-mobile-personal{font-size:10px;margin-left:5px}.admin-mess-wrapper.sc-mobile-personal .mess-img.sc-mobile-personal{width:70%;height:150px;border-top-left-radius:20px;border-top-right-radius:0px;border-bottom-right-radius:20px;border-bottom-left-radius:20px;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-position:center;background-size:cover}.user-mess-wrapper.sc-mobile-personal .mess-img.sc-mobile-personal{width:70%;height:150px;border-top-left-radius:0px;border-top-right-radius:20px;border-bottom-right-radius:20px;border-bottom-left-radius:20px;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-position:center;background-size:cover}.mess-img-admin.sc-mobile-personal .check.sc-mobile-personal{position:relative;top:80%;left:92%;font-size:10px;color:#fff}.mess-img.sc-mobile-personal .check.sc-mobile-personal{position:relative;top:80%;left:90%;font-size:10px;color:#fff}";

    var MobilePersonal = /*#__PURE__*/function () {
      function MobilePersonal(hostRef) {
        _classCallCheck(this, MobilePersonal);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.searchPersonalMessages = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchPersonalMessages", 7);
        this.clickToUserProfile = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToUserProfile", 7);
        this.cancelSearchPersonal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "cancelSearchPersonal", 7);
      }

      _createClass(MobilePersonal, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-header", {
            message: this.message
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-message", {
            theme: "mobile",
            message: this.message
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-footer", {
            theme: "mobile"
          }));
        }
      }]);

      return MobilePersonal;
    }();

    MobilePersonal.style = mobilePersonalCss;
    var myComponentCss = ":host{display:block}";

    var MyComponent = /*#__PURE__*/function () {
      function MyComponent(hostRef) {
        _classCallCheck(this, MyComponent);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(MyComponent, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("mobile-chat", null); // return <module-chat></module-chat>;
          // return <s-adam-chat></s-adam-chat>;
        }
      }]);

      return MyComponent;
    }();

    MyComponent.style = myComponentCss;
    var personalFooterCss = "";

    var PersonalFooter = /*#__PURE__*/function () {
      function PersonalFooter(hostRef) {
        _classCallCheck(this, PersonalFooter);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.theme = "comp";
        /**
         * Возможность записи аудио
         */

        this.canRecordAudio = false;
        /**
         * audio animation state
         */

        this.switchFooter = true;
        this.clickToLink = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
      }

      _createClass(PersonalFooter, [{
        key: "toggleFooter",
        value: function toggleFooter() {
          this.switchFooter = !this.switchFooter;
        }
      }, {
        key: "onMouseUp",
        value: function onMouseUp(e) {
          console.log("onMouseUp", e.target);
        }
      }, {
        key: "render",
        value: function render() {
          var _this13 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.switchFooter ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer-text", {
            canRecordAudio: this.canRecordAudio,
            theme: this.theme,
            onShowRecordAudioFooter: function onShowRecordAudioFooter() {
              return _this13.toggleFooter();
            }
          }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer-audio", {
            theme: this.theme,
            onRecordFinished: function onRecordFinished(state) {
              return _this13.recordFinished(state.detail);
            }
          }));
        }
      }, {
        key: "recordFinished",
        value: function recordFinished(state) {
          this.toggleFooter();
          console.log("recordFinished", {
            state: state
          });
        }
      }]);

      return PersonalFooter;
    }();

    PersonalFooter.style = personalFooterCss;
    var personalHeaderCss = ".drop-down.sc-personal-header{position:absolute;right:20px;padding:10px;background-color:#dadada8f;border-radius:10px 0px 10px 10px}.drop-down.sc-personal-header ul.sc-personal-header li.sc-personal-header{list-style:none}.searchPersonalmess.sc-personal-header input.sc-personal-header{text-align:center;border-radius:5px;border:none;background-color:#eaeaea;width:100%;height:25px;font-size:14px;outline:none}.cancel-search.sc-personal-header{padding:5px;cursor:pointer}.search-wrapper.sc-personal-header{margin-bottom:-10px}.personal-header.sc-personal-header{padding:20px 20px 20px;border-bottom:1px solid #ccc;position:relative;height:85px}.header-nav.sc-personal-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.header-nav.sc-personal-header span.sc-personal-header i.sc-personal-header{color:#979eab;-webkit-transition:0.3s ease;transition:0.3s ease}.header-nav.sc-personal-header span.sc-personal-header i.sc-personal-header:hover{cursor:pointer;color:rgb(87, 128, 247)}.header-nav.sc-personal-header .user-name-personal-wrapper.sc-personal-header{font-weight:600;color:#4c567d;text-align:center;width:100%;position:relative}.users-nav.sc-personal-header{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;margin:auto;margin-top:7px}.img-user-other.sc-personal-header{text-align:center;border-radius:50%}.img-user-other.sc-personal-header .img.sc-personal-header{width:30px;height:30px;margin:3px;border-radius:50%;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-size:cover;background-position:center}.img-user-current.sc-personal-header{text-align:center;border:2px solid #4c567d;border-radius:50%}.img-user-current.sc-personal-header .img.sc-personal-header{width:35px;height:35px;margin:3px;border-radius:50%;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-size:cover;background-position:center}.user-active.sc-personal-header{width:100%;text-align:center}.user-active.sc-personal-header span.sc-personal-header{color:#4c567d;font-size:14px}.header-nav.sc-personal-header span.sc-personal-header i.sc-personal-header{width:14px}.user-name-personal.sc-personal-header{position:relative}.user-online-status.sc-personal-header,.user-ofline-status.sc-personal-header{width:10px;height:10px;border-radius:50%;display:inline-block;margin-left:5px}.user-online-status.sc-personal-header{background-color:#7dbd27}.user-ofline-status.sc-personal-header{background-color:#ccc}";

    var PersonalHeader = /*#__PURE__*/function () {
      function PersonalHeader(hostRef) {
        var _this14 = this;

        _classCallCheck(this, PersonalHeader);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Показывать/скрывать меню
         * */

        this.isShowDropDown = false;
        /**
         * Переключение поиска и окна с диалогами в шапке
         * */

        this.isPersonalMess = true;

        this.showDrop = function () {
          return _this14.isShowDropDown = !_this14.isShowDropDown;
        };

        this.clickToLink = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
        this.clickToUserProfile = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToUserProfile", 7);
        this.searchContact = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchContact", 7);
        this.searchPersonalMessages = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchPersonalMessages", 7);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.cancelSearchPersonal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "cancelSearchPersonal", 7);
        this.clickToDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
      }

      _createClass(PersonalHeader, [{
        key: "render",
        value: function render() {
          var _this15 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-header"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "header-nav"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "custom-link",
            onClick: function onClick() {
              return _this15.clickToShowDialogsHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-arrow-left"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": " user-name-personal-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "custom-link user-name-personal",
            onClick: function onClick() {
              return _this15.clickToUserProfileHandler();
            }
          }, this.getNameUser(), this.chatPresenceState === _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["b"].online ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-online-status"
          }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-ofline-status"
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "custom-link",
            onClick: function onClick() {
              return _this15.showInputSearchPersonalMess();
            }
          }, this.isPersonalMess ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-search"
          }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-times"
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "users-nav"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-active"
          }, this.isPersonalMess ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-status", {
            theme: "module",
            chatActionState: this.chatActionState,
            chatPresenceState: this.chatPresenceState
          }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "search-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "searchPersonalmess"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "text",
            placeholder: "search",
            onInput: function onInput(e) {
              return _this15.searchPersonalMessagesHandler(e.target["value"]);
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
          var _this16 = this;

          return array.map(function (item) {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "img-user-other"
            }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "img online",
              onClick: function onClick() {
                return _this16.clickToDialogHandler(item);
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

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
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
          var _this17 = this;

          // this.scrollToBot();
          _utils_4870d924_js__WEBPACK_IMPORTED_MODULE_2__["C"].setScrollToBot(function () {
            _this17.scrollToBot();
          });

          _utils_4870d924_js__WEBPACK_IMPORTED_MODULE_2__["C"].safeScrollToBot();
        }
      }, {
        key: "render",
        value: function render() {
          var _this18 = this;

          var _a;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-message"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-message-inner",
            ref: function ref(el) {
              return _this18.scrollContainer = el;
            }
          }, this.message.map(function (message) {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-from", {
              message: message
            });
          }), ((_a = this.writing) === null || _a === void 0 ? void 0 : _a.length) ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-from", {
            message: Object(_index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.writing[0])
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
          Object(_index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["s"])(this.scrollContainer, {
            timer: 100
          });
        }
      }]);

      return PersonalMessage;
    }();

    PersonalMessage.style = personalMessageCss;
    var sAdamProfileCss = ".comp.sc-s-adam-profile .links-wrapper.sc-s-adam-profile a.sc-s-adam-profile{display:none}.mobile.sc-s-adam-profile .links-wpapper.sc-s-adam-profile{display:-ms-flexbox;display:flex}.mobile.sc-s-adam-profile .about-user.sc-s-adam-profile{margin-bottom:30px}.module.sc-s-adam-profile .about-user.sc-s-adam-profile{margin-bottom:30px}.sc-s-adam-profile::-webkit-scrollbar{width:0px;background:transparent}.mobile.sc-s-adam-profile .profile.sc-s-adam-profile{height:100vh}.profile.sc-s-adam-profile{background-color:#f7f8f9;padding:20px;height:95vh;overflow:auto}.about-user.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;margin-bottom:70px}.profile-user-photo.sc-s-adam-profile{width:80px;height:80px;background-size:cover;background-position:center;margin-bottom:20px;border-radius:100%;cursor:pointer}.profile.sc-s-adam-profile .user-name.sc-s-adam-profile{font-size:14px;margin-bottom:10px}.user-mail.sc-s-adam-profile{margin-bottom:30px;font-size:12px;color:#8d8d8d}.about-user.sc-s-adam-profile .c-chat.sc-s-adam-profile{margin:0 15px}.user-social.sc-s-adam-profile{margin-bottom:40px}.user-social-title.sc-s-adam-profile,.media-title.sc-s-adam-profile{font-weight:700;font-size:12px;margin-bottom:10px}.user-social-block.sc-s-adam-profile{background:white;min-height:140px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding:20px}.user-social-block.sc-s-adam-profile .c-chat.sc-s-adam-profile{width:16px;text-align:center;margin-right:20px}.user-social-name.sc-s-adam-profile,.mediafile-desc.sc-s-adam-profile{font-size:12px;color:#8d8d8d;font-weight:600}.media-header.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.media-descr.sc-s-adam-profile{font-size:8px;color:#8d8d8d}.media-item.sc-s-adam-profile{padding:10px;background:white;margin-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.mediafile.sc-s-adam-profile{width:40px;height:40px;border-radius:5px;margin-right:20px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.pdf.sc-s-adam-profile{background-color:#ff908c}.zip.sc-s-adam-profile{background-color:#58c4c9}.doc.sc-s-adam-profile{background-color:#73a4e9}.mediafile.sc-s-adam-profile span.sc-s-adam-profile{color:white;font-size:8px;font-weight:600}.c-chat.sc-s-adam-profile{color:#bacbe3;cursor:pointer}.hover-link.sc-s-adam-profile:hover{color:#6328f8}.sc-s-adam-profile::-webkit-scrollbar{width:0px;background:transparent}.user-folders-block.sc-s-adam-profile{background:white;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding:20px}.user-folders-block.sc-s-adam-profile .c-chat.sc-s-adam-profile{width:16px;text-align:center;margin-right:20px;cursor:pointer}.user-folders-block.sc-s-adam-profile .user-social-name.sc-s-adam-profile{cursor:pointer}.user-add-folder.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:#ffffff;padding:15px 20px;margin-bottom:30px;cursor:pointer}.user-add-folder.sc-s-adam-profile div.sc-s-adam-profile{color:#8d8d8d;-webkit-transition:0.3s ease;transition:0.3s ease}.user-add-folder.sc-s-adam-profile i.sc-s-adam-profile{-webkit-transition:0.3s ease;transition:0.3s ease}.user-add-folder.sc-s-adam-profile div.sc-s-adam-profile:hover{color:#4c567d}.user-add-folder.sc-s-adam-profile:hover i.sc-s-adam-profile{color:#4c567d}.user-add-btn.sc-s-adam-profile{margin-left:20px;font-size:14px;color:#4c567d;font-weight:600}.user-social-title.sc-s-adam-profile,.media-title.sc-s-adam-profile{font-weight:600;font-size:14px;margin-bottom:10px}.user-folder.sc-s-adam-profile{margin-top:30px}.user-folder-link.sc-s-adam-profile{padding:10px 0px;font-size:14px;cursor:pointer}.user-folders-blocks.sc-s-adam-profile{background-color:#fff;max-height:130px;overflow:auto}.user-folders-blocks.sc-s-adam-profile ul.sc-s-adam-profile li.sc-s-adam-profile{list-style:none;cursor:pointer;font-size:14px;font-weight:600;color:#8d8d8d;-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-s-adam-profile:hover{color:#4c567d;border-bottom:1px solid #4c567d}.list-item-wrapper.sc-s-adam-profile:hover i.sc-s-adam-profile{color:#4c567d}.list-item-wrapper.sc-s-adam-profile i.sc-s-adam-profile{-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-s-adam-profile{display:-ms-flexbox;display:flex;width:100%;border-bottom:1px solid #ccc;padding:10px;-ms-flex-align:center;align-items:center;-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-s-adam-profile i.sc-s-adam-profile{margin-right:20px;margin-left:10px;font-size:16px}.list-folders.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.delete-folder.sc-s-adam-profile{width:40px;text-align:center;border-bottom:1px solid #ccc;padding:10px;-webkit-transition:0.3s ease;transition:0.3s ease;font-size:16px;text-replace:0.3s ease}.delete-folder.sc-s-adam-profile:hover{border-bottom:1px solid darkred;color:darkred}.delete-folder.sc-s-adam-profile:hover .c-chat.sc-s-adam-profile{color:darkred}.user-folders.sc-s-adam-profile{margin:30px 0px}.user-folders-title.sc-s-adam-profile{margin-bottom:10px}.folders-content.sc-s-adam-profile{height:100vh;overflow:auto}.user-social-title.sc-s-adam-profile{font-weight:600;font-size:14px;margin-bottom:10px;color:#4c567d}.user-social-name.sc-s-adam-profile{font-size:14px;font-weight:600;color:#8d8d8d}.module.sc-s-adam-profile .profile.sc-s-adam-profile{height:calc(100vh - 172px)}@media (max-width: 414px){.module.sc-s-adam-profile .profile.sc-s-adam-profile{height:calc(100vh - 50px)}}";

    var SAdamProfile = /*#__PURE__*/function () {
      function SAdamProfile(hostRef) {
        _classCallCheck(this, SAdamProfile);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Задаем стиль для мобильной/пк версии
         * */

        this.theme = "comp";
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.clickToShowFolders = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowFolders", 7);
      }

      _createClass(SAdamProfile, [{
        key: "render",
        value: function render() {
          var _this19 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", {
            "class": "profile"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "links-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            onClick: function onClick() {
              return _this19.clickToShowDialogsHandler();
            }
          }, " ", Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-arrow-left"
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "about-user"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "profile-user-photo border-radius",
            style: {
              backgroundImage: "url(https://via.placeholder.com/200x200?text=Text)"
            }
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-name"
          }, "Tim Ostin"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-mail"
          }, "timostin@gmail.com"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-contact"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-phone-alt hover-link"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-video hover-link"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-envelope hover-link"
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-social-title"
          }, "\u041F\u0430\u043F\u043A\u0438"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-folders-blocks"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Folder, {
            categories: this.categories
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-add-folder",
            onClick: function onClick() {
              return _this19.clickToShowFoldersHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-folder-plus hover-link"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-add-btn"
          }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u043F\u0430\u043F\u043A\u0443")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-social"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-social-title"
          }, "Terhubung"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-social-block"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-social-link"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-instagram-brands hover-link"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-social-name"
          }, "TimOstin")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-social-link"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-twitter-brands hover-link"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-social-name"
          }, "Tim Ostin")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-social-link"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-facebook-f-brands \u0440"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-social-name"
          }, "Tim Ostin")))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media-header"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media-title"
          }, "Media"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media-descr"
          }, "Lihat lebin banyak")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media-block"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media-item"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mediafile pdf"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "PDF")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mediafile-desc"
          }, "Buku Hueanghong.pdf")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media-item"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mediafile zip"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "ZIP")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mediafile-desc"
          }, "File jungjang.zip")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media-item"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mediafile doc"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "DOC")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mediafile-desc"
          }, "Laporan keuangan.ppt"))))));
        }
        /**
         * выводим класс
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
      }, {
        key: "clickToShowDialogsHandler",
        value: function clickToShowDialogsHandler() {
          this.clickToShowDialogs.emit();
        }
      }, {
        key: "clickToShowFoldersHandler",
        value: function clickToShowFoldersHandler() {
          this.clickToShowFolders.emit();
        }
      }]);

      return SAdamProfile;
    }();

    var Folder = function Folder(props) {
      return props.categories.map(function (item) {
        if (item.id !== "all") {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "list-folders"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "list-item-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-folder "
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, item.name)), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "delete-folder"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-file-alt "
          }))));
        }
      });
    };

    SAdamProfile.style = sAdamProfileCss;
    var userFoldersCss = ".folders-wrapper.sc-user-folders{background-color:#f7f8f9;padding:20px;overflow:auto}.sc-user-folders::-webkit-scrollbar{width:0px;background:transparent}.folders-title.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #cccccc;padding:0px 20px;padding-bottom:20px;margin:0px -20px}.folders-title.sc-user-folders .title.sc-user-folders{padding-left:20px}.folders-title.sc-user-folders .left.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}.folders-title.sc-user-folders .right.sc-user-folders{cursor:pointer}.left-back.sc-user-folders{cursor:pointer}.left-back.sc-user-folders i.sc-user-folders{color:#979eab;-webkit-transition:0.3s ease;transition:0.3s ease;width:14px}.advice.sc-user-folders{padding:10px;font-size:14px;background-color:#ececec;color:grey;margin-top:30px}.user-folders-block.sc-user-folders{background:white;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding:10px 10px}.user-folders-block.sc-user-folders .c-chat.sc-user-folders{width:16px;text-align:center;cursor:pointer}.user-social-title.sc-user-folders,.media-title.sc-user-folders{font-weight:600;font-size:14px;margin-bottom:10px}.user-folder.sc-user-folders{margin-top:30px}.user-folder-link.sc-user-folders{padding:10px 0px;font-size:14px;cursor:pointer}.user-folders-blocks.sc-user-folders{background-color:#fff;max-height:360px;overflow:auto}.comp.sc-user-folders .user-folders-blocks.sc-user-folders{max-height:none;height:calc(100vh - 390px);min-height:121px}.user-folders-blocks.sc-user-folders ul.sc-user-folders li.sc-user-folders{list-style:none;cursor:pointer;font-size:14px;font-weight:600;color:#8d8d8d;-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-user-folders:hover{color:#4c567d;border-bottom:1px solid #4c567d}.list-item-wrapper.sc-user-folders{display:-ms-flexbox;display:flex;width:100%;border-bottom:1px solid #ccc;padding:10px;-ms-flex-align:center;align-items:center;-webkit-transition:0.3s ease;transition:0.3s ease;cursor:pointer}.list-item-wrapper.sc-user-folders input.sc-user-folders{margin-right:20px;margin-left:10px;font-size:16px}.list-folders.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.delete-folder.sc-user-folders{width:40px;text-align:center;border-bottom:1px solid #ccc;padding:10px;-webkit-transition:0.3s ease;transition:0.3s ease;font-size:16px}.delete-folder.sc-user-folders:hover{border-bottom:1px solid darkred;color:darkred}.user-folders.sc-user-folders{margin:30px 0px}.user-folders-title.sc-user-folders{margin-bottom:10px}.folders-content.sc-user-folders{height:100vh;overflow:auto}.user-social-title.sc-user-folders{font-weight:600;font-size:14px;margin-bottom:10px;color:#4c567d}.user-social-name.sc-user-folders{font-size:14px;font-weight:600;color:#8d8d8d}.creating-folder-block.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.creating-folder-block.sc-user-folders form.sc-user-folders{width:100%}.creating-folder-block.sc-user-folders i.sc-user-folders{color:#4c567d}.creating-folder-block.sc-user-folders input.sc-user-folders{border:none;padding:10px;outline:none;width:100%}.icon-new-folder.sc-user-folders{width:20px;text-align:center}.icon-new-folder.sc-user-folders i.sc-user-folders{color:#bacbe3;-webkit-transition:0.3s ease;transition:0.3s ease}.icon-new-folder.sc-user-folders i.sc-user-folders:hover{color:#6328f8}.main-icon.sc-user-folders{margin-top:30px;text-align:center}.main-icon.sc-user-folders i.sc-user-folders{font-size:56px}";

    var UserFolders = /*#__PURE__*/function () {
      function UserFolders(hostRef) {
        _classCallCheck(this, UserFolders);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Задаем стиль для мобильной/пк версии
         * */

        this.theme = "mobile";
        this.clickToUserProfile = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToUserProfile", 7);
        this.createFolder = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "createFolder", 7);
      }

      _createClass(UserFolders, [{
        key: "render",
        value: function render() {
          var _this20 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "folders-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "folders-title"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "left",
            onClick: function onClick() {
              return _this20.clickToUserProfileHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "left-back"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-arrow-left"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "title"
          }, "\u041F\u0430\u043F\u043A\u0438")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "right"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            onClick: function onClick() {
              return _this20.createFolderFromButton();
            }
          }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "main-icon"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat sc-btn-wrapper c-chat-folder"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "folders-content"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-folder"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-folders-block"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "creating-folder-block"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", {
            onSubmit: function onSubmit(e) {
              return _this20.creatingFolderFromInputHandler(e);
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "text",
            placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438",
            ref: function ref(el) {
              return _this20.inputElement = el;
            }
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "icon-new-folder"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat sc-btn-wrapper c-chat-folder",
            onClick: function onClick() {
              return _this20.showInputCreateFolderHandler();
            }
          }))))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-folder"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-folders-title user-social-title"
          }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0442\u044B"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-folders-blocks"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Dialogs, {
            dialog: this.dialogs
          })))))));
        }
        /**
         * показывать инпут для создания папки
         * */

      }, {
        key: "showInputCreateFolderHandler",
        value: function showInputCreateFolderHandler() {
          this.showInputCreateFolderState = !this.showInputCreateFolderState;
        }
        /**
         *проверка и отправка данных на создание папки
         * */

      }, {
        key: "creatingFolderHandler",
        value: function creatingFolderHandler() {
          var input = this.inputElement;

          if (input.value !== "") {
            this.createFolder.emit({
              name: input.value,
              chats: []
            });
            input.value = "";
          }
        }
        /**
         * create folder from send button
         * */

      }, {
        key: "createFolderFromButton",
        value: function createFolderFromButton() {
          this.creatingFolderHandler();
        }
        /**
         *
         * */

      }, {
        key: "creatingFolderFromInputHandler",
        value: function creatingFolderFromInputHandler(e) {
          e.preventDefault();
          this.creatingFolderHandler();
        }
        /**
         * переход на профиль пользователя
         * */

      }, {
        key: "clickToUserProfileHandler",
        value: function clickToUserProfileHandler() {
          this.clickToUserProfile.emit();
        }
        /**
         * выводим класс
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
      }]);

      return UserFolders;
    }();

    var Dialogs = function Dialogs(props) {
      return props.dialog.map(function (item) {
        // if (item.id !== "all") {
        return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "list-folders"
        }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "list-item-wrapper"
        }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
          type: "checkbox",
          id: item.name
        }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
          htmlFor: item.name
        }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, item.name))))); // }
      });
    };

    UserFolders.style = userFoldersCss;
    var userStatusCss = ".status-user.sc-user-status span.sc-user-status{color:#4c567d;font-size:14px}.module.sc-user-status .status-user.sc-user-status{margin-bottom:-7px}.user-writing.sc-user-status{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes blink{0%{opacity:0.2}20%{opacity:1}100%{opacity:0.2}}@keyframes blink{0%{opacity:0.2}20%{opacity:1}100%{opacity:0.2}}.user-saving.sc-user-status span.sc-user-status{-webkit-animation-name:blink;animation-name:blink;-webkit-animation-duration:1.4s;animation-duration:1.4s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-fill-mode:both;animation-fill-mode:both}.user-saving.sc-user-status span.sc-user-status:nth-child(2){-webkit-animation-delay:0.2s;animation-delay:0.2s}.user-saving.sc-user-status span.sc-user-status:nth-child(3){-webkit-animation-delay:0.4s;animation-delay:0.4s}";

    var UserStatus = /*#__PURE__*/function () {
      function UserStatus(hostRef) {
        _classCallCheck(this, UserStatus);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Тема для блока
         * */

        this.theme = "comp";
      }

      _createClass(UserStatus, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(StatusBlockElement, {
            chatActionState: this.chatActionState,
            chatPresenceState: this.chatPresenceState
          }));
        }
        /**
         * Метод выобра темы для ПК/Мобильная/Модульной версии
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
      }]);

      return UserStatus;
    }();

    var ChatAnimationDots = function ChatAnimationDots(props) {
      return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "user-saving"
      }, props.text, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "."));
    };
    /**
     * Компонент для вывода статуса действий
     * */


    var UserActionStateElement = function UserActionStateElement(props) {
      switch (props.chatActionState) {
        case _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["d"].writing:
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-writing"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ChatAnimationDots, {
            text: "\u043F\u0435\u0447\u0430\u0442\u0430\u0435\u0442"
          }));

        case _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["d"].audioRecording:
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-writing"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ChatAnimationDots, {
            text: "\u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u0430\u0443\u0434\u0438\u043E"
          }));

        default:
          return "";
      }
    };
    /**
     * Компонент для вывода статуса присутствия пользоватея
     * */


    var UserPresenceStateElement = function UserPresenceStateElement(props) {
      switch (props.chatPresenceState) {
        case _index_bfa1c413_js__WEBPACK_IMPORTED_MODULE_1__["b"].online:
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "last-seen"
          }, "\u043E\u043D\u043B\u0430\u0439\u043D");

        default:
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "last-seen"
          }, "\u0431\u044B\u043B \u043D\u0435\u0434\u0430\u0432\u043D\u043E");
      }
    };
    /**
     * Компонент контроллер
     * */


    var StatusBlockElement = function StatusBlockElement(props) {
      return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "status-user"
      }, props.chatActionState ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(UserActionStateElement, {
        chatActionState: props.chatActionState
      }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(UserPresenceStateElement, {
        chatPresenceState: props.chatPresenceState
      }));
    };

    UserStatus.style = userStatusCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-contact-card_24-entry-js-es5.js.map