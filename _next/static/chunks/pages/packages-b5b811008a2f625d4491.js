(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[262],{375:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return a},default:function(){return u}});var r=t(7800),o=t(9894),c=t(171),a=!0;function u(e){var n=e.pkgs;return(0,r.tZ)(c.A,{pkgs:n,children:(0,r.tZ)("ul",{children:n.map((function(e){var n=e.slug,t=e.name;return(0,r.tZ)("li",{children:(0,r.tZ)(o.default,{href:"/packages/".concat(n),children:(0,r.tZ)("a",{children:t})})},n)}))})})}},3972:function(e,n,t){"use strict";var r=t(3823),o=t(1522);n.default=void 0;var c=o(t(7378)),a=t(1222),u=t(2295),i=t(9772),l={};function f(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=(0,u.useRouter)(),s=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],u=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,h=e.replace,y=e.shallow,g=e.scroll,b=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var _=(n=c.Children.only(v))&&"object"===typeof n&&n.ref,k=(0,i.useIntersection)({rootMargin:"200px"}),m=r(k,2),E=m[0],w=m[1],L=c.default.useCallback((function(e){E(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,E]);(0,c.useEffect)((function(){var e=w&&t&&(0,a.isLocalURL)(p),n="undefined"!==typeof b?b:o&&o.locale,r=l[p+"%"+d+(n?"%"+n:"")];e&&!r&&f(o,p,d,{locale:n})}),[d,p,w,b,t,o]);var O={ref:L,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:c,locale:i,scroll:u}))}(e,o,p,d,h,y,g,b)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(o,p,d,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var M="undefined"!==typeof b?b:o&&o.locale,C=o&&o.isLocaleDomain&&(0,a.getDomainLocale)(d,M,o&&o.locales,o&&o.domainLocales);O.href=C||(0,a.addBasePath)((0,a.addLocale)(d,M,o&&o.defaultLocale))}return c.default.cloneElement(n,O)};n.default=s},9772:function(e,n,t){"use strict";var r=t(3823);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,i=(0,o.useRef)(),l=(0,o.useState)(!1),f=r(l,2),s=f[0],p=f[1],d=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||s||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,s]);return(0,o.useEffect)((function(){if(!a&&!s){var e=(0,c.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[s]),[d,s]};var o=t(7378),c=t(3209),a="undefined"!==typeof IntersectionObserver;var u=new Map},1897:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/packages",function(){return t(375)}])},9894:function(e,n,t){e.exports=t(3972)},8502:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{Z:function(){return r}})},6677:function(e,n,t){e.exports=t(2295)}},function(e){e.O(0,[171,774,888,179],(function(){return n=1897,e(e.s=n);var n}));var n=e.O();_N_E=n}]);