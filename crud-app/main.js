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

/***/ "CzW+":
/*!**************************************************************!*\
  !*** ./src/app/list-of-members/list-of-members.component.ts ***!
  \**************************************************************/
/*! exports provided: ListOfMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfMembersComponent", function() { return ListOfMembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _add_member_modal_add_member_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-member-modal/add-member-modal.component */ "jEhq");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _crud_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crud-app.service */ "UXld");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ListOfMembersComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListOfMembersComponent_tr_19_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addMemberModal(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListOfMembersComponent_tr_19_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteMember(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const id_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](id_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name.first);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name.last);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r1.name.first[0], ".", item_r1.name.last[0], " - ", item_r1.email, "");
} }
class ListOfMembersComponent {
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
ListOfMembersComponent.ɵfac = function ListOfMembersComponent_Factory(t) { return new (t || ListOfMembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_crud_app_service__WEBPACK_IMPORTED_MODULE_4__["CrudAppService"])); };
ListOfMembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListOfMembersComponent, selectors: [["app-list-of-members"]], decls: 22, vars: 1, consts: [[1, "container"], [1, "item", "table-header", "short-item"], [1, "item", "table-header"], [1, "item", "table-header", "member-email"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "short-item", "item"], [1, "avatar"], ["src", "https://i.pravatar.cc/50", "alt", "avatar"], [1, "item"], [1, "item", "short-item"], [1, "item", "member-email"]], template: function ListOfMembersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ListOfMembersComponent_tr_19_Template, 19, 7, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListOfMembersComponent_Template_button_click_20_listener() { return ctx.addMemberModal(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getMemberList());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 1440px;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 15px;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth.item[_ngcontent-%COMP%] {\n  border-top: none;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #F9F9F9;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.item[_ngcontent-%COMP%] {\n  border-top: 1px solid #DDDDDD;\n  padding: 15px;\n  width: 250px;\n  max-width: 300px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.item.short-item[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3380D3;\n  cursor: pointer;\n}\n\n.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  margin-right: 5px;\n}\n\n.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  overflow: hidden;\n  width: 40px;\n  height: 40px;\n}\n\n.avatarimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #fff;\n  border: 1px solid #CCCCCC;\n  border-radius: 5px;\n  margin-top: 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1vZi1tZW1iZXJzL2xpc3Qtb2YtbWVtYmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7QUFHRjs7QUFBRTtFQUNFLHlCQUFBO0FBR0o7O0FBQUE7RUFDRSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBRkU7RUFDRSxZQUFBO0FBSUo7O0FBRkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUhJO0VBQ0UsaUJBQUE7QUFLTjs7QUFISTtFQUNFLDBCQUFBO0FBS047O0FBREE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFJRjs7QUFIRTtFQUNFLFdBQUE7QUFLSjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBS0YiLCJmaWxlIjoic3JjL2FwcC9saXN0LW9mLW1lbWJlcnMvbGlzdC1vZi1tZW1iZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxNDQwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxudGguaXRlbSB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG50ciB7XG4gICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xuICB9XG59XG4udGFibGUtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLml0ZW0ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0RERERERDtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgJi5zaG9ydC1pdGVtIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgYSB7XG4gICAgY29sb3I6ICMzMzgwRDM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICB9XG59XG4uYXZhdGFyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAmaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListOfMembersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-of-members',
                templateUrl: './list-of-members.component.html',
                styleUrls: ['./list-of-members.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"] }, { type: _crud_app_service__WEBPACK_IMPORTED_MODULE_4__["CrudAppService"] }]; }, null); })();


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
/* harmony import */ var _list_of_members_list_of_members_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-of-members/list-of-members.component */ "CzW+");



class AppComponent {
    constructor() {
        this.title = 'crud-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-list-of-members");
    } }, directives: [_list_of_members_list_of_members_component__WEBPACK_IMPORTED_MODULE_1__["ListOfMembersComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
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
        changeMember.email = oldMember.email;
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
/* harmony import */ var _list_of_members_list_of_members_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-of-members/list-of-members.component */ "CzW+");
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
        _list_of_members_list_of_members_component__WEBPACK_IMPORTED_MODULE_4__["ListOfMembersComponent"],
        _add_member_modal_add_member_modal_component__WEBPACK_IMPORTED_MODULE_6__["AddMemberModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _list_of_members_list_of_members_component__WEBPACK_IMPORTED_MODULE_4__["ListOfMembersComponent"],
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["buttonElement"];
function AddMemberModalComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMemberModalComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Invalid surname ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMemberModalComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMemberModalComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Invalid surname ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMemberModalComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMemberModalComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Invalid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMemberModalComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMemberModalComponent_button_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
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
            },
            email: '',
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
                },
                email: form.value.email,
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
AddMemberModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddMemberModalComponent, selectors: [["app-add-member-modal"]], viewQuery: function AddMemberModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buttonElement = _t.first);
    } }, inputs: { overlayRef: "overlayRef" }, decls: 38, vars: 12, consts: [[1, "add-member-modal-wrapper", 3, "click"], ["backdropElement", ""], [1, "modal-window"], ["formElement", ""], ["novalidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "input-item"], [1, "input-title"], ["required", "", "pattern", "^[\u0430-\u044F\u0410-\u042F\u0451\u0401a-zA-Z]+$", "type", "text", "placeholder", "First name", "name", "first", 3, "ngModel"], ["firstName", "ngModel"], ["class", "prompt", 4, "ngIf"], ["class", "prompt error", 4, "ngIf"], ["required", "", "pattern", "^[\u0430-\u044F\u0410-\u042F\u0451\u0401a-zA-Z]+$", "type", "text", "placeholder", "Last name", "name", "last", 3, "ngModel"], ["lastName", "ngModel"], ["required", "", "email", "", "type", "email", "placeholder", "Email", "name", "email", 3, "ngModel"], ["email", "ngModel"], ["required", "", "type", "number", "placeholder", "0", "min", "1", "pattern", "^[0-9]+$", "name", "age", 3, "ngModel"], ["age", "ngModel"], ["class", "btn", "type", "submit", 4, "ngIf"], [1, "prompt"], [1, "prompt", "error"], ["type", "submit", 1, "btn"]], template: function AddMemberModalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddMemberModalComponent_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.closeAddMemberModal($event, _r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddMemberModalComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmit(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " First name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddMemberModalComponent_div_12_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddMemberModalComponent_div_13_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Last name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddMemberModalComponent_div_20_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddMemberModalComponent_div_21_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddMemberModalComponent_div_28_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AddMemberModalComponent_div_29_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Age ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AddMemberModalComponent_button_36_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AddMemberModalComponent_button_37_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.member.name.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.value.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.member.name.last);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.value.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.touched && _r6.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.member.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.value.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.touched && _r9.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.member.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.overlayRef.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.overlayRef.item);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]], styles: [".add-member-modal-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.5);\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  display: flex;\n  padding: 15px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border-radius: 5px;\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #fff;\n  border: 1px solid #CCCCCC;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 35px;\n  padding-left: 10px;\n  border: 1px solid #CCCCCC;\n  border-radius: 5px;\n  width: 250px;\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]   input.ng-invalid[_ngcontent-%COMP%] {\n  border-color: red;\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]   input.ng-untouched[_ngcontent-%COMP%] {\n  border-color: #CCCCCC;\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]   .prompt.error[_ngcontent-%COMP%] {\n  color: red;\n}\n.add-member-modal-wrapper[_ngcontent-%COMP%]   .input-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW1lbWJlci1tb2RhbC9hZGQtbWVtYmVyLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUFFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQUU7RUFDRSxtQkFBQTtBQUVKO0FBREk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUdOO0FBRk07RUFDRSxpQkFBQTtBQUlSO0FBRk07RUFDRSxxQkFBQTtBQUlSO0FBREk7RUFDRSxlQUFBO0FBR047QUFGTTtFQUNFLFVBQUE7QUFJUjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvYWRkLW1lbWJlci1tb2RhbC9hZGQtbWVtYmVyLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1tZW1iZXItbW9kYWwtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUpO1xuICAubW9kYWwtd2luZG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5idG4ge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuaW5wdXQtaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBpbnB1dCB7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgJi5uZy1pbnZhbGlkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgICB9XG4gICAgICAmLm5nLXVudG91Y2hlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0NDQ0NDQztcbiAgICAgIH1cbiAgICB9XG4gICAgLnByb21wdCB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAmLmVycm9yIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmlucHV0LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddMemberModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-member-modal',
                templateUrl: './add-member-modal.component.html',
                styleUrls: ['./add-member-modal.component.scss']
            }]
    }], function () { return [{ type: _crud_app_service__WEBPACK_IMPORTED_MODULE_1__["CrudAppService"] }]; }, { overlayRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttonElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['buttonElement', { static: false }]
        }] }); })();


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