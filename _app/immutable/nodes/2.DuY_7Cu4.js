import{t as C,a as D}from"../chunks/BVDdzFVd.js";import{p as E,s as h,a as F,t as I,b as L,c as i,d as o,r as s,e as f,n as M,g}from"../chunks/BFEjTRN4.js";import{s as c}from"../chunks/Ch4auaXH.js";import{o as k}from"../chunks/DLyzZxiZ.js";var B=C('<main class="svelte-1sjg2gt"><h2> </h2> <div class="north"><div class="northX"> </div> <div class="northY"> </div></div> <div class="message"> </div> <div class="quaternion"></div></main>');function N(S,w){E(w,!0);let y="Compass",l=h(""),V=15;F([]);let x=h(0),_=h(0);function j(t){return[t[0],-t[1],-t[2],-t[3]]}function b(t,e){const a=t[0]*e[0]-t[1]*e[1]-t[2]*e[2]-t[3]*e[3],n=t[0]*e[1]+t[1]*e[0]+t[2]*e[3]-t[3]*e[2],m=t[0]*e[2]-t[1]*e[3]+t[2]*e[0]+t[3]*e[1],r=t[0]*e[3]+t[1]*e[2]-t[2]*e[1]+t[3]*e[0];return[a,n,m,r]}function z(t,e){const a=[0,e[0],e[1],e[2]],n=j(t),m=b(t,a),r=b(m,n);return[r[1],r[2],r[3]]}k(()=>{if("AbsoluteOrientationSensor"in window)try{const t=new AbsoluteOrientationSensor;t.addEventListener("reading",()=>{const e=t.quaternion,n=z(e,[0,1,0]);i(x,n[0],!0),i(_,n[1],!0)}),t.start()}catch(t){console.error("Failed to initialize AbsoluteOrientationSensor:",t),i(l,"AbsoluteOrientationSensor is not supported or permission denied.")}else i(l,"AbsoluteOrientationSensor is not supported on this device")});var d=B(),u=o(d),Q=o(u);s(u);var v=f(u,2),p=o(v),X=o(p,!0);s(p);var A=f(p,2),Y=o(A,!0);s(A),s(v);var O=f(v,2),$=o(O,!0);s(O),M(2),s(d),I(()=>{c(Q,`${y}: ${V}`),c(X,g(x)),c(Y,g(_)),c($,g(l))}),D(S,d),L()}export{N as component};
