

if (!window.siteproxy_injected_flag) {
    // only load once
    window.siteproxy_injected_flag = true;
    var proxy_url_prefix = '" + _0x2586f7 + "';
    var proxy_real_protocol = '" + _0x3eee3d + "';
    var proxy_real_host = '" + _0x2244ba + "';
    var config_proxy_url = '" + _0x411a18.proxy_url + "';
    var config_token_prefix = '" + _0x411a18.token_prefix;

    function _0x1b27a9(_0x33f129) {
        return new Promise(_0x329d31 => setTimeout(_0x329d31, _0x33f129));
    }
    window.___URL = window.URL;
    var _0x15af52 = window.open;
    window.open = function (_0x57a752, _0x50b85c, _0x51deba) {
        let _0x3aad39 = _0x52e538(_0x57a752);
        return _0x15af52.call(window, _0x3aad39, _0x50b85c, _0x51deba);
    };
    var _0x9c490e = History.prototype.pushState;
    var _0x41270b = History.prototype.replaceState;
    History.prototype.___pushState = function (_0x2d373a, _0x4916d1, _0x84ce4d) {
        const _0xcd802 = _0x52e538(_0x84ce4d);
        return _0x9c490e.apply(this, [_0x2d373a, _0x4916d1, _0xcd802]);
    };
    History.prototype.___replaceState = function (_0xd4b62b, _0x224238, _0x1b4079) {
        const _0x431e8b = _0x52e538(_0x1b4079);
        return _0x41270b.apply(this, [_0xd4b62b, _0x224238, _0x431e8b]);
    };
    Object.defineProperty(document, "___URL", {
        'get': function () {
            let _0x40626e = _0xd03568(document.URL);
            return _0x40626e;
        },
        'set': function (_0x2c3b0e) {
            let _0x10853e = _0x52e538(_0x2c3b0e);
            document.URL = _0x10853e;
        }
    });
    Object.defineProperty(document, '___domain', {
        'get': function () {
            const _0x3d5a6d = _0x2fb096(document.URL);
            return _0x3d5a6d;
        },
        'set': function (_0xab0a22) { }
    });
    class _0x528e16 {
        constructor(_0xed3a9a) {
            this.originalLocation = _0xed3a9a;
        }
        ["toString"]() {
            const _0x18671a = _0xd03568(this.originalLocation.href);
            return _0x18671a;
        }
        ["assign"](_0x34bff7) {
            const _0x434150 = _0x52e538(_0x34bff7);
            this.originalLocation.assign(_0x434150);
        }
        ["reload"](_0x3134ca = false) {
            this.originalLocation.reload(_0x3134ca);
        }
        ['replace'](_0x292ef4) {
            const _0x16f818 = _0x52e538(_0x292ef4);
            this.originalLocation.replace(_0x16f818);
        }
        get ['href']() {
            const _0x4b34fe = _0xd03568(this.originalLocation.href);
            return _0x4b34fe;
        }
        set ["href"](_0x52eec7) {
            const _0x3b8738 = _0x52e538(_0x52eec7);
            this.originalLocation.href = _0x3b8738;
        }
        get ['origin']() {
            const _0x2e7a96 = proxy_real_protocol + "://" + proxy_real_host;
            return _0x2e7a96;
        }
        get ["protocol"]() {
            const _0x3fc83b = _0x346cc9(this.originalLocation.href) + ':';
            return _0x3fc83b;
        }
        set ["protocol"](_0x26c33f) {
            const _0xdaf6a1 = _0x2f6183(this.originalLocation.href, _0x26c33f);
            this.originalLocation.href = _0xdaf6a1;
        }
        get ["pathname"]() {
            const _0xfb9f81 = _0x5af688(this.originalLocation.href);
            return _0xfb9f81;
        }
        set ['pathname'](_0x5aa34d) { }
        get ['host']() {
            const _0x1ad26d = _0x2fb096(this.originalLocation.href);
            return _0x1ad26d;
        }
        set ["host"](_0x3f0dc6) { }
        get ['search']() {
            const _0xb35a46 = this.originalLocation.search;
            return _0xb35a46;
        }
        set ["search"](_0x5eec82) { }
        get ["hash"]() {
            const _0x731692 = this.originalLocation.hash;
            return _0x731692;
        }
        set ["hash"](_0x58e32b) {
            this.originalLocation.hash = _0x58e32b;
        }
        get ["hostname"]() {
            let _0x5d6e41 = _0x2fb096(this.originalLocation.href);
            const _0xeea654 = _0x5d6e41.indexOf(':');
            if (_0xeea654 !== -0x1) {
                _0x5d6e41 = _0x5d6e41.substring(0x0, _0xeea654);
            }
            return _0x5d6e41;
        }
        set ["hostname"](_0x50deba) { }
        get ["port"]() {
            const _0x1e806f = _0x2fb096(this.originalLocation.href);
            const _0x68710b = _0x1e806f.indexOf(':');
            let _0x2d128d = '';
            if (_0x68710b !== -0x1) {
                _0x2d128d = _0x1e806f.substring(_0x68710b + 0x1);
            }
            return _0x2d128d;
        }
        set ["port"](_0x1e50ba) { }
    }
    (function () {
        let _0x1759f2 = new _0x528e16(window.location);
        window.___location = _0x1759f2;
        document.___location = window.___location;
        const _0x2c3d2c = {
            "set": function (_0x1e9f4e) {
                _0x1759f2.href = _0x1e9f4e;
            },
            "get": function () {
                return _0x1759f2;
            },
            configurable: true
        };
        Object.defineProperty(window, "___location", _0x2c3d2c);
        const _0x4f8ecb = {
            "set": function (_0x318a24) {
                _0x1759f2.href = _0x318a24;
            },
            "get": function () {
                return _0x1759f2;
            },
            configurable: true
        };
        Object.defineProperty(document, "___location", _0x4f8ecb);
    })();
    function _0x24291a(_0x4a0f16, _0x1df63a, _0x11f071) {
        if (_0x4a0f16.startsWith(config_proxy_url)) {
            _0x4a0f16 = _0x4a0f16.substring(config_proxy_url.length);
            if (_0x4a0f16.startsWith(config_token_prefix)) {
                _0x4a0f16 = _0x4a0f16.substring(config_token_prefix.length);
            }
            if (_0x4a0f16.startsWith("https/")) {
                _0x4a0f16 = "https://" + _0x4a0f16.substring(0x6);
                return _0x4a0f16;
            } else {
                return _0x4a0f16.startsWith('http/') ? (_0x4a0f16 = "http://" + _0x4a0f16.substring(0x5), _0x4a0f16) : _0x1df63a + "://" + _0x11f071 + _0x4a0f16;
            }
        }
        return _0x4a0f16;
    }
    var _0x1c1bde = window.postMessage.bind(window);
    window.postMessage = function (_0x37f6e5, _0x46776a, _0x596fa6) {
        _0x1c1bde(_0x37f6e5, '*', _0x596fa6);
    };
    var _0x41b23b = window.fetch;
    window.fetch = async (..._0x47efe3) => {
        const _0x13ae87 = {
            'wlWAb': function (_0x5ab874, _0x504daa) {
                return _0x5ab874 instanceof _0x504daa;
            },
            'ZGOiY': "siteproxy-target-protocol",
            'DMxJB': "siteproxy-target-host",
            'BXEii': function (_0x8bb2cf, _0x40af89, _0x23800b, _0x2d1409) {
                return _0x8bb2cf(_0x40af89, _0x23800b, _0x2d1409);
            },
            'fBtHt': "siteproxy-real-referer",
            'DIVcq': "siteproxy-window-location-pathname",
            'nIXXZ': function (_0x55e5c5, ..._0x98a1d8) {
                return _0x55e5c5(..._0x98a1d8);
            }
        };
        if (_0x47efe3[0x0] instanceof Request) {
            const _0x5431a4 = _0x47efe3[0x0];
            let _0x3cea7a = new Headers(_0x5431a4.headers);
            _0x3cea7a.set("siteproxy-target-protocol", proxy_real_protocol);
            _0x3cea7a.set("siteproxy-target-host", proxy_real_host);
            const _0x5eb3d2 = _0x24291a(window.location.href, proxy_real_protocol, proxy_real_host);
            _0x3cea7a.set("siteproxy-real-referer", _0x5eb3d2);
            _0x3cea7a.set("siteproxy-window-location-pathname", window.location.pathname);
            const _0x2c0546 = {
                "headers": _0x3cea7a
            };
            _0x47efe3[0x0] = new Request(_0x5431a4, _0x2c0546);
        } else {
            let _0x19c333 = _0x47efe3[0x1] || {};
            _0x19c333.headers = new Headers(_0x19c333.headers || {});
            _0x19c333.headers.set("siteproxy-target-protocol", proxy_real_protocol);
            _0x19c333.headers.set("siteproxy-target-host", proxy_real_host);
            const _0x2d1e83 = _0x24291a(window.location.href, proxy_real_protocol, proxy_real_host);
            _0x19c333.headers.set("siteproxy-real-referer", _0x2d1e83);
            _0x19c333.headers.set("siteproxy-window-location-pathname", window.location.pathname);
            _0x47efe3[0x1] = _0x19c333;
        }
        return _0x13ae87.nIXXZ(_0x41b23b, ..._0x47efe3);
    };
    var _0x1c13c8 = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = async function (_0x296d40, _0x5515bd, ..._0x3d09cc) {
        _0x1c13c8.call(this, _0x296d40, _0x5515bd, ..._0x3d09cc);
        this.setRequestHeader("siteproxy-target-protocol", proxy_real_protocol);
        this.setRequestHeader("siteproxy-target-host", proxy_real_host);
        const _0x5bbdf9 = _0x24291a(window.location.href, proxy_real_protocol, proxy_real_host);
        this.setRequestHeader("siteproxy-real-referer", _0x5bbdf9);
        this.setRequestHeader("siteproxy-window-location-pathname", window.location.pathname);
    };
    function _0x5af688(_0x337587) {
        if (!_0x337587 || !_0x337587.startsWith(proxy_url_prefix)) {
            return '';
        }
        let _0xc45279;
        _0x337587 = _0x337587.substring(proxy_url_prefix.length);
        if (_0x337587.startsWith('https/')) {
            _0xc45279 = new URL("https://" + _0x337587.substring(0x6));
        } else if (_0x337587.startsWith('http/')) {
            _0xc45279 = new URL("https://" + _0x337587.substring(0x5));
        }
        if (_0xc45279) {
            return _0xc45279.pathname;
        }
        return '';
    }
    function _0x2fb096(_0x2f074c) {
        if (!_0x2f074c || !_0x2f074c.startsWith(proxy_url_prefix)) {
            return '';
        }
        let _0x28fbeb;
        _0x2f074c = _0x2f074c.substring(proxy_url_prefix.length);
        if (_0x2f074c.startsWith("https/")) {
            _0x28fbeb = new URL("https://" + _0x2f074c.substring(0x6));
        } else if (_0x2f074c.startsWith('http/')) {
            _0x28fbeb = new URL("https://" + _0x2f074c.substring(0x5));
        }
        if (_0x28fbeb) {
            return _0x28fbeb.host;
        }
        return '';
    }
    function _0x2f6183(_0x4d37d0, _0x1febe4) {
        if (!_0x1febe4 || !_0x4d37d0 || !_0x4d37d0.startsWith(proxy_url_prefix)) {
            return _0x4d37d0;
        }
        if (_0x4d37d0.substring(proxy_url_prefix.length).startsWith('https/')) {
            _0x4d37d0 = _0x4d37d0.substring(0x0, proxy_url_prefix.length) + _0x1febe4 + '/' + _0x4d37d0.substring(proxy_url_prefix.length + 0x6);
        } else {
            _0x4d37d0 = _0x4d37d0.substring(0x0, proxy_url_prefix.length) + _0x1febe4 + '/' + _0x4d37d0.substring(proxy_url_prefix.length + 0x5);
        }
        return _0x4d37d0;
    }
    function _0x346cc9(_0x3f915b) {
        if (!_0x3f915b || !_0x3f915b.startsWith(proxy_url_prefix)) {
            return '';
        }
        _0x3f915b = _0x3f915b.substring(proxy_url_prefix.length);
        if (_0x3f915b.startsWith("https/")) {
            return "https";
        } else {
            if (_0x3f915b.startsWith('http/')) {
                return "http";
            }
        }
        return '';
    }
    function _0xd03568(_0x3ca7f1) {
        if (!_0x3ca7f1 || !_0x3ca7f1.startsWith(config_proxy_url)) {
            return _0x3ca7f1;
        }
        _0x3ca7f1 = _0x3ca7f1.substring(config_proxy_url.length);
        if (_0x3ca7f1.startsWith(config_token_prefix)) {
            _0x3ca7f1 = _0x3ca7f1.substring(config_token_prefix.length);
        }
        if (!_0x3ca7f1.startsWith("http")) {
            _0x3ca7f1 = proxy_real_protocol + '/' + proxy_real_host + '/';
        }
        if (_0x3ca7f1.startsWith("https/")) {
            _0x3ca7f1 = "https://" + _0x3ca7f1.substring(0x6);
        } else if (_0x3ca7f1.startsWith("http/")) {
            _0x3ca7f1 = "http://" + _0x3ca7f1.substring(0x5);
        }
        return _0x3ca7f1;
    }
    function _0x52e538(_0x52ff1c) {
        if (!_0x52ff1c || _0x52ff1c.startsWith(proxy_url_prefix)) {
            return _0x52ff1c;
        }
        if (_0x52ff1c.startsWith("blob:") || _0x52ff1c.startsWith("javascript:") || _0x52ff1c.startsWith("mailto:") || _0x52ff1c.startsWith('#') || _0x52ff1c.startsWith("about:") || _0x52ff1c.startsWith("chrome:") || _0x52ff1c.startsWith("data:") || _0x52ff1c.startsWith("ftp:") || _0x52ff1c.startsWith("file:") || _0x52ff1c.startsWith("tel:") || _0x52ff1c.startsWith("sms:") || _0x52ff1c.startsWith("view-source:") || _0x52ff1c.startsWith("webcal:") || _0x52ff1c.startsWith('content:') || _0x52ff1c.startsWith("ssh:") || _0x52ff1c.startsWith("vbscript:")) {
            return _0x52ff1c;
        }
        if (_0x52ff1c.startsWith(config_proxy_url)) {
            _0x52ff1c = _0x52ff1c.substring(config_proxy_url.length);
        }
        const _0x3bd24b = {
            "()(http[s]?)://([-a-z0-9A-Z.]+)": proxy_url_prefix + "$2/$3"
        };
        for (let _0x50dbe2 in _0x3bd24b) {
            let _0xc44c53 = new RegExp(_0x50dbe2, 'g');
            _0x52ff1c = _0x52ff1c.replace(_0xc44c53, _0x3bd24b[_0x50dbe2]);
        }
        let _0x581c86 = config_proxy_url.substring(config_proxy_url.indexOf('//'));
        if (_0x52ff1c.startsWith(_0x581c86)) {
            _0x52ff1c = _0x52ff1c.substring(_0x581c86.length);
        }
        let _0x2a3999 = proxy_url_prefix + proxy_real_protocol + '/' + proxy_real_host;
        if (_0x52ff1c.startsWith('//')) {
            _0x52ff1c = proxy_url_prefix + "/https/" + _0x52ff1c.slice(0x2);
            _0x52ff1c = _0x52ff1c.replace("//https", "/https");
        } else if (_0x52ff1c.startsWith('/')) {
            _0x52ff1c = _0x2a3999 + _0x52ff1c;
        }
        return _0x52ff1c;
    }
    var _0x33d352 = ['src', 'href', 'action', "data-url", 'srcset'];
    const _0x546ab1 = {
        "attributes": true,
        childList: true,
        "subtree": true,
        attributeOldValue: true,
        characterDataOldValue: true,
        attributeFilter: _0x33d352
    };
    async function _0x58923c(_0x722629, _0x4c50cf) {
        _0x4c50cf.disconnect();
        _0x722629.forEach(_0x3d6bd6 => {
            switch (_0x3d6bd6.type) {
                case "attributes":
                    let _0x36aaa0 = _0x3d6bd6.target.getAttribute(_0x3d6bd6.attributeName);
                    if (_0x33d352.includes(_0x3d6bd6.attributeName)) {
                        let _0xcf72d3 = _0x52e538(_0x36aaa0);
                        if (_0x3d6bd6.target.tagName.toLowerCase() === "script" && _0x3d6bd6.target.hasAttribute('integrity')) {
                            _0x3d6bd6.target.removeAttribute('integrity');
                        }
                        if (_0xcf72d3 !== _0x36aaa0) {
                            _0x3d6bd6.target.setAttribute(_0x3d6bd6.attributeName, _0xcf72d3);
                        }
                    }
                    break;
                case "childList":
                    _0x3d6bd6.addedNodes.forEach(_0x45283b => {
                        _0x570281(_0x45283b);
                    });
                    break;
            }
        });
        _0x4c50cf.observe(document.documentElement, _0x546ab1);
    }
    function _0x570281(_0x36bfd3) {
        _0x36bfd3.childNodes.forEach(_0xdab224 => {
            _0x570281(_0xdab224);
        });
        if (_0x36bfd3.nodeType === Node.ELEMENT_NODE) {
            _0x33d352.forEach(_0x2879b7 => {
                if (_0x36bfd3.hasAttribute(_0x2879b7)) {
                    let _0x27f592 = _0x36bfd3.getAttribute(_0x2879b7);
                    let _0x5ce4b8 = _0x52e538(_0x27f592);
                    if (_0x36bfd3.tagName.toLowerCase() === "script" && _0x36bfd3.hasAttribute("integrity")) {
                        _0x36bfd3.removeAttribute("integrity");
                    }
                    if (_0x5ce4b8 !== _0x27f592) {
                        _0x36bfd3.setAttribute(_0x2879b7, _0x5ce4b8);
                    }
                }
            });
        }
    }
    function _0x5794be() {
        var _0x2a6a1a = localStorage.getItem("topBarLastShown");
        var _0x92d8ae = new Date().getTime();
        if (_0x2a6a1a && _0x92d8ae - parseInt(_0x2a6a1a) < 86400000) {
            return;
        }
        var _0x334326 = document.createElement("div");
        _0x334326.style.position = 'fixed';
        _0x334326.style.top = '0';
        _0x334326.style.left = '0';
        _0x334326.style.width = "100%";
        _0x334326.style.backgroundColor = "#ff0000";
        _0x334326.style.color = "#ffffff";
        _0x334326.style.textAlign = "center";
        _0x334326.style.fontSize = "13px";
        _0x334326.style.lineHeight = '20px';
        _0x334326.style.fontWeight = "bold";
        _0x334326.style.zIndex = "10000";
        _0x334326.style.padding = "5px 0";
        var _0xb53208 = document.createElement("span");
        _0xb53208.innerHTML = "&times;";
        _0xb53208.style.position = "absolute";
        _0xb53208.style.right = "10px";
        _0xb53208.style.top = "50%";
        _0xb53208.style.transform = "translateY(-50%)";
        _0xb53208.style.cursor = "pointer";
        _0xb53208.style.fontSize = '20px';
        _0xb53208.style.lineHeight = '20px';
        _0xb53208.onclick = function () {
            _0x334326.style.display = "none";
            document.body.style.marginTop = '0';
            localStorage.setItem("topBarLastShown", new Date().getTime().toString());
        };
        _0x334326.innerHTML = "!!! This is a SiteProxy proxied website, do not enter your personal information. Refer to: <a href=\"https://github.com/netptop/siteproxy\" target=\"_blank\" style=\"color: #ffffff; text-decoration: underline;\">https://github.com/netptop/siteproxy</a> for details !!!";
        _0x334326.appendChild(_0xb53208);
        document.body.insertBefore(_0x334326, document.body.firstChild);
        document.body.style.marginTop = _0x334326.offsetHeight + 'px';
    }
    var _0x24ebe1 = new MutationObserver(_0x58923c);
    _0x24ebe1.observe(document.documentElement, _0x546ab1);
    document.addEventListener("DOMContentLoaded", () => {
        _0x5794be();
    });
    function _0x4ddc74(_0x9c5aae, _0x378d4f) {
        if (!(_0x9c5aae instanceof HTMLElement) || !_0x9c5aae.hasAttribute(_0x378d4f) || _0x9c5aae.clickListenerAdded) {
            return;
        }
        _0x9c5aae.clickListenerAdded = true;
        _0x9c5aae.addEventListener("click", function (_0x4b155c) {
            const _0x468621 = _0x9c5aae.getAttribute(_0x378d4f);
            const _0x5e929e = _0x52e538(_0x9c5aae.getAttribute(_0x378d4f));
            if (_0x5e929e !== _0x468621) {
                _0x9c5aae.setAttribute(_0x378d4f, _0x5e929e);
            }
        });
    }
    function _0x56a6d2(_0x940e23) {
        if (!(_0x940e23 instanceof HTMLFormElement) || !_0x940e23.hasAttribute("action") || _0x940e23.submitHookedAlready) {
            return;
        }
        _0x940e23.submitHookedAlready = true;
        _0x940e23.addEventListener('submit', function (_0xf12f10) {
            if (!_0x940e23 || !_0x940e23.parentNode) {
                console.error("hookFormSubmit: Form element has been removed from the DOM, skipping action change.");
                return;
            }
            _0xf12f10.preventDefault();
            _0xf12f10.target.action = _0x52e538(_0xf12f10.target.action);
            _0xf12f10.target.submit();
        });
    }
    function _0x2ebfd6(_0xb6eb05, _0x3cb578, _0x28da71) {
        if (window.proxy_worker_registration && window.proxy_worker_registration.active) {
            const _0x511819 = {
                pathname: _0xb6eb05,
                real_protocol: _0x3cb578,
                real_host: _0x28da71
            };
            const _0x48bb1d = {
                type: "PROXY_URL_HOST_MAP",
                "data": _0x511819
            };
            window.proxy_worker_registration.active.postMessage(_0x48bb1d);
        }
    }
    function _0x452a7b() {
        if (!proxy_real_protocol || window.self !== window.top) {
            return;
        }
        if (window.proxy_worker_registration && window.proxy_worker_registration.active) {
            const _0x542e60 = {
                "protocol": proxy_real_protocol,
                "host": proxy_real_host
            };
            const _0xc1a776 = {
                "type": "PROXY_CUR_LOCATION",
                "data": _0x542e60
            };
            window.proxy_worker_registration.active.postMessage(_0xc1a776);
        }
    }
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.getRegistrations().then(function (_0x57a846) {
            var _0x50050d = _0x57a846.some(function (_0x14ba16) {
                let _0x289c6b = _0x14ba16.active && _0x14ba16.active.scriptURL.includes("siteproxy_service_worker.js");
                if (_0x289c6b) {
                    console.log("!!! proxy service worker already registered.");
                    window.proxy_worker_registration = _0x14ba16;
                    _0x452a7b();
                }
            });
            if (!_0x50050d) {
                window.addEventListener("load", function () {
                    if (window.proxy_worker_registration && window.proxy_worker_registration.active) {
                        return;
                    }
                    navigator.serviceWorker.register("/siteproxy_service_worker.js?proxy_real_protocol=" + proxy_real_protocol + "&proxy_real_host=" + proxy_real_host).then(function (_0xa73694) {
                        console.log("siteproxy_service_worker registration successful with scope: ", _0xa73694.scope, "protocol:", proxy_real_protocol, 'host:', proxy_real_host);
                        window.proxy_worker_registration = _0xa73694;
                        _0x452a7b();
                    }, function (_0x177be7) {
                        console.log("siteproxy_service_worker registration failed: ", _0x177be7);
                    });
                });
            }
        });
    }
    if (window.location.pathname.includes("github.com")) {
        setTimeout(() => {
            document.querySelector('form').addEventListener("submit", function (_0x56d0a0) {
                _0x56d0a0.preventDefault();
                const _0x174bca = _0x56d0a0.target.action;
                const _0x121733 = _0x56d0a0.target.method || "POST";
                const _0x2784f0 = new FormData(_0x56d0a0.target);
                let _0x34863c = {};
                const _0x3f7abb = {
                    method: _0x121733,
                    body: _0x2784f0,
                    headers: _0x34863c
                };
                fetch(_0x174bca, _0x3f7abb).then(_0x33a30f => {
                    window.location.href = _0x33a30f.url;
                })["catch"](_0x3e72fc => {
                    console.error("Error in form submission fetch", _0x3e72fc);
                });
            });
        }, 0xfa0);
    }

}

