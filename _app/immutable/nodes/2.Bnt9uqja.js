import{t as J,b as L}from"../chunks/DFu26PGv.js";import{F as G,A as w,o as Q,O as a,X as j,Y as ee,Z as V,n as $,m as k,p as O,q as re,_ as X,z as K,$ as ae,a0 as D,w as P,f as z,a1 as te,a2 as ne,a3 as F,a4 as se,a5 as ie,v as le,a6 as oe,J as ve,a7 as fe,a8 as ue,j as de,i as ce,B as _e,a9 as H,aa as pe,V as Y,C as he,K as M,ab as S,L as T,W as q}from"../chunks/TcjirzvR.js";import{s as C}from"../chunks/D5xvKt8r.js";import{o as ge}from"../chunks/DVeRuPW9.js";function ye(s,r){return r}function me(s,r,n,o){for(var _=[],e=r.length,u=0;u<e;u++)ie(r[u].e,_,!0);var h=e>0&&_.length===0&&n!==null;if(h){var d=n.parentNode;le(d),d.append(n),o.clear(),b(s,r[0].prev,r[e-1].next)}oe(_,()=>{for(var g=0;g<e;g++){var t=r[g];h||(o.delete(t.k),b(s,t.prev,t.next)),ve(t.e,!h)}})}function xe(s,r,n,o,_,e=null){var u=s,h={flags:r,items:new Map,first:null};w&&Q();var d=null,g=!1,t=j(()=>{var c=n();return ce(c)?c:c==null?[]:P(c)});G(()=>{var c=a(t),i=c.length;if(g&&i===0)return;g=i===0;let p=!1;if(w){var f=u.data===ee;f!==(i===0)&&(u=V(),$(u),k(!1),p=!0)}if(w){for(var x=null,y,l=0;l<i;l++){if(O.nodeType===8&&O.data===re){u=O,p=!0,k(!1);break}var v=c[l],m=o(v,l);y=U(O,h,x,null,v,m,l,_,r,n),h.items.set(m,y),x=y}i>0&&$(V())}w||Ae(c,h,u,_,r,o,n),e!==null&&(i===0?d?X(d):d=K(()=>e(u)):d!==null&&ae(d,()=>{d=null})),p&&k(!0),a(t)}),w&&(u=O)}function Ae(s,r,n,o,_,e,u){var h=s.length,d=r.items,g=r.first,t=g,c,i=null,p=[],f=[],x,y,l,v;for(v=0;v<h;v+=1){if(x=s[v],y=e(x,v),l=d.get(y),l===void 0){var m=t?t.e.nodes_start:n;i=U(m,r,i,i===null?r.first:i.next,x,y,v,o,_,u),d.set(y,i),p=[],f=[],t=i.next;continue}if(Ee(l,x,v),(l.e.f&D)!==0&&X(l.e),l!==t){if(c!==void 0&&c.has(l)){if(p.length<f.length){var E=f[0],A;i=E.prev;var I=p[0],N=p[p.length-1];for(A=0;A<p.length;A+=1)B(p[A],E,n);for(A=0;A<f.length;A+=1)c.delete(f[A]);b(r,I.prev,N.next),b(r,i,I),b(r,N,E),t=E,i=N,v-=1,p=[],f=[]}else c.delete(l),B(l,t,n),b(r,l.prev,l.next),b(r,l,i===null?r.first:i.next),b(r,i,l),i=l;continue}for(p=[],f=[];t!==null&&t.k!==y;)(t.e.f&D)===0&&(c??(c=new Set)).add(t),f.push(t),t=t.next;if(t===null)continue;l=t}p.push(l),i=l,t=l.next}if(t!==null||c!==void 0){for(var R=c===void 0?[]:P(c);t!==null;)(t.e.f&D)===0&&R.push(t),t=t.next;var W=R.length;if(W>0){var Z=null;me(r,R,Z,d)}}z.first=r.first&&r.first.e,z.last=i&&i.e}function Ee(s,r,n,o){te(s.v,r),s.i=n}function U(s,r,n,o,_,e,u,h,d,g){var t=(d&fe)!==0,c=(d&ue)===0,i=t?c?ne(_):F(_):_,p=(d&se)===0?u:F(u),f={i:p,v:i,k:e,a:null,e:null,prev:n,next:o};try{return f.e=K(()=>h(s,i,p,g),w),f.e.prev=n&&n.e,f.e.next=o&&o.e,n===null?r.first=f:(n.next=f,n.e.next=f.e),o!==null&&(o.prev=f,o.e.prev=f.e),f}finally{}}function B(s,r,n){for(var o=s.next?s.next.e.nodes_start:n,_=r?r.e.nodes_start:n,e=s.e.nodes_start;e!==o;){var u=de(e);_.before(e),e=u}}function b(s,r,n){r===null?s.first=n:(r.next=n,r.e.next=n&&n.e),n!==null&&(n.prev=r,n.e.prev=r&&r.e)}function be(s,r){return s==null?null:String(s)}function we(s,r,n,o){var _=s.__style;if(w||_!==r){var e=be(r);(!w||e!==s.getAttribute("style"))&&(e==null?s.removeAttribute("style"):s.style.cssText=e),s.__style=r}return o}var Me=J('<div class="qVal"> </div>'),Te=J('<main class="svelte-1sjg2gt"><h2> </h2> <div class="shell svelte-1sjg2gt"><div class="compass svelte-1sjg2gt"></div></div> <div class="message"> </div> <div class="quaternion"><!> <pre> </pre></div></main>');function Ce(s,r){_e(r,!0);let n="Compass",o=H(""),_=H(15),e=H(pe([]));function u(v,m=0){return Math.round(v*Math.pow(10,m))/Math.pow(10,m)}ge(()=>{if("AbsoluteOrientationSensor"in window)try{const v=new AbsoluteOrientationSensor({frequency:1,referenceFrame:"screen"});v.addEventListener("reading",()=>{S(e,v.quaternion,!0);const E=new DOMMatrixReadOnly([1-2*(a(e)[1]**2+a(e)[2]**2),2*(a(e)[0]*a(e)[1]-a(e)[2]*a(e)[3]),2*(a(e)[0]*a(e)[2]+a(e)[1]*a(e)[3]),0,2*(a(e)[0]*a(e)[1]+a(e)[2]*a(e)[3]),1-2*(a(e)[0]**2+a(e)[2]**2),2*(a(e)[1]*a(e)[2]-a(e)[0]*a(e)[3]),0,2*(a(e)[0]*a(e)[2]-a(e)[1]*a(e)[3]),2*(a(e)[1]*a(e)[2]+a(e)[0]*a(e)[3]),1-2*(a(e)[0]**2+a(e)[1]**2),0,0,0,0,1]).transformPoint({x:0,y:0,z:-1});S(_,u(a(e)[2],4),!0)}),v.addEventListener("error",m=>{console.error("Sensor error:",m),S(o,"error")}),v.start()}catch(v){console.error("Failed to initialize AbsoluteOrientationSensor:",v),S(o,"AbsoluteOrientationSensor is not supported or permission denied.")}else S(o,"AbsoluteOrientationSensor is not supported on this device")});var h=Te(),d=M(h),g=M(d);T(d);var t=q(d,2),c=M(t);T(t);var i=q(t,2),p=M(i,!0);T(i);var f=q(i,2),x=M(f);xe(x,17,()=>a(e),ye,(v,m)=>{var E=Me(),A=M(E,!0);T(E),Y(I=>C(A,I),[()=>u(a(m),4)]),L(v,E)});var y=q(x,2),l=M(y,!0);T(y),T(f),T(h),Y(v=>{C(g,`${n}: ${a(_)??""}`),we(c,`rotate: ${a(_)*100}(deg);`),C(p,a(o)),C(l,v)},[()=>JSON.stringify(a(e),0,2)]),L(s,h),he()}export{Ce as component};
