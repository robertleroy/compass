import{t as D,a as L}from"../chunks/C06YIbpK.js";import{p as O,a as $,s as x,t as j,b as I,c as _,g as l,d as r,r as a,e as v}from"../chunks/fUOi5Kuw.js";import{s as n}from"../chunks/CAI48k2J.js";import{o as P}from"../chunks/g_mddpEM.js";var X=D('<main class="svelte-1jefzxz"><h2> </h2> <div class="north"><h2 class="northX"> </h2> <div class="northY"> </div></div> <div class="message"> </div></main>');function J(w,M){O(M,!0);let S="Compass",y="",E=$({frequency:1,referenceFrame:"device"}),p=x(0),s=x("");function b(e,t=0){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}function N(e){const[t,o,h,C]=e;let g=360-(Math.atan2(2*(C*h+t*o),1-2*(o*o+h*h))*(180/Math.PI)+360)%360;return _(p,b(g),!0),q(g)}function q(e){const t=["North","North-East","East","South-East","South","South-West","West","North-West","North"],o=Math.round(e/45)%8;return t[o]}P(()=>{if("AbsoluteOrientationSensor"in window){const e=new AbsoluteOrientationSensor(E);e.addEventListener("reading",()=>{const t=e.quaternion;t&&(_(s,N(t),!0),console.log(`Facing: ${l(s)}`))}),e.addEventListener("error",t=>{console.error("Sensor error:",t.error)}),e.start()}});var i=X(),c=r(i),z=r(c);a(c);var d=v(c,2),u=r(d),F=r(u,!0);a(u);var m=v(u,2),W=r(m,!0);a(m),a(d);var f=v(d,2),A=r(f,!0);a(f),a(i),j(()=>{n(z,`${S}:`),n(F,l(s)),n(W,l(p)),n(A,y)}),L(w,i),I()}export{J as component};
