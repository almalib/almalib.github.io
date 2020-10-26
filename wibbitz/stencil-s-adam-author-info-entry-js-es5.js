function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-author-info-entry-js"], {
  /***/
  "./node_modules/adam-stencil-v-1/dist/esm/s-adam-author-info.entry.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/adam-stencil-v-1/dist/esm/s-adam-author-info.entry.js ***!
    \****************************************************************************/

  /*! exports provided: s_adam_author_info */

  /***/
  function node_modulesAdamStencilV1DistEsmSAdamAuthorInfoEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_adam_author_info", function () {
      return SAdamAuthorInfo;
    });
    /* harmony import */


    var _index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-770c2699.js */
    "./node_modules/adam-stencil-v-1/dist/esm/index-770c2699.js");

    var sAdamAuthorInfoCss = ".hr{border-top:1px solid lightgray}.author-avatar{width:140px;height:140px;border-radius:100%;background-size:cover;background-position:center;margin-right:30px}.article-author{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.author-name{margin-bottom:5px}.author-spec{font-size:14px}.follow{height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.follow-text{font-size:13px;color:#cccccc;margin-right:30px}.author-socials{margin-bottom:0 !important}@media screen and (max-width: 768px){.author-avatar{width:100px;height:100px}}@media (max-width: 575px){.article-author{-ms-flex-pack:center;justify-content:center;margin-bottom:30px}.follow{-ms-flex-pack:center;justify-content:center}}@media (max-width: 480px){.article-author{-ms-flex-direction:column;flex-direction:column;text-align:center}.follow{-ms-flex-pack:center;justify-content:center}.author-avatar{margin-right:0}}";

    var SAdamAuthorInfo = /*#__PURE__*/function () {
      function SAdamAuthorInfo(hostRef) {
        _classCallCheck(this, SAdamAuthorInfo);

        Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SAdamAuthorInfo, [{
        key: "render",
        value: function render() {
          return Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "article-text"
          }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "hr"
          }), Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "row py-5"
          }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col-12 col-sm-7"
          }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "article-author"
          }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "author-avatar",
            style: {
              backgroundImage: 'url(' + this.authorInfoStore.img + ')'
            }
          }), Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "author-info"
          }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", {
            "class": "author-name"
          }, this.authorInfoStore.name), Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "author-spec"
          }, this.authorInfoStore.specialty)))), Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col-12 col-sm-5"
          }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "follow"
          }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "follow-text"
          }, "Follow me on:"), Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "socials author-socials"
          }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: this.authorInfoStore.twitter
          }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fab fa-twitter-square"
          })), Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: this.authorInfoStore.linkedin
          }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fab fa-linkedin"
          })))))));
        }
      }]);

      return SAdamAuthorInfo;
    }();

    SAdamAuthorInfo.style = sAdamAuthorInfoCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-adam-author-info-entry-js-es5.js.map