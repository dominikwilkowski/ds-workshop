(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197,334],{5616:function(e,t,r){"use strict";r.d(t,{y:function(){return u}});var n=r(7800),o=r(7105),i=r(43),a=r(8502);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={grad1:{"--grad-1":"var(--grad1-1)","--grad-2":"var(--grad1-2)"},grad2:{"--grad-1":"var(--grad2-1)","--grad-2":"var(--grad2-2)"},grad3:{"--grad-1":"var(--grad3-1)","--grad-2":"var(--grad3-2)"},grad4:{"--grad-1":"var(--grad4-1)","--grad-2":"var(--grad4-2)"},grad5:{"--grad-1":"var(--grad5-1)","--grad-2":"var(--grad5-2)"}};function u(e){var t=e.look,r=void 0===t?"grad1":t,o=e.as,c=void 0===o?"span":o,u=(0,a.Z)(e,["look","as"]);return(0,n.tZ)(c,f({css:(0,i.iv)(f(f({},l[r]),{},{backgroundImage:"linear-gradient(135deg, var(--grad-1), var(--grad-2))",backgroundClip:"text",color:"transparent",WebkitBoxDecorationBreak:"clone",paddingRight:"0.1em"}),"","")},u))}},9546:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return f},default:function(){return d}});var n=r(7800),o=r(9894),i=r(5616),a=r(4745),c=r(6334);var f=!0,l={name:"9q63m5",styles:"align-content:center;justify-content:center;text-align:center"},u={name:"sg48g1",styles:"margin:3rem 0"},s={name:"1i4o399",styles:"list-style:none;margin:0;padding:0;li{margin:1rem 0;}li:first-of-kind{margin:0;}"};function d(e){var t=e.pkgs;return(0,n.BX)(a.A,{pkgs:t,noNav:!0,css:l,children:[(0,n.tZ)(c.Type,{as:"h1",look:"heading92",css:u,children:(0,n.tZ)(i.y,{look:"grad3",children:"404"})}),(0,n.tZ)(c.Type,{as:"h2",look:"heading30",children:(0,n.tZ)(i.y,{look:"grad4",children:"Sitemap"})}),(0,n.BX)("ul",{css:s,children:[(0,n.tZ)("li",{children:(0,n.tZ)(o.default,{href:"/",children:(0,n.tZ)("a",{children:"Home"})})}),t.map((function(e){var t=e.slug,r=e.name;return(0,n.tZ)("li",{children:(0,n.tZ)(o.default,{href:"/packages/".concat(t),children:(0,n.tZ)("a",{children:r})})},t)}))]})]})}},3972:function(e,t,r){"use strict";var n=r(3823),o=r(1522);t.default=void 0;var i=o(r(7378)),a=r(1222),c=r(2295),f=r(9772),l={};function u(e,t,r,n){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(o?"%"+o:"")]=!0}}var s=function(e){var t,r=!1!==e.prefetch,o=(0,c.useRouter)(),s=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),r=n(t,2),i=r[0],c=r[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),d=s.href,g=s.as,p=e.children,h=e.replace,v=e.shallow,b=e.scroll,y=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var m=(t=i.Children.only(p))&&"object"===typeof t&&t.ref,O=(0,f.useIntersection)({rootMargin:"200px"}),S=n(O,2),k=S[0],j=S[1],w=i.default.useCallback((function(e){k(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,k]);(0,i.useEffect)((function(){var e=j&&r&&(0,a.isLocalURL)(d),t="undefined"!==typeof y?y:o&&o.locale,n=l[d+"%"+g+(t?"%"+t:"")];e&&!n&&u(o,d,g,{locale:t})}),[g,d,j,y,r,o]);var W={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,c,f){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](r,n,{shallow:i,locale:f,scroll:c}))}(e,o,d,g,h,v,b,y)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,g,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var z="undefined"!==typeof y?y:o&&o.locale,P=o&&o.isLocaleDomain&&(0,a.getDomainLocale)(g,z,o&&o.locales,o&&o.domainLocales);W.href=P||(0,a.addBasePath)((0,a.addLocale)(g,z,o&&o.defaultLocale))}return i.default.cloneElement(t,W)};t.default=s},9772:function(e,t,r){"use strict";var n=r(3823);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,f=(0,o.useRef)(),l=(0,o.useState)(!1),u=n(l,2),s=u[0],d=u[1],g=(0,o.useCallback)((function(e){f.current&&(f.current(),f.current=void 0),r||s||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,s]);return(0,o.useEffect)((function(){if(!a&&!s){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[s]),[g,s]};var o=r(7378),i=r(3209),a="undefined"!==typeof IntersectionObserver;var c=new Map},6334:function(e,t,r){"use strict";r.r(t),r.d(t,{Type:function(){return g}});var n=r(7800),o=r(43),i=r(8502),a=r(7105),c=r(7378);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={fontFamily:"var(--font-brand)",color:"var(--text-heading)",lineHeight:1.3},s={fontFamily:"var(--font-body)",color:"var(--text)",lineHeight:1.2,maxWidth:"85ch"},d={heading20:l(l({},u),{},{fontSize:"1.25rem",fontWeight:400}),heading20bold:l(l({},u),{},{fontSize:"1.25rem",fontWeight:700}),heading24:l(l({},u),{},{fontSize:"1.5rem",fontWeight:700,letterSpacing:"-0.025em"}),heading30:l(l({},u),{},{fontSize:"1.875rem",fontWeight:700,letterSpacing:"-0.025em"}),heading36:l(l({},u),{},{fontSize:"2.25rem",fontWeight:700,letterSpacing:"-0.025em"}),heading48:l(l({},u),{},{fontSize:"3rem",fontWeight:700,letterSpacing:"-0.05em"}),heading64:l(l({},u),{},{fontSize:"4rem",fontWeight:700,letterSpacing:"-0.05em"}),heading84:l(l({},u),{},{fontSize:"5.25rem",fontWeight:900,letterSpacing:"-0.05em"}),heading92:l(l({},u),{},{fontSize:"5.75rem",fontWeight:900,letterSpacing:"-0.025em",lineHeight:1.2}),body12:l(l({},s),{},{fontSize:"0.75rem",fontWeight:400}),body12bold:l(l({},s),{},{fontSize:"0.75rem",fontWeight:600}),body14:l(l({},s),{},{fontSize:"0.875rem",fontWeight:400,lineHeight:1.7}),body14bold:l(l({},s),{},{fontSize:"0.875rem",fontWeight:600}),body16:l(l({},s),{},{fontSize:"1rem",fontWeight:400,lineHeight:1.7}),body16bold:l(l({},s),{},{fontSize:"1rem",fontWeight:600,lineHeight:1.7}),body18:l(l({},s),{},{fontSize:"1.125rem",fontWeight:400,lineHeight:1.7}),body18bold:l(l({},s),{},{fontSize:"1.125rem",fontWeight:600,lineHeight:1.7}),body20:l(l({},s),{},{fontSize:"1.25rem",fontWeight:400,lineHeight:1.7}),body20bold:l(l({},s),{},{fontSize:"1.25rem",fontWeight:600,lineHeight:1.7}),body24:l(l({},s),{},{fontSize:"1.5rem",fontWeight:400,lineHeight:1.7}),body24bold:l(l({},s),{},{fontSize:"1.5rem",fontWeight:600,lineHeight:1.7})},g=(0,c.forwardRef)((function(e,t){var r=e.as,a=void 0===r?"span":r,c=e.look,f=(0,i.Z)(e,["as","look"]);return(0,n.tZ)(a,l({ref:t,css:(0,o.iv)(l({},c?d[c]:{}),"","")},f))}));g.displayName="Type"},7765:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r(9546)}])},9894:function(e,t,r){e.exports=r(3972)},8502:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})},6677:function(e,t,r){e.exports=r(2295)}},function(e){e.O(0,[745,774,888,179],(function(){return t=7765,e(e.s=t);var t}));var t=e.O();_N_E=t}]);