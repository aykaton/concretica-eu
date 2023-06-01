/**
 * tua-body-scroll-lock v1.2.1
 * (c) 2022 Evinma, BuptStEve
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).bodyScrollLock={})}(this,(function(e){"use strict";var t=function(){return"undefined"==typeof window},o=function(e){e=e||navigator.userAgent;var t=/(iPad).*OS\s([\d_]+)/.test(e);return{ios:!t&&/(iPhone\sOS)\s([\d_]+)/.test(e)||t,android:/(Android);?[\s/]+([\d.]+)?/.test(e)}};var n=0,i=0,r=0,s=null,c=!1,l=[],u=function(e){if(t())return!1;if(!e)throw new Error("options must be provided");var o=!1,n={get passive(){o=!0}},i=function(){},r="__TUA_BSL_TEST_PASSIVE__";window.addEventListener(r,i,n),window.removeEventListener(r,i,n);var s=e.capture;return o?e:void 0!==s&&s}({passive:!1}),d=!t()&&"scrollBehavior"in document.documentElement.style,f=function(e){e.cancelable&&e.preventDefault()},a=function(e){e||null!==e&&console.warn("If scrolling is also required in the floating layer, the target element must be provided.")};e.clearBodyLocks=function(){if(!t())if(n=0,o().ios||"function"!=typeof s){if(l.length)for(var e=l.pop();e;)e.ontouchmove=null,e.ontouchstart=null,e=l.pop();c&&(document.removeEventListener("touchmove",f,u),c=!1)}else s()},e.lock=function(e){if(!t()){if(a(e),o().ios){if(e)(Array.isArray(e)?e:[e]).forEach((function(e){e&&-1===l.indexOf(e)&&(e.ontouchstart=function(e){i=e.targetTouches[0].clientY,r=e.targetTouches[0].clientX},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){if(t){var o=t.scrollTop,n=t.scrollLeft,s=t.scrollWidth,c=t.scrollHeight,l=t.clientWidth,u=t.clientHeight,d=e.targetTouches[0].clientX-r,a=e.targetTouches[0].clientY-i,h=Math.abs(a)>Math.abs(d),v=a>0&&0===o,p=d>0&&0===n,y=d<0&&n+l+1>=s,g=a<0&&o+u+1>=c;if("INPUT"!==e.target.tagName&&(h&&(v||g)||!h&&(p||y)))return f(e)}e.stopPropagation()}(t,e)},l.push(e))}));c||(document.addEventListener("touchmove",f,u),c=!0)}else n<=0&&(s=o().android?(h=document.documentElement,v=document.body,p=h.scrollTop||v.scrollTop,y=Object.assign({},h.style),g=Object.assign({},v.style),h.style.height="100%",h.style.overflow="hidden",v.style.top="-".concat(p,"px"),v.style.width="100%",v.style.height="auto",v.style.position="fixed",v.style.overflow="hidden",function(){h.style.height=y.height||"",h.style.overflow=y.overflow||"",["top","width","height","overflow","position"].forEach((function(e){v.style[e]=g[e]||""})),d?window.scrollTo({top:p,behavior:"instant"}):window.scrollTo(0,p)}):function(){var e=document.body,t=Object.assign({},e.style),o=window.innerWidth-e.clientWidth;return e.style.overflow="hidden",e.style.boxSizing="border-box",e.style.paddingRight="".concat(o,"px"),function(){["overflow","boxSizing","paddingRight"].forEach((function(o){e.style[o]=t[o]||""}))}}());var h,v,p,y,g;n+=1}},e.unlock=function(e){if(!(t()||(a(e),(n-=1)>0)))if(o().ios||"function"!=typeof s){if(e)(Array.isArray(e)?e:[e]).forEach((function(e){var t=l.indexOf(e);-1!==t&&(e.ontouchmove=null,e.ontouchstart=null,l.splice(t,1))}));c&&(document.removeEventListener("touchmove",f,u),c=!1)}else s()},Object.defineProperty(e,"__esModule",{value:!0})}));