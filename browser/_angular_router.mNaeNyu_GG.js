import { a as h, b as $, d as w } from "@nf-internal/chunk-4CLCTAJ7";
import { DOCUMENT as Vn, Location as er } from "@angular/common";
import * as y from "@angular/core";
import { \u0275isPromise as Hn, \u0275RuntimeError as M, \u0275isNgModule as zs, isStandalone as Fs, createEnvironmentInjector as Gn, InjectionToken as re, EventEmitter as Xe, input as Wn, inject as g, ViewContainerRef as Qn, ChangeDetectorRef as Kn, reflectComponentType as Zn, \u0275isInjectable as Yn, runInInjectionContext as x, makeEnvironmentProviders as Xn, Compiler as Jn, NgModuleFactory as ei, afterNextRender as ti, signal as Sr, EnvironmentInjector as Dr, DestroyRef as ri, untracked as Ne, \u0275Console as ni, \u0275PendingTasksInternal as ii, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as oi, \u0275formatRuntimeError as si } from "@angular/core";
import { isObservable as Nr, from as z, of as p, BehaviorSubject as k, combineLatest as Pr, EmptyError as ai, Observable as ci, concat as ui, defer as tr, pipe as li, throwError as It, EMPTY as X, Subject as jt, Subscription as di } from "rxjs";
import { first as ne, map as S, switchMap as L, take as Le, startWith as hi, filter as ge, takeUntil as $t, mergeMap as q, concatMap as it, tap as N, catchError as Pe, scan as fi, defaultIfEmpty as pi, last as gi, takeLast as Ur, finalize as vi } from "rxjs/operators";
import * as _r from "@angular/platform-browser";
var f = "primary", Be = Symbol("RouteTitle"), kt = class {
    params;
    constructor(n) { this.params = n || {}; }
    has(n) { return Object.prototype.hasOwnProperty.call(this.params, n); }
    get(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e[0] : e;
    } return null; }
    getAll(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e : [e];
    } return []; }
    get keys() { return Object.keys(this.params); }
};
function ue(t) { return new kt(t); }
function Lr(t, n, e) { let r = e.path.split("/"); if (r.length > t.length || e.pathMatch === "full" && (n.hasChildren() || r.length < t.length))
    return null; let i = {}; for (let o = 0; o < r.length; o++) {
    let s = r[o], a = t[o];
    if (s[0] === ":")
        i[s.substring(1)] = a;
    else if (s !== a.path)
        return null;
} return { consumed: t.slice(0, r.length), posParams: i }; }
function ot(t) { return new Promise((n, e) => { t.pipe(ne()).subscribe({ next: r => n(r), error: r => e(r) }); }); }
function mi(t, n) { if (t.length !== n.length)
    return !1; for (let e = 0; e < t.length; ++e)
    if (!B(t[e], n[e]))
        return !1; return !0; }
function B(t, n) { let e = t ? zt(t) : void 0, r = n ? zt(n) : void 0; if (!e || !r || e.length != r.length)
    return !1; let i; for (let o = 0; o < e.length; o++)
    if (i = e[o], !xr(t[i], n[i]))
        return !1; return !0; }
function zt(t) { return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)]; }
function xr(t, n) { if (Array.isArray(t) && Array.isArray(n)) {
    if (t.length !== n.length)
        return !1;
    let e = [...t].sort(), r = [...n].sort();
    return e.every((i, o) => r[o] === i);
}
else
    return t === n; }
function jr(t) { return t.length > 0 ? t[t.length - 1] : null; }
function ie(t) { return Nr(t) ? t : Hn(t) ? z(Promise.resolve(t)) : p(t); }
function $r(t) { return Nr(t) ? ot(t) : Promise.resolve(t); }
var yi = { exact: zr, subset: Fr }, kr = { exact: Ri, subset: Si, ignored: () => !0 };
function Cr(t, n, e) { return yi[e.paths](t.root, n.root, e.matrixParams) && kr[e.queryParams](t.queryParams, n.queryParams) && !(e.fragment === "exact" && t.fragment !== n.fragment); }
function Ri(t, n) { return B(t, n); }
function zr(t, n, e) { if (!ce(t.segments, n.segments) || !tt(t.segments, n.segments, e) || t.numberOfChildren !== n.numberOfChildren)
    return !1; for (let r in n.children)
    if (!t.children[r] || !zr(t.children[r], n.children[r], e))
        return !1; return !0; }
