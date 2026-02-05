import{c as _e,e as pe,a as re,g as ge,d as me}from"./Ol5fBbXL.js";import{i as Ee}from"./BH8WQV1z.js";import{b as ue,h as p,a as q,i as z,aj as we,H as Ae,Z as ae,X as H,a9 as B,B as I,D as Ce,ae as Te,V as ne,ag as be,J as P,aR as b,F as Y,ai as Ne,aA as ke,aS as Se,ac as U,aT as xe,aU as Ie,ao as Re,y as ie,aV as Me,ah as de,I as ce,aW as X,aX as De,ab as Fe,W as He,a7 as Oe,a5 as ve,aY as he,A as We,aZ as ze,al as Be,a_ as ye,E as Le,a$ as Ve,C as Pe,p as qe,o as Xe,j as D,d as te,q as Ye,v as Je,s as Ue,n as Ze,aJ as Ge,b0 as Ke}from"./CVRKOA1p.js";import{a as V}from"./BbfsfgUm.js";import{B as Qe,l as se,p as F}from"./Dv7CT2Sx.js";import{a as fe}from"./CvxAkOQm.js";function $e(e,r){return r}function je(e,r,i){for(var u=[],h=r.length,o,s=r.length,f=0;f<h;f++){let _=r[f];ce(_,()=>{if(o){if(o.pending.delete(_),o.done.add(_),o.pending.size===0){var d=e.outrogroups;J(U(o.done)),d.delete(o),d.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var t=u.length===0&&i!==null;if(t){var v=i,n=v.parentNode;Fe(n),n.append(v),e.items.clear()}J(r,!t)}else o={pending:new Set(r),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(o)}function J(e,r=!0){for(var i=0;i<e.length;i++)He(e[i],r)}var le;function er(e,r,i,u,h,o=null){var s=e,f=new Map,t=(r&he)!==0;if(t){var v=e;s=p?H(ve(v)):v.appendChild(P())}p&&q();var n=null,_=ke(()=>{var l=i();return Se(l)?l:l==null?[]:U(l)}),d,c=!0;function w(){a.fallback=n,rr(a,d,s,r,u),n!==null&&(d.length===0?(n.f&b)===0?de(n):(n.f^=b,W(n,null,s)):ce(n,()=>{n=null}))}var A=ue(()=>{d=z(_);var l=d.length;let C=!1;if(p){var N=we(s)===Ae;N!==(l===0)&&(s=ae(),H(s),B(!1),C=!0)}for(var g=new Set,k=be,R=Ne(),m=0;m<l;m+=1){p&&I.nodeType===Ce&&I.data===Te&&(s=I,C=!0,B(!1));var x=d[m],M=u(x,m),E=c?null:f.get(M);E?(E.v&&ne(E.v,x),E.i&&ne(E.i,m),R&&k.unskip_effect(E.e)):(E=ar(f,c?s:le??(le=P()),x,M,m,h,r,i),c||(E.e.f|=b),f.set(M,E)),g.add(M)}if(l===0&&o&&!n&&(c?n=Y(()=>o(s)):(n=Y(()=>o(le??(le=P()))),n.f|=b)),p&&l>0&&H(ae()),!c)if(R){for(const[y,L]of f)g.has(y)||k.skip_effect(L.e);k.oncommit(w),k.ondiscard(()=>{})}else w();C&&B(!0),z(_)}),a={effect:A,items:f,outrogroups:null,fallback:n};c=!1,p&&(s=I)}function O(e){for(;e!==null&&(e.f&De)===0;)e=e.next;return e}function rr(e,r,i,u,h){var E,y,L,Z,G,K,Q,$,j;var o=(u&ze)!==0,s=r.length,f=e.items,t=O(e.effect.first),v,n=null,_,d=[],c=[],w,A,a,l;if(o)for(l=0;l<s;l+=1)w=r[l],A=h(w,l),a=f.get(A).e,(a.f&b)===0&&((y=(E=a.nodes)==null?void 0:E.a)==null||y.measure(),(_??(_=new Set)).add(a));for(l=0;l<s;l+=1){if(w=r[l],A=h(w,l),a=f.get(A).e,e.outrogroups!==null)for(const T of e.outrogroups)T.pending.delete(a),T.done.delete(a);if((a.f&b)!==0)if(a.f^=b,a===t)W(a,null,i);else{var C=n?n.next:t;a===e.effect.last&&(e.effect.last=a.prev),a.prev&&(a.prev.next=a.next),a.next&&(a.next.prev=a.prev),S(e,n,a),S(e,a,C),W(a,C,i),n=a,d=[],c=[],t=O(n.next);continue}if((a.f&X)!==0&&(de(a),o&&((Z=(L=a.nodes)==null?void 0:L.a)==null||Z.unfix(),(_??(_=new Set)).delete(a))),a!==t){if(v!==void 0&&v.has(a)){if(d.length<c.length){var N=c[0],g;n=N.prev;var k=d[0],R=d[d.length-1];for(g=0;g<d.length;g+=1)W(d[g],N,i);for(g=0;g<c.length;g+=1)v.delete(c[g]);S(e,k.prev,R.next),S(e,n,k),S(e,R,N),t=N,n=R,l-=1,d=[],c=[]}else v.delete(a),W(a,t,i),S(e,a.prev,a.next),S(e,a,n===null?e.effect.first:n.next),S(e,n,a),n=a;continue}for(d=[],c=[];t!==null&&t!==a;)(v??(v=new Set)).add(t),c.push(t),t=O(t.next);if(t===null)continue}(a.f&b)===0&&d.push(a),n=a,t=O(a.next)}if(e.outrogroups!==null){for(const T of e.outrogroups)T.pending.size===0&&(J(U(T.done)),(G=e.outrogroups)==null||G.delete(T));e.outrogroups.size===0&&(e.outrogroups=null)}if(t!==null||v!==void 0){var m=[];if(v!==void 0)for(a of v)(a.f&X)===0&&m.push(a);for(;t!==null;)(t.f&X)===0&&t!==e.fallback&&m.push(t),t=O(t.next);var x=m.length;if(x>0){var M=(u&he)!==0&&s===0?i:null;if(o){for(l=0;l<x;l+=1)(Q=(K=m[l].nodes)==null?void 0:K.a)==null||Q.measure();for(l=0;l<x;l+=1)(j=($=m[l].nodes)==null?void 0:$.a)==null||j.fix()}je(e,m,M)}}o&&We(()=>{var T,ee;if(_!==void 0)for(a of _)(ee=(T=a.nodes)==null?void 0:T.a)==null||ee.apply()})}function ar(e,r,i,u,h,o,s,f){var t=(s&xe)!==0?(s&Ie)===0?Re(i,!1,!1):ie(i):null,v=(s&Me)!==0?ie(h):null;return{v:t,i:v,e:Y(()=>(o(r,t??i,v??h,f),()=>{e.delete(u)}))}}function W(e,r,i){if(e.nodes)for(var u=e.nodes.start,h=e.nodes.end,o=r&&(r.f&b)===0?r.nodes.start:i;u!==null;){var s=Oe(u);if(o.before(u),u===h)return;u=s}}function S(e,r,i){r===null?e.effect.first=i:r.next=i,i===null?e.effect.last=r:i.prev=r}function nr(e,r,i,u,h){var f;p&&q();var o=(f=r.$$slots)==null?void 0:f[i],s=!1;o===!0&&(o=r.children,s=!0),o===void 0||o(e,s?()=>u:u)}function ir(e,r,i,u,h,o){let s=p;p&&q();var f=null;p&&I.nodeType===ye&&(f=I,q());var t=p?I:e,v=new Qe(t,!1);ue(()=>{const n=r()||null;var _=i||n==="svg"?Ve:null;if(n===null){v.ensure(null,null),V(!0);return}return v.ensure(n,d=>{if(n){if(f=p?f:_?document.createElementNS(_,n):document.createElement(n),_e(f,f),u){p&&pe(n)&&f.append(document.createComment(""));var c=p?ve(f):f.appendChild(P());p&&(c===null?B(!1):H(c)),u(f,c)}Pe.nodes.end=f,d.before(f)}p&&H(d)}),V(!0),()=>{n&&V(!1)}},Le),Be(()=>{V(!0)}),s&&(B(!0),H(t))}/**
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
 */const tr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const sr=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
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
 */const oe=(...e)=>e.filter((r,i,u)=>!!r&&r.trim()!==""&&u.indexOf(r)===i).join(" ").trim();var fr=ge("<svg><!><!></svg>");function hr(e,r){const i=se(r,["children","$$slots","$$events","$$legacy"]),u=se(i,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);qe(r,!1);let h=F(r,"name",8,void 0),o=F(r,"color",8,"currentColor"),s=F(r,"size",8,24),f=F(r,"strokeWidth",8,2),t=F(r,"absoluteStrokeWidth",8,!1),v=F(r,"iconNode",24,()=>[]);Ee();var n=fr();fe(n,(c,w,A)=>({...tr,...c,...u,width:s(),height:s(),stroke:o(),"stroke-width":w,class:A}),[()=>sr(u)?void 0:{"aria-hidden":"true"},()=>(D(t()),D(f()),D(s()),te(()=>t()?Number(f())*24/Number(s()):f())),()=>(D(oe),D(h()),D(i),te(()=>oe("lucide-icon","lucide",h()?`lucide-${h()}`:"",i.class)))]);var _=Ye(n);er(_,1,v,$e,(c,w)=>{var A=Ge(()=>Ke(z(w),2));let a=()=>z(A)[0],l=()=>z(A)[1];var C=me(),N=Ze(C);ir(N,a,!0,(g,k)=>{fe(g,()=>({...l()}))}),re(c,C)});var d=Je(_);nr(d,r,"default",{}),Ue(n),re(e,n),Xe()}export{hr as I,ir as a,er as e,$e as i,nr as s};
