import{t as y,a as b}from"../chunks/Bd0yObkR.js";import{i as P,j as v,k as X,t as S,l as Y,m as d,n as r,o as n,q as o,u as l,v as B}from"../chunks/BVfEjWgp.js";import{s as i}from"../chunks/isRUiBKv.js";import{i as G}from"../chunks/B7LBtJVs.js";import{o as H}from"../chunks/BNM25E4z.js";var J=y('<div class="message"> </div>'),K=y('<main class="svelte-ftfmaa"><h2> </h2> <div class="north"><h2 class="northX"> </h2> <div class="northY"> </div></div> <div class="speedometer"> <sub>mph</sub></div> <!></main>');function ee(E,q){P(q,!0);let s=v(null),N="Compass",c=v(""),x=v(0),u=v(""),$=0,F=X({frequency:1,referenceFrame:"device"});function W(e,t=0){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}function k(e){const[t,a,_,I]=e;let M=360-(Math.atan2(2*(I*_+t*a),1-2*(a*a+_*_))*(180/Math.PI)+360)%360;return d(x,W(M),!0),A(M)}function A(e){const t=["N","NE","E","SE","S","SW","W","NW","N"],a=Math.round(e/45)%8;return t[a]}H(()=>{"AbsoluteOrientationSensor"in window?(d(s,new AbsoluteOrientationSensor(F),!0),r(s).addEventListener("reading",()=>{const e=r(s).quaternion;e&&(d(u,k(e),!0),console.log(`Facing: ${r(u)}`))}),r(s).addEventListener("error",e=>{console.error("Sensor error:",e.error)}),r(s).start()):d(c,"sensor not supported")});var m=K(),p=n(m),C=n(p);o(p);var h=l(p,2),f=n(h),D=n(f,!0);o(f);var w=l(f,2),L=n(w);o(w),o(h);var g=l(h,2),O=n(g);B(),o(g);var j=l(g,2);{var z=e=>{var t=J(),a=n(t,!0);o(t),S(()=>i(a,r(c))),b(e,t)};G(j,e=>{r(c).length>0&&e(z)})}o(m),S(()=>{i(C,`${N}:`),i(D,r(u)),i(L,`${r(x)??""}°`),i(O,`${$} `)}),b(E,m),Y()}export{ee as component};
