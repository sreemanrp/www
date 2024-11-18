(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[185], {
    8268: (e, t, n) => {
        Promise.resolve().then(n.bind(n, 4083)),
        Promise.resolve().then(n.t.bind(n, 5436, 23)),
        Promise.resolve().then(n.t.bind(n, 901, 23))
    }
    ,
    4083: (e, t, n) => {
        "use strict";
        n.d(t, {
            Analytics: () => l
        });
        var a = n(5835)
          , o = n(551)
          , r = () => {
            window.va || (window.va = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                (window.vaq = window.vaq || []).push(t)
            }
            )
        }
        ;
        function i() {
            return "undefined" != typeof window
        }
        function c() {
            return "production"
        }
        function s() {
            return "development" === ((i() ? window.vam : c()) || "production")
        }
        function d(e) {
            return (0,
            o.useEffect)( () => {
                !function() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        debug: !0
                    };
                    if (!i())
                        return;
                    (function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "auto";
                        if ("auto" === e) {
                            window.vam = c();
                            return
                        }
                        window.vam = e
                    }
                    )(t.mode),
                    r(),
                    t.beforeSend && (null == (e = window.va) || e.call(window, "beforeSend", t.beforeSend));
                    let n = t.scriptSrc || (s() ? "https://va.vercel-scripts.com/v1/script.debug.js" : "/_vercel/insights/script.js");
                    if (document.head.querySelector('script[src*="'.concat(n, '"]')))
                        return;
                    let a = document.createElement("script");
                    a.src = n,
                    a.defer = !0,
                    a.dataset.sdkn = "@vercel/analytics" + (t.framework ? "/".concat(t.framework) : ""),
                    a.dataset.sdkv = "1.3.2",
                    t.disableAutoTrack && (a.dataset.disableAutoTrack = "1"),
                    t.endpoint && (a.dataset.endpoint = t.endpoint),
                    t.dsn && (a.dataset.dsn = t.dsn),
                    a.onerror = () => {
                        let e = s() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                        console.log("[Vercel Web Analytics] Failed to load script from ".concat(n, ". ").concat(e))
                    }
                    ,
                    s() && !1 === t.debug && (a.dataset.debug = "false"),
                    document.head.appendChild(a)
                }({
                    framework: e.framework || "react",
                    ...void 0 !== e.route && {
                        disableAutoTrack: !0
                    },
                    ...e
                })
            }
            , []),
            (0,
            o.useEffect)( () => {
                e.route && e.path && function(e) {
                    var t;
                    let {route: n, path: a} = e;
                    null == (t = window.va) || t.call(window, "pageview", {
                        route: n,
                        path: a
                    })
                }({
                    route: e.route,
                    path: e.path
                })
            }
            , [e.route, e.path]),
            null
        }
        function l() {
            return (0,
            a.jsx)(d, {})
        }
    }
    ,
    901: () => {}
    ,
    5436: e => {
        e.exports = {
            style: {
                fontFamily: "'JetBrains Mono', 'JetBrains Mono Fallback'",
                fontStyle: "normal"
            },
            className: "__className_3c557b",
            variable: "__variable_3c557b"
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [322, 334, 662, 744], () => t(8268)),
    _N_E = e.O()
}
]);
