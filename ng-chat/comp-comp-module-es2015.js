(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comp-comp-module"],{

/***/ "./src/app/chat-navigate.service.ts":
/*!******************************************!*\
  !*** ./src/app/chat-navigate.service.ts ***!
  \******************************************/
/*! exports provided: ChatNavigateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNavigateService", function() { return ChatNavigateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ChatNavigateService {
    constructor(router) {
        this.router = router;
    }
    /**
     * */
    navigateToPersonalChat(id) {
        this.router.navigate([`/chat/${id}`]);
    }
    /**
     * */
    navigateToContact() {
        this.router.navigate([`/chat`], {
            queryParams: {
                contact: open ? 'show' : null
            },
            queryParamsHandling: "merge"
        });
    }
    /**
     * */
    navigateToChats() {
        this.router.navigate([`/chat`]);
    }
    /**
     * */
    controlChatProfile(id, open) {
        this.router.navigate([`/chat/${id}`], {
            queryParams: {
                profile: open ? 'show' : null
            },
            queryParamsHandling: "merge"
        });
    }
}
ChatNavigateService.ɵfac = function ChatNavigateService_Factory(t) { return new (t || ChatNavigateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ChatNavigateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatNavigateService, factory: ChatNavigateService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatNavigateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comp/comp-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/comp/comp-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CompRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompRoutingModule", function() { return CompRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp.component */ "./src/app/comp/comp.component.ts");





const routes = [
    {
        path: 'chat',
        pathMatch: 'prefix',
        data: {
            view: 'all-chats'
        },
        // runGuardsAndResolvers: "pathParamsOrQueryParamsChange",
        component: _comp_component__WEBPACK_IMPORTED_MODULE_2__["CompComponent"],
    },
    {
        path: 'chat/:chatId',
        data: {
            view: 'personal'
        },
        component: _comp_component__WEBPACK_IMPORTED_MODULE_2__["CompComponent"],
    },
    // {
    //   path: 'contacts',
    //   component: CompComponent,
    // },
    {
        path: '**',
        redirectTo: 'chat'
    }
];
class CompRoutingModule {
}
CompRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompRoutingModule });
CompRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompRoutingModule_Factory(t) { return new (t || CompRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comp/comp.component.ts":
/*!****************************************!*\
  !*** ./src/app/comp/comp.component.ts ***!
  \****************************************/
/*! exports provided: CompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompComponent", function() { return CompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var stencil_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stencil-chat */ "./node_modules/stencil-chat/dist/esm/index.mjs");
/* harmony import */ var _res_enum_common_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./res/enum/common.enum */ "./src/app/comp/res/enum/common.enum.ts");
/* harmony import */ var _store_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store-service.service */ "./src/app/store-service.service.ts");
/* harmony import */ var _chat_navigate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat-navigate.service */ "./src/app/chat-navigate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _res_view_comp_dialogs_comp_dialogs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./res/view/comp-dialogs/comp-dialogs.component */ "./src/app/comp/res/view/comp-dialogs/comp-dialogs.component.ts");
/* harmony import */ var _res_view_comp_contacts_comp_contacts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./res/view/comp-contacts/comp-contacts.component */ "./src/app/comp/res/view/comp-contacts/comp-contacts.component.ts");
/* harmony import */ var _res_directive_lifecycle_lifecycle_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../res/directive/lifecycle/lifecycle.directive */ "./src/app/res/directive/lifecycle/lifecycle.directive.ts");












