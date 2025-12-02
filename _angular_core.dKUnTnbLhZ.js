import { a as Rc, b as tt, f as Oc } from "@nf-internal/chunk-WZWF4PYY";
import { B as bc, E as Ac, F as Xp, G as eh, H as th, I as kc, J as nh, K as oh, L as gM, a as ae, b as O, c as Ni, f as Sc, g as wi, n as Wo, p as _i, r as Si, s as xt, w as bi, x as Kp, y as Jp } from "@nf-internal/chunk-RMDOR6EY";
import { a as Q, b as we, d as $e } from "@nf-internal/chunk-4CLCTAJ7";
import { BehaviorSubject as mM, Observable as yM, Subject as vM, Subscription as EM } from "rxjs";
import { setActiveConsumer as xn } from "@angular/core/primitives/signals";
import { isNotFound as IM } from "@angular/core/primitives/di";
var Ri = class {
    full;
    major;
    minor;
    patch;
    constructor(t) { this.full = t; let n = t.split("."); this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join("."); }
}, DM = new Ri("21.0.2");
var Li = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", C = class extends Error {
    code;
    constructor(t, n) { super(Xo(t, n)), this.code = t; }
};
function CM(e) { return `NG0${Math.abs(e)}`; }
function Xo(e, t) { return `${CM(e)}${t ? ": " + t : ""}`; }
var _e = globalThis;
function _(e) { for (let t in e)
    if (e[t] === _)
        return t; throw Error(""); }
function lh(e, t) { for (let n in t)
    t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]); }
function qe(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(qe).join(", ")}]`;
    if (e == null)
        return "" + e;
    let t = e.overriddenName || e.name;
    if (t)
        return `${t}`;
    let n = e.toString();
    if (n == null)
        return "" + n;
    let o = n.indexOf(`
