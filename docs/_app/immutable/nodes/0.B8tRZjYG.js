import{d as G,a as S,j as mt,f as P}from"../chunks/B1tBp00q.js";import{b1 as pt,b as bt,h as ht,a as gt,C as _t,E as yt,b2 as xt,aO as wt,e as $t,d as kt,b3 as Tt,b4 as It,b5 as Et,aC as Nt,A as St,an as O,aK as rt,n as K,p as at,u as At,i as h,t as J,o as ot,ar as z,aH as Ct,q as E,v as x,aJ as zt,s as N,aI as W,Y as X}from"../chunks/BM0v2vWf.js";import{B as Bt,t as Mt,s as F,b as H,h as Ot,c as Ft}from"../chunks/aDgJapFd.js";import{B as Pt,l as st,s as nt,i as Q,a as it,c as ct}from"../chunks/Dl3WZ2AC.js";import{b as Rt}from"../chunks/CeReud4B.js";import{o as jt}from"../chunks/Hx6kqZff.js";import{s as Lt,g as qt}from"../chunks/CR48-MAa.js";import{I as lt,s as dt,r as B,a as Ht}from"../chunks/CKVkW5Yv.js";import"../chunks/C5wWcj9d.js";function Kt(e,t,r){ht&&gt();var s=new Pt(e),n=!pt();bt(()=>{var a=t();n&&a!==null&&typeof a=="object"&&(a={}),s.ensure(a,r)})}const Ut=()=>performance.now(),I={tick:e=>requestAnimationFrame(e),now:()=>Ut(),tasks:new Set};function ut(){const e=I.now();I.tasks.forEach(t=>{t.c(e)||(I.tasks.delete(t),t.f())}),I.tasks.size!==0&&I.tick(ut)}function Wt(e){let t;return I.tasks.size===0&&I.tick(ut),{promise:new Promise(r=>{I.tasks.add(t={c:e,f:r})}),abort(){I.tasks.delete(t)}}}function U(e,t){rt(()=>{e.dispatchEvent(new CustomEvent(t))})}function Dt(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Z(e){const t={},r=e.split(";");for(const s of r){const[n,a]=s.split(":");if(!n||a===void 0)break;const o=Dt(n.trim());t[o]=a.trim()}return t}const Gt=e=>e;function tt(e,t,r,s){var k;var n=(e&It)!==0,a=(e&Et)!==0,o=n&&a,b=(e&Tt)!==0,$=o?"both":n?"in":"out",i,c=t.inert,A=t.style.overflow,l,d;function g(){return rt(()=>i??(i=r()(t,(s==null?void 0:s())??{},{direction:$})))}var m={is_global:b,in(){var p;if(t.inert=c,!n){d==null||d.abort(),(p=d==null?void 0:d.reset)==null||p.call(d);return}a||l==null||l.abort(),l=D(t,g(),d,1,()=>{U(t,"introend"),l==null||l.abort(),l=i=void 0,t.style.overflow=A})},out(p){if(!a){p==null||p(),i=void 0;return}t.inert=!0,d=D(t,g(),l,0,()=>{U(t,"outroend"),p==null||p()})},stop:()=>{l==null||l.abort(),d==null||d.abort()}},_=_t;if(((k=_.nodes).t??(k.t=[])).push(m),n&&Rt){var y=b;if(!y){for(var v=_.parent;v&&(v.f&yt)!==0;)for(;(v=v.parent)&&(v.f&xt)===0;);y=!v||(v.f&wt)!==0}y&&$t(()=>{kt(()=>m.in())})}}function D(e,t,r,s,n){var a=s===1;if(Nt(t)){var o,b=!1;return St(()=>{if(!b){var _=t({direction:a?"in":"out"});o=D(e,_,r,s,n)}}),{abort:()=>{b=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration)&&!(t!=null&&t.delay))return U(e,a?"introstart":"outrostart"),n(),{abort:O,deactivate:O,reset:O,t:()=>s};const{delay:$=0,css:i,tick:c,easing:A=Gt}=t;var l=[];if(a&&r===void 0&&(c&&c(0,1),i)){var d=Z(i(0,1));l.push(d,d)}var g=()=>1-s,m=e.animate(l,{duration:$,fill:"forwards"});return m.onfinish=()=>{m.cancel(),U(e,a?"introstart":"outrostart");var _=(r==null?void 0:r.t())??1-s;r==null||r.abort();var y=s-_,v=t.duration*Math.abs(y),k=[];if(v>0){var p=!1;if(i)for(var R=Math.ceil(v/16.666666666666668),M=0;M<=R;M+=1){var j=_+y*A(M/R),u=Z(i(j,1-j));k.push(u),p||(p=u.overflow==="hidden")}p&&(e.style.overflow="hidden"),g=()=>{var f=m.currentTime;return _+y*A(f/v)},c&&Wt(()=>{if(m.playState!=="running")return!1;var f=g();return c(f,1-f),!0})}m=e.animate(k,{duration:v,fill:"forwards"}),m.onfinish=()=>{g=()=>s,c==null||c(s,1-s),n()}},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=O)},deactivate:()=>{n=O},reset:()=>{s===0&&(c==null||c(1,0))},t:()=>g()}}const Vt=!0,me=Object.freeze(Object.defineProperty({__proto__:null,prerender:Vt},Symbol.toStringTag,{value:"Module"})),Yt=()=>{const e=Lt;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},ft={subscribe(e){return Yt().page.subscribe(e)}};function Jt(e,t){const r=st(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];lt(e,nt({name:"menu"},()=>r,{get iconNode(){return s},children:(n,a)=>{var o=G(),b=K(o);dt(b,t,"default",{}),S(n,o)},$$slots:{default:!0}}))}function Xt(e,t){const r=st(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];lt(e,nt({name:"x"},()=>r,{get iconNode(){return s},children:(n,a)=>{var o=G(),b=K(o);dt(b,t,"default",{}),S(n,o)},$$slots:{default:!0}}))}var Qt=P('<button class="md:hidden fixed inset-0 top-14 z-30 bg-black/50" aria-label="Close menu"></button> <div class="md:hidden fixed top-14 right-0 z-40 w-64 h-[calc(100vh-3.5rem)] bg-background border-l border-border shadow-xl"><nav class="p-4 flex flex-col gap-2"><button class="text-lg font-medium py-3 px-4 text-left hover:bg-secondary rounded-md transition-colors cursor-pointer">Home</button> <button class="text-lg font-medium py-3 px-4 text-left hover:bg-secondary rounded-md transition-colors cursor-pointer">About</button> <button class="text-lg font-medium py-3 px-4 text-left hover:bg-secondary rounded-md transition-colors cursor-pointer">Download</button> <a class="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-md transition-colors">Wiki</a></nav></div>',1),Zt=P('<header><nav class="container mx-auto px-4 h-full flex items-center justify-between"><a class="flex items-center"><img alt="TCG Lightning" class="h-8 w-auto"/></a> <div class="hidden md:flex items-center gap-6"><button>Home</button> <button>About</button> <button>Download</button> <a>Wiki</a></div> <!></nav> <!></header>');function te(e,t){at(t,!0);const r=()=>ct(ft,"$page",s),[s,n]=it();let a=W("hero"),o=W(!1),b=W(!1);const $=["hero","about","download"];let i=zt(()=>r().url.pathname===B("/")||r().url.pathname===B("")||r().url.pathname==="/");async function c(u){if(z(o,!1),h(i)){const f=document.getElementById(u);f&&f.scrollIntoView({behavior:"smooth"})}else await qt(B("/")),await Ct(),setTimeout(()=>{const f=document.getElementById(u);f&&f.scrollIntoView({behavior:"smooth"})},100)}function A(){if(z(b,window.scrollY>20),!!h(i))for(const u of $){const f=document.getElementById(u);if(!f)continue;const w=f.getBoundingClientRect();if(w.top<=100&&w.bottom>=100){z(a,u,!0);break}}}jt(()=>{const u=Mt(A,100);return window.addEventListener("scroll",u),A(),()=>window.removeEventListener("scroll",u)}),At(()=>{h(o)?document.body.style.overflow="hidden":document.body.style.overflow=""});var l=Zt(),d=E(l),g=E(d),m=E(g);N(g);var _=x(g,2),y=E(_);y.__click=()=>c("hero");var v=x(y,2);v.__click=()=>c("about");var k=x(v,2);k.__click=()=>c("download");var p=x(k,2);N(_);var R=x(_,2);Bt(R,{variant:"ghost",size:"icon",class:"md:hidden",onclick:()=>z(o,!h(o)),"aria-label":"Toggle menu",children:(u,f)=>{var w=G(),C=K(w);{var L=T=>{Xt(T,{class:"size-5"})},q=T=>{Jt(T,{class:"size-5"})};Q(C,T=>{h(o)?T(L):T(q,!1)})}S(u,w)},$$slots:{default:!0}}),N(d);var M=x(d,2);{var j=u=>{var f=Qt(),w=K(f);w.__click=()=>z(o,!1);var C=x(w,2),L=E(C),q=E(L);q.__click=()=>c("hero");var T=x(q,2);T.__click=()=>c("about");var V=x(T,2);V.__click=()=>c("download");var Y=x(V,2);Y.__click=()=>z(o,!1),N(L),N(C),J(vt=>H(Y,"href",vt),[()=>B("/wiki")]),S(u,f)};Q(M,u=>{h(o)&&u(j)})}N(l),J((u,f,w,C)=>{F(l,1,`sticky top-0 z-50 h-14 border-b transition-all duration-200 ${h(b)?"bg-background border-border":"bg-transparent border-transparent"}`),H(g,"href",u),H(m,"src",f),F(y,1,`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${h(i)&&h(a)==="hero"?"text-primary":"text-muted-foreground"}`),F(v,1,`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${h(i)&&h(a)==="about"?"text-primary":"text-muted-foreground"}`),F(k,1,`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${h(i)&&h(a)==="download"?"text-primary":"text-muted-foreground"}`),H(p,"href",w),F(p,1,`text-sm font-medium transition-colors hover:text-primary ${C??""}`)},[()=>B("/"),()=>Ht("/logo_full.png"),()=>B("/wiki"),()=>r().url.pathname.includes("/wiki")?"text-primary":"text-muted-foreground"]),S(e,l),ot(),n()}mt(["click"]);const ee=e=>e;function et(e,{delay:t=0,duration:r=400,easing:s=ee}={}){const n=+getComputedStyle(e).opacity;return{delay:t,duration:r,easing:s,css:a=>`opacity: ${a*n}`}}var re=P('<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>',1),ae=P('<main class="flex-1"><!></main>'),oe=P(`<div class="min-h-screen flex flex-col font-sans" style="font-family: 'Inter', system-ui, sans-serif;"><!> <!> <footer class="border-t border-border py-8"><div class="container mx-auto px-4 text-center text-sm text-muted-foreground"><p>Built with Tauri, SvelteKit & AI.</p></div></footer></div>`);function pe(e,t){at(t,!0);const r=()=>ct(ft,"$page",s),[s,n]=it();var a=oe();Ot("12qhfyh",$=>{var i=re();X(4),S($,i)});var o=E(a);te(o,{});var b=x(o,2);Kt(b,()=>r().url.pathname,$=>{var i=ae(),c=E(i);Ft(c,()=>t.children),N(i),tt(1,i,()=>et,()=>({duration:200,delay:200})),tt(2,i,()=>et,()=>({duration:200})),S($,i)}),X(2),N(a),S(e,a),ot(),n()}export{pe as component,me as universal};
