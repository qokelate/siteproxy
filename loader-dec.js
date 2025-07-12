if (!window.siteproxy_injected_flag) {
    // Only load once
    window.siteproxy_injected_flag = true;
    
    // Configuration variables
    const proxyBaseUrl = '" + _0x2586f7 + "';
    const realProtocol = '" + _0x3eee3d + "';
    const realHost = '" + _0x2244ba + "';
    const configProxyUrl = '" + _0x411a18.proxy_url + "';
    const configTokenPrefix = '" + _0x411a18.token_prefix;

    // Utility functions
    function delay(timeout) {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    // Save original browser APIs
    window.___URL = window.URL;
    const originalWindowOpen = window.open;
    const originalPushState = History.prototype.pushState;
    const originalReplaceState = History.prototype.replaceState;

    // Override browser APIs
    window.open = function (url, name, features) {
        const proxiedUrl = convertToProxyUrl(url);
        return originalWindowOpen.call(window, proxiedUrl, name, features);
    };

    History.prototype.___pushState = function (state, title, url) {
        const proxiedUrl = convertToProxyUrl(url);
        return originalPushState.apply(this, [state, title, proxiedUrl]);
    };

    History.prototype.___replaceState = function (state, title, url) {
        const proxiedUrl = convertToProxyUrl(url);
        return originalReplaceState.apply(this, [state, title, proxiedUrl]);
    };

    // Proxy location implementation
    class ProxyLocation {
        constructor(originalLocation) {
            this.originalLocation = originalLocation;
        }

        toString() {
            return convertToOriginalUrl(this.originalLocation.href);
        }

        assign(url) {
            const proxiedUrl = convertToProxyUrl(url);
            this.originalLocation.assign(proxiedUrl);
        }

        reload(force = false) {
            this.originalLocation.reload(force);
        }

        replace(url) {
            const proxiedUrl = convertToProxyUrl(url);
            this.originalLocation.replace(proxiedUrl);
        }

        get href() {
            return convertToOriginalUrl(this.originalLocation.href);
        }

        set href(url) {
            const proxiedUrl = convertToProxyUrl(url);
            this.originalLocation.href = proxiedUrl;
        }

        get origin() {
            return `${realProtocol}://${realHost}`;
        }

        get protocol() {
            return extractProtocol(this.originalLocation.href) + ':';
        }

        set protocol(protocol) {
            this.originalLocation.href = updateProtocol(this.originalLocation.href, protocol);
        }

        get pathname() {
            return extractPathname(this.originalLocation.href);
        }

        set pathname(path) {}

        get host() {
            return extractHost(this.originalLocation.href);
        }

        set host(host) {}

        get search() {
            return this.originalLocation.search;
        }

        set search(search) {}

        get hash() {
            return this.originalLocation.hash;
        }

        set hash(hash) {
            this.originalLocation.hash = hash;
        }

        get hostname() {
            let host = extractHost(this.originalLocation.href);
            const colonIndex = host.indexOf(':');
            return colonIndex !== -1 ? host.substring(0, colonIndex) : host;
        }

        set hostname(hostname) {}

        get port() {
            const host = extractHost(this.originalLocation.href);
            const colonIndex = host.indexOf(':');
            return colonIndex !== -1 ? host.substring(colonIndex + 1) : '';
        }

        set port(port) {}
    }

    // Setup proxy location
    (function initProxyLocation() {
        const proxyLocation = new ProxyLocation(window.location);
        window.___location = proxyLocation;
        document.___location = proxyLocation;

        const windowLocationDescriptor = {
            set: function(url) { proxyLocation.href = url; },
            get: function() { return proxyLocation; },
            configurable: true
        };

        const documentLocationDescriptor = {
            set: function(url) { proxyLocation.href = url; },
            get: function() { return proxyLocation; },
            configurable: true
        };

        Object.defineProperty(window, "___location", windowLocationDescriptor);
        Object.defineProperty(document, "___location", documentLocationDescriptor);
    })();

    // URL conversion functions
    function extractOriginalUrl(proxiedUrl) {
        if (!proxiedUrl || !proxiedUrl.startsWith(configProxyUrl)) {
            return proxiedUrl;
        }
        
        let originalUrl = proxiedUrl.substring(configProxyUrl.length);
        if (originalUrl.startsWith(configTokenPrefix)) {
            originalUrl = originalUrl.substring(configTokenPrefix.length);
        }
        
        if (originalUrl.startsWith("https/")) {
            return "https://" + originalUrl.substring(6);
        } else if (originalUrl.startsWith('http/')) {
            return "http://" + originalUrl.substring(5);
        }
        
        return `${realProtocol}://${realHost}${originalUrl}`;
    }

    // Override fetch API
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
        if (args[0] instanceof Request) {
            const request = args[0];
            const headers = new Headers(request.headers);
            
            headers.set("siteproxy-target-protocol", realProtocol);
            headers.set("siteproxy-target-host", realHost);
            headers.set("siteproxy-real-referer", extractOriginalUrl(window.location.href));
            headers.set("siteproxy-window-location-pathname", window.location.pathname);
            
            args[0] = new Request(request, { headers });
        } else {
            const options = args[1] || {};
            options.headers = new Headers(options.headers || {});
            
            options.headers.set("siteproxy-target-protocol", realProtocol);
            options.headers.set("siteproxy-target-host", realHost);
            options.headers.set("siteproxy-real-referer", extractOriginalUrl(window.location.href));
            options.headers.set("siteproxy-window-location-pathname", window.location.pathname);
            
            args[1] = options;
        }
        return originalFetch(...args);
    };

    // Override XMLHttpRequest
    const originalXHROpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = async function(method, url, ...args) {
        originalXHROpen.call(this, method, url, ...args);
        
        this.setRequestHeader("siteproxy-target-protocol", realProtocol);
        this.setRequestHeader("siteproxy-target-host", realHost);
        this.setRequestHeader("siteproxy-real-referer", extractOriginalUrl(window.location.href));
        this.setRequestHeader("siteproxy-window-location-pathname", window.location.pathname);
    };

    // URL processing helpers
    function extractPathname(url) {
        if (!url || !url.startsWith(proxyBaseUrl)) return '';
        
        let cleanUrl = url.substring(proxyBaseUrl.length);
        let parsedUrl = null;
        
        if (cleanUrl.startsWith('https/')) {
            parsedUrl = new URL("https://" + cleanUrl.substring(6));
        } else if (cleanUrl.startsWith('http/')) {
            parsedUrl = new URL("http://" + cleanUrl.substring(5));
        }
        
        return parsedUrl ? parsedUrl.pathname : '';
    }

    function extractHost(url) {
        if (!url || !url.startsWith(proxyBaseUrl)) return '';
        
        let cleanUrl = url.substring(proxyBaseUrl.length);
        let parsedUrl = null;
        
        if (cleanUrl.startsWith("https/")) {
            parsedUrl = new URL("https://" + cleanUrl.substring(6));
        } else if (cleanUrl.startsWith('http/')) {
            parsedUrl = new URL("http://" + cleanUrl.substring(5));
        }
        
        return parsedUrl ? parsedUrl.host : '';
    }

    function updateProtocol(url, newProtocol) {
        if (!newProtocol || !url || !url.startsWith(proxyBaseUrl)) {
            return url;
        }
        
        const protocolPart = url.substring(proxyBaseUrl.length);
        if (protocolPart.startsWith('https/')) {
            return proxyBaseUrl + newProtocol + '/' + url.substring(proxyBaseUrl.length + 6);
        } else {
            return proxyBaseUrl + newProtocol + '/' + url.substring(proxyBaseUrl.length + 5);
        }
    }

    function extractProtocol(url) {
        if (!url || !url.startsWith(proxyBaseUrl)) return '';
        
        const protocolPart = url.substring(proxyBaseUrl.length);
        if (protocolPart.startsWith("https/")) {
            return "https";
        } else if (protocolPart.startsWith('http/')) {
            return "http";
        }
        return '';
    }

    function convertToOriginalUrl(proxiedUrl) {
        if (!proxiedUrl || !proxiedUrl.startsWith(configProxyUrl)) {
            return proxiedUrl;
        }
        
        let originalUrl = proxiedUrl.substring(configProxyUrl.length);
        if (originalUrl.startsWith(configTokenPrefix)) {
            originalUrl = originalUrl.substring(configTokenPrefix.length);
        }
        
        if (!originalUrl.startsWith("http")) {
            originalUrl = `${realProtocol}/${realHost}/`;
        }
        
        if (originalUrl.startsWith("https/")) {
            return "https://" + originalUrl.substring(6);
        } else if (originalUrl.startsWith("http/")) {
            return "http://" + originalUrl.substring(5);
        }
        
        return originalUrl;
    }

    function convertToProxyUrl(originalUrl) {
        // Skip special URL schemes
        const specialSchemes = [
            'blob:', 'javascript:', 'mailto:', '#', 'about:', 
            'chrome:', 'data:', 'ftp:', 'file:', 'tel:', 'sms:',
            'view-source:', 'webcal:', 'content:', 'ssh:', 'vbscript:'
        ];
        
        if (!originalUrl || 
            originalUrl.startsWith(proxyBaseUrl) || 
            specialSchemes.some(scheme => originalUrl.startsWith(scheme))) {
            return originalUrl;
        }
        
        // Remove existing proxy prefix if present
        if (originalUrl.startsWith(configProxyUrl)) {
            originalUrl = originalUrl.substring(configProxyUrl.length);
        }
        
        // Apply regex transformations
        const regexReplacements = {
            "()(http[s]?)://([-a-z0-9A-Z.]+)": proxyBaseUrl + "$2/$3"
        };
        
        for (const regexPattern in regexReplacements) {
            const regex = new RegExp(regexPattern, 'g');
            originalUrl = originalUrl.replace(regex, regexReplacements[regexPattern]);
        }
        
        // Handle relative URLs
        const proxyPath = proxyBaseUrl + realProtocol + '/' + realHost;
        
        if (originalUrl.startsWith('//')) {
            originalUrl = proxyBaseUrl + "/https/" + originalUrl.slice(2);
            originalUrl = originalUrl.replace("//https", "/https");
        } else if (originalUrl.startsWith('/')) {
            originalUrl = proxyPath + originalUrl;
        }
        
        return originalUrl;
    }

    // DOM mutation handling
    const proxiedAttributes = ['src', 'href', 'action', "data-url", 'srcset'];
    const observerConfig = {
        attributes: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        attributeFilter: proxiedAttributes
    };

    async function handleMutations(mutations, observer) {
        observer.disconnect();
        
        mutations.forEach(mutation => {
            switch (mutation.type) {
                case "attributes":
                    const attrValue = mutation.target.getAttribute(mutation.attributeName);
                    if (proxiedAttributes.includes(mutation.attributeName)) {
                        const proxiedValue = convertToProxyUrl(attrValue);
                        
                        // Remove integrity for scripts
                        if (mutation.target.tagName.toLowerCase() === "script" && 
                            mutation.target.hasAttribute('integrity')) {
                            mutation.target.removeAttribute('integrity');
                        }
                        
                        if (proxiedValue !== attrValue) {
                            mutation.target.setAttribute(mutation.attributeName, proxiedValue);
                        }
                    }
                    break;
                    
                case "childList":
                    mutation.addedNodes.forEach(node => {
                        processNode(node);
                    });
                    break;
            }
        });
        
        observer.observe(document.documentElement, observerConfig);
    }

    function processNode(node) {
        node.childNodes.forEach(child => {
            processNode(child);
        });
        
        if (node.nodeType === Node.ELEMENT_NODE) {
            proxiedAttributes.forEach(attr => {
                if (node.hasAttribute(attr)) {
                    const originalValue = node.getAttribute(attr);
                    const proxiedValue = convertToProxyUrl(originalValue);
                    
                    // Remove integrity for scripts
                    if (node.tagName.toLowerCase() === "script" && 
                        node.hasAttribute("integrity")) {
                        node.removeAttribute("integrity");
                    }
                    
                    if (proxiedValue !== originalValue) {
                        node.setAttribute(attr, proxiedValue);
                    }
                }
            });
        }
    }

    // Warning bar functions
    function createWarningBar() {
        const lastShown = localStorage.getItem("topBarLastShown");
        const currentTime = new Date().getTime();
        
        // Show at most once per day
        if (lastShown && currentTime - parseInt(lastShown) < 86400000) {
            return;
        }
        
        const warningBar = document.createElement("div");
        warningBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #ff0000;
            color: #ffffff;
            text-align: center;
            font-size: 13px;
            line-height: 20px;
            font-weight: bold;
            z-index: 10000;
            padding: 5px 0;
        `;
        
        const closeButton = document.createElement("span");
        closeButton.innerHTML = "&times;";
        closeButton.style.cssText = `
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            font-size: 20px;
            line-height: 20px;
        `;
        
        closeButton.onclick = function() {
            warningBar.style.display = "none";
            document.body.style.marginTop = '0';
            localStorage.setItem("topBarLastShown", currentTime.toString());
        };
        
        warningBar.innerHTML = `!!! This is a SiteProxy proxied website, do not enter your personal information. 
            Refer to: <a href="https://github.com/netptop/siteproxy" target="_blank" 
            style="color: #ffffff; text-decoration: underline;">https://github.com/netptop/siteproxy</a> for details !!!`;
        
        warningBar.appendChild(closeButton);
        document.body.insertBefore(warningBar, document.body.firstChild);
        document.body.style.marginTop = warningBar.offsetHeight + 'px';
    }

    // Service worker functions
    function sendProxyUrlMap(pathname) {
        if (window.proxyWorkerRegistration && window.proxyWorkerRegistration.active) {
            const data = {
                pathname: pathname,
                real_protocol: realProtocol,
                real_host: realHost
            };
            
            window.proxyWorkerRegistration.active.postMessage({
                type: "PROXY_URL_HOST_MAP",
                data: data
            });
        }
    }

    function sendCurrentLocation() {
        if (!realProtocol || window.self !== window.top) return;
        
        if (window.proxyWorkerRegistration && window.proxyWorkerRegistration.active) {
            const locationData = {
                protocol: realProtocol,
                host: realHost
            };
            
            window.proxyWorkerRegistration.active.postMessage({
                type: "PROXY_CUR_LOCATION",
                data: locationData
            });
        }
    }

    // Initialize observer
    const domObserver = new MutationObserver(handleMutations);
    domObserver.observe(document.documentElement, observerConfig);

    // Event listeners
    document.addEventListener("DOMContentLoaded", () => {
        createWarningBar();
        sendProxyUrlMap(window.location.pathname);
    });

    // Special handling for GitHub forms
    if (window.location.pathname.includes("github.com")) {
        setTimeout(() => {
            document.querySelector('form').addEventListener("submit", function(event) {
                event.preventDefault();
                
                const form = event.target;
                const actionUrl = form.action;
                const method = form.method || "POST";
                const formData = new FormData(form);
                
                fetch(actionUrl, {
                    method: method,
                    body: formData
                })
                .then(response => {
                    window.location.href = response.url;
                })
                .catch(error => {
                    console.error("Form submission error", error);
                });
            });
        }, 4000); // 4 seconds delay
    }

    // Service worker registration
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
            const hasProxyWorker = registrations.some(registration => {
                const isProxyWorker = registration.active && 
                    registration.active.scriptURL.includes("siteproxy_service_worker.js");
                
                if (isProxyWorker) {
                    console.log("Proxy service worker already registered");
                    window.proxyWorkerRegistration = registration;
                    sendCurrentLocation();
                }
                return isProxyWorker;
            });
            
            if (!hasProxyWorker) {
                window.addEventListener("load", function() {
                    if (window.proxyWorkerRegistration && window.proxyWorkerRegistration.active) return;
                    
                    navigator.serviceWorker.register(
                        `/siteproxy_service_worker.js?proxy_real_protocol=${realProtocol}&proxy_real_host=${realHost}`
                    )
                    .then(registration => {
                        console.log("Proxy service worker registered with scope:", 
                                   registration.scope, 
                                   "Protocol:", realProtocol, 
                                   "Host:", realHost);
                        window.proxyWorkerRegistration = registration;
                        sendCurrentLocation();
                    })
                    .catch(error => {
                        console.error("Proxy service worker registration failed:", error);
                    });
                });
            }
        });
    }
}