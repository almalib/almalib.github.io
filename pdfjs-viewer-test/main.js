(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Adam\Documents\pdfjs-viewer-test\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

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
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function AppComponent_ng_container_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("of ", ctx_r1.pdf.numPages, "");
} }
function AppComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_4_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.incrementPage(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_4_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_container_4_span_4_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "/assets/icon/baseline-navigate_before-24px.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pdf);
} }
class AppComponent {
    constructor() {
        this.pdfSrc = '../assets/pdftron-sdk.pdf';
        this.page = 1;
        this.rotation = 0;
        this.zoom = 1.0;
        this.originalSize = true;
        this.renderText = true;
        this.stickToPage = false;
        this.showAll = true;
        this.autoresize = true;
        this.fitToPage = true;
        this.isOutlineShown = false;
        this.pdfQuery = '';
        this.pinchZoomEnabled = false;
        this.startX = 0;
        this.startY = 0;
        this.initialPinchDistance = 0;
        this.pinchScale = 1;
    }
    openLocalFile() {
        jQuery('#file').trigger('click');
    }
    toggleOutline() {
        this.isOutlineShown = !this.isOutlineShown;
    }
    incrementPage(amount) {
        this.page += amount;
    }
    incrementZoom(amount) {
        this.zoom += amount;
    }
    rotate(angle) {
        this.rotation += angle;
    }
    /**
     * Render PDF preview on selecting file
     */
    onFileSelected() {
        const $pdf = document.querySelector('#file');
        if (typeof FileReader !== 'undefined') {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.pdfSrc = e.target.result;
            };
            reader.readAsArrayBuffer($pdf.files[0]);
        }
    }
    /**
     * Get pdf information after it's loaded
     * @param pdf
     */
    /**
     * Handle error callback
     *
     * @param error
     */
    onError(error) {
        this.error = error; // set error
        if (error.name === 'PasswordException') {
            const password = prompt('This document is password protected. Enter the password:');
            if (password) {
                this.error = null;
                this.setPassword(password);
            }
        }
    }
    setPassword(password) {
        let newSrc;
        if (this.pdfSrc instanceof ArrayBuffer) {
            newSrc = { data: this.pdfSrc };
        }
        else if (typeof this.pdfSrc === 'string') {
            newSrc = { url: this.pdfSrc };
        }
        else {
            newSrc = Object.assign({}, this.pdfSrc);
        }
        newSrc.password = password;
        this.pdfSrc = newSrc;
    }
    getInt(value) {
        return Math.round(value);
    }
    /**
     * Navigate to destination
     * @param destination
     */
    /**
     * Page rendered callback, which is called when a page is rendered (called multiple times)
     *
     * @param {CustomEvent} e
     */
    pageRendered() {
        const page = document.querySelector('.page');
        console.log(page);
        page === null || page === void 0 ? void 0 : page.insertAdjacentHTML('afterend', '<div id="video-container"><div id="mini-video"><iframe width="100%" height="100%" style="position: absolute; left: 0; top: 0;" src="https://www.youtube.com/embed/OwQaBbW3OKU?playsinline=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>');
        const viewerContainer = document.getElementById('viewerContainer');
        const video = document.getElementById('video-container');
        viewerContainer === null || viewerContainer === void 0 ? void 0 : viewerContainer.addEventListener('scroll', () => {
            var _a, _b;
            if (!this.isVideoInViewport(video)) {
                (_a = video === null || video === void 0 ? void 0 : video.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add('fixed');
            }
            else if (this.isVideoInViewport(video)) {
                (_b = video === null || video === void 0 ? void 0 : video.firstElementChild) === null || _b === void 0 ? void 0 : _b.classList.remove('fixed');
            }
        });
        if (!this.pinchZoomEnabled) {
            this.pinchZoomEnabled = true;
            this.enablePinchZoom();
        }
    }
    isVideoInViewport(el) {
        const video = el.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        const vertInView = (video.top <= windowHeight) && ((video.top + video.height) >= 0);
        const horInView = (video.left <= windowWidth) && ((video.left + video.width) >= 0);
        return (vertInView && horInView);
    }
    enablePinchZoom() {
        const viewer = document.getElementById('viewer');
        const container = document.getElementById('viewerContainer');
        const reset = () => { this.startX = this.startY = this.initialPinchDistance = 0; this.pinchScale = 1; };
        // Prevent native iOS page zoom
        // document.addEventListener("touchmove", (e) => { if (e.scale !== 1) { e.preventDefault(); } }, { passive: false });
        document.addEventListener('touchstart', (e) => {
            if (e.touches.length > 1) {
                this.startX = (e.touches[0].pageX + e.touches[1].pageX) / 2;
                this.startY = (e.touches[0].pageY + e.touches[1].pageY) / 2;
                this.initialPinchDistance = Math.hypot((e.touches[1].pageX - e.touches[0].pageX), (e.touches[1].pageY - e.touches[0].pageY));
            }
            else {
                this.initialPinchDistance = 0;
            }
        });
        document.addEventListener('touchmove', (e) => {
            if (this.initialPinchDistance <= 0 || e.touches.length < 2) {
                return;
            }
            if (this.pinchScale !== 1) {
                e.preventDefault();
            }
            const pinchDistance = Math.hypot((e.touches[1].pageX - e.touches[0].pageX), (e.touches[1].pageY - e.touches[0].pageY));
            const originX = this.startX + container.scrollLeft;
            const originY = this.startY + container.scrollTop;
            this.pinchScale = pinchDistance / this.initialPinchDistance;
            viewer.style.transform = `scale(${this.pinchScale})`;
            viewer.style.transformOrigin = `${originX}px ${originY}px`;
        }, { passive: false });
        document.addEventListener('touchend', (e) => {
            if (this.initialPinchDistance <= 0) {
                return;
            }
            viewer.style.transform = `none`;
            viewer.style.transformOrigin = `unset`;
            const PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.pdfViewer.currentScale *= this.pinchScale;
            const rect = container.getBoundingClientRect();
            const dx = this.startX - rect.left;
            const dy = this.startY - rect.top;
            container.scrollLeft += dx * (this.pinchScale - 1);
            container.scrollTop += dy * (this.pinchScale - 1);
            reset();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 14, consts: [["type", "file", "id", "file", "accept", ".pdf", 1, "d-none", 3, "change"], [1, "toolbar", "d-flex"], ["title", "Zoom In", 1, "my-icon", 3, "inlineSVG", "click"], ["title", "Zoom Out", 1, "my-icon", 3, "inlineSVG", "click"], [4, "ngIf"], [1, "pdf-body"], [3, "src", "page", "rotation", "original-size", "fit-to-page", "zoom", "show-all", "stick-to-page", "render-text", "external-link-target", "autoresize", "pageChange", "error", "pages-initialized"], ["title", "Previous Page", 1, "my-icon", "ml-auto", 3, "inlineSVG", "click"], ["type", "number", "placeholder", "Page", "pattern", "-?[0-9]*(\\.[0-9]+)?", 1, "page-num", 3, "ngModel", "ngModelChange"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_0_listener() { return ctx.onFileSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_2_listener() { return ctx.incrementZoom(0.1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_3_listener() { return ctx.incrementZoom(-0.1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_container_4_Template, 5, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pdf-viewer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AppComponent_Template_pdf_viewer_pageChange_6_listener($event) { return ctx.page = $event; })("error", function AppComponent_Template_pdf_viewer_error_6_listener($event) { return ctx.onError($event); })("pages-initialized", function AppComponent_Template_pdf_viewer_pages_initialized_6_listener() { return ctx.pageRendered(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "/assets/icon/baseline-zoom_in-24px.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "/assets/icon/baseline-zoom_out-24px.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("page", ctx.page)("rotation", ctx.rotation)("original-size", ctx.originalSize)("fit-to-page", ctx.fitToPage)("zoom", ctx.zoom)("show-all", ctx.showAll)("stick-to-page", ctx.stickToPage)("render-text", ctx.renderText)("external-link-target", "blank")("autoresize", ctx.autoresize);
    } }, directives: [ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__["InlineSVGDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_3__["PdfViewerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  background: #303030;\n  padding: 10px;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 9999;\n}\n.toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n}\n.my-icon[_ngcontent-%COMP%] {\n  margin: 0 7px;\n  cursor: pointer;\n}\n.my-icon[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n.my-icon.active[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.my-icon.active[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.page-num[_ngcontent-%COMP%] {\n  width: 50px;\n  border: 0;\n  margin-right: 2px;\n  text-align: center;\n}\n.searchbox[_ngcontent-%COMP%] {\n  width: 0;\n  opacity: 0;\n  transition: all 0.3s ease-out;\n  border: 0px;\n  padding: 0 3px;\n}\n.searchbox[_ngcontent-%COMP%]:focus, .searchbox[_ngcontent-%COMP%]:active {\n  outline: 0;\n  box-shadow: none;\n}\n.searchbox[_ngcontent-%COMP%]:focus {\n  opacity: 1;\n  width: 200px;\n}\n.pdf-body[_ngcontent-%COMP%] {\n  margin-top: 46px;\n}\ninput[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:active {\n  outline: 0;\n  box-shadow: none;\n}\n.outline[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  padding: 60px 5px 5px;\n  height: 100vh;\n  width: 250px;\n  z-index: 9000;\n  box-shadow: 3px 0px 5px 0px rgba(0, 0, 0, 0.75);\n  background: white;\n}\n.outline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtBQUVKO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUVGO0FBREU7RUFDRSxZQUFBO0FBR0o7QUFERTtFQUNFLFlBQUE7QUFHSjtBQURFO0VBQ0UsVUFBQTtBQUdKO0FBQUE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQURBO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBSUY7QUFIRTtFQUVFLFVBQUE7RUFDQSxnQkFBQTtBQUlKO0FBREE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUlGO0FBRkE7RUFDRSxnQkFBQTtBQUtGO0FBRkU7RUFFRSxVQUFBO0VBQ0EsZ0JBQUE7QUFJSjtBQURBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLGlCQUFBO0FBSUY7QUFIRTtFQUNFLGtCQUFBO0FBS0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHNwYW4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuLm15LWljb24ge1xuICBtYXJnaW46IDAgN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gICYuYWN0aXZlOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4ucGFnZS1udW0ge1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlYXJjaGJveCB7XG4gIHdpZHRoOiAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgYm9yZGVyOiAwcHg7XG4gIHBhZGRpbmc6IDAgM3B4O1xuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG59XG4uc2VhcmNoYm94OmZvY3VzIHtcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IDIwMHB4O1xufVxuLnBkZi1ib2R5IHtcbiAgbWFyZ2luLXRvcDogNDZweDtcbn1cbmlucHV0IHtcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuLm91dGxpbmUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogNjBweCA1cHggNXB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMjUwcHg7XG4gIHotaW5kZXg6IDkwMDA7XG4gIGJveC1zaGFkb3c6IDNweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdWwge1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgfVxufVxuXG4iXX0= */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_3__["PdfViewerModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__["InlineSVGModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_3__["PdfViewerModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__["InlineSVGModule"]] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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