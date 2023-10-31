import "../sb-preview/runtime.js";
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) c(t);
  new MutationObserver((t) => {
    for (const e of t)
      if (e.type === "childList")
        for (const r of e.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && c(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(t) {
    const e = {};
    return (
      t.integrity && (e.integrity = t.integrity),
      t.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (e.credentials = "include")
        : t.crossOrigin === "anonymous"
        ? (e.credentials = "omit")
        : (e.credentials = "same-origin"),
      e
    );
  }
  function c(t) {
    if (t.ep) return;
    t.ep = !0;
    const e = s(t);
    fetch(t.href, e);
  }
})();
const d = "modulepreload",
  E = function (_, i) {
    return new URL(_, i).href;
  },
  O = {},
  o = function (i, s, c) {
    if (!s || s.length === 0) return i();
    const t = document.getElementsByTagName("link");
    return Promise.all(
      s.map((e) => {
        if (((e = E(e, c)), e in O)) return;
        O[e] = !0;
        const r = e.endsWith(".css"),
          m = r ? '[rel="stylesheet"]' : "";
        if (!!c)
          for (let l = t.length - 1; l >= 0; l--) {
            const u = t[l];
            if (u.href === e && (!r || u.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${e}"]${m}`)) return;
        const n = document.createElement("link");
        if (
          ((n.rel = r ? "stylesheet" : d),
          r || ((n.as = "script"), (n.crossOrigin = "")),
          (n.href = e),
          document.head.appendChild(n),
          r)
        )
          return new Promise((l, u) => {
            n.addEventListener("load", l),
              n.addEventListener("error", () =>
                u(new Error(`Unable to preload CSS for ${e}`)),
              );
          });
      }),
    )
      .then(() => i())
      .catch((e) => {
        const r = new Event("vite:preloadError", { cancelable: !0 });
        if (((r.payload = e), window.dispatchEvent(r), !r.defaultPrevented))
          throw e;
      });
  },
  { createBrowserChannel: p } = __STORYBOOK_MODULE_CHANNELS__,
  { addons: f } = __STORYBOOK_MODULE_PREVIEW_API__,
  a = p({ page: "preview" });
f.setChannel(a);
window.__STORYBOOK_ADDONS_CHANNEL__ = a;
window.CONFIG_TYPE === "DEVELOPMENT" &&
  (window.__STORYBOOK_SERVER_CHANNEL__ = a);
const R = {
  "./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx": async () =>
    o(
      () => import("./NotFoundPage.stories-26d619a8.js"),
      [
        "./NotFoundPage.stories-26d619a8.js",
        "./jsx-runtime-6eef64cc.js",
        "./index-c013ead5.js",
        "./_commonjsHelpers-725317a4.js",
        "./NotFoundPage.stories-79e8c2bb.css",
      ],
      import.meta.url,
    ),
  "./src/components/ui/Button/Button.stories.tsx": async () =>
    o(
      () => import("./Button.stories-df810991.js"),
      [
        "./Button.stories-df810991.js",
        "./jsx-runtime-6eef64cc.js",
        "./index-c013ead5.js",
        "./_commonjsHelpers-725317a4.js",
        "./index-778010da.js",
        "./Button.stories-6295fa05.css",
      ],
      import.meta.url,
    ),
  "./src/components/ui/AccordionItem/AccordionItem.stories.tsx": async () =>
    o(
      () => import("./AccordionItem.stories-48f76ecd.js"),
      [
        "./AccordionItem.stories-48f76ecd.js",
        "./jsx-runtime-6eef64cc.js",
        "./index-c013ead5.js",
        "./_commonjsHelpers-725317a4.js",
        "./index-778010da.js",
      ],
      import.meta.url,
    ),
};
async function P(_) {
  return R[_]();
}
const {
    composeConfigs: w,
    PreviewWeb: T,
    ClientApi: L,
  } = __STORYBOOK_MODULE_PREVIEW_API__,
  I = async () => {
    const _ = await Promise.all([
      o(
        () => import("./config-658537b6.js"),
        [
          "./config-658537b6.js",
          "./index-c013ead5.js",
          "./_commonjsHelpers-725317a4.js",
          "./_getPrototype-e19758df.js",
          "./index-356e4a49.js",
        ],
        import.meta.url,
      ),
      o(
        () => import("./preview-87eac49b.js"),
        ["./preview-87eac49b.js", "./index-d37d4223.js"],
        import.meta.url,
      ),
      o(() => import("./preview-deb92b39.js"), [], import.meta.url),
      o(() => import("./preview-bed967c6.js"), [], import.meta.url),
      o(
        () => import("./preview-108c1c3c.js"),
        ["./preview-108c1c3c.js", "./index-356e4a49.js"],
        import.meta.url,
      ),
      o(() => import("./preview-2059b184.js"), [], import.meta.url),
      o(
        () => import("./preview-b8d6c68d.js"),
        ["./preview-b8d6c68d.js", "./index-356e4a49.js"],
        import.meta.url,
      ),
      o(() => import("./preview-b3c37142.js"), [], import.meta.url),
      o(
        () => import("./preview-5c6325c3.js"),
        ["./preview-5c6325c3.js", "./_commonjsHelpers-725317a4.js"],
        import.meta.url,
      ),
      o(
        () => import("./preview-9661e278.js"),
        ["./preview-9661e278.js", "./preview-242f6a8d.css"],
        import.meta.url,
      ),
    ]);
    return w(_);
  };
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new T();
window.__STORYBOOK_STORY_STORE__ =
  window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ =
  window.__STORYBOOK_CLIENT_API__ ||
  new L({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({
  importFn: P,
  getProjectAnnotations: I,
});
export { o as _ };
//# sourceMappingURL=iframe-c6c1c5c0.js.map