function Si(t, n) { return Object.keys(n).length <= Object.keys(t).length && Object.keys(n).every(e => xr(t[e], n[e])); }
function Fr(t, n, e) { return qr(t, n, n.segments, e); }
function qr(t, n, e, r) { if (t.segments.length > e.length) {
    let i = t.segments.slice(0, e.length);
    return !(!ce(i, e) || n.hasChildren() || !tt(i, e, r));
}
else if (t.segments.length === e.length) {
    if (!ce(t.segments, e) || !tt(t.segments, e, r))
        return !1;
    for (let i in n.children)
        if (!t.children[i] || !Fr(t.children[i], n.children[i], r))
            return !1;
    return !0;
}
else {
    let i = e.slice(0, t.segments.length), o = e.slice(t.segments.length);
    return !ce(t.segments, i) || !tt(t.segments, i, r) || !t.children[f] ? !1 : qr(t.children[f], n, o, r);
} }
function tt(t, n, e) { return n.every((r, i) => kr[e](t[i].parameters, r.parameters)); }
var P = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(n = new m([], {}), e = {}, r = null) { this.root = n, this.queryParams = e, this.fragment = r; }
    get queryParamMap() { return this._queryParamMap ??= ue(this.queryParams), this._queryParamMap; }
    toString() { return bi.serialize(this); }
}, m = class {
    segments;
    children;
    parent = null;
    constructor(n, e) { this.segments = n, this.children = e, Object.values(e).forEach(r => r.parent = this); }
    hasChildren() { return this.numberOfChildren > 0; }
    get numberOfChildren() { return Object.keys(this.children).length; }
    toString() { return rt(this); }
}, J = class {
    path;
    parameters;
    _parameterMap;
    constructor(n, e) { this.path = n, this.parameters = e; }
    get parameterMap() { return this._parameterMap ??= ue(this.parameters), this._parameterMap; }
    toString() { return Vr(this); }
};
function Ci(t, n) { return ce(t, n) && t.every((e, r) => B(e.parameters, n[r].parameters)); }
function ce(t, n) { return t.length !== n.length ? !1 : t.every((e, r) => e.path === n[r].path); }
function wi(t, n) { let e = []; return Object.entries(t.children).forEach(([r, i]) => { r === f && (e = e.concat(n(i, r))); }), Object.entries(t.children).forEach(([r, i]) => { r !== f && (e = e.concat(n(i, r))); }), e; }
var oe = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => new K, providedIn: "root" });
} return t; })(), K = class {
    parse(n) { let e = new qt(n); return new P(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment()); }
    serialize(n) { let e = `/${Oe(n.root, !0)}`, r = Ti(n.queryParams), i = typeof n.fragment == "string" ? `#${Ii(n.fragment)}` : ""; return `${e}${r}${i}`; }
}, bi = new K;
function rt(t) { return t.segments.map(n => Vr(n)).join("/"); }
function Oe(t, n) { if (!t.hasChildren())
    return rt(t); if (n) {
    let e = t.children[f] ? Oe(t.children[f], !1) : "", r = [];
    return Object.entries(t.children).forEach(([i, o]) => { i !== f && r.push(`${i}:${Oe(o, !1)}`); }), r.length > 0 ? `${e}(${r.join("//")})` : e;
}
else {
    let e = wi(t, (r, i) => i === f ? [Oe(t.children[f], !1)] : [`${i}:${Oe(r, !1)}`]);
    return Object.keys(t.children).length === 1 && t.children[f] != null ? `${rt(t)}/${e[0]}` : `${rt(t)}/(${e.join("//")})`;
} }
function Br(t) { return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ","); }
function Je(t) { return Br(t).replace(/%3B/gi, ";"); }
function Ii(t) { return encodeURI(t); }
function Ft(t) { return Br(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&"); }
function nt(t) { return decodeURIComponent(t); }
function wr(t) { return nt(t.replace(/\+/g, "%20")); }
function Vr(t) { return `${Ft(t.path)}${Ai(t.parameters)}`; }
function Ai(t) { return Object.entries(t).map(([n, e]) => `;${Ft(n)}=${Ft(e)}`).join(""); }
function Ti(t) { let n = Object.entries(t).map(([e, r]) => Array.isArray(r) ? r.map(i => `${Je(e)}=${Je(i)}`).join("&") : `${Je(e)}=${Je(r)}`).filter(e => e); return n.length ? `?${n.join("&")}` : ""; }
var Mi = /^[^\/()?;#]+/;
function Ut(t) { let n = t.match(Mi); return n ? n[0] : ""; }
var Ei = /^[^\/()?;=#]+/;
function Oi(t) { let n = t.match(Ei); return n ? n[0] : ""; }
var Di = /^[^=?&#]+/;
function Ni(t) { let n = t.match(Di); return n ? n[0] : ""; }
var Pi = /^[^&#]+/;
function Ui(t) { let n = t.match(Pi); return n ? n[0] : ""; }
var qt = class {
    url;
    remaining;
    constructor(n) { this.url = n, this.remaining = n; }
    parseRootSegment() { return this.consumeOptional("/"), this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new m([], {}) : new m([], this.parseChildren()); }
    parseQueryParams() { let n = {}; if (this.consumeOptional("?"))
        do
            this.parseQueryParam(n);
        while (this.consumeOptional("&")); return n; }
    parseFragment() { return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null; }
    parseChildren() { if (this.remaining === "")
        return {}; this.consumeOptional("/"); let n = []; for (this.peekStartsWith("(") || n.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");)
        this.capture("/"), n.push(this.parseSegment()); let e = {}; this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0)); let r = {}; return this.peekStartsWith("(") && (r = this.parseParens(!1)), (n.length > 0 || Object.keys(e).length > 0) && (r[f] = new m(n, e)), r; }
    parseSegment() { let n = Ut(this.remaining); if (n === "" && this.peekStartsWith(";"))
        throw new M(4009, !1); return this.capture(n), new J(nt(n), this.parseMatrixParams()); }
    parseMatrixParams() { let n = {}; for (; this.consumeOptional(";");)
        this.parseParam(n); return n; }
    parseParam(n) { let e = Oi(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let i = Ut(this.remaining);
        i && (r = i, this.capture(r));
    } n[nt(e)] = nt(r); }
    parseQueryParam(n) { let e = Ni(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let s = Ui(this.remaining);
        s && (r = s, this.capture(r));
    } let i = wr(e), o = wr(r); if (n.hasOwnProperty(i)) {
        let s = n[i];
        Array.isArray(s) || (s = [s], n[i] = s), s.push(o);
    }
    else
        n[i] = o; }
    parseParens(n) { let e = {}; for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
        let r = Ut(this.remaining), i = this.remaining[r.length];
        if (i !== "/" && i !== ")" && i !== ";")
            throw new M(4010, !1);
        let o;
        r.indexOf(":") > -1 ? (o = r.slice(0, r.indexOf(":")), this.capture(o), this.capture(":")) : n && (o = f);
        let s = this.parseChildren();
        e[o ?? f] = Object.keys(s).length === 1 && s[f] ? s[f] : new m([], s), this.consumeOptional("//");
    } return e; }
    peekStartsWith(n) { return this.remaining.startsWith(n); }
    consumeOptional(n) { return this.peekStartsWith(n) ? (this.remaining = this.remaining.substring(n.length), !0) : !1; }
    capture(n) { if (!this.consumeOptional(n))
        throw new M(4011, !1); }
};
function Hr(t) { return t.segments.length > 0 ? new m([], { [f]: t }) : t; }
function Gr(t) { let n = {}; for (let [r, i] of Object.entries(t.children)) {
    let o = Gr(i);
    if (r === f && o.segments.length === 0 && o.hasChildren())
        for (let [s, a] of Object.entries(o.children))
            n[s] = a;
    else
        (o.segments.length > 0 || o.hasChildren()) && (n[r] = o);
} let e = new m(t.segments, n); return _i(e); }
function _i(t) { if (t.numberOfChildren === 1 && t.children[f]) {
    let n = t.children[f];
    return new m(t.segments.concat(n.segments), n.children);
} return t; }
function ee(t) { return t instanceof P; }
function rr(t, n, e = null, r = null, i = new K) { let o = Wr(t); return Qr(o, n, e, r, i); }
function Wr(t) { let n; function e(o) { let s = {}; for (let c of o.children) {
    let u = e(c);
    s[c.outlet] = u;
} let a = new m(o.url, s); return o === t && (n = a), a; } let r = e(t.root), i = Hr(r); return n ?? i; }
function Qr(t, n, e, r, i) { let o = t; for (; o.parent;)
    o = o.parent; if (n.length === 0)
    return _t(o, o, o, e, r, i); let s = Li(n); if (s.toRoot())
    return _t(o, o, new m([], {}), e, r, i); let a = xi(s, o, t), c = a.processChildren ? Ue(a.segmentGroup, a.index, s.commands) : Zr(a.segmentGroup, a.index, s.commands); return _t(o, a.segmentGroup, c, e, r, i); }
function st(t) { return typeof t == "object" && t != null && !t.outlets && !t.segmentPath; }
function xe(t) { return typeof t == "object" && t != null && t.outlets; }
function br(t, n, e) { t ||= "\u0275"; let r = new P; return r.queryParams = { [t]: n }, e.parse(e.serialize(r)).queryParams[t]; }
function _t(t, n, e, r, i, o) { let s = {}; for (let [u, l] of Object.entries(r ?? {}))
    s[u] = Array.isArray(l) ? l.map(v => br(u, v, o)) : br(u, l, o); let a; t === n ? a = e : a = Kr(t, n, e); let c = Hr(Gr(a)); return new P(c, s, i); }
function Kr(t, n, e) { let r = {}; return Object.entries(t.children).forEach(([i, o]) => { o === n ? r[i] = e : r[i] = Kr(o, n, e); }), new m(t.segments, r); }
var at = class {
    isAbsolute;
    numberOfDoubleDots;
    commands;
    constructor(n, e, r) { if (this.isAbsolute = n, this.numberOfDoubleDots = e, this.commands = r, n && r.length > 0 && st(r[0]))
        throw new M(4003, !1); let i = r.find(xe); if (i && i !== jr(r))
        throw new M(4004, !1); }
    toRoot() { return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"; }
};
function Li(t) { if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
    return new at(!0, 0, t); let n = 0, e = !1, r = t.reduce((i, o, s) => { if (typeof o == "object" && o != null) {
    if (o.outlets) {
        let a = {};
        return Object.entries(o.outlets).forEach(([c, u]) => { a[c] = typeof u == "string" ? u.split("/") : u; }), [...i, { outlets: a }];
    }
    if (o.segmentPath)
        return [...i, o.segmentPath];
} return typeof o != "string" ? [...i, o] : s === 0 ? (o.split("/").forEach((a, c) => { c == 0 && a === "." || (c == 0 && a === "" ? e = !0 : a === ".." ? n++ : a != "" && i.push(a)); }), i) : [...i, o]; }, []); return new at(e, n, r); }
var ve = class {
    segmentGroup;
    processChildren;
    index;
    constructor(n, e, r) { this.segmentGroup = n, this.processChildren = e, this.index = r; }
};
function xi(t, n, e) { if (t.isAbsolute)
    return new ve(n, !0, 0); if (!e)
    return new ve(n, !1, NaN); if (e.parent === null)
    return new ve(e, !0, 0); let r = st(t.commands[0]) ? 0 : 1, i = e.segments.length - 1 + r; return ji(e, i, t.numberOfDoubleDots); }
function ji(t, n, e) { let r = t, i = n, o = e; for (; o > i;) {
    if (o -= i, r = r.parent, !r)
        throw new M(4005, !1);
    i = r.segments.length;
} return new ve(r, !1, i - o); }
function $i(t) { return xe(t[0]) ? t[0].outlets : { [f]: t }; }
function Zr(t, n, e) { if (t ??= new m([], {}), t.segments.length === 0 && t.hasChildren())
    return Ue(t, n, e); let r = ki(t, n, e), i = e.slice(r.commandIndex); if (r.match && r.pathIndex < t.segments.length) {
    let o = new m(t.segments.slice(0, r.pathIndex), {});
    return o.children[f] = new m(t.segments.slice(r.pathIndex), t.children), Ue(o, 0, i);
}
else
    return r.match && i.length === 0 ? new m(t.segments, {}) : r.match && !t.hasChildren() ? Bt(t, n, e) : r.match ? Ue(t, 0, i) : Bt(t, n, e); }
function Ue(t, n, e) { if (e.length === 0)
    return new m(t.segments, {}); {
    let r = $i(e), i = {};
    if (Object.keys(r).some(o => o !== f) && t.children[f] && t.numberOfChildren === 1 && t.children[f].segments.length === 0) {
        let o = Ue(t.children[f], n, e);
        return new m(t.segments, o.children);
    }
    return Object.entries(r).forEach(([o, s]) => { typeof s == "string" && (s = [s]), s !== null && (i[o] = Zr(t.children[o], n, s)); }), Object.entries(t.children).forEach(([o, s]) => { r[o] === void 0 && (i[o] = s); }), new m(t.segments, i);
} }
function ki(t, n, e) { let r = 0, i = n, o = { match: !1, pathIndex: 0, commandIndex: 0 }; for (; i < t.segments.length;) {
    if (r >= e.length)
        return o;
    let s = t.segments[i], a = e[r];
    if (xe(a))
        break;
    let c = `${a}`, u = r < e.length - 1 ? e[r + 1] : null;
    if (i > 0 && c === void 0)
        break;
    if (c && u && typeof u == "object" && u.outlets === void 0) {
        if (!Ar(c, u, s))
            return o;
        r += 2;
    }
    else {
        if (!Ar(c, {}, s))
            return o;
        r++;
    }
    i++;
} return { match: !0, pathIndex: i, commandIndex: r }; }
function Bt(t, n, e) { let r = t.segments.slice(0, n), i = 0; for (; i < e.length;) {
    let o = e[i];
    if (xe(o)) {
        let c = zi(o.outlets);
        return new m(r, c);
    }
    if (i === 0 && st(e[0])) {
        let c = t.segments[n];
        r.push(new J(c.path, Ir(e[0]))), i++;
        continue;
    }
    let s = xe(o) ? o.outlets[f] : `${o}`, a = i < e.length - 1 ? e[i + 1] : null;
    s && a && st(a) ? (r.push(new J(s, Ir(a))), i += 2) : (r.push(new J(s, {})), i++);
} return new m(r, {}); }
function zi(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => { typeof r == "string" && (r = [r]), r !== null && (n[e] = Bt(new m([], {}), 0, r)); }), n; }
function Ir(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => n[e] = `${r}`), n; }
function Ar(t, n, e) { return t == e.path && B(n, e.parameters); }
var me = "imperative", A = (function (t) { return t[t.NavigationStart = 0] = "NavigationStart", t[t.NavigationEnd = 1] = "NavigationEnd", t[t.NavigationCancel = 2] = "NavigationCancel", t[t.NavigationError = 3] = "NavigationError", t[t.RoutesRecognized = 4] = "RoutesRecognized", t[t.ResolveStart = 5] = "ResolveStart", t[t.ResolveEnd = 6] = "ResolveEnd", t[t.GuardsCheckStart = 7] = "GuardsCheckStart", t[t.GuardsCheckEnd = 8] = "GuardsCheckEnd", t[t.RouteConfigLoadStart = 9] = "RouteConfigLoadStart", t[t.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd", t[t.ChildActivationStart = 11] = "ChildActivationStart", t[t.ChildActivationEnd = 12] = "ChildActivationEnd", t[t.ActivationStart = 13] = "ActivationStart", t[t.ActivationEnd = 14] = "ActivationEnd", t[t.Scroll = 15] = "Scroll", t[t.NavigationSkipped = 16] = "NavigationSkipped", t; })(A || {}), U = class {
    id;
    url;
    constructor(n, e) { this.id = n, this.url = e; }
}, te = class extends U {
    type = A.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(n, e, r = "imperative", i = null) { super(n, e), this.navigationTrigger = r, this.restoredState = i; }
    toString() { return `NavigationStart(id: ${this.id}, url: '${this.url}')`; }
}, _ = class extends U {
    urlAfterRedirects;
    type = A.NavigationEnd;
    constructor(n, e, r) { super(n, e), this.urlAfterRedirects = r; }
    toString() { return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`; }
}, E = (function (t) { return t[t.Redirect = 0] = "Redirect", t[t.SupersededByNewNavigation = 1] = "SupersededByNewNavigation", t[t.NoDataFromResolver = 2] = "NoDataFromResolver", t[t.GuardRejected = 3] = "GuardRejected", t[t.Aborted = 4] = "Aborted", t; })(E || {}), Re = (function (t) { return t[t.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation", t[t.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy", t; })(Re || {}), V = class extends U {
    reason;
    code;
    type = A.NavigationCancel;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
    toString() { return `NavigationCancel(id: ${this.id}, url: '${this.url}')`; }
}, G = class extends U {
    reason;
    code;
    type = A.NavigationSkipped;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
}, Se = class extends U {
    error;
    target;
    type = A.NavigationError;
    constructor(n, e, r, i) { super(n, e), this.error = r, this.target = i; }
    toString() { return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`; }
}, je = class extends U {
    urlAfterRedirects;
    state;
    type = A.RoutesRecognized;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, ct = class extends U {
    urlAfterRedirects;
    state;
    type = A.GuardsCheckStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, ut = class extends U {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = A.GuardsCheckEnd;
    constructor(n, e, r, i, o) { super(n, e), this.urlAfterRedirects = r, this.state = i, this.shouldActivate = o; }
    toString() { return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`; }
}, lt = class extends U {
    urlAfterRedirects;
    state;
    type = A.ResolveStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, dt = class extends U {
    urlAfterRedirects;
    state;
    type = A.ResolveEnd;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, ht = class {
    route;
    type = A.RouteConfigLoadStart;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadStart(path: ${this.route.path})`; }
}, ft = class {
    route;
    type = A.RouteConfigLoadEnd;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadEnd(path: ${this.route.path})`; }
}, pt = class {
    snapshot;
    type = A.ChildActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, gt = class {
    snapshot;
    type = A.ChildActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, vt = class {
    snapshot;
    type = A.ActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, mt = class {
    snapshot;
    type = A.ActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, Ce = class {
    routerEvent;
    position;
    anchor;
    type = A.Scroll;
    constructor(n, e, r) { this.routerEvent = n, this.position = e, this.anchor = r; }
    toString() { let n = this.position ? `${this.position[0]}, ${this.position[1]}` : null; return `Scroll(anchor: '${this.anchor}', position: '${n}')`; }
}, $e = class {
}, we = class {
    url;
    navigationBehaviorOptions;
    constructor(n, e) { this.url = n, this.navigationBehaviorOptions = e; }
};
function Fi(t) { return !(t instanceof $e) && !(t instanceof we); }
function qi(t, n) { return t.providers && !t._injector && (t._injector = Gn(t.providers, n, `Route: ${t.path}`)), t._injector ?? n; }
function D(t) { return t.outlet || f; }
function Yr(t, n) { let e = t.filter(r => D(r) === n); return e.push(...t.filter(r => D(r) !== n)), e; }
function Me(t) { if (!t)
    return null; if (t.routeConfig?._injector)
    return t.routeConfig._injector; for (let n = t.parent; n; n = n.parent) {
    let e = n.routeConfig;
    if (e?._loadedInjector)
        return e._loadedInjector;
    if (e?._injector)
        return e._injector;
} return null; }
var yt = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() { return Me(this.route?.snapshot) ?? this.rootInjector; }
    constructor(n) { this.rootInjector = n, this.children = new le(this.rootInjector); }
}, le = (() => { class t {
    rootInjector;
    contexts = new Map;
    constructor(e) { this.rootInjector = e; }
    onChildOutletCreated(e, r) { let i = this.getOrCreateContext(e); i.outlet = r, this.contexts.set(e, i); }
    onChildOutletDestroyed(e) { let r = this.getContext(e); r && (r.outlet = null, r.attachRef = null); }
    onOutletDeactivated() { let e = this.contexts; return this.contexts = new Map, e; }
    onOutletReAttached(e) { this.contexts = e; }
    getOrCreateContext(e) { let r = this.getContext(e); return r || (r = new yt(this.rootInjector), this.contexts.set(e, r)), r; }
    getContext(e) { return this.contexts.get(e) || null; }
    static \u0275fac = function (r) { return new (r || t)(y.\u0275\u0275inject(y.EnvironmentInjector)); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Rt = class {
    _root;
    constructor(n) { this._root = n; }
    get root() { return this._root.value; }
    parent(n) { let e = this.pathFromRoot(n); return e.length > 1 ? e[e.length - 2] : null; }
    children(n) { let e = Vt(n, this._root); return e ? e.children.map(r => r.value) : []; }
    firstChild(n) { let e = Vt(n, this._root); return e && e.children.length > 0 ? e.children[0].value : null; }
    siblings(n) { let e = Ht(n, this._root); return e.length < 2 ? [] : e[e.length - 2].children.map(i => i.value).filter(i => i !== n); }
    pathFromRoot(n) { return Ht(n, this._root).map(e => e.value); }
};
function Vt(t, n) { if (t === n.value)
    return n; for (let e of n.children) {
    let r = Vt(t, e);
    if (r)
        return r;
} return null; }
function Ht(t, n) { if (t === n.value)
    return [n]; for (let e of n.children) {
    let r = Ht(t, e);
    if (r.length)
        return r.unshift(n), r;
} return []; }
var b = class {
    value;
    children;
    constructor(n, e) { this.value = n, this.children = e; }
    toString() { return `TreeNode(${this.value})`; }
};
function pe(t) { let n = {}; return t && t.children.forEach(e => n[e.value.outlet] = e), n; }
var ke = class extends Rt {
    snapshot;
    constructor(n, e) { super(n), this.snapshot = e, nr(this, n); }
    toString() { return this.snapshot.toString(); }
};
function Xr(t) { let n = Bi(t), e = new k([new J("", {})]), r = new k({}), i = new k({}), o = new k({}), s = new k(""), a = new W(e, r, o, s, i, f, t, n.root); return a.snapshot = n.root, new ke(new b(a, []), n); }
function Bi(t) { let n = {}, e = {}, r = {}, o = new H([], n, r, "", e, f, t, null, {}); return new Ie("", new b(o, [])); }
var W = class {
    urlSubject;
    paramsSubject;
    queryParamsSubject;
    fragmentSubject;
    dataSubject;
    outlet;
    component;
    snapshot;
    _futureSnapshot;
    _routerState;
    _paramMap;
    _queryParamMap;
    title;
    url;
    params;
    queryParams;
    fragment;
    data;
    constructor(n, e, r, i, o, s, a, c) { this.urlSubject = n, this.paramsSubject = e, this.queryParamsSubject = r, this.fragmentSubject = i, this.dataSubject = o, this.outlet = s, this.component = a, this._futureSnapshot = c, this.title = this.dataSubject?.pipe(S(u => u[Be])) ?? p(void 0), this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o; }
    get routeConfig() { return this._futureSnapshot.routeConfig; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= this.params.pipe(S(n => ue(n))), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= this.queryParams.pipe(S(n => ue(n))), this._queryParamMap; }
    toString() { return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`; }
};
function be(t, n, e = "emptyOnly") { let r, { routeConfig: i } = t; return n !== null && (e === "always" || i?.path === "" || !n.component && !n.routeConfig?.loadComponent) ? r = { params: h(h({}, n.params), t.params), data: h(h({}, n.data), t.data), resolve: h(h(h(h({}, t.data), n.data), i?.data), t._resolvedData) } : r = { params: h({}, t.params), data: h({}, t.data), resolve: h(h({}, t.data), t._resolvedData ?? {}) }, i && en(i) && (r.resolve[Be] = i.title), r; }
var H = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    get title() { return this.data?.[Be]; }
    constructor(n, e, r, i, o, s, a, c, u) { this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = s, this.component = a, this.routeConfig = c, this._resolve = u; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= ue(this.params), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= ue(this.queryParams), this._queryParamMap; }
    toString() { let n = this.url.map(r => r.toString()).join("/"), e = this.routeConfig ? this.routeConfig.path : ""; return `Route(url:'${n}', path:'${e}')`; }
}, Ie = class extends Rt {
    url;
    constructor(n, e) { super(e), this.url = n, nr(this, e); }
    toString() { return Jr(this._root); }
};
function nr(t, n) { n.value._routerState = t, n.children.forEach(e => nr(t, e)); }
function Jr(t) { let n = t.children.length > 0 ? ` { ${t.children.map(Jr).join(", ")} } ` : ""; return `${t.value}${n}`; }
function Lt(t) { if (t.snapshot) {
    let n = t.snapshot, e = t._futureSnapshot;
    t.snapshot = e, B(n.queryParams, e.queryParams) || t.queryParamsSubject.next(e.queryParams), n.fragment !== e.fragment && t.fragmentSubject.next(e.fragment), B(n.params, e.params) || t.paramsSubject.next(e.params), mi(n.url, e.url) || t.urlSubject.next(e.url), B(n.data, e.data) || t.dataSubject.next(e.data);
}
else
    t.snapshot = t._futureSnapshot, t.dataSubject.next(t._futureSnapshot.data); }
function Gt(t, n) { let e = B(t.params, n.params) && Ci(t.url, n.url), r = !t.parent != !n.parent; return e && !r && (!t.parent || Gt(t.parent, n.parent)); }
function en(t) { return typeof t.title == "string" || t.title === null; }
var tn = new re(""), ir = (() => { class t {
    activated = null;
    get activatedComponentRef() { return this.activated; }
    _activatedRoute = null;
    name = f;
    activateEvents = new Xe;
    deactivateEvents = new Xe;
    attachEvents = new Xe;
    detachEvents = new Xe;
    routerOutletData = Wn();
    parentContexts = g(le);
    location = g(Qn);
    changeDetector = g(Kn);
    inputBinder = g(Ve, { optional: !0 });
    supportsBindingToComponentInputs = !0;
    ngOnChanges(e) { if (e.name) {
        let { firstChange: r, previousValue: i } = e.name;
        if (r)
            return;
        this.isTrackedInParentContexts(i) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)), this.initializeOutletWithName();
    } }
    ngOnDestroy() { this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name), this.inputBinder?.unsubscribeFromRouteData(this); }
    isTrackedInParentContexts(e) { return this.parentContexts.getContext(e)?.outlet === this; }
    ngOnInit() { this.initializeOutletWithName(); }
    initializeOutletWithName() { if (this.parentContexts.onChildOutletCreated(this.name, this), this.activated)
        return; let e = this.parentContexts.getContext(this.name); e?.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.injector)); }
    get isActivated() { return !!this.activated; }
    get component() { if (!this.activated)
        throw new M(4012, !1); return this.activated.instance; }
    get activatedRoute() { if (!this.activated)
        throw new M(4012, !1); return this._activatedRoute; }
    get activatedRouteData() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {}; }
    detach() { if (!this.activated)
        throw new M(4012, !1); this.location.detach(); let e = this.activated; return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(e.instance), e; }
    attach(e, r) { this.activated = e, this._activatedRoute = r, this.location.insert(e.hostView), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.attachEvents.emit(e.instance); }
    deactivate() { if (this.activated) {
        let e = this.component;
        this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e);
    } }
    activateWith(e, r) { if (this.isActivated)
        throw new M(4013, !1); this._activatedRoute = e; let i = this.location, s = e.snapshot.component, a = this.parentContexts.getOrCreateContext(this.name).children, c = new Wt(e, a, i.injector, this.routerOutletData); this.activated = i.createComponent(s, { index: i.length, injector: c, environmentInjector: r }), this.changeDetector.markForCheck(), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.activateEvents.emit(this.activated.instance); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275dir = y.\u0275\u0275defineDirective({ type: t, selectors: [["router-outlet"]], inputs: { name: "name", routerOutletData: [1, "routerOutletData"] }, outputs: { activateEvents: "activate", deactivateEvents: "deactivate", attachEvents: "attach", detachEvents: "detach" }, exportAs: ["outlet"], features: [y.\u0275\u0275NgOnChangesFeature] });
} return t; })(), Wt = class {
    route;
    childContexts;
    parent;
    outletData;
    constructor(n, e, r, i) { this.route = n, this.childContexts = e, this.parent = r, this.outletData = i; }
    get(n, e) { return n === W ? this.route : n === le ? this.childContexts : n === tn ? this.outletData : this.parent.get(n, e); }
}, Ve = new re(""), or = (() => { class t {
    outletDataSubscriptions = new Map;
    bindActivatedRouteToOutletComponent(e) { this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e); }
    unsubscribeFromRouteData(e) { this.outletDataSubscriptions.get(e)?.unsubscribe(), this.outletDataSubscriptions.delete(e); }
    subscribeToRouteData(e) { let { activatedRoute: r } = e, i = Pr([r.queryParams, r.params, r.data]).pipe(L(([o, s, a], c) => (a = h(h(h({}, o), s), a), c === 0 ? p(a) : Promise.resolve(a)))).subscribe(o => { if (!e.isActivated || !e.activatedComponentRef || e.activatedRoute !== r || r.component === null) {
        this.unsubscribeFromRouteData(e);
        return;
    } let s = Zn(r.component); if (!s) {
        this.unsubscribeFromRouteData(e);
        return;
    } for (let { templateName: a } of s.inputs)
        e.activatedComponentRef.setInput(a, o[a]); }); this.outletDataSubscriptions.set(e, i); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), sr = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275cmp = y.\u0275\u0275defineComponent({ type: t, selectors: [["ng-component"]], exportAs: ["emptyRouterOutlet"], decls: 1, vars: 0, template: function (r, i) { r & 1 && y.\u0275\u0275element(0, "router-outlet"); }, dependencies: [ir], encapsulation: 2 });
} return t; })();
function ar(t) { let n = t.children && t.children.map(ar), e = n ? $(h({}, t), { children: n }) : h({}, t); return !e.component && !e.loadComponent && (n || e.loadChildren) && e.outlet && e.outlet !== f && (e.component = sr), e; }
function Vi(t, n, e) { let r = ze(t, n._root, e ? e._root : void 0); return new ke(r, n); }
function ze(t, n, e) { if (e && t.shouldReuseRoute(n.value, e.value.snapshot)) {
    let r = e.value;
    r._futureSnapshot = n.value;
    let i = Hi(t, n, e);
    return new b(r, i);
}
else {
    if (t.shouldAttach(n.value)) {
        let o = t.retrieve(n.value);
        if (o !== null) {
            let s = o.route;
            return s.value._futureSnapshot = n.value, s.children = n.children.map(a => ze(t, a)), s;
        }
    }
    let r = Gi(n.value), i = n.children.map(o => ze(t, o));
    return new b(r, i);
} }
function Hi(t, n, e) { return n.children.map(r => { for (let i of e.children)
    if (t.shouldReuseRoute(r.value, i.value.snapshot))
        return ze(t, r, i); return ze(t, r); }); }
