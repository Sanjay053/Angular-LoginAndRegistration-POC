import './polyfills.server.mjs';
import{A as I1,B as b,C as l1,D as E3,E as P3,F as V3,G as u,H as z,I as A,J as O1,K as T3,L as y,M as X,N as I3,O as O3,P as p,Q as V2,R as B3,S as M2,T as F,U as R3,W as H3,_ as U3,a as A3,b as k3,ba as T2,c as _3,ca as Y,d as D3,da as G3,e as Z2,ea as B1,f as p2,fa as j3,g as _2,h as D2,ha as q3,i as a2,ia as h2,j as T1,ja as K,k as _,ka as W3,l as F2,la as $3,m as S,ma as X3,n as t2,o as J2,p as c1,pa as Y3,q as E2,r as O,s as i2,t as F3,ta as K3,u as g,v as d,va as Q3,w as o2,wa as Z3,x as P2,xa as J3,y as B,z as D}from"./chunk-TII7LVTB.mjs";import{a as o,b as M}from"./chunk-5XUXGTUW.mjs";var c4=()=>{},t3={},y4={},v4=null,S4={mark:c4,measure:c4};try{typeof window<"u"&&(t3=window),typeof document<"u"&&(y4=document),typeof MutationObserver<"u"&&(v4=MutationObserver),typeof performance<"u"&&(S4=performance)}catch{}var{userAgent:l4=""}=t3.navigator||{},J=t3,x=y4,e4=v4,e1=S4,X5=!!J.document,W=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",w4=~l4.indexOf("MSIE")||~l4.indexOf("Trident/"),N="classic",A4="duotone",E="sharp",P="sharp-duotone",Q0=[N,A4,E,P],Z0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},s4={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},J0=["kit"],c6=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,l6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,e6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},s6={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},n6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},a6={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},t6={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},i6={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},k4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},o6=["solid","regular","light","thin","duotone","brands"],_4=[1,2,3,4,5,6,7,8,9,10],r6=_4.concat([11,12,13,14,15,16,17,18,19,20]),I2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},f6=[...Object.keys(a6),...o6,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",I2.GROUP,I2.SWAP_OPACITY,I2.PRIMARY,I2.SECONDARY].concat(_4.map(c=>"".concat(c,"x"))).concat(r6.map(c=>"w-".concat(c))),m6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},u6={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},z6={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},n4={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},j="___FONT_AWESOME___",q1=16,D4="fa",F4="svg-inline--fa",u2="data-fa-i2svg",W1="data-fa-pseudo-element",L6="data-fa-pseudo-element-pending",i3="data-prefix",o3="data-icon",a4="fontawesome-i2svg",d6="async",p6=["HTML","HEAD","STYLE","SCRIPT"],E4=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),P4=[N,E,P];function G2(c){return new Proxy(c,{get(l,e){return e in l?l[e]:l[N]}})}var V4=o({},k4);V4[N]=o(o(o({},k4[N]),s4.kit),s4["kit-duotone"]);var f2=G2(V4),$1=o({},i6);$1[N]=o(o(o({},$1[N]),n4.kit),n4["kit-duotone"]);var H2=G2($1),X1=o({},t6);X1[N]=o(o({},X1[N]),z6.kit);var m2=G2(X1),Y1=o({},n6);Y1[N]=o(o({},Y1[N]),u6.kit);var M6=G2(Y1),h6=c6,T4="fa-layers-text",C6=l6,g6=o({},Z0),Y5=G2(g6),x6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],R1=I2,x2=new Set;Object.keys(H2[N]).map(x2.add.bind(x2));Object.keys(H2[E]).map(x2.add.bind(x2));Object.keys(H2[P]).map(x2.add.bind(x2));var N6=[...J0,...f6],B2=J.FontAwesomeConfig||{};function b6(c){var l=x.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function y6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}x&&typeof x.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[e,s]=l,n=y6(b6(e));n!=null&&(B2[s]=n)});var I4={styleDefault:"solid",familyDefault:"classic",cssPrefix:D4,replacementClass:F4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};B2.familyPrefix&&(B2.cssPrefix=B2.familyPrefix);var N2=o(o({},I4),B2);N2.autoReplaceSvg||(N2.observeMutations=!1);var m={};Object.keys(I4).forEach(c=>{Object.defineProperty(m,c,{enumerable:!0,set:function(l){N2[c]=l,R2.forEach(e=>e(m))},get:function(){return N2[c]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(c){N2.cssPrefix=c,R2.forEach(l=>l(m))},get:function(){return N2.cssPrefix}});J.FontAwesomeConfig=m;var R2=[];function v6(c){return R2.push(c),()=>{R2.splice(R2.indexOf(c),1)}}var Q=q1,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function S6(c){if(!c||!W)return;let l=x.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let e=x.head.childNodes,s=null;for(let n=e.length-1;n>-1;n--){let a=e[n],t=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(s=a)}return x.head.insertBefore(l,s),c}var w6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U2(){let c=12,l="";for(;c-- >0;)l+=w6[Math.random()*62|0];return l}function b2(c){let l=[];for(let e=(c||[]).length>>>0;e--;)l[e]=c[e];return l}function r3(c){return c.classList?b2(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function O4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function A6(c){return Object.keys(c||{}).reduce((l,e)=>l+"".concat(e,'="').concat(O4(c[e]),'" '),"").trim()}function i1(c){return Object.keys(c||{}).reduce((l,e)=>l+"".concat(e,": ").concat(c[e].trim(),";"),"")}function f3(c){return c.size!==R.size||c.x!==R.x||c.y!==R.y||c.rotate!==R.rotate||c.flipX||c.flipY}function k6(c){let{transform:l,containerWidth:e,iconWidth:s}=c,n={transform:"translate(".concat(e/2," 256)")},a="translate(".concat(l.x*32,", ").concat(l.y*32,") "),t="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),i="rotate(".concat(l.rotate," 0 0)"),r={transform:"".concat(a," ").concat(t," ").concat(i)},f={transform:"translate(".concat(s/2*-1," -256)")};return{outer:n,inner:r,path:f}}function _6(c){let{transform:l,width:e=q1,height:s=q1,startCentered:n=!1}=c,a="";return n&&w4?a+="translate(".concat(l.x/Q-e/2,"em, ").concat(l.y/Q-s/2,"em) "):n?a+="translate(calc(-50% + ".concat(l.x/Q,"em), calc(-50% + ").concat(l.y/Q,"em)) "):a+="translate(".concat(l.x/Q,"em, ").concat(l.y/Q,"em) "),a+="scale(".concat(l.size/Q*(l.flipX?-1:1),", ").concat(l.size/Q*(l.flipY?-1:1),") "),a+="rotate(".concat(l.rotate,"deg) "),a}var D6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function B4(){let c=D4,l=F4,e=m.cssPrefix,s=m.replacementClass,n=D6;if(e!==c||s!==l){let a=new RegExp("\\.".concat(c,"\\-"),"g"),t=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(l),"g");n=n.replace(a,".".concat(e,"-")).replace(t,"--".concat(e,"-")).replace(i,".".concat(s))}return n}var t4=!1;function H1(){m.autoAddCss&&!t4&&(S6(B4()),t4=!0)}var F6={mixout(){return{dom:{css:B4,insertCss:H1}}},hooks(){return{beforeDOMElementCreation(){H1()},beforeI2svg(){H1()}}}},q=J||{};q[j]||(q[j]={});q[j].styles||(q[j].styles={});q[j].hooks||(q[j].hooks={});q[j].shims||(q[j].shims=[]);var H=q[j],R4=[],H4=function(){x.removeEventListener("DOMContentLoaded",H4),a1=1,R4.map(c=>c())},a1=!1;W&&(a1=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),a1||x.addEventListener("DOMContentLoaded",H4));function E6(c){W&&(a1?setTimeout(c,0):R4.push(c))}function j2(c){let{tag:l,attributes:e={},children:s=[]}=c;return typeof c=="string"?O4(c):"<".concat(l," ").concat(A6(e),">").concat(s.map(j2).join(""),"</").concat(l,">")}function i4(c,l,e){if(c&&c[l]&&c[l][e])return{prefix:l,iconName:e,icon:c[l][e]}}var P6=function(l,e){return function(s,n,a,t){return l.call(e,s,n,a,t)}},U1=function(l,e,s,n){var a=Object.keys(l),t=a.length,i=n!==void 0?P6(e,n):e,r,f,L;for(s===void 0?(r=1,L=l[a[0]]):(r=0,L=s);r<t;r++)f=a[r],L=i(L,l[f],f,l);return L};function V6(c){let l=[],e=0,s=c.length;for(;e<s;){let n=c.charCodeAt(e++);if(n>=55296&&n<=56319&&e<s){let a=c.charCodeAt(e++);(a&64512)==56320?l.push(((n&1023)<<10)+(a&1023)+65536):(l.push(n),e--)}else l.push(n)}return l}function K1(c){let l=V6(c);return l.length===1?l[0].toString(16):null}function T6(c,l){let e=c.length,s=c.charCodeAt(l),n;return s>=55296&&s<=56319&&e>l+1&&(n=c.charCodeAt(l+1),n>=56320&&n<=57343)?(s-55296)*1024+n-56320+65536:s}function o4(c){return Object.keys(c).reduce((l,e)=>{let s=c[e];return!!s.icon?l[s.iconName]=s.icon:l[e]=s,l},{})}function Q1(c,l){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:s=!1}=e,n=o4(l);typeof H.hooks.addPack=="function"&&!s?H.hooks.addPack(c,o4(l)):H.styles[c]=o(o({},H.styles[c]||{}),n),c==="fas"&&Q1("fa",l)}var{styles:r2,shims:I6}=H,O6={[N]:Object.values(m2[N]),[E]:Object.values(m2[E]),[P]:Object.values(m2[P])},m3=null,U4={},G4={},j4={},q4={},W4={},B6={[N]:Object.keys(f2[N]),[E]:Object.keys(f2[E]),[P]:Object.keys(f2[P])};function R6(c){return~N6.indexOf(c)}function H6(c,l){let e=l.split("-"),s=e[0],n=e.slice(1).join("-");return s===c&&n!==""&&!R6(n)?n:null}var $4=()=>{let c=s=>U1(r2,(n,a,t)=>(n[t]=U1(a,s,{}),n),{});U4=c((s,n,a)=>(n[3]&&(s[n[3]]=a),n[2]&&n[2].filter(i=>typeof i=="number").forEach(i=>{s[i.toString(16)]=a}),s)),G4=c((s,n,a)=>(s[a]=a,n[2]&&n[2].filter(i=>typeof i=="string").forEach(i=>{s[i]=a}),s)),W4=c((s,n,a)=>{let t=n[2];return s[a]=a,t.forEach(i=>{s[i]=a}),s});let l="far"in r2||m.autoFetchSvg,e=U1(I6,(s,n)=>{let a=n[0],t=n[1],i=n[2];return t==="far"&&!l&&(t="fas"),typeof a=="string"&&(s.names[a]={prefix:t,iconName:i}),typeof a=="number"&&(s.unicodes[a.toString(16)]={prefix:t,iconName:i}),s},{names:{},unicodes:{}});j4=e.names,q4=e.unicodes,m3=o1(m.styleDefault,{family:m.familyDefault})};v6(c=>{m3=o1(c.styleDefault,{family:m.familyDefault})});$4();function u3(c,l){return(U4[c]||{})[l]}function U6(c,l){return(G4[c]||{})[l]}function Z(c,l){return(W4[c]||{})[l]}function X4(c){return j4[c]||{prefix:null,iconName:null}}function G6(c){let l=q4[c],e=u3("fas",c);return l||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function c2(){return m3}var z3=()=>({prefix:null,iconName:null,rest:[]});function o1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:e=N}=l,s=f2[e][c],n=H2[e][c]||H2[e][s],a=c in H.styles?c:null;return n||a||null}var j6={[N]:Object.keys(m2[N]),[E]:Object.keys(m2[E]),[P]:Object.keys(m2[P])};function r1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:e=!1}=l,s={[N]:"".concat(m.cssPrefix,"-").concat(N),[E]:"".concat(m.cssPrefix,"-").concat(E),[P]:"".concat(m.cssPrefix,"-").concat(P)},n=null,a=N,t=Q0.filter(r=>r!==A4);t.forEach(r=>{(c.includes(s[r])||c.some(f=>j6[r].includes(f)))&&(a=r)});let i=c.reduce((r,f)=>{let L=H6(m.cssPrefix,f);if(r2[f]?(f=O6[a].includes(f)?M6[a][f]:f,n=f,r.prefix=f):B6[a].indexOf(f)>-1?(n=f,r.prefix=o1(f,{family:a})):L?r.iconName=L:f!==m.replacementClass&&!t.some(C=>f===s[C])&&r.rest.push(f),!e&&r.prefix&&r.iconName){let C=n==="fa"?X4(r.iconName):{},h=Z(r.prefix,r.iconName);C.prefix&&(n=null),r.iconName=C.iconName||h||r.iconName,r.prefix=C.prefix||r.prefix,r.prefix==="far"&&!r2.far&&r2.fas&&!m.autoFetchSvg&&(r.prefix="fas")}return r},z3());return(c.includes("fa-brands")||c.includes("fab"))&&(i.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(i.prefix="fad"),!i.prefix&&a===E&&(r2.fass||m.autoFetchSvg)&&(i.prefix="fass",i.iconName=Z(i.prefix,i.iconName)||i.iconName),!i.prefix&&a===P&&(r2.fasds||m.autoFetchSvg)&&(i.prefix="fasds",i.iconName=Z(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||n==="fa")&&(i.prefix=c2()||"fas"),i}var Z1=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,e=new Array(l),s=0;s<l;s++)e[s]=arguments[s];let n=e.reduce(this._pullDefinitions,{});Object.keys(n).forEach(a=>{this.definitions[a]=o(o({},this.definitions[a]||{}),n[a]),Q1(a,n[a]);let t=m2[N][a];t&&Q1(t,n[a]),$4()})}reset(){this.definitions={}}_pullDefinitions(l,e){let s=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(s).map(n=>{let{prefix:a,iconName:t,icon:i}=s[n],r=i[2];l[a]||(l[a]={}),r.length>0&&r.forEach(f=>{typeof f=="string"&&(l[a][f]=i)}),l[a][t]=i}),l}},r4=[],C2={},g2={},q6=Object.keys(g2);function W6(c,l){let{mixoutsTo:e}=l;return r4=c,C2={},Object.keys(g2).forEach(s=>{q6.indexOf(s)===-1&&delete g2[s]}),r4.forEach(s=>{let n=s.mixout?s.mixout():{};if(Object.keys(n).forEach(a=>{typeof n[a]=="function"&&(e[a]=n[a]),typeof n[a]=="object"&&Object.keys(n[a]).forEach(t=>{e[a]||(e[a]={}),e[a][t]=n[a][t]})}),s.hooks){let a=s.hooks();Object.keys(a).forEach(t=>{C2[t]||(C2[t]=[]),C2[t].push(a[t])})}s.provides&&s.provides(g2)}),e}function J1(c,l){for(var e=arguments.length,s=new Array(e>2?e-2:0),n=2;n<e;n++)s[n-2]=arguments[n];return(C2[c]||[]).forEach(t=>{l=t.apply(null,[l,...s])}),l}function z2(c){for(var l=arguments.length,e=new Array(l>1?l-1:0),s=1;s<l;s++)e[s-1]=arguments[s];(C2[c]||[]).forEach(a=>{a.apply(null,e)})}function l2(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return g2[c]?g2[c].apply(null,l):void 0}function c3(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,e=c.prefix||c2();if(l)return l=Z(e,l)||l,i4(Y4.definitions,e,l)||i4(H.styles,e,l)}var Y4=new Z1,$6=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,z2("noAuto")},X6={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(z2("beforeI2svg",c),l2("pseudoElements2svg",c),l2("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,E6(()=>{K6({autoReplaceSvgRoot:l}),z2("watch",c)})}},Y6={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:Z(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=o1(c[0]);return{prefix:e,iconName:Z(e,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(m.cssPrefix,"-"))>-1||c.match(h6))){let l=r1(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||c2(),iconName:Z(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=c2();return{prefix:l,iconName:Z(l,c)||c}}}},V={noAuto:$6,config:m,dom:X6,parse:Y6,library:Y4,findIconDefinition:c3,toHtml:j2},K6=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=x}=c;(Object.keys(H.styles).length>0||m.autoFetchSvg)&&W&&m.autoReplaceSvg&&V.dom.i2svg({node:l})};function f1(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(e=>j2(e))}}),Object.defineProperty(c,"node",{get:function(){if(!W)return;let e=x.createElement("div");return e.innerHTML=c.html,e.children}}),c}function Q6(c){let{children:l,main:e,mask:s,attributes:n,styles:a,transform:t}=c;if(f3(t)&&e.found&&!s.found){let{width:i,height:r}=e,f={x:i/r/2,y:.5};n.style=i1(M(o({},a),{"transform-origin":"".concat(f.x+t.x/16,"em ").concat(f.y+t.y/16,"em")}))}return[{tag:"svg",attributes:n,children:l}]}function Z6(c){let{prefix:l,iconName:e,children:s,attributes:n,symbol:a}=c,t=a===!0?"".concat(l,"-").concat(m.cssPrefix,"-").concat(e):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(o({},n),{id:t}),children:s}]}]}function L3(c){let{icons:{main:l,mask:e},prefix:s,iconName:n,transform:a,symbol:t,title:i,maskId:r,titleId:f,extra:L,watchable:C=!1}=c,{width:h,height:w}=e.found?e:l,$=s==="fak",n2=[m.replacementClass,n?"".concat(m.cssPrefix,"-").concat(n):""].filter(d2=>L.classes.indexOf(d2)===-1).filter(d2=>d2!==""||!!d2).concat(L.classes).join(" "),T={children:[],attributes:M(o({},L.attributes),{"data-prefix":s,"data-icon":n,class:n2,role:L.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(w)})},G=$&&!~L.classes.indexOf("fa-fw")?{width:"".concat(h/w*16*.0625,"em")}:{};C&&(T.attributes[u2]=""),i&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(f||U2())},children:[i]}),delete T.attributes.title);let k=M(o({},T),{prefix:s,iconName:n,main:l,mask:e,maskId:r,transform:a,symbol:t,styles:o(o({},G),L.styles)}),{children:I,attributes:L2}=e.found&&l.found?l2("generateAbstractMask",k)||{children:[],attributes:{}}:l2("generateAbstractIcon",k)||{children:[],attributes:{}};return k.children=I,k.attributes=L2,t?Z6(k):Q6(k)}function f4(c){let{content:l,width:e,height:s,transform:n,title:a,extra:t,watchable:i=!1}=c,r=M(o(o({},t.attributes),a?{title:a}:{}),{class:t.classes.join(" ")});i&&(r[u2]="");let f=o({},t.styles);f3(n)&&(f.transform=_6({transform:n,startCentered:!0,width:e,height:s}),f["-webkit-transform"]=f.transform);let L=i1(f);L.length>0&&(r.style=L);let C=[];return C.push({tag:"span",attributes:r,children:[l]}),a&&C.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),C}function J6(c){let{content:l,title:e,extra:s}=c,n=M(o(o({},s.attributes),e?{title:e}:{}),{class:s.classes.join(" ")}),a=i1(s.styles);a.length>0&&(n.style=a);let t=[];return t.push({tag:"span",attributes:n,children:[l]}),e&&t.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),t}var{styles:G1}=H;function l3(c){let l=c[0],e=c[1],[s]=c.slice(4),n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(R1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(R1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(R1.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:l,height:e,icon:n}}var c8={found:!1,width:512,height:512};function l8(c,l){!E4&&!m.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function e3(c,l){let e=l;return l==="fa"&&m.styleDefault!==null&&(l=c2()),new Promise((s,n)=>{if(e==="fa"){let a=X4(c)||{};c=a.iconName||c,l=a.prefix||l}if(c&&l&&G1[l]&&G1[l][c]){let a=G1[l][c];return s(l3(a))}l8(c,l),s(M(o({},c8),{icon:m.showMissingIcons&&c?l2("missingIconAbstract")||{}:{}}))})}var m4=()=>{},s3=m.measurePerformance&&e1&&e1.mark&&e1.measure?e1:{mark:m4,measure:m4},O2='FA "6.6.0"',e8=c=>(s3.mark("".concat(O2," ").concat(c," begins")),()=>K4(c)),K4=c=>{s3.mark("".concat(O2," ").concat(c," ends")),s3.measure("".concat(O2," ").concat(c),"".concat(O2," ").concat(c," begins"),"".concat(O2," ").concat(c," ends"))},d3={begin:e8,end:K4},s1=()=>{};function u4(c){return typeof(c.getAttribute?c.getAttribute(u2):null)=="string"}function s8(c){let l=c.getAttribute?c.getAttribute(i3):null,e=c.getAttribute?c.getAttribute(o3):null;return l&&e}function n8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(m.replacementClass)}function a8(){return m.autoReplaceSvg===!0?n1.replace:n1[m.autoReplaceSvg]||n1.replace}function t8(c){return x.createElementNS("http://www.w3.org/2000/svg",c)}function i8(c){return x.createElement(c)}function Q4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:e=c.tag==="svg"?t8:i8}=l;if(typeof c=="string")return x.createTextNode(c);let s=e(c.tag);return Object.keys(c.attributes||[]).forEach(function(a){s.setAttribute(a,c.attributes[a])}),(c.children||[]).forEach(function(a){s.appendChild(Q4(a,{ceFn:e}))}),s}function o8(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var n1={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(e=>{l.parentNode.insertBefore(Q4(e),l)}),l.getAttribute(u2)===null&&m.keepOriginalSource){let e=x.createComment(o8(l));l.parentNode.replaceChild(e,l)}else l.remove()},nest:function(c){let l=c[0],e=c[1];if(~r3(l).indexOf(m.replacementClass))return n1.replace(c);let s=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){let a=e[0].attributes.class.split(" ").reduce((t,i)=>(i===m.replacementClass||i.match(s)?t.toSvg.push(i):t.toNode.push(i),t),{toNode:[],toSvg:[]});e[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",a.toNode.join(" "))}let n=e.map(a=>j2(a)).join(`
`);l.setAttribute(u2,""),l.innerHTML=n}};function z4(c){c()}function Z4(c,l){let e=typeof l=="function"?l:s1;if(c.length===0)e();else{let s=z4;m.mutateApproach===d6&&(s=J.requestAnimationFrame||z4),s(()=>{let n=a8(),a=d3.begin("mutate");c.map(n),a(),e()})}}var p3=!1;function J4(){p3=!0}function n3(){p3=!1}var t1=null;function L4(c){if(!e4||!m.observeMutations)return;let{treeCallback:l=s1,nodeCallback:e=s1,pseudoElementsCallback:s=s1,observeMutationsRoot:n=x}=c;t1=new e4(a=>{if(p3)return;let t=c2();b2(a).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!u4(i.addedNodes[0])&&(m.searchPseudoElements&&s(i.target),l(i.target)),i.type==="attributes"&&i.target.parentNode&&m.searchPseudoElements&&s(i.target.parentNode),i.type==="attributes"&&u4(i.target)&&~x6.indexOf(i.attributeName))if(i.attributeName==="class"&&s8(i.target)){let{prefix:r,iconName:f}=r1(r3(i.target));i.target.setAttribute(i3,r||t),f&&i.target.setAttribute(o3,f)}else n8(i.target)&&e(i.target)})}),W&&t1.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function r8(){t1&&t1.disconnect()}function f8(c){let l=c.getAttribute("style"),e=[];return l&&(e=l.split(";").reduce((s,n)=>{let a=n.split(":"),t=a[0],i=a.slice(1);return t&&i.length>0&&(s[t]=i.join(":").trim()),s},{})),e}function m8(c){let l=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",n=r1(r3(c));return n.prefix||(n.prefix=c2()),l&&e&&(n.prefix=l,n.iconName=e),n.iconName&&n.prefix||(n.prefix&&s.length>0&&(n.iconName=U6(n.prefix,c.innerText)||u3(n.prefix,K1(c.innerText))),!n.iconName&&m.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function u8(c){let l=b2(c.attributes).reduce((n,a)=>(n.name!=="class"&&n.name!=="style"&&(n[a.name]=a.value),n),{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return m.autoA11y&&(e?l["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(s||U2()):(l["aria-hidden"]="true",l.focusable="false")),l}function z8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function d4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:e,prefix:s,rest:n}=m8(c),a=u8(c),t=J1("parseNodeAttributes",{},c),i=l.styleParser?f8(c):[];return o({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:i,attributes:a}},t)}var{styles:L8}=H;function c0(c){let l=m.autoReplaceSvg==="nest"?d4(c,{styleParser:!1}):d4(c);return~l.extra.classes.indexOf(T4)?l2("generateLayersText",c,l):l2("generateSvgReplacementMutation",c,l)}var U=new Set;P4.map(c=>{U.add("fa-".concat(c))});Object.keys(f2[N]).map(U.add.bind(U));Object.keys(f2[E]).map(U.add.bind(U));Object.keys(f2[P]).map(U.add.bind(U));U=[...U];function p4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();let e=x.documentElement.classList,s=L=>e.add("".concat(a4,"-").concat(L)),n=L=>e.remove("".concat(a4,"-").concat(L)),a=m.autoFetchSvg?U:P4.map(L=>"fa-".concat(L)).concat(Object.keys(L8));a.includes("fa")||a.push("fa");let t=[".".concat(T4,":not([").concat(u2,"])")].concat(a.map(L=>".".concat(L,":not([").concat(u2,"])"))).join(", ");if(t.length===0)return Promise.resolve();let i=[];try{i=b2(c.querySelectorAll(t))}catch{}if(i.length>0)s("pending"),n("complete");else return Promise.resolve();let r=d3.begin("onTree"),f=i.reduce((L,C)=>{try{let h=c0(C);h&&L.push(h)}catch(h){E4||h.name==="MissingIcon"&&console.error(h)}return L},[]);return new Promise((L,C)=>{Promise.all(f).then(h=>{Z4(h,()=>{s("active"),s("complete"),n("pending"),typeof l=="function"&&l(),r(),L()})}).catch(h=>{r(),C(h)})})}function d8(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;c0(c).then(e=>{e&&Z4([e],l)})}function p8(c){return function(l){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(l||{}).icon?l:c3(l||{}),{mask:n}=e;return n&&(n=(n||{}).icon?n:c3(n||{})),c(s,M(o({},e),{mask:n}))}}var M8=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=R,symbol:s=!1,mask:n=null,maskId:a=null,title:t=null,titleId:i=null,classes:r=[],attributes:f={},styles:L={}}=l;if(!c)return;let{prefix:C,iconName:h,icon:w}=c;return f1(o({type:"icon"},c),()=>(z2("beforeDOMElementCreation",{iconDefinition:c,params:l}),m.autoA11y&&(t?f["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(i||U2()):(f["aria-hidden"]="true",f.focusable="false")),L3({icons:{main:l3(w),mask:n?l3(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:h,transform:o(o({},R),e),symbol:s,title:t,maskId:a,titleId:i,extra:{attributes:f,styles:L,classes:r}})))},h8={mixout(){return{icon:p8(M8)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=p4,c.nodeCallback=d8,c}}},provides(c){c.i2svg=function(l){let{node:e=x,callback:s=()=>{}}=l;return p4(e,s)},c.generateSvgReplacementMutation=function(l,e){let{iconName:s,title:n,titleId:a,prefix:t,transform:i,symbol:r,mask:f,maskId:L,extra:C}=e;return new Promise((h,w)=>{Promise.all([e3(s,t),f.iconName?e3(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then($=>{let[n2,T]=$;h([l,L3({icons:{main:n2,mask:T},prefix:t,iconName:s,transform:i,symbol:r,maskId:L,title:n,titleId:a,extra:C,watchable:!0})])}).catch(w)})},c.generateAbstractIcon=function(l){let{children:e,attributes:s,main:n,transform:a,styles:t}=l,i=i1(t);i.length>0&&(s.style=i);let r;return f3(a)&&(r=l2("generateAbstractTransformGrouping",{main:n,transform:a,containerWidth:n.width,iconWidth:n.width})),e.push(r||n.icon),{children:e,attributes:s}}}},C8={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:e=[]}=l;return f1({type:"layer"},()=>{z2("beforeDOMElementCreation",{assembler:c,params:l});let s=[];return c(n=>{Array.isArray(n)?n.map(a=>{s=s.concat(a.abstract)}):s=s.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...e].join(" ")},children:s}]})}}}},g8={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:e=null,classes:s=[],attributes:n={},styles:a={}}=l;return f1({type:"counter",content:c},()=>(z2("beforeDOMElementCreation",{content:c,params:l}),J6({content:c.toString(),title:e,extra:{attributes:n,styles:a,classes:["".concat(m.cssPrefix,"-layers-counter"),...s]}})))}}}},x8={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=R,title:s=null,classes:n=[],attributes:a={},styles:t={}}=l;return f1({type:"text",content:c},()=>(z2("beforeDOMElementCreation",{content:c,params:l}),f4({content:c,transform:o(o({},R),e),title:s,extra:{attributes:a,styles:t,classes:["".concat(m.cssPrefix,"-layers-text"),...n]}})))}}},provides(c){c.generateLayersText=function(l,e){let{title:s,transform:n,extra:a}=e,t=null,i=null;if(w4){let r=parseInt(getComputedStyle(l).fontSize,10),f=l.getBoundingClientRect();t=f.width/r,i=f.height/r}return m.autoA11y&&!s&&(a.attributes["aria-hidden"]="true"),Promise.resolve([l,f4({content:l.innerHTML,width:t,height:i,transform:n,title:s,extra:a,watchable:!0})])}}},N8=new RegExp('"',"ug"),M4=[1105920,1112319],h4=o(o(o({FontAwesome:{normal:"fas",400:"fas"}},s6),e6),m6),a3=Object.keys(h4).reduce((c,l)=>(c[l.toLowerCase()]=h4[l],c),{}),b8=Object.keys(a3).reduce((c,l)=>{let e=a3[l];return c[l]=e[900]||[...Object.entries(e)][0][1],c},{});function y8(c){let l=c.replace(N8,""),e=T6(l,0),s=e>=M4[0]&&e<=M4[1],n=l.length===2?l[0]===l[1]:!1;return{value:K1(n?l[0]:l),isSecondary:s||n}}function v8(c,l){let e=c.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(l),n=isNaN(s)?"normal":s;return(a3[e]||{})[n]||b8[e]}function C4(c,l){let e="".concat(L6).concat(l.replace(":","-"));return new Promise((s,n)=>{if(c.getAttribute(e)!==null)return s();let t=b2(c.children).filter(h=>h.getAttribute(W1)===l)[0],i=J.getComputedStyle(c,l),r=i.getPropertyValue("font-family"),f=r.match(C6),L=i.getPropertyValue("font-weight"),C=i.getPropertyValue("content");if(t&&!f)return c.removeChild(t),s();if(f&&C!=="none"&&C!==""){let h=i.getPropertyValue("content"),w=v8(r,L),{value:$,isSecondary:n2}=y8(h),T=f[0].startsWith("FontAwesome"),G=u3(w,$),k=G;if(T){let I=G6($);I.iconName&&I.prefix&&(G=I.iconName,w=I.prefix)}if(G&&!n2&&(!t||t.getAttribute(i3)!==w||t.getAttribute(o3)!==k)){c.setAttribute(e,k),t&&c.removeChild(t);let I=z8(),{extra:L2}=I;L2.attributes[W1]=l,e3(G,w).then(d2=>{let Y0=L3(M(o({},I),{icons:{main:d2,mask:z3()},prefix:w,iconName:k,extra:L2,watchable:!0})),V1=x.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(V1,c.firstChild):c.appendChild(V1),V1.outerHTML=Y0.map(K0=>j2(K0)).join(`
`),c.removeAttribute(e),s()}).catch(n)}else s()}else s()})}function S8(c){return Promise.all([C4(c,"::before"),C4(c,"::after")])}function w8(c){return c.parentNode!==document.head&&!~p6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(W1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function g4(c){if(W)return new Promise((l,e)=>{let s=b2(c.querySelectorAll("*")).filter(w8).map(S8),n=d3.begin("searchPseudoElements");J4(),Promise.all(s).then(()=>{n(),n3(),l()}).catch(()=>{n(),n3(),e()})})}var A8={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=g4,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:e=x}=l;m.searchPseudoElements&&g4(e)}}},x4=!1,k8={mixout(){return{dom:{unwatch(){J4(),x4=!0}}}},hooks(){return{bootstrap(){L4(J1("mutationObserverCallbacks",{}))},noAuto(){r8()},watch(c){let{observeMutationsRoot:l}=c;x4?n3():L4(J1("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},N4=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((e,s)=>{let n=s.toLowerCase().split("-"),a=n[0],t=n.slice(1).join("-");if(a&&t==="h")return e.flipX=!0,e;if(a&&t==="v")return e.flipY=!0,e;if(t=parseFloat(t),isNaN(t))return e;switch(a){case"grow":e.size=e.size+t;break;case"shrink":e.size=e.size-t;break;case"left":e.x=e.x-t;break;case"right":e.x=e.x+t;break;case"up":e.y=e.y-t;break;case"down":e.y=e.y+t;break;case"rotate":e.rotate=e.rotate+t;break}return e},l)},_8={mixout(){return{parse:{transform:c=>N4(c)}}},hooks(){return{parseNodeAttributes(c,l){let e=l.getAttribute("data-fa-transform");return e&&(c.transform=N4(e)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:e,transform:s,containerWidth:n,iconWidth:a}=l,t={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(s.x*32,", ").concat(s.y*32,") "),r="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),f="rotate(".concat(s.rotate," 0 0)"),L={transform:"".concat(i," ").concat(r," ").concat(f)},C={transform:"translate(".concat(a/2*-1," -256)")},h={outer:t,inner:L,path:C};return{tag:"g",attributes:o({},h.outer),children:[{tag:"g",attributes:o({},h.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),h.path)}]}]}}}},j1={x:0,y:0,width:"100%",height:"100%"};function b4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function D8(c){return c.tag==="g"?c.children:[c]}var F8={hooks(){return{parseNodeAttributes(c,l){let e=l.getAttribute("data-fa-mask"),s=e?r1(e.split(" ").map(n=>n.trim())):z3();return s.prefix||(s.prefix=c2()),c.mask=s,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:e,attributes:s,main:n,mask:a,maskId:t,transform:i}=l,{width:r,icon:f}=n,{width:L,icon:C}=a,h=k6({transform:i,containerWidth:L,iconWidth:r}),w={tag:"rect",attributes:M(o({},j1),{fill:"white"})},$=f.children?{children:f.children.map(b4)}:{},n2={tag:"g",attributes:o({},h.inner),children:[b4(o({tag:f.tag,attributes:o(o({},f.attributes),h.path)},$))]},T={tag:"g",attributes:o({},h.outer),children:[n2]},G="mask-".concat(t||U2()),k="clip-".concat(t||U2()),I={tag:"mask",attributes:M(o({},j1),{id:G,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,T]},L2={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:D8(C)},I]};return e.push(L2,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(G,")")},j1)}),{children:e,attributes:s}}}},E8={provides(c){let l=!1;J.matchMedia&&(l=J.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let e=[],s={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:M(o({},s),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let a=M(o({},n),{attributeName:"opacity"}),t={tag:"circle",attributes:M(o({},s),{cx:"256",cy:"364",r:"28"}),children:[]};return l||t.children.push({tag:"animate",attributes:M(o({},n),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(o({},a),{values:"1;0;1;1;0;1;"})}),e.push(t),e.push({tag:"path",attributes:M(o({},s),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:M(o({},a),{values:"1;0;0;0;0;1;"})}]}),l||e.push({tag:"path",attributes:M(o({},s),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(o({},a),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},P8={hooks(){return{parseNodeAttributes(c,l){let e=l.getAttribute("data-fa-symbol"),s=e===null?!1:e===""?!0:e;return c.symbol=s,c}}}},V8=[F6,h8,C8,g8,x8,A8,k8,_8,F8,E8,P8];W6(V8,{mixoutsTo:V});var K5=V.noAuto,l0=V.config,Q5=V.library,e0=V.dom,s0=V.parse,Z5=V.findIconDefinition,J5=V.toHtml,n0=V.icon,c7=V.layer,T8=V.text,I8=V.counter;var O8=["*"],B8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},R8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},H8=c=>{let l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(e=>l[e]?e:null).filter(e=>e)},M3=new WeakSet,a0="fa-auto-css";function U8(c,l){if(!l.autoAddCss||M3.has(c))return;if(c.getElementById(a0)!=null){l.autoAddCss=!1,M3.add(c);return}let e=c.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",a0),e.innerHTML=e0.css();let s=c.head.childNodes,n=null;for(let a=s.length-1;a>-1;a--){let t=s[a],i=t.nodeName.toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=t)}c.head.insertBefore(e,n),l.autoAddCss=!1,M3.add(c)}var G8=c=>c.prefix!==void 0&&c.iconName!==void 0,j8=(c,l)=>G8(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},q8=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){l0.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275prov=_2({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),W8=(()=>{class c{constructor(){this.definitions={}}addIcons(...e){for(let s of e){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let n of s.icon[2])typeof n=="string"&&(this.definitions[s.prefix][n]=s)}}addIconPacks(...e){for(let s of e){let n=Object.keys(s).map(a=>s[a]);this.addIcons(...n)}}getIconDefinition(e,s){return e in this.definitions&&s in this.definitions[e]?this.definitions[e][s]:null}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275prov=_2({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),$8=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275dir=S({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[t2]})}}return c})(),X8=(()=>{class c{constructor(e,s){this.renderer=e,this.elementRef=s}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}static{this.\u0275fac=function(s){return new(s||c)(d(o2),d(i2))}}static{this.\u0275cmp=_({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[t2,F],ngContentSelectors:O8,decls:1,vars:0,template:function(s,n){s&1&&(I3(),O3(0))},encapsulation:2})}}return c})(),t0=(()=>{class c{constructor(e,s,n,a,t){this.sanitizer=e,this.config=s,this.iconLibrary=n,this.stackItem=a,this.document=T1(j3),t!=null&&a==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){R8();return}if(e){let s=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(s!=null){let n=this.buildParams();U8(this.document,this.config);let a=n0(s,n);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(a.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let s=j8(e,this.config.defaultPrefix);if("icon"in s)return s;let n=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return n??(B8(s),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},s=typeof this.transform=="string"?s0.transform(this.transform):this.transform;return{title:this.title,transform:s,classes:H8(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(s){return new(s||c)(d($3),d(q8),d(W8),d($8,8),d(X8,8))}}static{this.\u0275cmp=_({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,n){s&2&&(T3("innerHTML",n.renderedIconHTML,F3),I1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[t2,F],decls:0,vars:0,template:function(s,n){},encapsulation:2})}}return c})();var m1=(()=>{class c{static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=F2({type:c})}static{this.\u0275inj=D2({})}}return c})();var u1=class c{static \u0275fac=function(e){return new(e||c)};static \u0275cmp=_({type:c,selectors:[["app-root"]],standalone:!0,features:[F],decls:1,vars:0,template:function(e,s){e&1&&A(0,"router-outlet")},dependencies:[K3,m1,K]})};var i0={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};var K8={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},o0=K8;var r0={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};var C0=(()=>{class c{constructor(e,s){this._renderer=e,this._elementRef=s,this.onChange=n=>{},this.onTouched=()=>{}}setProperty(e,s){this._renderer.setProperty(this._elementRef.nativeElement,e,s)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static{this.\u0275fac=function(s){return new(s||c)(d(o2),d(i2))}}static{this.\u0275dir=S({type:c})}}return c})(),b3=(()=>{class c extends C0{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=E2(c)))(n||c)}})()}static{this.\u0275dir=S({type:c,features:[B]})}}return c})(),b1=new a2("");var Q8={provide:b1,useExisting:p2(()=>k2),multi:!0};function Z8(){let c=B1()?B1().getUserAgent():"";return/android (\d+)/.test(c.toLowerCase())}var J8=new a2(""),k2=(()=>{class c extends C0{constructor(e,s,n){super(e,s),this._compositionMode=n,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Z8())}writeValue(e){let s=e??"";this.setProperty("value",s)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static{this.\u0275fac=function(s){return new(s||c)(d(o2),d(i2),d(J8,8))}}static{this.\u0275dir=S({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(s,n){s&1&&y("input",function(t){return n._handleInput(t.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(t){return n._compositionEnd(t.target.value)})},features:[M2([Q8]),B]})}}return c})();function e2(c){return c==null||(typeof c=="string"||Array.isArray(c))&&c.length===0}function g0(c){return c!=null&&typeof c.length=="number"}var x0=new a2(""),N0=new a2(""),c5=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,v=class{static min(l){return l5(l)}static max(l){return e5(l)}static required(l){return s5(l)}static requiredTrue(l){return n5(l)}static email(l){return a5(l)}static minLength(l){return t5(l)}static maxLength(l){return i5(l)}static pattern(l){return o5(l)}static nullValidator(l){return b0(l)}static compose(l){return k0(l)}static composeAsync(l){return D0(l)}};function l5(c){return l=>{if(e2(l.value)||e2(c))return null;let e=parseFloat(l.value);return!isNaN(e)&&e<c?{min:{min:c,actual:l.value}}:null}}function e5(c){return l=>{if(e2(l.value)||e2(c))return null;let e=parseFloat(l.value);return!isNaN(e)&&e>c?{max:{max:c,actual:l.value}}:null}}function s5(c){return e2(c.value)?{required:!0}:null}function n5(c){return c.value===!0?null:{required:!0}}function a5(c){return e2(c.value)||c5.test(c.value)?null:{email:!0}}function t5(c){return l=>e2(l.value)||!g0(l.value)?null:l.value.length<c?{minlength:{requiredLength:c,actualLength:l.value.length}}:null}function i5(c){return l=>g0(l.value)&&l.value.length>c?{maxlength:{requiredLength:c,actualLength:l.value.length}}:null}function o5(c){if(!c)return b0;let l,e;return typeof c=="string"?(e="",c.charAt(0)!=="^"&&(e+="^"),e+=c,c.charAt(c.length-1)!=="$"&&(e+="$"),l=new RegExp(e)):(e=c.toString(),l=c),s=>{if(e2(s.value))return null;let n=s.value;return l.test(n)?null:{pattern:{requiredPattern:e,actualValue:n}}}}function b0(c){return null}function y0(c){return c!=null}function v0(c){return H3(c)?k3(c):c}function S0(c){let l={};return c.forEach(e=>{l=e!=null?o(o({},l),e):l}),Object.keys(l).length===0?null:l}function w0(c,l){return l.map(e=>e(c))}function r5(c){return!c.validate}function A0(c){return c.map(l=>r5(l)?l:e=>l.validate(e))}function k0(c){if(!c)return null;let l=c.filter(y0);return l.length==0?null:function(e){return S0(w0(e,l))}}function _0(c){return c!=null?k0(A0(c)):null}function D0(c){if(!c)return null;let l=c.filter(y0);return l.length==0?null:function(e){let s=w0(e,l).map(v0);return D3(s).pipe(_3(S0))}}function F0(c){return c!=null?D0(A0(c)):null}function f0(c,l){return c===null?[l]:Array.isArray(c)?[...c,l]:[c,l]}function E0(c){return c._rawValidators}function P0(c){return c._rawAsyncValidators}function h3(c){return c?Array.isArray(c)?c:[c]:[]}function p1(c,l){return Array.isArray(c)?c.includes(l):c===l}function m0(c,l){let e=h3(l);return h3(c).forEach(n=>{p1(e,n)||e.push(n)}),e}function u0(c,l){return h3(l).filter(e=>!p1(c,e))}var M1=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(l){this._rawValidators=l||[],this._composedValidatorFn=_0(this._rawValidators)}_setAsyncValidators(l){this._rawAsyncValidators=l||[],this._composedAsyncValidatorFn=F0(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(l){this._onDestroyCallbacks.push(l)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(l=>l()),this._onDestroyCallbacks=[]}reset(l=void 0){this.control&&this.control.reset(l)}hasError(l,e){return this.control?this.control.hasError(l,e):!1}getError(l,e){return this.control?this.control.getError(l,e):null}},w2=class extends M1{get formDirective(){return null}get path(){return null}},Y2=class extends M1{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},h1=class{constructor(l){this._cd=l}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},f5={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},O7=M(o({},f5),{"[class.ng-submitted]":"isSubmitted"}),y1=(()=>{class c extends h1{constructor(e){super(e)}static{this.\u0275fac=function(s){return new(s||c)(d(Y2,2))}}static{this.\u0275dir=S({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(s,n){s&2&&l1("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},features:[B]})}}return c})(),v1=(()=>{class c extends h1{constructor(e){super(e)}static{this.\u0275fac=function(s){return new(s||c)(d(w2,10))}}static{this.\u0275dir=S({type:c,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(s,n){s&2&&l1("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},features:[B]})}}return c})();var q2="VALID",L1="INVALID",v2="PENDING",W2="DISABLED",s2=class{},C1=class extends s2{constructor(l,e){super(),this.value=l,this.source=e}},$2=class extends s2{constructor(l,e){super(),this.pristine=l,this.source=e}},X2=class extends s2{constructor(l,e){super(),this.touched=l,this.source=e}},S2=class extends s2{constructor(l,e){super(),this.status=l,this.source=e}},C3=class extends s2{constructor(l){super(),this.source=l}},g3=class extends s2{constructor(l){super(),this.source=l}};function y3(c){return(S1(c)?c.validators:c)||null}function m5(c){return Array.isArray(c)?_0(c):c||null}function v3(c,l){return(S1(l)?l.asyncValidators:c)||null}function u5(c){return Array.isArray(c)?F0(c):c||null}function S1(c){return c!=null&&!Array.isArray(c)&&typeof c=="object"}function V0(c,l,e){let s=c.controls;if(!(l?Object.keys(s):s).length)throw new Z2(1e3,"");if(!s[e])throw new Z2(1001,"")}function T0(c,l,e){c._forEachChild((s,n)=>{if(e[n]===void 0)throw new Z2(1002,"")})}var A2=class{constructor(l,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=T2(()=>this.statusReactive()),this.statusReactive=P2(void 0),this._pristine=T2(()=>this.pristineReactive()),this.pristineReactive=P2(!0),this._touched=T2(()=>this.touchedReactive()),this.touchedReactive=P2(!1),this._events=new A3,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(l),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(l){this._rawValidators=this._composedValidatorFn=l}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(l){this._rawAsyncValidators=this._composedAsyncValidatorFn=l}get parent(){return this._parent}get status(){return Y(this.statusReactive)}set status(l){Y(()=>this.statusReactive.set(l))}get valid(){return this.status===q2}get invalid(){return this.status===L1}get pending(){return this.status==v2}get disabled(){return this.status===W2}get enabled(){return this.status!==W2}get pristine(){return Y(this.pristineReactive)}set pristine(l){Y(()=>this.pristineReactive.set(l))}get dirty(){return!this.pristine}get touched(){return Y(this.touchedReactive)}set touched(l){Y(()=>this.touchedReactive.set(l))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(l){this._assignValidators(l)}setAsyncValidators(l){this._assignAsyncValidators(l)}addValidators(l){this.setValidators(m0(l,this._rawValidators))}addAsyncValidators(l){this.setAsyncValidators(m0(l,this._rawAsyncValidators))}removeValidators(l){this.setValidators(u0(l,this._rawValidators))}removeAsyncValidators(l){this.setAsyncValidators(u0(l,this._rawAsyncValidators))}hasValidator(l){return p1(this._rawValidators,l)}hasAsyncValidator(l){return p1(this._rawAsyncValidators,l)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(l={}){let e=this.touched===!1;this.touched=!0;let s=l.sourceControl??this;this._parent&&!l.onlySelf&&this._parent.markAsTouched(M(o({},l),{sourceControl:s})),e&&l.emitEvent!==!1&&this._events.next(new X2(!0,s))}markAllAsTouched(l={}){this.markAsTouched({onlySelf:!0,emitEvent:l.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(l))}markAsUntouched(l={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let s=l.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:l.emitEvent,sourceControl:s})}),this._parent&&!l.onlySelf&&this._parent._updateTouched(l,s),e&&l.emitEvent!==!1&&this._events.next(new X2(!1,s))}markAsDirty(l={}){let e=this.pristine===!0;this.pristine=!1;let s=l.sourceControl??this;this._parent&&!l.onlySelf&&this._parent.markAsDirty(M(o({},l),{sourceControl:s})),e&&l.emitEvent!==!1&&this._events.next(new $2(!1,s))}markAsPristine(l={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let s=l.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:l.emitEvent})}),this._parent&&!l.onlySelf&&this._parent._updatePristine(l,s),e&&l.emitEvent!==!1&&this._events.next(new $2(!0,s))}markAsPending(l={}){this.status=v2;let e=l.sourceControl??this;l.emitEvent!==!1&&(this._events.next(new S2(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!l.onlySelf&&this._parent.markAsPending(M(o({},l),{sourceControl:e}))}disable(l={}){let e=this._parentMarkedDirty(l.onlySelf);this.status=W2,this.errors=null,this._forEachChild(n=>{n.disable(M(o({},l),{onlySelf:!0}))}),this._updateValue();let s=l.sourceControl??this;l.emitEvent!==!1&&(this._events.next(new C1(this.value,s)),this._events.next(new S2(this.status,s)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(M(o({},l),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(l={}){let e=this._parentMarkedDirty(l.onlySelf);this.status=q2,this._forEachChild(s=>{s.enable(M(o({},l),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:l.emitEvent}),this._updateAncestors(M(o({},l),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(s=>s(!1))}_updateAncestors(l,e){this._parent&&!l.onlySelf&&(this._parent.updateValueAndValidity(l),l.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(l){this._parent=l}getRawValue(){return this.value}updateValueAndValidity(l={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let s=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===q2||this.status===v2)&&this._runAsyncValidator(s,l.emitEvent)}let e=l.sourceControl??this;l.emitEvent!==!1&&(this._events.next(new C1(this.value,e)),this._events.next(new S2(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!l.onlySelf&&this._parent.updateValueAndValidity(M(o({},l),{sourceControl:e}))}_updateTreeValidity(l={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(l)),this.updateValueAndValidity({onlySelf:!0,emitEvent:l.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?W2:q2}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(l,e){if(this.asyncValidator){this.status=v2,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let s=v0(this.asyncValidator(this));this._asyncValidationSubscription=s.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:e,shouldHaveEmitted:l})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let l=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,l}return!1}setErrors(l,e={}){this.errors=l,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(l){let e=l;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((s,n)=>s&&s._find(n),this)}getError(l,e){let s=e?this.get(e):this;return s&&s.errors?s.errors[l]:null}hasError(l,e){return!!this.getError(l,e)}get root(){let l=this;for(;l._parent;)l=l._parent;return l}_updateControlsErrors(l,e,s){this.status=this._calculateStatus(),l&&this.statusChanges.emit(this.status),(l||s)&&this._events.next(new S2(this.status,e)),this._parent&&this._parent._updateControlsErrors(l,e,s)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?W2:this.errors?L1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v2)?v2:this._anyControlsHaveStatus(L1)?L1:q2}_anyControlsHaveStatus(l){return this._anyControls(e=>e.status===l)}_anyControlsDirty(){return this._anyControls(l=>l.dirty)}_anyControlsTouched(){return this._anyControls(l=>l.touched)}_updatePristine(l,e){let s=!this._anyControlsDirty(),n=this.pristine!==s;this.pristine=s,this._parent&&!l.onlySelf&&this._parent._updatePristine(l,e),n&&this._events.next(new $2(this.pristine,e))}_updateTouched(l={},e){this.touched=this._anyControlsTouched(),this._events.next(new X2(this.touched,e)),this._parent&&!l.onlySelf&&this._parent._updateTouched(l,e)}_registerOnCollectionChange(l){this._onCollectionChange=l}_setUpdateStrategy(l){S1(l)&&l.updateOn!=null&&(this._updateOn=l.updateOn)}_parentMarkedDirty(l){let e=this._parent&&this._parent.dirty;return!l&&!!e&&!this._parent._anyControlsDirty()}_find(l){return null}_assignValidators(l){this._rawValidators=Array.isArray(l)?l.slice():l,this._composedValidatorFn=m5(this._rawValidators)}_assignAsyncValidators(l){this._rawAsyncValidators=Array.isArray(l)?l.slice():l,this._composedAsyncValidatorFn=u5(this._rawAsyncValidators)}},g1=class extends A2{constructor(l,e,s){super(y3(e),v3(s,e)),this.controls=l,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(l,e){return this.controls[l]?this.controls[l]:(this.controls[l]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(l,e,s={}){this.registerControl(l,e),this.updateValueAndValidity({emitEvent:s.emitEvent}),this._onCollectionChange()}removeControl(l,e={}){this.controls[l]&&this.controls[l]._registerOnCollectionChange(()=>{}),delete this.controls[l],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(l,e,s={}){this.controls[l]&&this.controls[l]._registerOnCollectionChange(()=>{}),delete this.controls[l],e&&this.registerControl(l,e),this.updateValueAndValidity({emitEvent:s.emitEvent}),this._onCollectionChange()}contains(l){return this.controls.hasOwnProperty(l)&&this.controls[l].enabled}setValue(l,e={}){T0(this,!0,l),Object.keys(l).forEach(s=>{V0(this,!0,s),this.controls[s].setValue(l[s],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(l,e={}){l!=null&&(Object.keys(l).forEach(s=>{let n=this.controls[s];n&&n.patchValue(l[s],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(l={},e={}){this._forEachChild((s,n)=>{s.reset(l?l[n]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(l,e,s)=>(l[s]=e.getRawValue(),l))}_syncPendingControls(){let l=this._reduceChildren(!1,(e,s)=>s._syncPendingControls()?!0:e);return l&&this.updateValueAndValidity({onlySelf:!0}),l}_forEachChild(l){Object.keys(this.controls).forEach(e=>{let s=this.controls[e];s&&l(s,e)})}_setUpControls(){this._forEachChild(l=>{l.setParent(this),l._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(l){for(let[e,s]of Object.entries(this.controls))if(this.contains(e)&&l(s))return!0;return!1}_reduceValue(){let l={};return this._reduceChildren(l,(e,s,n)=>((s.enabled||this.disabled)&&(e[n]=s.value),e))}_reduceChildren(l,e){let s=l;return this._forEachChild((n,a)=>{s=e(s,n,a)}),s}_allControlsDisabled(){for(let l of Object.keys(this.controls))if(this.controls[l].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(l){return this.controls.hasOwnProperty(l)?this.controls[l]:null}};var x3=class extends g1{};var I0=new a2("CallSetDisabledState",{providedIn:"root",factory:()=>S3}),S3="always";function z5(c,l){return[...l.path,c]}function z0(c,l,e=S3){w3(c,l),l.valueAccessor.writeValue(c.value),(c.disabled||e==="always")&&l.valueAccessor.setDisabledState?.(c.disabled),d5(c,l),M5(c,l),p5(c,l),L5(c,l)}function L0(c,l,e=!0){let s=()=>{};l.valueAccessor&&(l.valueAccessor.registerOnChange(s),l.valueAccessor.registerOnTouched(s)),N1(c,l),c&&(l._invokeOnDestroyCallbacks(),c._registerOnCollectionChange(()=>{}))}function x1(c,l){c.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(l)})}function L5(c,l){if(l.valueAccessor.setDisabledState){let e=s=>{l.valueAccessor.setDisabledState(s)};c.registerOnDisabledChange(e),l._registerOnDestroy(()=>{c._unregisterOnDisabledChange(e)})}}function w3(c,l){let e=E0(c);l.validator!==null?c.setValidators(f0(e,l.validator)):typeof e=="function"&&c.setValidators([e]);let s=P0(c);l.asyncValidator!==null?c.setAsyncValidators(f0(s,l.asyncValidator)):typeof s=="function"&&c.setAsyncValidators([s]);let n=()=>c.updateValueAndValidity();x1(l._rawValidators,n),x1(l._rawAsyncValidators,n)}function N1(c,l){let e=!1;if(c!==null){if(l.validator!==null){let n=E0(c);if(Array.isArray(n)&&n.length>0){let a=n.filter(t=>t!==l.validator);a.length!==n.length&&(e=!0,c.setValidators(a))}}if(l.asyncValidator!==null){let n=P0(c);if(Array.isArray(n)&&n.length>0){let a=n.filter(t=>t!==l.asyncValidator);a.length!==n.length&&(e=!0,c.setAsyncValidators(a))}}}let s=()=>{};return x1(l._rawValidators,s),x1(l._rawAsyncValidators,s),e}function d5(c,l){l.valueAccessor.registerOnChange(e=>{c._pendingValue=e,c._pendingChange=!0,c._pendingDirty=!0,c.updateOn==="change"&&O0(c,l)})}function p5(c,l){l.valueAccessor.registerOnTouched(()=>{c._pendingTouched=!0,c.updateOn==="blur"&&c._pendingChange&&O0(c,l),c.updateOn!=="submit"&&c.markAsTouched()})}function O0(c,l){c._pendingDirty&&c.markAsDirty(),c.setValue(c._pendingValue,{emitModelToViewChange:!1}),l.viewToModelUpdate(c._pendingValue),c._pendingChange=!1}function M5(c,l){let e=(s,n)=>{l.valueAccessor.writeValue(s),n&&l.viewToModelUpdate(s)};c.registerOnChange(e),l._registerOnDestroy(()=>{c._unregisterOnChange(e)})}function h5(c,l){c==null,w3(c,l)}function C5(c,l){return N1(c,l)}function g5(c,l){if(!c.hasOwnProperty("model"))return!1;let e=c.model;return e.isFirstChange()?!0:!Object.is(l,e.currentValue)}function x5(c){return Object.getPrototypeOf(c.constructor)===b3}function N5(c,l){c._syncPendingControls(),l.forEach(e=>{let s=e.control;s.updateOn==="submit"&&s._pendingChange&&(e.viewToModelUpdate(s._pendingValue),s._pendingChange=!1)})}function b5(c,l){if(!l)return null;Array.isArray(l);let e,s,n;return l.forEach(a=>{a.constructor===k2?e=a:x5(a)?s=a:n=a}),n||s||e||null}function y5(c,l){let e=c.indexOf(l);e>-1&&c.splice(e,1)}function d0(c,l){let e=c.indexOf(l);e>-1&&c.splice(e,1)}function p0(c){return typeof c=="object"&&c!==null&&Object.keys(c).length===2&&"value"in c&&"disabled"in c}var d1=class extends A2{constructor(l=null,e,s){super(y3(e),v3(s,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(l),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),S1(e)&&(e.nonNullable||e.initialValueIsDefault)&&(p0(l)?this.defaultValue=l.value:this.defaultValue=l)}setValue(l,e={}){this.value=this._pendingValue=l,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(s=>s(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(l,e={}){this.setValue(l,e)}reset(l=this.defaultValue,e={}){this._applyFormState(l),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(l){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(l){this._onChange.push(l)}_unregisterOnChange(l){d0(this._onChange,l)}registerOnDisabledChange(l){this._onDisabledChange.push(l)}_unregisterOnDisabledChange(l){d0(this._onDisabledChange,l)}_forEachChild(l){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(l){p0(l)?(this.value=this._pendingValue=l.value,l.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=l}};var v5=c=>c instanceof d1;var w1=(()=>{class c{static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275dir=S({type:c,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return c})();var B0=new a2("");var S5={provide:w2,useExisting:p2(()=>K2)},K2=(()=>{class c extends w2{get submitted(){return Y(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}constructor(e,s,n){super(),this.callSetDisabledState=n,this._submitted=T2(()=>this._submittedReactive()),this._submittedReactive=P2(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new O,this._setValidators(e),this._setAsyncValidators(s)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(N1(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let s=this.form.get(e.path);return z0(s,e,this.callSetDisabledState),s.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),s}getControl(e){return this.form.get(e.path)}removeControl(e){L0(e.control||null,e,!1),y5(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,s){this.form.get(e.path).setValue(s)}onSubmit(e){return this._submittedReactive.set(!0),N5(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new C3(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this._submittedReactive.set(!1),this.form._events.next(new g3(this.form))}_updateDomValue(){this.directives.forEach(e=>{let s=e.control,n=this.form.get(e.path);s!==n&&(L0(s||null,e),v5(n)&&(z0(n,e,this.callSetDisabledState),e.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let s=this.form.get(e.path);h5(s,e),s.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let s=this.form.get(e.path);s&&C5(s,e)&&s.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){w3(this.form,this),this._oldForm&&N1(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(s){return new(s||c)(d(x0,10),d(N0,10),d(I0,8))}}static{this.\u0275dir=S({type:c,selectors:[["","formGroup",""]],hostBindings:function(s,n){s&1&&y("submit",function(t){return n.onSubmit(t)})("reset",function(){return n.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[M2([S5]),B,t2]})}}return c})();var w5={provide:Y2,useExisting:p2(()=>Q2)},Q2=(()=>{class c extends Y2{set isDisabled(e){}static{this._ngModelWarningSentOnce=!1}constructor(e,s,n,a,t){super(),this._ngModelWarningConfig=t,this._added=!1,this.name=null,this.update=new O,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(s),this._setAsyncValidators(n),this.valueAccessor=b5(this,a)}ngOnChanges(e){this._added||this._setUpControl(),g5(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return z5(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(s){return new(s||c)(d(w2,13),d(x0,10),d(N0,10),d(b1,10),d(B0,8))}}static{this.\u0275dir=S({type:c,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[M2([w5]),B,t2]})}}return c})(),A5={provide:b1,useExisting:p2(()=>A1),multi:!0};function R0(c,l){return c==null?`${l}`:(l&&typeof l=="object"&&(l="Object"),`${c}: ${l}`.slice(0,50))}function k5(c){return c.split(":")[0]}var A1=(()=>{class c extends b3{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;let s=this._getOptionId(e),n=R0(s,e);this.setProperty("value",n)}registerOnChange(e){this.onChange=s=>{this.value=this._getOptionValue(s),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let s of this._optionMap.keys())if(this._compareWith(this._optionMap.get(s),e))return s;return null}_getOptionValue(e){let s=k5(e);return this._optionMap.has(s)?this._optionMap.get(s):e}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=E2(c)))(n||c)}})()}static{this.\u0275dir=S({type:c,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(s,n){s&1&&y("change",function(t){return n.onChange(t.target.value)})("blur",function(){return n.onTouched()})},inputs:{compareWith:"compareWith"},features:[M2([A5]),B]})}}return c})(),H0=(()=>{class c{constructor(e,s,n){this._element=e,this._renderer=s,this._select=n,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(R0(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(s){return new(s||c)(d(i2),d(o2),d(A1,9))}}static{this.\u0275dir=S({type:c,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return c})(),_5={provide:b1,useExisting:p2(()=>U0),multi:!0};function M0(c,l){return c==null?`${l}`:(typeof l=="string"&&(l=`'${l}'`),l&&typeof l=="object"&&(l="Object"),`${c}: ${l}`.slice(0,50))}function D5(c){return c.split(":")[0]}var U0=(()=>{class c extends b3{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;let s;if(Array.isArray(e)){let n=e.map(a=>this._getOptionId(a));s=(a,t)=>{a._setSelected(n.indexOf(t.toString())>-1)}}else s=(n,a)=>{n._setSelected(!1)};this._optionMap.forEach(s)}registerOnChange(e){this.onChange=s=>{let n=[],a=s.selectedOptions;if(a!==void 0){let t=a;for(let i=0;i<t.length;i++){let r=t[i],f=this._getOptionValue(r.value);n.push(f)}}else{let t=s.options;for(let i=0;i<t.length;i++){let r=t[i];if(r.selected){let f=this._getOptionValue(r.value);n.push(f)}}}this.value=n,e(n)}}_registerOption(e){let s=(this._idCounter++).toString();return this._optionMap.set(s,e),s}_getOptionId(e){for(let s of this._optionMap.keys())if(this._compareWith(this._optionMap.get(s)._value,e))return s;return null}_getOptionValue(e){let s=D5(e);return this._optionMap.has(s)?this._optionMap.get(s)._value:e}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=E2(c)))(n||c)}})()}static{this.\u0275dir=S({type:c,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(s,n){s&1&&y("change",function(t){return n.onChange(t.target)})("blur",function(){return n.onTouched()})},inputs:{compareWith:"compareWith"},features:[M2([_5]),B]})}}return c})(),G0=(()=>{class c{constructor(e,s,n){this._element=e,this._renderer=s,this._select=n,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(M0(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(M0(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(s){return new(s||c)(d(i2),d(o2),d(U0,9))}}static{this.\u0275dir=S({type:c,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return c})();var F5=(()=>{class c{static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=F2({type:c})}static{this.\u0275inj=D2({})}}return c})(),N3=class extends A2{constructor(l,e,s){super(y3(e),v3(s,e)),this.controls=l,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(l){return this.controls[this._adjustIndex(l)]}push(l,e={}){this.controls.push(l),this._registerControl(l),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(l,e,s={}){this.controls.splice(l,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:s.emitEvent})}removeAt(l,e={}){let s=this._adjustIndex(l);s<0&&(s=0),this.controls[s]&&this.controls[s]._registerOnCollectionChange(()=>{}),this.controls.splice(s,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(l,e,s={}){let n=this._adjustIndex(l);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),e&&(this.controls.splice(n,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:s.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(l,e={}){T0(this,!1,l),l.forEach((s,n)=>{V0(this,!1,n),this.at(n).setValue(s,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(l,e={}){l!=null&&(l.forEach((s,n)=>{this.at(n)&&this.at(n).patchValue(s,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(l=[],e={}){this._forEachChild((s,n)=>{s.reset(l[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(l=>l.getRawValue())}clear(l={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:l.emitEvent}))}_adjustIndex(l){return l<0?l+this.length:l}_syncPendingControls(){let l=this.controls.reduce((e,s)=>s._syncPendingControls()?!0:e,!1);return l&&this.updateValueAndValidity({onlySelf:!0}),l}_forEachChild(l){this.controls.forEach((e,s)=>{l(e,s)})}_updateValue(){this.value=this.controls.filter(l=>l.enabled||this.disabled).map(l=>l.value)}_anyControls(l){return this.controls.some(e=>e.enabled&&l(e))}_setUpControls(){this._forEachChild(l=>this._registerControl(l))}_allControlsDisabled(){for(let l of this.controls)if(l.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(l){l.setParent(this),l._registerOnCollectionChange(this._onCollectionChange)}_find(l){return this.at(l)??null}};function h0(c){return!!c&&(c.asyncValidators!==void 0||c.validators!==void 0||c.updateOn!==void 0)}var k1=(()=>{class c{constructor(){this.useNonNullable=!1}get nonNullable(){let e=new c;return e.useNonNullable=!0,e}group(e,s=null){let n=this._reduceControls(e),a={};return h0(s)?a=s:s!==null&&(a.validators=s.validator,a.asyncValidators=s.asyncValidator),new g1(n,a)}record(e,s=null){let n=this._reduceControls(e);return new x3(n,s)}control(e,s,n){let a={};return this.useNonNullable?(h0(s)?a=s:(a.validators=s,a.asyncValidators=n),new d1(e,M(o({},a),{nonNullable:!0}))):new d1(e,s,n)}array(e,s,n){let a=e.map(t=>this._createControl(t));return new N3(a,s,n)}_reduceControls(e){let s={};return Object.keys(e).forEach(n=>{s[n]=this._createControl(e[n])}),s}_createControl(e){if(e instanceof d1)return e;if(e instanceof A2)return e;if(Array.isArray(e)){let s=e[0],n=e.length>1?e[1]:null,a=e.length>2?e[2]:null;return this.control(s,n,a)}else return this.control(e)}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275prov=_2({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})();var _1=(()=>{class c{static withConfig(e){return{ngModule:c,providers:[{provide:B0,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:I0,useValue:e.callSetDisabledState??S3}]}}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=F2({type:c})}static{this.\u0275inj=D2({imports:[F5]})}}return c})();function E5(c,l){c&1&&(u(0,"div",28),p(1," Name is required! "),z())}function P5(c,l){c&1&&(u(0,"div",28),p(1," Email is required "),z())}function V5(c,l){c&1&&(u(0,"div",28),p(1," Phone Number is required "),z())}function T5(c,l){c&1&&(u(0,"div",28),p(1," Address is required "),z())}function I5(c,l){if(c&1&&(u(0,"option",22),p(1),z()),c&2){let e=l.$implicit;b("value",e),g(),V2(e)}}function O5(c,l){c&1&&(u(0,"div",29),p(1," Desigination is required "),z())}function B5(c,l){if(c&1&&(u(0,"div",30),p(1),z()),c&2){let e=X();g(),V2(e.erroMessage)}}var D1=class c{constructor(l){this.formBuilder=l;this.profileData=this.formBuilder.group({name:["",[v.required,v.pattern(/^[a-zA-Z\s]*$/)]],email:["",[v.required,v.email]],phoneNumber:["",[v.required,v.pattern(/^\d{10}$/)]],address:[""],desigination:["Backend Developer",v.required]})}profileData;modalClosed=new O;logInOpen=new O;erroMessage="";desiginations=["Frontend Developer","Backend Developer","Fullstack Developer","UI/UX Designer","DevOps Engineer"];submit(){this.profileData.invalid?this.erroMessage="Please fill the required fields":(this.modalClosed.emit(!1),console.log(this.profileData.controls.email.value),this.logInOpen.emit(!0),console.log(this.profileData))}ngOnInit(){this.modalClosed.emit(!0)}toggleModal(){this.modalClosed.emit(!1)}static \u0275fac=function(e){return new(e||c)(d(k1))};static \u0275cmp=_({type:c,selectors:[["app-sign-up"]],outputs:{modalClosed:"modalClosed",logInOpen:"logInOpen"},standalone:!0,features:[F],decls:49,vars:7,consts:[[1,"overflow-x-hidden","overflow-y-auto","fixed","inset-0","z-50","outline-none","focus:outline-none","justify-center","items-center","flex"],[1,"relative","w-auto","my-6","mx-auto","max-w-6xl"],[1,"border-0","rounded-lg","shadow-lg","relative","flex","flex-col","w-full","bg-white","outline-none","focus:outline-none"],[1,"flex","items-start","justify-between","p-5","border-b","border-solid","border-blueGray-200","rounded-t"],[1,"text-3xl","font-semibold"],[1,"p-1","ml-auto","bg-transparent","border-0","text-black","float-right","text-3xl","leading-none","font-semibold","outline-none","focus:outline-none",3,"click"],[1,"bg-transparent","text-black","h-6","w-6","text-2xl","block","outline-none","focus:outline-none","hover:text-red-500"],[3,"submit","formGroup"],[1,"relative","p-6","flex","flex-col","justify-between","w-full"],[1,"flex","justify-between","p-2"],["for","name",1,"w-2/5"],[1,"flex","flex-col","w-3/5"],["type","text","id","name","placeholder","Enter the Name","formControlName","name",1,"border","border-gray-300","rounded","focus:outline-none","focus:ring-2","focus:ring-blue-500","rounded","hover:shadow-lg"],["class","text-red-500",4,"ngIf"],["type","text","id","email","placeholder","Enter the Email","formControlName","email",1,"border","border-gray-300","rounded","focus:outline-none","focus:ring-2","focus:ring-blue-500","rounded","hover:shadow-lg"],["for","phone",1,"w-2/5"],[1,"w-3/5"],["type","text","id","phone","placeholder","Enter the Phone Number","formControlName","phoneNumber",1,"border","border-gray-300","rounded","focus:outline-none","focus:ring-2","focus:ring-blue-500","rounded","hover:shadow-lg"],["for","address",1,"w-2/5"],["type","text","id","address","placeholder","Enter the Address","formControlName","address",1,"border","border-gray-300","rounded","focus:outline-none","focus:ring-2","focus:ring-blue-500","rounded","hover:shadow-lg"],["for","desigination",1,"w-2/5"],["id","desigination","formControlName","desigination",1,"border","border-gray-300","rounded","focus:outline-none","focus:ring-2","focus:ring-blue-500","rounded","hover:shadow-lg"],[3,"value"],["class","text-red-500 shadow",4,"ngIf"],[1,"flex","items-center","justify-end","p-6","border-t","border-solid","border-blueGray-200","rounded-b"],["type","button",1,"text-red-500","background-transparent","font-bold","uppercase","px-6","py-2","text-sm","outline-none","hover:shadow","focus:outline-none","mr-1","mb-1","ease-linear","transition-all","duration-150",3,"click"],["type","submit",1,"bg-emerald-500","text-white","active:bg-emerald-600","font-bold","uppercase","text-sm","px-6","py-3","rounded","shadow","hover:shadow-lg","outline-none","focus:outline-none","mr-1","mb-1","ease-linear","transition-all","duration-150"],["class","text-red-500 text-center mb-5",4,"ngIf"],[1,"text-red-500"],[1,"text-red-500","shadow"],[1,"text-red-500","text-center","mb-5"]],template:function(e,s){if(e&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),p(5," SignUp "),z(),u(6,"button",5),y("click",function(){return s.toggleModal()}),u(7,"span",6),p(8," X "),z()()(),u(9,"form",7),y("submit",function(){return s.submit()}),u(10,"div",8)(11,"div",9)(12,"label",10),p(13,"Name :"),z(),u(14,"div",11),A(15,"input",12),D(16,E5,2,0,"div",13),z()(),u(17,"div",9)(18,"label",10),p(19,"Email :"),z(),u(20,"div",11),A(21,"input",14),D(22,P5,2,0,"div",13),z()(),u(23,"div",9)(24,"label",15),p(25,"Contact Number :"),z(),u(26,"div",16),A(27,"input",17),D(28,V5,2,0,"div",13),z()(),u(29,"div",9)(30,"label",18),p(31,"Address :"),z(),u(32,"div",16),A(33,"textarea",19),D(34,T5,2,0,"div",13),z()(),u(35,"div",9)(36,"label",20),p(37,"Desigination :"),z(),u(38,"div",16)(39,"select",21),P3(40,I5,2,2,"option",22,E3),z(),D(42,O5,2,0,"div",23),z()()(),u(43,"div",24)(44,"button",25),y("click",function(){return s.toggleModal()}),p(45," Close "),z(),u(46,"button",26),p(47," Submit "),z()(),D(48,B5,2,1,"div",27),z()()()()),e&2){let n,a,t,i,r;g(9),b("formGroup",s.profileData),g(7),b("ngIf",((n=s.profileData.get("name"))==null?null:n.invalid)&&((n=s.profileData.get("name"))==null?null:n.touched)),g(6),b("ngIf",((a=s.profileData.get("email"))==null?null:a.invalid)&&((a=s.profileData.get("email"))==null?null:a.touched)),g(6),b("ngIf",((t=s.profileData.get("phoneNumber"))==null?null:t.invalid)&&((t=s.profileData.get("phoneNumber"))==null?null:t.touched)),g(6),b("ngIf",((i=s.profileData.get("address"))==null?null:i.invalid)&&((i=s.profileData.get("address"))==null?null:i.touched)),g(6),V3(s.desiginations),g(2),b("ngIf",((r=s.profileData.get("desigination"))==null?null:r.invalid)&&((r=s.profileData.get("desigination"))==null?null:r.touched)),g(6),b("ngIf",s.profileData.invalid)}},dependencies:[K,h2,_1,w1,H0,G0,k2,A1,y1,v1,K2,Q2]})};function R5(c,l){c&1&&(u(0,"div",19),p(1," Email is required "),z())}function H5(c,l){c&1&&(u(0,"div",19),p(1," Password is required "),z())}function U5(c,l){if(c&1&&(u(0,"div",20),p(1),z()),c&2){let e=X();g(),B3(" ",e.errorMessage," ")}}var F1=class c{constructor(l,e){this.formBuilder=l;this.router=e;this.userLogin=this.formBuilder.group({email:["",[v.required,v.email]],password:["",[v.required,v.maxLength(12),v.minLength(8)]]})}userLogin;errorMessage="";islogin=new O;ngOnInit(){this.islogin.emit(!0)}logIn(){this.userLogin.valid?(localStorage.setItem("isLoggedIn","true"),this.islogin.emit(!1),console.log(this.userLogin)):this.errorMessage="Please fill the required field"}closeModal(){this.islogin.emit(!1)}static \u0275fac=function(e){return new(e||c)(d(k1),d(Q3))};static \u0275cmp=_({type:c,selectors:[["app-log-in"]],outputs:{islogin:"islogin"},standalone:!0,features:[F],decls:29,vars:4,consts:[[1,"overflow-x-hidden","overflow-y-auto","fixed","inset-0","z-50","outline-none","focus:outline-none","justify-center","items-center","flex"],[1,"relative","w-auto","my-6","mx-auto","max-w-6xl"],[1,"border-0","rounded-lg","shadow-lg","relative","flex","flex-col","w-full","bg-white","outline-none","focus:outline-none"],[1,"flex","items-start","justify-between","p-5","border-b","border-solid","border-blueGray-200","rounded-t"],[1,"text-3xl","font-semibold"],[1,"p-1","ml-auto","bg-transparent","border-0","text-black","float-right","text-3xl","leading-none","font-semibold","outline-none","focus:outline-none",3,"click"],[1,"bg-transparent","text-black","h-6","w-6","text-2xl","block","outline-none","focus:outline-none","hover:text-red-500"],[3,"submit","formGroup"],[1,"relative","p-6","flex","flex-col","justify-between","w-full"],[1,"flex","justify-between","p-2"],["for","name",1,"w-full","mr-7"],[1,"flex","flex-col"],["type","text","id","email","placeholder","Enter the Email","formControlName","email",1,"w-auto"],["class","text-red-500",4,"ngIf"],["type","password","id","password","placeholder","Enter the Password","formControlName","password",1,"w-auto"],[1,"flex","items-center","justify-end","p-6","border-t","border-solid","border-blueGray-200","rounded-b"],["type","button",1,"text-red-500","background-transparent","font-bold","uppercase","px-6","py-2","text-sm","outline-none","focus:outline-none","mr-1","mb-1","ease-linear","transition-all","duration-150",3,"click"],["type","submit",1,"bg-emerald-500","text-white","active:bg-emerald-600","font-bold","uppercase","text-sm","px-6","py-3","rounded","shadow","hover:shadow-lg","outline-none","focus:outline-none","mr-1","mb-1","ease-linear","transition-all","duration-150"],["class","text-center text-red-500 mb-5",4,"ngIf"],[1,"text-red-500"],[1,"text-center","text-red-500","mb-5"]],template:function(e,s){if(e&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),p(5," Login "),z(),u(6,"button",5),y("click",function(){return s.closeModal()}),u(7,"span",6),p(8," X "),z()()(),u(9,"form",7),y("submit",function(){return s.logIn()}),u(10,"div",8)(11,"div",9)(12,"label",10),p(13,"Email"),z(),u(14,"div",11),A(15,"input",12),D(16,R5,2,0,"div",13),z()(),u(17,"div",9)(18,"label",10),p(19,"Password"),z(),u(20,"div",11),A(21,"input",14),D(22,H5,2,0,"div",13),z()()(),u(23,"div",15)(24,"button",16),y("click",function(){return s.closeModal()}),p(25," Close "),z(),u(26,"button",17),p(27,"Login "),z()(),D(28,U5,2,1,"div",18),z()()()()),e&2){let n,a;g(9),b("formGroup",s.userLogin),g(7),b("ngIf",((n=s.userLogin.get("email"))==null?null:n.invalid)&&((n=s.userLogin.get("email"))==null?null:n.touched)),g(6),b("ngIf",((a=s.userLogin.get("password"))==null?null:a.invalid)&&((a=s.userLogin.get("password"))==null?null:a.touched)),g(6),b("ngIf",s.userLogin.invalid)}},dependencies:[K,h2,_1,w1,k2,y1,v1,K2,Q2]})};var G5=(c,l)=>({hidden:c,flex:l});function j5(c,l){if(c&1){let e=O1();u(0,"app-sign-up",14),y("modalClosed",function(n){J2(e);let a=X();return c1(a.closeModalHandler(n))})("logInOpen",function(n){J2(e);let a=X();return c1(a.loginOpenHandler(n))}),z()}}function q5(c,l){if(c&1){let e=O1();u(0,"app-log-in",15),y("islogin",function(n){J2(e);let a=X();return c1(a.closeLoginHandler(n))}),z()}}var E1=class c{faBars=i0;faSignIn=o0;faSignUp=r0;showModal=!1;isLoginPage=!1;title="Reactive Form POC";showMenu=!0;toggleNavbar(){this.showMenu=!this.showMenu}loginOpenHandler(l){this.isLoginPage=l}loginPage(){this.isLoginPage=!this.isLoginPage}closeLoginHandler(l){this.isLoginPage=l}toggleModal(){this.showModal=!this.showModal}closeModalHandler(l){this.showModal=l}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=_({type:c,selectors:[["app-home-page"]],standalone:!0,features:[F],decls:22,vars:10,consts:[[1,"relative","flex","flex-wrap","items-center","justify-between","px-2","py-3","bg-blue-500","mb-3"],[1,"container","px-4","mx-auto","flex","flex-wrap","items-center","justify-between"],[1,"w-full","relative","flex","justify-between","lg:w-auto","px-4","lg:static","lg:block","lg:justify-start"],[1,"text-white","text-lg"],["type","button",1,"text-white","cursor-pointer","text-xl","leading-none","px-3","py-1","border","border-solid","border-transparent","rounded","bg-transparent","block","lg:hidden","outline-none","focus:outline-none",3,"click"],[3,"icon"],[1,"lg:flex","lg:flex-grow","items-center",3,"ngClass"],[1,"flex","flex-col","lg:flex-row","list-none","ml-auto"],[1,"nav-item"],[1,"px-3","py-2","flex","items-center","text-xs","uppercase","font-bold","leading-snug","text-white","hover:opacity-75",3,"click"],[1,"text-lg","leading-lg","text-white","opacity-75",3,"icon"],[1,"ml-2"],[3,"modalClosed","logInOpen",4,"ngIf"],[3,"islogin",4,"ngIf"],[3,"modalClosed","logInOpen"],[3,"islogin"]],template:function(e,s){e&1&&(u(0,"nav",0)(1,"div",1)(2,"div",2)(3,"h1",3),p(4),z(),u(5,"button",4),y("click",function(){return s.toggleNavbar()}),A(6,"fa-icon",5)(7,"fa-icon"),z()(),u(8,"div",6)(9,"ul",7)(10,"li",8)(11,"button",9),y("click",function(){return s.loginPage()}),A(12,"fa-icon",10),u(13,"span",11),p(14,"Login"),z()()(),u(15,"li",8)(16,"button",9),y("click",function(){return s.toggleModal()}),A(17,"fa-icon",10),u(18,"span",11),p(19,"Signup"),z()()()()()()(),D(20,j5,1,0,"app-sign-up",12)(21,q5,1,0,"app-log-in",13)),e&2&&(g(4),V2(s.title),g(2),b("icon",s.faBars),g(2),b("ngClass",R3(7,G5,!s.showMenu,s.showMenu)),g(4),b("icon",s.faSignIn),g(5),b("icon",s.faSignUp),g(3),b("ngIf",s.showModal),g(),b("ngIf",s.isLoginPage))},dependencies:[m1,t0,K,q3,h2,D1,F1]})};var P1=class c{static \u0275fac=function(e){return new(e||c)};static \u0275cmp=_({type:c,selectors:[["app-dashboard"]],standalone:!0,features:[F],decls:8,vars:0,consts:[[1,"bg-blue-500"],[1,"flex","flex-row","justify-between","p-4"],[1,"text-xl","text-white"],["routerLink","/","routerLinkActive","active",1,"text-white"]],template:function(e,s){e&1&&(u(0,"nav",0)(1,"div",1)(2,"div")(3,"h1",2),p(4,"Welcome dashboard"),z()(),u(5,"div")(6,"button",3),p(7,"SignOut"),z()()()())},dependencies:[Z3]})};var W0=[{path:"",component:E1},{path:"dashboard",component:P1}];var $0={providers:[U3({eventCoalescing:!0}),J3(W0),X3()]};var W5={providers:[Y3()]},X0=G3($0,W5);var $5=()=>W3(u1,X0),Pc=$5;export{Pc as a};
