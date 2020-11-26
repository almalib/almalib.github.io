(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-group-a-entry-js"],{

/***/ "./node_modules/s-market/dist/esm/group-a.entry.js":
/*!*********************************************************!*\
  !*** ./node_modules/s-market/dist/esm/group-a.entry.js ***!
  \*********************************************************/
/*! exports provided: group_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group_a", function() { return GroupA; });
/* harmony import */ var _index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-dec6b4d5.js */ "./node_modules/s-market/dist/esm/index-dec6b4d5.js");
/* harmony import */ var _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-a-ed77f751.js */ "./node_modules/s-market/dist/esm/mock-a-ed77f751.js");
/* harmony import */ var _mock_b_bb75bb06_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-b-bb75bb06.js */ "./node_modules/s-market/dist/esm/mock-b-bb75bb06.js");




const groupACss = "main.sc-group-a{position:relative}";

const GroupA = class {
    constructor(hostRef) {
        Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * выводими в зависимости от авторизации начальную шапку
         * */
        this.login = true;
        /**
         * Первоначальная страница
         * */
        this.firstPageState = true;
    }
    render() {
        return (Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("main", null, Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-header-wrapper", { categories: _mock_b_bb75bb06_js__WEBPACK_IMPORTED_MODULE_2__["h"], login: this.login }, " "), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-shop", null), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-footer", { footerData: _mock_a_ed77f751_js__WEBPACK_IMPORTED_MODULE_1__["f"] }), Object(_index_dec6b4d5_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-market-back-to-top", null)));
    }
};
GroupA.style = groupACss;




/***/ })

}]);
//# sourceMappingURL=stencil-group-a-entry-js.js.map