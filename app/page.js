(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    7111: (e, s, a) => {
        Promise.resolve().then(a.bind(a, 1513)),
        Promise.resolve().then(a.t.bind(a, 9907, 23))
    }
    ,
    1513: (e, s, a) => {
        "use strict";
        a.d(s, {
            FormNewsletter: () => n
        });
        var l = a(5835)
          , t = a(551)
          , r = a(8433);
        let c = (0,
        r.createServerReference)("60cf622c09af32568cf184271b4c42b31a21638564", r.callServer, void 0, r.findSourceMapURL, "subscribe");
        function n() {
            let[e,s,a] = (0,
            t.useActionState)(c, {
                success: !1,
                message: ""
            });
            return (0,
            l.jsxs)("form", {
                action: s,
                className: "flex flex-col gap-2",
                children: [(0,
                l.jsx)("p", {
                    className: "text-balance font-medium",
                    children: "I run a newsletter about design, coding, developer life and open source."
                }), (0,
                l.jsxs)("div", {
                    className: "flex items-center justify-center gap-2",
                    children: [(0,
                    l.jsx)("label", {
                        htmlFor: "email",
                        className: "sr-only",
                        children: "Email"
                    }), (0,
                    l.jsx)("input", {
                        type: "email",
                        placeholder: "m@example.com",
                        id: "email",
                        name: "email",
                        className: "px-2 ring-1 ring-border  focus:ring-blue-700 h-8 text-base appearance-none rounded-none outline-none",
                        required: !0,
                        disabled: a
                    }), (0,
                    l.jsx)("button", {
                        type: "submit",
                        className: "px-2 h-8 bg-blue-700 text-white dark:bg-blue-600",
                        disabled: a,
                        children: "Subscribe"
                    })]
                }), (0,
                l.jsx)("div", {
                    "data-success": e.success,
                    className: "text-sm pt-0.5 text-blue-700 dark:text-blue-600 data-[success=false]:text-red-500 h-8",
                    children: e.message
                })]
            })
        }
    }
}, e => {
    var s = s => e(e.s = s);
    e.O(0, [187, 334, 662, 744], () => s(7111)),
    _N_E = e.O()
}
]);