`);
    return o >= 0 ? n.slice(0, o) : n;
}
function Fi(e, t) { return e ? t ? `${e} ${t}` : e : t || ""; }
function TM(e, t = 100) { if (!e || t < 1 || e.length <= t)
    return e; if (t == 1)
    return e.substring(0, 1) + "..."; let n = Math.round(t / 2); return e.substring(0, n) + "..." + e.substring(e.length - n); }
var MM = _({ __forward_ref__: _ });
function er(e) { return e.__forward_ref__ = er, e.toString = function () { return qe(this()); }, e; }
function P(e) { return tr(e) ? e() : e; }
function tr(e) { return typeof e == "function" && e.hasOwnProperty(MM) && e.__forward_ref__ === er; }
function uh(e, t, n) { e != t && zc(n, e, t, "=="); }
function zc(e, t, n, o) { throw new Error(`ASSERTION ERROR: ${e}` + (o == null ? "" : ` [Expected=> ${n} ${o} ${t} <=Actual]`)); }
function B(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
function nr(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function or(e) { return wM(e, Ln); }
function NM(e) { return or(e) !== null; }
function wM(e, t) { return e.hasOwnProperty(t) && e[t] || null; }
function _M(e) { let t = e?.[Ln] ?? null; return t || null; }
function Pc(e) { return e && e.hasOwnProperty(Qo) ? e[Qo] : null; }
var Ln = _({ \u0275prov: _ }), Qo = _({ \u0275inj: _ }), M = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(t, n) { this._desc = t, this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = B({ token: this, providedIn: n.providedIn || "root", factory: n.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, rh;
function SM(e) { zc("setInjectorProfilerContext should never be called in production mode"); let t = rh; return rh = e, t; }
function Qc(e) { return e && !!e.\u0275providers; }
var nn = _({ \u0275cmp: _ }), rr = _({ \u0275dir: _ }), ir = _({ \u0275pipe: _ }), ji = _({ \u0275mod: _ }), nt = _({ \u0275fac: _ }), on = _({ __NG_ELEMENT_ID__: _ }), ih = _({ __NG_ENV_ID__: _ });
function R(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function Se(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : R(e); }
var dh = _({ ngErrorCode: _ }), bM = _({ ngErrorMessage: _ }), AM = _({ ngTokenPath: _ });
function Zc(e, t) { return fh("", -200, t); }
function Vi(e, t) { throw new C(-201, !1); }
function fh(e, t, n) { let o = new C(t, e); return o[dh] = t, o[bM] = e, n && (o[AM] = n), o; }
function RM(e) { return e[dh]; }
var Lc;
function ph() { return Lc; }
function Ie(e) { let t = Lc; return Lc = e, t; }
function Yc(e, t, n) { let o = or(e); if (o && o.providedIn == "root")
    return o.value === void 0 ? o.value = o.factory() : o.value; if (n & 8)
    return null; if (t !== void 0)
    return t; Vi(e, "Injector"); }
var OM = {}, Jt = OM, Fc = "__NG_DI_FLAG__", jc = class {
    injector;
    constructor(t) { this.injector = t; }
    retrieve(t, n) { let o = Xt(n) || 0; try {
        return this.injector.get(t, o & 8 ? null : Jt, o);
    }
    catch (r) {
        if (Oc(r))
            return r;
        throw r;
    } }
};
function kM(e, t = 0) { let n = Rc(); if (n === void 0)
    throw new C(-203, !1); if (n === null)
    return Yc(e, void 0, t); {
    let o = xM(t), r = n.retrieve(e, o);
    if (Oc(r)) {
        if (o.optional)
            return null;
        throw r;
    }
    return r;
} }
function he(e, t = 0) { return (ph() || kM)(P(e), t); }
function Hi(e) { throw new C(202, !1); }
function E(e, t) { return he(e, Xt(t)); }
function Xt(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function xM(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function Vc(e) { let t = []; for (let n = 0; n < e.length; n++) {
    let o = P(e[n]);
    if (Array.isArray(o)) {
        if (o.length === 0)
            throw new C(900, !1);
        let r, i = 0;
        for (let s = 0; s < o.length; s++) {
            let a = o[s], c = PM(a);
            typeof c == "number" ? c === -1 ? r = a.token : i |= c : r = a;
        }
        t.push(he(r, i));
    }
    else
        t.push(he(o));
} return t; }
function Fn(e, t) { return e[Fc] = t, e.prototype[Fc] = t, e; }
function PM(e) { return e[Fc]; }
function Pt(e, t) { let n = e.hasOwnProperty(nt); return n ? e[nt] : null; }
function hh(e, t, n) { if (e.length !== t.length)
    return !1; for (let o = 0; o < e.length; o++) {
    let r = e[o], i = t[o];
    if (n && (r = n(r), i = n(i)), i !== r)
        return !1;
} return !0; }
function We(e) { return e.flat(Number.POSITIVE_INFINITY); }
function Bi(e, t) { e.forEach(n => Array.isArray(n) ? Bi(n, t) : t(n)); }
function Kc(e, t, n) { t >= e.length ? e.push(n) : e.splice(t, 0, n); }
function sr(e, t) { return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]; }
function ar(e, t) { let n = []; for (let o = 0; o < e; o++)
    n.push(t); return n; }
function Jc(e, t, n) { let o = e.length - n; for (; t < o;)
    e[t] = e[t + n], t++; for (; n--;)
    e.pop(); }
function Xc(e, t, n, o) { let r = e.length; if (r == t)
    e.push(n, o);
else if (r === 1)
    e.push(o, e[0]), e[0] = n;
else {
    for (r--, e.push(e[r - 1], e[r]); r > t;) {
        let i = r - 2;
        e[r] = e[i], r--;
    }
    e[t] = n, e[t + 1] = o;
} }
function cr(e, t, n) { let o = jn(e, t); return o >= 0 ? e[o | 1] = n : (o = ~o, Xc(e, o, t, n)), o; }
function Ui(e, t) { let n = jn(e, t); if (n >= 0)
    return e[n | 1]; }
function jn(e, t) { return LM(e, t, 1); }
function LM(e, t, n) { let o = 0, r = e.length >> n; for (; r !== o;) {
    let i = o + (r - o >> 1), s = e[i << n];
    if (t === s)
        return i << n;
    s > t ? r = i : o = i + 1;
} return ~(r << n); }
var Pe = {}, j = [], Le = new M(""), el = new M("", -1), tl = new M(""), Zo = class {
    get(t, n = Jt) { if (n === Jt) {
        let r = fh("", -201);
        throw r.name = "\u0275NotFound", r;
    } return n; }
};
function rn(e) { return e[ji] || null; }
function $i(e) { let t = rn(e); if (!t)
    throw new C(915, !1); return t; }
function W(e) { return e[nn] || null; }
function be(e) { return e[rr] || null; }
function ze(e) { return e[ir] || null; }
function lr(e) { let t = W(e) || be(e) || ze(e); return t !== null && t.standalone; }
function Qe(e) { return { \u0275providers: e }; }
function gh(e) { return Qe([{ provide: Le, multi: !0, useValue: e }]); }
function mh(...e) { return { \u0275providers: qi(!0, e), \u0275fromNgModule: !0 }; }
function qi(e, ...t) { let n = [], o = new Set, r, i = s => { n.push(s); }; return Bi(t, s => { let a = s; Oi(a, i, [], o) && (r ||= [], r.push(a)); }), r !== void 0 && yh(r, i), n; }
function yh(e, t) { for (let n = 0; n < e.length; n++) {
    let { ngModule: o, providers: r } = e[n];
    nl(r, i => { t(i, o); });
} }
function Oi(e, t, n, o) { if (e = P(e), !e)
    return !1; let r = null, i = Pc(e), s = !i && W(e); if (!i && !s) {
    let c = e.ngModule;
    if (i = Pc(c), i)
        r = c;
    else
        return !1;
}
else {
    if (s && !s.standalone)
        return !1;
    r = e;
} let a = o.has(r); if (s) {
    if (a)
        return !1;
    if (o.add(r), s.dependencies) {
        let c = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
        for (let l of c)
            Oi(l, t, n, o);
    }
}
else if (i) {
    if (i.imports != null && !a) {
        o.add(r);
        let l;
        try {
            Bi(i.imports, u => { Oi(u, t, n, o) && (l ||= [], l.push(u)); });
        }
        finally { }
        l !== void 0 && yh(l, t);
    }
    if (!a) {
        let l = Pt(r) || (() => new r);
        t({ provide: r, useFactory: l, deps: j }, r), t({ provide: tl, useValue: r, multi: !0 }, r), t({ provide: Le, useValue: () => he(r), multi: !0 }, r);
    }
    let c = i.providers;
    if (c != null && !a) {
        let l = e;
        nl(c, u => { t(u, l); });
    }
}
else
    return !1; return r !== e && e.providers !== void 0; }
function nl(e, t) { for (let n of e)
    Qc(n) && (n = n.\u0275providers), Array.isArray(n) ? nl(n, t) : t(n); }
var FM = _({ provide: String, useValue: _ });
function vh(e) { return e !== null && typeof e == "object" && FM in e; }
function jM(e) { return !!(e && e.useExisting); }
function VM(e) { return !!(e && e.useFactory); }
function en(e) { return typeof e == "function"; }
function Eh(e) { return !!e.useClass; }
var ol = new M(""), Ai = {}, sh = {}, xc;
function Vn() { return xc === void 0 && (xc = new Zo), xc; }
var xe = class {
}, tn = class extends xe {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, o, r) { super(), this.parent = n, this.source = o, this.scopes = r, Bc(t, s => this.processProvider(s)), this.records.set(el, Pn(void 0, this)), r.has("environment") && this.records.set(xe, Pn(void 0, this)); let i = this.records.get(ol); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(tl, j, { self: !0 })); }
    retrieve(t, n) { let o = Xt(n) || 0; try {
        return this.get(t, Jt, o);
    }
    catch (r) {
        if (IM(r))
            return r;
        throw r;
    } }
    destroy() { zo(this), this._destroyed = !0; let t = xn(null); try {
        for (let o of this._ngOnDestroyHooks)
            o.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let o of n)
            o();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), xn(t);
    } }
    onDestroy(t) { return zo(this), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t); }
    runInContext(t) { zo(this); let n = tt(this), o = Ie(void 0), r; try {
        return t();
    }
    finally {
        tt(n), Ie(o);
    } }
    get(t, n = Jt, o) { if (zo(this), t.hasOwnProperty(ih))
        return t[ih](this); let r = Xt(o), i, s = tt(this), a = Ie(void 0); try {
        if (!(r & 4)) {
            let l = this.records.get(t);
            if (l === void 0) {
                let u = qM(t) && or(t);
                u && this.injectableDefInScope(u) ? l = Pn(Hc(t), Ai) : l = null, this.records.set(t, l);
            }
            if (l != null)
                return this.hydrate(t, l, r);
        }
        let c = r & 2 ? Vn() : this.parent;
        return n = r & 8 && n === Jt ? null : n, c.get(t, n);
    }
    catch (c) {
        let l = RM(c);
        throw l === -200 || l === -201 ? new C(l, null) : c;
    }
    finally {
        Ie(a), tt(s);
    } }
    resolveInjectorInitializers() { let t = xn(null), n = tt(this), o = Ie(void 0), r; try {
        let i = this.get(Le, j, { self: !0 });
        for (let s of i)
            s();
    }
    finally {
        tt(n), Ie(o), xn(t);
    } }
    toString() { let t = [], n = this.records; for (let o of n.keys())
        t.push(qe(o)); return `R3Injector[${t.join(", ")}]`; }
    processProvider(t) { t = P(t); let n = en(t) ? t : P(t && t.provide), o = BM(t); if (!en(t) && t.multi === !0) {
        let r = this.records.get(n);
        r || (r = Pn(void 0, Ai, !0), r.factory = () => Vc(r.multi), this.records.set(n, r)), n = t, r.multi.push(t);
    } this.records.set(n, o); }
    hydrate(t, n, o) { let r = xn(null); try {
        if (n.value === sh)
            throw Zc(qe(t));
        return n.value === Ai && (n.value = sh, n.value = n.factory(void 0, o)), typeof n.value == "object" && n.value && $M(n.value) && this._ngOnDestroyHooks.add(n.value), n.value;
    }
    finally {
        xn(r);
    } }
    injectableDefInScope(t) { if (!t.providedIn)
        return !1; let n = P(t.providedIn); return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n); }
    removeOnDestroy(t) { let n = this._onDestroyHooks.indexOf(t); n !== -1 && this._onDestroyHooks.splice(n, 1); }
};
function Hc(e) { let t = or(e), n = t !== null ? t.factory : Pt(e); if (n !== null)
    return n; if (e instanceof M)
    throw new C(204, !1); if (e instanceof Function)
    return HM(e); throw new C(204, !1); }
function HM(e) { if (e.length > 0)
    throw new C(204, !1); let n = _M(e); return n !== null ? () => n.factory(e) : () => new e; }
function BM(e) { if (vh(e))
    return Pn(void 0, e.useValue); {
    let t = rl(e);
    return Pn(t, Ai);
} }
function rl(e, t, n) { let o; if (en(e)) {
    let r = P(e);
    return Pt(r) || Hc(r);
}
else if (vh(e))
    o = () => P(e.useValue);
else if (VM(e))
    o = () => e.useFactory(...Vc(e.deps || []));
else if (jM(e))
    o = (r, i) => he(P(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let r = P(e && (e.useClass || e.provide));
    if (UM(e))
        o = () => new r(...Vc(e.deps));
    else
        return Pt(r) || Hc(r);
} return o; }
function zo(e) { if (e.destroyed)
    throw new C(205, !1); }
function Pn(e, t, n = !1) { return { factory: e, value: t, multi: n ? [] : void 0 }; }
function UM(e) { return !!e.deps; }
function $M(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function qM(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function Bc(e, t) { for (let n of e)
    Array.isArray(n) ? Bc(n, t) : n && Qc(n) ? Bc(n.\u0275providers, t) : t(n); }
function Gi(e, t) { let n; e instanceof tn ? (zo(e), n = e) : n = new jc(e); let o, r = tt(n), i = Ie(void 0); try {
    return t();
}
finally {
    tt(r), Ie(i);
} }
function Wi() { return ph() !== void 0 || Rc() != null; }
function GM(e) { if (!Wi())
    throw new C(-203, !1); }
var $ = 0, m = 1, w = 2, Z = 3, ge = 4, le = 5, ue = 6, Ft = 7, U = 8, L = 9, Ze = 10, T = 11, jt = 12, ur = 13, sn = 14, ee = 15, mt = 16, an = 17, ot = 18, Hn = 19, il = 20, pt = 21, zi = 22, Lt = 23, Ae = 24, cn = 25, yt = 26, I = 27, sl = 1, Re = 6, Ye = 7, dr = 8, ln = 9, q = 10;
function te(e) { return Array.isArray(e) && typeof e[sl] == "object"; }
function K(e) { return Array.isArray(e) && e[sl] === !0; }
function al(e) { return (e.flags & 4) !== 0; }
function De(e) { return e.componentOffset > -1; }
function Bn(e) { return (e.flags & 1) === 1; }
function Fe(e) { return !!e.template; }
function rt(e) { return (e[w] & 512) !== 0; }
function cl(e) { return (e.type & 16) === 16; }
function Ih(e) { return (e[w] & 32) === 32; }
function it(e) { return (e[w] & 256) === 256; }
var ll = "svg", ul = "math";
function F(e) { for (; Array.isArray(e);)
    e = e[$]; return e; }
function fr(e) { for (; Array.isArray(e);) {
    if (typeof e[sl] == "object")
        return e;
    e = e[$];
} return null; }
function un(e, t) { return F(t[e]); }
function ne(e, t) { return F(t[e.index]); }
function Dh(e, t) { let n = e === null ? -1 : e.index; return n !== -1 ? F(t[n]) : null; }
function vt(e, t) { return e.data[t]; }
function Vt(e, t) { return e[t]; }
function pr(e, t, n, o) { n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = o; }
function ye(e, t) { let n = t[e]; return te(n) ? n : n[$]; }
function Ch(e) { return (e[w] & 4) === 4; }
function Qi(e) { return (e[w] & 128) === 128; }
function Th(e) { return K(e[Z]); }
function me(e, t) { return t == null ? null : e[t]; }
function dl(e) { e[an] = 0; }
function Zi(e) { e[w] & 1024 || (e[w] |= 1024, Qi(e) && dn(e)); }
function fl(e, t) { for (; e > 0;)
    t = t[sn], e--; return t; }
function Un(e) { return !!(e[w] & 9216 || e[Ae]?.dirty); }
function Yi(e) { e[Ze].changeDetectionScheduler?.notify(8), e[w] & 64 && (e[w] |= 1024), Un(e) && dn(e); }
function dn(e) { e[Ze].changeDetectionScheduler?.notify(0); let t = ht(e); for (; t !== null && !(t[w] & 8192 || (t[w] |= 8192, !Qi(t)));)
    t = ht(t); }
function hr(e, t) { if (it(e))
    throw new C(911, !1); e[pt] === null && (e[pt] = []), e[pt].push(t); }
function Ki(e, t) { if (e[pt] === null)
    return; let n = e[pt].indexOf(t); n !== -1 && e[pt].splice(n, 1); }
function ht(e) { let t = e[Z]; return K(t) ? t[Z] : t; }
function pl(e) { return e[Ft] ??= []; }
function hl(e) { return e.cleanup ??= []; }
function gl(e, t, n, o) { let r = pl(t); r.push(n), e.firstCreatePass && hl(e).push(o, r.length - 1); }
var A = { lFrame: Rh(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var Uc = !1;
function Mh() { return A.lFrame.elementDepthCount; }
function Nh() { A.lFrame.elementDepthCount++; }
function ml() { A.lFrame.elementDepthCount--; }
function Ji() { return A.bindingsEnabled; }
function gr() { return A.skipHydrationRootTNode !== null; }
function yl(e) { return A.skipHydrationRootTNode === e; }
function vl() { A.bindingsEnabled = !0; }
function wh(e) { A.skipHydrationRootTNode = e; }
function El() { A.bindingsEnabled = !1; }
function Il() { A.skipHydrationRootTNode = null; }
function g() { return A.lFrame.lView; }
function b() { return A.lFrame.tView; }
function Dl(e) { return A.lFrame.contextLView = e, e[U]; }
function Cl(e) { return A.lFrame.contextLView = null, e; }
function S() { let e = Tl(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function Tl() { return A.lFrame.currentTNode; }
function $n() { let e = A.lFrame, t = e.currentTNode; return e.isParent ? t : t.parent; }
function st(e, t) { let n = A.lFrame; n.currentTNode = e, n.isParent = t; }
function Ml() { return A.lFrame.isParent; }
function Nl() { A.lFrame.isParent = !1; }
function wl() { return A.lFrame.contextLView; }
function _l() { return Uc; }
function Yo(e) { let t = Uc; return Uc = e, t; }
function ve() { let e = A.lFrame, t = e.bindingRootIndex; return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t; }
function Ke() { return A.lFrame.bindingIndex; }
function Sl(e) { return A.lFrame.bindingIndex = e; }
function de() { return A.lFrame.bindingIndex++; }
function at(e) { let t = A.lFrame, n = t.bindingIndex; return t.bindingIndex = t.bindingIndex + e, n; }
function _h() { return A.lFrame.inI18n; }
function bl(e) { A.lFrame.inI18n = e; }
function Sh(e, t) { let n = A.lFrame; n.bindingIndex = n.bindingRootIndex = e, Xi(t); }
function bh() { return A.lFrame.currentDirectiveIndex; }
function Xi(e) { A.lFrame.currentDirectiveIndex = e; }
function es(e) { let t = A.lFrame.currentDirectiveIndex; return t === -1 ? null : e[t]; }
function ts() { return A.lFrame.currentQueryIndex; }
function mr(e) { A.lFrame.currentQueryIndex = e; }
function WM(e) { let t = e[m]; return t.type === 2 ? t.declTNode : t.type === 1 ? e[le] : null; }
function Al(e, t, n) { if (n & 4) {
    let r = t, i = e;
    for (; r = r.parent, r === null && !(n & 1);)
        if (r = WM(i), r === null || (i = i[sn], r.type & 10))
            break;
    if (r === null)
        return !1;
    t = r, e = i;
} let o = A.lFrame = Ah(); return o.currentTNode = t, o.lView = e, !0; }
function ns(e) { let t = Ah(), n = e[m]; A.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1; }
function Ah() { let e = A.lFrame, t = e === null ? null : e.child; return t === null ? Rh(e) : t; }
function Rh(e) { let t = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = t), t; }
function Oh() { let e = A.lFrame; return A.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var Rl = Oh;
function os() { let e = Oh(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function kh(e) { return (A.lFrame.contextLView = fl(e, A.lFrame.contextLView))[U]; }
function fe() { return A.lFrame.selectedIndex; }
function Ht(e) { A.lFrame.selectedIndex = e; }
function Oe() { let e = A.lFrame; return vt(e.tView, e.selectedIndex); }
function Ol() { A.lFrame.currentNamespace = ll; }
function kl() { A.lFrame.currentNamespace = ul; }
function xl() { zM(); }
function zM() { A.lFrame.currentNamespace = null; }
function Pl() { return A.lFrame.currentNamespace; }
var xh = !0;
function yr() { return xh; }
function Je(e) { xh = e; }
function $c(e, t = null, n = null, o) { let r = Ll(e, t, n, o); return r.resolveInjectorInitializers(), r; }
function Ll(e, t = null, n = null, o, r = new Set) { let i = [n || j, mh(e)]; return o = o || (typeof e == "object" ? void 0 : qe(e)), new tn(i, t || Vn(), o || null, r); }
var ce = class e {
    static THROW_IF_NOT_FOUND = Jt;
    static NULL = new Zo;
    static create(t, n) { if (Array.isArray(t))
        return $c({ name: "" }, n, t, ""); {
        let o = t.name ?? "";
        return $c({ name: o }, t.parent, t.providers, o);
    } }
    static \u0275prov = B({ token: e, providedIn: "any", factory: () => he(el) });
    static __NG_ELEMENT_ID__ = -1;
}, Bt = new M(""), je = (() => { class e {
    static __NG_ELEMENT_ID__ = QM;
    static __NG_ENV_ID__ = n => n;
} return e; })(), ki = class extends je {
    _lView;
    constructor(t) { super(), this._lView = t; }
    get destroyed() { return it(this._lView); }
    onDestroy(t) { let n = this._lView; return hr(n, t), () => Ki(n, t); }
};
function QM() { return new ki(g()); }
var Fl = !1, Et = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new mM(!1);
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new yM(n => { n.next(!1), n.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let n = this.taskId++; return this.pendingTasks.add(n), n; }
    has(n) { return this.pendingTasks.has(n); }
    remove(n) { this.pendingTasks.delete(n), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), qc = class extends vM {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, Wi() && (this.destroyRef = E(je, { optional: !0 }) ?? void 0, this.pendingTasks = E(Et, { optional: !0 }) ?? void 0); }
    emit(t) { let n = O(null); try {
        super.next(t);
    }
    finally {
        O(n);
    } }
    subscribe(t, n, o) { let r = t, i = n || (() => null), s = o; if (t && typeof t == "object") {
        let c = t;
        r = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), r && (r = this.wrapInTimeout(r)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: r, error: i, complete: s }); return t instanceof EM && t.add(a), a; }
    wrapInTimeout(t) { return n => { let o = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        o !== void 0 && this.pendingTasks?.remove(o);
    } }); }; }
}, ft = qc;
function xi(...e) { }
function jl(e) { let t, n; function o() { e = xi; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), o(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), o(); })), () => o(); }
function Vl(e) { return queueMicrotask(() => e()), () => { e = xi; }; }
var Hl = "isAngularZone", Ko = Hl + "_ID", ZM = 0, G = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new ft(!1);
    onMicrotaskEmpty = new ft(!1);
    onStable = new ft(!1);
    onError = new ft(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: o = !1, shouldCoalesceRunChangeDetection: r = !1, scheduleInRootZone: i = Fl } = t; if (typeof Zone > "u")
        throw new C(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !r && o, s.shouldCoalesceRunChangeDetection = r, s.callbackScheduled = !1, s.scheduleInRootZone = i, JM(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(Hl) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new C(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new C(909, !1); }
    run(t, n, o) { return this._inner.run(t, n, o); }
    runTask(t, n, o, r) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + r, t, YM, xi, xi); try {
        return i.runTask(s, n, o);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, o) { return this._inner.runGuarded(t, n, o); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, YM = {};
function Bl(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function KM(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { jl(() => { e.callbackScheduled = !1, Gc(e), e.isCheckStableRunning = !0, Bl(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), Gc(e); }
function JM(e) { let t = () => { KM(e); }, n = ZM++; e._inner = e._inner.fork({ name: "angular", properties: { [Hl]: !0, [Ko]: n, [Ko + n]: !0 }, onInvokeTask: (o, r, i, s, a, c) => { if (XM(c))
        return o.invokeTask(i, s, a, c); try {
        return ah(e), o.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), ch(e);
    } }, onInvoke: (o, r, i, s, a, c, l) => { try {
        return ah(e), o.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !eN(c) && t(), ch(e);
    } }, onHasTask: (o, r, i, s) => { o.hasTask(i, s), r === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, Gc(e), Bl(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (o, r, i, s) => (o.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function Gc(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function ah(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function ch(e) { e._nesting--, Bl(e); }
var Jo = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new ft;
    onMicrotaskEmpty = new ft;
    onStable = new ft;
    onError = new ft;
    run(t, n, o) { return t.apply(n, o); }
    runGuarded(t, n, o) { return t.apply(n, o); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, o, r) { return t.apply(n, o); }
};
function XM(e) { return Ph(e, "__ignore_ng_zone__"); }
function eN(e) { return Ph(e, "__scheduler_tick__"); }
function Ph(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
var gt = class {
    _console = console;
    handleError(t) { this._console.error("ERROR", t); }
}, It = new M("", { factory: () => { let e = E(G), t = E(xe), n; return o => { e.runOutsideAngular(() => { t.destroyed && !n ? setTimeout(() => { throw o; }) : (n ??= t.get(gt), n.handleError(o)); }); }; } }), Ul = { provide: Le, useValue: () => { let e = E(gt, { optional: !0 }); }, multi: !0 }, tN = new M("", { factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = E(Bt).defaultView; if (!e)
        return; let t = E(It), n = i => { t(i.reason), i.preventDefault(); }, o = i => { i.error ? t(i.error) : t(new Error(i.message, { cause: i })), i.preventDefault(); }, r = () => { e.addEventListener("unhandledrejection", n), e.addEventListener("error", o); }; typeof Zone < "u" ? Zone.root.run(r) : r(), E(je).onDestroy(() => { e.removeEventListener("error", o), e.removeEventListener("unhandledrejection", n); }); } });
function nN() { return Qe([gh(() => void E(tN))]); }
function oN(e) { return null; }
function Ut(e, t) { let [n, o, r] = Jp(e, t?.equal), i = n, s = i[ae]; return i.set = o, i.update = r, i.asReadonly = qn.bind(i), i; }
function qn() { let e = this[ae]; if (e.readonlyFn === void 0) {
    let t = () => this();
    t[ae] = e, e.readonlyFn = t;
} return e.readonlyFn; }
function rN(e, t) { if (Ni() !== null)
    throw new C(-602, !1); }
var Gn = (() => { class e {
    view;
    node;
    constructor(n, o) { this.view = n, this.node = o; }
    static __NG_ELEMENT_ID__ = iN;
} return e; })();
function iN() { return new Gn(g(), S()); }
var Ge = class {
}, Wn = new M("", { factory: () => !0 }), sN = new M("", { factory: () => !1 }), rs = new M(""), vr = (() => { class e {
    internalPendingTasks = E(Et);
    scheduler = E(Ge);
    errorHandler = E(It);
    add() { let n = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(n) && (this.scheduler.notify(11), this.internalPendingTasks.remove(n)); }; }
    run(n) { let o = this.add(); n().catch(this.errorHandler).finally(o); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), is = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new Wc });
} return e; })(), Wc = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(t) { this.enqueue(t), this.schedule(t); }
    schedule(t) { t.dirty && this.dirtyEffectCount++; }
    remove(t) { let n = t.zone, o = this.queues.get(n); o.has(t) && (o.delete(t), t.dirty && this.dirtyEffectCount--); }
    enqueue(t) { let n = t.zone; this.queues.has(n) || this.queues.set(n, new Set); let o = this.queues.get(n); o.has(t) || o.add(t); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let t = !1;
        for (let [n, o] of this.queues)
            n === null ? t ||= this.flushQueue(o) : t ||= n.run(() => this.flushQueue(o));
        t || (this.dirtyEffectCount = 0);
    } }
    flushQueue(t) { let n = !1; for (let o of t)
        o.dirty && (this.dirtyEffectCount--, n = !0, o.run()); return n; }
}, Pi = class {
    [ae];
    constructor(t) { this[ae] = t; }
    destroy() { this[ae].destroy(); }
};
function $l(e, t) { let n = t?.injector ?? E(ce), o = t?.manualCleanup !== !0 ? n.get(je) : null, r, i = n.get(Gn, null, { optional: !0 }), s = n.get(Ge); return i !== null ? (r = lN(i.view, s, e), o instanceof ki && o._lView === i.view && (o = null)) : r = uN(e, n.get(is), s), r.injector = n, o !== null && (r.onDestroyFns = [o.onDestroy(() => r.destroy())]), new Pi(r); }
var Lh = we(Q({}, eh), { cleanupFns: void 0, zone: null, onDestroyFns: null, run() { let e = Yo(!1); try {
        th(this);
    }
    finally {
        Yo(e);
    } }, cleanup() { if (!this.cleanupFns?.length)
        return; let e = O(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], O(e);
    } } }), aN = we(Q({}, Lh), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { if (xt(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.scheduler.remove(this); } }), cN = we(Q({}, Lh), { consumerMarkedDirty() { this.view[w] |= 8192, dn(this.view), this.notifier.notify(13); }, destroy() { if (xt(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.view[Lt]?.delete(this); } });
function lN(e, t, n) { let o = Object.create(cN); return o.view = e, o.zone = typeof Zone < "u" ? Zone.current : null, o.notifier = t, o.fn = Fh(o, n), e[Lt] ??= new Set, e[Lt].add(o), o.consumerMarkedDirty(o), o; }
function uN(e, t, n) { let o = Object.create(aN); return o.fn = Fh(o, e), o.scheduler = t, o.notifier = n, o.zone = typeof Zone < "u" ? Zone.current : null, o.scheduler.add(o), o.notifier.notify(12), o; }
function Fh(e, t) { return () => { t(n => (e.cleanupFns ??= []).push(n)); }; }
function Ce(e) { return Xp(e); }
import { Subject as Jg, Subscription as dN } from "rxjs";
import { setActiveConsumer as Zn } from "@angular/core/primitives/signals";
import { map as fN } from "rxjs/operators";
var zn = { JSACTION: "jsaction" };
function lt(e) { return { toString: e }.toString(); }
var Yn = "__annotations__", Kn = "__parameters__", Jn = "__prop__metadata__";
function Zr(e, t, n, o, r) { return lt(() => { let i = hd(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(Yn) ? u[Yn] : Object.defineProperty(u, Yn, { value: [] })[Yn]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function hd(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function Mo(e, t, n) { return lt(() => { let o = hd(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(Kn) ? c[Kn] : Object.defineProperty(c, Kn, { value: [] })[Kn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function wt(e, t, n, o) { return lt(() => { let r = hd(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(Jn) ? d[Jn] : Object.defineProperty(d, Jn, { value: {} })[Jn]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var Xg = Fn(Mo("Inject", e => ({ token: e })), -1), em = Fn(Mo("Optional"), 8), tm = Fn(Mo("Self"), 2), nm = Fn(Mo("SkipSelf"), 4), om = Fn(Mo("Host"), 1);
function ie(e) { let t = _e.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var jh = { \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: nr, \u0275\u0275inject: he, \u0275\u0275invalidFactoryDep: Hi, resolveForwardRef: P }, rm = Function;
function Dr(e) { return typeof e == "function"; }
var pN = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, hN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, gN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, mN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function yN(e) { return pN.test(e) || mN.test(e) || hN.test(e) && !gN.test(e); }
var Ss = class {
    _reflect;
    constructor(t) { this._reflect = t || _e.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = ar(n.length) : o = ar(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (yN(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && ql(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(Kn) && t[Kn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : ar(t.length); }
    parameters(t) { if (!Dr(t))
        return []; let n = ss(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? ql(t.decorators) : t.hasOwnProperty(Yn) ? t[Yn] : null; }
    annotations(t) { if (!Dr(t))
        return []; let n = ss(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = ql(o[i]); }), r;
    } return t.hasOwnProperty(Jn) ? t[Jn] : null; }
    propMetadata(t) { if (!Dr(t))
        return {}; let n = ss(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return Dr(t) ? this._ownPropMetadata(t, ss(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof rm && n in t.prototype; }
};
function ql(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function ss(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
function im(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var bs = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
}, sm = (() => { let e = () => am; return e.ngInherit = !0, e; })();
function am(e) { return e.type.prototype.ngOnChanges && (e.setInput = EN), vN; }
function vN() { let e = lm(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === Pe)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function EN(e, t, n, o, r) { let i = this.declaredInputs[o], s = lm(e) || IN(e, { previous: Pe, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new bs(l && l.currentValue, n, c === Pe), im(e, t, r, n); }
var cm = "__ngSimpleChanges__";
function lm(e) { return e[cm] || null; }
function IN(e, t) { return e[cm] = t; }
var Vh = [];
var V = function (e, t = null, n) { for (let o = 0; o < Vh.length; o++) {
    let r = Vh[o];
    r(e, t, n);
} }, k = (function (e) { return e[e.TemplateCreateStart = 0] = "TemplateCreateStart", e[e.TemplateCreateEnd = 1] = "TemplateCreateEnd", e[e.TemplateUpdateStart = 2] = "TemplateUpdateStart", e[e.TemplateUpdateEnd = 3] = "TemplateUpdateEnd", e[e.LifecycleHookStart = 4] = "LifecycleHookStart", e[e.LifecycleHookEnd = 5] = "LifecycleHookEnd", e[e.OutputStart = 6] = "OutputStart", e[e.OutputEnd = 7] = "OutputEnd", e[e.BootstrapApplicationStart = 8] = "BootstrapApplicationStart", e[e.BootstrapApplicationEnd = 9] = "BootstrapApplicationEnd", e[e.BootstrapComponentStart = 10] = "BootstrapComponentStart", e[e.BootstrapComponentEnd = 11] = "BootstrapComponentEnd", e[e.ChangeDetectionStart = 12] = "ChangeDetectionStart", e[e.ChangeDetectionEnd = 13] = "ChangeDetectionEnd", e[e.ChangeDetectionSyncStart = 14] = "ChangeDetectionSyncStart", e[e.ChangeDetectionSyncEnd = 15] = "ChangeDetectionSyncEnd", e[e.AfterRenderHooksStart = 16] = "AfterRenderHooksStart", e[e.AfterRenderHooksEnd = 17] = "AfterRenderHooksEnd", e[e.ComponentStart = 18] = "ComponentStart", e[e.ComponentEnd = 19] = "ComponentEnd", e[e.DeferBlockStateStart = 20] = "DeferBlockStateStart", e[e.DeferBlockStateEnd = 21] = "DeferBlockStateEnd", e[e.DynamicComponentStart = 22] = "DynamicComponentStart", e[e.DynamicComponentEnd = 23] = "DynamicComponentEnd", e[e.HostBindingsUpdateStart = 24] = "HostBindingsUpdateStart", e[e.HostBindingsUpdateEnd = 25] = "HostBindingsUpdateEnd", e; })(k || {});
function DN(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = am(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function um(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function vs(e, t, n) { dm(e, t, 3, n); }
function Es(e, t, n, o) { (e[w] & 3) === n && dm(e, t, n, o); }
function Gl(e, t) { let n = e[w]; (n & 3) === t && (n &= 16383, n += 1, e[w] = n); }
function dm(e, t, n, o) { let r = o !== void 0 ? e[an] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[an] += 65536), (a < i || i == -1) && (CN(e, n, t, c), e[an] = (e[an] & 4294901760) + c + 2), c++; }
function Hh(e, t) { V(k.LifecycleHookStart, e, t); let n = O(null); try {
    t.call(e);
}
finally {
    O(n), V(k.LifecycleHookEnd, e, t);
} }
function CN(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[w] >> 14 < e[an] >> 16 && (e[w] & 3) === t && (e[w] += 16384, Hh(a, i)) : Hh(a, i); }
var no = -1, yn = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o, r) { this.factory = t, this.name = r, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function ra(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function fm(e) { return !!(e.type & 128); }
function TN(e) { return (e.flags & 8) !== 0; }
function MN(e) { return (e.flags & 16) !== 0; }
function NN(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        wN(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function gd(e) { return e === 3 || e === 4 || e === 6; }
function wN(e) { return e.charCodeAt(0) === 64; }
function uo(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? Bh(e, n, r, null, t[++o]) : Bh(e, n, r, null, null));
        }
    } return e; }
function Bh(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function pm(e) { return e !== no; }
function As(e) { return e & 32767; }
function _N(e) { return e >> 16; }
function Rs(e, t) { let n = _N(e), o = t; for (; n > 0;)
    o = o[sn], n--; return o; }
var gu = !0;
function Os(e) { let t = gu; return gu = e, t; }
var SN = 256, hm = SN - 1, gm = 5, bN = 0, ct = {};
function AN(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(on) && (o = n[on]), o == null && (o = n[on] = bN++); let r = o & hm, i = 1 << r; t.data[e + (r >> gm)] |= i; }
function ks(e, t) { let n = mm(e, t); if (n !== -1)
    return n; let o = t[m]; o.firstCreatePass && (e.injectorIndex = t.length, Wl(o.data, e), Wl(t, null), Wl(o.blueprint, null)); let r = md(e, t), i = e.injectorIndex; if (pm(r)) {
    let s = As(r), a = Rs(r, t), c = a[m].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function Wl(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function mm(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function md(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = Cm(r), o === null)
        return no;
    if (n++, r = r[sn], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return no; }
function mu(e, t, n) { AN(e, t, n); }
function RN(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (gd(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function ym(e, t, n) { if (n & 8 || e !== void 0)
    return e; Vi(t, "NodeInjector"); }
function vm(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[L], i = Ie(void 0);
    try {
        return r ? r.get(t, o, n & 8) : Yc(t, o, n & 8);
    }
    finally {
        Ie(i);
    }
} return ym(o, t, n); }
function Em(e, t, n, o = 0, r) { if (e !== null) {
    if (t[w] & 2048 && !(o & 2)) {
        let s = PN(e, t, n, o, ct);
        if (s !== ct)
            return s;
    }
    let i = Im(e, t, n, o, ct);
    if (i !== ct)
        return i;
} return vm(t, n, o, r); }
function Im(e, t, n, o, r) { let i = kN(n); if (typeof i == "function") {
    if (!Al(t, e, o))
        return o & 1 ? ym(r, n, o) : vm(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            Vi(n);
        else
            return s;
    }
    finally {
        Rl();
    }
}
else if (typeof i == "number") {
    let s = null, a = mm(e, t), c = no, l = o & 1 ? t[ee][le] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? md(e, t) : t[a + 8], c === no || !$h(o, !1) ? a = -1 : (s = t[m], a = As(c), t = Rs(c, t))); a !== -1;) {
        let u = t[m];
        if (Uh(i, a, u.data)) {
            let d = ON(a, t, n, s, o, l);
            if (d !== ct)
                return d;
        }
        c = t[a + 8], c !== no && $h(o, t[m].data[a + 8] === l) && Uh(i, a, t) ? (s = u, a = As(c), t = Rs(c, t)) : a = -1;
    }
} return r; }
function ON(e, t, n, o, r, i) { let s = t[m], a = s.data[e + 8], c = o == null ? De(a) && gu : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = Is(a, s, n, c, l); return u !== null ? xr(t, s, u, a, r) : ct; }
function Is(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && Fe(p) && p.type === n)
        return c;
} return null; }
function xr(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof yn) {
    let a = i;
    if (a.resolving) {
        let p = Se(s[n]);
        throw Zc(p);
    }
    let c = Os(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? Ie(a.injectImpl) : null, f = Al(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && DN(n, s[n], t);
    }
    finally {
        d !== null && Ie(d), Os(c), a.resolving = !1, Rl();
    }
} return i; }
function kN(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(on) ? e[on] : void 0; return typeof t == "number" ? t >= 0 ? t & hm : xN : t; }
function Uh(e, t, n) { let o = 1 << e; return !!(n[t + (e >> gm)] & o); }
function $h(e, t) { return !(e & 2) && !(e & 1 && t); }
var Gt = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return Em(this._tNode, this._lView, t, Xt(o), n); }
};
function xN() { return new Gt(S(), g()); }
function Dm(e) { return lt(() => { let t = e.prototype.constructor, n = t[nt] || yu(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[nt] || yu(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function yu(e) { return tr(e) ? () => { let t = yu(P(e)); return t && t(); } : Pt(e); }
function PN(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[w] & 2048 && !rt(s);) {
    let a = Im(i, s, n, o | 2, ct);
    if (a !== ct)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[il];
        if (l) {
            let u = l.get(n, ct, o);
            if (u !== ct)
                return u;
        }
        c = Cm(s), s = s[sn];
    }
    i = c;
} return r; }
function Cm(e) { let t = e[m], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[le] : null; }
function ia(e) { return RN(S(), e); }
var Tm = Mo("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => ia(e) })), qh = null;
function yd() { return qh = qh || new Ss; }
function sa(e) { return Mm(yd().parameters(e)); }
function Mm(e) { return e.map(t => LN(t)); }
function LN(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof em || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof nm || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof tm || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof om || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof Xg)
            t.token = o.token;
        else if (o instanceof Tm) {
            if (o.attributeName === void 0)
                throw new C(204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function FN(e, t) { let n = null, o = null; e.hasOwnProperty(Ln) || Object.defineProperty(e, Ln, { get: () => (n === null && (n = ie({ usage: 0, kind: "injectable", type: e }).compileInjectable(jh, `ng:///${e.name}/\u0275prov.js`, BN(e, t))), n) }), e.hasOwnProperty(nt) || Object.defineProperty(e, nt, { get: () => { if (o === null) {
        let r = ie({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(jh, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: sa(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var jN = _({ provide: String, useValue: _ });
function Gh(e) { return e.useClass !== void 0; }
function VN(e) { return jN in e; }
function Wh(e) { return e.useFactory !== void 0; }
function HN(e) { return e.useExisting !== void 0; }
function BN(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (Gh(n) || Wh(n)) && n.deps !== void 0 && (o.deps = Mm(n.deps)), Gh(n) ? o.useClass = n.useClass : VN(n) ? o.useValue = n.useValue : Wh(n) ? o.useFactory = n.useFactory : HN(n) && (o.useExisting = n.useExisting), o; }
var UN = Zr("Injectable", void 0, void 0, void 0, (e, t) => FN(e, t));
function $N() { return No(S(), g()); }
function No(e, t) { return new Yr(ne(e, t)); }
var Yr = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = $N;
} return e; })();
function Nm(e) { return e instanceof Yr ? e.nativeElement : e; }
function qN() { return this._results[Symbol.iterator](); }
var xs = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new Jg; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = We(t); (this._changesDetected = !hh(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = qN;
}, wo = "ngSkipHydration", GN = "ngskiphydration";
function vd(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === GN)
        return !0;
} return !1; }
function wm(e) { return e.hasAttribute(wo); }
function Pr(e) { return (e.flags & 128) === 128; }
function _o(e) { if (Pr(e))
    return !0; let t = e.parent; for (; t;) {
    if (Pr(e) || vd(t))
        return !0;
    t = t.parent;
} return !1; }
function _m(e) { return Pr(e) || vd(e) || _o(e); }
var aa = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e; })(aa || {}), ca = new Map, WN = 0;
function zN() { return WN++; }
function QN(e) { ca.set(e[Hn], e); }
function Sm(e) { return ca.get(e) || null; }
function vu(e) { ca.delete(e[Hn]); }
function ZN() { return ca; }
var Ps = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return Sm(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function Ne(e) { let t = Ds(e); if (t) {
    if (te(t)) {
        let n = t, o, r, i;
        if (Am(e)) {
            if (o = JN(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (YN(e)) {
            if (o = XN(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = Rm(o, n);
        }
        else if (o = Qh(n, e), o == -1)
            return null;
        let s = F(n[o]), a = Ds(s), c = a && !Array.isArray(a) ? a : zh(n, o, s);
        if (r && c.component === void 0 && (c.component = r, Ve(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                Ve(i[l], c);
        }
        Ve(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = Ds(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = Qh(i, n);
            if (s >= 0) {
                let a = F(i[s]), c = zh(i, s, a);
                Ve(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function zh(e, t, n) { return new Ps(e[Hn], t, n); }
var Eu = "__ngContext__";
function Ve(e, t) { te(t) ? (e[Eu] = t[Hn], QN(t)) : e[Eu] = t; }
function Ds(e) { let t = e[Eu]; return typeof t == "number" ? Sm(t) : t || null; }
function bm(e) { let t = Ds(e); return t ? te(t) ? t : t.lView : null; }
function Am(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function YN(e) { return e && e.constructor && e.constructor.\u0275dir; }
function Qh(e, t) { let n = e[m]; for (let o = I; o < n.bindingStartIndex; o++)
    if (F(e[o]) === t)
        return o; return -1; }
function KN(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function JN(e, t) { let n = e[m].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (ye(r, e)[U] === t)
            return r;
    }
else if (ye(I, e)[U] === t)
    return I; return -1; }
function XN(e, t) { let n = e[m].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = KN(n);
} return -1; }
function Rm(e, t) { let n = t[m].data[e]; if (n.directiveStart === 0)
    return j; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    Am(i) || o.push(i);
} return o; }
function ew(e, t) { let n = t[m].data[e]; return De(n) ? t[n.directiveStart + n.componentOffset] : null; }
function tw(e, t) { let n = e[m].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function Om(e) { return xm(e[jt]); }
function km(e) { return xm(e[ge]); }
function xm(e) { for (; e !== null && !K(e);)
    e = e[ge]; return e; }
function Zh(e) { let t = Ne(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = ew(t.nodeIndex, n);
} return t.component; }
function nw(e) { fw(e); let t = Ne(e), n = t ? t.lView : null; return n === null ? null : n[U]; }
function ow(e) { let t = Ne(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[m].type === 2 && (o = ht(n));)
    n = o; return rt(n) ? null : n[U]; }
function rw(e) { let t = Ne(e), n = t ? t.lView : null; if (n === null)
    return ce.NULL; let o = n[m].data[t.nodeIndex]; return new Gt(o, n); }
function iw(e) { let t = Ne(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    dw(l) && (l = l.type), i.push(l);
} return i; }
function sw(e) { if (e instanceof Text)
    return []; let t = Ne(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = Rm(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var Pm = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(Pm || {}), Lm = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(Lm || {});
function aw(e) { let t = Ne(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = tw(n, t.nodeIndex);
} return t.localRefs || {}; }
function cw(e) { return Ne(e).native; }
function lw(e) { let t = Ne(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[m], r = n[Ft], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = F(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", y = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: y, type: h });
        }
    } return s.sort(uw), s; }
function uw(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function dw(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function fw(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var Iu;
function pw(e) { Iu = e; }
function la() { if (Iu !== void 0)
    return Iu; if (typeof document < "u")
    return document; throw new C(210, !1); }
var _t = new M("", { factory: () => hw }), hw = "ng";
var Ed = new M(""), gw = new M("", { providedIn: "platform", factory: () => "unknown" }), mw = new M(""), yw = new M("", { factory: () => E(Bt).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), Fm = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, vw = new M("", { factory: () => Fm });
function Ew(e) { return e; }
var So = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => { let n = new e; return (typeof ngServerMode > "u" || !ngServerMode) && (n.store = jm(E(Bt), E(_t))), n; } });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C"); }
} return e; })();
function jm(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var Id = "h", Dd = "b", Vm = "f", Hm = "n", Kr = "e", ua = "t", bo = "c", Jr = "x", Mt = "r", da = "i", Xr = "n", Ao = "d", fa = "l", pa = "di", ei = "s", Cd = "p", ti = "t", Sn = new M(""), Bm = !1, Td = new M("", { factory: () => Bm }), Md = new M(""), ha = new M(""), Nd = !1, wd = new M(""), ni = new M("", { factory: () => new Map }), Iw = new M(""), Ls = { passive: !0, capture: !0 }, zl = new WeakMap, Ql = new WeakMap, qt = new WeakMap, Fs = ["click", "keydown"], js = ["mouseenter", "mouseover", "focusin"], as = new Map, Lr = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function Um(e, t) { let n = Ql.get(e); if (!n) {
    n = new Lr, Ql.set(e, n);
    for (let o of Fs)
        e.addEventListener(o, n.listener, Ls);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    Ql.delete(e);
    for (let i of Fs)
        e.removeEventListener(i, r, Ls);
} }; }
function $m(e, t) { let n = zl.get(e); if (!n) {
    n = new Lr, zl.set(e, n);
    for (let o of js)
        e.addEventListener(o, n.listener, Ls);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of js)
        e.removeEventListener(i, r, Ls);
    zl.delete(e);
} }; }
function Dw(e) { let t = qm(e); return new IntersectionObserver(n => { for (let o of n)
    o.isIntersecting && qt.has(o.target) && qt.get(o.target)?.get(t)?.listener(); }, e); }
function Cw(e, t, n, o) { let r = qm(o), i = qt.get(e)?.get(r); as.has(r) || as.set(r, { observer: n(o), count: 0 }); let s = as.get(r); if (!i) {
    i = new Lr, s.observer.observe(e);
    let a = qt.get(e);
    a ? a.set(r, i) : (a = new Map, qt.set(e, a)), a.set(r, i), s.count++;
} return i.callbacks.add(t), () => { if (qt.get(e)?.has(r)) {
    if (i.callbacks.delete(t), i.callbacks.size === 0) {
        s.observer.unobserve(e), s.count--;
        let a = qt.get(e);
        a && (a.delete(r), a.size === 0 && qt.delete(e));
    }
    s.count === 0 && (s.observer.disconnect(), as.delete(r));
} }; }
function qm(e) {
    return e ? `${e.rootMargin}/${typeof e.threshold == "number" ? e.threshold : e.threshold?.join(`
`)}` : "";
}
var Ro = "ngb";
function _d(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(zn.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(zn.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(Ro, i); }
var Gm = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, Sd = (e, t) => { let n = e, o = n.getAttribute(Ro) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function Tw(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(bd);
} }
var bd = e => { e.removeAttribute(zn.JSACTION), e.removeAttribute(Ro), e.__jsaction_fns = void 0; }, Ad = new M("", { factory: () => ({}) });
function Rd(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let o of n)
        o(e); }
var Du = new Map;
function Wm(e, t) { return Du.set(e, t), () => Du.delete(e); }
var Yh = !1, zm = (e, t, n, o) => { };
function Mw(e, t, n, o) { zm(e, t, n, o); }
function Qm() { Yh || (zm = (e, t, n, o) => { let r = e[L].get(_t); Du.get(r)?.(t, n, o); }, Yh = !0); }
var St = new M(""), Zm = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = E(ni);
    contract = E(Ad);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { Tw(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = B({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function Oo(e) { return (e.flags & 32) === 32; }
var Ym = "__nghData__", ga = Ym, Km = "__nghDeferData__", ma = Km;
function Nw(e) { return e === Ym || e === Km; }
var oo = "ngh", Jm = "nghm", Xm = () => null;
function ww(e, t, n = !1) { let o = e.getAttribute(oo); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(So, null, { optional: !0 });
    u !== null && (c = u.get(ga, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, ya(l, 0, e.nextSibling)), a ? e.setAttribute(oo, a) : e.removeAttribute(oo), l; }
function ey() { Xm = ww; }
function ty(e, t, n = !1) { return Xm(e, t, n); }
function Od(e) { let t = e._lView; return t[m].type === 2 ? null : (rt(t) && (t = t[I]), t); }
function _w(e) { return e.textContent?.replace(/\s/gm, ""); }
function Sw(e) { let t = la(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = _w(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var ny = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(ny || {}), bw = "__ngDebugHydrationInfo__";
function Aw(e) { return e[bw] ?? null; }
function ya(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function Cu(e, t) { return e.segmentHeads?.[t] ?? null; }
function oi(e) { return e.get(wd, !1, { optional: !0 }); }
var Rw = !1;
function Ow() { Rw = !1; }
function oy(e, t) { let n = e.data, o = n[Kr]?.[t] ?? null; return o === null && n[bo]?.[t] && (o = kd(e, t)), o; }
function kw(e, t) { return e.data[Kr]?.[t] !== void 0; }
function ry(e, t) { return e.data[bo]?.[t] ?? null; }
function kd(e, t) { let n = ry(e, t) ?? [], o = 0; for (let r of n)
    o += r[Mt] * (r[Jr] ?? 1); return o; }
function iy(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[Ao];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function va(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[Ao];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!iy(e)?.has(t); }
function Ea(e, t) { let n = e[ue]; return n !== null && !gr() && !Oo(t) && !va(n, t.index - I); }
function xd(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function sy(e) { let t = []; return e !== null && (e.has(4) && t.push(...js), e.has(3) && t.push(...Fs)), t; }
function xw(e, t) { let n = t.get(St), r = t.get(So).get(ma, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][Cd];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function Pw(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [js.join(":;"), Fs.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function ay(e, t) { let n = Pw(e), o = t.get(ni); for (let r of n)
    Sd(r, o); }
var cy = () => ({});
function Lw(e) { let t = e.get(So, null, { optional: !0 }); return t !== null ? t.get(ma, {}) : {}; }
function ly() { cy = Lw; }
function Fw(e) { return cy(e); }
function jw(e) { return typeof e == "object" && e.trigger === 5; }
function Vw(e) { return e[ti]?.find(n => jw(n))?.delay ?? null; }
function Hw(e) { let t = e[ti]; if (t)
    for (let n of t) {
        if (n === 2)
            return !0;
        if (typeof n == "object" && n.trigger === 2)
            return n.intersectionObserverOptions || !0;
    } return null; }
function Kh(e, t) { return e[ti]?.includes(t) ?? !1; }
function Bw(e) { return { data: e, hydrate: { idle: Kh(e, 0), immediate: Kh(e, 1), timer: Vw(e), viewport: Hw(e) } }; }
function uy(e) { let t = Fw(e), n = new Map; for (let o in t)
    n.set(o, Bw(t[o])); return n; }
function Zl(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === Jm; }
function Jh(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function dy(e) { for (let o of e.body.childNodes)
    if (Zl(o))
        return; let t = Jh(e.body.previousSibling); if (Zl(t))
    return; let n = Jh(e.head.lastChild); if (!Zl(n))
    throw new C(-507, !1); }
function fy(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = O(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                mr(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        O(o);
    }
} }
function Tu(e, t, n) { mr(0); let o = O(null); try {
    t(e, n);
}
finally {
    O(o);
} }
function Pd(e, t, n) { if (al(t)) {
    let o = O(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        O(o);
    }
} }
var He = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e[e.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom", e; })(He || {}), Uw = { name: "custom-elements" }, $w = { name: "no-errors-schema" }, py = !1;
function qw(e) { py = e; }
function Gw() { return py; }
var hy = !1;
function Ww(e) { hy = e; }
function zw() { return hy; }
var cs;
function gy() { if (cs === void 0 && (cs = null, _e.trustedTypes))
    try {
        cs = _e.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return cs; }
function ko(e) { return gy()?.createHTML(e) || e; }
function Qw(e) { return gy()?.createScriptURL(e) || e; }
var ls;
function Ld() { if (ls === void 0 && (ls = null, _e.trustedTypes))
    try {
        ls = _e.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return ls; }
function Xh(e) { return Ld()?.createHTML(e) || e; }
function eg(e) { return Ld()?.createScript(e) || e; }
function tg(e) { return Ld()?.createScriptURL(e) || e; }
var Nt = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Li})`; }
}, Mu = class extends Nt {
    getTypeName() { return "HTML"; }
}, Nu = class extends Nt {
    getTypeName() { return "Style"; }
}, wu = class extends Nt {
    getTypeName() { return "Script"; }
}, _u = class extends Nt {
    getTypeName() { return "URL"; }
}, Su = class extends Nt {
    getTypeName() { return "ResourceURL"; }
};
function bt(e) { return e instanceof Nt ? e.changingThisBreaksApplicationSecurity : e; }
function xo(e, t) { let n = my(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Li})`);
} return n === t; }
function my(e) { return e instanceof Nt && e.getTypeName() || null; }
function Zw(e) { return new Mu(e); }
function Yw(e) { return new Nu(e); }
function Kw(e) { return new wu(e); }
function Jw(e) { return new _u(e); }
function Xw(e) { return new Su(e); }
function yy(e) { let t = new Au(e); return e_() ? new bu(t) : t; }
var bu = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(ko(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, Au = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = ko(t), n; }
};
function e_() { try {
    return !!new window.DOMParser().parseFromString(ko(""), "text/html");
}
catch {
    return !1;
} }
var t_ = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Ia(e) { return e = String(e), e.match(t_) ? e : "unsafe:" + e; }
function At(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function ri(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var vy = At("area,br,col,hr,img,wbr"), Ey = At("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), Iy = At("rp,rt"), n_ = ri(Iy, Ey), o_ = ri(Ey, At("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), r_ = ri(Iy, At("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Ru = ri(vy, o_, r_, n_), Fd = At("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), i_ = At("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), s_ = At("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), Dy = ri(Fd, i_, s_), a_ = At("script,style,template"), Ou = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = u_(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = l_(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = ng(t).toLowerCase(); if (!Ru.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !a_.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!Dy.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        Fd[a] && (c = Ia(c)), this.buf.push(" ", s, '="', og(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = ng(t).toLowerCase(); Ru.hasOwnProperty(n) && !vy.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(og(t)); }
};
function c_(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function l_(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw Cy(t); return t; }
function u_(e) { let t = e.firstChild; if (t && c_(e, t))
    throw Cy(t); return t; }
function ng(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function Cy(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var d_ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, f_ = /([^\#-~ |!])/g;
function og(e) { return e.replace(/&/g, "&amp;").replace(d_, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(f_, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var us;
function Ty(e, t) { let n = null; try {
    us = us || yy(e);
    let o = t ? String(t) : "";
    n = us.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = us.getInertBodyElement(o);
    } while (o !== i);
    let a = new Ou().sanitizeChildren(ku(n) || n);
    return ko(a);
}
finally {
    if (n) {
        let o = ku(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function ku(e) { return "content" in e && p_(e) ? e.content : null; }
function p_(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var h_ = /^>|^->|<!--|-->|--!>|<!-$/g, g_ = /(<|>)/g, m_ = "\u200B$1\u200B";
function y_(e) { return e.replace(h_, t => t.replace(g_, m_)); }
function jd(e, t) { return e.createText(t); }
function My(e, t, n) { e.setValue(t, n); }
function Vd(e, t) { return e.createComment(y_(t)); }
function Da(e, t, n) { return e.createElement(t, n); }
function vn(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function Ny(e, t, n) { e.appendChild(t, n); }
function rg(e, t, n, o, r) { o !== null ? vn(e, t, n, o, r) : Ny(e, t, n); }
function ii(e, t, n, o) { e.removeChild(null, t, n, o); }
function wy(e) { e.textContent = ""; }
function v_(e, t, n) { e.setAttribute(t, "style", n); }
function E_(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function _y(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && NN(e, t, o), r !== null && E_(e, t, r), i !== null && v_(e, t, i); }
function I_(e) { let t = g(); e.src = "", e.srcdoc = ko(""), ii(t[T], e); }
var bn = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(bn || {});
function Sy(e) { let t = si(); return t ? Xh(t.sanitize(bn.HTML, e) || "") : xo(e, "HTML") ? Xh(bt(e)) : Ty(la(), R(e)); }
function by(e) { let t = si(); return t ? t.sanitize(bn.STYLE, e) || "" : xo(e, "Style") ? bt(e) : R(e); }
function Hd(e) { let t = si(); return t ? t.sanitize(bn.URL, e) || "" : xo(e, "URL") ? bt(e) : Ia(R(e)); }
function Bd(e) { let t = si(); if (t)
    return tg(t.sanitize(bn.RESOURCE_URL, e) || ""); if (xo(e, "ResourceURL"))
    return tg(bt(e)); throw new C(904, !1); }
function Ay(e) { let t = si(); if (t)
    return eg(t.sanitize(bn.SCRIPT, e) || ""); if (xo(e, "Script"))
    return eg(bt(e)); throw new C(905, !1); }
function Ry(e) { return ko(e[0]); }
function Oy(e) { return Qw(e[0]); }
function D_(e, t) { return t === "src" && (e === "embed" || e === "frame" || e === "iframe" || e === "media" || e === "script") || t === "href" && (e === "base" || e === "link") ? Bd : Hd; }
function ky(e, t, n) { return D_(t, n)(e); }
function si() { let e = g(); return e && e[Ze].sanitizer; }
var ds = new Set(["attributename"]), C_ = { iframe: new Set(["sandbox", "allow", "allowfullscreen", "referrerpolicy", "csp", "fetchpriority"]), animate: ds, set: ds, animatemotion: ds, animatetransform: ds };
function xy(e, t, n) { let o = t.toLowerCase(), r = n.toLowerCase(); if (!C_[o]?.has(r))
    return e; let i = Oe(); if (i.type !== 2)
    return e; let s = g(); if (o === "iframe") {
    let c = ne(i, s);
    I_(c);
} let a = !1; throw new C(-910, a); }
function T_() { return Qe([]); }
function Py(e) { return e.ownerDocument.defaultView; }
function Ly(e) { return e.ownerDocument; }
function Ud(e) { return e.ownerDocument.body; }
var M_ = "\uFFFD";
function Xn(e) { return e instanceof Function ? e() : e; }
function N_(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var Fy = "ng-template";
function w_(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && N_(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if ($d(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function $d(e) { return e.type === 4 && e.value !== Fy; }
function __(e, t, n) { let o = e.type === 4 && !n ? Fy : e.value; return t === o; }
function S_(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? R_(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !Xe(o) && !Xe(c))
            return !1;
        if (s && Xe(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !__(e, c, n) || c === "" && t.length === 1) {
                if (Xe(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !w_(e, r, c, n)) {
                if (Xe(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = b_(c, r, $d(e), n);
            if (u === -1) {
                if (Xe(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (Xe(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return Xe(o) || s; }
function Xe(e) { return (e & 1) === 0; }
function b_(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return O_(t, e); }
function jy(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (S_(e, t[o], n))
        return !0; return !1; }
function A_(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function R_(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (gd(n))
        return t;
} return e.length; }
function O_(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function k_(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function ig(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function x_(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !Xe(s) && (t += ig(i, r), r = ""), o = s, i = i || !Xe(o);
    n++;
} return r !== "" && (t += ig(i, r)), t; }
function P_(e) { return e.map(x_).join(","); }
function L_(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!Xe(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var H = {};
function qd(e, t, n, o, r, i, s, a, c, l, u) { let d = I + o, f = d + r, p = F_(d, f), h = typeof l == "function" ? l() : l; return p[m] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function F_(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : H); return n; }
function Vy(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = qd(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function Ca(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[$] = r, d[w] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[w] & 2048) && (d[w] |= 2048), dl(d), d[Z] = d[sn] = e, d[U] = n, d[Ze] = s || e && e[Ze], d[T] = a || e && e[T], d[L] = c || e && e[L] || null, d[le] = i, d[Hn] = zN(), d[ue] = u, d[il] = l, d[ee] = t.type == 2 ? e[ee] : d, d; }
function j_(e, t, n) { let o = ne(t, e), r = Vy(n), i = e[Ze].rendererFactory, s = Wd(e, Ca(e, r, null, Gd(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function Gd(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function ai(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function Wd(e, t) { return e[jt] ? e[ur][ge] = t : e[jt] = t, e[ur] = t, t; }
function Hy(e = 1) { By(b(), g(), fe() + e, !1); }
function By(e, t, n, o) { if (!o)
    if ((t[w] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && vs(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && Es(t, i, 0, n);
    } Ht(n); }
var ci = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(ci || {});
function fo(e, t, n, o) { let r = O(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & ci.SignalBased) !== 0 && (c = t[i][ae]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : im(t, c, i, o);
}
finally {
    O(r);
} }
var Vs = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(Vs || {}), xu;
function zd(e, t) { return xu(e, t); }
function V_(e) { xu === void 0 && (xu = e()); }
function Hs(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function ro(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function H_(e) { let t = ro(e, "transition-property"), n = ro(e, "transition-duration"), o = ro(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = Hs(o[i]) + Hs(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function B_(e) { let t = ro(e, "animation-name"), n = ro(e, "animation-delay"), o = ro(e, "animation-duration"), r = { animationName: "", propertyName: void 0, duration: 0 }; for (let i = 0; i < t.length; i++) {
    let s = Hs(n[i]) + Hs(o[i]);
    s > r.duration && (r.animationName = t[i], r.duration = s);
} return r; }
function Uy(e, t) { return e !== void 0 && e.duration > t.duration; }
function $y(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function U_(e, t) { let n = getComputedStyle(e), o = B_(n), r = H_(n), i = o.duration > r.duration ? o : r; Uy(t.get(e), i) || $y(i) && t.set(e, i); }
function qy(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? U_(e, t) : $_(e, t, o); }
function $_(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming(), s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c, l;
    r.animationName ? l = r.animationName : c = r.transitionProperty, a >= o.duration && (o = { animationName: l, propertyName: c, duration: a });
} Uy(t.get(e), o) || $y(o) && t.set(e, o); }
var En = new Set, Ta = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(Ta || {}), Po = new M(""), sg = new Set;
function J(e) { sg.has(e) || (sg.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var Ma = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Qd = [0, 1, 2, 3], Zd = (() => { class e {
    ngZone = E(G);
    scheduler = E(Ge);
    errorHandler = E(gt, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { E(Po, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && V(k.AfterRenderHooksStart), this.executing = !0; for (let o of Qd)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && V(k.AfterRenderHooksEnd); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[cn] ??= []).push(n), dn(o), o[w] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(Ta.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Fr = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[cn]; t && (this.view[cn] = t.filter(n => n !== this)); }
};
function Gy(e, t) { let n = t?.injector ?? E(ce); return typeof ngServerMode < "u" && ngServerMode ? Na : (J("NgAfterRender"), Wy(e, n, t, !1)); }
function Yd(e, t) { let n = t?.injector ?? E(ce); return typeof ngServerMode < "u" && ngServerMode ? Na : (J("NgAfterNextRender"), Wy(e, n, t, !0)); }
function q_(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function Wy(e, t, n, o) { let r = t.get(Ma); r.impl ??= t.get(Zd); let i = t.get(Po, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(je) : null, a = t.get(Gn, null, { optional: !0 }), c = new Fr(r.impl, q_(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var Na = { destroy() { } }, wa = new M("", { factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null }) });
function zy(e, t, n) { let o = e.get(wa); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function G_(e, t) { let n = e.get(wa); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function W_(e) { let t = e.get(wa); t.isScheduled || (Yd(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: e }), t.isScheduled = !0); }
function _a(e) { let t = e.get(wa); t.scheduler = W_, t.scheduler(e); }
function Kd(e, t) { for (let [n, o] of t)
    zy(e, o.animateFns); }
function ag(e, t, n, o) { let r = e?.[yt]?.enter; t !== null && r && r.has(n.index) && Kd(o, r); }
function eo(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    K(r) ? c = r : te(r) && (l = !0, r = r[$]);
    let u = F(r);
    e === 0 && o !== null ? (ag(a, o, i, n), s == null ? Ny(t, o, u) : vn(t, o, u, s || null, !0)) : e === 1 && o !== null ? (ag(a, o, i, n), vn(t, o, u, s || null, !0)) : e === 2 ? cg(a, i, n, d => { ii(t, u, l, d); }) : e === 3 && cg(a, i, n, () => { t.destroyNode(u); }), c != null && X_(t, e, n, c, i, o, s);
} }
function Qy(e, t) { Zy(e, t), t[$] = null, t[le] = null; }
function z_(e, t, n, o, r, i) { o[$] = r, o[le] = t, Sa(e, o, n, 1, r, i); }
function Zy(e, t) { t[Ze].changeDetectionScheduler?.notify(9), Sa(e, t, t[T], 2, null, null); }
function Q_(e) { let t = e[jt]; if (!t)
    return Yl(e[m], e); for (; t;) {
    let n = null;
    if (te(t))
        n = t[jt];
    else {
        let o = t[q];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[ge] && t !== e;)
            te(t) && Yl(t[m], t), t = t[Z];
        t === null && (t = e), te(t) && Yl(t[m], t), n = t && t[ge];
    }
    t = n;
} }
function Jd(e, t) { let n = e[ln], o = n.indexOf(t); n.splice(o, 1); }
function li(e, t) { if (it(t))
    return; let n = t[T]; n.destroyNode && Sa(e, t, n, 3, null, null), Q_(t); }
function Yl(e, t) { if (it(t))
    return; let n = O(null); try {
    t[w] &= -129, t[w] |= 256, t[Ae] && xt(t[Ae]), K_(e, t), Y_(e, t), t[m].type === 1 && t[T].destroy();
    let o = t[mt];
    if (o !== null && K(t[Z])) {
        o !== t[Z] && Jd(o, t);
        let r = t[ot];
        r !== null && r.detachView(e);
    }
    vu(t);
}
finally {
    O(n);
} }
function cg(e, t, n, o) { let r = e?.[yt]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && En.add(e), zy(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), Z_(e, o);
}
else
    e && En.delete(e), o(!1); }, r); }
function Z_(e, t) { let n = e[yt]?.running; if (n) {
    n.then(() => { e[yt].running = void 0, En.delete(e), t(!0); });
    return;
} t(!1); }
function Y_(e, t) { let n = e.cleanup, o = t[Ft]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[Ft] = null); let r = t[pt]; if (r !== null) {
    t[pt] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[Lt]; if (i !== null) {
    t[Lt] = null;
    for (let s of i)
        s.destroy();
} }
function K_(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof yn)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    V(k.LifecycleHookStart, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        V(k.LifecycleHookEnd, a, c);
                    }
                }
            else {
                V(k.LifecycleHookStart, r, i);
                try {
                    i.call(r);
                }
                finally {
                    V(k.LifecycleHookEnd, r, i);
                }
            }
        }
    } }
function Xd(e, t, n) { return Yy(e, t.parent, n); }
function Yy(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[$]; if (De(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === He.None || r === He.Emulated)
        return null;
} return ne(o, n); }
function Ky(e, t, n) { return Xy(e, t, n); }
function Jy(e, t, n) { return e.type & 40 ? ne(e, n) : null; }
var Xy = Jy, Pu;
function ev(e, t) { Xy = e, Pu = t; }
function ef(e, t, n, o) { let r = Xd(e, o, t), i = t[T], s = o.parent || t[le], a = Ky(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            rg(i, r, n[c], a, !1);
    else
        rg(i, r, n, a, !1); Pu !== void 0 && Pu(i, o, t, n, r); }
function gn(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return ne(t, e);
    if (n & 4)
        return Bs(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return gn(e, o);
        {
            let r = e[t.index];
            return K(r) ? Bs(-1, r) : F(r);
        }
    }
    else {
        if (n & 128)
            return gn(e, t.next);
        if (n & 32)
            return zd(t, e)() || F(e[t.index]);
        {
            let o = tv(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = ht(e[ee]);
                return gn(r, o);
            }
            else
                return gn(e, t.next);
        }
    }
} return null; }
function tv(e, t) { if (t !== null) {
    let o = e[ee][le], r = t.projection;
    return o.projection[r];
} return null; }
function Bs(e, t) { let n = q + e + 1; if (n < t.length) {
    let o = t[n], r = o[m].firstChild;
    if (r !== null)
        return gn(o, r);
} return t[Ye]; }
function tf(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[L];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && Ve(F(c), o), n.flags |= 2), !Oo(n))
        if (l & 8)
            tf(e, t, n.child, o, r, i, !1), eo(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = zd(n, o), d;
            for (; d = u();)
                eo(t, e, a, r, d, n, i, o);
            eo(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? nv(e, t, o, n, r, i) : eo(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function Sa(e, t, n, o, r, i) { tf(n, o, e.firstChild, t, r, i, !1); }
function J_(e, t, n) { let o = t[T], r = Xd(e, n, t), i = n.parent || t[le], s = Ky(i, n, t); nv(o, 0, t, n, r, s); }
function nv(e, t, n, o, r, i) { let s = n[ee], c = s[le].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        eo(t, e, n[L], r, u, o, i, n);
    }
else {
    let l = c, u = s[Z];
    Pr(o) && (l.flags |= 128), tf(e, t, l, u, r, i, !0);
} }
function X_(e, t, n, o, r, i, s) { let a = o[Ye], c = F(o); a !== c && eo(t, e, n, i, a, r, s); for (let l = q; l < o.length; l++) {
    let u = o[l];
    Sa(u[m], u, e, t, i, a);
} }
function eS(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : Vs.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= Vs.Important), e.setStyle(n, o, r, i));
} }
function ov(e, t, n, o, r) { let i = fe(), s = o & 2; try {
    Ht(-1), s && t.length > I && By(e, t, I, !1);
    let a = s ? k.TemplateUpdateStart : k.TemplateCreateStart;
    V(a, r, n), n(o, r);
}
finally {
    Ht(i);
    let a = s ? k.TemplateUpdateEnd : k.TemplateCreateEnd;
    V(a, r, n);
} }
function ba(e, t, n) { iS(e, t, n), (n.flags & 64) === 64 && sS(e, t, n); }
function Lo(e, t, n = ne) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function tS(e, t, n, o) { let i = o.get(Td, Bm) || n === He.ShadowDom || n === He.ExperimentalIsolatedShadowDom, s = e.selectRootElement(t, i); return nS(s), s; }
function nS(e) { rv(e); }
var rv = () => null;
function oS(e) { wm(e) ? wy(e) : Sw(e); }
function iv() { rv = oS; }
function rS(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function Aa(e, t, n, o, r, i) { let s = t[m]; if (xa(e, s, t, n, o)) {
    De(e) && sv(t, e.index);
    return;
} e.type & 3 && (n = rS(n)), nf(e, t, n, o, r, i); }
function nf(e, t, n, o, r, i) { if (e.type & 3) {
    let s = ne(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function sv(e, t) { let n = ye(t, e); n[w] & 16 || (n[w] |= 64); }
function iS(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; De(n) && j_(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || ks(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = xr(t, e, s, n);
    if (Ve(c, t), i !== null && lS(t, s - o, c, a, n, i), Fe(a)) {
        let l = ye(n.index, t);
        l[U] = xr(t, e, s, n);
    }
} }
function sS(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = bh(); try {
    Ht(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        Xi(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && aS(c, l);
    }
}
finally {
    Ht(-1), Xi(s);
} }
function aS(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function of(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        jy(t, i.selectors, !1) && (o ??= [], Fe(i) ? o.unshift(i) : o.push(i));
    } return o; }
function cS(e, t, n, o, r, i) { let s = ne(e, t); Ra(t[T], s, i, e.value, n, o, r); }
function Ra(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? R(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function lS(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        fo(o, n, c, l);
    } }
function Oa(e, t, n, o, r) { let i = I + n, s = t[m], a = r(s, t, e, o, n); t[i] = a, st(e, !0); let c = e.type === 2; return c ? (_y(t[T], a, e), (Mh() === 0 || Bn(e)) && Ve(a, t), Nh()) : Ve(a, t), yr() && (!c || !Oo(e)) && ef(s, t, a, e), e; }
function ka(e) { let t = e; return Ml() ? Nl() : (t = t.parent, st(t, !1)), t; }
function av(e, t, n) { return (e === null || Fe(e)) && (n = fr(n[t.index])), n[T]; }
function rf(e, t) { let n = e[L]; if (!n)
    return; let o; try {
    o = n.get(It, null);
}
catch {
    o = null;
} o?.(t); }
function xa(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        fo(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        fo(u, l, o, r), a = !0;
    } return a; }
function uS(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], y = d[f + 1];
            fo(h, n[p], y, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (fo(o, n[s], r, i), l = !0), l; }
function dS(e, t) { let n = ye(t, e), o = n[m]; fS(o, n); let r = n[$]; r !== null && n[ue] === null && (n[ue] = ty(r, n[L])), V(k.ComponentStart); try {
    Pa(o, n, n[U]);
}
finally {
    V(k.ComponentEnd, n[U]);
} }
function fS(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function Pa(e, t, n) { ns(t); try {
    let o = e.viewQuery;
    o !== null && Tu(1, o, n);
    let r = e.template;
    r !== null && ov(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[ot]?.finishViewCreation(e), e.staticContentQueries && fy(e, t), e.staticViewQueries && Tu(2, e.viewQuery, n);
    let i = e.components;
    i !== null && pS(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[w] &= -5, os();
} }
function pS(e, t) { for (let n = 0; n < t.length; n++)
    dS(e, t[n]); }
function Fo(e, t, n, o) { let r = O(null); try {
    let i = t.tView, a = e[w] & 4096 ? 4096 : 16, c = Ca(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[mt] = l;
    let u = e[ot];
    return u !== null && (c[ot] = u.createEmbeddedView(i)), Pa(i, c, n), c;
}
finally {
    O(r);
} }
function In(e, t) { return !t || t.firstChild === null || Pr(e); }
function po(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(F(i)), K(i) && La(i, o);
    let s = n.type;
    if (s & 8)
        po(e, t, n.child, o);
    else if (s & 32) {
        let a = zd(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = tv(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = ht(t[ee]);
            po(c[m], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function La(e, t) { for (let n = q; n < e.length; n++) {
    let o = e[n], r = o[m].firstChild;
    r !== null && po(o[m], o, r, t);
} e[Ye] !== e[$] && t.push(e[Ye]); }
function cv(e) { if (e[cn] !== null) {
    for (let t of e[cn])
        t.impl.addSequence(t);
    e[cn].length = 0;
} }
var lv = [];
function hS(e) { return e[Ae] ?? gS(e); }
function gS(e) { let t = lv.pop() ?? Object.create(yS); return t.lView = e, t; }
function mS(e) { e.lView[Ae] !== e && (e.lView = null, lv.push(e)); }
var yS = we(Q({}, Sc), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { dn(e.lView); }, consumerOnSignalRead() { this.lView[Ae] = this; } });
function vS(e) { let t = e[Ae] ?? Object.create(ES); return t.lView = e, t; }
var ES = we(Q({}, Sc), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = ht(e.lView); for (; t && !uv(t[m]);)
        t = ht(t); t && Zi(t); }, consumerOnSignalRead() { this.lView[Ae] = this; } });
function uv(e) { return e.type !== 2; }
function dv(e) { if (e[Lt] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[Lt])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[w] & 8192);
} }
var IS = 100;
function fv(e, t = 0) { let o = e[Ze].rendererFactory, r = !1; r || o.begin?.(); try {
    DS(e, t);
}
finally {
    r || o.end?.();
} }
function DS(e, t) { let n = _l(); try {
    Yo(!0), Lu(e, t);
    let o = 0;
    for (; Un(e);) {
        if (o === IS)
            throw new C(103, !1);
        o++, Lu(e, 1);
    }
}
finally {
    Yo(n);
} }
function pv(e, t, n, o) { if (it(t))
    return; let r = t[w], i = !1, s = !1; ns(t); let a = !0, c = null, l = null; i || (uv(e) ? (l = hS(t), c = Wo(l)) : Ni() === null ? (a = !1, l = vS(t), c = Wo(l)) : t[Ae] && (xt(t[Ae]), t[Ae] = null)); try {
    dl(t), Sl(e.bindingStartIndex), n !== null && ov(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && vs(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && Es(t, p, 0, null), Gl(t, 0);
        }
    if (s || CS(t), dv(t), hv(t, 0), e.contentQueries !== null && fy(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && vs(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && Es(t, p, 1), Gl(t, 1);
        }
    MS(e, t);
    let d = e.components;
    d !== null && mv(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && Tu(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && vs(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && Es(t, p, 2), Gl(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[zi]) {
        for (let p of t[zi])
            p();
        t[zi] = null;
    }
    i || (cv(t), t[w] &= -73);
}
catch (u) {
    throw i || dn(t), u;
}
finally {
    l !== null && (_i(l, c), a && mS(l)), os();
} }
function hv(e, t) { for (let n = Om(e); n !== null; n = km(n))
    for (let o = q; o < n.length; o++) {
        let r = n[o];
        gv(r, t);
    } }
function CS(e) { for (let t = Om(e); t !== null; t = km(t)) {
    if (!(t[w] & 2))
        continue;
    let n = t[ln];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        Zi(r);
    }
} }
function TS(e, t, n) { V(k.ComponentStart); let o = ye(t, e); try {
    gv(o, n);
}
finally {
    V(k.ComponentEnd, o[U]);
} }
function gv(e, t) { Qi(e) && Lu(e, t); }
function Lu(e, t) { let o = e[m], r = e[w], i = e[Ae], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && Si(i)), s ||= !1, i && (i.dirty = !1), e[w] &= -9217, s)
    pv(o, e, o.template, e[U]);
else if (r & 8192) {
    let a = O(null);
    try {
        dv(e), hv(e, 1);
        let c = o.components;
        c !== null && mv(e, c, 1), cv(e);
    }
    finally {
        O(a);
    }
} }
function mv(e, t, n) { for (let o = 0; o < t.length; o++)
    TS(e, t[o], n); }
function MS(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                Ht(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                Sh(s, i);
                let c = t[i];
                V(k.HostBindingsUpdateStart, c);
                try {
                    a(2, c);
                }
                finally {
                    V(k.HostBindingsUpdateEnd, c);
                }
            }
        }
    }
    finally {
        Ht(-1);
    } }
function ui(e, t) { let n = _l() ? 64 : 1088; for (e[Ze].changeDetectionScheduler?.notify(t); e;) {
    e[w] |= n;
    let o = ht(e);
    if (rt(e) && !o)
        return e;
    e = o;
} return null; }
function yv(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function vv(e, t) { let n = q + t; if (n < e.length)
    return e[n]; }
function jo(e, t, n, o = !0) { let r = t[m]; if (NS(r, t, e, n), o) {
    let s = Bs(n, e), a = t[T], c = a.parentNode(e[Ye]);
    c !== null && z_(r, e[le], a, t, c, s);
} let i = t[ue]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function sf(e, t) { let n = jr(e, t); return n !== void 0 && li(n[m], n), n; }
function jr(e, t) { if (e.length <= q)
    return; let n = q + t, o = e[n]; if (o) {
    let r = o[mt];
    r !== null && r !== e && Jd(r, o), t > 0 && (e[n - 1][ge] = o[ge]);
    let i = sr(e, q + t);
    Qy(o[m], o);
    let s = i[ot];
    s !== null && s.detachView(i[m]), o[Z] = null, o[ge] = null, o[w] &= -129;
} return o; }
function NS(e, t, n, o) { let r = q + o, i = n.length; o > 0 && (n[r - 1][ge] = t), o < i - q ? (t[ge] = n[r], Kc(n, q + o, t)) : (n.push(t), t[ge] = null), t[Z] = n; let s = t[mt]; s !== null && n !== s && Ev(s, t); let a = t[ot]; a !== null && a.insertView(e), Yi(t), t[w] |= 128; }
function Ev(e, t) { let n = e[ln], o = t[Z]; if (te(o))
    e[w] |= 2;
else {
    let r = o[Z][ee];
    t[ee] !== r && (e[w] |= 2);
} n === null ? e[ln] = [t] : n.push(t); }
var zt = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[m]; return po(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[U]; }
    set context(t) { this._lView[U] = t; }
    get destroyed() { return it(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[Z];
        if (K(t)) {
            let n = t[dr], o = n ? n.indexOf(this) : -1;
            o > -1 && (jr(t, o), sr(n, o));
        }
        this._attachedToViewContainer = !1;
    } li(this._lView[m], this._lView); }
    onDestroy(t) { hr(this._lView, t); }
    markForCheck() { ui(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[w] &= -129; }
    reattach() { Yi(this._lView), this._lView[w] |= 128; }
    detectChanges() { this._lView[w] |= 1024, fv(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new C(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = rt(this._lView), n = this._lView[mt]; n !== null && !t && Jd(n, this._lView), Zy(this._lView[m], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new C(902, !1); this._appRef = t; let n = rt(this._lView), o = this._lView[mt]; o !== null && !n && Ev(o, this._lView), Yi(this._lView); }
};
function wS(e) { return Un(e._lView) || !!(e._lView[w] & 64); }
function _S(e) { Zi(e._lView); }
var Vr = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = SS;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = Fo(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new zt(i); }
} return e; })();
function SS() { return Fa(S(), g()); }
function Fa(e, t) { return e.type & 4 ? new Vr(t, e, No(e, t)) : null; }
var Fu = "<-- AT THIS LOCATION";
function bS(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function AS(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${xS(e, t, !1)}

`, r = LS();
    throw new C(-502, n + o + r);
}
function Iv(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${PS(e)}

`, o = t + n + FS();
    return new C(-503, o);
}
function RS(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${Us(r)}"`);
    } return t.join(" "); }
var OS = new Set(["ngh", "ng-version", "ng-server-context"]);
function kS(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    OS.has(o.name) || t.push(`${o.name}="${Us(o.value)}"`);
} return t.join(" "); }
function Kl(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = RS(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${bS(e.type)})`;
} }
function Cs(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = kS(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? Us(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${Us(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function xS(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + Kl(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + Kl(t) + `
`, r += `  <!-- container -->  ${Fu}
`) : r += "  " + Kl(t) + `  ${Fu}
`, r += `  \u2026
`;
    let i = t.type ? Xd(e[m], t, e) : null;
    return i && (r = Cs(i, `
` + r)), r;
}
function PS(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + Cs(o.previousSibling) + `
`), n += "  " + Cs(o) + `  ${Fu}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = Cs(o.parentNode, `
` + n)), n;
}
function LS(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function FS() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function jS(e) { return e.replace(/\s+/gm, ""); }
function Us(e, t = 50) { return e ? (e = jS(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function Dv(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? Jy(e, t, n) : F(n[r]); }
function Cv(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            vn(e, s, l, a, !1);
        }
} }
function An(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = af(e, t, n, o, r), _h() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = $n();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return st(i, !0), i; }
function af(e, t, n, o, r) { let i = Tl(), s = Ml(), a = s ? i : i && i.parent, c = e.data[t] = HS(e, a, n, t, o, r); return VS(e, c, i, s), c; }
function VS(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function HS(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return gr() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, fieldIndex: -1, customControlIndex: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function Tv(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        Mv(o) || BS(o, t) && US(o) === null && $S(o, t.index);
    } }
function Mv(e) { return !(e.type & 64); }
function BS(e, t) { return Mv(t) || e.index > t.index; }
function US(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function $S(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (ev(Dv, Cv), e.insertBeforeIndex = t); }
function Tr(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function qS(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function GS(e, t) { let n = e.insertBeforeIndex; n === null ? (ev(Dv, Cv), n = e.insertBeforeIndex = [null, t]) : (uh(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function WS(e, t, n) { let o = af(e, n, 64, null, null); return Tv(t, o), o; }
function ja(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function zS(e) { return e >>> 17; }
function QS(e) { return (e & 131070) >>> 1; }
function ZS(e, t, n) { return e | t << 17 | n << 1; }
function Nv(e) { return e === -1; }
function cf(e, t, n) { e.index = 0; let o = ja(t, n); o !== null ? e.removes = t.remove[o] : e.removes = j; }
function $s(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[m].data[n];
        return cf(e, o, e.lView), $s(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), $s(e)); }
function YS() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return cf(e, n.value, o), $s.bind(null, e); } return t; }
function KS(e, t) { let n = { stack: [], index: -1, lView: t }; return cf(n, e, t), $s.bind(null, n); }
var JS = new RegExp(`^(\\d+)*(${Dd}|${Id})*(.*)`);
function XS(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function eb(e) { let t = e.match(JS), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function tb(e) { return !e.prev && e.parent?.type === 8; }
function Jl(e) { return e.index - I; }
function Vo(e, t) { return !(e.type & 144) && !!t[e.index] && wv(F(t[e.index])); }
function wv(e) { return !!e && !e.isConnected; }
function _v(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function nb(e, t, n) { let r = e.data[Xr]?.[n]; return r ? Sv(r, t) : null; }
function di(e, t, n, o) { let r = Jl(o), i = _v(e, r); if (i === void 0) {
    let s = e.data[Xr];
    if (s?.[r])
        i = Sv(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (tb(o)) {
            let l = Jl(o.parent);
            i = Cu(e, l);
        }
        else {
            let l = ne(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = Jl(c), d = Cu(e, u);
                if (c.type === 2 && d) {
                    let p = kd(e, u) + 1;
                    i = Va(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function Va(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function ob(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case Vm:
                n = n.firstChild;
                break;
            case Hm:
                n = n.nextSibling;
                break;
        }
} return n; }
function Sv(e, t) { let [n, ...o] = eb(e), r; if (n === Id)
    r = t[ee][$];
else if (n === Dd)
    r = Ud(t[ee][$]);
else {
    let i = Number(n);
    r = F(t[i + I]);
} return ob(r, o); }
function ju(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return rb(e, t); {
    let n = t.parentElement, o = ju(e, n), r = ju(n.firstChild, t);
    return !o || !r ? null : [...o, Vm, ...r];
} }
function rb(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(Hm); return o == null ? null : n; }
function lg(e, t, n) { let o = ju(e, t); return o === null ? null : XS(n, o); }
function bv(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (Vo(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = Id, i = t[ee][$]) : (r = o.index, i = F(t[r]), s = R(r - I)); let a = F(t[e.index]); if (e.type & 44) {
    let l = gn(t, e);
    l && (a = l);
} let c = lg(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = lg(l, a, Dd), c === null)
        throw AS(t, e);
} return c; }
function Av(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: ib }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function ib(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var Rv = !1, Ov = () => { };
function lf(e) { Rv = e; }
function Ha() { return Rv; }
function sb(e, t, n, o) { Ov(e, t, n, o); }
function kv() { Ov = db; }
function xv(e) { return e = e ?? E(ce), e.get(Md, !1); }
function Pv(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = ab(e), t.i18nChildren.set(e, n)), n; }
function ab(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = I; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function Lv(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[m], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && _m(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return Vu(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function Vu(e, t, n, o) { let r = null; for (let i of o) {
    let s = lb(e, t, n, i);
    s && (cb(r, s) && t.disjointNodes.add(i.index - I), r = s);
} return r; }
function cb(e, t) { return e && e.nextSibling !== t; }
function lb(e, t, n, o) { let r = F(e[o.index]); if (!r || wv(r))
    return t.disconnectedNodes.add(o.index - I), null; let i = r; switch (o.kind) {
    case 0: {
        xd(n, i);
        break;
    }
    case 1:
    case 2: {
        Vu(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), Vu(e, t, n, o.cases[a]);
        }
        break;
    }
} return ub(e, o); }
function ub(e, t) { let o = e[m].data[t.index]; return ra(o) ? gn(e, o) : t.kind === 3 ? KS(o, e)() ?? F(e[t.index]) : F(e[t.index]) ?? null; }
function fn(e, t) { e.currentNode = t; }
function Er(e, t, n) { let o = n.index - I, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function Xl(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function eu(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function db(e, t, n, o) { let r = e[ue]; if (!r || !Ha() || n && (_m(n) || va(r, n.index - I)))
    return; let i = e[m], s = i.data[t]; function a() { if (Nv(o)) {
    let p = di(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = iy(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[fa]?.[t - I] ?? [], f = r.dehydratedIcuData ??= new Map; Qn({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function Qn(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = nb(e.hydrationInfo, e.lView, r.index - I);
        i && (o = eu(t, i)), Qn(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - I))
        return;
    switch (n.kind) {
        case 0: {
            let o = Er(e, t, n);
            fn(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            Qn(e, eu(t, t.currentNode?.firstChild ?? null), n.children);
            let o = Er(e, t, n);
            fn(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - I, { hydrationInfo: r } = e, i = oy(r, o);
            switch (n.type) {
                case 0: {
                    let s = Er(e, t, n);
                    if (kw(r, o)) {
                        Qn(e, t, n.children);
                        let a = Xl(t, 1);
                        fn(t, a);
                    }
                    else if (Qn(e, eu(t, t.currentNode?.firstChild ?? null), n.children), fn(t, s?.nextSibling ?? null), i !== null) {
                        let a = Xl(t, i + 1);
                        fn(t, a);
                    }
                    break;
                }
                case 1: {
                    Er(e, t, n);
                    let s = Xl(t, i + 1);
                    fn(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                Qn(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = Er(e, t, n);
            fn(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var Fv = () => { };
function fb(e, t, n) { Fv(e, t, n); }
function jv() { Fv = pb; }
function pb(e, t, n) { let o = e[ue]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function hb(e) { let t = e[ue]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[T];
        for (let i of o.values())
            gb(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function gb(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - I);
    r && ii(e, r, !1);
} }
function Ba(e) { let t = e[Re] ?? [], o = e[Z][T], r = []; for (let i of t)
    i.data[pa] !== void 0 ? r.push(i) : Vv(i, o); e[Re] = r; }
function mb(e) { let { lContainer: t } = e, n = t[Re]; if (n === null)
    return; let r = t[Z][T]; for (let i of n)
    Vv(i, r); }
function Vv(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[Mt];
    for (; n < r;) {
        let i = o.nextSibling;
        ii(t, o, !1), o = i, n++;
    }
} }
function Ua(e) { Ba(e); let t = e[$]; te(t) && qs(t); for (let n = q; n < e.length; n++)
    qs(e[n]); }
function qs(e) { hb(e); let t = e[m]; for (let n = I; n < t.bindingStartIndex; n++)
    if (K(e[n])) {
        let o = e[n];
        Ua(o);
    }
    else
        te(e[n]) && qs(e[n]); }
function uf(e) { let t = e._views; for (let n of t) {
    let o = Od(n);
    o !== null && o[$] !== null && (te(o) ? qs(o) : Ua(o));
} }
function yb(e, t, n, o) { e !== null && (n.cleanup(t), Ua(e.lContainer), uf(o)); }
function vb(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[Jr] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[Mt] > 0 && (i.firstChild = e, e = Va(o[Mt], e)), n.push(i);
    } return [e, n]; }
var Hv = () => null, Bv = () => null;
function Uv() { Hv = Eb, Bv = Ib; }
function Eb(e, t) { return qv(e, t) ? e[Re].shift() : (Ba(e), null); }
function Hr(e, t) { return Hv(e, t); }
function Ib(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = Hr(e, t.tView.ssrId); return n[m].firstUpdatePass && o === null && Db(n, t), o; }
function $v(e, t, n) { return Bv(e, t, n); }
function Db(e, t) { let n = t; for (; n;) {
    if (ug(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (ug(e, n))
        return;
    n = n.next;
} }
function qv(e, t) { let n = e[Re]; return !t || n === null || n.length === 0 ? !1 : n[0].data[da] === t; }
function ug(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return K(o) && qv(o, n) ? (Ba(o), !0) : !1; }
var Gv = class {
}, $a = class {
}, Hu = class {
    resolveComponentFactory(t) { throw new C(917, !1); }
}, fi = class {
    static NULL = new Hu;
}, Br = class {
}, Cb = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => Tb();
} return e; })();
function Tb() { let e = g(), t = S(), n = ye(t.index, e); return (te(n) ? n : e)[T]; }
var Wv = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function df(e) { return e.ngModule !== void 0; }
function pn(e) { return !!rn(e); }
function fs(e) { return !!ze(e); }
function dg(e) { return !!be(e); }
function Mr(e) { return !!W(e); }
function Mb(e) { return W(e) ? "component" : be(e) ? "directive" : ze(e) ? "pipe" : "type"; }
function Nb(e, t) { if (tr(e) && (e = P(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Se(t)}", to return a standalone entity or NgModule but got "${Se(e) || e}".`); if (rn(e) == null) {
    let n = W(e) || be(e) || ze(e);
    if (n != null) {
        if (!n.standalone) {
            let o = Mb(e);
            throw new Error(`The "${Se(e)}" ${o}, imported from "${Se(t)}", is not standalone. Does the ${o} have the standalone: false flag?`);
        }
    }
    else
        throw df(e) ? new Error(`A module with providers was imported from "${Se(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Se(e)}" type, imported from "${Se(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var Bu = class {
    ownerNgModule = new Map;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new Map;
    standaloneComponentsScopeCache = new Map;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = rn(t);
            if (n?.declarations)
                for (let o of Xn(n.declarations))
                    Mr(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = W(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!pn(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = $i(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of Xn(n.imports))
        if (pn(r)) {
            let i = this.getNgModuleScope(r);
            $t(i.exported.directives, o.compilation.directives), $t(i.exported.pipes, o.compilation.pipes);
        }
        else if (lr(r))
            if (dg(r) || Mr(r))
                o.compilation.directives.add(r);
            else if (fs(r))
                o.compilation.pipes.add(r);
            else
                throw new C(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of Xn(n.declarations)) {
            if (pn(r) || lr(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            fs(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of Xn(n.exports))
        if (pn(r)) {
            let i = this.getNgModuleScope(r);
            $t(i.exported.directives, o.exported.directives), $t(i.exported.pipes, o.exported.pipes), $t(i.exported.directives, o.compilation.directives), $t(i.exported.pipes, o.compilation.pipes);
        }
        else
            fs(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of We(n ?? [])) {
        let i = P(r);
        try {
            Nb(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (pn(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            $t(s.exported.directives, o.compilation.directives), $t(s.exported.pipes, o.compilation.pipes);
        }
        else if (fs(i))
            o.compilation.pipes.add(i);
        else if (dg(i) || Mr(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = W(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function $t(e, t) { for (let n of e)
    t.add(n); }
var ho = new Bu, Ts = {}, io = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, Ts, o); return r !== Ts || n === Ts ? r : this.parentInjector.get(t, n, o); }
};
function Gs(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = Fi(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = Fi(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function Ho(e, t = 0) { let n = g(); if (n === null)
    return he(e, t); let o = S(); return Em(o, n, P(e), t); }
function zv() { let e = "invalid"; throw new Error(e); }
function Qv(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    Sb(e, t, n, a, i, c, l);
} i !== null && o !== null && wb(n, o, i); }
function wb(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new C(-301, !1);
    o.push(t[r], i);
} }
function _b(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function Sb(e, t, n, o, r, i, s) { let a = o.length, c = !1; for (let f = 0; f < a; f++) {
    let p = o[f];
    !c && Fe(p) && (c = !0, _b(e, n, f)), mu(ks(n, t), e, p.type);
} xb(n, e.data.length, a); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = ai(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = uo(n.mergedAttrs, p.hostAttrs), Ab(e, n, t, d, p), kb(d, p, r), s !== null && s.has(p)) {
        let [y, v] = s.get(p);
        n.directiveToIndex.set(p.type, [d, y + n.directiveStart, v + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} bb(e, n, i); }
function bb(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        fg(0, t, r, o), fg(1, t, r, o), hg(t, o, !1);
    else {
        let i = n.get(r);
        pg(0, t, i, o), pg(1, t, i, o), hg(t, o, !0);
    }
} }
function fg(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), Zv(t, i);
    } }
function pg(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), Zv(t, s);
    } }
function Zv(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function hg(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || $d(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function Ab(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = Pt(r.type, !0)), s = new yn(i, Fe(r), Ho, null); e.blueprint[o] = s, n[o] = s, Rb(e, t, o, ai(e, n, r.hostVars, H), r); }
function Rb(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    Ob(s) != a && s.push(a), s.push(n, o, i);
} }
function Ob(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function kb(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    Fe(t) && (n[""] = e);
} }
function xb(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function ff(e, t, n, o, r, i, s, a) { let c = t[m], l = c.consts, u = me(l, s), d = An(c, e, n, o, u); return i && Qv(c, t, d, me(l, a), r), d.mergedAttrs = uo(d.mergedAttrs, d.attrs), d.attrs !== null && Gs(d, d.attrs, !1), d.mergedAttrs !== null && Gs(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function pf(e, t) { um(e, t), al(t) && e.queries.elementEnd(t); }
function Yv(e, t, n, o, r, i) { let s = t.consts, a = me(s, r), c = An(t, e, n, o, a); if (c.mergedAttrs = uo(c.mergedAttrs, c.attrs), i != null) {
    let l = me(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && Gs(c, c.attrs, !1), c.mergedAttrs !== null && Gs(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function Ur(e) { return qa(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function Pb(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function Kv(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function qa(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function Jv(e, t) { let n = Ur(e), o = Ur(t); return n && o ? Pb(e, t, Jv) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function ut(e, t, n) { return e[t] = n; }
function pi(e, t) { return e[t]; }
function z(e, t, n) { if (n === H)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function Dn(e, t, n, o) { let r = z(e, t, n); return z(e, t + 1, o) || r; }
function Ga(e, t, n, o, r) { let i = Dn(e, t, n, o); return z(e, t + 2, r) || i; }
function Be(e, t, n, o, r, i) { let s = Dn(e, t, n, o); return Dn(e, t + 2, r, i) || s; }
function Tt(e, t, n) { return function o(r) { let i = De(e) ? ye(e.index, t) : t; ui(i, 5); let s = t[U], a = gg(t, s, n, r), c = o.__ngNextListenerFn__; for (; c;)
    a = gg(t, s, c, r) && a, c = c.__ngNextListenerFn__; return a; }; }
function gg(e, t, n, o) { let r = Zn(null); try {
    return V(k.OutputStart, t, n), n(o) !== !1;
}
catch (i) {
    return rf(e, i), !1;
}
finally {
    V(k.OutputEnd, t, n), Zn(r);
} }
function Ws(e, t, n, o, r, i, s, a) { let c = Bn(e), l = !1, u = null; if (!o && c && (u = Fb(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = ne(e, n), f = o ? o(d) : d;
    Mw(n, f, i, a);
    let p = r.listen(f, i, a);
    if (!Lb(i)) {
        let h = o ? y => o(F(y[e.index])) : e.index;
        Xv(h, t, n, i, a, p, !1);
    }
} return l; }
function Lb(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function Fb(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[Ft], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function Xv(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? hl(t) : null, c = pl(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function jb(e, t, n, o, r) { let i = Tt(e, t, n), s = Vb(e, t, o, r, i); }
function Vb(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, go(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, go(e, t, i, o, o, r)), c; }
function go(e, t, n, o, r, i) { let s = t[n], a = t[m], l = a.data[n].outputs[o], d = s[l].subscribe(i); Xv(e.index, a, t, r, i, d, !0); }
var Wt = Symbol("BINDING"), Hb = { kind: "input", requiredVars: 1 }, Bb = { kind: "output", requiredVars: 0 };
function Ub(e, t, n) { let o = g(), r = de(); if (z(o, r, n)) {
    let i = o[m], s = Oe(), a = ye(s.index, o);
    ui(a, 1);
    let c = i.directiveRegistry[e], l = uS(s, i, o, c, t, n);
} }
function eE(e, t) { let n = { [Wt]: Hb, update: () => Ub(n.targetIdx, e, t()) }; return n; }
function tE(e, t) { let n = { [Wt]: Bb, create: () => { let o = g(), r = S(), s = o[m].directiveRegistry[n.targetIdx]; jb(r, o, t, s, e); } }; return n; }
function $b(e, t) { let n = eE(e, t), o = tE(e + "Change", i => t.set(i)); return { [Wt]: { kind: "twoWay", requiredVars: n[Wt].requiredVars + o[Wt].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
var zs = class extends fi {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = W(t); return new Qt(n, this.ngModule); }
};
function qb(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & ci.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function Gb(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function Wb(e, t, n) { let o = t instanceof xe ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new io(n, o) : n; }
function zb(e) { let t = e.get(Br, null); if (t === null)
    throw new C(407, !1); let n = e.get(Wv, null), o = e.get(Ge, null); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1 }; }
function Qb(e, t) { let n = nE(e); return Da(t, n, n === "svg" ? ll : n === "math" ? ul : null); }
function nE(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var Qt = class extends $a {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= qb(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= Gb(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = P_(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { V(k.DynamicComponentStart); let a = O(null); try {
        let c = this.componentDef, l = Zb(o, c, s, i), u = Wb(c, r || this.ngModule, t), d = zb(u), f = d.rendererFactory.createRenderer(null, c), p = o ? tS(f, o, c.encapsulation, u) : Qb(c, f), h = s?.some(mg) || i?.some(D => typeof D != "function" && D.bindings.some(mg)), y = Ca(null, l, null, 512 | Gd(c), null, null, d, f, u, null, ty(p, u, !0));
        y[I] = p, ns(y);
        let v = null;
        try {
            let D = ff(I, y, 2, "#host", () => l.directiveRegistry, !0, 0);
            _y(f, p, D), Ve(p, y), ba(l, y, D), Pd(l, D, y), pf(l, D), n !== void 0 && Kb(D, this.ngContentSelectors, n), v = ye(D.index, y), y[U] = v[U], Pa(l, y, null);
        }
        catch (D) {
            throw v !== null && vu(v), vu(y), D;
        }
        finally {
            V(k.DynamicComponentEnd), os();
        }
        return new Qs(this.componentType, y, !!h);
    }
    finally {
        O(a);
    } }
};
function Zb(e, t, n, o) { let r = e ? ["ng-version", "21.0.2"] : L_(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[Wt].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[Wt].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = be(d);
        c.push(f);
    } return qd(0, null, Yb(i, s), 1, a, c, null, null, null, [r], null); }
function Yb(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function mg(e) { let t = e[Wt].kind; return t === "input" || t === "twoWay"; }
var Qs = class extends Gv {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = vt(n[m], I), this.location = No(this._tNode, n), this.instance = ye(this._tNode.index, n)[U], this.hostView = this.changeDetectorRef = new zt(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = xa(o, r[m], r, t, n); this.previousInputValues.set(t, n); let s = ye(o.index, r); ui(s, 1); }
    get injector() { return new Gt(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function Kb(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var Wa = (() => { class e {
    static __NG_ELEMENT_ID__ = Jb;
} return e; })();
function Jb() { let e = S(); return rE(e, g()); }
var Xb = Wa, oE = class extends Xb {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return No(this._hostTNode, this._hostLView); }
    get injector() { return new Gt(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = md(this._hostTNode, this._hostLView); if (pm(t)) {
        let n = Rs(t, this._hostLView), o = As(t), r = n[m].data[o + 8];
        return new Gt(r, n);
    }
    else
        return new Gt(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = yg(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - q; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = Hr(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, In(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !Dr(t), l; if (c)
        l = n;
    else {
        let v = n || {};
        l = v.index, o = v.injector, r = v.projectableNodes, i = v.environmentInjector || v.ngModuleRef, s = v.directives, a = v.bindings;
    } let u = c ? t : new Qt(W(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let D = (c ? d : this.parentInjector).get(xe, null);
        D && (i = D);
    } let f = W(u.componentType ?? {}), p = Hr(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, y = u.create(d, r, h, i, s, a); return this.insertImpl(y.hostView, l, In(this._hostTNode, p)), y; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (Th(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[Z], l = new oE(c, c[le], c[Z]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return jo(s, r, i, o), t.attachToViewContainerRef(), Kc(tu(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = yg(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = jr(this._lContainer, n); o && (sr(tu(this._lContainer), n), li(o[m], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = jr(this._lContainer, n); return o && sr(tu(this._lContainer), n) != null ? new zt(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function yg(e) { return e[dr]; }
function tu(e) { return e[dr] || (e[dr] = []); }
function rE(e, t) { let n, o = t[e.index]; return K(o) ? n = o : (n = yv(o, t, null, e), t[e.index] = n, Wd(t, n)), iE(n, t, e, o), new oE(n, e, t); }
function eA(e, t) { let n = e[T], o = n.createComment(""), r = ne(t, e), i = n.parentNode(r); return vn(n, i, o, n.nextSibling(r), !1), o; }
var iE = aE, hf = () => !1;
function sE(e, t, n) { return hf(e, t, n); }
function aE(e, t, n, o) { if (e[Ye])
    return; let r; n.type & 8 ? r = F(o) : r = eA(t, n), e[Ye] = r; }
function tA(e, t, n) { if (e[Ye] && e[Re])
    return !0; let o = n[ue], r = t.index - I; if (!o || _o(t) || va(o, r))
    return !1; let s = Cu(o, r), a = o.data[bo]?.[r], [c, l] = vb(s, a); return e[Ye] = c, e[Re] = l, !0; }
function nA(e, t, n, o) { hf(e, n, t) || aE(e, t, n, o); }
function cE() { iE = nA, hf = tA; }
var Uu = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, $u = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        mf(t, n).matches !== null && this.queries[n].setDirty(); }
}, Zs = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = aA(t) : this.predicate = t; }
}, qu = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, Gu = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, oA(n, i)), this.matchTNodeWithReadOption(t, n, Is(n, t, i, !1, !1));
        }
    else
        o === Vr ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, Is(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === Yr || r === Wa || r === Vr && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = Is(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function oA(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function rA(e, t) { return e.type & 11 ? No(e, t) : e.type & 4 ? Fa(e, t) : null; }
function iA(e, t, n, o) { return n === -1 ? rA(t, e) : n === -2 ? sA(e, t, o) : xr(e, e[m], n, t); }
function sA(e, t, n) { if (n === Yr)
    return No(t, e); if (n === Vr)
    return Fa(t, e); if (n === Wa)
    return rE(t, e); }
function lE(e, t, n, o) { let r = t[ot].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(iA(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function Wu(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = lE(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = q; d < u.length; d++) {
                let f = u[d];
                f[mt] === f[Z] && Wu(f[m], f, l, o);
            }
            if (u[ln] !== null) {
                let d = u[ln];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    Wu(p[m], p, l, o);
                }
            }
        }
    }
} return o; }
function gf(e, t) { return e[ot].queries[t].queryList; }
function uE(e, t, n) { let o = new xs((n & 4) === 4); return gl(e, t, o, o.destroy), (t[ot] ??= new $u).queries.push(new Uu(o)) - 1; }
function dE(e, t, n) { let o = b(); return o.firstCreatePass && (pE(o, new Zs(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), uE(o, g(), t); }
function fE(e, t, n, o) { let r = b(); if (r.firstCreatePass) {
    let i = S();
    pE(r, new Zs(t, n, o), i.index), cA(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return uE(r, g(), n); }
function aA(e) { return e.split(",").map(t => t.trim()); }
function pE(e, t, n) { e.queries === null && (e.queries = new qu), e.queries.track(new Gu(t, n)); }
function cA(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function mf(e, t) { return e.queries.getByIndex(t); }
function hE(e, t) { let n = e[m], o = mf(n, t); return o.crossesNgTemplate ? Wu(n, e, t, []) : lE(n, e, o, t); }
function yf(e, t, n) { let o, r = bi(() => { o._dirtyCounter(); let i = lA(o, e); if (t && i === void 0)
    throw new C(-951, !1); return i; }); return o = r[ae], o._dirtyCounter = Ut(0), o._flatValue = void 0, r; }
function vf(e) { return yf(!0, !1, e); }
function Ef(e) { return yf(!0, !0, e); }
function If(e) { return yf(!1, !1, e); }
function gE(e, t) { let n = e[ae]; n._lView = g(), n._queryIndex = t, n._queryList = gf(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function lA(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[w] & 4)
    return t ? void 0 : j; let r = gf(n, o), i = hE(n, o); return r.reset(i, Nm), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
var Cn = new Map, $r = new Set;
function mE(e) { return $e(this, null, function* () { let t = Cn; Cn = new Map; let n = new Map; function o(i) { let s = n.get(i); if (s)
    return s; let a = e(i).then(c => hA(i, c)); return n.set(i, a), a; } let r = Array.from(t).map(a => $e(null, [a], function* ([i, s]) { if (s.styleUrl && s.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); let c = []; s.templateUrl && c.push(o(s.templateUrl).then(f => { s.template = f; })); let l = typeof s.styles == "string" ? [s.styles] : s.styles ?? []; s.styles = l; let { styleUrl: u, styleUrls: d } = s; if (u && (d = [u], s.styleUrl = void 0), d?.length) {
    let f = Promise.all(d.map(p => o(p))).then(p => { l.push(...p), s.styleUrls = void 0; });
    c.push(f);
} yield Promise.all(c), $r.delete(i); })); yield Promise.all(r); }); }
function uA(e, t) { yE(t) && (Cn.set(e, t), $r.add(e)); }
function dA(e) { return $r.has(e); }
function yE(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls?.length || e.styleUrl); }
function fA() { let e = Cn; return Cn = new Map, e; }
function pA(e) { $r.clear(); for (let t of e.keys())
    $r.add(t); Cn = e; }
function vE() { return Cn.size === 0; }
function hA(e, t) { return $e(this, null, function* () { if (typeof t == "string")
    return t; if (t.status !== void 0 && t.status !== 200)
    throw new C(918, !1); return t.text(); }); }
var zu = new Map, EE = !0;
function gA(e, t, n) { if (t && t !== n && EE)
    throw new Error(`Duplicate module registered for ${e} - ${qe(t)} vs ${qe(t.name)}`); }
function Df(e, t) { let n = zu.get(t) || null; gA(t, n, e), zu.set(t, e); }
function Cf(e) { return zu.get(e); }
function mA(e) { EE = !e; }
var mo = class {
}, IE = class {
};
function DE(e, t) { return new yo(e, t ?? null, []); }
var yA = DE, yo = class extends mo {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new zs(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = rn(t); this._bootstrapComponents = Xn(i.bootstrap), this._r3Injector = Ll(t, n, [{ provide: mo, useValue: this }, { provide: fi, useValue: this.componentFactoryResolver }, ...o], qe(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, vo = class extends IE {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new yo(this.moduleType, t, []); }
};
function CE(e, t, n) { return new yo(e, t, n, !1); }
var qr = class extends mo {
    injector;
    componentFactoryResolver = new zs(this);
    instance = null;
    constructor(t) { super(); let n = new tn([...t.providers, { provide: mo, useValue: this }, { provide: fi, useValue: this.componentFactoryResolver }], t.parent || Vn(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function Tf(e, t, n = null) { return new qr({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var vA = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = qi(!1, n.type), r = o.length > 0 ? Tf([o], this._injector, `Standalone[${n.type.name}]`) : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e(he(xe)) });
} return e; })();
function TE(e) { return lt(() => { let t = _E(e), n = we(Q({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === aa.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(vA).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || He.Emulated, styles: e.styles || j, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && J("NgStandalone"), SE(n); let o = e.dependencies; return n.directiveDefs = Ys(o, ME), n.pipeDefs = Ys(o, ze), n.id = CA(n), n; }); }
function ME(e) { return W(e) || be(e); }
function Mf(e) { return lt(() => ({ type: e.type, bootstrap: e.bootstrap || j, declarations: e.declarations || j, imports: e.imports || j, exports: e.exports || j, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function EA(e, t) { if (e == null)
    return Pe; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = ci.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function IA(e) { if (e == null)
    return Pe; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function NE(e) { return lt(() => { let t = _E(e); return SE(t), t; }); }
function wE(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function _E(e) { let t = {}; return { type: e.type, providersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || Pe, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || j, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, inputs: EA(e.inputs, t), outputs: IA(e.outputs), debugInfo: null }; }
function SE(e) { e.features?.forEach(t => t(e)); }
function Ys(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var DA = new Map;
function CA(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function bE(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = TA, n.hostDirectives = o ? e.map(Qu) : [e]) : o ? n.hostDirectives.unshift(...e.map(Qu)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function TA(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, AE(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && Fe(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function AE(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                vg(Qu(i), t, n);
        }
        else
            vg(o, t, n); }
function vg(e, t, n) { let o = be(e.directive); MA(o.declaredInputs, e.inputs), AE(o, t, n), n.set(o, e), t.push(o); }
function Qu(e) { return typeof e == "function" ? { directive: P(e), inputs: Pe, outputs: Pe } : { directive: P(e.directive), inputs: Eg(e.inputs), outputs: Eg(e.outputs) }; }
function Eg(e) { if (e === void 0 || e.length === 0)
    return Pe; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function MA(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function NA(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function Nf(e) { let t = NA(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (Fe(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new C(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = nu(e.inputs), s.declaredInputs = nu(e.declaredInputs), s.outputs = nu(e.outputs);
            let a = r.hostBindings;
            a && AA(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && SA(e, c), l && bA(e, l), wA(e, r), lh(e.outputs, r.outputs), Fe(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === Nf && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} _A(o); }
function wA(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function _A(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = uo(r.hostAttrs, n = uo(n, r.hostAttrs));
} }
function nu(e) { return e === Pe ? {} : e === j ? [] : e; }
function SA(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function bA(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function AA(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
function RE(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = uo(e.mergedAttrs, e.attrs);
    let u = e.tView = qd(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), st(e, !1); let c = OE(n, t, e, o); yr() && ef(n, t, c, e), Ve(c, t); let l = yv(c, t, c, e); t[o + I] = l, Wd(t, l), sE(l, e, t); }
function RA(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; return t.firstCreatePass ? (f = An(t, d, 4, s || null, a || null), Ji() && Qv(t, e, f, me(t.consts, l), of), um(t, f)) : f = t.data[d], RE(f, e, t, n, o, r, i, c), Bn(f) && ba(t, e, f), l != null && Lo(e, f, u), f; }
function Tn(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; if (t.firstCreatePass) {
    if (f = An(t, d, 4, s || null, a || null), l != null) {
        let p = me(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return RE(f, e, t, n, o, r, i, c), l != null && Lo(e, f, u), f; }
function wf(e, t, n, o, r, i, s, a) { let c = g(), l = b(), u = me(l.consts, i); return RA(c, l, e, t, n, o, r, u, void 0, s, a), wf; }
function _f(e, t, n, o, r, i, s, a) { let c = g(), l = b(), u = me(l.consts, i); return Tn(c, l, e, t, n, o, r, u, void 0, s, a), _f; }
var OE = kE;
function kE(e, t, n, o) { return Je(!0), t[T].createComment(""); }
function OA(e, t, n, o) { let r = !Ea(t, n); Je(r); let i = t[ue]?.data[ua]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return kE(e, t); let s = t[ue], a = di(s, e, t, n); ya(s, o, a); let c = kd(s, o); return Va(c, a); }
function xE() { OE = OA; }
var re = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(re || {}), Ig = 0, kA = 1, Y = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(Y || {}), Gr = (function (e) { return e[e.Initial = -1] = "Initial", e; })(Gr || {}), so = 0, Rt = 1, Cr = 2, ps = 3, xA = 4, PA = 5, za = 6, LA = 7, ao = 8, FA = 9, Sf = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(Sf || {});
function hi(e, t, n) { let o = LE(e); t[o] === null && (t[o] = []), t[o].push(n); }
function Ms(e, t) { let n = LE(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function PE(e) { Ms(1, e), Ms(0, e), Ms(2, e); }
function LE(e) { let t = xA; return e === 1 ? t = PA : e === 2 && (t = FA), t; }
function gi(e) { return e + 1; }
function Te(e, t) { let n = e[m], o = gi(t.index); return e[o]; }
function jA(e, t, n) { let o = e[m], r = gi(t); e[r] = n; }
function pe(e, t) { let n = gi(t.index); return e.data[n]; }
function VA(e, t, n) { let o = gi(t); e.data[o] = n; }
function HA(e, t, n) { let o = t[m], r = pe(o, n); switch (e) {
    case Y.Complete: return r.primaryTmplIndex;
    case Y.Loading: return r.loadingTmplIndex;
    case Y.Error: return r.errorTmplIndex;
    case Y.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function Zu(e, t) { return t === Y.Placeholder ? e.placeholderBlockConfig?.[Ig] ?? null : t === Y.Loading ? e.loadingBlockConfig?.[Ig] ?? null : null; }
function FE(e) { return e.loadingBlockConfig?.[kA] ?? null; }
function Dg(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function BA(e, t) { let n = t.primaryTmplIndex + I; return vt(e, n); }
function jE(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function VE(e, t) { let n = null, o = gi(t.index); return I < o && o < e.bindingStartIndex && (n = pe(e, t)), !!n && jE(n); }
function bf(e, t, n, o) { let r = n.get(G); return Cw(e, () => r.run(t), i => r.runOutsideAngular(() => Dw(i)), o); }
function UA(e, t, n) { return n == null ? e : n >= 0 ? fl(n, e) : e[t.index][q] ?? null; }
function $A(e, t) { return un(I + t, e); }
function Bo(e, t, n, o, r, i, s, a) { let c = e[L], l = c.get(G), u; function d() { if (it(e)) {
    u.destroy();
    return;
} let f = Te(e, t), p = f[Rt]; if (p !== Gr.Initial && p !== Y.Placeholder) {
    u.destroy();
    return;
} let h = UA(e, t, o); if (!h || (u.destroy(), it(h)))
    return; let y = $A(h, n), v = r(y, () => { l.run(() => { e !== h && Ki(h, v), i(); }); }, c, a); e !== h && hr(h, v), hi(s, f, v); } u = Gy({ read: d }, { injector: c }); }
function Qa(e, t) { let n = t.get(WA), o = () => n.remove(e); return n.add(e), o; }
var qA = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, GA = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, WA = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = E(G);
    requestIdleCallbackFn = qA().bind(globalThis);
    cancelIdleCallbackFn = GA().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function Za(e) { return (t, n) => HE(e, t, n); }
function HE(e, t, n) { let o = n.get(BE), r = n.get(G), i = () => o.remove(t); return o.add(e, t, r), i; }
var BE = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } Xc(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && Jc(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && Jc(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), zA = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? Tf(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), QA = new M("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), UE = new M("");
function ou(e, t, n) { return e.get(zA).getOrCreateInjector(t, e, n, ""); }
function ZA(e, t, n) { if (e instanceof io) {
    let r = e.injector, i = e.parentInjector, s = ou(i, t, n);
    return new io(r, s);
} let o = e.get(xe); if (o !== e) {
    let r = ou(o, t, n);
    return new io(e, r);
} return ou(e, t, n); }
function Ct(e, t, n, o = !1) { let r = n[Z], i = r[m]; if (it(r))
    return; let s = Te(r, t), a = s[Rt], c = s[LA]; if (!(c !== null && e < c) && Tg(a, e) && Tg(s[so] ?? -1, e)) {
    let l = pe(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (FE(l) !== null || Zu(l, Y.Loading) !== null || Zu(l, Y.Placeholder)) ? Yu : $E;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        rf(r, f);
    }
} }
function YA(e, t) { let n = e[Re]?.findIndex(r => r.data[ei] === t[Rt]) ?? -1; return { dehydratedView: n > -1 ? e[Re][n] : null, dehydratedViewIx: n }; }
function $E(e, t, n, o, r) { V(k.DeferBlockStateStart); let i = HA(e, r, o); if (i !== null) {
    t[Rt] = e;
    let s = r[m], a = i + I, c = vt(s, a), l = 0;
    sf(n, l);
    let u;
    if (e === Y.Complete) {
        let h = pe(s, o), y = h.providers;
        y && y.length > 0 && (u = ZA(r[L], h, y));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = YA(n, t), p = Fo(r, c, null, { injector: u, dehydratedView: d });
    if (jo(n, p, l, In(c, d)), ui(p, 2), f > -1 && n[Re]?.splice(f, 1), (e === Y.Complete || e === Y.Error) && Array.isArray(t[ao])) {
        for (let h of t[ao])
            h();
        t[ao] = null;
    }
} V(k.DeferBlockStateEnd); }
function KA(e, t, n, o, r) { let i = Date.now(), s = r[m], a = pe(s, o); if (t[Cr] === null || t[Cr] <= i) {
    t[Cr] = null;
    let c = FE(a), l = t[ps] !== null;
    if (e === Y.Loading && c !== null && !l) {
        t[so] = e;
        let u = Cg(c, t, o, n, r);
        t[ps] = u;
    }
    else {
        e > Y.Loading && l && (t[ps](), t[ps] = null, t[so] = null), $E(e, t, n, o, r);
        let u = Zu(a, e);
        u !== null && (t[Cr] = i + u, Cg(u, t, o, n, r));
    }
}
else
    t[so] = e; }
function Cg(e, t, n, o, r) { return HE(e, () => { let s = t[so]; t[Cr] = null, t[so] = null, s !== null && Ct(s, n, o); }, r[L]); }
function Tg(e, t) { return e < t; }
function Uo(e, t) { let n = e[t.index]; Ct(Y.Placeholder, t, n); }
function Mg(e, t, n) { e.loadingPromise.then(() => { e.loadingState === re.COMPLETE ? Ct(Y.Complete, t, n) : e.loadingState === re.FAILED && Ct(Y.Error, t, n); }); }
var Yu = null;
function qE(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = me(r, n)), o != null && (t.loadingBlockConfig = me(r, o)), Yu === null && (Yu = KA); }
var Ns = "__ngAsyncComponentMetadataFn__";
function JA(e) { return e[Ns] ?? null; }
function GE(e, t, n) { let o = e; return o[Ns] = () => Promise.all(t()).then(r => (n(...r), o[Ns] = null, r)), o[Ns]; }
function Af(e, t, n, o) { return lt(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = Q(Q({}, r.propDecorators), o) : r.propDecorators = o); }); }
var XA = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function WE(e) { return typeof e == "function" && e[ae] !== void 0; }
function Rf(e) { return WE(e) && typeof e.set == "function"; }
function ws(e, t) { let n = e[m]; for (let o = I; o < n.bindingStartIndex; o++)
    if (K(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = pe(n, s);
            if (jE(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        te(r[$]) && ws(r[$], t);
        for (let s = q; s < r.length; s++)
            ws(r[s], t);
    }
    else
        te(e[o]) && ws(e[o], t); }
function eR() { return J("Chrome DevTools profiling"), () => { }; }
function tR(e) { let t = e.get(Bt), n = e.get(_t), o = jm(t, n), r = {}; for (let [i, s] of Object.entries(o))
    Nw(i) || (r[i] = s); return r; }
var Ng = "ng";
function nR(e, t) { oR(e, t); }
function oR(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = _e;
    n[Ng] ??= {}, n[Ng][e] = t;
} }
var zE = new M(""), QE = new M(""), rR = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, Wi() && (this._destroyRef = E(je, { optional: !0 }) ?? void 0), Of || (YE(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { G.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(he(G), he(ZE), he(QE)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac });
} return e; })(), ZE = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return Of?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function YE(e) { Of = e; }
var Of;
function kf(e) { return !!e && typeof e.then == "function"; }
function KE(e) { return !!e && typeof e.subscribe == "function"; }
var xf = new M("");
function iR(e) { return Qe([{ provide: xf, multi: !0, useValue: e }]); }
var Pf = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = E(xf, { optional: !0 }) ?? [];
    injector = E(ce);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = Gi(this.injector, r);
        if (kf(i))
            n.push(i);
        else if (KE(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), mi = new M("");
function Lf() { Kp(() => { let e = ""; throw new C(600, e); }); }
function JE(e) { return e.isBoundToModule; }
var sR = 10;
function Ff(e, t) { return Array.isArray(t) ? t.reduce(Ff, e) : Q(Q({}, e), t); }
var et = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = E(It);
    afterRenderManager = E(Ma);
    zonelessEnabled = E(Wn);
    rootEffectScheduler = E(is);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new Jg;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = E(Et);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(fN(n => !n)); }
    constructor() { E(Po, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = E(xe);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = ce.NULL) { return this._injector.get(G).run(() => { V(k.BootstrapComponentStart); let s = n instanceof $a; if (!this._injector.get(Pf).done) {
        let h = "";
        throw new C(405, h);
    } let c; s ? c = n : c = this._injector.get(fi).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = JE(c) ? void 0 : this._injector.get(mo), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(zE, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), Nr(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), V(k.BootstrapComponentEnd, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { V(k.ChangeDetectionStart), this.tracingSnapshot !== null ? this.tracingSnapshot.run(Ta.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw V(k.ChangeDetectionEnd), new C(101, !1); let n = O(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, O(n), this.afterTick.next(), V(k.ChangeDetectionEnd);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(Br, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < sR;) {
        V(k.ChangeDetectionSyncStart);
        try {
            this.synchronizeOnce();
        }
        finally {
            V(k.ChangeDetectionSyncEnd);
        }
    } }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !Un(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            fv(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => Un(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; Nr(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(mi, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => Nr(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new C(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Nr(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function jf() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function XE(e) { let t = g(), n = S(); if (Uo(t, n), !nI(0, t))
    return; let o = t[L], r = Te(t, n), i = e(() => Me(0, t, n), o); hi(0, r, i); }
function eI(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[L], o = S(), r = t[m], i = pe(r, o); if (i.loadingState === re.NOT_STARTED) {
    let s = Te(t, o), c = e(() => yi(i, t, o), n);
    hi(1, s, c);
} }
function tI(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[L], r = Te(t, n), i = r[za], s = e(() => Ot(o, i), o); hi(2, r, s); }
function yi(e, t, n) { Ya(e, t, n); }
function Ya(e, t, n) { let o = t[L], r = t[m]; if (e.loadingState !== re.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = Te(t, n), s = BA(r, e); e.loadingState = re.IN_PROGRESS, Ms(1, i); let a = e.dependencyResolverFn, c = o.get(vr).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = [], f = []; for (let p of l)
    if (p.status === "fulfilled") {
        let h = p.value, y = W(h) || be(h);
        if (y)
            d.push(y);
        else {
            let v = ze(h);
            v && f.push(v);
        }
    }
    else {
        u = !0;
        break;
    } if (u) {
    if (e.loadingState = re.FAILED, e.errorTmplIndex === null) {
        let h = new C(-750, !1);
        rf(t, h);
    }
}
else {
    e.loadingState = re.COMPLETE;
    let p = s.tView;
    if (d.length > 0) {
        p.directiveRegistry = Dg(p.directiveRegistry, d);
        let h = d.map(v => v.type), y = qi(!1, ...h);
        e.providers = y;
    }
    f.length > 0 && (p.pipeRegistry = Dg(p.pipeRegistry, f));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = re.COMPLETE, c(); }), e.loadingPromise); }
function nI(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[L].get(UE, null, { optional: !0 })?.behavior === Sf.Manual); }
function Me(e, t, n) { let o = t[m], r = t[n.index]; if (!nI(e, t))
    return; let i = Te(t, n), s = pe(o, n); switch (PE(i), s.loadingState) {
    case re.NOT_STARTED:
        Ct(Y.Loading, n, r), Ya(s, t, n), s.loadingState === re.IN_PROGRESS && Mg(s, n, r);
        break;
    case re.IN_PROGRESS:
        Ct(Y.Loading, n, r), Mg(s, n, r);
        break;
    case re.COMPLETE:
        Ct(Y.Complete, n, r);
        break;
    case re.FAILED:
        Ct(Y.Error, n, r);
        break;
    default:
} }
function Ot(e, t, n) { return $e(this, null, function* () { let o = e.get(St); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = xw(t, e); if (s.length === 0)
    return; i !== null && s.shift(), lR(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield wg(e, s, n) : o.awaitParentBlock(a, () => $e(null, null, function* () { return yield wg(e, s, n); })); }); }
function wg(e, t, n) { return $e(this, null, function* () { let o = e.get(St), r = o.hydrating, i = e.get(Et), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield dR(u), yield uR(e), aR(u)) {
            mb(u), _g(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        cR(c, t, o), _g(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), yb(o.get(a), t, o, e.get(et)); }); }
function aR(e) { return Te(e.lView, e.tNode)[Rt] === Y.Error; }
function cR(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && Ua(r.lContainer); }
function _g(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function lR(e, t) { for (let n of t)
    e.hydrating.set(n, jf()); }
function uR(e) { return new Promise(t => Yd(t, { injector: e })); }
function dR(e) { return $e(this, null, function* () { let { tNode: t, lView: n } = e, o = Te(n, t); return new Promise(r => { fR(o, r), Me(2, n, t); }); }); }
function fR(e, t) { Array.isArray(e[ao]) || (e[ao] = []), e[ao].push(t); }
function X(e, t, n) { return e === 0 ? Sg(t, n) : e === 2 ? !Sg(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function pR(e) { return e != null && (e & 1) === 1; }
function Sg(e, t) { let n = e[L], o = pe(e[m], t), r = oi(n), i = pR(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = Te(e, t)[za] !== null; return !(i && a && r); }
function Zt(e, t) { let n = pe(e, t); return n.hydrateTriggers ??= new Map; }
function oI(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[Mt], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && (typeof c.hydrate.viewport != "boolean" && (p.intersectionObserverOptions = c.hydrate.viewport), i.push(p));
        }
    }
} hR(e, o), yR(e, s), gR(e, i), mR(e, r); }
function hR(e, t) { for (let n of t) {
    let o = e.get(St), i = Qa(() => Ot(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function gR(e, t) { if (t.length > 0) {
    let n = e.get(St);
    for (let o of t) {
        let r = bf(o.el, () => Ot(e, o.blockName), e, o.intersectionObserverOptions);
        n.addCleanupFn(o.blockName, r);
    }
} }
function mR(e, t) { for (let n of t) {
    let o = e.get(St), r = () => Ot(e, n.blockName), s = Za(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function yR(e, t) { for (let n of t)
    Ot(e, n.blockName); }
function rI(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = b(), f = e + I, p = Tn(u, d, e, null, 0, 0), h = u[L], y = oi(h); if (d.firstCreatePass) {
    J("NgDefer");
    let dt = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: re.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, dt, a, s), VA(d, f, dt);
} let v = u[f]; sE(v, p, u); let D = null, x = null; if (v[Re]?.length > 0) {
    let dt = v[Re][0].data;
    x = dt[pa] ?? null, D = dt[ei];
} let oe = [null, Gr.Initial, null, null, null, null, x, D, null, null]; jA(u, f, oe); let Ue = null; x !== null && y && (Ue = h.get(St), Ue.add(x, { lView: u, tNode: p, lContainer: v })); let ke = () => { PE(oe), x !== null && Ue?.cleanup([x]); }; hi(0, oe, () => Ki(u, ke)), hr(u, ke); }
function iI(e) { let t = g(), n = Oe(); if (!X(0, t, n))
    return; let o = de(); if (z(t, o, e)) {
    let r = O(null);
    try {
        let i = !!e, a = Te(t, n)[Rt];
        i === !1 && a === Gr.Initial ? Uo(t, n) : i === !0 && (a === Gr.Initial || a === Y.Placeholder) && Me(0, t, n);
    }
    finally {
        O(r);
    }
} }
function sI(e) { let t = g(), n = Oe(); if (!X(1, t, n))
    return; let o = de(); if (z(t, o, e)) {
    let r = O(null);
    try {
        let i = !!e, s = t[m], a = pe(s, n);
        i === !0 && a.loadingState === re.NOT_STARTED && yi(a, t, n);
    }
    finally {
        O(r);
    }
} }
function aI(e) { let t = g(), n = Oe(); if (!X(2, t, n))
    return; let o = de(), r = b(); if (Zt(r, n).set(6, null), z(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        Me(2, t, n);
    else {
        let s = t[L], a = O(null);
        try {
            if (!!e === !0) {
                let u = Te(t, n)[za];
                Ot(s, u);
            }
        }
        finally {
            O(a);
        }
    } }
function cI() { let e = g(), t = S(); if (!X(2, e, t))
    return; Zt(b(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && Me(2, e, t); }
function lI() { let e = g(), t = S(); X(0, e, t) && XE(Qa); }
function uI() { let e = g(), t = S(); X(1, e, t) && eI(Qa); }
function dI() { let e = g(), t = S(); if (!X(2, e, t))
    return; Zt(b(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? Me(2, e, t) : tI(Qa, e, t); }
function fI() { let e = g(), t = S(); if (!X(0, e, t))
    return; pe(e[m], t).loadingTmplIndex === null && Uo(e, t), Me(0, e, t); }
function pI() { let e = g(), t = S(); if (!X(1, e, t))
    return; let n = e[m], o = pe(n, t); o.loadingState === re.NOT_STARTED && Ya(o, e, t); }
function hI() { let e = g(), t = S(); if (!X(2, e, t))
    return; if (Zt(b(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    Me(2, e, t);
else {
    let o = e[L], i = Te(e, t)[za];
    Ot(o, i);
} }
function gI(e) { let t = g(), n = S(); X(0, t, n) && XE(Za(e)); }
function mI(e) { let t = g(), n = S(); X(1, t, n) && eI(Za(e)); }
function yI(e) { let t = g(), n = S(); if (!X(2, t, n))
    return; Zt(b(), n).set(5, { type: 5, delay: e }), typeof ngServerMode < "u" && ngServerMode ? Me(2, t, n) : tI(Za(e), t, n); }
function vI(e, t) { let n = g(), o = S(); X(0, n, o) && (Uo(n, o), typeof ngServerMode < "u" && ngServerMode || Bo(n, o, e, t, $m, () => Me(0, n, o), 0)); }
function EI(e, t) { let n = g(), o = S(); if (!X(1, n, o))
    return; let r = n[m], i = pe(r, o); i.loadingState === re.NOT_STARTED && Bo(n, o, e, t, $m, () => yi(i, n, o), 1); }
function II() { let e = g(), t = S(); if (!X(2, e, t))
    return; Zt(b(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && Me(2, e, t); }
function DI(e, t) { let n = g(), o = S(); X(0, n, o) && (Uo(n, o), typeof ngServerMode < "u" && ngServerMode || Bo(n, o, e, t, Um, () => Me(0, n, o), 0)); }
function CI(e, t) { let n = g(), o = S(); if (!X(1, n, o))
    return; let r = n[m], i = pe(r, o); i.loadingState === re.NOT_STARTED && Bo(n, o, e, t, Um, () => yi(i, n, o), 1); }
function TI() { let e = g(), t = S(); if (!X(2, e, t))
    return; Zt(b(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && Me(2, e, t); }
function MI(e, t, n) { let o = g(), r = S(); X(0, o, r) && (Uo(o, r), typeof ngServerMode < "u" && ngServerMode || Bo(o, r, e, t, bf, () => Me(0, o, r), 0, n)); }
function NI(e, t, n) { let o = g(), r = S(); if (!X(1, o, r))
    return; let i = o[m], s = pe(i, r); s.loadingState === re.NOT_STARTED && Bo(o, r, e, t, bf, () => yi(s, o, r), 1, n); }
function wI(e) { let t = g(), n = S(); if (!X(2, t, n))
    return; Zt(b(), n).set(2, e ? { type: 2, intersectionObserverOptions: e } : null), typeof ngServerMode < "u" && ngServerMode && Me(2, t, n); }
function Vf(e, t) { let n = g(), o = de(); if (z(n, o, t)) {
    let r = b(), i = Oe();
    if (xa(i, r, n, e, t))
        De(i) && sv(n, i.index);
    else {
        let a = ne(i, n);
        Ra(n[T], a, null, i.value, e, t, null);
    }
} return Vf; }
function Hf(e, t, n, o) { let r = g(), i = de(); if (z(r, i, t)) {
    let s = b(), a = Oe();
    cS(a, r, e, t, n, o);
} return Hf; }
var _I = new M("", { factory: () => !1 }), SI = new M("", { factory: () => vR }), vR = 4e3, ER = !1, Rn = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function Ka(e) { return e[L].get(_I, ER); }
function IR(e, t, n) { let o = Eo.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    Eo.set(e, { classList: t, cleanupFns: n }); }
function Bf(e) { let t = Eo.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    Eo.delete(e);
} mn.delete(e); }
var DR = () => { }, Eo = new WeakMap, mn = new WeakMap, co = new WeakMap;
function Ku(e, t) { let n = co.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && co.delete(e); }
function Ja(e, t) { let n = co.get(e)?.shift(), o = t[mt]; if (o) {
    let i = Bs(e.index, o)?.previousSibling;
    n && i && n === i && n.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }));
} }
function bI(e, t) { co.has(e) ? co.get(e)?.push(t) : co.set(e, [t]); }
function Ks(e) { let t = e[yt] ??= {}; return t.enter ??= new Map; }
function Mn(e) { let t = e[yt] ??= {}; return t.leave ??= new Map; }
function AI(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function CR(e, t) { if (!Rn)
    return; let n = Eo.get(e); if (n && n.classList.length > 0 && TR(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); Bf(e); }
function TR(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function RI(e, t) { let n = mn.get(t); return n === void 0 ? !0 : t === e.target && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && e.propertyName === n.propertyName); }
function Xa(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function Ju(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function Xu(e, t) { let n = Mn(e).get(t.index); n && (n.resolvers = void 0); }
function hs(e, t, n, o, r) { Ku(t, n), Ju(o, r), Xu(e, t); }
function wr(e) { if (J("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !Rn)
    return wr; let t = g(); if (Ka(t))
    return wr; let n = S(); return Ja(n, t), Xa(Ks(t), n, () => MR(t, n, e)), _a(t[L]), Kd(t[L], Ks(t)), wr; }
function MR(e, t, n) { let o = ne(t, e), r = e[T], i = e[L].get(G), s = AI(n), a = [], c = u => { if (u.target !== o)
    return; let d = u instanceof AnimationEvent ? "animationend" : "transitionend"; i.runOutsideAngular(() => { r.listen(o, d, l); }); }, l = u => { u.target === o && NR(u, o, r); }; if (s && s.length > 0) {
    i.runOutsideAngular(() => { a.push(r.listen(o, "animationstart", c)), a.push(r.listen(o, "transitionstart", c)); }), IR(o, s, a);
    for (let u of s)
        r.addClass(o, u);
    i.runOutsideAngular(() => { requestAnimationFrame(() => { if (qy(o, mn, Rn), !mn.has(o)) {
        for (let u of s)
            r.removeClass(o, u);
        Bf(o);
    } }); });
} }
function NR(e, t, n) { let o = Eo.get(t); if (!(e.target !== t || !o) && RI(e, t)) {
    e.stopImmediatePropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    Bf(t);
} }
function _r(e) { if (J("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !Rn)
    return _r; let t = g(); if (Ka(t))
    return _r; let n = S(); return Ja(n, t), Xa(Ks(t), n, () => wR(t, n, e)), _a(t[L]), Kd(t[L], Ks(t)), _r; }
function wR(e, t, n) { let o = ne(t, e); n.call(e[U], { target: o, animationComplete: DR }); }
function Sr(e) { if (J("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !Rn)
    return Sr; let t = g(); if (Ka(t))
    return Sr; let o = S(); return Ja(o, t), Xa(Mn(t), o, () => _R(t, o, e)), _a(t[L]), Sr; }
function _R(e, t, n) { let { promise: o, resolve: r } = jf(), i = ne(t, e), s = e[T], a = e[L].get(G); En.add(e), (Mn(e).get(t.index).resolvers ??= []).push(r); let c = AI(n); return c && c.length > 0 ? SR(i, t, e, c, s, a) : r(), { promise: o, resolve: r }; }
function SR(e, t, n, o, r, i) { CR(e, r); let s = [], a = Mn(n).get(t.index)?.resolvers, c = l => { if (l.target === e && (l instanceof CustomEvent || RI(l, e))) {
    if (l.stopImmediatePropagation(), mn.delete(e), Ku(t, e), Array.isArray(t.projection))
        for (let u of o)
            r.removeClass(e, u);
    Ju(a, s), Xu(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", c)), s.push(r.listen(e, "transitionend", c)); }), bI(t, e); for (let l of o)
    r.addClass(e, l); i.runOutsideAngular(() => { requestAnimationFrame(() => { qy(e, mn, Rn), mn.has(e) || (Ku(t, e), Ju(a, s), Xu(n, t)); }); }); }
function Js(e) { if (J("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !Rn)
    return Js; let t = g(), n = S(); return Ja(n, t), En.add(t), Xa(Mn(t), n, () => bR(t, n, e)), _a(t[L]), Js; }
function bR(e, t, n) { let { promise: o, resolve: r } = jf(), i = ne(t, e), s = [], a = e[T], c = Ka(e), l = e[L].get(G), u = e[L].get(SI); (Mn(e).get(t.index).resolvers ??= []).push(r); let d = Mn(e).get(t.index)?.resolvers; if (c)
    hs(e, t, i, d, s);
else {
    let f = setTimeout(() => hs(e, t, i, d, s), u), p = { target: i, animationComplete: () => { hs(e, t, i, d, s), clearTimeout(f); } };
    bI(t, i), l.runOutsideAngular(() => { s.push(a.listen(i, "animationend", () => { hs(e, t, i, d, s), clearTimeout(f); }, { once: !0 })); }), n.call(e[U], p);
} return { promise: o, resolve: r }; }
function OI() { return g()[ee][U]; }
var kI = Symbol("CONTROL");
function xI() { let e = g(), t = b(), n = S(); t.firstCreatePass && AR(t, n, e); let o = LI(n, e); o && (J("NgSignalForms"), n.flags & 1024 ? Ag(e, n, o, "value") : n.flags & 2048 ? Ag(e, n, o, "checked") : n.flags & 4096 ? xR(o) : LR(e, n, o), o.\u0275register()); }
function PI(e, t) { let n = g(), o = Oe(), r = de(); if (z(n, r, e)) {
    let s = b();
    Aa(o, n, "field", e, n[T], t);
} let i = LI(o, n); i && (VR(n, o, i), o.flags & 1024 ? Rg(o, n, i, "value") : o.flags & 2048 ? Rg(o, n, i, "checked") : o.flags & 4096 ? HR(n, i) : jI(o, n, i)), de(); }
function AR(e, t, n) { let o = t.inputs?.field; if (!o || De(t) && o.includes(t.directiveStart + t.componentOffset))
    return; let r = o.find(c => kI in n[c]); if (r === void 0)
    return; t.fieldIndex = r; let i = RR(e, t); if (!i && n[r].\u0275interopControl) {
    t.flags |= 4096;
    return;
} if (OR(e, t) || i)
    return; let a = t.value; throw new C(318, `'<${a}>' is an invalid [field] directive host. The host must be a native form control (such as <input>', '<select>', or '<textarea>') or a custom form control with a 'value' or 'checked' model.`); }
function RR(e, t) { for (let n = t.directiveStart; n < t.directiveEnd; n++) {
    let o = e.data[n];
    if (bg(o, "value"))
        return t.flags |= 1024, t.customControlIndex = n, !0;
    if (bg(o, "checked"))
        return t.flags |= 2048, t.customControlIndex = n, !0;
} return !1; }
function OR(e, t) { return PR(t) ? (t.flags |= 8192, BR(t) && (t.flags |= 16384), UR(t) && (t.flags |= 32768), !0) : !1; }
function LI(e, t) { let n = e.fieldIndex; return n === -1 ? null : t[n]; }
function bg(e, t) { return kR(e, t) && FI(e, t + "Change"); }
function kR(e, t) { let n = e.inputs[t]; return n && (n[1] & ci.SignalBased) !== 0; }
function FI(e, t) { return t in e.outputs; }
function Ag(e, t, n, o) { let r = b(), i = t.customControlIndex, s = o + "Change"; go(t, e, i, s, s, Tt(t, e, l => n.state().setControlValue(l))); let a = r.data[i], c = "touchedChange"; FI(a, c) && go(t, e, i, c, c, Tt(t, e, () => n.state().markAsTouched())); }
function xR(e) { let t = e.\u0275interopControl; t.registerOnChange(n => e.state().setControlValue(n)), t.registerOnTouched(() => e.state().markAsTouched()); }
function PR(e) { if (e.type !== 2)
    return !1; let t = e.value; return t === "input" || t === "textarea" || t === "select"; }
function LR(e, t, n) { let o = b(), r = e[T], i = ne(t, e), s = () => { let c = n.state(); c.setControlValue($R(i, c.value)); }; Ws(t, o, e, void 0, r, "input", s, Tt(t, e, s)); let a = () => { n.state().markAsTouched(); }; if (Ws(t, o, e, void 0, r, "blur", a, Tt(t, e, a)), t.type === 2 && t.value === "select" && typeof MutationObserver == "function") {
    let c = FR(i, n);
    gl(o, e, c, c.disconnect);
} }
function FR(e, t) { let n = new MutationObserver(o => { o.some(r => jR(r)) && (e.value = t.state().value()); }); return n.observe(e, { attributes: !0, attributeFilter: ["value"], characterData: !0, childList: !0, subtree: !0 }), n; }
function jR(e) { if (e.type === "childList" || e.type === "characterData") {
    if (e.target instanceof Comment)
        return !1;
    for (let t of e.addedNodes)
        if (!(t instanceof Comment))
            return !0;
    for (let t of e.removedNodes)
        if (!(t instanceof Comment))
            return !0;
    return !1;
} return e.type === "attributes" && e.target instanceof HTMLOptionElement; }
function VR(e, t, n) { if (n.classes) {
    let o = tc(e);
    o.classes ??= {}, n.state();
    let r = e[T], i = ne(t, e);
    for (let [s, a] of n.classes) {
        let c = a();
        XR(o.classes, s, c) && (c ? r.addClass(i, s) : r.removeClass(i, s));
    }
} }
function Rg(e, t, n, o) { let r = b(), i = e.customControlIndex, s = t[i], a = r.data[i], c = n.state(), l = tc(t); Og(a, s, l, c, Uf, o); for (let u of JR) {
    let d = ec[u];
    Og(a, s, l, c, u, d);
} e.flags & 8192 && jI(e, t, n); }
function Og(e, t, n, o, r, i) { if (i in e.inputs) {
    let s = o[r]?.();
    Nn(n, r, s) && fo(e, t, i, s);
} }
function HR(e, t) { let n = t.\u0275interopControl, o = tc(e), r = t.state(), i = r.value(); if (Nn(o, Uf, i) && Ce(() => n.writeValue(i)), n.setDisabledState) {
    let s = r.disabled();
    Nn(o, HI, s) && Ce(() => n.setDisabledState(s));
} }
function jI(e, t, n) { let o = ne(e, t), r = t[T], i = n.state(), s = tc(t), a = i.controlValue(); Nn(s, Uf, a) && qR(o, a); let c = i.name(); Nn(s, ZR, c) && r.setAttribute(o, "name", c), ru(r, o, s, i, HI), ru(r, o, s, i, YR), ru(r, o, s, i, KR), e.flags & 16384 && (gs(r, o, s, i, GR), gs(r, o, s, i, zR)), e.flags & 32768 && (gs(r, o, s, i, WR), gs(r, o, s, i, QR)); }
function ru(e, t, n, o, r) { let i = o[r](); if (Nn(n, r, i)) {
    let s = ec[r];
    eO(e, t, s, i);
} }
function gs(e, t, n, o, r) { let i = o[r]?.(); if (Nn(n, r, i)) {
    let s = ec[r];
    tO(e, t, s, i);
} }
function VI(e) { return e === null || e instanceof Date; }
function BR(e) { if (!e.attrs || e.value !== "input")
    return !1; for (let t = 0; t < e.attrs.length; t += 2) {
    let n = e.attrs[t];
    if (gd(n))
        break;
    if (n === "type") {
        let o = e.attrs[t + 1];
        return o === "date" || o === "datetime-local" || o === "month" || o === "number" || o === "range" || o === "time" || o === "week";
    }
} return !1; }
function UR(e) { return e.value !== "select"; }
function $R(e, t) { switch (e.type) {
    case "checkbox": return e.checked;
    case "number":
    case "range":
    case "datetime-local":
        if (typeof t() == "number")
            return e.valueAsNumber;
        break;
    case "date":
    case "month":
    case "time":
    case "week":
        let n = t();
        if (VI(n))
            return e.valueAsDate;
        if (typeof n == "number")
            return e.valueAsNumber;
        break;
} return e.value; }
function qR(e, t) { switch (e.type) {
    case "checkbox":
        e.checked = t;
        return;
    case "radio":
        e.checked = t === e.value;
        return;
    case "number":
    case "range":
    case "datetime-local":
        if (typeof t == "number") {
            kg(e, t);
            return;
        }
        break;
    case "date":
    case "month":
    case "time":
    case "week": if (VI(t)) {
        e.valueAsDate = t;
        return;
    }
    else if (typeof t == "number") {
        kg(e, t);
        return;
    }
} e.value = t; }
function kg(e, t) { isNaN(t) ? e.value = "" : e.valueAsNumber = t; }
var HI = _({ disabled: _ }), GR = _({ max: _ }), WR = _({ maxLength: _ }), zR = _({ min: _ }), QR = _({ minLength: _ }), ZR = _({ name: _ }), YR = _({ readonly: _ }), KR = _({ required: _ }), Uf = _({ controlValue: _ }), ec = { disabled: "disabled", disabledReasons: "disabledReasons", errors: "errors", invalid: "invalid", max: "max", maxLength: "maxLength", min: "min", minLength: "minLength", name: "name", pattern: "pattern", readonly: "readonly", required: "required", touched: "touched" }, JR = Object.keys(ec);
function tc(e) { let t = Ke(), n = e[t]; return n === H && (n = e[t] = {}), n; }
function Nn(e, t, n) { let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function XR(e, t, n) { let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function eO(e, t, n, o) { o ? e.setAttribute(t, n, "") : e.removeAttribute(t, n); }
function tO(e, t, n, o) { o !== void 0 ? e.setAttribute(t, n, o.toString()) : e.removeAttribute(t, n); }
var ed = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function iu(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function nO(e, t, n, o) { let r, i, s = 0, a = e.length - 1, c = void 0; if (Array.isArray(t)) {
    Zn(o);
    let l = t.length - 1;
    for (Zn(null); s <= a && s <= l;) {
        let u = e.at(s), d = t[s], f = iu(s, u, s, d, n);
        if (f !== 0) {
            f < 0 && e.updateValue(s, d), s++;
            continue;
        }
        let p = e.at(a), h = t[l], y = iu(a, p, l, h, n);
        if (y !== 0) {
            y < 0 && e.updateValue(a, h), a--, l--;
            continue;
        }
        let v = n(s, u), D = n(a, p), x = n(s, d);
        if (Object.is(x, D)) {
            let oe = n(l, h);
            Object.is(oe, v) ? (e.swap(s, a), e.updateValue(a, h), l--, a--) : e.move(a, s), e.updateValue(s, d), s++;
            continue;
        }
        if (r ??= new Xs, i ??= Pg(e, s, a, n), td(e, r, s, x))
            e.updateValue(s, d), s++, a++;
        else if (i.has(x))
            r.set(v, e.detach(s)), a--;
        else {
            let oe = e.create(s, t[s]);
            e.attach(s, oe), s++, a++;
        }
    }
    for (; s <= l;)
        xg(e, r, n, s, t[s]), s++;
}
else if (t != null) {
    Zn(o);
    let l = t[Symbol.iterator]();
    Zn(null);
    let u = l.next();
    for (; !u.done && s <= a;) {
        let d = e.at(s), f = u.value, p = iu(s, d, s, f, n);
        if (p !== 0)
            p < 0 && e.updateValue(s, f), s++, u = l.next();
        else {
            r ??= new Xs, i ??= Pg(e, s, a, n);
            let h = n(s, f);
            if (td(e, r, s, h))
                e.updateValue(s, f), s++, a++, u = l.next();
            else if (!i.has(h))
                e.attach(s, e.create(s, f)), s++, a++, u = l.next();
            else {
                let y = n(s, d);
                r.set(y, e.detach(s)), a--;
            }
        }
    }
    for (; !u.done;)
        xg(e, r, n, e.length, u.value), u = l.next();
} for (; s <= a;)
    e.destroy(e.detach(a--)); r?.forEach(l => { e.destroy(l); }); }
function td(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function xg(e, t, n, o, r) { if (td(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function Pg(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var Xs = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function BI(e, t, n, o, r, i, s, a) { J("NgControlFlow"); let c = g(), l = b(), u = me(l.consts, i); return Tn(c, l, e, t, n, o, r, u, 256, s, a), nc; }
function nc(e, t, n, o, r, i, s, a) { J("NgControlFlow"); let c = g(), l = b(), u = me(l.consts, i); return Tn(c, l, e, t, n, o, r, u, 512, s, a), nc; }
function UI(e, t) { J("NgControlFlow"); let n = g(), o = de(), r = n[o] !== H ? n[o] : -1, i = r !== -1 ? ea(n, I + r) : void 0, s = 0; if (z(n, o, e)) {
    let a = O(null);
    try {
        if (i !== void 0 && sf(i, s), e !== -1) {
            let c = I + e, l = ea(n, c), u = id(n[m], c), d = $v(l, u, n), f = Fo(n, u, t, { dehydratedView: d });
            jo(l, f, s, In(u, d));
        }
    }
    finally {
        O(a);
    }
}
else if (i !== void 0) {
    let a = vv(i, s);
    a !== void 0 && (a[U] = t);
} }
var nd = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - q; }
};
function $I(e) { return e; }
function qI(e, t) { return t; }
var od = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function GI(e, t, n, o, r, i, s, a, c, l, u, d, f) { J("NgControlFlow"); let p = g(), h = b(), y = c !== void 0, v = g(), D = a ? s.bind(v[ee][U]) : s, x = new od(y, D); v[I + e] = x, Tn(p, h, e + 1, t, n, o, r, me(h.consts, i), 256), y && Tn(p, h, e + 2, c, l, u, d, me(h.consts, f), 512); }
var rd = class extends ed {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - q; }
    at(t) { return this.getLView(t)[U].$implicit; }
    attach(t, n) { let o = n[ue]; this.needsIndexUpdate ||= t !== this.length, jo(this.lContainer, n, t, In(this.templateTNode, o)), oO(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, rO(this.lContainer, t), iO(this.lContainer, t); }
    create(t, n) { let o = Hr(this.lContainer, this.templateTNode.tView.ssrId), r = Fo(this.hostLView, this.templateTNode, new nd(this.lContainer, n, t), { dehydratedView: o }); return this.operationsCounter?.recordCreate(), r; }
    destroy(t) { li(t[m], t), this.operationsCounter?.recordDestroy(); }
    updateValue(t, n) { this.getLView(t)[U].$implicit = n; }
    reset() { this.needsIndexUpdate = !1, this.operationsCounter?.reset(); }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[U].$index = t; }
    getLView(t) { return sO(this.lContainer, t); }
};
function WI(e) { let t = O(null), n = fe(); try {
    let o = g(), r = o[m], i = o[n], s = n + 1, a = ea(o, s);
    if (i.liveCollection === void 0) {
        let l = id(r, s);
        i.liveCollection = new rd(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (nO(c, e, i.trackByFn, t), c.updateIndexes(), i.hasEmptyBlock) {
        let l = de(), u = c.length === 0;
        if (z(o, l, u)) {
            let d = n + 2, f = ea(o, d);
            if (u) {
                let p = id(r, d), h = $v(f, p, o), y = Fo(o, p, void 0, { dehydratedView: h });
                jo(f, y, 0, In(p, h));
            }
            else
                r.firstUpdatePass && Ba(f), sf(f, 0);
        }
    }
}
finally {
    O(t);
} }
function ea(e, t) { return e[t]; }
function oO(e, t) { if (e.length <= q)
    return; let n = q + t, o = e[n], r = o ? o[yt] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[L];
    G_(i, r), En.delete(o), r.detachedLeaveAnimationFns = void 0;
} }
function rO(e, t) { if (e.length <= q)
    return; let n = q + t, o = e[n], r = o ? o[yt] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function iO(e, t) { return jr(e, t); }
function sO(e, t) { return vv(e, t); }
function id(e, t) { return vt(e, t); }
function $f(e, t, n) { let o = g(), r = de(); if (z(o, r, t)) {
    let i = b(), s = Oe();
    Aa(s, o, e, t, o[T], n);
} return $f; }
function sd(e, t, n, o, r) { xa(t, e, n, r ? "class" : "style", o); }
function oc(e, t, n, o) { let r = g(), i = r[m], s = e + I, a = i.firstCreatePass ? ff(s, r, 2, t, of, Ji(), n, o) : i.data[s]; if (Oa(a, r, e, t, Wf), Bn(a)) {
    let c = r[m];
    ba(c, r, a), Pd(c, a, r);
} return o != null && Lo(r, a), oc; }
function rc() { let e = b(), t = S(), n = ka(t); return e.firstCreatePass && pf(e, n), yl(n) && Il(), ml(), n.classesWithoutHost != null && TN(n) && sd(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && MN(n) && sd(e, n, g(), n.stylesWithoutHost, !1), rc; }
function qf(e, t, n, o) { return oc(e, t, n, o), rc(), qf; }
function ic(e, t, n, o) { let r = g(), i = r[m], s = e + I, a = i.firstCreatePass ? Yv(s, i, 2, t, n, o) : i.data[s]; return Oa(a, r, e, t, Wf), o != null && Lo(r, a), ic; }
function sc() { let e = S(), t = ka(e); return yl(t) && Il(), ml(), sc; }
function Gf(e, t, n, o) { return ic(e, t, n, o), sc(), Gf; }
var Wf = (e, t, n, o, r) => (Je(!0), Da(t[T], o, Pl()));
function aO(e, t, n, o, r) { let i = !Ea(t, n); if (Je(i), i)
    return Da(t[T], o, Pl()); let s = t[ue], a = di(s, e, t, n); return ry(s, r) && ya(s, r, a.nextSibling), s && (vd(n) || wm(a)) && De(n) && (wh(n), wy(a)), a; }
function zI() { Wf = aO; }
function ac(e, t, n) { let o = g(), r = o[m], i = e + I, s = r.firstCreatePass ? ff(i, o, 8, "ng-container", of, Ji(), t, n) : r.data[i]; if (Oa(s, o, e, "ng-container", Yf), Bn(s)) {
    let a = o[m];
    ba(a, o, s), Pd(a, s, o);
} return n != null && Lo(o, s), ac; }
function vi() { let e = b(), t = S(), n = ka(t); return e.firstCreatePass && pf(e, n), vi; }
function zf(e, t, n) { return ac(e, t, n), vi(), zf; }
function cc(e, t, n) { let o = g(), r = o[m], i = e + I, s = r.firstCreatePass ? Yv(i, r, 8, "ng-container", t, n) : r.data[i]; return Oa(s, o, e, "ng-container", Yf), n != null && Lo(o, s), cc; }
function Qf() { let e = S(), t = ka(e); return vi; }
function Zf(e, t, n) { return cc(e, t, n), Qf(), Zf; }
var Yf = (e, t, n, o, r) => (Je(!0), Vd(t[T], ""));
function cO(e, t, n, o, r) { let i, s = !Ea(t, n); if (Je(s), s)
    return Vd(t[T], ""); let a = t[ue], c = di(a, e, t, n), l = oy(a, r); return ya(a, r, c), i = Va(l, c), i; }
function QI() { Yf = cO; }
function ZI() { return g(); }
function Kf(e, t, n) { let o = g(), r = de(); if (z(o, r, t)) {
    let i = b(), s = Oe();
    nf(s, o, e, t, o[T], n);
} return Kf; }
function Jf(e, t, n) { let o = g(), r = de(); if (z(o, r, t)) {
    let i = b(), s = Oe(), a = es(i.data), c = av(a, s, o);
    nf(s, o, e, t, c, n);
} return Jf; }
var Ir = void 0;
function lO(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var uO = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Ir, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Ir, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm\u202Fa", "h:mm:ss\u202Fa", "h:mm:ss\u202Fa z", "h:mm:ss\u202Fa zzzz"], ["{1}, {0}", Ir, Ir, Ir], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", lO], lo = {};
function dO(e, t, n) { typeof t != "string" && (n = t, t = e[Io.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), lo[t] = e, n && (lo[t][Io.ExtraData] = n); }
function Xf(e) { let t = hO(e), n = Lg(t); if (n)
    return n; let o = t.split("-")[0]; if (n = Lg(o), n)
    return n; if (o === "en")
    return uO; throw new C(701, !1); }
function fO(e) { return Xf(e)[Io.CurrencyCode] || null; }
function YI(e) { return Xf(e)[Io.PluralCase]; }
function Lg(e) { return e in lo || (lo[e] = _e.ng && _e.ng.common && _e.ng.common.locales && _e.ng.common.locales[e]), lo[e]; }
function pO() { lo = {}; }
var Io = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Io || {});
function hO(e) { return e.toLowerCase().replace(/_/g, "-"); }
var gO = ["zero", "one", "two", "few", "many"];
function mO(e, t) { let n = YI(t)(parseInt(e, 10)), o = gO[n]; return o !== void 0 ? o : "other"; }
var Ei = "en-US", yO = "USD", KI = { marker: "element" }, JI = { marker: "ICU" }, Dt = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(Dt || {}), XI = Ei;
function eD(e) { typeof e == "string" && (XI = e.toLowerCase().replace(/_/g, "-")); }
function vO() { return XI; }
var Wr = 0, br = 0;
function EO(e) { e && (Wr = Wr | 1 << Math.min(br, 31)), br++; }
function IO(e, t, n) { if (br > 0) {
    let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = Ke() - br - 1;
    rD(e, t, r, i, Wr);
} Wr = 0, br = 0; }
function tD(e, t, n) { let o = e[T]; switch (n) {
    case Node.COMMENT_NODE: return Vd(o, t);
    case Node.TEXT_NODE: return jd(o, t);
    case Node.ELEMENT_NODE: return Da(o, t, null);
} }
var Ar = (e, t, n, o) => (Je(!0), tD(e, n, o));
function DO(e, t, n, o) { let r = e[ue], i = t - I, s = !Ha() || !r || gr() || va(r, i); return Je(s), s ? tD(e, n, o) : _v(r, i); }
function nD() { Ar = DO; }
function CO(e, t, n, o) { let r = e[T]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & Dt.COMMENT) === Dt.COMMENT, l = (s & Dt.APPEND_EAGERLY) === Dt.APPEND_EAGERLY, u = s >>> Dt.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = Ar(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = yr()), l && n !== null && f && vn(r, n, d, o, !1);
} }
function oD(e, t, n, o) { let r = n[T], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = Ar(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = zS(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = F(n[l])), d !== null) {
                    let y = QS(c), v = n[y];
                    vn(r, d, v, u, !1);
                    let D = Tr(e, y);
                    if (D !== null && typeof D == "object") {
                        let x = ja(D, n);
                        x !== null && oD(e, D.create[x], n, n[D.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                Ra(r, un(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case JI:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = Ar(n, u, l, Node.COMMENT_NODE);
                    Ve(p, n);
                }
                break;
            case KI:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = Ar(n, f, d, Node.ELEMENT_NODE);
                    Ve(p, n);
                }
                break;
            default:
        }
} }
function rD(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += R(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            typeof h == "string" ? Ra(t[T], t[d], null, h, f, c, p) : Aa(h, t, f, c, t[T], p);
                            break;
                        case 0:
                            let y = t[d];
                            y !== null && My(t[T], y, c);
                            break;
                        case 2:
                            TO(e, Tr(e, d), t, c);
                            break;
                        case 3:
                            Fg(e, Tr(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Tr(e, l);
            t[u.currentCaseLViewIndex] < 0 && Fg(e, u, o, t);
        }
    }
    i += a;
} }
function Fg(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = Wr;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), rD(e, o, t.update[r], n, i);
} }
function TO(e, t, n, o) { let r = MO(t, o); if (ja(t, n) !== r && (iD(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && oD(e, t.create[r], n, s), fb(n, t.anchorIdx, r);
} }
function iD(e, t, n) { let o = ja(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = un(s, n);
            a !== null && ii(n[T], a);
        }
        else
            iD(e, Tr(e, ~s), n);
    }
} }
function MO(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = mO(t, vO());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var ta = /�(\d+):?\d*�/gi, NO = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, wO = /�(\d+)�/, sD = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Rr = "\uFFFD", _O = /�\/?\*(\d+:\d+)�/gi, SO = /�(\/?[#*]\d+):?\d*�/gi, bO = /\uE500/g;
function AO(e) { return e.replace(bO, " "); }
function RO(e, t, n, o, r, i) { let s = $n(), a = [], c = [], l = [[]], u = [[]]; r = PO(r, i); let d = AO(r).split(SO); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = ad(p);
        for (let y = 0; y < h.length; y++) {
            let v = h[y];
            if ((y & 1) === 0) {
                let D = v;
                D !== "" && OO(u[0], e, s, l[0], a, c, n, D);
            }
            else {
                let D = v;
                if (typeof D != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let oe = aD(e, s, l[0], n, a, "", !0).index;
                lD(u[0], e, n, c, t, D, oe);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, y = p.charCodeAt(h ? 1 : 0), v = I + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), st($n(), !1);
        else {
            let D = WS(e, l[0], v);
            l.unshift([]), st(D, !0);
            let x = { kind: 2, index: v, children: [], type: y === 35 ? 0 : 1 };
            u[0].push(x), u.unshift(x.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function aD(e, t, n, o, r, i, s) { let a = ai(e, o, 1, null), c = a << Dt.SHIFT, l = $n(); t === l && (l = null), l === null && (c |= Dt.APPEND_EAGERLY), s && (c |= Dt.COMMENT, V_(YS)), r.push(c, i === null ? "" : i); let u = af(e, a, s ? 32 : 1, i === null ? "" : i, null); Tv(n, u); let d = u.index; return st(u, !1), l !== null && t !== l && GS(l, d), u; }
function OO(e, t, n, o, r, i, s, a) { let c = a.match(ta), u = aD(t, n, o, s, r, c ? null : a, !1).index; c && Or(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function kO(e, t, n) { let r = S().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (NO.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            Or(i, c, r, a, xO(i), null);
        }
    }
    e.data[t] = i;
} }
function Or(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(ta), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | cD(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function xO(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function cD(e) { return 1 << Math.min(e, 31); }
function jg(e) { let t, n = "", o = 0, r = !1, i; for (; (t = _O.exec(e)) !== null;)
    r ? t[0] === `${Rr}/*${i}${Rr}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function PO(e, t) { if (Nv(t))
    return jg(e); {
    let n = e.indexOf(`:${t}${Rr}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Rr}\\/\\*\\d+:${t}${Rr}`));
    return jg(e.substring(n, o));
} }
function lD(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: ai(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; VO(o, i, s), qS(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let y = 0; y < f.length; y++) {
        let v = f[y];
        if (typeof v != "string") {
            let D = p.push(v) - 1;
            f[y] = `<!--\uFFFD${D}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = FO(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && HO(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function LO(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(sD, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = ad(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = ad(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function ad(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            sD.test(c) ? o.push(LO(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function FO(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = yy(la()).getInertBodyElement(a), h = ku(p) || p; return h ? uD(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function uD(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = ai(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let y = p, v = y.tagName.toLowerCase();
            if (Ru.hasOwnProperty(v)) {
                su(i, KI, v, l, h), t.data[h] = v;
                let Ue = y.attributes;
                for (let dt = 0; dt < Ue.length; dt++) {
                    let Kt = Ue.item(dt), Yp = Kt.name.toLowerCase();
                    !!Kt.value.match(ta) ? Dy.hasOwnProperty(Yp) && (Fd[Yp] ? Or(a, Kt.value, h, Kt.name, 0, Ia) : Or(a, Kt.value, h, Kt.name, 0, null)) : BO(i, h, Kt);
                }
                let ke = { kind: 1, index: h, children: [] };
                e.push(ke), f = uD(ke.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, Vg(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let D = p.textContent || "", x = D.match(ta);
            su(i, null, x ? "" : D, l, h), Vg(s, h, d), x && (f = Or(a, D, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let oe = wO.exec(p.textContent || "");
            if (oe) {
                let Ue = parseInt(oe[1], 10), ke = u[Ue];
                su(i, JI, "", l, h), lD(e, t, o, r, l, ke, h), jO(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function Vg(e, t, n) { n === 0 && e.push(t); }
function jO(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function VO(e, t, n) { e.push(cD(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function HO(e, t, n) { e.push(t, 1, n << 2 | 3); }
function su(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, ZS(0, o, r)); }
function BO(e, t, n) { e.push(t << 1 | 1, n.name, n.value); }
var Hg = 0, UO = /\[(�.+?�?)\]/, $O = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, qO = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, GO = /{([A-Z0-9_]+)}/g, WO = /�I18N_EXP_(ICU(_\d+)?)�/g, zO = /\/\*/, QO = /\d+\:(\d+)/;
function ZO(e, t = {}) { let n = e; if (UO.test(e)) {
    let o = {}, r = [Hg];
    n = n.replace($O, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(y => { let v = y.match(QO), D = v ? parseInt(v[1], 10) : Hg, x = zO.test(y); l.push([D, x, y]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let y = 0; y < l.length; y++)
        if (l[y][0] === u) {
            d = y;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(qO, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(GO, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(WO, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function ep(e, t, n = -1) { let o = b(), r = g(), i = I + e, s = me(o.consts, t), a = $n(); if (o.firstCreatePass && RO(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[ee];
    f[w] |= 32;
}
else
    r[w] |= 32; let c = o.data[i], l = a === r[le] ? null : a, u = Yy(o, l, r), d = a && a.type & 8 ? r[a.index] : null; sb(r, i, a, n), CO(r, c.create, u, d), bl(!0); }
function tp() { bl(!1); }
function dD(e, t, n) { ep(e, t, n), tp(); }
function fD(e, t) { let n = b(), o = me(n.consts, t); kO(n, e + I, o); }
function np(e) { let t = g(); return EO(z(t, de(), e)), np; }
function pD(e) { IO(b(), g(), e + I); }
function hD(e, t = {}) { return ZO(e, t); }
function op(e, t, n) { let o = g(), r = b(), i = S(); return sp(r, o, o[T], i, e, t, n), op; }
function rp(e, t) { let n = S(), o = g(), r = b(), i = es(r.data), s = av(i, n, o); return sp(r, o, s, n, e, t), rp; }
function ip(e, t, n) { let o = g(), r = b(), i = S(); return (i.type & 3 || n) && Ws(i, r, o, n, o[T], e, t, Tt(i, o, t)), ip; }
function sp(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= Tt(o, t, i), Ws(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= Tt(o, t, i), go(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= Tt(o, t, i), go(o, t, d, r, r, c);
} }
function gD(e = 1) { return kh(e); }
function YO(e, t) { let n = null, o = A_(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? jy(e, i, !0) : k_(o, i))
        return r;
} return n; }
function mD(e) { let t = g()[ee][le]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = ar(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? YO(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function yD(e, t = 0, n, o, r, i) { let s = g(), a = b(), c = o ? e + 1 : null; c !== null && Tn(s, a, c, o, r, i, null, n); let l = An(a, I + e, 16, null, n || null); l.projection === null && (l.projection = t), Nl(); let d = !s[ue] || gr(); s[ee][le].projection[l.projection] === null && c !== null ? KO(s, a, c) : d && !Oo(l) && J_(a, s, l); }
function KO(e, t, n) { let o = I + n, r = t.data[o], i = e[o], s = Hr(i, r.tView.ssrId), a = Fo(e, r, void 0, { dehydratedView: s }); jo(i, a, 0, In(r, s)); }
function vD(e, t, n, o) { fE(e, t, n, o); }
function ED(e, t, n) { dE(e, t, n); }
function ID(e) { let t = g(), n = b(), o = ts(); mr(o + 1); let r = mf(n, o); if (e.dirty && Ch(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = hE(t, o);
        e.reset(i, Nm), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function DD() { return gf(g(), ts()); }
function CD(e, t, n, o, r) { gE(t, fE(e, n, o, r)); }
function TD(e, t, n, o) { gE(e, dE(t, n, o)); }
function MD(e = 1) { mr(ts() + e); }
function ND(e) { let t = wl(); return Vt(t, I + e); }
function ms(e, t) { return e << 17 | t << 2; }
function wn(e) { return e >> 17 & 32767; }
function JO(e) { return (e & 2) == 2; }
function XO(e, t) { return e & 131071 | t << 17; }
function cd(e) { return e | 2; }
function Do(e) { return (e & 131068) >> 2; }
function au(e, t) { return e & -131069 | t << 2; }
function ek(e) { return (e & 1) === 1; }
function ld(e) { return e | 1; }
function tk(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = wn(s), c = Do(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || jn(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = wn(e[a + 1]);
        e[o + 1] = ms(f, a), f !== 0 && (e[f + 1] = au(e[f + 1], o)), e[a + 1] = XO(e[a + 1], o);
    }
    else
        e[o + 1] = ms(a, 0), a !== 0 && (e[a + 1] = au(e[a + 1], o)), a = o;
else
    e[o + 1] = ms(c, 0), a === 0 ? a = o : e[c + 1] = au(e[c + 1], o), c = o; l && (e[o + 1] = cd(e[o + 1])), Bg(e, u, o, !0), Bg(e, u, o, !1), nk(t, u, e, o, i), s = ms(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function nk(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && jn(i, t) >= 0 && (n[o + 1] = ld(n[o + 1])); }
function Bg(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? wn(r) : Do(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    ok(c, t) && (a = !0, e[s + 1] = o ? ld(l) : cd(l)), s = o ? wn(l) : Do(l);
} a && (e[n + 1] = o ? cd(r) : ld(r)); }
function ok(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? jn(e, t) >= 0 : !1; }
var se = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function wD(e) { return e.substring(se.key, se.keyEnd); }
function rk(e) { return e.substring(se.value, se.valueEnd); }
function ik(e) { return bD(e), _D(e, Co(e, 0, se.textEnd)); }
function _D(e, t) { let n = se.textEnd; return n === t ? -1 : (t = se.keyEnd = ak(e, se.key = t, n), Co(e, t, n)); }
function sk(e) { return bD(e), SD(e, Co(e, 0, se.textEnd)); }
function SD(e, t) { let n = se.textEnd, o = se.key = Co(e, t, n); return n === o ? -1 : (o = se.keyEnd = ck(e, o, n), o = Ug(e, o, n, 58), o = se.value = Co(e, o, n), o = se.valueEnd = lk(e, o, n), Ug(e, o, n, 59)); }
function bD(e) { se.key = 0, se.keyEnd = 0, se.value = 0, se.valueEnd = 0, se.textEnd = e.length; }
function Co(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function ak(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function ck(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function Ug(e, t, n, o) { return t = Co(e, t, n), t < n && t++, t; }
function lk(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = $g(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = $g(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function $g(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function ap(e, t, n) { return OD(e, t, n, !1), ap; }
function cp(e, t) { return OD(e, t, null, !0), cp; }
function AD(e) { kD(LD, uk, e, !1); }
function uk(e, t) { for (let n = sk(t); n >= 0; n = SD(t, n))
    LD(e, wD(t), rk(t)); }
function RD(e) { kD(yk, dk, e, !0); }
function dk(e, t) { for (let n = ik(t); n >= 0; n = _D(t, n))
    cr(e, wD(t), !0); }
function OD(e, t, n, o) { let r = g(), i = b(), s = at(2); if (i.firstUpdatePass && PD(i, e, s, o), t !== H && z(r, s, t)) {
    let a = i.data[fe()];
    FD(i, a, r, r[T], e, r[s + 1] = Ek(t, n), o, s);
} }
function kD(e, t, n, o) { let r = b(), i = at(2); r.firstUpdatePass && PD(r, null, i, o); let s = g(); if (n !== H && z(s, i, n)) {
    let a = r.data[fe()];
    if (jD(a, o) && !xD(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Fi(c, n || "")), sd(r, a, s, n, o);
    }
    else
        vk(r, a, s, s[T], s[i + 1], s[i + 1] = mk(e, t, n), o, i);
} }
function xD(e, t) { return t >= e.expandoStartIndex; }
function PD(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[fe()], s = xD(e, n);
    jD(i, o) && t === null && !s && (t = !1), t = fk(r, i, t, o), tk(r, i, t, n, s, o);
} }
function fk(e, t, n, o) { let r = es(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = cu(null, e, t, n, o), n = zr(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = cu(r, e, t, n, o), i === null) {
            let c = pk(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = cu(null, e, t, c[1], o), c = zr(c, t.attrs, o), hk(e, t, o, c));
        }
        else
            i = gk(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function pk(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (Do(o) !== 0)
    return e[wn(o)]; }
function hk(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[wn(r)] = o; }
function gk(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = zr(o, s, n);
} return zr(o, t.attrs, n); }
function cu(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = zr(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function zr(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), cr(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function mk(e, t, n) { if (n == null || n === "")
    return j; let o = [], r = bt(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function LD(e, t, n) { cr(e, t, bt(n)); }
function yk(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && cr(e, o, n); }
function vk(e, t, n, o, r, i, s, a) { r === H && (r = j); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, y;
    u === d ? (c += 2, l += 2, f !== p && (h = d, y = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, y = p), h !== null && FD(e, t, n, o, h, y, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function FD(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = ek(l) ? qg(c, t, n, r, Do(l), s) : void 0; if (!na(u)) {
    na(i) || JO(l) && (i = qg(c, null, n, r, a, s));
    let d = un(fe(), n);
    eS(o, s, d, r, i);
} }
function qg(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === H && (f = d ? j : void 0);
    let p = d ? Ui(f, o) : u === o ? f : void 0;
    if (l && !na(p) && (p = Ui(c, o)), na(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? wn(h) : Do(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = Ui(c, o));
} return a; }
function na(e) { return e !== void 0; }
function Ek(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = qe(bt(e)))), e; }
function jD(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function VD(e, t = "") { let n = g(), o = b(), r = e + I, i = o.firstCreatePass ? An(o, r, 1, t, null) : o.data[r], s = HD(o, n, i, t, e); n[r] = s, yr() && ef(o, n, s, i), st(i, !1); }
var HD = (e, t, n, o, r) => (Je(!0), jd(t[T], o));
function Ik(e, t, n, o, r) { let i = !Ea(t, n); if (Je(i), i)
    return jd(t[T], o); let s = t[ue]; return di(s, e, t, n); }
function BD() { HD = Ik; }
function UD(e, t) { let n = !1, o = Ke(); for (let i = 1; i < t.length; i += 2)
    n = z(e, o++, t[i]) || n; if (Sl(o), !n)
    return H; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += R(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function $D(e, t, n, o = "") { return z(e, de(), n) ? t + R(n) + o : H; }
function qD(e, t, n, o, r, i = "") { let s = Ke(), a = Dn(e, s, n, r); return at(2), a ? t + R(n) + o + R(r) + i : H; }
function GD(e, t, n, o, r, i, s, a = "") { let c = Ke(), l = Ga(e, c, n, r, s); return at(3), l ? t + R(n) + o + R(r) + i + R(s) + a : H; }
function WD(e, t, n, o, r, i, s, a, c, l = "") { let u = Ke(), d = Be(e, u, n, r, s, c); return at(4), d ? t + R(n) + o + R(r) + i + R(s) + a + R(c) + l : H; }
function zD(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = Ke(), p = Be(e, f, n, r, s, c); return p = z(e, f + 4, u) || p, at(5), p ? t + R(n) + o + R(r) + i + R(s) + a + R(c) + l + R(u) + d : H; }
function QD(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = Ke(), y = Be(e, h, n, r, s, c); return y = Dn(e, h + 4, u, f) || y, at(6), y ? t + R(n) + o + R(r) + i + R(s) + a + R(c) + l + R(u) + d + R(f) + p : H; }
function ZD(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y = "") { let v = Ke(), D = Be(e, v, n, r, s, c); return D = Ga(e, v + 4, u, f, h) || D, at(7), D ? t + R(n) + o + R(r) + i + R(s) + a + R(c) + l + R(u) + d + R(f) + p + R(h) + y : H; }
function YD(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, v, D = "") { let x = Ke(), oe = Be(e, x, n, r, s, c); return oe = Be(e, x + 4, u, f, h, v) || oe, at(8), oe ? t + R(n) + o + R(r) + i + R(s) + a + R(c) + l + R(u) + d + R(f) + p + R(h) + y + R(v) + D : H; }
function lp(e) { return lc("", e), lp; }
function lc(e, t, n) { let o = g(), r = $D(o, e, t, n); return r !== H && kt(o, fe(), r), lc; }
function up(e, t, n, o, r) { let i = g(), s = qD(i, e, t, n, o, r); return s !== H && kt(i, fe(), s), up; }
function dp(e, t, n, o, r, i, s) { let a = g(), c = GD(a, e, t, n, o, r, i, s); return c !== H && kt(a, fe(), c), dp; }
function fp(e, t, n, o, r, i, s, a, c) { let l = g(), u = WD(l, e, t, n, o, r, i, s, a, c); return u !== H && kt(l, fe(), u), fp; }
function pp(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = zD(d, e, t, n, o, r, i, s, a, c, l, u); return f !== H && kt(d, fe(), f), pp; }
function hp(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = QD(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== H && kt(p, fe(), h), hp; }
function gp(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let y = g(), v = ZD(y, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return v !== H && kt(y, fe(), v), gp; }
function mp(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, v) { let D = g(), x = YD(D, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, v); return x !== H && kt(D, fe(), x), mp; }
function yp(e) { let t = g(), n = UD(t, e); return n !== H && kt(t, fe(), n), yp; }
function kt(e, t, n) { let o = un(t, e); My(e[T], o, n); }
function vp(e, t, n) { Rf(t) && (t = t()); let o = g(), r = de(); if (z(o, r, t)) {
    let i = b(), s = Oe();
    Aa(s, o, e, t, o[T], n);
} return vp; }
function KD(e, t) { let n = Rf(e); return n && e.set(t), n; }
function Ep(e, t) { let n = g(), o = b(), r = S(); return sp(o, n, n[T], r, e, t), Ep; }
var JD = {};
function Ip(e) { J("NgLet"); let t = b(), n = g(), o = e + I, r = An(t, o, 128, null, null); return st(r, !1), pr(t, n, o, JD), Ip; }
function XD(e) { let t = b(), n = g(), o = fe(); return pr(t, n, o, e), e; }
function eC(e) { let t = wl(), n = Vt(t, I + e); if (n === JD)
    throw new C(314, !1); return n; }
function tC(e, t) { let n = b(), o = g(), r = o[T], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = vt(n, s + I), d = un(s + I, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function nC(e) { return z(g(), de(), e) ? R(e) : H; }
function oC(e, t, n = "") { return $D(g(), e, t, n); }
function rC(e, t, n, o, r = "") { return qD(g(), e, t, n, o, r); }
function iC(e, t, n, o, r, i, s = "") { return GD(g(), e, t, n, o, r, i, s); }
function sC(e, t, n, o, r, i, s, a, c = "") { return WD(g(), e, t, n, o, r, i, s, a, c); }
function aC(e, t, n, o, r, i, s, a, c, l, u = "") { return zD(g(), e, t, n, o, r, i, s, a, c, l, u); }
function cC(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return QD(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function lC(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return ZD(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function uC(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, v = "") { return YD(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, v); }
function dC(e) { return UD(g(), e); }
function Dk(e, t, n) { let o = b(); if (o.firstCreatePass) {
    let r = Fe(e);
    ud(n, o.data, o.blueprint, r, !0), ud(t, o.data, o.blueprint, r, !1);
} }
function ud(e, t, n, o, r) { if (e = P(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        ud(e[i], t, n, o, r);
else {
    let i = b(), s = g(), a = S(), c = en(e) ? e : P(e.provide), l = rl(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (en(e) || !e.multi) {
        let p = new yn(l, r, Ho, null), h = uu(c, t, r ? u : u + f, d);
        h === -1 ? (mu(ks(a, s), i, c), lu(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = uu(c, t, u + f, d), h = uu(c, t, u, u + f), y = p >= 0 && n[p], v = h >= 0 && n[h];
        if (r && !v || !r && !y) {
            mu(ks(a, s), i, c);
            let D = Mk(r ? Tk : Ck, n.length, r, o, l, e);
            !r && v && (n[h].providerFactory = D), lu(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(D), s.push(D);
        }
        else {
            let D = fC(n[r ? h : p], l, !r && o);
            lu(i, e, p > -1 ? p : h, D);
        }
        !r && o && v && n[h].componentProviders++;
    }
} }
function lu(e, t, n, o) { let r = en(t), i = Eh(t); if (r || i) {
    let c = (i ? P(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function fC(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function uu(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function Ck(e, t, n, o, r) { return dd(this.multi, []); }
function Tk(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = xr(o, o[m], this.providerFactory.index, r);
    s = c.slice(0, a), dd(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], dd(i, s); return s; }
function dd(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function Mk(e, t, n, o, r, i) { let s = new yn(e, n, Ho, null); return s.multi = [], s.index = t, s.componentProviders = 0, fC(s, r, o && !n), s; }
function pC(e, t = []) { return n => { n.providersResolver = (o, r) => Dk(o, r ? r(e) : e, t); }; }
function hC(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function gC(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = Ys(t, ME), o.pipeDefs = Ys(n, ze); }
function mC(e, t) { return lt(() => { let n = $i(e); n.declarations = ys(t.declarations || j), n.imports = ys(t.imports || j), n.exports = ys(t.exports || j), t.bootstrap && (n.bootstrap = ys(t.bootstrap)), ho.registerNgModule(e, t); }); }
function ys(e) { if (typeof e == "function")
    return e; let t = We(e); return t.some(tr) ? () => t.map(P).map(Gg) : t.map(Gg); }
function Gg(e) { return df(e) ? e.ngModule : e; }
function yC(e, t, n) { let o = ve() + e, r = g(); return r[o] === H ? ut(r, o, n ? t.call(n) : t()) : pi(r, o); }
function vC(e, t, n, o) { return _C(g(), ve(), e, t, n, o); }
function EC(e, t, n, o, r) { return SC(g(), ve(), e, t, n, o, r); }
function IC(e, t, n, o, r, i) { return bC(g(), ve(), e, t, n, o, r, i); }
function DC(e, t, n, o, r, i, s) { return AC(g(), ve(), e, t, n, o, r, i, s); }
function CC(e, t, n, o, r, i, s, a) { let c = ve() + e, l = g(), u = Be(l, c, n, o, r, i); return z(l, c + 4, s) || u ? ut(l, c + 5, a ? t.call(a, n, o, r, i, s) : t(n, o, r, i, s)) : pi(l, c + 5); }
function TC(e, t, n, o, r, i, s, a, c) { let l = ve() + e, u = g(), d = Be(u, l, n, o, r, i); return Dn(u, l + 4, s, a) || d ? ut(u, l + 6, c ? t.call(c, n, o, r, i, s, a) : t(n, o, r, i, s, a)) : pi(u, l + 6); }
function MC(e, t, n, o, r, i, s, a, c, l) { let u = ve() + e, d = g(), f = Be(d, u, n, o, r, i); return Ga(d, u + 4, s, a, c) || f ? ut(d, u + 7, l ? t.call(l, n, o, r, i, s, a, c) : t(n, o, r, i, s, a, c)) : pi(d, u + 7); }
function NC(e, t, n, o, r, i, s, a, c, l, u) { let d = ve() + e, f = g(), p = Be(f, d, n, o, r, i); return Be(f, d + 4, s, a, c, l) || p ? ut(f, d + 8, u ? t.call(u, n, o, r, i, s, a, c, l) : t(n, o, r, i, s, a, c, l)) : pi(f, d + 8); }
function wC(e, t, n, o) { return RC(g(), ve(), e, t, n, o); }
function Ii(e, t) { let n = e[t]; return n === H ? void 0 : n; }
function _C(e, t, n, o, r, i) { let s = t + n; return z(e, s, r) ? ut(e, s + 1, i ? o.call(i, r) : o(r)) : Ii(e, s + 1); }
function SC(e, t, n, o, r, i, s) { let a = t + n; return Dn(e, a, r, i) ? ut(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : Ii(e, a + 2); }
function bC(e, t, n, o, r, i, s, a) { let c = t + n; return Ga(e, c, r, i, s) ? ut(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : Ii(e, c + 3); }
function AC(e, t, n, o, r, i, s, a, c) { let l = t + n; return Be(e, l, r, i, s, a) ? ut(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : Ii(e, l + 4); }
function RC(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    z(e, s++, r[c]) && (a = !0); return a ? ut(e, s, o.apply(i, r)) : Ii(e, s); }
function OC(e, t) { let n = b(), o, r = e + I; n.firstCreatePass ? (o = Nk(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = Pt(o.type, !0)), s, a = Ie(Ho); try {
    let c = Os(!1), l = i();
    return Os(c), pr(n, g(), r, l), l;
}
finally {
    Ie(a);
} }
function Nk(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function kC(e, t, n) { let o = e + I, r = g(), i = Vt(r, o); return Di(r, o) ? _C(r, ve(), t, i.transform, n, i) : i.transform(n); }
function xC(e, t, n, o) { let r = e + I, i = g(), s = Vt(i, r); return Di(i, r) ? SC(i, ve(), t, s.transform, n, o, s) : s.transform(n, o); }
function PC(e, t, n, o, r) { let i = e + I, s = g(), a = Vt(s, i); return Di(s, i) ? bC(s, ve(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function LC(e, t, n, o, r, i) { let s = e + I, a = g(), c = Vt(a, s); return Di(a, s) ? AC(a, ve(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function FC(e, t, n) { let o = e + I, r = g(), i = Vt(r, o); return Di(r, o) ? RC(r, ve(), t, i.transform, n, i) : i.transform.apply(i, n); }
function Di(e, t) { return e[m].data[t].pure; }
function jC(e, t) { return Fa(e, t); }
function VC(e, t) { return () => { try {
    return ho.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function HC(e, t) { let n = W(e); n !== null && (n.debugInfo = t); }
function BC(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function UC(e, t, n, o, r = null, i = null) { let s = W(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = wk(s, W(e)); if (e[nn] = a, c.tView) {
    let l = ZN().values();
    for (let u of l)
        rt(u) && u[Z] === null && _s(r, i, a, c, u);
} }
function wk(e, t) { let n = Q({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function _s(e, t, n, o, r) { let i = r[m]; if (i === o.tView) {
    Sk(e, t, n, o, r);
    return;
} for (let s = I; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (K(a)) {
        te(a[$]) && _s(e, t, n, o, a[$]);
        for (let c = q; c < a.length; c++)
            _s(e, t, n, o, a[c]);
    }
    else
        te(a) && _s(e, t, n, o, a);
} }
function _k(e, t) { e.componentReplaced?.(t.id); }
function Sk(e, t, n, o, r) { let i = r[U], s = r[$], a = r[Z], c = r[le], l = r[L].get(G, null), u = () => { if (o.encapsulation === He.ShadowDom || o.encapsulation === He.ExperimentalIsolatedShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = Vy(n), f = Ca(a, d, i, Gd(n), s, c, null, null, null, null, null); bk(a, r, f, c.index), li(r[m], r); let p = r[Ze].rendererFactory; _k(p, o), f[T] = p.createRenderer(s, n), Qy(r[m], r), Ak(c), Pa(d, f, i), pv(d, f, d.template, i); }; l === null ? Wg(e, t, u) : l.run(() => Wg(e, t, u)); }
function Wg(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function bk(e, t, n, o) { for (let r = I; r < e[m].bindingStartIndex; r++) {
    let i = e[r];
    if ((te(i) || K(i)) && i[ge] === t) {
        i[ge] = n;
        break;
    }
} e[jt] === t && (e[jt] = n), e[ur] === t && (e[ur] = n), n[ge] = t[ge], t[ge] = null, e[o] = n; }
function Ak(e) { if (e.projection !== null) {
    for (let t of e.projection)
        ra(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var Ee = { \u0275\u0275animateEnter: wr, \u0275\u0275animateEnterListener: _r, \u0275\u0275animateLeave: Sr, \u0275\u0275animateLeaveListener: Js, \u0275\u0275attribute: Hf, \u0275\u0275defineComponent: TE, \u0275\u0275defineDirective: NE, \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: nr, \u0275\u0275defineNgModule: Mf, \u0275\u0275definePipe: wE, \u0275\u0275directiveInject: Ho, \u0275\u0275getInheritedFactory: Dm, \u0275\u0275inject: he, \u0275\u0275injectAttribute: ia, \u0275\u0275invalidFactory: zv, \u0275\u0275invalidFactoryDep: Hi, \u0275\u0275templateRefExtractor: jC, \u0275\u0275resetView: Cl, \u0275\u0275HostDirectivesFeature: bE, \u0275\u0275NgOnChangesFeature: sm, \u0275\u0275ProvidersFeature: pC, \u0275\u0275InheritDefinitionFeature: Nf, \u0275\u0275ExternalStylesFeature: hC, \u0275\u0275nextContext: gD, \u0275\u0275namespaceHTML: xl, \u0275\u0275namespaceMathML: kl, \u0275\u0275namespaceSVG: Ol, \u0275\u0275enableBindings: vl, \u0275\u0275disableBindings: El, \u0275\u0275elementStart: oc, \u0275\u0275elementEnd: rc, \u0275\u0275element: qf, \u0275\u0275elementContainerStart: ac, \u0275\u0275elementContainerEnd: vi, \u0275\u0275domElement: Gf, \u0275\u0275domElementStart: ic, \u0275\u0275domElementEnd: sc, \u0275\u0275domElementContainer: Zf, \u0275\u0275domElementContainerStart: cc, \u0275\u0275domElementContainerEnd: Qf, \u0275\u0275domTemplate: _f, \u0275\u0275domListener: ip, \u0275\u0275elementContainer: zf, \u0275\u0275pureFunction0: yC, \u0275\u0275pureFunction1: vC, \u0275\u0275pureFunction2: EC, \u0275\u0275pureFunction3: IC, \u0275\u0275pureFunction4: DC, \u0275\u0275pureFunction5: CC, \u0275\u0275pureFunction6: TC, \u0275\u0275pureFunction7: MC, \u0275\u0275pureFunction8: NC, \u0275\u0275pureFunctionV: wC, \u0275\u0275getCurrentView: ZI, \u0275\u0275restoreView: Dl, \u0275\u0275listener: op, \u0275\u0275projection: yD, \u0275\u0275syntheticHostProperty: Jf, \u0275\u0275syntheticHostListener: rp, \u0275\u0275pipeBind1: kC, \u0275\u0275pipeBind2: xC, \u0275\u0275pipeBind3: PC, \u0275\u0275pipeBind4: LC, \u0275\u0275pipeBindV: FC, \u0275\u0275projectionDef: mD, \u0275\u0275domProperty: Kf, \u0275\u0275ariaProperty: Vf, \u0275\u0275property: $f, \u0275\u0275control: PI, \u0275\u0275controlCreate: xI, \u0275\u0275pipe: OC, \u0275\u0275queryRefresh: ID, \u0275\u0275queryAdvance: MD, \u0275\u0275viewQuery: ED, \u0275\u0275viewQuerySignal: TD, \u0275\u0275loadQuery: DD, \u0275\u0275contentQuery: vD, \u0275\u0275contentQuerySignal: CD, \u0275\u0275reference: ND, \u0275\u0275classMap: RD, \u0275\u0275styleMap: AD, \u0275\u0275styleProp: ap, \u0275\u0275classProp: cp, \u0275\u0275advance: Hy, \u0275\u0275template: wf, \u0275\u0275conditional: UI, \u0275\u0275conditionalCreate: BI, \u0275\u0275conditionalBranchCreate: nc, \u0275\u0275defer: rI, \u0275\u0275deferWhen: iI, \u0275\u0275deferOnIdle: lI, \u0275\u0275deferOnImmediate: fI, \u0275\u0275deferOnTimer: gI, \u0275\u0275deferOnHover: vI, \u0275\u0275deferOnInteraction: DI, \u0275\u0275deferOnViewport: MI, \u0275\u0275deferPrefetchWhen: sI, \u0275\u0275deferPrefetchOnIdle: uI, \u0275\u0275deferPrefetchOnImmediate: pI, \u0275\u0275deferPrefetchOnTimer: mI, \u0275\u0275deferPrefetchOnHover: EI, \u0275\u0275deferPrefetchOnInteraction: CI, \u0275\u0275deferPrefetchOnViewport: NI, \u0275\u0275deferHydrateWhen: aI, \u0275\u0275deferHydrateNever: cI, \u0275\u0275deferHydrateOnIdle: dI, \u0275\u0275deferHydrateOnImmediate: hI, \u0275\u0275deferHydrateOnTimer: yI, \u0275\u0275deferHydrateOnHover: II, \u0275\u0275deferHydrateOnInteraction: TI, \u0275\u0275deferHydrateOnViewport: wI, \u0275\u0275deferEnableTimerScheduling: qE, \u0275\u0275repeater: WI, \u0275\u0275repeaterCreate: GI, \u0275\u0275repeaterTrackByIndex: $I, \u0275\u0275repeaterTrackByIdentity: qI, \u0275\u0275componentInstance: OI, \u0275\u0275text: VD, \u0275\u0275textInterpolate: lp, \u0275\u0275textInterpolate1: lc, \u0275\u0275textInterpolate2: up, \u0275\u0275textInterpolate3: dp, \u0275\u0275textInterpolate4: fp, \u0275\u0275textInterpolate5: pp, \u0275\u0275textInterpolate6: hp, \u0275\u0275textInterpolate7: gp, \u0275\u0275textInterpolate8: mp, \u0275\u0275textInterpolateV: yp, \u0275\u0275i18n: dD, \u0275\u0275i18nAttributes: fD, \u0275\u0275i18nExp: np, \u0275\u0275i18nStart: ep, \u0275\u0275i18nEnd: tp, \u0275\u0275i18nApply: pD, \u0275\u0275i18nPostprocess: hD, \u0275\u0275resolveWindow: Py, \u0275\u0275resolveDocument: Ly, \u0275\u0275resolveBody: Ud, \u0275\u0275setComponentScope: gC, \u0275\u0275setNgModuleScope: mC, \u0275\u0275registerNgModuleType: Df, \u0275\u0275getComponentDepsFactory: VC, \u0275setClassDebugInfo: HC, \u0275\u0275declareLet: Ip, \u0275\u0275storeLet: XD, \u0275\u0275readContextLet: eC, \u0275\u0275attachSourceLocations: tC, \u0275\u0275interpolate: nC, \u0275\u0275interpolate1: oC, \u0275\u0275interpolate2: rC, \u0275\u0275interpolate3: iC, \u0275\u0275interpolate4: sC, \u0275\u0275interpolate5: aC, \u0275\u0275interpolate6: cC, \u0275\u0275interpolate7: lC, \u0275\u0275interpolate8: uC, \u0275\u0275interpolateV: dC, \u0275\u0275sanitizeHtml: Sy, \u0275\u0275sanitizeStyle: by, \u0275\u0275sanitizeResourceUrl: Bd, \u0275\u0275sanitizeScript: Ay, \u0275\u0275validateAttribute: xy, \u0275\u0275sanitizeUrl: Hd, \u0275\u0275sanitizeUrlOrResourceUrl: ky, \u0275\u0275trustConstantHtml: Ry, \u0275\u0275trustConstantResourceUrl: Oy, forwardRef: er, resolveForwardRef: P, \u0275\u0275twoWayProperty: vp, \u0275\u0275twoWayBindingSet: KD, \u0275\u0275twoWayListener: Ep, \u0275\u0275replaceMetadata: UC, \u0275\u0275getReplaceMetadataURL: BC }, to = null;
function $C(e) { to !== null && (e.defaultEncapsulation !== to.defaultEncapsulation || e.preserveWhitespaces !== to.preserveWhitespaces) || (to = e); }
function Rk() { return to; }
function Ok() { to = null; }
var kr = [];
function kk(e, t) { kr.push({ moduleType: e, ngModule: t }); }
var du = !1;
function qC() { if (!du) {
    du = !0;
    try {
        for (let e = kr.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = kr[e];
            n.declarations && n.declarations.every(GC) && (kr.splice(e, 1), jk(t, n));
        }
    }
    finally {
        du = !1;
    }
} }
function GC(e) { return Array.isArray(e) ? e.every(GC) : !!P(e); }
function WC(e, t = {}) { zC(e, t), t.id !== void 0 && Df(e, t.id), kk(e, t); }
function zC(e, t, n = !1) { let o = We(t.declarations || j), r = null; Object.defineProperty(e, ji, { configurable: !0, get: () => (r === null && (r = ie({ usage: 0, kind: "NgModule", type: e }).compileNgModule(Ee, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: We(t.bootstrap || j).map(P), declarations: o.map(P), imports: We(t.imports || j).map(P).map(zg), exports: We(t.exports || j).map(P).map(zg), schemas: t.schemas ? We(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, nt, { get: () => { if (i === null) {
        let a = ie({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(Ee, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: sa(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, Qo, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || j, imports: [(t.imports || j).map(P), (t.exports || j).map(P)] };
        s = ie({ usage: 0, kind: "NgModule", type: e }).compileInjector(Ee, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function xk(e, t) { let n = `Unexpected "${Se(e)}" found in the "declarations" array of the`, o = `"${Se(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var Pk = new WeakMap, Lk = new WeakMap;
function Fk() { Pk = new WeakMap, Lk = new WeakMap, kr.length = 0, DA.clear(); }
function jk(e, t) { let n = We(t.declarations || j), o = Cp(e); n.forEach(r => { if (r = P(r), r.hasOwnProperty(nn)) {
    let s = W(r);
    Dp(s, o);
}
else
    !r.hasOwnProperty(rr) && !r.hasOwnProperty(ir) && (r.ngSelectorScope = e); }); }
function Dp(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(nn) ? W(n) : be(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => ze(n)), e.schemas = t.schemas, e.tView = null; }
function Cp(e) { if (pn(e)) {
    let t = ho.getNgModuleScope(e), n = $i(e);
    return Q({ schemas: n.schemas || null }, t);
}
else if (lr(e)) {
    if ((W(e) || be(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (ze(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function zg(e) { return df(e) ? e.ngModule : e; }
var fu = 0;
function QC(e, t) {
    let n = null;
    uA(e, t), YC(e, t), Object.defineProperty(e, nn, { get: () => {
            if (n === null) {
                let o = ie({ usage: 0, kind: "component", type: e });
                if (yE(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = Rk(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = He.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = KC(e, t), l = we(Q({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || j, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                fu++;
                try {
                    if (l.usesInheritance && JC(e), n = o.compileComponent(Ee, a, l), l.isStandalone) {
                        let u = We(t.imports || j), { directiveDefs: d, pipeDefs: f } = Vk(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(P);
                    }
                }
                finally {
                    fu--;
                }
                if (fu === 0 && qC(), Hk(e)) {
                    let u = Cp(e.ngSelectorScope);
                    Dp(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Se(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function Vk(e, t) { return { directiveDefs: () => Mr(e) ? [...ho.getStandaloneComponentScope(e, t).compilation.directives].map(i => W(i) || be(i)).filter(i => i !== null) : [], pipeDefs: () => Mr(e) ? [...ho.getStandaloneComponentScope(e, t).compilation.pipes].map(i => ze(i)).filter(i => i !== null) : [] }; }
function Hk(e) { return e.ngSelectorScope !== void 0; }
function Tp(e, t) { let n = null; YC(e, t || {}), Object.defineProperty(e, rr, { get: () => { if (n === null) {
        let o = ZC(e, t || {});
        n = ie({ usage: 0, kind: "directive", type: e }).compileDirective(Ee, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function ZC(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = ie({ usage: 0, kind: "directive", type: e }), i = KC(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && JC(e), { metadata: i, sourceMapUrl: o }; }
function YC(e, t) { let n = null; Object.defineProperty(e, nt, { get: () => { if (n === null) {
        let o = ZC(e, t), r = ie({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(Ee, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: sa(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function Bk(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function KC(e, t) { let n = yd(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || Pe, propMetadata: o, inputs: t.inputs || j, outputs: t.outputs || j, queries: Qg(e, o, XC), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, typeSourceSpan: null, usesInheritance: !Bk(e), exportAs: qk(t.exportAs), providers: t.providers || null, viewQueries: Qg(e, o, eT), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function JC(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !be(n) && !W(n) && Wk(n) && Tp(n, null), n = Object.getPrototypeOf(n); }
function Uk(e) { return typeof e == "string" ? nT(e) : P(e); }
function $k(e, t) { return { propertyName: e, predicate: Uk(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function Qg(e, t, n) { let o = []; for (let r in t)
    if (t.hasOwnProperty(r)) {
        let i = t[r];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${r}" of "${Se(e)}" since the query selector wasn't defined.`);
            if (i.some(tT))
                throw new Error("Cannot combine @Input decorators with query decorators");
            o.push($k(r, s));
        } });
    } return o; }
function qk(e) { return e === void 0 ? null : nT(e); }
function XC(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function eT(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function tT(e) { return e.ngMetadataName === "Input"; }
function nT(e) { return e.split(",").map(t => t.trim()); }
var Gk = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function Wk(e) { let t = yd(); if (Gk.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (tT(s) || XC(s) || eT(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function oT(e, t) { let n = null, o = null; Object.defineProperty(e, nt, { get: () => { if (o === null) {
        let r = Zg(e, t), i = ie({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(Ee, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: sa(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, ir, { get: () => { if (n === null) {
        let r = Zg(e, t);
        n = ie({ usage: 0, kind: "pipe", type: r.type }).compilePipe(Ee, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function Zg(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var rT = Zr("Directive", (e = {}) => e, void 0, void 0, (e, t) => Tp(e, t)), zk = Zr("Component", (e = {}) => Q({ changeDetection: aa.Default }, e), rT, void 0, (e, t) => QC(e, t)), Qk = Zr("Pipe", e => Q({ pure: !0 }, e), void 0, void 0, (e, t) => oT(e, t)), Zk = wt("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), Yk = wt("Output", e => ({ alias: e })), Kk = wt("HostBinding", e => ({ hostPropertyName: e })), Jk = wt("HostListener", (e, t) => ({ eventName: e, args: t })), Xk = Zr("NgModule", e => e, void 0, void 0, (e, t) => WC(e, t)), oa = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, ex = (() => { class e {
    compileModuleSync(n) { return new vo(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = rn(n), i = Xn(r.declarations).reduce((s, a) => { let c = W(a); return c && s.push(new Qt(c)), s; }, []); return new oa(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), iT = new M(""), fd = class {
};
var sT = (() => { class e {
    applicationErrorHandler = E(It);
    appRef = E(et);
    taskService = E(Et);
    ngZone = E(G);
    zonelessEnabled = E(Wn);
    tracing = E(Po, { optional: !0 });
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new dN;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Ko) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (E(rs, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { this.runningTick || this.cleanup(); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 11: break;
        case 9:
        case 8:
        case 7:
        case 10:
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick())
        return; let o = this.useMicrotaskScheduler ? Vl : jl; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick())); }
    shouldScheduleTick() { return !(this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Ko + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.taskService.remove(n), this.applicationErrorHandler(o);
    }
    finally {
        this.cleanup();
    } this.useMicrotaskScheduler = !0, Vl(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function tx() { return J("NgZoneless"), Qe([...uc(), []]); }
function uc() { return [{ provide: Ge, useExisting: sT }, { provide: G, useClass: Jo }, { provide: Wn, useValue: !0 }]; }
function nx() { return typeof $localize < "u" && $localize.locale || Ei; }
var Mp = new M("", { factory: () => E(Mp, { optional: !0, skipSelf: !0 }) || nx() }), ox = new M("", { factory: () => yO }), rx = new M(""), ix = new M(""), aT = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(aT || {}), pd = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function sx(e) { return e.map(t => t.nativeElement); }
var Qr = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new _n(t) : null; }
    get injector() { return rw(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (Zh(t) || ow(t)); }
    get context() { return Zh(this.nativeNode) || nw(this.nativeNode); }
    get listeners() { return lw(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return aw(this.nativeNode); }
    get providerTokens() { return iw(this.nativeNode); }
}, _n = class extends Qr {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = Ne(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[m].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = Ne(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[m].data, r = o[t.nodeIndex], i = {}; return ax(this.nativeElement, i), lx(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = Ne(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[m].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(To(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(To(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return Yg(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return Yg(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function ax(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                cx(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function cx(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function Yg(e, t, n, o) { let r = Ne(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[m].data[r.nodeIndex];
    hn(s, i, t, n, o, e.nativeNode);
}
else
    Np(e.nativeNode, t, n, o); }
function hn(e, t, n, o, r, i) { let s = Dh(e, t); if (e.type & 11) {
    if (pu(s, n, o, r, i), De(e)) {
        let c = ye(e.index, t);
        c && c[m].firstChild && hn(c[m].firstChild, c, n, o, r, i);
    }
    else
        e.child && hn(e.child, t, n, o, r, i), s && Np(s, n, o, r);
    let a = t[e.index];
    K(a) && Kg(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    pu(a[Ye], n, o, r, i), Kg(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[ee], l = a[le].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            pu(u, n, o, r, i);
    else if (l) {
        let u = a[Z], d = u[m].data[l.index];
        hn(d, u, n, o, r, i);
    }
}
else
    e.child && hn(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && hn(a, t, n, o, r, i);
} }
function Kg(e, t, n, o, r) { for (let i = q; i < e.length; i++) {
    let s = e[i], a = s[m].firstChild;
    a && hn(a, s, t, n, o, r);
} }
function pu(e, t, n, o, r) { if (r !== e) {
    let i = To(e);
    if (!i)
        return;
    (o && i instanceof _n && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function Np(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = To(a);
    c && ((o && c instanceof _n && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), Np(a, t, n, o));
} }
function lx(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(M_), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += R(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var hu = "__ng_debug__";
function To(e) { return e instanceof Node ? (e.hasOwnProperty(hu) || (e[hu] = e.nodeType == Node.ELEMENT_NODE ? new _n(e) : new Qr(e)), e[hu]) : null; }
var Ci = class {
    destroyed = !1;
    listeners = null;
    errorHandler = E(gt, { optional: !0 });
    destroyRef = E(je);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(t) { if (this.destroyed)
        throw new C(953, !1); return (this.listeners ??= []).push(t), { unsubscribe: () => { let n = this.listeners?.indexOf(t); n !== void 0 && n !== -1 && this.listeners?.splice(n, 1); } }; }
    emit(t) { if (this.destroyed) {
        console.warn(Xo(953, !1));
        return;
    } if (this.listeners === null)
        return; let n = O(null); try {
        for (let o of this.listeners)
            try {
                o(t);
            }
            catch (r) {
                this.errorHandler?.handleError(r);
            }
    }
    finally {
        O(n);
    } }
};
function ux(e) { return e.destroyRef; }
function On(e, t) { return bi(e, t?.equal); }
var dx = e => e;
function wp(e, t) { if (typeof e == "function") {
    let n = kc(e, dx, t?.equal);
    return cT(n, t?.debugName);
}
else {
    let n = kc(e.source, e.computation, e.equal);
    return cT(n, e.debugName);
} }
function cT(e, t) { let n = e[ae], o = e; return o.set = r => nh(n, r), o.update = r => oh(n, r), o.asReadonly = qn.bind(e), o; }
function fx(e) { let t = e.request, n = e.params ?? t ?? (() => null); return new dc(n, hx(e), e.defaultValue, e.equal ? px(e.equal) : void 0, e.debugName, e.injector ?? E(ce)); }
var _p = class {
    value;
    isLoading;
    constructor(t, n) { this.value = t, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = qn, this.isLoading = On(() => this.status() === "loading" || this.status() === "reloading", void 0); }
    isError = On(() => this.status() === "error");
    update(t) { this.set(t(Ce(this.value))); }
    isValueDefined = On(() => this.isError() ? !1 : this.value() !== void 0);
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, dc = class extends _p {
    loaderFn;
    equal;
    debugName;
    pendingTasks;
    state;
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = !1;
    unregisterOnDestroy;
    status;
    error;
    constructor(t, n, o, r, i, s) { super(On(() => { let a = this.state().stream?.(); if (!a || this.state().status === "loading" && this.error())
        return o; if (!Sp(a))
        throw new bp(this.error()); return a.value; }, { equal: r }), i), this.loaderFn = n, this.equal = r, this.debugName = i, this.extRequest = wp({ source: t, computation: a => ({ request: a, reload: 0 }) }), this.state = wp({ source: this.extRequest, computation: (a, c) => { let l = a.request === void 0 ? "idle" : "loading"; return c ? { extRequest: a, status: l, previousStatus: lT(c.value), stream: c.value.extRequest.request === a.request ? c.value.stream : void 0 } : { extRequest: a, status: l, previousStatus: "idle", stream: void 0 }; } }), this.effectRef = $l(this.loadEffect.bind(this), { injector: s, manualCleanup: !0 }), this.pendingTasks = s.get(vr), this.unregisterOnDestroy = s.get(je).onDestroy(() => this.destroy()), this.status = On(() => lT(this.state()), void 0), this.error = On(() => { let a = this.state().stream?.(); return a && !Sp(a) ? a.error : void 0; }, void 0); }
    set(t) { if (this.destroyed)
        return; let n = Ce(this.error), o = Ce(this.state); if (!n) {
        let r = Ce(this.value);
        if (o.status === "local" && (this.equal ? this.equal(r, t) : r === t))
            return;
    } this.state.set({ extRequest: o.extRequest, status: "local", previousStatus: "local", stream: Ut({ value: t }, void 0) }), this.abortInProgressLoad(); }
    reload() { let { status: t } = Ce(this.state); return t === "idle" || t === "loading" ? !1 : (this.extRequest.update(({ request: n, reload: o }) => ({ request: n, reload: o + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return $e(this, null, function* () { let t = this.extRequest(), { status: n, previousStatus: o } = Ce(this.state); if (t.request === void 0)
        return; if (n !== "loading")
        return; this.abortInProgressLoad(); let r = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let s = yield Ce(() => this.loaderFn({ params: t.request, request: t.request, abortSignal: i, previous: { status: o } }));
        if (i.aborted || Ce(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "resolved", stream: s });
    }
    catch (s) {
        if (i.aborted || Ce(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "error", stream: Ut({ error: Rp(s) }, void 0) });
    }
    finally {
        r?.(), r = void 0;
    } }); }
    abortInProgressLoad() { Ce(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function px(e) { return (t, n) => t === void 0 || n === void 0 ? t === n : e(t, n); }
function hx(e) { return gx(e) ? e.stream : t => $e(null, null, function* () { try {
    return Ut({ value: yield e.loader(t) }, void 0);
}
catch (n) {
    return Ut({ error: Rp(n) }, void 0);
} }); }
function gx(e) { return !!e.stream; }
function lT(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return Sp(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function Sp(e) { return e.error === void 0; }
function Rp(e) { return e instanceof Error ? e : new Ap(e); }
var bp = class extends Error {
    constructor(t) { super(t.message, { cause: t }); }
}, Ap = class extends Error {
    constructor(t) { super(String(t), { cause: t }); }
};
import { Subscription as Yx } from "rxjs";
var Lp = { JSACTION: "__jsaction", OWNER: "__owner" }, pT = {};
function mx(e) { return e[Lp.JSACTION]; }
function uT(e, t) { e[Lp.JSACTION] = t; }
function yx(e) { return pT[e]; }
function vx(e, t) { pT[e] = t; }
var N = { AUXCLICK: "auxclick", CHANGE: "change", CLICK: "click", CLICKMOD: "clickmod", CLICKONLY: "clickonly", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEUP: "mouseup", MOUSEDOWN: "mousedown", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", MOUSEMOVE: "mousemove", POINTERUP: "pointerup", POINTERDOWN: "pointerdown", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", POINTERMOVE: "pointermove", POINTERCANCEL: "pointercancel", GOTPOINTERCAPTURE: "gotpointercapture", LOSTPOINTERCAPTURE: "lostpointercapture", ERROR: "error", LOAD: "load", UNLOAD: "unload", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", INPUT: "input", SCROLL: "scroll", TOGGLE: "toggle", CUSTOM: "_custom" }, Ex = [N.MOUSEENTER, N.MOUSELEAVE, "pointerenter", "pointerleave"], Ix = [N.CLICK, N.DBLCLICK, N.FOCUSIN, N.FOCUSOUT, N.KEYDOWN, N.KEYUP, N.KEYPRESS, N.MOUSEOVER, N.MOUSEOUT, N.SUBMIT, N.TOUCHSTART, N.TOUCHEND, N.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], hT = [N.FOCUS, N.BLUR, N.ERROR, N.LOAD, N.TOGGLE], yc = e => hT.indexOf(e) >= 0, Dx = Ix.concat(hT), gT = e => Dx.indexOf(e) >= 0;
function Cx(e) { return e === N.MOUSEENTER ? N.MOUSEOVER : e === N.MOUSELEAVE ? N.MOUSEOUT : e === N.POINTERENTER ? N.POINTEROVER : e === N.POINTERLEAVE ? N.POINTEROUT : e; }
function Tx(e, t, n, o) { let r = !1; yc(t) && (r = !0); let i = typeof o == "boolean" ? { capture: r, passive: o } : r; return e.addEventListener(t, n, i), { eventType: t, handler: n, capture: r, passive: o }; }
function Mx(e, t) { if (e.removeEventListener) {
    let n = typeof t.passive == "boolean" ? { capture: t.capture } : t.capture;
    e.removeEventListener(t.eventType, t.handler, n);
}
else
    e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler); }
function Nx(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1; }
var dT = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function wx(e) { return e.which === 2 || e.which == null && e.button === 4; }
function _x(e) { return dT && e.metaKey || !dT && e.ctrlKey || wx(e) || e.shiftKey; }
function Sx(e, t, n) { let o = e.relatedTarget; return (e.type === N.MOUSEOVER && t === N.MOUSEENTER || e.type === N.MOUSEOUT && t === N.MOUSELEAVE || e.type === N.POINTEROVER && t === N.POINTERENTER || e.type === N.POINTEROUT && t === N.POINTERLEAVE) && (!o || o !== n && !n.contains(o)); }
function bx(e, t) { let n = {}; for (let o in e) {
    if (o === "srcElement" || o === "target")
        continue;
    let r = o, i = e[r];
    typeof i != "function" && (n[r] = i);
} return e.type === N.MOUSEOVER ? n.type = N.MOUSEENTER : e.type === N.MOUSEOUT ? n.type = N.MOUSELEAVE : e.type === N.POINTEROVER ? n.type = N.POINTERENTER : n.type = N.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n; }
var Ax = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent), gc = class {
    element;
    handlerInfos = [];
    constructor(t) { this.element = t; }
    addEventListener(t, n, o) { Ax && (this.element.style.cursor = "pointer"), this.handlerInfos.push(Tx(this.element, t, n(this.element), o)); }
    cleanUp() { for (let t = 0; t < this.handlerInfos.length; t++)
        Mx(this.element, this.handlerInfos[t]); this.handlerInfos = []; }
}, Rx = { NAMESPACE_ACTION_SEPARATOR: ".", EVENT_ACTION_SEPARATOR: ":" };
function Yt(e) { return e.eventType; }
function Fp(e, t) { e.eventType = t; }
function pc(e) { return e.event; }
function mT(e, t) { e.event = t; }
function yT(e) { return e.targetElement; }
function vT(e, t) { e.targetElement = t; }
function ET(e) { return e.eic; }
function Ox(e, t) { e.eic = t; }
function kx(e) { return e.timeStamp; }
function xx(e, t) { e.timeStamp = t; }
function hc(e) { return e.eia; }
function IT(e, t, n) { e.eia = [t, n]; }
function Op(e) { e.eia = void 0; }
function fc(e) { return e[1]; }
function Px(e) { return e.eirp; }
function DT(e, t) { e.eirp = t; }
function CT(e) { return e.eir; }
function TT(e, t) { e.eir = t; }
function MT(e) { return { eventType: e.eventType, event: e.event, targetElement: e.targetElement, eic: e.eic, eia: e.eia, timeStamp: e.timeStamp, eirp: e.eirp, eiack: e.eiack, eir: e.eir }; }
function Lx(e, t, n, o, r, i, s, a) { return { eventType: e, event: t, targetElement: n, eic: o, timeStamp: r, eia: i, eirp: s, eiack: a }; }
var kp = class e {
    eventInfo;
    constructor(t) { this.eventInfo = t; }
    getEventType() { return Yt(this.eventInfo); }
    setEventType(t) { Fp(this.eventInfo, t); }
    getEvent() { return pc(this.eventInfo); }
    setEvent(t) { mT(this.eventInfo, t); }
    getTargetElement() { return yT(this.eventInfo); }
    setTargetElement(t) { vT(this.eventInfo, t); }
    getContainer() { return ET(this.eventInfo); }
    setContainer(t) { Ox(this.eventInfo, t); }
    getTimestamp() { return kx(this.eventInfo); }
    setTimestamp(t) { xx(this.eventInfo, t); }
    getAction() { let t = hc(this.eventInfo); if (t)
        return { name: t[0], element: t[1] }; }
    setAction(t) { if (!t) {
        Op(this.eventInfo);
        return;
    } IT(this.eventInfo, t.name, t.element); }
    getIsReplay() { return Px(this.eventInfo); }
    setIsReplay(t) { DT(this.eventInfo, t); }
    getResolved() { return CT(this.eventInfo); }
    setResolved(t) { TT(this.eventInfo, t); }
    clone() { return new e(MT(this.eventInfo)); }
}, Fx = {}, jx = /\s*;\s*/, Vx = N.CLICK, xp = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = t, this.clickModSupport = n; }
    resolveEventType(t) { this.clickModSupport && Yt(t) === N.CLICK && _x(pc(t)) ? Fp(t, N.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t); }
    resolveAction(t) { CT(t) || (this.populateAction(t, yT(t)), TT(t, !0)); }
    resolveParentAction(t) { let n = hc(t), o = n && fc(n); Op(t); let r = o && this.getParentNode(o); r && this.populateAction(t, r); }
    populateAction(t, n) { let o = n; for (; o && o !== ET(t) && (o.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(o, t), !hc(t));)
        o = this.getParentNode(o); let r = hc(t); if (r && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (Yt(t) === N.MOUSEENTER || Yt(t) === N.MOUSELEAVE || Yt(t) === N.POINTERENTER || Yt(t) === N.POINTERLEAVE)))
        if (Sx(pc(t), Yt(t), fc(r))) {
            let i = bx(pc(t), fc(r));
            mT(t, i), vT(t, fc(r));
        }
        else
            Op(t); }
    getParentNode(t) { let n = t[Lp.OWNER]; if (n)
        return n; let o = t.parentNode; return o?.nodeName === "#document-fragment" ? o?.host ?? null : o; }
    populateActionOnElement(t, n) { let o = this.parseActions(t), r = o[Yt(n)]; r !== void 0 && IT(n, r, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, o); }
    parseActions(t) { let n = mx(t); if (!n) {
        let o = t.getAttribute(zn.JSACTION);
        if (!o)
            n = Fx, uT(t, n);
        else {
            if (n = yx(o), !n) {
                n = {};
                let r = o.split(jx);
                for (let i = 0; i < r.length; i++) {
                    let s = r[i];
                    if (!s)
                        continue;
                    let a = s.indexOf(Rx.EVENT_ACTION_SEPARATOR), c = a !== -1, l = c ? s.substr(0, a).trim() : Vx, u = c ? s.substr(a + 1).trim() : s;
                    n[l] = u;
                }
                vx(o, n);
            }
            uT(t, n);
        }
    } return n; }
    addA11yClickSupport(t, n, o) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = o; }
}, NT = (function (e) { return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e; })(NT || {}), Pp = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(t, { actionResolver: n, eventReplayer: o } = {}) { this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = o; }
    dispatch(t) { let n = new kp(t); this.actionResolver?.resolveEventType(t), this.actionResolver?.resolveAction(t); let o = n.getAction(); if (o && Hx(o.element, n) && Nx(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(t) { this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function Hx(e, t) { return e.tagName === "A" && (t.getEventType() === N.CLICK || t.getEventType() === N.CLICKMOD); }
var wT = Symbol.for("propagationStopped"), jp = { REPLAY: 101 };
var Bx = "`preventDefault` called during event replay.";
var Ux = "`composedPath` called during event replay.", mc = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(t, n = !0) { this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new xp({ clickModSupport: n }), this.dispatcher = new Pp(o => { this.dispatchToDelegate(o); }, { actionResolver: this.actionResolver }); }
    dispatch(t) { this.dispatcher.dispatch(t); }
    dispatchToDelegate(t) { for (t.getIsReplay() && Gx(t), $x(t); t.getAction();) {
        if (Wx(t), yc(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), qx(t)))
            return;
        this.actionResolver.resolveParentAction(t.eventInfo);
    } }
};
function $x(e) { let t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), o = () => { t[wT] = !0, n(); }; kn(t, "stopPropagation", o), kn(t, "stopImmediatePropagation", o); }
function qx(e) { return !!e.getEvent()[wT]; }
function Gx(e) { let t = e.getEvent(), n = e.getTargetElement(), o = t.preventDefault.bind(t); kn(t, "target", n), kn(t, "eventPhase", jp.REPLAY), kn(t, "preventDefault", () => { throw o(), new Error(Bx + ""); }), kn(t, "composedPath", () => { throw new Error(Ux + ""); }); }
function Wx(e) { let t = e.getEvent(), n = e.getAction()?.element; n && kn(t, "currentTarget", n, { configurable: !0 }); }
function kn(e, t, n, { configurable: o = !1 } = {}) { Object.defineProperty(e, t, { value: n, configurable: o }); }
function _T(e, t) { e.ecrd(n => { t.dispatch(n); }, NT.I_AM_THE_JSACTION_FRAMEWORK); }
function zx(e) { return e?.q ?? []; }
function Qx(e) { e && (fT(e.c, e.et, e.h), fT(e.c, e.etc, e.h, !0)); }
function fT(e, t, n, o) { for (let r = 0; r < t.length; r++)
    e.removeEventListener(t[r], n, o); }
var Zx = !1, ST = (() => { class e {
    static MOUSE_SPECIAL_SUPPORT = Zx;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, o, r) { let i = Lx(n, o, o.target, r, Date.now()); this.handleEventInfo(i); }
    handleEventInfo(n) { if (!this.dispatcher) {
        DT(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, o, r) { if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && Ex.indexOf(n) >= 0)
        return; let i = (a, c, l) => { this.handleEvent(a, c, l); }; this.eventHandlers[n] = i; let s = Cx(o || n); if (s !== n) {
        let a = this.browserEventTypeToExtraEventTypes[s] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[s] = a;
    } this.containerManager.addEventListener(s, a => c => { i(n, c, a); }, r); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), Qx(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let o = 0; o < n.length; o++) {
        let r = n[o], i = this.getEventTypesForBrowserEventType(r.eventType);
        for (let s = 0; s < i.length; s++) {
            let a = MT(r);
            Fp(a, i[s]), this.handleEventInfo(a);
        }
    } }
    getEventTypesForBrowserEventType(n) { let o = []; return this.eventHandlers[n] && o.push(n), this.browserEventTypeToExtraEventTypes[n] && o.push(...this.browserEventTypeToExtraEventTypes[n]), o; }
    handler(n) { return this.eventHandlers[n]; }
    cleanUp() { this.containerManager?.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []; }
    registerDispatcher(n, o) { this.ecrd(n, o); }
    ecrd(n, o) { if (this.dispatcher = n, this.queuedEventInfos?.length) {
        for (let r = 0; r < this.queuedEventInfos.length; r++)
            this.handleEventInfo(this.queuedEventInfos[r]);
        this.queuedEventInfos = null;
    } }
} return e; })();
function bT(e, t = window) { return zx(t._ejsas?.[e]); }
function Vp(e, t = window) { t._ejsas && (t._ejsas[e] = void 0); }
import "@angular/core/primitives/signals";
import "@angular/core/primitives/di";
import "rxjs/operators";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var Nc = Symbol("InputSignalNode#UNSET"), ZT = we(Q({}, Ac), { transformFn: void 0, applyValueToInputSignal(e, t) { bc(e, t); } }), HF = Symbol();
function YT(e, t) { let n = Object.create(ZT); n.value = e, n.transformFn = t?.transform; function o() { if (wi(n), n.value === Nc) {
    let r = null;
    throw new C(-950, r);
} return n.value; } return o[ae] = n, o; }
var $o = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })($o || {});
var Kx = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(Kx || {}), AT = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => ia(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, BF = (() => { let e = new M(""); return e.__NG_ELEMENT_ID__ = t => { let n = S(); if (n === null)
    throw new C(204, !1); if (n.type & 2)
    return n.value; if (t & 8)
    return null; throw new C(204, !1); }, e; })();
function UF(e) { return new Ci; }
function RT(e, t) { return YT(e, t); }
function Jx(e) { return YT(Nc, e); }
var $F = (RT.required = Jx, RT);
function OT(e, t) { return vf(t); }
function Xx(e, t) { return Ef(t); }
var qF = (OT.required = Xx, OT);
function GF(e, t) { return If(t); }
function kT(e, t) { return vf(t); }
function eP(e, t) { return Ef(t); }
var WF = (kT.required = eP, kT);
function zF(e, t) { return If(t); }
function KT(e, t) { let n = Object.create(ZT), o = new Ci; n.value = e; function r() { return wi(n), xT(n.value), n.value; } return r[ae] = n, r.asReadonly = qn.bind(r), r.set = i => { n.equal(n.value, i) || (bc(n, i), o.emit(i)); }, r.update = i => { xT(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function xT(e) { if (e === Nc)
    throw new C(952, !1); }
function PT(e, t) { return KT(e, t); }
function tP(e) { return KT(Nc, e); }
var QF = (PT.required = tP, PT), JT = !0, Go = class {
}, ZF = wt("ContentChildren", (e, t = {}) => Q({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: JT }, t), Go), YF = wt("ContentChild", (e, t = {}) => Q({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), Go), KF = wt("ViewChildren", (e, t = {}) => Q({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: JT }, t), Go), JF = wt("ViewChild", (e, t) => Q({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), Go);
function nP(e, t, n) { let o = new vo(n); return Promise.resolve(o); }
function LT(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var oP = (() => { class e {
    zone = E(G);
    changeDetectionScheduler = E(Ge);
    applicationRef = E(et);
    applicationErrorHandler = E(It);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), rP = new M("", { factory: () => !1 });
function iP({ ngZoneFactory: e, scheduleInRootZone: t }) { return e ??= () => new G(we(Q({}, XT()), { scheduleInRootZone: t })), [{ provide: Wn, useValue: !1 }, { provide: G, useFactory: e }, { provide: Le, multi: !0, useFactory: () => { let n = E(oP, { optional: !0 }); return () => n.initialize(); } }, { provide: Le, multi: !0, useFactory: () => { let n = E(sP); return () => { n.initialize(); }; } }, { provide: rs, useValue: t ?? Fl }]; }
function XF(e) { let t = e?.scheduleInRootZone, n = iP({ ngZoneFactory: () => { let o = XT(e); return o.scheduleInRootZone = t, o.shouldCoalesceEventChangeDetection && J("NgZone_CoalesceEvent"), new G(o); }, scheduleInRootZone: t }); return Qe([{ provide: rP, useValue: !0 }, n]); }
function XT(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var sP = (() => { class e {
    subscription = new Yx;
    initialized = !1;
    zone = E(G);
    pendingTasks = E(Et);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { G.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { G.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var Ic = new M(""), aP = new M("");
function Ti(e) { return !e.moduleRef; }
function eM(e) { let t = Ti(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(G); return n.run(() => { Ti(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(It), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), Ti(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(Ic);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(Ic);
    s.add(i), e.moduleRef.onDestroy(() => { Nr(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return lP(o, n, () => { let i = t.get(Et), s = i.add(), a = t.get(Pf); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(Mp, Ei); if (eD(c || Ei), !t.get(aP, !0))
    return Ti(e) ? t.get(et) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Ti(e)) {
    let u = t.get(et);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return tM?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => void i.remove(s)); }); }); }
var tM;
function FT() { tM = cP; }
function cP(e, t) { let n = e.injector.get(et); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new C(-403, !1); t.push(e); }
function lP(e, t, n) { try {
    let o = n();
    return kf(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var nM = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = [uc(), ...o?.applicationProviders ?? [], Ul], i = CE(n.moduleType, this.injector, r); return FT(), eM({ moduleRef: i, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = Ff({}, o); return FT(), nP(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new C(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(Ic, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(he(ce)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), qo = null;
function uP(e) { if (wc())
    throw new C(400, !1); Lf(), qo = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(nM); return rM(e), t; }
function dP(e, t, n = []) { let o = `Platform: ${t}`, r = new M(o); return (i = []) => { let s = wc(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? uP(oM(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : fP(r); }; }
function oM(e = [], t) { return ce.create({ name: t, providers: [{ provide: ol, useValue: "platform" }, { provide: Ic, useValue: new Set([() => qo = null]) }, ...e] }); }
function fP(e) { let t = wc(); if (!t)
    throw new C(-401, !1); return t; }
function wc() { return typeof ngServerMode < "u" && ngServerMode ? null : qo?.get(nM) ?? null; }
function e1() { wc()?.destroy(); }
function pP(e = []) { if (qo)
    return qo; let t = oM(e); return (typeof ngServerMode > "u" || !ngServerMode) && (qo = t), Lf(), rM(t), t; }
function t1(e) { return Qe([{ provide: Ed, useValue: e, multi: !0 }]); }
function rM(e) { let t = e.get(Ed, null); Gi(e, () => { t?.forEach(n => n()); }); }
function n1(e) { return Qe([]); }
function o1() { return !1; }
function r1() { }
function i1(e) { let t = Cf(e); if (!t)
    throw iM(e); return new vo(t); }
function s1(e) { let t = Cf(e); if (!t)
    throw iM(e); return t; }
function iM(e) { return new Error(`No module with ID ${e} loaded`); }
var hP = (() => { class e {
    static __NG_ELEMENT_ID__ = gP;
} return e; })();
function gP(e) { return mP(S(), g(), (e & 16) === 16); }
function mP(e, t, n) { if (De(e) && !n) {
    let o = ye(e.index, t);
    return new zt(o, o);
}
else if (e.type & 175) {
    let o = t[ee];
    return new zt(o, t);
} return null; }
var Up = class extends hP {
}, jT = class extends Up {
}, Dc = class {
    constructor() { }
    supports(t) { return Ur(t); }
    create(t) { return new $p(t); }
}, yP = (e, t) => t, $p = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || yP; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < VT(o, r, i) ? n : o, a = VT(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !Ur(t))
        throw new C(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, Kv(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new qp(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Cc), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Cc), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, qp = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, Gp = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, Cc = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new Gp, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function VT(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var Tc = class {
    constructor() { }
    supports(t) { return t instanceof Map || qa(t); }
    create() { return new Wp; }
}, Wp = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    _removalsTail = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || qa(t)))
        throw new C(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new zp(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, zp = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function HT() { return new sM([new Dc]); }
var sM = (() => { class e {
    factories;
    static \u0275prov = B({ token: e, providedIn: "root", factory: HT });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = E(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || HT()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new C(901, !1); }
} return e; })();
function BT() { return new aM([new Tc]); }
var aM = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: BT });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = E(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || BT()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new C(901, !1); }
} return e; })(), vP = [new Tc], EP = [new Dc], a1 = new sM(EP), c1 = new aM(vP), l1 = dP(null, "core", []), u1 = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(he(et)); };
    static \u0275mod = Mf({ type: e });
    static \u0275inj = nr({});
} return e; })();
function d1(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (V(k.BootstrapApplicationStart), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new C(-401, !1); try {
    let i = r?.injector ?? pP(o), s = [uc(), Ul, ...n || []], a = new qr({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return eM({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    V(k.BootstrapApplicationEnd);
} }
var vc = new WeakSet, UT = "", Ec = [];
function $T(e) { return e.get(ha, Nd); }
function IP() { let e = [{ provide: ha, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = E(_t);
            t = !!window._ejsas?.[n];
        } return t && J("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Le, useValue: () => { let t = E(et), { injector: n } = t; if (!vc.has(t)) {
        let o = E(ni);
        if ($T(n)) {
            Qm();
            let r = n.get(_t), i = Wm(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (Gm(s, a, c), Sd(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: mi, useFactory: () => { let t = E(et), { injector: n } = t; return () => { if (!$T(n) || vc.has(t))
        return; vc.add(t); let o = n.get(_t); t.onDestroy(() => { vc.delete(t), typeof ngServerMode < "u" && !ngServerMode && Vp(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(Ad); DP(r, n); let i = n.get(ni); i.get(UT)?.forEach(bd), i.delete(UT); let s = r.instance; oi(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var DP = (e, t) => { let n = t.get(_t), o = window._ejsas[n], r = e.instance = new ST(new gc(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = bT(n); r.replayEarlyEventInfos(i), Vp(n); let s = new mc(a => { TP(t, a, a.currentTarget); }); _T(r, s); };
function CP(e, t, n) { let o = new Map, r = t[Ft], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!gT(l))
        continue;
    yc(l) ? n.capture.add(l) : n.regular.add(l);
    let u = F(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function TP(e, t, n) { let o = (n && n.getAttribute(Ro)) ?? ""; /d\d+/.test(o) ? MP(o, e, t, n) : t.eventPhase === jp.REPLAY && Rd(t, n); }
function MP(e, t, n, o) { Ec.push({ event: n, currentTarget: o }), Ot(t, e, NP); }
function NP(e) { let t = [...Ec], n = new Set(e); Ec = []; for (let { event: o, currentTarget: r } of t) {
    let i = r.getAttribute(Ro);
    n.has(i) ? Rd(o, r) : Ec.push({ event: o, currentTarget: r });
} }
var Qp = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, wP = 0;
function cM(e) { return e.ssrId || (e.ssrId = `t${wP++}`), e.ssrId; }
function lM(e, t, n) { let o = []; return po(e, t, n, o), o.length; }
function _P(e) { let t = []; return La(e, t), t.length; }
function uM(e, t, n) { let o = e[$]; return o && !o.hasAttribute(wo) ? Mc(o, e, null, t) : null; }
function dM(e, t, n) { let o = fr(e[$]), r = uM(o, t); if (r === null)
    return; let i = F(o[$]), s = e[Z], a = Mc(i, s, null, t), c = o[T], l = `${r}|${a}`; c.setAttribute(i, oo, l); }
function f1(e, t) { let n = e.injector, o = xv(n), r = oi(n), i = new Qp, s = new Map, a = e._views, c = n.get(ha, Nd), l = { regular: new Set, capture: new Set }, u = new Map, d = e.injector.get(_t); for (let h of a) {
    let y = Od(h);
    if (y !== null) {
        let v = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, appId: d, deferBlocks: u };
        K(y) ? dM(y, v) : uM(y, v), OP(s, t);
    }
} let f = i.getAll(), p = n.get(So); if (p.set(ga, f), u.size > 0) {
    let h = {};
    for (let [y, v] of u.entries())
        h[y] = v;
    p.set(ma, h);
} return l; }
function SP(e, t, n, o, r) { let i = [], s = ""; for (let a = q; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (rt(c) && (c = c[I], K(c))) {
        u = _P(c) + 1, dM(c, r);
        let p = fr(c[$]);
        d = { [da]: p[m].ssrId, [Mt]: u };
    }
    if (!d) {
        let p = c[m];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = cM(p), u = lM(p, c, p.firstChild)), d = { [da]: l, [Mt]: u };
        let h = !1;
        if (VE(n[m], t)) {
            let y = Te(n, t), v = pe(n[m], t);
            if (r.isIncrementalHydrationEnabled && v.hydrateTriggers !== null) {
                let D = `d${r.deferBlocks.size}`;
                v.hydrateTriggers.has(7) && (h = !0);
                let x = [];
                La(e, x);
                let oe = { [Mt]: x.length, [ei]: y[Rt] }, Ue = bP(v.hydrateTriggers);
                Ue.length > 0 && (oe[ti] = Ue), o !== null && (oe[Cd] = o), r.deferBlocks.set(D, oe);
                let ke = F(e);
                ke !== void 0 ? ke.nodeType === Node.COMMENT_NODE && qT(ke, D) : qT(ke, D), h || xP(v, x, D, r), o = D, d[pa] = D;
            }
            d[ei] = y[Rt];
        }
        h || Object.assign(d, fM(e[a], o, r));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[Jr] ??= 1, p[Jr]++;
    }
    else
        s = f, i.push(d);
} return i; }
function bP(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : r.type === 5 ? n.push({ trigger: o, delay: r.delay }) : n.push({ trigger: o, intersectionObserverOptions: r.intersectionObserverOptions })); return n; }
function Mi(e, t, n, o) { let r = t.index - I; e[Xr] ??= {}, e[Xr][r] ??= bv(t, n, o); }
function Hp(e, t) { let n = typeof t == "number" ? t : t.index - I; e[Ao] ??= [], e[Ao].includes(n) || e[Ao].push(n); }
function fM(e, t = null, n) { let o = {}, r = e[m], i = Pv(r, n), s = n.shouldReplayEvents ? CP(r, e, n.eventTypesToReplay) : null; for (let a = I; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - I, u = Lv(e, a, n);
    if (u) {
        o[fa] ??= {}, o[fa][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            Hp(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + I];
            Mi(o, f, e, i);
        }
        continue;
    }
    if (ra(c) && !Oo(c)) {
        if (K(e[a]) && c.tView && (o[ua] ??= {}, o[ua][l] = cM(c.tView)), Vo(c, e) && kP(c)) {
            Hp(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !cl(d) && !_o(d) && (Vo(d, e) ? Hp(o, d) : Mi(o, d, e, i));
                    else
                        throw Iv(F(e[a]));
        }
        if (AP(o, c, e, i), K(e[a])) {
            let d = e[a][$];
            if (Array.isArray(d)) {
                let f = F(d);
                f.hasAttribute(wo) || Mc(f, d, t, n);
            }
            o[bo] ??= {}, o[bo][l] = SP(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !fm(c)) {
            let d = F(e[a][$]);
            d.hasAttribute(wo) || Mc(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[Kr] ??= {}, o[Kr][l] = lM(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !_o(d) && Mi(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = F(e[a]);
            xd(n, d);
        }
        if (s && c.type & 2) {
            let d = F(e[a]);
            s.has(d) && _d(d, s.get(d), t);
        }
    }
} return o; }
function AP(e, t, n, o) { cl(t) || (t.projectionNext && t.projectionNext !== t.next && !_o(t.projectionNext) && Mi(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && Vo(t.parent, n) && !Vo(t, n) && Mi(e, t, n, o)); }
function RP(e) { let t = e[U]; if (!t?.constructor)
    return !1; let n = W(t.constructor); return n?.encapsulation === He.ShadowDom || n?.encapsulation === He.ExperimentalIsolatedShadowDom; }
function Mc(e, t, n, o) { let r = t[T]; if (Ih(t) && !Ha() || RP(t))
    return r.setAttribute(e, wo, ""), null; {
    let i = fM(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, oo, s.toString()), s;
} }
function qT(e, t) { e.textContent = `ngh=${t}`; }
function OP(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function kP(e) { let t = e; for (; t != null;) {
    if (De(t))
        return !0;
    t = t.parent;
} return !1; }
function xP(e, t, n, o) { let r = sy(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        _d(s, r, n);
} }
var GT = !1, WT = !1, zT = !1;
function PP() { GT || (GT = !0, ey(), zI(), BD(), QI(), xE(), cE(), Uv(), iv()); }
function LP() { WT || (WT = !0, nD(), kv(), jv()); }
function FP() { zT || (zT = !0, ly()); }
function jP(e) { return e.whenStable(); }
var p1 = "ngcm";
function h1() { let e = [{ provide: Sn, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!E(So, { optional: !0 })?.get(ga, null)), t && J("NgHydration"), t; } }, { provide: Le, useValue: () => { if (lf(!1), typeof ngServerMode < "u" && ngServerMode)
            return; let t = E(Bt); E(Sn) && (dy(t), PP()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Td, useFactory: () => E(Sn) }, { provide: mi, useFactory: () => { if (E(Sn)) {
        let t = E(et);
        return () => { jP(t).then(() => { t.destroyed || uf(t); }); };
    } return () => { }; }, multi: !0 }), Qe(e); }
function g1() { return [{ provide: Md, useFactory: () => E(Sn) }, { provide: Le, useValue: () => { E(Sn) && (LP(), lf(!0), J("NgI18nHydration")); }, multi: !0 }]; }
function m1() { let e = [IP(), { provide: wd, useValue: !0 }, { provide: St, useClass: Zm }, { provide: Le, useValue: () => { FP(), J("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: mi, useFactory: () => { let t = E(ce), n = E(Bt); return () => { let o = uy(t), r = Av(n, n.body); oI(t, o, r), ay(n, t); }; }, multi: !0 }), e; }
function y1(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function v1(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var VP = "\u{1F170}\uFE0F", _c = !1;
function E1(e) { if (!_c)
    return; let { startLabel: t } = pM(e); performance.mark(t); }
function I1(e) { if (!_c)
    return; let { startLabel: t, labelName: n, endLabel: o } = pM(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function pM(e) { let t = `${VP}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var QT = !1;
function D1() { if (!QT && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    QT = !0, console.warn("Performance API is not supported on this platform");
    return;
} _c = !0; }
function C1() { _c = !1; }
function T1(e) { let t = e; for (; t;) {
    let n = bm(t);
    if (n !== null)
        for (let o = I; o < n.length; o++) {
            let r = n[o];
            if (!te(r) && !K(r) || r[$] !== t)
                continue;
            let i = n[m], s = vt(i, o);
            if (De(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = a.debugInfo?.className || a.type.name;
                if (c)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function M1(e) { }
function N1(e) { return ie({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(Ee, `ng:///${e.type.name}/\u0275fac.js`, e); }
function w1(e) { Af(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function _1(e) { GE(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); Af(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function S1(e) { return ie({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(Ee, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function b1(e) { return ie({ usage: 1, kind: HP(e.target), type: e.type }).compileFactoryDeclaration(Ee, `ng:///${e.type.name}/\u0275fac.js`, e); }
function HP(e) { switch (e) {
    case $o.Directive: return "directive";
    case $o.Component: return "component";
    case $o.Injectable: return "injectable";
    case $o.Pipe: return "pipe";
    case $o.NgModule: return "NgModule";
} }
function A1(e) { return ie({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(Ee, `ng:///${e.type.name}/\u0275prov.js`, e); }
function R1(e) { return ie({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(Ee, `ng:///${e.type.name}/\u0275inj.js`, e); }
function O1(e) { return ie({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(Ee, `ng:///${e.type.name}/\u0275mod.js`, e); }
function k1(e) { return ie({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(Ee, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var Bp = Symbol("NOT_SET"), hM = new Set, BP = we(Q({}, Ac), { kind: "afterRenderEffectPhase", consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: Bp, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== Bp && !Si(this))
        return this.signal; try {
        for (let r of this.cleanup ?? hM)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = Wo(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        _i(this, n);
    } return (this.value === Bp || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), Zp = class extends Fr {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    onDestroyFns = null;
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(je), s), this.scheduler = r; for (let a of Qd) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(BP);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (wi(l), l.value), l.signal[ae] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { if (this.onDestroyFns !== null)
        for (let t of this.onDestroyFns)
            t(); super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? hM)
                    n();
            }
            finally {
                xt(t);
            } }
};
function x1(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return Na; let n = t?.injector ?? E(ce), o = n.get(Ge), r = n.get(Ma), i = n.get(Po, null, { optional: !0 }); r.impl ??= n.get(Zd); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(Gn, null, { optional: !0 }), c = new Zp(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function P1(e, t) { let n = W(e), o = t.elementInjector || Vn(); return new Qt(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function L1(e) { let t = W(e); if (!t)
    return null; let n = new Qt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function F1(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var j1 = new M("", { providedIn: "platform", factory: () => null }), V1 = new M("", { providedIn: "platform", factory: () => null }), H1 = new M("", { providedIn: "platform", factory: () => null });
export { mw as ANIMATION_MODULE_TYPE, mi as APP_BOOTSTRAP_LISTENER, _t as APP_ID, xf as APP_INITIALIZER, Pf as ApplicationInitStatus, u1 as ApplicationModule, et as ApplicationRef, Tm as Attribute, iT as COMPILER_OPTIONS, yw as CSP_NONCE, Uw as CUSTOM_ELEMENTS_SCHEMA, aa as ChangeDetectionStrategy, hP as ChangeDetectorRef, ex as Compiler, fd as CompilerFactory, zk as Component, $a as ComponentFactory, fi as ComponentFactoryResolver, Gv as ComponentRef, YF as ContentChild, ZF as ContentChildren, ox as DEFAULT_CURRENCY_CODE, Bt as DOCUMENT, _n as DebugElement, pd as DebugEventListener, Qr as DebugNode, $p as DefaultIterableDiffer, je as DestroyRef, rT as Directive, Le as ENVIRONMENT_INITIALIZER, Yr as ElementRef, jT as EmbeddedViewRef, xe as EnvironmentInjector, gt as ErrorHandler, ft as EventEmitter, BF as HOST_TAG_NAME, om as Host, AT as HostAttributeToken, Kk as HostBinding, Jk as HostListener, el as INJECTOR, Xg as Inject, UN as Injectable, M as InjectionToken, ce as Injector, Zk as Input, sM as IterableDiffers, aM as KeyValueDiffers, Mp as LOCALE_ID, SI as MAX_ANIMATION_TIMEOUT, aT as MissingTranslationStrategy, oa as ModuleWithComponentFactories, $w as NO_ERRORS_SCHEMA, Xk as NgModule, IE as NgModuleFactory, mo as NgModuleRef, G as NgZone, em as Optional, Yk as Output, Ci as OutputEmitterRef, gw as PLATFORM_ID, Ed as PLATFORM_INITIALIZER, vr as PendingTasks, Qk as Pipe, nM as PlatformRef, Go as Query, xs as QueryList, j1 as REQUEST, H1 as REQUEST_CONTEXT, V1 as RESPONSE_INIT, Cb as Renderer2, Br as RendererFactory2, Vs as RendererStyleFlags2, Wv as Sanitizer, bn as SecurityContext, tm as Self, bs as SimpleChange, nm as SkipSelf, rx as TRANSLATIONS, ix as TRANSLATIONS_FORMAT, Vr as TemplateRef, rR as Testability, ZE as TestabilityRegistry, So as TransferState, rm as Type, DM as VERSION, Ri as Version, JF as ViewChild, KF as ViewChildren, Wa as ViewContainerRef, He as ViewEncapsulation, Up as ViewRef, Gy as afterEveryRender, Yd as afterNextRender, x1 as afterRenderEffect, sx as asNativeElements, GM as assertInInjectionContext, rN as assertNotInReactiveContext, fP as assertPlatform, y1 as booleanAttribute, On as computed, WF as contentChild, zF as contentChildren, P1 as createComponent, Tf as createEnvironmentInjector, DE as createNgModule, yA as createNgModuleRef, uP as createPlatform, dP as createPlatformFactory, e1 as destroyPlatform, $l as effect, r1 as enableProdMode, eR as enableProfiling, er as forwardRef, To as getDebugNode, i1 as getModuleFactory, s1 as getNgModuleById, wc as getPlatform, mh as importProvidersFrom, E as inject, $F as input, eE as inputBinding, o1 as isDevMode, WE as isSignal, lr as isStandalone, Rf as isWritableSignal, wp as linkedSignal, Qe as makeEnvironmentProviders, Ew as makeStateKey, F1 as mergeApplicationConfig, QF as model, v1 as numberAttribute, UF as output, tE as outputBinding, l1 as platformCore, iR as provideAppInitializer, nN as provideBrowserGlobalErrorListeners, n1 as provideCheckNoChangesConfig, gh as provideEnvironmentInitializer, T_ as provideNgReflectAttributes, t1 as providePlatformInitializer, XF as provideZoneChangeDetection, tx as provideZonelessChangeDetection, L1 as reflectComponentType, P as resolveForwardRef, fx as resource, Gi as runInInjectionContext, YE as setTestabilityGetter, Ut as signal, $b as twoWayBinding, Ce as untracked, qF as viewChild, GF as viewChildren, _I as \u0275ANIMATIONS_DISABLED, Pm as \u0275AcxChangeDetectionStrategy, Lm as \u0275AcxViewEncapsulation, Ma as \u0275AfterRenderManager, p1 as \u0275CLIENT_RENDER_MODE_FLAG, q as \u0275CONTAINER_HEADER_OFFSET, kI as \u0275CONTROL, Ge as \u0275ChangeDetectionScheduler, $a as \u0275ComponentFactory, XA as \u0275Console, Ei as \u0275DEFAULT_LOCALE_ID, UE as \u0275DEFER_BLOCK_CONFIG, QA as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, St as \u0275DEHYDRATED_BLOCK_REGISTRY, Sf as \u0275DeferBlockBehavior, Y as \u0275DeferBlockState, aP as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, is as \u0275EffectScheduler, Kx as \u0275Framework, ny as \u0275HydrationStatus, vw as \u0275IMAGE_CONFIG, Fm as \u0275IMAGE_CONFIG_DEFAULTS, ol as \u0275INJECTOR_SCOPE, HF as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, It as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, Iw as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, Sn as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, wd as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, ni as \u0275JSACTION_BLOCK_ELEMENT_MAP, Ad as \u0275JSACTION_EVENT_CONTRACT, Ps as \u0275LContext, Io as \u0275LocaleDataIndex, nn as \u0275NG_COMP_DEF, rr as \u0275NG_DIR_DEF, on as \u0275NG_ELEMENT_ID, Qo as \u0275NG_INJ_DEF, ji as \u0275NG_MOD_DEF, ir as \u0275NG_PIPE_DEF, Ln as \u0275NG_PROV_DEF, Ts as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, H as \u0275NO_CHANGE, vo as \u0275NgModuleFactory, Jo as \u0275NoopNgZone, VP as \u0275PERFORMANCE_MARK_PREFIX, rP as \u0275PROVIDED_NG_ZONE, sN as \u0275PROVIDED_ZONELESS, Et as \u0275PendingTasksInternal, k as \u0275ProfilerEvent, tn as \u0275R3Injector, Ss as \u0275ReflectionCapabilities, Qt as \u0275Render3ComponentFactory, Qs as \u0275Render3ComponentRef, yo as \u0275Render3NgModuleRef, dc as \u0275ResourceImpl, C as \u0275RuntimeError, ae as \u0275SIGNAL, Jm as \u0275SSR_CONTENT_INTEGRITY_MARKER, zE as \u0275TESTABILITY, QE as \u0275TESTABILITY_GETTER, BE as \u0275TimerScheduler, Ta as \u0275TracingAction, Po as \u0275TracingService, zt as \u0275ViewRef, Li as \u0275XSS_SECURITY_URL, Wn as \u0275ZONELESS_ENABLED, Ty as \u0275_sanitizeHtml, Ia as \u0275_sanitizeUrl, En as \u0275allLeavingAnimations, xo as \u0275allowSanitizationBypassAndThrow, f1 as \u0275annotateForHydration, M1 as \u0275assertType, Zw as \u0275bypassSanitizationTrustHtml, Xw as \u0275bypassSanitizationTrustResourceUrl, Kw as \u0275bypassSanitizationTrustScript, Yw as \u0275bypassSanitizationTrustStyle, Jw as \u0275bypassSanitizationTrustUrl, fA as \u0275clearResolutionOfComponentResourcesQueue, QC as \u0275compileComponent, Tp as \u0275compileDirective, WC as \u0275compileNgModule, zC as \u0275compileNgModuleDefs, nP as \u0275compileNgModuleFactory, oT as \u0275compilePipe, Xt as \u0275convertToBitFlags, $c as \u0275createInjector, pP as \u0275createOrReusePlatformInjector, a1 as \u0275defaultIterableDiffers, c1 as \u0275defaultKeyValueDiffers, ho as \u0275depsTracker, Jv as \u0275devModeEqual, C1 as \u0275disableProfiling, D1 as \u0275enableProfiling, Rp as \u0275encapsulateResourceError, Xf as \u0275findLocaleData, qC as \u0275flushModuleScopingQueueAsMuchAsPossible, Xo as \u0275formatRuntimeError, xk as \u0275generateStandaloneInDeclarationsError, JA as \u0275getAsyncClassMetadataFn, T1 as \u0275getClosestComponentName, W as \u0275getComponentDef, To as \u0275getDebugNode, ws as \u0275getDeferBlocks, sw as \u0275getDirectives, la as \u0275getDocument, cw as \u0275getHostElement, or as \u0275getInjectableDef, Ne as \u0275getLContext, fO as \u0275getLocaleCurrencyCode, YI as \u0275getLocalePluralCase, ux as \u0275getOutputDestroyRef, my as \u0275getSanitizationBypassType, tR as \u0275getTransferState, Gw as \u0275getUnknownElementStrictMode, zw as \u0275getUnknownPropertyStrictMode, _e as \u0275global, nE as \u0275inferTagNameFromDefinition, gP as \u0275injectChangeDetectorRef, d1 as \u0275internalCreateApplication, iP as \u0275internalProvideZoneChangeDetection, JE as \u0275isBoundToModule, dA as \u0275isComponentDefPendingResolution, Qc as \u0275isEnvironmentProviders, NM as \u0275isInjectable, pn as \u0275isNgModule, kf as \u0275isPromise, KE as \u0275isSubscribable, wS as \u0275isViewDirty, _S as \u0275markForRefresh, lt as \u0275noSideEffects, Dp as \u0275patchComponentDefWithScope, J as \u0275performanceMarkFeature, uc as \u0275provideZonelessChangeDetectionInternal, nR as \u0275publishExternalGlobalUtil, Aw as \u0275readHydrationInfo, dO as \u0275registerLocaleData, Ct as \u0275renderDeferBlockState, Fk as \u0275resetCompiledComponents, Ow as \u0275resetIncrementalHydrationEnabledWarnedForTests, Ok as \u0275resetJitOptions, mE as \u0275resolveComponentResources, pA as \u0275restoreComponentResolutionQueue, mA as \u0275setAllowDuplicateNgModuleIdsForTest, gM as \u0275setAlternateWeakRefImpl, HC as \u0275setClassDebugInfo, Af as \u0275setClassMetadata, GE as \u0275setClassMetadataAsync, tt as \u0275setCurrentInjector, pw as \u0275setDocument, SM as \u0275setInjectorProfilerContext, eD as \u0275setLocaleId, qw as \u0275setUnknownElementStrictMode, Ww as \u0275setUnknownPropertyStrictMode, E1 as \u0275startMeasuring, I1 as \u0275stopMeasuring, pr as \u0275store, qe as \u0275stringify, Cp as \u0275transitiveScopesFor, Ya as \u0275triggerResourceLoading, TM as \u0275truncateMiddle, pO as \u0275unregisterLocaleData, bt as \u0275unwrapSafeValue, oN as \u0275unwrapWritableSignal, h1 as \u0275withDomHydration, IP as \u0275withEventReplay, g1 as \u0275withI18nSupport, m1 as \u0275withIncrementalHydration, hC as \u0275\u0275ExternalStylesFeature, $o as \u0275\u0275FactoryTarget, bE as \u0275\u0275HostDirectivesFeature, Nf as \u0275\u0275InheritDefinitionFeature, sm as \u0275\u0275NgOnChangesFeature, pC as \u0275\u0275ProvidersFeature, Hy as \u0275\u0275advance, wr as \u0275\u0275animateEnter, _r as \u0275\u0275animateEnterListener, Sr as \u0275\u0275animateLeave, Js as \u0275\u0275animateLeaveListener, Vf as \u0275\u0275ariaProperty, tC as \u0275\u0275attachSourceLocations, Hf as \u0275\u0275attribute, RD as \u0275\u0275classMap, cp as \u0275\u0275classProp, OI as \u0275\u0275componentInstance, UI as \u0275\u0275conditional, nc as \u0275\u0275conditionalBranchCreate, BI as \u0275\u0275conditionalCreate, vD as \u0275\u0275contentQuery, CD as \u0275\u0275contentQuerySignal, PI as \u0275\u0275control, xI as \u0275\u0275controlCreate, Ip as \u0275\u0275declareLet, rI as \u0275\u0275defer, qE as \u0275\u0275deferEnableTimerScheduling, cI as \u0275\u0275deferHydrateNever, II as \u0275\u0275deferHydrateOnHover, dI as \u0275\u0275deferHydrateOnIdle, hI as \u0275\u0275deferHydrateOnImmediate, TI as \u0275\u0275deferHydrateOnInteraction, yI as \u0275\u0275deferHydrateOnTimer, wI as \u0275\u0275deferHydrateOnViewport, aI as \u0275\u0275deferHydrateWhen, vI as \u0275\u0275deferOnHover, lI as \u0275\u0275deferOnIdle, fI as \u0275\u0275deferOnImmediate, DI as \u0275\u0275deferOnInteraction, gI as \u0275\u0275deferOnTimer, MI as \u0275\u0275deferOnViewport, EI as \u0275\u0275deferPrefetchOnHover, uI as \u0275\u0275deferPrefetchOnIdle, pI as \u0275\u0275deferPrefetchOnImmediate, CI as \u0275\u0275deferPrefetchOnInteraction, mI as \u0275\u0275deferPrefetchOnTimer, NI as \u0275\u0275deferPrefetchOnViewport, sI as \u0275\u0275deferPrefetchWhen, iI as \u0275\u0275deferWhen, TE as \u0275\u0275defineComponent, NE as \u0275\u0275defineDirective, B as \u0275\u0275defineInjectable, nr as \u0275\u0275defineInjector, Mf as \u0275\u0275defineNgModule, wE as \u0275\u0275definePipe, Ho as \u0275\u0275directiveInject, El as \u0275\u0275disableBindings, Gf as \u0275\u0275domElement, Zf as \u0275\u0275domElementContainer, Qf as \u0275\u0275domElementContainerEnd, cc as \u0275\u0275domElementContainerStart, sc as \u0275\u0275domElementEnd, ic as \u0275\u0275domElementStart, ip as \u0275\u0275domListener, Kf as \u0275\u0275domProperty, _f as \u0275\u0275domTemplate, qf as \u0275\u0275element, zf as \u0275\u0275elementContainer, vi as \u0275\u0275elementContainerEnd, ac as \u0275\u0275elementContainerStart, rc as \u0275\u0275elementEnd, oc as \u0275\u0275elementStart, vl as \u0275\u0275enableBindings, VC as \u0275\u0275getComponentDepsFactory, ZI as \u0275\u0275getCurrentView, Dm as \u0275\u0275getInheritedFactory, BC as \u0275\u0275getReplaceMetadataURL, dD as \u0275\u0275i18n, pD as \u0275\u0275i18nApply, fD as \u0275\u0275i18nAttributes, tp as \u0275\u0275i18nEnd, np as \u0275\u0275i18nExp, hD as \u0275\u0275i18nPostprocess, ep as \u0275\u0275i18nStart, he as \u0275\u0275inject, ia as \u0275\u0275injectAttribute, nC as \u0275\u0275interpolate, oC as \u0275\u0275interpolate1, rC as \u0275\u0275interpolate2, iC as \u0275\u0275interpolate3, sC as \u0275\u0275interpolate4, aC as \u0275\u0275interpolate5, cC as \u0275\u0275interpolate6, lC as \u0275\u0275interpolate7, uC as \u0275\u0275interpolate8, dC as \u0275\u0275interpolateV, zv as \u0275\u0275invalidFactory, Hi as \u0275\u0275invalidFactoryDep, op as \u0275\u0275listener, DD as \u0275\u0275loadQuery, xl as \u0275\u0275namespaceHTML, kl as \u0275\u0275namespaceMathML, Ol as \u0275\u0275namespaceSVG, gD as \u0275\u0275nextContext, w1 as \u0275\u0275ngDeclareClassMetadata, _1 as \u0275\u0275ngDeclareClassMetadataAsync, S1 as \u0275\u0275ngDeclareComponent, N1 as \u0275\u0275ngDeclareDirective, b1 as \u0275\u0275ngDeclareFactory, A1 as \u0275\u0275ngDeclareInjectable, R1 as \u0275\u0275ngDeclareInjector, O1 as \u0275\u0275ngDeclareNgModule, k1 as \u0275\u0275ngDeclarePipe, OC as \u0275\u0275pipe, kC as \u0275\u0275pipeBind1, xC as \u0275\u0275pipeBind2, PC as \u0275\u0275pipeBind3, LC as \u0275\u0275pipeBind4, FC as \u0275\u0275pipeBindV, yD as \u0275\u0275projection, mD as \u0275\u0275projectionDef, $f as \u0275\u0275property, yC as \u0275\u0275pureFunction0, vC as \u0275\u0275pureFunction1, EC as \u0275\u0275pureFunction2, IC as \u0275\u0275pureFunction3, DC as \u0275\u0275pureFunction4, CC as \u0275\u0275pureFunction5, TC as \u0275\u0275pureFunction6, MC as \u0275\u0275pureFunction7, NC as \u0275\u0275pureFunction8, wC as \u0275\u0275pureFunctionV, MD as \u0275\u0275queryAdvance, ID as \u0275\u0275queryRefresh, eC as \u0275\u0275readContextLet, ND as \u0275\u0275reference, Df as \u0275\u0275registerNgModuleType, WI as \u0275\u0275repeater, GI as \u0275\u0275repeaterCreate, qI as \u0275\u0275repeaterTrackByIdentity, $I as \u0275\u0275repeaterTrackByIndex, UC as \u0275\u0275replaceMetadata, Cl as \u0275\u0275resetView, Ud as \u0275\u0275resolveBody, Ly as \u0275\u0275resolveDocument, Py as \u0275\u0275resolveWindow, Dl as \u0275\u0275restoreView, Sy as \u0275\u0275sanitizeHtml, Bd as \u0275\u0275sanitizeResourceUrl, Ay as \u0275\u0275sanitizeScript, by as \u0275\u0275sanitizeStyle, Hd as \u0275\u0275sanitizeUrl, ky as \u0275\u0275sanitizeUrlOrResourceUrl, gC as \u0275\u0275setComponentScope, mC as \u0275\u0275setNgModuleScope, XD as \u0275\u0275storeLet, AD as \u0275\u0275styleMap, ap as \u0275\u0275styleProp, rp as \u0275\u0275syntheticHostListener, Jf as \u0275\u0275syntheticHostProperty, wf as \u0275\u0275template, jC as \u0275\u0275templateRefExtractor, VD as \u0275\u0275text, lp as \u0275\u0275textInterpolate, lc as \u0275\u0275textInterpolate1, up as \u0275\u0275textInterpolate2, dp as \u0275\u0275textInterpolate3, fp as \u0275\u0275textInterpolate4, pp as \u0275\u0275textInterpolate5, hp as \u0275\u0275textInterpolate6, gp as \u0275\u0275textInterpolate7, mp as \u0275\u0275textInterpolate8, yp as \u0275\u0275textInterpolateV, Ry as \u0275\u0275trustConstantHtml, Oy as \u0275\u0275trustConstantResourceUrl, KD as \u0275\u0275twoWayBindingSet, Ep as \u0275\u0275twoWayListener, vp as \u0275\u0275twoWayProperty, xy as \u0275\u0275validateAttribute, ED as \u0275\u0275viewQuery, TD as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/_untracked-chunk.mjs:
@angular/core/fesm2022/_attribute-chunk.mjs:
@angular/core/fesm2022/_debug_node-chunk.mjs:
@angular/core/fesm2022/_resource-chunk.mjs:
@angular/core/fesm2022/primitives-event-dispatch.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v21.0.2
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
