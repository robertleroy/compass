import{t as z,a as F}from"../chunks/kmXBJc2C.js";import{p as W,a as A,t as C,b as D,c as o,r as s,s as l}from"../chunks/CamXLuoX.js";import{s as n}from"../chunks/EAqsjLOL.js";import{o as L}from"../chunks/CM-aL1AQ.js";var O=z('<main class="svelte-1jefzxz"><h2> </h2> <div class="north"><div class="northY"> </div> <div class="northX"> </div></div> <div class="message"> </div></main>');function k(p,u){W(u,!0);let f="Compass",g="",x=A({frequency:60,referenceFrame:"screen"}),_=0,w="";function S(t){const[e,r,v,$]=t;let q=(Math.atan2(2*($*v+e*r),1-2*(r*r+v*v))*(180/Math.PI)+360)%360;return y(q)}function y(t){const e=["North","North-East","East","South-East","South","South-West","West","North-West","North"],r=Math.round(t/45)%8;return e[r]}L(()=>{if("AbsoluteOrientationSensor"in window){const t=new AbsoluteOrientationSensor(x);t.addEventListener("reading",()=>{const e=t.quaternion;if(e){const r=S(e);console.log(`Facing: ${r}`)}}),t.addEventListener("error",e=>{console.error("Sensor error:",e.error)}),t.start()}});var a=O(),i=o(a),E=o(i);s(i);var c=l(i,2),d=o(c),b=o(d);s(d);var h=l(d,2),M=o(h);s(h),s(c);var m=l(c,2),N=o(m,!0);s(m),s(a),C(()=>{n(E,`${f}:`),n(b,`degrees: ${_}`),n(M,`direction: ${w}`),n(N,g)}),F(p,a),D()}export{k as component};
