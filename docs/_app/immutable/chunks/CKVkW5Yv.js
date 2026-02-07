import{b as ue,r as pe,a as ge}from"./B-0GCB9C.js";import{c as me,e as Ee,a as re,g as we,d as be}from"./B1tBp00q.js";import{i as Ae}from"./C5wWcj9d.js";import{b as de,h as p,a as q,i as z,aj as Ce,H as Te,Z as ae,X as H,a9 as B,B as I,D as Ne,ae as ke,V as ne,ag as Se,J as P,aR as T,F as Y,ai as xe,aA as Ie,aS as Re,ac as U,aT as Me,aU as De,ao as Fe,y as ie,aV as He,ah as ce,I as ve,aW as X,aX as Oe,ab as We,W as ze,a7 as Be,a5 as he,aY as _e,A as ye,aZ as Le,al as Ve,a_ as Pe,E as qe,a$ as Xe,C as Ye,p as Je,o as Ue,j as D,d as se,q as Ze,v as Ge,s as Ke,n as Qe,aJ as $e,b0 as je}from"./BM0v2vWf.js";import{a as V}from"./CeReud4B.js";import{B as er,l as te,p as F}from"./Dl3WZ2AC.js";import{a as fe}from"./aDgJapFd.js";function rr(e,r){return r}function ar(e,r,i){for(var u=[],h=r.length,o,t=r.length,f=0;f<h;f++){let _=r[f];ve(_,()=>{if(o){if(o.pending.delete(_),o.done.add(_),o.pending.size===0){var d=e.outrogroups;J(U(o.done)),d.delete(o),d.size===0&&(e.outrogroups=null)}}else t-=1},!1)}if(t===0){var s=u.length===0&&i!==null;if(s){var v=i,n=v.parentNode;We(n),n.append(v),e.items.clear()}J(r,!s)}else o={pending:new Set(r),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(o)}function J(e,r=!0){for(var i=0;i<e.length;i++)ze(e[i],r)}var le;function nr(e,r,i,u,h,o=null){var t=e,f=new Map,s=(r&_e)!==0;if(s){var v=e;t=p?H(he(v)):v.appendChild(P())}p&&q();var n=null,_=Ie(()=>{var l=i();return Re(l)?l:l==null?[]:U(l)}),d,c=!0;function w(){a.fallback=n,ir(a,d,t,r,u),n!==null&&(d.length===0?(n.f&T)===0?ce(n):(n.f^=T,W(n,null,t)):ve(n,()=>{n=null}))}var b=de(()=>{d=z(_);var l=d.length;let A=!1;if(p){var N=Ce(t)===Te;N!==(l===0)&&(t=ae(),H(t),B(!1),A=!0)}for(var g=new Set,k=Se,R=xe(),m=0;m<l;m+=1){p&&I.nodeType===Ne&&I.data===ke&&(t=I,A=!0,B(!1));var x=d[m],M=u(x,m),E=c?null:f.get(M);E?(E.v&&ne(E.v,x),E.i&&ne(E.i,m),R&&k.unskip_effect(E.e)):(E=sr(f,c?t:le??(le=P()),x,M,m,h,r,i),c||(E.e.f|=T),f.set(M,E)),g.add(M)}if(l===0&&o&&!n&&(c?n=Y(()=>o(t)):(n=Y(()=>o(le??(le=P()))),n.f|=T)),p&&l>0&&H(ae()),!c)if(R){for(const[y,L]of f)g.has(y)||k.skip_effect(L.e);k.oncommit(w),k.ondiscard(()=>{})}else w();A&&B(!0),z(_)}),a={effect:b,items:f,outrogroups:null,fallback:n};c=!1,p&&(t=I)}function O(e){for(;e!==null&&(e.f&Oe)===0;)e=e.next;return e}function ir(e,r,i,u,h){var E,y,L,Z,G,K,Q,$,j;var o=(u&Le)!==0,t=r.length,f=e.items,s=O(e.effect.first),v,n=null,_,d=[],c=[],w,b,a,l;if(o)for(l=0;l<t;l+=1)w=r[l],b=h(w,l),a=f.get(b).e,(a.f&T)===0&&((y=(E=a.nodes)==null?void 0:E.a)==null||y.measure(),(_??(_=new Set)).add(a));for(l=0;l<t;l+=1){if(w=r[l],b=h(w,l),a=f.get(b).e,e.outrogroups!==null)for(const C of e.outrogroups)C.pending.delete(a),C.done.delete(a);if((a.f&T)!==0)if(a.f^=T,a===s)W(a,null,i);else{var A=n?n.next:s;a===e.effect.last&&(e.effect.last=a.prev),a.prev&&(a.prev.next=a.next),a.next&&(a.next.prev=a.prev),S(e,n,a),S(e,a,A),W(a,A,i),n=a,d=[],c=[],s=O(n.next);continue}if((a.f&X)!==0&&(ce(a),o&&((Z=(L=a.nodes)==null?void 0:L.a)==null||Z.unfix(),(_??(_=new Set)).delete(a))),a!==s){if(v!==void 0&&v.has(a)){if(d.length<c.length){var N=c[0],g;n=N.prev;var k=d[0],R=d[d.length-1];for(g=0;g<d.length;g+=1)W(d[g],N,i);for(g=0;g<c.length;g+=1)v.delete(c[g]);S(e,k.prev,R.next),S(e,n,k),S(e,R,N),s=N,n=R,l-=1,d=[],c=[]}else v.delete(a),W(a,s,i),S(e,a.prev,a.next),S(e,a,n===null?e.effect.first:n.next),S(e,n,a),n=a;continue}for(d=[],c=[];s!==null&&s!==a;)(v??(v=new Set)).add(s),c.push(s),s=O(s.next);if(s===null)continue}(a.f&T)===0&&d.push(a),n=a,s=O(a.next)}if(e.outrogroups!==null){for(const C of e.outrogroups)C.pending.size===0&&(J(U(C.done)),(G=e.outrogroups)==null||G.delete(C));e.outrogroups.size===0&&(e.outrogroups=null)}if(s!==null||v!==void 0){var m=[];if(v!==void 0)for(a of v)(a.f&X)===0&&m.push(a);for(;s!==null;)(s.f&X)===0&&s!==e.fallback&&m.push(s),s=O(s.next);var x=m.length;if(x>0){var M=(u&_e)!==0&&t===0?i:null;if(o){for(l=0;l<x;l+=1)(Q=(K=m[l].nodes)==null?void 0:K.a)==null||Q.measure();for(l=0;l<x;l+=1)(j=($=m[l].nodes)==null?void 0:$.a)==null||j.fix()}ar(e,m,M)}}o&&ye(()=>{var C,ee;if(_!==void 0)for(a of _)(ee=(C=a.nodes)==null?void 0:C.a)==null||ee.apply()})}function sr(e,r,i,u,h,o,t,f){var s=(t&Me)!==0?(t&De)===0?Fe(i,!1,!1):ie(i):null,v=(t&He)!==0?ie(h):null;return{v:s,i:v,e:Y(()=>(o(r,s??i,v??h,f),()=>{e.delete(u)}))}}function W(e,r,i){if(e.nodes)for(var u=e.nodes.start,h=e.nodes.end,o=r&&(r.f&T)===0?r.nodes.start:i;u!==null;){var t=Be(u);if(o.before(u),u===h)return;u=t}}function S(e,r,i){r===null?e.effect.first=i:r.next=i,i===null?e.effect.last=r:i.prev=r}function tr(e,r,i,u,h){var f;p&&q();var o=(f=r.$$slots)==null?void 0:f[i],t=!1;o===!0&&(o=r.children,t=!0),o===void 0||o(e,t?()=>u:u)}function fr(e,r,i,u,h,o){let t=p;p&&q();var f=null;p&&I.nodeType===Pe&&(f=I,q());var s=p?I:e,v=new er(s,!1);de(()=>{const n=r()||null;var _=i||n==="svg"?Xe:null;if(n===null){v.ensure(null,null),V(!0);return}return v.ensure(n,d=>{if(n){if(f=p?f:_?document.createElementNS(_,n):document.createElement(n),me(f,f),u){p&&Ee(n)&&f.append(document.createComment(""));var c=p?he(f):f.appendChild(P());p&&(c===null?B(!1):H(c)),u(f,c)}Ye.nodes.end=f,d.before(f)}p&&H(d)}),V(!0),()=>{n&&V(!1)}},qe),Ve(()=>{V(!0)}),t&&(B(!0),H(s))}function Er(e){return(ge||ue)+e}const lr="";function wr(...e){return ue+lr+pe(e[0],e[1])}/**
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
 */const or={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const ur=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
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
 */const oe=(...e)=>e.filter((r,i,u)=>!!r&&r.trim()!==""&&u.indexOf(r)===i).join(" ").trim();var dr=we("<svg><!><!></svg>");function br(e,r){const i=te(r,["children","$$slots","$$events","$$legacy"]),u=te(i,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Je(r,!1);let h=F(r,"name",8,void 0),o=F(r,"color",8,"currentColor"),t=F(r,"size",8,24),f=F(r,"strokeWidth",8,2),s=F(r,"absoluteStrokeWidth",8,!1),v=F(r,"iconNode",24,()=>[]);Ae();var n=dr();fe(n,(c,w,b)=>({...or,...c,...u,width:t(),height:t(),stroke:o(),"stroke-width":w,class:b}),[()=>ur(u)?void 0:{"aria-hidden":"true"},()=>(D(s()),D(f()),D(t()),se(()=>s()?Number(f())*24/Number(t()):f())),()=>(D(oe),D(h()),D(i),se(()=>oe("lucide-icon","lucide",h()?`lucide-${h()}`:"",i.class)))]);var _=Ze(n);nr(_,1,v,rr,(c,w)=>{var b=$e(()=>je(z(w),2));let a=()=>z(b)[0],l=()=>z(b)[1];var A=be(),N=Qe(A);fr(N,a,!0,(g,k)=>{fe(g,()=>({...l()}))}),re(c,A)});var d=Ge(_);tr(d,r,"default",{}),Ke(n),re(e,n),Ue()}export{br as I,Er as a,fr as b,nr as e,rr as i,wr as r,tr as s};
