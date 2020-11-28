(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/adam/Документы/crud-app/src/main.ts */"zUnb");


/***/ }),

/***/ "7bk7":
/*!**********************************!*\
  !*** ./src/app/files/mates.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"guid\":\"10e49a2b-0910-49a4-94aa-f29311fd0f79\",\"age\":37,\"name\":{\"first\":\"Flowers\",\"last\":\"Hatfield\"},\"email\":\"flowers.hatfield@undefined.us\"},{\"guid\":\"69827b93-1b7a-4475-9b27-5caffdf5257e\",\"age\":37,\"name\":{\"first\":\"Whitney\",\"last\":\"Pope\"},\"email\":\"whitney.pope@undefined.net\"},{\"guid\":\"0f3808f9-6d86-4b1f-b305-7c17a30f2a63\",\"age\":34,\"name\":{\"first\":\"Pacheco\",\"last\":\"Gilmore\"},\"email\":\"pacheco.gilmore@undefined.io\"},{\"guid\":\"c718963d-cd57-489b-a885-54f70bb44caf\",\"age\":34,\"name\":{\"first\":\"Eloise\",\"last\":\"Wade\"},\"email\":\"eloise.wade@undefined.co.uk\"},{\"guid\":\"9cf80fae-d276-4a02-b3bc-d55833eb9b0b\",\"age\":31,\"name\":{\"first\":\"Bond\",\"last\":\"Gentry\"},\"email\":\"bond.gentry@undefined.com\"},{\"guid\":\"a9723776-19d7-42fa-9840-656544ce28aa\",\"age\":35,\"name\":{\"first\":\"Hess\",\"last\":\"Roy\"},\"email\":\"hess.roy@undefined.tv\"},{\"guid\":\"a34fce4f-2af0-451f-8e1b-488aa87c979b\",\"age\":34,\"name\":{\"first\":\"Priscilla\",\"last\":\"Elliott\"},\"email\":\"priscilla.elliott@undefined.ca\"},{\"guid\":\"d35fa03d-78b7-47b7-80a7-5d11038ff502\",\"age\":38,\"name\":{\"first\":\"Huber\",\"last\":\"Moran\"},\"email\":\"huber.moran@undefined.biz\"},{\"guid\":\"2b34e25a-7c96-47d6-8baf-bf09170b5cd8\",\"age\":21,\"name\":{\"first\":\"Evelyn\",\"last\":\"Arnold\"},\"email\":\"evelyn.arnold@undefined.info\"},{\"guid\":\"1330393a-4dd2-4df3-a8b0-348d77e4b6bf\",\"age\":33,\"name\":{\"first\":\"Kenya\",\"last\":\"Hopper\"},\"email\":\"kenya.hopper@undefined.biz\"},{\"guid\":\"8ca16185-2c51-47b3-9629-794579e11db2\",\"age\":34,\"name\":{\"first\":\"Nellie\",\"last\":\"French\"},\"email\":\"nellie.french@undefined.me\"},{\"guid\":\"0df539be-a877-4d17-a2c0-b8f9b0d23773\",\"age\":26,\"name\":{\"first\":\"Guy\",\"last\":\"Atkinson\"},\"email\":\"guy.atkinson@undefined.org\"},{\"guid\":\"23d9402e-313c-4931-9bd1-69c0b7759d3c\",\"age\":34,\"name\":{\"first\":\"Irene\",\"last\":\"Cunningham\"},\"email\":\"irene.cunningham@undefined.us\"},{\"guid\":\"6837d8fe-5223-4beb-aef6-182a81535a9d\",\"age\":22,\"name\":{\"first\":\"Mclean\",\"last\":\"Solomon\"},\"email\":\"mclean.solomon@undefined.net\"},{\"guid\":\"5aac7015-179f-4bb4-993f-263c141626e9\",\"age\":34,\"name\":{\"first\":\"Mitzi\",\"last\":\"Welch\"},\"email\":\"mitzi.welch@undefined.io\"}]");

/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _list_of_employees_list_of_employees_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-of-employees/list-of-employees.component */ "mDZp");



class AppComponent {
    constructor() {
        this.title = 'crud-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-list-of-employees");
    } }, directives: [_list_of_employees_list_of_employees_component__WEBPACK_IMPORTED_MODULE_1__["ListOfEmployeesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "UXld":
/*!*************************************!*\
  !*** ./src/app/crud-app.service.ts ***!
  \*************************************/
/*! exports provided: CrudAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudAppService", function() { return CrudAppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _files_mates_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/mates.json */ "7bk7");
var _files_mates_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./files/mates.json */ "7bk7", 1);