const _c0 = ["chatMessages"];
function CompComponent_app_comp_dialogs_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-comp-dialogs", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openDialog", function CompComponent_app_comp_dialogs_7_Template_app_comp_dialogs_openDialog_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.navigateToPersonalChat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allDialogs", ctx_r0.allDialogs)("categories", ctx_r0.categories);
} }
function CompComponent_app_comp_contacts_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comp-contacts", 14);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contacts", ctx_r1.contacts);
} }
function CompComponent_s_adam_no_chat_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "s-adam-no-chat");
} }
function CompComponent_div_12_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "message-from", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", message_r9);
} }
function CompComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "s-adam-personal-header", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleUserProfile", function CompComponent_div_12_Template_s_adam_personal_header_visibleUserProfile_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.visibleProfile(true); })("searchPersonalMessage", function CompComponent_div_12_Template_s_adam_personal_header_searchPersonalMessage_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.searchPersonalMessage($event.detail); })("resetMessagesFilter", function CompComponent_div_12_Template_s_adam_personal_header_resetMessagesFilter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.resetMessagesFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("afterViewInit", function CompComponent_div_12_Template_div_afterViewInit_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.scrollToBot($event.el); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompComponent_div_12_div_5_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "personal-footer", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendTextMessage", function CompComponent_div_12_Template_personal_footer_sendTextMessage_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.sendTextMessage($event.detail); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flyInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatActionState", ctx_r3.chatActionState)("chatPresenceState", ctx_r3.chatPresenceState)("openedDialog", ctx_r3.openedDialog);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.getMessages());
} }
function CompComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "s-adam-profile", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickToShowDialogs", function CompComponent_div_13_Template_s_adam_profile_clickToShowDialogs_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.visibleProfile(false); })("clickToShowFolders", function CompComponent_div_13_Template_s_adam_profile_clickToShowFolders_1_listener() { return null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx_r4.categories);
} }
// import {createTextMessage} from "../../../../stencil-chat/src";
class CompComponent {
    constructor(chatStore, chatNavigateService, router, cdRef, activatedRoute) {
        this.chatStore = chatStore;
        this.chatNavigateService = chatNavigateService;
        this.router = router;
        this.cdRef = cdRef;
        this.activatedRoute = activatedRoute;
        /**
         * */
        this.messages = [];
        /**
         * */
        this.contacts = [];
        /**
         * */
        this.allMessages = [];
        /**
         * */
        this.allDialogs = [];
        /**
         * */
        this.categories = [];
        /**
         * */
        this.showProfile = true;
        /**
         *
         * */
        this.chatViewEnum = _res_enum_common_enum__WEBPACK_IMPORTED_MODULE_3__["ChatViewEnum"];
        /**
         *
         * */
        this.chatView = _res_enum_common_enum__WEBPACK_IMPORTED_MODULE_3__["ChatViewEnum"].empty;
        /**
         * Стейт для показа контактов или диалогов
         */
        this.showDialogs = true;
    }
    ngOnInit() {
        this.startSyncMessage();
        this.activatedRoute.data.subscribe((data) => {
        });
        this.activatedRoute.queryParams.subscribe((params) => {
            this.showProfile = params['profile'] === 'show';
            this.showDialogs = params['contact'] !== 'show';
        });
        this.chatStore.getDialogs().subscribe((dataFromSever) => {
            this.allDialogs = dataFromSever;
            this.cdRef.markForCheck();
        });
        this.chatStore.getContacts().subscribe((dataFromSever) => {
            this.contacts = dataFromSever;
            this.cdRef.markForCheck();
        });
        this.activatedRoute.params.subscribe((params) => {
            if (params['chatId']) {
                this.chatStore.getDialog(parseInt(params['chatId'], 10)).subscribe((dialogFromServer) => {
                    if (dialogFromServer) {
                        this.openedDialog = dialogFromServer;
                        this.chatView = _res_enum_common_enum__WEBPACK_IMPORTED_MODULE_3__["ChatViewEnum"].personal;
                        this.setChatState(dialogFromServer.online);
                        // this.scrollToBot(5000);
                        this.cdRef.markForCheck();
                    }
                });
            }
        });
        this.chatStore.getCategories().subscribe((dataFromSever) => {
            this.categories = dataFromSever;
            this.cdRef.markForCheck();
        });
    }
    /**
     * */
    setChatState(online) {
        this.chatActionState = !online ? undefined : stencil_chat__WEBPACK_IMPORTED_MODULE_2__["ChatUserActionStatusState"].writing;
        this.chatPresenceState = this.chatActionState !== undefined ? stencil_chat__WEBPACK_IMPORTED_MODULE_2__["ChatUserPresenceState"].online : stencil_chat__WEBPACK_IMPORTED_MODULE_2__["ChatUserPresenceState"].offline;
    }
    setOnlinePer() {
    }
    startSyncMessage() {
        this.chatStore.getMessages$().subscribe((messagesFromServer) => {
            this.messages = this.allMessages = messagesFromServer;
            this.cdRef.markForCheck();
        });
    }
    /**
     * Лого
     */
    getLogo() {
        return this.chatStore.getLogo();
    }
    /**
     * Сообщения
     */
    getMessages() {
        return this.messages;
    }
    /**
     * Показ профиля юзера
     * @param detail
     */
    visibleProfile(open) {
        this.chatNavigateService.controlChatProfile(this.openedDialog.id, open);
    }
    /**
     *
     */
    clickToShowFoldersHandler() {
    }
    /**
     * Поиск сообщений
     * @param detail
     */
    searchPersonalMessage(value) {
        this.messages = Object(stencil_chat__WEBPACK_IMPORTED_MODULE_2__["filterMessageBySearchValue"])(value, this.allMessages);
    }
    /**
     * Сброс поика сообщений
     */
    resetMessagesFilter() {
        this.messages = this.allMessages;
    }
    /**
     * Метод для переключения на контакты
     */
    showDialogsOrDialogsToggle() {
        this.showDialogs = !this.showDialogs;
        // this.chatNavigateService.navigateToContact();
    }
    /**
     * */
    navigateToPersonalChat(dialog) {
        this.chatNavigateService.navigateToPersonalChat(dialog.id);
        // this.router.navigate(
        //   [`/chat/${id}`]
        // );
    }
    /**
     * */
    sendTextMessage(message) {
        this.chatStore.sendTextMessage(message);
        this.scrollToBot();
    }
    /**
     *
     * */
    scrollToBot(el = this.chatMessagesContainer, timer = 50) {
        Object(stencil_chat__WEBPACK_IMPORTED_MODULE_2__["scrollToBot"])(el.nativeElement, {
            timer: timer
        });
    }
}
CompComponent.ɵfac = function CompComponent_Factory(t) { return new (t || CompComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_service_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_navigate_service__WEBPACK_IMPORTED_MODULE_5__["ChatNavigateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
CompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompComponent, selectors: [["app-comp"]], viewQuery: function CompComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatMessagesContainer = _t.first);
    } }, decls: 14, vars: 7, consts: [[1, "main-wrapper"], [1, "container"], [1, "row"], [1, "col-1", "white-col"], [3, "logo", "visibleContacts"], [1, "col-3"], [3, "allDialogs", "categories", "openDialog", 4, "ngIf"], [3, "contacts", 4, "ngIf"], [1, "col", "white-col"], [1, "chat", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "direct-comp", 4, "ngSwitchCase"], ["class", "col-3", 4, "ngIf"], [3, "allDialogs", "categories", "openDialog"], [3, "contacts"], [1, "direct-comp"], [3, "chatActionState", "chatPresenceState", "openedDialog", "visibleUserProfile", "searchPersonalMessage", "resetMessagesFilter"], [1, "chat-messages"], ["lifecycle", "", 1, "chat-messages-inner", 3, "afterViewInit"], ["chatMessages", ""], [4, "ngFor", "ngForOf"], [3, "sendTextMessage"], [3, "message"], ["theme", "mobile", 3, "categories", "clickToShowDialogs", "clickToShowFolders"]], template: function CompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "s-adam-navigate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleContacts", function CompComponent_Template_s_adam_navigate_visibleContacts_5_listener() { return ctx.showDialogsOrDialogsToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CompComponent_app_comp_dialogs_7_Template, 1, 2, "app-comp-dialogs", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CompComponent_app_comp_contacts_8_Template, 1, 1, "app-comp-contacts", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CompComponent_s_adam_no_chat_11_Template, 1, 0, "s-adam-no-chat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CompComponent_div_12_Template, 7, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CompComponent_div_13_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logo", ctx.getLogo());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDialogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDialogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.chatView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.chatViewEnum.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.chatViewEnum.personal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProfile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _res_view_comp_dialogs_comp_dialogs_component__WEBPACK_IMPORTED_MODULE_8__["CompDialogsComponent"], _res_view_comp_contacts_comp_contacts_component__WEBPACK_IMPORTED_MODULE_9__["CompContactsComponent"], _res_directive_lifecycle_lifecycle_directive__WEBPACK_IMPORTED_MODULE_10__["LifecycleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["@charset \"UTF-8\";\n.col-1[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  width: 100%;\n  overflow: hidden;\n}\n.main-wrapper[_ngcontent-%COMP%] {\n  background-color: #ebeff6;\n  height: 100vh;\n  position: relative;\n}\nmain[_ngcontent-%COMP%] {\n  height: 95vh;\n  overflow: hidden;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n}\n.chat[_ngcontent-%COMP%] {\n  position: relative;\n  height: 95vh;\n}\n.white-col[_ngcontent-%COMP%] {\n  background-color: #fdfdfd;\n}\n.chat-messages[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  height: calc(100vh - 163px);\n  position: relative;\n  overflow: hidden;\n}\n.chat-messages[_ngcontent-%COMP%]   .chat-messages-inner[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  width: 0px;\n  \n  background: transparent;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9jb21wLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wL0M6XFxVc2Vyc1xc0JDQtNCw0LxcXERlc2t0b3BcXEFuZ3VsYXItRDRcXG5nLWNoYXQvc3JjXFxhcHBcXGNvbXBcXGNvbXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsVUFBQTtBREVGO0FDQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBREdGO0FDREE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBRElGO0FDRkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QURLRjtBQ0hBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FETUY7QUNKQTtFQUNFLHlCQUFBO0FET0Y7QUNKQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FET0Y7QUNMRTtFQUVFLFlBQUE7RUFDQSxnQkFBQTtBRE1KO0FDRkE7RUFBc0IsaUJBQUE7RUFDcEIsVUFBQTtFQUFZLHVCQUFBO0VBQ1osdUJBQUE7RUFBeUIsZ0JBQUE7QURRM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wL2NvbXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29sLTEsIC5jb2wsIC5jb2wtMyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tYWluLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlZmY2O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbm1haW4ge1xuICBoZWlnaHQ6IDk1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGF0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDk1dmg7XG59XG5cbi53aGl0ZS1jb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xufVxuXG4uY2hhdC1tZXNzYWdlcyB7XG4gIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYzcHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2hhdC1tZXNzYWdlcyAuY2hhdC1tZXNzYWdlcy1pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIC8qIGNocm9tZSBiYXNlZCAqL1xuICB3aWR0aDogMHB4O1xuICAvKiDRiNC40YDQuNC90LAgc2Nyb2xsYmFyJ2EgKi9cbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC8qINC+0L/RhtC40L7QvdCw0LvRjNC90L4gKi9cbn0iLCIuY29sLTEsIC5jb2wsIC5jb2wtMyB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEyODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5tYWluLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmVmZjY7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxubWFpbiB7XHJcbiAgaGVpZ2h0OiA5NXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB3aWR0aDogMTAwJSA7XHJcbn1cclxuLmNoYXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDk1dmg7XHJcbn1cclxuLndoaXRlLWNvbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcclxufVxyXG5cclxuLmNoYXQtbWVzc2FnZXMge1xyXG4gIHBhZGRpbmc6IDQwcHggMjBweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjNweCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5jaGF0LW1lc3NhZ2VzLWlubmVyXHJcbiAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIgeyAvKiBjaHJvbWUgYmFzZWQgKi9cclxuICB3aWR0aDogMHB4OyAvKiDRiNC40YDQuNC90LAgc2Nyb2xsYmFyJ2EgKi9cclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgLyog0L7Qv9GG0LjQvtC90LDQu9GM0L3QviAqL1xyXG59XHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' })),
                ]),
            ]),
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comp',
                templateUrl: './comp.component.html',
                styleUrls: ['./comp.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' })),
                        ]),
                    ]),
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _store_service_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] }, { type: _chat_navigate_service__WEBPACK_IMPORTED_MODULE_5__["ChatNavigateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, { chatMessagesContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chatMessages']
        }] }); })();


