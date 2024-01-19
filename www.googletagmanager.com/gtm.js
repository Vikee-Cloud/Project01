// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "3",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-9107407-3",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollThreshold",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollUnits",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleRatio",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleTime",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__gclidw",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableCrossDomain": false,
                "vtp_enableUrlPassthrough": false,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "tag_id": 5
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "11081986475",
                "vtp_conversionLabel": "qr0zCOryo40YEKvjpqQp",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 7
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Generic Click Listener",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": ["template", ["macro", 4], "|", ["macro", 5], "|", ["macro", 6], "|", ["macro", 7]],
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 10
            }, {
                "function": "__cl",
                "tag_id": 11
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "\/store-locator"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.click"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 3]
                ],
                [
                    ["if", 0, 1],
                    ["add", 1]
                ],
                [
                    ["if", 2],
                    ["add", 2]
                ]
            ]
        },
        "runtime": []









    };


    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        fa = function(a) {
            return a.raw = a
        },
        ha = function(a, b) {
            a.raw = b;
            return a
        },
        ia = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: ba(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ja = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        ka = function(a) {
            return a instanceof Array ? a :
                ja(ia(a))
        },
        la = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ma;
    if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = ma,
        ra = function(a, b) {
            a.prototype = la(b.prototype);
            a.prototype.constructor = a;
            if (qa) qa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.rn = b.prototype
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var sa = this || self,
        va = function(a) {
            return a
        };
    var wa = function() {},
        xa = function(a) {
            return "function" === typeof a
        },
        g = function(a) {
            return "string" === typeof a
        },
        ya = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        za = Array.isArray,
        Aa = function(a, b) {
            if (a && za(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ba = function(a, b) {
            if (!ya(a) || !ya(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Da = function(a, b) {
            for (var c = new Ca, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        k = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ea = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Fa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ga = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Ia = function(a) {
            var b = [];
            if (za(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ja = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ka = function() {
            return new Date(Date.now())
        },
        La = function() {
            return Ka().getTime()
        },
        Ca = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ca.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Ca.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ma = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Na = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Oa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Pa = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Qa = function(a, b) {
            return a.substring(0, b.length) === b
        },
        Ra = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Sa = /^\w{1,9}$/,
        Ta = function(a,
            b) {
            a = a || {};
            b = b || ",";
            var c = [];
            k(a, function(d, e) {
                Sa.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Ua = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Va = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Wa = function(a) {
            if (null == a) return String(a);
            var b = Va.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Ya = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Za = function(a) {
            if (!a || "object" != Wa(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Ya(a, "constructor") && !Ya(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Ya(a, b)
        },
        A = function(a, b) {
            var c = b || ("array" == Wa(a) ? [] : {}),
                d;
            for (d in a)
                if (Ya(a, d)) {
                    var e = a[d];
                    "array" == Wa(e) ? ("array" != Wa(c[d]) && (c[d] = []), c[d] = A(e, c[d])) : Za(e) ? (Za(c[d]) || (c[d] = {}), c[d] = A(e, c[d])) : c[d] = e
                }
            return c
        };

    function $a() {
        for (var a = ab, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function bb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var ab, cb;

    function db(a) {
        ab = ab || bb();
        cb = cb || $a();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                h = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | h >> 4,
                p = (h & 15) << 2 | l >> 6,
                q = l & 63;
            e || (q = 64, d || (p = 64));
            b.push(ab[m], ab[n], ab[p], ab[q])
        }
        return b.join("")
    }

    function eb(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = cb[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        ab = ab || bb();
        cb = cb || $a();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                h = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != l && (c += String.fromCharCode(h << 6 & 192 | l)))
        }
    };
    var fb = {},
        gb = function(a, b) {
            fb[a] = fb[a] || [];
            fb[a][b] = !0
        },
        hb = function() {
            delete fb.GA4_EVENT
        },
        ib = function(a) {
            var b = fb[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return db(c.join("")).replace(/\.+$/, "")
        };
    var jb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var kb, lb = function() {
        if (void 0 === kb) {
            var a = null,
                b = sa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: va,
                        createScript: va,
                        createScriptURL: va
                    })
                } catch (c) {
                    sa.console && sa.console.error(c.message)
                }
                kb = a
            } else kb = a
        }
        return kb
    };
    var mb = function(a) {
        this.h = a
    };
    mb.prototype.toString = function() {
        return this.h + ""
    };
    var nb = {};
    var ob, pb;
    a: {
        for (var qb = ["CLOSURE_FLAGS"], rb = sa, sb = 0; sb < qb.length; sb++)
            if (rb = rb[qb[sb]], null == rb) {
                pb = null;
                break a
            }
        pb = rb
    }
    var tb = pb && pb[610401301];
    ob = null != tb ? tb : !1;

    function ub() {
        var a = sa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var vb, wb = sa.navigator;
    vb = wb ? wb.userAgentData || null : null;

    function xb(a) {
        return ob ? vb ? vb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function yb(a) {
        return -1 != ub().indexOf(a)
    };

    function zb() {
        return ob ? !!vb && 0 < vb.brands.length : !1
    }

    function Ab() {
        return zb() ? !1 : yb("Opera")
    }

    function Bb() {
        return yb("Firefox") || yb("FxiOS")
    }

    function Cb() {
        return zb() ? xb("Chromium") : (yb("Chrome") || yb("CriOS")) && !(zb() ? 0 : yb("Edge")) || yb("Silk")
    };
    var Db = {},
        Eb = function(a) {
            this.h = a
        };
    Eb.prototype.toString = function() {
        return this.h.toString()
    };
    var Fb = function(a) {
        return a instanceof Eb && a.constructor === Eb ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Gb = fa([""]),
        Hb = ha(["\x00"], ["\\0"]),
        Ib = ha(["\n"], ["\\n"]),
        Jb = ha(["\x00"], ["\\u0000"]);

    function Kb(a) {
        return -1 === a.toString().indexOf("`")
    }
    Kb(function(a) {
        return a(Gb)
    }) || Kb(function(a) {
        return a(Hb)
    }) || Kb(function(a) {
        return a(Ib)
    }) || Kb(function(a) {
        return a(Jb)
    });
    var Lb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;

    function Mb(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };

    function Nb(a) {
        var b = a = Ob(a),
            c = lb(),
            d = c ? c.createHTML(b) : b;
        return new Eb(d, Db)
    }

    function Ob(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var E = window,
        F = document,
        Qb = navigator,
        Rb = F.currentScript && F.currentScript.src,
        Sb = function(a, b) {
            var c = E[a];
            E[a] = void 0 === c ? b : c;
            return E[a]
        },
        Tb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Ub = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Vb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Wb(a, b, c) {
        b && k(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Xb = function(a, b, c, d, e) {
            var f = F.createElement("script");
            Wb(f, d, Ub);
            f.type = "text/javascript";
            f.async = d && !1 === d.async ? !1 : !0;
            var h, l = Ob(a),
                m = lb(),
                n = m ? m.createScriptURL(l) : l;
            h = new mb(n, nb);
            f.src = h instanceof mb && h.constructor === mb ? h.h : "type_error:TrustedResourceUrl";
            var p, q, r, t = null == (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : r.call(q, "script[nonce]");
            (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            Tb(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var u = F.getElementsByTagName("script")[0] || F.body || F.head;
                u.parentNode.insertBefore(f, u)
            }
            return f
        },
        Yb = function() {
            if (Rb) {
                var a = Rb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Zb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var h = e,
                l = !1;
            h || (h = F.createElement("iframe"), l = !0);
            Wb(h, c, Vb);
            d && k(d, function(n, p) {
                h.dataset[n] = p
            });
            f && (h.height = "0", h.width = "0", h.style.display = "none", h.style.visibility = "hidden");
            if (l) {
                var m = F.body &&
                    F.body.lastChild || F.body || F.head;
                m.parentNode.insertBefore(h, m)
            }
            Tb(h, b);
            void 0 !== a && (h.src = a);
            return h
        },
        $b = function(a, b, c, d) {
            var e = new Image(1, 1);
            Wb(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        ac = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        bc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        G = function(a) {
            E.setTimeout(a, 0)
        },
        cc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        dc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        ec = function(a) {
            var b = F.createElement("div"),
                c = b,
                d = Nb("A<div>" + a + "</div>");
            1 === c.nodeType && Mb(c);
            c.innerHTML = Fb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        fc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, h = 0; f && h <= c; h++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        gc = function(a) {
            var b;
            try {
                b = Qb.sendBeacon && Qb.sendBeacon(a)
            } catch (c) {
                gb("TAGGING", 15)
            }
            b || $b(a)
        },
        hc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        ic = function(a) {
            var b = {
                headers: {
                    "Attribution-Reporting-Eligible": "trigger"
                },
                keepalive: !0,
                attributionReporting: {
                    eventSourceEligible: !0,
                    triggerEligible: !0
                }
            };
            try {
                E.fetch(a, b)
            } catch (c) {}
        },
        jc = function() {
            var a = E.performance;
            if (a && xa(a.now)) return a.now()
        },
        kc = function() {
            return E.performance || void 0
        };

    function lc(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    };
    var mc = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Wi: a("consent"),
            Fg: a("convert_case_to"),
            Gg: a("convert_false_to"),
            Hg: a("convert_null_to"),
            Ig: a("convert_true_to"),
            Jg: a("convert_undefined_to"),
            Cm: a("debug_mode_metadata"),
            ka: a("function"),
            Ff: a("instance_name"),
            bk: a("live_only"),
            dk: a("malware_disabled"),
            ek: a("metadata"),
            hk: a("original_activity_id"),
            Sm: a("original_vendor_template_id"),
            Rm: a("once_on_load"),
            gk: a("once_per_event"),
            Oh: a("once_per_load"),
            Wm: a("priority_override"),
            Xm: a("respected_consent_types"),
            Th: a("setup_tags"),
            pd: a("tag_id"),
            Yh: a("teardown_tags")
        }
    }();
    var Ic;
    var Kc = [],
        Lc = [],
        Mc = [],
        Nc = [],
        Oc = [],
        Pc = {},
        Qc, Rc, Sc = function(a) {
            Rc = Rc || a
        },
        Tc = function(a) {},
        Uc, Vc = [],
        Wc = function(a, b) {
            var c = a[mc.ka],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Pc[c],
                f = b && 2 === b.type && d.reportMacroDiscrepancy && e && -1 !== Vc.indexOf(c),
                h = {},
                l = {},
                m;
            for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && (h[m] = a[m]), !e || f) && (l[m.substr(4)] = a[m]);
            e && d && d.cachedModelValues && (h.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (null == b.name) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (null == q) n = "";
                        else {
                            var r;
                            switch (p) {
                                case 2:
                                    r = Kc[q];
                                    break;
                                case 1:
                                    r = Nc[q];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var t = r && r[mc.Ff];
                            n = t ? String(t) : ""
                        }
                    }
                    b.name = n
                }
                e && (h.vtp_gtmEntityIndex = b.index, h.vtp_gtmEntityName =
                    b.name)
            }
            var u, v;
            e && (u = e(h));
            if (!e || f) v = Ic(c, l, b);
            if (f && d) {
                var w;
                a: {
                    var x = u;
                    if (void 0 == x || za(x) || Za(x)) w = !0;
                    else {
                        switch (typeof x) {
                            case "boolean":
                            case "number":
                            case "string":
                            case "function":
                                w = !0;
                                break a
                        }
                        w = !1
                    }
                }
                w ? typeof u !== typeof v && d.reportMacroDiscrepancy(d.id, c) : u !== v && d.reportMacroDiscrepancy(d.id, c)
            }
            return e ? u : v
        },
        Yc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Xc(a[e], b, c));
            return d
        },
        Xc = function(a, b, c) {
            if (za(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Xc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var h = Kc[f];
                        if (!h || b.isBlocked(h)) return;
                        c[f] = !0;
                        var l = String(h[mc.Ff]);
                        try {
                            var m = Yc(h, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Wc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            Uc && (d = Uc.Dk(d, m))
                        } catch (y) {
                            b.logMacroError && b.logMacroError(y, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Xc(a[n], b, c)] = Xc(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = Xc(a[q], b, c);
                            Rc && (p = p || Rc.xl(r));
                            d.push(r)
                        }
                        return Rc && p ? Rc.Fk(d) : d.join("");
                    case "escape":
                        d = Xc(a[1], b, c);
                        if (Rc && za(a[1]) && "macro" === a[1][0] && Rc.yl(a)) return Rc.Vl(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) nc[a[t]] && (d = nc[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Nc[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            ji: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v[mc.ka] = a[1];
                        var w = Zc(v, b, c),
                            x = !!a[4];
                        return x || 2 !==
                            w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Zc = function(a, b, c) {
            try {
                return Qc(Yc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        },
        $c = function(a) {
            var b = a[mc.ka];
            if (!b) throw Error("Error: No function name given for function call.");
            return !!Pc[b]
        };
    var cd = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = ad(a), f = 0; f < Lc.length; f++) {
                var h = Lc[f],
                    l = bd(h, e);
                if (l) {
                    for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(h.block || [])
                } else null === l && b(h.block || []);
            }
            for (var p = [], q = 0; q < Nc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        bd = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f = a.unless || [], h = 0; h < f.length; h++) {
                var l = b(f[h]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        ad = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Zc(Mc[c], a));
                return b[c]
            }
        };
    var dd = {
        Dk: function(a, b) {
            b[mc.Fg] && "string" === typeof a && (a = 1 == b[mc.Fg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(mc.Hg) && null === a && (a = b[mc.Hg]);
            b.hasOwnProperty(mc.Jg) && void 0 === a && (a = b[mc.Jg]);
            b.hasOwnProperty(mc.Ig) && !0 === a && (a = b[mc.Ig]);
            b.hasOwnProperty(mc.Gg) && !1 === a && (a = b[mc.Gg]);
            return a
        }
    };
    var ed = [],
        fd = function(a) {
            return void 0 == ed[a] ? !1 : ed[a]
        };
    var td = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
        ud = new Ca;
    var Bd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Cd(a, b) {
        for (var c = "", d = !0; 7 < a;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a | b] + c
    };
    var Ed = function(a) {
            return Dd ? F.querySelectorAll(a) : null
        },
        Fd = function(a, b) {
            if (!Dd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!F.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Gd = !1;
    if (F.querySelectorAll) try {
        var Hd = F.querySelectorAll(":root");
        Hd && 1 == Hd.length && Hd[0] == F.documentElement && (Gd = !0)
    } catch (a) {}
    var Dd = Gd;
    var J = function(a) {
        gb("GTM", a)
    };
    var Id = function(a) {
            return null == a ? "" : g(a) ? Ja(String(a)) : "e0"
        },
        Kd = function(a) {
            return a.replace(Jd, "")
        },
        Md = function(a) {
            return Ld(a.replace(/\s/g, ""))
        },
        Ld = function(a) {
            return Ja(a.replace(Nd, "").toLowerCase())
        },
        Pd = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return Od.test(a) ? a : "e0"
        },
        Rd = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (Qd.test(c)) return c
            }
            return "e0"
        },
        Ud = function(a) {
            if ("" ===
                a || "e0" === a) return Promise.resolve(a);
            if (E.crypto && E.crypto.subtle) {
                if (Sd.test(a)) return Promise.resolve(a);
                try {
                    var b = Td(a);
                    return E.crypto.subtle.digest("SHA-256", b).then(function(c) {
                        var d = Array.from(new Uint8Array(c)).map(function(e) {
                            return String.fromCharCode(e)
                        }).join("");
                        return E.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                    }).catch(function() {
                        return "e2"
                    })
                } catch (c) {
                    return Promise.resolve("e2")
                }
            } else return Promise.resolve("e1")
        },
        Td = function(a) {
            var b;
            if (E.TextEncoder) b = (new TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        Nd = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        Qd = /^\S+@\S+\.\S+$/,
        Od = /^\+\d{10,15}$/,
        Jd = /[.~]/g,
        Vd = /^[0-9A-Za-z_-]{43}$/,
        Sd = /^[0-9A-Fa-f]{64}$/,
        Wd = {},
        Xd = (Wd.email = "em", Wd.phone_number = "pn", Wd.first_name = "fn",
            Wd.last_name = "ln", Wd.street = "sa", Wd.city = "ct", Wd.region = "rg", Wd.country = "co", Wd.postal_code = "pc", Wd.error_code = "ec", Wd),
        Yd = {},
        Zd = (Yd.email = "sha256_email_address", Yd.phone_number = "sha256_phone_number", Yd.first_name = "sha256_first_name", Yd.last_name = "sha256_last_name", Yd.street = "sha256_street", Yd),
        ae = function(a, b) {
            a.some(function(c) {
                    c.value && $d.indexOf(c.name)
                }) ? b(a) : E.Promise ? Promise.all(a.map(function(c) {
                    return c.value && -1 !== $d.indexOf(c.name) ? Ud(c.value).then(function(d) {
                        c.value = d
                    }) : Promise.resolve()
                })).then(function() {
                    b(a)
                }).catch(function() {
                    b([])
                }) :
                b([])
        },
        ce = function(a, b) {
            var c = be(a);
            ae(c, b)
        },
        be = function(a) {
            function b(r, t, u, v) {
                var w = Id(r);
                "" !== w && (Sd.test(w) ? l.push({
                    name: t,
                    value: w,
                    index: v
                }) : l.push({
                    name: t,
                    value: u(w),
                    index: v
                }))
            }

            function c(r, t) {
                var u = r;
                if (g(u) || za(u)) {
                    u = za(r) ? r : [r];
                    for (var v = 0; v < u.length; ++v) {
                        var w = Id(u[v]),
                            x = Sd.test(w);
                        t && !x && J(89);
                        !t && x && J(88)
                    }
                }
            }

            function d(r, t) {
                var u = r[t];
                c(u, !1);
                var v = Zd[t];
                r.hasOwnProperty(v) && (r.hasOwnProperty(t) && J(90), u = r[v], c(u, !0));
                return u
            }

            function e(r, t, u) {
                var v = d(r, t);
                v = za(v) ? v : [v];
                for (var w = 0; w < v.length; ++w) b(v[w],
                    t, u)
            }

            function f(r, t, u, v) {
                var w = d(r, t);
                b(w, t, u, v)
            }

            function h(r) {
                return function(t) {
                    J(64);
                    return r(t)
                }
            }
            var l = [];
            if ("https:" !== E.location.protocol) return l.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), l;
            e(a, "email", Rd);
            e(a, "phone_number", Pd);
            e(a, "first_name", h(Md));
            e(a, "last_name", h(Md));
            var m = a.home_address || {};
            e(m, "street", h(Ld));
            e(m, "city", h(Ld));
            e(m, "postal_code", h(Kd));
            e(m, "region", h(Ld));
            e(m, "country", h(Kd));
            var n = a.address || {};
            n = za(n) ? n : [n];
            for (var p = 0; p < n.length; p++) {
                var q = n[p];
                f(q, "first_name",
                    Md, p);
                f(q, "last_name", Md, p);
                f(q, "street", Ld, p);
                f(q, "city", Ld, p);
                f(q, "postal_code", Kd, p);
                f(q, "region", Ld, p);
                f(q, "country", Kd, p)
            }
            return l
        },
        ee = function(a, b) {
            ce(a, function(c) {
                var d = de(c);
                b(d.Qe, d.rg)
            })
        },
        de = function(a) {
            for (var b = ["tv.1"], c = 0, d = 0; d < a.length; ++d) {
                var e = a[d].name,
                    f = a[d].value,
                    h = a[d].index,
                    l = Xd[e];
                l && f && (-1 === $d.indexOf(e) || /^e\d+$/.test(f) || Vd.test(f) || Sd.test(f)) && (void 0 !== h && (l += h), b.push(l + "." + f), c++)
            }
            1 === a.length && "error_code" === a[0].name && (c = 0);
            return {
                Qe: encodeURIComponent(b.join("~")),
                rg: c
            }
        },
        fe = function(a) {
            if (E.Promise) try {
                return new Promise(function(b) {
                    ee(a, function(c, d) {
                        b({
                            ui: c,
                            rg: d
                        })
                    })
                })
            } catch (b) {}
        },
        $d = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var K = {
            g: {
                ya: "ad_personalization",
                F: "ad_storage",
                K: "ad_user_data",
                O: "analytics_storage",
                Wb: "region",
                Qd: "consent_updated",
                Ag: "wait_for_update",
                aj: "ads",
                Bm: "all",
                bj: "maps",
                cj: "playstore",
                dj: "search",
                ej: "shopping",
                fj: "youtube",
                ij: "app_remove",
                jj: "app_store_refund",
                kj: "app_store_subscription_cancel",
                lj: "app_store_subscription_convert",
                mj: "app_store_subscription_renew",
                Kg: "add_payment_info",
                Lg: "add_shipping_info",
                Xb: "add_to_cart",
                Yb: "remove_from_cart",
                Mg: "view_cart",
                Bb: "begin_checkout",
                Zb: "select_item",
                Xa: "view_item_list",
                jb: "select_promotion",
                Ya: "view_promotion",
                na: "purchase",
                ac: "refund",
                Ca: "view_item",
                Ng: "add_to_wishlist",
                nj: "exception",
                oj: "first_open",
                pj: "first_visit",
                oa: "gtag.config",
                La: "gtag.get",
                qj: "in_app_purchase",
                bc: "page_view",
                rj: "screen_view",
                sj: "session_start",
                tj: "timing_complete",
                uj: "track_social",
                Rd: "user_engagement",
                kb: "gclid",
                qa: "ads_data_redaction",
                ja: "allow_ad_personalization_signals",
                ff: "allow_custom_scripts",
                hf: "allow_display_features",
                Sd: "allow_enhanced_conversions",
                Za: "allow_google_signals",
                Da: "allow_interest_groups",
                vj: "app_id",
                wj: "app_installer_id",
                xj: "app_name",
                yj: "app_version",
                fc: "auid",
                zj: "auto_detection_enabled",
                Cb: "aw_remarketing",
                jf: "aw_remarketing_only",
                Td: "discount",
                Ud: "aw_feed_country",
                Vd: "aw_feed_language",
                W: "items",
                Wd: "aw_merchant_id",
                Og: "aw_basket_type",
                Dc: "campaign_content",
                Ec: "campaign_id",
                Fc: "campaign_medium",
                Gc: "campaign_name",
                Hc: "campaign",
                Ic: "campaign_source",
                Jc: "campaign_term",
                lb: "client_id",
                Aj: "content_group",
                Bj: "content_type",
                Ma: "conversion_cookie_prefix",
                Kc: "conversion_id",
                Ea: "conversion_linker",
                Db: "conversion_api",
                Xd: "cookie_deprecation",
                Sa: "cookie_domain",
                Ga: "cookie_expires",
                Ta: "cookie_flags",
                hc: "cookie_name",
                Lc: "cookie_path",
                Na: "cookie_prefix",
                ic: "cookie_update",
                jc: "country",
                ra: "currency",
                Yd: "customer_lifetime_value",
                Mc: "custom_map",
                Pg: "gcldc",
                Cj: "debug_mode",
                X: "developer_id",
                Dj: "disable_merchant_reported_purchases",
                Nc: "dc_custom_params",
                Ej: "dc_natural_search",
                Qg: "dynamic_event_settings",
                Rg: "affiliation",
                Zd: "checkout_option",
                kf: "checkout_step",
                Sg: "coupon",
                Oc: "item_list_name",
                lf: "list_name",
                Fj: "promotions",
                Pc: "shipping",
                nf: "tax",
                ae: "engagement_time_msec",
                be: "enhanced_client_id",
                ce: "enhanced_conversions",
                Tg: "enhanced_conversions_automatic_settings",
                de: "estimated_delivery_date",
                pf: "euid_logged_in_state",
                Qc: "event_callback",
                Gj: "event_category",
                nb: "event_developer_id_string",
                Hj: "event_label",
                Ug: "event",
                ee: "event_settings",
                fe: "event_timeout",
                Ij: "description",
                Jj: "fatal",
                Kj: "experiments",
                qf: "firebase_id",
                he: "first_party_collection",
                ie: "_x_20",
                cb: "_x_19",
                Vg: "fledge",
                Wg: "flight_error_code",
                Xg: "flight_error_message",
                Yg: "fl_activity_category",
                Zg: "fl_activity_group",
                rf: "fl_advertiser_id",
                ah: "fl_ar_dedupe",
                tf: "match_id",
                bh: "fl_random_number",
                eh: "tran",
                fh: "u",
                je: "gac_gclid",
                kc: "gac_wbraid",
                gh: "gac_wbraid_multiple_conversions",
                hh: "ga_restrict_domain",
                ih: "ga_temp_client_id",
                ke: "gdpr_applies",
                jh: "geo_granularity",
                ob: "value_callback",
                eb: "value_key",
                Fm: "google_ono",
                Eb: "google_signals",
                kh: "google_tld",
                me: "groups",
                lh: "gsa_experiment_id",
                mh: "iframe_state",
                Rc: "ignore_referrer",
                uf: "internal_traffic_results",
                qb: "is_legacy_converted",
                rb: "is_legacy_loaded",
                ne: "is_passthrough",
                oe: "_lps",
                Ha: "language",
                vf: "legacy_developer_id_string",
                Ia: "linker",
                Sc: "accept_incoming",
                Fb: "decorate_forms",
                R: "domains",
                mc: "url_position",
                nh: "method",
                Lj: "name",
                Tc: "new_customer",
                oh: "non_interaction",
                Mj: "optimize_id",
                Nj: "page_hostname",
                Uc: "page_path",
                Ja: "page_referrer",
                sb: "page_title",
                ph: "passengers",
                qh: "phone_conversion_callback",
                Oj: "phone_conversion_country_code",
                rh: "phone_conversion_css_class",
                Pj: "phone_conversion_ids",
                sh: "phone_conversion_number",
                th: "phone_conversion_options",
                wf: "_protected_audience_enabled",
                Vc: "quantity",
                pe: "redact_device_info",
                xf: "referral_exclusion_definition",
                Gb: "restricted_data_processing",
                Qj: "retoken",
                Rj: "sample_rate",
                yf: "screen_name",
                tb: "screen_resolution",
                Sj: "search_term",
                Oa: "send_page_view",
                Hb: "send_to",
                Wc: "server_container_url",
                Xc: "session_duration",
                qe: "session_engaged",
                zf: "session_engaged_time",
                ub: "session_id",
                se: "session_number",
                Yc: "delivery_postal_code",
                Gm: "temporary_client_id",
                Af: "topmost_url",
                Tj: "tracking_id",
                Bf: "traffic_type",
                sa: "transaction_id",
                Ib: "transport_url",
                uh: "trip_type",
                Jb: "update",
                vb: "url_passthrough",
                Zc: "_user_agent_architecture",
                ad: "_user_agent_bitness",
                bd: "_user_agent_full_version_list",
                dd: "_user_agent_mobile",
                ed: "_user_agent_model",
                fd: "_user_agent_platform",
                gd: "_user_agent_platform_version",
                hd: "_user_agent_wow64",
                Aa: "user_data",
                vh: "user_data_auto_latency",
                wh: "user_data_auto_meta",
                xh: "user_data_auto_multi",
                yh: "user_data_auto_selectors",
                zh: "user_data_auto_status",
                ue: "user_data_mode",
                ve: "user_data_settings",
                Pa: "user_id",
                Ua: "user_properties",
                Ah: "_user_region",
                Bh: "us_privacy_string",
                ba: "value",
                nc: "wbraid",
                Ch: "wbraid_multiple_conversions",
                Ih: "_host_name",
                Jh: "_in_page_command",
                Kh: "_is_passthrough_cid",
                sc: "non_personalized_ads",
                od: "_sst_parameters",
                ab: "conversion_label",
                za: "page_location",
                pb: "global_developer_id_string",
                te: "tc_privacy_string"
            }
        },
        ge = {},
        he = Object.freeze((ge[K.g.ja] = 1, ge[K.g.hf] = 1, ge[K.g.Sd] = 1, ge[K.g.Za] = 1, ge[K.g.W] = 1, ge[K.g.Sa] = 1, ge[K.g.Ga] = 1, ge[K.g.Ta] = 1, ge[K.g.hc] = 1, ge[K.g.Lc] = 1, ge[K.g.Na] =
            1, ge[K.g.ic] = 1, ge[K.g.Mc] = 1, ge[K.g.X] = 1, ge[K.g.Qg] = 1, ge[K.g.Qc] = 1, ge[K.g.ee] = 1, ge[K.g.fe] = 1, ge[K.g.he] = 1, ge[K.g.hh] = 1, ge[K.g.Eb] = 1, ge[K.g.kh] = 1, ge[K.g.me] = 1, ge[K.g.uf] = 1, ge[K.g.qb] = 1, ge[K.g.rb] = 1, ge[K.g.Ia] = 1, ge[K.g.xf] = 1, ge[K.g.Gb] = 1, ge[K.g.Oa] = 1, ge[K.g.Hb] = 1, ge[K.g.Wc] = 1, ge[K.g.Xc] = 1, ge[K.g.zf] = 1, ge[K.g.Yc] = 1, ge[K.g.Ib] = 1, ge[K.g.Jb] = 1, ge[K.g.ve] = 1, ge[K.g.Ua] = 1, ge[K.g.od] = 1, ge));
    Object.freeze([K.g.za, K.g.Ja, K.g.sb, K.g.Ha, K.g.yf, K.g.Pa, K.g.qf, K.g.Aj]);
    var ie = {},
        je = Object.freeze((ie[K.g.ij] = 1, ie[K.g.jj] = 1, ie[K.g.kj] = 1, ie[K.g.lj] = 1, ie[K.g.mj] = 1, ie[K.g.oj] = 1, ie[K.g.pj] = 1, ie[K.g.qj] = 1, ie[K.g.sj] = 1, ie[K.g.Rd] = 1, ie)),
        ke = {},
        le = Object.freeze((ke[K.g.Kg] = 1, ke[K.g.Lg] = 1, ke[K.g.Xb] = 1, ke[K.g.Yb] = 1, ke[K.g.Mg] = 1, ke[K.g.Bb] = 1, ke[K.g.Zb] = 1, ke[K.g.Xa] = 1, ke[K.g.jb] = 1, ke[K.g.Ya] = 1, ke[K.g.na] = 1, ke[K.g.ac] = 1, ke[K.g.Ca] = 1, ke[K.g.Ng] = 1, ke)),
        me = Object.freeze([K.g.ja, K.g.Za, K.g.ic, K.g.Rc, K.g.Jb]),
        ne = Object.freeze([].concat(me)),
        oe = Object.freeze([K.g.Ga, K.g.fe, K.g.Xc, K.g.zf,
            K.g.ae
        ]),
        pe = Object.freeze([].concat(oe)),
        qe = {},
        re = (qe[K.g.F] = "1", qe[K.g.O] = "2", qe[K.g.K] = "3", qe[K.g.ya] = "4", qe),
        se = {},
        te = Object.freeze((se[K.g.ja] = 1, se[K.g.Sd] = 1, se[K.g.Da] = 1, se[K.g.Cb] = 1, se[K.g.jf] = 1, se[K.g.Td] = 1, se[K.g.Ud] = 1, se[K.g.Vd] = 1, se[K.g.W] = 1, se[K.g.Wd] = 1, se[K.g.Ma] = 1, se[K.g.Ea] = 1, se[K.g.Sa] = 1, se[K.g.Ga] = 1, se[K.g.Ta] = 1, se[K.g.Na] = 1, se[K.g.ra] = 1, se[K.g.Yd] = 1, se[K.g.X] = 1, se[K.g.Dj] = 1, se[K.g.ce] = 1, se[K.g.de] = 1, se[K.g.qf] = 1, se[K.g.he] = 1, se[K.g.qb] = 1, se[K.g.rb] = 1, se[K.g.Ha] = 1, se[K.g.Tc] = 1, se[K.g.za] =
            1, se[K.g.Ja] = 1, se[K.g.qh] = 1, se[K.g.rh] = 1, se[K.g.sh] = 1, se[K.g.th] = 1, se[K.g.Gb] = 1, se[K.g.Oa] = 1, se[K.g.Hb] = 1, se[K.g.Wc] = 1, se[K.g.Yc] = 1, se[K.g.sa] = 1, se[K.g.Ib] = 1, se[K.g.Jb] = 1, se[K.g.vb] = 1, se[K.g.Aa] = 1, se[K.g.Pa] = 1, se[K.g.ba] = 1, se)),
        ue = {},
        ve = Object.freeze((ue[K.g.dj] = "s", ue[K.g.fj] = "y", ue[K.g.cj] = "p", ue[K.g.ej] = "h", ue[K.g.aj] = "a", ue[K.g.bj] = "m", ue));
    Object.freeze(K.g);
    var we = {},
        xe = E.google_tag_manager = E.google_tag_manager || {},
        ye = Math.random();
    we.Gf = "41h0";
    we.nd = Number("0") || 0;
    we.aa = "dataLayer";
    we.Yi = "ChAIgNiorQYQ7qb6wa7O0boPEiQAcjANk2oFfJewqHgoVMkuhWRyTUyJfEa/Dy4ry9RrBqqZSeAaAm06";
    var ze = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        Ae = {
            __paused: 1,
            __tg: 1
        },
        Be;
    for (Be in ze) ze.hasOwnProperty(Be) && (Ae[Be] = 1);
    var Ce = Ga(""),
        De, Ee = !1;
    De = Ee;
    var Fe, Ge = !1;
    Fe = Ge;
    var He, Ie = !1;
    He = Ie;
    var Je, Ke = !1;
    Je = Ke;
    we.Cc = "www.googletagmanager.com";
    var Le = "" + we.Cc + (De ? "/gtag/js" : "/gtm.js"),
        Me = null,
        Ne = null,
        Oe = {},
        Pe = {},
        Qe = function() {
            var a = xe.sequence || 1;
            xe.sequence = a + 1;
            return a
        };
    we.Xi = "";
    var Re = "";
    we.Ce = Re;
    var Se = new function() {
        this.h = "";
        this.s = !1;
        this.C = ""
    };
    var Te = new Ca,
        Ue = {},
        Ve = {},
        Ye = {
            name: we.aa,
            set: function(a, b) {
                A(Ra(a, b), Ue);
                We()
            },
            get: function(a) {
                return Xe(a, 2)
            },
            reset: function() {
                Te = new Ca;
                Ue = {};
                We()
            }
        },
        Xe = function(a, b) {
            return 2 != b ? Te.get(a) : Ze(a)
        },
        Ze = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Ue, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        $e = function(a, b) {
            Ve.hasOwnProperty(a) || (Te.set(a, b), A(Ra(a, b), Ue), We())
        },
        We = function(a) {
            k(Ve, function(b, c) {
                Te.set(b, c);
                A(Ra(b), Ue);
                A(Ra(b,
                    c), Ue);
                a && delete Ve[b]
            })
        },
        af = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Ze(a) : Te.get(a);
            "array" === Wa(d) || "object" === Wa(d) ? c = A(d) : c = d;
            return c
        };
    var bf = function(a, b, c) {
            if (!c) return !1;
            var d = c.selector_type,
                e = String(c.value),
                f;
            if ("js_variable" === d) {
                e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                for (var h = e.split(","), l = 0; l < h.length; l++) {
                    var m = h[l].trim();
                    if (m) {
                        if (0 === m.indexOf("dataLayer.")) f = Xe(m.substring(10));
                        else {
                            var n = m.split(".");
                            f = E[n.shift()];
                            for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                        }
                        if (void 0 !== f) break
                    }
                }
            } else if ("css_selector" === d && Dd) {
                var q = Ed(e);
                if (q && 0 < q.length) {
                    f = [];
                    for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(dc(q[r]) ||
                        Ja(q[r].value));
                    f = 1 === f.length ? f[0] : f
                }
            }
            return f ? (a[b] = f, !0) : !1
        },
        cf = function(a) {
            if (a) {
                var b = {},
                    c = !1;
                c = bf(b, "email", a.email) || c;
                c = bf(b, "phone_number", a.phone) || c;
                b.address = [];
                for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                    var f = {};
                    c = bf(f, "first_name", d[e].first_name) || c;
                    c = bf(f, "last_name", d[e].last_name) || c;
                    c = bf(f, "street", d[e].street) || c;
                    c = bf(f, "city", d[e].city) || c;
                    c = bf(f, "region", d[e].region) || c;
                    c = bf(f, "country", d[e].country) || c;
                    c = bf(f, "postal_code", d[e].postal_code) || c;
                    b.address.push(f)
                }
                return c ?
                    b : void 0
            }
        },
        df = function(a) {
            return Za(a) ? !!a.enable_code : !1
        };
    var ef = [];

    function ff(a) {
        switch (a) {
            case 24:
                return 3;
            case 45:
                return 14;
            case 56:
                return 11;
            case 57:
                return 12;
            case 61:
                return 13;
            case 58:
                return 15;
            case 97:
                return 16;
            case 100:
                return 17
        }
    }

    function N(a) {
        ef[a] = !0;
        var b = ff(a);
        b && (ed[b] = !0)
    }
    N(5);
    N(6);
    N(7);
    N(9);
    N(10);
    N(14);
    N(11);
    N(15);
    N(18);
    N(19);
    N(20);
    N(22);
    N(23);
    N(28);
    N(29);
    N(30);
    N(32);
    N(33);
    N(37);
    N(39);
    N(42);
    N(43);
    N(44);
    N(46);
    N(47);
    N(48);
    N(50);
    N(51);
    N(52);
    N(53);

    N(58);
    N(60);
    N(63);
    N(64);
    N(65);

    N(70);
    N(82);
    N(86);



    function P(a) {
        return !!ef[a]
    }
    var kf = function(a) {
        gb("HEALTH", a)
    };
    var lf;
    try {
        lf = JSON.parse(eb("eyIwIjoiSU4iLCIxIjoiSU4tS0EiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"))
    } catch (a) {
        J(123), kf(2), lf = {}
    }
    var mf = function() {
            return lf["0"] || ""
        },
        nf = function() {
            var a = !1;
            return a
        },
        of = function() {
            var a = "";
            return a
        },
        pf = function() {
            var a = !1;
            a = !!lf["5"];
            return a
        },
        qf = function() {
            var a = "";
            return a
        };
    var rf = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var sf = function(a) {
        sf[" "](a);
        return a
    };
    sf[" "] = function() {};
    var uf = function() {
        var a = tf,
            b = "Yf";
        if (a.Yf && a.hasOwnProperty(b)) return a.Yf;
        var c = new a;
        return a.Yf = c
    };
    var tf = function() {
        var a = {};
        this.h = function() {
            var b = rf.h,
                c = rf.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.s = function() {
            a[rf.h] = !0
        }
    };
    var vf = !1,
        wf = !1,
        xf = {},
        yf = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_personalization: !1
        };

    function zf() {
        var a = Sb("google_tag_data", {});
        return a.ics = a.ics || new Af
    }
    var Af = function() {
        this.entries = {};
        this.cps = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.h = []
    };
    Af.prototype.default = function(a, b, c, d, e, f) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        gb("TAGGING", 19);
        void 0 == b ? gb("TAGGING", 18) : Bf(this, a, "granted" === b, c, d, e, f)
    };
    Af.prototype.waitForUpdate = function(a, b) {
        for (var c = 0; c < a.length; c++) Bf(this, a[c], void 0, void 0, "", "", b)
    };
    var Bf = function(a, b, c, d, e, f, h) {
        var l = a.entries,
            m = l[b] || {},
            n = m.region,
            p = d && g(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (Cf(p, n, e, f)) {
            var q = !!(h && 0 < h && void 0 === m.update),
                r = {
                    region: p,
                    declare_region: m.declare_region,
                    implicit: m.implicit,
                    default: void 0 !== c ? c : m.default,
                    declare: m.declare,
                    update: m.update,
                    quiet: q
                };
            if ("" !== e || !1 !== m.default) l[b] = r;
            q && E.setTimeout(function() {
                l[b] === r && r.quiet && (gb("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0), a.notifyListeners())
            }, h)
        }
    };
    aa = Af.prototype;
    aa.clearTimeout = function(a, b) {
        var c = [a],
            d;
        for (d in xf) xf.hasOwnProperty(d) && xf[d] === a && c.push(d);
        var e = this.entries[a] || {},
            f = this.getConsentState(a);
        if (e.quiet) {
            e.quiet = !1;
            for (var h = ia(c), l = h.next(); !l.done; l = h.next()) Df(this, l.value)
        } else if (void 0 !== b && f !== b)
            for (var m = ia(c), n = m.next(); !n.done; n = m.next()) Df(this, n.value)
    };
    aa.update = function(a, b) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (void 0 != b) {
            var c = this.getConsentState(a),
                d = this.entries;
            (d[a] = d[a] || {}).update = "granted" === b;
            this.clearTimeout(a, c)
        }
    };
    aa.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            h = f[a] || {},
            l = h.declare_region,
            m = c && g(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Cf(m, l, d, e)) {
            var n = {
                region: h.region,
                declare_region: m,
                declare: "granted" === b,
                implicit: h.implicit,
                default: h.default,
                update: h.update,
                quiet: h.quiet
            };
            if ("" !== d || !1 !== h.declare) f[a] = n
        }
    };
    aa.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        !1 !== d.implicit && (d.implicit = "granted" === b)
    };
    aa.getConsentState = function(a) {
        var b = this.entries,
            c = b[a] || {},
            d = c.update;
        if (void 0 !== d) return d ? 1 : 2;
        d = c.default;
        if (void 0 !== d) return d ? 1 : 2;
        if (xf.hasOwnProperty(a)) {
            var e = b[xf[a]] || {};
            d = e.update;
            if (void 0 !== d) return d ? 1 : 2;
            d = e.default;
            if (void 0 !== d) return d ? 1 : 2
        }
        d = c.declare;
        if (void 0 !== d) return d ? 1 : 2;
        if (fd(3)) {
            d = c.implicit;
            if (void 0 !== d) return d ? 3 : 4;
            if (yf.hasOwnProperty(a)) return gb("TAGGING", 22), yf[a] ? 3 : 4
        }
        return 0
    };
    aa.setCps = function(a, b, c, d, e) {
        var f;
        a: {
            var h = this.cps,
                l, m = h[a] || {},
                n = m.region,
                p = c && g(c) ? c.toUpperCase() : void 0;l = d.toUpperCase();
            if (Cf(p, n, l, e.toUpperCase())) {
                var q = {
                    enabled: "granted" === b,
                    region: p
                };
                if ("" !== l || !1 !== m.enabled) {
                    h[a] = q;
                    f = !0;
                    break a
                }
            }
            f = !1
        }
        f && (this.usedSetCps = !0)
    };
    aa.addListener = function(a, b) {
        this.h.push({
            consentTypes: a,
            Mk: b
        })
    };
    var Df = function(a, b) {
        for (var c = 0; c < a.h.length; ++c) {
            var d = a.h[c];
            za(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.yi = !0)
        }
    };
    Af.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.h.length; ++c) {
            var d = this.h[c];
            if (d.yi) {
                d.yi = !1;
                try {
                    d.Mk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };

    function Cf(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }
    var Ef = function(a) {
            var b = zf();
            b.accessedAny = !0;
            return (g(a) ? [a] : a).every(function(c) {
                switch (b.getConsentState(c)) {
                    case 1:
                    case 3:
                        return !0;
                    case 2:
                    case 4:
                        return !1;
                    default:
                        return !0
                }
            })
        },
        Ff = function(a) {
            var b = zf();
            b.accessedAny = !0;
            return b.getConsentState(a)
        },
        Gf = function(a) {
            var b = zf();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Hf = function() {
            if (!uf().h()) return !1;
            var a = zf();
            a.accessedAny = !0;
            return a.active
        },
        Mf = function(a, b) {
            zf().addListener(a, b)
        },
        Nf = function(a, b) {
            zf().notifyListeners(a, b)
        },
        Of = function(a,
            b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Gf(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Mf(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Pf = function(a, b) {
            function c() {
                for (var l = [], m = 0; m < e.length; m++) {
                    var n = e[m];
                    Ef(n) && !f[n] && l.push(n)
                }
                return l
            }

            function d(l) {
                for (var m = 0; m < l.length; m++) f[l[m]] = !0
            }
            var e = g(b) ? [b] : b,
                f = {},
                h = c();
            h.length !== e.length && (d(h), Mf(e, function(l) {
                function m(q) {
                    0 !== q.length && (d(q), l.consentTypes = q, a(l))
                }
                var n = c();
                if (0 !== n.length) {
                    var p = Object.keys(f).length;
                    n.length + p >= e.length ?
                        m(n) : E.setTimeout(function() {
                            m(c())
                        }, 500)
                }
            }))
        };

    function Qf() {}

    function Rf() {};
    var Sf = [K.g.F, K.g.O, K.g.K, K.g.ya],
        Tf = function(a) {
            for (var b = a[K.g.Wb], c = Array.isArray(b) ? b : [b], d = {
                    yd: 0
                }; d.yd < c.length; d = {
                    yd: d.yd
                }, ++d.yd) k(a, function(e) {
                return function(f, h) {
                    if (f !== K.g.Wb) {
                        var l = c[e.yd],
                            m = mf(),
                            n = lf["1"] || "";
                        wf = !0;
                        vf && gb("TAGGING", 20);
                        zf().declare(f, h, l, m, n)
                    }
                }
            }(d))
        },
        Uf = function(a) {
            var b = a[K.g.Wb];
            b && J(40);
            var c = a[K.g.Ag];
            c && J(41);
            for (var d = za(b) ? b : [b], e = {
                    zd: 0
                }; e.zd < d.length; e = {
                    zd: e.zd
                }, ++e.zd) k(a, function(f) {
                return function(h, l) {
                    if (h !== K.g.Wb && h !== K.g.Ag) {
                        var m = d[f.zd],
                            n = Number(c),
                            p = mf(),
                            q = lf["1"] || "";
                        vf = !0;
                        wf && gb("TAGGING", 20);
                        zf().default(h, l, m, p, q, n)
                    }
                }
            }(e))
        },
        Vf = function(a, b) {
            k(a, function(c, d) {
                vf = !0;
                wf && gb("TAGGING", 20);
                zf().update(c, d)
            });
            Nf(b.eventId, b.priorityId)
        },
        Wf = function(a) {
            for (var b = a[K.g.Wb], c = Array.isArray(b) ? b : [b], d = {
                    Ad: 0
                }; d.Ad < c.length; d = {
                    Ad: d.Ad
                }, ++d.Ad) k(a, function(e) {
                return function(f, h) {
                    if (f !== K.g.Wb) {
                        var l = c[e.Ad],
                            m = mf(),
                            n = lf["1"] || "";
                        zf().setCps(f, h, l, m, n)
                    }
                }
            }(d))
        },
        R = function(a) {
            Array.isArray(a) || (a = [a]);
            return a.every(function(b) {
                return Ef(b)
            })
        },
        Xf = function(a,
            b) {
            Pf(a, b)
        },
        Yf = function(a, b) {
            Of(a, b)
        },
        Zf = function() {
            var a = [K.g.F, K.g.ya, K.g.K];
            zf().waitForUpdate(a, 500)
        },
        $f = function(a) {
            for (var b = ia(a), c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                zf().clearTimeout(d, void 0)
            }
            Nf()
        };
    var ag = function() {
        function a(b) {
            xe.pscdl = b
        }
        if (void 0 === xe.pscdl) try {
            "cookieDeprecationLabel" in Qb ? (a("pending"), Qb.cookieDeprecationLabel.getValue().then(a)) : a("noapi")
        } catch (b) {
            a("error")
        }
    };
    var bg = /[A-Z]+/,
        cg = /\s/,
        dg = function(a, b) {
            if (g(a)) {
                a = Ja(a);
                var c = a.indexOf("-");
                if (!(0 > c)) {
                    var d = a.substring(0, c);
                    if (bg.test(d)) {
                        var e = a.substring(c + 1),
                            f;
                        if (b) {
                            var h = function(n) {
                                var p = n.indexOf("/");
                                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                            };
                            f = h(e);
                            if ("DC" === d && 2 === f.length) {
                                var l = h(f[1]);
                                2 === l.length && (f[1] = l[0], f.push(l[1]))
                            }
                        } else {
                            f = e.split("/");
                            for (var m = 0; m < f.length; m++)
                                if (!f[m] || cg.test(f[m]) && ("AW" !== d || 1 !== m)) return
                        }
                        return {
                            id: a,
                            prefix: d,
                            Z: d + "-" + f[0],
                            N: f
                        }
                    }
                }
            }
        },
        fg = function(a, b) {
            for (var c = {}, d = 0; d < a.length; ++d) {
                var e = dg(a[d], b);
                e && (c[e.id] = e)
            }
            eg(c);
            var f = [];
            k(c, function(h, l) {
                f.push(l)
            });
            return f
        };

    function eg(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.N[1] && b.push(d.Z)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var gg = function(a) {
            var b = String(a[mc.ka] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        hg = 0 <= E.location.search.indexOf("?gtm_latency=") || 0 <= E.location.search.indexOf("&gtm_latency=");
    var jg = function(a) {
            var b = ig();
            b.pending || (b.pending = []);
            Aa(b.pending, function(c) {
                return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
            }) || b.pending.push({
                target: a,
                onLoad: void 0
            })
        },
        kg = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = [];
            this.siloed = []
        },
        ig = function() {
            var a = Sb("google_tag_data", {}),
                b = a.tidr;
            b || (b = new kg, a.tidr = b);
            return b
        };
    var lg = {},
        mg = !1,
        ng = {
            ctid: "GTM-W8KNLGB",
            Ge: "30808714",
            wi: "GTM-W8KNLGB",
            xi: "GTM-W8KNLGB"
        };
    lg.kd = Ga("");
    var qg = function() {
            var a = og();
            return mg ? a.map(pg) : a
        },
        sg = function() {
            var a = rg();
            return mg ? a.map(pg) : a
        },
        ug = function() {
            return tg(ng.ctid)
        },
        vg = function() {
            return tg(ng.Ge || "_" + ng.ctid)
        },
        og = function() {
            return ng.wi ? ng.wi.split("|") : [ng.ctid]
        },
        rg = function() {
            return ng.xi ? ng.xi.split("|") : []
        },
        wg = function(a) {
            var b = ig();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        },
        tg = function(a) {
            return mg ? pg(a) : a
        },
        pg = function(a) {
            return "siloed_" + a
        },
        xg = function(a) {
            a = String(a);
            return mg && 0 === a.indexOf("siloed_") ?
                a.substring(7) : a
        },
        yg = function() {
            var a = !1;
            if (a) {
                var b = ig();
                if (b.siloed) {
                    for (var c = [], d = og(), e = rg(), f = {}, h = 0; h < b.siloed.length; f = {
                            He: void 0
                        }, h++) f.He = b.siloed[h], !mg && Aa(f.He.isDestination ? e : d, function(l) {
                        return function(m) {
                            return m === l.He.ctid
                        }
                    }(f)) ? mg = !0 : c.push(f.He);
                    b.siloed = c
                }
            }
        };

    function zg() {
        var a = ig();
        if (a.pending) {
            for (var b, c = [], d = !1, e = qg(), f = sg(), h = {}, l = 0; l < a.pending.length; h = {
                    Ld: void 0
                }, l++) h.Ld = a.pending[l], Aa(h.Ld.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.Ld.target.ctid
                }
            }(h)) ? d || (b = h.Ld.onLoad, d = !0) : c.push(h.Ld);
            a.pending = c;
            if (b) try {
                b(vg())
            } catch (m) {}
        }
    }
    var Ag = function() {
            for (var a = ig(), b = qg(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = qg(), d.destinations = sg()) : a.container[b[c]] = {
                    state: 2,
                    containers: qg(),
                    destinations: sg()
                }
            }
            for (var e = sg(), f = 0; f < e.length; f++) {
                var h = a.destination[e[f]];
                h && 0 === h.state && J(93);
                h ? (h.state = 2, h.containers = qg(), h.destinations = sg()) : a.destination[e[f]] = {
                    state: 2,
                    containers: qg(),
                    destinations: sg()
                }
            }
            a.canonical[vg()] = {};
            zg()
        },
        Bg = function(a) {
            return !!ig().container[a]
        },
        Cg = function() {
            return {
                ctid: ug(),
                isDestination: lg.kd
            }
        };

    function Dg(a) {
        var b = ig();
        (b.siloed = b.siloed || []).push(a)
    }
    var Eg = function() {
            var a = ig().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        Fg = function() {
            var a = {};
            k(ig().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        },
        Gg = function(a) {
            return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
        };
    var Hg = {
            sampleRate: "0.005000",
            Ti: "",
            Si: Number("5"),
            sn: Number("")
        },
        Ig = [];

    function Jg(a) {
        Ig.push(a)
    }
    var Kg = !1,
        Lg;
    if (!(Lg = hg)) {
        var Mg = Math.random(),
            Ng = Hg.sampleRate;
        Lg = Mg < Number(Ng)
    }
    var Og = Lg,
        Pg = "https://www.googletagmanager.com/a?id=" + ng.ctid,
        Qg = void 0,
        Rg = {},
        Sg = void 0,
        Tg = new function() {
            var a = 5;
            0 < Hg.Si && (a = Hg.Si);
            this.h = 0;
            this.C = [];
            this.s = a
        },
        Ug = 1E3;

    function Vg(a, b) {
        var c = Qg;
        if (void 0 === c)
            if (b) c = Qe();
            else return "";
        for (var d = [Pg], e = 0; e < Ig.length; e++) {
            var f = Ig[e]({
                eventId: c,
                Vb: !!a,
                Hi: function() {
                    Kg = !0
                }
            });
            "&" === f[0] && d.push(f)
        }
        d.push("&z=0");
        return d.join("")
    }

    function Wg() {
        Sg && (E.clearTimeout(Sg), Sg = void 0);
        if (void 0 !== Qg && Xg) {
            var a;
            (a = Rg[Qg]) || (a = Tg.h < Tg.s ? !1 : 1E3 > La() - Tg.C[Tg.h % Tg.s]);
            if (a || 0 >= Ug--) J(1), Rg[Qg] = !0;
            else {
                var b = Tg.h++ % Tg.s;
                Tg.C[b] = La();
                var c = Vg(!0);
                $b(c);
                if (Kg) {
                    var d = c.replace("/a?", "/td?");
                    $b(d)
                }
                Xg = Kg = !1
            }
        }
    }
    var Xg = !1;

    function Yg(a) {
        Rg[a] || (a !== Qg && (Wg(), Qg = a), Xg = !0, Sg || (Sg = E.setTimeout(Wg, 500)), 2022 <= Vg().length && Wg())
    }
    var Zg = Ba();

    function $g() {
        Zg = Ba()
    }

    function ah() {
        return ["&v=3&t=t", "&pid=" + Zg].join("")
    };
    var bh = "",
        ch = [];

    function dh(a) {
        var b = "";
        bh && (b = "&dl=" + encodeURIComponent(bh));
        0 < ch.length && (b += "&tdp=" + ch.join("."));
        a.Vb && (bh = "", ch.length = 0, b && a.Hi());
        return b
    };
    var eh = [];

    function fh(a) {
        if (!eh.length) return "";
        var b = "&tdc=" + eh.join("!");
        a.Vb && (a.Hi(), eh.length = 0);
        return b
    };
    var gh = /:[0-9]+$/,
        hh = /^\d+\.fls\.doubleclick\.net$/,
        ih = function(a, b, c) {
            for (var d = ia(a.split("&")), e = d.next(); !e.done; e = d.next()) {
                var f = ia(e.value.split("=")),
                    h = f.next().value,
                    l = ja(f);
                if (decodeURIComponent(h.replace(/\+/g, " ")) === b) {
                    var m = l.join("=");
                    return c ? m : decodeURIComponent(m.replace(/\+/g, " "))
                }
            }
        },
        lh = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = jh(a.protocol) || jh(E.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : E.location.port) ||
                ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || E.location.hostname).replace(gh, "").toLowerCase());
            return kh(a, b, c, d, e)
        },
        kh = function(a, b, c, d, e) {
            var f, h = jh(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = mh(a);
                    break;
                case "protocol":
                    f = h;
                    break;
                case "host":
                    f = a.hostname.replace(gh, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === h ? 80 : "https" ===
                        h ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || gb("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = ih(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        jh = function(a) {
            return a ? a.replace(":", "").toLowerCase() :
                ""
        },
        mh = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        nh = {},
        oh = 0,
        qh = function(a) {
            if (fd(17)) {
                var b = nh[a];
                b || (b = ph(a), 5 > oh && (nh[a] = b, oh++));
                return b
            }
            return ph(a)
        },
        ph = function(a) {
            var b = F.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || gb("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(gh, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        rh = function(a) {
            function b(n) {
                var p =
                    n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = qh(a),
                f = a.split(/[?#]/)[0],
                h = e.search,
                l = e.hash;
            "?" === h[0] && (h = h.substring(1));
            "#" === l[0] && (l = l.substring(1));
            h = c(h);
            l = c(l);
            "" !== h && (h = "?" + h);
            "" !== l && (l = "#" + l);
            var m = "" + f + h + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        sh = function(a) {
            var b = qh(E.location.href),
                c = lh(b,
                    "host", !1);
            if (c && c.match(hh)) {
                var d = lh(b, "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var th = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        zh = {},
        Ah = Object.freeze((zh[K.g.Oa] = !0, zh)),
        Bh = 0 <= F.location.search.indexOf("?gtm_diagnostics=") || 0 <= F.location.search.indexOf("&gtm_diagnostics="),
        Dh = function(a, b, c) {
            if (Og && "config" === a && !(1 < dg(b).N.length)) {
                var d, e = Sb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = A(c.J);
                A(c.h, f);
                var h = [],
                    l;
                for (l in d) {
                    var m = Ch(d[l], f);
                    m.length && (Bh && console.log(m), h.push(l))
                }
                h.length && (h.length && Og && eh.push(b + "*" + h.join(".")), gb("TAGGING", th[F.readyState] ||
                    14));
                d[b] = f
            }
        };

    function Eh(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Ch(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? Ah[q] : t
            },
            f;
        for (f in Eh(a, b)) {
            var h = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === Wa(l) || "array" === Wa(l),
                p = "object" === Wa(m) || "array" === Wa(m);
            if (n && p) Ch(l, m, c, h);
            else if (n || p || l !== m) c[h] = !0
        }
        return Object.keys(c)
    };
    var Fh = function(a, b, c, d, e, f, h, l, m, n, p) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.M = d;
            this.C = e;
            this.J = f;
            this.s = h;
            this.eventMetadata = l;
            this.onSuccess = m;
            this.onFailure = n;
            this.isGtmEvent = p
        },
        Gh = function(a, b) {
            var c = [];
            switch (b) {
                case 3:
                    c.push(a.h);
                    c.push(a.M);
                    c.push(a.C);
                    c.push(a.J);
                    c.push(a.s);
                    break;
                case 2:
                    c.push(a.h);
                    break;
                case 1:
                    c.push(a.M);
                    c.push(a.C);
                    c.push(a.J);
                    c.push(a.s);
                    break;
                case 4:
                    c.push(a.h), c.push(a.M), c.push(a.C), c.push(a.J)
            }
            return c
        },
        U = function(a, b, c, d) {
            for (var e = ia(Gh(a, void 0 === d ? 3 :
                    d)), f = e.next(); !f.done; f = e.next()) {
                var h = f.value;
                if (void 0 !== h[b]) return h[b]
            }
            return c
        },
        Hh = function(a) {
            for (var b = {}, c = Gh(a, 4), d = ia(c), e = d.next(); !e.done; e = d.next())
                for (var f = Object.keys(e.value), h = ia(f), l = h.next(); !l.done; l = h.next()) b[l.value] = 1;
            return Object.keys(b)
        },
        Ih = function(a, b, c) {
            function d(n) {
                Za(n) && k(n, function(p, q) {
                    f = !0;
                    e[p] = q
                })
            }
            var e = {},
                f = !1,
                h = Gh(a, void 0 === c ? 3 : c);
            h.reverse();
            for (var l = ia(h), m = l.next(); !m.done; m = l.next()) d(m.value[b]);
            return f ? e : void 0
        },
        Jh = function(a) {
            for (var b = [K.g.Hc,
                    K.g.Dc, K.g.Ec, K.g.Fc, K.g.Gc, K.g.Ic, K.g.Jc
                ], c = Gh(a, 3), d = ia(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, h = {}, l = !1, m = ia(b), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    void 0 !== f[p] && (h[p] = f[p], l = !0)
                }
                var q = l ? h : void 0;
                if (q) return q
            }
            return {}
        },
        Kh = function(a, b) {
            this.xe = a;
            this.ye = b;
            this.C = {};
            this.xb = {};
            this.h = {};
            this.J = {};
            this.qc = {};
            this.wb = {};
            this.s = {};
            this.Fa = function() {};
            this.T = function() {};
            this.M = !1
        },
        Lh = function(a, b) {
            a.C = b;
            return a
        },
        Mh = function(a, b) {
            a.xb = b;
            return a
        },
        Nh = function(a, b) {
            a.h = b;
            return a
        },
        Oh = function(a, b) {
            a.J = b;
            return a
        },
        Ph = function(a, b) {
            a.qc = b;
            return a
        },
        Qh = function(a, b) {
            a.wb = b;
            return a
        },
        Rh = function(a, b) {
            a.s = b || {};
            return a
        },
        Sh = function(a, b) {
            a.Fa = b;
            return a
        },
        Th = function(a, b) {
            a.T = b;
            return a
        },
        Uh = function(a, b) {
            a.M = b;
            return a
        },
        Vh = function(a) {
            return new Fh(a.xe, a.ye, a.C, a.xb, a.h, a.J, a.wb, a.s, a.Fa, a.T, a.M)
        };
    var Wh = {};

    function Xh(a, b, c) {
        Og && void 0 !== a && (Wh[a] = Wh[a] || [], Wh[a].push(c + b), Yg(a))
    }

    function Yh(a) {
        var b = a.eventId,
            c = a.Vb,
            d = "",
            e = Wh[b] || [];
        e.length && (d += "&epr=" + e.join("."));
        c && delete Wh[b];
        return d
    };
    var $h = function(a, b, c, d) {
            var e = dg(c, d.isGtmEvent);
            e && Zh.push("event", [b, a], e, d)
        },
        ai = function(a, b, c, d) {
            var e = dg(c, d.isGtmEvent);
            e && Zh.push("get", [a, b], e, d)
        },
        bi = function() {
            this.status = 1;
            this.J = {};
            this.h = {};
            this.M = {};
            this.T = null;
            this.C = {};
            this.s = !1
        },
        ci = function(a, b, c, d) {
            var e = La();
            this.type = a;
            this.C = e;
            this.h = b;
            this.s = c;
            this.messageContext = d
        },
        di = function() {
            this.s = {};
            this.C = {};
            this.h = []
        },
        ei = function(a, b) {
            var c = b.Z;
            return a.s[c] = a.s[c] || new bi
        },
        fi = function(a, b, c, d) {
            if (d.h) {
                var e = ei(a, d.h),
                    f = e.T;
                if (f) {
                    var h =
                        A(c),
                        l = A(e.J[d.h.id]),
                        m = A(e.C),
                        n = A(e.h),
                        p = A(a.C),
                        q = {};
                    if (Og) try {
                        q = A(Ue)
                    } catch (v) {
                        J(72)
                    }
                    var r = d.h.prefix,
                        t = function(v) {
                            Xh(d.messageContext.eventId, r, v)
                        },
                        u = Vh(Uh(Th(Sh(Rh(Ph(Oh(Qh(Nh(Mh(Lh(new Kh(d.messageContext.eventId, d.messageContext.priorityId), h), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("2");
                                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                            }
                        }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        Xh(d.messageContext.eventId, r, "1"), Dh(d.type, d.h.id, u), f(d.h.id, b, d.C, u)
                    } catch (v) {
                        Xh(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    di.prototype.register = function(a, b, c) {
        var d = ei(this, a);
        3 !== d.status && (d.T = b, d.status = 3, c && (A(d.h, c), d.h = c), this.flush())
    };
    di.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === ei(this, c).status && (ei(this, c).status = 2, this.push("require", [{}], c, {})), ei(this, c).s && (d.deferrable = !1));
        this.h.push(new ci(a, c, b, d));
        d.deferrable || this.flush()
    };
    di.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; e = {
                Lb: void 0,
                Qf: void 0
            }) {
            var f = this.h[0],
                h = f.h;
            if (f.messageContext.deferrable) !h || ei(this, h).s ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== ei(this, h).status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        k(f.s[0], function(r, t) {
                            A(Ra(r, t), b.C)
                        });
                        break;
                    case "config":
                        var l = ei(this, h);
                        e.Lb = {};
                        k(f.s[0], function(r) {
                            return function(t, u) {
                                A(Ra(t, u), r.Lb)
                            }
                        }(e));
                        var m = !!e.Lb[K.g.Jb];
                        delete e.Lb[K.g.Jb];
                        var n = h.Z === h.id;
                        m || (n ? l.C = {} : l.J[h.id] = {});
                        l.s && m || fi(this, K.g.oa, e.Lb, f);
                        l.s = !0;
                        n ? A(e.Lb, l.C) : (A(e.Lb, l.J[h.id]), J(70));
                        d = !0;
                        break;
                    case "event":
                        e.Qf = {};
                        k(f.s[0], function(r) {
                            return function(t, u) {
                                A(Ra(t, u), r.Qf)
                            }
                        }(e));
                        fi(this, f.s[1], e.Qf, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[K.g.eb] = f.s[0], p[K.g.ob] = f.s[1], p);
                        fi(this, K.g.La, q, f)
                }
                this.h.shift();
                gi(this, f)
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var gi = function(a, b) {
            if ("require" !== b.type)
                if (b.h)
                    for (var c = ei(a, b.h).M[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.s)
                        if (a.s.hasOwnProperty(e)) {
                            var f = a.s[e];
                            if (f && f.M)
                                for (var h = f.M[b.type] || [], l = 0; l < h.length; l++) h[l]()
                        }
        },
        hi = function(a, b) {
            var c = Zh,
                d = A(b);
            A(ei(c, a).h, d);
            ei(c, a).h = d
        },
        Zh = new di;

    function ii(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var ji = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        ki = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var li = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function mi() {
        return ob ? !!vb && !!vb.platform : !1
    }

    function ni() {
        return yb("iPhone") && !yb("iPod") && !yb("iPad")
    }

    function oi() {
        ni() || yb("iPad") || yb("iPod")
    };
    Ab();
    zb() || yb("Trident") || yb("MSIE");
    yb("Edge");
    !yb("Gecko") || -1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") || yb("Trident") || yb("MSIE") || yb("Edge"); - 1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") && yb("Mobile");
    mi() || yb("Macintosh");
    mi() || yb("Windows");
    (mi() ? "Linux" === vb.platform : yb("Linux")) || mi() || yb("CrOS");
    mi() || yb("Android");
    ni();
    yb("iPad");
    yb("iPod");
    oi();
    ub().toLowerCase().indexOf("kaios");
    var pi = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var h = a.charCodeAt(e - 1);
                if (38 == h || 63 == h) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        qi = /#|$/,
        ri = function(a, b) {
            var c = a.search(qi),
                d = pi(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        si = /[?&]($|#)/,
        ti = function(a, b, c) {
            for (var d, e = a.search(qi), f = 0, h, l = []; 0 <= (h = pi(a, f, b, e));) l.push(a.substring(f,
                h)), f = Math.min(a.indexOf("&", h) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(si, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var ui = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        sf(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        vi = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function wi(a) {
        if (!a || !F.head) return null;
        var b = xi("META");
        F.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var yi = function(a) {
            if (E.top == E) return 0;
            if (void 0 === a ? 0 : a) {
                var b = E.location.ancestorOrigins;
                if (b) return b[b.length - 1] == E.location.origin ? 1 : 2
            }
            return ui(E.top) ? 1 : 2
        },
        xi = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function zi(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = xi("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var h = a.google_image_requests,
                        l = jb(h, e);
                    0 <= l && Array.prototype.splice.call(h, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            li(e, "load", f);
            li(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Bi = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            vi(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Ai(c, b)
        },
        Ai = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else zi(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Ci = function() {};
    var Di = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Ei = function(a, b) {
            b = void 0 === b ? {} : b;
            this.s = a;
            this.h = null;
            this.M = {};
            this.Fa = 0;
            var c;
            this.T = null != (c = b.qm) ? c : 500;
            var d;
            this.J = null != (d = b.hn) ? d : !1;
            this.C = null
        };
    ra(Ei, Ci);
    var Gi = function(a) {
        return "function" === typeof a.s.__tcfapi || null != Fi(a)
    };
    Ei.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.J
            },
            d = ki(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.T && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.T));
        var f = function(h, l) {
            clearTimeout(e);
            h ? (c = h, c.internalErrorState = Di(c), c.internalBlockOnErrors = b.J, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Hi(this, "addEventListener", f)
        } catch (h) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Ei.prototype.removeEventListener = function(a) {
        a && a.listenerId && Hi(this, "removeEventListener", null, a.listenerId)
    };
    var Ji = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var h = e;
            if (0 === h) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === h && (l = 1)) : 3 === c && (l = 1, 1 === h && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = Ii(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Ii(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? Ii(a.purpose.legitimateInterests,
                b) && Ii(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Ii = function(a, b) {
            return !(!a || !a[b])
        },
        Hi = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.s.__tcfapi) {
                var e = a.s.__tcfapi;
                e(b, 2, c, d)
            } else if (Fi(a)) {
                Ki(a);
                var f = ++a.Fa;
                a.M[f] = c;
                if (a.h) {
                    var h = {};
                    a.h.postMessage((h.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, h), "*")
                }
            } else c({}, !1)
        },
        Fi = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.s, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var h = c.parent;
                            if (h && h != c) {
                                f = h;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Ki = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.M[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, li(a.s, "message", a.C))
        },
        Li = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Di(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Bi({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Mi = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function Ni() {
        var a = xe.tcf || {};
        return xe.tcf = a
    }
    var Oi = function() {
            return new Ei(E, {
                qm: -1
            })
        },
        Ui = function() {
            var a = Ni(),
                b = Oi();
            Gi(b) && !Pi() && !Qi() && J(124);
            if (!a.active && Gi(b)) {
                Pi() && (a.active = !0, a.Ab = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, zf().active = !0, a.tcString = "tcunavailable");
                Zf();
                try {
                    b.addEventListener(function(c) {
                        if (0 !== c.internalErrorState) Ri(a), $f([K.g.F, K.g.ya, K.g.K]), zf().active = !0;
                        else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, Qi() && (a.active = !0), !Si(c) || Pi() || Qi()) {
                            a.tcfPolicyVersion =
                                c.tcfPolicyVersion;
                            var d;
                            if (!1 === c.gdprApplies) {
                                var e = {},
                                    f;
                                for (f in Mi) Mi.hasOwnProperty(f) && (e[f] = !0);
                                d = e;
                                b.removeEventListener(c)
                            } else if (Si(c)) {
                                var h = {},
                                    l;
                                for (l in Mi)
                                    if (Mi.hasOwnProperty(l))
                                        if ("1" === l) {
                                            var m, n = c,
                                                p = {
                                                    Rk: !0
                                                };
                                            p = void 0 === p ? {} : p;
                                            m = Li(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p.Rk || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Ji(n, "1", 0) : !1;
                                            h["1"] = m
                                        } else h[l] = Ji(c, l, Mi[l]);
                                d = h
                            }
                            if (d) {
                                a.tcString = c.tcString || "tcempty";
                                a.Ab = d;
                                var q = {},
                                    r = (q[K.g.F] =
                                        a.Ab["1"] ? "granted" : "denied", q);
                                !0 !== a.gdprApplies ? ($f([K.g.F, K.g.ya, K.g.K]), zf().active = !0) : (r[K.g.ya] = a.Ab["3"] && a.Ab["4"] ? "granted" : "denied", "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion ? r[K.g.K] = a.Ab["1"] && a.Ab["7"] ? "granted" : "denied" : $f([K.g.K]), Vf(r, {
                                    eventId: 0
                                }, {
                                    gdprApplies: a ? a.gdprApplies : void 0,
                                    tcString: Ti() || ""
                                }))
                            }
                        } else $f([K.g.F, K.g.ya, K.g.K])
                    })
                } catch (c) {
                    Ri(a), $f([K.g.F, K.g.ya, K.g.K]), zf().active = !0
                }
            }
        };

    function Ri(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Si(a) {
        return "tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus || "cmpuishown" === a.eventStatus
    }
    var Pi = function() {
        return !0 === E.gtag_enable_tcf_support
    };

    function Qi() {
        return !0 === Ni().enableAdvertiserConsentMode
    }
    var Ti = function() {
            var a = Ni();
            if (a.active) return a.tcString
        },
        Vi = function() {
            var a = Ni();
            if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0"
        },
        Wi = function(a) {
            if (!Mi.hasOwnProperty(String(a))) return !0;
            var b = Ni();
            return b.active && b.Ab ? !!b.Ab[String(a)] : !0
        };
    var Xi = [K.g.F, K.g.O, K.g.K, K.g.ya],
        Yi = {},
        Zi = (Yi[K.g.F] = 1, Yi[K.g.O] = 2, Yi);

    function $i(a) {
        if (void 0 === a) return 0;
        switch (U(a, K.g.ja)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }
    var aj = function(a) {
            var b = $i(a);
            if (3 === b) return !1;
            switch (Ff(K.g.ya)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                    return !1;
                case 4:
                    return 2 === b;
                case 0:
                    return !0;
                default:
                    return !1
            }
        },
        bj = function() {
            return Hf() || !Ef(K.g.F) || !Ef(K.g.O)
        },
        cj = function() {
            var a = {},
                b;
            for (b in Zi) Zi.hasOwnProperty(b) && (a[Zi[b]] = Ff(b));
            return "G1" + lc(a[1] || 0) + lc(a[2] || 0)
        },
        dj = {},
        ej = (dj[K.g.F] = 0, dj[K.g.O] = 1, dj[K.g.K] = 2, dj[K.g.ya] = 3, dj);

    function fj(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var gj = function(a) {
            for (var b = "1", c = 0; c < Xi.length; c++) {
                var d = b,
                    e, f = Xi[c],
                    h = xf[f];
                e = void 0 === h ? 0 : ej.hasOwnProperty(h) ? 12 | ej[h] : 8;
                var l = zf();
                l.accessedAny = !0;
                var m = l.entries[f] || {};
                e = e << 2 | fj(m.implicit);
                b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [fj(m.declare) << 4 | fj(m.default) << 2 | fj(m.update)])
            }
            var n = b,
                p;
            p = "" + (Hf() << 2 | $i(a));
            return n + p
        },
        hj = function() {
            if (!Ef(K.g.K)) return "-";
            var a = {},
                b = zf().cps,
                c;
            for (c in b) b.hasOwnProperty(c) &&
                (a[c] = {
                    enabled: b[c].enabled,
                    region: b[c].region
                });
            for (var d = {}, e = ia(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
                var h = f.value;
                d[h] = a[h].enabled
            }
            for (var l = "", m = ia(Object.keys(ve)), n = m.next(); !n.done; n = m.next()) {
                var p = n.value;
                !1 !== d[p] && (l += ve[p])
            }
            return "" === l ? "-" : l
        },
        ij = function() {
            return lf["6"] || (Pi() || Qi()) && "1" === Vi() ? "1" : "0"
        },
        jj = function() {
            return (lf["6"] ? !0 : !(!Pi() && !Qi()) && "1" === Vi()) || zf().usedSetCps || !Ef(K.g.K)
        },
        kj = function() {
            var a = "0",
                b = "0",
                c;
            var d = Ni();
            c = d.active ? d.cmpId : void 0;
            "number" ===
            typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
            var e = "0",
                f;
            var h = Ni();
            f = h.active ? h.tcfPolicyVersion : void 0;
            "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
            var l = 0;
            lf["6"] && (l |= 1);
            "1" === Vi() && (l |= 2);
            Pi() && (l |= 4);
            var m;
            var n = Ni();
            m = void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
            "1" === m && (l |= 8);
            zf().waitPeriodTimedOut && (l |= 16);
            return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [l]
        };
    var lj = function() {
        var a = !1;
        return a
    };
    var mj = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        nj = function(a, b) {
            var c = ng.ctid.split("-")[0].toUpperCase(),
                d = {};
            d.ctid = ng.ctid;
            d.fm = we.nd;
            d.hm = we.Gf;
            d.Hl = lg.kd ? 2 : 1;
            d.di = ng.Ge;
            d.di !== a && (d.We = a);
            P(71) ? d.Ki = 2 : P(72) && (d.Ki = 1);
            De ? (d.Ue = mj[c], d.Ue || (d.Ue = 0)) : d.Ue = Je ? 13 : 10;
            He ? d.ig = 1 : lj() ? d.ig = 2 : d.ig = 3;
            var e;
            var f = d.Ue,
                h = d.ig;
            void 0 === f ? e = "" : (h || (h = 0), e = "" + Cd(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f << 2 | h]);
            var l = d.gn,
                m = 4 + e + (l ? "" + Cd(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [l] :
                    ""),
                n, p = d.hm;
            n = p && Bd.test(p) ? "" + Cd(3, 2) + p : "";
            var q, r = d.fm;
            q = r ? "" + Cd(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [r] : "";
            var t;
            var u = d.ctid;
            if (u && b) {
                var v = u.split("-"),
                    w = v[0].toUpperCase();
                if ("GTM" !== w && "OPT" !== w) t = "";
                else {
                    var x = v[1];
                    t = "" + Cd(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + x.length] + (d.Hl || 0) + x
                }
            } else t = "";
            var y = d.Ki,
                z = d.di,
                B = d.We,
                C = d.qn;
            return m + n + q + t + (y ? "" + Cd(6, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [y] :
                "") + (z ? "" + Cd(7, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [z.length] + z : "") + (B ? "" + Cd(8, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [B.length] + B : "") + (C ? "" + Cd(9, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [C.length] + C : "")
        };
    var oj = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var pj = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("="),
                l = h[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var sj = function(a, b, c, d) {
            return qj(d) ? pj(a, String(b || rj()), c) : []
        },
        vj = function(a, b, c, d, e) {
            if (qj(e)) {
                var f = tj(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = uj(f, function(h) {
                        return h.Ie
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = uj(f, function(h) {
                        return h.Kd
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function wj(a, b, c, d) {
        var e = rj(),
            f = window;
        "null" !== f.origin && (f.document.cookie = a);
        var h = rj();
        return e != h || void 0 != c && 0 <= sj(b, h, !1, d).indexOf(c)
    }
    var Aj = function(a, b, c) {
            function d(t, u, v) {
                if (null == v) return delete h[u], t;
                h[u] = v;
                return t + "; " + u + "=" + v
            }

            function e(t, u) {
                if (null == u) return delete h[u], t;
                h[u] = !0;
                return t + "; " + u
            }
            if (!qj(c.ib)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = xj(b), f = a + "=" + b);
            var h = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.mn);
            f = d(f, "samesite",
                c.on);
            c.pn && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = yj(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        r = d(f, "domain", q);
                    r = e(r, c.flags);
                    if (!zj(q, c.path) && wj(r, a, b, c.ib)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return zj(m, c.path) ? 1 : wj(f, a, b, c.ib) ? 0 : 1
        },
        Bj = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Aj(a, b, c)
        };

    function uj(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var l = a[h],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function tj(a, b, c) {
        for (var d = [], e = sj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split("."),
                l = h.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = h.shift();
                m && (m = m.split("-"), d.push({
                    id: h.join("."),
                    Ie: 1 * m[0] || 1,
                    Kd: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var xj = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Cj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Dj = /(^|\.)doubleclick\.net$/i,
        zj = function(a, b) {
            return Dj.test(window.document.location.hostname) || "/" === b && Cj.test(a)
        },
        rj = function() {
            return "null" !== window.origin ? window.document.cookie : ""
        },
        yj = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Dj.test(e) || Cj.test(e) || a.push("none");
            return a
        },
        qj = function(a) {
            return a && uf().h() ? (g(a) ? [a] : a).every(function(b) {
                return Gf(b) && Ef(b)
            }) : !0
        },
        Ej = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Fj = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };
    var Gj = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ oj(a) & 2147483647) : String(b)
        },
        Hj = function(a) {
            return [Gj(a), Math.round(La() / 1E3)].join(".")
        },
        Ij = function(a, b, c, d, e) {
            var f = Ej(b);
            return vj(a, f, Fj(c), d, e)
        },
        Jj = function(a, b, c, d) {
            var e = "" + Ej(c),
                f = Fj(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        };

    function Kj(a, b, c, d) {
        var e, f = Number(null != a.zb ? a.zb : void 0);
        0 !== f && (e = new Date((b || La()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            ib: d
        }
    };
    var Lj;
    var Pj = function() {
            var a = Mj,
                b = Nj,
                c = Oj(),
                d = function(h) {
                    a(h.target || h.srcElement || {})
                },
                e = function(h) {
                    b(h.target || h.srcElement || {})
                };
            if (!c.init) {
                ac(F, "mousedown", d);
                ac(F, "keyup", d);
                ac(F, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Qj = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Oj().decorators.push(f)
        },
        Rj = function(a, b, c) {
            for (var d = Oj().decorators, e = {}, f = 0; f < d.length; ++f) {
                var h =
                    d[f],
                    l;
                if (l = !c || h.forms) a: {
                    var m = h.domains,
                        n = a,
                        p = !!h.sameHost;
                    if (m && (p || n !== F.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var r = h.placement;
                    void 0 == r && (r = h.fragment ? 2 : 1);
                    r === b && Oa(e, h.callback())
                }
            }
            return e
        };

    function Oj() {
        var a = Sb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Sj = /(.*?)\*(.*?)\*(.*)/,
        Tj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Uj = /^(?:www\.|m\.|amp\.)+/,
        Vj = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Wj(a) {
        var b = Vj.exec(a);
        if (b) return {
            og: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function Xj(a, b) {
        var c = [Qb.userAgent, (new Date).getTimezoneOffset(), Qb.userLanguage || Qb.language, Math.floor(La() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Lj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var h = f, l = 0; 8 > l; l++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                e[f] = h
            }
            d = e
        }
        Lj = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Lj[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Yj() {
        return function(a) {
            var b = qh(E.location.href),
                c = b.search.replace("?", ""),
                d = ih(c, "_gl", !0) || "";
            a.query = Zj(d) || {};
            var e = lh(b, "fragment"),
                f;
            var h = -1;
            if (Qa(e, "_gl=")) h = 4;
            else {
                var l = e.indexOf("&_gl=");
                0 < l && (h = l + 3 + 2)
            }
            if (0 > h) f = void 0;
            else {
                var m = e.indexOf("&", h);
                f = 0 > m ? e.substring(h) : e.substring(h, m)
            }
            a.fragment = Zj(f || "") || {}
        }
    }
    var ak = function(a) {
            var b = Yj(),
                c = Oj();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Oa(d, e.query), a && Oa(d, e.fragment));
            return d
        },
        Zj = function(a) {
            try {
                var b = bk(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            h = eb(d[e + 1]);
                        c[f] = h
                    }
                    gb("TAGGING", 6);
                    return c
                }
            } catch (l) {
                gb("TAGGING", 8)
            }
        };

    function bk(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Sj.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var h = c;
            if (h && "1" === h[1]) {
                var l = h[3],
                    m;
                a: {
                    for (var n = h[2], p = 0; p < b; ++p)
                        if (n === Xj(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                gb("TAGGING", 7)
            }
        }
    }

    function ck(a, b, c, d, e) {
        function f(p) {
            var q = p,
                r = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q),
                t = q;
            if (r) {
                var u = r[2],
                    v = r[4];
                t = r[1];
                v && (t = t + u + v)
            }
            p = t;
            var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var h = Wj(c);
        if (!h) return "";
        var l = h.query || "",
            m = h.fragment || "",
            n = a + "=" + b;
        d ? 0 !== m.substring(1).length && e || (m = "#" + f(m.substring(1))) : l = "?" + f(l.substring(1));
        return "" + h.og + l + m
    }

    function dk(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var t in n)
                    if (n.hasOwnProperty(t)) {
                        r = !0;
                        break a
                    }
                r = !1
            }
            if (r) {
                var u, v = [],
                    w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        void 0 !== x && x === x && null !== x && "[object Object]" !== x.toString() && (v.push(w), v.push(db(String(x))))
                    }
                var y = v.join("*");
                u = ["1", Xj(y), y].join("*");
                d ? (fd(13) || fd(11) || !p) && ek("_gl", u, a, p, q) : fk("_gl", u, a, p, q)
            }
        }
        var d = "FORM" === (a.tagName || "").toUpperCase(),
            e = Rj(b, 1, d),
            f = Rj(b, 2, d),
            h = Rj(b, 4, d),
            l = Rj(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        fd(11) && c(h, !0, !0);
        for (var m in l) l.hasOwnProperty(m) && gk(m, l[m], a)
    }

    function gk(a, b, c) {
        "a" === c.tagName.toLowerCase() ? fk(a, b, c) : "form" === c.tagName.toLowerCase() && ek(a, b, c)
    }

    function fk(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var f;
        if (f = c.href) {
            var h;
            if (!(h = !fd(16) || d)) {
                var l = E.location.href,
                    m = Wj(c.href),
                    n = Wj(l);
                h = !(m && n && m.og === n.og && m.query === n.query && m.fragment)
            }
            f = h
        }
        if (f) {
            var p = ck(a, b, c.href, d, e);
            Lb.test(p) && (c.href = p)
        }
    }

    function ek(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if ("get" !== f || d) {
                if ("get" === f || "post" === f) {
                    var h = ck(a, b, c.action, d, e);
                    Lb.test(h) && (c.action = h)
                }
            } else {
                for (var l = c.childNodes || [], m = !1, n = 0; n < l.length; n++) {
                    var p = l[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = F.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }

    function Mj(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || dk(e, e.hostname)
            }
        } catch (h) {}
    }

    function Nj(a) {
        try {
            if (a.action) {
                var b = lh(qh(a.action), "host");
                dk(a, b)
            }
        } catch (c) {}
    }
    var hk = function(a, b, c, d) {
            Pj();
            Qj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        ik = function(a, b) {
            Pj();
            Qj(a, [kh(E.location, "host", !0)], b, !0, !0)
        },
        jk = function() {
            var a = F.location.hostname,
                b = Tj.exec(F.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    h = f[1];
                e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(Uj, ""),
                m = e.replace(Uj, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        kk = function(a, b) {
            return !1 === a ? !1 : a || b || jk()
        };
    var lk = ["1"],
        mk = {},
        nk = {},
        sk = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = ok(a.prefix);
            if (!mk[c])
                if (pk(c, a.path, a.domain)) {
                    var d = nk[ok(a.prefix)];
                    qk(a, d ? d.id : void 0, d ? d.gg : void 0)
                } else {
                    var e = sh("auiddc");
                    if (e) gb("TAGGING", 17), mk[c] = e;
                    else if (b) {
                        var f = ok(a.prefix),
                            h = Hj();
                        if (0 === rk(f, h, a)) {
                            var l = Sb("google_tag_data", {});
                            l._gcl_au || (l._gcl_au = h)
                        }
                        pk(c, a.path, a.domain)
                    }
                }
        };

    function qk(a, b, c) {
        var d = ok(a.prefix),
            e = mk[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var h = Number(f[1]) || 0;
                if (h) {
                    var l = e;
                    b && (l = e + "." + b + "." + (c ? c : Math.floor(La() / 1E3)));
                    rk(d, l, a, 1E3 * h)
                }
            }
        }
    }

    function rk(a, b, c, d) {
        var e = Jj(b, "1", c.domain, c.path),
            f = Kj(c, d);
        f.ib = tk();
        return Bj(a, e, f)
    }

    function pk(a, b, c) {
        var d = Ij(a, b, c, lk, tk());
        if (!d) return !1;
        uk(a, d);
        return !0
    }

    function uk(a, b) {
        var c = b.split(".");
        5 === c.length ? (mk[a] = c.slice(0, 2).join("."), nk[a] = {
            id: c.slice(2, 4).join("."),
            gg: Number(c[4]) || 0
        }) : 3 === c.length ? nk[a] = {
            id: c.slice(0, 2).join("."),
            gg: Number(c[2]) || 0
        } : mk[a] = b
    }

    function ok(a) {
        return (a || "_gcl") + "_au"
    }

    function vk(a) {
        function b() {
            Ef(c) && a()
        }
        var c = tk();
        Of(function() {
            b();
            Ef(c) || Pf(b, c)
        }, c)
    }

    function wk(a) {
        var b = ak(!0),
            c = ok(a.prefix);
        vk(function() {
            var d = b[c];
            if (d) {
                uk(c, d);
                var e = 1E3 * Number(mk[c].split(".")[1]);
                if (e) {
                    gb("TAGGING", 16);
                    var f = Kj(a, e);
                    f.ib = tk();
                    var h = Jj(d, "1", a.domain, a.path);
                    Bj(c, h, f)
                }
            }
        })
    }

    function xk(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var h = {},
                l = Ij(a, e.path, e.domain, lk, tk());
            l && (h[a] = l);
            return h
        };
        vk(function() {
            hk(f, b, c, d)
        })
    }

    function tk() {
        return fd(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    };
    var yk = function(a) {
        for (var b = [], c = F.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                xg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(h, l) {
            return l.timestamp - h.timestamp
        });
        return b
    };

    function zk(a, b) {
        var c = yk(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].xg] || (d[c[e].xg] = []);
                var h = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    U: f[2]
                };
                b && 3 < f.length && (h.labels = f.slice(3));
                d[c[e].xg].push(h)
            }
        }
        return d
    };
    var Ak = /^\w+$/,
        Bk = /^[\w-]+$/,
        Ck = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        };

    function Dk() {
        return fd(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    }
    var Ek = function(a) {
            return !uf().h() || Ef(a)
        },
        Fk = function(a) {
            function b() {
                var d = Ek(c);
                d && a();
                return d
            }
            var c = Dk();
            Of(function() {
                b() || Pf(b, c)
            }, c)
        },
        Hk = function(a) {
            return Gk(a).map(function(b) {
                return b.U
            })
        },
        Gk = function(a) {
            var b = [],
                c = sj(a, F.cookie, void 0, Dk());
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    U: void 0
                }, e++) {
                var f = Ik(c[e]);
                if (null != f) {
                    var h = f,
                        l = h.version;
                    d.U = h.U;
                    var m = h.timestamp,
                        n = h.labels,
                        p = Aa(b, function(q) {
                            return function(r) {
                                return r.U === q.U
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp,
                        m), p.labels = Sk(p.labels, n || [])) : b.push({
                        version: l,
                        U: d.U,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Tk(b)
        };

    function Sk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Uk(a) {
        return a && "string" == typeof a && a.match(Ak) ? a : "_gcl"
    }
    var Wk = function() {
            var a = qh(E.location.href),
                b = lh(a, "query", !1, void 0, "gclid"),
                c = lh(a, "query", !1, void 0, "gclsrc"),
                d = lh(a, "query", !1, void 0, "wbraid"),
                e = lh(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || ih(f, "gclid");
                c = c || ih(f, "gclsrc");
                d = d || ih(f, "wbraid")
            }
            return Vk(b, c, e, d)
        },
        Vk = function(a, b, c, d) {
            var e = {},
                f = function(h, l) {
                    e[l] || (e[l] = []);
                    e[l].push(h)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Bk.test(d) && (e.wbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Bk)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Yk = function(a) {
            var b = Wk();
            Fk(function() {
                Xk(b, !1, a)
            })
        };

    function Xk(a, b, c, d, e) {
        function f(w, x) {
            var y = Zk(w, h);
            y && (Bj(y, x, l), m = !0)
        }
        c = c || {};
        e = e || [];
        var h = Uk(c.prefix);
        d = d || La();
        var l = Kj(c, d, !0);
        l.ib = Dk();
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var x = ["GCL", n, w];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                r = Zk("gb", h),
                t = !1;
            if (!b)
                for (var u = Gk(r), v = 0; v < u.length; v++) u[v].U === q && u[v].labels && 0 < u[v].labels.length &&
                    (t = !0);
            t || f("gb", p(q))
        }
    }
    var al = function(a, b) {
            var c = ak(!0);
            Fk(function() {
                for (var d = Uk(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Ck[f]) {
                        var h = Zk(f, d),
                            l = c[h];
                        if (l) {
                            var m = Math.min($k(l), La()),
                                n;
                            b: {
                                for (var p = m, q = sj(h, F.cookie, void 0, Dk()), r = 0; r < q.length; ++r)
                                    if ($k(q[r]) > p) {
                                        n = !0;
                                        break b
                                    }
                                n = !1
                            }
                            if (!n) {
                                var t = Kj(b, m, !0);
                                t.ib = Dk();
                                Bj(h, l, t)
                            }
                        }
                    }
                }
                Xk(Vk(c.gclid, c.gclsrc), !1, b)
            })
        },
        Zk = function(a, b) {
            var c = Ck[a];
            if (void 0 !== c) return b + c
        },
        $k = function(a) {
            return 0 !== bl(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
        };

    function Ik(a) {
        var b = bl(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            U: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function bl(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Bk.test(a[2]) ? [] : a
    }
    var cl = function(a, b, c, d, e) {
            if (za(b) && "null" !== E.origin) {
                var f = Uk(e),
                    h = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = Zk(a[m], f);
                            if (n) {
                                var p = sj(n, F.cookie, void 0, Dk());
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                Fk(function() {
                    hk(h, b, c, d)
                })
            }
        },
        Tk = function(a) {
            return a.filter(function(b) {
                return Bk.test(b.U)
            })
        },
        dl = function(a, b) {
            if ("null" !== E.origin) {
                for (var c = Uk(b.prefix), d = {}, e = 0; e < a.length; e++) Ck[a[e]] && (d[a[e]] = Ck[a[e]]);
                Fk(function() {
                    k(d, function(f, h) {
                        var l = sj(c + h, F.cookie, void 0, Dk());
                        l.sort(function(t,
                            u) {
                            return $k(u) - $k(t)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = $k(m),
                                p = 0 !== bl(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== bl(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            Xk(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function el(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var fl = function(a) {
            function b(e, f, h) {
                h && (e[f] = h)
            }
            if (Hf()) {
                var c = Wk();
                if (el(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.wbraid);
                    ik(function() {
                        return d
                    }, 3);
                    ik(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        gl = function(a) {
            if (!fd(11)) return null;
            var b = ak(!0).gad_source;
            if (null != b) return E.location.hash = "", b;
            if (fd(12)) {
                var c = qh(E.location.href);
                b = lh(c, "query", !1, void 0, "gad_source");
                if (null != b) return b;
                var d = Wk();
                if (el(d, a)) return "0"
            }
            return null
        },
        hl = function(a) {
            var b =
                gl(a);
            null != b && ik(function() {
                var c = {};
                return c.gad_source = b, c
            }, 4)
        },
        il = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!Ek(Dk())) return e;
            var f = Gk(a);
            if (!f.length) return e;
            for (var h = 0; h < f.length; h++) - 1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var l = f[0],
                    m = f[0].timestamp,
                    n = [l.version, Math.round(m / 1E3), l.U].concat(l.labels || [], [b]).join("."),
                    p = Kj(c, m, !0);
                p.ib = Dk();
                Bj(a, n, p)
            }
            return e
        };

    function jl(a, b) {
        var c = Uk(b),
            d = Zk(a, c);
        if (!d) return 0;
        for (var e = Gk(d), f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp);
        return f
    }

    function kl(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var ll = function(a) {
        var b = Math.max(jl("aw", a), kl(Ek(Dk()) ? zk() : {}));
        return Math.max(jl("gb", a), kl(Ek(Dk()) ? zk("_gac_gb", !0) : {})) > b
    };
    var ml = function(a, b, c) {
            var d = xe.joined_auid = xe.joined_auid || {},
                e = (c ? a || "_gcl" : "") + "." + b;
            if (d[e]) return !0;
            d[e] = !0;
            return !1
        },
        nl = function() {
            var a = qh(E.location.href),
                b = lh(a, "query", !1, void 0, "gad_source");
            if (void 0 === b) {
                var c = a.hash.replace("#", "");
                b = ih(c, "gad_source")
            }
            return b
        },
        ol = function() {
            var a = qh(E.location.href).search.replace("?", "");
            return "1" === ih(a, "gad", !0)
        },
        pl = function(a) {
            var b = [];
            k(a, function(c, d) {
                d = Tk(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].U);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        rl = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = sh("gcl" + a);
                if (d) return d.split(".")
            }
            var e = Uk(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 : c;
                var f = !R(ql()) && c,
                    h;
                h = Wk()[a] || [];
                if (0 < h.length) return f ? ["0"] : h
            }
            var l = Zk(a, e);
            return l ? Hk(l) : []
        },
        sl = function(a) {
            var b = ql();
            Yf(function() {
                a();
                R(b) || Pf(a, b)
            }, b)
        },
        ql = function() {
            return P(45) ? [K.g.F, K.g.K] : [K.g.F]
        },
        tl = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        ul = /^www.googleadservices.com$/,
        vl = function(a, b) {
            return rl("aw", a, b)
        },
        wl = function(a, b) {
            return rl("dc",
                a, b)
        },
        xl = function(a) {
            var b = sh("gac");
            return b ? !R(ql()) && a ? "0" : decodeURIComponent(b) : pl(Ek(Dk()) ? zk() : {})
        },
        yl = function(a) {
            var b = sh("gacgb");
            return b ? !R(ql()) && a ? "0" : decodeURIComponent(b) : pl(Ek(Dk()) ? zk("_gac_gb", !0) : {})
        },
        zl = function(a, b, c) {
            var d = Wk(),
                e = [],
                f = d.gclid,
                h = d.dclid,
                l = d.gclsrc || "aw",
                m = ol(),
                n = nl();
            !f || "aw.ds" !== l && "aw" !== l && "ds" !== l && "3p.ds" !== l || e.push({
                U: f,
                vd: l
            });
            h && e.push({
                U: h,
                vd: "ds"
            });
            0 === e.length && d.wbraid && e.push({
                U: d.wbraid,
                vd: "gb"
            });
            0 === e.length && "aw.ds" === l && e.push({
                U: "",
                vd: "aw.ds"
            });
            sl(function() {
                if (P(45) && P(49) || R(K.g.F)) {
                    var p = R(ql());
                    sk(a);
                    var q;
                    if (p && (q = mk[ok(a.prefix)], void 0 === q && !P(45))) return;
                    var r = [];
                    q && r.push("auid=" + q);
                    var t = F.referrer ? lh(qh(F.referrer), "host") : "";
                    0 === e.length && (tl.test(t) || ul.test(t)) && e.push({
                        U: "",
                        vd: ""
                    });
                    if (0 !== e.length || m || void 0 !== n) {
                        t && r.push("ref=" + encodeURIComponent(t));
                        var u = 1 === yi(!0) ? E.top.location.href : E.location.href;
                        u = u.replace(/[\?#].*$/, "");
                        r.push("url=" + encodeURIComponent(u));
                        r.push("tft=" + La());
                        var v = jc();
                        void 0 !== v && r.push("tfd=" +
                            Math.round(v));
                        var w = yi(!0);
                        r.push("frm=" + w);
                        m && r.push("gad=1");
                        void 0 !== n && r.push("gad_source=" + encodeURIComponent(n));
                        var x = c;
                        void 0 === x && (x = Zh.C[K.g.ja]);
                        var y = {},
                            z = Vh(Lh(new Kh(0), (y[K.g.ja] = x, y)));
                        r.push("gtm=" + nj(b));
                        bj() && r.push("gcs=" + cj());
                        r.push("gcd=" + gj(z));
                        jj() && r.push("dma_cps=" + hj());
                        r.push("dma=" + ij());
                        aj(z) ? P(26) && r.push("npa=0") : r.push("npa=1");
                        Gi(Oi()) && r.push("tcfd=" + kj());
                        var B = Vi();
                        B && r.push("gdpr=" + B);
                        var C = Ti();
                        C && r.push("gdpr_consent=" + C);
                        Se.h && r.push("tag_exp=" + Se.h);
                        var H =
                            p ? 'https://adservice.google.com/pagead/regclk' : "https://adservice.googlesyndication.com/pagead/regclk";
                        if (0 < e.length)
                            for (var D = 0; D < e.length; D++) {
                                var I = e[D],
                                    M = I.U,
                                    L = I.vd;
                                if (!ml(a.prefix, L + "." + M, void 0 !== q)) {
                                    var O = H + "?" + r.join("&");
                                    "" !== M ? O = "gb" === L ? O + "&wbraid=" + M : O + "&gclid=" + M + "&gclsrc=" + L : "aw.ds" === L && (O += "&gclsrc=aw.ds");
                                    gc(O)
                                }
                            } else if ((m || void 0 !== n) && !ml(a.prefix, "gad", void 0 !== q)) {
                                var T = H + "?" + r.join("&");
                                gc(T)
                            }
                    }
                }
            })
        },
        Al = function(a) {
            return sh("gclaw") || sh("gac") || 0 < (Wk().aw || []).length ? !1 : 0 < (Wk().gb || []).length ? !0 : ll(a)
        };
    var Bl, Cl = !1,
        Dl = function(a) {
            if (!Cl) {
                Cl = !0;
                Bl = Bl || {}
            }
            return Bl[a]
        };
    var El = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.o = c;
        this.h = {};
        this.metadata = A(c.eventMetadata || {});
        this.isAborted = !1
    };
    El.prototype.copyToHitData = function(a, b, c) {
        var d = U(this.o, a);
        void 0 === d && (d = b);
        if (void 0 !== d && void 0 !== c && g(d) && P(50)) try {
            d = c(d)
        } catch (e) {}
        void 0 !== d && (this.h[a] = d)
    };
    var Fl = function(a) {
            return a.metadata.source_canonical_id
        },
        Gl = function(a, b, c) {
            var d = Dl(a.target.Z);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };
    var Il = function(a, b) {
            var c = a.ri,
                d = a.Oi,
                e = a.We,
                f = a.allowAdPersonalizationSignals;
            a.ei && (kk(c[K.g.Sc], !!c[K.g.R]) && (al(Hl, b), wk(b)), Yk(b), dl(Hl, b), zl(b, e, f));
            c[K.g.R] && (cl(Hl, c[K.g.R], c[K.g.mc], !!c[K.g.Fb], b.prefix), xk(ok(b.prefix), c[K.g.R], c[K.g.mc], !!c[K.g.Fb], b), xk("FPAU", c[K.g.R], c[K.g.mc], !!c[K.g.Fb], b));
            d && fl(Hl);
            hl(Hl)
        },
        Jl = function(a, b, c, d) {
            var e = a.Ri,
                f = a.callback,
                h = a.si;
            if ("function" === typeof f)
                if (e === K.g.kb && void 0 === h) {
                    var l = d(b.prefix, c);
                    0 === l.length ? f(void 0) : 1 === l.length ? f(l[0]) : f(l)
                } else e ===
                    K.g.fc ? (J(65), sk(b, !1), f(mk[ok(b.prefix)])) : f(h)
        },
        Hl = ["aw", "dc", "gb"];

    function Kl(a) {
        var b = U(a.o, K.g.rb),
            c = U(a.o, K.g.qb);
        b && !c ? (a.eventName !== K.g.oa && a.eventName !== K.g.Rd && J(131), a.isAborted = !0) : !b && c && (J(132), a.isAborted = !0)
    }

    function Ll(a) {
        var b = R(K.g.F) ? xe.pscdl : "denied";
        a.h[K.g.Xd] = b
    };
    var Ml = function(a) {
            var b = a && a[K.g.Tg];
            return b && b[K.g.zj]
        },
        Nl = function() {
            return -1 !== Qb.userAgent.toLowerCase().indexOf("firefox")
        },
        Ol = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) :
                        b.push("")
                }
                return b.join(",")
            }
        };
    var Pl = function() {
        xe.dedupe_gclid || (xe.dedupe_gclid = "" + Hj());
        return xe.dedupe_gclid
    };
    var Rl = function(a, b) {
            var c = a && !R(Ql());
            return b && c ? "0" : b
        },
        Ul = function(a) {
            Yf(function() {
                function b(w) {
                    var x = R(Ql()),
                        y = l && x,
                        z;
                    xe.reported_gclid || (xe.reported_gclid = {});
                    z = xe.reported_gclid;
                    var B = function() {
                        var T = h.prefix || "_gcl";
                        return P(45) ? (y ? T : "") + "." + (R(K.g.F) ? 1 : 0) + "." + (R(K.g.K) ? 1 : 0) : l && R(K.g.F) ? n + "." + T + (w ? "gcu" : "gcs") : n + (w ? "gcu" : "gcs")
                    }();
                    if (!z[B]) {
                        z[B] = !0;
                        var C = [],
                            H = {},
                            D = function(T, Q) {
                                Q && (C.push(T + "=" + encodeURIComponent(Q)), H[T] = !0)
                            },
                            I = "https://www.google.com";
                        bj() && (D("gcs", cj()), w && D("gcu", "1"));
                        D("gcd", gj(f));
                        Se.h && D("tag_exp", Se.h);
                        if (Hf()) {
                            D("rnd", Pl());
                            if ((!n || p && "aw.ds" !== p) && x) {
                                var M = Hk("_gcl_aw");
                                D("gclaw", M.join("."))
                            }
                            D("url", String(E.location).split(/[?#]/)[0]);
                            D("dclid", Rl(d, q));
                            x || (I = "https://pagead2.googlesyndication.com")
                        }
                        jj() && D("dma_cps", hj());
                        D("dma", ij());
                        aj(f) ? P(26) && D("npa", "0") : D("npa", "1");
                        Gi(Oi()) && D("tcfd", kj());
                        D("gdpr_consent", Ti() || "");
                        D("gdpr", Vi() || "");
                        "1" === ak(!1)._up && D("gtm_up", "1");
                        D("gclid", Rl(d, n));
                        D("gclsrc", p);
                        if (!(H.gclid || H.dclid || H.gclaw) && (D("gbraid", Rl(d, r)), !H.gbraid && Hf() && R(K.g.F))) {
                            var L = Hk("_gcl_gb");
                            0 < L.length && D("gclgb", L.join("."))
                        }
                        D("gtm", nj(f.eventMetadata.source_canonical_id, !e));
                        l && R(K.g.F) && (sk(h || {}), y && D("auid", mk[ok(h.prefix)] || ""));
                        Tl || a.gi && D("did", a.gi);
                        a.Uf && D("gdid", a.Uf);
                        a.Of && D("edid", a.Of);
                        var O = I + "/pagead/landing?" + C.join("&");
                        gc(O)
                    }
                }
                var c = !!a.Mf,
                    d = !!a.Te,
                    e = a.targetId,
                    f = a.o,
                    h = void 0 === a.vc ? {} : a.vc,
                    l = void 0 ===
                    a.Oe ? !0 : a.Oe,
                    m = Wk(),
                    n = m.gclid || "",
                    p = m.gclsrc,
                    q = m.dclid || "",
                    r = m.wbraid || "",
                    t = !c && ((!n || p && "aw.ds" !== p ? !1 : !0) || r),
                    u = Hf();
                if (t || u)
                    if (u) {
                        var v = P(45) ? [K.g.F, K.g.K, K.g.ya] : [K.g.F];
                        b();
                        (function() {
                            R(v) || Xf(function(w) {
                                return b(!0, w.consentEventId, w.consentPriorityId)
                            }, v)
                        })()
                    } else b()
            }, [K.g.F, K.g.K, K.g.ya])
        },
        Ql = function() {
            return P(45) ? [K.g.F, K.g.K] : [K.g.F]
        },
        Sl = function(a) {
            var b = String(E.location).split(/[?#]/)[0],
                c = we.Yi || E._CONSENT_MODE_SALT;
            return a ? c ? String(oj(b + a + c)) : "0" : ""
        },
        Tl = !1;
    var Vl = function(a, b, c, d) {
        var e = Yb(),
            f;
        if (1 === e) a: {
            var h = Le;h = h.toLowerCase();
            for (var l = "https://" + h, m = "http://" + h, n = 1, p = F.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(l) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != E.location.protocol ? a : b) + c
    };
    var Xl = function(a, b, c) {
            if (E[a.functionName]) return b.mg && G(b.mg), E[a.functionName];
            var d = Wl();
            E[a.functionName] = d;
            if (a.Ee)
                for (var e = 0; e < a.Ee.length; e++) E[a.Ee[e]] = E[a.Ee[e]] || Wl();
            a.Ne && void 0 === E[a.Ne] && (E[a.Ne] = c);
            Xb(Vl("https://", "http://", a.wg), b.mg, b.Pl);
            return d
        },
        Wl = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Yl = {
            functionName: "_googWcmImpl",
            Ne: "_googWcmAk",
            wg: "www.gstatic.com/wcm/loader.js"
        },
        Zl = {
            functionName: "_gaPhoneImpl",
            Ne: "ga_wpid",
            wg: "www.gstatic.com/gaphone/loader.js"
        },
        $l = {
            Vi: "",
            lk: "5"
        },
        am = {
            functionName: "_googCallTrackingImpl",
            Ee: [Zl.functionName, Yl.functionName],
            wg: "www.gstatic.com/call-tracking/call-tracking_" + ($l.Vi || $l.lk) + ".js"
        },
        bm = {},
        cm = function(a, b, c, d) {
            J(22);
            if (c) {
                d = d || {};
                var e = Xl(Yl, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.hb && (f.autoreplace = c);
                e(2, d.hb, f, c, 0, Ka(), d.options)
            }
        },
        dm = function(a, b, c, d, e) {
            J(21);
            if (b && c) {
                e = e || {};
                for (var f = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ka()
                    }, h = 0; h < a.length; h++) {
                    var l = a[h];
                    bm[l.id] ||
                        (l && "AW" === l.prefix && !f.adData && 2 <= l.N.length ? (f.adData = {
                            ak: l.N[0],
                            cl: l.N[1]
                        }, P(99) && (f.adData.dma = ij(), jj() && (f.adData.dmaCps = hj()), aj(d) ? f.adData.npa = 0 : f.adData.npa = 1), bm[l.id] = !0) : l && "UA" === l.prefix && !f.gaData && (f.gaData = {
                            gaWpid: l.Z
                        }, bm[l.id] = !0))
                }(f.gaData || f.adData) && Xl(am, e)(e.hb, f, e.options)
            }
        },
        em = function() {
            var a = !1;
            return a
        },
        fm = function(a, b) {
            if (a)
                if (lj()) {} else {
                    if (g(a)) {
                        var c = dg(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = U(b, K.g.Pj);
                    if (f && za(f)) {
                        d = [];
                        for (var h = 0; h < f.length; h++) {
                            var l = dg(f[h]);
                            l && (d.push(l), (a.id === l.id || a.id === a.Z && a.Z === l.Z) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = U(b, K.g.sh),
                            n;
                        if (m) {
                            za(m) ? n = m : n = [m];
                            var p = U(b, K.g.qh),
                                q = U(b, K.g.rh),
                                r = U(b, K.g.th),
                                t = U(b, K.g.Oj),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) dm(d, n[w], t, b, {
                                        hb: u,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix && a.N[1]) em() ? dm([a],
                                n[w], t || "US", b, {
                                    hb: u,
                                    options: r
                                }) : cm(a.N[0], a.N[1], n[w], {
                                hb: u,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (em()) dm([a], n[w], t || "US", b, {
                                    hb: u
                                });
                                else {
                                    var x = a.Z,
                                        y = n[w],
                                        z = {
                                            hb: u
                                        };
                                    J(23);
                                    if (y) {
                                        z = z || {};
                                        var B = Xl(Zl, z, x),
                                            C = {};
                                        void 0 !== z.hb ? C.receiver = z.hb : C.replace = y;
                                        C.ga_wpid = x;
                                        C.destination = y;
                                        B(2, Ka(), C)
                                    }
                                }
                        }
                    }
                }
        };

    function gm(a) {
        return {
            getDestinationId: function() {
                return a.target.Z
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.h[b]
            },
            setHitData: function(b, c) {
                a.h[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.h[b] && (a.h[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return U(a.o, b)
            },
            ln: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.h)
            }
        }
    };
    var im = function(a) {
            var b = hm[a.target.Z];
            if (!a.isAborted && b)
                for (var c = gm(a), d = 0; d < b.length; ++d) {
                    try {
                        b[d](c)
                    } catch (e) {
                        a.isAborted = !0
                    }
                    if (a.isAborted) break
                }
        },
        hm = {};
    var lm = function(a) {
            a = a || {};
            var b;
            if (R(jm)) {
                (b = km(a)) || (b = Hj());
                var c = a,
                    d = ok(c.prefix);
                qk(c, b);
                delete mk[d];
                delete nk[d];
                pk(d, c.path, c.domain);
                return km(a)
            }
        },
        km = function(a) {
            if (R(jm)) {
                a = a || {};
                sk(a, !1);
                var b = nk[ok(Uk(a.prefix))];
                if (b && !(18E5 < La() - 1E3 * b.gg)) {
                    var c = b.id,
                        d = c.split(".");
                    if (2 === d.length && !(864E5 < La() - 1E3 * (Number(d[1]) || 0))) return c
                }
            }
        },
        jm = K.g.F;

    function mm(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return qh("" + c + b).href
        }
    }

    function nm() {
        return !!we.Ce && "SGTM_TOKEN" !== we.Ce.split("@@").join("")
    }

    function om(a) {
        for (var b = ia([K.g.Wc, K.g.Ib]), c = b.next(); !c.done; c = b.next()) {
            var d = U(a, c.value);
            if (d) return d
        }
    };
    var pm = function() {
        var a = Qb && Qb.userAgent || "";
        if (0 > a.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)) return !1;
        var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
        if ("" === b) return !1;
        for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
            if (void 0 === c[e]) return !0;
            if (d[e] != c[e]) return Number(d[e]) > Number(c[e])
        }
        return d.length >= c.length
    };
    var qm = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        rm = /^www.googleadservices.com$/,
        tm = function(a) {
            a || (a = sm());
            return a.ym ? !1 : a.kl || a.ml || a.nl || a.Wf || a.Le || a.Qk || a.Xk ? !0 : !1
        },
        sm = function() {
            var a = {},
                b = ak(!0);
            a.ym = !!b._up;
            var c = Wk();
            a.kl = void 0 !== c.aw;
            a.ml = void 0 !== c.dc;
            a.nl = void 0 !== c.wbraid;
            var d = qh(E.location.href),
                e = lh(d, "query", !1, void 0, "gad");
            a.Wf = void 0 !== e;
            if (!a.Wf) {
                var f = d.hash.replace("#", ""),
                    h = ih(f, "gad");
                a.Wf = void 0 !== h
            }
            a.Le = void 0;
            if (P(58)) {
                var l = lh(d, "query", !1, void 0, "gad_source");
                a.Le =
                    l;
                if (void 0 === a.Le) {
                    var m = d.hash.replace("#", ""),
                        n = ih(m, "gad_source");
                    a.Le = n
                }
            }
            var p = F.referrer ? lh(qh(F.referrer), "host") : "";
            a.Xk = qm.test(p);
            a.Qk = rm.test(p);
            return a
        };
    var um = function() {
            var a = E.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        vm = function(a) {
            if (F.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !E.getComputedStyle) return !0;
            var c = E.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    h = e.filter;
                if (h) {
                    var l = h.indexOf("opacity(");
                    0 <= l && (h = h.substring(l + 8, h.indexOf(")", l)), "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)), f = Math.min(h,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = E.getComputedStyle(d, null))
            }
            return !1
        };
    var Fm = function(a, b, c) {
            var d = a.element,
                e = {
                    P: a.P,
                    type: a.ia,
                    tagName: d.tagName
                };
            b && (e.querySelector = Em(d));
            c && (e.isVisible = !vm(d));
            return e
        },
        Gm = function(a, b, c) {
            return Fm({
                element: a.element,
                P: a.P,
                ia: "1"
            }, b, c)
        },
        Hm = function(a) {
            var b = !!a.Cd + "." + !!a.Dd;
            a && a.Je && a.Je.length && (b += "." + a.Je.join("."));
            a && a.fb && (b += "." + a.fb.email + "." + a.fb.phone + "." + a.fb.address);
            return b
        },
        Km = function(a) {
            if (0 != a.length) {
                var b;
                b = Im(a, function(c) {
                    return !Jm.test(c.P)
                });
                b = Im(b, function(c) {
                    return "INPUT" === c.element.tagName.toUpperCase()
                });
                b = Im(b, function(c) {
                    return !vm(c.element)
                });
                return b[0]
            }
        },
        Lm = function(a, b) {
            if (!b || 0 === b.length) return a;
            for (var c = [], d = 0; d < a.length; d++) {
                for (var e = !0, f = 0; f < b.length; f++) {
                    var h = b[f];
                    if (h && Fd(a[d].element, h)) {
                        e = !1;
                        break
                    }
                }
                e && c.push(a[d])
            }
            return c
        },
        Im = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        Em = function(a) {
            var b;
            if (a === F.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var h = 0; h < f.childElementCount; h++)
                                    if (f.children[h] ===
                                        a) {
                                        e = h + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = Em(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        Nm = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.textContent;
                "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
                if (e) {
                    var f = e.match(Mm);
                    if (f) {
                        var h = f[0],
                            l;
                        if (E.location) {
                            var m = kh(E.location, "host", !0);
                            l = 0 <= h.toLowerCase().indexOf(m)
                        } else l = !1;
                        l || b.push({
                            element: d,
                            P: h
                        })
                    }
                }
            }
            return b
        },
        Rm = function() {
            var a = [],
                b = F.body;
            if (!b) return {
                elements: a,
                status: "4"
            };
            for (var c = b.querySelectorAll("*"),
                    d = 0; d < c.length && 1E4 > d; d++) {
                var e = c[d];
                if (!(0 <= Om.indexOf(e.tagName.toUpperCase())) && e.children instanceof HTMLCollection) {
                    for (var f = !1, h = 0; h < e.childElementCount && 1E4 > h; h++)
                        if (!(0 <= Pm.indexOf(e.children[h].tagName.toUpperCase()))) {
                            f = !0;
                            break
                        }(!f || P(27) && -1 !== Qm.indexOf(e.tagName)) && a.push(e)
                }
            }
            return {
                elements: a,
                status: 1E4 < c.length ? "2" : "1"
            }
        },
        Sm = !1;
    var Mm = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        Tm = /@(gmail|googlemail)\./i,
        Jm = /support|noreply/i,
        Om = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        Pm = ["BR"],
        Um = {
            Em: "1",
            Um: "2",
            Km: "3",
            Om: "4",
            Am: "5",
            Vm: "6",
            Qm: "7"
        },
        Vm = {},
        Qm = ["INPUT", "SELECT"];
    var on = function() {
            var a = {
                Cd: !0,
                Dd: !0,
                Gi: !0
            };
            a = a || {
                Cd: !0,
                Dd: !0
            };
            a.fb = a.fb || {
                email: !0,
                phone: !1,
                address: !1
            };
            var b = Hm(a),
                c = Vm[b];
            if (c && 200 > La() - c.timestamp) return c.result;
            var d = Rm(),
                e = d.status,
                f = [],
                h, l, m = [];
            if (!P(27)) {
                if (a.fb && a.fb.email) {
                    var n = Nm(d.elements);
                    f = Lm(n, a && a.Je);
                    h = Km(f);
                    10 < n.length && (e = "3")
                }!a.Gi && h && (f = [h]);
                for (var p = 0; p < f.length; p++) m.push(Gm(f[p], a.Cd, a.Dd));
                m = m.slice(0, 10)
            } else if (a.fb) {}
            h && (l = Gm(h, a.Cd, a.Dd));
            var C = {
                elements: m,
                Ul: l,
                status: e
            };
            Vm[b] = {
                timestamp: La(),
                result: C
            };
            return C
        },
        pn = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.P.length + ":" + Tm.test(a.P)
        };
    var qn = {
        pk: Number('') || 500,
        Wj: Number('') || 5E3,
        Lh: Number('') || 10,
        gj: Number('') || 5E3
    };

    function rn(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var sn = function(a, b) {
        var c;
        return c
    };
    var tn = "https://" + we.Cc,
        un = tn + "/gtm/static/",
        vn = Number('') || 5,
        wn = Number('') || 50,
        xn = tn,
        yn = un,
        zn = !1,
        An = 0,
        Bn = Ba();

    function Kn() {
        var a = !1;
        return a
    }

    function Ln(a) {}

    function Nn(a, b, c) {}

    function Gn(a, b, c, d) {}

    function Mn(a, b, c, d, e) {}

    function On(a, b, c, d) {}

    function Pn(a, b, c, d) {}

    function Qn(a) {
        var b = {},
            c = ["tv.1"],
            d = 0;
        var u = c.join("~");
        return {
            P: b,
            Qe: u
        }
    }
    var Rn = void 0;

    function Sn(a) {
        var b = "";
        return b
    };
    Bb();
    ni() || yb("iPod");
    yb("iPad");
    !yb("Android") || Cb() || Bb() || Ab() || yb("Silk");
    Cb();
    !yb("Safari") || Cb() || (zb() ? 0 : yb("Coast")) || Ab() || (zb() ? 0 : yb("Edge")) || (zb() ? xb("Microsoft Edge") : yb("Edg/")) || (zb() ? xb("Opera") : yb("OPR")) || Bb() || yb("Silk") || yb("Android") || oi();
    var Tn = {},
        Un = null,
        Vn = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!Un) {
                Un = {};
                for (var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = h.concat(l[m].split(""));
                    Tn[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === Un[q] && (Un[q] = p)
                    }
                }
            }
            for (var r = Tn[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    z = b[v + 2],
                    B = r[x >> 2],
                    C = r[(x & 3) << 4 | y >> 4],
                    H = r[(y & 15) << 2 | z >> 6],
                    D = r[z & 63];
                t[w++] = "" + B + C + H + D
            }
            var I = 0,
                M = u;
            switch (b.length - v) {
                case 2:
                    I = b[v + 1], M = r[(I & 15) << 2] || u;
                case 1:
                    var L = b[v];
                    t[w] = "" + r[L >> 2] + r[(L & 3) << 4 | I >> 4] + M + u
            }
            return t.join("")
        };
    Object.freeze(new function() {});
    Object.freeze(new function() {});
    var Wn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Xn() {
        var a;
        return null != (a = E.google_tag_data) ? a : E.google_tag_data = {}
    }

    function Yn() {
        var a = E.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function Zn() {
        var a, b;
        return null != (b = null == (a = E.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function $n() {
        var a, b;
        return "function" === typeof(null == (a = E.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function ao() {
        if (!$n()) return null;
        var a = Xn();
        if (a.uach_promise) return a.uach_promise;
        var b = E.navigator.userAgentData.getHighEntropyValues(Wn).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };
    var bo, co = function() {
            if ($n() && (bo = La(), !Zn())) {
                var a = ao();
                a && (a.then(function() {
                    J(95);
                }), a.catch(function() {
                    J(96)
                }))
            }
        },
        fo = function(a) {
            var b = eo.xm,
                c = function(h, l) {
                    try {
                        a(h, l)
                    } catch (m) {}
                },
                d = Yn();
            if (d) c(d);
            else {
                var e = Zn();
                if (e) {
                    b =
                        Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = E.setTimeout(function() {
                        c.Fd || (c.Fd = !0, J(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(h) {
                        c.Fd || (c.Fd = !0, J(104), E.clearTimeout(f), c(h))
                    }).catch(function(h) {
                        c.Fd || (c.Fd = !0, J(105), E.clearTimeout(f), c(null, h))
                    })
                } else c(null)
            }
        },
        go = function(a, b) {
            a && (b.h[K.g.Zc] = a.architecture, b.h[K.g.ad] = a.bitness, a.fullVersionList && (b.h[K.g.bd] = a.fullVersionList.map(function(c) {
                    return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
                }).join("|")),
                b.h[K.g.dd] = a.mobile ? "1" : "0", b.h[K.g.ed] = a.model, b.h[K.g.fd] = a.platform, b.h[K.g.gd] = a.platformVersion, b.h[K.g.hd] = a.wow64 ? "1" : "0")
        };

    function ho() {
        return "attribution-reporting"
    }

    function io(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var jo = !1;

    function ko() {
        if (io("join-ad-interest-group") && xa(Qb.joinAdInterestGroup)) return !0;
        jo || (wi('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), jo = !0);
        return io("join-ad-interest-group") && xa(Qb.joinAdInterestGroup)
    }

    function lo(a, b) {
        var c = void 0;
        try {
            c = F.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > La() - d) {
                gb("TAGGING", 9);
                return
            }
            try {
                c.parentNode.removeChild(c)
            } catch (e) {}
            c = void 0
        } else try {
            if (50 <= F.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                gb("TAGGING", 10);
                return
            }
        } catch (e) {}
        Zb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: La()
        }, c)
    }

    function mo() {
        return "https://td.doubleclick.net"
    };
    var no = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        oo = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        po = /^\d+\.fls\.doubleclick\.net$/,
        qo = /;gac=([^;?]+)/,
        ro = /;gacgb=([^;?]+)/,
        so = /;gclaw=([^;?]+)/,
        to = /;gclgb=([^;?]+)/;

    function uo(a, b) {
        if (po.test(F.location.host)) {
            var c = F.location.href.match(b);
            return c && 2 == c.length && c[1].match(no) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].U);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var vo = function(a, b, c) {
        var d = Ek(Dk()) ? zk("_gac_gb", !0) : {},
            e = [],
            f = !1,
            h;
        for (h in d) {
            var l = il("_gac_gb_" + h, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(h + ":" + l.join(","))
        }
        return {
            Pk: f ? e.join(";") : "",
            Ok: uo(d, ro)
        }
    };

    function wo(a, b, c) {
        if (po.test(F.location.host)) {
            var d = F.location.href.match(c);
            if (d && 2 == d.length && d[1].match(oo)) return [{
                U: d[1]
            }]
        } else return Gk((a || "_gcl") + b);
        return []
    }
    var xo = function(a) {
            return wo(a, "_aw", so).map(function(b) {
                return b.U
            }).join(".")
        },
        yo = function(a) {
            return wo(a, "_gb", to).map(function(b) {
                return b.U
            }).join(".")
        },
        zo = function(a, b) {
            var c = il((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var Ao = function() {
        if (xa(E.__uspapi)) {
            var a = "";
            try {
                E.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Bo = function() {
            return P(45) ? [K.g.F, K.g.K] : [K.g.F]
        },
        Co = function(a) {
            if (null != a) {
                var b = String(a).substring(0, 512),
                    c = b.indexOf("#");
                return -1 == c ? b : b.substring(0, c)
            }
            return ""
        },
        Do = function() {
            var a = F.title;
            if (void 0 == a || "" == a) return "";
            var b = function(d) {
                try {
                    return decodeURIComponent(d), !0
                } catch (e) {
                    return !1
                }
            };
            a = encodeURIComponent(a);
            for (var c = 256; !b(a.substr(0, c));) c--;
            return decodeURIComponent(a.substr(0, c))
        },
        Eo = function(a) {
            a.metadata.speculative_in_message || (a.metadata.speculative = !1)
        },
        Fo = function(a, b) {
            za(b) ||
                (b = [b]);
            return 0 <= b.indexOf(a.metadata.hit_type)
        },
        Go = function(a) {
            var b = a.target.N[0];
            if (b) {
                a.h[K.g.Kc] = b;
                var c = a.target.N[1];
                c && (a.h[K.g.ab] = c)
            } else a.isAborted = !0
        },
        Ho = function(a) {
            if (Fo(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
                var b = a.h[K.g.ab],
                    c = !0 === U(a.o, K.g.jf);
                c && (a.metadata.remarketing_only = !0);
                switch (a.metadata.hit_type) {
                    case "conversion":
                        !c && b && Eo(a);
                        Nl() && (a.metadata.is_gcp_conversion = !0);
                        break;
                    case "user_data_lead":
                    case "user_data_web":
                        !c && b && (a.isAborted = !0);
                        break;
                    case "remarketing":
                        !c && b || Eo(a)
                }
                a.h[K.g.Ih] = a.metadata.is_gcp_conversion ? "www.google.com" : "www.googleadservices.com"
            }
        },
        Io = function(a) {
            Fo(a, ["conversion", "remarketing"])
        },
        Jo = function(a) {
            if (Fo(a, ["conversion", "remarketing"])) {
                var b = yi(!1);
                a.h[K.g.mh] = b;
                var c = U(a.o, K.g.za);
                c || (c = 1 === b ? E.top.location.href : E.location.href);
                a.h[K.g.za] = Co(c);
                a.copyToHitData(K.g.Ja, F.referrer);
                a.h[K.g.sb] = Do();
                a.copyToHitData(K.g.Ha);
                var d = um();
                a.h[K.g.tb] = d.width + "x" + d.height;
                for (var e, f = E, h = f; f && f != f.parent;) f = f.parent,
                    ui(f) && (h = f);
                e = h;
                var l;
                var m = e.location.href;
                if (e === e.top) l = {
                    url: m,
                    zl: !0
                };
                else {
                    var n = !1,
                        p = e.document;
                    p && p.referrer && (m = p.referrer, e.parent === e.top && (n = !0));
                    var q = e.location.ancestorOrigins;
                    if (q) {
                        var r = q[q.length - 1];
                        r && -1 === m.indexOf(r) && (n = !1, m = r)
                    }
                    l = {
                        url: m,
                        zl: n
                    }
                }
                var t = l;
                t.url && c !== t.url && (a.h[K.g.Af] = Co(t.url))
            }
        },
        Ko = function(a) {
            Fo(a, ["conversion", "remarketing"]) && (a.copyToHitData(K.g.sa), a.copyToHitData(K.g.ba), a.copyToHitData(K.g.ra), P(45) && !R(K.g.K) || a.copyToHitData(K.g.Pa))
        },
        Lo = function(a) {
            if (!$n()) J(87);
            else if (void 0 !== bo) {
                J(85);
                var b = Yn();
                b ? go(b, a) : J(86)
            }
        },
        Oo = function(a) {
            !Fo(a, ["conversion"]) || P(45) && !R(K.g.K) || (!0 === E._gtmpcm || pm() ? a.h[K.g.Db] = "2" : P(5) && (Mo || io(ho()) || (wi('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Mo = !0), No || (No = !0, wi('A+xK4jmZTgh1KBVry/UZKUE3h6Dr9HPPioFS4KNCzify+KEoOii7z/goKS2zgbAOwhpZ1GZllpdz7XviivJM9gcAAACFeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiQXR0cmlidXRpb25SZXBvcnRpbmdDcm9zc0FwcFdlYiIsImV4cGlyeSI6MTcwNzI2Mzk5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d')), io(ho()) && (a.h[K.g.Db] = "1")))
        },
        Po = function(a) {
            Fo(a, ["conversion", "remarketing"]) && P(6) && R(K.g.F) && (!P(45) || R(K.g.K)) && !1 !== U(a.o, K.g.Da) && aj(a.o) && !1 !== U(a.o, K.g.Cb) && !1 !== U(a.o, K.g.Oa) && ko() && (a.h[K.g.Vg] =
                "1", a.metadata.send_fledge_experiment = !0)
        },
        Qo = function(a) {
            var b = function(d) {
                return U(a.o, d)
            };
            a.metadata.conversion_linker_enabled = !1 !== b(K.g.Ea);
            var c = {
                prefix: b(K.g.Ma) || b(K.g.Na),
                domain: b(K.g.Sa),
                zb: b(K.g.Ga),
                flags: b(K.g.Ta)
            };
            a.metadata.cookie_options = c;
            a.metadata.redact_ads_data = null != b(K.g.qa) && !1 !== b(K.g.qa);
            a.metadata.allow_ad_personalization = aj(a.o)
        },
        Ro = function(a) {
            if (Gl(a, "ccd_add_1p_data", !1) && R(Bo())) {
                var b = a.o.s[K.g.ve];
                if (df(b)) {
                    var c = U(a.o, K.g.Aa);
                    null === c ? a.metadata.user_data_from_code =
                        null : (b.enable_code && Za(c) && (a.metadata.user_data_from_code = c), Za(b.selectors) && (a.metadata.user_data_from_manual = cf(b.selectors)))
                }
            }
        },
        So = function(a) {
            var b = !a.metadata.send_user_data_hit && Fo(a, ["conversion", "user_data_web"]),
                c = !Gl(a, "ccd_add_1p_data", !1) && Fo(a, "user_data_lead");
            if ((b || c) && R(K.g.F)) {
                var d = "conversion" === a.metadata.hit_type,
                    e = a.o,
                    f = void 0,
                    h = U(e, K.g.Aa);
                if (d) {
                    var l = (U(e, K.g.ce) || {})[a.h[K.g.ab]];
                    if (!0 === U(e, K.g.Sd) || l) {
                        var m;
                        var n;
                        if (l) b: {
                            switch (l.enhanced_conversions_mode) {
                                case "manual":
                                    if (h &&
                                        Za(h)) {
                                        n = h;
                                        break b
                                    }
                                    var p = l.enhanced_conversions_manual_var;
                                    n = void 0 !== p ? p : E.enhanced_conversion_data;
                                    break b;
                                case "automatic":
                                    n = cf(l[K.g.Tg]);
                                    break b
                            }
                            n = void 0
                        }
                        else n = E.enhanced_conversion_data;
                        var q = n,
                            r = (l || {}).enhanced_conversions_mode,
                            t;
                        if (q) {
                            if ("manual" === r) switch (q._tag_mode) {
                                case "CODE":
                                    t = "c";
                                    break;
                                case "AUTO":
                                    t = "a";
                                    break;
                                case "MANUAL":
                                    t = "m";
                                    break;
                                default:
                                    t = "c"
                            } else t = "automatic" === r ? Ml(l) ? "a" : "m" : "c";
                            m = {
                                P: q,
                                Qi: t
                            }
                        } else m = {
                            P: q,
                            Qi: void 0
                        };
                        var u = m,
                            v = u.Qi;
                        f = u.P;
                        a.h[K.g.ue] = v
                    }
                } else if (a.o.isGtmEvent) {
                    Eo(a);
                    a.metadata.user_data = h;
                    return
                }
                a.metadata.user_data = f
            }
        },
        To = function(a) {
            Fo(a, ["conversion", "remarketing"]) && (a.o.isGtmEvent ? "conversion" !== a.metadata.hit_type && a.eventName && (a.h[K.g.Ug] = a.eventName) : a.h[K.g.Ug] = a.eventName, k(a.o.h, function(b, c) {
                te[b.split(".")[0]] || (a.h[b] = c)
            }))
        },
        Uo = function(a) {
            if (a.eventName === K.g.oa && !a.metadata.consent_updated && (a.metadata.is_config_command = !0, Fo(a, "conversion") && (a.metadata.speculative = !0), !Fo(a, "remarketing") || !1 !== U(a.o, K.g.Cb) && !1 !== U(a.o, K.g.Oa) || (a.metadata.speculative = !0), Fo(a, "landing_page"))) {
                var b = U(a.o, K.g.Ia) || {},
                    c = U(a.o, K.g.vb),
                    d = a.metadata.conversion_linker_enabled,
                    e = Fl(a),
                    f = aj(a.o),
                    h = a.metadata.cookie_options;
                Il({
                    ei: d,
                    ri: b,
                    Oi: c,
                    We: e,
                    allowAdPersonalizationSignals: f
                }, h);
                fm(a.target, a.o);
                Ul({
                    Mf: !1,
                    Te: a.metadata.redact_ads_data,
                    targetId: a.target.id,
                    o: a.o,
                    vc: d ? h : void 0,
                    Oe: d,
                    gi: a.h[K.g.vf],
                    Uf: a.h[K.g.pb],
                    Of: a.h[K.g.nb]
                });
                a.isAborted = !0
            }
        },
        Vo = function(a) {
            if (!Gl(a, "hasPreAutoPiiCcdRule", !1) && Fo(a, "conversion") && R(K.g.F)) {
                var b = (U(a.o, K.g.ce) || {})[a.h[K.g.ab]],
                    c =
                    a.h[K.g.Kc],
                    d;
                if (!(d = Ml(b)))
                    if (pf())
                        if (Sm) d = !0;
                        else {
                            var e = Dl("AW-" + c);
                            d = !!e && !!e.preAutoPii
                        }
                else d = !1;
                if (d) {
                    var f = La(),
                        h = on();
                    if (0 !== h.elements.length) {
                        for (var l = [], m = 0; m < h.elements.length; ++m) {
                            var n = h.elements[m];
                            l.push(n.querySelector + "*" + pn(n) + "*" + n.type)
                        }
                        a.h[K.g.xh] = l.join("~");
                        var p = h.Ul;
                        p && (a.h[K.g.yh] = p.querySelector, a.h[K.g.wh] = pn(p));
                        a.h[K.g.vh] = String(La() - f);
                        a.h[K.g.zh] = h.status
                    }
                }
            }
        },
        Wo = function(a) {
            if (a.eventName === K.g.La && !a.o.isGtmEvent) {
                if (!a.metadata.consent_updated && Fo(a, "conversion")) {
                    var b =
                        U(a.o, K.g.ob);
                    if ("function" !== typeof b) return;
                    var c = String(U(a.o, K.g.eb)),
                        d = a.h[c],
                        e = U(a.o, c);
                    c === K.g.kb || c === K.g.fc ? Jl({
                        Ri: c,
                        callback: b,
                        si: e
                    }, a.metadata.cookie_options, a.metadata.redact_ads_data, vl) : b(d || e)
                }
                a.isAborted = !0
            }
        },
        Xo = function(a) {
            if (Fo(a, "conversion") && R(K.g.F) && (a.h[K.g.nc] || a.h[K.g.kc])) {
                var b = a.h[K.g.ab],
                    c = A(a.metadata.cookie_options),
                    d = Uk(c.prefix);
                c.prefix = "_gcl" === d ? "" : d;
                if (a.h[K.g.nc]) {
                    var e = zo(b, c);
                    e && (a.h[K.g.Ch] = e)
                }
                if (a.h[K.g.kc]) {
                    var f = vo(b, c).Pk;
                    f && (a.h[K.g.gh] = f)
                }
            }
        },
        Yo = function(a) {
            var b =
                P(4),
                c = a.o,
                d, e, f;
            if (!b) {
                var h = Ih(c, K.g.X);
                d = Ta(Za(h) ? h : {})
            }
            var l = Ih(c, K.g.X, 1),
                m = Ih(c, K.g.X, 2);
            e = Ta(Za(l) ? l : {}, ".");
            f = Ta(Za(m) ? m : {}, ".");
            b || (a.h[K.g.vf] = d);
            a.h[K.g.pb] = e;
            a.h[K.g.nb] = f
        },
        Zo = function(a) {
            if (Fo(a, ["conversion", "remarketing"])) {
                var b = "conversion" === a.metadata.hit_type;
                b && a.eventName !== K.g.na || (a.copyToHitData(K.g.W), b && (a.copyToHitData(K.g.Wd), a.copyToHitData(K.g.Ud), a.copyToHitData(K.g.Vd), a.copyToHitData(K.g.Td), a.h[K.g.Og] = a.eventName))
            }
        },
        $o = function(a) {
            if (Fo(a, ["conversion", "remarketing",
                    "user_data_lead", "user_data_web"
                ])) {
                var b = a.o;
                if (Fo(a, ["conversion", "remarketing"])) {
                    var c = U(b, K.g.Gb);
                    if (!0 === c || !1 === c) a.h[K.g.Gb] = c
                }
                var d = aj(b);
                if (!d) a.h[K.g.sc] = !0;
                else if (P(26) || !0 === U(b, K.g.ja)) a.h[K.g.sc] = !1;
                !1 === d && Fo(a, "remarketing") && (a.isAborted = !0)
            }
        },
        ap = function(a) {
            Fo(a, "conversion") && (a.copyToHitData(K.g.Tc), a.copyToHitData(K.g.Yd), a.copyToHitData(K.g.Yc), a.copyToHitData(K.g.de), a.copyToHitData(K.g.jc), a.copyToHitData(K.g.Pc))
        },
        bp = function(a) {
            im(a);
        },
        cp = function(a) {
            if (Fo(a, ["conversion", "remarketing"]) && E.__gsaExp && E.__gsaExp.id) {
                var b = E.__gsaExp.id;
                if (xa(b)) try {
                    var c = Number(b());
                    isNaN(c) || (a.h[K.g.lh] = c)
                } catch (d) {}
            }
        },
        dp = function(a) {
            if (Fo(a, ["conversion", "remarketing"])) {
                var b = Ao();
                void 0 !== b && (a.h[K.g.Bh] = b || "error");
                var c = Vi();
                c && (a.h[K.g.ke] = c);
                var d = Ti();
                d && (a.h[K.g.te] = d)
            }
        },
        ep = function(a) {
            Fo(a, ["conversion"]) && "1" === ak(!1)._up && (a.h[K.g.ne] = !0)
        },
        fp = function(a) {
            Fo(a, ["conversion"]) && (a.metadata.redact_click_ids = !!a.metadata.redact_ads_data && !R(Bo()))
        },
        gp = function(a) {
            if (Fo(a, ["conversion", "user_data_lead", "user_data_web"]) && R(K.g.F) && a.metadata.conversion_linker_enabled) {
                var b = a.metadata.cookie_options,
                    c = Uk(b.prefix);
                "_gcl" === c && (c = "");
                if (!P(45) || R(K.g.K)) {
                    var d = c;
                    if (po.test(F.location.host) ? so.test(F.location.href) || qo.test(F.location.href) : !ll(d)) {
                        var e = xo(c);
                        e && (a.h[K.g.kb] = e);
                        if (!c) {
                            var f = uo(Ek(Dk()) ? zk() : {}, qo);
                            f && (a.h[K.g.je] = f)
                        }
                    } else {
                        var h = yo(c);
                        h && (a.h[K.g.nc] = h);
                        if (!c) {
                            var l = a.h[K.g.ab];
                            b = A(b);
                            b.prefix =
                                c;
                            var m = vo(l, b, !0).Ok;
                            m && (a.h[K.g.kc] = m)
                        }
                    }
                }
            }
        },
        hp = function(a) {
            if (Fo(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"]) && a.metadata.conversion_linker_enabled && R(K.g.F)) {
                var b = !P(3);
                if ("remarketing" !== a.metadata.hit_type || b) {
                    var c = a.metadata.cookie_options;
                    sk(c, "conversion" === a.metadata.hit_type && a.eventName !== K.g.La);
                    if (!P(45) || R(K.g.K)) a.h[K.g.fc] = mk[ok(c.prefix)]
                }
            }
        },
        ip = function() {
            Fe || He || P(71) && P(81) && Ln()
        },
        jp = function(a) {
            if (Fo(a, ["conversion"])) {
                var b = km(a.metadata.cookie_options);
                if (b && !a.h[K.g.sa]) {
                    var c = Hj(a.h[K.g.ab]);
                    a.h[K.g.sa] = c
                }
                b && (a.h[K.g.ub] = b, a.metadata.send_ccm_parallel_ping = !0)
            }
        },
        kp = function(a) {
            var b = R(Bo());
            switch (a.metadata.hit_type) {
                case "user_data_lead":
                case "user_data_web":
                    a.isAborted = !b || !!a.metadata.consent_updated;
                    break;
                case "remarketing":
                    a.isAborted = !b;
                    break;
                case "conversion":
                    a.metadata.consent_updated && (a.h[K.g.Qd] = !0)
            }
        },
        lp = function(a) {
            Fo(a, ["conversion"]) && a.o.eventMetadata.is_external_event && (a.h[K.g.Jh] = !0)
        },
        mp = function(a) {
            if (P(55) && Fo(a, ["conversion"])) {
                var b =
                    sm();
                tm(b) && (a.h[K.g.oe] = "1", a.metadata.add_tag_timing = !0)
            }
        },
        np = function(a) {
            var b;
            if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit) switch (a.metadata.hit_type) {
                case "user_data_web":
                    b = 97;
                    Eo(a);
                    break;
                case "user_data_lead":
                    b = 98;
                    Eo(a);
                    break;
                case "conversion":
                    b = 99
            }!a.metadata.speculative && b && J(b);
            !0 === a.metadata.speculative && (a.isAborted = !0)
        },
        Mo = !1,
        No = !1;
    var op = {
        D: {
            zg: "ads_conversion_hit",
            Bc: "container_execute_start",
            Dg: "container_setup_end",
            cf: "container_setup_start",
            Bg: "container_blocking_end",
            Cg: "container_execute_end",
            Eg: "container_yield_end",
            df: "container_yield_start",
            Eh: "event_execute_end",
            Dh: "event_evaluation_end",
            Cf: "event_evaluation_start",
            Fh: "event_setup_end",
            jd: "event_setup_start",
            Gh: "ga4_conversion_hit",
            ld: "page_load",
            Tm: "pageview",
            yb: "snippet_load",
            Uh: "tag_callback_error",
            Vh: "tag_callback_failure",
            Wh: "tag_callback_success",
            Xh: "tag_execute_end",
            uc: "tag_execute_start"
        }
    };

    function pp() {
        function a(c, d) {
            var e = ib(d);
            e && b.push(c + "=" + e)
        }
        var b = [];
        a("&u", "GTM");
        a("&ut", "TAGGING");
        a("&h", "HEALTH");
        return b.join("")
    };
    var qp = !1;
    var Yp = function(a, b) {},
        Zp = function(a, b) {},
        $p = function(a, b) {},
        aq = function(a, b) {},
        bq = function() {
            var a = {};
            return a
        },
        Qp = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        cq = function() {},
        dq = function(a, b) {},
        eq = function(a, b, c) {};
    var fq = function(a, b) {
        var c, d = E.GooglebQhCsO;
        d || (d = {}, E.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var gq = function(a, b, c) {
        var d = ri(a, "fmt");
        if (b) {
            var e = ri(a, "random"),
                f = ri(a, "label") || "";
            if (!e) return !1;
            var h = Vn(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!fq(h, b)) return !1
        }
        d && 4 != d && (a = ti(a, "rfmt", d));
        var l = ti(a, "fmt", 4);
        Xb(l, function() {
            E.google_noFurtherRedirects && b && b.call && (E.google_noFurtherRedirects = null, b())
        }, void 0, c, F.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var hq = function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c],
                    e = void 0;
                if (d.hasOwnProperty("google_business_vertical")) {
                    e = d.google_business_vertical;
                    var f = {};
                    b[e] = b[e] || (f.google_business_vertical = e, f)
                } else e = "", b.hasOwnProperty(e) || (b[e] = {});
                var h = b[e],
                    l;
                for (l in d) "google_business_vertical" !== l && (l in h || (h[l] = []), h[l].push(d[l]))
            }
            return Object.keys(b).map(function(m) {
                return b[m]
            })
        },
        jq = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                if (d) {
                    var e = {};
                    b.push((e.id =
                        iq(d), e.origin = d.origin, e.destination = d.destination, e.start_date = d.start_date, e.end_date = d.end_date, e.location_id = d.location_id, e.google_business_vertical = d.google_business_vertical, e))
                }
            }
            return b
        },
        kq = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && b.push({
                    item_id: iq(d),
                    quantity: d.quantity,
                    value: d.price,
                    start_date: d.start_date,
                    end_date: d.end_date
                })
            }
            return b
        },
        iq = function(a) {
            null != a.id && null != a.item_id && J(138);
            var b = a.id;
            P(80) && (null != a.item_id ? b = a.item_id : null ==
                b && (b = a.item_name));
            return b
        },
        mq = function(a) {
            if (!a) return "";
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = [];
                d && (e.push(lq(d.value)), e.push(lq(d.quantity)), e.push(lq(d.item_id)), e.push(lq(d.start_date)), e.push(lq(d.end_date)), b.push("(" + e.join("*") + ")"))
            }
            return 0 < b.length ? b.join("") : ""
        },
        lq = function(a) {
            return "number" !== typeof a && "string" !== typeof a ? "" : a.toString()
        },
        oq = function(a, b) {
            var c = nq(b);
            return "" + a + (a && c ? ";" : "") + c
        },
        nq = function(a) {
            if (!a || "object" !== typeof a || "function" === typeof a.join) return "";
            var b = [];
            k(a, function(c, d) {
                var e, f;
                if (za(d)) {
                    for (var h = [], l = 0; l < d.length; ++l) {
                        var m = pq(d[l]);
                        void 0 != m && h.push(m)
                    }
                    f = 0 !== h.length ? h.join(",") : void 0
                } else f = pq(d);
                e = f;
                var n = pq(c);
                n && void 0 != e && b.push(n + "=" + e)
            });
            return b.join(";")
        },
        pq = function(a) {
            var b = typeof a;
            if (null != a && "object" !== b && "function" !== b) return String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
        },
        qq = function(a, b) {
            var c = [],
                d = function(f, h) {
                    null != h && "" !== h && (!0 === h && (h = 1), !1 === h && (h = 0), c.push(f + "=" + encodeURIComponent(h)))
                },
                e = a.metadata.hit_type;
            "conversion" !== e && "remarketing" !== e || d("random", a.metadata.event_start_timestamp_ms);
            k(b, d);
            return c.join("&")
        },
        rq = function(a, b) {
            var c = a.metadata.hit_type,
                d = a.h[K.g.Kc],
                e = R(P(45) ? [K.g.F, K.g.K] : [K.g.F]),
                f = [],
                h, l = a.o.onSuccess,
                m, n = lj() ? 2 : 3,
                p = 0,
                q = function(x) {
                    f.push(x);
                    x.xa && p++
                };
            switch (c) {
                case "conversion":
                    m = "pagead/conversion";
                    var r = "";
                    e ? a.metadata.is_gcp_conversion ? (h = "https://www.google.com/", m = "pagead/1p-conversion") : h = "https://www.googleadservices.com/" : h = "https://pagead2.googlesyndication.com/";
                    a.metadata.is_gcp_conversion && (r = "&gcp=1&sscte=1&ct_cookie_present=1");
                    var t = {
                        Ba: "" + h + m + "/" + d + "/?" + qq(a, b) + r,
                        format: n,
                        xa: !0
                    };
                    if (!P(45) || R(K.g.K)) t.attributes = {
                        attributionsrc: ""
                    };
                    q(t);
                    a.metadata.send_ccm_parallel_ping && q({
                        Ba: "" + h + "ccm/conversion/" + d + "/?" + qq(a, b) + r,
                        format: 2,
                        xa: !0
                    });
                    a.metadata.is_gcp_conversion && (r = "&gcp=1&ct_cookie_present=1", q({
                        Ba: "" + (e ? "https://googleads.g.doubleclick.net/" : h) + "pagead/viewthroughconversion/" + d + "/?" + qq(a, b) + r,
                        format: n,
                        xa: !0
                    }));
                    break;
                case "remarketing":
                    var u = b.data ||
                        "",
                        v = hq(jq(a.h[K.g.W]));
                    if (v.length) {
                        for (var w = 0; w < v.length; w++) b.data = oq(u, v[w]), q({
                            Ba: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + qq(a, b),
                            format: n,
                            xa: !0
                        }), a.metadata.send_fledge_experiment && q({
                            Ba: mo() + "/td/rul/" + d + "?" + qq(a, b),
                            format: 4,
                            xa: !1
                        }), a.metadata.event_start_timestamp_ms += 1;
                        a.metadata.send_fledge_experiment = !1
                    } else q({
                        Ba: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + qq(a, b),
                        format: n,
                        xa: !0
                    });
                    break;
                case "user_data_lead":
                    q({
                        Ba: "https://google.com/pagead/form-data/" +
                            d + "?" + qq(a, b),
                        format: 1,
                        xa: !0
                    });
                    break;
                case "user_data_web":
                    q({
                        Ba: "https://google.com/ccm/form-data/" + d + "?" + qq(a, b),
                        format: 1,
                        xa: !0
                    })
            }
            1 < f.length && xa(a.o.onSuccess) && (l = Ua(a.o.onSuccess, p));
            lj() || "conversion" !== c && "remarketing" !== c || !a.metadata.send_fledge_experiment || q({
                Ba: mo() + "/td/rul/" + d + "?" + qq(a, b),
                format: 4,
                xa: !1
            });
            return {
                onSuccess: l,
                ol: f
            }
        },
        sq = function(a, b, c, d, e, f) {
            Zp(c.o.eventId, c.eventName);
            var h = function() {
                e && e()
            };
            switch (b) {
                case 1:
                    gc(a);
                    e && e();
                    break;
                case 2:
                    $b(a, h, void 0, f);
                    break;
                case 3:
                    var l = !1;
                    try {
                        l = gq(a, h, f)
                    } catch (p) {
                        l = !1
                    }
                    l || sq(a, 2, c, d, h, f);
                    break;
                case 4:
                    var m = "AW-" + c.h[K.g.Kc],
                        n = c.h[K.g.ab];
                    n && (m = m + "/" + n);
                    lo(a, m)
            }
        },
        tq = {},
        uq = (tq[K.g.Qd] = "gcu", tq[K.g.kb] = "gclaw", tq[K.g.fc] = "auid", tq[K.g.Td] = "dscnt", tq[K.g.Ud] = "fcntr", tq[K.g.Vd] = "flng", tq[K.g.Wd] = "mid", tq[K.g.Og] = "bttype", tq[K.g.ab] = "label", tq[K.g.Db] = "capi", tq[K.g.Xd] = "pscdl", tq[K.g.ra] = "currency_code", tq[K.g.Yd] = "vdltv", tq[K.g.Cj] = "_dbg", tq[K.g.de] = "oedeld", tq[K.g.nb] = "edid", tq[K.g.Vg] = "fledge", tq[K.g.je] = "gac", tq[K.g.kc] = "gacgb", tq[K.g.gh] =
            "gacmcov", tq[K.g.ke] = "gdpr", tq[K.g.pb] = "gdid", tq[K.g.lh] = "gsaexp", tq[K.g.mh] = "frm", tq[K.g.ne] = "gtm_up", tq[K.g.oe] = "lps", tq[K.g.vf] = "did", tq[K.g.Tc] = void 0, tq[K.g.sb] = "tiba", tq[K.g.Gb] = "rdp", tq[K.g.ub] = "ecsid", tq[K.g.Yc] = "delopc", tq[K.g.te] = "gdpr_consent", tq[K.g.sa] = "oid", tq[K.g.Zc] = "uaa", tq[K.g.ad] = "uab", tq[K.g.bd] = "uafvl", tq[K.g.dd] = "uamb", tq[K.g.ed] = "uam", tq[K.g.fd] = "uap", tq[K.g.gd] = "uapv", tq[K.g.hd] = "uaw", tq[K.g.vh] = "ec_lat", tq[K.g.wh] = "ec_meta", tq[K.g.xh] = "ec_m", tq[K.g.yh] = "ec_sel", tq[K.g.zh] =
            "ec_s", tq[K.g.ue] = "ec_mode", tq[K.g.Pa] = "userId", tq[K.g.Bh] = "us_privacy", tq[K.g.ba] = "value", tq[K.g.nc] = "gclgb", tq[K.g.Ch] = "mcov", tq[K.g.Ih] = "hn", tq[K.g.Jh] = "gtm_ee", tq[K.g.sc] = "npa", tq[K.g.Kc] = null, tq[K.g.tb] = null, tq[K.g.Ha] = null, tq[K.g.W] = null, tq[K.g.za] = null, tq[K.g.Ja] = null, tq[K.g.Af] = null, tq),
        wq = function(a) {
            vq(a, function(b, c) {
                for (var d = rq(a, b), e = d.onSuccess, f = d.ol, h = {}, l = 0; l < f.length; h = {
                        Ba: void 0,
                        Rf: void 0,
                        xa: void 0,
                        Kf: void 0
                    }, l++) {
                    var m = f[l];
                    h.Ba = m.Ba;
                    h.Rf = m.format;
                    h.xa = m.xa;
                    h.Kf = m.attributes;
                    if (c && c.ii) {
                        var n = c.ii;
                        On(h.Ba + "&em=" + n.Qe, {
                            userData: n.P
                        }, h.xa && e ? e : function() {}, function(p) {
                            return function() {
                                ae(c.Ml, function(q) {
                                    var r = de(q);
                                    sq(p.Ba + "&em=" + encodeURIComponent(r.Qe), p.Rf, a, b, p.xa ? e : void 0, p.Kf)
                                })
                            }
                        }(h))
                    } else sq(h.Ba, h.Rf, a, b, h.xa ? e : void 0, h.Kf)
                }
            })
        },
        vq = function(a, b) {
            var c = a.metadata.hit_type,
                d = {},
                e = {},
                f, h = [],
                l = a.metadata.event_start_timestamp_ms;
            if ("conversion" === c || "remarketing" === c) d.cv = "11", d.fst = l, d.fmt = 3, d.bg = "ffffff", d.guid = "ON", d.async = "1";
            var m = gl(["aw", "dc"]);
            null != m && (d.gad_source =
                m);
            d.gtm = nj(Fl(a));
            "remarketing" !== c && bj() && (d.gcs = cj());
            d.gcd = gj(a.o);
            jj() && (d.dma_cps = hj());
            d.dma = ij();
            Gi(Oi()) && (d.tcfd = kj());
            Se.h && (d.tag_exp = Se.h);
            if (a.h[K.g.tb]) {
                var n = a.h[K.g.tb].split("x");
                2 === n.length && (d.u_w = n[0], d.u_h = n[1])
            }
            if (a.h[K.g.Ha]) {
                var p = a.h[K.g.Ha];
                2 === p.length ? d.hl = p : 5 === p.length && (d.hl = p.substring(0, 2), d.gl = p.substring(3, 5))
            }
            var q = a.metadata.redact_click_ids,
                r = function(D, I) {
                    var M = a.h[I];
                    M && (d[D] = q ? rh(M) : M)
                };
            r("url", K.g.za);
            r("ref", K.g.Ja);
            r("top", K.g.Af);
            k(a.h, function(D, I) {
                if (uq.hasOwnProperty(D)) {
                    var M =
                        uq[D];
                    M && (d[M] = I)
                } else e[D] = I
            });
            var t = a.h[K.g.Tc];
            void 0 != t && "" !== t && (d.vdnc = String(t));
            var u = a.h[K.g.Pc];
            void 0 !== u && (d.shf = u);
            var v = a.h[K.g.jc];
            void 0 !== v && (d.delc = v);
            if (P(55) && a.metadata.add_tag_timing) {
                d.tft = La();
                var w = jc();
                void 0 !== w && (d.tfd = Math.round(w))
            }
            d.data = nq(e);
            var x = a.h[K.g.W];
            x && "conversion" === c && (d.iedeld = Ol(x), d.item = mq(kq(x)));
            if (!("conversion" !== c && "user_data_lead" !== c && "user_data_web" !== c || !a.metadata.user_data || P(45) && !R(K.g.K) || P(15) && !R(K.g.F))) {
                var y = function() {
                    if ("user_data_web" ===
                        c) {
                        var D = lm(a.metadata.cookie_options);
                        d.ecsid = D
                    }
                };
                if (P(71) && P(81) && !Fe && !He) {
                    var z = be(a.metadata.user_data),
                        B = Qn(z);
                    f = {
                        ii: B,
                        Ml: z
                    };
                    var C = B.P;
                    C && 0 < Object.keys(C).length && y()
                } else {
                    var H = fe(a.metadata.user_data);
                    H && h.push(H.then(function(D) {
                        d.em = D.ui;
                        0 < D.rg && y()
                    }))
                }
            }
            if (h.length) try {
                Promise.all(h).then(function() {
                    b(d)
                });
                return
            } catch (D) {}
            b(d, f)
        };
    var xq = function() {
            this.h = {}
        },
        yq = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        zq = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        Bq = function(a, b, c, d) {
            if (!Hf()) {
                Aq(a, b, c, d);
                return
            }
            Yf(function() {
                R(K.g.F) ? Aq(a, b, c, d) : d && d()
            }, [K.g.F]);
        };
    var Cq = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d = {
                    gclgb: function() {
                        return rl("gb", b, c).join(".")
                    },
                    gacgb: function() {
                        return yl(c)
                    },
                    gclaw: function() {
                        return vl(b, c).join(".")
                    },
                    gac: function() {
                        return xl(c)
                    }
                },
                e = Al(b),
                f = e ? "gclgb" : "gclaw",
                h = e ? "gacgb" : "gac",
                l = d[h],
                m = (0, d[f])(),
                n = "_gcl" !== b ? "" : l();
            m && yq(a, f, m);
            n && yq(a, h, n)
        },
        Aq = function(a, b, c, d) {
            c = c || {};
            var e = c.vc || {},
                f = new xq;
            ee(b, function(h, l) {
                yq(f, "em", h);
                yq(f, "gtm", nj());
                bj() && yq(f, "gcs", cj());
                yq(f, "gcd", gj());
                jj() && yq(f, "dma_cps", hj());
                yq(f, "dma", ij());
                aj() ?
                    P(26) && yq(f, "npa", "0") : yq(f, "npa", "1");
                Gi(Oi()) && yq(f, "tcfd", kj());
                Se.h && yq(f, "tag_exp", Se.h);
                Cq(f, Uk(e.prefix), c.Te);
                yq(f, "auid", mk[ok(e.prefix)]);
                if (0 < l) {
                    var m = lm(e);
                    yq(f, "ecsid", m)
                }
                var n = zq(f);
                gc("https://google.com/pagead/form-data/" + a + "?" + n);
                gc("https://google.com/ccm/form-data/" + a + "?" + n);
                d && d()
            })
        };

    function Dq(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var Fq = function(a) {
            var b = vg(),
                c;
            c = void 0 === c ? !1 : c;
            var d = Eq(b);
            d.entity.push(a);
            d._entity || (d._entity = {
                internal: [],
                external: []
            });
            c ? d._entity.external.push(a) : d._entity.internal.push(a)
        },
        Gq = function() {
            var a = Eq(vg());
            if (P(92)) {
                var b, c;
                return [].concat(ka((null == a ? void 0 : null == (b = a._entity) ? void 0 : b.internal) || []), ka((null == a ? void 0 : null == (c = a._entity) ? void 0 : c.external) || []))
            }
            return a.entity
        },
        Hq = function(a) {
            var b = vg(),
                c;
            c = void 0 === c ? !1 : c;
            var d = Eq(b);
            d.event && (d.event.push(a), d._event || (d._event = {
                internal: [],
                external: []
            }), c ? d._event.external.push(a) : d._event.internal.push(a))
        },
        Iq = function() {
            var a = Eq(vg());
            if (P(92)) {
                var b, c;
                return [].concat(ka((null == a ? void 0 : null == (b = a._event) ? void 0 : b.internal) || []), ka((null == a ? void 0 : null == (c = a._event) ? void 0 : c.external) || []))
            }
            return a.event || []
        };

    function Eq(a) {
        var b, c = xe.r;
        c || (c = new Jq, xe.r = c);
        b = c;
        var d = b.container[a];
        d || (d = {
            entity: [],
            event: [],
            _entity: {
                internal: [],
                external: []
            },
            _event: {
                internal: [],
                external: []
            }
        }, b.container[a] = d);
        return d
    }
    var Jq = function() {
            this.container = {};
            this.h = {}
        },
        Kq = function(a, b) {
            var c = a.container[b];
            c || (c = {
                entity: [],
                event: [],
                _entity: {
                    internal: [],
                    external: []
                },
                _event: {
                    internal: [],
                    external: []
                }
            }, a.container[b] = c);
            return c
        };
    Jq.prototype.addRestriction = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        if (!d || !this.h[b]) {
            var e = Kq(this, b);
            0 === a ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : 1 === a && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    };
    Jq.prototype.getRestrictions = function(a, b) {
        var c = Kq(this, b);
        if (0 === a) {
            var d, e;
            return [].concat(ka((null == c ? void 0 : null == (d = c._entity) ? void 0 : d.internal) || []), ka((null == c ? void 0 : null == (e = c._entity) ? void 0 : e.external) || []))
        }
        if (1 === a) {
            var f, h;
            return [].concat(ka((null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) || []), ka((null == c ? void 0 : null == (h = c._event) ? void 0 : h.external) || []))
        }
        return []
    };
    Jq.prototype.getExternalRestrictions = function(a, b) {
        var c = Kq(this, b),
            d, e;
        return 0 === a ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) || [] : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) || []
    };
    Jq.prototype.removeExternalRestrictions = function(a) {
        var b = Kq(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.h[a] = !0
    };
    var Lq = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Mq = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Nq = {
            cl: ["ecl"],
            customPixels: ["customScripts",
                "html"
            ],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Oq = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        Rq = function(a) {
            var b = Xe("gtm.allowlist") || Xe("gtm.whitelist");
            b && J(9);
            De && (b = ["google", "gtagfl",
                "lcl", "zone"
            ]);
            Pq() && (De ? J(116) : (J(117), Qq && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
            var c = b && Pa(Ia(b), Mq),
                d = Xe("gtm.blocklist") || Xe("gtm.blacklist");
            d || (d = Xe("tagTypeBlacklist")) && J(3);
            d ? J(8) : d = [];
            Pq() && (d = Ia(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ia(d).indexOf("google") && J(2);
            var e = d && Pa(Ia(d), Nq),
                f = {};
            return function(h) {
                var l = h && h[mc.ka];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = Pe[l] || [],
                    n = a(l, m);
                if (!P(89))
                    for (var p = Gq(), q = 0; q < p.length; q++) try {
                        n = n && p[q](l, m)
                    } catch (y) {
                        n = !1
                    }
                if (b) {
                    var r;
                    if (r = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var t = 0; t < m.length; t++) {
                                    if (0 > c.indexOf(m[t])) {
                                        J(11);
                                        r = !1;
                                        break a
                                    }
                                } else {
                                    r = !1;
                                    break a
                                }
                        r = !0
                    }
                    n = r
                }
                var u = !1;
                if (d) {
                    var v = 0 <= e.indexOf(l);
                    if (v) u = v;
                    else {
                        var w = Da(e, m || []);
                        w && J(10);
                        u = w
                    }
                }
                var x = !n || u;
                x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Da(e, Oq));
                return f[l] = x
            }
        },
        Qq = !1;
    Qq = !0;
    var Pq = function() {
            return Lq.test(E.location && E.location.hostname)
        },
        Sq = function() {
            if (mg) {
                var a = function(b) {
                    var c = {};
                    c[mc.ka] = "__" + b;
                    for (var d in void 0)(void 0).hasOwnProperty(d) && (c["vtp_" + d] = (void 0)[d]);
                    var e;
                    if ($c(c)) {
                        var f = c[mc.ka];
                        if (!f) throw "Error: No function name given for function call.";
                        var h = Pc[f];
                        e = !!h && !!h.runInSiloedMode
                    } else e = !!Dq(c[mc.ka], 4);
                    return e
                };
                P(89) ? Fq(function(b) {
                    return a(b.entityId)
                }) : Fq(a)
            }
        };
    var Uq = function(a, b, c, d) {
            if (!Tq() && !Bg(a)) {
                var e = "?id=" + encodeURIComponent(a) + "&l=" + we.aa,
                    f = 0 === a.indexOf("GTM-");
                f || (e += "&cx=c");
                P(38) && (e += "&gtm=" + nj());
                var h = nm();
                h && (e += "&sign=" + we.Ce);
                var l = c ? "/gtag/js" : "/gtm.js",
                    m = Fe || He ? mm(b, l + e) : void 0;
                if (!m) {
                    var n = we.Cc + l;
                    h && Rb && f && (n = Rb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = Vl("https://", "http://", n + e)
                }
                var p = a;
                d.siloed && (Dg({
                    ctid: p,
                    isDestination: !1
                }), p = pg(p));
                var q = p,
                    r = Cg();
                ig().container[q] = {
                    state: 1,
                    context: d,
                    parent: r
                };
                jg({
                    ctid: q,
                    isDestination: !1
                });
                Xb(m)
            }
        },
        Vq = function(a, b, c) {
            var d;
            if (d = !Tq()) {
                var e = ig().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (Eg()) ig().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: Cg()
                }, jg({
                    ctid: a,
                    isDestination: !0
                }), J(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + we.aa + "&cx=c";
                    P(38) && (f += "&gtm=" + nj());
                    nm() && (f += "&sign=" + we.Ce);
                    var h = Fe || He ? mm(b, f) : void 0;
                    h || (h = Vl("https://", "http://", we.Cc + f));
                    var l = a;
                    c.siloed && (Dg({
                        ctid: l,
                        isDestination: !0
                    }), l = pg(l));
                    ig().destination[l] = {
                        state: 1,
                        context: c,
                        parent: Cg()
                    };
                    jg({
                        ctid: l,
                        isDestination: !0
                    });
                    Xb(h)
                }
        };

    function Tq() {
        if (lj()) {
            return !0
        }
        return !1
    };
    var Wq = !1,
        Xq = 0,
        Yq = [];

    function Zq(a) {
        if (!Wq) {
            var b = F.createEventObject,
                c = "complete" == F.readyState,
                d = "interactive" == F.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Wq = !0;
                for (var e = 0; e < Yq.length; e++) G(Yq[e])
            }
            Yq.push = function() {
                for (var f = 0; f < arguments.length; f++) G(arguments[f]);
                return 0
            }
        }
    }

    function vr() {
        if (!Wq && 140 > Xq) {
            Xq++;
            try {
                F.documentElement.doScroll("left"), Zq()
            } catch (a) {
                E.setTimeout(vr, 50)
            }
        }
    }
    var Br = function(a) {
        Wq ? a() : Yq.push(a)
    };
    var Cr = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: ug()
        }
    };
    var Er = function(a, b) {
            this.h = !1;
            this.J = [];
            this.M = {
                tags: []
            };
            this.T = !1;
            this.s = this.C = 0;
            Dr(this, a, b)
        },
        Fr = function(a, b, c, d) {
            if (Ae.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Za(d) && (e = A(d, e));
            e.id = c;
            e.status = "timeout";
            return a.M.tags.push(e) - 1
        },
        Gr = function(a, b, c, d) {
            var e = a.M.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Hr = function(a) {
            if (!a.h) {
                for (var b = a.J, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.J.length = 0
            }
        },
        Dr = function(a, b, c) {
            void 0 !== b && Ir(a, b);
            c && E.setTimeout(function() {
                return Hr(a)
            }, Number(c))
        },
        Ir =
        function(a, b) {
            var c = Na(function() {
                return G(function() {
                    b(ug(), a.M)
                })
            });
            a.h ? c() : a.J.push(c)
        },
        Jr = function(a) {
            a.C++;
            return Na(function() {
                a.s++;
                a.T && a.s >= a.C && Hr(a)
            })
        },
        Kr = function(a) {
            a.T = !0;
            a.s >= a.C && Hr(a)
        };
    var Lr = {},
        Nr = function() {
            return E[Mr()]
        },
        Or = !1;
    var Pr = function(a) {
            E.GoogleAnalyticsObject || (E.GoogleAnalyticsObject = a || "ga");
            var b = E.GoogleAnalyticsObject;
            if (E[b]) E.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ka());
                E[b] = c
            }
            return E[b]
        },
        Qr = function(a) {
            if (Hf()) {
                var b = Nr();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function Mr() {
        return E.GoogleAnalyticsObject || "ga"
    }
    var Rr = function(a) {},
        Sr = function(a, b) {
            return function() {
                var c = Nr(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var h = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > h.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            h, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Xr = {},
        Yr = {};

    function Zr(a, b) {
        if (Og) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Xr[a] = "&e=" + c + "&eid=" + a;
            Yg(a)
        }
    }

    function $r(a) {
        var b = a.eventId,
            c = a.Vb;
        if (!Xr[b]) return "";
        var d = Yr[b] ? "" : "&es=1";
        d += Xr[b];
        c && (Yr[b] = !0);
        return d
    };
    var as = {};

    function bs(a, b) {
        Og && (as[a] = as[a] || {}, as[a][b] = (as[a][b] || 0) + 1)
    }

    function cs(a) {
        var b = a.eventId,
            c = a.Vb,
            d = as[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete as[b];
        return e.length ? "&md=" + e.join(".") : ""
    };
    var ds = {},
        es = {};

    function fs(a, b, c) {
        if (Og && b) {
            var d = gg(b);
            ds[a] = ds[a] || [];
            ds[a].push(c + d);
            var e = ($c(b) ? "1" : "2") + d;
            es[a] = es[a] || [];
            es[a].push(e);
            Yg(a)
        }
    }

    function gs(a) {
        var b = a.eventId,
            c = a.Vb,
            d = "",
            e = ds[b] || [];
        e.length && (d += "&tr=" + e.join("."));
        var f = es[b] || [];
        f.length && (d += "&ti=" + f.join("."));
        c && (delete ds[b], delete es[b]);
        return d
    };

    function hs(a, b, c, d) {
        var e = Nc[a],
            f = is(a, b, c, d);
        if (!f) return null;
        var h = Xc(e[mc.Th], c, []);
        if (h && h.length) {
            var l = h[0];
            f = hs(l.index, {
                onSuccess: f,
                onFailure: 1 === l.ji ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function is(a, b, c, d) {
        function e() {
            if (f[mc.dk]) l();
            else {
                var w = Yc(f, c, []),
                    x = w[mc.Wi];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!R(x[y])) {
                            l();
                            return
                        }
                var z = Fr(c.Kb, String(f[mc.ka]), Number(f[mc.pd]), w[mc.ek]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var D = La() - H;
                        fs(c.id, Nc[a], "5");
                        Gr(c.Kb, z, "success", D);
                        P(16) && eq(c, f, op.D.Wh);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var D = La() - H;
                        fs(c.id, Nc[a], "6");
                        Gr(c.Kb, z, "failure", D);
                        P(16) && eq(c, f, op.D.Vh);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                fs(c.id, f, "1");
                var C = function() {
                    kf(3);
                    var D = La() - H;
                    fs(c.id, f, "7");
                    Gr(c.Kb, z, "exception", D);
                    P(16) && eq(c, f, op.D.Uh);
                    B || (B = !0, l())
                };
                P(16) && dq(c, f);
                var H = La();
                try {
                    Wc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    C(D)
                }
                P(16) && eq(c, f, op.D.Xh)
            }
        }
        var f = Nc[a],
            h = b.onSuccess,
            l = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = Xc(f[mc.Yh], c, []);
        if (n && n.length) {
            var p = n[0],
                q = hs(p.index, {
                    onSuccess: h,
                    onFailure: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            h = q;
            l = 2 ===
                p.ji ? m : q
        }
        if (f[mc.Oh] || f[mc.gk]) {
            var r = f[mc.Oh] ? Oc : c.mm,
                t = h,
                u = l;
            if (!r[a]) {
                e = Na(e);
                var v = js(a, r, e);
                h = v.onSuccess;
                l = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function js(a, b, c) {
        var d = [],
            e = [];
        b[a] = ks(d, e, c);
        return {
            onSuccess: function() {
                b[a] = ls;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = ms;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function ks(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function ls(a) {
        a()
    }

    function ms(a, b) {
        b()
    };
    var os = function(a, b) {
            return 1 === arguments.length ? ns("config", a) : ns("config", a, b)
        },
        ps = function(a, b, c) {
            c = c || {};
            c[K.g.Hb] = a;
            return ns("event", b, c)
        };

    function ns(a) {
        return arguments
    }
    var qs = function() {
        this.h = [];
        this.s = []
    };
    qs.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.s.length; f++) try {
            this.s[f](e)
        } catch (h) {}
    };
    qs.prototype.listen = function(a) {
        this.s.push(a)
    };
    qs.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    qs.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var ss = function(a, b, c) {
            c.eventMetadata = c.eventMetadata || {};
            c.eventMetadata.source_canonical_id = ng.Ge;
            rs().enqueue(a, b, c)
        },
        us = function() {
            var a = ts;
            rs().listen(a)
        };

    function rs() {
        var a = xe.mb;
        a || (a = new qs, xe.mb = a);
        return a
    }
    var Cs = function(a) {
            var b = xe.zones;
            return b ? b.getIsAllowedFn(qg(), a) : function() {
                return !0
            }
        },
        Ds = function(a) {
            var b = xe.zones;
            return b ? b.isActive(qg(), a) : !0
        },
        Es = function() {
            P(88) ? Hq(function(a) {
                return Ds(a.originalEventData["gtm.uniqueEventId"])
            }) : Hq(function(a, b) {
                return Ds(b)
            });
            P(89) && P(90) && Fq(function(a) {
                var b = a.entityId,
                    c = a.securityGroups;
                return Cs(a.originalEventData["gtm.uniqueEventId"])(b, c)
            })
        };
    var Hs = function(a, b) {
        for (var c = [], d = 0; d < Nc.length; d++)
            if (a[d]) {
                var e = Nc[d];
                var f = Jr(b.Kb);
                try {
                    var h = hs(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (h) {
                        var l = e[mc.ka];
                        if (!l) throw "Error: No function name given for function call.";
                        var m = Pc[l];
                        c.push({
                            Mi: d,
                            zi: (m ? m.priorityOverride || 0 : 0) || Dq(e[mc.ka], 1) || 0,
                            execute: h
                        })
                    } else Fs(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(Gs);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function Gs(a, b) {
        var c, d = b.zi,
            e = a.zi;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var h = a.Mi,
                l = b.Mi;
            f = h > l ? 1 : h < l ? -1 : 0
        }
        return f
    }

    function Fs(a, b) {
        if (Og) {
            var c = function(d) {
                var e = b.isBlocked(Nc[d]) ? "3" : "4",
                    f = Xc(Nc[d][mc.Th], b, []);
                f && f.length && c(f[0].index);
                fs(b.id, Nc[d], e);
                var h = Xc(Nc[d][mc.Yh], b, []);
                h && h.length && c(h[0].index)
            };
            c(a)
        }
    }
    var Ks = !1,
        Is;
    var Ps = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (P(16)) {}
        if ("gtm.js" === d) {
            if (Ks) return !1;
            Ks = !0
        }
        var e, f = !1,
            h = Iq(),
            l;
        if (P(88)) {
            var m = A(a);
            l = h.every(function(w) {
                return w({
                    originalEventData: m
                })
            })
        } else l = h.every(function(w) {
            return w(d, b)
        });
        if (l) e = Cs(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !==
                d) return !1;
            f = !0;
            e = Cs(Number.MAX_SAFE_INTEGER)
        }
        Zr(b, d);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = A(a),
            r = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: Ls(e, q),
                mm: [],
                logMacroError: function() {
                    J(6);
                    kf(0)
                },
                cachedModelValues: Ms(),
                Kb: new Er(function() {
                    if (P(16)) {}
                    n &&
                        n.apply(n, [].slice.call(arguments, 0))
                }, p),
                originalEventData: q
            };
        P(29) && (r.reportMacroDiscrepancy = bs);
        P(16) && $p(r.id, r.name);
        var t = cd(r);
        P(16) && aq(r.id, r.name);
        f && (t = Ns(t));
        if (P(16)) {}
        var u = Hs(t, r),
            v = !1;
        Kr(r.Kb);
        "gtm.js" !== d && "gtm.sync" !== d || Rr(ug());
        return Os(t, u) || v
    };

    function Ms() {
        var a = {};
        a.event = af("event", 1);
        a.ecommerce = af("ecommerce", 1);
        a.gtm = af("gtm");
        a.eventModel = af("eventModel");
        return a
    }

    function Ls(a, b) {
        var c = Rq(a);
        return P(89) ? function(d) {
            if (c(d)) return !0;
            var e = d && d[mc.ka];
            if (!e || "string" != typeof e) return !0;
            e = e.replace(/^_*/, "");
            for (var f = Gq(), h = Pe[e] || [], l = ia(f), m = l.next(); !m.done; m = l.next()) {
                var n = m.value;
                try {
                    if (!n({
                            entityId: e,
                            securityGroups: h,
                            originalEventData: b
                        })) return !0
                } catch (p) {
                    return !0
                }
            }
            return !1
        } : c
    }

    function Ns(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Nc[c][mc.ka]);
                if (ze[d] || void 0 !== Nc[c][mc.hk] || Dq(d, 2)) b[c] = !0
            }
        return b
    }

    function Os(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Nc[c] && !Ae[String(Nc[c][mc.ka])]) return !0;
        return !1
    }
    var Qs = {},
        Rs = {},
        Ss = function(a, b) {
            for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                    qg: void 0,
                    Vf: void 0
                }, f++) {
                var h = a[f];
                if (0 <= h.indexOf("-")) {
                    if (e.qg = dg(h, b), e.qg) {
                        var l = sg();
                        Aa(l, function(r) {
                            return function(t) {
                                return r.qg.Z === t
                            }
                        }(e)) ? c.push(h) : d.push(h)
                    }
                } else {
                    var m = Qs[h] || [];
                    e.Vf = {};
                    m.forEach(function(r) {
                        return function(t) {
                            return r.Vf[t] = !0
                        }
                    }(e));
                    for (var n = qg(), p = 0; p < n.length; p++)
                        if (e.Vf[n[p]]) {
                            c = c.concat(sg());
                            break
                        }
                    var q = Rs[h] || [];
                    q.length && (c = c.concat(q))
                }
            }
            return {
                Jl: c,
                Ll: d
            }
        },
        Ts = function(a) {
            k(Qs, function(b,
                c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        Us = function(a) {
            k(Rs, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Vs = "HA GF G UA AW DC MC".split(" "),
        Ws = !1,
        Xs = !1;

    function Ys(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Qe()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Zs = void 0,
        $s = void 0;

    function at(a, b, c) {
        var d = A(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && J(136);
        var e = A(b);
        A(c, e);
        ss(os(qg()[0], e), a.eventId, d)
    }

    function bt(a) {
        for (var b = ia([K.g.Wc, K.g.Ib]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || Zh.C[d];
            if (e) return e
        }
    }
    var ct = {
            config: function(a, b) {
                var c = P(30),
                    d = Ys(a, b);
                if (!(2 > a.length) && g(a[1])) {
                    var e = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Za(a[2]) || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = dg(a[1], b.isGtmEvent);
                    if (f) {
                        var h, l, m;
                        a: {
                            if (!lg.kd) {
                                var n = wg(Cg());
                                if (Gg(n)) {
                                    var p = n.parent,
                                        q = p.isDestination;
                                    m = {
                                        Ql: wg(p),
                                        Il: q
                                    };
                                    break a
                                }
                            }
                            m = void 0
                        }
                        var r = m;
                        r && (h = r.Ql, l = r.Il);
                        Zr(d.eventId, "gtag.config");
                        var t = f.Z,
                            u = f.id !== t;
                        if (u ? -1 === sg().indexOf(t) : -1 === qg().indexOf(t)) {
                            if (!(c && b.inheritParentConfig || e[K.g.rb])) {
                                var v = bt(e);
                                if (u) Vq(t, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (c && void 0 !== h && -1 !== h.containers.indexOf(t)) {
                                    var w = e;
                                    Zs ? at(b, w, Zs) : $s || ($s = A(w))
                                } else Uq(t, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (h && (J(128), l && J(130), c && b.inheritParentConfig)) {
                                var x;
                                var y = e;
                                $s ? (at(b, $s, y), x = !1) : (!y[K.g.Jb] && Ce && Zs || (Zs = A(y)), x = !0);
                                x && h.containers && h.containers.join(",");
                                return
                            }
                            if (Ce && !u && !e[K.g.Jb]) {
                                var z = Xs;
                                Xs = !0;
                                if (z) return
                            }
                            Ws || J(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    Us(f.id);
                                    var B = f.id,
                                        C = e[K.g.me] ||
                                        "default";
                                    C = String(C).split(",");
                                    for (var H = 0; H < C.length; H++) {
                                        var D = Rs[C[H]] || [];
                                        Rs[C[H]] = D;
                                        0 > D.indexOf(B) && D.push(B)
                                    }
                                } else {
                                    Ts(f.id);
                                    var I = f.id,
                                        M = e[K.g.me] || "default";
                                    M = M.toString().split(",");
                                    for (var L = 0; L < M.length; L++) {
                                        var O = Qs[M[L]] || [];
                                        Qs[M[L]] = O;
                                        0 > O.indexOf(I) && O.push(I)
                                    }
                                }
                            delete e[K.g.me];
                            var T = b.eventMetadata || {};
                            T.hasOwnProperty("is_external_event") || (T.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = T;
                            delete e[K.g.Qc];
                            for (var Q = u ? [f.id] : sg(), S = 0; S < Q.length; S++) {
                                var da = e,
                                    ca = Q[S],
                                    Z = A(b),
                                    ua = dg(ca, Z.isGtmEvent);
                                ua && Zh.push("config", [da], ua, Z)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    J(39);
                    var c = Ys(a, b),
                        d = a[1],
                        e = a[2];
                    b.fromContainerExecution || (e[K.g.K] && J(139), e[K.g.ya] && J(140));
                    "default" === d ? Uf(e) : "update" === d ? Vf(e, c) : "declare" === d ? b.fromContainerExecution && Tf(e) : P(62) && "core_platform_services" === d && Wf(e)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && g(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Za(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        h = (f.event = c, f);
                    e && (h.eventModel =
                        A(e), e[K.g.Qc] && (h.eventCallback = e[K.g.Qc]), e[K.g.fe] && (h.eventTimeout = e[K.g.fe]));
                    var l = Ys(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    h["gtm.uniqueEventId"] = m;
                    n && (h["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return h.eventModel = h.eventModel || {}, h;
                    var p;
                    var q = d,
                        r = q && q[K.g.Hb];
                    void 0 === r && (r = Xe(K.g.Hb, 2), void 0 === r && (r = "default"));
                    if (g(r) || za(r)) {
                        var t;
                        b.isGtmEvent ? t = g(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                        var u = Ss(t, b.isGtmEvent),
                            v = u.Jl,
                            w = u.Ll;
                        if (w.length)
                            for (var x = bt(q), y = 0; y < w.length; y++) {
                                var z =
                                    dg(w[y], b.isGtmEvent);
                                z && Vq(z.Z, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = fg(v, b.isGtmEvent)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        Zr(m, c);
                        for (var C = [], H = 0; H < B.length; H++) {
                            var D = B[H],
                                I = A(b);
                            if (-1 !== Vs.indexOf(xg(D.prefix))) {
                                var M = A(d),
                                    L = I.eventMetadata || {};
                                L.hasOwnProperty("is_external_event") || (L.is_external_event = !I.fromContainerExecution);
                                I.eventMetadata = L;
                                delete M[K.g.Qc];
                                $h(c, M, D.id, I)
                            }
                            C.push(D.id)
                        }
                        h.eventModel = h.eventModel || {};
                        0 < B.length ? h.eventModel[K.g.Hb] = C.join() : delete h.eventModel[K.g.Hb];
                        Ws || J(43);
                        void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        h.eventModel[K.g.qb] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : h
                    }
                }
            },
            get: function(a, b) {
                J(53);
                if (4 === a.length && g(a[1]) && g(a[2]) && xa(a[3])) {
                    var c = dg(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        Ws || J(43);
                        var f = bt();
                        if (!Aa(sg(), function(l) {
                                return c.Z === l
                            })) Vq(c.Z, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== Vs.indexOf(xg(c.prefix))) {
                            Ys(a, b);
                            var h = {};
                            Qf(A((h[K.g.eb] = d, h[K.g.ob] =
                                e, h)));
                            ai(d, function(l) {
                                G(function() {
                                    return e(l)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    Ws = !0;
                    var c = Ys(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && Za(a[1]) ? c = A(a[1]) : 3 == a.length && g(a[1]) && (c = {}, Za(a[2]) || za(a[2]) ? c[a[1]] = A(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = Ys(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    A(c);
                    var h = A(c);
                    Zh.push("set", [h],
                        void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    P(9) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        dt = {
            policy: !0
        };
    var et = function(a) {
            var b = E[we.aa].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        ft = function(a) {
            var b = E[we.aa],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var gt = !1,
        ht = [];

    function it() {
        if (!gt) {
            gt = !0;
            for (var a = 0; a < ht.length; a++) G(ht[a])
        }
    }
    var jt = function(a) {
        gt ? G(a) : ht.push(a)
    };
    var Bt = function(a) {
        if (At(a)) return a;
        this.h = a
    };
    Bt.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var At = function(a) {
        return !a || "object" !== Wa(a) || Za(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Bt.prototype.getUntrustedMessageValue = Bt.prototype.getUntrustedMessageValue;
    var Ct = 0,
        Dt = {},
        Et = [],
        Ft = [],
        Gt = !1,
        Ht = !1;

    function It(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Jt = function(a) {
            return E[we.aa].push(a)
        },
        Kt = function(a, b) {
            if (!ya(b) || 0 > b) b = 0;
            var c = xe[we.aa],
                d = 0,
                e = !1,
                f = void 0;
            f = E.setTimeout(function() {
                e || (e = !0, a());
                f = void 0
            }, b);
            return function() {
                var h = c ? c.subscribers : 1;
                ++d === h && (f && (E.clearTimeout(f), f = void 0), e || (a(), e = !0))
            }
        };

    function Lt(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function(e, f) {
            "_clear" !== e && (c && $e(e), $e(e, f))
        });
        Me || (Me = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Qe(), a["gtm.uniqueEventId"] = d, $e("gtm.uniqueEventId", d));
        return Ps(a)
    }

    function Mt(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ea(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Nt() {
        var a;
        if (Ft.length) a = Ft.shift();
        else if (Et.length) a = Et.shift();
        else return;
        var b;
        var c = a;
        if (Gt || !Mt(c.message)) b = c;
        else {
            Gt = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Qe());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                h = {},
                l = {
                    message: (h.event = "gtm.init", h["gtm.uniqueEventId"] = d - 1, h),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Et.unshift(l, c);
            if (Og) {
                var m = ng.ctid;
                if (m) {
                    var n, p = wg(Cg());
                    n = p && p.context;
                    var q, r = qh(E.location.href);
                    q = r.hostname + r.pathname;
                    var t = n && n.fromContainerExecution,
                        u = n && n.source,
                        v = ng.Ge,
                        w = lg.kd;
                    Og && (bh || (bh = q), ch.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }

    function Ot() {
        for (var a = !1, b; !Ht && (b = Nt());) {
            Ht = !0;
            delete Ue.eventModel;
            We();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Ht = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], h = 0; h < f.length; h++) {
                        var l = f[h],
                            m = Xe(l, 1);
                        if (za(m) || Za(m)) m = A(m);
                        Ve[l] = m
                    }
                try {
                    if (xa(d)) try {
                        d.call(Ye)
                    } catch (C) {} else if (za(d)) {
                        var n = d;
                        if (g(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                r = n.slice(1),
                                t = Xe(p.join("."), 2);
                            if (null != t) try {
                                t[q].apply(t, r)
                            } catch (C) {}
                        }
                    } else {
                        var u =
                            void 0,
                            v = !1;
                        if (Ea(d)) {
                            a: {
                                if (d.length && g(d[0])) {
                                    var w = ct[d[0]];
                                    if (w && (!e.fromContainerExecution || !dt[d[0]])) {
                                        u = w(d, e);
                                        break a
                                    }
                                }
                                u = void 0
                            }(v = u && "set" === d[0] && !!u.event) && J(101)
                        }
                        else u = d;
                        if (u) {
                            var x = Lt(u, e);
                            a = x || a;
                            v && x && J(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && We(!0);
                    var y = d["gtm.uniqueEventId"];
                    if ("number" === typeof y) {
                        for (var z = Dt[String(y)] || [], B = 0; B < z.length; B++) Ft.push(Pt(z[B]));
                        z.length && Ft.sort(It);
                        delete Dt[String(y)];
                        y > Ct && (Ct = y)
                    }
                    Ht = !1
                }
            }
        }
        return !a
    }

    function Qt() {
        if (P(16)) {
            var a = Rt();
        }
        var b = Ot();
        if (P(16)) {}
        try {
            et(ug())
        } catch (c) {}
        return b
    }

    function ts(a) {
        if (Ct < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Dt[b] = Dt[b] || [];
            Dt[b].push(a)
        } else Ft.push(Pt(a)), Ft.sort(It), G(function() {
            Ht || Ot()
        })
    }

    function Pt(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var St = function() {
            function a(f) {
                var h = {};
                if (At(f)) {
                    var l = f;
                    f = At(l) ? l.getUntrustedMessageValue() : void 0;
                    h.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: h
                }
            }
            var b = Sb(we.aa, []),
                c = xe[we.aa] = xe[we.aa] || {};
            !0 === c.pruned && J(83);
            Dt = rs().get();
            us();
            Br(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            jt(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < xe.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var h = 0; h < arguments.length; h++) f[h] = new Bt(arguments[h])
                } else f = [].slice.call(arguments, 0);
                var l = f.map(function(q) {
                    return a(q)
                });
                Et.push.apply(Et, l);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (J(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return Ot() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            Et.push.apply(Et, e);
            if (Rt()) {
                if (P(16)) {}
                G(Qt)
            }
        },
        Rt = function() {
            var a = !0;
            return a
        };

    function Tt(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = La();
        return b < c + 3E5 && b > c - 9E5
    }

    function Ut(a) {
        return a && 0 === a.indexOf("pending:") ? Tt(a.substr(8)) : !1
    };
    var ou = function() {};
    var pu = function() {};
    pu.prototype.toString = function() {
        return "undefined"
    };
    var qu = new pu;
    var xu = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": hc(a, "className"),
                "gtm.elementId": a["for"] || cc(a, "id") || "",
                "gtm.elementTarget": a.formTarget || hc(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || hc(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        yu = function(a) {
            xe.hasOwnProperty("autoEventsSettings") || (xe.autoEventsSettings = {});
            var b = xe.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        zu = function(a, b, c) {
            yu(a)[b] = c
        },
        Au = function(a, b, c, d) {
            var e = yu(a),
                f = Ma(e, b, d);
            e[b] = c(f)
        },
        Bu = function(a, b, c) {
            var d = yu(a);
            return Ma(d, b, c)
        };
    var Vu = E.clearTimeout,
        Wu = E.setTimeout,
        V = function(a, b, c, d) {
            if (lj()) {
                b && G(b)
            } else return Xb(a, b, c, d)
        },
        Xu = function() {
            return new Date
        },
        Yu = function() {
            return E.location.href
        },
        Zu = function(a) {
            return lh(qh(a), "fragment")
        },
        $u = function(a) {
            return mh(qh(a))
        },
        av = function(a, b) {
            return Xe(a, b || 2)
        },
        bv = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Jt(a)) : d = Jt(a);
            return d
        },
        cv = function(a, b) {
            E[a] = b
        },
        W = function(a, b, c) {
            b &&
                (void 0 === E[a] || c && !E[a]) && (E[a] = b);
            return E[a]
        },
        dv = function(a, b, c) {
            return sj(a, b, void 0 === c ? !0 : !!c)
        },
        ev = function(a, b, c) {
            return 0 === Bj(a, b, c)
        },
        fv = function(a, b) {
            if (lj()) {
                b && G(b)
            } else Zb(a, b)
        },
        gv = function(a) {
            return !!Bu(a, "init", !1)
        },
        hv = function(a) {
            zu(a, "init", !0)
        };

    function Ev(a, b) {
        function c(h) {
            var l = qh(h),
                m = lh(l, "protocol"),
                n = lh(l, "host", !0),
                p = lh(l, "port"),
                q = lh(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Fv(a) {
        return Gv(a) ? 1 : 0
    }

    function Gv(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = A(a, {});
                A({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Fv(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var h = 0; h < td.length; h++) {
                            var l = td[h];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (v) {}
                    f = !1
                }
                return f;
            case "_ew":
                var m, n;
                m = String(b);
                n = String(c);
                var p = m.length - n.length;
                return 0 <= p && m.indexOf(n, p) === p;
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var q;
                var r = a.ignore_case ? "i" : void 0;
                try {
                    var t = String(c) + r,
                        u = ud.get(t);
                    u || (u = new RegExp(c, r), ud.set(t, u));
                    q = u.test(b)
                } catch (v) {
                    q = !1
                }
                return q;
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Ev(b, c)
        }
        return !1
    };

    function Hv() {
        var a = ["&cv=3", "&rv=" + we.Gf, "&tc=" + Nc.filter(function(b) {
            return b
        }).length];
        we.nd && a.push("&x=" + we.nd);
        Se.h && a.push("&tag_exp=" + Se.h);
        return a.join("")
    };

    function Iv() {
        var a = mf();
        return a.length ? "&exp_geo=" + a : ""
    }
    var Jv;

    function Kv() {
        try {
            null != Jv || (Jv = (new Intl.DateTimeFormat).resolvedOptions().timeZone)
        } catch (b) {}
        var a;
        return (null == (a = Jv) ? 0 : a.length) ? "&exp_tz=" + Jv : ""
    };
    var Lv = function(a, b) {
            var c;
            b ? (c = [$o, Uo, dp, ep, gp, Ro, Vo, jp], P(93) && c.push(Ll), c = c.concat([Wo, hp, ip, bp, So, np, Xo, fp, Po, Oo, kp, Lo])) : c = [Kl, Qo, Go, To, Ho, Io, Jo, Ko, Yo, Zo, ap, cp, lp, mp];
            for (var d = 0; d < c.length && (c[d](a), !a.isAborted); d++);
        },
        Mv = function(a, b, c, d) {
            var e = new El(b, c, d);
            e.metadata.hit_type = a;
            e.metadata.speculative = !0;
            e.metadata.event_start_timestamp_ms = La();
            e.metadata.speculative_in_message = d.eventMetadata.speculative;
            return e
        },
        Nv = function(a, b, c, d) {
            function e() {
                for (var r = 0; r < h.length; r++) {
                    var t = h[r];
                    t.isAborted || (Lv(h[r], !0), t.metadata.speculative || t.isAborted || wq(t))
                }
            }
            var f = dg(a, d.isGtmEvent);
            if (f) {
                var h = [];
                if (d.eventMetadata.hit_type_override) {
                    var l = d.eventMetadata.hit_type_override;
                    Array.isArray(l) || (l = [l]);
                    for (var m = 0; m < l.length; m++) {
                        var n = Mv(l[m], f, b, d);
                        n.metadata.speculative = !1;
                        h.push(n)
                    }
                } else b === K.g.oa && h.push(Mv("landing_page", f, b, d)), h.push(Mv("conversion", f, b, d)), h.push(Mv("user_data_lead", f, b, d)), h.push(Mv("user_data_web", f, b, d)), h.push(Mv("remarketing", f, b, d));
                for (var p = 0; p < h.length; p++) Lv(h[p], !1);
                var q = [K.g.F];
                P(45) && q.push(K.g.K);
                Yf(function() {
                    for (var r = [], t = [], u = 0; u < h.length; u++) {
                        var v = h[u];
                        r.push(v.isAborted);
                        t.push(v.metadata.speculative)
                    }
                    e();
                    R(q) || Xf(function(w) {
                        var x = w.consentEventId,
                            y = w.consentPriorityId;
                        if (R(q)) {
                            for (var z = 0; z < h.length; z++) {
                                var B = h[z];
                                B.metadata.consent_updated = !0;
                                B.metadata.speculative = t[z];
                                B.metadata.event_start_timestamp_ms = La();
                                B.isAborted = r[z];
                                B.metadata.consent_event_id = x;
                                B.metadata.consent_priority_id = y
                            }
                            e()
                        }
                    }, q)
                }, q)
            }
        };
    var ow = function() {
        var a = !0;
        Wi(7) && Wi(9) && Wi(10) || (a = !1);
        return a
    };
    var sw = function(a, b) {
            if (!b.isGtmEvent) {
                var c = U(b, K.g.eb),
                    d = U(b, K.g.ob),
                    e = U(b, c);
                if (void 0 === e) {
                    var f = void 0;
                    pw.hasOwnProperty(c) ? f = pw[c] : qw.hasOwnProperty(c) && (f = qw[c]);
                    1 === f && (f = rw(c));
                    g(f) ? Nr()(function() {
                        var h = Nr().getByName(a).get(f);
                        d(h)
                    }) : d(void 0)
                } else d(e)
            }
        },
        tw = function(a, b) {
            var c = a[K.g.mc],
                d = b + ".",
                e = a[K.g.R] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                h = !!a[K.g.Fb];
            e = String(e).replace(/\s+/g, "").split(",");
            var l = Nr();
            l(d + "require", "linker");
            l(d + "linker:autoLink", e, f, h)
        },
        xw = function(a,
            b, c) {
            if (Hf() || P(24))
                if (!c.isGtmEvent || !uw[a]) {
                    var d = !R(K.g.O),
                        e = function(f) {
                            var h, l, m = Nr(),
                                n = vw(b, "", c),
                                p, q = n.createOnlyFields._useUp;
                            if (c.isGtmEvent || ww(b, n.createOnlyFields)) {
                                c.isGtmEvent && (h = "gtm" + Qe(), l = n.createOnlyFields, n.gtmTrackerName && (l.name = h));
                                m(function() {
                                    var t = m.getByName(b);
                                    t && (p = t.get("clientId"));
                                    c.isGtmEvent || m.remove(b)
                                });
                                m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
                                d && R(K.g.O) && (d = !1, m(function() {
                                    var t = Nr().getByName(c.isGtmEvent ? h : b);
                                    !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = re[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = re[f]), t.set(n.fieldsToSet), c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                                }));
                                c.isGtmEvent && m(function() {
                                    m.remove(h)
                                })
                            }
                        };
                    Xf(function() {
                        return e(K.g.O)
                    }, K.g.O);
                    Xf(function() {
                            return e(K.g.F)
                        },
                        K.g.F);
                    c.isGtmEvent && (uw[a] = !0)
                }
        },
        yw = function(a, b) {
            nm() && b && (a[K.g.cb] = b)
        },
        Hw = function(a, b, c) {
            function d() {
                var L = U(c, K.g.Mc);
                l(function() {
                    if (!c.isGtmEvent && Za(L)) {
                        var O = u.fieldsToSend,
                            T = m().getByName(n),
                            Q;
                        for (Q in L)
                            if (L.hasOwnProperty(Q) && /^(dimension|metric)\d+$/.test(Q) && void 0 != L[Q]) {
                                var S = T.get(rw(L[Q]));
                                zw(O, Q, S)
                            }
                    }
                })
            }

            function e() {
                if (u.displayfeatures) {
                    var L = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: L
                    })
                }
            }
            var f = a,
                h, l = c.isGtmEvent ? Pr(U(c, "gaFunctionName")) :
                Pr();
            if (xa(l)) {
                var m = Nr,
                    n;
                c.isGtmEvent ? n = U(c, "name") || U(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(L) {
                        var O = [].slice.call(arguments, 0);
                        O[0] = n ? n + "." + O[0] : "" + O[0];
                        l.apply(window, O)
                    },
                    q = function(L) {
                        var O = function(Z, ua) {
                                for (var ea = 0; ua && ea < ua.length; ea++) p(Z, ua[ea])
                            },
                            T = c.isGtmEvent,
                            Q = T ? Aw(u) : Bw(b, c);
                        if (Q) {
                            var S = {};
                            yw(S, L);
                            p("require", "ec", "ec.js", S);
                            T && Q.Nf && p("set", "&cu", Q.Nf);
                            var da = Q.action;
                            if (T || "impressions" === da)
                                if (O("ec:addImpression", Q.oi), !T) return;
                            if ("promo_click" ===
                                da || "promo_view" === da || T && Q.Md) {
                                var ca = Q.Md;
                                O("ec:addPromo", ca);
                                if (ca && 0 < ca.length && "promo_click" === da) {
                                    T ? p("ec:setAction", da, Q.Va) : p("ec:setAction", da);
                                    return
                                }
                                if (!T) return
                            }
                            "promo_view" !== da && "impressions" !== da && (O("ec:addProduct", Q.Rb), p("ec:setAction", da, Q.Va))
                        }
                    },
                    r = function(L) {
                        if (L) {
                            var O = {};
                            if (Za(L))
                                for (var T in Cw) Cw.hasOwnProperty(T) && Dw(Cw[T], T, L[T], O);
                            yw(O, y);
                            p("require", "linkid", O)
                        }
                    },
                    t = function() {
                        if (lj()) {} else {
                            var L =
                                U(c, K.g.Mj);
                            L && (p("require", L, {
                                dataLayer: we.aa
                            }), p("require", "render"))
                        }
                    },
                    u = vw(n, b, c),
                    v = function(L, O, T) {
                        T && (O = "" + O);
                        u.fieldsToSend[L] = O
                    };
                !c.isGtmEvent && ww(n, u.createOnlyFields) && (l(function() {
                    m() && m().remove(n)
                }), Ew[n] = !1);
                l("create", f, u.createOnlyFields);
                var w = c.isGtmEvent && u.fieldsToSet[K.g.cb] && P(87);
                if (!c.isGtmEvent && u.createOnlyFields[K.g.cb] || w) {
                    var x = Fe || He ? mm(c.isGtmEvent ? u.fieldsToSet[K.g.cb] : u.createOnlyFields[K.g.cb], "/analytics.js") : void 0;
                    x && (h = x)
                }
                var y = c.isGtmEvent ? u.fieldsToSet[K.g.cb] :
                    u.createOnlyFields[K.g.cb];
                if (y) {
                    var z = c.isGtmEvent ? u.fieldsToSet[K.g.ie] : u.createOnlyFields[K.g.ie];
                    z && !Ew[n] && (Ew[n] = !0, l(Sr(n, z)))
                }
                c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(u.linkAttribution));
                var B = u[K.g.Ia];
                B && B[K.g.R] && tw(B, n);
                p("set", u.fieldsToSet);
                if (c.isGtmEvent) {
                    if (u.enableLinkId) {
                        var C = {};
                        yw(C, y);
                        p("require", "linkid", "linkid.js", C)
                    }
                    xw(f, n, c)
                }
                if (b === K.g.bc)
                    if (c.isGtmEvent) {
                        e();
                        if (u.remarketingLists) {
                            var H = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require",
                                "adfeatures", {
                                    cookieName: H
                                })
                        }
                        q(y);
                        p("send", "pageview");
                        u.createOnlyFields._useUp && Qr(n + ".")
                    } else t(), p("send", "pageview", u.fieldsToSend);
                else b === K.g.oa ? (t(), fm(f, c), U(c, K.g.vb) && (fl(["aw", "dc"]), Qr(n + ".")), hl(["aw", "dc"]), 0 != u.sendPageView && p("send", "pageview", u.fieldsToSend), xw(f, n, c)) : b === K.g.La ? sw(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.isGtmEvent ? v("timingVar", u.timingVar, !0) :
                    v("timingVar", u.name, !0), v("timingValue", Fa(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || Fw[b]) && q(y), c.isGtmEvent && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value && v("eventValue", Fa(u.value))), p("send", u.fieldsToSend));
                var D = h && P(87) && !c.eventMetadata.suppress_script_load;
                if (!Gw && (!c.isGtmEvent || D)) {
                    h = h || "https://www.google-analytics.com/analytics.js";
                    Gw = !0;
                    var I = function() {
                            c.onFailure()
                        },
                        M = function() {
                            m().loaded || I()
                        };
                    lj() ? G(M) : Xb(h, M, I)
                }
            } else G(c.onFailure)
        },
        Iw = function(a, b, c, d) {
            Yf(function() {
                Hw(a, b, d)
            }, [K.g.O, K.g.F])
        },
        Kw = function(a) {
            function b(e) {
                function f(l,
                    m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            h[l] = e[p];
                            break
                        }
                    }
                }
                var h = A(e);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant", "item_variant"]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) h.category = e.category;
                    else {
                        for (var l = "", m = 0; m < Jw.length; m++) void 0 !== e[Jw[m]] && (l && (l += "/"), l += e[Jw[m]]);
                        l && (h.category = l)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return h
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && Za(a[d]) && c.push(b(a[d]));
            return c.length ? c : void 0
        },
        Lw = function(a) {
            return R(a)
        },
        Mw = !1;
    var Gw, Ew = {},
        uw = {},
        Nw = {},
        Ow = Object.freeze((Nw.page_hostname = 1, Nw[K.g.ja] = 1, Nw[K.g.Za] = 1, Nw[K.g.Sa] = 1, Nw[K.g.Ga] = 1, Nw[K.g.Ta] = 1, Nw[K.g.hc] =
            1, Nw[K.g.Lc] = 1, Nw[K.g.Na] = 1, Nw[K.g.ic] = 1, Nw[K.g.za] = 1, Nw[K.g.Uc] = 1, Nw[K.g.Ja] = 1, Nw[K.g.sb] = 1, Nw)),
        Pw = {},
        pw = Object.freeze((Pw.client_storage = "storage", Pw.sample_rate = 1, Pw.site_speed_sample_rate = 1, Pw.store_gac = 1, Pw.use_amp_client_id = 1, Pw[K.g.lb] = 1, Pw[K.g.Ea] = "storeGac", Pw[K.g.Sa] = 1, Pw[K.g.Ga] = 1, Pw[K.g.Ta] = 1, Pw[K.g.hc] = 1, Pw[K.g.Lc] = 1, Pw[K.g.ic] = 1, Pw)),
        Qw = {},
        Rw = Object.freeze((Qw._cs = 1, Qw._useUp = 1, Qw.allowAnchor = 1, Qw.allowLinker = 1, Qw.alwaysSendReferrer = 1, Qw.clientId = 1, Qw.cookieDomain = 1, Qw.cookieExpires =
            1, Qw.cookieFlags = 1, Qw.cookieName = 1, Qw.cookiePath = 1, Qw.cookieUpdate = 1, Qw.legacyCookieDomain = 1, Qw.legacyHistoryImport = 1, Qw.name = 1, Qw.sampleRate = 1, Qw.siteSpeedSampleRate = 1, Qw.storage = 1, Qw.storeGac = 1, Qw.useAmpClientId = 1, Qw._cd2l = 1, Qw)),
        Sw = Object.freeze({
            anonymize_ip: 1
        }),
        Tw = {},
        qw = Object.freeze((Tw.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, Tw.app_id = 1, Tw.app_installer_id = 1, Tw.app_name = 1, Tw.app_version =
            1, Tw.description = "exDescription", Tw.fatal = "exFatal", Tw.language = 1, Tw.page_hostname = "hostname", Tw.transport_type = "transport", Tw[K.g.ra] = "currencyCode", Tw[K.g.oh] = 1, Tw[K.g.za] = "location", Tw[K.g.Uc] = "page", Tw[K.g.Ja] = "referrer", Tw[K.g.sb] = "title", Tw[K.g.yf] = 1, Tw[K.g.Pa] = 1, Tw)),
        Uw = {},
        Vw = Object.freeze((Uw.content_id = 1, Uw.event_action = 1, Uw.event_category = 1, Uw.event_label = 1, Uw.link_attribution = 1, Uw.name = 1, Uw[K.g.Ia] = 1, Uw[K.g.nh] = 1, Uw[K.g.Oa] = 1, Uw[K.g.ba] = 1, Uw)),
        Ww = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        Jw = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        Xw = {},
        Cw = Object.freeze((Xw.levels = 1, Xw[K.g.Ga] = "duration", Xw[K.g.hc] = 1, Xw)),
        Yw = {},
        Zw = Object.freeze((Yw.anonymize_ip = 1, Yw.fatal = 1, Yw.send_page_view = 1, Yw.store_gac = 1, Yw.use_amp_client_id = 1,
            Yw[K.g.Ea] = 1, Yw[K.g.oh] = 1, Yw)),
        Dw = function(a, b, c, d) {
            if (void 0 !== c)
                if (Zw[b] && (c = Ga(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[rw(b)] = c;
                else if (g(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        rw = function(a) {
            return a && g(a) ? a.replace(/(_[a-z])/g, function(b) {
                return b[1].toUpperCase()
            }) : a
        },
        $w = {},
        Fw = Object.freeze(($w.checkout_progress = 1, $w.select_content = 1, $w.set_checkout_option = 1, $w[K.g.Xb] = 1, $w[K.g.Yb] = 1, $w[K.g.Bb] = 1, $w[K.g.Zb] = 1, $w[K.g.Xa] = 1, $w[K.g.jb] = 1, $w[K.g.Ya] =
            1, $w[K.g.na] = 1, $w[K.g.ac] = 1, $w[K.g.Ca] = 1, $w)),
        ax = {},
        bx = Object.freeze((ax.checkout_progress = 1, ax.set_checkout_option = 1, ax[K.g.Kg] = 1, ax[K.g.Lg] = 1, ax[K.g.Xb] = 1, ax[K.g.Yb] = 1, ax[K.g.Mg] = 1, ax[K.g.Bb] = 1, ax[K.g.na] = 1, ax[K.g.ac] = 1, ax[K.g.Ng] = 1, ax)),
        cx = {},
        dx = Object.freeze((cx.generate_lead = 1, cx.login = 1, cx.search = 1, cx.select_content = 1, cx.share = 1, cx.sign_up = 1, cx.view_search_results = 1, cx[K.g.Zb] = 1, cx[K.g.Xa] = 1, cx[K.g.jb] = 1, cx[K.g.Ya] = 1, cx[K.g.Ca] = 1, cx)),
        ex = function(a) {
            var b = "general";
            bx[a] ? b = "ecommerce" : dx[a] ?
                b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        fx = {},
        gx = Object.freeze((fx.view_search_results = 1, fx[K.g.Xa] = 1, fx[K.g.Ya] = 1, fx[K.g.Ca] = 1, fx)),
        zw = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        hx = function(a) {
            if (za(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        vw = function(a, b, c) {
            var d = function(L) {
                    return U(c, L)
                },
                e = {},
                f = {},
                h = {},
                l = {},
                m = hx(d(K.g.Kj));
            !c.isGtmEvent && m &&
                zw(f, "exp", m);
            h["&gtm"] = nj(c.eventMetadata.source_canonical_id, !0);
            c.isGtmEvent || (h._no_slc = !0);
            Hf() && (l._cs = Lw);
            var n = d(K.g.Mc);
            if (!c.isGtmEvent && Za(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && zw(f, p, q)
                    }
            for (var r = !c.isGtmEvent, t = Hh(c), u = 0; u < t.length; ++u) {
                var v = t[u];
                if (c.isGtmEvent) {
                    var w = d(v);
                    Ww.hasOwnProperty(v) ? e[v] = w : Rw.hasOwnProperty(v) ? l[v] = w : h[v] = w
                } else {
                    var x = void 0;
                    x = v !== K.g.X ? d(v) : Ih(c, v);
                    if (Vw.hasOwnProperty(v)) Dw(Vw[v],
                        v, x, e);
                    else if (Sw.hasOwnProperty(v)) Dw(Sw[v], v, x, h);
                    else if (qw.hasOwnProperty(v)) Dw(qw[v], v, x, f);
                    else if (pw.hasOwnProperty(v)) Dw(pw[v], v, x, l);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) Dw(1, v, x, f);
                    else if (v === K.g.X) {
                        if (!Mw) {
                            var y = Ta(x);
                            y && (f["&did"] = y)
                        }
                        var z = void 0,
                            B = void 0;
                        b === K.g.oa ? z = Ta(Ih(c, v), ".") : (z = Ta(Ih(c, v, 1), "."), B = Ta(Ih(c, v, 2), "."));
                        z && (f["&gdid"] = z);
                        B && (f["&edid"] = B)
                    } else v === K.g.Na && 0 > t.indexOf(K.g.hc) && (l.cookieName = x + "_ga");
                    P(22) && Ow[v] && (c.C.hasOwnProperty(v) || b === K.g.oa &&
                        c.h.hasOwnProperty(v)) && (r = !1)
                }
            }
            P(22) && r && (f["&jsscut"] = "1");
            !1 !== d(K.g.hf) && !1 !== d(K.g.Za) && ow() || (h.allowAdFeatures = !1);
            aj(c) ? P(26) && (h.allowAdPersonalizationSignals = !0) : h.allowAdPersonalizationSignals = !1;
            !c.isGtmEvent && d(K.g.vb) && (l._useUp = !0);
            if (c.isGtmEvent) {
                l.name = l.name || e.gtmTrackerName;
                var C = h.hitCallback;
                h.hitCallback = function() {
                    xa(C) && C();
                    c.onSuccess()
                }
            } else {
                zw(l, "cookieDomain", "auto");
                zw(h, "forceSSL", !0);
                zw(e, "eventCategory", ex(b));
                gx[b] && zw(f, "nonInteraction", !0);
                "login" === b || "sign_up" ===
                    b || "share" === b ? zw(e, "eventLabel", d(K.g.nh)) : "search" === b || "view_search_results" === b ? zw(e, "eventLabel", d(K.g.Sj)) : "select_content" === b && zw(e, "eventLabel", d(K.g.Bj));
                var H = e[K.g.Ia] || {},
                    D = H[K.g.Sc];
                D || 0 != D && H[K.g.R] ? l.allowLinker = !0 : !1 === D && zw(l, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                l.name = a
            }
            bj() && (h["&gcs"] = cj());
            h["&gcd"] = gj(c);
            Hf() && (R(K.g.O) || (l.storage = "none"), R(K.g.F) || (h.allowAdFeatures = !1, l.storeGac = !1));
            jj() && (h["&dma_cps"] = hj());
            h["&dma"] = ij();
            Gi(Oi()) && (h["&tcfd"] = kj());
            Se.h && (h["&tag_exp"] =
                Se.h);
            var I = om(c) || d(K.g.cb),
                M = d(K.g.ie);
            I && (c.isGtmEvent || (l[K.g.cb] = I), l._cd2l = !0);
            M && !c.isGtmEvent && (l[K.g.ie] = M);
            e.fieldsToSend = f;
            e.fieldsToSet = h;
            e.createOnlyFields = l;
            return e
        },
        Aw = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Nf = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.oi = "impressions" === b.translateIfKeyEquals ? Kw(d) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Md = "promoView" === b.translateIfKeyEquals ?
                    Kw(e) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Md = "promoClick" === b.translateIfKeyEquals ? Kw(f) : f;
                c.Va = b.promoClick.actionField;
                return c
            }
            for (var h in b)
                if (b.hasOwnProperty(h) && "translateIfKeyEquals" !== h && "impressions" !== h && "promoView" !== h && "promoClick" !== h && "currencyCode" !== h) {
                    c.action = h;
                    var l = b[h].products;
                    c.Rb = "products" === b.translateIfKeyEquals ? Kw(l) : l;
                    c.Va = b[h].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        Bw = function(a, b) {
            function c(u) {
                return {
                    id: d(K.g.sa),
                    affiliation: d(K.g.Rg),
                    revenue: d(K.g.ba),
                    tax: d(K.g.nf),
                    shipping: d(K.g.Pc),
                    coupon: d(K.g.Sg),
                    list: d(K.g.lf) || d(K.g.Oc) || u
                }
            }
            for (var d = function(u) {
                    return U(b, u)
                }, e = d(K.g.W), f, h = 0; e && h < e.length && !(f = e[h][K.g.lf] || e[h][K.g.Oc]); h++);
            var l = d(K.g.Mc);
            if (Za(l))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in l) l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && zw(n, p, n[l[p]])
                }
            var q = null,
                r = d(K.g.Fj);
            if (a === K.g.na || a === K.g.ac) q = {
                action: a,
                Va: c(),
                Rb: Kw(e)
            };
            else if (a === K.g.Xb) q = {
                action: "add",
                Va: c(),
                Rb: Kw(e)
            };
            else if (a === K.g.Yb) q = {
                action: "remove",
                Va: c(),
                Rb: Kw(e)
            };
            else if (a === K.g.Ca) q = {
                action: "detail",
                Va: c(f),
                Rb: Kw(e)
            };
            else if (a === K.g.Xa) q = {
                action: "impressions",
                oi: Kw(e)
            };
            else if (a === K.g.Ya) q = {
                action: "promo_view",
                Md: Kw(r) || Kw(e)
            };
            else if ("select_content" === a && r && 0 < r.length || a === K.g.jb) q = {
                action: "promo_click",
                Md: Kw(r) || Kw(e)
            };
            else if ("select_content" === a || a === K.g.Zb) q = {
                action: "click",
                Va: {
                    list: d(K.g.lf) || d(K.g.Oc) || f
                },
                Rb: Kw(e)
            };
            else if (a === K.g.Bb || "checkout_progress" === a) {
                var t = {
                    step: a ===
                        K.g.Bb ? 1 : d(K.g.kf),
                    option: d(K.g.Zd)
                };
                q = {
                    action: "checkout",
                    Rb: Kw(e),
                    Va: A(c(), t)
                }
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                Va: {
                    step: d(K.g.kf),
                    option: d(K.g.Zd)
                }
            });
            q && (q.Nf = d(K.g.ra));
            return q
        },
        ix = {},
        ww = function(a, b) {
            var c = ix[a];
            ix[a] = A(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    pf();

    function tx() {
        return E.gaGlobal = E.gaGlobal || {}
    }
    var ux = function() {
            var a = tx();
            a.hid = a.hid || Ba();
            return a.hid
        },
        vx = function(a, b) {
            var c = tx();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var cy = function(a) {
            this.s = a;
            this.C = "";
            this.h = this.s
        },
        dy = function(a, b) {
            a.h = b;
            return a
        };

    function ey(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }

    function fy(a, b, c) {
        if (a) {
            var d = a || [],
                e = Za(b) ? b : {};
            if (Array.isArray(d))
                for (var f = 0; f < d.length; f++) c(d[f], e)
        }
    };
    var uy = window,
        vy = document,
        wy = function(a) {
            var b = uy._gaUserPrefs;
            if (b && b.ioo && b.ioo() || vy.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === uy["ga-disable-" + a]) return !0;
            try {
                var c = uy.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = pj("AMP_TOKEN", String(vy.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return vy.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function Fy(a) {
        k(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[K.g.Ua] || {};
        k(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Ny = function(a, b) {};

    function My(a, b) {
        var c = function() {};
        return c
    }

    function Oy(a, b, c) {};
    var Py = My;
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var Ry = encodeURI,
        X = encodeURIComponent,
        Sy = function(a, b, c) {
            $b(a, b, c)
        },
        Ty = function(a, b) {
            if (!a) return !1;
            var c = lh(qh(a),
                "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        Uy = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Y = {
        securityGroups: {}
    };
    Y.securityGroups.e = ["google"],
        function() {
            (function(a) {
                Y.__e = a;
                Y.__e.m = "e";
                Y.__e.isVendorTemplate = !0;
                Y.__e.priorityOverride = 0;
                Y.__e.isInfrastructure = !1;
                Y.__e.runInSiloedMode = !0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Y.securityGroups.f = ["google"],
        function() {
            (function(a) {
                Y.__f = a;
                Y.__f.m = "f";
                Y.__f.isVendorTemplate = !0;
                Y.__f.priorityOverride = 0;
                Y.__f.isInfrastructure = !1;
                Y.__f.runInSiloedMode = !1
            })(function(a) {
                var b = av("gtm.referrer", 1) || F.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? lh(qh(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : $u(String(b)) : String(b)
            })
        }();
    Y.securityGroups.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = xu(c, "gtm.click");
                    bv(d)
                }
            }(function(b) {
                Y.__cl = b;
                Y.__cl.m = "cl";
                Y.__cl.isVendorTemplate = !0;
                Y.__cl.priorityOverride = 0;
                Y.__cl.isInfrastructure = !1;
                Y.__cl.runInSiloedMode = !1
            })(function(b) {
                if (!gv("cl")) {
                    var c = W("document");
                    ac(c, "click", a, !0);
                    hv("cl")
                }
                G(b.vtp_gtmOnSuccess)
            })
        }();
    Y.securityGroups.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Y.__u = b;
                Y.__u.m = "u";
                Y.__u.isVendorTemplate = !0;
                Y.__u.priorityOverride = 0;
                Y.__u.isInfrastructure = !1;
                Y.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : av("gtm.url", 1)) || Yu();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return $u(String(c));
                var e = qh(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var h = b[a("vtp_multiQueryKeys").toString()],
                        l = b[a("vtp_queryKey").toString()] ||
                        "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;h ? za(l) ? n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
                    for (var p = 0; p < n.length; p++) {
                        var q = lh(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = lh(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Y.securityGroups.v = ["google"],
        function() {
            (function(a) {
                Y.__v = a;
                Y.__v.m = "v";
                Y.__v.isVendorTemplate = !0;
                Y.__v.priorityOverride = 0;
                Y.__v.isInfrastructure = !1;
                Y.__v.runInSiloedMode = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = av(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
                return void 0 !== c ? c : a.vtp_defaultValue
            })
        }();




    Y.securityGroups.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                Y.__gclidw = b;
                Y.__gclidw.m = "gclidw";
                Y.__gclidw.isVendorTemplate = !0;
                Y.__gclidw.priorityOverride = 100;
                Y.__gclidw.isInfrastructure = !1;
                Y.__gclidw.runInSiloedMode = !1
            })(function(b) {
                G(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, f = b.vtp_cookieFlags);
                var h = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                if (!b.vtp_enableCrossDomain || !1 !== b.vtp_acceptIncoming)
                    if (b.vtp_enableCrossDomain ||
                        jk()) al(a, h), wk(h);
                Yk(h);
                dl(["aw", "dc"], h);
                zl(h);
                if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var l = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    cl(a, l, b.vtp_urlPosition, !!b.vtp_formDecoration, h.prefix);
                    xk(ok(h.prefix), l, b.vtp_urlPosition, !!b.vtp_formDecoration, h);
                    xk("FPAU", l, b.vtp_urlPosition, !!b.vtp_formDecoration, h)
                }
                var m = av(K.g.qa);
                Ul({
                    o: Vh(new Kh(b.vtp_gtmEventId, b.vtp_gtmPriorityId)),
                    Mf: !1,
                    Te: void 0 != m && !1 !== m,
                    vc: h,
                    Oe: !0
                });
                b.vtp_enableUrlPassthrough && fl(["aw", "dc", "gb"]);
                hl(["aw", "dc", "gb"])
            })
        }();
    Y.securityGroups.aev = ["google"],
        function() {
            function a(r, t, u, v, w) {
                w || (w = "element");
                var x = t + "." + u,
                    y;
                if (n.hasOwnProperty(x)) y = n[x];
                else {
                    var z = r[w];
                    if (z && (y = v(z), n[x] = y, p.push(x), 35 < p.length)) {
                        var B = p.shift();
                        delete n[B]
                    }
                }
                return y
            }

            function b(r, t, u) {
                var v = r[q[t]];
                return void 0 !== v ? v : u
            }

            function c(r, t) {
                if (!r) return !1;
                var u = d(Yu());
                za(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var v = [u], w = 0; w < t.length; w++) {
                    var x = t[w];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x = new RegExp(x.domain)
                        } catch (B) {
                            continue
                        } else x =
                            x.domain;
                    var y = d(r);
                    if (x instanceof RegExp) {
                        if (x.test(y)) return !1
                    } else {
                        var z = x;
                        if (0 != z.length) {
                            if (0 <= y.indexOf(z)) return !1;
                            v.push(d(z))
                        }
                    }
                }
                return !Ty(r, v)
            }

            function d(r) {
                m.test(r) || (r = "http://" + r);
                return lh(qh(r), "HOST", !0)
            }

            function e(r, t, u, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = a(t, u, "FORM." + r, h);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return l(t, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return l(t, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return l(t,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var x = t.interactedFormFieldPosition;
                        return void 0 === x ? v : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = t.interactSequenceNumber;
                        return void 0 === y ? v : y;
                    default:
                        return v
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return cc(r, "value");
                    case "button":
                        return dc(r);
                    default:
                        return null
                }
            }

            function h(r) {
                if ("form" === r.tagName.toLowerCase() && r.elements) {
                    for (var t = 0, u = 0; u < r.elements.length; u++) Eu(r.elements[u]) && t++;
                    return t
                }
            }

            function l(r, t, u) {
                var v = r.interactedFormField;
                return v && cc(v, t) || u
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Y.__aev = r;
                Y.__aev.m = "aev";
                Y.__aev.isVendorTemplate = !0;
                Y.__aev.priorityOverride = 0;
                Y.__aev.isInfrastructure = !1;
                Y.__aev.runInSiloedMode = !1
            })(function(r) {
                var t = r.vtp_gtmEventId,
                    u = r.vtp_defaultValue,
                    v = r.vtp_varType,
                    w = r.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var x = w.element;
                        return x && x.tagName || u;
                    case "TEXT":
                        return a(w, t, v, dc) || u;
                    case "URL":
                        var y;
                        a: {
                            var z = String(w.elementUrl || u || ""),
                                B = qh(z),
                                C = String(r.vtp_component || "URL");
                            switch (C) {
                                case "URL":
                                    y = z;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = c(z, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = lh(B, C, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var H;
                        if (void 0 ===
                            r.vtp_attribute) H = b(w, v, u);
                        else {
                            var D = w.element;
                            H = D && cc(D, r.vtp_attribute) || u || ""
                        }
                        return H;
                    case "MD":
                        var I = r.vtp_mdValue,
                            M = a(w, t, "MD", Qu);
                        return I && M ? Tu(M, I) || u : M || u;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
                    default:
                        return b(w, v, u)
                }
            })
        }();








    Y.securityGroups.ua = ["google"],
        function() {
            function a(m, n) {
                for (var p in m)
                    if (!l[p] && m.hasOwnProperty(p)) {
                        var q = h[p] ? Ga(m[p]) : m[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(m) {
                var n = {};
                m.vtp_gaSettings && A(Uy(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                A(Uy(m.vtp_fieldsToSet, "fieldName", "value"), n);
                Ga(n.urlPassthrough) && (n._useUp = !0);
                m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
                return n
            }

            function c(m, n) {
                return void 0 === n ? n : m(n)
            }

            function d(m, n, p) {}

            function e(m, n) {
                if (!(f || P(87) && (Fe || He) && n._x_19 && !m.vtp_useDebugVersion && !m.vtp_useInternalVersion)) {
                    var p = m.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = m.vtp_gtmOnFailure,
                        r = Fe || He ? mm(n._x_19, "/analytics.js") : void 0,
                        t = Vl("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    V("analytics.js" === p && r ? r : t, function() {
                            var u = Nr();
                            u && u.loaded || q();
                        },
                        q)
                }
            }
            var f, h = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                l = {
                    urlPassthrough: !0
                };
            (function(m) {
                Y.__ua = m;
                Y.__ua.m = "ua";
                Y.__ua.isVendorTemplate = !0;
                Y.__ua.priorityOverride = 0;
                Y.__ua.isInfrastructure = !1;
                Y.__ua.runInSiloedMode = !1
            })(function(m) {
                function n() {
                    if (m.vtp_doubleClick || "DISPLAY_FEATURES" == m.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    r = {};
                if (m.vtp_gaSettings) {
                    var t = m.vtp_gaSettings;
                    A(Uy(t.vtp_contentGroup, "index", "group"), p);
                    A(Uy(t.vtp_dimension, "index", "dimension"), q);
                    A(Uy(t.vtp_metric, "index", "metric"), r);
                    var u = A(t);
                    u.vtp_fieldsToSet = void 0;
                    u.vtp_contentGroup = void 0;
                    u.vtp_dimension = void 0;
                    u.vtp_metric = void 0;
                    m = A(m, u)
                }
                A(Uy(m.vtp_contentGroup, "index", "group"), p);
                A(Uy(m.vtp_dimension, "index",
                    "dimension"), q);
                A(Uy(m.vtp_metric, "index", "metric"), r);
                var v = b(m),
                    w = String(m.vtp_trackingId || ""),
                    x = "",
                    y = "",
                    z = "";
                m.vtp_setTrackerName && "string" == typeof m.vtp_trackerName ? "" !== m.vtp_trackerName && (z = m.vtp_trackerName, y = z + ".") : (z = "gtm" + Qe(), y = z + ".");
                var B = function(ca, Z) {
                    for (var ua in Z) Z.hasOwnProperty(ua) && (v[ca + ua] = Z[ua])
                };
                B("contentGroup", p);
                B("dimension", q);
                B("metric", r);
                m.vtp_enableEcommerce && (x = m.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(m, v, x));
                if ("TRACK_EVENT" === m.vtp_trackType) x = "track_event",
                    n(), v.eventCategory = String(m.vtp_eventCategory), v.eventAction = String(m.vtp_eventAction), v.eventLabel = c(String, m.vtp_eventLabel), v.value = c(Fa, m.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
                    if (x = K.g.bc, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == m.vtp_advertisingFeaturesType && (v.remarketingLists = !0), m.vtp_autoLinkDomains) {
                        var C = {};
                        C[K.g.R] = m.vtp_autoLinkDomains;
                        C.use_anchor = m.vtp_useHashAutoLink;
                        C[K.g.Fb] = m.vtp_decorateFormsAutoLink;
                        v[K.g.Ia] = C
                    }
                } else "TRACK_SOCIAL" === m.vtp_trackType ?
                    (x = "track_social", v.socialNetwork = String(m.vtp_socialNetwork), v.socialAction = String(m.vtp_socialAction), v.socialTarget = String(m.vtp_socialActionTarget)) : "TRACK_TIMING" == m.vtp_trackType && (x = "timing_complete", v.eventCategory = String(m.vtp_timingCategory), v.timingVar = String(m.vtp_timingVar), v.value = Fa(m.vtp_timingValue), v.eventLabel = c(String, m.vtp_timingLabel));
                m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                m.vtp_enableLinkId && (v.enableLinkId = !0);
                var H = {};
                a(v, H);
                v.name || (H.gtmTrackerName = z);
                H.gaFunctionName =
                    m.vtp_functionName;
                void 0 !== m.vtp_nonInteraction && (H.nonInteraction = m.vtp_nonInteraction);
                var D = Vh(Uh(Th(Sh(Lh(new Kh(m.vtp_gtmEventId, m.vtp_gtmPriorityId), H), m.vtp_gtmOnSuccess), m.vtp_gtmOnFailure), !0));
                P(87) && m.vtp_useDebugVersion && m.vtp_useInternalVersion && (D.eventMetadata.suppress_script_load = !0);
                Iw(w, x, Date.now(), D);
                var I = Pr(m.vtp_functionName);
                if (xa(I)) {
                    var M = function(ca) {
                        var Z = [].slice.call(arguments, 0);
                        Z[0] = y + Z[0];
                        I.apply(window, Z)
                    };
                    if ("TRACK_TRANSACTION" == m.vtp_trackType) {} else if ("DECORATE_LINK" ==
                        m.vtp_trackType) {} else if ("DECORATE_FORM" == m.vtp_trackType) {} else if ("TRACK_DATA" == m.vtp_trackType) {}
                    e(m, v)
                } else G(m.vtp_gtmOnFailure)
            })
        }();



    Y.securityGroups.gas = ["google"],
        function() {
            (function(a) {
                Y.__gas = a;
                Y.__gas.m = "gas";
                Y.__gas.isVendorTemplate = !0;
                Y.__gas.priorityOverride = 0;
                Y.__gas.isInfrastructure = !1;
                Y.__gas.runInSiloedMode = !1
            })(function(a) {
                var b = A(a),
                    c = b;
                c[mc.ka] = null;
                c[mc.Ff] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();

    Y.securityGroups.awct = ["google"],
        function() {
            function a(b, c, d) {
                return function(e, f, h) {
                    c[e] = "DATA_LAYER" === d ? av(h) : b[f]
                }
            }(function(b) {
                Y.__awct = b;
                Y.__awct.m = "awct";
                Y.__awct.isVendorTemplate = !0;
                Y.__awct.priorityOverride = 0;
                Y.__awct.isInfrastructure = !1;
                Y.__awct.runInSiloedMode = !1
            })(function(b) {
                var c = !b.hasOwnProperty("vtp_enableConversionLinker") || !!b.vtp_enableConversionLinker,
                    d = !!b.vtp_enableEnhancedConversions || !!b.vtp_enableEnhancedConversion,
                    e = Uy(b.vtp_customVariables, "varName", "value") || {},
                    f = {},
                    h =
                    (f[K.g.ba] = b.vtp_conversionValue || 0, f[K.g.ra] = b.vtp_currencyCode, f[K.g.sa] = b.vtp_orderId, f[K.g.Ma] = b.vtp_conversionCookiePrefix, f[K.g.Ea] = c, f[K.g.Sd] = d, f[K.g.qa] = av(K.g.qa), f[K.g.X] = av("developer_id"), f);
                h[K.g.Da] = av(K.g.Da), h[K.g.ja] = av(K.g.ja), h[K.g.Cb] = av(K.g.Cb), h[K.g.Oa] = av(K.g.Oa);
                b.vtp_rdp && (h[K.g.Gb] = !0);
                if (b.vtp_enableCustomParams)
                    for (var l in e) te.hasOwnProperty(l) || (h[l] = e[l]);
                if (b.vtp_enableProductReporting) {
                    var m =
                        a(b, h, b.vtp_productReportingDataSource);
                    m(K.g.Wd, "vtp_awMerchantId", "aw_merchant_id");
                    m(K.g.Ud, "vtp_awFeedCountry", "aw_feed_country");
                    m(K.g.Vd, "vtp_awFeedLanguage", "aw_feed_language");
                    m(K.g.Td, "vtp_discount", "discount");
                    m(K.g.W, "vtp_items", "items")
                }
                b.vtp_enableShippingData && (h[K.g.Yc] = b.vtp_deliveryPostalCode, h[K.g.de] = b.vtp_estimatedDeliveryDate, h[K.g.jc] = b.vtp_deliveryCountry, h[K.g.Pc] = b.vtp_shippingFee);
                b.vtp_transportUrl && (h[K.g.Ib] = b.vtp_transportUrl);
                if (b.vtp_enableNewCustomerReporting) {
                    var n =
                        a(b, h, b.vtp_newCustomerReportingDataSource);
                    n(K.g.Tc, "vtp_awNewCustomer", "new_customer");
                    n(K.g.Yd, "vtp_awCustomerLTV", "customer_lifetime_value")
                }
                var p;
                a: {
                    if (b.vtp_enableEnhancedConversion) {
                        var q = b.vtp_cssProvidedEnhancedConversionValue || b.vtp_enhancedConversionObject;
                        if (q) {
                            p = {
                                enhanced_conversions_mode: "manual",
                                enhanced_conversions_manual_var: q
                            };
                            break a
                        }
                    }
                    p = void 0
                }
                var r = p;
                if (r) {
                    var t = {};
                    h[K.g.ce] = (t[b.vtp_conversionLabel] = r, t)
                }
                var u = "AW-" + b.vtp_conversionId,
                    v = u + "/" + b.vtp_conversionLabel;
                if (P(31)) {
                    Vq(u,
                        b.vtp_transportUrl, {
                            source: 7,
                            fromContainerExecution: !0,
                            siloed: !0
                        });
                    var w = {},
                        x = {
                            eventMetadata: (w.hit_type_override = "conversion", w),
                            noGtmEvent: !0,
                            isGtmEvent: !0,
                            onSuccess: b.vtp_gtmOnSuccess,
                            onFailure: b.vtp_gtmOnFailure
                        };
                    ss(ps(pg(v), K.g.na, h), b.vtp_gtmEventId, x)
                } else {
                    var y = Vh(Uh(Th(Sh(Lh(new Kh(b.vtp_gtmEventId, b.vtp_gtmPriorityId), h), b.vtp_gtmOnSuccess), b.vtp_gtmOnFailure), !0));
                    y.eventMetadata.hit_type_override = "conversion";
                    Nv(v, K.g.na, Date.now(), y)
                }
            })
        }();





    var oA = {};
    oA.dataLayer = Ye;
    oA.callback = function(a) {
        Oe.hasOwnProperty(a) && xa(Oe[a]) && Oe[a]();
        delete Oe[a]
    };
    oA.bootstrap = 0;
    oA._spx = !1;

    function pA() {
        xe[ug()] = xe[ug()] || oA;
        Ag();
        Eg() || k(Fg(), function(d, e) {
            Vq(d, e.transportUrl, e.context);
            J(92)
        });
        Oa(Pe, Y.securityGroups);
        var a = wg(Cg()),
            b, c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
        2 !== c && 4 !== c && 3 !== c || J(142);
        Uc = dd
    }
    (function(a) {
        function b() {
            m = F.documentElement.getAttribute("data-tag-assistant-present");
            Tt(m) && (l = h.Uj)
        }
        if (!E["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (F.referrer) {
                var d = qh(F.referrer);
                c = "cct.google" === kh(d, "host")
            }
            if (!c) {
                var e = sj("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (E["__TAGGY_INSTALLED"] = !0, Xb("https://cct.google/taggy/agent.js"))
        }
        if (Je) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    De ? (v = "OGT", w = "GTAG") : Je && (w = v = "OPT");
                    var x = E["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        E["google.tagmanager.debugui2.queue"] = x, Xb("https://" + we.Cc + "/debug/bootstrap?id=" + ng.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + nj()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Rb,
                            containerProduct: v,
                            debug: !1,
                            id: ng.ctid,
                            targetRef: {
                                ctid: ng.ctid,
                                isDestination: lg.kd
                            },
                            aliases: og(),
                            destinations: rg()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    we.Xi && (y.data.initialPublish = !0);
                    x.push(y)
                },
                h = {
                    Lm: 1,
                    Vj: 2,
                    jk: 3,
                    Zi: 4,
                    Uj: 5
                },
                l = void 0,
                m = void 0,
                n = lh(E.location, "query", !1, void 0, "gtm_debug");
            Tt(n) && (l = h.Vj);
            if (!l && F.referrer) {
                var p = qh(F.referrer);
                "tagassistant.google.com" === kh(p, "host") && (l = h.jk)
            }
            if (!l) {
                var q = sj("__TAG_ASSISTANT");
                q.length && q[0].length && (l = h.Zi)
            }
            l || b();
            if (!l && Ut(m)) {
                var r = function() {
                        if (t) return !0;
                        t = !0;
                        b();
                        l && Rb ? f(l) : a()
                    },
                    t = !1;
                ac(F, "TADebugSignal", function() {
                    r()
                }, !1);
                E.setTimeout(function() {
                    r()
                }, 200)
            } else l && Rb ? f(l) : a()
        }
    })(function() {
        try {
            yg();
            if (P(16)) {}
            uf().s();
            Ui();
            (P(93) || P(94) || P(95)) &&
            ag();
            var a = vg();
            if (ig().canonical[a]) {
                var b = xe.zones;
                b && b.unregisterChild(qg());
                var c = Eq(vg());
                c._event && (c._event.external = []);
                c._entity && (c._entity.external = []);
            } else {
                co();
                Se.h = "";
                Se.s = Ga("");
                Se.C = "";
                Sq();
                for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) Kc.push(e[f]);
                for (var h = d.tags || [], l = 0; l < h.length; l++) Nc.push(h[l]);
                for (var m = d.predicates || [], n = 0; n < m.length; n++) Mc.push(m[n]);
                for (var p = d.rules || [], q = 0; q < p.length; q++) {
                    for (var r = p[q], t = {}, u = 0; u < r.length; u++) {
                        var v = r[u][0];
                        t[v] = Array.prototype.slice.call(r[u], 1);
                        "if" !== v && "unless" !== v || Tc(t[v])
                    }
                    Lc.push(t)
                }
                Pc = Y;
                Qc = Fv;
                pA();
                if (P(24) && !Je) {
                    for (var w = lf["7"], x = w ? w.split("|") : [], y = {}, z = 0; z < x.length; z++) y[x[z]] = !0;
                    for (var B = 0; B < Sf.length; B++) {
                        var C =
                            Sf[B],
                            H = C,
                            D = y[C] ? "granted" : "denied";
                        zf().implicit(H, D)
                    }
                }
                St();
                Wq = !1;
                Xq = 0;
                if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState) Zq();
                else {
                    ac(F, "DOMContentLoaded", Zq);
                    ac(F, "readystatechange", Zq);
                    if (F.createEventObject && F.documentElement.doScroll) {
                        var I = !0;
                        try {
                            I = !E.frameElement
                        } catch (Q) {}
                        I && vr()
                    }
                    ac(E, "load", Zq)
                }
                gt = !1;
                "complete" === F.readyState ? it() : ac(E, "load", it);
                Og && (Jg(ah), E.setInterval($g, 864E5));
                Jg(Hv);
                Jg($r);
                Jg(pp);
                Jg(Yh);
                Jg(gs);
                Jg(fh);
                Jg(Sn);
                Jg(dh);
                P(29) && Jg(cs);
                P(102) && (Jg(Iv), Jg(Kv));
                ou();
                kf(1);
                Es();
                Ne = La();
                oA.bootstrap = Ne;
                if (P(16)) {}
            }
        } catch (Q) {
            if (kf(4), Og) {
                var T = Vg(!0, !0);
                $b(T)
            }
        }
    });

})()