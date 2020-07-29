function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~stencil-cnt-module-chat-entry-js~stencil-contact-card_24-entry-js"], {
  /***/
  "./node_modules/stencil-chat/dist/esm/utils-4870d924.js":
  /*!**************************************************************!*\
    !*** ./node_modules/stencil-chat/dist/esm/utils-4870d924.js ***!
    \**************************************************************/

  /*! exports provided: C, T, a, d */

  /***/
  function node_modulesStencilChatDistEsmUtils4870d924Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "C", function () {
      return ChatMessagesLogic;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "T", function () {
      return Timer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return ChatDictionaryService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return dayjs_min;
    });

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
      return module = {
        exports: {}
      }, fn(module, module.exports), module.exports;
    }

    var dayjs_min = createCommonjsModule(function (module, exports) {
      !function (t, e) {
        module.exports = e();
      }(commonjsGlobal, function () {
        var t = "millisecond",
            e = "second",
            n = "minute",
            r = "hour",
            i = "day",
            s = "week",
            u = "month",
            o = "quarter",
            a = "year",
            h = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
            f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            c = function c(t, e, n) {
          var r = String(t);
          return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
        },
            d = {
          s: c,
          z: function z(t) {
            var e = -t.utcOffset(),
                n = Math.abs(e),
                r = Math.floor(n / 60),
                i = n % 60;
            return (e <= 0 ? "+" : "-") + c(r, 2, "0") + ":" + c(i, 2, "0");
          },
          m: function m(t, e) {
            var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                r = t.clone().add(n, u),
                i = e - r < 0,
                s = t.clone().add(n + (i ? -1 : 1), u);
            return Number(-(n + (e - r) / (i ? r - s : s - r)) || 0);
          },
          a: function a(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
          },
          p: function p(h) {
            return {
              M: u,
              y: a,
              w: s,
              d: i,
              D: "date",
              h: r,
              m: n,
              s: e,
              ms: t,
              Q: o
            }[h] || String(h || "").toLowerCase().replace(/s$/, "");
          },
          u: function u(t) {
            return void 0 === t;
          }
        },
            $ = {
          name: "en",
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
        },
            l = "en",
            m = {};

        m[l] = $;

        var y = function y(t) {
          return t instanceof v;
        },
            M = function M(t, e, n) {
          var r;
          if (!t) return l;
          if ("string" == typeof t) m[t] && (r = t), e && (m[t] = e, r = t);else {
            var i = t.name;
            m[i] = t, r = i;
          }
          return !n && r && (l = r), r || !n && l;
        },
            g = function g(t, e) {
          if (y(t)) return t.clone();
          var n = "object" == typeof e ? e : {};
          return n.date = t, n.args = arguments, new v(n);
        },
            D = d;

        D.l = M, D.i = y, D.w = function (t, e) {
          return g(t, {
            locale: e.$L,
            utc: e.$u,
            $offset: e.$offset
          });
        };

        var v = function () {
          function c(t) {
            this.$L = this.$L || M(t.locale, null, !0), this.parse(t);
          }

          var d = c.prototype;
          return d.parse = function (t) {
            this.$d = function (t) {
              var e = t.date,
                  n = t.utc;
              if (null === e) return new Date(NaN);
              if (D.u(e)) return new Date();
              if (e instanceof Date) return new Date(e);

              if ("string" == typeof e && !/Z$/i.test(e)) {
                var r = e.match(h);
                if (r) return n ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0)) : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0);
              }

              return new Date(e);
            }(t), this.init();
          }, d.init = function () {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
          }, d.$utils = function () {
            return D;
          }, d.isValid = function () {
            return !("Invalid Date" === this.$d.toString());
          }, d.isSame = function (t, e) {
            var n = g(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
          }, d.isAfter = function (t, e) {
            return g(t) < this.startOf(e);
          }, d.isBefore = function (t, e) {
            return this.endOf(e) < g(t);
          }, d.$g = function (t, e, n) {
            return D.u(t) ? this[e] : this.set(n, t);
          }, d.year = function (t) {
            return this.$g(t, "$y", a);
          }, d.month = function (t) {
            return this.$g(t, "$M", u);
          }, d.day = function (t) {
            return this.$g(t, "$W", i);
          }, d.date = function (t) {
            return this.$g(t, "$D", "date");
          }, d.hour = function (t) {
            return this.$g(t, "$H", r);
          }, d.minute = function (t) {
            return this.$g(t, "$m", n);
          }, d.second = function (t) {
            return this.$g(t, "$s", e);
          }, d.millisecond = function (e) {
            return this.$g(e, "$ms", t);
          }, d.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }, d.valueOf = function () {
            return this.$d.getTime();
          }, d.startOf = function (t, o) {
            var h = this,
                f = !!D.u(o) || o,
                c = D.p(t),
                d = function d(t, e) {
              var n = D.w(h.$u ? Date.UTC(h.$y, e, t) : new Date(h.$y, e, t), h);
              return f ? n : n.endOf(i);
            },
                $ = function $(t, e) {
              return D.w(h.toDate()[t].apply(h.toDate("s"), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), h);
            },
                l = this.$W,
                m = this.$M,
                y = this.$D,
                M = "set" + (this.$u ? "UTC" : "");

            switch (c) {
              case a:
                return f ? d(1, 0) : d(31, 11);

              case u:
                return f ? d(1, m) : d(0, m + 1);

              case s:
                var g = this.$locale().weekStart || 0,
                    v = (l < g ? l + 7 : l) - g;
                return d(f ? y - v : y + (6 - v), m);

              case i:
              case "date":
                return $(M + "Hours", 0);

              case r:
                return $(M + "Minutes", 1);

              case n:
                return $(M + "Seconds", 2);

              case e:
                return $(M + "Milliseconds", 3);

              default:
                return this.clone();
            }
          }, d.endOf = function (t) {
            return this.startOf(t, !1);
          }, d.$set = function (s, o) {
            var h,
                f = D.p(s),
                c = "set" + (this.$u ? "UTC" : ""),
                d = (h = {}, h[i] = c + "Date", h.date = c + "Date", h[u] = c + "Month", h[a] = c + "FullYear", h[r] = c + "Hours", h[n] = c + "Minutes", h[e] = c + "Seconds", h[t] = c + "Milliseconds", h)[f],
                $ = f === i ? this.$D + (o - this.$W) : o;

            if (f === u || f === a) {
              var l = this.clone().set("date", 1);
              l.$d[d]($), l.init(), this.$d = l.set("date", Math.min(this.$D, l.daysInMonth())).toDate();
            } else d && this.$d[d]($);

            return this.init(), this;
          }, d.set = function (t, e) {
            return this.clone().$set(t, e);
          }, d.get = function (t) {
            return this[D.p(t)]();
          }, d.add = function (t, o) {
            var h,
                f = this;
            t = Number(t);

            var c = D.p(o),
                d = function d(e) {
              var n = g(f);
              return D.w(n.date(n.date() + Math.round(e * t)), f);
            };

            if (c === u) return this.set(u, this.$M + t);
            if (c === a) return this.set(a, this.$y + t);
            if (c === i) return d(1);
            if (c === s) return d(7);
            var $ = (h = {}, h[n] = 6e4, h[r] = 36e5, h[e] = 1e3, h)[c] || 1,
                l = this.$d.getTime() + t * $;
            return D.w(l, this);
          }, d.subtract = function (t, e) {
            return this.add(-1 * t, e);
          }, d.format = function (t) {
            var e = this;
            if (!this.isValid()) return "Invalid Date";

            var n = t || "YYYY-MM-DDTHH:mm:ssZ",
                r = D.z(this),
                i = this.$locale(),
                s = this.$H,
                u = this.$m,
                o = this.$M,
                a = i.weekdays,
                h = i.months,
                c = function c(t, r, i, s) {
              return t && (t[r] || t(e, n)) || i[r].substr(0, s);
            },
                d = function d(t) {
              return D.s(s % 12 || 12, t, "0");
            },
                $ = i.meridiem || function (t, e, n) {
              var r = t < 12 ? "AM" : "PM";
              return n ? r.toLowerCase() : r;
            },
                l = {
              YY: String(this.$y).slice(-2),
              YYYY: this.$y,
              M: o + 1,
              MM: D.s(o + 1, 2, "0"),
              MMM: c(i.monthsShort, o, h, 3),
              MMMM: c(h, o),
              D: this.$D,
              DD: D.s(this.$D, 2, "0"),
              d: String(this.$W),
              dd: c(i.weekdaysMin, this.$W, a, 2),
              ddd: c(i.weekdaysShort, this.$W, a, 3),
              dddd: a[this.$W],
              H: String(s),
              HH: D.s(s, 2, "0"),
              h: d(1),
              hh: d(2),
              a: $(s, u, !0),
              A: $(s, u, !1),
              m: String(u),
              mm: D.s(u, 2, "0"),
              s: String(this.$s),
              ss: D.s(this.$s, 2, "0"),
              SSS: D.s(this.$ms, 3, "0"),
              Z: r
            };

            return n.replace(f, function (t, e) {
              return e || l[t] || r.replace(":", "");
            });
          }, d.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, d.diff = function (t, h, f) {
            var c,
                d = D.p(h),
                $ = g(t),
                l = 6e4 * ($.utcOffset() - this.utcOffset()),
                m = this - $,
                y = D.m(this, $);
            return y = (c = {}, c[a] = y / 12, c[u] = y, c[o] = y / 3, c[s] = (m - l) / 6048e5, c[i] = (m - l) / 864e5, c[r] = m / 36e5, c[n] = m / 6e4, c[e] = m / 1e3, c)[d] || m, f ? y : D.a(y);
          }, d.daysInMonth = function () {
            return this.endOf(u).$D;
          }, d.$locale = function () {
            return m[this.$L];
          }, d.locale = function (t, e) {
            if (!t) return this.$L;
            var n = this.clone(),
                r = M(t, e, !0);
            return r && (n.$L = r), n;
          }, d.clone = function () {
            return D.w(this.$d, this);
          }, d.toDate = function () {
            return new Date(this.valueOf());
          }, d.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }, d.toISOString = function () {
            return this.$d.toISOString();
          }, d.toString = function () {
            return this.$d.toUTCString();
          }, c;
        }();

        return g.prototype = v.prototype, g.extend = function (t, e) {
          return t(e, v, g), g;
        }, g.locale = M, g.isDayjs = y, g.unix = function (t) {
          return g(1e3 * t);
        }, g.en = m[l], g.Ls = m, g;
      });
    });

    function isFunction(x) {
      return typeof x === 'function';
    }

    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    var config = {
      Promise: undefined,

      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error = new Error();
          console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }

        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },

      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }

    };

    function hostReportError(err) {
      setTimeout(function () {
        throw err;
      }, 0);
    }

    var empty = {
      closed: true,
      next: function next(value) {},
      error: function error(err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError(err);
        }
      },
      complete: function complete() {}
    };

    var isArray = function () {
      return Array.isArray || function (x) {
        return x && typeof x.length === 'number';
      };
    }();

    function isObject(x) {
      return x !== null && typeof x === 'object';
    }

    var UnsubscriptionErrorImpl = function () {
      function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ? "".concat(errors.length, " errors occurred during unsubscription:\n").concat(errors.map(function (err, i) {
          return "".concat(i + 1, ") ").concat(err.toString());
        }).join('\n  ')) : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
      }

      UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl;
    }();

    var UnsubscriptionError = UnsubscriptionErrorImpl;

    var Subscription = /*#__PURE__*/function () {
      function Subscription(unsubscribe) {
        _classCallCheck(this, Subscription);

        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;

        if (unsubscribe) {
          this._unsubscribe = unsubscribe;
        }
      }

      _createClass(Subscription, [{
        key: "unsubscribe",
        value: function unsubscribe() {
          var errors;

          if (this.closed) {
            return;
          }

          var _parentOrParents = this._parentOrParents,
              _unsubscribe = this._unsubscribe,
              _subscriptions = this._subscriptions;
          this.closed = true;
          this._parentOrParents = null;
          this._subscriptions = null;

          if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
          } else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
              var parent = _parentOrParents[index];
              parent.remove(this);
            }
          }

          if (isFunction(_unsubscribe)) {
            try {
              _unsubscribe.call(this);
            } catch (e) {
              errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
          }

          if (isArray(_subscriptions)) {
            var _index = -1;

            var len = _subscriptions.length;

            while (++_index < len) {
              var sub = _subscriptions[_index];

              if (isObject(sub)) {
                try {
                  sub.unsubscribe();
                } catch (e) {
                  errors = errors || [];

                  if (e instanceof UnsubscriptionError) {
                    errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                  } else {
                    errors.push(e);
                  }
                }
              }
            }
          }

          if (errors) {
            throw new UnsubscriptionError(errors);
          }
        }
      }, {
        key: "add",
        value: function add(teardown) {
          var subscription = teardown;

          if (!teardown) {
            return Subscription.EMPTY;
          }

          switch (typeof teardown) {
            case 'function':
              subscription = new Subscription(teardown);

            case 'object':
              if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                return subscription;
              } else if (this.closed) {
                subscription.unsubscribe();
                return subscription;
              } else if (!(subscription instanceof Subscription)) {
                var tmp = subscription;
                subscription = new Subscription();
                subscription._subscriptions = [tmp];
              }

              break;

            default:
              {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
              }
          }

          var _subscription = subscription,
              _parentOrParents = _subscription._parentOrParents;

          if (_parentOrParents === null) {
            subscription._parentOrParents = this;
          } else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
              return subscription;
            }

            subscription._parentOrParents = [_parentOrParents, this];
          } else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
          } else {
            return subscription;
          }

          var subscriptions = this._subscriptions;

          if (subscriptions === null) {
            this._subscriptions = [subscription];
          } else {
            subscriptions.push(subscription);
          }

          return subscription;
        }
      }, {
        key: "remove",
        value: function remove(subscription) {
          var subscriptions = this._subscriptions;

          if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);

            if (subscriptionIndex !== -1) {
              subscriptions.splice(subscriptionIndex, 1);
            }
          }
        }
      }]);

      return Subscription;
    }();

    Subscription.EMPTY = function (empty) {
      empty.closed = true;
      return empty;
    }(new Subscription());

    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof UnsubscriptionError ? err.errors : err);
      }, []);
    }

    var rxSubscriber = function () {
      return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
    }();

    var Subscriber = /*#__PURE__*/function (_Subscription) {
      _inherits(Subscriber, _Subscription);

      var _super = _createSuper(Subscriber);

      function Subscriber(destinationOrNext, error, complete) {
        var _this;

        _classCallCheck(this, Subscriber);

        _this = _super.call(this);
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;

        switch (arguments.length) {
          case 0:
            _this.destination = empty;
            break;

          case 1:
            if (!destinationOrNext) {
              _this.destination = empty;
              break;
            }

            if (typeof destinationOrNext === 'object') {
              if (destinationOrNext instanceof Subscriber) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_assertThisInitialized(_this));
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_assertThisInitialized(_this), destinationOrNext);
              }

              break;
            }

          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_assertThisInitialized(_this), destinationOrNext, error, complete);
            break;
        }

        return _this;
      }

      _createClass(Subscriber, [{
        key: rxSubscriber,
        value: function value() {
          return this;
        }
      }, {
        key: "next",
        value: function next(value) {
          if (!this.isStopped) {
            this._next(value);
          }
        }
      }, {
        key: "error",
        value: function error(err) {
          if (!this.isStopped) {
            this.isStopped = true;

            this._error(err);
          }
        }
      }, {
        key: "complete",
        value: function complete() {
          if (!this.isStopped) {
            this.isStopped = true;

            this._complete();
          }
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          if (this.closed) {
            return;
          }

          this.isStopped = true;

          _get(_getPrototypeOf(Subscriber.prototype), "unsubscribe", this).call(this);
        }
      }, {
        key: "_next",
        value: function _next(value) {
          this.destination.next(value);
        }
      }, {
        key: "_error",
        value: function _error(err) {
          this.destination.error(err);
          this.unsubscribe();
        }
      }, {
        key: "_complete",
        value: function _complete() {
          this.destination.complete();
          this.unsubscribe();
        }
      }, {
        key: "_unsubscribeAndRecycle",
        value: function _unsubscribeAndRecycle() {
          var _parentOrParents = this._parentOrParents;
          this._parentOrParents = null;
          this.unsubscribe();
          this.closed = false;
          this.isStopped = false;
          this._parentOrParents = _parentOrParents;
          return this;
        }
      }], [{
        key: "create",
        value: function create(next, error, complete) {
          var subscriber = new Subscriber(next, error, complete);
          subscriber.syncErrorThrowable = false;
          return subscriber;
        }
      }]);

      return Subscriber;
    }(Subscription);

    var SafeSubscriber = /*#__PURE__*/function (_Subscriber) {
      _inherits(SafeSubscriber, _Subscriber);

      var _super2 = _createSuper(SafeSubscriber);

      function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this2;

        _classCallCheck(this, SafeSubscriber);

        _this2 = _super2.call(this);
        _this2._parentSubscriber = _parentSubscriber;
        var next;

        var context = _assertThisInitialized(_this2);

        if (isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error = observerOrNext.error;
          complete = observerOrNext.complete;

          if (observerOrNext !== empty) {
            context = Object.create(observerOrNext);

            if (isFunction(context.unsubscribe)) {
              _this2.add(context.unsubscribe.bind(context));
            }

            context.unsubscribe = _this2.unsubscribe.bind(_assertThisInitialized(_this2));
          }
        }

        _this2._context = context;
        _this2._next = next;
        _this2._error = error;
        _this2._complete = complete;
        return _this2;
      }

      _createClass(SafeSubscriber, [{
        key: "next",
        value: function next(value) {
          if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;

            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._next, value);
            } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
              this.unsubscribe();
            }
          }
        }
      }, {
        key: "error",
        value: function error(err) {
          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;

            if (this._error) {
              if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._error, err);

                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, this._error, err);

                this.unsubscribe();
              }
            } else if (!_parentSubscriber.syncErrorThrowable) {
              this.unsubscribe();

              if (useDeprecatedSynchronousErrorHandling) {
                throw err;
              }

              hostReportError(err);
            } else {
              if (useDeprecatedSynchronousErrorHandling) {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
              } else {
                hostReportError(err);
              }

              this.unsubscribe();
            }
          }
        }
      }, {
        key: "complete",
        value: function complete() {
          var _this3 = this;

          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;

            if (this._complete) {
              var wrappedComplete = function wrappedComplete() {
                return _this3._complete.call(_this3._context);
              };

              if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(wrappedComplete);

                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, wrappedComplete);

                this.unsubscribe();
              }
            } else {
              this.unsubscribe();
            }
          }
        }
      }, {
        key: "__tryOrUnsub",
        value: function __tryOrUnsub(fn, value) {
          try {
            fn.call(this._context, value);
          } catch (err) {
            this.unsubscribe();

            if (config.useDeprecatedSynchronousErrorHandling) {
              throw err;
            } else {
              hostReportError(err);
            }
          }
        }
      }, {
        key: "__tryOrSetError",
        value: function __tryOrSetError(parent, fn, value) {
          if (!config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
          }

          try {
            fn.call(this._context, value);
          } catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
              parent.syncErrorValue = err;
              parent.syncErrorThrown = true;
              return true;
            } else {
              hostReportError(err);
              return true;
            }
          }

          return false;
        }
      }, {
        key: "_unsubscribe",
        value: function _unsubscribe() {
          var _parentSubscriber = this._parentSubscriber;
          this._context = null;
          this._parentSubscriber = null;

          _parentSubscriber.unsubscribe();
        }
      }]);

      return SafeSubscriber;
    }(Subscriber);

    function canReportError(observer) {
      while (observer) {
        var _observer = observer,
            closed = _observer.closed,
            destination = _observer.destination,
            isStopped = _observer.isStopped;

        if (closed || isStopped) {
          return false;
        } else if (destination && destination instanceof Subscriber) {
          observer = destination;
        } else {
          observer = null;
        }
      }

      return true;
    }

    function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber) {
          return nextOrObserver;
        }

        if (nextOrObserver[rxSubscriber]) {
          return nextOrObserver[rxSubscriber]();
        }
      }

      if (!nextOrObserver && !error && !complete) {
        return new Subscriber(empty);
      }

      return new Subscriber(nextOrObserver, error, complete);
    }

    var observable = function () {
      return typeof Symbol === 'function' && Symbol.observable || '@@observable';
    }();

    function identity(x) {
      return x;
    }

    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity;
      }

      if (fns.length === 1) {
        return fns[0];
      }

      return function piped(input) {
        return fns.reduce(function (prev, fn) {
          return fn(prev);
        }, input);
      };
    }

    var Observable = /*#__PURE__*/function () {
      function Observable(subscribe) {
        _classCallCheck(this, Observable);

        this._isScalar = false;

        if (subscribe) {
          this._subscribe = subscribe;
        }
      }

      _createClass(Observable, [{
        key: "lift",
        value: function lift(operator) {
          var observable = new Observable();
          observable.source = this;
          observable.operator = operator;
          return observable;
        }
      }, {
        key: "subscribe",
        value: function subscribe(observerOrNext, error, complete) {
          var operator = this.operator;
          var sink = toSubscriber(observerOrNext, error, complete);

          if (operator) {
            sink.add(operator.call(sink, this.source));
          } else {
            sink.add(this.source || config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
          }

          if (config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
              sink.syncErrorThrowable = false;

              if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
              }
            }
          }

          return sink;
        }
      }, {
        key: "_trySubscribe",
        value: function _trySubscribe(sink) {
          try {
            return this._subscribe(sink);
          } catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
              sink.syncErrorThrown = true;
              sink.syncErrorValue = err;
            }

            if (canReportError(sink)) {
              sink.error(err);
            } else {
              console.warn(err);
            }
          }
        }
      }, {
        key: "forEach",
        value: function forEach(next, promiseCtor) {
          var _this4 = this;

          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this4.subscribe(function (value) {
              try {
                next(value);
              } catch (err) {
                reject(err);

                if (subscription) {
                  subscription.unsubscribe();
                }
              }
            }, reject, resolve);
          });
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          var source = this.source;
          return source && source.subscribe(subscriber);
        }
      }, {
        key: observable,
        value: function value() {
          return this;
        }
      }, {
        key: "pipe",
        value: function pipe() {
          for (var _len = arguments.length, operations = new Array(_len), _key = 0; _key < _len; _key++) {
            operations[_key] = arguments[_key];
          }

          if (operations.length === 0) {
            return this;
          }

          return pipeFromArray(operations)(this);
        }
      }, {
        key: "toPromise",
        value: function toPromise(promiseCtor) {
          var _this5 = this;

          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
            var value;

            _this5.subscribe(function (x) {
              return value = x;
            }, function (err) {
              return reject(err);
            }, function () {
              return resolve(value);
            });
          });
        }
      }]);

      return Observable;
    }();

    Observable.create = function (subscribe) {
      return new Observable(subscribe);
    };

    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = Promise;
      }

      if (!promiseCtor) {
        throw new Error('no Promise impl found');
      }

      return promiseCtor;
    }

    var ObjectUnsubscribedErrorImpl = function () {
      function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
      }

      ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
      return ObjectUnsubscribedErrorImpl;
    }();

    var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

    var SubjectSubscription = /*#__PURE__*/function (_Subscription2) {
      _inherits(SubjectSubscription, _Subscription2);

      var _super3 = _createSuper(SubjectSubscription);

      function SubjectSubscription(subject, subscriber) {
        var _this6;

        _classCallCheck(this, SubjectSubscription);

        _this6 = _super3.call(this);
        _this6.subject = subject;
        _this6.subscriber = subscriber;
        _this6.closed = false;
        return _this6;
      }

      _createClass(SubjectSubscription, [{
        key: "unsubscribe",
        value: function unsubscribe() {
          if (this.closed) {
            return;
          }

          this.closed = true;
          var subject = this.subject;
          var observers = subject.observers;
          this.subject = null;

          if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
          }

          var subscriberIndex = observers.indexOf(this.subscriber);

          if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
          }
        }
      }]);

      return SubjectSubscription;
    }(Subscription);

    var SubjectSubscriber = /*#__PURE__*/function (_Subscriber2) {
      _inherits(SubjectSubscriber, _Subscriber2);

      var _super4 = _createSuper(SubjectSubscriber);

      function SubjectSubscriber(destination) {
        var _this7;

        _classCallCheck(this, SubjectSubscriber);

        _this7 = _super4.call(this, destination);
        _this7.destination = destination;
        return _this7;
      }

      return SubjectSubscriber;
    }(Subscriber);

    var Subject = /*#__PURE__*/function (_Observable) {
      _inherits(Subject, _Observable);

      var _super5 = _createSuper(Subject);

      function Subject() {
        var _this8;

        _classCallCheck(this, Subject);

        _this8 = _super5.call(this);
        _this8.observers = [];
        _this8.closed = false;
        _this8.isStopped = false;
        _this8.hasError = false;
        _this8.thrownError = null;
        return _this8;
      }

      _createClass(Subject, [{
        key: rxSubscriber,
        value: function value() {
          return new SubjectSubscriber(this);
        }
      }, {
        key: "lift",
        value: function lift(operator) {
          var subject = new AnonymousSubject(this, this);
          subject.operator = operator;
          return subject;
        }
      }, {
        key: "next",
        value: function next(value) {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          }

          if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();

            for (var i = 0; i < len; i++) {
              copy[i].next(value);
            }
          }
        }
      }, {
        key: "error",
        value: function error(err) {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          }

          this.hasError = true;
          this.thrownError = err;
          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();

          for (var i = 0; i < len; i++) {
            copy[i].error(err);
          }

          this.observers.length = 0;
        }
      }, {
        key: "complete",
        value: function complete() {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          }

          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();

          for (var i = 0; i < len; i++) {
            copy[i].complete();
          }

          this.observers.length = 0;
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          this.isStopped = true;
          this.closed = true;
          this.observers = null;
        }
      }, {
        key: "_trySubscribe",
        value: function _trySubscribe(subscriber) {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          } else {
            return _get(_getPrototypeOf(Subject.prototype), "_trySubscribe", this).call(this, subscriber);
          }
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          } else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
          } else if (this.isStopped) {
            subscriber.complete();
            return Subscription.EMPTY;
          } else {
            this.observers.push(subscriber);
            return new SubjectSubscription(this, subscriber);
          }
        }
      }, {
        key: "asObservable",
        value: function asObservable() {
          var observable = new Observable();
          observable.source = this;
          return observable;
        }
      }]);

      return Subject;
    }(Observable);

    Subject.create = function (destination, source) {
      return new AnonymousSubject(destination, source);
    };

    var AnonymousSubject = /*#__PURE__*/function (_Subject) {
      _inherits(AnonymousSubject, _Subject);

      var _super6 = _createSuper(AnonymousSubject);

      function AnonymousSubject(destination, source) {
        var _this9;

        _classCallCheck(this, AnonymousSubject);

        _this9 = _super6.call(this);
        _this9.destination = destination;
        _this9.source = source;
        return _this9;
      }

      _createClass(AnonymousSubject, [{
        key: "next",
        value: function next(value) {
          var destination = this.destination;

          if (destination && destination.next) {
            destination.next(value);
          }
        }
      }, {
        key: "error",
        value: function error(err) {
          var destination = this.destination;

          if (destination && destination.error) {
            this.destination.error(err);
          }
        }
      }, {
        key: "complete",
        value: function complete() {
          var destination = this.destination;

          if (destination && destination.complete) {
            this.destination.complete();
          }
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          var source = this.source;

          if (source) {
            return this.source.subscribe(subscriber);
          } else {
            return Subscription.EMPTY;
          }
        }
      }]);

      return AnonymousSubject;
    }(Subject);

    var BehaviorSubject = /*#__PURE__*/function (_Subject2) {
      _inherits(BehaviorSubject, _Subject2);

      var _super7 = _createSuper(BehaviorSubject);

      function BehaviorSubject(_value) {
        var _this10;

        _classCallCheck(this, BehaviorSubject);

        _this10 = _super7.call(this);
        _this10._value = _value;
        return _this10;
      }

      _createClass(BehaviorSubject, [{
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          var subscription = _get(_getPrototypeOf(BehaviorSubject.prototype), "_subscribe", this).call(this, subscriber);

          if (subscription && !subscription.closed) {
            subscriber.next(this._value);
          }

          return subscription;
        }
      }, {
        key: "getValue",
        value: function getValue() {
          if (this.hasError) {
            throw this.thrownError;
          } else if (this.closed) {
            throw new ObjectUnsubscribedError();
          } else {
            return this._value;
          }
        }
      }, {
        key: "next",
        value: function next(value) {
          _get(_getPrototypeOf(BehaviorSubject.prototype), "next", this).call(this, this._value = value);
        }
      }, {
        key: "value",
        get: function get() {
          return this.getValue();
        }
      }]);

      return BehaviorSubject;
    }(Subject);

    var Timer = /*#__PURE__*/function () {
      function Timer() {
        _classCallCheck(this, Timer);
      }

      _createClass(Timer, [{
        key: "start",

        /**
         * Start timer
         */
        value: function start(cb) {
          var _this11 = this;

          this.startedTime = new Date();
          this.callbackFunction = cb;
          this.intervalId = setInterval(function () {
            var timeInMinutes = dayjs_min(Date.now() - _this11.startedTime.getTime()).format("mm:ss");
            cb(timeInMinutes, _this11.startedTime);
          }, 0);
        }
        /**
         * Reset timer
         */

      }, {
        key: "reset",
        value: function reset() {
          this.start(this.callbackFunction);
        }
        /**
         * delete timer
         */

      }, {
        key: "delete",
        value: function _delete() {
          clearInterval(this.intervalId);
        }
      }]);

      return Timer;
    }();

    var ChatMessagesLogic = /*#__PURE__*/function () {
      function ChatMessagesLogic() {
        _classCallCheck(this, ChatMessagesLogic);
      }

      _createClass(ChatMessagesLogic, null, [{
        key: "setScrollToBot",

        /**
         * */
        value: function setScrollToBot(callback) {
          this.scrollToBotCallback = callback;
        }
        /**
         * */

      }, {
        key: "safeScrollToBot",
        value: function safeScrollToBot() {
          if (typeof this.scrollToBotCallback === 'function') {
            this.scrollToBotCallback();
          }
        }
      }]);

      return ChatMessagesLogic;
    }();

    var ChatDictionaryService = function ChatDictionaryService() {
      _classCallCheck(this, ChatDictionaryService);
    };

    ChatDictionaryService.dictionary$ = new BehaviorSubject(null);
    /***/
  }
}]);
//# sourceMappingURL=default~stencil-cnt-module-chat-entry-js~stencil-contact-card_24-entry-js-es5.js.map