function Gi(t) { return new W(new k(t.url), new k(t.params), new k(t.queryParams), new k(t.fragment), new k(t.data), t.outlet, t.component, t); }
var Ae = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(n, e) { this.redirectTo = n, this.navigationBehaviorOptions = e; }
}, rn = "ngNavigationCancelingError";
function St(t, n) { let { redirectTo: e, navigationBehaviorOptions: r } = ee(n) ? { redirectTo: n, navigationBehaviorOptions: void 0 } : n, i = cr(!1, E.Redirect); return i.url = e, i.navigationBehaviorOptions = r, i; }
function cr(t, n) { let e = new Error(`NavigationCancelingError: ${t || ""}`); return e[rn] = !0, e.cancellationCode = n, e; }
function Wi(t) { return nn(t) && ee(t.url); }
function nn(t) { return !!t && t[rn]; }
var Qi = (t, n, e, r) => S(i => (new Qt(n, i.targetRouterState, i.currentRouterState, e, r).activate(t), i)), Qt = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(n, e, r, i, o) { this.routeReuseStrategy = n, this.futureState = e, this.currState = r, this.forwardEvent = i, this.inputBindingEnabled = o; }
    activate(n) { let e = this.futureState._root, r = this.currState ? this.currState._root : null; this.deactivateChildRoutes(e, r, n), Lt(this.futureState.root), this.activateChildRoutes(e, r, n); }
    deactivateChildRoutes(n, e, r) { let i = pe(e); n.children.forEach(o => { let s = o.value.outlet; this.deactivateRoutes(o, i[s], r), delete i[s]; }), Object.values(i).forEach(o => { this.deactivateRouteAndItsChildren(o, r); }); }
    deactivateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (i === o)
        if (i.component) {
            let s = r.getContext(i.outlet);
            s && this.deactivateChildRoutes(n, e, s.children);
        }
        else
            this.deactivateChildRoutes(n, e, r);
    else
        o && this.deactivateRouteAndItsChildren(e, r); }
    deactivateRouteAndItsChildren(n, e) { n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot) ? this.detachAndStoreRouteSubtree(n, e) : this.deactivateRouteAndOutlet(n, e); }
    detachAndStoreRouteSubtree(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = pe(n); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); if (r && r.outlet) {
        let s = r.outlet.detach(), a = r.children.onOutletDeactivated();
        this.routeReuseStrategy.store(n.value.snapshot, { componentRef: s, route: n, contexts: a });
    } }
    deactivateRouteAndOutlet(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = pe(n); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); r && (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()), r.attachRef = null, r.route = null); }
    activateChildRoutes(n, e, r) { let i = pe(e); n.children.forEach(o => { this.activateRoutes(o, i[o.value.outlet], r), this.forwardEvent(new mt(o.value.snapshot)); }), n.children.length && this.forwardEvent(new gt(n.value.snapshot)); }
    activateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (Lt(i), i === o)
        if (i.component) {
            let s = r.getOrCreateContext(i.outlet);
            this.activateChildRoutes(n, e, s.children);
        }
        else
            this.activateChildRoutes(n, e, r);
    else if (i.component) {
        let s = r.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
            let a = this.routeReuseStrategy.retrieve(i.snapshot);
            this.routeReuseStrategy.store(i.snapshot, null), s.children.onOutletReAttached(a.contexts), s.attachRef = a.componentRef, s.route = a.route.value, s.outlet && s.outlet.attach(a.componentRef, a.route.value), Lt(a.route.value), this.activateChildRoutes(n, null, s.children);
        }
        else
            s.attachRef = null, s.route = i, s.outlet && s.outlet.activateWith(i, s.injector), this.activateChildRoutes(n, null, s.children);
    }
    else
        this.activateChildRoutes(n, null, r); }
}, Ct = class {
    path;
    route;
    constructor(n) { this.path = n, this.route = this.path[this.path.length - 1]; }
}, ye = class {
    component;
    route;
    constructor(n, e) { this.component = n, this.route = e; }
};
function Ki(t, n, e) { let r = t._root, i = n ? n._root : null; return De(r, i, e, [r.value]); }
function Zi(t) { let n = t.routeConfig ? t.routeConfig.canActivateChild : null; return !n || n.length === 0 ? null : { node: t, guards: n }; }
function Ee(t, n) { let e = Symbol(), r = n.get(t, e); return r === e ? typeof t == "function" && !Yn(t) ? t : n.get(t) : r; }
function De(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = pe(n); return t.children.forEach(s => { Yi(s, o[s.value.outlet], e, r.concat([s.value]), i), delete o[s.value.outlet]; }), Object.entries(o).forEach(([s, a]) => _e(a, e.getContext(s), i)), i; }
function Yi(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = t.value, s = n ? n.value : null, a = e ? e.getContext(t.value.outlet) : null; if (s && o.routeConfig === s.routeConfig) {
    let c = Xi(s, o, o.routeConfig.runGuardsAndResolvers);
    c ? i.canActivateChecks.push(new Ct(r)) : (o.data = s.data, o._resolvedData = s._resolvedData), o.component ? De(t, n, a ? a.children : null, r, i) : De(t, n, e, r, i), c && a && a.outlet && a.outlet.isActivated && i.canDeactivateChecks.push(new ye(a.outlet.component, s));
}
else
    s && _e(n, a, i), i.canActivateChecks.push(new Ct(r)), o.component ? De(t, null, a ? a.children : null, r, i) : De(t, null, e, r, i); return i; }
function Xi(t, n, e) { if (typeof e == "function")
    return e(t, n); switch (e) {
    case "pathParamsChange": return !ce(t.url, n.url);
    case "pathParamsOrQueryParamsChange": return !ce(t.url, n.url) || !B(t.queryParams, n.queryParams);
    case "always": return !0;
    case "paramsOrQueryParamsChange": return !Gt(t, n) || !B(t.queryParams, n.queryParams);
    case "paramsChange":
    default: return !Gt(t, n);
} }
function _e(t, n, e) { let r = pe(t), i = t.value; Object.entries(r).forEach(([o, s]) => { i.component ? n ? _e(s, n.children.getContext(o), e) : _e(s, null, e) : _e(s, n, e); }), i.component ? n && n.outlet && n.outlet.isActivated ? e.canDeactivateChecks.push(new ye(n.outlet.component, i)) : e.canDeactivateChecks.push(new ye(null, i)) : e.canDeactivateChecks.push(new ye(null, i)); }
function He(t) { return typeof t == "function"; }
function Ji(t) { return typeof t == "boolean"; }
function eo(t) { return t && He(t.canLoad); }
function to(t) { return t && He(t.canActivate); }
function ro(t) { return t && He(t.canActivateChild); }
function no(t) { return t && He(t.canDeactivate); }
function io(t) { return t && He(t.canMatch); }
function ur(t) { return t instanceof ai || t?.name === "EmptyError"; }
var et = Symbol("INITIAL_VALUE");
function Te() { return L(t => Pr(t.map(n => n.pipe(Le(1), hi(et)))).pipe(S(n => { for (let e of n)
    if (e !== !0) {
        if (e === et)
            return et;
        if (e === !1 || oo(e))
            return e;
    } return !0; }), ge(n => n !== et), Le(1))); }
