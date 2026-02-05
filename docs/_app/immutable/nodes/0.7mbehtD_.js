import{d as G,a as S,j as vt,f as F}from"../chunks/Ol5fBbXL.js";import{b1 as mt,b as bt,h as ht,a as pt,C as gt,E as _t,b2 as yt,aO as xt,e as $t,d as wt,b3 as kt,b4 as Tt,b5 as It,aC as Et,A as Nt,an as M,aK as at,n as K,p as rt,u as St,i as p,t as J,o as ot,ar as z,aH as At,q as E,v as x,aJ as Ct,s as N,aI as W,Y as X}from"../chunks/CVRKOA1p.js";import{B as zt,t as Bt,s as O,b as H,h as Mt,c as Ot}from"../chunks/CvxAkOQm.js";import{B as Ft,l as st,s as nt,i as Q,a as it,c as ct}from"../chunks/Dv7CT2Sx.js";import{b as Pt}from"../chunks/BbfsfgUm.js";import{o as Rt}from"../chunks/DCyCLMN2.js";import{s as jt,g as Lt}from"../chunks/Ml0riS2p.js";import{b as C}from"../chunks/Cd4cntZ_.js";import"../chunks/BH8WQV1z.js";import{I as lt,s as dt}from"../chunks/a34DfqyK.js";function qt(e,t,a){ht&&pt();var s=new Ft(e),n=!mt();bt(()=>{var r=t();n&&r!==null&&typeof r=="object"&&(r={}),s.ensure(r,a)})}const Ht=()=>performance.now(),T={tick:e=>requestAnimationFrame(e),now:()=>Ht(),tasks:new Set};function ut(){const e=T.now();T.tasks.forEach(t=>{t.c(e)||(T.tasks.delete(t),t.f())}),T.tasks.size!==0&&T.tick(ut)}function Kt(e){let t;return T.tasks.size===0&&T.tick(ut),{promise:new Promise(a=>{T.tasks.add(t={c:e,f:a})}),abort(){T.tasks.delete(t)}}}function U(e,t){at(()=>{e.dispatchEvent(new CustomEvent(t))})}function Ut(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function Z(e){const t={},a=e.split(";");for(const s of a){const[n,r]=s.split(":");if(!n||r===void 0)break;const o=Ut(n.trim());t[o]=r.trim()}return t}const Wt=e=>e;function tt(e,t,a,s){var w;var n=(e&Tt)!==0,r=(e&It)!==0,o=n&&r,h=(e&kt)!==0,$=o?"both":n?"in":"out",i,c=t.inert,A=t.style.overflow,l,d;function g(){return at(()=>i??(i=a()(t,(s==null?void 0:s())??{},{direction:$})))}var m={is_global:h,in(){var b;if(t.inert=c,!n){d==null||d.abort(),(b=d==null?void 0:d.reset)==null||b.call(d);return}r||l==null||l.abort(),l=D(t,g(),d,1,()=>{U(t,"introend"),l==null||l.abort(),l=i=void 0,t.style.overflow=A})},out(b){if(!r){b==null||b(),i=void 0;return}t.inert=!0,d=D(t,g(),l,0,()=>{U(t,"outroend"),b==null||b()})},stop:()=>{l==null||l.abort(),d==null||d.abort()}},_=gt;if(((w=_.nodes).t??(w.t=[])).push(m),n&&Pt){var y=h;if(!y){for(var v=_.parent;v&&(v.f&_t)!==0;)for(;(v=v.parent)&&(v.f&yt)===0;);y=!v||(v.f&xt)!==0}y&&$t(()=>{wt(()=>m.in())})}}function D(e,t,a,s,n){var r=s===1;if(Et(t)){var o,h=!1;return Nt(()=>{if(!h){var _=t({direction:r?"in":"out"});o=D(e,_,a,s,n)}}),{abort:()=>{h=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(a==null||a.deactivate(),!(t!=null&&t.duration)&&!(t!=null&&t.delay))return U(e,r?"introstart":"outrostart"),n(),{abort:M,deactivate:M,reset:M,t:()=>s};const{delay:$=0,css:i,tick:c,easing:A=Wt}=t;var l=[];if(r&&a===void 0&&(c&&c(0,1),i)){var d=Z(i(0,1));l.push(d,d)}var g=()=>1-s,m=e.animate(l,{duration:$,fill:"forwards"});return m.onfinish=()=>{m.cancel(),U(e,r?"introstart":"outrostart");var _=(a==null?void 0:a.t())??1-s;a==null||a.abort();var y=s-_,v=t.duration*Math.abs(y),w=[];if(v>0){var b=!1;if(i)for(var P=Math.ceil(v/16.666666666666668),B=0;B<=P;B+=1){var R=_+y*A(B/P),u=Z(i(R,1-R));w.push(u),b||(b=u.overflow==="hidden")}b&&(e.style.overflow="hidden"),g=()=>{var f=m.currentTime;return _+y*A(f/v)},c&&Kt(()=>{if(m.playState!=="running")return!1;var f=g();return c(f,1-f),!0})}m=e.animate(w,{duration:v,fill:"forwards"}),m.onfinish=()=>{g=()=>s,c==null||c(s,1-s),n()}},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=M)},deactivate:()=>{n=M},reset:()=>{s===0&&(c==null||c(1,0))},t:()=>g()}}const Dt=!0,ve=Object.freeze(Object.defineProperty({__proto__:null,prerender:Dt},Symbol.toStringTag,{value:"Module"})),Gt=()=>{const e=jt;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},ft={subscribe(e){return Gt().page.subscribe(e)}};function Vt(e,t){const a=st(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const s=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];lt(e,nt({name:"menu"},()=>a,{get iconNode(){return s},children:(n,r)=>{var o=G(),h=K(o);dt(h,t,"default",{}),S(n,o)},$$slots:{default:!0}}))}function Yt(e,t){const a=st(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const s=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];lt(e,nt({name:"x"},()=>a,{get iconNode(){return s},children:(n,r)=>{var o=G(),h=K(o);dt(h,t,"default",{}),S(n,o)},$$slots:{default:!0}}))}var Jt=F('<button class="md:hidden fixed inset-0 top-14 z-30 bg-black/50" aria-label="Close menu"></button> <div class="md:hidden fixed top-14 right-0 z-40 w-64 h-[calc(100vh-3.5rem)] bg-background border-l border-border shadow-xl"><nav class="p-4 flex flex-col gap-2"><button class="text-lg font-medium py-3 px-4 text-left hover:bg-secondary rounded-md transition-colors">Home</button> <button class="text-lg font-medium py-3 px-4 text-left hover:bg-secondary rounded-md transition-colors">About</button> <button class="text-lg font-medium py-3 px-4 text-left hover:bg-secondary rounded-md transition-colors">Download</button> <a class="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-md transition-colors">Wiki</a></nav></div>',1),Xt=F('<header><nav class="container mx-auto px-4 h-full flex items-center justify-between"><a class="flex items-center"><img alt="TCG Lightning" class="h-8 w-auto"/></a> <div class="hidden md:flex items-center gap-6"><button>Home</button> <button>About</button> <button>Download</button> <a>Wiki</a></div> <!></nav> <!></header>');function Qt(e,t){rt(t,!0);const a=()=>ct(ft,"$page",s),[s,n]=it();let r=W("hero"),o=W(!1),h=W(!1);const $=["hero","about","download"];let i=Ct(()=>a().url.pathname===`${C}/`||a().url.pathname===`${C}`||a().url.pathname==="/");async function c(u){if(z(o,!1),p(i)){const f=document.getElementById(u);f&&f.scrollIntoView({behavior:"smooth"})}else await Lt(`${C}/`),await At(),setTimeout(()=>{const f=document.getElementById(u);f&&f.scrollIntoView({behavior:"smooth"})},100)}function A(){if(z(h,window.scrollY>20),!!p(i))for(const u of $){const f=document.getElementById(u);if(!f)continue;const I=f.getBoundingClientRect();if(I.top<=100&&I.bottom>=100){z(r,u,!0);break}}}Rt(()=>{const u=Bt(A,100);return window.addEventListener("scroll",u),A(),()=>window.removeEventListener("scroll",u)}),St(()=>{p(o)?document.body.style.overflow="hidden":document.body.style.overflow=""});var l=Xt(),d=E(l),g=E(d),m=E(g);N(g);var _=x(g,2),y=E(_);y.__click=()=>c("hero");var v=x(y,2);v.__click=()=>c("about");var w=x(v,2);w.__click=()=>c("download");var b=x(w,2);N(_);var P=x(_,2);zt(P,{variant:"ghost",size:"icon",class:"md:hidden",onclick:()=>z(o,!p(o)),"aria-label":"Toggle menu",children:(u,f)=>{var I=G(),j=K(I);{var L=k=>{Yt(k,{class:"size-5"})},q=k=>{Vt(k,{class:"size-5"})};Q(j,k=>{p(o)?k(L):k(q,!1)})}S(u,I)},$$slots:{default:!0}}),N(d);var B=x(d,2);{var R=u=>{var f=Jt(),I=K(f);I.__click=()=>z(o,!1);var j=x(I,2),L=E(j),q=E(L);q.__click=()=>c("hero");var k=x(q,2);k.__click=()=>c("about");var V=x(k,2);V.__click=()=>c("download");var Y=x(V,2);Y.__click=()=>z(o,!1),N(L),N(j),J(()=>H(Y,"href",`${C??""}/wiki`)),S(u,f)};Q(B,u=>{p(o)&&u(R)})}N(l),J(u=>{O(l,1,`sticky top-0 z-50 h-14 border-b transition-all duration-200 ${p(h)?"bg-background border-border":"bg-transparent border-transparent"}`),H(g,"href",`${C??""}/`),H(m,"src",`${C??""}/logo_full.png`),O(y,1,`text-sm font-medium transition-colors hover:text-primary ${p(i)&&p(r)==="hero"?"text-primary":"text-muted-foreground"}`),O(v,1,`text-sm font-medium transition-colors hover:text-primary ${p(i)&&p(r)==="about"?"text-primary":"text-muted-foreground"}`),O(w,1,`text-sm font-medium transition-colors hover:text-primary ${p(i)&&p(r)==="download"?"text-primary":"text-muted-foreground"}`),H(b,"href",`${C??""}/wiki`),O(b,1,`text-sm font-medium transition-colors hover:text-primary ${u??""}`)},[()=>a().url.pathname.includes("/wiki")?"text-primary":"text-muted-foreground"]),S(e,l),ot(),n()}vt(["click"]);const Zt=e=>e;function et(e,{delay:t=0,duration:a=400,easing:s=Zt}={}){const n=+getComputedStyle(e).opacity;return{delay:t,duration:a,easing:s,css:r=>`opacity: ${r*n}`}}var te=F('<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>',1),ee=F('<main class="flex-1"><!></main>'),ae=F(`<div class="min-h-screen flex flex-col font-sans" style="font-family: 'Inter', system-ui, sans-serif;"><!> <!> <footer class="border-t border-border py-8"><div class="container mx-auto px-4 text-center text-sm text-muted-foreground"><p>Built with Tauri, SvelteKit & AI.</p></div></footer></div>`);function me(e,t){rt(t,!0);const a=()=>ct(ft,"$page",s),[s,n]=it();var r=ae();Mt("12qhfyh",$=>{var i=te();X(4),S($,i)});var o=E(r);Qt(o,{});var h=x(o,2);qt(h,()=>a().url.pathname,$=>{var i=ee(),c=E(i);Ot(c,()=>t.children),N(i),tt(1,i,()=>et,()=>({duration:200,delay:200})),tt(2,i,()=>et,()=>({duration:200})),S($,i)}),X(2),N(r),S(e,r),ot(),n()}export{me as component,ve as universal};
