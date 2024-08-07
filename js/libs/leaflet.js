!(function(t, i) {
    typeof exports === 'object' && typeof module !== 'undefined' ? i(exports) : typeof define === 'function' && define.amd ? define(['exports'], i) : i(t.L = {});
}(this, (t)=>{
    function h(t) {
        for (var i, e, n = 1, o = arguments.length; n < o; n++)
            for (i in e = arguments[n])
                t[i] = e[i];
        return t;
    }
    const s = Object.create || function(t) {
        return i.prototype = t,
        new i();
    }
    ;
    function i() {}
    function p(t, i) {
        const e = Array.prototype.slice;
        if (t.bind)
            return t.bind.apply(t, e.call(arguments, 1));
        const n = e.call(arguments, 2);
        return function() {
            return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
        }
        ;
    }
    let e = 0;
    function m(t) {
        return t._leaflet_id = t._leaflet_id || ++e,
        t._leaflet_id;
    }
    function n(t, i, e) {
        let n;
        let o;
        const s = function() {
            n = !1,
            o && (r.apply(e, o),
            o = !1);
        };
        var r = function() {
            n ? o = arguments : (t.apply(e, arguments),
            setTimeout(s, i),
            n = !0);
        };
        return r;
    }
    function o(t, i, e) {
        const n = i[1];
        const o = i[0];
        const s = n - o;
        return t === n && e ? t : ((t - o) % s + s) % s + o;
    }
    function a() {
        return !1;
    }
    function r(t, i) {
        const e = Math.pow(10, void 0 === i ? 6 : i);
        return Math.round(t * e) / e;
    }
    function u(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
    }
    function l(t) {
        return u(t).split(/\s+/);
    }
    function c(t, i) {
        for (const e in Object.prototype.hasOwnProperty.call(t, 'options') || (t.options = t.options ? s(t.options) : {}),
        i)
            t.options[e] = i[e];
        return t.options;
    }
    function _(t, i, e) {
        const n = [];
        for (const o in t)
            n.push(`${encodeURIComponent(e ? o.toUpperCase() : o)}=${encodeURIComponent(t[o])}`);
        return (i && i.indexOf('?') !== -1 ? '&' : '?') + n.join('&');
    }
    const d = /\{ *([\w_-]+) *\}/g;
    function f(t, n) {
        return t.replace(d, (t,i)=>{
            let e = n[i];
            if (void 0 === e)
                throw new Error(`No value provided for variable ${t}`);
            return typeof e === 'function' && (e = e(n)),
            e;
        }
        );
    }
    const g = Array.isArray || function(t) {
        return Object.prototype.toString.call(t) === '[object Array]';
    }
    ;
    function v(t, i) {
        for (let e = 0; e < t.length; e++)
            if (t[e] === i)
                return e;
        return -1;
    }
    const y = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    function x(t) {
        return window[`webkit${t}`] || window[`moz${t}`] || window[`ms${t}`];
    }
    let w = 0;
    function P(t) {
        const i = +new Date();
        const e = Math.max(0, 16 - (i - w));
        return w = i + e,
        window.setTimeout(t, e);
    }
    const b = window.requestAnimationFrame || x('RequestAnimationFrame') || P;
    const T = window.cancelAnimationFrame || x('CancelAnimationFrame') || x('CancelRequestAnimationFrame') || function(t) {
        window.clearTimeout(t);
    }
    ;
    function M(t, i, e) {
        if (!e || b !== P)
            return b.call(window, p(t, i));
        t.call(i);
    }
    function z(t) {
        t && T.call(window, t);
    }
    const C = {
        extend: h,
        create: s,
        bind: p,
        lastId: e,
        stamp: m,
        throttle: n,
        wrapNum: o,
        falseFn: a,
        formatNum: r,
        trim: u,
        splitWords: l,
        setOptions: c,
        get_paramstring: _,
        template: f,
        isArray: g,
        indexOf: v,
        emptyImageUrl: y,
        requestFn: b,
        cancelFn: T,
        requestAnimFrame: M,
        cancelAnimFrame: z,
    };
    function S() {}
    S.extend = function(t) {
        function i() {
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks();
        }
        const e = i.__super__ = this.prototype;
        const n = s(e);
        for (const o in (n.constructor = i).prototype = n,
        this)
            Object.prototype.hasOwnProperty.call(this, o) && o !== 'prototype' && o !== '__super__' && (i[o] = this[o]);
        return t.statics && (h(i, t.statics),
        delete t.statics),
        t.includes && ((function(t) {
            if (typeof L === 'undefined' || !L || !L.Mixin)
                return;
            t = g(t) ? t : [t];
            for (let i = 0; i < t.length; i++)
                t[i] === L.Mixin.Events && console.warn('Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.', (new Error()).stack);
        }(t.includes)),
        h.apply(null, [n].concat(t.includes)),
        delete t.includes),
        n.options && (t.options = h(s(n.options), t.options)),
        h(n, t),
        n._initHooks = [],
        n.callInitHooks = function() {
            if (!this._initHooksCalled) {
                e.callInitHooks && e.callInitHooks.call(this),
                this._initHooksCalled = !0;
                for (let t = 0, i = n._initHooks.length; t < i; t++)
                    n._initHooks[t].call(this);
            }
        }
        ,
        i;
    }
    ,
    S.include = function(t) {
        return h(this.prototype, t),
        this;
    }
    ,
    S.mergeOptions = function(t) {
        return h(this.prototype.options, t),
        this;
    }
    ,
    S.addInitHook = function(t) {
        const i = Array.prototype.slice.call(arguments, 1);
        const e = typeof t === 'function' ? t : function() {
            this[t].apply(this, i);
        }
        ;
        return this.prototype._initHooks = this.prototype._initHooks || [],
        this.prototype._initHooks.push(e),
        this;
    }
    ;
    const Z = {
        on(t, i, e) {
            if (typeof t === 'object')
                for (const n in t)
                    this._on(n, t[n], i);
            else
                for (let o = 0, s = (t = l(t)).length; o < s; o++)
                    this._on(t[o], i, e);
            return this;
        },
        off(t, i, e) {
            if (t)
                if (typeof t === 'object')
                    for (const n in t)
                        this._off(n, t[n], i);
                else
                    for (let o = 0, s = (t = l(t)).length; o < s; o++)
                        this._off(t[o], i, e);
            else
                delete this._events;
            return this;
        },
        _on(t, i, e) {
            this._events = this._events || {};
            let n = this._events[t];
            n || (n = [],
            this._events[t] = n),
            e === this && (e = void 0);
            for (var o = {
                fn: i,
                ctx: e
            }, s = n, r = 0, a = s.length; r < a; r++)
                if (s[r].fn === i && s[r].ctx === e)
                    return;
            s.push(o);
        },
        _off(t, i, e) {
            let n;
            let o;
            let s;
            if (this._events && (n = this._events[t]))
                if (i) {
                    if (e === this && (e = void 0),
                    n)
                        for (o = 0,
                        s = n.length; o < s; o++) {
                            const r = n[o];
                            if (r.ctx === e && r.fn === i)
                                return r.fn = a,
                                this._firingCount && (this._events[t] = n = n.slice()),
                                void n.splice(o, 1);
                        }
                } else {
                    for (o = 0,
                    s = n.length; o < s; o++)
                        n[o].fn = a;
                    delete this._events[t];
                }
        },
        fire(t, i, e) {
            if (!this.listens(t, e))
                return this;
            const n = h({}, i, {
                type: t,
                target: this,
                sourceTarget: i && i.sourceTarget || this
            });
            if (this._events) {
                const o = this._events[t];
                if (o) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for (let s = 0, r = o.length; s < r; s++) {
                        const a = o[s];
                        a.fn.call(a.ctx || this, n);
                    }
                    this._firingCount--;
                }
            }
            return e && this._propagateEvent(n),
            this;
        },
        listens(t, i) {
            const e = this._events && this._events[t];
            if (e && e.length)
                return !0;
            if (i)
                for (const n in this._eventParents)
                    if (this._eventParents[n].listens(t, i))
                        return !0;
            return !1;
        },
        once(t, i, e) {
            if (typeof t === 'object') {
                for (const n in t)
                    this.once(n, t[n], i);
                return this;
            }
            var o = p(function() {
                this.off(t, i, e).off(t, o, e);
            }, this);
            return this.on(t, i, e).on(t, o, e);
        },
        addEventParent(t) {
            return this._eventParents = this._eventParents || {},
            this._eventParents[m(t)] = t,
            this;
        },
        removeEventParent(t) {
            return this._eventParents && delete this._eventParents[m(t)],
            this;
        },
        _propagateEvent(t) {
            for (const i in this._eventParents)
                this._eventParents[i].fire(t.type, h({
                    layer: t.target,
                    propagatedFrom: t.target
                }, t), !0);
        },
    };
    Z.addEventListener = Z.on,
    Z.removeEventListener = Z.clearAllEventListeners = Z.off,
    Z.addOneTimeEventListener = Z.once,
    Z.fireEvent = Z.fire,
    Z.hasEventListeners = Z.listens;
    const E = S.extend(Z);
    function k(t, i, e) {
        this.x = e ? Math.round(t) : t,
        this.y = e ? Math.round(i) : i;
    }
    const B = Math.trunc || function(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
    }
    ;
    function A(t, i, e) {
        return t instanceof k ? t : g(t) ? new k(t[0],t[1]) : t == null ? t : typeof t === 'object' && 'x'in t && 'y'in t ? new k(t.x,t.y) : new k(t,i,e);
    }
    function I(t, i) {
        if (t)
            for (let e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
                this.extend(e[n]);
    }
    function O(t, i) {
        return !t || t instanceof I ? t : new I(t,i);
    }
    function R(t, i) {
        if (t)
            for (let e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
                this.extend(e[n]);
    }
    function N(t, i) {
        return t instanceof R ? t : new R(t,i);
    }
    function D(t, i, e) {
        if (isNaN(t) || isNaN(i))
            throw new Error(`Invalid LatLng object: (${t}, ${i})`);
        this.lat = +t,
        this.lng = +i,
        void 0 !== e && (this.alt = +e);
    }
    function j(t, i, e) {
        return t instanceof D ? t : g(t) && typeof t[0] !== 'object' ? t.length === 3 ? new D(t[0],t[1],t[2]) : t.length === 2 ? new D(t[0],t[1]) : null : t == null ? t : typeof t === 'object' && 'lat'in t ? new D(t.lat,'lng'in t ? t.lng : t.lon,t.alt) : void 0 === i ? null : new D(t,i,e);
    }
    k.prototype = {
        clone() {
            return new k(this.x,this.y);
        },
        add(t) {
            return this.clone()._add(A(t));
        },
        _add(t) {
            return this.x += t.x,
            this.y += t.y,
            this;
        },
        subtract(t) {
            return this.clone()._subtract(A(t));
        },
        _subtract(t) {
            return this.x -= t.x,
            this.y -= t.y,
            this;
        },
        divideBy(t) {
            return this.clone()._divideBy(t);
        },
        _divideBy(t) {
            return this.x /= t,
            this.y /= t,
            this;
        },
        multiplyBy(t) {
            return this.clone()._multiplyBy(t);
        },
        _multiplyBy(t) {
            return this.x *= t,
            this.y *= t,
            this;
        },
        scaleBy(t) {
            return new k(this.x * t.x,this.y * t.y);
        },
        unscaleBy(t) {
            return new k(this.x / t.x,this.y / t.y);
        },
        round() {
            return this.clone()._round();
        },
        _round() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this;
        },
        floor() {
            return this.clone()._floor();
        },
        _floor() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this;
        },
        ceil() {
            return this.clone()._ceil();
        },
        _ceil() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this;
        },
        trunc() {
            return this.clone()._trunc();
        },
        _trunc() {
            return this.x = B(this.x),
            this.y = B(this.y),
            this;
        },
        distanceTo(t) {
            const i = (t = A(t)).x - this.x;
            const e = t.y - this.y;
            return Math.sqrt(i * i + e * e);
        },
        equals(t) {
            return (t = A(t)).x === this.x && t.y === this.y;
        },
        contains(t) {
            return t = A(t),
            Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
        },
        toString() {
            return `Point(${r(this.x)}, ${r(this.y)})`;
        },
    },
    I.prototype = {
        extend(t) {
            return t = A(t),
            this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x),
            this.max.x = Math.max(t.x, this.max.x),
            this.min.y = Math.min(t.y, this.min.y),
            this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(),
            this.max = t.clone()),
            this;
        },
        getCenter(t) {
            return new k((this.min.x + this.max.x) / 2,(this.min.y + this.max.y) / 2,t);
        },
        getBottomLeft() {
            return new k(this.min.x,this.max.y);
        },
        getTopRight() {
            return new k(this.max.x,this.min.y);
        },
        getTopLeft() {
            return this.min;
        },
        getBottomRight() {
            return this.max;
        },
        getSize() {
            return this.max.subtract(this.min);
        },
        contains(t) {
            let i;
            let e;
            return (t = (typeof t[0] === 'number' || t instanceof k ? A : O)(t))instanceof I ? (i = t.min,
            e = t.max) : i = e = t,
            i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y;
        },
        intersects(t) {
            t = O(t);
            const i = this.min;
            const e = this.max;
            const n = t.min;
            const o = t.max;
            const s = o.x >= i.x && n.x <= e.x;
            const r = o.y >= i.y && n.y <= e.y;
            return s && r;
        },
        overlaps(t) {
            t = O(t);
            const i = this.min;
            const e = this.max;
            const n = t.min;
            const o = t.max;
            const s = o.x > i.x && n.x < e.x;
            const r = o.y > i.y && n.y < e.y;
            return s && r;
        },
        isValid() {
            return !(!this.min || !this.max);
        },
    },
    R.prototype = {
        extend(t) {
            let i;
            let e;
            const n = this._southWest;
            const o = this._northEast;
            if (t instanceof D)
                e = i = t;
            else {
                if (!(t instanceof R))
                    return t ? this.extend(j(t) || N(t)) : this;
                if (i = t._southWest,
                e = t._northEast,
                !i || !e)
                    return this;
            }
            return n || o ? (n.lat = Math.min(i.lat, n.lat),
            n.lng = Math.min(i.lng, n.lng),
            o.lat = Math.max(e.lat, o.lat),
            o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new D(i.lat,i.lng),
            this._northEast = new D(e.lat,e.lng)),
            this;
        },
        pad(t) {
            const i = this._southWest;
            const e = this._northEast;
            const n = Math.abs(i.lat - e.lat) * t;
            const o = Math.abs(i.lng - e.lng) * t;
            return new R(new D(i.lat - n,i.lng - o),new D(e.lat + n,e.lng + o));
        },
        getCenter() {
            return new D((this._southWest.lat + this._northEast.lat) / 2,(this._southWest.lng + this._northEast.lng) / 2);
        },
        getSouthWest() {
            return this._southWest;
        },
        getNorthEast() {
            return this._northEast;
        },
        getNorthWest() {
            return new D(this.getNorth(),this.getWest());
        },
        getSouthEast() {
            return new D(this.getSouth(),this.getEast());
        },
        getWest() {
            return this._southWest.lng;
        },
        getSouth() {
            return this._southWest.lat;
        },
        getEast() {
            return this._northEast.lng;
        },
        getNorth() {
            return this._northEast.lat;
        },
        contains(t) {
            t = (typeof t[0] === 'number' || t instanceof D || 'lat'in t ? j : N)(t);
            let i;
            let e;
            const n = this._southWest;
            const o = this._northEast;
            return t instanceof R ? (i = t.getSouthWest(),
            e = t.getNorthEast()) : i = e = t,
            i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng;
        },
        intersects(t) {
            t = N(t);
            const i = this._southWest;
            const e = this._northEast;
            const n = t.getSouthWest();
            const o = t.getNorthEast();
            const s = o.lat >= i.lat && n.lat <= e.lat;
            const r = o.lng >= i.lng && n.lng <= e.lng;
            return s && r;
        },
        overlaps(t) {
            t = N(t);
            const i = this._southWest;
            const e = this._northEast;
            const n = t.getSouthWest();
            const o = t.getNorthEast();
            const s = o.lat > i.lat && n.lat < e.lat;
            const r = o.lng > i.lng && n.lng < e.lng;
            return s && r;
        },
        toBBoxString() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
        },
        equals(t, i) {
            return !!t && (t = N(t),
            this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i));
        },
        isValid() {
            return !(!this._southWest || !this._northEast);
        },
    };
    let W;
    const H = {
        latLngToPoint(t, i) {
            const e = this.projection.project(t);
            const n = this.scale(i);
            return this.transformation._transform(e, n);
        },
        pointToLatLng(t, i) {
            const e = this.scale(i);
            const n = this.transformation.untransform(t, e);
            return this.projection.unproject(n);
        },
        project(t) {
            return this.projection.project(t);
        },
        unproject(t) {
            return this.projection.unproject(t);
        },
        scale(t) {
            return 256 * Math.pow(2, t);
        },
        zoom(t) {
            return Math.log(t / 256) / Math.LN2;
        },
        getProjectedBounds(t) {
            if (this.infinite)
                return null;
            const i = this.projection.bounds;
            const e = this.scale(t);
            return new I(this.transformation.transform(i.min, e),this.transformation.transform(i.max, e));
        },
        infinite: !(D.prototype = {
            equals(t, i) {
                return !!t && (t = j(t),
                Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i));
            },
            toString(t) {
                return `LatLng(${r(this.lat, t)}, ${r(this.lng, t)})`;
            },
            distanceTo(t) {
                return F.distance(this, j(t));
            },
            wrap() {
                return F.wrapLatLng(this);
            },
            toBounds(t) {
                const i = 180 * t / 40075017;
                const e = i / Math.cos(Math.PI / 180 * this.lat);
                return N([this.lat - i, this.lng - e], [this.lat + i, this.lng + e]);
            },
            clone() {
                return new D(this.lat,this.lng,this.alt);
            },
        }),
        wrapLatLng(t) {
            const i = this.wrapLng ? o(t.lng, this.wrapLng, !0) : t.lng;
            return new D(this.wrapLat ? o(t.lat, this.wrapLat, !0) : t.lat,i,t.alt);
        },
        wrapLatLngBounds(t) {
            const i = t.getCenter();
            const e = this.wrapLatLng(i);
            const n = i.lat - e.lat;
            const o = i.lng - e.lng;
            if (n == 0 && o == 0)
                return t;
            const s = t.getSouthWest();
            const r = t.getNorthEast();
            return new R(new D(s.lat - n,s.lng - o),new D(r.lat - n,r.lng - o));
        },
    };
    var F = h({}, H, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance(t, i) {
            const e = Math.PI / 180;
            const n = t.lat * e;
            const o = i.lat * e;
            const s = Math.sin((i.lat - t.lat) * e / 2);
            const r = Math.sin((i.lng - t.lng) * e / 2);
            const a = s * s + Math.cos(n) * Math.cos(o) * r * r;
            const h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return this.R * h;
        }
    });
    const U = 6378137;
    const V = {
        R: U,
        MAX_LATITUDE: 85.0511287798,
        project(t) {
            const i = Math.PI / 180;
            const e = this.MAX_LATITUDE;
            const n = Math.max(Math.min(e, t.lat), -e);
            const o = Math.sin(n * i);
            return new k(this.R * t.lng * i,this.R * Math.log((1 + o) / (1 - o)) / 2);
        },
        unproject(t) {
            const i = 180 / Math.PI;
            return new D((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i,t.x * i / this.R);
        },
        bounds: new I([-(W = U * Math.PI), -W],[W, W]),
    };
    function q(t, i, e, n) {
        if (g(t))
            return this._a = t[0],
            this._b = t[1],
            this._c = t[2],
            void (this._d = t[3]);
        this._a = t,
        this._b = i,
        this._c = e,
        this._d = n;
    }
    function G(t, i, e, n) {
        return new q(t,i,e,n);
    }
    q.prototype = {
        transform(t, i) {
            return this._transform(t.clone(), i);
        },
        _transform(t, i) {
            return i = i || 1,
            t.x = i * (this._a * t.x + this._b),
            t.y = i * (this._c * t.y + this._d),
            t;
        },
        untransform(t, i) {
            return i = i || 1,
            new k((t.x / i - this._b) / this._a,(t.y / i - this._d) / this._c);
        }
    };
    let K;
    const Y = h({}, F, {
        code: 'EPSG:3857',
        projection: V,
        transformation: G(K = 0.5 / (Math.PI * V.R), 0.5, -K, 0.5)
    });
    const X = h({}, Y, {
        code: 'EPSG:900913'
    });
    function J(t) {
        return document.createElementNS('http://www.w3.org/2000/svg', t);
    }
    function $(t, i) {
        for (var e, n, o, s, r = '', a = 0, h = t.length; a < h; a++) {
            for (e = 0,
            n = (o = t[a]).length; e < n; e++)
                r += `${(e ? 'L' : 'M') + (s = o[e]).x} ${s.y}`;
            r += i ? Zt ? 'z' : 'x' : '';
        }
        return r || 'M0 0';
    }
    const Q = document.documentElement.style;
    const tt = 'ActiveXObject'in window;
    const it = tt && !document.addEventListener;
    const et = 'msLaunchUri'in navigator && !('documentMode'in document);
    const nt = kt('webkit');
    const ot = kt('android');
    const st = kt('android 2') || kt('android 3');
    const rt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10);
    const at = ot && kt('Google') && rt < 537 && !('AudioNode'in window);
    const ht = !!window.opera;
    const ut = !et && kt('chrome');
    const lt = kt('gecko') && !nt && !ht && !tt;
    const ct = !ut && kt('safari');
    const _t = kt('phantom');
    const dt = 'OTransition'in Q;
    const pt = navigator.platform.indexOf('Win') === 0;
    const mt = tt && 'transition'in Q;
    const ft = 'WebKitCSSMatrix'in window && 'm11'in new window.WebKitCSSMatrix() && !st;
    const gt = 'MozPerspective'in Q;
    const vt = !window.L_DISABLE_3D && (mt || ft || gt) && !dt && !_t;
    const yt = typeof orientation !== 'undefined' || kt('mobile');
    const xt = yt && nt;
    const wt = yt && ft;
    const Pt = !window.PointerEvent && window.MSPointerEvent;
    const Lt = !(!window.PointerEvent && !Pt);
    const bt = !window.L_NO_TOUCH && (Lt || 'ontouchstart'in window || window.DocumentTouch && document instanceof window.DocumentTouch);
    const Tt = yt && ht;
    const Mt = yt && lt;
    const zt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1;
    const Ct = (function() {
        let t = !1;
        try {
            const i = Object.defineProperty({}, 'passive', {
                get() {
                    t = !0;
                }
            });
            window.addEventListener('testPassiveEventSupport', a, i),
            window.removeEventListener('testPassiveEventSupport', a, i);
        } catch (t) {}
        return t;
    }());
    const St = !!document.createElement('canvas').getContext;
    var Zt = !(!document.createElementNS || !J('svg').createSVGRect);
    const Et = !Zt && (function() {
        try {
            const t = document.createElement('div');
            t.innerHTML = '<v:shape adj="1"/>';
            const i = t.firstChild;
            return i.style.behavior = 'url(#default#VML)',
            i && typeof i.adj === 'object';
        } catch (t) {
            return !1;
        }
    }());
    function kt(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
    }
    const Bt = {
        ie: tt,
        ielt9: it,
        edge: et,
        webkit: nt,
        android: ot,
        android23: st,
        androidStock: at,
        opera: ht,
        chrome: ut,
        gecko: lt,
        safari: ct,
        phantom: _t,
        opera12: dt,
        win: pt,
        ie3d: mt,
        webkit3d: ft,
        gecko3d: gt,
        any3d: vt,
        mobile: yt,
        mobileWebkit: xt,
        mobileWebkit3d: wt,
        msPointer: Pt,
        pointer: Lt,
        touch: bt,
        mobileOpera: Tt,
        mobileGecko: Mt,
        retina: zt,
        passiveEvents: Ct,
        canvas: St,
        svg: Zt,
        vml: Et,
    };
    const At = Pt ? 'MSPointerDown' : 'pointerdown';
    const It = Pt ? 'MSPointerMove' : 'pointermove';
    const Ot = Pt ? 'MSPointerUp' : 'pointerup';
    const Rt = Pt ? 'MSPointerCancel' : 'pointercancel';
    const Nt = {};
    let Dt = !1;
    function jt(t, i, e, n) {
        function o(t) {
            Ut(t, r);
        }
        let s;
        let r;
        let a;
        let h;
        let u;
        let l;
        let c;
        let _;
        function d(t) {
            t.pointerType === (t.MSPOINTER_TYPE_MOUSE || 'mouse') && t.buttons === 0 || Ut(t, h);
        }
        return i === 'touchstart' ? (u = t,
        l = e,
        c = n,
        _ = p((t)=>{
            t.MSPOINTER_TYPE_TOUCH && t.pointerType === t.MSPOINTER_TYPE_TOUCH && Ri(t),
            Ut(t, l);
        }
        ),
        u[`_leaflet_touchstart${c}`] = _,
        u.addEventListener(At, _, !1),
        Dt || (document.addEventListener(At, Wt, !0),
        document.addEventListener(It, Ht, !0),
        document.addEventListener(Ot, Ft, !0),
        document.addEventListener(Rt, Ft, !0),
        Dt = !0)) : i === 'touchmove' ? (h = e,
        (a = t)[`_leaflet_touchmove${n}`] = d,
        a.addEventListener(It, d, !1)) : i === 'touchend' && (r = e,
        (s = t)[`_leaflet_touchend${n}`] = o,
        s.addEventListener(Ot, o, !1),
        s.addEventListener(Rt, o, !1)),
        this;
    }
    function Wt(t) {
        Nt[t.pointerId] = t;
    }
    function Ht(t) {
        Nt[t.pointerId] && (Nt[t.pointerId] = t);
    }
    function Ft(t) {
        delete Nt[t.pointerId];
    }
    function Ut(t, i) {
        for (const e in t.touches = [],
        Nt)
            t.touches.push(Nt[e]);
        t.changedTouches = [t],
        i(t);
    }
    const Vt = Pt ? 'MSPointerDown' : Lt ? 'pointerdown' : 'touchstart';
    const qt = Pt ? 'MSPointerUp' : Lt ? 'pointerup' : 'touchend';
    const Gt = '_leaflet_';
    let Kt;
    let Yt;
    let Xt;
    let Jt;
    let $t;
    let Qt;
    const ti = fi(['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']);
    const ii = fi(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);
    const ei = ii === 'webkitTransition' || ii === 'OTransition' ? `${ii}End` : 'transitionend';
    function ni(t) {
        return typeof t === 'string' ? document.getElementById(t) : t;
    }
    function oi(t, i) {
        let e;
        let n = t.style[i] || t.currentStyle && t.currentStyle[i];
        return n && n !== 'auto' || !document.defaultView || (n = (e = document.defaultView.getComputedStyle(t, null)) ? e[i] : null),
        n === 'auto' ? null : n;
    }
    function si(t, i, e) {
        const n = document.createElement(t);
        return n.className = i || '',
        e && e.appendChild(n),
        n;
    }
    function ri(t) {
        const i = t.parentNode;
        i && i.removeChild(t);
    }
    function ai(t) {
        for (; t.firstChild; )
            t.removeChild(t.firstChild);
    }
    function hi(t) {
        const i = t.parentNode;
        i && i.lastChild !== t && i.appendChild(t);
    }
    function ui(t) {
        const i = t.parentNode;
        i && i.firstChild !== t && i.insertBefore(t, i.firstChild);
    }
    function li(t, i) {
        if (void 0 !== t.classList)
            return t.classList.contains(i);
        const e = pi(t);
        return e.length > 0 && new RegExp(`(^|\\s)${i}(\\s|$)`).test(e);
    }
    function ci(t, i) {
        let e;
        if (void 0 !== t.classList)
            for (let n = l(i), o = 0, s = n.length; o < s; o++)
                t.classList.add(n[o]);
        else
            li(t, i) || di(t, ((e = pi(t)) ? `${e} ` : '') + i);
    }
    function _i(t, i) {
        void 0 !== t.classList ? t.classList.remove(i) : di(t, u((` ${pi(t)} `).replace(` ${i} `, ' ')));
    }
    function di(t, i) {
        void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i;
    }
    function pi(t) {
        return t.correspondingElement && (t = t.correspondingElement),
        void 0 === t.className.baseVal ? t.className : t.className.baseVal;
    }
    function mi(t, i) {
        'opacity'in t.style ? t.style.opacity = i : 'filter'in t.style && (function(t, i) {
            let e = !1;
            const n = 'DXImageTransform.Microsoft.Alpha';
            try {
                e = t.filters.item(n);
            } catch (t) {
                if (i === 1)
                    return;
            }
            i = Math.round(100 * i),
            e ? (e.Enabled = i !== 100,
            e.Opacity = i) : t.style.filter += ` progid:${n}(opacity=${i})`;
        }(t, i));
    }
    function fi(t) {
        for (let i = document.documentElement.style, e = 0; e < t.length; e++)
            if (t[e]in i)
                return t[e];
        return !1;
    }
    function gi(t, i, e) {
        const n = i || new k(0,0);
        t.style[ti] = (mt ? `translate(${n.x}px,${n.y}px)` : `translate3d(${n.x}px,${n.y}px,0)`) + (e ? ` scale(${e})` : '');
    }
    function vi(t, i) {
        t._leaflet_pos = i,
        vt ? gi(t, i) : (t.style.left = `${i.x}px`,
        t.style.top = `${i.y}px`);
    }
    function yi(t) {
        return t._leaflet_pos || new k(0,0);
    }
    function xi() {
        zi(window, 'dragstart', Ri);
    }
    function wi() {
        Si(window, 'dragstart', Ri);
    }
    function Pi(t) {
        for (; t.tabIndex === -1; )
            t = t.parentNode;
        t.style && (Li(),
        Qt = ($t = t).style.outline,
        t.style.outline = 'none',
        zi(window, 'keydown', Li));
    }
    function Li() {
        $t && ($t.style.outline = Qt,
        Qt = $t = void 0,
        Si(window, 'keydown', Li));
    }
    function bi(t) {
        for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body); )
            ;
        return t;
    }
    function Ti(t) {
        const i = t.getBoundingClientRect();
        return {
            x: i.width / t.offsetWidth || 1,
            y: i.height / t.offsetHeight || 1,
            boundingClientRect: i
        };
    }
    Jt = 'onselectstart'in document ? (Xt = function() {
        zi(window, 'selectstart', Ri);
    }
    ,
    function() {
        Si(window, 'selectstart', Ri);
    }
    ) : (Yt = fi(['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']),
    Xt = function() {
        let t;
        Yt && (t = document.documentElement.style,
        Kt = t[Yt],
        t[Yt] = 'none');
    }
    ,
    function() {
        Yt && (document.documentElement.style[Yt] = Kt,
        Kt = void 0);
    }
    );
    const Mi = {
        TRANSFORM: ti,
        TRANSITION: ii,
        TRANSITION_END: ei,
        get: ni,
        getStyle: oi,
        create: si,
        remove: ri,
        empty: ai,
        toFront: hi,
        toBack: ui,
        hasClass: li,
        addClass: ci,
        removeClass: _i,
        setClass: di,
        getClass: pi,
        setOpacity: mi,
        testProp: fi,
        setTransform: gi,
        setPosition: vi,
        getPosition: yi,
        disableTextSelection: Xt,
        enableTextSelection: Jt,
        disableImageDrag: xi,
        enableImageDrag: wi,
        preventOutline: Pi,
        restoreOutline: Li,
        getSizedParentNode: bi,
        getScale: Ti,
    };
    function zi(t, i, e, n) {
        if (typeof i === 'object')
            for (const o in i)
                ki(t, o, i[o], e);
        else
            for (let s = 0, r = (i = l(i)).length; s < r; s++)
                ki(t, i[s], e, n);
        return this;
    }
    const Ci = '_leaflet_events';
    function Si(t, i, e, n) {
        if (typeof i === 'object')
            for (const o in i)
                Bi(t, o, i[o], e);
        else if (i)
            for (let s = 0, r = (i = l(i)).length; s < r; s++)
                Bi(t, i[s], e, n);
        else {
            for (const a in t[Ci])
                Bi(t, a, t[Ci][a]);
            delete t[Ci];
        }
        return this;
    }
    function Zi() {
        return Lt && (!et && !ct);
    }
    const Ei = {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        wheel: !('onwheel'in window) && 'mousewheel'
    };
    function ki(i, t, e, n) {
        const o = t + m(e) + (n ? `_${m(n)}` : '');
        if (i[Ci] && i[Ci][o])
            return this;
        let s;
        let r;
        let a;
        let h;
        let u;
        let l;
        let c = function(t) {
            return e.call(n || i, t || window.event);
        };
        const _ = c;
        function d(t) {
            if (Lt) {
                if (!t.isPrimary)
                    return;
                if (t.pointerType === 'mouse')
                    return;
            } else if (t.touches.length > 1)
                return;
            const i = Date.now();
            const e = i - (h || i);
            u = t.touches ? t.touches[0] : t,
            l = e > 0 && e <= 250,
            h = i;
        }
        function p(t) {
            if (l && !u.cancelBubble) {
                if (Lt) {
                    if (t.pointerType === 'mouse')
                        return;
                    let i;
                    let e;
                    const n = {};
                    for (e in u)
                        i = u[e],
                        n[e] = i && i.bind ? i.bind(u) : i;
                    u = n;
                }
                u.type = 'dblclick',
                u.button = 0,
                r(u),
                h = null;
            }
        }
        Lt && t.indexOf('touch') === 0 ? jt(i, t, c, o) : bt && t === 'dblclick' && !Zi() ? (r = c,
        l = !1,
        (s = i)[Gt + Vt + (a = o)] = d,
        s[Gt + qt + a] = p,
        s[`${Gt}dblclick${a}`] = r,
        s.addEventListener(Vt, d, !!Ct && {
            passive: !1
        }),
        s.addEventListener(qt, p, !!Ct && {
            passive: !1
        }),
        s.addEventListener('dblclick', r, !1)) : 'addEventListener'in i ? t === 'touchstart' || t === 'touchmove' || t === 'wheel' || t === 'mousewheel' ? i.addEventListener(Ei[t] || t, c, !!Ct && {
            passive: !1
        }) : t === 'mouseenter' || t === 'mouseleave' ? (c = function(t) {
            t = t || window.event,
            Vi(i, t) && _(t);
        }
        ,
        i.addEventListener(Ei[t], c, !1)) : i.addEventListener(t, _, !1) : 'attachEvent'in i && i.attachEvent(`on${t}`, c),
        i[Ci] = i[Ci] || {},
        i[Ci][o] = c;
    }
    function Bi(t, i, e, n) {
        let o;
        let s;
        let r;
        let a;
        let h;
        let u;
        let l;
        let c;
        const _ = i + m(e) + (n ? `_${m(n)}` : '');
        const d = t[Ci] && t[Ci][_];
        if (!d)
            return this;
        Lt && i.indexOf('touch') === 0 ? (c = (u = t)[`_leaflet_${l = i}${_}`],
        l === 'touchstart' ? u.removeEventListener(At, c, !1) : l === 'touchmove' ? u.removeEventListener(It, c, !1) : l === 'touchend' && (u.removeEventListener(Ot, c, !1),
        u.removeEventListener(Rt, c, !1))) : bt && i === 'dblclick' && !Zi() ? (r = (o = t)[Gt + Vt + (s = _)],
        a = o[Gt + qt + s],
        h = o[`${Gt}dblclick${s}`],
        o.removeEventListener(Vt, r, !!Ct && {
            passive: !1
        }),
        o.removeEventListener(qt, a, !!Ct && {
            passive: !1
        }),
        o.removeEventListener('dblclick', h, !1)) : 'removeEventListener'in t ? t.removeEventListener(Ei[i] || i, d, !1) : 'detachEvent'in t && t.detachEvent(`on${i}`, d),
        t[Ci][_] = null;
    }
    function Ai(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0,
        Ui(t),
        this;
    }
    function Ii(t) {
        return ki(t, 'wheel', Ai),
        this;
    }
    function Oi(t) {
        return zi(t, 'mousedown touchstart dblclick', Ai),
        ki(t, 'click', Fi),
        this;
    }
    function Ri(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
        this;
    }
    function Ni(t) {
        return Ri(t),
        Ai(t),
        this;
    }
    function Di(t, i) {
        if (!i)
            return new k(t.clientX,t.clientY);
        const e = Ti(i);
        const n = e.boundingClientRect;
        return new k((t.clientX - n.left) / e.x - i.clientLeft,(t.clientY - n.top) / e.y - i.clientTop);
    }
    const ji = pt && ut ? 2 * window.devicePixelRatio : lt ? window.devicePixelRatio : 1;
    function Wi(t) {
        return et ? t.wheelDeltaY / 2 : t.deltaY && t.deltaMode === 0 ? -t.deltaY / ji : t.deltaY && t.deltaMode === 1 ? 20 * -t.deltaY : t.deltaY && t.deltaMode === 2 ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0;
    }
    const Hi = {};
    function Fi(t) {
        Hi[t.type] = !0;
    }
    function Ui(t) {
        const i = Hi[t.type];
        return Hi[t.type] = !1,
        i;
    }
    function Vi(t, i) {
        let e = i.relatedTarget;
        if (!e)
            return !0;
        try {
            for (; e && e !== t; )
                e = e.parentNode;
        } catch (t) {
            return !1;
        }
        return e !== t;
    }
    const qi = {
        on: zi,
        off: Si,
        stopPropagation: Ai,
        disableScrollPropagation: Ii,
        disableClickPropagation: Oi,
        preventDefault: Ri,
        stop: Ni,
        getMousePosition: Di,
        getWheelDelta: Wi,
        fakeStop: Fi,
        skipped: Ui,
        isExternalTarget: Vi,
        addListener: zi,
        removeListener: Si,
    };
    const Gi = E.extend({
        run(t, i, e, n) {
            this.stop(),
            this._el = t,
            this._inProgress = !0,
            this._duration = e || 0.25,
            this._easeOutPower = 1 / Math.max(n || 0.5, 0.2),
            this._startPos = yi(t),
            this._offset = i.subtract(this._startPos),
            this._startTime = +new Date(),
            this.fire('start'),
            this._animate();
        },
        stop() {
            this._inProgress && (this._step(!0),
            this._complete());
        },
        _animate() {
            this._animId = M(this._animate, this),
            this._step();
        },
        _step(t) {
            const i = new Date() - this._startTime;
            const e = 1e3 * this._duration;
            i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1),
            this._complete());
        },
        _runFrame(t, i) {
            const e = this._startPos.add(this._offset.multiplyBy(t));
            i && e._round(),
            vi(this._el, e),
            this.fire('step');
        },
        _complete() {
            z(this._animId),
            this._inProgress = !1,
            this.fire('end');
        },
        _easeOut(t) {
            return 1 - Math.pow(1 - t, this._easeOutPower);
        },
    });
    const Ki = E.extend({
        options: {
            crs: Y,
            center: void 0,
            zoom: void 0,
            minZoom: void 0,
            maxZoom: void 0,
            layers: [],
            maxBounds: void 0,
            renderer: void 0,
            zoomAnimation: !0,
            zoomAnimationThreshold: 4,
            fadeAnimation: !0,
            markerZoomAnimation: !0,
            transform3DLimit: 8388608,
            zoomSnap: 1,
            zoomDelta: 1,
            trackResize: !0,
        },
        initialize(t, i) {
            i = c(this, i),
            this._handlers = [],
            this._layers = {},
            this._zoomBoundLayers = {},
            this._sizeChanged = !0,
            this._initContainer(t),
            this._initLayout(),
            this._onResize = p(this._onResize, this),
            this._initEvents(),
            i.maxBounds && this.setMaxBounds(i.maxBounds),
            void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)),
            i.center && void 0 !== i.zoom && this.setView(j(i.center), i.zoom, {
                reset: !0
            }),
            this.callInitHooks(),
            this._zoomAnimated = ii && vt && !Tt && this.options.zoomAnimation,
            this._zoomAnimated && (this._createAnimProxy(),
            zi(this._proxy, ei, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers);
        },
        setView(t, i, e) {
            if ((i = void 0 === i ? this._zoom : this._limitZoom(i),
            t = this._limitCenter(j(t), i, this.options.maxBounds),
            e = e || {},
            this._stop(),
            this._loaded && !e.reset && !0 !== e) && (void 0 !== e.animate && (e.zoom = h({
                animate: e.animate
            }, e.zoom),
            e.pan = h({
                animate: e.animate,
                duration: e.duration
            }, e.pan)),
            this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, e.zoom) : this._tryAnimatedPan(t, e.pan)))
                return clearTimeout(this._sizeTimer),
                this;
            return this._resetView(t, i),
            this;
        },
        setZoom(t, i) {
            return this._loaded ? this.setView(this.getCenter(), t, {
                zoom: i
            }) : (this._zoom = t,
            this);
        },
        zoomIn(t, i) {
            return t = t || (vt ? this.options.zoomDelta : 1),
            this.setZoom(this._zoom + t, i);
        },
        zoomOut(t, i) {
            return t = t || (vt ? this.options.zoomDelta : 1),
            this.setZoom(this._zoom - t, i);
        },
        setZoomAround(t, i, e) {
            const n = this.getZoomScale(i);
            const o = this.getSize().divideBy(2);
            const s = (t instanceof k ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n);
            const r = this.containerPointToLatLng(o.add(s));
            return this.setView(r, i, {
                zoom: e
            });
        },
        _getBoundsCenterZoom(t, i) {
            i = i || {},
            t = t.getBounds ? t.getBounds() : N(t);
            const e = A(i.paddingTopLeft || i.padding || [0, 0]);
            const n = A(i.paddingBottomRight || i.padding || [0, 0]);
            let o = this.getBoundsZoom(t, !1, e.add(n));
            if ((o = typeof i.maxZoom === 'number' ? Math.min(i.maxZoom, o) : o) === 1 / 0)
                return {
                    center: t.getCenter(),
                    zoom: o
                };
            const s = n.subtract(e).divideBy(2);
            const r = this.project(t.getSouthWest(), o);
            const a = this.project(t.getNorthEast(), o);
            return {
                center: this.unproject(r.add(a).divideBy(2).add(s), o),
                zoom: o
            };
        },
        fitBounds(t, i) {
            if (!(t = N(t)).isValid())
                throw new Error('Bounds are not valid.');
            const e = this._getBoundsCenterZoom(t, i);
            return this.setView(e.center, e.zoom, i);
        },
        fitWorld(t) {
            return this.fitBounds([[-90, -180], [90, 180]], t);
        },
        panTo(t, i) {
            return this.setView(t, this._zoom, {
                pan: i
            });
        },
        panBy(t, i) {
            let e;
            return i = i || {},
            (t = A(t).round()).x || t.y ? (!0 === i.animate || this.getSize().contains(t) ? (this._panAnim || (this._panAnim = new Gi(),
            this._panAnim.on({
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd
            }, this)),
            i.noMoveStart || this.fire('movestart'),
            !1 !== i.animate ? (ci(this._mapPane, 'leaflet-pan-anim'),
            e = this._getMapPanePos().subtract(t).round(),
            this._panAnim.run(this._mapPane, e, i.duration || 0.25, i.easeLinearity)) : (this._rawPanBy(t),
            this.fire('move').fire('moveend'))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()),
            this) : this.fire('moveend');
        },
        flyTo(s, r, t) {
            if (!1 === (t = t || {}).animate || !vt)
                return this.setView(s, r, t);
            this._stop();
            const a = this.project(this.getCenter());
            const h = this.project(s);
            const i = this.getSize();
            const u = this._zoom;
            s = j(s),
            r = void 0 === r ? u : r;
            const l = Math.max(i.x, i.y);
            const n = l * this.getZoomScale(u, r);
            const c = h.distanceTo(a) || 1;
            const _ = 1.42;
            const o = _ * _;
            function e(t) {
                const i = (n * n - l * l + (t ? -1 : 1) * o * o * c * c) / (2 * (t ? n : l) * o * c);
                const e = Math.sqrt(i * i + 1) - i;
                return e < 1e-9 ? -18 : Math.log(e);
            }
            function d(t) {
                return (Math.exp(t) - Math.exp(-t)) / 2;
            }
            function p(t) {
                return (Math.exp(t) + Math.exp(-t)) / 2;
            }
            const m = e(0);
            function f(t) {
                return l * (p(m) * (d(i = m + _ * t) / p(i)) - d(m)) / o;
                let i;
            }
            const g = Date.now();
            const v = (e(1) - m) / _;
            const y = t.duration ? 1e3 * t.duration : 1e3 * v * 0.8;
            return this._moveStart(!0, t.noMoveStart),
            function t() {
                let i;
                let e;
                const n = (Date.now() - g) / y;
                const o = (i = n,
                (1 - Math.pow(1 - i, 1.5)) * v);
                n <= 1 ? (this._flyToFrame = M(t, this),
                this._move(this.unproject(a.add(h.subtract(a).multiplyBy(f(o) / c)), u), this.getScaleZoom(l / (e = o,
                l * (p(m) / p(m + _ * e))), u), {
                    flyTo: !0
                })) : this._move(s, r)._moveEnd(!0);
            }
            .call(this),
            this;
        },
        flyToBounds(t, i) {
            const e = this._getBoundsCenterZoom(t, i);
            return this.flyTo(e.center, e.zoom, i);
        },
        setMaxBounds(t) {
            return (t = N(t)).isValid() ? (this.options.maxBounds && this.off('moveend', this._panInsideMaxBounds),
            this.options.maxBounds = t,
            this._loaded && this._panInsideMaxBounds(),
            this.on('moveend', this._panInsideMaxBounds)) : (this.options.maxBounds = null,
            this.off('moveend', this._panInsideMaxBounds));
        },
        setMinZoom(t) {
            const i = this.options.minZoom;
            return this.options.minZoom = t,
            this._loaded && i !== t && (this.fire('zoomlevelschange'),
            this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
        },
        setMaxZoom(t) {
            const i = this.options.maxZoom;
            return this.options.maxZoom = t,
            this._loaded && i !== t && (this.fire('zoomlevelschange'),
            this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
        },
        panInsideBounds(t, i) {
            this._enforcingBounds = !0;
            const e = this.getCenter();
            const n = this._limitCenter(e, this._zoom, N(t));
            return e.equals(n) || this.panTo(n, i),
            this._enforcingBounds = !1,
            this;
        },
        panInside(t, i) {
            let e;
            let n;
            const o = A((i = i || {}).paddingTopLeft || i.padding || [0, 0]);
            const s = A(i.paddingBottomRight || i.padding || [0, 0]);
            const r = this.getCenter();
            const a = this.project(r);
            const h = this.project(t);
            const u = this.getPixelBounds();
            const l = u.getSize().divideBy(2);
            const c = O([u.min.add(o), u.max.subtract(s)]);
            return c.contains(h) || (this._enforcingBounds = !0,
            e = a.subtract(h),
            n = A(h.x + e.x, h.y + e.y),
            (h.x < c.min.x || h.x > c.max.x) && (n.x = a.x - e.x,
            e.x > 0 ? n.x += l.x - o.x : n.x -= l.x - s.x),
            (h.y < c.min.y || h.y > c.max.y) && (n.y = a.y - e.y,
            e.y > 0 ? n.y += l.y - o.y : n.y -= l.y - s.y),
            this.panTo(this.unproject(n), i),
            this._enforcingBounds = !1),
            this;
        },
        invalidateSize(t) {
            if (!this._loaded)
                return this;
            t = h({
                animate: !1,
                pan: !0
            }, !0 === t ? {
                animate: !0
            } : t);
            const i = this.getSize();
            this._sizeChanged = !0,
            this._lastCenter = null;
            const e = this.getSize();
            const n = i.divideBy(2).round();
            const o = e.divideBy(2).round();
            const s = n.subtract(o);
            return s.x || s.y ? (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s),
            this.fire('move'),
            t.debounceMoveend ? (clearTimeout(this._sizeTimer),
            this._sizeTimer = setTimeout(p(this.fire, this, 'moveend'), 200)) : this.fire('moveend')),
            this.fire('resize', {
                oldSize: i,
                newSize: e
            })) : this;
        },
        stop() {
            return this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire('viewreset'),
            this._stop();
        },
        locate(t) {
            if (t = this._locateOptions = h({
                timeout: 1e4,
                watch: !1
            }, t),
            !('geolocation'in navigator))
                return this._handleGeolocationError({
                    code: 0,
                    message: 'Geolocation not supported.'
                }),
                this;
            const i = p(this._handleGeolocationResponse, this);
            const e = p(this._handleGeolocationError, this);
            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, e, t) : navigator.geolocation.getCurrentPosition(i, e, t),
            this;
        },
        stopLocate() {
            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this;
        },
        _handleGeolocationError(t) {
            const i = t.code;
            const e = t.message || (i === 1 ? 'permission denied' : i === 2 ? 'position unavailable' : 'timeout');
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
            this.fire('locationerror', {
                code: i,
                message: `Geolocation error: ${e}.`
            });
        },
        _handleGeolocationResponse(t) {
            let i;
            const e = new D(t.coords.latitude,t.coords.longitude);
            const n = e.toBounds(2 * t.coords.accuracy);
            const o = this._locateOptions;
            o.setView && (i = this.getBoundsZoom(n),
            this.setView(e, o.maxZoom ? Math.min(i, o.maxZoom) : i));
            const s = {
                latlng: e,
                bounds: n,
                timestamp: t.timestamp
            };
            for (const r in t.coords)
                typeof t.coords[r] === 'number' && (s[r] = t.coords[r]);
            this.fire('locationfound', s);
        },
        addHandler(t, i) {
            if (!i)
                return this;
            const e = this[t] = new i(this);
            return this._handlers.push(e),
            this.options[t] && e.enable(),
            this;
        },
        remove() {
            if (this._initEvents(!0),
            this.off('moveend', this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
                throw new Error('Map container is being reused by another instance');
            try {
                delete this._container._leaflet_id,
                delete this._containerId;
            } catch (t) {
                this._container._leaflet_id = void 0,
                this._containerId = void 0;
            }
            let t;
            for (t in void 0 !== this._locationWatchId && this.stopLocate(),
            this._stop(),
            ri(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest && (z(this._resizeRequest),
            this._resizeRequest = null),
            this._clearHandlers(),
            this._loaded && this.fire('unload'),
            this._layers)
                this._layers[t].remove();
            for (t in this._panes)
                ri(this._panes[t]);
            return this._layers = [],
            this._panes = [],
            delete this._mapPane,
            delete this._renderer,
            this;
        },
        createPane(t, i) {
            const e = si('div', `leaflet-pane${t ? ` leaflet-${t.replace('Pane', '')}-pane` : ''}`, i || this._mapPane);
            return t && (this._panes[t] = e),
            e;
        },
        getCenter() {
            return this._checkIfLoaded(),
            this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
        },
        getZoom() {
            return this._zoom;
        },
        getBounds() {
            const t = this.getPixelBounds();
            return new R(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()));
        },
        getMinZoom() {
            return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        getMaxZoom() {
            return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
        },
        getBoundsZoom(t, i, e) {
            t = N(t),
            e = A(e || [0, 0]);
            var n = this.getZoom() || 0;
            const o = this.getMinZoom();
            const s = this.getMaxZoom();
            const r = t.getNorthWest();
            const a = t.getSouthEast();
            const h = this.getSize().subtract(e);
            const u = O(this.project(a, n), this.project(r, n)).getSize();
            const l = vt ? this.options.zoomSnap : 1;
            const c = h.x / u.x;
            const _ = h.y / u.y;
            const d = i ? Math.max(c, _) : Math.min(c, _);
            var n = this.getScaleZoom(d, n);
            return l && (n = Math.round(n / (l / 100)) * (l / 100),
            n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l),
            Math.max(o, Math.min(s, n));
        },
        getSize() {
            return this._size && !this._sizeChanged || (this._size = new k(this._container.clientWidth || 0,this._container.clientHeight || 0),
            this._sizeChanged = !1),
            this._size.clone();
        },
        getPixelBounds(t, i) {
            const e = this._getTopLeftPoint(t, i);
            return new I(e,e.add(this.getSize()));
        },
        getPixelOrigin() {
            return this._checkIfLoaded(),
            this._pixelOrigin;
        },
        getPixelWorldBounds(t) {
            return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
        },
        getPane(t) {
            return typeof t === 'string' ? this._panes[t] : t;
        },
        getPanes() {
            return this._panes;
        },
        getContainer() {
            return this._container;
        },
        getZoomScale(t, i) {
            const e = this.options.crs;
            return i = void 0 === i ? this._zoom : i,
            e.scale(t) / e.scale(i);
        },
        getScaleZoom(t, i) {
            const e = this.options.crs;
            i = void 0 === i ? this._zoom : i;
            const n = e.zoom(t * e.scale(i));
            return isNaN(n) ? 1 / 0 : n;
        },
        project(t, i) {
            return i = void 0 === i ? this._zoom : i,
            this.options.crs.latLngToPoint(j(t), i);
        },
        unproject(t, i) {
            return i = void 0 === i ? this._zoom : i,
            this.options.crs.pointToLatLng(A(t), i);
        },
        layerPointToLatLng(t) {
            const i = A(t).add(this.getPixelOrigin());
            return this.unproject(i);
        },
        latLngToLayerPoint(t) {
            return this.project(j(t))._round()._subtract(this.getPixelOrigin());
        },
        wrapLatLng(t) {
            return this.options.crs.wrapLatLng(j(t));
        },
        wrapLatLngBounds(t) {
            return this.options.crs.wrapLatLngBounds(N(t));
        },
        distance(t, i) {
            return this.options.crs.distance(j(t), j(i));
        },
        containerPointToLayerPoint(t) {
            return A(t).subtract(this._getMapPanePos());
        },
        layerPointToContainerPoint(t) {
            return A(t).add(this._getMapPanePos());
        },
        containerPointToLatLng(t) {
            const i = this.containerPointToLayerPoint(A(t));
            return this.layerPointToLatLng(i);
        },
        latLngToContainerPoint(t) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(j(t)));
        },
        mouseEventToContainerPoint(t) {
            return Di(t, this._container);
        },
        mouseEventToLayerPoint(t) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
        },
        mouseEventToLatLng(t) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
        },
        _initContainer(t) {
            const i = this._container = ni(t);
            if (!i)
                throw new Error('Map container not found.');
            if (i._leaflet_id)
                throw new Error('Map container is already initialized.');
            zi(i, 'scroll', this._onScroll, this),
            this._containerId = m(i);
        },
        _initLayout() {
            const t = this._container;
            this._fadeAnimated = this.options.fadeAnimation && vt,
            ci(t, `leaflet-container${bt ? ' leaflet-touch' : ''}${zt ? ' leaflet-retina' : ''}${it ? ' leaflet-oldie' : ''}${ct ? ' leaflet-safari' : ''}${this._fadeAnimated ? ' leaflet-fade-anim' : ''}`);
            const i = oi(t, 'position');
            i !== 'absolute' && i !== 'relative' && i !== 'fixed' && (t.style.position = 'relative'),
            this._initPanes(),
            this._initControlPos && this._initControlPos();
        },
        _initPanes() {
            const t = this._panes = {};
            this._paneRenderers = {},
            this._mapPane = this.createPane('mapPane', this._container),
            vi(this._mapPane, new k(0,0)),
            this.createPane('tilePane'),
            this.createPane('shadowPane'),
            this.createPane('overlayPane'),
            this.createPane('markerPane'),
            this.createPane('tooltipPane'),
            this.createPane('popupPane'),
            this.options.markerZoomAnimation || (ci(t.markerPane, 'leaflet-zoom-hide'),
            ci(t.shadowPane, 'leaflet-zoom-hide'));
        },
        _resetView(t, i) {
            vi(this._mapPane, new k(0,0));
            const e = !this._loaded;
            this._loaded = !0,
            i = this._limitZoom(i),
            this.fire('viewprereset');
            const n = this._zoom !== i;
            this._moveStart(n, !1)._move(t, i)._moveEnd(n),
            this.fire('viewreset'),
            e && this.fire('load');
        },
        _moveStart(t, i) {
            return t && this.fire('zoomstart'),
            i || this.fire('movestart'),
            this;
        },
        _move(t, i, e) {
            void 0 === i && (i = this._zoom);
            const n = this._zoom !== i;
            return this._zoom = i,
            this._lastCenter = t,
            this._pixelOrigin = this._getNewPixelOrigin(t),
            (n || e && e.pinch) && this.fire('zoom', e),
            this.fire('move', e);
        },
        _moveEnd(t) {
            return t && this.fire('zoomend'),
            this.fire('moveend');
        },
        _stop() {
            return z(this._flyToFrame),
            this._panAnim && this._panAnim.stop(),
            this;
        },
        _rawPanBy(t) {
            vi(this._mapPane, this._getMapPanePos().subtract(t));
        },
        _getZoomSpan() {
            return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds() {
            this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded() {
            if (!this._loaded)
                throw new Error('Set map center and zoom first.');
        },
        _initEvents(t) {
            this._targets = {};
            const i = t ? Si : zi;
            i((this._targets[m(this._container)] = this)._container, 'click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup', this._handleDOMEvent, this),
            this.options.trackResize && i(window, 'resize', this._onResize, this),
            vt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
        },
        _onResize() {
            z(this._resizeRequest),
            this._resizeRequest = M(function() {
                this.invalidateSize({
                    debounceMoveend: !0
                });
            }, this);
        },
        _onScroll() {
            this._container.scrollTop = 0,
            this._container.scrollLeft = 0;
        },
        _onMoveEnd() {
            const t = this._getMapPanePos();
            Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets(t, i) {
            for (var e, n = [], o = i === 'mouseout' || i === 'mouseover', s = t.target || t.srcElement, r = !1; s; ) {
                if ((e = this._targets[m(s)]) && (i === 'click' || i === 'preclick') && !t._simulated && this._draggableMoved(e)) {
                    r = !0;
                    break;
                }
                if (e && e.listens(i, !0)) {
                    if (o && !Vi(s, t))
                        break;
                    if (n.push(e),
                    o)
                        break;
                }
                if (s === this._container)
                    break;
                s = s.parentNode;
            }
            return n.length || r || o || !Vi(s, t) || (n = [this]),
            n;
        },
        _handleDOMEvent(t) {
            let i;
            this._loaded && !Ui(t) && ((i = t.type) !== 'mousedown' && i !== 'keypress' && i !== 'keyup' && i !== 'keydown' || Pi(t.target || t.srcElement),
            this._fireDOMEvent(t, i));
        },
        _mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],
        _fireDOMEvent(t, i, e) {
            let n;
            if (t.type === 'click' && ((n = h({}, t)).type = 'preclick',
            this._fireDOMEvent(n, n.type, e)),
            !t._stopped && (e = (e || []).concat(this._findEventTargets(t, i))).length) {
                const o = e[0];
                i === 'contextmenu' && o.listens(i, !0) && Ri(t);
                let s;
                const r = {
                    originalEvent: t
                };
                t.type !== 'keypress' && t.type !== 'keydown' && t.type !== 'keyup' && (s = o.getLatLng && (!o._radius || o._radius <= 10),
                r.containerPoint = s ? this.latLngToContainerPoint(o.getLatLng()) : this.mouseEventToContainerPoint(t),
                r.layerPoint = this.containerPointToLayerPoint(r.containerPoint),
                r.latlng = s ? o.getLatLng() : this.layerPointToLatLng(r.layerPoint));
                for (let a = 0; a < e.length; a++)
                    if (e[a].fire(i, r, !0),
                    r.originalEvent._stopped || !1 === e[a].options.bubblingMouseEvents && v(this._mouseEvents, i) !== -1)
                        return;
            }
        },
        _draggableMoved(t) {
            return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        },
        _clearHandlers() {
            for (let t = 0, i = this._handlers.length; t < i; t++)
                this._handlers[t].disable();
        },
        whenReady(t, i) {
            return this._loaded ? t.call(i || this, {
                target: this
            }) : this.on('load', t, i),
            this;
        },
        _getMapPanePos() {
            return yi(this._mapPane) || new k(0,0);
        },
        _moved() {
            const t = this._getMapPanePos();
            return t && !t.equals([0, 0]);
        },
        _getTopLeftPoint(t, i) {
            return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin(t, i) {
            const e = this.getSize()._divideBy(2);
            return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint(t, i, e) {
            const n = this._getNewPixelOrigin(e, i);
            return this.project(t, i)._subtract(n);
        },
        _latLngBoundsToNewLayerBounds(t, i, e) {
            const n = this._getNewPixelOrigin(e, i);
            return O([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)]);
        },
        _getCenterLayerPoint() {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        _getCenterOffset(t) {
            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
        },
        _limitCenter(t, i, e) {
            if (!e)
                return t;
            const n = this.project(t, i);
            const o = this.getSize().divideBy(2);
            const s = new I(n.subtract(o),n.add(o));
            const r = this._getBoundsOffset(s, e, i);
            return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i);
        },
        _limitOffset(t, i) {
            if (!i)
                return t;
            const e = this.getPixelBounds();
            const n = new I(e.min.add(t),e.max.add(t));
            return t.add(this._getBoundsOffset(n, i));
        },
        _getBoundsOffset(t, i, e) {
            const n = O(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e));
            const o = n.min.subtract(t.min);
            const s = n.max.subtract(t.max);
            return new k(this._rebound(o.x, -s.x),this._rebound(o.y, -s.y));
        },
        _rebound(t, i) {
            return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
        },
        _limitZoom(t) {
            const i = this.getMinZoom();
            const e = this.getMaxZoom();
            const n = vt ? this.options.zoomSnap : 1;
            return n && (t = Math.round(t / n) * n),
            Math.max(i, Math.min(e, t));
        },
        _onPanTransitionStep() {
            this.fire('move');
        },
        _onPanTransitionEnd() {
            _i(this._mapPane, 'leaflet-pan-anim'),
            this.fire('moveend');
        },
        _tryAnimatedPan(t, i) {
            const e = this._getCenterOffset(t)._trunc();
            return !(!0 !== (i && i.animate) && !this.getSize().contains(e)) && (this.panBy(e, i),
            !0);
        },
        _createAnimProxy() {
            const t = this._proxy = si('div', 'leaflet-proxy leaflet-zoom-animated');
            this._panes.mapPane.appendChild(t),
            this.on('zoomanim', function(t) {
                const i = ti;
                const e = this._proxy.style[i];
                gi(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
                e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
            }, this),
            this.on('load moveend', this._animMoveEnd, this),
            this._on('unload', this._destroyAnimProxy, this);
        },
        _destroyAnimProxy() {
            ri(this._proxy),
            this.off('load moveend', this._animMoveEnd, this),
            delete this._proxy;
        },
        _animMoveEnd() {
            const t = this.getCenter();
            const i = this.getZoom();
            gi(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
        },
        _catchTransitionEnd(t) {
            this._animatingZoom && t.propertyName.indexOf('transform') >= 0 && this._onZoomTransitionEnd();
        },
        _nothingToAnimate() {
            return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
        },
        _tryAnimatedZoom(t, i, e) {
            if (this._animatingZoom)
                return !0;
            if (e = e || {},
            !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold)
                return !1;
            const n = this.getZoomScale(i);
            const o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
            return !(!0 !== e.animate && !this.getSize().contains(o)) && (M(function() {
                this._moveStart(!0, !1)._animateZoom(t, i, !0);
            }, this),
            !0);
        },
        _animateZoom(t, i, e, n) {
            this._mapPane && (e && (this._animatingZoom = !0,
            this._animateToCenter = t,
            this._animateToZoom = i,
            ci(this._mapPane, 'leaflet-zoom-anim')),
            this.fire('zoomanim', {
                center: t,
                zoom: i,
                noUpdate: n
            }),
            setTimeout(p(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd() {
            this._animatingZoom && (this._mapPane && _i(this._mapPane, 'leaflet-zoom-anim'),
            this._animatingZoom = !1,
            this._move(this._animateToCenter, this._animateToZoom),
            M(function() {
                this._moveEnd(!0);
            }, this));
        },
    });
    function Yi(t) {
        return new Xi(t);
    }
    var Xi = S.extend({
        options: {
            position: 'topright'
        },
        initialize(t) {
            c(this, t);
        },
        getPosition() {
            return this.options.position;
        },
        setPosition(t) {
            const i = this._map;
            return i && i.removeControl(this),
            this.options.position = t,
            i && i.addControl(this),
            this;
        },
        getContainer() {
            return this._container;
        },
        addTo(t) {
            this.remove(),
            this._map = t;
            const i = this._container = this.onAdd(t);
            const e = this.getPosition();
            const n = t._controlCorners[e];
            return ci(i, 'leaflet-control'),
            e.indexOf('bottom') !== -1 ? n.insertBefore(i, n.firstChild) : n.appendChild(i),
            this._map.on('unload', this.remove, this),
            this;
        },
        remove() {
            return this._map && (ri(this._container),
            this.onRemove && this.onRemove(this._map),
            this._map.off('unload', this.remove, this),
            this._map = null),
            this;
        },
        _refocusOnMap(t) {
            this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
        },
    });
    Ki.include({
        addControl(t) {
            return t.addTo(this),
            this;
        },
        removeControl(t) {
            return t.remove(),
            this;
        },
        _initControlPos() {
            const n = this._controlCorners = {};
            const o = 'leaflet-';
            const s = this._controlContainer = si('div', `${o}control-container`, this._container);
            function t(t, i) {
                const e = `${o + t} ${o}${i}`;
                n[t + i] = si('div', e, s);
            }
            t('top', 'left'),
            t('top', 'right'),
            t('bottom', 'left'),
            t('bottom', 'right');
        },
        _clearControlPos() {
            for (const t in this._controlCorners)
                ri(this._controlCorners[t]);
            ri(this._controlContainer),
            delete this._controlCorners,
            delete this._controlContainer;
        },
    });
    const Ji = Xi.extend({
        options: {
            collapsed: !0,
            position: 'topright',
            autoZIndex: !0,
            hideSingleBase: !1,
            sortLayers: !1,
            sortFunction(t, i, e, n) {
                return e < n ? -1 : n < e ? 1 : 0;
            },
        },
        initialize(t, i, e) {
            for (var n in c(this, e),
            this._layerControlInputs = [],
            this._layers = [],
            this._lastZIndex = 0,
            this._handlingClick = !1,
            t)
                this._addLayer(t[n], n);
            for (n in i)
                this._addLayer(i[n], n, !0);
        },
        onAdd(t) {
            this._initLayout(),
            this._update(),
            (this._map = t).on('zoomend', this._checkDisabledLayers, this);
            for (let i = 0; i < this._layers.length; i++)
                this._layers[i].layer.on('add remove', this._onLayerChange, this);
            return this._container;
        },
        addTo(t) {
            return Xi.prototype.addTo.call(this, t),
            this._expandIfNotCollapsed();
        },
        onRemove() {
            this._map.off('zoomend', this._checkDisabledLayers, this);
            for (let t = 0; t < this._layers.length; t++)
                this._layers[t].layer.off('add remove', this._onLayerChange, this);
        },
        addBaseLayer(t, i) {
            return this._addLayer(t, i),
            this._map ? this._update() : this;
        },
        addOverlay(t, i) {
            return this._addLayer(t, i, !0),
            this._map ? this._update() : this;
        },
        removeLayer(t) {
            t.off('add remove', this._onLayerChange, this);
            const i = this._getLayer(m(t));
            return i && this._layers.splice(this._layers.indexOf(i), 1),
            this._map ? this._update() : this;
        },
        expand() {
            ci(this._container, 'leaflet-control-layers-expanded'),
            this._section.style.height = null;
            const t = this._map.getSize().y - (this._container.offsetTop + 50);
            return t < this._section.clientHeight ? (ci(this._section, 'leaflet-control-layers-scrollbar'),
            this._section.style.height = `${t}px`) : _i(this._section, 'leaflet-control-layers-scrollbar'),
            this._checkDisabledLayers(),
            this;
        },
        collapse() {
            return _i(this._container, 'leaflet-control-layers-expanded'),
            this;
        },
        _initLayout() {
            const t = 'leaflet-control-layers';
            const i = this._container = si('div', t);
            const e = this.options.collapsed;
            i.setAttribute('aria-haspopup', !0),
            Oi(i),
            Ii(i);
            const n = this._section = si('section', `${t}-list`);
            e && (this._map.on('click', this.collapse, this),
            ot || zi(i, {
                mouseenter: this.expand,
                mouseleave: this.collapse
            }, this));
            const o = this._layersLink = si('a', `${t}-toggle`, i);
            o.href = '#',
            o.title = 'Layers',
            bt ? (zi(o, 'click', Ni),
            zi(o, 'click', this.expand, this)) : zi(o, 'focus', this.expand, this),
            e || this.expand(),
            this._baseLayersList = si('div', `${t}-base`, n),
            this._separator = si('div', `${t}-separator`, n),
            this._overlaysList = si('div', `${t}-overlays`, n),
            i.appendChild(n);
        },
        _getLayer(t) {
            for (let i = 0; i < this._layers.length; i++)
                if (this._layers[i] && m(this._layers[i].layer) === t)
                    return this._layers[i];
        },
        _addLayer(t, i, e) {
            this._map && t.on('add remove', this._onLayerChange, this),
            this._layers.push({
                layer: t,
                name: i,
                overlay: e
            }),
            this.options.sortLayers && this._layers.sort(p(function(t, i) {
                return this.options.sortFunction(t.layer, i.layer, t.name, i.name);
            }, this)),
            this.options.autoZIndex && t.setZIndex && (this._lastZIndex++,
            t.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed();
        },
        _update() {
            if (!this._container)
                return this;
            ai(this._baseLayersList),
            ai(this._overlaysList),
            this._layerControlInputs = [];
            for (var t, i, e, n = 0, o = 0; o < this._layers.length; o++)
                e = this._layers[o],
                this._addItem(e),
                i = i || e.overlay,
                t = t || !e.overlay,
                n += e.overlay ? 0 : 1;
            return this.options.hideSingleBase && (t = t && n > 1,
            this._baseLayersList.style.display = t ? '' : 'none'),
            this._separator.style.display = i && t ? '' : 'none',
            this;
        },
        _onLayerChange(t) {
            this._handlingClick || this._update();
            const i = this._getLayer(m(t.target));
            const e = i.overlay ? t.type === 'add' ? 'overlayadd' : 'overlayremove' : t.type === 'add' ? 'baselayerchange' : null;
            e && this._map.fire(e, i);
        },
        _createRadioElement(t, i) {
            const e = `<input type="radio" class="leaflet-control-layers-selector" name="${t}"${i ? ' checked="checked"' : ''}/>`;
            const n = document.createElement('div');
            return n.innerHTML = e,
            n.firstChild;
        },
        _addItem(t) {
            let i;
            const e = document.createElement('label');
            const n = this._map.hasLayer(t.layer);
            t.overlay ? ((i = document.createElement('input')).type = 'checkbox',
            i.className = 'leaflet-control-layers-selector',
            i.defaultChecked = n) : i = this._createRadioElement(`leaflet-base-layers_${m(this)}`, n),
            this._layerControlInputs.push(i),
            i.layerId = m(t.layer),
            zi(i, 'click', this._onInputClick, this);
            const o = document.createElement('span');
            o.innerHTML = ` ${t.name}`;
            const s = document.createElement('div');
            return e.appendChild(s),
            s.appendChild(i),
            s.appendChild(o),
            (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e),
            this._checkDisabledLayers(),
            e;
        },
        _onInputClick() {
            let t;
            let i;
            const e = this._layerControlInputs;
            const n = [];
            const o = [];
            this._handlingClick = !0;
            for (var s = e.length - 1; s >= 0; s--)
                t = e[s],
                i = this._getLayer(t.layerId).layer,
                t.checked ? n.push(i) : t.checked || o.push(i);
            for (s = 0; s < o.length; s++)
                this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
            for (s = 0; s < n.length; s++)
                this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
            this._handlingClick = !1,
            this._refocusOnMap();
        },
        _checkDisabledLayers() {
            for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; o >= 0; o--)
                t = e[o],
                i = this._getLayer(t.layerId).layer,
                t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom;
        },
        _expandIfNotCollapsed() {
            return this._map && !this.options.collapsed && this.expand(),
            this;
        },
        _expand() {
            return this.expand();
        },
        _collapse() {
            return this.collapse();
        },
    });
    const $i = Xi.extend({
        options: {
            position: 'topleft',
            zoomInText: '+',
            zoomInTitle: 'Zoom in',
            zoomOutText: '&#x2212;',
            zoomOutTitle: 'Zoom out',
        },
        onAdd(t) {
            const i = 'leaflet-control-zoom';
            const e = si('div', `${i} leaflet-bar`);
            const n = this.options;
            return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, `${i}-in`, e, this._zoomIn),
            this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, `${i}-out`, e, this._zoomOut),
            this._updateDisabled(),
            t.on('zoomend zoomlevelschange', this._updateDisabled, this),
            e;
        },
        onRemove(t) {
            t.off('zoomend zoomlevelschange', this._updateDisabled, this);
        },
        disable() {
            return this._disabled = !0,
            this._updateDisabled(),
            this;
        },
        enable() {
            return this._disabled = !1,
            this._updateDisabled(),
            this;
        },
        _zoomIn(t) {
            !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _zoomOut(t) {
            !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _createButton(t, i, e, n, o) {
            const s = si('a', e, n);
            return s.innerHTML = t,
            s.href = '#',
            s.title = i,
            s.setAttribute('role', 'button'),
            s.setAttribute('aria-label', i),
            Oi(s),
            zi(s, 'click', Ni),
            zi(s, 'click', o, this),
            zi(s, 'click', this._refocusOnMap, this),
            s;
        },
        _updateDisabled() {
            const t = this._map;
            const i = 'leaflet-disabled';
            _i(this._zoomInButton, i),
            _i(this._zoomOutButton, i),
            !this._disabled && t._zoom !== t.getMinZoom() || ci(this._zoomOutButton, i),
            !this._disabled && t._zoom !== t.getMaxZoom() || ci(this._zoomInButton, i);
        },
    });
    Ki.mergeOptions({
        zoomControl: !0
    }),
    Ki.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new $i(),
        this.addControl(this.zoomControl));
    });
    const Qi = Xi.extend({
        options: {
            position: 'bottomleft',
            maxWidth: 100,
            metric: !0,
            imperial: !0,
        },
        onAdd(t) {
            const i = 'leaflet-control-scale';
            const e = si('div', i);
            const n = this.options;
            return this._addScales(n, `${i}-line`, e),
            t.on(n.updateWhenIdle ? 'moveend' : 'move', this._update, this),
            t.whenReady(this._update, this),
            e;
        },
        onRemove(t) {
            t.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
        },
        _addScales(t, i, e) {
            t.metric && (this._mScale = si('div', i, e)),
            t.imperial && (this._iScale = si('div', i, e));
        },
        _update() {
            const t = this._map;
            const i = t.getSize().y / 2;
            const e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));
            this._updateScales(e);
        },
        _updateScales(t) {
            this.options.metric && t && this._updateMetric(t),
            this.options.imperial && t && this._updateImperial(t);
        },
        _updateMetric(t) {
            const i = this._getRoundNum(t);
            const e = i < 1e3 ? `${i} m` : `${i / 1e3} km`;
            this._updateScale(this._mScale, e, i / t);
        },
        _updateImperial(t) {
            let i;
            let e;
            let n;
            const o = 3.2808399 * t;
            o > 5280 ? (i = o / 5280,
            e = this._getRoundNum(i),
            this._updateScale(this._iScale, `${e} mi`, e / i)) : (n = this._getRoundNum(o),
            this._updateScale(this._iScale, `${n} ft`, n / o));
        },
        _updateScale(t, i, e) {
            t.style.width = `${Math.round(this.options.maxWidth * e)}px`,
            t.innerHTML = i;
        },
        _getRoundNum(t) {
            const i = Math.pow(10, (`${Math.floor(t)}`).length - 1);
            let e = t / i;
            return i * (e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1);
        },
    });
    const te = Xi.extend({
        options: {
            position: 'bottomright',
            prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
        },
        initialize(t) {
            c(this, t),
            this._attributions = {};
        },
        onAdd(t) {
            for (const i in (t.attributionControl = this)._container = si('div', 'leaflet-control-attribution'),
            Oi(this._container),
            t._layers)
                t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
            return this._update(),
            this._container;
        },
        setPrefix(t) {
            return this.options.prefix = t,
            this._update(),
            this;
        },
        addAttribution(t) {
            return t && (this._attributions[t] || (this._attributions[t] = 0),
            this._attributions[t]++,
            this._update()),
            this;
        },
        removeAttribution(t) {
            return t && this._attributions[t] && (this._attributions[t]--,
            this._update()),
            this;
        },
        _update() {
            if (this._map) {
                const t = [];
                for (const i in this._attributions)
                    this._attributions[i] && t.push(i);
                const e = [];
                this.options.prefix && e.push(this.options.prefix),
                t.length && e.push(t.join(', ')),
                this._container.innerHTML = e.join(' | ');
            }
        },
    });
    Ki.mergeOptions({
        attributionControl: !0
    }),
    Ki.addInitHook(function() {
        this.options.attributionControl && (new te()).addTo(this);
    });
    Xi.Layers = Ji,
    Xi.Zoom = $i,
    Xi.Scale = Qi,
    Xi.Attribution = te,
    Yi.layers = function(t, i, e) {
        return new Ji(t,i,e);
    }
    ,
    Yi.zoom = function(t) {
        return new $i(t);
    }
    ,
    Yi.scale = function(t) {
        return new Qi(t);
    }
    ,
    Yi.attribution = function(t) {
        return new te(t);
    }
    ;
    const ie = S.extend({
        initialize(t) {
            this._map = t;
        },
        enable() {
            return this._enabled || (this._enabled = !0,
            this.addHooks()),
            this;
        },
        disable() {
            return this._enabled && (this._enabled = !1,
            this.removeHooks()),
            this;
        },
        enabled() {
            return !!this._enabled;
        },
    });
    ie.addTo = function(t, i) {
        return t.addHandler(i, this),
        this;
    }
    ;
    let ee;
    const ne = {
        Events: Z
    };
    const oe = bt ? 'touchstart mousedown' : 'mousedown';
    const se = {
        mousedown: 'mouseup',
        touchstart: 'touchend',
        pointerdown: 'touchend',
        MSPointerDown: 'touchend',
    };
    const re = {
        mousedown: 'mousemove',
        touchstart: 'touchmove',
        pointerdown: 'touchmove',
        MSPointerDown: 'touchmove',
    };
    var ae = E.extend({
        options: {
            clickTolerance: 3
        },
        initialize(t, i, e, n) {
            c(this, n),
            this._element = t,
            this._dragStartTarget = i || t,
            this._preventOutline = e;
        },
        enable() {
            this._enabled || (zi(this._dragStartTarget, oe, this._onDown, this),
            this._enabled = !0);
        },
        disable() {
            this._enabled && (ae._dragging === this && this.finishDrag(),
            Si(this._dragStartTarget, oe, this._onDown, this),
            this._enabled = !1,
            this._moved = !1);
        },
        _onDown(t) {
            let i;
            let e;
            !t._simulated && this._enabled && (this._moved = !1,
            li(this._element, 'leaflet-zoom-anim') || ae._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches || ((ae._dragging = this)._preventOutline && Pi(this._element),
            xi(),
            Xt(),
            this._moving || (this.fire('down'),
            i = t.touches ? t.touches[0] : t,
            e = bi(this._element),
            this._startPoint = new k(i.clientX,i.clientY),
            this._parentScale = Ti(e),
            zi(document, re[t.type], this._onMove, this),
            zi(document, se[t.type], this._onUp, this))));
        },
        _onMove(t) {
            let i;
            let e;
            !t._simulated && this._enabled && (t.touches && t.touches.length > 1 ? this._moved = !0 : ((e = new k((i = t.touches && t.touches.length === 1 ? t.touches[0] : t).clientX,i.clientY)._subtract(this._startPoint)).x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x,
            e.y /= this._parentScale.y,
            Ri(t),
            this._moved || (this.fire('dragstart'),
            this._moved = !0,
            this._startPos = yi(this._element).subtract(e),
            ci(document.body, 'leaflet-dragging'),
            this._lastTarget = t.target || t.srcElement,
            window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement),
            ci(this._lastTarget, 'leaflet-drag-target')),
            this._newPos = this._startPos.add(e),
            this._moving = !0,
            z(this._animRequest),
            this._lastEvent = t,
            this._animRequest = M(this._updatePosition, this, !0))));
        },
        _updatePosition() {
            const t = {
                originalEvent: this._lastEvent
            };
            this.fire('predrag', t),
            vi(this._element, this._newPos),
            this.fire('drag', t);
        },
        _onUp(t) {
            !t._simulated && this._enabled && this.finishDrag();
        },
        finishDrag() {
            for (const t in _i(document.body, 'leaflet-dragging'),
            this._lastTarget && (_i(this._lastTarget, 'leaflet-drag-target'),
            this._lastTarget = null),
            re)
                Si(document, re[t], this._onMove, this),
                Si(document, se[t], this._onUp, this);
            wi(),
            Jt(),
            this._moved && this._moving && (z(this._animRequest),
            this.fire('dragend', {
                distance: this._newPos.distanceTo(this._startPos)
            })),
            this._moving = !1,
            ae._dragging = !1;
        },
    });
    function he(t, i) {
        if (!i || !t.length)
            return t.slice();
        const e = i * i;
        return t = (function(t, i) {
            const e = t.length;
            const n = new (typeof Uint8Array !== `${void 0}` ? Uint8Array : Array)(e);
            n[0] = n[e - 1] = 1,
            (function t(i, e, n, o, s) {
                let r;
                let a;
                let h;
                let u = 0;
                for (a = o + 1; a <= s - 1; a++)
                    h = de(i[a], i[o], i[s], !0),
                    u < h && (r = a,
                    u = h);
                n < u && (e[r] = 1,
                t(i, e, n, o, r),
                t(i, e, n, r, s));
            }(t, n, i, 0, e - 1));
            let o;
            const s = [];
            for (o = 0; o < e; o++)
                n[o] && s.push(t[o]);
            return s;
        }(t = (function(t, i) {
            for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
                (function(t, i) {
                    const e = i.x - t.x;
                    const n = i.y - t.y;
                    return e * e + n * n;
                }(t[n], t[o])) > i && (e.push(t[n]),
                o = n);
            o < s - 1 && e.push(t[s - 1]);
            return e;
        }(t, e)), e));
    }
    function ue(t, i, e) {
        return Math.sqrt(de(t, i, e, !0));
    }
    function le(t, i, e, n, o) {
        let s;
        let r;
        let a;
        let h = n ? ee : _e(t, e);
        let u = _e(i, e);
        for (ee = u; ; ) {
            if (!(h | u))
                return [t, i];
            if (h & u)
                return !1;
            a = _e(r = ce(t, i, s = h || u, e, o), e),
            s === h ? (t = r,
            h = a) : (i = r,
            u = a);
        }
    }
    function ce(t, i, e, n, o) {
        let s;
        let r;
        const a = i.x - t.x;
        const h = i.y - t.y;
        const u = n.min;
        const l = n.max;
        return 8 & e ? (s = t.x + a * (l.y - t.y) / h,
        r = l.y) : 4 & e ? (s = t.x + a * (u.y - t.y) / h,
        r = u.y) : 2 & e ? (s = l.x,
        r = t.y + h * (l.x - t.x) / a) : 1 & e && (s = u.x,
        r = t.y + h * (u.x - t.x) / a),
        new k(s,r,o);
    }
    function _e(t, i) {
        let e = 0;
        return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2),
        t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8),
        e;
    }
    function de(t, i, e, n) {
        let o;
        let s = i.x;
        let r = i.y;
        let a = e.x - s;
        let h = e.y - r;
        const u = a * a + h * h;
        return u > 0 && ((o = ((t.x - s) * a + (t.y - r) * h) / u) > 1 ? (s = e.x,
        r = e.y) : o > 0 && (s += a * o,
        r += h * o)),
        a = t.x - s,
        h = t.y - r,
        n ? a * a + h * h : new k(s,r);
    }
    function pe(t) {
        return !g(t[0]) || typeof t[0][0] !== 'object' && void 0 !== t[0][0];
    }
    function me(t) {
        return console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.'),
        pe(t);
    }
    const fe = {
        simplify: he,
        pointToSegmentDistance: ue,
        closestPointOnSegment(t, i, e) {
            return de(t, i, e);
        },
        clipSegment: le,
        _getEdgeIntersection: ce,
        _getBitCode: _e,
        _sqClosestPointOnSegment: de,
        isFlat: pe,
        _flat: me,
    };
    function ge(t, i, e) {
        for (var n, o, s, r, a, h, u, l = [1, 4, 2, 8], c = 0, _ = t.length; c < _; c++)
            t[c]._code = _e(t[c], i);
        for (s = 0; s < 4; s++) {
            for (h = l[s],
            n = [],
            c = 0,
            o = (_ = t.length) - 1; c < _; o = c++)
                r = t[c],
                a = t[o],
                r._code & h ? a._code & h || ((u = ce(a, r, h, i, e))._code = _e(u, i),
                n.push(u)) : (a._code & h && ((u = ce(a, r, h, i, e))._code = _e(u, i),
                n.push(u)),
                n.push(r));
            t = n;
        }
        return t;
    }
    let ve;
    const ye = {
        clipPolygon: ge
    };
    const xe = {
        project(t) {
            return new k(t.lng,t.lat);
        },
        unproject(t) {
            return new D(t.y,t.x);
        },
        bounds: new I([-180, -90],[180, 90])
    };
    const we = {
        R: 6378137,
        R_MINOR: 6356752.314245179,
        bounds: new I([-20037508.34279, -15496570.73972],[20037508.34279, 18764656.23138]),
        project(t) {
            const i = Math.PI / 180;
            const e = this.R;
            var n = t.lat * i;
            const o = this.R_MINOR / e;
            const s = Math.sqrt(1 - o * o);
            const r = s * Math.sin(n);
            const a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
            var n = -e * Math.log(Math.max(a, 1e-10));
            return new k(t.lng * i * e,n);
        },
        unproject(t) {
            for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = 0.1; h < 15 && Math.abs(u) > 1e-7; h++)
                i = s * Math.sin(a),
                i = Math.pow((1 - i) / (1 + i), s / 2),
                a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a;
            return new D(a * e,t.x * e / n);
        },
    };
    const Pe = {
        LonLat: xe,
        Mercator: we,
        SphericalMercator: V
    };
    const Le = h({}, F, {
        code: 'EPSG:3395',
        projection: we,
        transformation: G(ve = 0.5 / (Math.PI * we.R), 0.5, -ve, 0.5)
    });
    const be = h({}, F, {
        code: 'EPSG:4326',
        projection: xe,
        transformation: G(1 / 180, 1, -1 / 180, 0.5)
    });
    const Te = h({}, H, {
        projection: xe,
        transformation: G(1, 0, -1, 0),
        scale(t) {
            return Math.pow(2, t);
        },
        zoom(t) {
            return Math.log(t) / Math.LN2;
        },
        distance(t, i) {
            const e = i.lng - t.lng;
            const n = i.lat - t.lat;
            return Math.sqrt(e * e + n * n);
        },
        infinite: !0,
    });
    H.Earth = F,
    H.EPSG3395 = Le,
    H.EPSG3857 = Y,
    H.EPSG900913 = X,
    H.EPSG4326 = be,
    H.Simple = Te;
    const Me = E.extend({
        options: {
            pane: 'overlayPane',
            attribution: null,
            bubblingMouseEvents: !0
        },
        addTo(t) {
            return t.addLayer(this),
            this;
        },
        remove() {
            return this.removeFrom(this._map || this._mapToAdd);
        },
        removeFrom(t) {
            return t && t.removeLayer(this),
            this;
        },
        getPane(t) {
            return this._map.getPane(t ? this.options[t] || t : this.options.pane);
        },
        addInteractiveTarget(t) {
            return this._map._targets[m(t)] = this;
        },
        removeInteractiveTarget(t) {
            return delete this._map._targets[m(t)],
            this;
        },
        getAttribution() {
            return this.options.attribution;
        },
        _layerAdd(t) {
            let i;
            const e = t.target;
            e.hasLayer(this) && (this._map = e,
            this._zoomAnimated = e._zoomAnimated,
            this.getEvents && (i = this.getEvents(),
            e.on(i, this),
            this.once('remove', function() {
                e.off(i, this);
            }, this)),
            this.onAdd(e),
            this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()),
            this.fire('add'),
            e.fire('layeradd', {
                layer: this
            }));
        },
    });
    Ki.include({
        addLayer(t) {
            if (!t._layerAdd)
                throw new Error('The provided object is not a Layer.');
            const i = m(t);
            return this._layers[i] || ((this._layers[i] = t)._mapToAdd = this,
            t.beforeAdd && t.beforeAdd(this),
            this.whenReady(t._layerAdd, t)),
            this;
        },
        removeLayer(t) {
            const i = m(t);
            return this._layers[i] && (this._loaded && t.onRemove(this),
            t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()),
            delete this._layers[i],
            this._loaded && (this.fire('layerremove', {
                layer: t
            }),
            t.fire('remove')),
            t._map = t._mapToAdd = null),
            this;
        },
        hasLayer(t) {
            return !!t && m(t)in this._layers;
        },
        eachLayer(t, i) {
            for (const e in this._layers)
                t.call(i, this._layers[e]);
            return this;
        },
        _addLayers(t) {
            for (let i = 0, e = (t = t ? g(t) ? t : [t] : []).length; i < e; i++)
                this.addLayer(t[i]);
        },
        _addZoomLimit(t) {
            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[m(t)] = t,
            this._updateZoomLevels());
        },
        _removeZoomLimit(t) {
            const i = m(t);
            this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i],
            this._updateZoomLevels());
        },
        _updateZoomLevels() {
            var t = 1 / 0;
            var i = -1 / 0;
            const e = this._getZoomSpan();
            for (const n in this._zoomBoundLayers)
                var o = this._zoomBoundLayers[n].options
                  , t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom)
                  , i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom);
            this._layersMaxZoom = i === -1 / 0 ? void 0 : i,
            this._layersMinZoom = t === 1 / 0 ? void 0 : t,
            e !== this._getZoomSpan() && this.fire('zoomlevelschange'),
            void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom),
            void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        },
    });
    const ze = Me.extend({
        initialize(t, i) {
            let e;
            let n;
            if (c(this, i),
            this._layers = {},
            t)
                for (e = 0,
                n = t.length; e < n; e++)
                    this.addLayer(t[e]);
        },
        addLayer(t) {
            const i = this.getLayerId(t);
            return this._layers[i] = t,
            this._map && this._map.addLayer(t),
            this;
        },
        removeLayer(t) {
            const i = t in this._layers ? t : this.getLayerId(t);
            return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]),
            delete this._layers[i],
            this;
        },
        hasLayer(t) {
            return !!t && (typeof t === 'number' ? t : this.getLayerId(t))in this._layers;
        },
        clearLayers() {
            return this.eachLayer(this.removeLayer, this);
        },
        invoke(t) {
            let i;
            let e;
            const n = Array.prototype.slice.call(arguments, 1);
            for (i in this._layers)
                (e = this._layers[i])[t] && e[t].apply(e, n);
            return this;
        },
        onAdd(t) {
            this.eachLayer(t.addLayer, t);
        },
        onRemove(t) {
            this.eachLayer(t.removeLayer, t);
        },
        eachLayer(t, i) {
            for (const e in this._layers)
                t.call(i, this._layers[e]);
            return this;
        },
        getLayer(t) {
            return this._layers[t];
        },
        getLayers() {
            const t = [];
            return this.eachLayer(t.push, t),
            t;
        },
        setZIndex(t) {
            return this.invoke('setZIndex', t);
        },
        getLayerId: m,
    });
    const Ce = ze.extend({
        addLayer(t) {
            return this.hasLayer(t) ? this : (t.addEventParent(this),
            ze.prototype.addLayer.call(this, t),
            this.fire('layeradd', {
                layer: t
            }));
        },
        removeLayer(t) {
            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]),
            t.removeEventParent(this),
            ze.prototype.removeLayer.call(this, t),
            this.fire('layerremove', {
                layer: t
            })) : this;
        },
        setStyle(t) {
            return this.invoke('setStyle', t);
        },
        bringToFront() {
            return this.invoke('bringToFront');
        },
        bringToBack() {
            return this.invoke('bringToBack');
        },
        getBounds() {
            const t = new R();
            for (const i in this._layers) {
                const e = this._layers[i];
                t.extend(e.getBounds ? e.getBounds() : e.getLatLng());
            }
            return t;
        },
    });
    const Se = S.extend({
        options: {
            popupAnchor: [0, 0],
            tooltipAnchor: [0, 0]
        },
        initialize(t) {
            c(this, t);
        },
        createIcon(t) {
            return this._createIcon('icon', t);
        },
        createShadow(t) {
            return this._createIcon('shadow', t);
        },
        _createIcon(t, i) {
            const e = this._getIconUrl(t);
            if (!e) {
                if (t === 'icon')
                    throw new Error('iconUrl not set in Icon options (see the docs).');
                return null;
            }
            const n = this._createImg(e, i && i.tagName === 'IMG' ? i : null);
            return this._setIconStyles(n, t),
            n;
        },
        _setIconStyles(t, i) {
            const e = this.options;
            let n = e[`${i}Size`];
            typeof n === 'number' && (n = [n, n]);
            const o = A(n);
            const s = A(i === 'shadow' && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
            t.className = `leaflet-marker-${i} ${e.className || ''}`,
            s && (t.style.marginLeft = `${-s.x}px`,
            t.style.marginTop = `${-s.y}px`),
            o && (t.style.width = `${o.x}px`,
            t.style.height = `${o.y}px`);
        },
        _createImg(t, i) {
            return (i = i || document.createElement('img')).src = t,
            i;
        },
        _getIconUrl(t) {
            return zt && this.options[`${t}RetinaUrl`] || this.options[`${t}Url`];
        },
    });
    var Ze = Se.extend({
        options: {
            iconUrl: 'marker-icon.png',
            iconRetinaUrl: 'marker-icon-2x.png',
            shadowUrl: 'marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41],
        },
        _getIconUrl(t) {
            return Ze.imagePath || (Ze.imagePath = this._detectIconPath()),
            (this.options.imagePath || Ze.imagePath) + Se.prototype._getIconUrl.call(this, t);
        },
        _detectIconPath() {
            const t = si('div', 'leaflet-default-icon-path', document.body);
            let i = oi(t, 'background-image') || oi(t, 'backgroundImage');
            return document.body.removeChild(t),
            i = i === null || i.indexOf('url') !== 0 ? '' : i.replace(/^url\(["']?/, '').replace(/marker-icon\.png["']?\)$/, '');
        },
    });
    const Ee = ie.extend({
        initialize(t) {
            this._marker = t;
        },
        addHooks() {
            const t = this._marker._icon;
            this._draggable || (this._draggable = new ae(t,t,!0)),
            this._draggable.on({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
            }, this).enable(),
            ci(t, 'leaflet-marker-draggable');
        },
        removeHooks() {
            this._draggable.off({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
            }, this).disable(),
            this._marker._icon && _i(this._marker._icon, 'leaflet-marker-draggable');
        },
        moved() {
            return this._draggable && this._draggable._moved;
        },
        _adjustPan(t) {
            let i;
            const e = this._marker;
            const n = e._map;
            const o = this._marker.options.autoPanSpeed;
            const s = this._marker.options.autoPanPadding;
            const r = yi(e._icon);
            const a = n.getPixelBounds();
            const h = n.getPixelOrigin();
            const u = O(a.min._subtract(h).add(s), a.max._subtract(h).subtract(s));
            u.contains(r) || (i = A((Math.max(u.max.x, r.x) - u.max.x) / (a.max.x - u.max.x) - (Math.min(u.min.x, r.x) - u.min.x) / (a.min.x - u.min.x), (Math.max(u.max.y, r.y) - u.max.y) / (a.max.y - u.max.y) - (Math.min(u.min.y, r.y) - u.min.y) / (a.min.y - u.min.y)).multiplyBy(o),
            n.panBy(i, {
                animate: !1
            }),
            this._draggable._newPos._add(i),
            this._draggable._startPos._add(i),
            vi(e._icon, this._draggable._newPos),
            this._onDrag(t),
            this._panRequest = M(this._adjustPan.bind(this, t)));
        },
        _onDragStart() {
            this._oldLatLng = this._marker.getLatLng(),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire('movestart').fire('dragstart');
        },
        _onPreDrag(t) {
            this._marker.options.autoPan && (z(this._panRequest),
            this._panRequest = M(this._adjustPan.bind(this, t)));
        },
        _onDrag(t) {
            const i = this._marker;
            const e = i._shadow;
            const n = yi(i._icon);
            const o = i._map.layerPointToLatLng(n);
            e && vi(e, n),
            i._latlng = o,
            t.latlng = o,
            t.oldLatLng = this._oldLatLng,
            i.fire('move', t).fire('drag', t);
        },
        _onDragEnd(t) {
            z(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire('moveend').fire('dragend', t);
        },
    });
    const ke = Me.extend({
        options: {
            icon: new Ze(),
            interactive: !0,
            keyboard: !0,
            title: '',
            alt: '',
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250,
            pane: 'markerPane',
            shadowPane: 'shadowPane',
            bubblingMouseEvents: !1,
            draggable: !1,
            autoPan: !1,
            autoPanPadding: [50, 50],
            autoPanSpeed: 10,
        },
        initialize(t, i) {
            c(this, i),
            this._latlng = j(t);
        },
        onAdd(t) {
            this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation,
            this._zoomAnimated && t.on('zoomanim', this._animateZoom, this),
            this._initIcon(),
            this.update();
        },
        onRemove(t) {
            this.dragging && this.dragging.enabled() && (this.options.draggable = !0,
            this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && t.off('zoomanim', this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow();
        },
        getEvents() {
            return {
                zoom: this.update,
                viewreset: this.update
            };
        },
        getLatLng() {
            return this._latlng;
        },
        setLatLng(t) {
            const i = this._latlng;
            return this._latlng = j(t),
            this.update(),
            this.fire('move', {
                oldLatLng: i,
                latlng: this._latlng
            });
        },
        setZIndexOffset(t) {
            return this.options.zIndexOffset = t,
            this.update();
        },
        getIcon() {
            return this.options.icon;
        },
        setIcon(t) {
            return this.options.icon = t,
            this._map && (this._initIcon(),
            this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this;
        },
        getElement() {
            return this._icon;
        },
        update() {
            let t;
            return this._icon && this._map && (t = this._map.latLngToLayerPoint(this._latlng).round(),
            this._setPos(t)),
            this;
        },
        _initIcon() {
            const t = this.options;
            const i = `leaflet-zoom-${this._zoomAnimated ? 'animated' : 'hide'}`;
            const e = t.icon.createIcon(this._icon);
            let n = !1;
            e !== this._icon && (this._icon && this._removeIcon(),
            n = !0,
            t.title && (e.title = t.title),
            e.tagName === 'IMG' && (e.alt = t.alt || '')),
            ci(e, i),
            t.keyboard && (e.tabIndex = '0'),
            this._icon = e,
            t.riseOnHover && this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            });
            const o = t.icon.createShadow(this._shadow);
            let s = !1;
            o !== this._shadow && (this._removeShadow(),
            s = !0),
            o && (ci(o, i),
            o.alt = ''),
            this._shadow = o,
            t.opacity < 1 && this._updateOpacity(),
            n && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
        },
        _removeIcon() {
            this.options.riseOnHover && this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            }),
            ri(this._icon),
            this.removeInteractiveTarget(this._icon),
            this._icon = null;
        },
        _removeShadow() {
            this._shadow && ri(this._shadow),
            this._shadow = null;
        },
        _setPos(t) {
            this._icon && vi(this._icon, t),
            this._shadow && vi(this._shadow, t),
            this._zIndex = t.y + this.options.zIndexOffset,
            this._resetZIndex();
        },
        _updateZIndex(t) {
            this._icon && (this._icon.style.zIndex = this._zIndex + t);
        },
        _animateZoom(t) {
            const i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            this._setPos(i);
        },
        _initInteraction() {
            let t;
            this.options.interactive && (ci(this._icon, 'leaflet-interactive'),
            this.addInteractiveTarget(this._icon),
            Ee && (t = this.options.draggable,
            this.dragging && (t = this.dragging.enabled(),
            this.dragging.disable()),
            this.dragging = new Ee(this),
            t && this.dragging.enable()));
        },
        setOpacity(t) {
            return this.options.opacity = t,
            this._map && this._updateOpacity(),
            this;
        },
        _updateOpacity() {
            const t = this.options.opacity;
            this._icon && mi(this._icon, t),
            this._shadow && mi(this._shadow, t);
        },
        _bringToFront() {
            this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex() {
            this._updateZIndex(0);
        },
        _getPopupAnchor() {
            return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor() {
            return this.options.icon.options.tooltipAnchor;
        },
    });
    const Be = Me.extend({
        options: {
            stroke: !0,
            color: '#3388ff',
            weight: 3,
            opacity: 1,
            lineCap: 'round',
            lineJoin: 'round',
            dashArray: null,
            dashOffset: null,
            fill: !1,
            fillColor: null,
            fillOpacity: 0.2,
            fillRule: 'evenodd',
            interactive: !0,
            bubblingMouseEvents: !0,
        },
        beforeAdd(t) {
            this._renderer = t.getRenderer(this);
        },
        onAdd() {
            this._renderer._initPath(this),
            this._reset(),
            this._renderer._addPath(this);
        },
        onRemove() {
            this._renderer._removePath(this);
        },
        redraw() {
            return this._map && this._renderer._updatePath(this),
            this;
        },
        setStyle(t) {
            return c(this, t),
            this._renderer && (this._renderer._updateStyle(this),
            this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, 'weight') && this._updateBounds()),
            this;
        },
        bringToFront() {
            return this._renderer && this._renderer._bringToFront(this),
            this;
        },
        bringToBack() {
            return this._renderer && this._renderer._bringToBack(this),
            this;
        },
        getElement() {
            return this._path;
        },
        _reset() {
            this._project(),
            this._update();
        },
        _clickTolerance() {
            return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
        },
    });
    const Ae = Be.extend({
        options: {
            fill: !0,
            radius: 10
        },
        initialize(t, i) {
            c(this, i),
            this._latlng = j(t),
            this._radius = this.options.radius;
        },
        setLatLng(t) {
            const i = this._latlng;
            return this._latlng = j(t),
            this.redraw(),
            this.fire('move', {
                oldLatLng: i,
                latlng: this._latlng
            });
        },
        getLatLng() {
            return this._latlng;
        },
        setRadius(t) {
            return this.options.radius = this._radius = t,
            this.redraw();
        },
        getRadius() {
            return this._radius;
        },
        setStyle(t) {
            const i = t && t.radius || this._radius;
            return Be.prototype.setStyle.call(this, t),
            this.setRadius(i),
            this;
        },
        _project() {
            this._point = this._map.latLngToLayerPoint(this._latlng),
            this._updateBounds();
        },
        _updateBounds() {
            const t = this._radius;
            const i = this._radiusY || t;
            const e = this._clickTolerance();
            const n = [t + e, i + e];
            this._pxBounds = new I(this._point.subtract(n),this._point.add(n));
        },
        _update() {
            this._map && this._updatePath();
        },
        _updatePath() {
            this._renderer._updateCircle(this);
        },
        _empty() {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        _containsPoint(t) {
            return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
        },
    });
    const Ie = Ae.extend({
        initialize(t, i, e) {
            if (typeof i === 'number' && (i = h({}, e, {
                radius: i
            })),
            c(this, i),
            this._latlng = j(t),
            isNaN(this.options.radius))
                throw new Error('Circle radius cannot be NaN');
            this._mRadius = this.options.radius;
        },
        setRadius(t) {
            return this._mRadius = t,
            this.redraw();
        },
        getRadius() {
            return this._mRadius;
        },
        getBounds() {
            const t = [this._radius, this._radiusY || this._radius];
            return new R(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)));
        },
        setStyle: Be.prototype.setStyle,
        _project() {
            let t;
            let i;
            let e;
            let n;
            let o;
            let s;
            let r;
            let a;
            const h = this._latlng.lng;
            const u = this._latlng.lat;
            const l = this._map;
            const c = l.options.crs;
            c.distance === F.distance ? (t = Math.PI / 180,
            i = this._mRadius / F.R / t,
            e = l.project([u + i, h]),
            n = l.project([u - i, h]),
            o = e.add(n).divideBy(2),
            s = l.unproject(o).lat,
            r = Math.acos((Math.cos(i * t) - Math.sin(u * t) * Math.sin(s * t)) / (Math.cos(u * t) * Math.cos(s * t))) / t,
            !isNaN(r) && r !== 0 || (r = i / Math.cos(Math.PI / 180 * u)),
            this._point = o.subtract(l.getPixelOrigin()),
            this._radius = isNaN(r) ? 0 : o.x - l.project([s, h - r]).x,
            this._radiusY = o.y - e.y) : (a = c.unproject(c.project(this._latlng).subtract([this._mRadius, 0])),
            this._point = l.latLngToLayerPoint(this._latlng),
            this._radius = this._point.x - l.latLngToLayerPoint(a).x),
            this._updateBounds();
        },
    });
    const Oe = Be.extend({
        options: {
            smoothFactor: 1,
            noClip: !1
        },
        initialize(t, i) {
            c(this, i),
            this._setLatLngs(t);
        },
        getLatLngs() {
            return this._latlngs;
        },
        setLatLngs(t) {
            return this._setLatLngs(t),
            this.redraw();
        },
        isEmpty() {
            return !this._latlngs.length;
        },
        closestLayerPoint(t) {
            for (var i, e, n = 1 / 0, o = null, s = de, r = 0, a = this._parts.length; r < a; r++)
                for (let h = this._parts[r], u = 1, l = h.length; u < l; u++) {
                    const c = s(t, i = h[u - 1], e = h[u], !0);
                    c < n && (n = c,
                    o = s(t, i, e));
                }
            return o && (o.distance = Math.sqrt(n)),
            o;
        },
        getCenter() {
            if (!this._map)
                throw new Error('Must add layer to map before using getCenter()');
            let t;
            let i;
            let e;
            let n;
            let o;
            let s;
            let r;
            const a = this._rings[0];
            const h = a.length;
            if (!h)
                return null;
            for (i = t = 0; t < h - 1; t++)
                i += a[t].distanceTo(a[t + 1]) / 2;
            if (i === 0)
                return this._map.layerPointToLatLng(a[0]);
            for (n = t = 0; t < h - 1; t++)
                if (o = a[t],
                s = a[t + 1],
                i < (n += e = o.distanceTo(s)))
                    return r = (n - i) / e,
                    this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)]);
        },
        getBounds() {
            return this._bounds;
        },
        addLatLng(t, i) {
            return i = i || this._defaultShape(),
            t = j(t),
            i.push(t),
            this._bounds.extend(t),
            this.redraw();
        },
        _setLatLngs(t) {
            this._bounds = new R(),
            this._latlngs = this._convertLatLngs(t);
        },
        _defaultShape() {
            return pe(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        _convertLatLngs(t) {
            for (var i = [], e = pe(t), n = 0, o = t.length; n < o; n++)
                e ? (i[n] = j(t[n]),
                this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
            return i;
        },
        _project() {
            const t = new I();
            this._rings = [],
            this._projectLatlngs(this._latlngs, this._rings, t),
            this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t,
            this._updateBounds());
        },
        _updateBounds() {
            const t = this._clickTolerance();
            const i = new k(t,t);
            this._pxBounds = new I([this._rawPxBounds.min.subtract(i), this._rawPxBounds.max.add(i)]);
        },
        _projectLatlngs(t, i, e) {
            let n;
            let o;
            const s = t[0]instanceof D;
            const r = t.length;
            if (s) {
                for (o = [],
                n = 0; n < r; n++)
                    o[n] = this._map.latLngToLayerPoint(t[n]),
                    e.extend(o[n]);
                i.push(o);
            } else
                for (n = 0; n < r; n++)
                    this._projectLatlngs(t[n], i, e);
        },
        _clipPoints() {
            const t = this._renderer._bounds;
            if (this._parts = [],
            this._pxBounds && this._pxBounds.intersects(t))
                if (this.options.noClip)
                    this._parts = this._rings;
                else
                    for (var i, e, n, o, s = this._parts, r = 0, a = 0, h = this._rings.length; r < h; r++)
                        for (i = 0,
                        e = (o = this._rings[r]).length; i < e - 1; i++)
                            (n = le(o[i], o[i + 1], t, i, !0)) && (s[a] = s[a] || [],
                            s[a].push(n[0]),
                            n[1] === o[i + 1] && i !== e - 2 || (s[a].push(n[1]),
                            a++));
        },
        _simplifyPoints() {
            for (let t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++)
                t[e] = he(t[e], i);
        },
        _update() {
            this._map && (this._clipPoints(),
            this._simplifyPoints(),
            this._updatePath());
        },
        _updatePath() {
            this._renderer._updatePoly(this);
        },
        _containsPoint(t, i) {
            let e;
            let n;
            let o;
            let s;
            let r;
            let a;
            const h = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(t))
                return !1;
            for (e = 0,
            s = this._parts.length; e < s; e++)
                for (n = 0,
                o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++)
                    if ((i || n !== 0) && ue(t, a[o], a[n]) <= h)
                        return !0;
            return !1;
        },
    });
    Oe._flat = me;
    const Re = Oe.extend({
        options: {
            fill: !0
        },
        isEmpty() {
            return !this._latlngs.length || !this._latlngs[0].length;
        },
        getCenter() {
            if (!this._map)
                throw new Error('Must add layer to map before using getCenter()');
            let t;
            let i;
            let e;
            let n;
            let o;
            let s;
            let r;
            let a;
            let h;
            const u = this._rings[0];
            const l = u.length;
            if (!l)
                return null;
            for (t = s = r = a = 0,
            i = l - 1; t < l; i = t++)
                e = u[t],
                n = u[i],
                o = e.y * n.x - n.y * e.x,
                r += (e.x + n.x) * o,
                a += (e.y + n.y) * o,
                s += 3 * o;
            return h = s === 0 ? u[0] : [r / s, a / s],
            this._map.layerPointToLatLng(h);
        },
        _convertLatLngs(t) {
            const i = Oe.prototype._convertLatLngs.call(this, t);
            const e = i.length;
            return e >= 2 && i[0]instanceof D && i[0].equals(i[e - 1]) && i.pop(),
            i;
        },
        _setLatLngs(t) {
            Oe.prototype._setLatLngs.call(this, t),
            pe(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape() {
            return pe(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints() {
            var t = this._renderer._bounds;
            const i = this.options.weight;
            const e = new k(i,i);
            var t = new I(t.min.subtract(e),t.max.add(e));
            if (this._parts = [],
            this._pxBounds && this._pxBounds.intersects(t))
                if (this.options.noClip)
                    this._parts = this._rings;
                else
                    for (var n, o = 0, s = this._rings.length; o < s; o++)
                        (n = ge(this._rings[o], t, !0)).length && this._parts.push(n);
        },
        _updatePath() {
            this._renderer._updatePoly(this, !0);
        },
        _containsPoint(t) {
            let i;
            let e;
            let n;
            let o;
            let s;
            let r;
            let a;
            let h;
            let u = !1;
            if (!this._pxBounds || !this._pxBounds.contains(t))
                return !1;
            for (o = 0,
            a = this._parts.length; o < a; o++)
                for (s = 0,
                r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++)
                    e = i[s],
                    n = i[r],
                    e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u);
            return u || Oe.prototype._containsPoint.call(this, t, !0);
        },
    });
    const Ne = Ce.extend({
        initialize(t, i) {
            c(this, i),
            this._layers = {},
            t && this.addData(t);
        },
        addData(t) {
            let i;
            let e;
            let n;
            const o = g(t) ? t : t.features;
            if (o) {
                for (i = 0,
                e = o.length; i < e; i++)
                    ((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                return this;
            }
            const s = this.options;
            if (s.filter && !s.filter(t))
                return this;
            const r = De(t, s);
            return r ? (r.feature = qe(t),
            r.defaultOptions = r.options,
            this.resetStyle(r),
            s.onEachFeature && s.onEachFeature(t, r),
            this.addLayer(r)) : this;
        },
        resetStyle(t) {
            return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = h({}, t.defaultOptions),
            this._setLayerStyle(t, this.options.style),
            this);
        },
        setStyle(i) {
            return this.eachLayer(function(t) {
                this._setLayerStyle(t, i);
            }, this);
        },
        _setLayerStyle(t, i) {
            t.setStyle && (typeof i === 'function' && (i = i(t.feature)),
            t.setStyle(i));
        },
    });
    function De(t, i) {
        let e;
        let n;
        let o;
        let s;
        const r = t.type === 'Feature' ? t.geometry : t;
        const a = r ? r.coordinates : null;
        const h = [];
        const u = i && i.pointToLayer;
        const l = i && i.coordsToLatLng || We;
        if (!a && !r)
            return null;
        switch (r.type) {
        case 'Point':
            return je(u, t, e = l(a), i);
        case 'MultiPoint':
            for (o = 0,
            s = a.length; o < s; o++)
                e = l(a[o]),
                h.push(je(u, t, e, i));
            return new Ce(h);
        case 'LineString':
        case 'MultiLineString':
            return n = He(a, r.type === 'LineString' ? 0 : 1, l),
            new Oe(n,i);
        case 'Polygon':
        case 'MultiPolygon':
            return n = He(a, r.type === 'Polygon' ? 1 : 2, l),
            new Re(n,i);
        case 'GeometryCollection':
            for (o = 0,
            s = r.geometries.length; o < s; o++) {
                const c = De({
                    geometry: r.geometries[o],
                    type: 'Feature',
                    properties: t.properties
                }, i);
                c && h.push(c);
            }
            return new Ce(h);
        default:
            throw new Error('Invalid GeoJSON object.');
        }
    }
    function je(t, i, e, n) {
        return t ? t(i, e) : new ke(e,n && n.markersInheritOptions && n);
    }
    function We(t) {
        return new D(t[1],t[0],t[2]);
    }
    function He(t, i, e) {
        for (var n, o = [], s = 0, r = t.length; s < r; s++)
            n = i ? He(t[s], i - 1, e) : (e || We)(t[s]),
            o.push(n);
        return o;
    }
    function Fe(t, i) {
        return i = typeof i === 'number' ? i : 6,
        void 0 !== t.alt ? [r(t.lng, i), r(t.lat, i), r(t.alt, i)] : [r(t.lng, i), r(t.lat, i)];
    }
    function Ue(t, i, e, n) {
        for (var o = [], s = 0, r = t.length; s < r; s++)
            o.push(i ? Ue(t[s], i - 1, e, n) : Fe(t[s], n));
        return !i && e && o.push(o[0]),
        o;
    }
    function Ve(t, i) {
        return t.feature ? h({}, t.feature, {
            geometry: i
        }) : qe(i);
    }
    function qe(t) {
        return t.type === 'Feature' || t.type === 'FeatureCollection' ? t : {
            type: 'Feature',
            properties: {},
            geometry: t
        };
    }
    const Ge = {
        toGeoJSON(t) {
            return Ve(this, {
                type: 'Point',
                coordinates: Fe(this.getLatLng(), t)
            });
        }
    };
    function Ke(t, i) {
        return new Ne(t,i);
    }
    ke.include(Ge),
    Ie.include(Ge),
    Ae.include(Ge),
    Oe.include({
        toGeoJSON(t) {
            const i = !pe(this._latlngs);
            return Ve(this, {
                type: `${i ? 'Multi' : ''}LineString`,
                coordinates: Ue(this._latlngs, i ? 1 : 0, !1, t)
            });
        }
    }),
    Re.include({
        toGeoJSON(t) {
            const i = !pe(this._latlngs);
            const e = i && !pe(this._latlngs[0]);
            let n = Ue(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
            return i || (n = [n]),
            Ve(this, {
                type: `${e ? 'Multi' : ''}Polygon`,
                coordinates: n
            });
        }
    }),
    ze.include({
        toMultiPoint(i) {
            const e = [];
            return this.eachLayer((t)=>{
                e.push(t.toGeoJSON(i).geometry.coordinates);
            }
            ),
            Ve(this, {
                type: 'MultiPoint',
                coordinates: e
            });
        },
        toGeoJSON(n) {
            const t = this.feature && this.feature.geometry && this.feature.geometry.type;
            if (t === 'MultiPoint')
                return this.toMultiPoint(n);
            const o = t === 'GeometryCollection';
            const s = [];
            return this.eachLayer((t)=>{
                let i;
                let e;
                t.toGeoJSON && (i = t.toGeoJSON(n),
                o ? s.push(i.geometry) : (e = qe(i)).type === 'FeatureCollection' ? s.push.apply(s, e.features) : s.push(e));
            }
            ),
            o ? Ve(this, {
                geometries: s,
                type: 'GeometryCollection'
            }) : {
                type: 'FeatureCollection',
                features: s
            };
        }
    });
    const Ye = Ke;
    const Xe = Me.extend({
        options: {
            opacity: 1,
            alt: '',
            interactive: !1,
            crossOrigin: !1,
            errorOverlayUrl: '',
            zIndex: 1,
            className: '',
        },
        initialize(t, i, e) {
            this._url = t,
            this._bounds = N(i),
            c(this, e);
        },
        onAdd() {
            this._image || (this._initImage(),
            this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive && (ci(this._image, 'leaflet-interactive'),
            this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset();
        },
        onRemove() {
            ri(this._image),
            this.options.interactive && this.removeInteractiveTarget(this._image);
        },
        setOpacity(t) {
            return this.options.opacity = t,
            this._image && this._updateOpacity(),
            this;
        },
        setStyle(t) {
            return t.opacity && this.setOpacity(t.opacity),
            this;
        },
        bringToFront() {
            return this._map && hi(this._image),
            this;
        },
        bringToBack() {
            return this._map && ui(this._image),
            this;
        },
        setUrl(t) {
            return this._url = t,
            this._image && (this._image.src = t),
            this;
        },
        setBounds(t) {
            return this._bounds = N(t),
            this._map && this._reset(),
            this;
        },
        getEvents() {
            const t = {
                zoom: this._reset,
                viewreset: this._reset
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom),
            t;
        },
        setZIndex(t) {
            return this.options.zIndex = t,
            this._updateZIndex(),
            this;
        },
        getBounds() {
            return this._bounds;
        },
        getElement() {
            return this._image;
        },
        _initImage() {
            const t = this._url.tagName === 'IMG';
            const i = this._image = t ? this._url : si('img');
            ci(i, 'leaflet-image-layer'),
            this._zoomAnimated && ci(i, 'leaflet-zoom-animated'),
            this.options.className && ci(i, this.options.className),
            i.onselectstart = a,
            i.onmousemove = a,
            i.onload = p(this.fire, this, 'load'),
            i.onerror = p(this._overlayOnError, this, 'error'),
            !this.options.crossOrigin && this.options.crossOrigin !== '' || (i.crossOrigin = !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            t ? this._url = i.src : (i.src = this._url,
            i.alt = this.options.alt);
        },
        _animateZoom(t) {
            const i = this._map.getZoomScale(t.zoom);
            const e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
            gi(this._image, e, i);
        },
        _reset() {
            const t = this._image;
            const i = new I(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast()));
            const e = i.getSize();
            vi(t, i.min),
            t.style.width = `${e.x}px`,
            t.style.height = `${e.y}px`;
        },
        _updateOpacity() {
            mi(this._image, this.options.opacity);
        },
        _updateZIndex() {
            this._image && void 0 !== this.options.zIndex && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError() {
            this.fire('error');
            const t = this.options.errorOverlayUrl;
            t && this._url !== t && (this._url = t,
            this._image.src = t);
        },
    });
    const Je = Xe.extend({
        options: {
            autoplay: !0,
            loop: !0,
            keepAspectRatio: !0,
            muted: !1,
        },
        _initImage() {
            const t = this._url.tagName === 'VIDEO';
            const i = this._image = t ? this._url : si('video');
            if (ci(i, 'leaflet-image-layer'),
            this._zoomAnimated && ci(i, 'leaflet-zoom-animated'),
            this.options.className && ci(i, this.options.className),
            i.onselectstart = a,
            i.onmousemove = a,
            i.onloadeddata = p(this.fire, this, 'load'),
            t) {
                for (var e = i.getElementsByTagName('source'), n = [], o = 0; o < e.length; o++)
                    n.push(e[o].src);
                this._url = e.length > 0 ? n : [i.src];
            } else {
                g(this._url) || (this._url = [this._url]),
                !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(i.style, 'objectFit') && (i.style.objectFit = 'fill'),
                i.autoplay = !!this.options.autoplay,
                i.loop = !!this.options.loop,
                i.muted = !!this.options.muted;
                for (let s = 0; s < this._url.length; s++) {
                    const r = si('source');
                    r.src = this._url[s],
                    i.appendChild(r);
                }
            }
        },
    });
    const $e = Xe.extend({
        _initImage() {
            const t = this._image = this._url;
            ci(t, 'leaflet-image-layer'),
            this._zoomAnimated && ci(t, 'leaflet-zoom-animated'),
            this.options.className && ci(t, this.options.className),
            t.onselectstart = a,
            t.onmousemove = a;
        }
    });
    const Qe = Me.extend({
        options: {
            offset: [0, 7],
            className: '',
            pane: 'popupPane'
        },
        initialize(t, i) {
            c(this, t),
            this._source = i;
        },
        onAdd(t) {
            this._zoomAnimated = t._zoomAnimated,
            this._container || this._initLayout(),
            t._fadeAnimated && mi(this._container, 0),
            clearTimeout(this._removeTimeout),
            this.getPane().appendChild(this._container),
            this.update(),
            t._fadeAnimated && mi(this._container, 1),
            this.bringToFront();
        },
        onRemove(t) {
            t._fadeAnimated ? (mi(this._container, 0),
            this._removeTimeout = setTimeout(p(ri, void 0, this._container), 200)) : ri(this._container);
        },
        getLatLng() {
            return this._latlng;
        },
        setLatLng(t) {
            return this._latlng = j(t),
            this._map && (this._updatePosition(),
            this._adjustPan()),
            this;
        },
        getContent() {
            return this._content;
        },
        setContent(t) {
            return this._content = t,
            this.update(),
            this;
        },
        getElement() {
            return this._container;
        },
        update() {
            this._map && (this._container.style.visibility = 'hidden',
            this._updateContent(),
            this._updateLayout(),
            this._updatePosition(),
            this._container.style.visibility = '',
            this._adjustPan());
        },
        getEvents() {
            const t = {
                zoom: this._updatePosition,
                viewreset: this._updatePosition
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom),
            t;
        },
        isOpen() {
            return !!this._map && this._map.hasLayer(this);
        },
        bringToFront() {
            return this._map && hi(this._container),
            this;
        },
        bringToBack() {
            return this._map && ui(this._container),
            this;
        },
        _prepareOpen(t, i, e) {
            if (i instanceof Me || (e = i,
            i = t),
            i instanceof Ce)
                for (const n in t._layers) {
                    i = t._layers[n];
                    break;
                }
            if (!e)
                if (i.getCenter)
                    e = i.getCenter();
                else {
                    if (!i.getLatLng)
                        throw new Error('Unable to get source layer LatLng.');
                    e = i.getLatLng();
                }
            return this._source = i,
            this.update(),
            e;
        },
        _updateContent() {
            if (this._content) {
                const t = this._contentNode;
                const i = typeof this._content === 'function' ? this._content(this._source || this) : this._content;
                if (typeof i === 'string')
                    t.innerHTML = i;
                else {
                    for (; t.hasChildNodes(); )
                        t.removeChild(t.firstChild);
                    t.appendChild(i);
                }
                this.fire('contentupdate');
            }
        },
        _updatePosition() {
            let t;
            let i;
            let e;
            let n;
            let o;
            this._map && (t = this._map.latLngToLayerPoint(this._latlng),
            i = A(this.options.offset),
            e = this._getAnchor(),
            this._zoomAnimated ? vi(this._container, t.add(e)) : i = i.add(t).add(e),
            n = this._containerBottom = -i.y,
            o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x,
            this._container.style.bottom = `${n}px`,
            this._container.style.left = `${o}px`);
        },
        _getAnchor() {
            return [0, 0];
        },
    });
    const tn = Qe.extend({
        options: {
            maxWidth: 300,
            minWidth: 50,
            maxHeight: null,
            autoPan: !0,
            autoPanPaddingTopLeft: null,
            autoPanPaddingBottomRight: null,
            autoPanPadding: [5, 5],
            keepInView: !1,
            closeButton: !0,
            autoClose: !0,
            closeOnEscapeKey: !0,
            className: '',
        },
        openOn(t) {
            return t.openPopup(this),
            this;
        },
        onAdd(t) {
            Qe.prototype.onAdd.call(this, t),
            t.fire('popupopen', {
                popup: this
            }),
            this._source && (this._source.fire('popupopen', {
                popup: this
            }, !0),
            this._source instanceof Be || this._source.on('preclick', Ai));
        },
        onRemove(t) {
            Qe.prototype.onRemove.call(this, t),
            t.fire('popupclose', {
                popup: this
            }),
            this._source && (this._source.fire('popupclose', {
                popup: this
            }, !0),
            this._source instanceof Be || this._source.off('preclick', Ai));
        },
        getEvents() {
            const t = Qe.prototype.getEvents.call(this);
            return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close),
            this.options.keepInView && (t.moveend = this._adjustPan),
            t;
        },
        _close() {
            this._map && this._map.closePopup(this);
        },
        _initLayout() {
            let t;
            const i = 'leaflet-popup';
            const e = this._container = si('div', `${i} ${this.options.className || ''} leaflet-zoom-animated`);
            const n = this._wrapper = si('div', `${i}-content-wrapper`, e);
            this._contentNode = si('div', `${i}-content`, n),
            Oi(e),
            Ii(this._contentNode),
            zi(e, 'contextmenu', Ai),
            this._tipContainer = si('div', `${i}-tip-container`, e),
            this._tip = si('div', `${i}-tip`, this._tipContainer),
            this.options.closeButton && ((t = this._closeButton = si('a', `${i}-close-button`, e)).href = '#close',
            t.innerHTML = '&#215;',
            zi(t, 'click', this._onCloseButtonClick, this));
        },
        _updateLayout() {
            const t = this._contentNode;
            const i = t.style;
            i.width = '',
            i.whiteSpace = 'nowrap';
            var e = t.offsetWidth;
            var e = Math.min(e, this.options.maxWidth);
            e = Math.max(e, this.options.minWidth),
            i.width = `${e + 1}px`,
            i.whiteSpace = '',
            i.height = '';
            const n = t.offsetHeight;
            const o = this.options.maxHeight;
            const s = 'leaflet-popup-scrolled';
            o && o < n ? (i.height = `${o}px`,
            ci(t, s)) : _i(t, s),
            this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom(t) {
            const i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            const e = this._getAnchor();
            vi(this._container, i.add(e));
        },
        _adjustPan() {
            let t;
            let i;
            let e;
            let n;
            let o;
            let s;
            let r;
            let a;
            let h;
            let u;
            let l;
            let c;
            this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(),
            t = this._map,
            i = parseInt(oi(this._container, 'marginBottom'), 10) || 0,
            e = this._container.offsetHeight + i,
            n = this._containerWidth,
            (o = new k(this._containerLeft,-e - this._containerBottom))._add(yi(this._container)),
            s = t.layerPointToContainerPoint(o),
            r = A(this.options.autoPanPadding),
            a = A(this.options.autoPanPaddingTopLeft || r),
            h = A(this.options.autoPanPaddingBottomRight || r),
            u = t.getSize(),
            c = l = 0,
            s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x),
            s.x - l - a.x < 0 && (l = s.x - a.x),
            s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y),
            s.y - c - a.y < 0 && (c = s.y - a.y),
            (l || c) && t.fire('autopanstart').panBy([l, c]));
        },
        _onCloseButtonClick(t) {
            this._close(),
            Ni(t);
        },
        _getAnchor() {
            return A(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        },
    });
    Ki.mergeOptions({
        closePopupOnClick: !0
    }),
    Ki.include({
        openPopup(t, i, e) {
            return t instanceof tn || (t = new tn(e).setContent(t)),
            i && t.setLatLng(i),
            this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(),
            this._popup = t,
            this.addLayer(t));
        },
        closePopup(t) {
            return t && t !== this._popup || (t = this._popup,
            this._popup = null),
            t && this.removeLayer(t),
            this;
        }
    }),
    Me.include({
        bindPopup(t, i) {
            return t instanceof tn ? (c(t, i),
            (this._popup = t)._source = this) : (this._popup && !i || (this._popup = new tn(i,this)),
            this._popup.setContent(t)),
            this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
            }),
            this._popupHandlersAdded = !0),
            this;
        },
        unbindPopup() {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
            }),
            this._popupHandlersAdded = !1,
            this._popup = null),
            this;
        },
        openPopup(t, i) {
            return this._popup && this._map && (i = this._popup._prepareOpen(this, t, i),
            this._map.openPopup(this._popup, i)),
            this;
        },
        closePopup() {
            return this._popup && this._popup._close(),
            this;
        },
        togglePopup(t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)),
            this;
        },
        isPopupOpen() {
            return !!this._popup && this._popup.isOpen();
        },
        setPopupContent(t) {
            return this._popup && this._popup.setContent(t),
            this;
        },
        getPopup() {
            return this._popup;
        },
        _openPopup(t) {
            const i = t.layer || t.target;
            this._popup && this._map && (Ni(t),
            i instanceof Be ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng));
        },
        _movePopup(t) {
            this._popup.setLatLng(t.latlng);
        },
        _onKeyPress(t) {
            t.originalEvent.keyCode === 13 && this._openPopup(t);
        },
    });
    const en = Qe.extend({
        options: {
            pane: 'tooltipPane',
            offset: [0, 0],
            direction: 'auto',
            permanent: !1,
            sticky: !1,
            interactive: !1,
            opacity: 0.9,
        },
        onAdd(t) {
            Qe.prototype.onAdd.call(this, t),
            this.setOpacity(this.options.opacity),
            t.fire('tooltipopen', {
                tooltip: this
            }),
            this._source && this._source.fire('tooltipopen', {
                tooltip: this
            }, !0);
        },
        onRemove(t) {
            Qe.prototype.onRemove.call(this, t),
            t.fire('tooltipclose', {
                tooltip: this
            }),
            this._source && this._source.fire('tooltipclose', {
                tooltip: this
            }, !0);
        },
        getEvents() {
            const t = Qe.prototype.getEvents.call(this);
            return bt && !this.options.permanent && (t.preclick = this._close),
            t;
        },
        _close() {
            this._map && this._map.closeTooltip(this);
        },
        _initLayout() {
            const t = `leaflet-tooltip ${this.options.className || ''} leaflet-zoom-${this._zoomAnimated ? 'animated' : 'hide'}`;
            this._contentNode = this._container = si('div', t);
        },
        _updateLayout() {},
        _adjustPan() {},
        _setPosition(t) {
            let i;
            const e = this._map;
            const n = this._container;
            const o = e.latLngToContainerPoint(e.getCenter());
            const s = e.layerPointToContainerPoint(t);
            let r = this.options.direction;
            const a = n.offsetWidth;
            const h = n.offsetHeight;
            const u = A(this.options.offset);
            const l = this._getAnchor();
            const c = r === 'top' ? (i = a / 2,
            h) : r === 'bottom' ? (i = a / 2,
            0) : (i = r === 'center' ? a / 2 : r === 'right' ? 0 : r === 'left' ? a : s.x < o.x ? (r = 'right',
            0) : (r = 'left',
            a + 2 * (u.x + l.x)),
            h / 2);
            t = t.subtract(A(i, c, !0)).add(u).add(l),
            _i(n, 'leaflet-tooltip-right'),
            _i(n, 'leaflet-tooltip-left'),
            _i(n, 'leaflet-tooltip-top'),
            _i(n, 'leaflet-tooltip-bottom'),
            ci(n, `leaflet-tooltip-${r}`),
            vi(n, t);
        },
        _updatePosition() {
            const t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t);
        },
        setOpacity(t) {
            this.options.opacity = t,
            this._container && mi(this._container, t);
        },
        _animateZoom(t) {
            const i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(i);
        },
        _getAnchor() {
            return A(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        },
    });
    Ki.include({
        openTooltip(t, i, e) {
            return t instanceof en || (t = new en(e).setContent(t)),
            i && t.setLatLng(i),
            this.hasLayer(t) ? this : this.addLayer(t);
        },
        closeTooltip(t) {
            return t && this.removeLayer(t),
            this;
        }
    }),
    Me.include({
        bindTooltip(t, i) {
            return t instanceof en ? (c(t, i),
            (this._tooltip = t)._source = this) : (this._tooltip && !i || (this._tooltip = new en(i,this)),
            this._tooltip.setContent(t)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
            this;
        },
        unbindTooltip() {
            return this._tooltip && (this._initTooltipInteractions(!0),
            this.closeTooltip(),
            this._tooltip = null),
            this;
        },
        _initTooltipInteractions(t) {
            let i;
            let e;
            !t && this._tooltipHandlersAdded || (i = t ? 'off' : 'on',
            e = {
                remove: this.closeTooltip,
                move: this._moveTooltip
            },
            this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip,
            e.mouseout = this.closeTooltip,
            this._tooltip.options.sticky && (e.mousemove = this._moveTooltip),
            bt && (e.click = this._openTooltip)),
            this[i](e),
            this._tooltipHandlersAdded = !t);
        },
        openTooltip(t, i) {
            return this._tooltip && this._map && (i = this._tooltip._prepareOpen(this, t, i),
            this._map.openTooltip(this._tooltip, i),
            this._tooltip.options.interactive && this._tooltip._container && (ci(this._tooltip._container, 'leaflet-clickable'),
            this.addInteractiveTarget(this._tooltip._container))),
            this;
        },
        closeTooltip() {
            return this._tooltip && (this._tooltip._close(),
            this._tooltip.options.interactive && this._tooltip._container && (_i(this._tooltip._container, 'leaflet-clickable'),
            this.removeInteractiveTarget(this._tooltip._container))),
            this;
        },
        toggleTooltip(t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)),
            this;
        },
        isTooltipOpen() {
            return this._tooltip.isOpen();
        },
        setTooltipContent(t) {
            return this._tooltip && this._tooltip.setContent(t),
            this;
        },
        getTooltip() {
            return this._tooltip;
        },
        _openTooltip(t) {
            const i = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0);
        },
        _moveTooltip(t) {
            let i;
            let e;
            let n = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent),
            e = this._map.containerPointToLayerPoint(i),
            n = this._map.layerPointToLatLng(e)),
            this._tooltip.setLatLng(n);
        },
    });
    const nn = Se.extend({
        options: {
            iconSize: [12, 12],
            html: !1,
            bgPos: null,
            className: 'leaflet-div-icon',
        },
        createIcon(t) {
            let i;
            const e = t && t.tagName === 'DIV' ? t : document.createElement('div');
            const n = this.options;
            return n.html instanceof Element ? (ai(e),
            e.appendChild(n.html)) : e.innerHTML = !1 !== n.html ? n.html : '',
            n.bgPos && (i = A(n.bgPos),
            e.style.backgroundPosition = `${-i.x}px ${-i.y}px`),
            this._setIconStyles(e, 'icon'),
            e;
        },
        createShadow() {
            return null;
        },
    });
    Se.Default = Ze;
    const on = Me.extend({
        options: {
            tileSize: 256,
            opacity: 1,
            updateWhenIdle: yt,
            updateWhenZooming: !0,
            updateInterval: 200,
            zIndex: 1,
            bounds: null,
            minZoom: 0,
            maxZoom: void 0,
            maxNativeZoom: void 0,
            minNativeZoom: void 0,
            noWrap: !1,
            pane: 'tilePane',
            className: '',
            keepBuffer: 2,
        },
        initialize(t) {
            c(this, t);
        },
        onAdd() {
            this._initContainer(),
            this._levels = {},
            this._tiles = {},
            this._resetView(),
            this._update();
        },
        beforeAdd(t) {
            t._addZoomLimit(this);
        },
        onRemove(t) {
            this._removeAllTiles(),
            ri(this._container),
            t._removeZoomLimit(this),
            this._container = null,
            this._tileZoom = void 0;
        },
        bringToFront() {
            return this._map && (hi(this._container),
            this._setAutoZIndex(Math.max)),
            this;
        },
        bringToBack() {
            return this._map && (ui(this._container),
            this._setAutoZIndex(Math.min)),
            this;
        },
        getContainer() {
            return this._container;
        },
        setOpacity(t) {
            return this.options.opacity = t,
            this._updateOpacity(),
            this;
        },
        setZIndex(t) {
            return this.options.zIndex = t,
            this._updateZIndex(),
            this;
        },
        isLoading() {
            return this._loading;
        },
        redraw() {
            return this._map && (this._removeAllTiles(),
            this._update()),
            this;
        },
        getEvents() {
            const t = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd,
            };
            return this.options.updateWhenIdle || (this._onMove || (this._onMove = n(this._onMoveEnd, this.options.updateInterval, this)),
            t.move = this._onMove),
            this._zoomAnimated && (t.zoomanim = this._animateZoom),
            t;
        },
        createTile() {
            return document.createElement('div');
        },
        getTileSize() {
            const t = this.options.tileSize;
            return t instanceof k ? t : new k(t,t);
        },
        _updateZIndex() {
            this._container && void 0 !== this.options.zIndex && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
        },
        _setAutoZIndex(t) {
            for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++)
                i = e[o].style.zIndex,
                e[o] !== this._container && i && (n = t(n, +i));
            isFinite(n) && (this.options.zIndex = n + t(-1, 1),
            this._updateZIndex());
        },
        _updateOpacity() {
            if (this._map && !it) {
                mi(this._container, this.options.opacity);
                const t = +new Date();
                let i = !1;
                let e = !1;
                for (const n in this._tiles) {
                    var o;
                    const s = this._tiles[n];
                    s.current && s.loaded && (o = Math.min(1, (t - s.loaded) / 200),
                    mi(s.el, o),
                    o < 1 ? i = !0 : (s.active ? e = !0 : this._onOpaqueTile(s),
                    s.active = !0));
                }
                e && !this._noPrune && this._pruneTiles(),
                i && (z(this._fadeFrame),
                this._fadeFrame = M(this._updateOpacity, this));
            }
        },
        _onOpaqueTile: a,
        _initContainer() {
            this._container || (this._container = si('div', `leaflet-layer ${this.options.className || ''}`),
            this._updateZIndex(),
            this.options.opacity < 1 && this._updateOpacity(),
            this.getPane().appendChild(this._container));
        },
        _updateLevels() {
            const t = this._tileZoom;
            const i = this.options.maxZoom;
            if (void 0 !== t) {
                for (let e in this._levels)
                    e = Number(e),
                    this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e),
                    this._onUpdateLevel(e)) : (ri(this._levels[e].el),
                    this._removeTilesAtZoom(e),
                    this._onRemoveLevel(e),
                    delete this._levels[e]);
                let n = this._levels[t];
                const o = this._map;
                return n || ((n = this._levels[t] = {}).el = si('div', 'leaflet-tile-container leaflet-zoom-animated', this._container),
                n.el.style.zIndex = i,
                n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(),
                n.zoom = t,
                this._setZoomTransform(n, o.getCenter(), o.getZoom()),
                a(n.el.offsetWidth),
                this._onCreateLevel(n)),
                this._level = n;
            }
        },
        _onUpdateLevel: a,
        _onRemoveLevel: a,
        _onCreateLevel: a,
        _pruneTiles() {
            if (this._map) {
                let t;
                let i;
                let e;
                const n = this._map.getZoom();
                if (n > this.options.maxZoom || n < this.options.minZoom)
                    this._removeAllTiles();
                else {
                    for (t in this._tiles)
                        (e = this._tiles[t]).retain = e.current;
                    for (t in this._tiles) {
                        (e = this._tiles[t]).current && !e.active && (i = e.coords,
                        this._retainParent(i.x, i.y, i.z, i.z - 5) || this._retainChildren(i.x, i.y, i.z, i.z + 2));
                    }
                    for (t in this._tiles)
                        this._tiles[t].retain || this._removeTile(t);
                }
            }
        },
        _removeTilesAtZoom(t) {
            for (const i in this._tiles)
                this._tiles[i].coords.z === t && this._removeTile(i);
        },
        _removeAllTiles() {
            for (const t in this._tiles)
                this._removeTile(t);
        },
        _invalidateAll() {
            for (const t in this._levels)
                ri(this._levels[t].el),
                this._onRemoveLevel(Number(t)),
                delete this._levels[t];
            this._removeAllTiles(),
            this._tileZoom = void 0;
        },
        _retainParent(t, i, e, n) {
            const o = Math.floor(t / 2);
            const s = Math.floor(i / 2);
            const r = e - 1;
            const a = new k(+o,+s);
            a.z = +r;
            const h = this._tileCoordsToKey(a);
            const u = this._tiles[h];
            return u && u.active ? u.retain = !0 : (u && u.loaded && (u.retain = !0),
            n < r && this._retainParent(o, s, r, n));
        },
        _retainChildren(t, i, e, n) {
            for (let o = 2 * t; o < 2 * t + 2; o++)
                for (let s = 2 * i; s < 2 * i + 2; s++) {
                    const r = new k(o,s);
                    r.z = e + 1;
                    const a = this._tileCoordsToKey(r);
                    const h = this._tiles[a];
                    h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0),
                    e + 1 < n && this._retainChildren(o, s, e + 1, n));
                }
        },
        _resetView(t) {
            const i = t && (t.pinch || t.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), i, i);
        },
        _animateZoom(t) {
            this._setView(t.center, t.zoom, !0, t.noUpdate);
        },
        _clampZoom(t) {
            const i = this.options;
            return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t;
        },
        _setView(t, i, e, n) {
            var o = Math.round(i);
            var o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o);
            const s = this.options.updateWhenZooming && o !== this._tileZoom;
            n && !s || (this._tileZoom = o,
            this._abortLoading && this._abortLoading(),
            this._updateLevels(),
            this._resetGrid(),
            void 0 !== o && this._update(t),
            e || this._pruneTiles(),
            this._noPrune = !!e),
            this._setZoomTransforms(t, i);
        },
        _setZoomTransforms(t, i) {
            for (const e in this._levels)
                this._setZoomTransform(this._levels[e], t, i);
        },
        _setZoomTransform(t, i, e) {
            const n = this._map.getZoomScale(e, t.zoom);
            const o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
            vt ? gi(t.el, o, n) : vi(t.el, o);
        },
        _resetGrid() {
            const t = this._map;
            const i = t.options.crs;
            const e = this._tileSize = this.getTileSize();
            const n = this._tileZoom;
            const o = this._map.getPixelWorldBounds(this._tileZoom);
            o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
            this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)],
            this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)];
        },
        _onMoveEnd() {
            this._map && !this._map._animatingZoom && this._update();
        },
        _getTiledPixelBounds(t) {
            const i = this._map;
            const e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom();
            const n = i.getZoomScale(e, this._tileZoom);
            const o = i.project(t, this._tileZoom).floor();
            const s = i.getSize().divideBy(2 * n);
            return new I(o.subtract(s),o.add(s));
        },
        _update(t) {
            const i = this._map;
            if (i) {
                const e = this._clampZoom(i.getZoom());
                if (void 0 === t && (t = i.getCenter()),
                void 0 !== this._tileZoom) {
                    const n = this._getTiledPixelBounds(t);
                    const o = this._pxBoundsToTileRange(n);
                    const s = o.getCenter();
                    const r = [];
                    const a = this.options.keepBuffer;
                    const h = new I(o.getBottomLeft().subtract([a, -a]),o.getTopRight().add([a, -a]));
                    if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
                        throw new Error('Attempted to load an infinite number of tiles');
                    for (const u in this._tiles) {
                        const l = this._tiles[u].coords;
                        l.z === this._tileZoom && h.contains(new k(l.x,l.y)) || (this._tiles[u].current = !1);
                    }
                    if (Math.abs(e - this._tileZoom) > 1)
                        this._setView(t, e);
                    else {
                        for (let c = o.min.y; c <= o.max.y; c++)
                            for (var _ = o.min.x; _ <= o.max.x; _++) {
                                var d;
                                const p = new k(_,c);
                                p.z = this._tileZoom,
                                this._isValidTile(p) && ((d = this._tiles[this._tileCoordsToKey(p)]) ? d.current = !0 : r.push(p));
                            }
                        if (r.sort((t,i)=>{
                            return t.distanceTo(s) - i.distanceTo(s);
                        }
                        ),
                        r.length !== 0) {
                            this._loading || (this._loading = !0,
                            this.fire('loading'));
                            for (var m = document.createDocumentFragment(), _ = 0; _ < r.length; _++)
                                this._addTile(r[_], m);
                            this._level.el.appendChild(m);
                        }
                    }
                }
            }
        },
        _isValidTile(t) {
            const i = this._map.options.crs;
            if (!i.infinite) {
                const e = this._globalTileRange;
                if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y))
                    return !1;
            }
            if (!this.options.bounds)
                return !0;
            const n = this._tileCoordsToBounds(t);
            return N(this.options.bounds).overlaps(n);
        },
        _keyToBounds(t) {
            return this._tileCoordsToBounds(this._keyToTileCoords(t));
        },
        _tileCoordsToNwSe(t) {
            const i = this._map;
            const e = this.getTileSize();
            const n = t.scaleBy(e);
            const o = n.add(e);
            return [i.unproject(n, t.z), i.unproject(o, t.z)];
        },
        _tileCoordsToBounds(t) {
            const i = this._tileCoordsToNwSe(t);
            let e = new R(i[0],i[1]);
            return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)),
            e;
        },
        _tileCoordsToKey(t) {
            return `${t.x}:${t.y}:${t.z}`;
        },
        _keyToTileCoords(t) {
            const i = t.split(':');
            const e = new k(+i[0],+i[1]);
            return e.z = +i[2],
            e;
        },
        _removeTile(t) {
            const i = this._tiles[t];
            i && (ri(i.el),
            delete this._tiles[t],
            this.fire('tileunload', {
                tile: i.el,
                coords: this._keyToTileCoords(t)
            }));
        },
        _initTile(t) {
            ci(t, 'leaflet-tile');
            const i = this.getTileSize();
            t.style.width = `${i.x}px`,
            t.style.height = `${i.y}px`,
            t.onselectstart = a,
            t.onmousemove = a,
            it && this.options.opacity < 1 && mi(t, this.options.opacity),
            ot && !st && (t.style.WebkitBackfaceVisibility = 'hidden');
        },
        _addTile(t, i) {
            const e = this._getTilePos(t);
            const n = this._tileCoordsToKey(t);
            const o = this.createTile(this._wrapCoords(t), p(this._tileReady, this, t));
            this._initTile(o),
            this.createTile.length < 2 && M(p(this._tileReady, this, t, null, o)),
            vi(o, e),
            this._tiles[n] = {
                el: o,
                coords: t,
                current: !0
            },
            i.appendChild(o),
            this.fire('tileloadstart', {
                tile: o,
                coords: t
            });
        },
        _tileReady(t, i, e) {
            i && this.fire('tileerror', {
                error: i,
                tile: e,
                coords: t
            });
            const n = this._tileCoordsToKey(t);
            (e = this._tiles[n]) && (e.loaded = +new Date(),
            this._map._fadeAnimated ? (mi(e.el, 0),
            z(this._fadeFrame),
            this._fadeFrame = M(this._updateOpacity, this)) : (e.active = !0,
            this._pruneTiles()),
            i || (ci(e.el, 'leaflet-tile-loaded'),
            this.fire('tileload', {
                tile: e.el,
                coords: t
            })),
            this._noTilesToLoad() && (this._loading = !1,
            this.fire('load'),
            it || !this._map._fadeAnimated ? M(this._pruneTiles, this) : setTimeout(p(this._pruneTiles, this), 250)));
        },
        _getTilePos(t) {
            return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords(t) {
            const i = new k(this._wrapX ? o(t.x, this._wrapX) : t.x,this._wrapY ? o(t.y, this._wrapY) : t.y);
            return i.z = t.z,
            i;
        },
        _pxBoundsToTileRange(t) {
            const i = this.getTileSize();
            return new I(t.min.unscaleBy(i).floor(),t.max.unscaleBy(i).ceil().subtract([1, 1]));
        },
        _noTilesToLoad() {
            for (const t in this._tiles)
                if (!this._tiles[t].loaded)
                    return !1;
            return !0;
        },
    });
    const sn = on.extend({
        options: {
            minZoom: 0,
            maxZoom: 18,
            subdomains: 'abc',
            errorTileUrl: '',
            zoomOffset: 0,
            tms: !1,
            zoomReverse: !1,
            detectRetina: !1,
            crossOrigin: !1,
        },
        initialize(t, i) {
            this._url = t,
            (i = c(this, i)).detectRetina && zt && i.maxZoom > 0 && (i.tileSize = Math.floor(i.tileSize / 2),
            i.zoomReverse ? (i.zoomOffset--,
            i.minZoom++) : (i.zoomOffset++,
            i.maxZoom--),
            i.minZoom = Math.max(0, i.minZoom)),
            typeof i.subdomains === 'string' && (i.subdomains = i.subdomains.split('')),
            ot || this.on('tileunload', this._onTileRemove);
        },
        setUrl(t, i) {
            return this._url === t && void 0 === i && (i = !0),
            this._url = t,
            i || this.redraw(),
            this;
        },
        createTile(t, i) {
            const e = document.createElement('img');
            return zi(e, 'load', p(this._tileOnLoad, this, i, e)),
            zi(e, 'error', p(this._tileOnError, this, i, e)),
            !this.options.crossOrigin && this.options.crossOrigin !== '' || (e.crossOrigin = !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
            e.alt = '',
            e.setAttribute('role', 'presentation'),
            e.src = this.getTileUrl(t),
            e;
        },
        getTileUrl(t) {
            let i;
            const e = {
                r: zt ? '@2x' : '',
                s: this._getSubdomain(t),
                x: t.x,
                y: t.y,
                z: this._getZoomForUrl(),
            };
            return this._map && !this._map.options.crs.infinite && (i = this._globalTileRange.max.y - t.y,
            this.options.tms && (e.y = i),
            e['-y'] = i),
            f(this._url, h(e, this.options));
        },
        _tileOnLoad(t, i) {
            it ? setTimeout(p(t, this, null, i), 0) : t(null, i);
        },
        _tileOnError(t, i, e) {
            const n = this.options.errorTileUrl;
            n && i.getAttribute('src') !== n && (i.src = n),
            t(e, i);
        },
        _onTileRemove(t) {
            t.tile.onload = null;
        },
        _getZoomForUrl() {
            let t = this._tileZoom;
            const i = this.options.maxZoom;
            return this.options.zoomReverse && (t = i - t),
            t + this.options.zoomOffset;
        },
        _getSubdomain(t) {
            const i = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[i];
        },
        _abortLoading() {
            let t;
            let i;
            for (t in this._tiles)
                this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = a,
                i.onerror = a,
                i.complete || (i.src = y,
                ri(i),
                delete this._tiles[t]));
        },
        _removeTile(t) {
            const i = this._tiles[t];
            if (i)
                return at || i.el.setAttribute('src', y),
                on.prototype._removeTile.call(this, t);
        },
        _tileReady(t, i, e) {
            if (this._map && (!e || e.getAttribute('src') !== y))
                return on.prototype._tileReady.call(this, t, i, e);
        },
    });
    function rn(t, i) {
        return new sn(t,i);
    }
    const an = sn.extend({
        defaultWmsParams: {
            service: 'WMS',
            request: 'GetMap',
            layers: '',
            styles: '',
            format: 'image/jpeg',
            transparent: !1,
            version: '1.1.1',
        },
        options: {
            crs: null,
            uppercase: !1
        },
        initialize(t, i) {
            this._url = t;
            const e = h({}, this.defaultWmsParams);
            for (const n in i)
                n in this.options || (e[n] = i[n]);
            const o = (i = c(this, i)).detectRetina && zt ? 2 : 1;
            const s = this.getTileSize();
            e.width = s.x * o,
            e.height = s.y * o,
            this.wmsParams = e;
        },
        onAdd(t) {
            this._crs = this.options.crs || t.options.crs,
            this._wmsVersion = parseFloat(this.wmsParams.version);
            const i = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
            this.wmsParams[i] = this._crs.code,
            sn.prototype.onAdd.call(this, t);
        },
        getTileUrl(t) {
            const i = this._tileCoordsToNwSe(t);
            const e = this._crs;
            const n = O(e.project(i[0]), e.project(i[1]));
            const o = n.min;
            const s = n.max;
            const r = (this._wmsVersion >= 1.3 && this._crs === be ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(',');
            const a = sn.prototype.getTileUrl.call(this, t);
            return a + _(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? '&BBOX=' : '&bbox=') + r;
        },
        setParams(t, i) {
            return h(this.wmsParams, t),
            i || this.redraw(),
            this;
        },
    });
    sn.WMS = an,
    rn.wms = function(t, i) {
        return new an(t,i);
    }
    ;
    const hn = Me.extend({
        options: {
            padding: 0.1,
            tolerance: 0
        },
        initialize(t) {
            c(this, t),
            m(this),
            this._layers = this._layers || {};
        },
        onAdd() {
            this._container || (this._initContainer(),
            this._zoomAnimated && ci(this._container, 'leaflet-zoom-animated')),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on('update', this._updatePaths, this);
        },
        onRemove() {
            this.off('update', this._updatePaths, this),
            this._destroyContainer();
        },
        getEvents() {
            const t = {
                viewreset: this._reset,
                zoom: this._onZoom,
                moveend: this._update,
                zoomend: this._onZoomEnd,
            };
            return this._zoomAnimated && (t.zoomanim = this._onAnimZoom),
            t;
        },
        _onAnimZoom(t) {
            this._updateTransform(t.center, t.zoom);
        },
        _onZoom() {
            this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform(t, i) {
            const e = this._map.getZoomScale(i, this._zoom);
            const n = yi(this._container);
            const o = this._map.getSize().multiplyBy(0.5 + this.options.padding);
            const s = this._map.project(this._center, i);
            const r = this._map.project(t, i).subtract(s);
            const a = o.multiplyBy(-e).add(n).add(o).subtract(r);
            vt ? gi(this._container, a, e) : vi(this._container, a);
        },
        _reset() {
            for (const t in this._update(),
            this._updateTransform(this._center, this._zoom),
            this._layers)
                this._layers[t]._reset();
        },
        _onZoomEnd() {
            for (const t in this._layers)
                this._layers[t]._project();
        },
        _updatePaths() {
            for (const t in this._layers)
                this._layers[t]._update();
        },
        _update() {
            const t = this.options.padding;
            const i = this._map.getSize();
            const e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
            this._bounds = new I(e,e.add(i.multiplyBy(1 + 2 * t)).round()),
            this._center = this._map.getCenter(),
            this._zoom = this._map.getZoom();
        },
    });
    const un = hn.extend({
        getEvents() {
            const t = hn.prototype.getEvents.call(this);
            return t.viewprereset = this._onViewPreReset,
            t;
        },
        _onViewPreReset() {
            this._postponeUpdatePaths = !0;
        },
        onAdd() {
            hn.prototype.onAdd.call(this),
            this._draw();
        },
        _initContainer() {
            const t = this._container = document.createElement('canvas');
            zi(t, 'mousemove', this._onMouseMove, this),
            zi(t, 'click dblclick mousedown mouseup contextmenu', this._onClick, this),
            zi(t, 'mouseout', this._handleMouseOut, this),
            this._ctx = t.getContext('2d');
        },
        _destroyContainer() {
            z(this._redrawRequest),
            delete this._ctx,
            ri(this._container),
            Si(this._container),
            delete this._container;
        },
        _updatePaths() {
            if (!this._postponeUpdatePaths) {
                for (const t in this._redrawBounds = null,
                this._layers)
                    this._layers[t]._update();
                this._redraw();
            }
        },
        _update() {
            let t;
            let i;
            let e;
            let n;
            this._map._animatingZoom && this._bounds || (hn.prototype._update.call(this),
            t = this._bounds,
            i = this._container,
            e = t.getSize(),
            n = zt ? 2 : 1,
            vi(i, t.min),
            i.width = n * e.x,
            i.height = n * e.y,
            i.style.width = `${e.x}px`,
            i.style.height = `${e.y}px`,
            zt && this._ctx.scale(2, 2),
            this._ctx.translate(-t.min.x, -t.min.y),
            this.fire('update'));
        },
        _reset() {
            hn.prototype._reset.call(this),
            this._postponeUpdatePaths && (this._postponeUpdatePaths = !1,
            this._updatePaths());
        },
        _initPath(t) {
            this._updateDashArray(t);
            const i = (this._layers[m(t)] = t)._order = {
                layer: t,
                prev: this._drawLast,
                next: null
            };
            this._drawLast && (this._drawLast.next = i),
            this._drawLast = i,
            this._drawFirst = this._drawFirst || this._drawLast;
        },
        _addPath(t) {
            this._requestRedraw(t);
        },
        _removePath(t) {
            const i = t._order;
            const e = i.next;
            const n = i.prev;
            e ? e.prev = n : this._drawLast = n,
            n ? n.next = e : this._drawFirst = e,
            delete t._order,
            delete this._layers[m(t)],
            this._requestRedraw(t);
        },
        _updatePath(t) {
            this._extendRedrawBounds(t),
            t._project(),
            t._update(),
            this._requestRedraw(t);
        },
        _updateStyle(t) {
            this._updateDashArray(t),
            this._requestRedraw(t);
        },
        _updateDashArray(t) {
            if (typeof t.options.dashArray === 'string') {
                for (var i, e = t.options.dashArray.split(/[, ]+/), n = [], o = 0; o < e.length; o++) {
                    if (i = Number(e[o]),
                    isNaN(i))
                        return;
                    n.push(i);
                }
                t.options._dashArray = n;
            } else
                t.options._dashArray = t.options.dashArray;
        },
        _requestRedraw(t) {
            this._map && (this._extendRedrawBounds(t),
            this._redrawRequest = this._redrawRequest || M(this._redraw, this));
        },
        _extendRedrawBounds(t) {
            let i;
            t._pxBounds && (i = (t.options.weight || 0) + 1,
            this._redrawBounds = this._redrawBounds || new I(),
            this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])),
            this._redrawBounds.extend(t._pxBounds.max.add([i, i])));
        },
        _redraw() {
            this._redrawRequest = null,
            this._redrawBounds && (this._redrawBounds.min._floor(),
            this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            this._redrawBounds = null;
        },
        _clear() {
            let t;
            const i = this._redrawBounds;
            i ? (t = i.getSize(),
            this._ctx.clearRect(i.min.x, i.min.y, t.x, t.y)) : (this._ctx.save(),
            this._ctx.setTransform(1, 0, 0, 1, 0, 0),
            this._ctx.clearRect(0, 0, this._container.width, this._container.height),
            this._ctx.restore());
        },
        _draw() {
            let t;
            let i;
            const e = this._redrawBounds;
            this._ctx.save(),
            e && (i = e.getSize(),
            this._ctx.beginPath(),
            this._ctx.rect(e.min.x, e.min.y, i.x, i.y),
            this._ctx.clip()),
            this._drawing = !0;
            for (let n = this._drawFirst; n; n = n.next)
                t = n.layer,
                (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
            this._drawing = !1,
            this._ctx.restore();
        },
        _updatePoly(t, i) {
            if (this._drawing) {
                let e;
                let n;
                let o;
                let s;
                const r = t._parts;
                const a = r.length;
                const h = this._ctx;
                if (a) {
                    for (h.beginPath(),
                    e = 0; e < a; e++) {
                        for (n = 0,
                        o = r[e].length; n < o; n++)
                            s = r[e][n],
                            h[n ? 'lineTo' : 'moveTo'](s.x, s.y);
                        i && h.closePath();
                    }
                    this._fillStroke(h, t);
                }
            }
        },
        _updateCircle(t) {
            let i;
            let e;
            let n;
            let o;
            this._drawing && !t._empty() && (i = t._point,
            e = this._ctx,
            n = Math.max(Math.round(t._radius), 1),
            (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) != 1 && (e.save(),
            e.scale(1, o)),
            e.beginPath(),
            e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1),
            o != 1 && e.restore(),
            this._fillStroke(e, t));
        },
        _fillStroke(t, i) {
            const e = i.options;
            e.fill && (t.globalAlpha = e.fillOpacity,
            t.fillStyle = e.fillColor || e.color,
            t.fill(e.fillRule || 'evenodd')),
            e.stroke && e.weight !== 0 && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []),
            t.globalAlpha = e.opacity,
            t.lineWidth = e.weight,
            t.strokeStyle = e.color,
            t.lineCap = e.lineCap,
            t.lineJoin = e.lineJoin,
            t.stroke());
        },
        _onClick(t) {
            for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)
                (i = o.layer).options.interactive && i._containsPoint(n) && ((t.type === 'click' || t.type !== 'preclick') && this._map._draggableMoved(i) || (e = i));
            e && (Fi(t),
            this._fireEvent([e], t));
        },
        _onMouseMove(t) {
            let i;
            !this._map || this._map.dragging.moving() || this._map._animatingZoom || (i = this._map.mouseEventToLayerPoint(t),
            this._handleMouseHover(t, i));
        },
        _handleMouseOut(t) {
            const i = this._hoveredLayer;
            i && (_i(this._container, 'leaflet-interactive'),
            this._fireEvent([i], t, 'mouseout'),
            this._hoveredLayer = null,
            this._mouseHoverThrottled = !1);
        },
        _handleMouseHover(t, i) {
            if (!this._mouseHoverThrottled) {
                for (var e, n, o = this._drawFirst; o; o = o.next)
                    (e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
                n !== this._hoveredLayer && (this._handleMouseOut(t),
                n && (ci(this._container, 'leaflet-interactive'),
                this._fireEvent([n], t, 'mouseover'),
                this._hoveredLayer = n)),
                this._hoveredLayer && this._fireEvent([this._hoveredLayer], t),
                this._mouseHoverThrottled = !0,
                setTimeout(p(function() {
                    this._mouseHoverThrottled = !1;
                }, this), 32);
            }
        },
        _fireEvent(t, i, e) {
            this._map._fireDOMEvent(i, e || i.type, t);
        },
        _bringToFront(t) {
            let i;
            let e;
            const n = t._order;
            n && (i = n.next,
            e = n.prev,
            i && ((i.prev = e) ? e.next = i : i && (this._drawFirst = i),
            n.prev = this._drawLast,
            (this._drawLast.next = n).next = null,
            this._drawLast = n,
            this._requestRedraw(t)));
        },
        _bringToBack(t) {
            let i;
            let e;
            const n = t._order;
            n && (i = n.next,
            (e = n.prev) && ((e.next = i) ? i.prev = e : e && (this._drawLast = e),
            n.prev = null,
            n.next = this._drawFirst,
            this._drawFirst.prev = n,
            this._drawFirst = n,
            this._requestRedraw(t)));
        },
    });
    function ln(t) {
        return St ? new un(t) : null;
    }
    const cn = (function() {
        try {
            return document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml'),
            function(t) {
                return document.createElement(`<lvml:${t} class="lvml">`);
            }
            ;
        } catch (t) {
            return function(t) {
                return document.createElement(`<${t} xmlns="urn:schemas-microsoft.com:vml" class="lvml">`);
            }
            ;
        }
    }());
    const _n = {
        _initContainer() {
            this._container = si('div', 'leaflet-vml-container');
        },
        _update() {
            this._map._animatingZoom || (hn.prototype._update.call(this),
            this.fire('update'));
        },
        _initPath(t) {
            const i = t._container = cn('shape');
            ci(i, `leaflet-vml-shape ${this.options.className || ''}`),
            i.coordsize = '1 1',
            t._path = cn('path'),
            i.appendChild(t._path),
            this._updateStyle(t),
            this._layers[m(t)] = t;
        },
        _addPath(t) {
            const i = t._container;
            this._container.appendChild(i),
            t.options.interactive && t.addInteractiveTarget(i);
        },
        _removePath(t) {
            const i = t._container;
            ri(i),
            t.removeInteractiveTarget(i),
            delete this._layers[m(t)];
        },
        _updateStyle(t) {
            let i = t._stroke;
            let e = t._fill;
            const n = t.options;
            const o = t._container;
            o.stroked = !!n.stroke,
            o.filled = !!n.fill,
            n.stroke ? (i = i || (t._stroke = cn('stroke')),
            o.appendChild(i),
            i.weight = `${n.weight}px`,
            i.color = n.color,
            i.opacity = n.opacity,
            n.dashArray ? i.dashStyle = g(n.dashArray) ? n.dashArray.join(' ') : n.dashArray.replace(/( *, *)/g, ' ') : i.dashStyle = '',
            i.endcap = n.lineCap.replace('butt', 'flat'),
            i.joinstyle = n.lineJoin) : i && (o.removeChild(i),
            t._stroke = null),
            n.fill ? (e = e || (t._fill = cn('fill')),
            o.appendChild(e),
            e.color = n.fillColor || n.color,
            e.opacity = n.fillOpacity) : e && (o.removeChild(e),
            t._fill = null);
        },
        _updateCircle(t) {
            const i = t._point.round();
            const e = Math.round(t._radius);
            const n = Math.round(t._radiusY || e);
            this._setPath(t, t._empty() ? 'M0 0' : `AL ${i.x},${i.y} ${e},${n} 0,23592600`);
        },
        _setPath(t, i) {
            t._path.v = i;
        },
        _bringToFront(t) {
            hi(t._container);
        },
        _bringToBack(t) {
            ui(t._container);
        },
    };
    const dn = Et ? cn : J;
    const pn = hn.extend({
        getEvents() {
            const t = hn.prototype.getEvents.call(this);
            return t.zoomstart = this._onZoomStart,
            t;
        },
        _initContainer() {
            this._container = dn('svg'),
            this._container.setAttribute('pointer-events', 'none'),
            this._rootGroup = dn('g'),
            this._container.appendChild(this._rootGroup);
        },
        _destroyContainer() {
            ri(this._container),
            Si(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize;
        },
        _onZoomStart() {
            this._update();
        },
        _update() {
            let t;
            let i;
            let e;
            this._map._animatingZoom && this._bounds || (hn.prototype._update.call(this),
            i = (t = this._bounds).getSize(),
            e = this._container,
            this._svgSize && this._svgSize.equals(i) || (this._svgSize = i,
            e.setAttribute('width', i.x),
            e.setAttribute('height', i.y)),
            vi(e, t.min),
            e.setAttribute('viewBox', [t.min.x, t.min.y, i.x, i.y].join(' ')),
            this.fire('update'));
        },
        _initPath(t) {
            const i = t._path = dn('path');
            t.options.className && ci(i, t.options.className),
            t.options.interactive && ci(i, 'leaflet-interactive'),
            this._updateStyle(t),
            this._layers[m(t)] = t;
        },
        _addPath(t) {
            this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(t._path),
            t.addInteractiveTarget(t._path);
        },
        _removePath(t) {
            ri(t._path),
            t.removeInteractiveTarget(t._path),
            delete this._layers[m(t)];
        },
        _updatePath(t) {
            t._project(),
            t._update();
        },
        _updateStyle(t) {
            const i = t._path;
            const e = t.options;
            i && (e.stroke ? (i.setAttribute('stroke', e.color),
            i.setAttribute('stroke-opacity', e.opacity),
            i.setAttribute('stroke-width', e.weight),
            i.setAttribute('stroke-linecap', e.lineCap),
            i.setAttribute('stroke-linejoin', e.lineJoin),
            e.dashArray ? i.setAttribute('stroke-dasharray', e.dashArray) : i.removeAttribute('stroke-dasharray'),
            e.dashOffset ? i.setAttribute('stroke-dashoffset', e.dashOffset) : i.removeAttribute('stroke-dashoffset')) : i.setAttribute('stroke', 'none'),
            e.fill ? (i.setAttribute('fill', e.fillColor || e.color),
            i.setAttribute('fill-opacity', e.fillOpacity),
            i.setAttribute('fill-rule', e.fillRule || 'evenodd')) : i.setAttribute('fill', 'none'));
        },
        _updatePoly(t, i) {
            this._setPath(t, $(t._parts, i));
        },
        _updateCircle(t) {
            const i = t._point;
            const e = Math.max(Math.round(t._radius), 1);
            const n = `a${e},${Math.max(Math.round(t._radiusY), 1) || e} 0 1,0 `;
            const o = t._empty() ? 'M0 0' : `M${i.x - e},${i.y}${n}${2 * e},0 ${n}${2 * -e},0 `;
            this._setPath(t, o);
        },
        _setPath(t, i) {
            t._path.setAttribute('d', i);
        },
        _bringToFront(t) {
            hi(t._path);
        },
        _bringToBack(t) {
            ui(t._path);
        },
    });
    function mn(t) {
        return Zt || Et ? new pn(t) : null;
    }
    Et && pn.include(_n),
    Ki.include({
        getRenderer(t) {
            var i = (i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer());
            return this.hasLayer(i) || this.addLayer(i),
            i;
        },
        _getPaneRenderer(t) {
            if (t === 'overlayPane' || void 0 === t)
                return !1;
            let i = this._paneRenderers[t];
            return void 0 === i && (i = this._createRenderer({
                pane: t
            }),
            this._paneRenderers[t] = i),
            i;
        },
        _createRenderer(t) {
            return this.options.preferCanvas && ln(t) || mn(t);
        }
    });
    const fn = Re.extend({
        initialize(t, i) {
            Re.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
        },
        setBounds(t) {
            return this.setLatLngs(this._boundsToLatLngs(t));
        },
        _boundsToLatLngs(t) {
            return [(t = N(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
        }
    });
    pn.create = dn,
    pn.pointsToPath = $,
    Ne.geometryToLayer = De,
    Ne.coordsToLatLng = We,
    Ne.coordsToLatLngs = He,
    Ne.latLngToCoords = Fe,
    Ne.latLngsToCoords = Ue,
    Ne.getFeature = Ve,
    Ne.asFeature = qe,
    Ki.mergeOptions({
        boxZoom: !0
    });
    const gn = ie.extend({
        initialize(t) {
            this._map = t,
            this._container = t._container,
            this._pane = t._panes.overlayPane,
            this._resetStateTimeout = 0,
            t.on('unload', this._destroy, this);
        },
        addHooks() {
            zi(this._container, 'mousedown', this._onMouseDown, this);
        },
        removeHooks() {
            Si(this._container, 'mousedown', this._onMouseDown, this);
        },
        moved() {
            return this._moved;
        },
        _destroy() {
            ri(this._pane),
            delete this._pane;
        },
        _resetState() {
            this._resetStateTimeout = 0,
            this._moved = !1;
        },
        _clearDeferredResetState() {
            this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout),
            this._resetStateTimeout = 0);
        },
        _onMouseDown(t) {
            if (!t.shiftKey || t.which !== 1 && t.button !== 1)
                return !1;
            this._clearDeferredResetState(),
            this._resetState(),
            Xt(),
            xi(),
            this._startPoint = this._map.mouseEventToContainerPoint(t),
            zi(document, {
                contextmenu: Ni,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown,
            }, this);
        },
        _onMouseMove(t) {
            this._moved || (this._moved = !0,
            this._box = si('div', 'leaflet-zoom-box', this._container),
            ci(this._container, 'leaflet-crosshair'),
            this._map.fire('boxzoomstart')),
            this._point = this._map.mouseEventToContainerPoint(t);
            const i = new I(this._point,this._startPoint);
            const e = i.getSize();
            vi(this._box, i.min),
            this._box.style.width = `${e.x}px`,
            this._box.style.height = `${e.y}px`;
        },
        _finish() {
            this._moved && (ri(this._box),
            _i(this._container, 'leaflet-crosshair')),
            Jt(),
            wi(),
            Si(document, {
                contextmenu: Ni,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown,
            }, this);
        },
        _onMouseUp(t) {
            let i;
            t.which !== 1 && t.button !== 1 || (this._finish(),
            this._moved && (this._clearDeferredResetState(),
            this._resetStateTimeout = setTimeout(p(this._resetState, this), 0),
            i = new R(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point)),
            this._map.fitBounds(i).fire('boxzoomend', {
                boxZoomBounds: i
            })));
        },
        _onKeyDown(t) {
            t.keyCode === 27 && this._finish();
        },
    });
    Ki.addInitHook('addHandler', 'boxZoom', gn),
    Ki.mergeOptions({
        doubleClickZoom: !0
    });
    const vn = ie.extend({
        addHooks() {
            this._map.on('dblclick', this._onDoubleClick, this);
        },
        removeHooks() {
            this._map.off('dblclick', this._onDoubleClick, this);
        },
        _onDoubleClick(t) {
            const i = this._map;
            const e = i.getZoom();
            const n = i.options.zoomDelta;
            const o = t.originalEvent.shiftKey ? e - n : e + n;
            i.options.doubleClickZoom === 'center' ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o);
        }
    });
    Ki.addInitHook('addHandler', 'doubleClickZoom', vn),
    Ki.mergeOptions({
        dragging: !0,
        inertia: !st,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: 0.2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0,
    });
    const yn = ie.extend({
        addHooks() {
            let t;
            this._draggable || (t = this._map,
            this._draggable = new ae(t._mapPane,t._container),
            this._draggable.on({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this),
            this._draggable.on('predrag', this._onPreDragLimit, this),
            t.options.worldCopyJump && (this._draggable.on('predrag', this._onPreDragWrap, this),
            t.on('zoomend', this._onZoomEnd, this),
            t.whenReady(this._onZoomEnd, this))),
            ci(this._map._container, 'leaflet-grab leaflet-touch-drag'),
            this._draggable.enable(),
            this._positions = [],
            this._times = [];
        },
        removeHooks() {
            _i(this._map._container, 'leaflet-grab'),
            _i(this._map._container, 'leaflet-touch-drag'),
            this._draggable.disable();
        },
        moved() {
            return this._draggable && this._draggable._moved;
        },
        moving() {
            return this._draggable && this._draggable._moving;
        },
        _onDragStart() {
            let t;
            const i = this._map;
            i._stop(),
            this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t = N(this._map.options.maxBounds),
            this._offsetLimit = O(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),
            this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null,
            i.fire('movestart').fire('dragstart'),
            i.options.inertia && (this._positions = [],
            this._times = []);
        },
        _onDrag(t) {
            let i;
            let e;
            this._map.options.inertia && (i = this._lastTime = +new Date(),
            e = this._lastPos = this._draggable._absPos || this._draggable._newPos,
            this._positions.push(e),
            this._times.push(i),
            this._prunePositions(i)),
            this._map.fire('move', t).fire('drag', t);
        },
        _prunePositions(t) {
            for (; this._positions.length > 1 && t - this._times[0] > 50; )
                this._positions.shift(),
                this._times.shift();
        },
        _onZoomEnd() {
            const t = this._map.getSize().divideBy(2);
            const i = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = i.subtract(t).x,
            this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        },
        _viscousLimit(t, i) {
            return t - (t - i) * this._viscosity;
        },
        _onPreDragLimit() {
            let t;
            let i;
            this._viscosity && this._offsetLimit && (t = this._draggable._newPos.subtract(this._draggable._startPos),
            i = this._offsetLimit,
            t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)),
            t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)),
            t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)),
            t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)),
            this._draggable._newPos = this._draggable._startPos.add(t));
        },
        _onPreDragWrap() {
            const t = this._worldWidth;
            const i = Math.round(t / 2);
            const e = this._initialWorldOffset;
            const n = this._draggable._newPos.x;
            const o = (n - i + e) % t + i - e;
            const s = (n + i + e) % t - i - e;
            const r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
            this._draggable._absPos = this._draggable._newPos.clone(),
            this._draggable._newPos.x = r;
        },
        _onDragEnd(t) {
            let i;
            let e;
            let n;
            let o;
            let s;
            let r;
            let a;
            let h;
            let u;
            const l = this._map;
            const c = l.options;
            const _ = !c.inertia || this._times.length < 2;
            l.fire('dragend', t),
            _ ? l.fire('moveend') : (this._prunePositions(+new Date()),
            i = this._lastPos.subtract(this._positions[0]),
            e = (this._lastTime - this._times[0]) / 1e3,
            n = c.easeLinearity,
            s = (o = i.multiplyBy(n / e)).distanceTo([0, 0]),
            r = Math.min(c.inertiaMaxSpeed, s),
            a = o.multiplyBy(r / s),
            h = r / (c.inertiaDeceleration * n),
            (u = a.multiplyBy(-h / 2).round()).x || u.y ? (u = l._limitOffset(u, l.options.maxBounds),
            M(()=>{
                l.panBy(u, {
                    duration: h,
                    easeLinearity: n,
                    noMoveStart: !0,
                    animate: !0,
                });
            }
            )) : l.fire('moveend'));
        },
    });
    Ki.addInitHook('addHandler', 'dragging', yn),
    Ki.mergeOptions({
        keyboard: !0,
        keyboardPanDelta: 80
    });
    const xn = ie.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173],
        },
        initialize(t) {
            this._map = t,
            this._setPanDelta(t.options.keyboardPanDelta),
            this._setZoomDelta(t.options.zoomDelta);
        },
        addHooks() {
            const t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = '0'),
            zi(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this),
            this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this);
        },
        removeHooks() {
            this._removeHooks(),
            Si(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this),
            this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this);
        },
        _onMouseDown() {
            let t;
            let i;
            let e;
            let n;
            this._focused || (t = document.body,
            i = document.documentElement,
            e = t.scrollTop || i.scrollTop,
            n = t.scrollLeft || i.scrollLeft,
            this._map._container.focus(),
            window.scrollTo(n, e));
        },
        _onFocus() {
            this._focused = !0,
            this._map.fire('focus');
        },
        _onBlur() {
            this._focused = !1,
            this._map.fire('blur');
        },
        _setPanDelta(t) {
            for (var i = this._panKeys = {}, e = this.keyCodes, n = 0, o = e.left.length; n < o; n++)
                i[e.left[n]] = [-1 * t, 0];
            for (n = 0,
            o = e.right.length; n < o; n++)
                i[e.right[n]] = [t, 0];
            for (n = 0,
            o = e.down.length; n < o; n++)
                i[e.down[n]] = [0, t];
            for (n = 0,
            o = e.up.length; n < o; n++)
                i[e.up[n]] = [0, -1 * t];
        },
        _setZoomDelta(t) {
            for (var i = this._zoomKeys = {}, e = this.keyCodes, n = 0, o = e.zoomIn.length; n < o; n++)
                i[e.zoomIn[n]] = t;
            for (n = 0,
            o = e.zoomOut.length; n < o; n++)
                i[e.zoomOut[n]] = -t;
        },
        _addHooks() {
            zi(document, 'keydown', this._onKeyDown, this);
        },
        _removeHooks() {
            Si(document, 'keydown', this._onKeyDown, this);
        },
        _onKeyDown(t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                let i;
                const e = t.keyCode;
                const n = this._map;
                if (e in this._panKeys)
                    n._panAnim && n._panAnim._inProgress || (i = this._panKeys[e],
                    t.shiftKey && (i = A(i).multiplyBy(3)),
                    n.panBy(i),
                    n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
                else if (e in this._zoomKeys)
                    n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
                else {
                    if (e !== 27 || !n._popup || !n._popup.options.closeOnEscapeKey)
                        return;
                    n.closePopup();
                }
                Ni(t);
            }
        },
    });
    Ki.addInitHook('addHandler', 'keyboard', xn),
    Ki.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    });
    const wn = ie.extend({
        addHooks() {
            zi(this._map._container, 'wheel', this._onWheelScroll, this),
            this._delta = 0;
        },
        removeHooks() {
            Si(this._map._container, 'wheel', this._onWheelScroll, this);
        },
        _onWheelScroll(t) {
            const i = Wi(t);
            const e = this._map.options.wheelDebounceTime;
            this._delta += i,
            this._lastMousePos = this._map.mouseEventToContainerPoint(t),
            this._startTime || (this._startTime = +new Date());
            const n = Math.max(e - (new Date() - this._startTime), 0);
            clearTimeout(this._timer),
            this._timer = setTimeout(p(this._performZoom, this), n),
            Ni(t);
        },
        _performZoom() {
            const t = this._map;
            const i = t.getZoom();
            const e = this._map.options.zoomSnap || 0;
            t._stop();
            const n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel);
            const o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2;
            const s = e ? Math.ceil(o / e) * e : o;
            const r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
            this._delta = 0,
            this._startTime = null,
            r && (t.options.scrollWheelZoom === 'center' ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r));
        },
    });
    Ki.addInitHook('addHandler', 'scrollWheelZoom', wn),
    Ki.mergeOptions({
        tap: !0,
        tapTolerance: 15
    });
    const Pn = ie.extend({
        addHooks() {
            zi(this._map._container, 'touchstart', this._onDown, this);
        },
        removeHooks() {
            Si(this._map._container, 'touchstart', this._onDown, this);
        },
        _onDown(t) {
            if (t.touches) {
                if (Ri(t),
                this._fireClick = !0,
                t.touches.length > 1)
                    return this._fireClick = !1,
                    void clearTimeout(this._holdTimeout);
                const i = t.touches[0];
                const e = i.target;
                this._startPos = this._newPos = new k(i.clientX,i.clientY),
                e.tagName && e.tagName.toLowerCase() === 'a' && ci(e, 'leaflet-active'),
                this._holdTimeout = setTimeout(p(function() {
                    this._isTapValid() && (this._fireClick = !1,
                    this._onUp(),
                    this._simulateEvent('contextmenu', i));
                }, this), 1e3),
                this._simulateEvent('mousedown', i),
                zi(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this);
            }
        },
        _onUp(t) {
            let i;
            let e;
            clearTimeout(this._holdTimeout),
            Si(document, {
                touchmove: this._onMove,
                touchend: this._onUp
            }, this),
            this._fireClick && t && t.changedTouches && ((e = (i = t.changedTouches[0]).target) && e.tagName && e.tagName.toLowerCase() === 'a' && _i(e, 'leaflet-active'),
            this._simulateEvent('mouseup', i),
            this._isTapValid() && this._simulateEvent('click', i));
        },
        _isTapValid() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _onMove(t) {
            const i = t.touches[0];
            this._newPos = new k(i.clientX,i.clientY),
            this._simulateEvent('mousemove', i);
        },
        _simulateEvent(t, i) {
            const e = document.createEvent('MouseEvents');
            e._simulated = !0,
            i.target._simulatedClick = !0,
            e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
            i.target.dispatchEvent(e);
        },
    });
    !bt || Lt && !ct || Ki.addInitHook('addHandler', 'tap', Pn),
    Ki.mergeOptions({
        touchZoom: bt && !st,
        bounceAtZoomLimits: !0
    });
    const Ln = ie.extend({
        addHooks() {
            ci(this._map._container, 'leaflet-touch-zoom'),
            zi(this._map._container, 'touchstart', this._onTouchStart, this);
        },
        removeHooks() {
            _i(this._map._container, 'leaflet-touch-zoom'),
            Si(this._map._container, 'touchstart', this._onTouchStart, this);
        },
        _onTouchStart(t) {
            let i;
            let e;
            const n = this._map;
            !t.touches || t.touches.length !== 2 || n._animatingZoom || this._zooming || (i = n.mouseEventToContainerPoint(t.touches[0]),
            e = n.mouseEventToContainerPoint(t.touches[1]),
            this._centerPoint = n.getSize()._divideBy(2),
            this._startLatLng = n.containerPointToLatLng(this._centerPoint),
            n.options.touchZoom !== 'center' && (this._pinchStartLatLng = n.containerPointToLatLng(i.add(e)._divideBy(2))),
            this._startDist = i.distanceTo(e),
            this._startZoom = n.getZoom(),
            this._moved = !1,
            this._zooming = !0,
            n._stop(),
            zi(document, 'touchmove', this._onTouchMove, this),
            zi(document, 'touchend', this._onTouchEnd, this),
            Ri(t));
        },
        _onTouchMove(t) {
            if (t.touches && t.touches.length === 2 && this._zooming) {
                const i = this._map;
                const e = i.mouseEventToContainerPoint(t.touches[0]);
                const n = i.mouseEventToContainerPoint(t.touches[1]);
                const o = e.distanceTo(n) / this._startDist;
                if (this._zoom = i.getScaleZoom(o, this._startZoom),
                !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && o < 1 || this._zoom > i.getMaxZoom() && o > 1) && (this._zoom = i._limitZoom(this._zoom)),
                i.options.touchZoom === 'center') {
                    if (this._center = this._startLatLng,
                    o == 1)
                        return;
                } else {
                    const s = e._add(n)._divideBy(2)._subtract(this._centerPoint);
                    if (o == 1 && s.x === 0 && s.y === 0)
                        return;
                    this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom);
                }
                this._moved || (i._moveStart(!0, !1),
                this._moved = !0),
                z(this._animRequest);
                const r = p(i._move, i, this._center, this._zoom, {
                    pinch: !0,
                    round: !1
                });
                this._animRequest = M(r, this, !0),
                Ri(t);
            }
        },
        _onTouchEnd() {
            this._moved && this._zooming ? (this._zooming = !1,
            z(this._animRequest),
            Si(document, 'touchmove', this._onTouchMove, this),
            Si(document, 'touchend', this._onTouchEnd, this),
            this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1;
        },
    });
    Ki.addInitHook('addHandler', 'touchZoom', Ln),
    Ki.BoxZoom = gn,
    Ki.DoubleClickZoom = vn,
    Ki.Drag = yn,
    Ki.Keyboard = xn,
    Ki.ScrollWheelZoom = wn,
    Ki.Tap = Pn,
    Ki.TouchZoom = Ln,
    t.version = '1.7.1',
    t.Control = Xi,
    t.control = Yi,
    t.Browser = Bt,
    t.Evented = E,
    t.Mixin = ne,
    t.Util = C,
    t.Class = S,
    t.Handler = ie,
    t.extend = h,
    t.bind = p,
    t.stamp = m,
    t.setOptions = c,
    t.DomEvent = qi,
    t.DomUtil = Mi,
    t.PosAnimation = Gi,
    t.Draggable = ae,
    t.LineUtil = fe,
    t.PolyUtil = ye,
    t.Point = k,
    t.point = A,
    t.Bounds = I,
    t.bounds = O,
    t.Transformation = q,
    t.transformation = G,
    t.Projection = Pe,
    t.LatLng = D,
    t.latLng = j,
    t.LatLngBounds = R,
    t.latLngBounds = N,
    t.CRS = H,
    t.GeoJSON = Ne,
    t.geoJSON = Ke,
    t.geoJson = Ye,
    t.Layer = Me,
    t.LayerGroup = ze,
    t.layerGroup = function(t, i) {
        return new ze(t,i);
    }
    ,
    t.FeatureGroup = Ce,
    t.featureGroup = function(t, i) {
        return new Ce(t,i);
    }
    ,
    t.ImageOverlay = Xe,
    t.imageOverlay = function(t, i, e) {
        return new Xe(t,i,e);
    }
    ,
    t.VideoOverlay = Je,
    t.videoOverlay = function(t, i, e) {
        return new Je(t,i,e);
    }
    ,
    t.SVGOverlay = $e,
    t.svgOverlay = function(t, i, e) {
        return new $e(t,i,e);
    }
    ,
    t.DivOverlay = Qe,
    t.Popup = tn,
    t.popup = function(t, i) {
        return new tn(t,i);
    }
    ,
    t.Tooltip = en,
    t.tooltip = function(t, i) {
        return new en(t,i);
    }
    ,
    t.Icon = Se,
    t.icon = function(t) {
        return new Se(t);
    }
    ,
    t.DivIcon = nn,
    t.divIcon = function(t) {
        return new nn(t);
    }
    ,
    t.Marker = ke,
    t.marker = function(t, i) {
        return new ke(t,i);
    }
    ,
    t.TileLayer = sn,
    t.tileLayer = rn,
    t.GridLayer = on,
    t.gridLayer = function(t) {
        return new on(t);
    }
    ,
    t.SVG = pn,
    t.svg = mn,
    t.Renderer = hn,
    t.Canvas = un,
    t.canvas = ln,
    t.Path = Be,
    t.CircleMarker = Ae,
    t.circleMarker = function(t, i) {
        return new Ae(t,i);
    }
    ,
    t.Circle = Ie,
    t.circle = function(t, i, e) {
        return new Ie(t,i,e);
    }
    ,
    t.Polyline = Oe,
    t.polyline = function(t, i) {
        return new Oe(t,i);
    }
    ,
    t.Polygon = Re,
    t.polygon = function(t, i) {
        return new Re(t,i);
    }
    ,
    t.Rectangle = fn,
    t.rectangle = function(t, i) {
        return new fn(t,i);
    }
    ,
    t.Map = Ki,
    t.map = function(t, i) {
        return new Ki(t,i);
    }
    ;
    const bn = window.L;
    t.noConflict = function() {
        return window.L = bn,
        this;
    }
    ,
    window.L = t;
}
));