function oo(t) { return ee(t) || t instanceof Ae; }
function on(t) { return t.aborted ? p(void 0).pipe(Le(1)) : new ci(n => { let e = () => { n.next(), n.complete(); }; return t.addEventListener("abort", e), () => t.removeEventListener("abort", e); }); }
function sn(t) { return $t(on(t)); }
function so(t, n) { return q(e => { let { targetSnapshot: r, currentSnapshot: i, guards: { canActivateChecks: o, canDeactivateChecks: s } } = e; return s.length === 0 && o.length === 0 ? p($(h({}, e), { guardsResult: !0 })) : ao(s, r, i, t).pipe(q(a => a && Ji(a) ? co(r, o, t, n) : p(a)), S(a => $(h({}, e), { guardsResult: a }))); }); }
function ao(t, n, e, r) { return z(t).pipe(q(i => po(i.component, i.route, e, n, r)), ne(i => i !== !0, !0)); }
function co(t, n, e, r) { return z(n).pipe(it(i => ui(lo(i.route.parent, r), uo(i.route, r), fo(t, i.path, e), ho(t, i.route, e))), ne(i => i !== !0, !0)); }
function uo(t, n) { return t !== null && n && n(new vt(t)), p(!0); }
function lo(t, n) { return t !== null && n && n(new pt(t)), p(!0); }
function ho(t, n, e) { let r = n.routeConfig ? n.routeConfig.canActivate : null; if (!r || r.length === 0)
    return p(!0); let i = r.map(o => tr(() => { let s = Me(n) ?? e, a = Ee(o, s), c = to(a) ? a.canActivate(n, t) : x(s, () => a(n, t)); return ie(c).pipe(ne()); })); return p(i).pipe(Te()); }
function fo(t, n, e) { let r = n[n.length - 1], o = n.slice(0, n.length - 1).reverse().map(s => Zi(s)).filter(s => s !== null).map(s => tr(() => { let a = s.guards.map(c => { let u = Me(s.node) ?? e, l = Ee(c, u), v = ro(l) ? l.canActivateChild(r, t) : x(u, () => l(r, t)); return ie(v).pipe(ne()); }); return p(a).pipe(Te()); })); return p(o).pipe(Te()); }
function po(t, n, e, r, i) { let o = n && n.routeConfig ? n.routeConfig.canDeactivate : null; if (!o || o.length === 0)
    return p(!0); let s = o.map(a => { let c = Me(n) ?? i, u = Ee(a, c), l = no(u) ? u.canDeactivate(t, n, e, r) : x(c, () => u(t, n, e, r)); return ie(l).pipe(ne()); }); return p(s).pipe(Te()); }
function an(t, n, e, r, i) { let o = n.canLoad; if (o === void 0 || o.length === 0)
    return p(!0); let s = o.map(a => { let c = Ee(a, t), u = eo(c) ? c.canLoad(n, e) : x(t, () => c(n, e)), l = ie(u); return i ? l.pipe(sn(i)) : l; }); return p(s).pipe(Te(), cn(r)); }
function cn(t) { return li(N(n => { if (typeof n != "boolean")
    throw St(t, n); }), S(n => n === !0)); }
function go(t, n, e, r, i) { let o = n.canMatch; if (!o || o.length === 0)
    return p(!0); let s = o.map(a => { let c = Ee(a, t), u = io(c) ? c.canMatch(n, e) : x(t, () => c(n, e)), l = ie(u); return i ? l.pipe(sn(i)) : l; }); return p(s).pipe(Te(), cn(r)); }
var ae = class un extends Error {
    segmentGroup;
    constructor(n) { super(), this.segmentGroup = n || null, Object.setPrototypeOf(this, un.prototype); }
}, Kt = class ln extends Error {
    urlTree;
    constructor(n) { super(), this.urlTree = n, Object.setPrototypeOf(this, ln.prototype); }
};
function vo(t) { throw new M(4e3, !1); }
function mo(t) { throw cr(!1, E.GuardRejected); }
var yo = class {
    urlSerializer;
    urlTree;
    constructor(n, e) { this.urlSerializer = n, this.urlTree = e; }
    lineralizeSegments(n, e) { return w(this, null, function* () { let r = [], i = e.root; for (;;) {
        if (r = r.concat(i.segments), i.numberOfChildren === 0)
            return r;
        if (i.numberOfChildren > 1 || !i.children[f])
            throw vo(`${n.redirectTo}`);
        i = i.children[f];
    } }); }
    applyRedirectCommands(n, e, r, i, o) { return w(this, null, function* () { let s = yield Ro(e, i, o); if (s instanceof P)
        throw new Kt(s); let a = this.applyRedirectCreateUrlTree(s, this.urlSerializer.parse(s), n, r); if (s[0] === "/")
        throw new Kt(a); return a; }); }
    applyRedirectCreateUrlTree(n, e, r, i) { let o = this.createSegmentGroup(n, e.root, r, i); return new P(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment); }
    createQueryParams(n, e) { let r = {}; return Object.entries(n).forEach(([i, o]) => { if (typeof o == "string" && o[0] === ":") {
        let a = o.substring(1);
        r[i] = e[a];
    }
    else
        r[i] = o; }), r; }
    createSegmentGroup(n, e, r, i) { let o = this.createSegments(n, e.segments, r, i), s = {}; return Object.entries(e.children).forEach(([a, c]) => { s[a] = this.createSegmentGroup(n, c, r, i); }), new m(o, s); }
    createSegments(n, e, r, i) { return e.map(o => o.path[0] === ":" ? this.findPosParam(n, o, i) : this.findOrReturn(o, r)); }
    findPosParam(n, e, r) { let i = r[e.path.substring(1)]; if (!i)
        throw new M(4001, !1); return i; }
    findOrReturn(n, e) { let r = 0; for (let i of e) {
        if (i.path === n.path)
            return e.splice(r), i;
        r++;
    } return n; }
};
function Ro(t, n, e) { if (typeof t == "string")
    return Promise.resolve(t); let r = t, { queryParams: i, fragment: o, routeConfig: s, url: a, outlet: c, params: u, data: l, title: v } = n; return ot(ie(x(e, () => r({ params: u, data: l, queryParams: i, fragment: o, routeConfig: s, url: a, outlet: c, title: v })))); }
var Zt = { matched: !1, consumedSegments: [], remainingSegments: [], parameters: {}, positionalParamSegments: {} };
function dn(t, n, e, r, i, o) { let s = lr(t, n, e); return s.matched ? (r = qi(n, r), go(r, n, e, i, o).pipe(S(a => a === !0 ? s : h({}, Zt)))) : p(s); }
function lr(t, n, e) { if (n.path === "**")
    return So(e); if (n.path === "")
    return n.pathMatch === "full" && (t.hasChildren() || e.length > 0) ? h({}, Zt) : { matched: !0, consumedSegments: [], remainingSegments: e, parameters: {}, positionalParamSegments: {} }; let i = (n.matcher || Lr)(e, t, n); if (!i)
    return h({}, Zt); let o = {}; Object.entries(i.posParams ?? {}).forEach(([a, c]) => { o[a] = c.path; }); let s = i.consumed.length > 0 ? h(h({}, o), i.consumed[i.consumed.length - 1].parameters) : o; return { matched: !0, consumedSegments: i.consumed, remainingSegments: e.slice(i.consumed.length), parameters: s, positionalParamSegments: i.posParams ?? {} }; }
function So(t) { return { matched: !0, parameters: t.length > 0 ? jr(t).parameters : {}, consumedSegments: t, remainingSegments: [], positionalParamSegments: {} }; }
function wt(t, n, e, r) { return e.length > 0 && bo(t, e, r) ? { segmentGroup: new m(n, wo(r, new m(e, t.children))), slicedSegments: [] } : e.length === 0 && Io(t, e, r) ? { segmentGroup: new m(t.segments, Co(t, e, r, t.children)), slicedSegments: e } : { segmentGroup: new m(t.segments, t.children), slicedSegments: e }; }
function Co(t, n, e, r) { let i = {}; for (let o of e)
    if (Ge(t, n, o) && !r[D(o)]) {
        let s = new m([], {});
        i[D(o)] = s;
    } return h(h({}, r), i); }
function wo(t, n) { let e = {}; e[f] = n; for (let r of t)
    if (r.path === "" && D(r) !== f) {
        let i = new m([], {});
        e[D(r)] = i;
    } return e; }
function bo(t, n, e) { return e.some(r => Ge(t, n, r) && D(r) !== f); }
function Io(t, n, e) { return e.some(r => Ge(t, n, r)); }
function Ge(t, n, e) { return (t.hasChildren() || n.length > 0) && e.pathMatch === "full" ? !1 : e.path === ""; }
function hn(t, n, e) { return n.length === 0 && !t.children[e]; }
var Ao = class {
};
function To(t, n, e, r, i, o, s = "emptyOnly", a) { return w(this, null, function* () { return new Eo(t, n, e, r, i, s, o, a).recognize(); }); }
var Mo = 31, Eo = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    abortSignal;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(n, e, r, i, o, s, a, c) { this.injector = n, this.configLoader = e, this.rootComponentType = r, this.config = i, this.urlTree = o, this.paramsInheritanceStrategy = s, this.urlSerializer = a, this.abortSignal = c, this.applyRedirects = new yo(this.urlSerializer, this.urlTree); }
    noMatchError(n) { return new M(4002, `'${n.segmentGroup}'`); }
    recognize() { return w(this, null, function* () { let n = wt(this.urlTree.root, [], [], this.config).segmentGroup, { children: e, rootSnapshot: r } = yield this.match(n), i = new b(r, e), o = new Ie("", i), s = rr(r, [], this.urlTree.queryParams, this.urlTree.fragment); return s.queryParams = this.urlTree.queryParams, o.url = this.urlSerializer.serialize(s), { state: o, tree: s }; }); }
    match(n) { return w(this, null, function* () { let e = new H([], Object.freeze({}), Object.freeze(h({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), f, this.rootComponentType, null, {}); try {
        return { children: yield this.processSegmentGroup(this.injector, this.config, n, f, e), rootSnapshot: e };
    }
    catch (r) {
        if (r instanceof Kt)
            return this.urlTree = r.urlTree, this.match(r.urlTree.root);
        throw r instanceof ae ? this.noMatchError(r) : r;
    } }); }
    processSegmentGroup(n, e, r, i, o) { return w(this, null, function* () { if (r.segments.length === 0 && r.hasChildren())
        return this.processChildren(n, e, r, o); let s = yield this.processSegment(n, e, r, r.segments, i, !0, o); return s instanceof b ? [s] : []; }); }
    processChildren(n, e, r, i) { return w(this, null, function* () { let o = []; for (let c of Object.keys(r.children))
        c === "primary" ? o.unshift(c) : o.push(c); let s = []; for (let c of o) {
        let u = r.children[c], l = Yr(e, c), v = yield this.processSegmentGroup(n, l, u, c, i);
        s.push(...v);
    } let a = fn(s); return Oo(a), a; }); }
    processSegment(n, e, r, i, o, s, a) { return w(this, null, function* () { for (let c of e)
        try {
            return yield this.processSegmentAgainstRoute(c._injector ?? n, e, c, r, i, o, s, a);
        }
        catch (u) {
            if (u instanceof ae || ur(u))
                continue;
            throw u;
        } if (hn(r, i, o))
        return new Ao; throw new ae(r); }); }
    processSegmentAgainstRoute(n, e, r, i, o, s, a, c) { return w(this, null, function* () { if (D(r) !== s && (s === f || !Ge(i, o, r)))
        throw new ae(i); if (r.redirectTo === void 0)
        return this.matchSegmentAgainstRoute(n, i, r, o, s, c); if (this.allowRedirects && a)
        return this.expandSegmentAgainstRouteUsingRedirect(n, i, e, r, o, s, c); throw new ae(i); }); }
    expandSegmentAgainstRouteUsingRedirect(n, e, r, i, o, s, a) { return w(this, null, function* () { let { matched: c, parameters: u, consumedSegments: l, positionalParamSegments: v, remainingSegments: C } = lr(e, i, o); if (!c)
        throw new ae(e); typeof i.redirectTo == "string" && i.redirectTo[0] === "/" && (this.absoluteRedirectCount++, this.absoluteRedirectCount > Mo && (this.allowRedirects = !1)); let R = new H(o, u, Object.freeze(h({}, this.urlTree.queryParams)), this.urlTree.fragment, Tr(i), D(i), i.component ?? i._loadedComponent ?? null, i, Mr(i)), I = be(R, a, this.paramsInheritanceStrategy); if (R.params = Object.freeze(I.params), R.data = Object.freeze(I.data), this.abortSignal.aborted)
        throw new Error(this.abortSignal.reason); let j = yield this.applyRedirects.applyRedirectCommands(l, i.redirectTo, v, R, n), O = yield this.applyRedirects.lineralizeSegments(i, j); return this.processSegment(n, r, e, O.concat(C), s, !1, a); }); }
    matchSegmentAgainstRoute(n, e, r, i, o, s) { return w(this, null, function* () { if (this.abortSignal.aborted)
        throw new Error(this.abortSignal.reason); let a = yield ot(dn(e, r, i, n, this.urlSerializer, this.abortSignal)); if (r.path === "**" && (e.children = {}), !a?.matched)
        throw new ae(e); n = r._injector ?? n; let { routes: c } = yield this.getChildConfig(n, r, i), u = r._loadedInjector ?? n, { parameters: l, consumedSegments: v, remainingSegments: C } = a, R = new H(v, l, Object.freeze(h({}, this.urlTree.queryParams)), this.urlTree.fragment, Tr(r), D(r), r.component ?? r._loadedComponent ?? null, r, Mr(r)), I = be(R, s, this.paramsInheritanceStrategy); R.params = Object.freeze(I.params), R.data = Object.freeze(I.data); let { segmentGroup: j, slicedSegments: O } = wt(e, v, C, c); if (O.length === 0 && j.hasChildren()) {
        let he = yield this.processChildren(u, c, j, R);
        return new b(R, he);
    } if (c.length === 0 && O.length === 0)
        return new b(R, []); let Y = D(r) === o, Ye = yield this.processSegment(u, c, j, O, Y ? f : o, !0, R); return new b(R, Ye instanceof b ? [Ye] : []); }); }
    getChildConfig(n, e, r) { return w(this, null, function* () { if (e.children)
        return { routes: e.children, injector: n }; if (e.loadChildren) {
        if (e._loadedRoutes !== void 0)
            return { routes: e._loadedRoutes, injector: e._loadedInjector };
        if (this.abortSignal.aborted)
            throw new Error(this.abortSignal.reason);
        if (yield ot(an(n, e, r, this.urlSerializer, this.abortSignal))) {
            let o = yield this.configLoader.loadChildren(n, e);
            return e._loadedRoutes = o.routes, e._loadedInjector = o.injector, o;
        }
        throw mo(e);
    } return { routes: [], injector: n }; }); }
};
function Oo(t) { t.sort((n, e) => n.value.outlet === f ? -1 : e.value.outlet === f ? 1 : n.value.outlet.localeCompare(e.value.outlet)); }
function Do(t) { let n = t.value.routeConfig; return n && n.path === ""; }
function fn(t) { let n = [], e = new Set; for (let r of t) {
    if (!Do(r)) {
        n.push(r);
        continue;
    }
    let i = n.find(o => r.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...r.children), e.add(i)) : n.push(r);
} for (let r of e) {
    let i = fn(r.children);
    n.push(new b(r.value, i));
} return n.filter(r => !e.has(r)); }
function Tr(t) { return t.data || {}; }
function Mr(t) { return t.resolve || {}; }
var Fe = class {
    segmentGroup;
    constructor(n) { this.segmentGroup = n || null; }
}, qe = class extends Error {
    urlTree;
    constructor(n) { super(), this.urlTree = n; }
};
function fe(t) { return It(new Fe(t)); }
function No(t) { return It(new M(4e3, !1)); }
function Po(t) { return It(cr(!1, E.GuardRejected)); }
var Yt = class {
    urlSerializer;
    urlTree;
    constructor(n, e) { this.urlSerializer = n, this.urlTree = e; }
    lineralizeSegments(n, e) { let r = [], i = e.root; for (;;) {
        if (r = r.concat(i.segments), i.numberOfChildren === 0)
            return p(r);
        if (i.numberOfChildren > 1 || !i.children[f])
            return No(`${n.redirectTo}`);
        i = i.children[f];
    } }
    applyRedirectCommands(n, e, r, i, o) { return Uo(e, i, o).pipe(S(s => { if (s instanceof P)
        throw new qe(s); let a = this.applyRedirectCreateUrlTree(s, this.urlSerializer.parse(s), n, r); if (s[0] === "/")
        throw new qe(a); return a; })); }
    applyRedirectCreateUrlTree(n, e, r, i) { let o = this.createSegmentGroup(n, e.root, r, i); return new P(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment); }
    createQueryParams(n, e) { let r = {}; return Object.entries(n).forEach(([i, o]) => { if (typeof o == "string" && o[0] === ":") {
        let a = o.substring(1);
        r[i] = e[a];
    }
    else
        r[i] = o; }), r; }
    createSegmentGroup(n, e, r, i) { let o = this.createSegments(n, e.segments, r, i), s = {}; return Object.entries(e.children).forEach(([a, c]) => { s[a] = this.createSegmentGroup(n, c, r, i); }), new m(o, s); }
    createSegments(n, e, r, i) { return e.map(o => o.path[0] === ":" ? this.findPosParam(n, o, i) : this.findOrReturn(o, r)); }
    findPosParam(n, e, r) { let i = r[e.path.substring(1)]; if (!i)
        throw new M(4001, !1); return i; }
    findOrReturn(n, e) { let r = 0; for (let i of e) {
        if (i.path === n.path)
            return e.splice(r), i;
        r++;
    } return n; }
};
function Uo(t, n, e) { if (typeof t == "string")
    return p(t); let r = t, { queryParams: i, fragment: o, routeConfig: s, url: a, outlet: c, params: u, data: l, title: v } = n; return ie(x(e, () => r({ params: u, data: l, queryParams: i, fragment: o, routeConfig: s, url: a, outlet: c, title: v }))); }
