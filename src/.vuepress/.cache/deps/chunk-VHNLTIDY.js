import {
  client_exports
} from "./chunk-FECFGNAG.js";
import {
  computed,
  getCurrentInstance,
  h
} from "./chunk-4YVVQK3V.js";
import {
  camelize,
  capitalize
} from "./chunk-XYQ66V4O.js";

// node_modules/vuepress-shared/lib/client/index.js
var Ae = ({ name: e = "", color: n = "currentColor" }, { slots: t }) => {
  var r;
  return h("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${e}-icon`], viewBox: "0 0 1024 1024", fill: n, "aria-label": `${e} icon` }, (r = t.default) == null ? void 0 : r.call(t));
};
Ae.displayName = "IconBase";
var Xe = (e, { slots: n }) => {
  var t;
  return ((t = n.default) == null ? void 0 : t.call(n)) || null;
};
var et = (e) => {
  const n = getCurrentInstance();
  return typeof (n == null ? void 0 : n.appContext.components) == "object" && (e in n.appContext.components || camelize(e) in n.appContext.components || capitalize(camelize(e)) in n.appContext.components);
};
var tt = (e) => {
  const n = (0, client_exports.useRouteLocale)();
  return computed(() => e[n.value]);
};
var ht = (e, n) => {
  let t = 1;
  for (let r = 0; r < e.length; r++)
    t += e.charCodeAt(r), t += t << 10, t ^= t >> 6;
  return t += t << 3, t ^= t >> 11, t % n;
};
var vt = class {
  constructor() {
    this.messageElements = {};
    const n = "message-container", t = document.getElementById(n);
    t ? this.containerElement = t : (this.containerElement = document.createElement("div"), this.containerElement.id = n, document.body.appendChild(this.containerElement));
  }
  pop(n, t = 2e3) {
    const r = document.createElement("div"), i = Date.now();
    return r.className = "message move-in", r.innerHTML = n, this.containerElement.appendChild(r), this.messageElements[i] = r, t > 0 && setTimeout(() => {
      this.close(i);
    }, t), i;
  }
  close(n) {
    if (n) {
      const t = this.messageElements[n];
      t.className = t.className.replace("move-in", ""), t.className += "move-out", t.addEventListener("animationend", () => {
        t.remove(), delete this.messageElements[n];
      });
    } else
      Object.keys(this.messageElements).forEach((t) => this.close(Number(t)));
  }
  destory() {
    document.body.removeChild(this.containerElement);
  }
};
var ke = /#.*$/u;
var _e = (e) => {
  const n = ke.exec(e);
  return n ? n[0] : "";
};
var de = (e) => decodeURI(e).replace(ke, "").replace(/(index)?\.(md|html)$/, "");
var dt = (e, n) => {
  if (n === void 0)
    return false;
  const t = de(e.path), r = de(n), i = _e(n);
  return i ? i === e.hash && (!r || t === r) : t === r;
};
var W = Uint8Array;
var Z = Uint16Array;
var fe = Uint32Array;
var ue = new W([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
var ce = new W([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
var me = new W([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var ze = function(e, n) {
  for (var t = new Z(31), r = 0; r < 31; ++r)
    t[r] = n += 1 << e[r - 1];
  for (var i = new fe(t[30]), r = 1; r < 30; ++r)
    for (var u = t[r]; u < t[r + 1]; ++u)
      i[u] = u - t[r] << 5 | r;
  return [t, i];
};
var Ie = ze(ue, 2);
var Ue = Ie[0];
var ge = Ie[1];
Ue[28] = 258, ge[258] = 28;
for (Ye = ze(ce, 0), mt = Ye[0], He = Ye[1], $e = new Z(32768), F = 0; F < 32768; ++F) {
  ee = (F & 43690) >>> 1 | (F & 21845) << 1;
  ee = (ee & 52428) >>> 2 | (ee & 13107) << 2, ee = (ee & 61680) >>> 4 | (ee & 3855) << 4, $e[F] = ((ee & 65280) >>> 8 | (ee & 255) << 8) >>> 1;
}
var ee;
var Ye;
var mt;
var He;
var $e;
var F;
for (K = function(e, n, t) {
  for (var r = e.length, i = 0, u = new Z(n); i < r; ++i)
    e[i] && ++u[e[i] - 1];
  var v = new Z(n);
  for (i = 0; i < n; ++i)
    v[i] = v[i - 1] + u[i - 1] << 1;
  var m;
  if (t) {
    m = new Z(1 << n);
    var o = 15 - n;
    for (i = 0; i < r; ++i)
      if (e[i])
        for (var s = i << 4 | e[i], f = n - e[i], p = v[e[i] - 1]++ << f, d = p | (1 << f) - 1; p <= d; ++p)
          m[$e[p] >>> o] = s;
  } else
    for (m = new Z(r), i = 0; i < r; ++i)
      e[i] && (m[i] = $e[v[e[i] - 1]++] >>> 15 - e[i]);
  return m;
}, te = new W(288), F = 0; F < 144; ++F)
  te[F] = 8;
var K;
var te;
var F;
for (F = 144; F < 256; ++F)
  te[F] = 9;
var F;
for (F = 256; F < 280; ++F)
  te[F] = 7;
var F;
for (F = 280; F < 288; ++F)
  te[F] = 8;
var F;
for (ae = new W(32), F = 0; F < 32; ++F)
  ae[F] = 5;
var ae;
var F;
var gt = K(te, 9, 0);
var $t = K(te, 9, 1);
var wt = K(ae, 5, 0);
var yt = K(ae, 5, 1);
var St = new fe([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var be = new W(0);
var je = typeof TextEncoder < "u" && new TextEncoder();
var xe = typeof TextDecoder < "u" && new TextDecoder();
var kt = 0;
try {
  xe.decode(be, { stream: true }), kt = 1;
} catch {
}
Object.freeze({}), Object.freeze([]);
var Ut = (e) => typeof e == "function";
var Yt = (e) => typeof e == "string";
var Re = (e, ...n) => {
  const t = e.resolve(...n), r = t.matched[t.matched.length - 1];
  if (!(r != null && r.redirect))
    return t;
  const { redirect: i } = r, u = Ut(i) ? i(t) : i, v = Yt(u) ? { path: u } : u;
  return Re(e, { hash: t.hash, query: t.query, params: t.params, ...v });
};
var he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var Pe = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(he, function() {
    var t = 1e3, r = 6e4, i = 36e5, u = "millisecond", v = "second", m = "minute", o = "hour", s = "day", f = "week", p = "month", d = "quarter", y = "year", M = "date", a = "Invalid Date", g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, z = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, T = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, _ = function(x, h2, l) {
      var $ = String(x);
      return !$ || $.length >= h2 ? x : "" + Array(h2 + 1 - $.length).join(l) + x;
    }, Y = { s: _, z: function(x) {
      var h2 = -x.utcOffset(), l = Math.abs(h2), $ = Math.floor(l / 60), c = l % 60;
      return (h2 <= 0 ? "+" : "-") + _($, 2, "0") + ":" + _(c, 2, "0");
    }, m: function x(h2, l) {
      if (h2.date() < l.date())
        return -x(l, h2);
      var $ = 12 * (l.year() - h2.year()) + (l.month() - h2.month()), c = h2.clone().add($, p), S = l - c < 0, D = h2.clone().add($ + (S ? -1 : 1), p);
      return +(-($ + (l - c) / (S ? c - D : D - c)) || 0);
    }, a: function(x) {
      return x < 0 ? Math.ceil(x) || 0 : Math.floor(x);
    }, p: function(x) {
      return { M: p, y, w: f, d: s, D: M, h: o, m, s: v, ms: u, Q: d }[x] || String(x || "").toLowerCase().replace(/s$/, "");
    }, u: function(x) {
      return x === void 0;
    } }, E = "en", A = {};
    A[E] = T;
    var k = function(x) {
      return x instanceof P;
    }, w = function x(h2, l, $) {
      var c;
      if (!h2)
        return E;
      if (typeof h2 == "string") {
        var S = h2.toLowerCase();
        A[S] && (c = S), l && (A[S] = l, c = S);
        var D = h2.split("-");
        if (!c && D.length > 1)
          return x(D[0]);
      } else {
        var C = h2.name;
        A[C] = h2, c = C;
      }
      return !$ && c && (E = c), c || !$ && E;
    }, O = function(x, h2) {
      if (k(x))
        return x.clone();
      var l = typeof h2 == "object" ? h2 : {};
      return l.date = x, l.args = arguments, new P(l);
    }, b = Y;
    b.l = w, b.i = k, b.w = function(x, h2) {
      return O(x, { locale: h2.$L, utc: h2.$u, x: h2.$x, $offset: h2.$offset });
    };
    var P = function() {
      function x(l) {
        this.$L = w(l.locale, null, true), this.parse(l);
      }
      var h2 = x.prototype;
      return h2.parse = function(l) {
        this.$d = function($) {
          var c = $.date, S = $.utc;
          if (c === null)
            return new Date(NaN);
          if (b.u(c))
            return new Date();
          if (c instanceof Date)
            return new Date(c);
          if (typeof c == "string" && !/Z$/i.test(c)) {
            var D = c.match(g);
            if (D) {
              var C = D[2] - 1 || 0, I = (D[7] || "0").substring(0, 3);
              return S ? new Date(Date.UTC(D[1], C, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, I)) : new Date(D[1], C, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, I);
            }
          }
          return new Date(c);
        }(l), this.$x = l.x || {}, this.init();
      }, h2.init = function() {
        var l = this.$d;
        this.$y = l.getFullYear(), this.$M = l.getMonth(), this.$D = l.getDate(), this.$W = l.getDay(), this.$H = l.getHours(), this.$m = l.getMinutes(), this.$s = l.getSeconds(), this.$ms = l.getMilliseconds();
      }, h2.$utils = function() {
        return b;
      }, h2.isValid = function() {
        return this.$d.toString() !== a;
      }, h2.isSame = function(l, $) {
        var c = O(l);
        return this.startOf($) <= c && c <= this.endOf($);
      }, h2.isAfter = function(l, $) {
        return O(l) < this.startOf($);
      }, h2.isBefore = function(l, $) {
        return this.endOf($) < O(l);
      }, h2.$g = function(l, $, c) {
        return b.u(l) ? this[$] : this.set(c, l);
      }, h2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, h2.valueOf = function() {
        return this.$d.getTime();
      }, h2.startOf = function(l, $) {
        var c = this, S = !!b.u($) || $, D = b.p(l), C = function(B, R) {
          var q = b.w(c.$u ? Date.UTC(c.$y, R, B) : new Date(c.$y, R, B), c);
          return S ? q : q.endOf(s);
        }, I = function(B, R) {
          return b.w(c.toDate()[B].apply(c.toDate("s"), (S ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(R)), c);
        }, U = this.$W, H = this.$M, j = this.$D, N = "set" + (this.$u ? "UTC" : "");
        switch (D) {
          case y:
            return S ? C(1, 0) : C(31, 11);
          case p:
            return S ? C(1, H) : C(0, H + 1);
          case f:
            var Q = this.$locale().weekStart || 0, V = (U < Q ? U + 7 : U) - Q;
            return C(S ? j - V : j + (6 - V), H);
          case s:
          case M:
            return I(N + "Hours", 0);
          case o:
            return I(N + "Minutes", 1);
          case m:
            return I(N + "Seconds", 2);
          case v:
            return I(N + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, h2.endOf = function(l) {
        return this.startOf(l, false);
      }, h2.$set = function(l, $) {
        var c, S = b.p(l), D = "set" + (this.$u ? "UTC" : ""), C = (c = {}, c[s] = D + "Date", c[M] = D + "Date", c[p] = D + "Month", c[y] = D + "FullYear", c[o] = D + "Hours", c[m] = D + "Minutes", c[v] = D + "Seconds", c[u] = D + "Milliseconds", c)[S], I = S === s ? this.$D + ($ - this.$W) : $;
        if (S === p || S === y) {
          var U = this.clone().set(M, 1);
          U.$d[C](I), U.init(), this.$d = U.set(M, Math.min(this.$D, U.daysInMonth())).$d;
        } else
          C && this.$d[C](I);
        return this.init(), this;
      }, h2.set = function(l, $) {
        return this.clone().$set(l, $);
      }, h2.get = function(l) {
        return this[b.p(l)]();
      }, h2.add = function(l, $) {
        var c, S = this;
        l = Number(l);
        var D = b.p($), C = function(H) {
          var j = O(S);
          return b.w(j.date(j.date() + Math.round(H * l)), S);
        };
        if (D === p)
          return this.set(p, this.$M + l);
        if (D === y)
          return this.set(y, this.$y + l);
        if (D === s)
          return C(1);
        if (D === f)
          return C(7);
        var I = (c = {}, c[m] = r, c[o] = i, c[v] = t, c)[D] || 1, U = this.$d.getTime() + l * I;
        return b.w(U, this);
      }, h2.subtract = function(l, $) {
        return this.add(-1 * l, $);
      }, h2.format = function(l) {
        var $ = this, c = this.$locale();
        if (!this.isValid())
          return c.invalidDate || a;
        var S = l || "YYYY-MM-DDTHH:mm:ssZ", D = b.z(this), C = this.$H, I = this.$m, U = this.$M, H = c.weekdays, j = c.months, N = function(R, q, ie, re) {
          return R && (R[q] || R($, S)) || ie[q].slice(0, re);
        }, Q = function(R) {
          return b.s(C % 12 || 12, R, "0");
        }, V = c.meridiem || function(R, q, ie) {
          var re = R < 12 ? "AM" : "PM";
          return ie ? re.toLowerCase() : re;
        }, B = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: U + 1, MM: b.s(U + 1, 2, "0"), MMM: N(c.monthsShort, U, j, 3), MMMM: N(j, U), D: this.$D, DD: b.s(this.$D, 2, "0"), d: String(this.$W), dd: N(c.weekdaysMin, this.$W, H, 2), ddd: N(c.weekdaysShort, this.$W, H, 3), dddd: H[this.$W], H: String(C), HH: b.s(C, 2, "0"), h: Q(1), hh: Q(2), a: V(C, I, true), A: V(C, I, false), m: String(I), mm: b.s(I, 2, "0"), s: String(this.$s), ss: b.s(this.$s, 2, "0"), SSS: b.s(this.$ms, 3, "0"), Z: D };
        return S.replace(z, function(R, q) {
          return q || B[R] || D.replace(":", "");
        });
      }, h2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, h2.diff = function(l, $, c) {
        var S, D = b.p($), C = O(l), I = (C.utcOffset() - this.utcOffset()) * r, U = this - C, H = b.m(this, C);
        return H = (S = {}, S[y] = H / 12, S[p] = H, S[d] = H / 3, S[f] = (U - I) / 6048e5, S[s] = (U - I) / 864e5, S[o] = U / i, S[m] = U / r, S[v] = U / t, S)[D] || U, c ? H : b.a(H);
      }, h2.daysInMonth = function() {
        return this.endOf(p).$D;
      }, h2.$locale = function() {
        return A[this.$L];
      }, h2.locale = function(l, $) {
        if (!l)
          return this.$L;
        var c = this.clone(), S = w(l, $, true);
        return S && (c.$L = S), c;
      }, h2.clone = function() {
        return b.w(this.$d, this);
      }, h2.toDate = function() {
        return new Date(this.valueOf());
      }, h2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, h2.toISOString = function() {
        return this.$d.toISOString();
      }, h2.toString = function() {
        return this.$d.toUTCString();
      }, x;
    }(), L = P.prototype;
    return O.prototype = L, [["$ms", u], ["$s", v], ["$m", m], ["$H", o], ["$W", s], ["$M", p], ["$y", y], ["$D", M]].forEach(function(x) {
      L[x[1]] = function(h2) {
        return this.$g(h2, x[0], x[1]);
      };
    }), O.extend = function(x, h2) {
      return x.$i || (x(h2, P, O), x.$i = true), O;
    }, O.locale = w, O.isDayjs = k, O.unix = function(x) {
      return O(1e3 * x);
    }, O.en = A[E], O.Ls = A, O.p = {}, O;
  });
})(Pe);
var ne = Pe.exports;
var Ze = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(he, function() {
    return function(t, r, i) {
      var u = r.prototype, v = function(p) {
        var d, y = p.date, M = p.utc, a = {};
        if (!((d = y) instanceof Date) && !(d instanceof Array) && d instanceof Object) {
          if (!Object.keys(y).length)
            return new Date();
          var g = M ? i.utc() : i();
          Object.keys(y).forEach(function(w) {
            var O, b;
            a[O = w, b = u.$utils().p(O), b === "date" ? "day" : b] = y[w];
          });
          var z = a.day || (a.year || a.month >= 0 ? 1 : g.date()), T = a.year || g.year(), _ = a.month >= 0 ? a.month : a.year || a.day ? 0 : g.month(), Y = a.hour || 0, E = a.minute || 0, A = a.second || 0, k = a.millisecond || 0;
          return M ? new Date(Date.UTC(T, _, z, Y, E, A, k)) : new Date(T, _, z, Y, E, A, k);
        }
        return y;
      }, m = u.parse;
      u.parse = function(p) {
        p.date = v.bind(this)(p), m.bind(this)(p);
      };
      var o = u.set, s = u.add, f = function(p, d, y, M) {
        if (M === void 0 && (M = 1), d instanceof Object) {
          var a = Object.keys(d), g = this;
          return a.forEach(function(z) {
            g = p.bind(g)(d[z] * M, z);
          }), g;
        }
        return p.bind(this)(d * M, y);
      };
      u.set = function(p, d) {
        return d = d === void 0 ? p : d, f.bind(this)(function(y, M) {
          return o.bind(this)(M, y);
        }, d, p);
      }, u.add = function(p, d) {
        return f.bind(this)(s, p, d);
      }, u.subtract = function(p, d) {
        return f.bind(this)(s, p, d, -1);
      };
    };
  });
})(Ze);
var Ht = Ze.exports;
var Be = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(he, function() {
    var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, r = {};
    return function(i, u, v) {
      var m, o = function(d, y, M) {
        M === void 0 && (M = {});
        var a = new Date(d), g = function(z, T) {
          T === void 0 && (T = {});
          var _ = T.timeZoneName || "short", Y = z + "|" + _, E = r[Y];
          return E || (E = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: z, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: _ }), r[Y] = E), E;
        }(y, M);
        return g.formatToParts(a);
      }, s = function(d, y) {
        for (var M = o(d, y), a = [], g = 0; g < M.length; g += 1) {
          var z = M[g], T = z.type, _ = z.value, Y = t[T];
          Y >= 0 && (a[Y] = parseInt(_, 10));
        }
        var E = a[3], A = E === 24 ? 0 : E, k = a[0] + "-" + a[1] + "-" + a[2] + " " + A + ":" + a[4] + ":" + a[5] + ":000", w = +d;
        return (v.utc(k).valueOf() - (w -= w % 1e3)) / 6e4;
      }, f = u.prototype;
      f.tz = function(d, y) {
        d === void 0 && (d = m);
        var M = this.utcOffset(), a = this.toDate(), g = a.toLocaleString("en-US", { timeZone: d }), z = Math.round((a - new Date(g)) / 1e3 / 60), T = v(g).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(a.getTimezoneOffset() / 15) - z, true);
        if (y) {
          var _ = T.utcOffset();
          T = T.add(M - _, "minute");
        }
        return T.$x.$timezone = d, T;
      }, f.offsetName = function(d) {
        var y = this.$x.$timezone || v.tz.guess(), M = o(this.valueOf(), y, { timeZoneName: d }).find(function(a) {
          return a.type.toLowerCase() === "timezonename";
        });
        return M && M.value;
      };
      var p = f.startOf;
      f.startOf = function(d, y) {
        if (!this.$x || !this.$x.$timezone)
          return p.call(this, d, y);
        var M = v(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
        return p.call(M, d, y).tz(this.$x.$timezone, true);
      }, v.tz = function(d, y, M) {
        var a = M && y, g = M || y || m, z = s(+v(), g);
        if (typeof d != "string")
          return v(d).tz(g);
        var T = function(A, k, w) {
          var O = A - 60 * k * 1e3, b = s(O, w);
          if (k === b)
            return [O, k];
          var P = s(O -= 60 * (b - k) * 1e3, w);
          return b === P ? [O, b] : [A - 60 * Math.min(b, P) * 1e3, Math.max(b, P)];
        }(v.utc(d, a).valueOf(), z, g), _ = T[0], Y = T[1], E = v(_).utcOffset(Y);
        return E.$x.$timezone = g, E;
      }, v.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, v.tz.setDefault = function(d) {
        m = d;
      };
    };
  });
})(Be);
var Nt = Be.exports;
var Ve = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(he, function() {
    var t = "minute", r = /[+-]\d\d(?::?\d\d)?/g, i = /([+-]|\d\d)/g;
    return function(u, v, m) {
      var o = v.prototype;
      m.utc = function(a) {
        var g = { date: a, utc: true, args: arguments };
        return new v(g);
      }, o.utc = function(a) {
        var g = m(this.toDate(), { locale: this.$L, utc: true });
        return a ? g.add(this.utcOffset(), t) : g;
      }, o.local = function() {
        return m(this.toDate(), { locale: this.$L, utc: false });
      };
      var s = o.parse;
      o.parse = function(a) {
        a.utc && (this.$u = true), this.$utils().u(a.$offset) || (this.$offset = a.$offset), s.call(this, a);
      };
      var f = o.init;
      o.init = function() {
        if (this.$u) {
          var a = this.$d;
          this.$y = a.getUTCFullYear(), this.$M = a.getUTCMonth(), this.$D = a.getUTCDate(), this.$W = a.getUTCDay(), this.$H = a.getUTCHours(), this.$m = a.getUTCMinutes(), this.$s = a.getUTCSeconds(), this.$ms = a.getUTCMilliseconds();
        } else
          f.call(this);
      };
      var p = o.utcOffset;
      o.utcOffset = function(a, g) {
        var z = this.$utils().u;
        if (z(a))
          return this.$u ? 0 : z(this.$offset) ? p.call(this) : this.$offset;
        if (typeof a == "string" && (a = function(E) {
          E === void 0 && (E = "");
          var A = E.match(r);
          if (!A)
            return null;
          var k = ("" + A[0]).match(i) || ["-", 0, 0], w = k[0], O = 60 * +k[1] + +k[2];
          return O === 0 ? 0 : w === "+" ? O : -O;
        }(a), a === null))
          return this;
        var T = Math.abs(a) <= 16 ? 60 * a : a, _ = this;
        if (g)
          return _.$offset = T, _.$u = a === 0, _;
        if (a !== 0) {
          var Y = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (_ = this.local().add(T + Y, t)).$offset = T, _.$x.$localOffset = Y;
        } else
          _ = this.utc();
        return _;
      };
      var d = o.format;
      o.format = function(a) {
        var g = a || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return d.call(this, g);
      }, o.valueOf = function() {
        var a = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * a;
      }, o.isUTC = function() {
        return !!this.$u;
      }, o.toISOString = function() {
        return this.toDate().toISOString();
      }, o.toString = function() {
        return this.toDate().toUTCString();
      };
      var y = o.toDate;
      o.toDate = function(a) {
        return a === "s" && this.$offset ? m(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : y.call(this);
      };
      var M = o.diff;
      o.diff = function(a, g, z) {
        if (a && this.$u === a.$u)
          return M.call(this, a, g, z);
        var T = this.local(), _ = m(a).local();
        return M.call(T, _, g, z);
      };
    };
  });
})(Ve);
var Ft = Ve.exports;
ne.extend(Ht), ne.extend(Ft), ne.extend(Nt);
var Te = (e, n) => {
  if (e) {
    if (ne(e instanceof Date ? e : e.trim()).isValid()) {
      const r = n ? ne(e).tz(n) : ne(e), i = r.year(), u = r.month() + 1, v = r.date(), m = r.hour(), o = r.minute(), s = r.second(), f = r.millisecond(), p = m === 0 && o === 0 && s === 0 && f === 0;
      return { value: r.toDate(), info: { year: i, month: u, day: v, ...p ? {} : { hour: m, minute: o, second: s } }, type: p ? "date" : "full" };
    }
    const t = /(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(e.trim());
    if (t) {
      const [, r, i, u, v, m, o] = t, s = (g) => typeof g > "u" ? void 0 : Number(g), f = (g) => g && g < 100 ? g + 2e3 : g, p = (g) => v && m && !o ? 0 : g, d = { year: f(s(r)), month: s(i), day: s(u), hour: s(v), minute: s(m), second: p(s(o)) }, y = r === void 0 && i === void 0 && u === void 0, M = v === void 0 && m === void 0 && o === void 0, a = ne({ ...d, month: d.month - 1 }).toDate();
      return { value: y ? void 0 : a, info: M ? { year: d.year, month: d.month, day: d.day } : y ? { hour: d.hour, minute: d.minute, second: d.second } : d, type: y ? "time" : M ? "date" : "full" };
    }
  }
  return null;
};
var Lt = (e, n = false) => e ? Array.isArray(e) ? e.map((t) => typeof t == "string" ? { name: t } : t) : typeof e == "string" ? [{ name: e }] : typeof e == "object" && e.name ? [e] : (console.error(`Expect 'author' to be \`AuthorInfo[] | AuthorInfo | string[] | string ${n ? "" : "| false"} | undefined\`, but got`, e), []) : [];
var Wt = (e) => {
  if (e) {
    if (Array.isArray(e))
      return e;
    if (typeof e == "string")
      return [e];
    console.error("Expect 'category' to be `string[] | string | undefined`, but got", e);
  }
  return [];
};
var Rt = (e) => {
  if (e) {
    if (Array.isArray(e))
      return e;
    if (typeof e == "string")
      return [e];
    console.error("Expect 'tag' to be `string[] | string | undefined`, but got", e);
  }
  return [];
};

export {
  Ae,
  Xe,
  et,
  tt,
  ht,
  vt,
  dt,
  Re,
  Te,
  Lt,
  Wt,
  Rt
};
//# sourceMappingURL=chunk-VHNLTIDY.js.map