/***/ }),

/***/ "./src/app/comp/comp.module.ts":
/*!*************************************!*\
  !*** ./src/app/comp/comp.module.ts ***!
  \*************************************/
/*! exports provided: CompModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompModule", function() { return CompModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comp.component */ "./src/app/comp/comp.component.ts");
/* harmony import */ var _res_view_comp_contacts_comp_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./res/view/comp-contacts/comp-contacts.component */ "./src/app/comp/res/view/comp-contacts/comp-contacts.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _comp_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comp-routing.module */ "./src/app/comp/comp-routing.module.ts");
/* harmony import */ var _res_view_comp_dialogs_comp_dialogs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./res/view/comp-dialogs/comp-dialogs.component */ "./src/app/comp/res/view/comp-dialogs/comp-dialogs.component.ts");
/* harmony import */ var _res_module_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../res/module/shared.module */ "./src/app/res/module/shared.module.ts");








class CompModule {
}
CompModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompModule });
CompModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompModule_Factory(t) { return new (t || CompModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _res_module_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _comp_routing_module__WEBPACK_IMPORTED_MODULE_4__["CompRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompModule, { declarations: [_comp_component__WEBPACK_IMPORTED_MODULE_1__["CompComponent"],
        _res_view_comp_contacts_comp_contacts_component__WEBPACK_IMPORTED_MODULE_2__["CompContactsComponent"],
        _res_view_comp_dialogs_comp_dialogs_component__WEBPACK_IMPORTED_MODULE_5__["CompDialogsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _res_module_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _comp_routing_module__WEBPACK_IMPORTED_MODULE_4__["CompRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _comp_component__WEBPACK_IMPORTED_MODULE_1__["CompComponent"],
                    _res_view_comp_contacts_comp_contacts_component__WEBPACK_IMPORTED_MODULE_2__["CompContactsComponent"],
                    _res_view_comp_dialogs_comp_dialogs_component__WEBPACK_IMPORTED_MODULE_5__["CompDialogsComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _res_module_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _comp_routing_module__WEBPACK_IMPORTED_MODULE_4__["CompRoutingModule"],
                ],
                providers: [],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comp/res/enum/common.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/comp/res/enum/common.enum.ts ***!
  \**********************************************/
/*! exports provided: ChatViewEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatViewEnum", function() { return ChatViewEnum; });
var ChatViewEnum;
(function (ChatViewEnum) {
    ChatViewEnum[ChatViewEnum["personal"] = 0] = "personal";
    ChatViewEnum[ChatViewEnum["empty"] = 1] = "empty";
})(ChatViewEnum || (ChatViewEnum = {}));


/***/ }),

/***/ "./src/app/comp/res/view/comp-contacts/comp-contacts.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/comp/res/view/comp-contacts/comp-contacts.component.ts ***!
  \************************************************************************/
/*! exports provided: CompContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompContactsComponent", function() { return CompContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var stencil_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stencil-chat */ "./node_modules/stencil-chat/dist/esm/index.mjs");
/* harmony import */ var _store_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store-service.service */ "./src/app/store-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function CompContactsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "contact-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dialog_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx_r0.theme)("contact", dialog_r1);
} }
class CompContactsComponent {
    constructor(chatStore, router, cdRef) {
        this.chatStore = chatStore;
        this.router = router;
        this.cdRef = cdRef;
        this.contacts = [];
        /**
         * */
        this.allContacts = [];
        /**
         *
         */
        this.contactsFiltered = [];
        /**
         * Тема для модульного/мобильного чата
         * */
        this.theme = 'comp';
    }
    ngOnInit() {
        this.filterContacts(this.lastSearchValue);
    }
    ngOnChanges(changes) {
        // this.allContacts = this.contacts;
        this.allContacts = this.contacts;
        this.filterContacts(this.lastSearchValue);
    }
    /**
     *
     */
    getContacts() {
        return [];
    }
    /**
     *
     * */
    filterContacts(value) {
        this.contacts = Object(stencil_chat__WEBPACK_IMPORTED_MODULE_1__["filterContactBySearchValue"])(value, this.allContacts);
    }
}
CompContactsComponent.ɵfac = function CompContactsComponent_Factory(t) { return new (t || CompContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_service_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CompContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompContactsComponent, selectors: [["app-comp-contacts"]], inputs: { contacts: "contacts" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [[1, "contacts-column"], [3, "theme", "searchContact"], [1, "contacts"], [4, "ngFor", "ngForOf"], [3, "theme", "contact"]], template: function CompContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "contacts-list-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchContact", function CompContactsComponent_Template_contacts_list_header_searchContact_1_listener($event) { return ctx.filterContacts($event.detail); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompContactsComponent_div_3_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@charset \"UTF-8\";\n.contacts-column[_ngcontent-%COMP%] {\n  background-color: #f7f8f9;\n  padding: 20px 20px 0 20px;\n  height: 100vh;\n}\n.col-3[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.contacts[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: calc(100vh - 100px);\n  padding-bottom: 20px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  width: 0px;\n  \n  background: transparent;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9yZXMvdmlldy9jb21wLWNvbnRhY3RzL2NvbXAtY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXAvcmVzL3ZpZXcvY29tcC1jb250YWN0cy9DOlxcVXNlcnNcXNCQ0LTQsNC8XFxEZXNrdG9wXFxBbmd1bGFyLUQ0XFxuZy1jaGF0L3NyY1xcYXBwXFxjb21wXFxyZXNcXHZpZXdcXGNvbXAtY29udGFjdHNcXGNvbXAtY29udGFjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QURFRjtBQ0FBO0VBQ0UscUJBQUE7QURHRjtBQ0RBO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FESUY7QUNGQTtFQUFzQixpQkFBQTtFQUNwQixVQUFBO0VBQVksdUJBQUE7RUFDWix1QkFBQTtFQUF5QixnQkFBQTtBRFEzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvcmVzL3ZpZXcvY29tcC1jb250YWN0cy9jb21wLWNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRhY3RzLWNvbHVtbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4Zjk7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5jb2wtMyB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhY3RzIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIC8qIGNocm9tZSBiYXNlZCAqL1xuICB3aWR0aDogMHB4O1xuICAvKiDRiNC40YDQuNC90LAgc2Nyb2xsYmFyJ2EgKi9cbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC8qINC+0L/RhtC40L7QvdCw0LvRjNC90L4gKi9cbn0iLCIuY29udGFjdHMtY29sdW1uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGY5O1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uY29sLTMge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG4uY29udGFjdHMge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIgeyAvKiBjaHJvbWUgYmFzZWQgKi9cclxuICB3aWR0aDogMHB4OyAvKiDRiNC40YDQuNC90LAgc2Nyb2xsYmFyJ2EgKi9cclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgLyog0L7Qv9GG0LjQvtC90LDQu9GM0L3QviAqL1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comp-contacts',
                templateUrl: './comp-contacts.component.html',
                styleUrls: ['./comp-contacts.component.scss'],
            }]
    }], function () { return [{ type: _store_service_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { contacts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/comp/res/view/comp-dialogs/comp-dialogs.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/comp/res/view/comp-dialogs/comp-dialogs.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompDialogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompDialogsComponent", function() { return CompDialogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var stencil_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stencil-chat */ "./node_modules/stencil-chat/dist/esm/index.mjs");
/* harmony import */ var _store_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store-service.service */ "./src/app/store-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function CompDialogsComponent_dialog_categories_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dialog-categories", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickToCategory", function CompDialogsComponent_dialog_categories_2_Template_dialog_categories_clickToCategory_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.clickToCategory($event.detail); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx_r0.categories);
} }
function CompDialogsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dialog-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickToDialog", function CompDialogsComponent_div_4_Template_dialog_card_clickToDialog_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.openChat($event.detail); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dialog_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx_r1.compTheme())("mess", dialog_r4);
} }
class CompDialogsComponent {
    constructor(chatStore, router, cdRef) {
        this.chatStore = chatStore;
        this.router = router;
        this.cdRef = cdRef;
        /**
         * */
        this.categories = [];
        /**
         * */
        this.allDialogs = [];
        /**
         * */
        this.openDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * */
        this.dialogs = [];
        /**
         * Тема для модульного/мобильного чата
         * */
        this.theme = 'comp';
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.dialogs = this.allDialogs;
    }
    compTheme() {
        return this.chatStore.compThemeClass;
    }
    searchDialogs(value) {
        this.dialogs = Object(stencil_chat__WEBPACK_IMPORTED_MODULE_1__["filterDialogsBySearchValue"])(value, this.allDialogs);
    }
    /**
     *   клик по кнопке категорий для фильтрации диалогов
     */
    clickToCategory(input) {
        this.dialogs = this.chatStore.filterChatsByCategory(input, this.allDialogs);
    }
    /**
     * */
    openChat(dialog) {
        this.openDialog.emit(dialog);
    }
}
CompDialogsComponent.ɵfac = function CompDialogsComponent_Factory(t) { return new (t || CompDialogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_service_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CompDialogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompDialogsComponent, selectors: [["app-comp-dialogs"]], inputs: { categories: "categories", allDialogs: "allDialogs" }, outputs: { openDialog: "openDialog" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 3, consts: [[1, "contacts-column"], [3, "theme", "searchContact"], [3, "categories", "clickToCategory", 4, "ngIf"], [1, "contacts"], [4, "ngFor", "ngForOf"], [3, "categories", "clickToCategory"], [3, "theme", "mess", "clickToDialog"]], template: function CompDialogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "contacts-list-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchContact", function CompDialogsComponent_Template_contacts_list_header_searchContact_1_listener($event) { return ctx.searchDialogs($event.detail); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompDialogsComponent_dialog_categories_2_Template, 1, 1, "dialog-categories", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CompDialogsComponent_div_4_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categories.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dialogs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@charset \"UTF-8\";\n.contacts-column[_ngcontent-%COMP%] {\n  background-color: #f7f8f9;\n  padding: 20px 20px 0 20px;\n  height: 100vh;\n}\n.contacts[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: calc(100vh - 129px);\n  padding-bottom: 20px;\n}\n.dialog[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 30px 0;\n  padding: 20px 10px;\n  cursor: pointer;\n}\n.dialog[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\n.dialog[_ngcontent-%COMP%]:active {\n  background-color: white;\n}\n.dialog-photo[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-size: cover;\n  background-position: center;\n  margin-right: 15px;\n}\n.dialog-message-caption[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 13px;\n}\n.dialog-message-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: gray;\n}\n.message-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-left: auto;\n  color: lightgray;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  width: 0px;\n  \n  background: transparent;\n  \n}\ninput[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #979eab;\n}\ninput[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #979eab;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9yZXMvdmlldy9jb21wLWRpYWxvZ3MvY29tcC1kaWFsb2dzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wL3Jlcy92aWV3L2NvbXAtZGlhbG9ncy9DOlxcVXNlcnNcXNCQ0LTQsNC8XFxEZXNrdG9wXFxBbmd1bGFyLUQ0XFxuZy1jaGF0L3NyY1xcYXBwXFxjb21wXFxyZXNcXHZpZXdcXGNvbXAtZGlhbG9nc1xcY29tcC1kaWFsb2dzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FERUY7QUNBQTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBREdGO0FDREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FESUY7QUNGQTtFQUNFLHVCQUFBO0FES0Y7QUNIQTtFQUNFLHVCQUFBO0FETUY7QUNKQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FET0Y7QUNMQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBRFFGO0FDTkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBRFNGO0FDUEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRFVGO0FDUkE7RUFBc0IsaUJBQUE7RUFDcEIsVUFBQTtFQUFZLHVCQUFBO0VBQ1osdUJBQUE7RUFBeUIsZ0JBQUE7QURjM0I7QUNaQTtFQUNFLGNBQUE7QURlRjtBQ2JBO0VBQ0UsY0FBQTtBRGdCRiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvcmVzL3ZpZXcvY29tcC1kaWFsb2dzL2NvbXAtZGlhbG9ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250YWN0cy1jb2x1bW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGY5O1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY29udGFjdHMge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjlweCk7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uZGlhbG9nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlhbG9nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5kaWFsb2c6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5kaWFsb2ctcGhvdG8ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmRpYWxvZy1tZXNzYWdlLWNhcHRpb24ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5kaWFsb2ctbWVzc2FnZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLm1lc3NhZ2UtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAvKiBjaHJvbWUgYmFzZWQgKi9cbiAgd2lkdGg6IDBweDtcbiAgLyog0YjQuNGA0LjQvdCwIHNjcm9sbGJhcidhICovXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAvKiDQvtC/0YbQuNC+0L3QsNC70YzQvdC+ICovXG59XG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5NzllYWI7XG59XG5cbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5NzllYWI7XG59IiwiLmNvbnRhY3RzLWNvbHVtbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmOTtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmNvbnRhY3RzIHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEyOXB4KTtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4uZGlhbG9nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZGlhbG9nOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZGlhbG9nOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmRpYWxvZy1waG90byB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uZGlhbG9nLW1lc3NhZ2UtY2FwdGlvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmRpYWxvZy1tZXNzYWdlLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG4ubWVzc2FnZS10aW1lIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHsgLyogY2hyb21lIGJhc2VkICovXHJcbiAgd2lkdGg6IDBweDsgLyog0YjQuNGA0LjQvdCwIHNjcm9sbGJhcidhICovXHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IC8qINC+0L/RhtC40L7QvdCw0LvRjNC90L4gKi9cclxufVxyXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM5NzllYWI7XHJcbn1cclxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjOTc5ZWFiO1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompDialogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comp-dialogs',
                templateUrl: './comp-dialogs.component.html',
                styleUrls: ['./comp-dialogs.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _store_service_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { categories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allDialogs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], openDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/res/directive/lifecycle/lifecycle.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/res/directive/lifecycle/lifecycle.directive.ts ***!
  \****************************************************************/
/*! exports provided: LifecycleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifecycleDirective", function() { return LifecycleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LifecycleDirective {
    constructor(el) {
        this.el = el;
        this.afterViewInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngAfterViewInit() {
        this.afterViewInit.emit({
            el: this.el
        });
    }
}
LifecycleDirective.ɵfac = function LifecycleDirective_Factory(t) { return new (t || LifecycleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LifecycleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LifecycleDirective, selectors: [["", "lifecycle", ""]], outputs: { afterViewInit: "afterViewInit" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LifecycleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[lifecycle]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { afterViewInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['afterViewInit']
        }] }); })();


/***/ }),

/***/ "./src/app/res/module/shared.module.ts":
/*!*********************************************!*\
  !*** ./src/app/res/module/shared.module.ts ***!
  \*********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directive_lifecycle_lifecycle_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directive/lifecycle/lifecycle.directive */ "./src/app/res/directive/lifecycle/lifecycle.directive.ts");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directive_lifecycle_lifecycle_directive__WEBPACK_IMPORTED_MODULE_2__["LifecycleDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_directive_lifecycle_lifecycle_directive__WEBPACK_IMPORTED_MODULE_2__["LifecycleDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _directive_lifecycle_lifecycle_directive__WEBPACK_IMPORTED_MODULE_2__["LifecycleDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _directive_lifecycle_lifecycle_directive__WEBPACK_IMPORTED_MODULE_2__["LifecycleDirective"]
                ],
                providers: [],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comp-comp-module-es2015.js.map