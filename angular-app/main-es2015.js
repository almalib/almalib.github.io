(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/adam-stencil-v-1/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/adam-stencil-v-1/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main-component_23.entry.js": [
		"./node_modules/adam-stencil-v-1/dist/esm/main-component_23.entry.js",
		"stencil-main-component_23-entry-js"
	],
	"./s-adam-article-author.entry.js": [
		"./node_modules/adam-stencil-v-1/dist/esm/s-adam-article-author.entry.js",
		"stencil-s-adam-article-author-entry-js"
	],
	"./s-adam-author-info.entry.js": [
		"./node_modules/adam-stencil-v-1/dist/esm/s-adam-author-info.entry.js",
		"stencil-s-adam-author-info-entry-js"
	],
	"./s-adam-explore.entry.js": [
		"./node_modules/adam-stencil-v-1/dist/esm/s-adam-explore.entry.js",
		"stencil-s-adam-explore-entry-js"
	],
	"./s-adam-related-posts.entry.js": [
		"./node_modules/adam-stencil-v-1/dist/esm/s-adam-related-posts.entry.js",
		"stencil-s-adam-related-posts-entry-js"
	],
	"./s-adam-subscribe-second.entry.js": [
		"./node_modules/adam-stencil-v-1/dist/esm/s-adam-subscribe-second.entry.js",
		"stencil-s-adam-subscribe-second-entry-js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/adam-stencil-v-1/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first-page/first-page.component */ "./src/app/first-page/first-page.component.ts");
/* harmony import */ var _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./second-page/second-page.component */ "./src/app/second-page/second-page.component.ts");