var Xt = class {
};
function _o(t, n, e, r, i, o, s = "emptyOnly", a) { return new Jt(t, n, e, r, i, s, o).recognize(); }
var Lo = 31, Jt = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(n, e, r, i, o, s, a) { this.injector = n, this.configLoader = e, this.rootComponentType = r, this.config = i, this.urlTree = o, this.paramsInheritanceStrategy = s, this.urlSerializer = a, this.applyRedirects = new Yt(this.urlSerializer, this.urlTree); }
    noMatchError(n) { return new M(4002, `'${n.segmentGroup}'`); }
    recognize() { let n = wt(this.urlTree.root, [], [], this.config).segmentGroup; return this.match(n).pipe(S(({ children: e, rootSnapshot: r }) => { let i = new b(r, e), o = new Ie("", i), s = rr(r, [], this.urlTree.queryParams, this.urlTree.fragment); return s.queryParams = this.urlTree.queryParams, o.url = this.urlSerializer.serialize(s), { state: o, tree: s }; })); }
    match(n) { let e = new H([], Object.freeze({}), Object.freeze(h({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), f, this.rootComponentType, null, {}); return this.processSegmentGroup(this.injector, this.config, n, f, e).pipe(S(r => ({ children: r, rootSnapshot: e })), Pe(r => { if (r instanceof qe)
        return this.urlTree = r.urlTree, this.match(r.urlTree.root); throw r instanceof Fe ? this.noMatchError(r) : r; })); }
    processSegmentGroup(n, e, r, i, o) { return r.segments.length === 0 && r.hasChildren() ? this.processChildren(n, e, r, o) : this.processSegment(n, e, r, r.segments, i, !0, o).pipe(S(s => s instanceof b ? [s] : [])); }
    processChildren(n, e, r, i) { let o = []; for (let s of Object.keys(r.children))
        s === "primary" ? o.unshift(s) : o.push(s); return z(o).pipe(it(s => { let a = r.children[s], c = Yr(e, s); return this.processSegmentGroup(n, c, a, s, i); }), fi((s, a) => (s.push(...a), s)), pi(null), gi(), q(s => { if (s === null)
        return fe(r); let a = pn(s); return xo(a), p(a); })); }
    processSegment(n, e, r, i, o, s, a) { return z(e).pipe(it(c => this.processSegmentAgainstRoute(c._injector ?? n, e, c, r, i, o, s, a).pipe(Pe(u => { if (u instanceof Fe)
        return p(null); throw u; }))), ne(c => !!c), Pe(c => { if (ur(c))
        return hn(r, i, o) ? p(new Xt) : fe(r); throw c; })); }
    processSegmentAgainstRoute(n, e, r, i, o, s, a, c) { return D(r) !== s && (s === f || !Ge(i, o, r)) ? fe(i) : r.redirectTo === void 0 ? this.matchSegmentAgainstRoute(n, i, r, o, s, c) : this.allowRedirects && a ? this.expandSegmentAgainstRouteUsingRedirect(n, i, e, r, o, s, c) : fe(i); }
    expandSegmentAgainstRouteUsingRedirect(n, e, r, i, o, s, a) { let { matched: c, parameters: u, consumedSegments: l, positionalParamSegments: v, remainingSegments: C } = lr(e, i, o); if (!c)
        return fe(e); typeof i.redirectTo == "string" && i.redirectTo[0] === "/" && (this.absoluteRedirectCount++, this.absoluteRedirectCount > Lo && (this.allowRedirects = !1)); let R = new H(o, u, Object.freeze(h({}, this.urlTree.queryParams)), this.urlTree.fragment, Er(i), D(i), i.component ?? i._loadedComponent ?? null, i, Or(i)), I = be(R, a, this.paramsInheritanceStrategy); return R.params = Object.freeze(I.params), R.data = Object.freeze(I.data), this.applyRedirects.applyRedirectCommands(l, i.redirectTo, v, R, n).pipe(L(O => this.applyRedirects.lineralizeSegments(i, O)), q(O => this.processSegment(n, r, e, O.concat(C), s, !1, a))); }
    matchSegmentAgainstRoute(n, e, r, i, o, s) { let a = dn(e, r, i, n, this.urlSerializer); return r.path === "**" && (e.children = {}), a.pipe(L(c => c.matched ? (n = r._injector ?? n, this.getChildConfig(n, r, i).pipe(L(({ routes: u }) => { let l = r._loadedInjector ?? n, { parameters: v, consumedSegments: C, remainingSegments: R } = c, I = new H(C, v, Object.freeze(h({}, this.urlTree.queryParams)), this.urlTree.fragment, Er(r), D(r), r.component ?? r._loadedComponent ?? null, r, Or(r)), j = be(I, s, this.paramsInheritanceStrategy); I.params = Object.freeze(j.params), I.data = Object.freeze(j.data); let { segmentGroup: O, slicedSegments: Y } = wt(e, C, R, u); if (Y.length === 0 && O.hasChildren())
        return this.processChildren(l, u, O, I).pipe(S(he => new b(I, he))); if (u.length === 0 && Y.length === 0)
        return p(new b(I, [])); let Ye = D(r) === o; return this.processSegment(l, u, O, Y, Ye ? f : o, !0, I).pipe(S(he => new b(I, he instanceof b ? [he] : []))); }))) : fe(e))); }
    getChildConfig(n, e, r) { return e.children ? p({ routes: e.children, injector: n }) : e.loadChildren ? e._loadedRoutes !== void 0 ? p({ routes: e._loadedRoutes, injector: e._loadedInjector }) : an(n, e, r, this.urlSerializer).pipe(q(i => i ? z(this.configLoader.loadChildren(n, e)).pipe(N(o => { e._loadedRoutes = o.routes, e._loadedInjector = o.injector; })) : Po(e))) : p({ routes: [], injector: n }); }
};
function xo(t) { t.sort((n, e) => n.value.outlet === f ? -1 : e.value.outlet === f ? 1 : n.value.outlet.localeCompare(e.value.outlet)); }
function jo(t) { let n = t.value.routeConfig; return n && n.path === ""; }
function pn(t) { let n = [], e = new Set; for (let r of t) {
    if (!jo(r)) {
        n.push(r);
        continue;
    }
    let i = n.find(o => r.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...r.children), e.add(i)) : n.push(r);
} for (let r of e) {
    let i = pn(r.children);
    n.push(new b(r.value, i));
} return n.filter(r => !e.has(r)); }
function Er(t) { return t.data || {}; }
function Or(t) { return t.resolve || {}; }
var gn = new re("", { factory: () => To });
function $o() { return Xn([{ provide: gn, useValue: _o }]); }
function ko(t, n, e, r, i, o, s) { let a = t.get(gn); return q(c => p(c).pipe(L(u => a(t, n, e, r, u.extractedUrl, i, o, s)), S(({ state: u, tree: l }) => $(h({}, c), { targetSnapshot: u, urlAfterRedirects: l })))); }
function zo(t, n) { return q(e => { let { targetSnapshot: r, guards: { canActivateChecks: i } } = e; if (!i.length)
    return p(e); let o = new Set(i.map(c => c.route)), s = new Set; for (let c of o)
    if (!s.has(c))
        for (let u of vn(c))
            s.add(u); let a = 0; return z(s).pipe(it(c => o.has(c) ? Fo(c, r, t, n) : (c.data = be(c, c.parent, t).resolve, p(void 0))), N(() => a++), Ur(1), q(c => a === s.size ? p(e) : X)); }); }
function vn(t) { let n = t.children.map(e => vn(e)).flat(); return [t, ...n]; }
function Fo(t, n, e, r) { let i = t.routeConfig, o = t._resolve; return i?.title !== void 0 && !en(i) && (o[Be] = i.title), tr(() => (t.data = be(t, t.parent, e).resolve, qo(o, t, n, r).pipe(S(s => (t._resolvedData = s, t.data = h(h({}, t.data), s), null))))); }
function qo(t, n, e, r) { let i = zt(t); if (i.length === 0)
    return p({}); let o = {}; return z(i).pipe(q(s => Bo(t[s], n, e, r).pipe(ne(), N(a => { if (a instanceof Ae)
    throw St(new K, a); o[s] = a; }))), Ur(1), S(() => o), Pe(s => ur(s) ? X : It(s))); }
