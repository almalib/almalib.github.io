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

/***/ "./node_modules/stencil-portfolio/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/stencil-portfolio/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cnt-flexy-view-adam-promo-education-1_01_25.entry.js": [
		"./node_modules/stencil-portfolio/dist/esm/cnt-flexy-view-adam-promo-education-1_01_25.entry.js",
		"stencil-cnt-flexy-view-adam-promo-education-1_01_25-entry-js"
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
webpackAsyncContext.id = "./node_modules/stencil-portfolio/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
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




const routes = [];
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
/* harmony import */ var _promo_promo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promo/promo.component */ "./src/app/promo/promo.component.ts");



class AppComponent {
    constructor() {
        this.title = 'ng-promo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-promo");
    } }, directives: [_promo_promo_component__WEBPACK_IMPORTED_MODULE_1__["PromoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _promo_promo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./promo/promo.component */ "./src/app/promo/promo.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _promo_promo_component__WEBPACK_IMPORTED_MODULE_4__["PromoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _promo_promo_component__WEBPACK_IMPORTED_MODULE_4__["PromoComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/promo.service.ts":
/*!**********************************!*\
  !*** ./src/app/promo.service.ts ***!
  \**********************************/
/*! exports provided: PromoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoService", function() { return PromoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PromoService {
    constructor() {
        this.promoMenuItems = [
            { id: "#hello", item: "Привет" },
            { id: "#resume", item: "Резюме" },
            { id: "#portfolio", item: "Портфолио" },
            { id: "#contact", item: "Контакты" },
        ];
        this.introBlock = {
            img: "https://sun9-72.userapi.com/w9Wxx0G6QFsHlmXkUqLcipouhKmKzAgbsqFTRQ/ieIep7fDS_c.jpg",
            name: "Адам Абдулаев_",
            speciality: "front-end разработчик",
            age: "28",
            phone: "8 (963) 705-19-92",
            mail: "almalib@bk.ru",
            address: "Чеченская Республика, Грозный",
        };
        this.helloBlockDescription = "Я начинающий веб-разработчик, с опытом создания веб-приложений с нуля. Умею писать хорошо разработанный, тестируемый и эффективный код, используя лучшие практики в веб-разработке. Быстро учусь, люблю решать сложные задачи и работать в команде. Отвественно подхожу к принятым обязательствам.";
        this.resume = {
            skillsBlock: [
                { technology: "html5", percent: "80%" },
                { technology: "css3", percent: "70%" },
                { technology: "java script", percent: "50%" },
                { technology: "angular", percent: "40%" },
                { technology: "react", percent: "40%" },
                { technology: "stencil js", percent: "50%" },
                { technology: "git", percent: "50%" },
                { technology: "adobe photoshop", percent: "60%" },
            ],
            employmentBlock: [
                {
                    job: 'Информационное агентство "Грозный-информ"',
                    speciality: "Корреспондент",
                    date: "2012 - 2014",
                },
                {
                    job: "Информационно-аналитическое управление Главы и Правительства Чеченской Республики",
                    speciality: "Ведущий специалист-эксперт",
                    date: "2014 - 2018",
                },
                {
                    job: "Федерация профсоюзов Чеченской Республики",
                    speciality: "Заместитель руководителя информационно-аналитического центра",
                    date: "2018 - 2019",
                },
                {
                    job: "Фриланс",
                    speciality: "HTML-верстальщик",
                    date: "2018 - 2020",
                },
                {
                    job: "IT-протсранство Кодология",
                    speciality: "Преподаватель, контент-менеджер",
                    date: "2018 - н.в.",
                },
                {
                    job: "Федерация профсоюзов Чеченской Республики",
                    speciality: "Пресс-секретарь Председателя Федерации профсоюзов Чеченской Республики",
                    date: "2019 - 2020",
                },
            ],
            educationBlock: [
                {
                    institution: "Чеченский Государственный Университет",
                    date: "2009 - 2014",
                    speciality: "Журналистика",
                },
                {
                    institution: "Чеченский государственный педагогический университ",
                    date: "2015",
                    speciality: "Информационно-аналитическое управление на государственной службе",
                },
                {
                    institution: "Курсы программирования Intocode",
                    date: "2020",
                    speciality: "Веб-разработка",
                }
            ],
            resumeBlockDescription: "Сертификат окончания курсов программирования. Английский на уровне Intermediate. Опыт коммерческой веб-разработки. Подготовка спичей, написание новостных и аналитических статей, постов для социальных сетей."
        };
        this.portfolio = {
            portfolioCategory: [
                { id: "all", item: "Все" },
                { id: "web-app", item: "Веб-приложения" },
                { id: "web-site", item: "Веб-сайты" },
                { id: "landing", item: "Лендинги" },
            ],
            portfolioCardsItems: [
                {
                    img: "https://s8.hostingkartinok.com/uploads/images/2020/08/682bbdddead9bc17e915a7a7e7fb35ed.png",
                    title: "Новостной блог",
                    description: "Моя первая работа с использованием Stencil JS.",
                    link: "https://almalib.github.io/angular-app/",
                    category: "web-app",
                    stackList: [
                        "html5",
                        "css3",
                        "java script",
                        "angular",
                        "stencil js",
                        "git",
                    ],
                },
                {
                    img: "https://s8.hostingkartinok.com/uploads/images/2020/08/9bf7ddf29b3cb1ad538a9a582f21484d.png",
                    title: "Десктоп чат",
                    description: "Веб-приложение с возможностью отправки сообщений, фильтрами категорий, диалогов и личных сообщений. Первый опыт работы в команде",
                    link: "https://almalib.github.io/ng-chat/",
                    category: "web-app",
                    stackList: [
                        "html5",
                        "css3",
                        "java script",
                        "angular",
                        "stencil js",
                        "git",
                    ],
                },
                {
                    img: "https://s8.hostingkartinok.com/uploads/images/2020/08/2bbbee435bcb57260720608652c67910.png ",
                    title: "Сайт на CMS WordPress",
                    description: "Медицинский справочник с фильтрацией категорий по алфавиту",
                    link: "http://medikmira.ru/",
                    category: "web-site",
                    stackList: ["html5", "css3", "java script", "wordpress"],
                },
                {
                    img: "https://s8.hostingkartinok.com/uploads/images/2020/08/b71330e448d501ecf8d99570a7562dc6.png",
                    title: "Лендинг на CMS Tilda Publishing",
                    description: "Сайт-визитка для IT-пространства Кодология",
                    link: "http://codologia95.tilda.ws/",
                    category: "landing",
                    stackList: ["tilda"],
                },
            ],
        };
        this.footerBlock = {
            img: "https://s8.hostingkartinok.com/uploads/images/2020/08/fa750b69b2a621efa71f8dfc36f3db46.jpg",
            phone: "8 (963) 705-19-92",
            mail: "almalib@bk.ru",
            skype: "almalib",
        };
    }
}
PromoService.ɵfac = function PromoService_Factory(t) { return new (t || PromoService)(); };
PromoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PromoService, factory: PromoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/promo/promo.component.ts":
/*!******************************************!*\
  !*** ./src/app/promo/promo.component.ts ***!
  \******************************************/
/*! exports provided: PromoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoComponent", function() { return PromoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _promo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../promo.service */ "./src/app/promo.service.ts");



class PromoComponent {
    constructor(promoStore) {
        this.promoStore = promoStore;
    }
    ngOnInit() {
    }
    /**
     * Главное меню
     */
    getPromoMenuItems() {
        return this.promoStore.promoMenuItems;
    }
    /**
     * Блок Интро
     */
    getIntroBlock() {
        return this.promoStore.introBlock;
    }
    /**
     * Блок Привет
     */
    getHelloBlockDescription() {
        return this.promoStore.helloBlockDescription;
    }
    /**
     * Блок Резюме
     */
    getResume() {
        return this.promoStore.resume;
    }
    /**
     * Блок Портфолио
     */
    getPortfolio() {
        return this.promoStore.portfolio;
    }
    /**
     * Блок Футер
     */
    getFooterBlock() {
        return this.promoStore.footerBlock;
    }
}
PromoComponent.ɵfac = function PromoComponent_Factory(t) { return new (t || PromoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_promo_service__WEBPACK_IMPORTED_MODULE_1__["PromoService"])); };
PromoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromoComponent, selectors: [["app-promo"]], decls: 7, vars: 6, consts: [[3, "categories"], [3, "payload"]], template: function PromoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cnt-flexy-view-adam-promo-header-wrapper-1_01", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "cnt-flexy-view-adam-promo-intro-wrapper-1_01", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "cnt-flexy-view-adam-promo-hello-wrapper-1_01", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "cnt-flexy-view-adam-promo-resume-wrapper-1_01", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "cnt-flexy-view-adam-promo-portfolio-wrapper-1_01", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "cnt-flexy-view-adam-promo-footer-wrapper-1_01", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.getPromoMenuItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getIntroBlock());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getHelloBlockDescription());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getResume());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getPortfolio());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.getFooterBlock());
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb21vL3Byb21vLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-promo',
                templateUrl: './promo.component.html',
                styleUrls: ['./promo.component.css']
            }]
    }], function () { return [{ type: _promo_service__WEBPACK_IMPORTED_MODULE_1__["PromoService"] }]; }, null); })();


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
/* harmony import */ var stencil_portfolio_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stencil-portfolio/loader */ "./node_modules/stencil-portfolio/loader/index.es2017.mjs");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));
Object(stencil_portfolio_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Адам\Desktop\portfolio\ng-promo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map