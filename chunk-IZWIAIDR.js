import { a as w, b as j } from "@nf-internal/chunk-4CLCTAJ7";
import { DOCUMENT as P, \u0275getDOM as oe } from "@angular/common";
import * as a from "@angular/core";
import { InjectionToken as G, \u0275RuntimeError as I, APP_ID as Z, CSP_NONCE as Y, PLATFORM_ID as se, ViewEncapsulation as v, \u0275TracingService as ie, RendererStyleFlags2 as R, \u0275allLeavingAnimations as ae } from "@angular/core";
var y = class {
    _doc;
    constructor(n) { this._doc = n; }
    manager;
}, A = (() => { class o extends y {
    constructor(e) { super(e); }
    supports(e) { return !0; }
    addEventListener(e, t, r, s) { return e.addEventListener(t, r, s), () => this.removeEventListener(e, t, r, s); }
    removeEventListener(e, t, r, s) { return e.removeEventListener(t, r, s); }
    static \u0275fac = function (t) { return new (t || o)(a.\u0275\u0275inject(P)); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), O = new G(""), L = (() => { class o {
    _zone;
    _plugins;
    _eventNameToPlugin = new Map;
    constructor(e, t) { this._zone = t, e.forEach(i => { i.manager = this; }); let r = e.filter(i => !(i instanceof A)); this._plugins = r.slice().reverse(); let s = e.find(i => i instanceof A); s && this._plugins.push(s); }
    addEventListener(e, t, r, s) { return this._findPluginFor(t).addEventListener(e, t, r, s); }
    getZone() { return this._zone; }
    _findPluginFor(e) { let t = this._eventNameToPlugin.get(e); if (t)
        return t; if (t = this._plugins.find(s => s.supports(e)), !t)
        throw new I(5101, !1); return this._eventNameToPlugin.set(e, t), t; }
    static \u0275fac = function (t) { return new (t || o)(a.\u0275\u0275inject(O), a.\u0275\u0275inject(a.NgZone)); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), D = "ng-app-id";
function F(o) { for (let n of o)
    n.remove(); }
function V(o, n) { let e = n.createElement("style"); return e.textContent = o, e; }
function le(o, n, e, t) { let r = o.head?.querySelectorAll(`style[${D}="${n}"],link[${D}="${n}"]`); if (r)
    for (let s of r)
        s.removeAttribute(D), s instanceof HTMLLinkElement ? t.set(s.href.slice(s.href.lastIndexOf("/") + 1), { usage: 0, elements: [s] }) : s.textContent && e.set(s.textContent, { usage: 0, elements: [s] }); }
function b(o, n) { let e = n.createElement("link"); return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", o), e; }
var N = (() => { class o {
    doc;
    appId;
    nonce;
    inline = new Map;
    external = new Map;
    hosts = new Set;
    constructor(e, t, r, s = {}) { this.doc = e, this.appId = t, this.nonce = r, le(e, t, this.inline, this.external), this.hosts.add(e.head); }
    addStyles(e, t) { for (let r of e)
        this.addUsage(r, this.inline, V); t?.forEach(r => this.addUsage(r, this.external, b)); }
    removeStyles(e, t) { for (let r of e)
        this.removeUsage(r, this.inline); t?.forEach(r => this.removeUsage(r, this.external)); }
    addUsage(e, t, r) { let s = t.get(e); s ? s.usage++ : t.set(e, { usage: 1, elements: [...this.hosts].map(i => this.addElement(i, r(e, this.doc))) }); }
    removeUsage(e, t) { let r = t.get(e); r && (r.usage--, r.usage <= 0 && (F(r.elements), t.delete(e))); }
    ngOnDestroy() { for (let [, { elements: e }] of [...this.inline, ...this.external])
        F(e); this.hosts.clear(); }
    addHost(e) { this.hosts.add(e); for (let [t, { elements: r }] of this.inline)
        r.push(this.addElement(e, V(t, this.doc))); for (let [t, { elements: r }] of this.external)
        r.push(this.addElement(e, b(t, this.doc))); }
    removeHost(e) { this.hosts.delete(e); }
    addElement(e, t) { return this.nonce && t.setAttribute("nonce", this.nonce), typeof ngServerMode < "u" && ngServerMode && t.setAttribute(D, this.appId), e.appendChild(t); }
    static \u0275fac = function (t) { return new (t || o)(a.\u0275\u0275inject(P), a.\u0275\u0275inject(Z), a.\u0275\u0275inject(Y, 8), a.\u0275\u0275inject(se)); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), _ = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/", math: "http://www.w3.org/1998/Math/MathML" }, k = /%COMP%/g;
var K = "%COMP%", ce = `_nghost-${K}`, de = `_ngcontent-${K}`, ue = !0, fe = new G("", { factory: () => ue });
function he(o) { return de.replace(k, o); }
function pe(o) { return ce.replace(k, o); }
function W(o, n) { return n.map(e => e.replace(k, o)); }
var x = (() => { class o {
    eventManager;
    sharedStylesHost;
    appId;
    removeStylesOnCompDestroy;
    doc;
    ngZone;
    nonce;
    tracingService;
    rendererByCompId = new Map;
    defaultRenderer;
    platformIsServer;
    constructor(e, t, r, s, i, l, c = null, d = null) { this.eventManager = e, this.sharedStylesHost = t, this.appId = r, this.removeStylesOnCompDestroy = s, this.doc = i, this.ngZone = l, this.nonce = c, this.tracingService = d, this.platformIsServer = typeof ngServerMode < "u" && ngServerMode, this.defaultRenderer = new E(e, i, l, this.platformIsServer, this.tracingService); }
    createRenderer(e, t) { if (!e || !t)
        return this.defaultRenderer; typeof ngServerMode < "u" && ngServerMode && (t.encapsulation === v.ShadowDom || t.encapsulation === v.ExperimentalIsolatedShadowDom) && (t = j(w({}, t), { encapsulation: v.Emulated })); let r = this.getOrCreateRenderer(e, t); return r instanceof C ? r.applyToHost(e) : r instanceof S && r.applyStyles(), r; }
    getOrCreateRenderer(e, t) { let r = this.rendererByCompId, s = r.get(t.id); if (!s) {
        let i = this.doc, l = this.ngZone, c = this.eventManager, d = this.sharedStylesHost, u = this.removeStylesOnCompDestroy, p = this.platformIsServer, f = this.tracingService;
        switch (t.encapsulation) {
            case v.Emulated:
                s = new C(c, d, t, this.appId, u, i, l, p, f);
                break;
            case v.ShadowDom: return new T(c, e, t, i, l, this.nonce, p, f, d);
            case v.ExperimentalIsolatedShadowDom: return new T(c, e, t, i, l, this.nonce, p, f);
            default:
                s = new S(c, d, t, u, i, l, p, f);
                break;
        }
        r.set(t.id, s);
    } return s; }
    ngOnDestroy() { this.rendererByCompId.clear(); }
    componentReplaced(e) { this.rendererByCompId.delete(e); }
    static \u0275fac = function (t) { return new (t || o)(a.\u0275\u0275inject(L), a.\u0275\u0275inject(N), a.\u0275\u0275inject(Z), a.\u0275\u0275inject(fe), a.\u0275\u0275inject(P), a.\u0275\u0275inject(a.NgZone), a.\u0275\u0275inject(Y), a.\u0275\u0275inject(ie, 8)); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), E = class {
    eventManager;
    doc;
    ngZone;
    platformIsServer;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(n, e, t, r, s) { this.eventManager = n, this.doc = e, this.ngZone = t, this.platformIsServer = r, this.tracingService = s; }
    destroy() { }
    destroyNode = null;
    createElement(n, e) { return e ? this.doc.createElementNS(_[e] || e, n) : this.doc.createElement(n); }
    createComment(n) { return this.doc.createComment(n); }
    createText(n) { return this.doc.createTextNode(n); }
    appendChild(n, e) { ($(n) ? n.content : n).appendChild(e); }
    insertBefore(n, e, t) { n && ($(n) ? n.content : n).insertBefore(e, t); }
    removeChild(n, e) { e.remove(); }
    selectRootElement(n, e) { let t = typeof n == "string" ? this.doc.querySelector(n) : n; if (!t)
        throw new I(-5104, !1); return e || (t.textContent = ""), t; }
    parentNode(n) { return n.parentNode; }
    nextSibling(n) { return n.nextSibling; }
    setAttribute(n, e, t, r) { if (r) {
        e = r + ":" + e;
        let s = _[r];
        s ? n.setAttributeNS(s, e, t) : n.setAttribute(e, t);
    }
    else
        n.setAttribute(e, t); }
    removeAttribute(n, e, t) { if (t) {
        let r = _[t];
        r ? n.removeAttributeNS(r, e) : n.removeAttribute(`${t}:${e}`);
    }
    else
        n.removeAttribute(e); }
    addClass(n, e) { n.classList.add(e); }
    removeClass(n, e) { n.classList.remove(e); }
    setStyle(n, e, t, r) { r & (R.DashCase | R.Important) ? n.style.setProperty(e, t, r & R.Important ? "important" : "") : n.style[e] = t; }
    removeStyle(n, e, t) { t & R.DashCase ? n.style.removeProperty(e) : n.style[e] = ""; }
    setProperty(n, e, t) { n != null && (n[e] = t); }
    setValue(n, e) { n.nodeValue = e; }
    listen(n, e, t, r) { if (typeof n == "string" && (n = oe().getGlobalEventTarget(this.doc, n), !n))
        throw new I(5102, !1); let s = this.decoratePreventDefault(t); return this.tracingService?.wrapEventListener && (s = this.tracingService.wrapEventListener(n, e, s)), this.eventManager.addEventListener(n, e, s, r); }
    decoratePreventDefault(n) { return e => { if (e === "__ngUnwrap__")
        return n; (typeof ngServerMode < "u" && ngServerMode ? this.ngZone.runGuarded(() => n(e)) : n(e)) === !1 && e.preventDefault(); }; }
};
function $(o) { return o.tagName === "TEMPLATE" && o.content !== void 0; }
var T = class extends E {
    hostEl;
    sharedStylesHost;
    shadowRoot;
    constructor(n, e, t, r, s, i, l, c, d) { super(n, r, s, l, c), this.hostEl = e, this.sharedStylesHost = d, this.shadowRoot = e.attachShadow({ mode: "open" }), this.sharedStylesHost && this.sharedStylesHost.addHost(this.shadowRoot); let u = t.styles; u = W(t.id, u); for (let f of u) {
        let g = document.createElement("style");
        i && g.setAttribute("nonce", i), g.textContent = f, this.shadowRoot.appendChild(g);
    } let p = t.getExternalStyles?.(); if (p)
        for (let f of p) {
            let g = b(f, r);
            i && g.setAttribute("nonce", i), this.shadowRoot.appendChild(g);
        } }
    nodeOrShadowRoot(n) { return n === this.hostEl ? this.shadowRoot : n; }
    appendChild(n, e) { return super.appendChild(this.nodeOrShadowRoot(n), e); }
    insertBefore(n, e, t) { return super.insertBefore(this.nodeOrShadowRoot(n), e, t); }
    removeChild(n, e) { return super.removeChild(null, e); }
    parentNode(n) { return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n))); }
    destroy() { this.sharedStylesHost && this.sharedStylesHost.removeHost(this.shadowRoot); }
}, S = class extends E {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(n, e, t, r, s, i, l, c, d) { super(n, s, i, l, c), this.sharedStylesHost = e, this.removeStylesOnCompDestroy = r; let u = t.styles; this.styles = d ? W(d, u) : u, this.styleUrls = t.getExternalStyles?.(d); }
    applyStyles() { this.sharedStylesHost.addStyles(this.styles, this.styleUrls); }
    destroy() { this.removeStylesOnCompDestroy && ae.size === 0 && this.sharedStylesHost.removeStyles(this.styles, this.styleUrls); }
}, C = class extends S {
    contentAttr;
    hostAttr;
    constructor(n, e, t, r, s, i, l, c, d) { let u = r + "-" + t.id; super(n, e, t, s, i, l, c, d, u), this.contentAttr = he(u), this.hostAttr = pe(u); }
    applyToHost(n) { this.applyStyles(), this.setAttribute(n, this.hostAttr, ""); }
    createElement(n, e) { let t = super.createElement(n, e); return super.setAttribute(t, this.contentAttr, ""), t; }
};
import { \u0275DomAdapter as me, \u0275setRootDomAdapter as ge, \u0275parseCookieValue as ve, \u0275getDOM as X, DOCUMENT as q, \u0275PLATFORM_BROWSER_ID as ye, XhrFactory as Ee, CommonModule as Se } from "@angular/common";
import * as h from "@angular/core";
import { \u0275global as m, \u0275RuntimeError as Me, \u0275internalCreateApplication as J, PLATFORM_ID as we, PLATFORM_INITIALIZER as Re, createPlatformFactory as De, platformCore as Ae, InjectionToken as Qe, \u0275TESTABILITY_GETTER as Te, \u0275TESTABILITY as Ce, Testability as H, \u0275INJECTOR_SCOPE as Oe, ErrorHandler as Q, RendererFactory2 as _e, ApplicationModule as Ie, \u0275setDocument as be } from "@angular/core";
var U = class o extends me {
    supportsDOMEvents = !0;
    static makeCurrent() { ge(new o); }
    onAndCancel(n, e, t, r) { return n.addEventListener(e, t, r), () => { n.removeEventListener(e, t, r); }; }
    dispatchEvent(n, e) { n.dispatchEvent(e); }
    remove(n) { n.remove(); }
    createElement(n, e) { return e = e || this.getDefaultDocument(), e.createElement(n); }
    createHtmlDocument() { return document.implementation.createHTMLDocument("fakeTitle"); }
    getDefaultDocument() { return document; }
    isElementNode(n) { return n.nodeType === Node.ELEMENT_NODE; }
    isShadowRoot(n) { return n instanceof DocumentFragment; }
    getGlobalEventTarget(n, e) { return e === "window" ? window : e === "document" ? n : e === "body" ? n.body : null; }
    getBaseHref(n) { let e = Pe(); return e == null ? null : Le(e); }
    resetBaseElement() { M = null; }
    getUserAgent() { return window.navigator.userAgent; }
    getCookie(n) { return ve(document.cookie, n); }
}, M = null;
function Pe() { return M = M || document.head.querySelector("base"), M ? M.getAttribute("href") : null; }
function Le(o) { return new URL(o, document.baseURI).pathname; }
var B = class {
    addToWindow(n) { m.getAngularTestability = (t, r = !0) => { let s = n.findTestabilityInTree(t, r); if (s == null)
        throw new Me(5103, !1); return s; }, m.getAllAngularTestabilities = () => n.getAllTestabilities(), m.getAllAngularRootElements = () => n.getAllRootElements(); let e = t => { let r = m.getAllAngularTestabilities(), s = r.length, i = function () { s--, s == 0 && t(); }; r.forEach(l => { l.whenStable(i); }); }; m.frameworkStabilizers || (m.frameworkStabilizers = []), m.frameworkStabilizers.push(e); }
    findTestabilityInTree(n, e, t) { if (e == null)
        return null; let r = n.getTestability(e); return r ?? (t ? X().isShadowRoot(e) ? this.findTestabilityInTree(n, e.host, !0) : this.findTestabilityInTree(n, e.parentElement, !0) : null); }
}, Ne = (() => { class o {
    build() { return new XMLHttpRequest; }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })(), z = ["alt", "control", "meta", "shift"], ke = { "\b": "Backspace", "	": "Tab", "\x7F": "Delete", "\x1B": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" }, xe = { alt: o => o.altKey, control: o => o.ctrlKey, meta: o => o.metaKey, shift: o => o.shiftKey }, He = (() => { class o extends y {
    constructor(e) { super(e); }
    supports(e) { return o.parseEventName(e) != null; }
    addEventListener(e, t, r, s) { let i = o.parseEventName(t), l = o.eventCallback(i.fullKey, r, this.manager.getZone()); return this.manager.getZone().runOutsideAngular(() => X().onAndCancel(e, i.domEventName, l, s)); }
    static parseEventName(e) { let t = e.toLowerCase().split("."), r = t.shift(); if (t.length === 0 || !(r === "keydown" || r === "keyup"))
        return null; let s = o._normalizeKey(t.pop()), i = "", l = t.indexOf("code"); if (l > -1 && (t.splice(l, 1), i = "code."), z.forEach(d => { let u = t.indexOf(d); u > -1 && (t.splice(u, 1), i += d + "."); }), i += s, t.length != 0 || s.length === 0)
        return null; let c = {}; return c.domEventName = r, c.fullKey = i, c; }
    static matchEventFullKeyCode(e, t) { let r = ke[e.key] || e.key, s = ""; return t.indexOf("code.") > -1 && (r = e.code, s = "code."), r == null || !r ? !1 : (r = r.toLowerCase(), r === " " ? r = "space" : r === "." && (r = "dot"), z.forEach(i => { if (i !== r) {
        let l = xe[i];
        l(e) && (s += i + ".");
    } }), s += r, s === t); }
    static eventCallback(e, t, r) { return s => { o.matchEventFullKeyCode(s, e) && r.runGuarded(() => t(s)); }; }
    static _normalizeKey(e) { return e === "esc" ? "escape" : e; }
    static \u0275fac = function (t) { return new (t || o)(h.\u0275\u0275inject(q)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac });
} return o; })();
function rt(o, n, e) { let t = w({ rootComponent: o, platformRef: e?.platformRef }, ee(n)); return J(t); }
function ot(o) { return J(ee(o)); }
function ee(o) { return { appProviders: [...re, ...o?.providers ?? []], platformProviders: te }; }
function st() { return [...ne]; }
function Ue() { U.makeCurrent(); }
function Be() { return new Q; }
function je() { return be(document), document; }
var te = [{ provide: we, useValue: ye }, { provide: Re, useValue: Ue, multi: !0 }, { provide: q, useFactory: je }], it = De(Ae, "browser", te);
var ne = [{ provide: Te, useClass: B }, { provide: Ce, useClass: H }, { provide: H, useClass: H }], re = [{ provide: Oe, useValue: "root" }, { provide: Q, useFactory: Be }, { provide: O, useClass: A, multi: !0 }, { provide: O, useClass: He, multi: !0 }, x, N, L, { provide: _e, useExisting: x }, { provide: Ee, useClass: Ne }, []], at = (() => { class o {
    constructor() { }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = h.\u0275\u0275defineInjector({ providers: [...re, ...ne], imports: [Se, Ie] });
} return o; })();
export { y as a, A as b, O as c, L as d, N as e, fe as f, x as g, U as h, B as i, He as j, rt as k, ot as l, st as m, it as n, at as o };
/*! Bundled license information:

@angular/platform-browser/fesm2022/_dom_renderer-chunk.mjs:
@angular/platform-browser/fesm2022/_browser-chunk.mjs:
  (**
   * @license Angular v21.0.2
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