function Bo(t, n, e, r) { let i = Me(n) ?? r, o = Ee(t, i), s = o.resolve ? o.resolve(n, e) : x(i, () => o(n, e)); return ie(s); }
function xt(t) { return L(n => { let e = t(n); return e ? z(e).pipe(S(() => n)) : p(n); }); }
var dr = (() => { class t {
    buildTitle(e) { let r, i = e.root; for (; i !== void 0;)
        r = this.getResolvedTitleForRoute(i) ?? r, i = i.children.find(o => o.outlet === f); return r; }
    getResolvedTitleForRoute(e) { return e.data[Be]; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => g(mn), providedIn: "root" });
} return t; })(), mn = (() => { class t extends dr {
    title;
    constructor(e) { super(), this.title = e; }
    updateTitle(e) { let r = this.buildTitle(e); r !== void 0 && this.title.setTitle(r); }
    static \u0275fac = function (r) { return new (r || t)(y.\u0275\u0275inject(_r.Title)); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Z = new re("", { factory: () => ({}) }), se = new re(""), At = (() => { class t {
    componentLoaders = new WeakMap;
    childrenLoaders = new WeakMap;
    onLoadStartListener;
    onLoadEndListener;
    compiler = g(Jn);
    loadComponent(e, r) { return w(this, null, function* () { if (this.componentLoaders.get(r))
        return this.componentLoaders.get(r); if (r._loadedComponent)
        return Promise.resolve(r._loadedComponent); this.onLoadStartListener && this.onLoadStartListener(r); let i = w(this, null, function* () { try {
        let o = yield $r(x(e, () => r.loadComponent())), s = yield Sn(Rn(o));
        return this.onLoadEndListener && this.onLoadEndListener(r), r._loadedComponent = s, s;
    }
    finally {
        this.componentLoaders.delete(r);
    } }); return this.componentLoaders.set(r, i), i; }); }
    loadChildren(e, r) { if (this.childrenLoaders.get(r))
        return this.childrenLoaders.get(r); if (r._loadedRoutes)
        return Promise.resolve({ routes: r._loadedRoutes, injector: r._loadedInjector }); this.onLoadStartListener && this.onLoadStartListener(r); let i = w(this, null, function* () { try {
        let o = yield yn(r, this.compiler, e, this.onLoadEndListener);
        return r._loadedRoutes = o.routes, r._loadedInjector = o.injector, o;
    }
    finally {
        this.childrenLoaders.delete(r);
    } }); return this.childrenLoaders.set(r, i), i; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function yn(t, n, e, r) { return w(this, null, function* () { let i = yield $r(x(e, () => t.loadChildren())), o = yield Sn(Rn(i)), s; o instanceof ei || Array.isArray(o) ? s = o : s = yield n.compileModuleAsync(o), r && r(t); let a, c, u = !1; return Array.isArray(s) ? (c = s, u = !0) : (a = s.create(e).injector, c = a.get(se, [], { optional: !0, self: !0 }).flat()), { routes: c.map(ar), injector: a }; }); }
function Vo(t) { return t && typeof t == "object" && "default" in t; }
function Rn(t) { return Vo(t) ? t.default : t; }
function Sn(t) { return w(this, null, function* () { return t; }); }
var Tt = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => g(Ho), providedIn: "root" });
} return t; })(), Ho = (() => { class t {
    shouldProcessUrl(e) { return !0; }
    extract(e) { return e; }
    merge(e, r) { return e; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), hr = new re(""), fr = new re("");
function Cn(t, n, e) { let r = t.get(fr), i = t.get(Vn); if (!i.startViewTransition || r.skipNextTransition)
    return r.skipNextTransition = !1, new Promise(u => setTimeout(u)); let o, s = new Promise(u => { o = u; }), a = i.startViewTransition(() => (o(), Go(t))); a.ready.catch(u => { }), a.finished.catch(u => { }); let { onViewTransitionCreated: c } = r; return c && x(t, () => c({ transition: a, from: n, to: e })), s; }
function Go(t) { return new Promise(n => { ti({ read: () => setTimeout(n) }, { injector: t }); }); }
var Wo = () => { }, Mt = new re(""), We = (() => { class t {
    currentNavigation = Sr(null, { equal: () => !1 });
    currentTransition = null;
    lastSuccessfulNavigation = Sr(null);
    events = new jt;
    transitionAbortWithErrorSubject = new jt;
    configLoader = g(At);
    environmentInjector = g(Dr);
    destroyRef = g(ri);
    urlSerializer = g(oe);
    rootContexts = g(le);
    location = g(er);
    inputBindingEnabled = g(Ve, { optional: !0 }) !== null;
    titleStrategy = g(dr);
    options = g(Z, { optional: !0 }) || {};
    paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
    urlHandlingStrategy = g(Tt);
    createViewTransition = g(hr, { optional: !0 });
    navigationErrorHandler = g(Mt, { optional: !0 });
    navigationId = 0;
    get hasRequestedNavigation() { return this.navigationId !== 0; }
    transitions;
    afterPreactivation = () => p(void 0);
    rootComponentType = null;
    destroyed = !1;
    constructor() { let e = i => this.events.next(new ht(i)), r = i => this.events.next(new ft(i)); this.configLoader.onLoadEndListener = r, this.configLoader.onLoadStartListener = e, this.destroyRef.onDestroy(() => { this.destroyed = !0; }); }
    complete() { this.transitions?.complete(); }
    handleNavigationRequest(e) { let r = ++this.navigationId; Ne(() => { this.transitions?.next($(h({}, e), { extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl), targetSnapshot: null, targetRouterState: null, guards: { canActivateChecks: [], canDeactivateChecks: [] }, guardsResult: null, id: r })); }); }
    setupNavigations(e) { return this.transitions = new k(null), this.transitions.pipe(ge(r => r !== null), L(r => { let i = !1, o = new AbortController; return p(r).pipe(L(s => { if (this.navigationId > r.id)
        return this.cancelNavigationTransition(r, "", E.SupersededByNewNavigation), X; this.currentTransition = r; let a = this.lastSuccessfulNavigation(); this.currentNavigation.set({ id: s.id, initialUrl: s.rawUrl, extractedUrl: s.extractedUrl, targetBrowserUrl: typeof s.extras.browserUrl == "string" ? this.urlSerializer.parse(s.extras.browserUrl) : s.extras.browserUrl, trigger: s.source, extras: s.extras, previousNavigation: a ? $(h({}, a), { previousNavigation: null }) : null, abort: () => o.abort() }); let c = !e.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(), u = s.extras.onSameUrlNavigation ?? e.onSameUrlNavigation; if (!c && u !== "reload")
        return this.events.next(new G(s.id, this.urlSerializer.serialize(s.rawUrl), "", Re.IgnoredSameUrlNavigation)), s.resolve(!1), X; if (this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))
        return p(s).pipe(L(l => (this.events.next(new te(l.id, this.urlSerializer.serialize(l.extractedUrl), l.source, l.restoredState)), l.id !== this.navigationId ? X : Promise.resolve(l))), ko(this.environmentInjector, this.configLoader, this.rootComponentType, e.config, this.urlSerializer, this.paramsInheritanceStrategy, o.signal), N(l => { r.targetSnapshot = l.targetSnapshot, r.urlAfterRedirects = l.urlAfterRedirects, this.currentNavigation.update(C => (C.finalUrl = l.urlAfterRedirects, C)); let v = new je(l.id, this.urlSerializer.serialize(l.extractedUrl), this.urlSerializer.serialize(l.urlAfterRedirects), l.targetSnapshot); this.events.next(v); })); if (c && this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)) {
        let { id: l, extractedUrl: v, source: C, restoredState: R, extras: I } = s, j = new te(l, this.urlSerializer.serialize(v), C, R);
        this.events.next(j);
        let O = Xr(this.rootComponentType).snapshot;
        return this.currentTransition = r = $(h({}, s), { targetSnapshot: O, urlAfterRedirects: v, extras: $(h({}, I), { skipLocationChange: !1, replaceUrl: !1 }) }), this.currentNavigation.update(Y => (Y.finalUrl = v, Y)), p(r);
    }
    else
        return this.events.next(new G(s.id, this.urlSerializer.serialize(s.extractedUrl), "", Re.IgnoredByUrlHandlingStrategy)), s.resolve(!1), X; }), N(s => { let a = new ct(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects), s.targetSnapshot); this.events.next(a); }), S(s => (this.currentTransition = r = $(h({}, s), { guards: Ki(s.targetSnapshot, s.currentSnapshot, this.rootContexts) }), r)), so(this.environmentInjector, s => this.events.next(s)), N(s => { if (r.guardsResult = s.guardsResult, s.guardsResult && typeof s.guardsResult != "boolean")
        throw St(this.urlSerializer, s.guardsResult); let a = new ut(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects), s.targetSnapshot, !!s.guardsResult); this.events.next(a); }), ge(s => s.guardsResult ? !0 : (this.cancelNavigationTransition(s, "", E.GuardRejected), !1)), xt(s => { if (s.guards.canActivateChecks.length !== 0)
        return p(s).pipe(N(a => { let c = new lt(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); this.events.next(c); }), L(a => { let c = !1; return p(a).pipe(zo(this.paramsInheritanceStrategy, this.environmentInjector), N({ next: () => c = !0, complete: () => { c || this.cancelNavigationTransition(a, "", E.NoDataFromResolver); } })); }), N(a => { let c = new dt(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); this.events.next(c); })); }), xt(s => { let a = u => { let l = []; if (u.routeConfig?._loadedComponent)
        u.component = u.routeConfig?._loadedComponent;
    else if (u.routeConfig?.loadComponent) {
        let v = Me(u) ?? this.environmentInjector;
        l.push(this.configLoader.loadComponent(v, u.routeConfig).then(C => { u.component = C; }));
    } for (let v of u.children)
        l.push(...a(v)); return l; }, c = a(s.targetSnapshot.root); return c.length === 0 ? p(s) : z(Promise.all(c).then(() => s)); }), xt(() => this.afterPreactivation()), L(() => { let { currentSnapshot: s, targetSnapshot: a } = r, c = this.createViewTransition?.(this.environmentInjector, s.root, a.root); return c ? z(c).pipe(S(() => r)) : p(r); }), S(s => { let a = Vi(e.routeReuseStrategy, s.targetSnapshot, s.currentRouterState); return this.currentTransition = r = $(h({}, s), { targetRouterState: a }), this.currentNavigation.update(c => (c.targetRouterState = a, c)), r; }), N(() => { this.events.next(new $e); }), Qi(this.rootContexts, e.routeReuseStrategy, s => this.events.next(s), this.inputBindingEnabled), Le(1), $t(on(o.signal).pipe(ge(() => !i && !r.targetRouterState), N(() => { this.cancelNavigationTransition(r, o.signal.reason + "", E.Aborted); }))), N({ next: s => { i = !0, this.currentNavigation.update(a => (a.abort = Wo, a)), this.lastSuccessfulNavigation.set(Ne(this.currentNavigation)), this.events.next(new _(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects))), this.titleStrategy?.updateTitle(s.targetRouterState.snapshot), s.resolve(!0); }, complete: () => { i = !0; } }), $t(this.transitionAbortWithErrorSubject.pipe(N(s => { throw s; }))), vi(() => { o.abort(), i || this.cancelNavigationTransition(r, "", E.SupersededByNewNavigation), this.currentTransition?.id === r.id && (this.currentNavigation.set(null), this.currentTransition = null); }), Pe(s => { if (this.destroyed)
        return r.resolve(!1), X; if (i = !0, nn(s))
        this.events.next(new V(r.id, this.urlSerializer.serialize(r.extractedUrl), s.message, s.cancellationCode)), Wi(s) ? this.events.next(new we(s.url, s.navigationBehaviorOptions)) : r.resolve(!1);
    else {
        let a = new Se(r.id, this.urlSerializer.serialize(r.extractedUrl), s, r.targetSnapshot ?? void 0);
        try {
            let c = x(this.environmentInjector, () => this.navigationErrorHandler?.(a));
            if (c instanceof Ae) {
                let { message: u, cancellationCode: l } = St(this.urlSerializer, c);
                this.events.next(new V(r.id, this.urlSerializer.serialize(r.extractedUrl), u, l)), this.events.next(new we(c.redirectTo, c.navigationBehaviorOptions));
            }
            else
                throw this.events.next(a), s;
        }
        catch (c) {
            this.options.resolveNavigationPromiseOnError ? r.resolve(!1) : r.reject(c);
        }
    } return X; })); })); }
    cancelNavigationTransition(e, r, i) { let o = new V(e.id, this.urlSerializer.serialize(e.extractedUrl), r, i); this.events.next(o), e.resolve(!1); }
    isUpdatingInternalState() { return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString(); }
    isUpdatedBrowserUrl() { let e = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))), r = Ne(this.currentNavigation), i = r?.targetBrowserUrl ?? r?.extractedUrl; return e.toString() !== i?.toString() && !r?.extras.skipLocationChange; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Qo(t) { return t !== me; }
var wn = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => g(Ko), providedIn: "root" });
} return t; })(), bt = class {
    shouldDetach(n) { return !1; }
    store(n, e) { }
    shouldAttach(n) { return !1; }
    retrieve(n) { return null; }
    shouldReuseRoute(n, e) { return n.routeConfig === e.routeConfig; }
}, Ko = (() => { class t extends bt {
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = y.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Et = (() => { class t {
    urlSerializer = g(oe);
    options = g(Z, { optional: !0 }) || {};
    canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
    location = g(er);
    urlHandlingStrategy = g(Tt);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    currentUrlTree = new P;
    getCurrentUrlTree() { return this.currentUrlTree; }
    rawUrlTree = this.currentUrlTree;
    getRawUrlTree() { return this.rawUrlTree; }
    createBrowserPath({ finalUrl: e, initialUrl: r, targetBrowserUrl: i }) { let o = e !== void 0 ? this.urlHandlingStrategy.merge(e, r) : r, s = i ?? o; return s instanceof P ? this.urlSerializer.serialize(s) : s; }
    commitTransition({ targetRouterState: e, finalUrl: r, initialUrl: i }) { r && e ? (this.currentUrlTree = r, this.rawUrlTree = this.urlHandlingStrategy.merge(r, i), this.routerState = e) : this.rawUrlTree = i; }
    routerState = Xr(null);
    getRouterState() { return this.routerState; }
    stateMemento = this.createStateMemento();
    updateStateMemento() { this.stateMemento = this.createStateMemento(); }
    createStateMemento() { return { rawUrlTree: this.rawUrlTree, currentUrlTree: this.currentUrlTree, routerState: this.routerState }; }
    resetInternalState({ finalUrl: e }) { this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => g(pr), providedIn: "root" });
} return t; })(), pr = (() => { class t extends Et {
    currentPageId = 0;
    lastSuccessfulId = -1;
    restoredState() { return this.location.getState(); }
    get browserPageId() { return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState()?.\u0275routerPageId ?? this.currentPageId; }
    registerNonRouterCurrentEntryChangeListener(e) { return this.location.subscribe(r => { r.type === "popstate" && setTimeout(() => { e(r.url, r.state, "popstate"); }); }); }
    handleRouterEvent(e, r) { e instanceof te ? this.updateStateMemento() : e instanceof G ? this.commitTransition(r) : e instanceof je ? this.urlUpdateStrategy === "eager" && (r.extras.skipLocationChange || this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof $e ? (this.commitTransition(r), this.urlUpdateStrategy === "deferred" && !r.extras.skipLocationChange && this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof V && e.code !== E.SupersededByNewNavigation && e.code !== E.Redirect ? this.restoreHistory(r) : e instanceof Se ? this.restoreHistory(r, !0) : e instanceof _ && (this.lastSuccessfulId = e.id, this.currentPageId = this.browserPageId); }
    setBrowserUrl(e, { extras: r, id: i }) { let { replaceUrl: o, state: s } = r; if (this.location.isCurrentPathEqualTo(e) || o) {
        let a = this.browserPageId, c = h(h({}, s), this.generateNgRouterState(i, a));
        this.location.replaceState(e, "", c);
    }
    else {
        let a = h(h({}, s), this.generateNgRouterState(i, this.browserPageId + 1));
        this.location.go(e, "", a);
    } }
    restoreHistory(e, r = !1) { if (this.canceledNavigationResolution === "computed") {
        let i = this.browserPageId, o = this.currentPageId - i;
        o !== 0 ? this.location.historyGo(o) : this.getCurrentUrlTree() === e.finalUrl && o === 0 && (this.resetInternalState(e), this.resetUrlToCurrentUrlTree());
    }
    else
        this.canceledNavigationResolution === "replace" && (r && this.resetInternalState(e), this.resetUrlToCurrentUrlTree()); }
    resetUrlToCurrentUrlTree() { this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)); }
    generateNgRouterState(e, r) { return this.canceledNavigationResolution === "computed" ? { navigationId: e, \u0275routerPageId: r } : { navigationId: e }; }
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = y.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Ot(t, n) { t.events.pipe(ge(e => e instanceof _ || e instanceof V || e instanceof Se || e instanceof G), S(e => e instanceof _ || e instanceof G ? 0 : (e instanceof V ? e.code === E.Redirect || e.code === E.SupersededByNewNavigation : !1) ? 2 : 1), ge(e => e !== 2), Le(1)).subscribe(() => { n(); }); }
var Zo = { paths: "exact", fragment: "ignored", matrixParams: "ignored", queryParams: "exact" }, Yo = { paths: "subset", fragment: "ignored", matrixParams: "ignored", queryParams: "subset" }, Q = (() => { class t {
    get currentUrlTree() { return this.stateManager.getCurrentUrlTree(); }
    get rawUrlTree() { return this.stateManager.getRawUrlTree(); }
    disposed = !1;
    nonRouterCurrentEntryChangeSubscription;
    console = g(ni);
    stateManager = g(Et);
    options = g(Z, { optional: !0 }) || {};
    pendingTasks = g(ii);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    navigationTransitions = g(We);
    urlSerializer = g(oe);
    location = g(er);
    urlHandlingStrategy = g(Tt);
    injector = g(Dr);
    _events = new jt;
    get events() { return this._events; }
    get routerState() { return this.stateManager.getRouterState(); }
    navigated = !1;
    routeReuseStrategy = g(wn);
    onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
    config = g(se, { optional: !0 })?.flat() ?? [];
    componentInputBindingEnabled = !!g(Ve, { optional: !0 });
    currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
    constructor() { this.resetConfig(this.config), this.navigationTransitions.setupNavigations(this).subscribe({ error: e => { this.console.warn(e); } }), this.subscribeToNavigationEvents(); }
    eventsSubscription = new di;
    subscribeToNavigationEvents() { let e = this.navigationTransitions.events.subscribe(r => { try {
        let i = this.navigationTransitions.currentTransition, o = Ne(this.navigationTransitions.currentNavigation);
        if (i !== null && o !== null) {
            if (this.stateManager.handleRouterEvent(r, o), r instanceof V && r.code !== E.Redirect && r.code !== E.SupersededByNewNavigation)
                this.navigated = !0;
            else if (r instanceof _)
                this.navigated = !0;
            else if (r instanceof we) {
                let s = r.navigationBehaviorOptions, a = this.urlHandlingStrategy.merge(r.url, i.currentRawUrl), c = h({ browserUrl: i.extras.browserUrl, info: i.extras.info, skipLocationChange: i.extras.skipLocationChange, replaceUrl: i.extras.replaceUrl || this.urlUpdateStrategy === "eager" || Qo(i.source) }, s);
                this.scheduleNavigation(a, me, null, c, { resolve: i.resolve, reject: i.reject, promise: i.promise });
            }
        }
        Fi(r) && this._events.next(r);
    }
    catch (i) {
        this.navigationTransitions.transitionAbortWithErrorSubject.next(i);
    } }); this.eventsSubscription.add(e); }
    resetRootComponentType(e) { this.routerState.root.component = e, this.navigationTransitions.rootComponentType = e; }
    initialNavigation() { this.setUpLocationChangeListener(), this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), me, this.stateManager.restoredState()); }
    setUpLocationChangeListener() { this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((e, r, i) => { this.navigateToSyncWithBrowser(e, i, r); }); }
    navigateToSyncWithBrowser(e, r, i) { let o = { replaceUrl: !0 }, s = i?.navigationId ? i : null; if (i) {
        let c = h({}, i);
        delete c.navigationId, delete c.\u0275routerPageId, Object.keys(c).length !== 0 && (o.state = c);
    } let a = this.parseUrl(e); this.scheduleNavigation(a, r, s, o).catch(c => { this.disposed || this.injector.get(oi)(c); }); }
    get url() { return this.serializeUrl(this.currentUrlTree); }
    getCurrentNavigation() { return Ne(this.navigationTransitions.currentNavigation); }
    get lastSuccessfulNavigation() { return this.navigationTransitions.lastSuccessfulNavigation; }
    resetConfig(e) { this.config = e.map(ar), this.navigated = !1; }
    ngOnDestroy() { this.dispose(); }
    dispose() { this._events.unsubscribe(), this.navigationTransitions.complete(), this.nonRouterCurrentEntryChangeSubscription && (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(), this.nonRouterCurrentEntryChangeSubscription = void 0), this.disposed = !0, this.eventsSubscription.unsubscribe(); }
    createUrlTree(e, r = {}) { let { relativeTo: i, queryParams: o, fragment: s, queryParamsHandling: a, preserveFragment: c } = r, u = c ? this.currentUrlTree.fragment : s, l = null; switch (a ?? this.options.defaultQueryParamsHandling) {
        case "merge":
            l = h(h({}, this.currentUrlTree.queryParams), o);
            break;
        case "preserve":
            l = this.currentUrlTree.queryParams;
            break;
        default: l = o || null;
    } l !== null && (l = this.removeEmptyProps(l)); let v; try {
        let C = i ? i.snapshot : this.routerState.snapshot.root;
        v = Wr(C);
    }
    catch {
        (typeof e[0] != "string" || e[0][0] !== "/") && (e = []), v = this.currentUrlTree.root;
    } return Qr(v, e, l, u ?? null, this.urlSerializer); }
    navigateByUrl(e, r = { skipLocationChange: !1 }) { let i = ee(e) ? e : this.parseUrl(e), o = this.urlHandlingStrategy.merge(i, this.rawUrlTree); return this.scheduleNavigation(o, me, null, r); }
    navigate(e, r = { skipLocationChange: !1 }) { return Xo(e), this.navigateByUrl(this.createUrlTree(e, r), r); }
    serializeUrl(e) { return this.urlSerializer.serialize(e); }
    parseUrl(e) { try {
        return this.urlSerializer.parse(e);
    }
    catch {
        return this.console.warn(si(4018, !1)), this.urlSerializer.parse("/");
    } }
    isActive(e, r) { let i; if (r === !0 ? i = h({}, Zo) : r === !1 ? i = h({}, Yo) : i = r, ee(e))
        return Cr(this.currentUrlTree, e, i); let o = this.parseUrl(e); return Cr(this.currentUrlTree, o, i); }
    removeEmptyProps(e) { return Object.entries(e).reduce((r, [i, o]) => (o != null && (r[i] = o), r), {}); }
    scheduleNavigation(e, r, i, o, s) { if (this.disposed)
        return Promise.resolve(!1); let a, c, u; s ? (a = s.resolve, c = s.reject, u = s.promise) : u = new Promise((v, C) => { a = v, c = C; }); let l = this.pendingTasks.add(); return Ot(this, () => { queueMicrotask(() => this.pendingTasks.remove(l)); }), this.navigationTransitions.handleNavigationRequest({ source: r, restoredState: i, currentUrlTree: this.currentUrlTree, currentRawUrl: this.currentUrlTree, rawUrl: e, extras: o, resolve: a, reject: c, promise: u, currentSnapshot: this.routerState.snapshot, currentRouterState: this.routerState }), u.catch(v => Promise.reject(v)); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Xo(t) { for (let n = 0; n < t.length; n++)
    if (t[n] == null)
        throw new M(4008, !1); }
import * as bn from "@angular/common";
import { PlatformNavigation as Jo, Location as In, \u0275NavigationAdapterForLocation as es, LOCATION_INITIALIZED as ts, ViewportScroller as An, LocationStrategy as mr, HashLocationStrategy as Tn, PathLocationStrategy as rs } from "@angular/common";
import * as d from "@angular/core";
import { signal as ns, untracked as is, inject as T, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as os, HostAttributeToken as ss, \u0275RuntimeError as ra, booleanAttribute as gr, EventEmitter as as, createEnvironmentInjector as cs, InjectionToken as Ke, makeEnvironmentProviders as us, APP_BOOTSTRAP_LISTENER as Mn, Injector as En, ApplicationRef as ls, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as ds, provideAppInitializer as On, \u0275performanceMarkFeature as hs, ENVIRONMENT_INITIALIZER as fa, NgZone as Dn } from "@angular/core";
import { Subject as Nn, of as de, from as Dt } from "rxjs";
import { mergeAll as Nt, catchError as fs, filter as ps, concatMap as gs, mergeMap as vs } from "rxjs/operators";
var Pt = (() => { class t {
    router;
    route;
    tabIndexAttribute;
    renderer;
    el;
    locationStrategy;
    reactiveHref = ns(null);
    get href() { return is(this.reactiveHref); }
    set href(e) { this.reactiveHref.set(e); }
    target;
    queryParams;
    fragment;
    queryParamsHandling;
    state;
    info;
    relativeTo;
    isAnchorElement;
    subscription;
    onChanges = new Nn;
    applicationErrorHandler = T(os);
    options = T(Z, { optional: !0 });
    constructor(e, r, i, o, s, a) { this.router = e, this.route = r, this.tabIndexAttribute = i, this.renderer = o, this.el = s, this.locationStrategy = a, this.reactiveHref.set(T(new ss("href"), { optional: !0 })); let c = s.nativeElement.tagName?.toLowerCase(); this.isAnchorElement = c === "a" || c === "area" || !!(typeof customElements == "object" && customElements.get(c)?.observedAttributes?.includes?.("href")), this.isAnchorElement ? this.setTabIndexIfNotOnNativeEl("0") : this.subscribeToNavigationEventsIfNecessary(); }
    subscribeToNavigationEventsIfNecessary() { if (this.subscription !== void 0 || !this.isAnchorElement)
        return; let e = this.preserveFragment, r = i => i === "merge" || i === "preserve"; e ||= r(this.queryParamsHandling), e ||= !this.queryParamsHandling && !r(this.options?.defaultQueryParamsHandling), e && (this.subscription = this.router.events.subscribe(i => { i instanceof _ && this.updateHref(); })); }
    preserveFragment = !1;
    skipLocationChange = !1;
    replaceUrl = !1;
    setTabIndexIfNotOnNativeEl(e) { this.tabIndexAttribute != null || this.isAnchorElement || this.applyAttributeValue("tabindex", e); }
    ngOnChanges(e) { this.isAnchorElement && (this.updateHref(), this.subscribeToNavigationEventsIfNecessary()), this.onChanges.next(this); }
    routerLinkInput = null;
    set routerLink(e) { e == null ? (this.routerLinkInput = null, this.setTabIndexIfNotOnNativeEl(null)) : (ee(e) ? this.routerLinkInput = e : this.routerLinkInput = Array.isArray(e) ? e : [e], this.setTabIndexIfNotOnNativeEl("0")); }
    onClick(e, r, i, o, s) { let a = this.urlTree; if (a === null || this.isAnchorElement && (e !== 0 || r || i || o || s || typeof this.target == "string" && this.target != "_self"))
        return !0; let c = { skipLocationChange: this.skipLocationChange, replaceUrl: this.replaceUrl, state: this.state, info: this.info }; return this.router.navigateByUrl(a, c)?.catch(u => { this.applicationErrorHandler(u); }), !this.isAnchorElement; }
    ngOnDestroy() { this.subscription?.unsubscribe(); }
    updateHref() { let e = this.urlTree; this.reactiveHref.set(e !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)) ?? "" : null); }
    applyAttributeValue(e, r) { let i = this.renderer, o = this.el.nativeElement; r !== null ? i.setAttribute(o, e, r) : i.removeAttribute(o, e); }
    get urlTree() { return this.routerLinkInput === null ? null : ee(this.routerLinkInput) ? this.routerLinkInput : this.router.createUrlTree(this.routerLinkInput, { relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route, queryParams: this.queryParams, fragment: this.fragment, queryParamsHandling: this.queryParamsHandling, preserveFragment: this.preserveFragment }); }
    static \u0275fac = function (r) { return new (r || t)(d.\u0275\u0275directiveInject(Q), d.\u0275\u0275directiveInject(W), d.\u0275\u0275injectAttribute("tabindex"), d.\u0275\u0275directiveInject(d.Renderer2), d.\u0275\u0275directiveInject(d.ElementRef), d.\u0275\u0275directiveInject(bn.LocationStrategy)); };
    static \u0275dir = d.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLink", ""]], hostVars: 2, hostBindings: function (r, i) { r & 1 && d.\u0275\u0275listener("click", function (s) { return i.onClick(s.button, s.ctrlKey, s.shiftKey, s.altKey, s.metaKey); }), r & 2 && d.\u0275\u0275attribute("href", i.reactiveHref(), d.\u0275\u0275sanitizeUrlOrResourceUrl)("target", i.target); }, inputs: { target: "target", queryParams: "queryParams", fragment: "fragment", queryParamsHandling: "queryParamsHandling", state: "state", info: "info", relativeTo: "relativeTo", preserveFragment: [2, "preserveFragment", "preserveFragment", gr], skipLocationChange: [2, "skipLocationChange", "skipLocationChange", gr], replaceUrl: [2, "replaceUrl", "replaceUrl", gr], routerLink: "routerLink" }, features: [d.\u0275\u0275NgOnChangesFeature] });
} return t; })(), ms = (() => { class t {
    router;
    element;
    renderer;
    cdr;
    links;
    classes = [];
    routerEventsSubscription;
    linkInputChangesSubscription;
    _isActive = !1;
    get isActive() { return this._isActive; }
    routerLinkActiveOptions = { exact: !1 };
    ariaCurrentWhenActive;
    isActiveChange = new as;
    link = T(Pt, { optional: !0 });
    constructor(e, r, i, o) { this.router = e, this.element = r, this.renderer = i, this.cdr = o, this.routerEventsSubscription = e.events.subscribe(s => { s instanceof _ && this.update(); }); }
    ngAfterContentInit() { de(this.links.changes, de(null)).pipe(Nt()).subscribe(e => { this.update(), this.subscribeToEachLinkOnChanges(); }); }
    subscribeToEachLinkOnChanges() { this.linkInputChangesSubscription?.unsubscribe(); let e = [...this.links.toArray(), this.link].filter(r => !!r).map(r => r.onChanges); this.linkInputChangesSubscription = Dt(e).pipe(Nt()).subscribe(r => { this._isActive !== this.isLinkActive(this.router)(r) && this.update(); }); }
    set routerLinkActive(e) { let r = Array.isArray(e) ? e : e.split(" "); this.classes = r.filter(i => !!i); }
    ngOnChanges(e) { this.update(); }
    ngOnDestroy() { this.routerEventsSubscription.unsubscribe(), this.linkInputChangesSubscription?.unsubscribe(); }
    update() { !this.links || !this.router.navigated || queueMicrotask(() => { let e = this.hasActiveLinks(); this.classes.forEach(r => { e ? this.renderer.addClass(this.element.nativeElement, r) : this.renderer.removeClass(this.element.nativeElement, r); }), e && this.ariaCurrentWhenActive !== void 0 ? this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString()) : this.renderer.removeAttribute(this.element.nativeElement, "aria-current"), this._isActive !== e && (this._isActive = e, this.cdr.markForCheck(), this.isActiveChange.emit(e)); }); }
    isLinkActive(e) { let r = ys(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact || !1; return i => { let o = i.urlTree; return o ? e.isActive(o, r) : !1; }; }
    hasActiveLinks() { let e = this.isLinkActive(this.router); return this.link && e(this.link) || this.links.some(e); }
    static \u0275fac = function (r) { return new (r || t)(d.\u0275\u0275directiveInject(Q), d.\u0275\u0275directiveInject(d.ElementRef), d.\u0275\u0275directiveInject(d.Renderer2), d.\u0275\u0275directiveInject(d.ChangeDetectorRef)); };
    static \u0275dir = d.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLinkActive", ""]], contentQueries: function (r, i, o) { if (r & 1 && d.\u0275\u0275contentQuery(o, Pt, 5), r & 2) {
            let s;
            d.\u0275\u0275queryRefresh(s = d.\u0275\u0275loadQuery()) && (i.links = s);
        } }, inputs: { routerLinkActiveOptions: "routerLinkActiveOptions", ariaCurrentWhenActive: "ariaCurrentWhenActive", routerLinkActive: "routerLinkActive" }, outputs: { isActiveChange: "isActiveChange" }, exportAs: ["routerLinkActive"], features: [d.\u0275\u0275NgOnChangesFeature] });
} return t; })();
function ys(t) { return !!t.paths; }
var Qe = class {
}, Rs = (() => { class t {
    preload(e, r) { return r().pipe(fs(() => de(null))); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Ss = (() => { class t {
    preload(e, r) { return de(null); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Pn = (() => { class t {
    router;
    injector;
    preloadingStrategy;
    loader;
    subscription;
    constructor(e, r, i, o) { this.router = e, this.injector = r, this.preloadingStrategy = i, this.loader = o; }
    setUpPreloading() { this.subscription = this.router.events.pipe(ps(e => e instanceof _), gs(() => this.preload())).subscribe(() => { }); }
    preload() { return this.processRoutes(this.injector, this.router.config); }
    ngOnDestroy() { this.subscription && this.subscription.unsubscribe(); }
    processRoutes(e, r) { let i = []; for (let o of r) {
        o.providers && !o._injector && (o._injector = cs(o.providers, e, `Route: ${o.path}`));
        let s = o._injector ?? e, a = o._loadedInjector ?? s;
        (o.loadChildren && !o._loadedRoutes && o.canLoad === void 0 || o.loadComponent && !o._loadedComponent) && i.push(this.preloadConfig(s, o)), (o.children || o._loadedRoutes) && i.push(this.processRoutes(a, o.children ?? o._loadedRoutes));
    } return Dt(i).pipe(Nt()); }
    preloadConfig(e, r) { return this.preloadingStrategy.preload(r, () => { let i; r.loadChildren && r.canLoad === void 0 ? i = Dt(this.loader.loadChildren(e, r)) : i = de(null); let o = i.pipe(vs(s => s === null ? de(void 0) : (r._loadedRoutes = s.routes, r._loadedInjector = s.injector, this.processRoutes(s.injector ?? e, s.routes)))); if (r.loadComponent && !r._loadedComponent) {
        let s = this.loader.loadComponent(e, r);
        return Dt([o, s]).pipe(Nt());
    }
    else
        return o; }); }
    static \u0275fac = function (r) { return new (r || t)(d.\u0275\u0275inject(Q), d.\u0275\u0275inject(d.EnvironmentInjector), d.\u0275\u0275inject(Qe), d.\u0275\u0275inject(At)); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), yr = new Ke(""), Un = (() => { class t {
    urlSerializer;
    transitions;
    viewportScroller;
    zone;
    options;
    routerEventsSubscription;
    scrollEventsSubscription;
    lastId = 0;
    lastSource = me;
    restoredId = 0;
    store = {};
    constructor(e, r, i, o, s = {}) { this.urlSerializer = e, this.transitions = r, this.viewportScroller = i, this.zone = o, this.options = s, s.scrollPositionRestoration ||= "disabled", s.anchorScrolling ||= "disabled"; }
    init() { this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents(); }
    createScrollEvents() { return this.transitions.events.subscribe(e => { e instanceof te ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = e.navigationTrigger, this.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof _ ? (this.lastId = e.id, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment)) : e instanceof G && e.code === Re.IgnoredSameUrlNavigation && (this.lastSource = void 0, this.restoredId = 0, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment)); }); }
    consumeScrollEvents() { return this.transitions.events.subscribe(e => { if (!(e instanceof Ce))
        return; let r = { behavior: "instant" }; e.position ? this.options.scrollPositionRestoration === "top" ? this.viewportScroller.scrollToPosition([0, 0], r) : this.options.scrollPositionRestoration === "enabled" && this.viewportScroller.scrollToPosition(e.position, r) : e.anchor && this.options.anchorScrolling === "enabled" ? this.viewportScroller.scrollToAnchor(e.anchor) : this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.scrollToPosition([0, 0]); }); }
    scheduleScrollEvent(e, r) { this.zone.runOutsideAngular(() => w(this, null, function* () { yield new Promise(i => { setTimeout(i), typeof requestAnimationFrame < "u" && requestAnimationFrame(i); }), this.zone.run(() => { this.transitions.events.next(new Ce(e, this.lastSource === "popstate" ? this.store[this.restoredId] : null, r)); }); })); }
    ngOnDestroy() { this.routerEventsSubscription?.unsubscribe(), this.scrollEventsSubscription?.unsubscribe(); }
    static \u0275fac = function (r) { d.\u0275\u0275invalidFactory(); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })();
var Cs = (() => { class t extends pr {
    navigation = T(Jo);
    registerNonRouterCurrentEntryChangeListener(e) { return this.location.subscribe(r => { if (r.type === "popstate") {
        let i = this.navigation.currentEntry?.getState();
        e(r.url, i, "popstate");
    } }); }
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = d.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function ws(t, ...n) { return us([{ provide: se, multi: !0, useValue: t }, [], { provide: W, useFactory: _n }, { provide: Mn, multi: !0, useFactory: Ln }, n.map(e => e.\u0275providers)]); }
function _n() { return T(Q).routerState.root; }
function F(t, n) { return { \u0275kind: t, \u0275providers: n }; }
function bs(t) { return [{ provide: se, multi: !0, useValue: t }, []]; }
function Is(t = {}) { return F(4, [{ provide: yr, useFactory: () => { let e = T(An), r = T(Dn), i = T(We), o = T(oe); return new Un(o, i, e, r, t); } }]); }
function As() { return F(4, [{ provide: Et, useExisting: Cs }, { provide: In, useClass: es }, []]); }
function Ln() { let t = T(En); return n => { let e = t.get(ls); if (n !== e.components[0])
    return; let r = t.get(Q), i = t.get(xn); t.get(Rr) === 1 && r.initialNavigation(), t.get(kn, null, { optional: !0 })?.setUpPreloading(), t.get(yr, null, { optional: !0 })?.init(), r.resetRootComponentType(e.componentTypes[0]), i.closed || (i.next(), i.complete(), i.unsubscribe()); }; }
var xn = new Ke("", { factory: () => new Nn }), Rr = new Ke("", { factory: () => 1 });
function jn() { let t = [{ provide: ds, useValue: !0 }, { provide: Rr, useValue: 0 }, On(() => { let n = T(En); return n.get(ts, Promise.resolve()).then(() => new Promise(r => { let i = n.get(Q), o = n.get(xn); Ot(i, () => { r(!0); }), n.get(We).afterPreactivation = () => (r(!0), o.closed ? de(void 0) : o), i.initialNavigation(); })); })]; return F(2, t); }
function $n() { let t = [On(() => { T(Q).setUpLocationChangeListener(); }), { provide: Rr, useValue: 2 }]; return F(3, t); }
function Ts() { let t = []; return t = [], F(1, t); }
var kn = new Ke("");
function zn(t) { return F(0, [{ provide: kn, useExisting: Pn }, { provide: Qe, useExisting: t }]); }
function Ms(t) { return F(5, [{ provide: Z, useValue: t }]); }
function Es() { return F(6, [{ provide: mr, useClass: Tn }]); }
function Os(t) { return F(7, [{ provide: Mt, useValue: t }]); }
function Fn() { return F(8, [or, { provide: Ve, useExisting: or }]); }
function qn(t) { hs("NgRouterViewTransitions"); let n = [{ provide: hr, useValue: Cn }, { provide: fr, useValue: h({ skipNextTransition: !!t?.skipInitialTransition }, t) }]; return F(9, n); }
var Bn = [In, { provide: oe, useClass: K }, Q, le, { provide: W, useFactory: _n }, At, []], Ds = (() => { class t {
    constructor() { }
    static forRoot(e, r) { return { ngModule: t, providers: [Bn, [], { provide: se, multi: !0, useValue: e }, [], r?.errorHandler ? { provide: Mt, useValue: r.errorHandler } : [], { provide: Z, useValue: r || {} }, r?.useHash ? Ps() : Us(), Ns(), r?.preloadingStrategy ? zn(r.preloadingStrategy).\u0275providers : [], r?.initialNavigation ? _s(r) : [], r?.bindToComponentInputs ? Fn().\u0275providers : [], r?.enableViewTransitions ? qn().\u0275providers : [], Ls()] }; }
    static forChild(e) { return { ngModule: t, providers: [{ provide: se, multi: !0, useValue: e }] }; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275mod = d.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = d.\u0275\u0275defineInjector({});
} return t; })();
function Ns() { return { provide: yr, useFactory: () => { let t = T(An), n = T(Dn), e = T(Z), r = T(We), i = T(oe); return e.scrollOffset && t.setOffset(e.scrollOffset), new Un(i, r, t, n, e); } }; }
function Ps() { return { provide: mr, useClass: Tn }; }
function Us() { return { provide: mr, useClass: rs }; }
function _s(t) { return [t.initialNavigation === "disabled" ? $n().\u0275providers : [], t.initialNavigation === "enabledBlocking" ? jn().\u0275providers : []]; }
var vr = new Ke("");
function Ls() { return [{ provide: vr, useFactory: Ln }, { provide: Mn, multi: !0, useExisting: vr }]; }
import { inject as Ze, Version as xs } from "@angular/core";
import "@angular/common";
import "rxjs";
import "rxjs/operators";
import "@angular/platform-browser";
function Ta(t) { return t.map(n => (...e) => Ze(n).canMatch(...e)); }
function Ma(t) { return t.map(n => (...e) => Ze(n).canActivate(...e)); }
function Ea(t) { return t.map(n => (...e) => Ze(n).canActivateChild(...e)); }
function Oa(t) { return t.map(n => (...e) => Ze(n).canDeactivate(...e)); }
function Da(t) { return (...n) => Ze(t).resolve(...n); }
var Na = new xs("21.0.3");
export { W as ActivatedRoute, H as ActivatedRouteSnapshot, mt as ActivationEnd, vt as ActivationStart, bt as BaseRouteReuseStrategy, gt as ChildActivationEnd, pt as ChildActivationStart, le as ChildrenOutletContexts, mn as DefaultTitleStrategy, K as DefaultUrlSerializer, A as EventType, ut as GuardsCheckEnd, ct as GuardsCheckStart, V as NavigationCancel, E as NavigationCancellationCode, _ as NavigationEnd, Se as NavigationError, G as NavigationSkipped, Re as NavigationSkippedCode, te as NavigationStart, Ss as NoPreloading, yt as OutletContext, f as PRIMARY_OUTLET, Rs as PreloadAllModules, Qe as PreloadingStrategy, Z as ROUTER_CONFIGURATION, vr as ROUTER_INITIALIZER, tn as ROUTER_OUTLET_DATA, se as ROUTES, Ae as RedirectCommand, dt as ResolveEnd, lt as ResolveStart, ft as RouteConfigLoadEnd, ht as RouteConfigLoadStart, wn as RouteReuseStrategy, Q as Router, U as RouterEvent, Pt as RouterLink, ms as RouterLinkActive, Pt as RouterLinkWithHref, Ds as RouterModule, ir as RouterOutlet, Pn as RouterPreloader, ke as RouterState, Ie as RouterStateSnapshot, je as RoutesRecognized, Ce as Scroll, dr as TitleStrategy, Tt as UrlHandlingStrategy, J as UrlSegment, m as UrlSegmentGroup, oe as UrlSerializer, P as UrlTree, Na as VERSION, ue as convertToParamMap, rr as createUrlTreeFromSnapshot, Lr as defaultUrlMatcher, Ma as mapToCanActivate, Ea as mapToCanActivateChild, Oa as mapToCanDeactivate, Ta as mapToCanMatch, Da as mapToResolve, ws as provideRouter, bs as provideRoutes, Fn as withComponentInputBinding, Ts as withDebugTracing, $n as withDisabledInitialNavigation, jn as withEnabledBlockingInitialNavigation, Es as withHashLocation, Is as withInMemoryScrolling, Os as withNavigationErrorHandler, zn as withPreloading, Ms as withRouterConfig, qn as withViewTransitions, sr as \u0275EmptyOutletComponent, Bn as \u0275ROUTER_PROVIDERS, Ot as \u0275afterNextNavigation, yn as \u0275loadChildren, $o as \u0275provideSometimesSyncRecognize, As as \u0275withPlatformNavigation };
/*! Bundled license information:

@angular/router/fesm2022/_router-chunk.mjs:
@angular/router/fesm2022/_router_module-chunk.mjs:
@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v21.0.3
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
