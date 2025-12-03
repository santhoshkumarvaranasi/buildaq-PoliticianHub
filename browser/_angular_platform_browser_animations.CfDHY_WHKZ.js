import { g as m, o as t } from "@nf-internal/chunk-OLRFX3G7";
import "@nf-internal/chunk-4CLCTAJ7";
import * as n from "@angular/core";
import { ANIMATION_MODULE_TYPE as u, RendererFactory2 as v, inject as a, NgZone as N, \u0275performanceMarkFeature as y } from "@angular/core";
import { ANIMATION_MODULE_TYPE as x } from "@angular/core";
import * as r from "@angular/animations/browser";
import { \u0275AnimationEngine as d, AnimationDriver as f, NoopAnimationDriver as p, \u0275WebAnimationsDriver as M, \u0275AnimationStyleNormalizer as g, \u0275WebAnimationsStyleNormalizer as D, \u0275AnimationRendererFactory as I } from "@angular/animations/browser";
import { DOCUMENT as S } from "@angular/common";
var O = (() => { class e extends d {
    constructor(o, i, l) { super(o, i, l); }
    ngOnDestroy() { this.flush(); }
    static \u0275fac = function (i) { return new (i || e)(n.\u0275\u0275inject(S), n.\u0275\u0275inject(r.AnimationDriver), n.\u0275\u0275inject(r.\u0275AnimationStyleNormalizer)); };
    static \u0275prov = n.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })();
function R() { return new D; }
function E() { return new I(a(m), a(d), a(N)); }
var A = [{ provide: g, useFactory: R }, { provide: d, useClass: O }, { provide: v, useFactory: E }], c = [{ provide: f, useClass: p }, { provide: u, useValue: "NoopAnimations" }, ...A], s = [{ provide: f, useFactory: () => typeof ngServerMode < "u" && ngServerMode ? new p : new M }, { provide: u, useFactory: () => typeof ngServerMode < "u" && ngServerMode ? "NoopAnimations" : "BrowserAnimations" }, ...A], W = (() => { class e {
    static withConfig(o) { return { ngModule: e, providers: o.disableAnimations ? c : s }; }
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275mod = n.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = n.\u0275\u0275defineInjector({ providers: s, imports: [t] });
} return e; })();
function B() { return y("NgEagerAnimations"), [...s]; }
var C = (() => { class e {
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275mod = n.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = n.\u0275\u0275defineInjector({ providers: c, imports: [t] });
} return e; })();
function V() { return [...c]; }
export { x as ANIMATION_MODULE_TYPE, W as BrowserAnimationsModule, C as NoopAnimationsModule, B as provideAnimations, V as provideNoopAnimations, O as \u0275InjectableAnimationEngine };
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v21.0.3
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
