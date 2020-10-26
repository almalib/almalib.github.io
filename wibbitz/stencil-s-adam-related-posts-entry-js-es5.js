function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-related-posts-entry-js"], {
  /***/
  "./node_modules/adam-stencil-v-1/dist/esm/s-adam-related-posts.entry.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/adam-stencil-v-1/dist/esm/s-adam-related-posts.entry.js ***!
    \******************************************************************************/

  /*! exports provided: s_adam_related_posts */

  /***/
  function node_modulesAdamStencilV1DistEsmSAdamRelatedPostsEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_adam_related_posts", function () {
      return SAdamRelatedPosts;
    });
    /* harmony import */


    var _index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-770c2699.js */
    "./node_modules/adam-stencil-v-1/dist/esm/index-770c2699.js");

    var sAdamRelatedPostsCss = ":host{display:block}";

    var SAdamRelatedPosts = /*#__PURE__*/function () {
      function SAdamRelatedPosts(hostRef) {
        _classCallCheck(this, SAdamRelatedPosts);

        Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnPostCard = Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnPostCard", 7);
      }

      _createClass(SAdamRelatedPosts, [{
        key: "render",
        value: function render() {
          return Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", {
            "class": "new-posts py-5"
          }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "container"
          }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", {
            "class": "main-title"
          }, "Related Posts"), Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "row"
          }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])(NewPosts, {
            arr: this.newPosts
          }))));
        }
      }]);

      return SAdamRelatedPosts;
    }();

    var NewPosts = function NewPosts(props) {
      return props.arr.map(function (item) {
        return Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "col-12 col-md-4"
        }, Object(_index_770c2699_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-single-new-post", {
          singlePost: item
        }));
      });
    };

    SAdamRelatedPosts.style = sAdamRelatedPostsCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-adam-related-posts-entry-js-es5.js.map