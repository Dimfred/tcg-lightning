import{d as G,a as S,j as mt,f as P}from"../chunks/B1tBp00q.js";import{b1 as bt,b as ht,h as pt,a as gt,C as _t,E as yt,b2 as xt,aO as wt,e as $t,d as kt,b3 as Tt,b4 as It,b5 as Et,aC as Nt,A as St,an as O,aK as at,n as K,p as rt,u as At,i as p,t as J,o as ot,ar as z,aH as Ct,q as E,v as x,aJ as zt,s as N,aI as W,Y as X}from"../chunks/BM0v2vWf.js";import{B as Bt,t as Mt,s as F,b as H,h as Ot,c as Ft}from"../chunks/aDgJapFd.js";import{B as Pt,l as st,s as nt,i as Q,a as it,c as ct}from"../chunks/Dl3WZ2AC.js";import{b as Rt}from"../chunks/CeReud4B.js";import{o as jt}from"../chunks/Hx6kqZff.js";import{s as Lt,g as qt}from"../chunks/dtrAmbji.js";import{I as lt,s as dt,r as B,a as Ht}from"../chunks/BB2MvycD.js";import"../chunks/C5wWcj9d.js";function Kt(e,t,a){pt&&gt();var s=new Pt(e),n=!bt();ht(()=>{var r=t();n&&r!==null&&typeof r=="object"&&(r={}),s.ensure(r,a)})}const Ut=()=>performance.now(),I={tick:e=>requestAnimationFrame(e),now:()=>Ut(),tasks:new Set};function ut(){const e=I.now();I.tasks.forEach(t=>{t.c(e)||(I.tasks.delete(t),t.f())}),I.tasks.size!==0&&I.tick(ut)}function Wt(e){let t;return I.tasks.size===0&&I.tick(ut),{promise:new Promise(a=>{I.tasks.add(t={c:e,f:a})}),abort(){I.tasks.delete(t)}}}function U(e,t){at(()=>{e.dispatchEvent(new CustomEvent(t))})}function Dt(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function Z(e){const t={},a=e.split(";");for(const s of a){const[n,r]=s.split(":");if(!n||r===void 0)break;const o=Dt(n.trim());t[o]=r.trim()}return t}const Gt=e=>e;function tt(e,t,a,s){var k;var n=(e&It)!==0,r=(e&Et)!==0,o=n&&r,h=(e&Tt)!==0,$=o?"both":n?"in":"out",i,c=t.inert,A=t.style.overflow,l,d;function g(){return at(()=>i??(i=a()(t,(s==null?void 0:s())??{},{direction:$})))}var m={is_global:h,in(){var b;if(t.inert=c,!n){d==null||d.abort(),(b=d==null?void 0:d.reset)==null||b.call(d);return}r||l==null||l.abort(),l=D(t,g(),d,1,()=>{U(t,"introend"),l==null||l.abort(),l=i=void 0,t.style.overflow=A})},out(b){if(!r){b==null||b(),i=void 0;return}t.inert=!0,d=D(t,g(),l,0,()=>{U(t,"outroend"),b==null||b()})},stop:()=>{l==null||l.abort(),d==null||d.abort()}},_=_t;if(((k=_.nodes).t??(k.t=[])).push(m),n&&Rt){var y=h;if(!y){for(var v=_.parent;v&&(v.f&yt)!==0;)for(;(v=v.parent)&&(v.f&xt)===0;);y=!v||(v.f&wt)!==0}y&&$t(()=>{kt(()=>m.in())})}}function D(e,t,a,s,n){var r=s===1;if(Nt(t)){var o,h=!1;return St(()=>{if(!h){var _=t({direction:r?"in":"out"});o=D(e,_,a,s,n)}}),{abort:()=>{h=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(a==null||a.deactivate(),!(t!=null&&t.duration)&&!(t!=null&&t.delay))return U(e,r?"introstart":"outrostart"),n(),{abort:O,deactivate:O,reset:O,t:()=>s};const{delay:$=0,css:i,tick:c,easing:A=Gt}=t;var l=[];if(r&&a===void 0&&(c&&c(0,1),i)){var d=Z(i(0,1));l.push(d,d)}var g=()=>1-s,m=e.animate(l,{duration:$,fill:"forwards"});return m.onfinish=()=>{m.cancel(),U(e,r?"introstart":"outrostart");var _=(a==null?void 0:a.t())??1-s;a==null||a.abort();var y=s-_,v=t.duration*Math.abs(y),k=[];if(v>0){var b=!1;if(i)for(var R=Math.ceil(v/16.666666666666668),M=0;M<=R;M+=1){var j=_+y*A(M/R),u=Z(i(j,1-j));k.push(u),b||(b=u.overflow==="hidden")}b&&(e.style.overflow="hidden"),g=()=>{var f=m.currentTime;return _+y*A(f/v)},c&&Wt(()=>{if(m.playState!=="running")return!1;var f=g();return c(f,1-f),!0})}m=e.animate(k,{duration:v,fill:"forwards"}),m.onfinish=()=>{g=()=>s,c==null||c(s,1-s),n()}},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=O)},deactivate:()=>{n=O},reset:()=>{s===0&&(c==null||c(1,0))},t:()=>g()}}const Vt=!0,me=Object.freeze(Object.defineProperty({__proto__:null,prerender:Vt},Symbol.toStringTag,{value:"Module"})),Yt=()=>{const e=Lt;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},ft={subscribe(e){return Yt().page.subscribe(e)}};function Jt(e,t){const a=st(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];lt(e,nt({name:"menu"},()=>a,{get iconNode(){return s},children:(n,r)=>{var o=G(),h=K(o);dt(h,t,"default",{}),S(n,o)},$$slots:{default:!0}}))}function Xt(e,t){const a=st(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];lt(e,nt({name:"x"},()=>a,{get iconNode(){return s},children:(n,r)=>{var o=G(),h=K(o);dt(h,t,"default",{}),S(n,o)},$$slots:{default:!0}}))}var Qt=P('<button class="md:hidden fixed inset-0 top-14 z-30 bg-black/50" aria-label="Close menu"></button> <div class="md:hidden fixed top-14 right-0 z-40 w-64 h-[calc(100vh-3.5rem)] bg-background border-l border-border shadow-xl"><nav class="p-4 flex flex-col gap-2"><button class="text-lg font-medium py-3 px-4 text-left hover:bg-secondary rounded-md transition-colors">Home</button> <button class="text-lg font-medium py-3 px-4 text-left hover:bg-secondary rounded-md transition-colors">About</button> <button class="text-lg font-medium py-3 px-4 text-left hover:bg-secondary rounded-md transition-colors">Download</button> <a class="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-md transition-colors">Wiki</a></nav></div>',1),Zt=P('<header><nav class="container mx-auto px-4 h-full flex items-center justify-between"><a class="flex items-center"><img alt="TCG Lightning" class="h-8 w-auto"/></a> <div class="hidden md:flex items-center gap-6"><button>Home</button> <button>About</button> <button>Download</button> <a>Wiki</a></div> <!></nav> <!></header>');function te(e,t){rt(t,!0);const a=()=>ct(ft,"$page",s),[s,n]=it();let r=W("hero"),o=W(!1),h=W(!1);const $=["hero","about","download"];let i=zt(()=>a().url.pathname===B("/")||a().url.pathname===B("")||a().url.pathname==="/");async function c(u){if(z(o,!1),p(i)){const f=document.getElementById(u);f&&f.scrollIntoView({behavior:"smooth"})}else await qt(B("/")),await Ct(),setTimeout(()=>{const f=document.getElementById(u);f&&f.scrollIntoView({behavior:"smooth"})},100)}function A(){if(z(h,window.scrollY>20),!!p(i))for(const u of $){const f=document.getElementById(u);if(!f)continue;const w=f.getBoundingClientRect();if(w.top<=100&&w.bottom>=100){z(r,u,!0);break}}}jt(()=>{const u=Mt(A,100);return window.addEventListener("scroll",u),A(),()=>window.removeEventListener("scroll",u)}),At(()=>{p(o)?document.body.style.overflow="hidden":document.body.style.overflow=""});var l=Zt(),d=E(l),g=E(d),m=E(g);N(g);var _=x(g,2),y=E(_);y.__click=()=>c("hero");var v=x(y,2);v.__click=()=>c("about");var k=x(v,2);k.__click=()=>c("download");var b=x(k,2);N(_);var R=x(_,2);Bt(R,{variant:"ghost",size:"icon",class:"md:hidden",onclick:()=>z(o,!p(o)),"aria-label":"Toggle menu",children:(u,f)=>{var w=G(),C=K(w);{var L=T=>{Xt(T,{class:"size-5"})},q=T=>{Jt(T,{class:"size-5"})};Q(C,T=>{p(o)?T(L):T(q,!1)})}S(u,w)},$$slots:{default:!0}}),N(d);var M=x(d,2);{var j=u=>{var f=Qt(),w=K(f);w.__click=()=>z(o,!1);var C=x(w,2),L=E(C),q=E(L);q.__click=()=>c("hero");var T=x(q,2);T.__click=()=>c("about");var V=x(T,2);V.__click=()=>c("download");var Y=x(V,2);Y.__click=()=>z(o,!1),N(L),N(C),J(vt=>H(Y,"href",vt),[()=>B("/wiki")]),S(u,f)};Q(M,u=>{p(o)&&u(j)})}N(l),J((u,f,w,C)=>{F(l,1,`sticky top-0 z-50 h-14 border-b transition-all duration-200 ${p(h)?"bg-background border-border":"bg-transparent border-transparent"}`),H(g,"href",u),H(m,"src",f),F(y,1,`text-sm font-medium transition-colors hover:text-primary ${p(i)&&p(r)==="hero"?"text-primary":"text-muted-foreground"}`),F(v,1,`text-sm font-medium transition-colors hover:text-primary ${p(i)&&p(r)==="about"?"text-primary":"text-muted-foreground"}`),F(k,1,`text-sm font-medium transition-colors hover:text-primary ${p(i)&&p(r)==="download"?"text-primary":"text-muted-foreground"}`),H(b,"href",w),F(b,1,`text-sm font-medium transition-colors hover:text-primary ${C??""}`)},[()=>B("/"),()=>Ht("/logo_full.png"),()=>B("/wiki"),()=>a().url.pathname.includes("/wiki")?"text-primary":"text-muted-foreground"]),S(e,l),ot(),n()}mt(["click"]);const ee=e=>e;function et(e,{delay:t=0,duration:a=400,easing:s=ee}={}){const n=+getComputedStyle(e).opacity;return{delay:t,duration:a,easing:s,css:r=>`opacity: ${r*n}`}}var ae=P('<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>',1),re=P('<main class="flex-1"><!></main>'),oe=P(`<div class="min-h-screen flex flex-col font-sans" style="font-family: 'Inter', system-ui, sans-serif;"><!> <!> <footer class="border-t border-border py-8"><div class="container mx-auto px-4 text-center text-sm text-muted-foreground"><p>Built with Tauri, SvelteKit & AI.</p></div></footer></div>`);function be(e,t){rt(t,!0);const a=()=>ct(ft,"$page",s),[s,n]=it();var r=oe();Ot("12qhfyh",$=>{var i=ae();X(4),S($,i)});var o=E(r);te(o,{});var h=x(o,2);Kt(h,()=>a().url.pathname,$=>{var i=re(),c=E(i);Ft(c,()=>t.children),N(i),tt(1,i,()=>et,()=>({duration:200,delay:200})),tt(2,i,()=>et,()=>({duration:200})),S($,i)}),X(2),N(r),S(e,r),ot(),n()}export{be as component,me as universal};
