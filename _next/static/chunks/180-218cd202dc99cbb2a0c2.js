(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[180],{3180:function(e,t,n){"use strict";n.d(t,{d:function(){return H}});var r=n(7800),o=n(7105),a=n(43),i=n(5218),u=n(7378),c=n(3849),d=n(2349),s=n(6324),l=n.n(s),b={plain:{color:"var(--text-heading)",backgroundColor:"#f6f7f9"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"var(--text)"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#eC1337"}},{types:["punctuation","operator"],style:{color:"#94A3B8"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#04865d"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#0080A8"}},{types:["function","deleted","tag"],style:{color:"var(--focus)"}},{types:["function-variable"],style:{color:"#7f54e0"}},{types:["tag","selector","keyword"],style:{color:"#037dbb"}}]};function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}["js","jsx","ts","tsx"].forEach((function(e){d.Z.languages.insertBefore(e,"template-string",{"gql-template-string":{pattern:/gql`[^`]*`/,inside:d.Z.languages.graphql}})}));var h={name:"1f9aw51",styles:"font-feature-settings:initial;-moz-font-feature-settings:initial;min-width:100%"},g=function(e){var t=e.code,n=e.language,o=function(e){var t=/{([\d,-]+)}/.exec(e);if(t){var n=l()(t[1]);return function(e){return n.includes(e+1)}}return function(){return!1}}(e.metastring);return(0,r.tZ)(c.ZP,{Prism:d.Z,theme:b,code:t,language:n,children:function(e){var t=e.tokens,n=e.getLineProps,i=e.getTokenProps;return(0,r.tZ)("code",{css:h,children:t.map((function(e,t){return(0,r.tZ)("div",f(f({},n({line:e,key:t})),{},{css:(0,a.iv)({backgroundColor:o(t)?"rgba(0,0,0,0.05)":void 0},"",""),children:e.map((function(e,t){return(0,r.tZ)("span",f({},i({token:e,key:t})),t)}))}),t)}))})}})},v=n(8241),m=n(2062),y=n(1786),w=n.n(y),O=n(3388),j=n(7307);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e){return(0,r.tZ)(g,{code:e,language:"jsx"})}var Z={name:"3jjaem",styles:"border-top:1px dashed var(--border)"},R={name:"ix44f3",styles:"padding:0.5rem 1rem;text-align:right"};function S(e){var t=e.code;return(0,r.tZ)("div",{css:Z,children:(0,r.tZ)("div",{css:R,children:(0,r.BX)(O.Button,{look:"text",size:"small",onClick:function(){w()(t)},children:["Copy",(0,r.tZ)(j.C,{})]})})})}var C={name:"c6g6m4",styles:"border-radius:3px;box-shadow:0 0 0 1px var(--border);margin:1rem 0;white-space:break-spaces;word-wrap:anywhere"},B=function(e){var t=e.code,n=e.demo,o=e.scope,i=e.initialCompiledResult,c=(0,u.useRef)(!1),d=(0,u.useRef)(null),s=(0,u.useState)(!0),l=s[0],b=s[1],p=(0,u.useState)(t),f=p[0],h=p[1],g=(0,v.s)({code:f,scope:o,initialCompiledResult:function(){return JSON.parse(i)}}),y=g.element,w=g.error,O=g.latestSuccessfulCompiledResult,j={backgroundColor:"var(--code-bg)",color:"var(--code)",fontFamily:"var(--font-mono)",fontSize:"0.875rem",maxWidth:"100%",code:{fontFamily:"inherit"}},k="1rem",Z="1rem";return(0,u.useEffect)((function(){var e=d.current;e&&e.scrollHeight>"2001rem"&&(c.current=!0)}),[]),n?(0,r.tZ)("div",{css:(0,a.iv)({borderRadius:"3px",borderTopLeftRadius:"3px",borderTopRightRadius:"3px",boxShadow:"0 0 0 1px var(--border)",padding:k},"",""),children:y}):(0,r.BX)("div",{css:C,children:[(0,r.BX)("div",{children:[(0,r.tZ)("div",{css:(0,a.iv)({borderTopLeftRadius:"3px",borderTopRightRadius:"3px",padding:k},"",""),children:y}),O&&(0,r.tZ)(S,{code:f}),(0,r.BX)("div",{css:(0,a.iv)({overflow:"hidden",borderBottomLeftRadius:"3px",borderBottomRightRadius:"3px",position:"relative",maxHeight:c.current&&l?200:void 0,paddingBottom:c.current&&!l?Z:void 0},"",""),ref:d,children:[(0,r.tZ)(m.Z,{value:f,padding:"1rem",highlight:P,onValueChange:h,css:(0,a.iv)(x(x({},j),w?{}:{borderBottomLeftRadius:"3px",borderBottomRightRadius:"3px"}),"","")}),c.current&&(0,r.BX)("button",{css:(0,a.iv)({background:"var(--code-bg)",border:0,bottom:0,borderBottomLeftRadius:"3px",borderBottomRightRadius:"3px",boxSizing:"border-box",color:"var(--code)",cursor:"pointer",fontSize:"0.875rem",fontWeight:500,height:Z,left:0,padding:0,position:"absolute",textTransform:"uppercase",width:"100%",":hover, &.focus-visible":{background:"red"},":before":c.current&&l?{background:"linear-gradient(rgba(255,155,100,0.1) 50%, var(--code-bg))",content:'" "',height:200,position:"absolute",bottom:Z,left:0,right:0}:{}},"",""),onClick:function(){return b((function(e){return!e}))},children:["Show ",l?"more":"less"]})]})]}),w&&(0,r.tZ)("pre",{css:(0,a.iv)({backgroundColor:"var(--danger-bg)",color:"var(--danger)",borderBottomLeftRadius:"3px",borderBottomRightRadius:"3px",margin:0,maxWidth:"100%",padding:k,whiteSpace:"pre-wrap",wordWrap:"break-word"},"",""),children:w})]})},D=function(e){var t=e.className,n=e.code,o=e.demo,i=e.initialCompiledResult,u=e.live,c=e.metastring,d=e.scope,s=null===t||void 0===t?void 0:t.replace(/language-/,"");return u?(0,r.tZ)(B,{code:n,demo:o,initialCompiledResult:i,scope:d}):(0,r.tZ)("pre",{css:(0,a.iv)({background:"var(--code-bg)",borderRadius:"3px",boxShadow:"0 0 0 1px var(--border)",fontFamily:"var(--font-mono)",fontSize:"0.875rem",maxWidth:"100%",overflow:"auto",padding:10,margin:"1rem 0",code:{fontFamily:"inherit"}},"",""),children:(0,r.tZ)(g,{metastring:c,code:n,language:s})})};function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L={Button:(0,i.default)((function(){return Promise.resolve().then(n.bind(n,3388)).then((function(e){return e.Button}))}),{loadableGenerated:{webpack:function(){return[3388]},modules:["../components/utils.js -> @ds-workshop/button"]}}),Core:(0,i.default)((function(){return Promise.resolve().then(n.bind(n,3445)).then((function(e){return e.Core}))}),{loadableGenerated:{webpack:function(){return[3445]},modules:["../components/utils.js -> @ds-workshop/core"]}}),DarkModeBtn:(0,i.default)((function(){return Promise.resolve().then(n.bind(n,3445)).then((function(e){return e.DarkModeBtn}))}),{loadableGenerated:{webpack:function(){return[3445]},modules:["../components/utils.js -> @ds-workshop/core"]}}),Emoji:(0,i.default)((function(){return n.e(666).then(n.bind(n,9666)).then((function(e){return e.Emoji}))}),{loadableGenerated:{webpack:function(){return[9666]},modules:["../components/utils.js -> @ds-workshop/emoji"]}}),Loading:(0,i.default)((function(){return Promise.resolve().then(n.bind(n,4082)).then((function(e){return e.Loading}))}),{loadableGenerated:{webpack:function(){return[4082]},modules:["../components/utils.js -> @ds-workshop/loading"]}}),Stack:(0,i.default)((function(){return n.e(50).then(n.bind(n,6050)).then((function(e){return e.Stack}))}),{loadableGenerated:{webpack:function(){return[6050]},modules:["../components/utils.js -> @ds-workshop/stack"]}}),Cli:(0,i.default)((function(){return n.e(865).then(n.bind(n,7865)).then((function(e){return e.Cli}))}),{loadableGenerated:{webpack:function(){return[7865]},modules:["../components/utils.js -> @ds-workshop/icons"]}}),Copy:(0,i.default)((function(){return n.e(865).then(n.bind(n,7865)).then((function(e){return e.Copy}))}),{loadableGenerated:{webpack:function(){return[7865]},modules:["../components/utils.js -> @ds-workshop/icons"]}}),Lab:(0,i.default)((function(){return n.e(865).then(n.bind(n,7865)).then((function(e){return e.Lab}))}),{loadableGenerated:{webpack:function(){return[7865]},modules:["../components/utils.js -> @ds-workshop/icons"]}}),Roadmap:(0,i.default)((function(){return n.e(865).then(n.bind(n,7865)).then((function(e){return e.Roadmap}))}),{loadableGenerated:{webpack:function(){return[7865]},modules:["../components/utils.js -> @ds-workshop/icons"]}}),Shield:(0,i.default)((function(){return n.e(865).then(n.bind(n,7865)).then((function(e){return e.Shield}))}),{loadableGenerated:{webpack:function(){return[7865]},modules:["../components/utils.js -> @ds-workshop/icons"]}}),Type:(0,i.default)((function(){return n.e(334).then(n.bind(n,6334)).then((function(e){return e.Type}))}),{loadableGenerated:{webpack:function(){return[6334]},modules:["../components/utils.js -> @ds-workshop/type"]}}),Box:(0,i.default)((function(){return n.e(299).then(n.bind(n,3299)).then((function(e){return e.Box}))}),{loadableGenerated:{webpack:function(){return[3299]},modules:["../components/utils.js -> ./docs/Box"]}})},H=E({a:(0,i.default)((function(){return n.e(760).then(n.bind(n,3760)).then((function(e){return e.NextLink}))}),{loadableGenerated:{webpack:function(){return[3760]},modules:["../components/utils.js -> ./docs/NextLink"]}}),p:(0,i.default)((function(){return n.e(989).then(n.bind(n,5399)).then((function(e){return e.Paragraph}))}),{loadableGenerated:{webpack:function(){return[5399]},modules:["../components/utils.js -> ./docs/Paragraph"]}}),blockquote:(0,i.default)((function(){return n.e(497).then(n.bind(n,8497)).then((function(e){return e.Blockquote}))}),{loadableGenerated:{webpack:function(){return[8497]},modules:["../components/utils.js -> ./docs/Blockquote"]}}),li:(0,i.default)((function(){return n.e(41).then(n.bind(n,9041)).then((function(e){return e.ListItem}))}),{loadableGenerated:{webpack:function(){return[9041]},modules:["../components/utils.js -> ./docs/ListItem"]}}),h1:(0,i.default)((function(){return n.e(56).then(n.bind(n,5056)).then((function(e){return e.H1}))}),{loadableGenerated:{webpack:function(){return[5056]},modules:["../components/utils.js -> ./docs/Headings"]}}),h2:(0,i.default)((function(){return n.e(56).then(n.bind(n,5056)).then((function(e){return e.H2}))}),{loadableGenerated:{webpack:function(){return[5056]},modules:["../components/utils.js -> ./docs/Headings"]}}),h3:(0,i.default)((function(){return n.e(56).then(n.bind(n,5056)).then((function(e){return e.H3}))}),{loadableGenerated:{webpack:function(){return[5056]},modules:["../components/utils.js -> ./docs/Headings"]}}),h4:(0,i.default)((function(){return n.e(56).then(n.bind(n,5056)).then((function(e){return e.H4}))}),{loadableGenerated:{webpack:function(){return[5056]},modules:["../components/utils.js -> ./docs/Headings"]}}),h5:(0,i.default)((function(){return n.e(56).then(n.bind(n,5056)).then((function(e){return e.H5}))}),{loadableGenerated:{webpack:function(){return[5056]},modules:["../components/utils.js -> ./docs/Headings"]}}),h6:(0,i.default)((function(){return n.e(56).then(n.bind(n,5056)).then((function(e){return e.H6}))}),{loadableGenerated:{webpack:function(){return[5056]},modules:["../components/utils.js -> ./docs/Headings"]}}),inlineCode:(0,i.default)((function(){return n.e(806).then(n.bind(n,8806)).then((function(e){return e.InlineCode}))}),{loadableGenerated:{webpack:function(){return[8806]},modules:["../components/utils.js -> ./docs/InlineCode"]}}),IconPallet:(0,i.default)((function(){return Promise.all([n.e(865),n.e(776)]).then(n.bind(n,9776)).then((function(e){return e.IconPallet}))}),{loadableGenerated:{webpack:function(){return[9776]},modules:["../components/utils.js -> ./docs/IconPallet"]}}),ColorTheme:(0,i.default)((function(){return n.e(298).then(n.bind(n,298)).then((function(e){return e.ColorTheme}))}),{loadableGenerated:{webpack:function(){return[298]},modules:["../components/utils.js -> ./docs/ColorTheme"]}}),code:function(e){var t=e.children,n=e.initialCompiledResult,o=e.live,i=e.className;return(0,r.tZ)(D,{code:t.trim(),initialCompiledResult:n,scope:E(E({},L),{},{React:E(E({},u),{},{createElement:a.tZ})}),live:o,className:i})}},L)},3388:function(e,t,n){"use strict";n.r(t),n.d(t,{Button:function(){return h}});var r=n(7800),o=n(7105),a=n(43),i=n(8502),u=n(7378),c=n(9894),d=n(4082);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={default:{},danger:{"--button-bg":"var(--danger)","--button-bg-hover":"var(--danger-90)","--button-bg-active":"var(--danger-90)","--button-bg-disabled":"var(--danger--40)","--button-shadow":"0 0 4px 0 rgb(220 38 255 / 20%)","--button-shadow-hover":"0 0 4px 0 rgb(220 38 255 / 24%)"},soft:{"--button-bg":"var(--app-bg)","--button-bg-hover":"var(--link)","--button-bg-active":"var(--link)","--button-bg-disabled":"var(--app-bg)","--button-color":"var(--link)","--button-color-hover":"var(--app-bg)","--button-color-active":"var(--app-bg)","--button-color-disabled":"var(--brand-bg--40)","--button-border":"1px solid var(--border)","--button-border-hover":"1px solid var(--brand-bg-90)","--button-border-active":"1px solid var(--brand-bg-90)","--button-border-disabled":"1px solid var(--brand-bg--40)","--button-shadow":"0 0 4px 0 rgb(0 118 255 / 10%)","--button-shadow-hover":"0 0 4px 0 rgb(0 118 255 / 10%)","--button-shadow-active":"0 0 4px 0 rgb(0 118 255 / 08%)"},text:{"--button-bg":"transparent","--button-bg-hover":"transparent","--button-bg-active":"transparent","--button-color":"var(--link)","--button-color-hover":"var(--link)","--button-color-disabled":"var(--disabled)","--button-decoration-hover":"underline","--button-bg-disabled":"transparent","--button-transform-active":"none","--button-shadow":"none","--button-shadow-hover":"none","--button-shadow-active":"none",display:"inline",height:"auto",padding:0,borderRadius:0}},p={small:{fontSize:"0.75rem",borderRadius:"6px",height:"1.8rem",padding:"0 var(--space-large)","& svg":{height:"1.3em"}},default:{fontSize:"1rem",borderRadius:"6px",height:"2.4rem",padding:"0 var(--space-large)"},large:{fontSize:"1.125rem",borderRadius:"6px",height:"3rem",padding:"0 var(--space-xlarge)"}},f={name:"a4hmbt",styles:"position:absolute"},h=(0,u.forwardRef)((function(e,t){var n=e.as,o=void 0===n?"button":n,s=e.href,h=e.look,g=void 0===h?"default":h,v=e.size,m=void 0===v?"default":v,y=e.disabled,w=e.loading,O=e.children,j=(0,i.Z)(e,["as","href","look","size","disabled","loading","children"]),k=u.Fragment;return"a"!==o||s||(o="button"),"a"===o&&s&&(y=void 0,k=function(e){var t=e.children;return(0,r.tZ)(c.default,{href:s,passHref:!0,children:t})}),"text"===g&&(y=!!w||y,w=!1),(0,r.tZ)(k,{children:(0,r.BX)(o,l(l({ref:t,css:(0,a.iv)(l(l({"--button-bg":"var(--brand-bg)","--button-bg-hover":"var(--brand-bg-90)","--button-bg-active":"var(--brand-bg-90)","--button-bg-disabled":"var(--brand-bg--40)","--button-border":"0 none","--button-border-hover":"var(--button-border)","--button-border-active":"var(--button-border)","--button-border-disabled":"var(--button-border)","--button-color":"var(--app-bg)","--button-color-hover":"var(--app-bg)","--button-color-active":"var(--app-bg)","--button-color-disabled":"var(--app-bg)","--button-decoration-hover":"none","--button-shadow":"0 0 4px 0 rgb(0 118 255 / 36%)","--button-shadow-hover":"0 0 4px 0 rgb(0 118 255 / 30%)","--button-shadow-active":"none","--button-transform-active":"translateY(1px)",position:"relative",display:"inline-flex",flexShrink:"0",letterSpacing:"-.2px",color:"var(--button-color)",mozBoxAlign:"center",alignItems:"center",boxShadow:"var(--button-shadow)",background:"var(--button-bg)",border:"var(--button-border)",fontFamily:"var(--font-brand)",fontWeight:"600",mozBoxPack:"center",justifyContent:"center",outline:"currentcolor none 0",textDecoration:"none",userSelect:"none",whiteSpace:"nowrap",cursor:"pointer",transition:"all 0.1s ease",":hover":{boxShadow:"var(--button-shadow-hover)",background:"var(--button-bg-hover)",textDecoration:"var(--button-decoration-hover)",color:"var(--button-color-hover)",border:"var(--button-border-hover)"},":active":{boxShadow:"var(--button-shadow-active)",transform:"var(--button-transform-active)",background:"var(--button-bg-active)",color:"var(--button-color-active)",border:"var(--button-border-active)"},":disabled":{boxShadow:"none",cursor:"not-allowed",background:"var(--button-bg-disabled)",opacity:"0.9",color:"var(--button-color-disabled)",border:"var(--button-border-disabled)",pointerEvents:"none"},":focus-visible":{outline:"1px dashed var(--focus)",outlineOffset:"3px"},"& svg":{display:"inline-block",height:"1em",width:"auto",verticalAlign:"middle",margin:0}},b[g]),p[m]),"",""),"aria-disabled":!!y||void 0,disabled:w||y},j),{},{children:[(0,r.tZ)("span",{css:(0,a.iv)({display:"inline-flex",gap:"0.5rem",alignItems:"center",opacity:w?0:1,textDecoration:"inherit"},"",""),children:O}),w?(0,r.tZ)(d.Loading,{css:f}):null]}))})}));h.displayName="Button"},7307:function(e,t,n){"use strict";n.d(t,{C:function(){return d}});var r=n(7105),o=n(7800),a=n(8502),i=n(8209);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t=e.look,n=(0,a.Z)(e,["look"]);return(0,o.BX)("svg",c(c({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-label":"Copy",role:"img",fill:"none",stroke:t?"url(#Copy-".concat(t,")"):"currentColor"},n),{},{children:[(0,o.tZ)(i.R,{name:"Copy"}),(0,o.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})]}))}},4082:function(e,t,n){"use strict";n.r(t),n.d(t,{Loading:function(){return l}});var r=n(7800),o=n(7105),a=n(43);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=(0,n(3445).keyframes)({"0%, 80%, 100%":{opacity:0},"40%":{opacity:1}}),d={display:"block",backgroundColor:"currentcolor",height:"1em",width:"1em",borderRadius:"50%",animation:"".concat(c," 1s linear infinite")},s={name:"1svxffe",styles:"display:inline-grid;grid-template-columns:1fr 1fr 1fr;gap:0.3em;font-size:8px"};function l(e){return(0,r.BX)("div",u(u({"aria-live":"polite","aria-label":"Loading",css:s},e),{},{children:[(0,r.tZ)("div",{css:(0,a.iv)(u(u({},d),{},{animationDelay:"0ms"}),"","")}),(0,r.tZ)("div",{css:(0,a.iv)(u(u({},d),{},{animationDelay:"160ms"}),"","")}),(0,r.tZ)("div",{css:(0,a.iv)(u(u({},d),{},{animationDelay:"320ms"}),"","")})]}))}}}]);