class CrudAppService {
    constructor() {
        /**
         * Сохранение в переменной JSON объекта
         */
        this.membersList = _files_mates_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    /**
     * Вывод в форме данных сотрудника при нажатии на кнопку изменить
     */
    getMember(member) {
        const index = this.membersList.indexOf(member);
        return this.membersList.find((item, idx) => {
            if (idx === index) {
                return item;
            }
        });
    }
    /**
     * Добавление в список нового сотрудника
     */
    addNewMember(member) {
        this.membersList.push(member);
    }
    /**
     * Удаление сотрудника из списка
     */
    deleteMember(item) {
        const index = this.membersList.indexOf(item);
        this.membersList.splice(index, 1);
    }
    /**
     * Изменение данных сотрудника
     */
    memberEditor(member, oldMember) {
        const index = this.membersList.indexOf(member);
        const changeMember = this.membersList.find((item, idx) => {
            if (idx === index) {
                return item;
            }
        });
        changeMember.name.first = oldMember.name.first;
        changeMember.name.last = oldMember.name.last;
        changeMember.age = oldMember.age;
    }
}
CrudAppService.ɵfac = function CrudAppService_Factory(t) { return new (t || CrudAppService)(); };
CrudAppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CrudAppService, factory: CrudAppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrudAppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _list_of_employees_list_of_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-of-employees/list-of-employees.component */ "mDZp");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _add_member_modal_add_member_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-member-modal/add-member-modal.component */ "jEhq");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _list_of_employees_list_of_employees_component__WEBPACK_IMPORTED_MODULE_4__["ListOfEmployeesComponent"],
        _add_member_modal_add_member_modal_component__WEBPACK_IMPORTED_MODULE_6__["AddMemberModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _list_of_employees_list_of_employees_component__WEBPACK_IMPORTED_MODULE_4__["ListOfEmployeesComponent"],
                    _add_member_modal_add_member_modal_component__WEBPACK_IMPORTED_MODULE_6__["AddMemberModalComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ],
                providers: [
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jEhq":
/*!****************************************************************!*\
  !*** ./src/app/add-member-modal/add-member-modal.component.ts ***!
  \****************************************************************/
/*! exports provided: AddMemberModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberModalComponent", function() { return AddMemberModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _crud_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crud-app.service */ "UXld");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class AddMemberModalComponent {
    constructor(crudService) {
        this.crudService = crudService;
        /**
         *
         */
        this.member = {
            age: 0,
            name: {
                first: '',
                last: '',
            }
        };
    }
    ngOnInit() {
        if (this.overlayRef.item !== null) {
            this.member = this.crudService.getMember(this.overlayRef.item);
        }
    }
    /**
     * Закрытие модального окна добавления сотрудника
     */
    closeAddMemberModal(event, el) {
        var _a;
        if (event.target === el) {
            (_a = this.overlayRef.overlayRef) === null || _a === void 0 ? void 0 : _a.detach();
        }
    }
    /**
     * Добавление нового сотрудника при нажатии
     */
    onSubmit(form) {
        var _a;
        if (form.valid) {
            (_a = this.overlayRef.overlayRef) === null || _a === void 0 ? void 0 : _a.detach();
            const members = {
                age: form.value.age,
                name: {
                    first: form.value.first,
                    last: form.value.last,
                }
            };
            if (this.overlayRef.item === null) {
                this.crudService.addNewMember(members);
            }
            else {
                this.crudService.memberEditor(this.member, members);
            }
        }
    }
}
AddMemberModalComponent.ɵfac = function AddMemberModalComponent_Factory(t) { return new (t || AddMemberModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_crud_app_service__WEBPACK_IMPORTED_MODULE_1__["CrudAppService"])); };
AddMemberModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddMemberModalComponent, selectors: [["app-add-member-modal"]], inputs: { overlayRef: "overlayRef" }, decls: 25, vars: 3, consts: [[1, "add-member-modal-wrapper", 3, "click"], ["backdropElement", ""], [1, "modal-window"], ["novalidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "input-item"], [1, "input-title"], ["required", "", "pattern", "[a-zA-Z ]*", "type", "text", "placeholder", "First name", "name", "first", 3, "ngModel"], ["firstName", "ngModel"], ["required", "", "pattern", "[a-zA-Z ]*", "type", "text", "placeholder", "Last name", "name", "last", 3, "ngModel"], ["lastName", "ngModel"], ["required", "", "type", "number", "placeholder", "0", "pattern", "^[0-9]+$", "name", "age", 3, "ngModel"], ["age", "ngModel"], ["type", "submit", 1, "btn"]], template: function AddMemberModalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddMemberModalComponent_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.closeAddMemberModal($event, _r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddMemberModalComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.onSubmit(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " First name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Last name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Age ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.member.name.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.member.name.last);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.member.age);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]], styles: [".add-member-modal-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.5);\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  display: flex;\n  padding: 15px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border-radius: 5px;\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #fff;\n  border: 1px solid #CCCCCC;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 35px;\n  padding-left: 10px;\n  border: 1px solid #CCCCCC;\n  border-radius: 5px;\n  width: 200px;\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]   input.ng-invalid[_ngcontent-%COMP%] {\n  border-color: red;\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]   input.ng-untouched[_ngcontent-%COMP%] {\n  border-color: #CCCCCC;\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .input-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW1lbWJlci1tb2RhbC9hZGQtbWVtYmVyLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUFFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQUU7RUFDRSxtQkFBQTtBQUVKO0FBREk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUdOO0FBRk07RUFDRSxpQkFBQTtBQUlSO0FBRk07RUFDRSxxQkFBQTtBQUlSO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9hZGQtbWVtYmVyLW1vZGFsL2FkZC1tZW1iZXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLW1lbWJlci1tb2RhbC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7XG4gIC5tb2RhbC13aW5kb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgLmJ0biB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5pbnB1dC1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGlucHV0IHtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgICAgICYubmctdW50b3VjaGVkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjQ0NDQ0NDO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuaW5wdXQtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddMemberModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-member-modal',
                templateUrl: './add-member-modal.component.html',
                styleUrls: ['./add-member-modal.component.scss']
            }]
    }], function () { return [{ type: _crud_app_service__WEBPACK_IMPORTED_MODULE_1__["CrudAppService"] }]; }, { overlayRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mDZp":
/*!******************************************************************!*\
  !*** ./src/app/list-of-employees/list-of-employees.component.ts ***!
  \******************************************************************/
/*! exports provided: ListOfEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfEmployeesComponent", function() { return ListOfEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _add_member_modal_add_member_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-member-modal/add-member-modal.component */ "jEhq");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _crud_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crud-app.service */ "UXld");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ListOfEmployeesComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListOfEmployeesComponent_tr_15_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addMemberModal(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListOfEmployeesComponent_tr_15_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteMember(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const id_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](id_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name.first);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name.last);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.age);
} }
class ListOfEmployeesComponent {
    constructor(overlay, crudService) {
        this.overlay = overlay;
        this.crudService = crudService;
    }
    ngOnInit() {
    }
    /**
     *
     */
    getMemberList() {
        return this.crudService.membersList;
    }
    /**
     *
     */
    addMemberModal(item) {
        const overlayRef = this.overlay.create({
            height: '100%',
            width: '100%',
        });
        const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](_add_member_modal_add_member_modal_component__WEBPACK_IMPORTED_MODULE_2__["AddMemberModalComponent"]);
        overlayRef.attach(portal).instance.overlayRef = { overlayRef, item };
    }
    /**
     * Удаление сотрудника из списка
     */
    deleteMember(item) {
        this.crudService.deleteMember(item);
    }
}
ListOfEmployeesComponent.ɵfac = function ListOfEmployeesComponent_Factory(t) { return new (t || ListOfEmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_crud_app_service__WEBPACK_IMPORTED_MODULE_4__["CrudAppService"])); };
ListOfEmployeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListOfEmployeesComponent, selectors: [["app-list-of-employees"]], decls: 18, vars: 1, consts: [[1, "container"], [1, "item", "table-header"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "item"]], template: function ListOfEmployeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListOfEmployeesComponent_tr_15_Template, 14, 4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListOfEmployeesComponent_Template_button_click_16_listener() { return ctx.addMemberModal(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getMemberList());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 1440px;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 15px;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #F9F9F9;\n}\n\ntr[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%] {\n  border-top: none;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.item[_ngcontent-%COMP%] {\n  border-top: 1px solid #DDDDDD;\n  padding: 15px;\n  width: 250px;\n  max-width: 250px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3380D3;\n  cursor: pointer;\n}\n\n.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  margin-right: 5px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #fff;\n  border: 1px solid #CCCCCC;\n  border-radius: 5px;\n  margin-top: 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1vZi1lbXBsb3llZXMvbGlzdC1vZi1lbXBsb3llZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFHRTtFQUNFLHlCQUFBO0FBQUo7O0FBR0k7RUFDRSxnQkFBQTtBQUROOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpGOztBQUtFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFISjs7QUFJSTtFQUNFLGlCQUFBO0FBRk47O0FBUUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUxGIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1vZi1lbXBsb3llZXMvbGlzdC1vZi1lbXBsb3llZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDE0NDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTVweDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxudHIge1xuICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcbiAgfVxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICAuaXRlbSB7XG4gICAgICBib3JkZXItdG9wOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5cbi50YWJsZS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaXRlbSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjREREREREO1xuICBwYWRkaW5nOiAxNXB4O1xuICB3aWR0aDogMjUwcHg7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBhIHtcbiAgICBjb2xvcjogIzMzODBEMztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cblxufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListOfEmployeesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-of-employees',
                templateUrl: './list-of-employees.component.html',
                styleUrls: ['./list-of-employees.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"] }, { type: _crud_app_service__WEBPACK_IMPORTED_MODULE_4__["CrudAppService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map