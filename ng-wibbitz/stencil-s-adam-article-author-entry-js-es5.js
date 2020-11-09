function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-article-author-entry-js"], {
  /***/
  "./node_modules/adam-stencil-v-1/dist/esm/s-adam-article-author.entry.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/adam-stencil-v-1/dist/esm/s-adam-article-author.entry.js ***!
    \*******************************************************************************/

  /*! exports provided: s_adam_article_author */

  /***/
  function node_modulesAdamStencilV1DistEsmSAdamArticleAuthorEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_adam_article_author", function () {
      return SAdamArticleAuthor;
    });
    /* harmony import */


    var _index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-770c2699.js */
    "./node_modules/adam-stencil-v-1/dist/esm/index-770c2699.js");

    var sAdamArticleAuthorCss = "";

    var SAdamArticleAuthor = /*#__PURE__*/function () {
      function SAdamArticleAuthor(hostRef) {
        _classCallCheck(this, SAdamArticleAuthor);

        Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SAdamArticleAuthor, [{
        key: "render",
        value: function render() {
          return Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "container"
          }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Author, {
            arr: this.authorInfo
          }));
        }
      }]);

      return SAdamArticleAuthor;
    }();

    var Author = function Author(props) {
      return props.arr.map(function (item) {
        return Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-author-info", {
          authorInfoStore: item
        });
      });
    };

    SAdamArticleAuthor.style = sAdamArticleAuthorCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-adam-article-author-entry-js-es5.js.map