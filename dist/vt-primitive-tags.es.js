import { defineComponent as B, useAttrs as S, computed as n, createElementBlock as k, createBlock as x, openBlock as p, mergeProps as f, renderSlot as d, createTextVNode as v, toDisplayString as h, unref as _, normalizeProps as w, withCtx as F } from "vue";
import { Link as P } from "@inertiajs/vue3";
const C = () => typeof window < "u" && typeof document < "u", E = ["href", "rel", "target"], U = /* @__PURE__ */ B({
  __name: "Va",
  props: {
    external: { type: Boolean, default: !1 },
    component: {},
    data: {},
    method: {},
    replace: { type: Boolean },
    preserveScroll: { type: [Boolean, String, Function] },
    preserveState: { type: [Boolean, String, Function] },
    preserveUrl: { type: Boolean },
    only: {},
    except: {},
    headers: {},
    queryStringArrayFormat: {},
    async: { type: Boolean },
    viewTransition: { type: [Boolean, Function] },
    onCancelToken: {},
    onBefore: {},
    onBeforeUpdate: {},
    onStart: {},
    onProgress: {},
    onFinish: {},
    onCancel: {},
    onSuccess: {},
    onError: {},
    onHttpException: {},
    onNetworkError: {},
    onFlash: {},
    onPrefetched: {},
    onPrefetching: {},
    href: {},
    instant: { type: Boolean },
    pageProps: {},
    prefetch: { type: [Boolean, String, Array] },
    cacheFor: {},
    cacheTags: {},
    rel: {},
    target: {}
  },
  setup(g) {
    const t = g, a = S(), l = n(() => t.target === "_blank"), r = n(() => {
      const e = t.href;
      if (e)
        return typeof e == "string" ? e : e.url;
    }), s = (e) => /^(mailto|tel|sms|data|javascript):/i.test(e), u = n(() => {
      if (!C() || t.external || !r.value || l.value || s(r.value))
        return !0;
      try {
        return new URL(r.value, location.origin).origin !== location.origin;
      } catch {
        return !1;
      }
    }), y = n(() => l.value && !t.rel ? "noopener noreferrer" : t.rel), c = n(() => r.value ? s(r.value) ? r.value.replace(/^[^:]+:(.+)$/, "$1") : r.value : ""), i = n(() => {
      if (u.value) {
        const { href: e, rel: o, target: T, ...m } = a;
        return m;
      } else {
        const { external: e, ...o } = t;
        return {
          ...a,
          ...o
        };
      }
    });
    return (e, o) => u.value ? (p(), k("a", f({
      key: 0,
      href: r.value,
      rel: y.value,
      target: t.target
    }, i.value), [
      d(e.$slots, "default", {}, () => [
        v(h(c.value), 1)
      ])
    ], 16, E)) : (p(), x(_(P), w(f({ key: 1 }, i.value)), {
      default: F(() => [
        d(e.$slots, "default", {}, () => [
          v(h(c.value), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
});
export {
  U as Va,
  C as isBrowser
};
