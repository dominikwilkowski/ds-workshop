(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{5589:function(e,t,r){"use strict";r.d(t,{Z:function(){return te}});var n=r(2506),o=Math.abs,a=String.fromCharCode;function i(e){return e.trim()}function c(e,t,r){return e.replace(t,r)}function s(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function l(e){return e.length}function d(e){return e.length}function p(e,t){return t.push(e),e}var m=1,b=1,h=0,y=0,g=0,v="";function w(e,t,r,n,o,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:m,column:b,length:i,return:""}}function O(e,t,r){return w(e,t.root,t.parent,r,t.props,t.children,0)}function x(){return g=y>0?u(v,--y):0,b--,10===g&&(b=1,m--),g}function k(){return g=y<h?u(v,y++):0,b++,10===g&&(b=1,m++),g}function j(){return u(v,y)}function S(){return y}function P(e,t){return f(v,e,t)}function C(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function E(e){return m=b=1,h=l(v=e),y=0,[]}function M(e){return v="",e}function $(e){return i(P(y-1,D(91===e?e+2:40===e?e+1:e)))}function _(e){for(;(g=j())&&g<33;)k();return C(e)>2||C(g)>3?"":" "}function A(e,t){for(;--t&&k()&&!(g<48||g>102||g>57&&g<65||g>70&&g<97););return P(e,S()+(t<6&&32==j()&&32==k()))}function D(e){for(;k();)switch(g){case e:return y;case 34:case 39:return D(34===e||39===e?e:g);case 40:41===e&&D(e);break;case 92:k()}return y}function z(e,t){for(;k()&&e+g!==57&&(e+g!==84||47!==j()););return"/*"+P(t,y-1)+"*"+a(47===e?e:k())}function I(e){for(;!C(j());)k();return P(e,y)}var Z="-ms-",T="-moz-",N="-webkit-",R="comm",F="rule",L="decl";function B(e,t){for(var r="",n=d(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function H(e,t,r,n){switch(e.type){case"@import":case L:return e.return=e.return||e.value;case R:return"";case F:e.value=e.props.join(",")}return l(r=B(e.children,n))?e.return=e.value+"{"+r+"}":""}function W(e,t){switch(function(e,t){return(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3)}(e,t)){case 5103:return N+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return N+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return N+e+T+e+Z+e+e;case 6828:case 4268:return N+e+Z+e+e;case 6165:return N+e+Z+"flex-"+e+e;case 5187:return N+e+c(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return N+e+Z+"flex-item-"+c(e,/flex-|-self/,"")+e;case 4675:return N+e+Z+"flex-line-pack"+c(e,/align-content|flex-|-self/,"")+e;case 5548:return N+e+Z+c(e,"shrink","negative")+e;case 5292:return N+e+Z+c(e,"basis","preferred-size")+e;case 6060:return N+"box-"+c(e,"-grow","")+N+e+Z+c(e,"grow","positive")+e;case 4554:return N+c(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return c(c(c(e,/(zoom-|grab)/,N+"$1"),/(image-set)/,N+"$1"),e,"")+e;case 5495:case 3959:return c(e,/(image-set\([^]*)/,N+"$1$`$1");case 4968:return c(c(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+N+e+e;case 4095:case 3583:case 4068:case 2532:return c(e,/(.+)-inline(.+)/,N+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(l(e)-1-t>6)switch(u(e,t+1)){case 109:if(45!==u(e,t+4))break;case 102:return c(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+T+(108==u(e,t+3)?"$3":"$2-$3"))+e;case 115:return~s(e,"stretch")?W(c(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==u(e,t+1))break;case 6444:switch(u(e,l(e)-3-(~s(e,"!important")&&10))){case 107:return c(e,":",":"+N)+e;case 101:return c(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+N+(45===u(e,14)?"inline-":"")+"box$3$1"+N+"$2$3$1"+Z+"$2box$3")+e}break;case 5936:switch(u(e,t+11)){case 114:return N+e+Z+c(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return N+e+Z+c(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return N+e+Z+c(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return N+e+Z+e+e}return e}function q(e){return M(G("",null,null,null,[""],e=E(e),0,[0],e))}function G(e,t,r,n,o,i,s,u,f){for(var d=0,m=0,b=s,h=0,y=0,g=0,v=1,w=1,O=1,P=0,C="",E=o,M=i,D=n,Z=C;w;)switch(g=P,P=k()){case 34:case 39:case 91:case 40:Z+=$(P);break;case 9:case 10:case 13:case 32:Z+=_(g);break;case 92:Z+=A(S()-1,7);continue;case 47:switch(j()){case 42:case 47:p(X(z(k(),S()),t,r),f);break;default:Z+="/"}break;case 123*v:u[d++]=l(Z)*O;case 125*v:case 59:case 0:switch(P){case 0:case 125:w=0;case 59+m:y>0&&l(Z)-b&&p(y>32?Y(Z+";",n,r,b-1):Y(c(Z," ","")+";",n,r,b-2),f);break;case 59:Z+=";";default:if(p(D=U(Z,t,r,d,m,o,u,C,E=[],M=[],b),i),123===P)if(0===m)G(Z,t,D,D,E,i,b,u,M);else switch(h){case 100:case 109:case 115:G(e,D,D,n&&p(U(e,D,D,0,0,o,u,C,o,E=[],b),M),o,M,b,u,n?E:M);break;default:G(Z,D,D,D,[""],M,b,u,M)}}d=m=y=0,v=O=1,C=Z="",b=s;break;case 58:b=1+l(Z),y=g;default:if(v<1)if(123==P)--v;else if(125==P&&0==v++&&125==x())continue;switch(Z+=a(P),P*v){case 38:O=m>0?1:(Z+="\f",-1);break;case 44:u[d++]=(l(Z)-1)*O,O=1;break;case 64:45===j()&&(Z+=$(k())),h=j(),m=l(C=Z+=I(S())),P++;break;case 45:45===g&&2==l(Z)&&(v=0)}}return i}function U(e,t,r,n,a,s,u,l,p,m,b){for(var h=a-1,y=0===a?s:[""],g=d(y),v=0,O=0,x=0;v<n;++v)for(var k=0,j=f(e,h+1,h=o(O=u[v])),S=e;k<g;++k)(S=i(O>0?y[k]+" "+j:c(j,/&\f/g,y[k])))&&(p[x++]=S);return w(e,t,r,0===a?F:l,p,m,b)}function X(e,t,r){return w(e,t,r,R,a(g),f(e,2,-2),0)}function Y(e,t,r,n){return w(e,t,r,L,f(e,0,n),f(e,n+1,-1),n)}var Q=function(e,t){return M(function(e,t){var r=-1,n=44;do{switch(C(n)){case 0:38===n&&12===j()&&(t[r]=1),e[r]+=I(y-1);break;case 2:e[r]+=$(n);break;case 4:if(44===n){e[++r]=58===j()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=a(n)}}while(n=k());return e}(E(e),t))},V=new WeakMap,J=function(e){if("rule"===e.type&&e.parent&&e.length){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||V.get(r))&&!n){V.set(e,!0);for(var o=[],a=Q(t,o),i=r.props,c=0,s=0;c<a.length;c++)for(var u=0;u<i.length;u++,s++)e.props[s]=o[c]?a[c].replace(/&\f/g,i[u]):i[u]+" "+a[c]}}},K=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ee=[function(e,t,r,n){if(!e.return)switch(e.type){case L:e.return=W(e.value,e.length);break;case"@keyframes":return B([O(c(e.value,"@","@"+N),e,"")],n);case F:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return B([O(c(t,/:(read-\w+)/,":-moz-$1"),e,"")],n);case"::placeholder":return B([O(c(t,/:(plac\w+)/,":-webkit-input-$1"),e,""),O(c(t,/:(plac\w+)/,":-moz-$1"),e,""),O(c(t,/:(plac\w+)/,Z+"input-$1"),e,"")],n)}return""}))}}],te=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var o=e.stylisPlugins||ee;var a,i,c={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)c[t[r]]=!0;s.push(e)}));var u,f,l=[H,(f=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&f(e)})],p=function(e){var t=d(e);return function(r,n,o,a){for(var i="",c=0;c<t;c++)i+=e[c](r,n,o,a)||"";return i}}([J,K].concat(o,l));i=function(e,t,r,n){u=r,B(q(e?e+"{"+t.styles+"}":t.styles),p),n&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new n.m({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend}),nonce:e.nonce,inserted:c,registered:{},insert:i};return m.sheet.hydrate(s),m}},4432:function(e,t,r){"use strict";r.d(t,{E:function(){return p},T:function(){return f},c:function(){return d},h:function(){return c},w:function(){return u}});var n=r(7378),o=r(5589),a=r(3211),i=r(872),c=Object.prototype.hasOwnProperty,s=(0,n.createContext)("undefined"!==typeof HTMLElement?(0,o.Z)({key:"css"}):null),u=(s.Provider,function(e){return(0,n.forwardRef)((function(t,r){var o=(0,n.useContext)(s);return e(t,o,r)}))}),f=(0,n.createContext)({});var l="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",d=function(e,t){var r={};for(var n in t)c.call(t,n)&&(r[n]=t[n]);return r[l]=e,r},p=u((function(e,t,r){var o=e.css;"string"===typeof o&&void 0!==t.registered[o]&&(o=t.registered[o]);var s=e[l],u=[o],d="";"string"===typeof e.className?d=(0,a.f)(t.registered,u,e.className):null!=e.className&&(d=e.className+" ");var p=(0,i.O)(u,void 0,"function"===typeof o||Array.isArray(o)?(0,n.useContext)(f):void 0);(0,a.M)(t,p,"string"===typeof s);d+=t.key+"-"+p.name;var m={};for(var b in e)c.call(e,b)&&"css"!==b&&b!==l&&(m[b]=e[b]);return m.ref=r,m.className=d,(0,n.createElement)(s,m)}))},43:function(e,t,r){"use strict";r.d(t,{xB:function(){return u},iv:function(){return f},tZ:function(){return s},F4:function(){return l}});var n=r(7378),o=(r(5589),r(4432)),a=(r(5839),r(3211)),i=r(872),c=r(2506),s=function(e,t){var r=arguments;if(null==t||!o.h.call(t,"css"))return n.createElement.apply(void 0,r);var a=r.length,i=new Array(a);i[0]=o.E,i[1]=(0,o.c)(e,t);for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)},u=(0,o.w)((function(e,t){var r=e.styles,s=(0,i.O)([r],void 0,"function"===typeof r||Array.isArray(r)?(0,n.useContext)(o.T):void 0),u=(0,n.useRef)();return(0,n.useLayoutEffect)((function(){var e=t.key+"-global",r=new c.m({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,o=document.querySelector('style[data-emotion="'+e+" "+s.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==o&&(n=!0,o.setAttribute("data-emotion",e),r.hydrate([o])),u.current=[r,n],function(){r.flush()}}),[t]),(0,n.useLayoutEffect)((function(){var e=u.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==s.next&&(0,a.M)(t,s.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",s,r,!1)}}),[t,s.name]),null}));function f(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.O)(t)}var l=function(){var e=f.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},7800:function(e,t,r){"use strict";r.d(t,{tZ:function(){return a},BX:function(){return i}});r(7378),r(5589);var n=r(4432),o=(r(5839),r(872),r(4246));o.Fragment;function a(e,t,r){return n.h.call(t,"css")?(0,o.jsx)(n.E,(0,n.c)(e,t),r):(0,o.jsx)(e,t,r)}function i(e,t,r){return n.h.call(t,"css")?(0,o.jsxs)(n.E,(0,n.c)(e,t),r):(0,o.jsxs)(e,t,r)}},872:function(e,t,r){"use strict";r.d(t,{O:function(){return m}});var n=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var a=/[A-Z]|^ms/g,i=/_EMO_([^_]+?)_([^]*?)_EMO_/g,c=function(e){return 45===e.charCodeAt(1)},s=function(e){return null!=e&&"boolean"!==typeof e},u=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return c(e)?e:e.replace(a,"-$&").toLowerCase()})),f=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(i,(function(e,t,r){return d={name:t,styles:r,next:d},t}))}return 1===o[e]||c(e)||"number"!==typeof t||0===t?t:t+"px"};function l(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return d={name:r.name,styles:r.styles,next:d},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)d={name:n.name,styles:n.styles,next:d},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=l(e,t,r[o])+";";else for(var a in r){var i=r[a];if("object"!==typeof i)null!=t&&void 0!==t[i]?n+=a+"{"+t[i]+"}":s(i)&&(n+=u(a)+":"+f(a,i)+";");else if(!Array.isArray(i)||"string"!==typeof i[0]||null!=t&&void 0!==t[i[0]]){var c=l(e,t,i);switch(a){case"animation":case"animationName":n+=u(a)+":"+c+";";break;default:n+=a+"{"+c+"}"}}else for(var d=0;d<i.length;d++)s(i[d])&&(n+=u(a)+":"+f(a,i[d])+";")}return n}(e,t,r);case"function":if(void 0!==e){var o=d,a=r(e);return d=o,l(e,t,a)}break;case"string":}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var d,p=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var m=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o=!0,a="";d=void 0;var i=e[0];null==i||void 0===i.raw?(o=!1,a+=l(r,t,i)):a+=i[0];for(var c=1;c<e.length;c++)a+=l(r,t,e[c]),o&&(a+=i[c]);p.lastIndex=0;for(var s,u="";null!==(s=p.exec(a));)u+="-"+s[1];return{name:n(a)+u,styles:a,next:d}}},2506:function(e,t,r){"use strict";r.d(t,{m:function(){return n}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}()},3211:function(e,t,r){"use strict";r.d(t,{f:function(){return n},M:function(){return o}});function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var o=function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+n:"",o,e.sheet,!0);o=o.next}while(void 0!==o)}}},5839:function(e,t,r){"use strict";var n=r(9185),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?i:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var u=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(m){var o=p(r);o&&o!==m&&e(t,o,n)}var i=f(r);l&&(i=i.concat(l(r)));for(var c=s(t),b=s(r),h=0;h<i.length;++h){var y=i[h];if(!a[y]&&(!n||!n[y])&&(!b||!b[y])&&(!c||!c[y])){var g=d(r,y);try{u(t,y,g)}catch(v){}}}}return t}},2833:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7800),o=r(7105),a=r(43),i=r(7378),c=r(8038),s=r(3445);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={name:"lh6bak",styles:'*, ::before, ::after{box-sizing:border-box;}html, body{background:var(--app-bg);color:var(--text);height:100%;font-family:var(--font-body);padding:0;margin:0;text-rendering:geometricPrecision;-webkit-text-size-adjust:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}a{text-decoration:none;color:var(--link);}::selection{text-shadow:none;color:#000;background-color:rgba(0, 0, 255, 0.1);}pre{line-height:1.4;}img{height:auto;max-width:100%;}button{color:inherit;}a, button{touch-action:manipulation;}:focus:not(:focus-visible){outline:none;}*:focus-visible, input:focus-visible, button:focus-visible, [type="submit"]:focus-visible{outline:1px dashed var(--focus);outline-offset:3px;}input:focus-visible{outline-style:solid;outline-width:3px;outline-offset:0;}#__next{min-height:100%;display:grid;grid-template-rows:auto 1fr;grid-template-areas:"header" "main" "footer";grid-template-columns:minmax(0, 1fr);}.hint{border-radius:4px;padding:1rem 1rem 1rem 1.5rem;color:var(--text-heading);}.hint.neutral{background:var(--code-bg);border-left:6px solid var(--text);}.hint.tip{background:var(--info-bg);border-left:6px solid var(--info);}.hint.warn{background:var(--warning-bg);border-left:6px solid var(--warning);}.hint.error{background:var(--danger-bg);border-left:6px solid var(--danger);}'};function d(e){var t=e.Component,r=e.pageProps;return(0,n.BX)(i.Fragment,{children:[(0,n.tZ)(a.xB,{styles:l}),(0,n.tZ)(c.default,{children:(0,n.tZ)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"})}),(0,n.tZ)(s.Core,{}),(0,n.tZ)(t,f({},r))]})}},7529:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7378))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},2498:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7378))&&n.__esModule?n:{default:n},a=r(7529);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},5639:function(e,t,r){"use strict";var n=r(217);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7378)),c=(a=r(1062))&&a.__esModule?a:{default:a},s=r(7529),u=r(6287),f=r(2498);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function b(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=m.length;s<u;s++){var f=m[s];if(o.props.hasOwnProperty(f))if("charSet"===f)r.has(f)?a=!1:r.add(f);else{var l=o.props[f],d=n[f]||new Set;"name"===f&&i||!d.has(l)?(d.add(l),n[f]=d):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}var h=function(e){var t=e.children,r=(0,i.useContext)(s.AmpStateContext),n=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:b,headManager:n,inAmpMode:(0,f.isInAmpMode)(r)},t)};t.default=h},1062:function(e,t,r){"use strict";var n=r(5169),o=r(3190),a=r(2972),i=(r(7261),r(7242)),c=r(9172),s=r(8809);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var f=r(7378),l=function(e){i(r,e);var t=u(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(f.Component);t.default=l},3445:function(e,t,r){"use strict";r.r(t),r.d(t,{COLORS:function(){return i},Core:function(){return I},DarkModeBtn:function(){return D},Global:function(){return c.xB},SPACE:function(){return n},SSRTheme:function(){return v},SetTheme:function(){return w},TYPE:function(){return o},TYPESCALE:function(){return a},jsx:function(){return c.tZ},keyframes:function(){return c.F4}});var n={"--space-xxsmall":"0.125rem","--space-xsmall":"0.25rem","--space-small":"0.375rem","--space-medium":"0.5rem","--space-large":"1rem","--space-xlarge":"1.5rem","--space-xxlarge":"6rem"},o={"--font-brand":'"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',"--font-body":'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',"--font-mono":"ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace"},a={"--font-xxsmall":"0.75rem","--font-xsmall":"0.875rem","--font-small":"1rem","--font-medium":"1.25rem","--font-large":"1.5rem","--font-xlarge":"1.875rem","--font-xxlarge":"2.625rem"},i={light:{"--theme":"light","--app-bg":"#fff","--brand-bg":"#166bff","--brand-bg-90":"#2d7aff","--brand-bg--40":"rgba(22, 107, 255, 0.6)","--link":"#166bff","--link-active":"#0b55d5","--focus":"#8b5cf6","--border":"#e2e8f0","--muted":"#5F718C","--text":"#47546b","--text-heading":"#2d3748","--text-disabled":"#a0aec0","--code":"#47546b","--code-bg":"#f6f7f9","--shadow":"rgba(22, 107, 255, 0.1)","--info":"#0299e7","--info-bg":"rgba(2, 153, 231, 0.1)","--warning":"#d97706","--warning-bg":"rgba(217, 119, 6, 0.1)","--success":"#22c55e","--success-bg":"rgba(34, 197, 94, 0.1)","--danger":"#dc2626","--danger-bg":"rgba(220, 38, 38, 0.1)","--danger-90":"#e03c3c","--danger--40":"rgba(220, 38, 38, 0.6)","--alert-text":"#47546b","--grad1-1":"#166bff","--grad1-2":"#22d3ee","--grad2-1":"#10b981","--grad2-2":"#22d3ee","--grad3-1":"#6373f1","--grad3-2":"#da5a99","--grad4-1":"#f87171","--grad4-2":"#f59e0b","--grad5-1":"#ec4899","--grad5-2":"#f87171"},dark:{"--theme":"dark","--app-bg":"#171923","--brand-bg":"#166bff","--brand-bg-90":"#2d7aff","--brand-bg--40":"rgba(22, 107, 255, 0.6)","--link":"#2997ff","--link-active":"#89b3fa","--focus":"#8b5cf6","--border":"#2d3748","--muted":"#a0aec0","--text":"#a0aec0","--text-heading":"#f7f9fc","--text-disabled":"#627693","--code":"#cbd5e0","--code-bg":"#1f2631","--shadow":"rgba(0, 0, 0, 0.2)","--info":"#0299e7","--info-bg":"rgba(2, 153, 231, 0.05)","--warning":"#d97706","--warning-bg":"rgba(217, 119, 6, 0.05)","--success":"#22c55e","--success-bg":"rgba(34, 197, 94, 0.05)","--danger":"#dc2626","--danger-bg":"rgba(220, 38, 38, 0.05)","--danger-90":"#e03c3c","--danger--40":"rgba(220, 38, 38, 0.6)","--alert-text":"rgba(247, 250, 252, 0.8)","--grad1-1":"#f7f9fc","--grad1-2":"#f7f9fc","--grad2-1":"#f7f9fc","--grad2-2":"#f7f9fc","--grad3-1":"#f7f9fc","--grad3-2":"#f7f9fc","--grad4-1":"#f7f9fc","--grad4-2":"#f7f9fc ","--grad5-1":"#f7f9fc","--grad5-2":"#f7f9fc"}},c=r(43),s=r(7800),u=r(7105),f=r(2978),l=r(7378);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m="theme-base-styles",b="theme-update-styles",h="light";function y(e){return":root {".concat(Object.entries(e).map((function(e){var t=(0,f.Z)(e,2),r=t[0],n=t[1];return"".concat(r,": ").concat(n,";")})).join(""),"}")}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return p(p(p(p(p({},i[e]),n),o),a),{},{"--wrapper-width":"90rem"})}function v(e){var t=e.theme;return(0,s.BX)(l.Fragment,{children:[(0,s.tZ)("style",{id:m,dangerouslySetInnerHTML:{__html:y(g(t))}}),(0,s.tZ)("style",{id:b})]})}function w(e){var t=e.theme,r=e.setBase;return(0,l.useEffect)((function(){if(!document.getElementById(m)){var e=document.createElement("style");e.id=m,document.querySelector("head").append(e);var n=document.createElement("style");n.id=b,document.querySelector("head").append(n)}var o=b;r&&(o=m),document.getElementById(o).innerHTML=y(t)})),null}function O(){var e=(0,l.useState)(h),t=e[0],r=e[1];return(0,l.useEffect)((function(){var e="dark"===(localStorage.getItem("ds-workshop-theme")||window.matchMedia("(prefers-color-scheme: dark)").matches||"light")?"dark":"light";localStorage.setItem("ds-workshop-theme",e),"light"!==e&&r(e)})),(0,s.tZ)(w,{setBase:!0,theme:g(t)})}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e){return(0,s.tZ)("svg",k(k({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-label":"Light Mode",role:"img",fill:"none",stroke:"currentColor"},e),{},{children:(0,s.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}))}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e){return(0,s.tZ)("svg",P(P({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-label":"Dark Mode",role:"img",fill:"none",stroke:"currentColor"},e),{},{children:(0,s.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}))}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $={name:"5wkvlu",styles:"display:inline-flex;appearance:none;background:transparent;box-shadow:none;border:0 none;border-radius:100%;line-height:1;padding:0;margin:0;color:var(--muted);cursor:pointer;transition:color 0.3s ease;&:hover, &:focus{color:var(--link);}"},_={name:"y6qvy2",styles:"height:var(--space-xlarge)"},A={name:"y6qvy2",styles:"height:var(--space-xlarge)"};function D(e){var t=(0,l.useState)("light"),r=t[0],n=t[1];return(0,l.useEffect)((function(){var e="dark"===(localStorage.getItem("ds-workshop-theme")||window.matchMedia("(prefers-color-scheme: dark)").matches||"light")?"dark":"light";function t(e){var t=e.matches?"dark":"light";n(t),localStorage.setItem("ds-workshop-theme",t)}return n(e),localStorage.setItem("ds-workshop-theme",e),window.matchMedia("(prefers-color-scheme: dark)").addListener(t),function(){window.matchMedia("(prefers-color-scheme: dark)").removeListener(t)}}),[n]),(0,s.BX)(l.Fragment,{children:[(0,s.tZ)(w,{theme:i[r]}),(0,s.tZ)("button",M(M({onClick:function(){var e="dark"===r?"light":"dark";n(e),localStorage.setItem("ds-workshop-theme",e)},css:$},e),{},{children:"dark"===r?(0,s.tZ)(j,{css:_}):(0,s.tZ)(C,{css:A})}))]})}var z={name:"4xsnt0",styles:"html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;}button::-moz-focus-inner,[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type='checkbox'],[type='radio']{box-sizing:border-box;padding:0;}[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button{height:auto;}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}[type='search']::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}"};function I(e){var t=e.children;return(0,s.BX)(l.Fragment,{children:[(0,s.tZ)(c.xB,{styles:z}),(0,s.tZ)(O,{}),t]})}},1975:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2833)}])},8038:function(e,t,r){e.exports=r(5639)},8242:function(e,t,r){var n=r(8246);e.exports=function(e){if(Array.isArray(e))return n(e)}},217:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},7105:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},2978:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return o}})},6118:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},3569:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},5169:function(e,t,r){var n=r(8242),o=r(6118),a=r(4009),i=r(3569);e.exports=function(e){return n(e)||o(e)||a(e)||i()}},8702:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function O(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case l:case a:case c:case i:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case h:case b:case s:return e;default:return t}}case o:return t}}}function x(e){return O(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=s,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=h,t.Memo=b,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return x(e)||O(e)===f},t.isConcurrentMode=x,t.isContextConsumer=function(e){return O(e)===u},t.isContextProvider=function(e){return O(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return O(e)===d},t.isFragment=function(e){return O(e)===a},t.isLazy=function(e){return O(e)===h},t.isMemo=function(e){return O(e)===b},t.isPortal=function(e){return O(e)===o},t.isProfiler=function(e){return O(e)===c},t.isStrictMode=function(e){return O(e)===i},t.isSuspense=function(e){return O(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===l||e===c||e===i||e===p||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===b||e.$$typeof===s||e.$$typeof===u||e.$$typeof===d||e.$$typeof===g||e.$$typeof===v||e.$$typeof===w||e.$$typeof===y)},t.typeOf=O},9185:function(e,t,r){"use strict";e.exports=r(8702)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1975),t(2295)}));var r=e.O();_N_E=r}]);