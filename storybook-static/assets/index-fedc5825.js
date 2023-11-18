import{r as u,a as H}from"./index-c013ead5.js";/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},R.apply(this,arguments)}var b;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(b||(b={}));const k="popstate";function ee(e){e===void 0&&(e={});function t(a,r){let{pathname:l,search:i,hash:c}=a.location;return T("",{pathname:l,search:i,hash:c},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(a,r){return typeof r=="string"?r:E(r)}return ne(t,n,null,e)}function x(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function te(){return Math.random().toString(36).substr(2,8)}function A(e,t){return{usr:e.state,key:e.key,idx:t}}function T(e,t,n,a){return n===void 0&&(n=null),R({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?L(t):t,{state:n,key:t&&t.key||a||te()})}function E(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function L(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function ne(e,t,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:l=!1}=a,i=r.history,c=b.Pop,s=null,o=h();o==null&&(o=0,i.replaceState(R({},i.state,{idx:o}),""));function h(){return(i.state||{idx:null}).idx}function d(){c=b.Pop;let f=h(),v=f==null?null:f-o;o=f,s&&s({action:c,location:p.location,delta:v})}function m(f,v){c=b.Push;let g=T(p.location,f,v);n&&n(g,f),o=h()+1;let y=A(g,o),C=p.createHref(g);try{i.pushState(y,"",C)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(C)}l&&s&&s({action:c,location:p.location,delta:1})}function P(f,v){c=b.Replace;let g=T(p.location,f,v);n&&n(g,f),o=h();let y=A(g,o),C=p.createHref(g);i.replaceState(y,"",C),l&&s&&s({action:c,location:p.location,delta:0})}function w(f){let v=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof f=="string"?f:E(f);return x(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let p={get action(){return c},get location(){return e(r,i)},listen(f){if(s)throw new Error("A history only accepts one active listener");return r.addEventListener(k,d),s=f,()=>{r.removeEventListener(k,d),s=null}},createHref(f){return t(r,f)},createURL:w,encodeLocation(f){let v=w(f);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:P,go(f){return i.go(f)}};return p}var _;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_||(_={}));function $(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function ae(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?L(e):e;return{pathname:n?n.startsWith("/")?n:re(n,t):t,search:ie(a),hash:le(r)}}function re(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function I(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function z(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function V(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=L(e):(r=R({},e),x(!r.pathname||!r.pathname.includes("?"),I("?","pathname","search",r)),x(!r.pathname||!r.pathname.includes("#"),I("#","pathname","hash",r)),x(!r.search||!r.search.includes("#"),I("#","search","hash",r)));let l=e===""||r.pathname==="",i=l?"/":r.pathname,c;if(a||i==null)c=n;else{let d=t.length-1;if(i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),d-=1;r.pathname=m.join("/")}c=d>=0?t[d]:"/"}let s=ae(r,c),o=i&&i!=="/"&&i.endsWith("/"),h=(l||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(o||h)&&(s.pathname+="/"),s}const q=e=>e.join("/").replace(/\/\/+/g,"/"),ie=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,le=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,D=["post","put","patch","delete"];new Set(D);const oe=["get",...D];new Set(oe);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j.apply(this,arguments)}const G=u.createContext(null),U=u.createContext(null),M=u.createContext(null),O=u.createContext({outlet:null,matches:[],isDataRoute:!1});function se(e,t){let{relative:n}=t===void 0?{}:t;N()||x(!1);let{basename:a,navigator:r}=u.useContext(U),{hash:l,pathname:i,search:c}=Q(e,{relative:n}),s=i;return a!=="/"&&(s=i==="/"?a:q([a,i])),r.createHref({pathname:s,search:c,hash:l})}function N(){return u.useContext(M)!=null}function W(){return N()||x(!1),u.useContext(M).location}function X(e){u.useContext(U).static||u.useLayoutEffect(e)}function ue(){let{isDataRoute:e}=u.useContext(O);return e?pe():ce()}function ce(){N()||x(!1);let e=u.useContext(G),{basename:t,navigator:n}=u.useContext(U),{matches:a}=u.useContext(O),{pathname:r}=W(),l=JSON.stringify(z(a).map(s=>s.pathnameBase)),i=u.useRef(!1);return X(()=>{i.current=!0}),u.useCallback(function(s,o){if(o===void 0&&(o={}),!i.current)return;if(typeof s=="number"){n.go(s);return}let h=V(s,JSON.parse(l),r,o.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:q([t,h.pathname])),(o.replace?n.replace:n.push)(h,o.state,o)},[t,n,l,r,e])}function Q(e,t){let{relative:n}=t===void 0?{}:t,{matches:a}=u.useContext(O),{pathname:r}=W(),l=JSON.stringify(z(a).map(i=>i.pathnameBase));return u.useMemo(()=>V(e,JSON.parse(l),r,n==="path"),[e,l,r,n])}var Y=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Y||{}),Z=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Z||{});function fe(e){let t=u.useContext(G);return t||x(!1),t}function he(e){let t=u.useContext(O);return t||x(!1),t}function de(e){let t=he(),n=t.matches[t.matches.length-1];return n.route.id||x(!1),n.route.id}function pe(){let{router:e}=fe(Y.UseNavigateStable),t=de(Z.UseNavigateStable),n=u.useRef(!1);return X(()=>{n.current=!0}),u.useCallback(function(r,l){l===void 0&&(l={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,j({fromRouteId:t},l)))},[e,t])}function ve(e){let{basename:t="/",children:n=null,location:a,navigationType:r=b.Pop,navigator:l,static:i=!1}=e;N()&&x(!1);let c=t.replace(/^\/*/,"/"),s=u.useMemo(()=>({basename:c,navigator:l,static:i}),[c,l,i]);typeof a=="string"&&(a=L(a));let{pathname:o="/",search:h="",hash:d="",state:m=null,key:P="default"}=a,w=u.useMemo(()=>{let p=$(o,c);return p==null?null:{location:{pathname:p,search:h,hash:d,state:m,key:P},navigationType:r}},[c,o,h,d,m,P,r]);return w==null?null:u.createElement(U.Provider,{value:s},u.createElement(M.Provider,{children:n,value:w}))}new Promise(()=>{});/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},B.apply(this,arguments)}function me(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,l;for(l=0;l<a.length;l++)r=a[l],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function ge(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ye(e,t){return e.button===0&&(!t||t==="_self")&&!ge(e)}const xe=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Ce="startTransition",J=H[Ce];function Re(e){let{basename:t,children:n,future:a,window:r}=e,l=u.useRef();l.current==null&&(l.current=ee({window:r,v5Compat:!0}));let i=l.current,[c,s]=u.useState({action:i.action,location:i.location}),{v7_startTransition:o}=a||{},h=u.useCallback(d=>{o&&J?J(()=>s(d)):s(d)},[s,o]);return u.useLayoutEffect(()=>i.listen(h),[i,h]),u.createElement(ve,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:i})}const we=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",be=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ue=u.forwardRef(function(t,n){let{onClick:a,relative:r,reloadDocument:l,replace:i,state:c,target:s,to:o,preventScrollReset:h,unstable_viewTransition:d}=t,m=me(t,xe),{basename:P}=u.useContext(U),w,p=!1;if(typeof o=="string"&&be.test(o)&&(w=o,we))try{let y=new URL(window.location.href),C=o.startsWith("//")?new URL(y.protocol+o):new URL(o),S=$(C.pathname,P);C.origin===y.origin&&S!=null?o=S+C.search+C.hash:p=!0}catch{}let f=se(o,{relative:r}),v=Pe(o,{replace:i,state:c,target:s,preventScrollReset:h,relative:r,unstable_viewTransition:d});function g(y){a&&a(y),y.defaultPrevented||v(y)}return u.createElement("a",B({},m,{href:w||f,onClick:p||l?a:g,ref:n,target:s}))});var F;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(F||(F={}));var K;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(K||(K={}));function Pe(e,t){let{target:n,replace:a,state:r,preventScrollReset:l,relative:i,unstable_viewTransition:c}=t===void 0?{}:t,s=ue(),o=W(),h=Q(e,{relative:i});return u.useCallback(d=>{if(ye(d,n)){d.preventDefault();let m=a!==void 0?a:E(o)===E(h);s(e,{replace:m,state:r,preventScrollReset:l,relative:i,unstable_viewTransition:c})}},[o,s,h,a,r,n,e,l,i,c])}export{Re as B,Ue as L};
//# sourceMappingURL=index-fedc5825.js.map