const routes = [
    {
        path: 'first-page',
        component: _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_2__["FirstPageComponent"]
    },
    {
        path: 'second-page',
        component: _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_3__["SecondPageComponent"]
    },
    {
        path: '**',
        redirectTo: 'first-page'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_res_app_store_app_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/res/app-store/app-store.service */ "./src/app/service/res/app-store/app-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(appStore, router) {
        this.appStore = appStore;
        this.router = router;
        this.title = 'angular-app';
        this.result = 0;
    }
    onClickSumButton() {
        const result = this.appStore.sum(5, 5);
        this.result = result;
    }
    /**
     * Элементы меню
     */
    getMenuItems() {
        return this.appStore.menuItems;
    }
    /**
     * Логотип
     */
    getLogoUrl() {
        return this.appStore.logoUrl;
    }
    /**
     * Текс с кнопки в Header
     */
    getSubscribeText() {
        return this.appStore.subscribeText;
    }
    /**
     * Абзац с текстом в Footer
     */
    getFooterDesc() {
        return this.appStore.footerDescr;
    }
    /**
     * Меню футера
     */
    getFooterItems() {
        return this.appStore.footerItems;
    }
    /**
     * Смена языка
     */
    getLanguageItems() {
        return this.appStore.languageItems;
    }
    /**
     *Переход между страницами
     */
    clickOnMenu({ detail }) {
        console.log('click on menu', detail);
        if (detail.id == 'page1') {
            this.router.navigate(['first-page']);
        }
        else {
            this.router.navigate(['second-page']);
        }
    }
    /**
     * Клик по лого
     * @param detail
     */
    clickOnLogo({ detail }) {
        console.log('clickOnLogo', detail);
    }
    /**
     * Клик по кнопке Subscribe в Header
     * @param detail
     */
    clickOnSubscribe({ detail }) {
        console.log('clickOnSubscribe', detail);
    }
    /**
     * Клик по ссылкам в меню Footer
     * @param detail
     */
    clickOnFooterLinks({ detail }) {
        console.log('clickOnFooterLinks', detail);
    }
    /**
     * Клик по смене языка
     * @param detail
     */
    clickOnLanguage({ detail }) {
        console.log('clickOnLanguage', detail);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_res_app_store_app_store_service__WEBPACK_IMPORTED_MODULE_1__["AppStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 6, consts: [[3, "menuItems", "logoUrl", "subscribeText", "clickOnMenu", "clickOnLogo", "clickOnSubscribe"], [3, "footerDescr", "footerItems", "languageItems", "clickOnFooterLinks", "clickOnLanguage"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s-adam-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnMenu", function AppComponent_Template_s_adam_header_clickOnMenu_0_listener($event) { return ctx.clickOnMenu($event); })("clickOnLogo", function AppComponent_Template_s_adam_header_clickOnLogo_0_listener($event) { return ctx.clickOnLogo($event); })("clickOnSubscribe", function AppComponent_Template_s_adam_header_clickOnSubscribe_0_listener($event) { return ctx.clickOnSubscribe($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "s-adam-footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnFooterLinks", function AppComponent_Template_s_adam_footer_clickOnFooterLinks_2_listener($event) { return ctx.clickOnFooterLinks($event); })("clickOnLanguage", function AppComponent_Template_s_adam_footer_clickOnLanguage_2_listener($event) { return ctx.clickOnLanguage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuItems", ctx.getMenuItems())("logoUrl", ctx.getLogoUrl())("subscribeText", ctx.getSubscribeText());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerDescr", ctx.getFooterDesc())("footerItems", ctx.getFooterItems())("languageItems", ctx.getLanguageItems());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _service_res_app_store_app_store_service__WEBPACK_IMPORTED_MODULE_1__["AppStoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first-page/first-page.component */ "./src/app/first-page/first-page.component.ts");
/* harmony import */ var _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./second-page/second-page.component */ "./src/app/second-page/second-page.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_4__["FirstPageComponent"],
        _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_5__["SecondPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_4__["FirstPageComponent"],
                    _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_5__["SecondPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/first-page/first-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/first-page/first-page.component.ts ***!
  \****************************************************/
/*! exports provided: FirstPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageComponent", function() { return FirstPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_res_app_store_app_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/res/app-store/app-store.service */ "./src/app/service/res/app-store/app-store.service.ts");



class FirstPageComponent {
    constructor(appStore) {
        this.appStore = appStore;
    }
    ngOnInit() {
        this.amount = this.appStore.sum(this.a, this.b);
    }
    /**
     * Получаем данный для главной новости
     */
    getBlogItems() {
        return this.appStore.blog;
    }
    /**
     * Получаем данные для блока New Blog Posts
     */
    getNewPosts() {
        return this.appStore.newPosts;
    }
    /**
     * Получаем данные для блока Popular Resources
     */
    getPopularResources() {
        return this.appStore.popularResources;
    }
    /**
     * Получаем данные для блока Events
     */
    getEventsItems() {
        return this.appStore.events;
    }
    /**
     * Получаем данные для модального окна
     */
    getModalItems() {
        return this.appStore.articleContentMock;
    }
    /**
     * Получаем данные для элемента Storyteller
     */
    getStorytellerItem() {
        return this.appStore.storyteller;
    }
    /**
     * Получаем данные для блока Subscribe
     */
    getSubscribeItems() {
        return this.appStore.subscribeItems;
    }
    /**
     * Клик на главноую носоть
     * @param detail
     */
    clickOnMainPost({ detail }) {
        console.log('click on main post', detail);
    }
    /**
     * Клик на боковую ленту новостей
     * @param detail
     */
    clickOnSidebarPost({ detail }) {
        console.log('clickOnSidebarPost', detail);
    }
    /**
     * Клик на карточку блока New Blog Posts
     * @param detail
     */
    clickOnPostCard({ detail }) {
        console.log('clickOnPostCard', detail);
    }
    /**
     * Клик на карточку блока Popular Resources
     * @param detail
     */
    clickOnPopularRes({ detail }) {
        console.log('clickOnPopularRes', detail);
    }
    /**
     * Клик на ссылку элемента Storyteller
     * @param detail
     */
    clickOnStorytellerLink({ detail }) {
        console.log('clickOnStorytellerLink', detail);
    }
    /**
     *Клик на карточку блока Events
     * @param detail
     */
    clickOnSingleEvent({ detail }) {
        console.log('clickOnSingleEvent', detail);
    }
    /**
     * Клик на элементы блока Subscribe
     * @param detail
     */
    clickOnSubscribeItems({ detail }) {
        console.log('clickOnSubscribeItems', detail);
    }
}
FirstPageComponent.ɵfac = function FirstPageComponent_Factory(t) { return new (t || FirstPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_res_app_store_app_store_service__WEBPACK_IMPORTED_MODULE_1__["AppStoreService"])); };
FirstPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstPageComponent, selectors: [["app-first-page"]], inputs: { a: "a", b: "b" }, decls: 6, vars: 7, consts: [[3, "blog", "clickOnMainPost", "clickOnSidebarPost"], [3, "newPosts", "clickOnPostCard"], [3, "popularResources", "storyteller", "clickOnPopularRes", "clickOnStorytellerLink"], [3, "events", "clickOnSingleEvent"], [3, "subscribeItems", "clickOnSubscribeItems"], [3, "articleContent"]], template: function FirstPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s-adam-news", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnMainPost", function FirstPageComponent_Template_s_adam_news_clickOnMainPost_0_listener($event) { return ctx.clickOnMainPost($event); })("clickOnSidebarPost", function FirstPageComponent_Template_s_adam_news_clickOnSidebarPost_0_listener($event) { return ctx.clickOnSidebarPost($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "s-adam-new-blog-posts", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnPostCard", function FirstPageComponent_Template_s_adam_new_blog_posts_clickOnPostCard_1_listener($event) { return ctx.clickOnPostCard($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "s-adam-popular", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnPopularRes", function FirstPageComponent_Template_s_adam_popular_clickOnPopularRes_2_listener($event) { return ctx.clickOnPopularRes($event); })("clickOnStorytellerLink", function FirstPageComponent_Template_s_adam_popular_clickOnStorytellerLink_2_listener($event) { return ctx.clickOnStorytellerLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "s-adam-events", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnSingleEvent", function FirstPageComponent_Template_s_adam_events_clickOnSingleEvent_3_listener($event) { return ctx.clickOnSingleEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "s-adam-subscribe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnSubscribeItems", function FirstPageComponent_Template_s_adam_subscribe_clickOnSubscribeItems_4_listener($event) { return ctx.clickOnSubscribeItems($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "s-adam-pop-button", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blog", ctx.getBlogItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newPosts", ctx.getNewPosts());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popularResources", ctx.getPopularResources())("storyteller", ctx.getStorytellerItem());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("events", ctx.getEventsItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("subscribeItems", ctx.getSubscribeItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("articleContent", ctx.getModalItems());
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0LXBhZ2UvZmlyc3QtcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-first-page',
                templateUrl: './first-page.component.html',
                styleUrls: ['./first-page.component.css']
            }]
    }], function () { return [{ type: _service_res_app_store_app_store_service__WEBPACK_IMPORTED_MODULE_1__["AppStoreService"] }]; }, { a: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], b: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/second-page/second-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/second-page/second-page.component.ts ***!
  \******************************************************/
/*! exports provided: SecondPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageComponent", function() { return SecondPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_res_app_store_app_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/res/app-store/app-store.service */ "./src/app/service/res/app-store/app-store.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function () { return { backgroundImage: "url(https://via.placeholder.com/1000x600?text=Text)" }; };
class SecondPageComponent {
    constructor(appStore) {
        this.appStore = appStore;
    }
    ngOnInit() {
    }
    /**
     * Данные автора
     */
    getAuthorInfo() {
        return this.appStore.authorInfo;
    }
    /**
     * Данные блока новостей
     */
    getNewPosts() {
        return this.appStore.newPosts;
    }
    /**
     * Данные блока с рекламой
     */
    getExploreItems() {
        return this.appStore.exploreItems;
    }
    /**
     * Блок Subscribe
     */
    getSecondSubscribeItems() {
        return this.appStore.secondSubscribeItems;
    }
    /**
     * Клик по кнопке блока с релкамой
     * @param detail
     */
    clickOnExploreItems({ detail }) {
        console.log('clickOnSubscribeItems', detail);
    }
    /**
     * Клик по кнопке блока Subscribe
     * @param detail
     */
    clickOnSecondSubscribe({ detail }) {
        console.log('clickOnSecondSubscribeItems', detail);
    }
    /**
     * Клик по карточке блока новостей
     * @param detail
     */
    clickOnPostCard({ detail }) {
        console.log('clickOnPostCard', detail);
    }
}
SecondPageComponent.ɵfac = function SecondPageComponent_Factory(t) { return new (t || SecondPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_res_app_store_app_store_service__WEBPACK_IMPORTED_MODULE_1__["AppStoreService"])); };
SecondPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondPageComponent, selectors: [["app-second-page"]], decls: 95, vars: 20, consts: [[1, "article"], [1, "container", "py-5"], [1, "article-header", "pb-5"], [1, "category"], [1, "main-title"], [1, "copyright"], [1, "author"], [1, "article-date"], [1, "article-img", 3, "ngStyle"], [1, "article-text", "mt-5"], [1, "row"], [1, "col-12"], [1, "first-p"], [1, "initial"], [1, "socials"], ["href", ""], [1, "fab", "fa-facebook-square"], [1, "fab", "fa-twitter-square"], [1, "fab", "fa-linkedin"], [1, "fab", "fa-youtube-square"], [3, "exploreItems", "clickOnExploreItems"], [1, "article-text"], [1, "video-preview", "border-radius", "my-5", 3, "ngStyle"], [1, "play-btn"], [1, "fas", "fa-play"], [1, "quote"], [3, "authorInfo"], [3, "secondSubscribeItems", "clickOnSubscribe"], [3, "newPosts", "clickOnPostCard"]], template: function SecondPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Trends & Insights ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 6 ways for financial & legal marketers to differentiate their firm through video ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Erik Mathes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Oct 15, 2019 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "our job is marketing finance of law, you may feel like you've got it tougher than marketers in other industries. With these sectors so heavily regulated, and with so many established, big-time firms within both fields, some strategies are more efficient and effective than others when creating legal and financial education content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " While some financial and law firm marketing teams are still slogging away at blogging and wasting their budgets on paid ads that people rarely click, savvy firms are shifting their focus to the medium of the future: Video. With advancements in tech, the price of producing professional-quality videos has dropped significantly. More importantly, it's never been simpler for teams marketing finance or law to create video clips in-house ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Still, there needs to be a sound set of strategies behind content marketing for law firms and financial institutions that goes deeper than discussing your services of products. For maximum efficacy, firms should create videos that differentiate it by featuring the people and philosophies behind the practice. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Here are six ways to start using video to do just that, without breaking the bank or taking up more of your team's bandwidth. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "s-adam-explore", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnExploreItems", function SecondPageComponent_Template_s_adam_explore_clickOnExploreItems_36_listener($event) { return ctx.clickOnExploreItems($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " 1. Humanize you firm by showing causes you support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " These days, it's important for companies to appear more human, and one of the best ways to do so is to show what causes you firm supports. By telling stories about individuals within your firm and letting them speak to their beliefs, you'll endear the company to like-minded people who may choose your firm to do business with, simply based on having a connection to the same cause. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " BNP Paribas does a great jub of marketing finance without being salesy by highlighting their work in supporting microfinance institutions in the video below. By showing how the firm helps vulnerable people and communities across the world with strategic lending for humanitarian projects, the firm's financial education content distinguishes itself from competitors that fail to focus on these issues. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " In a similar vein, Univest showcases its involvement in the local community in the video bellow. By emphasizing the banking, insurance, and investment firm's charitable donations, employee volunteering efforts, and educational endeavors, Univest comes off as more approachable and people-oriented, traits tat don't always shine through is financial education content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " 2. Recruit new talent to your team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Finance ald law firm marketing goes beyond attracting and nurturing clients, as your videos can also be used to recruit new employees. Never before have people had so much leverage over potential employers, but savvy firms can bolster their recruitment efforts with videos that show prospective hires what they could gain if they join the team. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \"Winston & Strawn LLP created the clip below to showcase their Disctrict Attorney Secondment Program, which is a target to mind-level associates with a passion for trial work. Not only do viewers learn how this program can accelerate their law careers, they also get to hear firshand from attorneys who completed the program about the positive impact it had on their development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " 3. Provide valuable information to earn viewers' trust ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Video content marketing for law firms and financial institutions is also a powerful medium for building trust with your audience. By providing value to viewers - and not expecting or asking for anything in return - you'll create goodwill with people who will remember your firm when they could actually use its products or services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Go Banking Rates created the following video as part of financial education content campaign that teaches people how to find no-fee ATMs - and tha some banks will reimburse these fees. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " 4. Showcase your firm's best pro bono work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Video content marketing for law firms and financial institutions is also a powerful medium for building trust with your audience. By providing value to viewers - and not expecting or asking for anything in return - you'll create goodwill with people who will remember your firm when they could actually use its products or services. By providing value to viewers - and not expecting or asking for anything in return - you'll create goodwill with people who will remember your firm when they could actually use its products or services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " 5. Announce and promote events your firm is hosting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Content marketing for law firms and financial institutions can also play off real-world events your throw. Shearman & Sterling created this short promotional video in the Wibbitz platform that announced and shared details about the 2nd Annual Women General Counsel Forum they hosted in 2019. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Not only is this incredibly simple law firm marketing to plan and execute, it also offers insight into the company's values, philosophy, and mindset for potential new hires. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Plus, you can create recap videos of your event that attendees can share tho show credibility - and entice those who missed out to attend the next one. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " 6. Highlight your firm's accolades and stats ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Content marketing for law firms and financial institutions can also play off real-world events you throw. Shearman & Sterling created this short promotional video in the Wibbitz platform that announced and shared details about the 2nd Annual Women General Counsel Forum they hosted in 2019. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Videos like this exemplify how content marketing for law firms and financial institutions is taking shape for the 2020s. And with the right tools at your disposal, your firm can lighten the band width of your marketing team - and transform its content strategy for the future. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Videos like this exemplify how content marketing for law firms and financial institutions is taking shape for the 2020s. And with right tools at your disposal, your firm can lighten the bandwidth of your marketing team - transform its content strategy for the future. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "s-adam-article-author", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "s-adam-subscribe-second", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnSubscribe", function SecondPageComponent_Template_s_adam_subscribe_second_clickOnSubscribe_93_listener($event) { return ctx.clickOnSecondSubscribe($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "s-adam-related-posts", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnPostCard", function SecondPageComponent_Template_s_adam_related_posts_clickOnPostCard_94_listener($event) { return ctx.clickOnPostCard($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exploreItems", ctx.getExploreItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("authorInfo", ctx.getAuthorInfo());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("secondSubscribeItems", ctx.getSecondSubscribeItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newPosts", ctx.getNewPosts());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".article-header[_ngcontent-%COMP%] {\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.article-img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 600px;\r\n  background-size: cover;\r\n  background-position: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.category[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n}\r\n\r\n.author[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\r\n\r\n.article-date[_ngcontent-%COMP%] {\r\n  color: #9a9a9a;\r\n}\r\n\r\n.first-p[_ngcontent-%COMP%]:first-letter {\r\n  font-size: 80px;\r\n  line-height: 80px;\r\n}\r\n\r\n.first-p[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.socials[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 15px;\r\n  bottom: 20%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin: 5px 0;\r\n}\r\n\r\n.video-preview[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  height: 400px;\r\n  background-size: cover;\r\n  background-position: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.play-btn[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 100%;\r\n  background-color: #ffffff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.quote[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  border-left: 4px solid black;\r\n  padding-left: 45px;\r\n  margin: 16px 0;\r\n}\r\n\r\n@media (max-width: 920px) {\r\n  .socials[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .main-title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .article-img[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vjb25kLXBhZ2Uvc2Vjb25kLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlY29uZC1wYWdlL3NlY29uZC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0aWNsZS1oZWFkZXIge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5jYXRlZ29yeSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYXV0aG9yIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1kYXRlIHtcclxuICBjb2xvcjogIzlhOWE5YTtcclxufVxyXG4uZmlyc3QtcDpmaXJzdC1sZXR0ZXIge1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBsaW5lLWhlaWdodDogODBweDtcclxufVxyXG5cclxuLmZpcnN0LXAge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnNvY2lhbHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTVweDtcclxuICBib3R0b206IDIwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnNvY2lhbHMgYSB7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxufVxyXG4udmlkZW8tcHJldmlldyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5wbGF5LWJ0biB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnF1b3RlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcclxuICAuc29jaWFscyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tYWluLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmFydGljbGUtaW1nIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-second-page',
                templateUrl: './second-page.component.html',
                styleUrls: ['./second-page.component.css']
            }]
    }], function () { return [{ type: _service_res_app_store_app_store_service__WEBPACK_IMPORTED_MODULE_1__["AppStoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/res/app-store/app-store.service.ts":
/*!************************************************************!*\
  !*** ./src/app/service/res/app-store/app-store.service.ts ***!
  \************************************************************/
/*! exports provided: AppStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreService", function() { return AppStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppStoreService {
    constructor() {
        this.blog = [
            {
                id: 1,
                category: "Report",
                title: "Explore Instagram Video: How to convert, engage, and get more Instagra...",
                link: "Read Report",
                img: "https://via.placeholder.com/200x200?text=Text",
                text: "",
                main: false,
                sidebar: true,
            },
            {
                id: 2,
                category: "Blog post",
                title: "How to make social video work  for your marketing team",
                link: "Read Story",
                img: "https://via.placeholder.com/200x200?text=Text",
                text: "",
                main: false,
                sidebar: true,
            },
            {
                id: 3,
                category: "Webinar",
                title: "The video Forecast: 2019 predictions from industry leaders",
                link: "Watch Webinar",
                img: "https://via.placeholder.com/200x200?text=Text",
                text: "",
                main: false,
                sidebar: true,
            },
            {
                id: 4,
                category: "Report",
                title: "Winning strategies for digital video",
                link: "Read Report",
                img: "https://via.placeholder.com/200x200?text=Text",
                text: "",
                main: false,
                sidebar: true,
            },
            {
                id: 5,
                category: "Blog Post",
                title: "How to optimize your Facebook & Instagram video ads for success",
                link: "Read Story",
                img: "https://via.placeholder.com/200x200?text=Text",
                text: "Instagram and Facebook video ads are extremely popular among marketers these days. Not only are they more engaging and entertaining, they're loved by many...",
                main: true,
                sidebar: false,
            },
        ];
        this.articleContentMock = [
            {
                title: "What's new in Clubhouse Mobile - Dark Mode and a speedier UX",
                date: "May 12, 2020",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "Working on the go looks a little different in today's world. The latest updates in Clubhouse Mobile will help make remote work more convenient and enjoyable, wherever you are. Enable Dark Mode on iOS or Android and enjoy a faster user experience with our improved performance. [Read on to learn more!](#) ",
            },
            {
                title: "Communicate faster with @mention notifications in Slack",
                date: "May 7, 2020",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "The newest update to our Slack integration lets you communicate faster and with less context switching. Now, when someone mentions you in Clubhouse, you'll receive a Slack notification that you can respond and react to directly in Slack. [Learn more](#)",
            },
            {
                title: "Gain insights and plan more effectively with Cycle Time and Lead Time Reports",
                date: "April 15, 2020",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "Cycle Time and Lead Time Reports are now available in Clubhouse to provide your company with data that can help you plan and allocate resources more effectively. Toggle between Cycle Time and Lead Time and change the scale of the reports between Log and Linear. Find Cycle Time and Lead Time Reports on the Reports, Epic Detail, Milestone Detail, Iteration Detail, and Project Detail pages. [Learn more here](#)",
            },
            {
                title: "Easily access your most recently viewed Stories and Epics",
                date: "February 13, 2020",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "Head to the clock icon in the top right of the Navigation Bar to access a handy list of the last 50 Stories and Epics you viewed.",
            },
            {
                title: "Bigger referral rewards in 2020!",
                date: "February 12, 2020",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "Spread the word about Clubhouse, and earn nice rewards: like MacBook Pros, team dinners, and the warm feeling that comes from getting someone else to use a thing that you like.\n" +
                    "\n" +
                    "Click on “Earn Rewards” in the top navigation bar dropdown menu to share your personal referral link and see which rewards you’re eligible for.\n" +
                    "\n" +
                    "Learn more about all the [new rewards here](#)",
            },
            {
                title: "Execute commands more efficiently with the Action Bar",
                date: "February 6, 2020",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "The Action Bar is a quick launch command menu that can drive many important actions in Clubhouse. Create a Story, navigate from page to page, toggle Dark Mode on, and more, without a click! Use *cmd + k* on Mac and *ctrl + k* on PC to launch the Action Bar.\n" +
                    "\n" +
                    "[Learn more here and let us know what other actions you'd like to see!](#)",
            },
            {
                title: "Collaborate faster at scale with Group @mentions and notifications",
                date: "February 4, 2020",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "Today we are launching Groups v1 to make collaboration within Clubhouse even easier. In this first release you'll be able to create and @mention Groups. We plan on releasing additional features that allow you to associate and filter by Groups.\n" +
                    "\n" +
                    "[Learn more on the blog!](#)",
            },
            {
                title: "Building the next stage of Clubhouse - announcing $25M in Series B funding",
                date: "January 23, 2020",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "We've just closed our Series B funding to continue our mission of a building a collaborative home for software teams!🎉 Heading into 2020 we have a lot of exciting new features for Build and Write to give teams even better visibility into what is being done. These updates include timeline views for roadmapping and planning, enhanced reporting for more customized insights, more automations to do repetitive things for you, and more!\n" +
                    "\n" +
                    "[Read our blog post to learn more.](#)",
            },
            {
                title: "Organize and filter your team's work faster by assigning Groups to Iterations",
                date: "April 29, 2020",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "We're expanding Groups so that you can assign them to Iterations, making organizing and filtering your team's work even faster and easier. With this new Group functionality, you can assign Iterations directly to Groups, allowing your team to organize and filter work by those specific teams and squads.\n" +
                    "\n" +
                    "[Learn more here](#)",
            },
            {
                title: "Automate work and ramp up productivity with our new Zapier integration",
                date: "November 26, 2019",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "Our Zapier integration is now out of beta, so you can automatically create Stories from over 1000+ connected apps. The new version of the app makes it even easier to automate many of your repetitive and tedious tasks. Create a Zap to customize the Clubhouse Story Name, Project, Description, Epic, and Story Type, to make getting Stories into your workflow faster.\n" +
                    "\n" +
                    "[Learn more here](#)",
            },
            {
                title: "Streamlined Story card design",
                date: "November 21, 2019",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "1. **Add to Story options** streamlined into icons\n" +
                    "2. **Project and Workflow State** are grouped together to better visualize their close relationship\n" +
                    "3. **Story Type** is now placed on the right side when creating a new Story for consistency\n"
            },
            {
                title: "Real-time design collaboration with our new Figma integration",
                date: "November 19, 2019",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "The integration enables live preview embeds of your public Figma files. When a Figma link is pasted into any markdown text field in Clubhouse, a live preview will appear! Added links will also show up in the External Tickets section. Best of all, the Figma integration is ready to use today, no configuration needed! \n" +
                    "\n" +
                    "Read the [blog post](#) to learn more",
            },
            {
                title: "Share an Invite Link!",
                date: "October 8, 2019",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "Your new invite link makes it faster and easier to invite your team into Clubhouse. Visit the invite pane to grab your invite link and share it with your team. Users that sign up through your link will be added to your Workspace as a Member.\n" +
                    "\n" +
                    "[Head over to the invite pane to create your invite link today!](#)",
            },
            {
                title: "Introducing Clubhouse Write!",
                date: "September 12, 2019",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "Clubhouse Write is a real-time collaborative knowledge base tool that will seamlessly interact with our project management platform! Write will make it easier for software teams to document, collaborate and ideate together.\n" +
                    "\n" +
                    "With Clubhouse Write, users can collaborate and comment on a doc in real-time, create retros, strategy docs, agendas and more with teams in one place.\n" +
                    "\n" +
                    "Read more in the [blog post](#) or [request access](#) to the private beta.",
            },
            {
                title: "Introducing a new Free Plan!",
                date: "September 10, 2019",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "We are excited to introduce a new Free Plan to make Clubhouse even more accessible for teams up to 10 people.\n" +
                    "\n" +
                    "The Free Plan is a no-cost option for smaller software teams so they can benefit from the full functionality and power of Clubhouse without worrying about their budgets. [Learn more about the change here.](#)",
            },
            {
                title: "Dark Mode is now available!",
                date: "August 12, 2019",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "Introducing Dark Mode! We created a darker alternative to the normal mode in Clubhouse to alleviate some of thepain that comes from staring at a computer or digital device for most of the day. Now the experience of switchingfrom your text editors, IDE (integrated development environment), and terminals can be a little less jarring anddisruptive. [Learn more here.](#)",
            },
            {
                title: "Teams have been renamed to Workflows!",
                date: "July 23, 2019",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "In anticipation of our upcoming improvements to make collaboration with groups of people in Clubhouse easier,we've renamed Teams to Workflows! Nothing about the way the feature functions will change. Please note that thenomenclature update will only be reflected in the UI. [Read the blog post to learn more.](#)",
            },
            {
                title: "Referral rewards…now bigger and better!",
                date: "July 2, 2019",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "Help us spread the word! We have dramatically increased the rewards for each referral you send our way. Click on “[Earn Rewards](#)” in the “Settings” menu to see whatrewards you are eligible for and to share your personal referral link. Learn more about the new rewards [here.](#)",
            },
            {
                title: "Iterations is here to support sprint planning!",
                date: "June 25, 2019",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "We are excited to share that Clubhouse Iterations is here to help streamline the sprint planning and managementprocess. With Clubhouse Iterations you’ll be able to plan and manage your work in timeboxed periods, visualizeyour work with reports and dashboards and optimize your team’s performance over time. [Check out the blog post](#) to see Iterations in action!",
            },
            {
                title: "Stay in-sync with Clubhouse for Android!",
                date: "June 13, 2019",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "Amp up your productivity and do more from the convenience of your phone with Clubhouse for Android. Use the mobileapp to view Spaces, track Epics and Stories, collaborate with teammates, stay on top of activity, and much more onthe go. Head to the [blog to learn more.](#)",
            },
            {
                title: "Iterations beta is here to support sprint planning!",
                date: "June 11, 2019",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "We are excited to share that Clubhouse Iterations is here to help streamline the sprint planning and managementprocess. With Iterations, it's easy to keep your team aligned when things shift or move quickly when prioritieschange. Learn more:",
                link: "",
            },
            {
                title: "Customize your Navigation Bar in Clubhouse",
                date: "May 28, 2019",
                img: "https://via.placeholder.com/1500x600?text=Text",
                text: "The latest update allows you to customize your Navigation Bar in a way that brings you joy 🤗 Use the new pin andhide functionality to reorganize feature buttons and adjust the visibility of the items in the Navigation Bar.Learn more [here.](#)",
            },
        ];
        this.newPosts = [
            {
                id: 1,
                category: "Blog Post",
                text: "4 organic ways to improve your website KPIs",
                img: "https://via.placeholder.com/350x290?text=Text",
                link: "Read Story"
            },
            {
                id: 2,
                category: "Blog Post",
                text: "How to turn your next event into a video content goldmine",
                img: "https://via.placeholder.com/350x290?text=Text",
                link: "Read Story"
            },
            {
                id: 3,
                category: "Blog Post",
                text: "How to quickly turn your podcast into a video script",
                img: "https://via.placeholder.com/350x290?text=Text",
                link: "Read Story"
            },
        ];
        this.popularResources = [
            {
                id: 1,
                category: "Blog Post",
                text: "Micro-influencers B2C brand videos: A match made in heaven",
                link: "Read Story",
                class: "category-blog",
                img: "https://via.placeholder.com/200x200?text=Text",
            },
            {
                id: 2,
                category: "Webinar",
                text: "Webinar: Improving content marketing through visual storytelling",
                link: "Watch Webinar",
                class: "category-webinar",
                img: "https://via.placeholder.com/200x200?text=Text",
            },
            {
                id: 3,
                category: "Report",
                text: "How to reach audiences with social video: From Millenials to Gen Z",
                link: "Read Report",
                class: "category-report",
                img: "https://via.placeholder.com/200x200?text=Text",
            },
        ];
        this.events = [
            {
                id: 1,
                category: "Webinar",
                text: "Distributing Your Videos Across Different Channels",
                date: "24 Jun",
                img: "https://via.placeholder.com/350x290?text=Text",
                link: "Watch Webinar"
            },
            {
                id: 2,
                category: "Webinar",
                text: "The Basic: Structuring Your Video Marketing Strategy",
                date: "",
                img: "https://via.placeholder.com/350x290?text=Text",
                link: "Watch Webinar"
            },
            {
                id: 3,
                category: "Webinar",
                text: "The Basic: Structuring Your Video Marketing Strategy",
                date: "24 Jun",
                img: "https://via.placeholder.com/350x290?text=Text",
                link: "Watch Webinar"
            },
        ];
        this.authorInfo = [
            {
                img: "https://via.placeholder.com/1000x600?text=Text",
                name: "Erik Mathes",
                specialty: "Content Marketing Strategist",
                twitter: "https://twitter.com/explore",
                linkedin: "http://ru.linkedin.com/",
            },
        ];
        this.menuItems = [
            { id: "page1", name: "First Page" },
            { id: "page2", name: "Second Page" },
        ];
        this.storyteller = {
            id: 1,
            title: "Storyteller Circle",
            text: "Event Series",
            link: "Watch Webinar",
        };
        this.subscribeItems = {
            id: 1,
            title: "Ready to take a test drive?",
            text: "We'll help you elevate your video content strategy. Prices starting from $49 a month. ",
            link: "See pricing",
            button: "Try it Free"
        };
        this.secondSubscribeItems = {
            id: 1,
            title: "Recieve articles like this in your mailbox",
            text: "Sign up to get weekly insights & inspiration in your inbox.",
            desc: "are reading this newsletter every week",
            boldText: "6145 people",
            button: "Subscribe"
        };
        this.logoUrl = {
            id: 1,
            logo: "Wibbitz"
        };
        this.subscribeText = {
            id: 1,
            text: 'Subscribe'
        };
        this.footerDescr = {
            id: 1,
            text: 'The online video editor trusted by content creators to make professional video in minutes.'
        };
        this.footerItems = [
            [
                {
                    caption: "Solutions",
                    links: [
                        { id: 1, name: "Studio", img: "https://48vo7843c3543dkn9cvt8sl1-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/Studio-icon.svg" },
                        { id: 2, name: "Lightbox", img: "https://48vo7843c3543dkn9cvt8sl1-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/Lightbox-icon.svg" },
                        { id: 3, name: "Wavi", img: "https://48vo7843c3543dkn9cvt8sl1-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/Wavi-icon.svg" }
                    ]
                },
            ],
            [
                {
                    caption: "Why Wibbitz",
                    links: [
                        { id: 1, name: "Marketing" },
                        { id: 2, name: "Social Media" },
                        { id: 3, name: "News & Editorial" },
                        { id: 4, name: "Agencies" },
                        { id: 5, name: "Internal" },
                        { id: 6, name: "Communications" },
                        { id: 7, name: "Enterprise" }
                    ]
                },
            ],
            [
                {
                    caption: "Resources",
                    links: [
                        { id: 1, name: "Blog" },
                        { id: 2, name: "Customers" },
                        { id: 3, name: "Video Showcase" },
                        { id: 4, name: "Watch a Demo" }
                    ]
                },
            ],
            [
                {
                    caption: "Pricing",
                    links: []
                },
                {
                    caption: "Company",
                    links: [
                        { id: 1, name: "About Us" },
                        { id: 2, name: "Jobs" },
                        { id: 3, name: "Press" }
                    ]
                },
                {
                    caption: "Legal",
                    links: [
                        { id: 1, name: "Terms and Conditions" },
                        { id: 2, name: "Privacy Policy" }
                    ]
                }
            ]
        ];
        this.exploreItems = {
            id: 1,
            title: 'Ready to continue your video marketing journey?',
            text: 'Explore our latest report for all the best practices & insights you\'ll need to easily navigate the video marketing landscape', button: 'Explore report',
            img: 'https://via.placeholder.com/1000x600?text=Text'
        };
        this.languageItems = [
            {
                id: 1, language: "English (United States)"
            },
            {
                id: 2, language: "French"
            }
        ];
    }
    sum(a1, b1) {
        return a1 + b1;
    }
}
AppStoreService.ɵfac = function AppStoreService_Factory(t) { return new (t || AppStoreService)(); };
AppStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppStoreService, factory: AppStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var adam_stencil_v_1_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! adam-stencil-v-1/loader */ "./node_modules/adam-stencil-v-1/loader/index.es2017.mjs");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));
Object(adam_stencil_v_1_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Адам\Desktop\storyboard\angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map